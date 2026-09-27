'use client';

import { useMemo, useState } from 'react';
import { compareRentVsBuy } from '@/lib/rent-vs-buy';

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

export default function RentVsBuyCalculator() {
  const [homePrice, setHomePrice] = useState('700000');
  const [downPayment, setDownPayment] = useState('140000');
  const [rate, setRate] = useState('4.5');
  const [amortYears, setAmortYears] = useState('25');
  const [horizonYears, setHorizonYears] = useState('10');
  const [appreciation, setAppreciation] = useState('2');
  const [propertyTax, setPropertyTax] = useState('0.6');
  const [maintenance, setMaintenance] = useState('1');
  const [insurance, setInsurance] = useState('1800');
  const [buyingCosts, setBuyingCosts] = useState('15000');
  const [sellingCost, setSellingCost] = useState('5');
  const [monthlyRent, setMonthlyRent] = useState('2800');
  const [rentGrowth, setRentGrowth] = useState('2');
  const [investmentReturn, setInvestmentReturn] = useState('5');

  const result = useMemo(
    () =>
      compareRentVsBuy({
        homePrice: Number(homePrice),
        downPayment: Number(downPayment),
        annualNominal: Number(rate) / 100,
        amortYears: Number(amortYears),
        horizonYears: Number(horizonYears),
        appreciation: Number(appreciation) / 100,
        propertyTaxRate: Number(propertyTax) / 100,
        maintenanceRate: Number(maintenance) / 100,
        annualInsurance: Number(insurance),
        buyingCosts: Number(buyingCosts),
        sellingCostRate: Number(sellingCost) / 100,
        monthlyRent: Number(monthlyRent),
        rentGrowth: Number(rentGrowth) / 100,
        investmentReturn: Number(investmentReturn) / 100,
      }),
    [
      homePrice,
      downPayment,
      rate,
      amortYears,
      horizonYears,
      appreciation,
      propertyTax,
      maintenance,
      insurance,
      buyingCosts,
      sellingCost,
      monthlyRent,
      rentGrowth,
      investmentReturn,
    ]
  );

  const fields: [string, string, (value: string) => void, string][] = [
    ['Home price', homePrice, setHomePrice, 'rvb-price'],
    ['Down payment', downPayment, setDownPayment, 'rvb-down'],
    ['Mortgage rate (%)', rate, setRate, 'rvb-rate'],
    ['Amortization (years)', amortYears, setAmortYears, 'rvb-amort'],
    ['Years you will stay', horizonYears, setHorizonYears, 'rvb-horizon'],
    ['Home appreciation (% per year)', appreciation, setAppreciation, 'rvb-appreciation'],
    ['Property tax (% of value per year)', propertyTax, setPropertyTax, 'rvb-tax'],
    ['Maintenance (% of value per year)', maintenance, setMaintenance, 'rvb-maintenance'],
    ['Home insurance per year', insurance, setInsurance, 'rvb-insurance'],
    ['Buying costs (land transfer, legal, inspection)', buyingCosts, setBuyingCosts, 'rvb-closing'],
    ['Selling costs (% of future value)', sellingCost, setSellingCost, 'rvb-selling'],
    ['Monthly rent', monthlyRent, setMonthlyRent, 'rvb-rent'],
    ['Rent growth (% per year)', rentGrowth, setRentGrowth, 'rvb-rent-growth'],
    ['Return on money not used to buy (% per year)', investmentReturn, setInvestmentReturn, 'rvb-return'],
  ];

  return (
    <section
      aria-label="Rent versus buy calculator"
      data-testid="rent-vs-buy-calculator"
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: '16px',
        padding: '24px',
        background: '#f8f9fa',
        margin: '8px 0 32px',
      }}
    >
      <h2 style={{ fontSize: '1.35rem', margin: '0 0 8px', color: '#333' }}>Rent versus buy</h2>
      <p style={{ margin: '0 0 16px', color: '#444', lineHeight: 1.6 }}>
        Every rate below is an assumption you can change. The mortgage uses Canadian semi-annual compounding. The
        renter invests the down payment, the buying costs, and any month where owning costs more than rent. If rent
        costs more, that difference comes out of the renter&apos;s portfolio.
      </p>
      <div className="tax-calculator-fields">
        {fields.map(([label, value, setter, testId]) => (
          <label key={testId} style={{ display: 'grid', gap: '6px', fontWeight: 600, color: '#333' }}>
            {label}
            <input inputMode="decimal" value={value} data-testid={testId} onChange={(event) => setter(event.target.value)} style={fieldStyle} />
          </label>
        ))}
      </div>
      {!result || result.neverPaysOff ? (
        <p role="alert" style={{ marginTop: '16px', color: '#b0051b' }}>
          Check the price, the down payment, and the rate. The payment has to cover the interest.
        </p>
      ) : (
        <div data-testid="rent-vs-buy-result" style={{ marginTop: '20px' }}>
          <p style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0 0 4px', color: '#d80621' }} data-testid="rvb-advantage">
            {cad(result.advantage)}
          </p>
          <p style={{ margin: '0 0 12px', color: '#333' }}>
            Buyer&apos;s ending wealth minus the renter&apos;s portfolio. Positive means buying finishes ahead on these
            assumptions. Mortgage payment {cad(result.mortgagePayment)} a month on {cad(result.mortgagePrincipal)}.
          </p>
          <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
            <tbody>
              {(
                [
                  ['Buyer net after selling costs and the remaining mortgage', result.buyerNet],
                  ['Renter portfolio', result.renterNet],
                  ['Home value at the end', result.endingHomeValue],
                  ['Mortgage still owing', result.endingMortgage],
                  ['Selling costs', result.sellingCosts],
                  ['Rent paid over the whole stay', result.totalRentPaid],
                  ['Cash the owner put in, including the down payment', result.totalOwnerCash],
                ] as const
              ).map(([label, amount]) => (
                <tr key={label}>
                  <th scope="row" style={{ textAlign: 'left', fontWeight: 500, padding: '8px', borderBottom: '1px solid #eee' }}>
                    {label}
                  </th>
                  <td style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #eee' }}>{cad(amount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
