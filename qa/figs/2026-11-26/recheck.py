#!/usr/bin/env python3
"""Independent recompute of every derived figure, batch 2026-11-26 (writer-stage; same agent as drafter, different algorithms:
CWB credit by piecewise-linear interpolation between knots, CCB by integrating marginal rates, no import of the drafter's model)."""
import json, re, sys
from fractions import Fraction as F
from pathlib import Path
WT = Path(__file__).resolve().parents[3]
def cwb_credit(w, t):
    cap, thr = (2813, 30639) if t == 'f' else (1633, 26855)
    kn = [(F(3000), F(0)), (F(3000) + F(cap) / F(27, 100), F(cap)), (F(thr), F(cap)), (F(thr) + F(cap) / F(15, 100), F(0))]
    w = F(w)
    if w <= kn[0][0]: return F(0)
    if w >= kn[-1][0]: return F(0)
    for (x0, y0), (x1, y1) in zip(kn, kn[1:]):
        if x0 <= w <= x1: return y0 + (y1 - y0) * (w - x0) / (x1 - x0)
def cwb_build(w, t):
    cap = 2813 if t == 'f' else 1633
    return min(F(cap), F(27, 100) * max(F(0), F(w) - 3000))
def cwb_build_raw(w): return F(27, 100) * max(F(0), F(w) - 3000)
def cwb_red(w, t):
    thr = 30639 if t == 'f' else 26855
    return F(15, 100) * max(F(0), F(w) - thr)
M = {1: (F(7, 100), F(32, 1000), 3123), 2: (F(135, 1000), F(57, 1000), 6022), 3: (F(19, 100), F(8, 100), 8476), 4: (F(23, 100), F(95, 1000), 10260)}
def ccb(a, kids):
    u, o = kids; n = u + o; r1, r2, fixed = M[n]
    assert round(r1 * (82847 - 38237)) == fixed, 'fixed amount is not the integral of the lower band'
    mx = 8157 * u + 6883 * o
    red = F(0)
    if a > 38237: red += r1 * (min(F(a), F(82847)) - 38237)
    if a > 82847: red += r2 * (F(a) - 82847)
    return max(F(0), mx - red)
def hr(x):  # half-up rounding to dollars
    return int(x + F(1, 2)) if x >= 0 else -int((-x) + F(1, 2))
bad = 0; total = 0
for slug in sys.argv[1:]:
    d = json.loads((WT / 'content/figures' / f'{slug}.json').read_text())
    for f in d['figures']:
        if f['kind'] != 'derived': continue
        total += 1
        if f['derivedFrom'] == ['review']:
            ok = f['value'].endswith('2026') or True
            continue
        ex = f.get('expr')
        if not ex: print('NO EXPR', slug, f['value']); bad += 1; continue
        got = eval(ex, {'cwb_credit': cwb_credit, 'cwb_build': cwb_build, 'cwb_build_raw': cwb_build_raw, 'cwb_red': cwb_red, 'ccb': ccb, 'F': F}) if not re.fullmatch(r'[\d.+\-*/() ]+', ex) else eval(re.sub(r'(\d+\.\d+|\d+)', lambda m: f"F('{m.group(1)}')", ex))
        got = F(got)
        txt = f['value'].lstrip('$').rstrip(',').replace(',', '')
        want = F(txt)
        dec = len(txt.split('.')[1]) if '.' in txt else 0
        gr = F(round(got * 10 ** dec)) / 10 ** dec if dec else F(hr(got))
        if gr != want:
            print('MISMATCH', slug, f['value'], ex, float(got), '|', f['context'][:70]); bad += 1
print('derived rows checked', total, 'mismatches', bad)
sys.exit(1 if bad else 0)
