/** Canadian mortgage payment with semi-annual compounding, not in advance. */

export function roundCents(amount: number): number {
  return Math.round(amount * 100) / 100;
}

export function canadianMonthlyRate(annualNominal: number): number {
  if (annualNominal < 0) return NaN;
  return Math.pow(1 + annualNominal / 2, 1 / 6) - 1;
}

export function monthlyPayment(principal: number, annualNominal: number, amortYears: number): number {
  const months = Math.round(amortYears * 12);
  if (principal <= 0 || months <= 0) return 0;
  const j = canadianMonthlyRate(annualNominal);
  if (!Number.isFinite(j)) return NaN;
  if (j === 0) return roundCents(principal / months);
  const factor = Math.pow(1 + j, months);
  return roundCents((principal * (j * factor)) / (factor - 1));
}

export type AmortizationInput = {
  principal: number;
  annualNominal: number;
  amortYears: number;
  extraMonthly: number;
  annualLumpSum: number;
};

export type AmortizationResult = {
  payment: number;
  monthlyRate: number;
  months: number;
  years: number;
  leftoverMonths: number;
  totalInterest: number;
  totalPaid: number;
  neverPaysOff: boolean;
};

const MAX_MONTHS = 12 * 60;

function runSchedule(input: AmortizationInput): AmortizationResult {
  const payment = monthlyPayment(input.principal, input.annualNominal, input.amortYears);
  const j = canadianMonthlyRate(input.annualNominal);
  let balance = roundCents(input.principal);
  let totalInterest = 0;
  let totalPaid = 0;
  let months = 0;
  const extra = Math.max(0, input.extraMonthly);
  const lump = Math.max(0, input.annualLumpSum);

  if (!Number.isFinite(payment) || !Number.isFinite(j) || balance < 0) {
    return {
      payment,
      monthlyRate: j,
      months: 0,
      years: 0,
      leftoverMonths: 0,
      totalInterest: 0,
      totalPaid: 0,
      neverPaysOff: true,
    };
  }

  while (balance > 0.004 && months < MAX_MONTHS) {
    months += 1;
    const interest = roundCents(balance * j);
    let due = payment;
    if (due + extra <= interest && balance > interest) {
      return {
        payment,
        monthlyRate: j,
        months,
        years: 0,
        leftoverMonths: 0,
        totalInterest,
        totalPaid,
        neverPaysOff: true,
      };
    }
    const room = balance + interest;
    const regular = Math.min(due, room);
    const principalFromRegular = roundCents(regular - interest);
    balance = roundCents(balance - principalFromRegular);
    totalInterest = roundCents(totalInterest + interest);
    totalPaid = roundCents(totalPaid + regular);

    if (balance > 0 && extra > 0) {
      const extraApplied = roundCents(Math.min(extra, balance));
      balance = roundCents(balance - extraApplied);
      totalPaid = roundCents(totalPaid + extraApplied);
    }

    if (balance > 0 && lump > 0 && months % 12 === 0) {
      const lumpApplied = roundCents(Math.min(lump, balance));
      balance = roundCents(balance - lumpApplied);
      totalPaid = roundCents(totalPaid + lumpApplied);
    }
  }

  return {
    payment,
    monthlyRate: j,
    months: balance > 0.004 ? months : months,
    years: Math.floor(months / 12),
    leftoverMonths: months % 12,
    totalInterest,
    totalPaid,
    neverPaysOff: balance > 0.004,
  };
}

export type PrepaymentComparison = {
  baseline: AmortizationResult;
  withPrepayment: AmortizationResult;
  interestSaved: number;
  monthsSaved: number;
};

export function comparePrepayment(input: AmortizationInput): PrepaymentComparison {
  const baseline = runSchedule({ ...input, extraMonthly: 0, annualLumpSum: 0 });
  const withPrepayment = runSchedule(input);
  return {
    baseline,
    withPrepayment,
    interestSaved: roundCents(baseline.totalInterest - withPrepayment.totalInterest),
    monthsSaved: baseline.neverPaysOff || withPrepayment.neverPaysOff ? 0 : baseline.months - withPrepayment.months,
  };
}
