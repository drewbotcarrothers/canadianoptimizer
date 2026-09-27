/**
 * 2026 personal income tax on taxable income, by province or territory.
 *
 * Brackets: CRA, "Income tax rates and income thresholds" (2026 tax year),
 * except British Columbia's lowest rate, which is 5.60% for the 2026 tax year
 * (Province of British Columbia; CRA T4127 July 2026 Option 2 annual rate).
 * The 6.14% figure in the July payroll table is a mid-year withholding proration.
 * Quebec brackets: Revenu Québec, "Taux d'imposition" for 2026.
 * Quebec federal abatement: 16.5% (CRA T4127).
 * Basic amounts and the Ontario surtax: CRA T4127 (July 2026) and T4032.
 * Federal BPA phase-out: Income Tax Folio S1-F4-C2.
 *
 * This is not a T1. It taxes the amount entered as taxable income after the
 * basic personal amount (and the Ontario surtax). It does not apply CPP, EI,
 * the Canada employment amount, the Ontario health premium, or the Ontario
 * tax reduction.
 */

export type ProvinceCode =
  | 'AB'
  | 'BC'
  | 'MB'
  | 'NB'
  | 'NL'
  | 'NS'
  | 'NT'
  | 'NU'
  | 'ON'
  | 'PE'
  | 'QC'
  | 'SK'
  | 'YT';

export type Bracket = {
  /** Inclusive upper bound of the band. Infinity for the top band. */
  upTo: number;
  rate: number;
};

export type ProvinceSpec = {
  code: ProvinceCode;
  name: string;
  brackets: Bracket[];
  /** Flat basic personal amount, or 'federal' / 'manitoba' for a formula. */
  basic: number | 'federal' | 'manitoba';
  creditRate: number;
};

export const FEDERAL_BRACKETS: Bracket[] = [
  { upTo: 58_523, rate: 0.14 },
  { upTo: 117_045, rate: 0.205 },
  { upTo: 181_440, rate: 0.26 },
  { upTo: 258_482, rate: 0.29 },
  { upTo: Number.POSITIVE_INFINITY, rate: 0.33 },
];

export const FEDERAL_BPA_MAX = 16_452;
export const FEDERAL_BPA_MIN = 14_829;
export const FEDERAL_BPA_PHASE_START = 181_440;
export const FEDERAL_BPA_PHASE_END = 258_482;
export const FEDERAL_CREDIT_RATE = 0.14;
export const QUEBEC_ABATEMENT = 0.165;

/** Ontario surtax on basic provincial tax payable. CRA T4032-ON, 2026. */
export const ONTARIO_SURTAX_FIRST = 5_818;
export const ONTARIO_SURTAX_SECOND = 7_446;

export const PROVINCES: ProvinceSpec[] = [
  {
    code: 'AB',
    name: 'Alberta',
    basic: 22_769,
    creditRate: 0.08,
    brackets: [
      { upTo: 61_200, rate: 0.08 },
      { upTo: 154_259, rate: 0.1 },
      { upTo: 185_111, rate: 0.12 },
      { upTo: 246_813, rate: 0.13 },
      { upTo: 370_220, rate: 0.14 },
      { upTo: Number.POSITIVE_INFINITY, rate: 0.15 },
    ],
  },
  {
    code: 'BC',
    name: 'British Columbia',
    basic: 13_216,
    creditRate: 0.056,
    brackets: [
      { upTo: 50_363, rate: 0.056 },
      { upTo: 100_728, rate: 0.077 },
      { upTo: 115_648, rate: 0.105 },
      { upTo: 140_430, rate: 0.1229 },
      { upTo: 190_405, rate: 0.147 },
      { upTo: 265_545, rate: 0.168 },
      { upTo: Number.POSITIVE_INFINITY, rate: 0.205 },
    ],
  },
  {
    code: 'MB',
    name: 'Manitoba',
    basic: 'manitoba',
    creditRate: 0.108,
    brackets: [
      { upTo: 47_000, rate: 0.108 },
      { upTo: 100_000, rate: 0.1275 },
      { upTo: Number.POSITIVE_INFINITY, rate: 0.174 },
    ],
  },
  {
    code: 'NB',
    name: 'New Brunswick',
    basic: 13_664,
    creditRate: 0.094,
    brackets: [
      { upTo: 52_333, rate: 0.094 },
      { upTo: 104_666, rate: 0.14 },
      { upTo: 193_861, rate: 0.16 },
      { upTo: Number.POSITIVE_INFINITY, rate: 0.195 },
    ],
  },
  {
    code: 'NL',
    name: 'Newfoundland and Labrador',
    basic: 15_000,
    creditRate: 0.087,
    brackets: [
      { upTo: 44_678, rate: 0.087 },
      { upTo: 89_354, rate: 0.145 },
      { upTo: 159_528, rate: 0.158 },
      { upTo: 223_340, rate: 0.178 },
      { upTo: 285_319, rate: 0.198 },
      { upTo: 570_638, rate: 0.208 },
      { upTo: 1_141_275, rate: 0.213 },
      { upTo: Number.POSITIVE_INFINITY, rate: 0.218 },
    ],
  },
  {
    code: 'NS',
    name: 'Nova Scotia',
    basic: 11_932,
    creditRate: 0.0879,
    brackets: [
      { upTo: 30_995, rate: 0.0879 },
      { upTo: 61_991, rate: 0.1495 },
      { upTo: 97_417, rate: 0.1667 },
      { upTo: 157_124, rate: 0.175 },
      { upTo: Number.POSITIVE_INFINITY, rate: 0.21 },
    ],
  },
  {
    code: 'NT',
    name: 'Northwest Territories',
    basic: 18_198,
    creditRate: 0.059,
    brackets: [
      { upTo: 53_003, rate: 0.059 },
      { upTo: 106_009, rate: 0.086 },
      { upTo: 172_346, rate: 0.122 },
      { upTo: Number.POSITIVE_INFINITY, rate: 0.1405 },
    ],
  },
  {
    code: 'NU',
    name: 'Nunavut',
    basic: 19_659,
    creditRate: 0.04,
    brackets: [
      { upTo: 55_801, rate: 0.04 },
      { upTo: 111_602, rate: 0.07 },
      { upTo: 181_439, rate: 0.09 },
      { upTo: Number.POSITIVE_INFINITY, rate: 0.115 },
    ],
  },
  {
    code: 'ON',
    name: 'Ontario',
    basic: 12_989,
    creditRate: 0.0505,
    brackets: [
      { upTo: 53_891, rate: 0.0505 },
      { upTo: 107_785, rate: 0.0915 },
      { upTo: 150_000, rate: 0.1116 },
      { upTo: 220_000, rate: 0.1216 },
      { upTo: Number.POSITIVE_INFINITY, rate: 0.1316 },
    ],
  },
  {
    code: 'PE',
    name: 'Prince Edward Island',
    basic: 15_000,
    creditRate: 0.095,
    brackets: [
      { upTo: 33_928, rate: 0.095 },
      { upTo: 65_820, rate: 0.1347 },
      { upTo: 106_890, rate: 0.166 },
      { upTo: 142_250, rate: 0.1762 },
      { upTo: Number.POSITIVE_INFINITY, rate: 0.19 },
    ],
  },
  {
    code: 'QC',
    name: 'Quebec',
    basic: 18_952,
    creditRate: 0.14,
    brackets: [
      { upTo: 54_345, rate: 0.14 },
      { upTo: 108_680, rate: 0.19 },
      { upTo: 132_245, rate: 0.24 },
      { upTo: Number.POSITIVE_INFINITY, rate: 0.2575 },
    ],
  },
  {
    code: 'SK',
    name: 'Saskatchewan',
    basic: 20_381,
    creditRate: 0.105,
    brackets: [
      { upTo: 54_532, rate: 0.105 },
      { upTo: 155_805, rate: 0.125 },
      { upTo: Number.POSITIVE_INFINITY, rate: 0.145 },
    ],
  },
  {
    code: 'YT',
    name: 'Yukon',
    basic: 'federal',
    creditRate: 0.064,
    brackets: [
      { upTo: 58_523, rate: 0.064 },
      { upTo: 117_045, rate: 0.09 },
      { upTo: 181_440, rate: 0.109 },
      { upTo: 500_000, rate: 0.128 },
      { upTo: Number.POSITIVE_INFINITY, rate: 0.15 },
    ],
  },
];

export function roundCents(amount: number): number {
  return Math.round((amount + Number.EPSILON) * 100) / 100;
}

export function taxOnBrackets(income: number, brackets: Bracket[]): number {
  if (income <= 0) return 0;
  let tax = 0;
  let previous = 0;
  for (const bracket of brackets) {
    const slice = Math.min(income, bracket.upTo) - previous;
    if (slice > 0) tax += slice * bracket.rate;
    if (income <= bracket.upTo) break;
    previous = bracket.upTo;
  }
  return tax;
}

/** Federal basic personal amount. Folio S1-F4-C2, using the entered income. */
export function federalBasicPersonalAmount(income: number): number {
  if (income <= FEDERAL_BPA_PHASE_START) return FEDERAL_BPA_MAX;
  if (income >= FEDERAL_BPA_PHASE_END) return FEDERAL_BPA_MIN;
  const enhanced = FEDERAL_BPA_MAX - FEDERAL_BPA_MIN;
  const reduction =
    (enhanced * (income - FEDERAL_BPA_PHASE_START)) /
    (FEDERAL_BPA_PHASE_END - FEDERAL_BPA_PHASE_START);
  return FEDERAL_BPA_MAX - reduction;
}

/**
 * Manitoba basic personal amount. CRA: $15,780 at or below $200,000 of income,
 * phased out linearly to zero at $400,000.
 */
export function manitobaBasicPersonalAmount(income: number): number {
  const maximum = 15_780;
  if (income <= 200_000) return maximum;
  if (income >= 400_000) return 0;
  return maximum - (income - 200_000) * (maximum / 200_000);
}

export function basicPersonalAmount(spec: ProvinceSpec, income: number): number {
  if (spec.basic === 'federal') return federalBasicPersonalAmount(income);
  if (spec.basic === 'manitoba') return manitobaBasicPersonalAmount(income);
  return spec.basic;
}

export function marginalRate(income: number, brackets: Bracket[]): number {
  if (income < 0) return 0;
  const probe = income === 0 ? 0 : income;
  for (const bracket of brackets) {
    if (probe <= bracket.upTo) return bracket.rate;
  }
  return brackets[brackets.length - 1]?.rate ?? 0;
}

export function ontarioSurtax(basicProvincialTax: number): number {
  if (basicProvincialTax <= ONTARIO_SURTAX_FIRST) return 0;
  let surtax = 0.2 * (basicProvincialTax - ONTARIO_SURTAX_FIRST);
  if (basicProvincialTax > ONTARIO_SURTAX_SECOND) {
    surtax += 0.36 * (basicProvincialTax - ONTARIO_SURTAX_SECOND);
  }
  return surtax;
}

export type IncomeTaxResult = {
  province: ProvinceSpec;
  taxableIncome: number;
  federalTaxBeforeCredit: number;
  federalBasicAmount: number;
  federalCredit: number;
  federalTax: number;
  quebecAbatement: number;
  provincialTaxBeforeCredit: number;
  provincialBasicAmount: number;
  provincialCredit: number;
  provincialTaxBeforeSurtax: number;
  ontarioSurtax: number;
  provincialTax: number;
  totalTax: number;
  effectiveRate: number;
  marginalRate: number;
};

type RawTax = {
  province: ProvinceSpec;
  taxableIncome: number;
  federalTaxBeforeCredit: number;
  federalBasicAmount: number;
  federalCredit: number;
  federalTax: number;
  quebecAbatement: number;
  provincialTaxBeforeCredit: number;
  provincialBasicAmount: number;
  provincialCredit: number;
  provincialTaxBeforeSurtax: number;
  ontarioSurtax: number;
  provincialTax: number;
  totalTax: number;
};

function rawIncomeTax(income: number, province: ProvinceSpec): RawTax {
  const federalTaxBeforeCredit = taxOnBrackets(income, FEDERAL_BRACKETS);
  const federalBasicAmount = federalBasicPersonalAmount(income);
  const federalCredit = Math.min(federalTaxBeforeCredit, federalBasicAmount * FEDERAL_CREDIT_RATE);
  const federalTaxBeforeAbatement = Math.max(0, federalTaxBeforeCredit - federalCredit);
  const quebecAbatement = province.code === 'QC' ? federalTaxBeforeAbatement * QUEBEC_ABATEMENT : 0;
  const federalTax = federalTaxBeforeAbatement - quebecAbatement;

  const provincialTaxBeforeCredit = taxOnBrackets(income, province.brackets);
  const provincialBasicAmount = basicPersonalAmount(province, income);
  const provincialCredit = Math.min(
    provincialTaxBeforeCredit,
    provincialBasicAmount * province.creditRate
  );
  const provincialTaxBeforeSurtax = Math.max(0, provincialTaxBeforeCredit - provincialCredit);
  const surtax = province.code === 'ON' ? ontarioSurtax(provincialTaxBeforeSurtax) : 0;
  const provincialTax = provincialTaxBeforeSurtax + surtax;

  return {
    province,
    taxableIncome: income,
    federalTaxBeforeCredit,
    federalBasicAmount,
    federalCredit,
    federalTax,
    quebecAbatement,
    provincialTaxBeforeCredit,
    provincialBasicAmount,
    provincialCredit,
    provincialTaxBeforeSurtax,
    ontarioSurtax: surtax,
    provincialTax,
    totalTax: federalTax + provincialTax,
  };
}

export function calculateIncomeTax(taxableIncome: number, code: ProvinceCode): IncomeTaxResult {
  const income = Math.max(0, taxableIncome);
  const province = PROVINCES.find((item) => item.code === code);
  if (!province) {
    throw new Error(`Unknown province code ${code}`);
  }

  const raw = rawIncomeTax(income, province);
  const step = 100;
  const above = rawIncomeTax(income + step, province);
  const marginal = (above.totalTax - raw.totalTax) / step;

  return {
    province,
    taxableIncome: income,
    federalTaxBeforeCredit: roundCents(raw.federalTaxBeforeCredit),
    federalBasicAmount: roundCents(raw.federalBasicAmount),
    federalCredit: roundCents(raw.federalCredit),
    federalTax: roundCents(raw.federalTax),
    quebecAbatement: roundCents(raw.quebecAbatement),
    provincialTaxBeforeCredit: roundCents(raw.provincialTaxBeforeCredit),
    provincialBasicAmount: roundCents(raw.provincialBasicAmount),
    provincialCredit: roundCents(raw.provincialCredit),
    provincialTaxBeforeSurtax: roundCents(raw.provincialTaxBeforeSurtax),
    ontarioSurtax: roundCents(raw.ontarioSurtax),
    provincialTax: roundCents(raw.provincialTax),
    totalTax: roundCents(raw.totalTax),
    effectiveRate: income > 0 ? raw.totalTax / income : 0,
    marginalRate: marginal,
  };
}

export function formatCad(amount: number): string {
  const negative = amount < 0;
  const [dollars, cents] = Math.abs(amount).toFixed(2).split('.');
  const withCommas = dollars.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `${negative ? '-' : ''}$${withCommas}.${cents}`;
}

export function formatPercent(rate: number): string {
  return `${(rate * 100).toFixed(2)}%`;
}
