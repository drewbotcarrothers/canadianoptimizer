import { roundCents } from './mortgage-prepayment';

export type RetirementInput = {
  currentAge: number;
  retirementAge: number;
  planAge: number;
  rrspBalance: number;
  tfsaBalance: number;
  rrspContribution: number;
  tfsaContribution: number;
  nominalReturn: number;
  inflation: number;
  cppAnnual: number;
  oasAnnual: number;
  cppStartAge: number;
  oasStartAge: number;
  spending: number;
  rrspTaxRate: number;
};

export type RetirementYear = {
  age: number;
  cpp: number;
  oas: number;
  tfsaWithdrawal: number;
  rrspGross: number;
  rrspNet: number;
  incomeAfterTax: number;
  shortfall: number;
  rrspBalance: number;
  tfsaBalance: number;
};

export type RetirementResult = {
  yearsToRetirement: number;
  realReturn: number;
  rrspAtRetirement: number;
  tfsaAtRetirement: number;
  combinedAtRetirement: number;
  firstYear: RetirementYear | null;
  ending: RetirementYear | null;
  shortfallAge: number | null;
  planAgeBalance: number;
};

function futureValue(start: number, contribution: number, rate: number, years: number): number {
  let balance = start;
  for (let year = 0; year < years; year += 1) {
    balance = balance * (1 + rate) + contribution;
  }
  return balance;
}

export function projectRetirement(input: RetirementInput): RetirementResult | null {
  const years = input.retirementAge - input.currentAge;
  const retirementYears = input.planAge - input.retirementAge;
  if (
    years < 0 ||
    years > 80 ||
    retirementYears < 1 ||
    retirementYears > 70 ||
    input.inflation <= -1 ||
    input.nominalReturn <= -1 ||
    input.rrspTaxRate < 0 ||
    input.rrspTaxRate >= 1
  ) {
    return null;
  }

  const realReturn = (1 + input.nominalReturn) / (1 + input.inflation) - 1;
  const rrspAtRetirement = futureValue(input.rrspBalance, input.rrspContribution, realReturn, years);
  const tfsaAtRetirement = futureValue(input.tfsaBalance, input.tfsaContribution, realReturn, years);

  let rrsp = rrspAtRetirement;
  let tfsa = tfsaAtRetirement;
  let firstYear: RetirementYear | null = null;
  let ending: RetirementYear | null = null;
  let shortfallAge: number | null = null;

  for (let age = input.retirementAge; age < input.planAge; age += 1) {
    rrsp *= 1 + realReturn;
    tfsa *= 1 + realReturn;
    const cpp = age >= input.cppStartAge ? input.cppAnnual : 0;
    const oas = age >= input.oasStartAge ? input.oasAnnual : 0;
    const gap = input.spending - cpp - oas;
    let tfsaWithdrawal = 0;
    let rrspGross = 0;
    let rrspNet = 0;
    let shortfall = 0;

    if (gap <= 0) {
      tfsa += -gap;
    } else {
      tfsaWithdrawal = Math.min(tfsa, gap);
      tfsa -= tfsaWithdrawal;
      const still = gap - tfsaWithdrawal;
      if (still > 0) {
        const grossNeeded = still / (1 - input.rrspTaxRate);
        rrspGross = Math.min(rrsp, grossNeeded);
        rrsp -= rrspGross;
        rrspNet = rrspGross * (1 - input.rrspTaxRate);
        shortfall = still - rrspNet;
      }
    }

    if (shortfall > 0.5 && shortfallAge === null) shortfallAge = age;

    const year: RetirementYear = {
      age,
      cpp: roundCents(cpp),
      oas: roundCents(oas),
      tfsaWithdrawal: roundCents(tfsaWithdrawal),
      rrspGross: roundCents(rrspGross),
      rrspNet: roundCents(rrspNet),
      incomeAfterTax: roundCents(cpp + oas + tfsaWithdrawal + rrspNet),
      shortfall: roundCents(shortfall),
      rrspBalance: roundCents(rrsp),
      tfsaBalance: roundCents(tfsa),
    };
    if (!firstYear) firstYear = year;
    ending = year;
  }

  return {
    yearsToRetirement: years,
    realReturn,
    rrspAtRetirement: roundCents(rrspAtRetirement),
    tfsaAtRetirement: roundCents(tfsaAtRetirement),
    combinedAtRetirement: roundCents(rrspAtRetirement + tfsaAtRetirement),
    firstYear,
    ending,
    shortfallAge,
    planAgeBalance: roundCents((ending?.rrspBalance ?? 0) + (ending?.tfsaBalance ?? 0)),
  };
}
