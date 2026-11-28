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
    if slug == 'how-much-house-can-i-afford-canada': return house_grid()[0]
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

# ---------- how-much-house-can-i-afford-canada: independent model (Fractions; bisection monthly rate; annuity by summing discount factors) ----------
import math
def mrate(q):
    """monthly rate i with (1+i)^6 = 1+q/2 (semi-annual compounding), by bisection on Fractions"""
    target = 1 + F(q)/2; lo, hi = F(0), F(1, 10)
    for _ in range(90):
        mid = (lo+hi)/2
        if (1+mid)**6 > target: hi = mid
        else: lo = mid
    return (lo+hi)/2
def pfac(q, years):
    i = mrate(q); v = 1/(1+i); n = years*12
    s = F(0); d = F(1)
    for _ in range(n): d *= v; s += d      # sum of discount factors = annuity-immediate factor
    return 1/s
def qrate(c): return max(F(c) + F(2, 100), F(21, 400))
def hprem(ltv, yrs):
    for top, r in ((F(4, 5), 0), (F(17, 20), F(28, 1000)), (F(9, 10), F(31, 1000)), (F(19, 20), F(4, 100))):
        if ltv <= top: return r + (F(2, 1000) if (yrs > 25 and r) else 0)
    return None
def hmin(price): return F(5, 100)*min(F(price), 500000) + F(1, 10)*max(F(price)-500000, 0)
def hmaxprice(L, down, yrs):
    """largest whole-$1,000 price whose insured/uninsured loan fits L: take the best across the four premium bands in closed form"""
    best = None
    for lo, hi, r in ((F(0), F(4, 5), F(0)), (F(4, 5), F(17, 20), F(28, 1000)), (F(17, 20), F(9, 10), F(31, 1000)), (F(9, 10), F(19, 20), F(4, 100))):
        r = r + (F(2, 1000) if (yrs > 25 and r) else 0)
        ub = F(down) + F(L)/(1+r)                # loan (P-D)(1+r) <= L
        if hi < 1: ub = min(ub, F(down)/(1-hi))   # ltv <= hi
        else: pass
        if hi == 1: pass
        P = (ub // 1000) * 1000
        while P > 0:
            ltv = (P-F(down))/P
            if ltv > lo and ltv <= hi and (r == 0 or (hmin(P) <= down and P < 1500000)): break
            P -= 1000
            if P < 100000: P = 0; break
        if P and (best is None or P > best): best = P
    return best
def hhouse(income, c, down, debt=0, yrs=25, tax=350, heat=125):
    m = F(income)/12; gds_room = F(39, 100)*m - tax - heat; tds_room = F(44, 100)*m - tax - heat - debt
    room = min(gds_room, tds_room); f = pfac(qrate(c), yrs); Lmax = room/f; P = hmaxprice(Lmax, down, yrs)
    out = dict(gross=F(39, 100)*m, room=room, tdsroom=tds_room, Lmax=Lmax, f1000=f*1000)
    if P:
        ltv = (F(P)-down)/P; pr = hprem(ltv, yrs); loan = (F(P)-down)*(1+pr)
        out.update(price=F(P), loan=loan, prem=(F(P)-down)*pr, pay=loan*f, tot=loan*f+tax+heat, c_pay=loan*pfac(c, yrs))
        out['diff'] = out['pay'] - out['c_pay']
    return out
def hneed(price, down, c, yrs=25, debt=0, tax=350, heat=125):
    P = F(price); pr = hprem((P-down)/P, yrs); loan = (P-down)*(1+pr); h = loan*pfac(qrate(c), yrs) + tax + heat
    return max(h/F(39, 100), (h+debt)/F(44, 100))*12
def house_grid():
    G = set(); res = {}
    def add(x):
        x = F(x); G.update(money_strs(x)); G.add(f'${float(round(x,2)):,.2f}')
        G.add(f'${math.floor(x):,}'); G.add(f'${math.ceil(x):,}'); G.add(f'${int(x+F(1,2)):,}')
    for inc in (80000, 100000, 125000, 150000):
        for c in ('0.0325', '0.045', '0.055', '0.065'):
            for debt in (0, 500, 1000):
                o = hhouse(inc, F(c), 50000, debt); res[(inc, c, debt)] = o
                for v in o.values(): add(v)
    o30 = hhouse(100000, F('0.045'), 50000, 0, 30); [add(v) for v in o30.values()]; res['30'] = o30
    add(hneed(500000, 50000, F('0.045'))); add(hneed(500000, 50000, F('0.045'), 30))
    # the +$1,000 cliff example
    for P in (500000, 501000):
        pr = hprem((F(P)-50000)/P, 25); add((F(P)-50000)*(1+pr))
    add((F(501000)-50000)*F(104, 100) - (F(500000)-50000)*F(31, 1000)*0 - F(463950)); add(hmin(751000))
    f = pfac(F('0.065'), 25); add(f*1000); add(100/f); add(200/f); add(50/f)
    # rounded-to-$1,000 differences used in prose
    pr = lambda i, c='0.045', d=0: res[(i, c, d)]['price']
    for a, b in ((100000, 125000), (125000, 150000), (80000, 100000)): add(pr(b)-pr(a))
    add(res['30']['price']-pr(100000)); add(pr(100000)-pr(100000, '0.055'))
    G.update(['$0', '$400', '$200', '$100', '$500', '$1,000', '$10,000', '$50,000', '$350', '$125', '$100,000', '$80,000', '$125,000', '$150,000', '$500,000'])
    return G, res
