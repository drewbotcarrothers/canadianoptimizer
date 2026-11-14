#!/usr/bin/env python3
"""Model behind the three Nov 17 credit-card posts (our own arithmetic, annual, CAD, all spend in Canada unless stated).

SOURCED earn rates and fees (issuer pages, reviewed 2026-11-14; see each post's Sources):
  Amex SimplyCash Preferred: 4% stand-alone gas, 4% stand-alone grocery (cap $30,000 spend = $1,200 cash back),
     2% everything else; fee $9.99/month = $119.88/year (non-Quebec).
  Amex SimplyCash (no fee): 2% gas, 2% grocery (cap $300 cash back = $15,000 spend), 1.25% everything else.
  Scotiabank Gold Amex: 6 pts Sobeys-family grocers, 5 pts other grocery / dining / entertainment, 3 pts gas+transit /
     streaming, 1 pt everything else; foreign-currency purchases earn 1 pt; accelerated earn on first $50,000/yr;
     fee $120/year; no foreign transaction fee (page: typical markup 2.5%).
EXAMPLE: spending profiles and the point value (1 cent: Scotiabank's own redemption examples,
  10,000 pts = $100 grocery, 20,000 pts = $200 travel).
"""
import json
SP_FEE, NF_FEE, SG_FEE = 119.88, 0.0, 120.0
CENT = 0.01

def amex_sp(m, g, gas):
    ann = m * 12
    groc = ann * g; gs = ann * gas; other = ann - groc - gs
    gcb = min(groc * .04, 1200) + max(0, groc - 30000) * .02
    return gcb + gs * .04 + other * .02

def amex_nf(m, g, gas):
    ann = m * 12
    groc = ann * g; gs = ann * gas; other = ann - groc - gs
    gcb = min(groc * .02, 300) + max(0, groc - 15000) * .0125
    return gcb + gs * .02 + other * .0125

def scotia_pts(m, sob, og, gas, din, foreign_annual=0.0):
    ann = m * 12
    s, o, g, d = ann * sob, ann * og, ann * gas, ann * din
    other = ann - s - o - g - d
    acc = s + o + g + d
    assert acc <= 50000
    return s * 6 + o * 5 + g * 3 + d * 5 + other * 1 + foreign_annual * 1

PROFILES = {  # name: (monthly, sobeys-family share, other grocery share, gas share, dining share)
 'p1500': (1500, .10, .10, .08, .10),
 'p3000': (3000, .10, .10, .08, .10),
 'p5000': (5000, .10, .10, .08, .10),
 'family3000': (3000, .15, .20, .08, .07),
}
out = {}
for k, (m, sob, og, gas, din) in PROFILES.items():
    g = sob + og
    sp = amex_sp(m, g, gas); nf = amex_nf(m, g, gas)
    pts = scotia_pts(m, sob, og, gas, din)
    sg = pts * CENT
    be_cpp = (sp - SP_FEE + SG_FEE) / pts * 100  # cents per point at which Scotia Gold net = SimplyCash Preferred net
    out[k] = dict(monthly=m, annual=m * 12, sp_cashback=round(sp, 2), sp_net=round(sp - SP_FEE, 2), nf_cashback=round(nf, 2),
                  scotia_points=round(pts), scotia_value=round(sg, 2), scotia_net=round(sg - SG_FEE, 2),
                  sp_minus_scotia=round((sp - SP_FEE) - (sg - SG_FEE), 2), breakeven_cpp=round(be_cpp, 3),
                  sp_gain_vs_nofee=round((sp - SP_FEE) - nf, 2))
# Review profiles (Amex SP: three household budgets, different mixes)
H = {'lean': (1200, .30, .10), 'typical': (3000, .20, .08), 'high': (5000, .15, .06)}
rev = {}
for k, (m, g, gas) in H.items():
    sp = amex_sp(m, g, gas); nf = amex_nf(m, g, gas)
    extra = sp - nf
    ann = m * 12
    extra_rate = (.02 * (g + gas) + .0075 * (1 - g - gas))
    rev[k] = dict(monthly=m, groc=g, gas=gas, sp_cashback=round(sp, 2), nf_cashback=round(nf, 2), extra=round(extra, 2),
                  sp_net=round(sp - SP_FEE, 2), sp_minus_nf=round(extra - SP_FEE, 2),
                  breakeven_annual=round(SP_FEE / extra_rate, 2), breakeven_monthly=round(SP_FEE / extra_rate / 12, 2),
                  extra_rate=round(extra_rate, 5))
out['amex_review'] = rev
# Scotia review profiles
S = {
 'dining': dict(monthly=3000, sob=.05, og=.10, gas=.05, din=.25, foreign=0),
 'traveller': dict(monthly=2500, sob=.10, og=.10, gas=.08, din=.10, foreign=5000),
 'low': dict(monthly=800, sob=.10, og=.10, gas=.08, din=.10, foreign=0),
}
sr = {}
for k, p in S.items():
    pts = scotia_pts(p['monthly'], p['sob'], p['og'], p['gas'], p['din'], p['foreign'])
    val = pts * CENT
    fx_saving = p['foreign'] * .025
    g = p['sob'] + p['og']
    nf = amex_nf(p['monthly'], g, p['gas'])
    sp = amex_sp(p['monthly'], g, p['gas'])
    sr[k] = dict(p, points=round(pts), value=round(val, 2), net=round(val - SG_FEE, 2), fx_saving=round(fx_saving, 2),
                 net_with_fx=round(val - SG_FEE + fx_saving, 2), nofee_cashback=round(nf, 2), sp_net=round(sp - SP_FEE, 2))
out['scotia_review'] = sr
json.dump(out, open('card-value-model.out.json', 'w'), indent=1)
print(json.dumps(out, indent=1))
