import type { BlogPostRecord } from '../../lib/post-video';
import { vgroVsXgroCanadaPost } from './p-vgro-vs-xgro-canada';
import { bestAllInOneEtfsCanadaPost } from './p-best-all-in-one-etfs-canada';
import { balanceTransferVsConsolidationLoanCanadaPost } from './p-balance-transfer-vs-consolidation-loan-canada';

/** Batch for Saturday, November 28, 2026: two hubs.
 * Investing › Passive ETF Investing: vgro-vs-xgro-canada (first-50 #27), best-all-in-one-etfs-canada (#26).
 * Credit Cards › Balance Transfer & Low-Interest Cards: balance-transfer-vs-consolidation-loan-canada (#40).
 * The four held posts from the Nov 18 and Nov 20 batches already shipped in PR #122. */
export const batch20261128Posts: BlogPostRecord[] = [
  bestAllInOneEtfsCanadaPost,
  vgroVsXgroCanadaPost,
  balanceTransferVsConsolidationLoanCanadaPost,
];
