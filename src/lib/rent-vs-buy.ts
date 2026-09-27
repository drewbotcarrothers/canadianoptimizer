import { canadianMonthlyRate, monthlyPayment, roundCents } from './mortgage-prepayment';

export type RentVsBuyInput = {
  homePrice: number;
  downPayment: number;
  annualNominal: number;
  amortYears: number;
  horizonYears: number;
  appreciation: number;
  propertyTaxRate: number;
  maintenanceRate: number;
  annualInsurance: number;
  buyingCosts: number;
  sellingCostRate: number;
  monthlyRent: number;
  rentGrowth: number;
  investmentReturn: number;
};

export type RentVsBuyResult = {
  mortgagePayment: number;
  mortgagePrincipal: number;
  buyerNet: number;
  renterNet: number;
  advantage: number;
  endingHomeValue: number;
  endingMortgage: number;
  sellingCosts: number;
  totalRentPaid: number;
  totalOwnerCash: number;
  renterStartedWith: number;
  neverPaysOff: boolean;
};

export function compareRentVsBuy(input: RentVsBuyInput): RentVsBuyResult | null {
  const horizonMonths = Math.round(input.horizonYears * 12);
  if (
    input.homePrice <= 0 ||
    input.downPayment < 0 ||
    input.downPayment > input.homePrice ||
    horizonMonths <= 0 ||
    horizonMonths > 12 * 50 ||
    input.annualNominal < 0 ||
    input.amortYears <= 0
  ) {
    return null;
  }

  const principal = roundCents(input.homePrice - input.downPayment);
  const payment = monthlyPayment(principal, input.annualNominal, input.amortYears);
  const j = canadianMonthlyRate(input.annualNominal);
  if (!Number.isFinite(payment) || !Number.isFinite(j)) return null;

  const monthlyAppr = Math.pow(1 + input.appreciation, 1 / 12) - 1;
  const monthlyInv = Math.pow(1 + input.investmentReturn, 1 / 12) - 1;
  const monthlyRentGrowth = Math.pow(1 + input.rentGrowth, 1 / 12) - 1;

  let homeValue = input.homePrice;
  let balance = principal;
  let rent = input.monthlyRent;
  let renter = input.downPayment + input.buyingCosts;
  let totalRent = 0;
  let totalOwner = input.downPayment + input.buyingCosts;
  let neverPaysOff = false;

  for (let month = 0; month < horizonMonths; month += 1) {
    homeValue = homeValue * (1 + monthlyAppr);
    const tax = (homeValue * input.propertyTaxRate) / 12;
    const maintenance = (homeValue * input.maintenanceRate) / 12;
    const insurance = input.annualInsurance / 12;

    let paidThisMonth = 0;
    if (balance > 0.004) {
      const interest = roundCents(balance * j);
      if (payment <= interest && balance > interest) {
        neverPaysOff = true;
        break;
      }
      const regular = Math.min(payment, roundCents(balance + interest));
      const principalPaid = roundCents(regular - interest);
      balance = roundCents(balance - principalPaid);
      paidThisMonth = regular;
    }

    const ownerCash = paidThisMonth + tax + maintenance + insurance;
    totalOwner += ownerCash;
    totalRent += rent;

    renter = renter * (1 + monthlyInv) + (ownerCash - rent);
    rent = rent * (1 + monthlyRentGrowth);
  }

  const sellingCosts = homeValue * input.sellingCostRate;
  const buyerNet = homeValue - sellingCosts - Math.max(0, balance);
  const advantage = buyerNet - renter;

  return {
    mortgagePayment: payment,
    mortgagePrincipal: principal,
    buyerNet: roundCents(buyerNet),
    renterNet: roundCents(renter),
    advantage: roundCents(advantage),
    endingHomeValue: roundCents(homeValue),
    endingMortgage: roundCents(Math.max(0, balance)),
    sellingCosts: roundCents(sellingCosts),
    totalRentPaid: roundCents(totalRent),
    totalOwnerCash: roundCents(totalOwner),
    renterStartedWith: roundCents(input.downPayment + input.buyingCosts),
    neverPaysOff,
  };
}
