/**
 * Official registered-account limits shared by the 2027 limits page and the
 * TFSA / RRSP / FHSA calculator. Every dollar figure is copied from a page
 * that was open on SOURCE_REVIEWED_ISO. Nothing here is indexed, rounded
 * forward, or filled in from a prior year.
 */
import { SOURCE_REVIEWED_ISO, SOURCE_REVIEWED_LABEL } from './source-review';

export { SOURCE_REVIEWED_ISO, SOURCE_REVIEWED_LABEL };

export const CRA_LIMITS_URL =
  'https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html';
export const CRA_TFSA_BEFORE_URL =
  'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/contributing/before.html';
export const CRA_RRSP_DEDUCTION_URL =
  'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/contributing-a-rrsp-prpp/contributions-affect-your-rrsp-prpp-deduction-limit.html';
export const CRA_FHSA_PARTICIPATION_URL =
  'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account/contributing-your-fhsa.html';
export const CRA_FHSA_WITHDRAWAL_URL =
  'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account/withdrawing-money-from-your-fhsa.html';
export const CRA_RESP_CONTRIBUTIONS_URL =
  'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/registered-education-savings-plans-resps/resp-contributions.html';
export const CRA_CESG_URL =
  'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/registered-education-savings-plans-resps/canada-education-savings-programs-cesp/canada-education-savings-grant-cesg.html';

/**
 * CRA indexation adjustment page. The 2027 TFSA dollar limit is the
 * "Annual TFSA dollar limit" row, footnote 5. Reviewed November 27, 2026.
 */
export const CRA_INDEXATION_URL =
  'https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/adjustment-personal-income-tax-benefit-amounts.html';

/** Date the 2027 TFSA dollar limit was read on the CRA indexation page. */
export const TFSA_LIMITS_REVIEWED_ISO = '2026-11-27';
export const TFSA_LIMITS_REVIEWED_LABEL = 'November 27, 2026';

/** Indexation increase printed for 2027 on the CRA indexation page. */
export const TFSA_INDEXATION_INCREASE_2027 = '2.6%';

export type AnnualLimit = {
  year: number;
  /** Dollar limit printed for that year. Null when the year is not on the page. */
  limit: number | null;
};

/**
 * TFSA dollar limits. 2009–2026 are the CRA limits table.
 * 2027 is the annual TFSA dollar limit on the CRA indexation page
 * (footnote 5: $5,000 indexed to inflation after 2009, rounded to the nearest $500).
 */
export const TFSA_ANNUAL_LIMITS: AnnualLimit[] = [
  { year: 2009, limit: 5_000 },
  { year: 2010, limit: 5_000 },
  { year: 2011, limit: 5_000 },
  { year: 2012, limit: 5_000 },
  { year: 2013, limit: 5_500 },
  { year: 2014, limit: 5_500 },
  { year: 2015, limit: 10_000 },
  { year: 2016, limit: 5_500 },
  { year: 2017, limit: 5_500 },
  { year: 2018, limit: 5_500 },
  { year: 2019, limit: 6_000 },
  { year: 2020, limit: 6_000 },
  { year: 2021, limit: 6_000 },
  { year: 2022, limit: 6_000 },
  { year: 2023, limit: 6_500 },
  { year: 2024, limit: 7_000 },
  { year: 2025, limit: 7_000 },
  { year: 2026, limit: 7_000 },
  { year: 2027, limit: 7_500 },
];

export const TFSA_LIMIT_2026 = 7_000;
export const TFSA_LIMIT_2027 = 7_500;
export const TFSA_LATEST_PUBLISHED_YEAR = 2027;
export const TFSA_LATEST_ANNUAL_LIMIT = TFSA_LIMIT_2027;

function sumLimitsThrough(year: number): number {
  return TFSA_ANNUAL_LIMITS.reduce((sum, row) => sum + (row.year <= year && row.limit != null ? row.limit : 0), 0);
}

/** Sum of every published annual limit from 2009 through 2026. */
export const TFSA_CUMULATIVE_THROUGH_2026 = sumLimitsThrough(2026);

/** Sum of every published annual limit from 2009 through 2027. */
export const TFSA_CUMULATIVE_SINCE_2009 = sumLimitsThrough(2027);

if (TFSA_CUMULATIVE_THROUGH_2026 !== 109_000) {
  throw new Error(
    `TFSA cumulative through 2026 (${TFSA_CUMULATIVE_THROUGH_2026}) is not the sum of the published annual limits`
  );
}

if (TFSA_CUMULATIVE_SINCE_2009 !== 116_500) {
  throw new Error(
    `TFSA cumulative through 2027 (${TFSA_CUMULATIVE_SINCE_2009}) is not the sum of the published annual limits`
  );
}

export type LimitGroup = {
  startYear: number;
  endYear: number;
  limit: number;
  years: number;
  subtotal: number;
};

/** Consecutive years that share a published dollar limit, for the addition line. */
export function groupPublishedTfsaLimits(rows: AnnualLimit[] = TFSA_ANNUAL_LIMITS): LimitGroup[] {
  const groups: LimitGroup[] = [];
  for (const row of rows) {
    if (row.limit == null) continue;
    const last = groups[groups.length - 1];
    if (last && last.limit === row.limit && last.endYear === row.year - 1) {
      last.endYear = row.year;
      last.years += 1;
      last.subtotal += row.limit;
    } else {
      groups.push({
        startYear: row.year,
        endYear: row.year,
        limit: row.limit,
        years: 1,
        subtotal: row.limit,
      });
    }
  }
  return groups;
}

/** RRSP dollar limits on the same CRA table. The 18% rule is a separate page. */
export const RRSP_DOLLAR_LIMITS: AnnualLimit[] = [
  { year: 2026, limit: 33_810 },
  { year: 2027, limit: 35_390 },
];

export const RRSP_DOLLAR_LIMIT_2027 = 35_390;
export const RRSP_EARNED_INCOME_FRACTION = 0.18;

/**
 * FHSA amounts on the CRA participation-room page.
 * Opening-year room is $8,000. The carryforward used in a later year is the
 * lesser of $8,000 and CRA's unused-room formula. The same page's lifetime
 * term in the participation-room formula is $40,000. CRA's example of a first
 * year with no contributions shows $16,000 of room the next year.
 */
export const FHSA_ANNUAL_LIMIT = 8_000;
export const FHSA_CARRYFORWARD_CAP = 8_000;
export const FHSA_LIFETIME_LIMIT = 40_000;
export const FHSA_MAX_WITH_FULL_CARRYFORWARD = FHSA_ANNUAL_LIMIT + FHSA_CARRYFORWARD_CAP;

/** RESP lifetime contribution limit for 2007 and later years. No annual cap. */
export const RESP_LIFETIME_LIMIT = 50_000;

/**
 * Basic CESG, from the Canada.ca CESG page (ESDC pays the grant).
 * 20% of annual contributions, to a maximum of $500 a year ($1,000 when
 * unused grant room is available), and a lifetime maximum of $7,200.
 * The same page's chart ties the $500 basic grant to the first $2,500.
 */
export const CESG_BASIC_RATE = 0.2;
export const CESG_ANNUAL_BASIC_MAXIMUM = 500;
export const CESG_ANNUAL_WITH_UNUSED_ROOM = 1_000;
export const CESG_LIFETIME_MAXIMUM = 7_200;
export const CESG_CONTRIBUTION_FOR_FULL_BASIC_GRANT = 2_500;

if (Math.round(CESG_CONTRIBUTION_FOR_FULL_BASIC_GRANT * CESG_BASIC_RATE) !== CESG_ANNUAL_BASIC_MAXIMUM) {
  throw new Error('CESG basic grant does not equal 20% of $2,500');
}
