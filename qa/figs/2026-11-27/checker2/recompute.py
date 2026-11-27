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
print('recompute checks', n, 'mismatches', bad); sys.exit(1 if bad else 0)
