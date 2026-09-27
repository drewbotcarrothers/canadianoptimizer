import { roundCents } from './mortgage-prepayment';

export type RewardCategory = {
  id: string;
  name: string;
  annualSpend: number;
  earnRate: number;
};

export type RewardsInput = {
  categories: RewardCategory[];
  /** 'points' multiplies spend by earn rate by cents-per-point. 'cashback' treats earn rate as a percent. */
  mode: 'points' | 'cashback';
  pointValueCents: number;
  annualFee: number;
};

export type RewardsLine = {
  id: string;
  name: string;
  annualSpend: number;
  units: number;
  value: number;
};

export type RewardsResult = {
  lines: RewardsLine[];
  totalSpend: number;
  grossValue: number;
  annualFee: number;
  netValue: number;
  netOnSpend: number;
};

export function calculateRewards(input: RewardsInput): RewardsResult | null {
  if (input.annualFee < 0) return null;
  if (input.mode === 'points' && input.pointValueCents < 0) return null;

  const lines: RewardsLine[] = input.categories.map((category) => {
    const spend = Math.max(0, category.annualSpend);
    const rate = Math.max(0, category.earnRate);
    const units = input.mode === 'points' ? spend * rate : 0;
    const value =
      input.mode === 'points' ? spend * rate * (input.pointValueCents / 100) : spend * (rate / 100);
    return {
      id: category.id,
      name: category.name,
      annualSpend: roundCents(spend),
      units: roundCents(units),
      value: roundCents(value),
    };
  });

  const totalSpend = roundCents(lines.reduce((sum, line) => sum + line.annualSpend, 0));
  const grossValue = roundCents(lines.reduce((sum, line) => sum + line.value, 0));
  const netValue = roundCents(grossValue - input.annualFee);

  return {
    lines,
    totalSpend,
    grossValue,
    annualFee: roundCents(input.annualFee),
    netValue,
    netOnSpend: totalSpend > 0 ? netValue / totalSpend : 0,
  };
}
