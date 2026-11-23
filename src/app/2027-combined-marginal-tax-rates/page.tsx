import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import EducationNote from '@/components/reference/EducationNote';
import MarginalRateTables, { marginalRatesEmbedSnippet } from '@/components/reference/MarginalRateTables';
import ReferenceByline from '@/components/reference/ReferenceByline';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import {
  CRA_INDIVIDUAL_RATES_URL,
  CRA_T4127_2027_URL,
  FINANCE_QUEBEC_ABATEMENT_URL,
  JURISDICTIONS,
  ONTARIO_SURTAX_FIRST_RATE,
  ONTARIO_SURTAX_FIRST_THRESHOLD,
  ONTARIO_SURTAX_SECOND_RATE,
  ONTARIO_SURTAX_SECOND_THRESHOLD,
  QUEBEC_ABATEMENT,
  REVENU_QUEBEC_RATES_URL,
  SOURCE_REVIEWED_ISO,
  SOURCE_REVIEWED_LABEL,
} from '@/data/marginal-rates-2027';
import { formatDollars, formatRate } from '@/lib/money';
import { absoluteUrl, AUTHOR_URL, breadcrumbSchema, buildPageMetadata, SITE_NAME } from '@/lib/site';

const PATH = '/2027-combined-marginal-tax-rates/';
const TITLE = '2027 combined marginal tax rates by province';

export const metadata: Metadata = buildPageMetadata({
  title: TITLE,
  description:
    '2027 federal and provincial tax brackets for all 13 jurisdictions, and the combined marginal rate on each slice. Quebec uses 2026 provincial rates.',
  path: PATH,
});

function quebecRatesSentence(): string {
  const quebec = JURISDICTIONS.find((item) => item.code === 'QC');
  if (!quebec) return '';
  return quebec.brackets
    .map((bracket, index) => {
      const next = quebec.brackets[index + 1];
      const piece = next
        ? `${formatRate(bracket.rate)} to ${formatDollars(next.from)}`
        : `${formatRate(bracket.rate)} above ${formatDollars(bracket.from)}`;
      return index === 0 ? piece : `then ${piece}`;
    })
    .join(', ');
}

export default function MarginalRatesPage() {
  const embed = marginalRatesEmbedSnippet();
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: TITLE,
      url: absoluteUrl(PATH),
      dateModified: SOURCE_REVIEWED_ISO,
      author: { '@type': 'Person', name: 'Andrew', url: AUTHOR_URL },
      publisher: { '@type': 'Organization', name: SITE_NAME },
    },
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Taxes', path: '/category/taxes/' },
      { name: '2027 combined marginal tax rates', path: PATH },
    ]),
  ];

  return (
    <div className="bg-white min-h-screen py-16">
      <SchemaMarkup data={schemas} />
      <article className="container mx-auto px-4 max-w-4xl text-gray-700">
        <Breadcrumbs
          items={[
            { label: 'Taxes', href: '/category/taxes/' },
            { label: '2027 combined marginal tax rates' },
          ]}
        />
        <p className="text-sm font-semibold uppercase tracking-wide text-canadian-red mb-3">Reference</p>
        <h1 className="text-4xl font-bold text-charcoal mb-4">{TITLE}</h1>
        <ReferenceByline />
        <p className="text-lg leading-relaxed mb-4">
          For 12 provinces and territories, the 2027 federal rate plus the 2027 provincial or territorial rate is the combined marginal rate in the tables below. Quebec&apos;s 2027 provincial brackets are not yet announced by Revenu Québec, so those rows keep the 2026 Quebec rates and label the year. The rates live with the other tax references on the{' '}
          <Link href="/category/taxes/" className="text-canadian-red font-semibold hover:underline">taxes</Link> hub.
        </p>
        <EducationNote />

        <h2 className="text-2xl font-bold text-charcoal mt-2 mb-3">Where the 2027 rates are published</h2>
        <p className="mb-4">
          CRA&apos;s{' '}
          <a href={CRA_INDIVIDUAL_RATES_URL} className="text-canadian-red font-semibold hover:underline">Canadian income tax rates for individuals</a>{' '}
          page, reviewed {SOURCE_REVIEWED_LABEL}, lists 2026 as the latest year for a tax return. It does not yet print 2027 brackets. The 2027 federal brackets, and the 2027 brackets for every province and territory except Quebec, are in CRA{' '}
          <a href={CRA_T4127_2027_URL} className="text-canadian-red font-semibold hover:underline">T4127 Payroll Deductions Formulas, 124th edition, effective January 1, 2027</a>, Table 8.1. CRA says that guide reflects changes that apply if enacted as proposed, and tells employers to use it for the first payroll of 2027. The combined column on this page is those two statutory rates added together. It is not a second official table.
        </p>
        <p className="mb-4">
          Quebec is not in T4127. Revenu Québec&apos;s{' '}
          <a href={REVENU_QUEBEC_RATES_URL} className="text-canadian-red font-semibold hover:underline">taux d&apos;imposition</a>{' '}
          page publishes 2026 rates ({quebecRatesSentence()}) and does not publish 2027. Not yet announced by Revenu Québec. The Quebec combined rate uses the 2027 federal rate after the {formatRate(QUEBEC_ABATEMENT)} abatement, plus that 2026 provincial rate. The abatement is {formatRate(QUEBEC_ABATEMENT)} of basic federal tax in T4127 Table 8.2 and on the{' '}
          <a href={FINANCE_QUEBEC_ABATEMENT_URL} className="text-canadian-red font-semibold hover:underline">Department of Finance Quebec abatement</a> page.
        </p>
        <p className="mb-8">
          Ontario&apos;s surtax is separate from the bracket rate. T4127 sets it at {formatRate(ONTARIO_SURTAX_FIRST_RATE)} of basic Ontario tax above {formatDollars(ONTARIO_SURTAX_FIRST_THRESHOLD)}, plus a further {formatRate(ONTARIO_SURTAX_SECOND_RATE)} above {formatDollars(ONTARIO_SURTAX_SECOND_THRESHOLD)}. The Ontario rows are the bracket rates before that surtax. Credits, the basic personal amount, and payroll deductions are not in any combined rate here.
        </p>

        <MarginalRateTables />

        <h2 className="text-2xl font-bold text-charcoal mt-4 mb-3">Embed this table</h2>
        <p className="mb-3">
          The snippet loads a lightweight copy of the tables. The credit line inside the frame links back with the words Canadian Optimizer and no other anchor text.
        </p>
        <textarea
          readOnly
          value={embed}
          rows={4}
          className="w-full font-mono text-sm p-3 border border-gray-300 rounded-lg bg-light-slate"
          aria-label="Iframe embed code"
        />

        <h2 className="text-2xl font-bold text-charcoal mt-10 mb-3">Related</h2>
        <ul className="list-disc pl-5 mb-8 space-y-2">
          <li>
            <Link href="/2027-contribution-limits/" className="text-canadian-red font-semibold hover:underline">2027 contribution limits</Link>
          </li>
          <li>
            <Link href="/tfsa-rrsp-fhsa-calculator/" className="text-canadian-red font-semibold hover:underline">TFSA vs RRSP vs FHSA calculator</Link>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mt-10 mb-3">Sources</h2>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>
            <a href={CRA_T4127_2027_URL} className="text-canadian-red hover:underline">CRA: T4127 Payroll Deductions Formulas, 124th edition, effective January 1, 2027</a>, Table 8.1 and Table 8.2, reviewed {SOURCE_REVIEWED_LABEL}
          </li>
          <li>
            <a href={CRA_INDIVIDUAL_RATES_URL} className="text-canadian-red hover:underline">CRA: Canadian income tax rates for individuals</a>, reviewed {SOURCE_REVIEWED_LABEL}. Latest return year listed: 2026.
          </li>
          <li>
            <a href={REVENU_QUEBEC_RATES_URL} className="text-canadian-red hover:underline">Revenu Québec: Taux d&apos;imposition</a>, 2026 rates, reviewed {SOURCE_REVIEWED_LABEL}. 2027 not published.
          </li>
          <li>
            <a href={FINANCE_QUEBEC_ABATEMENT_URL} className="text-canadian-red hover:underline">Department of Finance: Quebec abatement</a>, reviewed {SOURCE_REVIEWED_LABEL}
          </li>
        </ul>
        <p className="text-sm text-gray-500">Author: Andrew. As of {SOURCE_REVIEWED_LABEL}.</p>
      </article>
    </div>
  );
}
