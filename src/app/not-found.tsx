import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found',
  description:
    'That page is not on Canadian Optimizer. Browse the tax, investing, and retirement guides from the home page.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center max-w-2xl">
      <h1 className="text-4xl font-bold text-charcoal mb-4">Page not found</h1>
      <p className="text-gray-600 mb-8">
        The address does not match a page on Canadian Optimizer.
      </p>
      <Link href="/" className="text-canadian-red font-semibold hover:underline">
        Back to Canadian Optimizer
      </Link>
    </div>
  );
}
