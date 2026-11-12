import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/site';

const SUPPORT_EMAIL = 'contact@canadianoptimizer.com';

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact',
  description:
    'Contact Canadian Optimizer with a question about a strategy, a correction, a download, or a refund at contact@canadianoptimizer.com.',
  path: '/contact/',
});

export default function Contact() {
  return (
    <div className="bg-white min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600">
            Have a question about a strategy? Spotted a tax rule change? Need help with a download or a refund? Email us.
          </p>
        </header>

        <div className="bg-light-slate p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm text-center">
          <p className="text-lg text-gray-700 mb-2">The best way to reach us is email:</p>
          <p className="mb-8">
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-2xl md:text-3xl font-bold text-canadian-red hover:underline break-all"
            >
              {SUPPORT_EMAIL}
            </a>
          </p>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Questions about a guide, a correction, an ebook download, or a refund all go to the same address. If you are writing about a purchase, include your Stripe receipt number.
          </p>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="inline-flex items-center justify-center px-10 py-3 rounded-md font-medium transition-colors duration-200 text-center bg-canadian-red text-white hover:bg-canadian-red-hover"
          >
            Open an email
          </a>
          <p className="text-sm text-gray-500 mt-4">Average response time is 48-72 hours.</p>
        </div>
      </div>
    </div>
  );
}
