import { couchPotatoPortfolioCanada } from './passive-etf';
import { dividendInvestingCanada } from './dividend';
import { howToPickStocksCanada } from './stock-picking';
import { roboAdvisorVsFinancialAdvisorCanada } from './hands-off';
import { totalCostReportingCanada } from './b2-total-cost';
import { modelEtfPortfoliosCanada } from './b2-portfolios';
import { dividendTaxCreditByProvinceCanada } from './b2-dtc';
import { questionsToAskFinancialAdvisorCanada, checkFinancialAdvisorRegistrationCanada } from './b2-advisor';
import { tfsaDayTradingBusinessIncomeCanada } from './b2-tfsa-trading';
import { dividendYieldTrapsCanada } from './b2-yield-traps';
import type { Investing2026Post } from './types';

/** Investing subcategory pillars and spokes added from October 23, 2026. Each post carries its own subcategory. */
export const investing2026Posts: Investing2026Post[] = [
  couchPotatoPortfolioCanada,
  dividendInvestingCanada,
  howToPickStocksCanada,
  roboAdvisorVsFinancialAdvisorCanada,
  totalCostReportingCanada,
  modelEtfPortfoliosCanada,
  dividendTaxCreditByProvinceCanada,
  questionsToAskFinancialAdvisorCanada,
  checkFinancialAdvisorRegistrationCanada,
  tfsaDayTradingBusinessIncomeCanada,
  dividendYieldTrapsCanada,
];
