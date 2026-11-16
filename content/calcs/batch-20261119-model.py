#!/usr/bin/env python3
"""Model behind the Nov 19 batch (our own arithmetic, CAD, annual unless stated).

SOURCED (issuer, bank and government pages, read 2026-11-16; see each post's Sources):
  Neo (neofinancial.com/credit-cards and the Everywhere, Gas & Grocery, Shop & Dine pages):
    Neo World Mastercard ($0 fee): Gas & Grocery 2% groceries, 2% gas & EV charging, 2% recurring payments, 0.5% other;
      Shop & Dine 2% food & drink, 2% shopping, 0.5% other; Everywhere 1% on all purchases.
      Monthly spend limits: groceries and gas $1,000 each; food & drink and shopping $500 each; recurring $500.
      Over a limit the category earns 0.5%.
    Neo World Elite Mastercard ($149 fee): Gas & Grocery 5% groceries, 3% gas & EV, 4% recurring, 1% other;
      Shop & Dine 5% food & drink, 3% shopping, 1% other; Everywhere 2% on all purchases up to $4,000 a month, then 1%.
      Monthly limits $1,000 per category (recurring $500). Over a limit the category earns 1%.
  EQ Bank (eqbank.ca/rates, effective November 6, 2026): Personal Account 1.50% base, 3.00% with qualifying recurring
    direct deposits of at least $2,000 a month; 30 Day Notice Savings 3.00%; GICs 1 yr 3.70%, 2 yr 4.15%, 3 yr 4.15%,
    5 yr 4.30%.
  RBC (rbcroyalbank.com/rates/persacct.html): RBC High Interest eSavings 0.650% on all balances.
  KOHO (koho.ca/accounts, Monthly and Yearly toggles): Core $0; Extra $18/mo (monthly) or $12/mo (yearly);
    Everything $22/mo (monthly) or $14.75/mo (yearly). Interest 2% / 2.5% / 3.5%. Cash back on groceries,
    transportation, food & drinks 1% / 1.5% / 2%; everything else 0% / 0.25% / 0.5%.
    Credit Building $10/month (koho.ca/learn/does-koho-build-credit); 30% off on Extra, 50% off on Everything
    (koho.ca/learn/how-does-koho-credit-building-work).
EXAMPLE: every spending profile, balance and marginal tax rate below is an illustration, labelled as such on the page.
Interest is approximated as balance x annual rate (simple, one year) for savings accounts; multi-year GICs compound
annually (EQ's compound-at-maturity option); HISA rates are held flat over the term (an assumption, labelled).
"""
import json

out = {}

# ---------- Neo ----------
PROFILES = {
    'lean':    {'groceries': 400,  'gas': 150, 'recurring': 100, 'dining': 150, 'shopping': 150, 'other': 550},
    'typical': {'groceries': 800,  'gas': 250, 'recurring': 250, 'dining': 300, 'shopping': 300, 'other': 1100},
    'high':    {'groceries': 1200, 'gas': 400, 'recurring': 500, 'dining': 600, 'shopping': 600, 'other': 1700},
}
def capped(spend, rate, cap, over):
    return min(spend, cap) * rate + max(0, spend - cap) * over
def neo_month(card, p):
    tot = sum(p.values())
    if card == 'w_gg':
        return (capped(p['groceries'], .02, 1000, .005) + capped(p['gas'], .02, 1000, .005) + capped(p['recurring'], .02, 500, .005)
                + (p['dining'] + p['shopping'] + p['other']) * .005)
    if card == 'w_sd':
        return (capped(p['dining'], .02, 500, .005) + capped(p['shopping'], .02, 500, .005)
                + (p['groceries'] + p['gas'] + p['recurring'] + p['other']) * .005)
    if card == 'w_ev':
        return tot * .01
    if card == 'we_gg':
        return (capped(p['groceries'], .05, 1000, .01) + capped(p['gas'], .03, 1000, .01) + capped(p['recurring'], .04, 500, .01)
                + (p['dining'] + p['shopping'] + p['other']) * .01)
    if card == 'we_sd':
        return (capped(p['dining'], .05, 1000, .01) + capped(p['shopping'], .03, 1000, .01)
                + (p['groceries'] + p['gas'] + p['recurring'] + p['other']) * .01)
    if card == 'we_ev':
        return capped(tot, .02, 4000, .01)
FEES = {'w_gg': 0, 'w_sd': 0, 'w_ev': 0, 'we_gg': 149, 'we_sd': 149, 'we_ev': 149}
neo = {}
for name, p in PROFILES.items():
    row = {'monthly_total': sum(p.values()), 'annual_total': sum(p.values()) * 12, 'cards': {}}
    for c in FEES:
        gross = round(neo_month(c, p) * 12, 2)
        row['cards'][c] = {'gross': gross, 'net': round(gross - FEES[c], 2)}
    neo[name] = row
# Everywhere World Elite vs World Everywhere: extra 1% must cover $149
neo['ev_breakeven_vs_world'] = round(149 / 0.01, 2)      # 14,900 a year
neo['ev_breakeven_vs_zero'] = round(149 / 0.02, 2)       # 7,450 a year (Neo prints roughly $7,500)
neo['ev_breakeven_monthly_vs_world'] = round(149 / 0.01 / 12, 2)
out['neo'] = neo

# ---------- EQ / RBC ----------
BAL = 10000
eq = {'balance': BAL,
      'eq_base': round(BAL * .015, 2), 'eq_bonus': round(BAL * .03, 2), 'eq_notice30': round(BAL * .03, 2),
      'rbc_hies': round(BAL * .0065, 2)}
eq['gap_base_vs_rbc'] = round(eq['eq_base'] - eq['rbc_hies'], 2)
eq['gap_bonus_vs_rbc'] = round(eq['eq_bonus'] - eq['rbc_hies'], 2)
eq['dd_annual'] = 2000 * 12
out['eq'] = eq

# ---------- KOHO ----------
koho = {'plans': {'core': {'monthly': 0, 'yearly_pm': 0, 'int': .02, 'cat': .01, 'oth': 0.0},
                  'extra': {'monthly': 18, 'yearly_pm': 12, 'int': .025, 'cat': .015, 'oth': .0025},
                  'everything': {'monthly': 22, 'yearly_pm': 14.75, 'int': .035, 'cat': .02, 'oth': .005}}}
for k, v in koho['plans'].items():
    v['annual_monthly_billing'] = round(v['monthly'] * 12, 2)
    v['annual_yearly_billing'] = round(v['yearly_pm'] * 12, 2)
for k in ('extra', 'everything'):
    v = koho['plans'][k]; extra_int = round(v['int'] - .02, 4)
    v['extra_interest_rate'] = extra_int
    v['breakeven_balance_yearly'] = round(v['annual_yearly_billing'] / extra_int, 2)
    v['breakeven_balance_monthly'] = round(v['annual_monthly_billing'] / extra_int, 2)
# Example household: $10,000 balance, $1,000/month in bonus categories, $1,000/month other
EX = {'balance': 10000, 'cat_monthly': 1000, 'oth_monthly': 1000}
koho['example'] = EX
for k, v in koho['plans'].items():
    interest = EX['balance'] * v['int']
    cb = EX['cat_monthly'] * 12 * v['cat'] + EX['oth_monthly'] * 12 * v['oth']
    v['ex_interest'] = round(interest, 2); v['ex_cashback'] = round(cb, 2)
    v['ex_net_yearly'] = round(interest + cb - v['annual_yearly_billing'], 2)
    v['ex_net_monthly'] = round(interest + cb - v['annual_monthly_billing'], 2)
CB = 10
koho['cb'] = {'core': CB * 12, 'extra': round(CB * .7 * 12, 2), 'everything': round(CB * .5 * 12, 2),
              'extra_pm': round(CB * .7, 2), 'everything_pm': round(CB * .5, 2)}
koho['neo_build_annual'] = round(9.99 * 12, 2)
out['koho'] = koho

# ---------- GIC vs HISA ----------
P = 20000
gic = {'principal': P, 'terms': {}}
for term, rate in ((1, .037), (3, .0415), (5, .043)):
    g = {'gic_rate': rate}
    g['gic_interest'] = round(P * ((1 + rate) ** term - 1), 2)
    for name, hr in (('eq_base', .015), ('eq_bonus', .03), ('rbc', .0065)):
        g[name] = round(P * ((1 + hr) ** term - 1), 2)
    for mtr in (.30, .45):
        key = f'mtr{int(mtr*100)}'
        g[key] = {'gic_after_tax': round(g['gic_interest'] * (1 - mtr), 2),
                  'eq_base_after_tax': round(g['eq_base'] * (1 - mtr), 2),
                  'eq_bonus_after_tax': round(g['eq_bonus'] * (1 - mtr), 2)}
    gic['terms'][term] = g
gic['first_year_interest_3y'] = round(P * .0415, 2)
out['gic'] = gic

json.dump(out, open(__file__.replace('.py', '.out.json'), 'w'), indent=1)
print(json.dumps(out, indent=1))
