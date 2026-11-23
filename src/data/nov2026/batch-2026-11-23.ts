import type { BlogPostRecord } from '../../lib/post-video';
import { howToApplyForCppPost } from './p-how-to-apply-for-cpp';
import { howToApplyForOasPost } from './p-how-to-apply-for-oas';
import { howToApplyForGisPost } from './p-how-to-apply-for-gis';
import { rrspDeadlineFirst60DaysPost } from './p-rrsp-deadline-first-60-days';
import { rrspDeductionLimitExplainedPost } from './p-rrsp-deduction-limit-explained';

/** Batch for Monday, November 23, 2026: two hubs.
 * Government Benefits › seniors (CPP, OAS, GIS): how-to-apply-for-cpp (first-50 #33), how-to-apply-for-oas (#34),
 * how-to-apply-for-gis (#41, pulled forward to keep the hub together).
 * Taxes › TFSA, RRSP & FHSA tax rules: rrsp-deadline-first-60-days (#29), rrsp-deduction-limit-explained (#30, forms pilot). */
export const batch20261123Posts: BlogPostRecord[] = [
  howToApplyForCppPost,
  howToApplyForOasPost,
  howToApplyForGisPost,
  rrspDeadlineFirst60DaysPost,
  rrspDeductionLimitExplainedPost,
];
