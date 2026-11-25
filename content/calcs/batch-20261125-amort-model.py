"""Drafter model, batch 2026-11-25: 25 vs 30-year amortization (Real Estate > Mortgages & Renewal).
Scenario rates (3.5%, 4.5%, 5.5%) and the $500,000 loan / $600,000 price are illustration inputs, not offers or market data.
Fixed-rate mortgage, semi-annual compounding (Interest Act s.6 'yearly or half-yearly, not in advance'), monthly payments,
rate held for the whole amortization (a simplification: real mortgages renew every term).
Premium rates: CMHC premium schedule read 2026-11-25 (90.01% to 95% LTV = 4.00%; beyond 25 years +0.20%)."""
import json
def pay(L, r, years):
    m = (1 + r / 2) ** (1 / 6) - 1; n = years * 12
    return L * m / (1 - (1 + m) ** -n)
def bal(L, r, years, k):
    m = (1 + r / 2) ** (1 / 6) - 1; p = pay(L, r, years)
    return L * (1 + m) ** k - p * ((1 + m) ** k - 1) / m
R = lambda x, d=2: round(x + 1e-9, d)
out = {'loan': {}}
L = 500000
for r in (0.035, 0.045, 0.055):
    p25, p30 = pay(L, r, 25), pay(L, r, 30)
    i25, i30 = p25 * 300 - L, p30 * 360 - L
    out['loan'][f'{r*100:.1f}%'] = dict(p25=R(p25), p30=R(p30), save_month=R(p25 - p30), int25=R(i25, 0), int30=R(i30, 0), extra_int=R(i30 - i25, 0),
                                      bal5_25=R(bal(L, r, 25, 60), 0), bal5_30=R(bal(L, r, 30, 60), 0), bal5_gap=R(bal(L, r, 30, 60) - bal(L, r, 25, 60), 0),
                                      extra_per_dollar=R((i30 - i25) / ((p25 - p30) * 12 * 25) , 2))
# insured example: first-time buyer, $600,000 price
price = 600000; down = 0.05 * 500000 + 0.10 * (price - 500000); loan = price - down; ltv = loan / price
prem25, prem30 = R(loan * 0.04, 0), R(loan * 0.042, 0)
out['insured'] = dict(price=price, down=down, loan=loan, ltv=R(ltv * 100, 2), prem25=prem25, prem30=prem30, prem_diff=R(prem30 - prem25, 0),
                      total25=loan + prem25, total30=loan + prem30)
r = 0.045
a, b = out['insured']['total25'], out['insured']['total30']
out['insured']['p25'] = R(pay(a, r, 25)); out['insured']['p30'] = R(pay(b, r, 30)); out['insured']['save'] = R(pay(a, r, 25) - pay(b, r, 30))
out['insured']['int25'] = R(pay(a, r, 25) * 300 - a, 0); out['insured']['int30'] = R(pay(b, r, 30) * 360 - b, 0)
out['insured']['extra_int'] = R(out['insured']['int30'] - out['insured']['int25'], 0)
# stress test: contract 4.5% -> qualifying = max(contract + 2, 5.25) = 6.5%
q = max(0.045 + 0.02, 0.0525)
pq25, pq30 = pay(565000, q, 25), pay(565000, q, 30)
out['stress'] = dict(q=R(q * 100, 2), pq25=R(pq25), pq30=R(pq30), lower_pct=R((pq25 - pq30) / pq25 * 100, 1), bigger_loan_pct=R((pq25 / pq30 - 1) * 100, 1),
                     max_loan_30_same_pay=R(pq25 / (pay(1, q, 30)), 0))
out['stress']['extra_loan'] = R(out['stress']['max_loan_30_same_pay'] - 565000, 0)
# floor rate case: contract 3.0% -> qualifying 5.25%
out['floor'] = dict(contract=3.0, q=R(max(0.03 + 0.02, 0.0525) * 100, 2))
print(json.dumps(out, indent=1))
json.dump(out, open('content/calcs/batch-20261125-amort-model.out.json', 'w'), indent=1)
