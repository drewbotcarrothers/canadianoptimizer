'use client';

import { useMemo, useState } from 'react';
import { emergencyFund, EI_MAX_WEEKLY, WAIVER_ENDS } from '@/lib/emergency-fund';

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
  return amount.toLocaleString('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
}

export default function EmergencyFundCalculator() {
  const [essentials, setEssentials] = useState('3200');
  const [months, setMonths] = useState('6');
  const [other, setOther] = useState('0');
  const [eligible, setEligible] = useState(true);
  const [earnings, setEarnings] = useState('55000');
  const [weeks, setWeeks] = useState('14');
  const [tax, setTax] = useState('15');
  const [lump, setLump] = useState('0');
  const [saved, setSaved] = useState('0');
  const [waived, setWaived] = useState(true);

  const r = useMemo(
    () =>
      emergencyFund({
        essentialsMonthly: Number(essentials),
        months: Number(months),
        otherIncomeMonthly: Number(other),
        eiEligible: eligible,
        insurableEarnings: Number(earnings),
        eiWeeks: Number(weeks),
        eiTaxShare: Number(tax) / 100,
        lumpSums: Number(lump),
        savedNow: Number(saved),
        waitingWeekWaived: waived,
      }),
    [essentials, months, other, eligible, earnings, weeks, tax, lump, saved, waived]
  );

  const fields: [string, string, (value: string) => void, string, boolean][] = [
    ['Essential spending per month (housing, food, transport, insurance, minimum debt payments)', essentials, setEssentials, 'ef-essentials', true],
    ['Months without a paycheque you want to cover', months, setMonths, 'ef-months', true],
    ['Income that keeps coming in per month (a partner’s take-home pay, pension)', other, setOther, 'ef-other', true],
    ['Insurable earnings in the last year (gross pay)', earnings, setEarnings, 'ef-earnings', eligible],
    ['EI weeks you expect (14 to 45, or up to 65 for long-tenured workers; use 14 if unsure)', weeks, setWeeks, 'ef-weeks', eligible],
    ['Share of EI you expect to lose to tax (%)', tax, setTax, 'ef-tax', eligible],
    ['Severance or other lump sums you are sure to receive', lump, setLump, 'ef-lump', true],
    ['Cash you already have set aside', saved, setSaved, 'ef-saved', true],
  ];

  return (
    <section
      aria-label="Emergency fund calculator"
      data-testid="emergency-fund-calculator"
      style={{ border: '1px solid #e5e7eb', borderRadius: '16px', padding: '24px', background: '#f8f9fa', margin: '8px 0 32px' }}
    >
      <h2 style={{ fontSize: '1.35rem', margin: '0 0 8px', color: '#333' }}>Emergency fund calculator</h2>
      <p style={{ margin: '0 0 16px', color: '#444', lineHeight: 1.6 }}>
        EI is estimated at 55% of your average weekly earnings, up to {cad(EI_MAX_WEEKLY)} a week in 2026. Service Canada
        decides the real amount and the number of weeks. Leave EI off if you are self-employed or would quit rather than be
        laid off.
      </p>
      <label style={{ display: 'flex', gap: '8px', alignItems: 'center', fontWeight: 600, color: '#333', marginBottom: '12px' }}>
        <input type="checkbox" checked={eligible} data-testid="ef-ei" onChange={(e) => setEligible(e.target.checked)} />
        I would likely qualify for EI regular benefits
      </label>
      {eligible ? (
        <label style={{ display: 'flex', gap: '8px', alignItems: 'center', fontWeight: 600, color: '#333', marginBottom: '12px' }}>
          <input type="checkbox" checked={waived} data-testid="ef-waived" onChange={(e) => setWaived(e.target.checked)} />
          One-week waiting period waived (claims starting by {WAIVER_ENDS})
        </label>
      ) : null}
      <div className="tax-calculator-fields">
        {fields
          .filter(([, , , , show]) => show)
          .map(([label, value, setter, testId]) => (
            <label key={testId} style={{ display: 'grid', gap: '6px', fontWeight: 600, color: '#333' }}>
              {label}
              <input inputMode="decimal" value={value} data-testid={testId} onChange={(event) => setter(event.target.value)} style={fieldStyle} />
            </label>
          ))}
      </div>
      <div data-testid="emergency-fund-result" style={{ marginTop: '20px' }}>
        <p style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0 0 4px', color: '#d80621' }} data-testid="ef-target">
          {cad(r.target)} emergency fund target
        </p>
        <p data-testid="ef-summary" style={{ margin: '0 0 8px', color: '#333', lineHeight: 1.6 }}>
          Essentials for {Number(months) || 0} months: {cad(r.spending)}. Other income covers {cad(r.otherIncome)}.
          {eligible ? ` EI of about ${cad(r.weeklyEi)} a week for ${Math.round(r.paidWeeks)} paid weeks adds ${cad(r.eiNet)} after tax.` : ' No EI counted.'}{' '}
          Without EI you would need {cad(r.withoutEi)}. Cash to bridge the first four weeks before EI pays: {cad(r.bridge)}.
        </p>
        <p data-testid="ef-shortfall" style={{ margin: 0, color: '#333', fontWeight: 600 }}>
          {r.shortfall > 0 ? `Still to save: ${cad(r.shortfall)}.` : 'Your savings already cover this target.'}
        </p>
      </div>
    </section>
  );
}
