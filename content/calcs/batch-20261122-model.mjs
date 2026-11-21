// Model for the Nov 22, 2026 batch (Investing > Accounts & Asset Location).
// Run: node content/calcs/batch-20261122-model.mjs > content/calcs/batch-20261122-model.out.json
// Tax figures use the site's 2026 engine (src/lib/income-tax-2026.ts: CRA 2026 brackets and basic amounts;
// excludes CPP/EI credits, the Ontario health premium and the Ontario tax reduction).
import { createJiti } from 'jiti';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const jiti = createJiti(import.meta.url, { alias: { '@': path.join(ROOT, 'src') } });
const tax = await jiti.import(path.join(ROOT, 'src/lib/income-tax-2026.ts'));
const T = (x, p) => tax.calculateIncomeTax(x, p).totalTax;
const r2 = (x) => Math.round(x * 100) / 100;
const out = {};

// --- TFSA dollar limits (CRA) and cumulative room by year of first eligibility
const LIMITS = { 2009: 5000, 2010: 5000, 2011: 5000, 2012: 5000, 2013: 5500, 2014: 5500, 2015: 10000, 2016: 5500, 2017: 5500, 2018: 5500, 2019: 6000, 2020: 6000, 2021: 6000, 2022: 6000, 2023: 6500, 2024: 7000, 2025: 7000, 2026: 7000 };
const cum = {};
for (let y = 2009; y <= 2026; y++) { let s = 0; for (let k = y; k <= 2026; k++) s += LIMITS[k]; cum[y] = s; }
out.cumulativeRoom2026ByFirstYear = cum; // first year eligible (turned 18, or 2009 if earlier)

// --- tfsa-withdrawal-rules: $5,000 withdrawn in early 2026 by someone with $0 unused room,
// re-contributed in month M of 2026 and left in until it is absorbed on January 1, 2027.
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const recontrib = [];
for (let m = 3; m <= 12; m++) recontrib.push({ month: MONTHS[m - 1], monthsTaxed: 13 - m, tax: 5000 * 0.01 * (13 - m) });
out.recontribute5000 = recontrib;
// with $3,000 of unused room: excess is $2,000
out.partialRoom = { unused: 3000, recontributed: 5000, excess: 2000, perMonth: 2000 * 0.01, juneToDec: 2000 * 0.01 * 7 };
// growth and loss examples
out.growth = { contributed: 7000, value: 9000, withdrawn: 9000, roomBack: 9000 };
out.loss = { contributed: 7000, value: 6000, withdrawn: 6000, roomBack: 6000, roomGone: 1000 };
// timeline example: Priya, $0 unused room at end of 2025, withdraws $12,000 on March 3, 2026
out.priya = { unusedStart2026: 7000, withdraw2026: 12000, contrib2026: 7000, roomJan2027: '0 unused + 12,000 withdrawal + 2027 limit' };

// --- rrsp-or-tfsa-by-income
const INCOMES = [40000, 50000, 60000, 70000, 80000, 90000, 100000, 120000, 150000, 180000, 200000, 250000];
const RET = [30000, 50000, 70000, 100000];
const rows = [];
for (const x of INCOMES) {
  const row = { income: x };
  for (const p of ['ON', 'BC', 'AB']) {
    row[`marg_${p}`] = r2(tax.calculateIncomeTax(x, p).marginalRate * 100);
  }
  row.refund5000_ON = r2(T(x, 'ON') - T(x - 5000, 'ON'));
  row.taxOn1000Now_ON = r2(T(x, 'ON') - T(x - 1000, 'ON'));
  row.tfsaDeposit_ON = r2(1000 - row.taxOn1000Now_ON);
  row.rrspMinusTfsa = {};
  for (const R of RET) {
    const taxOut = T(R + 1000, 'ON') - T(R, 'ON');
    row.rrspMinusTfsa[R] = Math.round((1000 - taxOut) - row.tfsaDeposit_ON);
  }
  rows.push(row);
}
out.byIncome = rows;
out.retirementMarg_ON = Object.fromEntries(RET.map((R) => [R, r2((T(R + 1000, 'ON') - T(R, 'ON')) / 10)]));
out.retirementNet1000_ON = Object.fromEntries(RET.map((R) => [R, r2(1000 - (T(R + 1000, 'ON') - T(R, 'ON')))]));
// RRSP room from earned income (18% of prior-year earned income, capped at the 2026 limit $33,810)
out.rrspRoom2026 = Object.fromEntries(INCOMES.map((x) => [x, Math.min(Math.round(x * 0.18), 33810)]));
out.rrspCapIncome = Math.round(33810 / 0.18 * 100) / 100;
// OAS recovery tax example: retiree with 2026 net income $100,000, threshold $95,323
out.oas = { threshold2026: 95323, income: 100000, over: 100000 - 95323, recovery: r2((100000 - 95323) * 0.15) };
// $1,000 RRSP withdrawal at $100,000 with OAS clawback: tax + 15%
out.oasEffective = r2(out.retirementMarg_ON[100000] + 15);

// --- leaving Canada example (illustration): Sam leaves Ontario on August 15, 2026
const sam = { tfsa: 60000, rrsp: 150000, nonregFMV: 80000, nonregACB: 50000, cash: 20000 };
sam.deemedGain = sam.nonregFMV - sam.nonregACB;
sam.t1161Property = sam.nonregFMV; // cash, TFSA, RRSP excluded from the T1161 total
sam.partXIII = sam.rrsp * 0.25;
sam.rrspNetAt25 = sam.rrsp - sam.partXIII;
sam.residentWithholding = sam.rrsp * 0.30; // Canada-resident withholding on a lump sum over $15,000 (outside Quebec)
sam.nonresContrib = { amount: 7000, months: 5, tax: 7000 * 0.01 * 5 };
out.sam = sam;

console.log(JSON.stringify(out, null, 2));
