import type { Metadata } from 'next';
import Link from 'next/link';
import { buildPageMetadata } from '@/lib/site';

export const metadata: Metadata = buildPageMetadata({
  title: 'Advertising and Affiliate Disclosure',
  description:
    'How Canadian Optimizer may earn a commission from affiliate or advertising links, and what that does not change about the price you pay.',
  path: '/disclosure/',
});

export default function Disclosure() {
  return (
    <div className="bg-white min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl prose prose-lg text-gray-700">
        <h1 className="text-4xl font-bold text-charcoal mb-8">Advertising and Affiliate Disclosure</h1>
        <p className="mb-4">Last updated: September 2026</p>

        <p>
          Canadian Optimizer is an educational site. Some pages include links to products, services, or companies. Some of those links may be affiliate links or other advertising links. If you choose to use one and later buy or sign up, we may earn a commission.
        </p>
        <p>
          A commission does not increase the price you pay. We do not name a specific partner, rate, or program on this page, and a link is not a promise that a product fits your situation.
        </p>
        <p>
          Articles are not personalized financial, tax, investment, or legal advice. Check current figures with the issuer or with a primary source such as the CRA before you act. The limits of the site are also described in the{' '}
          <Link href="/disclaimer/" className="text-canadian-red hover:underline">disclaimer</Link>.
        </p>
        <p>
          Questions about a page, including a correction, can be sent from the{' '}
          <Link href="/contact/" className="text-canadian-red hover:underline">contact page</Link>.
        </p>
      </div>
    </div>
  );
}
