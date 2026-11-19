import type { BlogPostRecord } from '../../lib/post-video';
import { seniorsTaxCreditsPost } from './p-seniors-tax-credits';
import { commonLawPost } from './p-common-law';
import { emergencyFundCalculatorPost } from './p-emergency-fund-calculator';

/** Batch for Friday, November 20, 2026 (content plan, first-50 list #18, #19, #20).
 * Skipped as sister-site duplicates: credit-score-canada-guide (#14, CCCF /guides/how-credit-scores-work-canada/)
 * and tfsa-withdrawal-rules (#21, savingoptimizer.com tfsa-withdrawal-contribution-room-canada). */
export const batch20261120Posts: BlogPostRecord[] = [
  seniorsTaxCreditsPost,
  commonLawPost,
  emergencyFundCalculatorPost,
];
