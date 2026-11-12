import { checkoutUrl, formatPrice, type ProductSlug } from '@/data/ebooks';

type Props = {
  slug: ProductSlug;
  /** Where the button sits, e.g. "hero" or "bottom". Sent to Stripe as utm_content. */
  placement: string;
  label?: string;
  className?: string;
};

/**
 * Buy button for a product. Reads the Stripe Payment Link from src/data/ebooks.ts.
 * When no link is configured yet, renders a disabled "Coming soon" state instead
 * of a broken link.
 */
export default function BuyButton({ slug, placement, label, className = '' }: Props) {
  const href = checkoutUrl(slug, placement);
  const price = formatPrice(slug);
  const base =
    'inline-flex items-center justify-center rounded-md px-8 py-4 text-lg font-bold text-center transition-colors';

  if (!href) {
    return (
      <span
        role="button"
        aria-disabled="true"
        data-ebook={slug}
        data-placement={placement}
        data-state="coming-soon"
        className={`${base} cursor-not-allowed bg-gray-200 text-gray-600 ${className}`}
      >
        Coming soon · {price}
      </span>
    );
  }

  return (
    <a
      href={href}
      data-ebook={slug}
      data-placement={placement}
      rel="noopener"
      className={`${base} bg-canadian-red text-white hover:bg-canadian-red-hover ${className}`}
    >
      {label ?? `Buy the PDF · ${price}`}
    </a>
  );
}
