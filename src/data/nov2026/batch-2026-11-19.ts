import type { BlogPostRecord } from '../../lib/post-video';
import { neoCreditCardReviewPost } from './p-neo-credit-card-review';
import { eqBankReviewPost } from './p-eq-bank-review';
import { kohoReviewPost } from './p-koho-review';
import { gicVsHisaPost } from './p-gic-vs-hisa';

/** Batch for Thursday, November 19, 2026 (content plan, first-50 list #13, #15, #16, #17).
 * Skipped (sister-site duplicate, CCCF /guides/how-credit-scores-work-canada/): credit-score-canada-guide (#14);
 * gic-vs-hisa-canada (#17) substituted. */
export const batch20261119Posts: BlogPostRecord[] = [
  neoCreditCardReviewPost,
  eqBankReviewPost,
  kohoReviewPost,
  gicVsHisaPost,
];
