import type { Metadata } from 'next';
import MarginalRateTables from '@/components/reference/MarginalRateTables';
import { SOURCE_REVIEWED_LABEL } from '@/data/marginal-rates-2027';

export const metadata: Metadata = {
  title: '2027 combined marginal tax rates',
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
};

export default function MarginalRatesEmbedPage() {
  return (
    <div className="bg-white text-gray-800 p-4">
      <p className="text-sm font-semibold text-charcoal mb-1">2027 combined marginal tax rates</p>
      <p className="text-xs text-gray-600 mb-4">
        As of {SOURCE_REVIEWED_LABEL}. Statutory bracket rates. Ontario is before surtax. Quebec provincial rates are the 2026 Revenu Québec figures.
      </p>
      <MarginalRateTables embed />
    </div>
  );
}
