import {
  calculateIncomeTax,
  federalBasicPersonalAmount,
  ontarioSurtax,
  roundCents,
  taxOnBrackets,
  FEDERAL_BRACKETS,
} from '../src/lib/income-tax-2026.ts';

function assertClose(name: string, actual: number, expected: number, tolerance = 0.02) {
  const delta = Math.abs(actual - expected);
  if (delta > tolerance) {
    throw new Error(`${name}: got ${actual}, expected ${expected} (delta ${delta})`);
  }
  console.log(`ok  ${name}: ${actual}`);
}

const federal95 = taxOnBrackets(95_000, FEDERAL_BRACKETS);
assertClose('federal tax on $95,000 before BPA', roundCents(federal95), 15_671.01);

const bpaLow = federalBasicPersonalAmount(95_000);
assertClose('BPA at $95,000', bpaLow, 16_452);

const on80 = calculateIncomeTax(80_000, 'ON');
assertClose('Ontario $80,000 federal', on80.federalTax, 10_292.73);
assertClose('Ontario $80,000 provincial before surtax', on80.provincialTaxBeforeSurtax, 4_454.52);
assertClose('Ontario $80,000 surtax', on80.ontarioSurtax, 0);
assertClose('Ontario $80,000 total', on80.totalTax, 14_747.25);
assertClose('Ontario $80,000 marginal', Math.round(on80.marginalRate * 10000) / 100, 29.65);

const on0 = calculateIncomeTax(0, 'ON');
assertClose('Ontario $0 total', on0.totalTax, 0);

const onBpa = calculateIncomeTax(16_452, 'ON');
assertClose('Ontario at federal BPA, federal tax', onBpa.federalTax, 0);
assertClose('Ontario at federal BPA, provincial tax', onBpa.provincialTax, 174.88);

const ab100 = calculateIncomeTax(100_000, 'AB');
assertClose('Alberta $100,000 total', ab100.totalTax, 21_347.21);

const qc60 = calculateIncomeTax(60_000, 'QC');
assertClose('Quebec $60,000 abatement', qc60.quebecAbatement, 1_021.8);
assertClose('Quebec $60,000 federal after abatement', qc60.federalTax, 5_170.93);
assertClose('Quebec $60,000 provincial', qc60.provincialTax, 6_029.47);
assertClose('Quebec $60,000 total', qc60.totalTax, 11_200.4);

const bc50 = calculateIncomeTax(50_000, 'BC');
assertClose('BC $50,000 uses 5.60% first bracket', bc50.provincialTaxBeforeCredit, 2_800);
assertClose('BC $50,000 provincial after BPA', bc50.provincialTax, 2_059.9);
assertClose('BC $50,000 total', bc50.totalTax, 6_756.62);

const onHigh = calculateIncomeTax(250_000, 'ON');
if (onHigh.ontarioSurtax <= 0) {
  throw new Error('Ontario surtax should apply at $250,000');
}
assertClose('Ontario $250,000 surtax', onHigh.ontarioSurtax, 9_689.95);
assertClose('Ontario $250,000 total', onHigh.totalTax, 88_572.25);

assertClose('surtax at threshold', ontarioSurtax(5_818), 0);
assertClose('surtax just over first threshold', roundCents(ontarioSurtax(6_000)), 36.4);

const mb250 = calculateIncomeTax(250_000, 'MB');
assertClose('Manitoba BPA phase-out at $250,000', mb250.provincialBasicAmount, 11_835);

const yt300 = calculateIncomeTax(300_000, 'YT');
assertClose('Yukon BPA at top of phase-out', yt300.federalBasicAmount, 14_829);
assertClose('Yukon territorial BPA matches federal minimum', yt300.provincialBasicAmount, 14_829);

const ns40 = calculateIncomeTax(40_000, 'NS');
assertClose('Nova Scotia $40,000 total', ns40.totalTax, 6_318.61);

console.log('\nDocumented cases');
for (const [code, income] of [
  ['ON', 80_000],
  ['AB', 100_000],
  ['QC', 60_000],
  ['BC', 50_000],
  ['ON', 250_000],
  ['MB', 250_000],
] as const) {
  const row = calculateIncomeTax(income, code);
  console.log(
    `${row.province.name} $${income}: total ${row.totalTax}, federal ${row.federalTax}, provincial ${row.provincialTax}, marginal ${(row.marginalRate * 100).toFixed(2)}%`
  );
}
