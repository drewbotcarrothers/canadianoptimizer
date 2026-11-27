import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import EducationNote from '@/components/reference/EducationNote';
import ReferenceByline from '@/components/reference/ReferenceByline';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import TfsaRrspFhsaCalculator from '@/components/tools/TfsaRrspFhsaCalculator';
import {
  CESG_ANNUAL_BASIC_MAXIMUM,
  CRA_FHSA_PARTICIPATION_URL,
  CRA_FHSA_WITHDRAWAL_URL,
  CRA_INDEXATION_URL,
  CRA_LIMITS_URL,
  CRA_RRSP_DEDUCTION_URL,
  FHSA_ANNUAL_LIMIT,
  FHSA_CARRYFORWARD_CAP,
  FHSA_LIFETIME_LIMIT,
  RESP_LIFETIME_LIMIT,
  RRSP_DOLLAR_LIMIT_2027,
  RRSP_EARNED_INCOME_FRACTION,
  SOURCE_REVIEWED_LABEL,
  TFSA_LIMIT_2026,
  TFSA_LIMIT_2027,
  TFSA_LIMITS_REVIEWED_ISO,
  TFSA_LIMITS_REVIEWED_LABEL,
} from '@/data/registered-account-limits';
import { formatDollars, formatRate } from '@/lib/money';
import { absoluteUrl, AUTHOR_URL, breadcrumbSchema, buildPageMetadata, SITE_NAME } from '@/lib/site';

const PATH = '/tfsa-rrsp-fhsa-calculator/';
const TITLE = 'TFSA vs RRSP vs FHSA calculator';

export const metadata: Metadata = buildPageMetadata({
  title: TITLE,
  description:
    'Compare a TFSA, RRSP, and FHSA after tax. You type the rates and the return. The caps are the official CRA limits.',
  path: PATH,
});

export default function AccountCalculatorPage() {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: TITLE,
      url: absoluteUrl(PATH),
      dateModified: TFSA_LIMITS_REVIEWED_ISO,
      author: { '@type': 'Person', name: 'Andrew', url: AUTHOR_URL },
      publisher: { '@type': 'Organization', name: SITE_NAME },
    },
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Taxes', path: '/category/taxes/' },
      { name: 'TFSA vs RRSP vs FHSA calculator', path: PATH },
    ]),
  ];

  return (
    <div className="bg-white min-h-screen py-16">
      <SchemaMarkup data={schemas} />
      <article className="container mx-auto px-4 max-w-3xl text-gray-700">
        <Breadcrumbs
          items={[
            { label: 'Taxes', href: '/category/taxes/' },
            { label: 'TFSA vs RRSP vs FHSA calculator' },
          ]}
        />
        <p className="text-sm font-semibold uppercase tracking-wide text-canadian-red mb-3">Reference</p>
        <h1 className="text-4xl font-bold text-charcoal mb-4">{TITLE}</h1>
        <ReferenceByline asOf={TFSA_LIMITS_REVIEWED_LABEL} />
        <p className="text-lg leading-relaxed mb-4">
          A pre-tax dollar in an RRSP is taxed on the way out. The same dollar in a TFSA is taxed on the way in. An FHSA qualifying withdrawal can be deductible on the way in and untaxed on the way out, inside the official limits. Type your own rates. This calculator does not look up a bracket for you. The caps are the figures on the{' '}
          <Link href="/2027-contribution-limits/" className="text-canadian-red font-semibold hover:underline">2027 contribution limits</Link> page, which is linked from the{' '}
          <Link href="/category/taxes/" className="text-canadian-red font-semibold hover:underline">taxes</Link> hub.
        </p>
        <EducationNote />

        <h2 className="text-2xl font-bold text-charcoal mb-3">Limits this calculator is allowed to use</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <caption className="text-left font-semibold text-charcoal mb-2">
              Caps applied to each year of the comparison, as of {TFSA_LIMITS_REVIEWED_LABEL}
            </caption>
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th scope="col" className="py-2 pr-3">Account</th>
                <th scope="col" className="py-2 pr-3">Cap used</th>
                <th scope="col" className="py-2">Source</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <th scope="row" className="py-2 pr-3 text-left">TFSA</th>
                <td className="py-2 pr-3">
                  {formatDollars(TFSA_LIMIT_2027)} a year, the 2027 dollar limit, effective January 1, 2027. The 2026 dollar limit stays {formatDollars(TFSA_LIMIT_2026)}.
                </td>
                <td className="py-2">
                  <a href={CRA_INDEXATION_URL} className="text-canadian-red hover:underline">CRA indexation page</a>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <th scope="row" className="py-2 pr-3 text-left">RRSP</th>
                <td className="py-2 pr-3">
                  The lesser of the 2027 dollar limit of {formatDollars(RRSP_DOLLAR_LIMIT_2027)} and {formatRate(RRSP_EARNED_INCOME_FRACTION)} of prior-year earned income, when you enter that income.
                </td>
                <td className="py-2">
                  <a href={CRA_LIMITS_URL} className="text-canadian-red hover:underline">CRA limits table</a>
                  {' '}and the{' '}
                  <a href={CRA_RRSP_DEDUCTION_URL} className="text-canadian-red hover:underline">deduction-limit page</a>
                </td>
              </tr>
              <tr>
                <th scope="row" className="py-2 pr-3 text-left">FHSA</th>
                <td className="py-2 pr-3">
                  {formatDollars(FHSA_ANNUAL_LIMIT)} in the opening year, carryforward capped at {formatDollars(FHSA_CARRYFORWARD_CAP)}, lifetime {formatDollars(FHSA_LIFETIME_LIMIT)}.
                </td>
                <td className="py-2">
                  <a href={CRA_FHSA_PARTICIPATION_URL} className="text-canadian-red hover:underline">CRA FHSA participation room</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-6 text-sm">
          The RESP lifetime limit of {formatDollars(RESP_LIFETIME_LIMIT)} and the CESG annual maximum of {formatDollars(CESG_ANNUAL_BASIC_MAXIMUM)} are on the limits page. They are not inputs here.
        </p>

        <noscript>
          <p className="mb-4 font-semibold text-charcoal">
            Turn on JavaScript to run the comparison. The limits in the table above are still the official figures.
          </p>
        </noscript>
        <TfsaRrspFhsaCalculator />

        <h2 className="text-2xl font-bold text-charcoal mb-3">Assumptions</h2>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>The contribution is pre-tax. An RRSP contribution, and an FHSA contribution, go in whole because they are deductible. A TFSA receives what is left after the current marginal rate you type.</li>
          <li>Each deposit is made at the start of the year and earns the return you type for every year it is invested, including the year it goes in. The return is constant, compounded once a year, with no fees.</li>
          <li>An RRSP withdrawal is taxed at the retirement marginal rate you type. A TFSA withdrawal is not taxed. The FHSA result is a qualifying withdrawal, which the CRA says is not included in income when every condition is met. A taxable FHSA withdrawal would be included in income. That case is not the column.</li>
          <li>The tool does not apply unused RRSP room, a pension adjustment, credits, surtax, or benefit clawbacks. It does not know your notice of assessment.</li>
          <li>Nothing you type is sent to a server. The arithmetic runs in the browser.</li>
        </ul>
        <p className="mb-8">
          The withdrawal conditions are on the CRA{' '}
          <a href={CRA_FHSA_WITHDRAWAL_URL} className="text-canadian-red font-semibold hover:underline">FHSA withdrawals</a>{' '}
          page. The bracket that might match the rate you type is on the{' '}
          <Link href="/2027-combined-marginal-tax-rates/" className="text-canadian-red font-semibold hover:underline">combined marginal tax rates</Link> page. This calculator will not pick the bracket for you.
        </p>

        <h2 className="text-2xl font-bold text-charcoal mb-3">Sources</h2>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>
            <a href={CRA_INDEXATION_URL} className="text-canadian-red hover:underline">CRA: Indexation adjustment for personal income tax and benefit amounts</a>, reviewed {TFSA_LIMITS_REVIEWED_LABEL}. 2027 TFSA dollar limit {formatDollars(TFSA_LIMIT_2027)}.
          </li>
          <li>
            <a href={CRA_LIMITS_URL} className="text-canadian-red hover:underline">CRA: MP, DB, RRSP, DPSP, ALDA, TFSA limits, YMPE and the YAMPE</a>, reviewed {SOURCE_REVIEWED_LABEL}
          </li>
          <li>
            <a href={CRA_RRSP_DEDUCTION_URL} className="text-canadian-red hover:underline">CRA: How contributions affect your RRSP deduction limit</a>, reviewed {SOURCE_REVIEWED_LABEL}
          </li>
          <li>
            <a href={CRA_FHSA_PARTICIPATION_URL} className="text-canadian-red hover:underline">CRA: Participating in your FHSAs</a>, reviewed {SOURCE_REVIEWED_LABEL}
          </li>
          <li>
            <a href={CRA_FHSA_WITHDRAWAL_URL} className="text-canadian-red hover:underline">CRA: Withdrawing from your FHSAs</a>, reviewed {SOURCE_REVIEWED_LABEL}
          </li>
        </ul>
        <p className="text-sm text-gray-500">Author: Andrew. As of {TFSA_LIMITS_REVIEWED_LABEL}. The rates and the return in the fields are an illustration until you replace them.</p>
      </article>
    </div>
  );
}
