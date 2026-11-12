/**
 * Affiliate offer registry (content strategy §7.4).
 *
 * Posts place an offer with an empty marker in their HTML:
 *   <div data-offer="questrade-self-directed"></div>
 * At build, `renderOffers()` in src/lib/offers.ts swaps an ACTIVE offer for a static box
 * (one-line disclosure above the first offer on the page, rel="sponsored nofollow noopener")
 * and removes the marker for any offer that is pending, paused or expired. An unknown id
 * fails the build, so a typo can never ship.
 *
 * Rules:
 * - status stays 'pending' until Andrew is approved for the program and pastes the tracking
 *   URL here. Pending offers render nothing, so posts can carry markers before approval.
 * - Every fact shown in a box comes from the partner's own page, with the date it was checked.
 * - No invented payouts, rates or bonuses. If the partner page doesn't print it, leave it out.
 */
export type OfferStatus = 'pending' | 'active' | 'paused';

export type Offer = {
  id: string;
  partner: string;
  product: string;
  /** Affiliate network, or 'direct'. */
  network: string;
  /** Tracking URL from the network. Empty until the program approves Andrew. */
  trackingUrl: string;
  /** Query parameter the network uses for sub-IDs (e.g. subId1, sid, u1). */
  subIdParam?: string;
  categories: string[];
  /** The partner's own reader-offer wording, copied from its page. */
  readerOffer?: string;
  facts: { text: string; sourceUrl: string; checked: string }[];
  status: OfferStatus;
  /** YYYY-MM-DD. The offer drops out of the build after this date. */
  expires?: string;
};

export const OFFERS: Offer[] = [
  {
    id: 'questrade-self-directed',
    partner: 'Questrade',
    product: 'Self-directed investing account',
    network: 'direct',
    trackingUrl: '',
    categories: ['investing', 'retirement', 'taxes'],
    facts: [],
    status: 'pending',
  },
  {
    id: 'wealthsimple-invest',
    partner: 'Wealthsimple',
    product: 'Wealthsimple accounts (Trade, Managed, Cash, Tax)',
    network: 'impact',
    trackingUrl: '',
    subIdParam: 'subId1',
    categories: ['investing', 'retirement', 'taxes', 'budgeting-saving'],
    facts: [],
    status: 'pending',
  },
  {
    id: 'wealthsimple-tax',
    partner: 'Wealthsimple',
    product: 'Wealthsimple Tax',
    network: 'impact',
    trackingUrl: '',
    subIdParam: 'subId1',
    categories: ['taxes'],
    facts: [],
    status: 'pending',
  },
  {
    id: 'turbotax-canada',
    partner: 'TurboTax Canada',
    product: 'Tax software',
    network: 'verify',
    trackingUrl: '',
    categories: ['taxes'],
    facts: [],
    status: 'pending',
  },
  {
    id: 'eq-bank',
    partner: 'EQ Bank',
    product: 'Personal Account and GICs',
    network: 'rakuten',
    trackingUrl: '',
    subIdParam: 'u1',
    categories: ['budgeting-saving'],
    facts: [],
    status: 'pending',
  },
  {
    id: 'policyme-term-life',
    partner: 'PolicyMe',
    product: 'Term life insurance',
    network: 'impact',
    trackingUrl: '',
    subIdParam: 'subId1',
    categories: ['insurance'],
    facts: [],
    status: 'pending',
  },
];

export function getOffer(id: string): Offer | undefined {
  return OFFERS.find((offer) => offer.id === id);
}
