import Image from 'next/image';
import Link from 'next/link';
import { formatPrice, getProduct, isBuyable, salesUrlWithUtm, type ProductSlug } from '@/data/ebooks';

type Props = {
  slug: ProductSlug;
  /** "end" is the full end-of-post box; "inline" is a compact box for use inside an article. */
  variant?: 'end' | 'inline';
  /** Page the CTA sits on (e.g. the post slug). Sent as utm_content. */
  context: string;
};

/**
 * Reusable ebook call to action. Links to the on-site sales page (not straight to
 * Stripe) with utm_source=site, utm_medium=cta_full|cta_compact, utm_campaign=<product>
 * and utm_content=<page>, following the paid-digital-product playbook.
 */
export default function EbookCTA({ slug, variant = 'end', context }: Props) {
  const product = getProduct(slug);
  if (!product) return null;
  const price = formatPrice(slug);
  const onSale = isBuyable(slug);
  const href = salesUrlWithUtm(slug, variant === 'end' ? 'cta_full' : 'cta_compact', context);
  const pages = product.kind === 'book' ? `${product.pages}-page PDF` : '3 PDFs';

  if (variant === 'inline') {
    return (
      <aside
        className="not-prose my-8 flex items-center gap-4 rounded-xl border border-gray-200 bg-light-slate p-4"
        data-ebook-cta="inline"
        data-ebook={slug}
      >
        <Image src={product.cover} alt="" width={56} height={72} className="h-[72px] w-[56px] flex-shrink-0 rounded shadow" />
        <div className="min-w-0 flex-grow text-sm">
          <p className="m-0 font-bold text-charcoal">{product.title}</p>
          <p className="m-0 text-gray-600">
            {pages} by Andrew · {price}
            {onSale ? '' : ' · coming soon'}
          </p>
        </div>
        <Link href={href} className="flex-shrink-0 rounded-md bg-canadian-red px-4 py-2 text-sm font-bold text-white hover:bg-canadian-red-hover">
          {onSale ? 'See inside' : 'Preview'}
        </Link>
      </aside>
    );
  }

  return (
    <aside
      className="mx-auto my-10 w-full max-w-[800px] px-5"
      data-ebook-cta="end"
      data-ebook={slug}
      aria-labelledby={`ebook-cta-${slug}`}
    >
      <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-light-slate p-6 sm:flex-row sm:items-center">
        <Link href={href} className="mx-auto flex-shrink-0 sm:mx-0" tabIndex={-1} aria-hidden="true">
          <Image src={product.cover} alt="" width={120} height={155} className="h-[155px] w-[120px] rounded-md shadow-lg" />
        </Link>
        <div className="flex-grow">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-canadian-red">
            {product.kind === 'bundle' ? 'Ebook bundle' : 'Ebook'} by Andrew
          </p>
          <h2 id={`ebook-cta-${slug}`} className="mb-2 text-xl font-bold text-charcoal">
            {product.title}
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">{product.pitch}</p>
          <div className="flex flex-wrap items-center gap-3">
            <Link href={href} className="rounded-md bg-canadian-red px-5 py-2.5 font-bold text-white hover:bg-canadian-red-hover">
              {onSale ? `Get the ${pages} · ${price}` : `See what's inside · ${price}`}
            </Link>
            {!onSale ? <span className="text-sm font-semibold text-gray-500">Coming soon</span> : null}
          </div>
        </div>
      </div>
    </aside>
  );
}
