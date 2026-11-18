#!/usr/bin/env python3
"""Model behind the Nov 18 credit-card batch (our own arithmetic, annual, CAD, all spend in Canada unless stated).

SOURCED (issuer and government pages, reviewed 2026-11-15; see each post's Sources):
  Tangerine Money-Back Credit Card: $0 fee; 2% in two chosen categories (three if rewards go to a Tangerine
     Savings Account); 0.5% on everything else; 13 category options; categories changeable every 90 days;
     foreign currency conversion fee 2.50%; purchase rate 20.95%.
  Student cards (all $0 annual fee):
     Scotia Momentum No-Fee Visa (students): 1% groceries/food delivery/drugstore, 1% gas/EV/transit,
        1% recurring bills, 1% recurring subscriptions, 0.5% other; 1% categories capped at $15,000/yr;
        welcome: 5% total on first $2,000 of purchases in first 3 months (accounts opened Nov 2, 2026 - Apr 30, 2027).
     BMO CashBack Mastercard (students): 3% groceries (first $500 per statement cycle), 1% recurring bills
        (first $500 per cycle), 0.5% other. Welcome offer: terms not printed in full on the page read -> not counted.
     CIBC Dividend Visa for Students: 2% groceries, 1% gas/EV/transportation/dining/recurring, 0.5% other;
        welcome: $25 after first purchase + 10% on first $1,000 of net purchases in first 4 statements
        (regular rates do not apply on those purchases).
     RBC Cash Back Mastercard: 2% groceries, 1% gas/EV/rideshare/transit, 0.5% other; welcome: 5% extra on first
        $2,000 of spend for 6 months (apply by Feb 2, 2027).
     TD Cash Back Visa (students): 1% grocery, gas/EV, public transit, recurring bills, streaming/digital gaming/media;
        0.5% other; welcome: $125 when $1,000+ is spent in the first 3 months.
  Secured cards:
     Home Trust Secured Visa: deposit $500-$10,000; no-fee option 19.99%; low-fee option $59/yr and 14.90%.
     Neo Mastercard with a secured limit: $0 card fee, Build membership required at $9.99/month; security funds
        $50 minimum, $10,000 maximum; purchase rate 19.99%-29.99% (set at approval).
     Capital One Guaranteed Secured Mastercard: $0 fee; 29.9% (non-Quebec), 21.9% (Quebec); security funds required,
        amount not printed; secured limit can rise to $2,500 with more security funds.
  FCAC: try to use less than 30% of your total credit limit.
EXAMPLE: every budget, spending mix and carried balance below is an illustration, labelled as such on the page.
Interest on a carried balance is approximated as average balance x annual rate (no compounding, no grace period).
"""
import json, itertools

def r2(x):
    return round(x + 1e-9, 2)

# ---------------- Tangerine category optimizer ----------------
TANG_CATS = ['Grocery', 'Restaurants', 'Gas', 'Entertainment', 'Furniture', 'Hotel-Motel', 'Drug Store',
             'Recurring Bill Payments', 'Home Improvement', 'Public Transportation and Parking', 'E-Games',
             'Fitness and Sports Clubs', 'Foreign Currency Spend']
assert len(TANG_CATS) == 13
TANG_BUDGETS = {  # monthly spend by Tangerine category; 'Other' earns 0.5% in every case
    'renter': {'Grocery': 450, 'Restaurants': 220, 'Public Transportation and Parking': 156,
               'Recurring Bill Payments': 240, 'Drug Store': 60, 'Entertainment': 80, 'E-Games': 30,
               'Fitness and Sports Clubs': 64, 'Other': 700},
    'family': {'Grocery': 1100, 'Gas': 400, 'Recurring Bill Payments': 600, 'Restaurants': 250,
               'Home Improvement': 150, 'Drug Store': 120, 'Fitness and Sports Clubs': 100,
               'Entertainment': 80, 'Other': 1200},
    'traveller': {'Grocery': 500, 'Restaurants': 450, 'Hotel-Motel': 300, 'Foreign Currency Spend': 400,
                  'Gas': 100, 'Recurring Bill Payments': 250, 'Public Transportation and Parking': 150,
                  'Entertainment': 100, 'Other': 750},
}

def tang_value(budget, picks):
    ann = {k: v * 12 for k, v in budget.items()}
    total = sum(ann.values())
    cb = sum(v * (0.02 if k in picks else 0.005) for k, v in ann.items())
    return total, cb

def tang_best(budget, n):
    cats = [c for c in budget if c != 'Other']
    best = max(itertools.combinations(cats, n), key=lambda p: tang_value(budget, p)[1])
    return list(best), tang_value(budget, best)[1]

tang = {}
for name, b in TANG_BUDGETS.items():
    total, base = tang_value(b, ())
    p2, v2 = tang_best(b, 2)
    p3, v3 = tang_best(b, 3)
    ranked = sorted([c for c in b if c != 'Other'], key=lambda c: -b[c])
    tang[name] = {
        'monthly': sum(b.values()), 'annual': total, 'budget': b,
        'all_at_base': r2(base),
        'best2': p2, 'best2_value': r2(v2), 'best2_eff_rate_pct': round(v2 / total * 100, 3),
        'best3': p3, 'best3_value': r2(v3), 'best3_eff_rate_pct': round(v3 / total * 100, 3),
        'third_category_gain': r2(v3 - v2),
        'ranked': ranked,
    }
# Family: a common "default" pick of Grocery + Gas vs the optimum
fam = TANG_BUDGETS['family']
tang['family']['grocery_gas_value'] = r2(tang_value(fam, ('Grocery', 'Gas'))[1])
# Traveller: foreign currency category vs the 2.50% conversion fee
fx_ann = TANG_BUDGETS['traveller']['Foreign Currency Spend'] * 12
tang['traveller']['fx_annual'] = fx_ann
tang['traveller']['fx_fee'] = r2(fx_ann * 0.025)
tang['traveller']['fx_cb_at_2'] = r2(fx_ann * 0.02)
tang['traveller']['fx_net_at_2'] = r2(fx_ann * 0.02 - fx_ann * 0.025)
tang['traveller']['fx_net_at_05'] = r2(fx_ann * 0.005 - fx_ann * 0.025)
# Break-even monthly spend in a category for it to beat the next one: trivial (2% - 0.5% = 1.5 points per $)
tang['points_gap'] = 1.5

# ---------------- Student first-year value on $600/month ----------------
ST = {'groceries': 220, 'transit': 100, 'phone_streaming': 80, 'dining': 80, 'other': 120}
ST_ANN = {k: v * 12 for k, v in ST.items()}
ST_TOTAL = sum(ST_ANN.values())
assert ST_TOTAL == 7200

def rates(card):
    return {
        'scotia': {'groceries': .01, 'transit': .01, 'phone_streaming': .01, 'dining': .005, 'other': .005},
        'bmo': {'groceries': .03, 'transit': .005, 'phone_streaming': .01, 'dining': .005, 'other': .005},
        'cibc': {'groceries': .02, 'transit': .01, 'phone_streaming': .01, 'dining': .01, 'other': .005},
        'rbc': {'groceries': .02, 'transit': .01, 'phone_streaming': .005, 'dining': .005, 'other': .005},
        'td': {'groceries': .01, 'transit': .01, 'phone_streaming': .01, 'dining': .005, 'other': .005},
    }[card]

student = {'budget_monthly': ST, 'annual_total': ST_TOTAL}
for card in ['scotia', 'bmo', 'cibc', 'rbc', 'td']:
    rt = rates(card)
    base = sum(ST_ANN[k] * rt[k] for k in ST)
    monthly_base = base / 12
    eff = base / ST_TOTAL
    if card == 'scotia':   # 5% total on first $2,000 in first 3 months; 3 months = $1,800 of spend
        promo_spend = min(2000, 3 * 600)
        bonus = promo_spend * 0.05 - promo_spend * eff
    elif card == 'cibc':   # $25 + 10% on first $1,000 in first 4 statements, replaces regular rate on that $1,000
        promo_spend = min(1000, 4 * 600)
        bonus = 25 + promo_spend * 0.10 - promo_spend * eff
    elif card == 'rbc':    # 5% extra on first $2,000 of spend within 6 months
        promo_spend = min(2000, 6 * 600)
        bonus = promo_spend * 0.05
    elif card == 'td':     # $125 when $1,000+ spent in first 3 months (3 x $600 = $1,800 qualifies)
        promo_spend = 3 * 600
        bonus = 125 if promo_spend >= 1000 else 0
    else:                  # BMO: not counted (offer terms not printed in full)
        promo_spend = 0
        bonus = 0
    student[card] = {'base_year': r2(base), 'base_month': r2(monthly_base), 'eff_rate_pct': round(eff * 100, 3),
                     'promo_spend': promo_spend, 'welcome_value': r2(bonus), 'first_year': r2(base + bonus),
                     'two_year': r2(2 * base + bonus)}
# Grocery-only check: BMO 3% cap $500/cycle -> $6,000/yr at 3% max
student['bmo_cap_annual_spend'] = 500 * 12
student['bmo_cap_annual_cb'] = r2(500 * 12 * 0.03)
student['scotia_cap_annual'] = 15000

# ---------------- Secured cards: 12-month cost ----------------
CARRY = 150.0  # example average carried balance = 30% of a $500 limit (FCAC's under-30% guideline)
sec = {'carry_example': CARRY, 'carry_basis_limit': 500, 'fcac_pct': 30}
cards = {
    'ht_nofee': {'deposit_min': 500, 'fee': 0.0, 'apr': [0.1999]},
    'ht_lowfee': {'deposit_min': 500, 'fee': 59.0, 'apr': [0.1490]},
    'neo': {'deposit_min': 50, 'fee': 9.99 * 12, 'apr': [0.1999, 0.2999]},
    'cap1': {'deposit_min': None, 'fee': 0.0, 'apr': [0.299]},
    'cap1_qc': {'deposit_min': None, 'fee': 0.0, 'apr': [0.219]},
}
for k, c in cards.items():
    interest = [r2(CARRY * a) for a in c['apr']]
    sec[k] = {'deposit_min': c['deposit_min'], 'fee_12m': r2(c['fee']), 'pay_in_full_12m': r2(c['fee']),
              'interest_12m': interest, 'carry_12m': [r2(c['fee'] + i) for i in interest]}
# Home Trust: average carried balance at which the $59 low-fee option beats the no-fee option
sec['ht_breakeven_balance'] = r2(59 / (0.1999 - 0.1490))
sec['ht_rate_gap_pts'] = round((0.1999 - 0.1490) * 100, 2)
sec['ht_saving_at_150'] = r2(CARRY * (0.1999 - 0.1490))
sec['neo_build_monthly'] = 9.99
sec['neo_build_annual'] = r2(9.99 * 12)
sec['neo_limit_30pct_at_min'] = r2(50 * 0.30)
sec['limit_30pct_500'] = r2(500 * 0.30)
sec['limit_30pct_2500'] = r2(2500 * 0.30)
# Neo at $500 of security funds (same limit as Home Trust minimum)
sec['neo_500_first_year_cash_out'] = r2(500 + 9.99 * 12)

# ---------------- Newcomers: what a limit means for utilization ----------------
# FCAC suggests using less than 30% of your total credit limit.
NC_SPEND = 1500  # example monthly card spending for a newcomer household (illustration)
newcomer = {'example_monthly_spend': NC_SPEND,
            'limit_15000_30pct': r2(15000 * 0.30), 'limit_2000_30pct': r2(2000 * 0.30), 'limit_1000_30pct': r2(1000 * 0.30),
            'spend_pct_of_15000': round(NC_SPEND / 15000 * 100, 1), 'spend_pct_of_2000': round(NC_SPEND / 2000 * 100, 1),
            'spend_pct_of_1000': round(NC_SPEND / 1000 * 100, 1)}

out = {'tangerine': tang, 'student': student, 'secured': sec, 'newcomer': newcomer}
if __name__ == '__main__':
    json.dump(out, open(__file__.replace('.py', '.out.json'), 'w'), indent=1)
    print(json.dumps({k: {kk: vv for kk, vv in v.items() if kk not in ('budget',)} for k, v in tang.items() if isinstance(v, dict)}, indent=1))
    print(json.dumps({k: v for k, v in student.items() if k not in ('budget_monthly',)}, indent=1))
    print(json.dumps(sec, indent=1))
