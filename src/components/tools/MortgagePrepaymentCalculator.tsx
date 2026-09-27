'use client';

import { useMemo, useState } from 'react';
import { comparePrepayment } from '@/lib/mortgage-prepayment';

const fieldStyle = {
  fontWeight: 500,
  fontSize: '1rem',
  padding: '10px 12px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  background: '#fff',
  width: '100%',
} as const;

function cad(amount: number): string {
  return amount.toLocaleString('en-CA', { style: 'currency', currency: 'CAD' });
}

function duration(months: number): string {
  const years = Math.floor(months / 12);
  const rest = months % 12;
  return `${years} years ${rest} months (${months} payments)`;
}

export default function MortgagePrepaymentCalculator() {
  const [principal, setPrincipal] = useState('400000');
  const [rate, setRate] = useState('5');
  const [years, setYears] = useState('25');
  const [extra, setExtra] = useState('200');
  const [lump, setLump] = useState('5000');

  const result = useMemo(
    () =>
      comparePrepayment({
        principal: Number(principal),
        annualNominal: Number(rate) / 100,
        amortYears: Number(years),
        extraMonthly: Number(extra),
        annualLumpSum: Number(lump),
      }),
    [principal, rate, years, extra, lump]
  );

  const fields: [string, string, (value: string) => void, string][] = [
    ['Mortgage balance', principal, setPrincipal, 'prepay-principal'],
    ['Contract rate (%)', rate, setRate, 'prepay-rate'],
    ['Amortization (years)', years, setYears, 'prepay-years'],
    ['Extra amount added to every monthly payment', extra, setExtra, 'prepay-extra'],
    ['Lump sum once a year, on each anniversary payment', lump, setLump, 'prepay-lump'],
  ];

  const broken = result.baseline.neverPaysOff || result.withPrepayment.neverPaysOff;

  return (
    <section
      aria-label="Mortgage prepayment calculator"
      data-testid="mortgage-prepayment-calculator"
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: '16px',
        padding: '24px',
        background: '#f8f9fa',
        margin: '8px 0 32px',
      }}
    >
      <h2 style={{ fontSize: '1.35rem', margin: '0 0 8px', color: '#333' }}>Mortgage prepayment</h2>
      <p style={{ margin: '0 0 16px', color: '#444', lineHeight: 1.6 }}>
        The rate is converted the Canadian way: semi-annual compounding, not in advance, then a monthly payment. The
        contractual payment stays the same. Extra money shortens the time. This is not a penalty for breaking the
        term, and it does not know your annual prepayment privilege. Type only what the commitment lets you pay.
      </p>
      <div className="tax-calculator-fields">
        {fields.map(([label, value, setter, testId]) => (
          <label key={testId} style={{ display: 'grid', gap: '6px', fontWeight: 600, color: '#333' }}>
            {label}
            <input inputMode="decimal" value={value} data-testid={testId} onChange={(event) => setter(event.target.value)} style={fieldStyle} />
          </label>
        ))}
      </div>
      {broken ? (
        <p role="alert" style={{ marginTop: '16px', color: '#b0051b' }}>
          The payment does not cover the interest, so the balance does not fall. Raise the payment or lower the rate.
        </p>
      ) : (
        <div data-testid="mortgage-prepayment-result" style={{ marginTop: '20px' }}>
          <p style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0 0 4px', color: '#d80621' }} data-testid="prepay-saved">
            {cad(result.interestSaved)} interest saved
          </p>
          <p data-testid="prepay-summary" style={{ margin: '0 0 12px', color: '#333' }}>
            Contract payment {cad(result.baseline.payment)} a month. Without extras: {duration(result.baseline.months)}, interest{' '}
            {cad(result.baseline.totalInterest)}. With the extras: {duration(result.withPrepayment.months)}, interest{' '}
            {cad(result.withPrepayment.totalInterest)}. Time saved: {result.monthsSaved} months.
          </p>
        </div>
      )}
    </section>
  );
}
