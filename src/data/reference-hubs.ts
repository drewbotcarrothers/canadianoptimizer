export type HubReference = {
  href: string;
  title: string;
  description: string;
};

const LIMITS: HubReference = {
  href: '/2027-contribution-limits/',
  title: '2027 contribution limits',
  description: 'TFSA, RRSP, FHSA, and RESP limits, each tied to the CRA or ESDC page it came from.',
};

const RATES: HubReference = {
  href: '/2027-combined-marginal-tax-rates/',
  title: '2027 combined marginal tax rates',
  description: 'Federal and provincial brackets for all 13 provinces and territories, and the combined rate on each slice.',
};

const CALCULATOR: HubReference = {
  href: '/tfsa-rrsp-fhsa-calculator/',
  title: 'TFSA vs RRSP vs FHSA calculator',
  description: 'Compare after-tax outcomes. You type the rates, the contribution, and the return. The caps are the official limits.',
};

const BY_CATEGORY: Record<string, HubReference[]> = {
  taxes: [LIMITS, RATES, CALCULATOR],
  retirement: [LIMITS, CALCULATOR],
  'government-benefits': [LIMITS],
};

export function referencesForHub(categorySlug: string): HubReference[] {
  return BY_CATEGORY[categorySlug] ?? [];
}
