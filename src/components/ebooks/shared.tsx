import Image from 'next/image';
import Link from 'next/link';
import {
  formatPrice,
  getProduct,
  isBuyable,
  REFUND_DAYS,
  SUPPORT_PATH,
  type EbookFaq,
  type ProductSlug,
} from '@/data/ebooks';

/** Andrew's approved bio (verbatim, approved 2026-09-30). Do not add claims. */
export const ANDREW_BIO =
  'Andrew is a personal finance expert, DIY investor and life optimizer based in Toronto, Canada. With over 19 years of corporate experience at a leading Canadian company, Andrew combines deep industry knowledge with a passion for technology to help others navigate personal finance and streamline their daily lives.';

export const NFA_TEXT =
  'For education only. This book is general information, not financial, tax, legal or insurance advice, and it does not know your situation. Rules and amounts change; check the official source before you act, and consider a qualified professional for decisions that are hard to undo.';

export function commonFaqs(slug: ProductSlug, formats: string, pages: string): EbookFaq[] {
  const onSale = isBuyable(slug);
  return [
    {
      question: 'What format is it?',
      answer: `${formats}, ${pages}. It reads on a phone, tablet or computer, and you can print pages for your own use.`,
    },
    {
      question: 'How do I get it after I pay?',
      answer: onSale
        ? 'Checkout is handled by Stripe. Right after you pay, the confirmation page shows your download link, and Stripe emails your receipt. If anything goes wrong, contact us and we will send the files.'
        : 'This book is not on sale yet. When it is, checkout will be handled by Stripe and you will be sent to a download page with your files right after you pay.',
    },
    {
      question: 'Can I get a refund?',
      answer: `Yes. If it is not useful to you, contact us within ${REFUND_DAYS} days of purchase for a full refund.`,
    },
    {
      question: 'Is this financial advice?',
      answer: NFA_TEXT,
    },
    {
      question: 'Who wrote it?',
      answer: `Andrew, who runs Canadian Optimizer. ${ANDREW_BIO}`,
    },
  ];
}

export function FaqList({ faqs }: { faqs: EbookFaq[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <details key={faq.question} className="group rounded-xl border border-gray-200 bg-white p-5 open:shadow-sm">
          <summary className="cursor-pointer list-none font-bold text-charcoal marker:hidden">
            <span className="flex items-center justify-between gap-4">
              {faq.question}
              <span className="text-canadian-red transition-transform group-open:rotate-45" aria-hidden="true">+</span>
            </span>
          </summary>
          <p className="mt-3 leading-relaxed text-gray-600">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function AuthorBox() {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6">
      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-canadian-red text-2xl font-bold text-white" aria-hidden="true">
        A
      </div>
      <div>
        <p className="mb-1 font-bold text-charcoal">
          By <Link href="/about/" className="hover:text-canadian-red">Andrew</Link>
        </p>
        <p className="text-sm leading-relaxed text-gray-600">{ANDREW_BIO}</p>
      </div>
    </div>
  );
}

export function GuaranteeStrip({ freeUpdate }: { freeUpdate?: string }) {
  return (
    <ul className="grid gap-4 text-sm text-gray-700 sm:grid-cols-3">
      <li className="rounded-xl bg-white p-4 shadow-sm">
        <strong className="block text-charcoal">Instant download</strong>
        Secure checkout through Stripe; your download link appears as soon as you pay.
      </li>
      <li className="rounded-xl bg-white p-4 shadow-sm">
        <strong className="block text-charcoal">{REFUND_DAYS}-day refund</strong>
        Not useful? <Link href={SUPPORT_PATH} className="text-canadian-red hover:underline">Contact us</Link> within {REFUND_DAYS} days for a full refund.
      </li>
      <li className="rounded-xl bg-white p-4 shadow-sm">
        <strong className="block text-charcoal">{freeUpdate ? 'Free 2027 update' : 'Dated figures'}</strong>
        {freeUpdate ?? 'Every rate and limit is tied to a date, so you know what to re-check.'}
      </li>
    </ul>
  );
}

export function ProductCard({ slug, context }: { slug: ProductSlug; context: string }) {
  const product = getProduct(slug);
  if (!product) return null;
  const onSale = isBuyable(slug);
  const meta = product.kind === 'book' ? `${product.pages} pages · ${product.chapterCount} chapters` : `${product.books.length} books`;
  return (
    <Link
      href={`/ebooks/${slug}/`}
      data-ebook-card={slug}
      data-context={context}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex items-center justify-center bg-light-slate p-6">
        <Image
          src={product.cover}
          alt={`Cover of ${product.title}`}
          width={200}
          height={259}
          className="h-[259px] w-[200px] rounded shadow-lg transition-transform duration-300 group-hover:-translate-y-1"
        />
      </div>
      <div className="flex flex-grow flex-col p-5">
        <h3 className="mb-1 text-lg font-bold leading-snug text-charcoal group-hover:text-canadian-red">{product.title}</h3>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">{meta}</p>
        <p className="mb-4 flex-grow text-sm text-gray-600">{product.pitch}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-charcoal">{formatPrice(slug)}</span>
          <span className={`rounded-full px-3 py-1 text-xs font-bold ${onSale ? 'bg-canadian-red text-white' : 'bg-gray-100 text-gray-600'}`}>
            {onSale ? 'Available now' : 'Coming soon'}
          </span>
        </div>
      </div>
    </Link>
  );
}
