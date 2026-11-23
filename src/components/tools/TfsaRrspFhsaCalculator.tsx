'use client';

import { useMemo, useState } from 'react';
import {
  ceilingSentence,
  compareAccounts,
  type ComparisonResult,
} from '@/lib/account-comparison';
import {
  FHSA_ANNUAL_LIMIT,
  FHSA_CARRYFORWARD_CAP,
  FHSA_LIFETIME_LIMIT,
  TFSA_LATEST_ANNUAL_LIMIT,
  TFSA_LATEST_PUBLISHED_YEAR,
} from '@/data/registered-account-limits';
import { NOT_YET_ANNOUNCED_CRA } from '@/data/source-review';
import { formatDollars } from '@/lib/money';

type Row = {
  label: string;
  tfsa: string;
  rrsp: string;
  fhsa: string;
};

function money(amount: number): string {
  return formatDollars(amount, true);
}

function rowsFor(result: ComparisonResult): Row[] {
  const fhsa = result.fhsa;
  return [
    {
      label: 'Deposited over the period',
      tfsa: money(result.tfsa.deposited),
      rrsp: money(result.rrsp.deposited),
      fhsa: fhsa ? money(fhsa.deposited) : 'Not in this comparison',
    },
    {
      label: 'Pre-tax dollars that did not fit',
      tfsa: money(result.tfsa.excludedPreTax),
      rrsp: money(result.rrsp.excludedPreTax),
      fhsa: fhsa ? money(fhsa.excludedPreTax) : '—',
    },
    {
      label: 'Future value before withdrawal tax',
      tfsa: money(result.tfsa.futureValue),
      rrsp: money(result.rrsp.futureValue),
      fhsa: fhsa ? money(fhsa.futureValue) : '—',
    },
    {
      label: 'Tax on withdrawal',
      tfsa: money(result.tfsa.withdrawalTax),
      rrsp: money(result.rrsp.withdrawalTax),
      fhsa: fhsa ? money(fhsa.withdrawalTax) : '—',
    },
    {
      label: 'After tax',
      tfsa: money(result.tfsa.afterTax),
      rrsp: money(result.rrsp.afterTax),
      fhsa: fhsa ? money(fhsa.afterTax) : '—',
    },
  ];
}

function parseRate(raw: string): number | null {
  const value = Number(raw.replace(/,/g, ''));
  if (!Number.isFinite(value) || value < 0 || value > 60) return null;
  return value / 100;
}

function parseMoney(raw: string): number | null {
  if (raw.trim() === '') return null;
  const value = Number(raw.replace(/[$,\s]/g, ''));
  if (!Number.isFinite(value) || value < 0 || value > 1_000_000) return null;
  return value;
}

function parseYears(raw: string): number | null {
  const value = Number(raw);
  if (!Number.isInteger(value) || value < 1 || value > 40) return null;
  return value;
}

const fieldClass =
  'font-medium text-base px-3 py-2 rounded-lg border border-gray-300 bg-white w-full';

export default function TfsaRrspFhsaCalculator() {
  const [currentRaw, setCurrentRaw] = useState('30');
  const [retirementRaw, setRetirementRaw] = useState('20');
  const [contributionRaw, setContributionRaw] = useState('8000');
  const [yearsRaw, setYearsRaw] = useState('10');
  const [returnRaw, setReturnRaw] = useState('5');
  const [earnedRaw, setEarnedRaw] = useState('');
  const [firstTime, setFirstTime] = useState(true);

  const currentMarginalRate = parseRate(currentRaw);
  const retirementMarginalRate = parseRate(retirementRaw);
  const annualContribution = parseMoney(contributionRaw);
  const years = parseYears(yearsRaw);
  const annualReturn = parseRate(returnRaw);
  const earnedBlank = earnedRaw.trim() === '';
  const priorYearEarnedIncome = earnedBlank ? null : parseMoney(earnedRaw);

  const problems: string[] = [];
  if (currentMarginalRate == null) problems.push('Current marginal rate must be from 0 to 60 percent.');
  if (retirementMarginalRate == null) problems.push('Retirement marginal rate must be from 0 to 60 percent.');
  if (annualContribution == null) problems.push('Annual contribution must be from $0 to $1,000,000.');
  if (years == null) problems.push('Years must be a whole number from 1 to 40.');
  if (annualReturn == null) problems.push('Expected return must be from 0 to 60 percent.');
  if (!earnedBlank && priorYearEarnedIncome == null) problems.push('Prior-year earned income must be a dollar amount, or leave it blank.');

  const result = useMemo(() => {
    if (
      currentMarginalRate == null ||
      retirementMarginalRate == null ||
      annualContribution == null ||
      years == null ||
      annualReturn == null ||
      (!earnedBlank && priorYearEarnedIncome == null)
    ) {
      return null;
    }
    return compareAccounts({
      currentMarginalRate,
      retirementMarginalRate,
      annualContribution,
      years,
      annualReturn,
      firstTimeHomeBuyer: firstTime,
      priorYearEarnedIncome,
    });
  }, [
    currentMarginalRate,
    retirementMarginalRate,
    annualContribution,
    years,
    annualReturn,
    firstTime,
    earnedBlank,
    priorYearEarnedIncome,
  ]);

  return (
    <section aria-label="TFSA, RRSP, and FHSA comparison" className="bg-light-slate border border-gray-200 rounded-2xl p-5 md:p-6 mb-10">
      <h2 className="text-2xl font-bold text-charcoal mb-2">Compare one contribution</h2>
      <p className="text-gray-700 mb-4">
        The numbers in the fields are an example you can replace. They are not a tax rate, a limit, or an expected return. The contribution is pre-tax dollars per year.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <label className="grid gap-1 font-semibold text-charcoal">
          Current marginal rate (%)
          <input className={fieldClass} inputMode="decimal" value={currentRaw} onChange={(event) => setCurrentRaw(event.target.value)} />
        </label>
        <label className="grid gap-1 font-semibold text-charcoal">
          Expected retirement marginal rate (%)
          <input className={fieldClass} inputMode="decimal" value={retirementRaw} onChange={(event) => setRetirementRaw(event.target.value)} />
        </label>
        <label className="grid gap-1 font-semibold text-charcoal">
          Annual contribution, pre-tax ($)
          <input className={fieldClass} inputMode="decimal" value={contributionRaw} onChange={(event) => setContributionRaw(event.target.value)} />
        </label>
        <label className="grid gap-1 font-semibold text-charcoal">
          Years
          <input className={fieldClass} inputMode="numeric" value={yearsRaw} onChange={(event) => setYearsRaw(event.target.value)} />
        </label>
        <label className="grid gap-1 font-semibold text-charcoal">
          Expected annual return (%)
          <input className={fieldClass} inputMode="decimal" value={returnRaw} onChange={(event) => setReturnRaw(event.target.value)} />
        </label>
        <label className="grid gap-1 font-semibold text-charcoal">
          Prior-year earned income ($, optional)
          <input className={fieldClass} inputMode="decimal" value={earnedRaw} onChange={(event) => setEarnedRaw(event.target.value)} placeholder="Blank skips the 18% test" />
        </label>
      </div>
      <label className="flex items-start gap-2 font-semibold text-charcoal mb-4">
        <input type="checkbox" className="mt-1" checked={firstTime} onChange={(event) => setFirstTime(event.target.checked)} />
        <span>Eligible to use an FHSA for a qualifying home withdrawal</span>
      </label>

      {problems.length > 0 ? (
        <ul className="text-canadian-red mb-4 list-disc pl-5">
          {problems.map((problem) => (
            <li key={problem}>{problem}</li>
          ))}
        </ul>
      ) : null}

      {result ? (
        <>
          <p className="text-gray-800 leading-relaxed mb-4">{result.narrative}</p>
          <div className="overflow-x-auto bg-white rounded-xl border border-gray-200">
            <table className="w-full text-sm border-collapse">
              <caption className="text-left font-semibold text-charcoal px-3 pt-3">
                After-tax outcome on the numbers in the fields
              </caption>
              <thead>
                <tr className="border-b border-gray-200 text-left">
                  <th scope="col" className="py-2 px-3">Result</th>
                  <th scope="col" className="py-2 px-3">TFSA</th>
                  <th scope="col" className="py-2 px-3">RRSP</th>
                  <th scope="col" className="py-2 px-3">FHSA</th>
                </tr>
              </thead>
              <tbody>
                {rowsFor(result).map((row) => (
                  <tr key={row.label} className="border-b border-gray-100">
                    <th scope="row" className="py-2 px-3 font-medium text-left">{row.label}</th>
                    <td className="py-2 px-3">{row.tfsa}</td>
                    <td className="py-2 px-3">{row.rrsp}</td>
                    <td className="py-2 px-3">{row.fhsa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="text-sm text-gray-700 mt-4 space-y-2 list-disc pl-5">
            <li>
              TFSA deposits are capped at the latest official annual limit, {formatDollars(TFSA_LATEST_ANNUAL_LIMIT)} for {TFSA_LATEST_PUBLISHED_YEAR}. {NOT_YET_ANNOUNCED_CRA}. This tool does not assume a 2027 figure, so every year uses that {TFSA_LATEST_PUBLISHED_YEAR} cap. That is a ceiling from the last official limit, not a prediction that the limit stays there.
            </li>
            <li>{ceilingSentence(result, priorYearEarnedIncome)}</li>
            <li>
              FHSA deposits use an opening room of {formatDollars(FHSA_ANNUAL_LIMIT)}, carry unused room forward up to {formatDollars(FHSA_CARRYFORWARD_CAP)}, and stop at the {formatDollars(FHSA_LIFETIME_LIMIT)} lifetime limit. The same contribution is repeated every year, so one year never deposits more than {formatDollars(FHSA_ANNUAL_LIMIT)}. The {formatDollars(FHSA_ANNUAL_LIMIT + FHSA_CARRYFORWARD_CAP)} year on the CRA page follows a year you did not use, which this tool does not ask you to enter. Excess amounts and re-participation room are not modelled.
            </li>
          </ul>
        </>
      ) : null}
    </section>
  );
}
