import {
  combinedBands,
  FEDERAL_BRACKETS_2027,
  JURISDICTIONS,
  lowestCombinedRate,
  ONTARIO_SURTAX_FIRST_RATE,
  ONTARIO_SURTAX_FIRST_THRESHOLD,
  ONTARIO_SURTAX_SECOND_RATE,
  ONTARIO_SURTAX_SECOND_THRESHOLD,
  QUEBEC_ABATEMENT,
  topCombinedRate,
  type Jurisdiction,
} from '@/data/marginal-rates-2027';
import { formatDollars, formatRate } from '@/lib/money';
import { SITE_URL } from '@/lib/site';

const CANONICAL_PATH = '/2027-combined-marginal-tax-rates/';

function incomeLabel(from: number, to: number | null): string {
  if (from === 0 && to != null) return `${formatDollars(0)} to ${formatDollars(to)}`;
  if (to == null) return `Over ${formatDollars(from)}`;
  return `Over ${formatDollars(from)} to ${formatDollars(to)}`;
}

function yearLabel(jurisdiction: Jurisdiction): string {
  if (jurisdiction.provincial2027Announced) return '2027';
  return '2027 federal, 2026 Quebec';
}

function SummaryTable({ embed }: { embed: boolean }) {
  const rows = [...JURISDICTIONS].sort((a, b) => topCombinedRate(b) - topCombinedRate(a));
  return (
    <div className="overflow-x-auto mb-8">
      <table className="w-full text-sm border-collapse">
        <caption className="text-left font-semibold text-charcoal mb-2">
          Combined rate on the first dollar of taxable income, and on the top dollar. {embed ? 'Scroll the page for every bracket.' : 'The bracket tables follow.'}
        </caption>
        <thead>
          <tr className="border-b border-gray-200 text-left">
            <th scope="col" className="py-2 pr-3">Province or territory</th>
            <th scope="col" className="py-2 pr-3">Years used</th>
            <th scope="col" className="py-2 pr-3">Lowest combined</th>
            <th scope="col" className="py-2">Top combined</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((jurisdiction) => (
            <tr key={jurisdiction.code} className="border-b border-gray-100">
              <th scope="row" className="py-2 pr-3 font-semibold text-left">
                {jurisdiction.name}
                {jurisdiction.code === 'ON' ? <span className="font-normal text-gray-500"> (before surtax)</span> : null}
              </th>
              <td className="py-2 pr-3">{yearLabel(jurisdiction)}</td>
              <td className="py-2 pr-3">{formatRate(lowestCombinedRate(jurisdiction))}</td>
              <td className="py-2">{formatRate(topCombinedRate(jurisdiction))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BracketTable({ jurisdiction }: { jurisdiction: Jurisdiction }) {
  const bands = combinedBands(jurisdiction);
  const quebec = jurisdiction.code === 'QC';
  return (
    <section className="mb-10" aria-labelledby={`${jurisdiction.code}-heading`}>
      <h3 id={`${jurisdiction.code}-heading`} className="text-xl font-bold text-charcoal mb-1">
        {jurisdiction.name}
      </h3>
      <p className="text-sm text-gray-600 mb-3">
        {quebec
          ? 'Provincial brackets are the 2026 Revenu Québec rates. 2027 Quebec brackets are not on that page. Federal rates are the 2027 T4127 rates after the 16.5% abatement.'
          : 'Federal and provincial brackets are the 2027 rates in CRA T4127, Table 8.1.'}
        {jurisdiction.code === 'ON'
          ? ' Ontario combined rates here are before the surtax on Ontario tax.'
          : ''}
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <caption className="sr-only">
            {jurisdiction.name} brackets and combined marginal rates
          </caption>
          <thead>
            <tr className="border-b border-gray-200 text-left">
              <th scope="col" className="py-2 pr-3">Taxable income</th>
              <th scope="col" className="py-2 pr-3">Federal</th>
              {quebec ? <th scope="col" className="py-2 pr-3">Federal after abatement</th> : null}
              <th scope="col" className="py-2 pr-3">{quebec ? 'Quebec (2026)' : 'Provincial or territorial'}</th>
              <th scope="col" className="py-2">Combined</th>
            </tr>
          </thead>
          <tbody>
            {bands.map((band) => (
              <tr key={band.from} className="border-b border-gray-100">
                <th scope="row" className="py-2 pr-3 font-medium text-left">
                  {incomeLabel(band.from, band.to)}
                </th>
                <td className="py-2 pr-3">{formatRate(band.federal)}</td>
                {quebec ? <td className="py-2 pr-3">{formatRate(band.federalApplied)}</td> : null}
                <td className="py-2 pr-3">{formatRate(band.provincial)}</td>
                <td className="py-2 font-semibold">{formatRate(band.combined)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function MarginalRateTables({ embed = false }: { embed?: boolean }) {
  return (
    <div>
      <SummaryTable embed={embed} />
      <section className="mb-10" aria-labelledby="federal-brackets-heading">
        <h3 id="federal-brackets-heading" className="text-xl font-bold text-charcoal mb-1">
          Federal brackets, 2027
        </h3>
        <p className="text-sm text-gray-600 mb-3">
          CRA T4127, Table 8.1, effective January 1, 2027. Outside Quebec this rate is added to the provincial or territorial rate. In Quebec it is multiplied by {formatRate(1 - QUEBEC_ABATEMENT)} first.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <caption className="sr-only">2027 federal tax brackets</caption>
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th scope="col" className="py-2 pr-3">Taxable income</th>
                <th scope="col" className="py-2">Federal rate</th>
              </tr>
            </thead>
            <tbody>
              {FEDERAL_BRACKETS_2027.map((bracket, index) => {
                const next = FEDERAL_BRACKETS_2027[index + 1];
                return (
                  <tr key={bracket.from} className="border-b border-gray-100">
                    <th scope="row" className="py-2 pr-3 font-medium text-left">
                      {incomeLabel(bracket.from, next ? next.from : null)}
                    </th>
                    <td className="py-2">{formatRate(bracket.rate)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
      {JURISDICTIONS.map((jurisdiction) => (
        <BracketTable key={jurisdiction.code} jurisdiction={jurisdiction} />
      ))}
      <p className="text-sm text-gray-600 mb-4">
        Ontario surtax, from the same T4127 guide: no surtax when basic Ontario tax is {formatDollars(ONTARIO_SURTAX_FIRST_THRESHOLD)} or less; {formatRate(ONTARIO_SURTAX_FIRST_RATE)} of Ontario tax above {formatDollars(ONTARIO_SURTAX_FIRST_THRESHOLD)}; plus {formatRate(ONTARIO_SURTAX_SECOND_RATE)} of Ontario tax above {formatDollars(ONTARIO_SURTAX_SECOND_THRESHOLD)}. Those thresholds are tax amounts, not income amounts. This table does not turn them into an income band.
      </p>
      {embed ? (
        <p className="text-sm text-gray-700 mt-6 pt-4 border-t border-gray-200">
          Rates compiled by{' '}
          <a href={`${SITE_URL}${CANONICAL_PATH}`} className="font-semibold text-canadian-red">
            Canadian Optimizer
          </a>
          .
        </p>
      ) : null}
    </div>
  );
}

export const MARGINAL_RATES_EMBED_PATH = '/embed/combined-marginal-tax-rates/';
export const MARGINAL_RATES_CANONICAL_PATH = CANONICAL_PATH;

export function marginalRatesEmbedSnippet(): string {
  return `<iframe src="${SITE_URL}${MARGINAL_RATES_EMBED_PATH}" title="2027 combined marginal tax rates" width="100%" height="720" style="border:0" loading="lazy"></iframe>`;
}
