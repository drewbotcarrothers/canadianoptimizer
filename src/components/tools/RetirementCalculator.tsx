'use client';

import { useMemo, useState } from 'react';
import { projectRetirement } from '@/lib/retirement-calculator';

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

export default function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState('40');
  const [retirementAge, setRetirementAge] = useState('65');
  const [planAge, setPlanAge] = useState('90');
  const [rrspBalance, setRrspBalance] = useState('100000');
  const [tfsaBalance, setTfsaBalance] = useState('40000');
  const [rrspContribution, setRrspContribution] = useState('10000');
  const [tfsaContribution, setTfsaContribution] = useState('7000');
  const [nominalReturn, setNominalReturn] = useState('5');
  const [inflation, setInflation] = useState('2');
  const [cppAnnual, setCppAnnual] = useState('10000');
  const [oasAnnual, setOasAnnual] = useState('8000');
  const [cppStartAge, setCppStartAge] = useState('65');
  const [oasStartAge, setOasStartAge] = useState('65');
  const [spending, setSpending] = useState('50000');
  const [rrspTaxRate, setRrspTaxRate] = useState('25');

  const result = useMemo(() => {
    const nominal = Number(nominalReturn) / 100;
    const infl = Number(inflation) / 100;
    const tax = Number(rrspTaxRate) / 100;
    return projectRetirement({
      currentAge: Number(currentAge),
      retirementAge: Number(retirementAge),
      planAge: Number(planAge),
      rrspBalance: Number(rrspBalance),
      tfsaBalance: Number(tfsaBalance),
      rrspContribution: Number(rrspContribution),
      tfsaContribution: Number(tfsaContribution),
      nominalReturn: nominal,
      inflation: infl,
      cppAnnual: Number(cppAnnual),
      oasAnnual: Number(oasAnnual),
      cppStartAge: Number(cppStartAge),
      oasStartAge: Number(oasStartAge),
      spending: Number(spending),
      rrspTaxRate: tax,
    });
  }, [
    currentAge,
    retirementAge,
    planAge,
    rrspBalance,
    tfsaBalance,
    rrspContribution,
    tfsaContribution,
    nominalReturn,
    inflation,
    cppAnnual,
    oasAnnual,
    cppStartAge,
    oasStartAge,
    spending,
    rrspTaxRate,
  ]);

  const fields: [string, string, (value: string) => void, string][] = [
    ['Current age', currentAge, setCurrentAge, 'ret-current-age'],
    ['Retirement age', retirementAge, setRetirementAge, 'ret-retirement-age'],
    ['Planning age', planAge, setPlanAge, 'ret-plan-age'],
    ['RRSP balance today', rrspBalance, setRrspBalance, 'ret-rrsp-balance'],
    ['TFSA balance today', tfsaBalance, setTfsaBalance, 'ret-tfsa-balance'],
    ['Annual RRSP contribution', rrspContribution, setRrspContribution, 'ret-rrsp-contrib'],
    ['Annual TFSA contribution', tfsaContribution, setTfsaContribution, 'ret-tfsa-contrib'],
    ['Expected return before inflation (%)', nominalReturn, setNominalReturn, 'ret-return'],
    ['Inflation (%)', inflation, setInflation, 'ret-inflation'],
    ['CPP you expect, per year, today\'s dollars', cppAnnual, setCppAnnual, 'ret-cpp'],
    ['OAS you expect, per year, today\'s dollars', oasAnnual, setOasAnnual, 'ret-oas'],
    ['Age CPP starts', cppStartAge, setCppStartAge, 'ret-cpp-age'],
    ['Age OAS starts', oasStartAge, setOasStartAge, 'ret-oas-age'],
    ['Annual spending in today\'s dollars', spending, setSpending, 'ret-spending'],
    ['Tax rate on RRSP withdrawals (%)', rrspTaxRate, setRrspTaxRate, 'ret-tax'],
  ];

  return (
    <section
      aria-label="Canadian retirement calculator"
      data-testid="retirement-calculator"
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: '16px',
        padding: '24px',
        background: '#f8f9fa',
        margin: '8px 0 32px',
      }}
    >
      <h2 style={{ fontSize: '1.35rem', margin: '0 0 8px', color: '#333' }}>Retirement calculator</h2>
      <p style={{ margin: '0 0 16px', color: '#444', lineHeight: 1.6 }}>
        CPP and OAS start at whatever you type. The maximums on the Canada.ca pages linked in this article are not
        your pension, and this tool will not fill them in for you. Contributions are added at the end of each working
        year. Returns are converted to a real rate, so the dollars stay in today&apos;s purchasing power.
      </p>
      <div className="tax-calculator-fields">
        {fields.map(([label, value, setter, testId]) => (
          <label key={testId} style={{ display: 'grid', gap: '6px', fontWeight: 600, color: '#333' }}>
            {label}
            <input inputMode="decimal" value={value} data-testid={testId} onChange={(event) => setter(event.target.value)} style={fieldStyle} />
          </label>
        ))}
      </div>
      {!result ? (
        <p role="alert" style={{ marginTop: '16px', color: '#b0051b' }}>
          Check the ages, and keep the RRSP tax rate below 100 percent.
        </p>
      ) : (
        <div data-testid="retirement-result" style={{ marginTop: '20px' }}>
          <p style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0 0 4px', color: '#d80621' }} data-testid="retirement-nest-egg">
            {cad(result.combinedAtRetirement)}
          </p>
          <p style={{ margin: '0 0 12px', color: '#333' }}>
            Combined RRSP and TFSA at retirement, in today&apos;s dollars, after {result.yearsToRetirement} years.
            Real return about {(result.realReturn * 100).toFixed(2)}%. RRSP {cad(result.rrspAtRetirement)}. TFSA{' '}
            {cad(result.tfsaAtRetirement)}.
          </p>
          {result.firstYear ? (
            <p data-testid="retirement-first-year">
              First retirement year, age {result.firstYear.age}: CPP {cad(result.firstYear.cpp)}, OAS{' '}
              {cad(result.firstYear.oas)}, TFSA withdrawal {cad(result.firstYear.tfsaWithdrawal)}, RRSP withdrawn{' '}
              {cad(result.firstYear.rrspGross)} gross ({cad(result.firstYear.rrspNet)} after the tax rate you entered),
              shortfall {cad(result.firstYear.shortfall)}.
            </p>
          ) : null}
          <p data-testid="retirement-ending">
            {result.shortfallAge === null
              ? `No shortfall through age ${result.ending?.age}. Balance at the end of that year: ${cad(result.planAgeBalance)}.`
              : `Spending is not fully covered starting at age ${result.shortfallAge}. Balance at the end of age ${result.ending?.age}: ${cad(result.planAgeBalance)}.`}
          </p>
        </div>
      )}
    </section>
  );
}
