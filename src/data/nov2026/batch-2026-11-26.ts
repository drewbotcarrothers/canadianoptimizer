import type { BlogPostRecord } from '../../lib/post-video';
import { craMyAccountGuidePost } from './p-cra-my-account-guide';
import { changeTaxReturnRefileT1AdjPost } from './p-change-tax-return-refile-t1-adj';
import { canadaWorkersBenefitGuidePost } from './p-canada-workers-benefit-guide';
import { whyDidMyCcbChangePost } from './p-why-did-my-ccb-change';

/** Batch for Thursday, November 26, 2026: two hubs.
 * Taxes › Filing, CRA & Disputes: cra-my-account-guide (first-50 #32), change-tax-return-refile-t1-adj (#42).
 * Government Benefits: canada-workers-benefit-guide (#36, Credits & Low-Income) and
 * why-did-my-ccb-change (#35, Family & Child). */
export const batch20261126Posts: BlogPostRecord[] = [
  craMyAccountGuidePost,
  changeTaxReturnRefileT1AdjPost,
  canadaWorkersBenefitGuidePost,
  whyDidMyCcbChangePost,
];
