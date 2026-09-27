'use client';

import { useMemo, useState } from 'react';
import {
  calculateIncomeTax,
  FEDERAL_BRACKETS,
  formatCad,
  formatPercent,
  PROVINCES,
  type ProvinceCode,
} from '@/lib/income-tax-2026';

function formatWhole(amount: number): string {
  return Math.round(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function bracketLabel(upTo: number, previous: number): string {
  if (!Number.isFinite(upTo)) return `Over $${formatWhole(previous)}`;
  if (previous === 0) return `$0 to $${formatWhole(upTo)}`;
  return `Over $${formatWhole(previous)} to $${formatWhole(upTo)}`;
}

export default function IncomeTaxCalculator() {
  const [rawIncome, setRawIncome] = useState('80000');
  const [province, setProvince] = useState<ProvinceCode>('ON');

  const income = Number(rawIncome.replace(/,/g, ''));
  const valid = Number.isFinite(income) && income >= 0 && income <= 10_000_000;

  const result = useMemo(
    () => (valid ? calculateIncomeTax(income, province) : null),
    [income, province, valid]
  );

  return (
    <section
      aria-label="2026 Canadian income tax calculator"
      data-testid="income-tax-calculator"
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: '16px',
        padding: '24px',
        background: '#f8f9fa',
        margin: '8px 0 32px',
      }}
    >
      <h2 style={{ fontSize: '1.35rem', margin: '0 0 8px', color: '#333' }}>
        2026 income tax calculator
      </h2>
      <p style={{ margin: '0 0 16px', color: '#444', lineHeight: 1.6 }}>
        Enter taxable income, not gross salary. The result is federal tax plus provincial or territorial
        tax after the basic personal amount. Ontario includes the surtax. Quebec includes the 16.5%
        federal abatement. As of September 2026.
      </p>

      <div className="tax-calculator-fields">
        <label style={{ display: 'grid', gap: '6px', fontWeight: 600, color: '#333' }}>
          Taxable income (CAD)
          <input
            inputMode="decimal"
            value={rawIncome}
            onChange={(event) => setRawIncome(event.target.value)}
            data-testid="tax-income-input"
            style={{
              fontWeight: 500,
              fontSize: '1rem',
              padding: '10px 12px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              background: '#fff',
            }}
          />
        </label>
        <label style={{ display: 'grid', gap: '6px', fontWeight: 600, color: '#333' }}>
          Province or territory on December 31
          <select
            value={province}
            onChange={(event) => setProvince(event.target.value as ProvinceCode)}
            data-testid="tax-province-select"
            style={{
              fontWeight: 500,
              fontSize: '1rem',
              padding: '10px 12px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              background: '#fff',
            }}
          >
            {PROVINCES.map((item) => (
              <option key={item.code} value={item.code}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      {!valid ? (
        <p role="alert" style={{ marginTop: '16px', color: '#b0051b' }}>
          Enter a taxable income from 0 to 10,000,000.
        </p>
      ) : result ? (
        <div data-testid="tax-result" style={{ marginTop: '20px' }}>
          <p style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0 0 4px', color: '#d80621' }}>
            {formatCad(result.totalTax)}
          </p>
          <p style={{ margin: '0 0 16px', color: '#333' }}>
            Combined tax on {formatCad(result.taxableIncome)} in {result.province.name}. Effective rate{' '}
            {formatPercent(result.effectiveRate)}. Marginal rate on the next dollar about{' '}
            {formatPercent(result.marginalRate)}.
          </p>
          <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
            <caption style={{ captionSide: 'bottom', textAlign: 'left', paddingTop: '8px', color: '#555' }}>
              Breakdown for {result.province.name}, tax year 2026. Basic personal amount only.
            </caption>
            <tbody>
              {[
                ['Federal tax before the basic personal amount', result.federalTaxBeforeCredit],
                [`Federal basic personal amount (${formatCad(result.federalBasicAmount)})`, result.federalCredit],
                ['Federal tax after the credit', result.federalTax + result.quebecAbatement],
                ...(province === 'QC'
                  ? [
                      ['Quebec abatement (16.5% of basic federal tax)', result.quebecAbatement] as const,
                      ['Federal tax after the abatement', result.federalTax] as const,
                    ]
                  : []),
                ['Provincial or territorial tax before the basic amount', result.provincialTaxBeforeCredit],
                [
                  `Provincial or territorial basic amount (${formatCad(result.provincialBasicAmount)})`,
                  result.provincialCredit,
                ] as const,
                ...(province === 'ON' ? [['Ontario surtax', result.ontarioSurtax] as const] : []),
                ['Provincial or territorial tax', result.provincialTax],
                ['Combined tax', result.totalTax],
              ].map(([label, amount]) => (
                  <tr key={String(label)}>
                    <th
                      scope="row"
                      style={{ textAlign: 'left', fontWeight: 500, padding: '8px', borderBottom: '1px solid #eee' }}
                    >
                      {label}
                    </th>
                    <td style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #eee' }}>
                      {formatCad(Number(amount))}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : null}

      <details style={{ marginTop: '16px' }}>
        <summary style={{ cursor: 'pointer', fontWeight: 700 }}>Brackets used</summary>
        <p style={{ margin: '8px 0', color: '#444' }}>
          Federal brackets apply in every province. The second table is only the province or territory selected above.
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '8px', background: '#fff' }}>
          <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '8px', color: '#555' }}>
            Federal brackets, 2026
          </caption>
          <tbody>
            {FEDERAL_BRACKETS.map((bracket, index, list) => {
              const previous = index === 0 ? 0 : list[index - 1].upTo;
              return (
                <tr key={`fed-${bracket.upTo}`}>
                  <td style={{ padding: '8px', borderTop: '1px solid #eee' }}>{bracketLabel(bracket.upTo, previous)}</td>
                  <td style={{ padding: '8px', borderTop: '1px solid #eee', textAlign: 'right' }}>
                    {formatPercent(bracket.rate)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '12px', background: '#fff' }}>
          <caption style={{ captionSide: 'bottom', textAlign: 'left', padding: '8px', color: '#555' }}>
            {PROVINCES.find((item) => item.code === province)?.name} brackets, 2026
          </caption>
          <tbody>
            {(PROVINCES.find((item) => item.code === province)?.brackets ?? []).map((bracket, index, list) => {
              const previous = index === 0 ? 0 : list[index - 1].upTo;
              return (
                <tr key={`${bracket.upTo}-${bracket.rate}`}>
                  <td style={{ padding: '8px', borderTop: '1px solid #eee' }}>{bracketLabel(bracket.upTo, previous)}</td>
                  <td style={{ padding: '8px', borderTop: '1px solid #eee', textAlign: 'right' }}>
                    {formatPercent(bracket.rate)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </details>

      <p style={{ margin: '16px 0 0', color: '#555', fontSize: '0.92rem', lineHeight: 1.5 }}>
        Not included: CPP and EI, the Canada employment amount, age and spouse amounts, the Ontario
        health premium, the Ontario tax reduction, dividend gross-up, or donation and medical credits.
        British Columbia uses the 5.60% annual rate, not the 6.14% July withholding rate. Prince Edward
        Island follows CRA&apos;s 2026 annual thresholds (19% over $142,250). Confirm before you file.
      </p>
    </section>
  );
}
