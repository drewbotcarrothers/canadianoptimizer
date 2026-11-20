import { getOffer, type Offer } from '@/data/offers';

const MARKER = /<div data-offer="([a-z0-9-]+)"(?:\s+data-placement="([a-z_]+)")?\s*><\/div>/g;

/**
 * Draft wording for the one-line disclosure above the first affiliate link.
 * The wording still needs Andrew's OK (content strategy §7.7); it only renders
 * once an offer is active, so nothing shows until then.
 */
export const INLINE_DISCLOSURE =
  'Disclosure: the next link is an affiliate link. If you use it, Canadian Optimizer may earn a commission at no cost to you. It does not change what we recommend.';

function todayToronto(): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Toronto',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date());
}

export function isOfferLive(offer: Offer, today = todayToronto()): boolean {
  if (offer.status !== 'active') return false;
  if (!offer.trackingUrl.trim()) return false;
  if (offer.expires && offer.expires < today) return false;
  return true;
}

function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function trackingHref(offer: Offer, postSlug: string, placement: string): string {
  if (!offer.subIdParam) return offer.trackingUrl;
  const url = new URL(offer.trackingUrl);
  url.searchParams.set(offer.subIdParam, `co|${postSlug}|${placement}`);
  return url.toString();
}

/**
 * Swap `<div data-offer="id"></div>` markers for static offer boxes. Pending, paused and
 * expired offers render nothing. Unknown ids throw, which fails the build.
 */
export function renderOffers(content: string, postSlug: string): string {
  let disclosed = false;
  return content.replace(MARKER, (_match, id: string, placement?: string) => {
    const offer = getOffer(id);
    if (!offer) {
      throw new Error(`Post "${postSlug}" uses unknown offer id "${id}" (src/data/offers.ts).`);
    }
    if (!isOfferLive(offer)) return '';
    const place = placement ?? 'inline';
    const disclosure = disclosed
      ? ''
      : `<p class="affiliate-inline-disclosure" data-affiliate-disclosure><em>${escapeHtml(INLINE_DISCLOSURE)}</em></p>`;
    disclosed = true;
    const facts = offer.facts
      .map((fact) => `<li>${escapeHtml(fact.text)} <small>(checked ${escapeHtml(fact.checked)})</small></li>`)
      .join('');
    return `${disclosure}<div class="offer-box" data-offer-live="${offer.id}"><p><strong>${escapeHtml(
      offer.partner
    )}: ${escapeHtml(offer.product)}</strong></p>${
      offer.readerOffer ? `<p>${escapeHtml(offer.readerOffer)}</p>` : ''
    }${facts ? `<ul>${facts}</ul>` : ''}<p><a href="${escapeHtml(
      trackingHref(offer, postSlug, place)
    )}" rel="sponsored nofollow noopener" target="_blank" class="cta-button">Visit ${escapeHtml(
      offer.partner
    )}</a></p></div>`;
  });
}
