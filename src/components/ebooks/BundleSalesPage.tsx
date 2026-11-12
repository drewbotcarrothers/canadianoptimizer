import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import BuyButton from './BuyButton';
import { AuthorBox, commonFaqs, FaqList, GuaranteeStrip, NFA_TEXT } from './shared';
import {
  bundleListPrice,
  formatPrice,
  getBook,
  isBuyable,
  priceCad,
  salesPath,
  type Ebook,
  type EbookBundle,
} from '@/data/ebooks';
import { AUTHOR_ID, AUTHOR_NAME, SITE_NAME, SITE_URL, breadcrumbSchema, faqSchema } from '@/lib/site';

export default function BundleSalesPage({ bundle }: { bundle: EbookBundle }) {
  const books = bundle.books.map((slug) => getBook(slug)).filter((b): b is Ebook => Boolean(b));
  const onSale = isBuyable(bundle.slug);
  const price = formatPrice(bundle.slug);
  const listPrice = bundleListPrice(bundle);
  const saving = listPrice - priceCad(bundle.slug);
  const totalPages = books.reduce((sum, b) => sum + b.pages, 0);
  const totalChapters = books.reduce((sum, b) => sum + b.chapterCount, 0);
  const faqs = [...commonFaqs(bundle.slug, `${books.length} PDFs`, `${totalPages} pages in total`), ...bundle.extraFaqs];
  const freeUpdate = books.every((b) => b.freeUpdate) ? books[0].freeUpdate : undefined;
  const path = salesPath(bundle.slug);

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${SITE_URL}${path}#product`,
    name: bundle.title,
    description: bundle.metaDescription,
    image: books.map((b) => `${SITE_URL}${b.coverPng}`),
    sku: `co-${bundle.slug}-2026`,
    category: 'Ebook bundle (PDF)',
    brand: { '@type': 'Brand', name: SITE_NAME },
    author: { '@type': 'Person', '@id': AUTHOR_ID, name: AUTHOR_NAME },
    isRelatedTo: books.map((b) => ({ '@type': 'Product', name: b.title, url: `${SITE_URL}${salesPath(b.slug)}` })),
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}${path}`,
      price: priceCad(bundle.slug).toFixed(2),
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
            { name: bundle.title, path },
          ]),
          faqSchema(faqs),
        ]}
      />

      <section className="bg-gradient-to-b from-light-slate to-white pb-16 pt-10">
        <div className="container mx-auto max-w-6xl px-4">
          <Breadcrumbs items={[{ label: 'Ebooks', href: '/ebooks/' }, { label: bundle.shortTitle }]} />
          <div className="mt-6 text-center">
            <span className="mb-5 inline-block rounded-full bg-canadian-red/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-canadian-red">
              3 books · {totalPages} pages · {totalChapters} chapters
            </span>
            <h1 className="mb-4 text-4xl font-black leading-tight text-charcoal md:text-5xl">{bundle.title}</h1>
            <p className="mx-auto mb-6 max-w-3xl text-xl font-semibold text-gray-700">{bundle.subtitle}</p>
            <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-600">{bundle.lede}</p>
            <div className="mx-auto mb-10 flex max-w-3xl items-end justify-center gap-4">
              {books.map((book, i) => (
                <Image
                  key={book.slug}
                  src={book.cover}
                  alt={`Cover of ${book.title}`}
                  width={800}
                  height={1035}
                  priority={i === 1}
                  className={`h-auto rounded-lg shadow-2xl ring-1 ring-black/5 ${i === 1 ? 'w-[34%]' : 'w-[28%]'}`}
                />
              ))}
            </div>
            <BuyButton slug={bundle.slug} placement="hero" label={`Buy all three · ${price}`} />
            <p className="mt-4 text-sm text-gray-500">
              {price} for the set, or ${listPrice} CAD if bought separately (you save ${saving}).
              {onSale ? ' Secure checkout through Stripe.' : ' Not on sale yet.'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-charcoal">What’s in the bundle</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {books.map((book) => (
              <div key={book.slug} className="flex flex-col rounded-2xl border border-gray-200 p-6">
                <h3 className="mb-1 text-xl font-bold text-charcoal">{book.title}</h3>
                <p className="mb-3 text-sm italic text-gray-600">{book.subtitle}</p>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {book.pages} pages · {book.chapterCount} chapters · {formatPrice(book.slug)} on its own
                </p>
                <p className="mb-4 flex-grow text-sm leading-relaxed text-gray-600">{book.pitch}</p>
                <Link href={salesPath(book.slug)} className="font-semibold text-canadian-red hover:underline">
                  Full contents →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light-slate py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-5 text-2xl font-bold text-charcoal md:text-3xl">Who it’s for</h2>
          <ul className="mb-10 space-y-3">
            {bundle.whoFor.map((item) => (
              <li key={item} className="flex gap-3 text-gray-700">
                <span className="mt-1 text-canadian-red" aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="space-y-8">
            <GuaranteeStrip freeUpdate={freeUpdate} />
            <AuthorBox />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-charcoal">Questions</h2>
          <FaqList faqs={faqs} />
        </div>
      </section>

      <section className="bg-light-slate py-16 text-center">
        <div className="container mx-auto max-w-2xl px-4">
          <h2 className="mb-3 text-3xl font-black text-charcoal">{bundle.title}</h2>
          <p className="mb-6 text-5xl font-black text-canadian-red">{price}</p>
          <BuyButton slug={bundle.slug} placement="bottom" label={`Buy all three · ${price}`} />
          <p className="mx-auto mt-8 max-w-xl text-xs leading-relaxed text-gray-500">{NFA_TEXT}</p>
        </div>
      </section>
    </div>
  );
}
