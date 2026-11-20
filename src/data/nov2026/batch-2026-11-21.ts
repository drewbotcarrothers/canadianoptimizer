import type { BlogPostRecord } from '../../lib/post-video';
import { tangerineMoneyBackPost } from './p-tangerine-money-back';
import { bestStudentCardsPost } from './p-best-student-cards';
import { bestSecuredCardsPost } from './p-best-secured-cards';
import { creditScoreGuidePost } from './p-credit-score-guide';

/** Batch for Saturday, November 21, 2026 (high-priority requeue: first-50 list #9, #10, #12 held on Nov 18 and #14 held on Nov 20,
 * all as sister-site topic overlaps; requeued under Andrew's Nov 20 rule that topic overlap with sister sites is not a reason to hold).
 * tfsa-withdrawal-rules (#21) is the leftover for the next batch. */
export const batch20261121Posts: BlogPostRecord[] = [
  tangerineMoneyBackPost,
  bestStudentCardsPost,
  bestSecuredCardsPost,
  creditScoreGuidePost,
];
