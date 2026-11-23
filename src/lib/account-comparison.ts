/**
 * After-tax comparison of a pre-tax contribution to a TFSA, an RRSP, and
 * (when the reader says they are eligible) an FHSA used for a qualifying
 * withdrawal. Caps come only from registered-account-limits.ts.
 *
 * The return and both marginal rates are inputs. This file does not forecast
 * a limit, a rate, or a market return.
 */
import {
  FHSA_ANNUAL_LIMIT,
  FHSA_CARRYFORWARD_CAP,
  FHSA_LIFETIME_LIMIT,
  RRSP_DOLLAR_LIMIT_2027,
  RRSP_EARNED_INCOME_FRACTION,
  TFSA_LATEST_ANNUAL_LIMIT,
} from '@/data/registered-account-limits';
import { formatDollars, formatRate } from '@/lib/money';

export type ComparisonInput = {
  /** Decimal. Tax on the dollar before it can go into a TFSA. */
  currentMarginalRate: number;
  /** Decimal. Tax on an RRSP withdrawal, and on a taxable FHSA withdrawal. */
  retirementMarginalRate: number;
  /** Pre-tax dollars set aside each year. */
  annualContribution: number;
  years: number;
  /** Decimal annual return, compounded once a year. */
  annualReturn: number;
  firstTimeHomeBuyer: boolean;
  /** When set, the RRSP ceiling is also 18% of this amount. */
  priorYearEarnedIncome: number | null;
};

export type AccountProjection = {
  deposited: number;
  /** Pre-tax dollars that did not go into the account because a limit bound. */
  excludedPreTax: number;
  futureValue: number;
  withdrawalTax: number;
  afterTax: number;
};

export type ComparisonResult = {
  tfsa: AccountProjection;
  rrsp: AccountProjection;
  fhsa: AccountProjection | null;
  rrspAnnualCeiling: number;
  rrspUsesEarnedIncome: boolean;
  narrative: string;
};

function roundCents(amount: number): number {
  return Math.round((amount + Number.EPSILON) * 100) / 100;
}

function grow(deposits: number[], annualReturn: number, years: number): number {
  return deposits.reduce((sum, deposit, index) => {
    const yearsInvested = years - index;
    return sum + deposit * (1 + annualReturn) ** yearsInvested;
  }, 0);
}

export function rrspAnnualCeiling(priorYearEarnedIncome: number | null): {
  ceiling: number;
  usesEarnedIncome: boolean;
} {
  if (priorYearEarnedIncome == null || !Number.isFinite(priorYearEarnedIncome) || priorYearEarnedIncome < 0) {
    return { ceiling: RRSP_DOLLAR_LIMIT_2027, usesEarnedIncome: false };
  }
  const fromIncome = roundCents(priorYearEarnedIncome * RRSP_EARNED_INCOME_FRACTION);
  return {
    ceiling: Math.min(RRSP_DOLLAR_LIMIT_2027, fromIncome),
    usesEarnedIncome: true,
  };
}

/**
 * FHSA room for someone who never has an excess amount.
 * Year 1 room is the annual limit. Unused room carries forward, capped at
 * the official carryforward cap, and lifetime contributions stop at the
 * lifetime limit.
 */
export function fhsaDeposits(annualPreTax: number, years: number): number[] {
  let carry = 0;
  let used = 0;
  const deposits: number[] = [];
  for (let year = 0; year < years; year += 1) {
    const room = Math.min(FHSA_ANNUAL_LIMIT + carry, Math.max(0, FHSA_LIFETIME_LIMIT - used));
    const deposit = Math.min(Math.max(0, annualPreTax), room);
    deposits.push(deposit);
    carry = Math.min(FHSA_CARRYFORWARD_CAP, room - deposit);
    used += deposit;
  }
  return deposits;
}

function project(deposits: number[], annualReturn: number, years: number, withdrawalRate: number, excludedPreTax: number): AccountProjection {
  const futureValue = roundCents(grow(deposits, annualReturn, years));
  const withdrawalTax = roundCents(futureValue * withdrawalRate);
  return {
    deposited: roundCents(deposits.reduce((sum, value) => sum + value, 0)),
    excludedPreTax: roundCents(excludedPreTax),
    futureValue,
    withdrawalTax,
    afterTax: roundCents(futureValue - withdrawalTax),
  };
}

function narrative(input: ComparisonInput, result: Omit<ComparisonResult, 'narrative'>): string {
  const candidates = [
    { name: 'TFSA', afterTax: result.tfsa.afterTax },
    { name: 'RRSP', afterTax: result.rrsp.afterTax },
    ...(result.fhsa ? [{ name: 'FHSA', afterTax: result.fhsa.afterTax }] : []),
  ];
  const best = Math.max(...candidates.map((item) => item.afterTax));
  const leaders = candidates.filter((item) => Math.abs(item.afterTax - best) < 1).map((item) => `the ${item.name}`);
  const leaderText =
    leaders.length <= 1
      ? leaders[0] ?? 'none'
      : `${leaders.slice(0, -1).join(', ')}${leaders.length > 2 ? ',' : ''} and ${leaders[leaders.length - 1]}`;
  const verb = leaders.length === 1 ? 'finishes' : 'finish';

  const ratesTied = Math.abs(input.currentMarginalRate - input.retirementMarginalRate) < 0.000_001;
  const capsBound = result.tfsa.excludedPreTax > 0 || result.rrsp.excludedPreTax > 0;
  const rateSentence = capsBound
    ? 'A dollar limit cut at least one of the contributions, so the rate gap is not the whole result.'
    : ratesTied
      ? 'The two rates you typed are the same, and the limits did not cut the TFSA or the RRSP, so those two finish together. The RRSP deducts the contribution now and taxes the withdrawal later. The TFSA does the reverse.'
      : input.retirementMarginalRate < input.currentMarginalRate
        ? 'The retirement rate you typed is lower than the current rate, so the RRSP keeps more than the TFSA. The deduction is taken at the higher rate and the withdrawal is taxed at the lower one.'
        : 'The retirement rate you typed is higher than the current rate, so the TFSA keeps more than the RRSP. You pay tax now at the lower rate and the withdrawal is not taxed.';

  const fhsaSentence = !result.fhsa
    ? 'The FHSA column is off because the first-time home buyer field is no. The CRA also requires every qualifying-withdrawal condition, which is a separate test from opening the account.'
    : result.fhsa.excludedPreTax > 0
      ? `Part of the contribution did not fit in the FHSA (${formatDollars(result.fhsa.excludedPreTax, true)} pre-tax over the period), because of the annual room and the ${formatDollars(FHSA_LIFETIME_LIMIT)} lifetime limit. The FHSA result is only the dollars that fit, withdrawn as a qualifying withdrawal and not taxed. A withdrawal that misses the CRA conditions is taxable instead.`
      : 'The FHSA column is a qualifying withdrawal: the contribution is deductible and the withdrawal is not included in income, which is what the CRA describes when every qualifying-withdrawal condition is met. A withdrawal that misses those conditions is taxable.';

  return `On these inputs, ${leaderText} ${verb} with the most after tax, ${formatDollars(best, true)}. ${rateSentence} ${fhsaSentence}`;
}

export function compareAccounts(input: ComparisonInput): ComparisonResult {
  const years = input.years;
  const { ceiling, usesEarnedIncome } = rrspAnnualCeiling(input.priorYearEarnedIncome);

  const tfsaDeposits: number[] = [];
  let tfsaExcluded = 0;
  const rrspDeposits: number[] = [];
  let rrspExcluded = 0;
  const keep = 1 - input.currentMarginalRate;

  for (let year = 0; year < years; year += 1) {
    const afterTaxCash = input.annualContribution * keep;
    const tfsaDeposit = Math.min(Math.max(0, afterTaxCash), TFSA_LATEST_ANNUAL_LIMIT);
    const preTaxUsedForTfsa = keep > 0 ? tfsaDeposit / keep : 0;
    tfsaDeposits.push(tfsaDeposit);
    tfsaExcluded += input.annualContribution - preTaxUsedForTfsa;

    const rrspDeposit = Math.min(Math.max(0, input.annualContribution), ceiling);
    rrspDeposits.push(rrspDeposit);
    rrspExcluded += input.annualContribution - rrspDeposit;
  }

  const tfsa = project(tfsaDeposits, input.annualReturn, years, 0, tfsaExcluded);
  const rrsp = project(rrspDeposits, input.annualReturn, years, input.retirementMarginalRate, rrspExcluded);

  let fhsa: AccountProjection | null = null;
  if (input.firstTimeHomeBuyer) {
    const deposits = fhsaDeposits(input.annualContribution, years);
    const deposited = deposits.reduce((sum, value) => sum + value, 0);
    const excluded = input.annualContribution * years - deposited;
    fhsa = project(deposits, input.annualReturn, years, 0, excluded);
  }

  const partial = { tfsa, rrsp, fhsa, rrspAnnualCeiling: ceiling, rrspUsesEarnedIncome: usesEarnedIncome };
  return { ...partial, narrative: narrative(input, partial) };
}

export function ceilingSentence(result: ComparisonResult, earnedIncome: number | null): string {
  if (!result.rrspUsesEarnedIncome) {
    return `RRSP deposits are capped at the 2027 dollar limit of ${formatDollars(RRSP_DOLLAR_LIMIT_2027)}. The 18% of prior-year earned income test is not applied until you enter that income. Unused room and a pension adjustment are not in this tool.`;
  }
  return `RRSP deposits are capped at ${formatDollars(result.rrspAnnualCeiling, true)} a year, the lesser of the 2027 dollar limit (${formatDollars(RRSP_DOLLAR_LIMIT_2027)}) and ${formatRate(RRSP_EARNED_INCOME_FRACTION)} of the prior-year earned income you entered (${formatDollars(earnedIncome ?? 0)}). Unused room and a pension adjustment are not in this tool.`;
}
