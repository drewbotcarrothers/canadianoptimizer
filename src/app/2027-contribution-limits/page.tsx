import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import EducationNote from '@/components/reference/EducationNote';
import ReferenceByline from '@/components/reference/ReferenceByline';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import {
  CESG_ANNUAL_BASIC_MAXIMUM,
  CESG_ANNUAL_WITH_UNUSED_ROOM,
  CESG_BASIC_RATE,
  CESG_CONTRIBUTION_FOR_FULL_BASIC_GRANT,
  CESG_LIFETIME_MAXIMUM,
  CRA_CESG_URL,
  CRA_FHSA_PARTICIPATION_URL,
  CRA_INDEXATION_URL,
  CRA_LIMITS_URL,
  CRA_RESP_CONTRIBUTIONS_URL,
  CRA_RRSP_DEDUCTION_URL,
  CRA_TFSA_BEFORE_URL,
  FHSA_ANNUAL_LIMIT,
  FHSA_CARRYFORWARD_CAP,
  FHSA_LIFETIME_LIMIT,
  FHSA_MAX_WITH_FULL_CARRYFORWARD,
  groupPublishedTfsaLimits,
  RESP_LIFETIME_LIMIT,
  RRSP_DOLLAR_LIMIT_2027,
  RRSP_DOLLAR_LIMITS,
  RRSP_EARNED_INCOME_FRACTION,
  SOURCE_REVIEWED_LABEL,
  TFSA_ANNUAL_LIMITS,
  TFSA_CUMULATIVE_SINCE_2009,
  TFSA_CUMULATIVE_THROUGH_2026,
  TFSA_INDEXATION_INCREASE_2027,
  TFSA_LIMIT_2026,
  TFSA_LIMIT_2027,
  TFSA_LIMITS_REVIEWED_ISO,
  TFSA_LIMITS_REVIEWED_LABEL,
} from '@/data/registered-account-limits';
import { formatDollars, formatRate } from '@/lib/money';
import { absoluteUrl, AUTHOR_URL, breadcrumbSchema, buildPageMetadata, SITE_NAME } from '@/lib/site';

const PATH = '/2027-contribution-limits/';
const TITLE = '2027 contribution limits: TFSA, RRSP, FHSA and RESP';

export const metadata: Metadata = buildPageMetadata({
  title: TITLE,
  description:
    `The 2027 TFSA dollar limit is ${formatDollars(TFSA_LIMIT_2027)}, effective January 1, 2027. Cumulative room since 2009 is ${formatDollars(TFSA_CUMULATIVE_SINCE_2009)}. RRSP, FHSA and RESP limits from official pages.`,
  path: PATH,
});

const groups = groupPublishedTfsaLimits();

export default function ContributionLimitsPage() {
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
      { name: '2027 contribution limits', path: PATH },
    ]),
  ];

  return (
    <div className="bg-white min-h-screen py-16">
      <SchemaMarkup data={schemas} />
      <article className="container mx-auto px-4 max-w-3xl text-gray-700">
        <Breadcrumbs
          items={[
            { label: 'Taxes', href: '/category/taxes/' },
            { label: '2027 contribution limits' },
          ]}
        />
        <p className="text-sm font-semibold uppercase tracking-wide text-canadian-red mb-3">Reference</p>
        <h1 className="text-4xl font-bold text-charcoal mb-4">{TITLE}</h1>
        <ReferenceByline asOf={TFSA_LIMITS_REVIEWED_LABEL} />
        <p className="text-lg leading-relaxed mb-4">
          The 2027 TFSA dollar limit is {formatDollars(TFSA_LIMIT_2027)}, effective January 1, 2027. The 2027 RRSP dollar limit is {formatDollars(RRSP_DOLLAR_LIMIT_2027)}. New RRSP room is still the lesser of that ceiling and {formatRate(RRSP_EARNED_INCOME_FRACTION)} of the previous year&apos;s earned income. FHSA and RESP amounts below are the standing limits on the official pages, which are not re-announced each November. This page sits with the other tax references on the{' '}
          <Link href="/category/taxes/" className="text-canadian-red font-semibold hover:underline">taxes</Link> hub.
        </p>
        <EducationNote />

        <h2 className="text-2xl font-bold text-charcoal mt-10 mb-3">TFSA</h2>
        <p className="bg-light-slate border-l-4 border-canadian-red px-4 py-3 font-semibold text-charcoal mb-4">
          2027 annual dollar limit: {formatDollars(TFSA_LIMIT_2027)}, effective January 1, 2027.
        </p>
        <p className="mb-4">
          The CRA{' '}
          <a href={CRA_INDEXATION_URL} className="text-canadian-red font-semibold hover:underline">indexation adjustment for personal income tax and benefit amounts</a>{' '}
          page, reviewed {TFSA_LIMITS_REVIEWED_LABEL}, sets the 2027 indexation increase at {TFSA_INDEXATION_INCREASE_2027} and the annual TFSA dollar limit at {formatDollars(TFSA_LIMIT_2027)}. The same row lists {formatDollars(TFSA_LIMIT_2026)} for 2026, 2025, and 2024. Footnote 5 says that for 2016 and each subsequent year the annual TFSA dollar limit is fixed at $5,000, indexed to inflation for each year after 2009, and rounded to the nearest $500. The 2009–2026 amounts in the table below are the CRA{' '}
          <a href={CRA_LIMITS_URL} className="text-canadian-red font-semibold hover:underline">MP, DB, RRSP, DPSP, ALDA, TFSA limits, YMPE and the YAMPE</a>{' '}
          table, also described on the{' '}
          <a href={CRA_TFSA_BEFORE_URL} className="text-canadian-red font-semibold hover:underline">before you contribute</a>{' '}
          page. Those two pages were reviewed {SOURCE_REVIEWED_LABEL}.
        </p>
        <p className="mb-4">
          Cumulative room since 2009, for someone eligible in every year from 2009 through 2027 who has never contributed or withdrawn, is {formatDollars(TFSA_CUMULATIVE_SINCE_2009)} from January 1, 2027. That figure is the sum of the annual limits in the table below ({formatDollars(TFSA_CUMULATIVE_THROUGH_2026)} through 2026, plus the {formatDollars(TFSA_LIMIT_2027)} for 2027). It is not a balance the CRA prints as one number, and it is not your room if you were younger than 18, not a resident, or you have already contributed or withdrawn.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <caption className="text-left font-semibold text-charcoal mb-2">
              TFSA dollar limit by year. 2009–2026: CRA limits table. 2027: CRA indexation page.
            </caption>
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th scope="col" className="py-2 pr-3">Year</th>
                <th scope="col" className="py-2">Dollar limit</th>
              </tr>
            </thead>
            <tbody>
              {TFSA_ANNUAL_LIMITS.map((row) => (
                <tr key={row.year} className="border-b border-gray-100">
                  <th scope="row" className="py-2 pr-3 text-left font-medium">{row.year}</th>
                  <td className="py-2">
                    {row.limit == null ? '—' : formatDollars(row.limit)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-4">
          The same limits add up as{' '}
          {groups.map((group, index) => {
            const label = group.startYear === group.endYear
              ? String(group.startYear)
              : `${group.startYear}–${group.endYear}`;
            const piece = group.years === 1
              ? `${label}: ${formatDollars(group.subtotal)}`
              : `${label}: ${group.years} × ${formatDollars(group.limit)} = ${formatDollars(group.subtotal)}`;
            return (
              <span key={group.startYear}>
                {index > 0 ? '; ' : ''}
                {piece}
              </span>
            );
          })}
          . Total through 2026: {formatDollars(TFSA_CUMULATIVE_THROUGH_2026)}. Total through 2027: {formatDollars(TFSA_CUMULATIVE_SINCE_2009)}.
        </p>

        <h2 className="text-2xl font-bold text-charcoal mt-10 mb-3">RRSP</h2>
        <p className="mb-4">
          The 2027 RRSP dollar limit is {formatDollars(RRSP_DOLLAR_LIMIT_2027)}, on the CRA{' '}
          <a href={CRA_LIMITS_URL} className="text-canadian-red font-semibold hover:underline">limits table</a>.
          The {RRSP_DOLLAR_LIMITS.find((row) => row.year === 2026)?.year} dollar limit on that table is {formatDollars(RRSP_DOLLAR_LIMITS.find((row) => row.year === 2026)?.limit ?? 0)}.
        </p>
        <p className="mb-4">
          Your own new room is not the dollar limit. CRA&apos;s{' '}
          <a href={CRA_RRSP_DEDUCTION_URL} className="text-canadian-red font-semibold hover:underline">RRSP deduction limit</a>{' '}
          page calculates it as unused room from the year before, plus the lesser of {formatRate(RRSP_EARNED_INCOME_FRACTION)} of the previous year&apos;s earned income and the annual RRSP limit, minus a pension adjustment, plus a pension adjustment reversal, minus a net past service pension adjustment. The worked example on that page uses the 2026 annual limit. The 2027 ceiling to drop into that same formula is the {formatDollars(RRSP_DOLLAR_LIMIT_2027)} on the limits table. The notice of assessment is the room you can deduct.
        </p>

        <h2 className="text-2xl font-bold text-charcoal mt-10 mb-3">FHSA</h2>
        <p className="mb-4">
          CRA&apos;s{' '}
          <a href={CRA_FHSA_PARTICIPATION_URL} className="text-canadian-red font-semibold hover:underline">FHSA participation room</a>{' '}
          page sets three amounts that are not a separate 2027 announcement:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>Annual participation room in the year you open your first FHSA: {formatDollars(FHSA_ANNUAL_LIMIT)}.</li>
          <li>
            Carryforward: in later years, unused participation room carries forward, and the carryforward is the lesser of {formatDollars(FHSA_CARRYFORWARD_CAP)} and the unused-room formula on that page. CRA&apos;s own example of a first year with no contributions shows {formatDollars(FHSA_MAX_WITH_FULL_CARRYFORWARD)} of participation room the next year ({formatDollars(FHSA_ANNUAL_LIMIT)} plus {formatDollars(FHSA_CARRYFORWARD_CAP)} of carryforward).
          </li>
          <li>Lifetime: the participation-room formula caps contributions and transfers at {formatDollars(FHSA_LIFETIME_LIMIT)}.</li>
        </ul>
        <p className="mb-4">
          There is no first-year catch-up. The opening year is {formatDollars(FHSA_ANNUAL_LIMIT)}, not {formatDollars(FHSA_MAX_WITH_FULL_CARRYFORWARD)}. These amounts were still the ones printed on the page on {SOURCE_REVIEWED_LABEL}.
        </p>

        <h2 className="text-2xl font-bold text-charcoal mt-10 mb-3">RESP and the CESG</h2>
        <p className="mb-4">
          The lifetime RESP contribution limit for 2007 and later years is {formatDollars(RESP_LIFETIME_LIMIT)} per beneficiary, on the CRA{' '}
          <a href={CRA_RESP_CONTRIBUTIONS_URL} className="text-canadian-red font-semibold hover:underline">RESP contributions</a>{' '}
          page. The same page says there is no annual contribution limit for 2007 and later years. Grants paid into the plan do not count toward the {formatDollars(RESP_LIFETIME_LIMIT)}.
        </p>
        <p className="mb-4">
          The basic Canada Education Savings Grant is {formatRate(CESG_BASIC_RATE)} of annual contributions, to a maximum of {formatDollars(CESG_ANNUAL_BASIC_MAXIMUM)} a year, or {formatDollars(CESG_ANNUAL_WITH_UNUSED_ROOM)} when unused grant room from a previous year is available. The lifetime grant maximum is {formatDollars(CESG_LIFETIME_MAXIMUM)}. Employment and Social Development Canada pays the grant. The figures are on the Canada.ca{' '}
          <a href={CRA_CESG_URL} className="text-canadian-red font-semibold hover:underline">Canada Education Savings Grant</a>{' '}
          page. That page&apos;s chart ties the {formatDollars(CESG_ANNUAL_BASIC_MAXIMUM)} basic grant to the first {formatDollars(CESG_CONTRIBUTION_FOR_FULL_BASIC_GRANT)} of annual contributions ({formatRate(CESG_BASIC_RATE)} of {formatDollars(CESG_CONTRIBUTION_FOR_FULL_BASIC_GRANT)}). The {formatDollars(CESG_CONTRIBUTION_FOR_FULL_BASIC_GRANT)} is the contribution that earns the full basic grant. It is not an annual cap on what you can put into an RESP. The same page also describes an additional grant that depends on adjusted family net income. Use the income bands on that page. They are not restated here.
        </p>

        <h2 className="text-2xl font-bold text-charcoal mt-10 mb-3">Use the numbers</h2>
        <ul className="list-disc pl-5 mb-8 space-y-2">
          <li>
            <Link href="/2027-combined-marginal-tax-rates/" className="text-canadian-red font-semibold hover:underline">2027 combined marginal tax rates</Link> for the bracket that applies to an RRSP deduction.
          </li>
          <li>
            <Link href="/tfsa-rrsp-fhsa-calculator/" className="text-canadian-red font-semibold hover:underline">TFSA vs RRSP vs FHSA calculator</Link>, which caps contributions at the limits on this page.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-charcoal mt-10 mb-3">Sources</h2>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>
            <a href={CRA_INDEXATION_URL} className="text-canadian-red hover:underline">CRA: Indexation adjustment for personal income tax and benefit amounts</a>, reviewed {TFSA_LIMITS_REVIEWED_LABEL}. 2027 indexation increase {TFSA_INDEXATION_INCREASE_2027}. Annual TFSA dollar limit {formatDollars(TFSA_LIMIT_2027)} for 2027 and {formatDollars(TFSA_LIMIT_2026)} for 2026, 2025, and 2024. Footnote 5.
          </li>
          <li>
            <a href={CRA_LIMITS_URL} className="text-canadian-red hover:underline">CRA: MP, DB, RRSP, DPSP, ALDA, TFSA limits, YMPE and the YAMPE</a>, reviewed {SOURCE_REVIEWED_LABEL}
          </li>
          <li>
            <a href={CRA_TFSA_BEFORE_URL} className="text-canadian-red hover:underline">CRA: Before you contribute to a TFSA</a>, reviewed {SOURCE_REVIEWED_LABEL}
          </li>
          <li>
            <a href={CRA_RRSP_DEDUCTION_URL} className="text-canadian-red hover:underline">CRA: How contributions affect your RRSP deduction limit</a>, reviewed {SOURCE_REVIEWED_LABEL}
          </li>
          <li>
            <a href={CRA_FHSA_PARTICIPATION_URL} className="text-canadian-red hover:underline">CRA: Participating in your FHSAs</a>, reviewed {SOURCE_REVIEWED_LABEL}
          </li>
          <li>
            <a href={CRA_RESP_CONTRIBUTIONS_URL} className="text-canadian-red hover:underline">CRA: Registered Education Savings Plans contributions</a>, reviewed {SOURCE_REVIEWED_LABEL}
          </li>
          <li>
            <a href={CRA_CESG_URL} className="text-canadian-red hover:underline">Canada.ca: Canada Education Savings Grant (ESDC pays the grant)</a>, reviewed {SOURCE_REVIEWED_LABEL}
          </li>
        </ul>
        <p className="text-sm text-gray-500">Author: Andrew. As of {TFSA_LIMITS_REVIEWED_LABEL}.</p>
      </article>
    </div>
  );
}
