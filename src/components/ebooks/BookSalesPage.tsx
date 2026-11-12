import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import BuyButton from './BuyButton';
import { AuthorBox, commonFaqs, FaqList, GuaranteeStrip, NFA_TEXT, ProductCard } from './shared';
import {
  BUNDLES,
  CATEGORY_EBOOKS,
  formatPrice,
  isBuyable,
  priceCad,
  salesPath,
  type Ebook,
} from '@/data/ebooks';
import { AUTHOR_ID, AUTHOR_NAME, CATEGORIES, SITE_NAME, SITE_URL, breadcrumbSchema, faqSchema } from '@/lib/site';

function categoriesFor(slug: string) {
  return Object.entries(CATEGORY_EBOOKS)
    .filter(([, entry]) => entry.default === slug || Object.values(entry.bySubcategory ?? {}).includes(slug as never))
    .map(([categorySlug, entry]) => {
      const category = CATEGORIES.find((c) => c.slug === categorySlug);
      const sub = Object.entries(entry.bySubcategory ?? {}).find(([, product]) => product === slug)?.[0];
      const subcategory = sub ? category?.subcategories?.find((s) => s.slug === sub) : undefined;
      if (!category) return null;
      return subcategory
        ? { name: subcategory.name, href: `/category/${category.slug}/${subcategory.slug}/` }
        : { name: category.name, href: `/category/${category.slug}/` };
    })
    .filter((item): item is { name: string; href: string } => item !== null);
}

export default function BookSalesPage({ book }: { book: Ebook }) {
  const onSale = isBuyable(book.slug);
  const price = formatPrice(book.slug);
  const pagesLabel = `${book.pages} pages`;
  const faqs = [...commonFaqs(book.slug, book.formats, pagesLabel), ...book.extraFaqs];
  const freeTopics = categoriesFor(book.slug);
  const bundle = BUNDLES.find((b) => b.books.includes(book.slug));
  const path = salesPath(book.slug);

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${SITE_URL}${path}#product`,
    name: book.title,
    description: book.metaDescription,
    image: [`${SITE_URL}${book.coverPng}`],
    sku: `co-${book.slug}-2026`,
    category: 'Ebook (PDF)',
    brand: { '@type': 'Brand', name: SITE_NAME },
    author: { '@type': 'Person', '@id': AUTHOR_ID, name: AUTHOR_NAME },
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}${path}`,
      price: priceCad(book.slug).toFixed(2),
      priceCurrency: 'CAD',
      availability: onSale ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      seller: { '@type': 'Organization', name: SITE_NAME },
    },
  };

  return (
    <div className="bg-white">
      <SchemaMarkup
        data={[
          productSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Ebooks', path: '/ebooks/' },
            { name: book.title, path },
          ]),
          faqSchema(faqs),
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-light-slate to-white pb-16 pt-10">
        <div className="container mx-auto max-w-6xl px-4">
          <Breadcrumbs items={[{ label: 'Ebooks', href: '/ebooks/' }, { label: book.shortTitle }]} />
          <div className="mt-6 flex flex-col items-center gap-12 lg:flex-row lg:items-start">
            <div className="text-center lg:w-3/5 lg:text-left">
              <span className="mb-5 inline-block rounded-full bg-canadian-red/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-canadian-red">
                {book.edition}
                {book.series ? ` · ${book.series} series` : ''}
              </span>
              <h1 className="mb-4 text-4xl font-black leading-tight text-charcoal md:text-5xl">{book.title}</h1>
              <p className="mb-6 text-xl font-semibold text-gray-700">{book.subtitle}</p>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">{book.lede}</p>
              <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-center">
                <BuyButton slug={book.slug} placement="hero" />
                <Link href="#contents" className="rounded-md border-2 border-gray-200 px-6 py-3.5 font-bold text-gray-700 transition-colors hover:bg-gray-50">
                  See the contents
                </Link>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                {onSale ? `One-time payment of ${price}. Secure checkout through Stripe.` : `Price at launch: ${price}. Not on sale yet.`}
              </p>
              <p className="mt-2 text-sm text-gray-500">
                By <Link href="/about/" className="font-semibold text-charcoal hover:text-canadian-red">Andrew</Link>
              </p>
            </div>
            <div className="w-full max-w-[340px] lg:w-2/5">
              <Image
                src={book.cover}
                alt={`Cover of ${book.title}, ${book.edition}`}
                width={800}
                height={1035}
                priority
                className="h-auto w-full rounded-lg shadow-2xl ring-1 ring-black/5"
              />
            </div>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-4 text-center md:grid-cols-4">
            {[
              ['Pages', String(book.pages)],
              ['Chapters', String(book.chapterCount)],
              ['Format', book.formats],
              ['Figures', book.currentAs],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                <dt className="text-xs font-bold uppercase tracking-widest text-gray-500">{label}</dt>
                <dd className="mt-1 text-sm font-semibold text-charcoal">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16">
        <div className="container mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2">
          <div>
            <h2 className="mb-5 text-2xl font-bold text-charcoal md:text-3xl">Who it’s for</h2>
            <ul className="space-y-3">
              {book.whoFor.map((item) => (
                <li key={item} className="flex gap-3 text-gray-700">
                  <span className="mt-1 text-canadian-red" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-5 text-2xl font-bold text-charcoal md:text-3xl">Who it’s not for</h2>
            <ul className="space-y-3">
              {book.notFor.map((item) => (
                <li key={item} className="flex gap-3 text-gray-700">
                  <span className="mt-1 text-gray-400" aria-hidden="true">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className="bg-charcoal py-16 text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">What’s inside</h2>
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {book.highlights.map((item) => (
              <li key={item} className="rounded-2xl border border-white/10 bg-white/5 p-6 leading-relaxed text-gray-200">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Examples */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-3 text-2xl font-bold text-charcoal md:text-3xl">The examples you’ll follow</h2>
          <p className="mb-6 text-gray-600">{book.examplesIntro} They are illustrations, not real people.</p>
          <div className="grid gap-4 md:grid-cols-2">
            {book.examples.map((example) => (
              <div key={example.name} className="rounded-xl border border-gray-200 bg-light-slate p-5">
                <p className="font-bold text-charcoal">{example.name}</p>
                <p className="text-sm text-gray-600">{example.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contents */}
      <section id="contents" className="scroll-mt-24 bg-light-slate py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-2 text-center text-3xl font-bold text-charcoal md:text-4xl">Full contents</h2>
          <p className="mb-10 text-center text-gray-600">
            {book.chapterCount} chapters across {book.pages} pages.
          </p>
          <div className="space-y-6">
            {book.parts.map((part, partIndex) => {
              const offset = book.parts.slice(0, partIndex).reduce((sum, p) => sum + p.chapters.length, 0);
              return (
                <div key={part.name} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-canadian-red">{part.name}</h3>
                  <ol className="space-y-1.5">
                    {part.chapters.map((chapter, i) => (
                      <li key={chapter} className="flex gap-3 text-gray-800">
                        <span className="w-6 flex-shrink-0 text-right font-semibold text-gray-400">{offset + i + 1}</span>
                        {chapter}
                      </li>
                    ))}
                  </ol>
                </div>
              );
            })}
            <div className="rounded-xl border border-dashed border-gray-300 bg-white p-6">
              <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-gray-500">At the back</h3>
              <ul className="grid gap-1.5 text-gray-700 sm:grid-cols-2">
                {book.backMatter.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Free vs paid */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-charcoal md:text-3xl">What’s free on the site, and what the book adds</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-6">
              <p className="mb-2 font-bold text-charcoal">Free on Canadian Optimizer</p>
              <p className="text-sm leading-relaxed text-gray-600">
                Our articles explain one topic at a time and stay free.
                {freeTopics.length > 0 ? ' Start with ' : ''}
                {freeTopics.map((topic, i) => (
                  <span key={topic.href}>
                    {i > 0 ? ' and ' : ''}
                    <Link href={topic.href} className="text-canadian-red hover:underline">{topic.name}</Link>
                  </span>
                ))}
                {freeTopics.length > 0 ? '.' : ''}
              </p>
            </div>
            <div className="rounded-2xl border-2 border-canadian-red/30 bg-red-50/40 p-6">
              <p className="mb-2 font-bold text-charcoal">In the book</p>
              <p className="text-sm leading-relaxed text-gray-600">
                The whole subject in order, in one {book.pages}-page file: the same examples carried from chapter to chapter, end-of-chapter tasks and checklists, and quick-reference pages at the back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee + author */}
      <section className="bg-light-slate py-16">
        <div className="container mx-auto max-w-4xl space-y-8 px-4">
          <GuaranteeStrip freeUpdate={book.freeUpdate} />
          <AuthorBox />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-charcoal">Questions</h2>
          <FaqList faqs={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-light-slate py-16 text-center">
        <div className="container mx-auto max-w-2xl px-4">
          <h2 className="mb-3 text-3xl font-black text-charcoal md:text-4xl">{book.title}</h2>
          <p className="mb-6 text-gray-600">
            {book.pages} pages · {book.chapterCount} chapters · {book.formats}
          </p>
          <p className="mb-6 text-5xl font-black text-canadian-red">{price}</p>
          <BuyButton slug={book.slug} placement="bottom" className="w-full sm:w-auto" />
          {bundle ? (
            <p className="mt-6 text-sm text-gray-600">
              Part of the {book.series} series. Get all three in the{' '}
              <Link href={salesPath(bundle.slug)} className="font-semibold text-canadian-red hover:underline">{bundle.title}</Link>.
            </p>
          ) : null}
          <p className="mx-auto mt-8 max-w-xl text-xs leading-relaxed text-gray-500">{NFA_TEXT}</p>
        </div>
      </section>

      {/* Related */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-charcoal">More Canadian Optimizer guides</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {book.related.map((slug) => (
              <ProductCard key={slug} slug={slug} context={book.slug} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
