import { couchPotatoPortfolioCanada } from './passive-etf';
import { dividendInvestingCanada } from './dividend';
import { howToPickStocksCanada } from './stock-picking';
import { roboAdvisorVsFinancialAdvisorCanada } from './hands-off';
import type { Investing2026Post } from './types';

/** Investing subcategory pillars and spokes added from October 23, 2026. Each post carries its own subcategory. */
export const investing2026Posts: Investing2026Post[] = [
  couchPotatoPortfolioCanada,
  dividendInvestingCanada,
  howToPickStocksCanada,
  roboAdvisorVsFinancialAdvisorCanada,
];
