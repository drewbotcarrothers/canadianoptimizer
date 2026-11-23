/**
 * 2027 statutory income-tax brackets for the combined marginal-rate table.
 *
 * Federal and every province or territory except Quebec: CRA T4127, 124th
 * edition, effective January 1, 2027, Table 8.1 (rates and thresholds) and
 * Table 8.2 (Quebec abatement 0.165, Ontario surtax). CRA says the guide
 * reflects changes that apply if enacted as proposed.
 *
 * Quebec provincial brackets are not in T4127. Revenu Québec's taux
 * d'imposition page, reviewed SOURCE_REVIEWED_ISO, publishes 2026 and 2025
 * and does not publish 2027. The Quebec rows use the 2026 rates.
 *
 * Combined rates are federal + provincial. In Quebec the federal rate is
 * multiplied by (1 − 0.165) first. No bracket below is estimated.
 */
import { SOURCE_REVIEWED_ISO, SOURCE_REVIEWED_LABEL } from './source-review';

export { SOURCE_REVIEWED_ISO, SOURCE_REVIEWED_LABEL };

export const CRA_INDIVIDUAL_RATES_URL =
  'https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/canadian-income-tax-rates-individuals-current-previous-years.html';
export const CRA_T4127_2027_URL =
  'https://www.canada.ca/en/revenue-agency/services/forms-publications/payroll/t4127-payroll-deductions-formulas/t4127-jan/t4127-jan-payroll-deductions-formulas-computer-programs.html';
export const REVENU_QUEBEC_RATES_URL =
  'https://www.revenuquebec.ca/fr/citoyens/declaration-de-revenus/produire-votre-declaration-de-revenus/taux-dimposition/';
export const FINANCE_QUEBEC_ABATEMENT_URL =
  'https://www.canada.ca/en/department-finance/programs/federal-transfers/quebec-abatement.html';

export const QUEBEC_ABATEMENT = 0.165;

/** Ontario surtax on basic provincial tax. CRA T4127 (January 2027). */
export const ONTARIO_SURTAX_FIRST_THRESHOLD = 5_940;
export const ONTARIO_SURTAX_SECOND_THRESHOLD = 7_603;
export const ONTARIO_SURTAX_FIRST_RATE = 0.2;
export const ONTARIO_SURTAX_SECOND_RATE = 0.36;

export type RateBracket = {
  /** This rate applies once taxable income reaches this amount, until the next bracket. */
  from: number;
  rate: number;
};

export type Jurisdiction = {
  code: string;
  name: string;
  /** Year printed on the page the provincial or territorial brackets were copied from. */
  provincialYear: 2026 | 2027;
  /** True when a 2027 provincial table was not on the official page. */
  provincial2027Announced: boolean;
  brackets: RateBracket[];
  /** Subtracted from the federal rate before it is added. 0 outside Quebec. */
  abatement: number;
};

export const FEDERAL_BRACKETS_2027: RateBracket[] = [
  { from: 0, rate: 0.14 },
  { from: 60_044, rate: 0.205 },
  { from: 120_088, rate: 0.26 },
  { from: 186_157, rate: 0.29 },
  { from: 265_203, rate: 0.33 },
];

export const JURISDICTIONS: Jurisdiction[] = [
  {
    code: 'AB',
    name: 'Alberta',
    provincialYear: 2027,
    provincial2027Announced: true,
    abatement: 0,
    brackets: [
      { from: 0, rate: 0.08 },
      { from: 62_424, rate: 0.1 },
      { from: 157_344, rate: 0.12 },
      { from: 188_813, rate: 0.13 },
      { from: 251_750, rate: 0.14 },
      { from: 377_625, rate: 0.15 },
    ],
  },
  {
    code: 'BC',
    name: 'British Columbia',
    provincialYear: 2027,
    provincial2027Announced: true,
    abatement: 0,
    brackets: [
      { from: 0, rate: 0.056 },
      { from: 50_363, rate: 0.077 },
      { from: 100_728, rate: 0.105 },
      { from: 115_648, rate: 0.1229 },
      { from: 140_430, rate: 0.147 },
      { from: 190_405, rate: 0.168 },
      { from: 265_545, rate: 0.205 },
    ],
  },
  {
    code: 'MB',
    name: 'Manitoba',
    provincialYear: 2027,
    provincial2027Announced: true,
    abatement: 0,
    brackets: [
      { from: 0, rate: 0.108 },
      { from: 47_000, rate: 0.1275 },
      { from: 100_000, rate: 0.174 },
    ],
  },
  {
    code: 'NB',
    name: 'New Brunswick',
    provincialYear: 2027,
    provincial2027Announced: true,
    abatement: 0,
    brackets: [
      { from: 0, rate: 0.094 },
      { from: 53_693, rate: 0.14 },
      { from: 107_388, rate: 0.16 },
      { from: 198_902, rate: 0.195 },
    ],
  },
  {
    code: 'NL',
    name: 'Newfoundland and Labrador',
    provincialYear: 2027,
    provincial2027Announced: true,
    abatement: 0,
    brackets: [
      { from: 0, rate: 0.087 },
      { from: 46_152, rate: 0.145 },
      { from: 92_303, rate: 0.158 },
      { from: 164_792, rate: 0.178 },
      { from: 230_710, rate: 0.198 },
      { from: 294_734, rate: 0.208 },
      { from: 589_469, rate: 0.213 },
      { from: 1_178_938, rate: 0.218 },
    ],
  },
  {
    code: 'NS',
    name: 'Nova Scotia',
    provincialYear: 2027,
    provincial2027Announced: true,
    abatement: 0,
    brackets: [
      { from: 0, rate: 0.0879 },
      { from: 32_080, rate: 0.1495 },
      { from: 64_160, rate: 0.1667 },
      { from: 100_827, rate: 0.175 },
      { from: 162_624, rate: 0.21 },
    ],
  },
  {
    code: 'NT',
    name: 'Northwest Territories',
    provincialYear: 2027,
    provincial2027Announced: true,
    abatement: 0,
    brackets: [
      { from: 0, rate: 0.059 },
      { from: 54_381, rate: 0.086 },
      { from: 108_765, rate: 0.122 },
      { from: 176_827, rate: 0.1405 },
    ],
  },
  {
    code: 'NU',
    name: 'Nunavut',
    provincialYear: 2027,
    provincial2027Announced: true,
    abatement: 0,
    brackets: [
      { from: 0, rate: 0.04 },
      { from: 57_252, rate: 0.07 },
      { from: 114_503, rate: 0.09 },
      { from: 186_156, rate: 0.115 },
    ],
  },
  {
    code: 'ON',
    name: 'Ontario',
    provincialYear: 2027,
    provincial2027Announced: true,
    abatement: 0,
    brackets: [
      { from: 0, rate: 0.0505 },
      { from: 55_023, rate: 0.0915 },
      { from: 110_049, rate: 0.1116 },
      { from: 150_000, rate: 0.1216 },
      { from: 220_000, rate: 0.1316 },
    ],
  },
  {
    code: 'PE',
    name: 'Prince Edward Island',
    provincialYear: 2027,
    provincial2027Announced: true,
    abatement: 0,
    brackets: [
      { from: 0, rate: 0.095 },
      { from: 33_928, rate: 0.1347 },
      { from: 65_820, rate: 0.166 },
      { from: 106_890, rate: 0.1762 },
      { from: 142_520, rate: 0.19 },
      { from: 200_000, rate: 0.2 },
    ],
  },
  {
    code: 'QC',
    name: 'Quebec',
    provincialYear: 2026,
    provincial2027Announced: false,
    abatement: QUEBEC_ABATEMENT,
    brackets: [
      { from: 0, rate: 0.14 },
      { from: 54_345, rate: 0.19 },
      { from: 108_680, rate: 0.24 },
      { from: 132_245, rate: 0.2575 },
    ],
  },
  {
    code: 'SK',
    name: 'Saskatchewan',
    provincialYear: 2027,
    provincial2027Announced: true,
    abatement: 0,
    brackets: [
      { from: 0, rate: 0.105 },
      { from: 55_950, rate: 0.125 },
      { from: 159_856, rate: 0.145 },
    ],
  },
  {
    code: 'YT',
    name: 'Yukon',
    provincialYear: 2027,
    provincial2027Announced: true,
    abatement: 0,
    brackets: [
      { from: 0, rate: 0.064 },
      { from: 60_044, rate: 0.09 },
      { from: 120_088, rate: 0.109 },
      { from: 186_157, rate: 0.128 },
      { from: 500_000, rate: 0.15 },
    ],
  },
];

export type CombinedBand = {
  from: number;
  to: number | null;
  federal: number;
  federalApplied: number;
  provincial: number;
  combined: number;
};

export function rateAt(brackets: RateBracket[], income: number): number {
  let rate = brackets[0]?.rate ?? 0;
  for (const bracket of brackets) {
    if (income >= bracket.from) rate = bracket.rate;
    else break;
  }
  return rate;
}

/** Union of the federal and provincial thresholds, with the combined rate on each slice. */
export function combinedBands(jurisdiction: Jurisdiction, federal: RateBracket[] = FEDERAL_BRACKETS_2027): CombinedBand[] {
  const cuts = [...new Set([...federal.map((bracket) => bracket.from), ...jurisdiction.brackets.map((bracket) => bracket.from)])].sort(
    (a, b) => a - b
  );
  return cuts.map((from, index) => {
    const federalRate = rateAt(federal, from);
    const federalApplied = federalRate * (1 - jurisdiction.abatement);
    const provincial = rateAt(jurisdiction.brackets, from);
    return {
      from,
      to: cuts[index + 1] ?? null,
      federal: federalRate,
      federalApplied,
      provincial,
      combined: federalApplied + provincial,
    };
  });
}

export function topCombinedRate(jurisdiction: Jurisdiction): number {
  const bands = combinedBands(jurisdiction);
  return bands[bands.length - 1]?.combined ?? 0;
}

export function lowestCombinedRate(jurisdiction: Jurisdiction): number {
  return combinedBands(jurisdiction)[0]?.combined ?? 0;
}

function assertClose(actual: number, expected: number, label: string) {
  if (Math.abs(actual - expected) > 1e-9) {
    throw new Error(`${label}: ${actual} !== ${expected}`);
  }
}

const byCode = new Map(JURISDICTIONS.map((item) => [item.code, item]));
assertClose(topCombinedRate(byCode.get('BC')!), 0.33 + 0.205, 'BC top');
assertClose(lowestCombinedRate(byCode.get('ON')!), 0.14 + 0.0505, 'ON first');
assertClose(topCombinedRate(byCode.get('QC')!), 0.33 * (1 - QUEBEC_ABATEMENT) + 0.2575, 'QC top');
assertClose(topCombinedRate(byCode.get('NL')!), 0.33 + 0.218, 'NL top');
assertClose(JURISDICTIONS.length, 13, 'jurisdiction count');
