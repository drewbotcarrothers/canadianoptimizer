'use client';

import { useMemo, useState } from 'react';
import { calculateRewards, type RewardCategory } from '@/lib/rewards-calculator';

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

const starter: RewardCategory[] = [
  { id: 'groceries', name: 'Groceries', annualSpend: 12000, earnRate: 5 },
  { id: 'dining', name: 'Dining', annualSpend: 3600, earnRate: 5 },
  { id: 'gas', name: 'Gas', annualSpend: 2400, earnRate: 2 },
  { id: 'other', name: 'Everything else', annualSpend: 10000, earnRate: 1 },
];

export default function RewardsCalculator() {
  const [categories, setCategories] = useState(starter);
  const [mode, setMode] = useState<'points' | 'cashback'>('points');
  const [pointValue, setPointValue] = useState('1');
  const [fee, setFee] = useState('120');

  const result = useMemo(() => {
    const pointValueCents = Number(pointValue);
    const annualFee = Number(fee);
    if (!Number.isFinite(pointValueCents) || !Number.isFinite(annualFee)) return null;
    return calculateRewards({ categories, mode, pointValueCents, annualFee });
  }, [categories, mode, pointValue, fee]);

  function update(id: string, patch: Partial<RewardCategory>) {
    setCategories((rows) => rows.map((row) => (row.id === id ? { ...row, ...patch } : row)));
  }

  return (
    <section
      aria-label="Credit card rewards calculator"
      data-testid="rewards-calculator"
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: '16px',
        padding: '24px',
        background: '#f8f9fa',
        margin: '8px 0 32px',
      }}
    >
      <h2 style={{ fontSize: '1.35rem', margin: '0 0 8px', color: '#333' }}>Rewards calculator</h2>
      <p style={{ margin: '0 0 16px', color: '#444', lineHeight: 1.6 }}>
        Type your own annual spend, earn rate, and what you think a point is worth. Nothing here is a card&apos;s
        published rate. Points mode multiplies spend by points per dollar by your cents-per-point. Cash-back mode
        treats the earn rate as a percent.
      </p>

      <div className="tax-calculator-fields">
        <label style={{ display: 'grid', gap: '6px', fontWeight: 600, color: '#333' }}>
          Reward type
          <select
            value={mode}
            onChange={(event) => setMode(event.target.value as 'points' | 'cashback')}
            data-testid="rewards-mode"
            style={fieldStyle}
          >
            <option value="points">Points per dollar</option>
            <option value="cashback">Cash back percent</option>
          </select>
        </label>
        <label style={{ display: 'grid', gap: '6px', fontWeight: 600, color: '#333' }}>
          {mode === 'points' ? 'Value of one point (cents)' : 'Point value (unused in cash-back mode)'}
          <input
            inputMode="decimal"
            value={pointValue}
            onChange={(event) => setPointValue(event.target.value)}
            data-testid="rewards-point-value"
            disabled={mode === 'cashback'}
            style={fieldStyle}
          />
        </label>
        <label style={{ display: 'grid', gap: '6px', fontWeight: 600, color: '#333' }}>
          Annual fee (CAD)
          <input
            inputMode="decimal"
            value={fee}
            onChange={(event) => setFee(event.target.value)}
            data-testid="rewards-fee"
            style={fieldStyle}
          />
        </label>
      </div>

      <div style={{ overflowX: 'auto', marginTop: '16px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '8px' }}>Category</th>
              <th style={{ textAlign: 'right', padding: '8px' }}>Annual spend</th>
              <th style={{ textAlign: 'right', padding: '8px' }}>{mode === 'points' ? 'Points per $1' : 'Cash back %'}</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((row) => (
              <tr key={row.id}>
                <td style={{ padding: '8px' }}>
                  <input
                    aria-label={`${row.name} category name`}
                    value={row.name}
                    onChange={(event) => update(row.id, { name: event.target.value })}
                    style={fieldStyle}
                  />
                </td>
                <td style={{ padding: '8px' }}>
                  <input
                    aria-label={`${row.name} annual spend`}
                    inputMode="decimal"
                    value={row.annualSpend}
                    data-testid={`rewards-spend-${row.id}`}
                    onChange={(event) => update(row.id, { annualSpend: Number(event.target.value) })}
                    style={fieldStyle}
                  />
                </td>
                <td style={{ padding: '8px' }}>
                  <input
                    aria-label={`${row.name} earn rate`}
                    inputMode="decimal"
                    value={row.earnRate}
                    data-testid={`rewards-rate-${row.id}`}
                    onChange={(event) => update(row.id, { earnRate: Number(event.target.value) })}
                    style={fieldStyle}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        type="button"
        onClick={() =>
          setCategories((rows) => [
            ...rows,
            { id: `row-${rows.length + 1}`, name: 'New category', annualSpend: 0, earnRate: 0 },
          ])
        }
        style={{ marginTop: '12px', padding: '8px 12px', borderRadius: '8px', border: '1px solid #ccc', background: '#fff' }}
      >
        Add a category
      </button>

      {result ? (
        <div data-testid="rewards-result" style={{ marginTop: '20px' }}>
          <p style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0 0 4px', color: '#d80621' }} data-testid="rewards-net">
            {cad(result.netValue)}
          </p>
          <p style={{ margin: '0 0 12px', color: '#333' }}>
            Net value after the annual fee. Gross rewards {cad(result.grossValue)} on {cad(result.totalSpend)} of spend.
            That is {(result.netOnSpend * 100).toFixed(2)}% of spend after the fee.
          </p>
          <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
            <tbody>
              {result.lines.map((line) => (
                <tr key={line.id}>
                  <th scope="row" style={{ textAlign: 'left', fontWeight: 500, padding: '8px', borderBottom: '1px solid #eee' }}>
                    {line.name}
                  </th>
                  <td style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #eee' }}>{cad(line.value)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p role="alert">Enter a fee of zero or more, and a point value of zero or more.</p>
      )}
    </section>
  );
}
