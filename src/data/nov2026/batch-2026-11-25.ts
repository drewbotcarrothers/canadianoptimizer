import type { BlogPostRecord } from '../../lib/post-video';
import { landTransferTaxOntarioPost } from './p-land-transfer-tax-ontario';
import { propertyTransferTaxBcPost } from './p-property-transfer-tax-bc';
import { thirtyYearAmortizationCanadaPost } from './p-30-year-amortization-canada';
import { welcomeTaxQuebecPost } from './p-welcome-tax-quebec';

/** Batch for Wednesday, November 25, 2026: two hubs.
 * Real Estate › Mortgages & Renewal: #49 30-year-amortization-canada.
 * Real Estate › Closing Costs & Land Transfer Tax: the three province pilots from the first-50 list
 * (#46 land-transfer-tax-ontario, #47 property-transfer-tax-bc, #48 welcome-tax-quebec). */
export const batch20261125Posts: BlogPostRecord[] = [
  landTransferTaxOntarioPost,
  propertyTransferTaxBcPost,
  welcomeTaxQuebecPost,
  thirtyYearAmortizationCanadaPost,
];
