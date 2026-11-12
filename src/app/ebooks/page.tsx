import type { Metadata } from 'next';
import Link from 'next/link';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import { ProductCard } from '@/components/ebooks/shared';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { BUNDLES, EBOOKS, REFUND_DAYS, bundleListPrice, formatPrice, salesPath } from '@/data/ebooks';
import { SITE_URL, breadcrumbSchema, buildPageMetadata } from '@/lib/site';

export const metadata: Metadata = buildPageMetadata({
  title: 'Canadian Personal Finance Ebooks by Andrew',
  description:
    'In-depth PDF guides for Canadians on taxes, retirement, government benefits, insurance, investing, side hustles, raises and self-employment, by Andrew.',
  path: '/ebooks/',
});

const standalone = EBOOKS.filter((book) => !book.series);
const earnMore = EBOOKS.filter((book) => book.series === 'Earn More');
const investing = EBOOKS.filter((book) => book.series === 'Investing');
const earnMoreBundle = BUNDLES.find((bundle) => bundle.slug === 'earn-more-bundle');

export default function EbooksIndex() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Canadian Optimizer ebooks',
    itemListElement: [...EBOOKS, ...BUNDLES].map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${SITE_URL}${salesPath(product.slug)}`,
      name: product.title,
    })),
  };

  return (
    <div className="min-h-screen bg-light-slate pb-20 pt-10">
      <SchemaMarkup data={[itemList, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Ebooks', path: '/ebooks/' }])]} />
      <div className="container mx-auto max-w-6xl px-4">
        <Breadcrumbs items={[{ label: 'Ebooks' }]} />
        <header className="mb-12 mt-4">
          <h1 className="mb-4 text-4xl font-bold text-charcoal md:text-5xl">Ebooks for Canadians</h1>
          <p className="max-w-3xl text-xl text-gray-600">
            Long-form PDF guides by Andrew. Each one takes a subject the blog covers one article at a time and puts it in
            order, with worked examples, end-of-chapter tasks and checklists. One-time purchase, instant download,
            {` ${REFUND_DAYS}`}-day refund.
          </p>
        </header>

        <section className="mb-16" aria-labelledby="standalone">
          <h2 id="standalone" className="mb-6 text-2xl font-bold text-charcoal">Standalone guides</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {standalone.map((book) => (
              <ProductCard key={book.slug} slug={book.slug} context="ebooks_index" />
            ))}
          </div>
        </section>

        <section className="mb-16" aria-labelledby="earn-more">
          <h2 id="earn-more" className="mb-2 text-2xl font-bold text-charcoal">The Earn More series</h2>
          <p className="mb-6 text-gray-600">Three ways to raise your income: on the side, as an employee, and in your own business.</p>
          <div className="grid gap-6 md:grid-cols-3">
            {earnMore.map((book) => (
              <ProductCard key={book.slug} slug={book.slug} context="ebooks_index" />
            ))}
          </div>
          {earnMoreBundle ? (
            <Link
              href={salesPath(earnMoreBundle.slug)}
              className="mt-6 flex flex-col items-start justify-between gap-3 rounded-xl border-2 border-canadian-red/30 bg-white p-6 transition-shadow hover:shadow-md sm:flex-row sm:items-center"
            >
              <div>
                <p className="text-lg font-bold text-charcoal">{earnMoreBundle.title}: all three books</p>
                <p className="text-sm text-gray-600">
                  {formatPrice(earnMoreBundle.slug)} for the set, versus ${bundleListPrice(earnMoreBundle)} CAD bought separately.
                </p>
              </div>
              <span className="rounded-md bg-canadian-red px-5 py-2.5 font-bold text-white">See the bundle</span>
            </Link>
          ) : null}
        </section>

        <section aria-labelledby="investing">
          <h2 id="investing" className="mb-2 text-2xl font-bold text-charcoal">The Investing series</h2>
          <p className="mb-6 text-gray-600">
            Start with the full Canadian Investing Guide, or go straight to index investing if you already know your accounts.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {investing.map((book) => (
              <ProductCard key={book.slug} slug={book.slug} context="ebooks_index" />
            ))}
          </div>
        </section>

        <p className="mt-16 max-w-3xl text-xs leading-relaxed text-gray-500">
          For education only. These books are general information, not financial, tax, legal or insurance advice.
        </p>
      </div>
    </div>
  );
}
