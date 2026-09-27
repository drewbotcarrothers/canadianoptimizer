import { calculateRewards } from '../src/lib/rewards-calculator.ts';
import { projectRetirement } from '../src/lib/retirement-calculator.ts';
import { compareRentVsBuy } from '../src/lib/rent-vs-buy.ts';
import { comparePrepayment, monthlyPayment } from '../src/lib/mortgage-prepayment.ts';

function show(label: string, value: unknown) {
  console.log(`${label}: ${typeof value === 'number' ? value.toFixed(2) : JSON.stringify(value)}`);
}

const rewards = calculateRewards({
  mode: 'points',
  pointValueCents: 1,
  annualFee: 120,
  categories: [
    { id: 'g', name: 'Groceries', annualSpend: 12000, earnRate: 5 },
    { id: 'd', name: 'Dining', annualSpend: 3600, earnRate: 5 },
    { id: 'gas', name: 'Gas', annualSpend: 2400, earnRate: 2 },
    { id: 'o', name: 'Other', annualSpend: 10000, earnRate: 1 },
  ],
});
console.log('REWARDS', rewards);

const retirement = projectRetirement({
  currentAge: 40,
  retirementAge: 65,
  planAge: 90,
  rrspBalance: 100000,
  tfsaBalance: 40000,
  rrspContribution: 10000,
  tfsaContribution: 7000,
  nominalReturn: 0.05,
  inflation: 0.02,
  cppAnnual: 10000,
  oasAnnual: 8000,
  cppStartAge: 65,
  oasStartAge: 65,
  spending: 50000,
  rrspTaxRate: 0.25,
});
console.log('RETIREMENT', JSON.stringify(retirement, null, 2));

const rent = compareRentVsBuy({
  homePrice: 700000,
  downPayment: 140000,
  annualNominal: 0.045,
  amortYears: 25,
  horizonYears: 10,
  appreciation: 0.02,
  propertyTaxRate: 0.006,
  maintenanceRate: 0.01,
  annualInsurance: 1800,
  buyingCosts: 15000,
  sellingCostRate: 0.05,
  monthlyRent: 2800,
  rentGrowth: 0.02,
  investmentReturn: 0.05,
});
console.log('RENT', rent);

show('pay 500k 4.5 25', monthlyPayment(500000, 0.045, 25));
const prepay = comparePrepayment({
  principal: 400000,
  annualNominal: 0.05,
  amortYears: 25,
  extraMonthly: 200,
  annualLumpSum: 5000,
});
console.log('PREPAY', {
  payment: prepay.baseline.payment,
  baseMonths: prepay.baseline.months,
  baseInterest: prepay.baseline.totalInterest,
  preMonths: prepay.withPrepayment.months,
  preInterest: prepay.withPrepayment.totalInterest,
  interestSaved: prepay.interestSaved,
  monthsSaved: prepay.monthsSaved,
});
