import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SessionReference from './SessionReference';
import {
  ALL_PRODUCTS,
  downloadLinks,
  getBook,
  getProduct,
  REFUND_DAYS,
  SUPPORT_PATH,
  type Ebook,
} from '@/data/ebooks';

export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return {
    title: product ? `Thank you: ${product.title}` : 'Thank you',
    robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  };
}

/**
 * Post-purchase page. Stripe Payment Link "After payment" redirects here:
 *   https://canadianoptimizer.com/ebooks/<slug>/thank-you/?session_id={CHECKOUT_SESSION_ID}
 * noindex, not in the sitemap. Download links come from NEXT_PUBLIC_EBOOK_DOWNLOADS
 * at build time; until set, the buttons below are clearly marked placeholders.
 */
export default async function ThankYouPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const links = downloadLinks(product.slug);
  const files =
    product.kind === 'book'
      ? [`${product.title} (${product.formats})`]
      : product.books.map((b) => getBook(b)).filter((b): b is Ebook => Boolean(b)).map((b) => `${b.title} (${b.formats})`);

  return (
    <div className="min-h-[70vh] bg-light-slate py-16">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl md:p-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-canadian-red">Thank you</p>
          <h1 className="mb-4 text-3xl font-black text-charcoal md:text-4xl">Your copy of {product.title}</h1>
          <p className="mb-8 text-gray-600">
            Your payment went through and Stripe has emailed your receipt. Download your files below and save them
            somewhere you will find them again.
          </p>

          {links ? (
            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              {links.folder ? (
                <a href={links.folder} rel="noopener noreferrer" target="_blank" className="rounded-md bg-canadian-red px-6 py-4 text-center font-bold text-white hover:bg-canadian-red-hover">
                  Open your download folder
                </a>
              ) : null}
              {links.zip ? (
                <a href={links.zip} rel="noopener noreferrer" className="rounded-md border-2 border-canadian-red px-6 py-4 text-center font-bold text-canadian-red hover:bg-red-50">
                  Download everything (.zip)
                </a>
              ) : null}
            </div>
          ) : (
            <div className="mb-8 rounded-xl border-2 border-dashed border-amber-400 bg-amber-50 p-5" data-download-placeholder={product.slug}>
              <p className="mb-2 font-bold text-amber-900">[PLACEHOLDER] Download links not configured yet</p>
              <p className="mb-4 text-sm text-amber-900">
                The download buttons for this product have not been set up. Please{' '}
                <Link href={SUPPORT_PATH} className="font-semibold underline">contact us</Link> with the email you used at checkout
                and we will send your files.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <span aria-disabled="true" className="cursor-not-allowed rounded-md bg-gray-200 px-6 py-3 text-center font-bold text-gray-500">
                  [Placeholder] Download folder
                </span>
                <span aria-disabled="true" className="cursor-not-allowed rounded-md bg-gray-200 px-6 py-3 text-center font-bold text-gray-500">
                  [Placeholder] Download .zip
                </span>
              </div>
            </div>
          )}

          <h2 className="mb-2 text-lg font-bold text-charcoal">What you get</h2>
          <ul className="mb-8 list-disc space-y-1 pl-5 text-gray-700">
            {files.map((file) => (
              <li key={file}>{file}</li>
            ))}
          </ul>

          <h2 className="mb-2 text-lg font-bold text-charcoal">Need help?</h2>
          <p className="mb-4 text-gray-600">
            If a link does not open, or you would like a refund within {REFUND_DAYS} days,{' '}
            <Link href={SUPPORT_PATH} className="font-semibold text-canadian-red hover:underline">contact us</Link> and
            include the reference below.
          </p>
          <Suspense fallback={null}>
            <SessionReference />
          </Suspense>
          <p className="mt-8 text-xs text-gray-500">
            This copy is for your personal use. Please do not share, post or resell the files.
          </p>
        </div>
      </div>
    </div>
  );
}
