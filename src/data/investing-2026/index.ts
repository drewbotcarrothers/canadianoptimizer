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
import { dividendGrowthVsHighYieldCanada } from './b3-growth-yield';
import { dripDividendReinvestmentCanada } from './b3-drip';
import { dividendsOasClawbackCanada } from './b3-oas';
import { sedarPlusCompanyFilingsCanada } from './b3-sedar';
import { t5008SlipCostBaseCanada } from './b3-t5008';
import { positionSizingStocksCanada } from './b3-sizing';
import { mutualFundFeesSeriesAVsFCanada } from './b3-mutual';
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
  dividendGrowthVsHighYieldCanada,
  dripDividendReinvestmentCanada,
  dividendsOasClawbackCanada,
  sedarPlusCompanyFilingsCanada,
  t5008SlipCostBaseCanada,
  positionSizingStocksCanada,
  mutualFundFeesSeriesAVsFCanada,
];
