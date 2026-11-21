import type { BlogPostRecord } from '../../lib/post-video';
import { tfsaWithdrawalRulesPost } from './p-tfsa-withdrawal-rules';
import { howToOpenTfsaPost } from './p-how-to-open-tfsa';
import { rrspOrTfsaByIncomePost } from './p-rrsp-or-tfsa-by-income';
import { investingWhenLeavingCanadaPost } from './p-investing-when-leaving-canada-tfsa-rrsp';

/** Batch for Sunday, November 22, 2026: one hub (Investing › accounts and asset location).
 * tfsa-withdrawal-rules is the requeue from the Nov 21 batch (first-50 #21); how-to-open-tfsa is #22;
 * rrsp-or-tfsa-by-income is the scenario-family pilot (#28); investing-when-leaving-canada-tfsa-rrsp is from the content backlog. */
export const batch20261122Posts: BlogPostRecord[] = [
  tfsaWithdrawalRulesPost,
  howToOpenTfsaPost,
  rrspOrTfsaByIncomePost,
  investingWhenLeavingCanadaPost,
];
