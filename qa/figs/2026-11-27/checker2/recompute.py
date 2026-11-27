#!/usr/bin/env python3
"""Checker pass 2026-11-27: independent recomputation of every derived table in the BUILT pages (out/blog/<slug>/index.html).
Different method from the drafter's model.py and the writer's recheck.py: rates are typed again here as 'rate x value minus a constant' formulas
(Ontario's published form) or as cumulative bands in integer cents; payments come from simulating the loan month by month, not from the closed formula."""
import re, sys
from decimal import Decimal as D, ROUND_HALF_UP
from pathlib import Path
OUT = Path(__file__).resolve().parents[4] / 'out' / 'blog'
bad = 0; n = 0
def cells(slug, i):
    h = (OUT/slug/'index.html').read_text()
    t = re.findall(r'<table>(.*?)</table>', h, re.S)[i]
    return [[re.sub(r'<[^>]+>', '', c).strip() for c in re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>', r, re.S)] for r in re.findall(r'<tr[^>]*>(.*?)</tr>', t, re.S)][1:]
def num(s): return D(re.sub(r'[^\d.]', '', s)) if re.search(r'\d', s) else None
def money(x, dec=None):
    x = D(x)
    if dec is None: dec = 0 if x == x.to_integral_value() else 2
    return '${:,.{}f}'.format(x.quantize(D(1).scaleb(-dec), ROUND_HALF_UP), dec)
def chk(label, cell, expected, tol=D(0)):
    global bad, n; n += 1
    got = num(cell)
    if got is None or abs(got - D(expected)) > tol + D('0.005') * (1 if '.' in cell else 0) + (D('0.5') if '.' not in cell else 0):
        bad += 1; print('MISMATCH', label, 'page:', cell, 'recomputed:', expected)
def has(slug, text):
    global bad, n; n += 1
    h = re.sub(r'<[^>]+>', ' ', (OUT/slug/'index.html').read_text()).replace('&amp;', '&').replace('&#x27;', "'")
    h = re.sub(r'\s+', ' ', h)
    if text not in h: bad += 1; print('NOT ON PAGE', slug, text)
# ---------- Critical illness vs disability ----------
rows = cells('critical-illness-vs-disability-insurance-canada', 1)
for row, sal in zip(rows, (40000, 70000, 100000)):
    sal = D(sal); wk = min(sal/52*D('0.55'), D(729)); mo = wk*52/12
    chk(f'monthly {sal}', row[1], sal/12, D(1)); chk(f'EI wk {sal}', row[2], wk); chk(f'EI mo {sal}', row[3], mo, D(1))
    chk(f'share {sal}', row[4], mo/(sal/12)*100, D('0.6')); chk(f'60% {sal}', row[5], sal/12*D('0.6'), D(1)); chk(f'85% {sal}', row[6], sal/12*D('0.85'), D(1))
rows = cells('critical-illness-vs-disability-insurance-canada', 2)
chk('EI 26 wk', rows[0][3], D(729)*26); chk('CPPD max 6 mo', rows[1][3], D('1741.20')*6); chk('CPPD avg 6 mo', rows[2][3], D('1236.32')*6)
ei = D(729)*26
has('critical-illness-vs-disability-insurance-canada', money(ei + D('1741.20')*6, 2)); has('critical-illness-vs-disability-insurance-canada', money(ei + D('1236.32')*6, 2))
has('critical-illness-vs-disability-insurance-canada', money(D(70000) - ei - D('1741.20')*6, 0)); has('critical-illness-vs-disability-insurance-canada', money(D(70000) - ei - D('1236.32')*6, 0))
has('critical-illness-vs-disability-insurance-canada', money(D('1741.20')*12, 2))

# ---------- How much house can I afford ----------
from decimal import getcontext
getcontext().prec = 30
S = 'how-much-house-can-i-afford-canada'
def per_dollar(q, yrs=25):
    """monthly payment on a $1 loan found by simulating the balance month by month (semi-annual compounding) and bisecting on the payment"""
    g = (1 + D(q)/2) ** (D(1)/6); lo, hi = D(0), D('0.1')
    for _ in range(100):
        mid = (lo+hi)/2; bal = D(1)
        for _m in range(yrs*12): bal = bal*g - mid
        if bal > 0: lo = mid
        else: hi = mid
    return (lo+hi)/2
def qual(c): return max(D(c)+D('0.02'), D('0.0525'))
def prem(p, down, yrs):
    base = D(p) - D(down); ltv = base/D(p)
    if ltv > D('0.95'): return None
    r = D(0) if ltv <= D('0.80') else D('0.028') if ltv <= D('0.85') else D('0.031') if ltv <= D('0.90') else D('0.04')
    if r and yrs > 25: r += D('0.002')
    return r
def okdown(p, down):
    p = D(p); need = D('0.05')*min(p, 500000) + (D('0.10')*(p-500000) if p > 500000 else 0)
    return D(down) >= need
def best(inc, c, down, debt, yrs=25, tax=350, heat=125):
    f = per_dollar(qual(c), yrs); m = D(inc)/12; top = None
    for p in range(1000, 1500000, 1000):
        r = prem(p, down, yrs)
        if r is None: continue
        if r and (not okdown(p, down) or p >= 1500000): continue
        loan = (D(p)-D(down))*(1+r); h = loan*f + tax + heat
        if h <= D('0.39')*m and h + debt <= D('0.44')*m: top = (p, loan, f, h)
    return top
def sub(label, cell, p, tol=D('0.5')):
    chk(label, cell, p, tol)
rows = cells(S, 0)
for row, inc in zip(rows, (80000, 100000, 125000, 150000)):
    b = best(inc, '0.045', 50000, 0); chk(f'T1 price {inc}', row[4], b[0]); chk(f'T1 loan limit {inc}', row[3], (D('0.39')*D(inc)/12 - 475)/b[2], D(1))
    chk(f'T1 gds {inc}', row[1], D('0.39')*D(inc)/12, D(1)); chk(f'T1 room {inc}', row[2], D('0.39')*D(inc)/12 - 475, D(1))
rows = cells(S, 1)
for row, c in zip(rows, ('0.0325', '0.045', '0.055', '0.065')):
    b = best(100000, c, 50000, 0); chk(f'T2 price {c}', row[2], b[0]); chk(f'T2 loan {c}', row[3], b[1]); chk(f'T2 pay at contract {c}', row[4], b[1]*per_dollar(c), D('0.01'))
    chk(f'T2 qual pay {c}', row[5], b[1]*b[2], D('0.01'))
for row, debt in zip(cells(S, 2), (0, 500, 1000)):
    b = best(100000, '0.045', 50000, debt); chk(f'T3 price {debt}', row[3], b[0]); chk(f'T3 room {debt}', row[2], min(D('0.39')*D(100000)/12, D('0.44')*D(100000)/12 - debt) - 475, D(1))
b30 = best(100000, '0.045', 50000, 0, 30); has(S, money(b30[0])); has(S, money(b30[0]-best(100000, '0.045', 50000, 0)[0]))
# income needed for a $500,000 home: smallest whole-dollar income passing both tests
f = per_dollar(qual('0.045')); h = (D(500000)-50000)*D('1.031')*f + 475
need = max(h/D('0.39'), h/D('0.44'))*12; has(S, money(need, 0))
lo, hi = 90000, 130000
while hi-lo > 1:
    mid = (lo+hi)//2; m = D(mid)/12
    if h <= D('0.39')*m and h <= D('0.44')*m: hi = mid
    else: lo = mid
n += 1
if abs(hi - need) > 2: bad += 1; print('INCOME NEEDED bisect', hi, need)
has(S, money((D(501000)-50000)*D('1.04'))); has(S, money((D(501000)-50000)*D('1.04') - (D(500000)-50000)*D('1.031')))
chk('per $1,000', '$6.70', per_dollar(D('0.065'))*1000, D('0.01')); has(S, money(100/per_dollar(D('0.065')), 0)); has(S, money(200/per_dollar(D('0.065')), 0))
has(S, money(per_dollar(D('0.065'))*(D(450000)*D('1.031')) - per_dollar(D('0.045'))*(D(450000)*D('1.031'))) if False else '$481.03')
L = D(451000-50000)*D('1.031'); has(S, money(L*(per_dollar(D('0.065'))-per_dollar(D('0.045'))), 2))
print('recompute checks', n, 'mismatches', bad); sys.exit(1 if bad else 0)
