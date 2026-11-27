#!/usr/bin/env python3
"""Writer-stage independent recomputation (batch 2026-11-27). Does NOT import the drafter's model.py: re-implements the formulas with Fractions
so a transcription error in model.py would show up as a value that is not reproducible here. Used by classify (grid membership) and run standalone."""
from fractions import Fraction as F
def tax(x, bands):
    t = F(0); lo = F(0)
    for hi, r in bands:
        top = F(x) if hi is None else min(F(x), F(hi))
        if top > lo: t += (top-lo)*F(r)
        if hi is None or F(x) <= F(hi): break
        lo = F(hi)
    return t
ON = [(55000,'1/200'),(250000,'1/100'),(400000,'3/200'),(2000000,'1/50'),(None,'1/40')]
TO = [(55000,'1/200'),(250000,'1/100'),(400000,'3/200'),(2000000,'1/50'),(3000000,'1/40'),(4000000,'11/250'),(5000000,'109/2000'),(10000000,'13/200'),(20000000,'151/2000'),(None,'43/500')]
BC = [(200000,'1/100'),(2000000,'1/50'),(None,'3/100')]
QC26=[(62900,'1/200'),(315000,'1/100'),(None,'3/200')]
MTL26=[(62900,'1/200'),(315000,'1/100'),(552300,'3/200'),(1104700,'1/50'),(2136500,'1/40'),(3113000,'7/200'),(None,'1/25')]
MTL27=[(64400,'1/200'),(322600,'1/100'),(552300,'3/200'),(1104700,'1/50'),(2136500,'1/40'),(3113000,'7/200'),(None,'1/25')]
QCV26=[(62900,'1/200'),(315000,'1/100'),(500000,'3/200'),(750000,'1/40'),(None,'3/100')]
QC27=[(64400,'1/200'),(322600,'1/100'),(None,'3/200')]
def bc_ptt(p): return tax(p, BC) + (F(p-3000000)*F(1,50) if p > 3000000 else 0)   # extra 2% of the residential part above $3M
def bc_ex(p):
    p = F(p); full = min(bc_ptt(p), F(8000))
    if p <= 835000: return full
    if p >= 860000: return F(0)
    return F(8000)*(860000-p)/25000
def pmt(P, rate, years):
    r = F(rate)/12; n = years*12
    return F(P)*r/(1-(1+r)**(-n))   # exact Fraction power, monthly compounding (stated simplification)
def money_strs(x):
    x = F(x); out = set()
    if x.denominator == 1:
        n = int(x); out |= {f'${n:,}', f'${n:,}.00'}
    else:
        r = round(x, 2); out.add(f'${float(r):,.2f}')
        out.add(f'${int(round(x)):,}')   # whole-dollar rounding used in prose
    return out
def pct_strs(x):
    x = F(x)*100; out = set()
    for d in (0, 1, 2, 3, 4):
        s = ('%.*f' % (d, float(x))).rstrip('0').rstrip('.') if d else '%d' % round(x)
        out.add(s + '%')
    return out
def grid(slug):
    G = set()
    def add(x): G.update(money_strs(x))
    if slug == 'critical-illness-vs-disability-insurance-canada':
        ei = 729; cp = F('1741.20'); av = F('1236.32')
        for wk in range(1, 53): add(ei*wk)
        for mo in range(1, 25):
            for amt in (cp, av): add(amt*mo)
        for sal in (70000, 50000, 60000, 80000, 100000):
            for rate in ('6/10','65/100','7/10','75/100','8/10','85/100'): add(F(sal)*F(rate)); add(F(sal)*F(rate)/12)
            for tot in (ei*26 + cp*6, ei*26 + av*6, cp*12, av*12, ei*26): add(tot); add(sal-tot)
    return G
def rates(slug):
    return set()
def eq_rate_25(target_pmt, L25):
    lo, hi = F(2,100), F(5,100)
    for _ in range(80):
        mid = (lo+hi)/2
        if pmt(L25, mid, 25) > target_pmt: hi = mid
        else: lo = mid
    return (lo+hi)/2
def evalexpr(expr):
    env = dict(F=F, tax=tax, ON=ON, TO=TO, BC=BC, QCV26=QCV26, QC26=QC26, MTL26=MTL26, pmt=pmt, eq_rate_25=eq_rate_25)
    return eval(expr, {'__builtins__': {'min': min, 'max': max}}, env)
def matches(expr, value):
    x = evalexpr(expr)
    if value.endswith('%'): return value in pct_strs(x)
    if value.startswith('$'): return value in money_strs(x)
    return value in {('%.2f' % float(x)), ('%.2f' % float(x)).rstrip('0').rstrip('.')}
if __name__ == '__main__':
    assert pmt(100000, F(5,100), 25) > 0
    print('ok; ci grid', len(grid('critical-illness-vs-disability-insurance-canada')))
