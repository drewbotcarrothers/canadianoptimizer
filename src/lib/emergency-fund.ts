/**
 * Emergency fund target with Employment Insurance built in (see /blog/emergency-fund-calculator-canada/).
 * EI figures from Canada.ca (EI regular benefits, 2026): 55% of average insurable weekly earnings, up to $729 a
 * week, and 14 to 45 weeks of benefits (up to 65 for long-tenured workers under the temporary measures). The usual
 * one-week waiting period is waived for claims starting March 30, 2025 to October 9, 2027. Update each January.
 */
export const EI_RATE = 0.55;
export const EI_MAX_WEEKLY = 729;
export const EI_WAITING_WEEKS = 1;
export const WAIVER_ENDS = 'October 9, 2027';
export const EI_MIN_WEEKS = 14;
export const EI_MAX_WEEKS = 65;

export type EmergencyFundInput = {
  essentialsMonthly: number;
  months: number;
  otherIncomeMonthly: number;
  eiEligible: boolean;
  insurableEarnings: number;
  eiWeeks: number;
  eiTaxShare: number; // 0-1, share of EI lost to tax
  waitingWeekWaived: boolean;
  lumpSums: number; // severance or other cash you will receive
  savedNow: number;
};

export type EmergencyFundResult = {
  weeklyEi: number;
  paidWeeks: number;
  eiNet: number;
  spending: number;
  otherIncome: number;
  gap: number;
  bridge: number;
  target: number;
  withoutEi: number;
  shortfall: number;
};

const n = (x: number) => (Number.isFinite(x) && x > 0 ? x : 0);

export function emergencyFund(i: EmergencyFundInput): EmergencyFundResult {
  const months = n(i.months);
  const weeks = (months * 52) / 12;
  const weeklyEi = i.eiEligible ? Math.min(EI_MAX_WEEKLY, (n(i.insurableEarnings) / 52) * EI_RATE) : 0;
  const entitlement = Math.min(EI_MAX_WEEKS, Math.max(EI_MIN_WEEKS, n(i.eiWeeks) || EI_MIN_WEEKS));
  const wait = i.waitingWeekWaived ? 0 : EI_WAITING_WEEKS;
  const paidWeeks = i.eiEligible ? Math.max(0, Math.min(weeks - wait, entitlement)) : 0;
  const tax = Math.min(1, n(i.eiTaxShare));
  const eiNet = weeklyEi * paidWeeks * (1 - tax);
  const spending = n(i.essentialsMonthly) * months;
  const otherIncome = n(i.otherIncomeMonthly) * months;
  const gap = Math.max(0, spending - otherIncome - eiNet - n(i.lumpSums));
  // EI's first payment arrives about 28 days after applying, so four weeks of the monthly gap must be cash.
  const bridge = Math.max(0, ((n(i.essentialsMonthly) - n(i.otherIncomeMonthly)) * 12 * 4) / 52);
  const target = Math.max(gap, Math.min(bridge, Math.max(0, spending - otherIncome)));
  const withoutEi = Math.max(0, spending - otherIncome - n(i.lumpSums));
  return { weeklyEi, paidWeeks, eiNet, spending, otherIncome, gap, bridge, target, withoutEi, shortfall: Math.max(0, target - n(i.savedNow)) };
}
