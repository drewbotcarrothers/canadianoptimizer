/** Whole dollars, or cents when requested. Commas, no currency code. */
export function formatDollars(amount: number, cents = false): string {
  if (!Number.isFinite(amount)) return '—';
  const negative = amount < 0;
  const abs = Math.abs(amount);
  const value = cents ? (Math.round((abs + Number.EPSILON) * 100) / 100).toFixed(2) : Math.round(abs).toString();
  const [whole, fraction] = value.split('.');
  const withCommas = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `${negative ? '-' : ''}$${withCommas}${fraction ? `.${fraction}` : ''}`;
}

/** Percent with at least two decimal places, up to four, trailing zeros removed past two. */
export function formatRate(rate: number): string {
  if (!Number.isFinite(rate)) return '—';
  const percent = rate * 100;
  const fixed = percent.toFixed(4);
  const trimmed = fixed.replace(/0+$/, '').replace(/\.$/, '');
  const [whole, fraction = ''] = trimmed.split('.');
  const decimals = fraction.length < 2 ? fraction.padEnd(2, '0') : fraction;
  return `${whole}.${decimals}%`;
}
