from decimal import Decimal as Dc, getcontext, ROUND_HALF_UP
getcontext().prec = 40
def pay_factor(q, years=25):
    """Monthly payment per $1 borrowed, semi-annual compounding (stated assumption)."""
    q = Dc(str(q)); i = (1 + q/2) ** (Dc(1)/6) - 1; n = years*12
    return i / (1 - (1 + i) ** (-n))
def qual_rate(c): c = Dc(str(c)); return max(c + Dc('0.02'), Dc('0.0525'))
def prem_rate(ltv, years=25):
    if ltv <= Dc('0.80'): return Dc(0)
    for top, r in ((Dc('0.85'), '0.028'), (Dc('0.90'), '0.031'), (Dc('0.95'), '0.04')):
        if ltv <= top: return Dc(r) + (Dc('0.002') if years > 25 else 0)
    return None
def min_down(price): price = Dc(price); return Dc('0.05')*min(price, 500000) + (Dc('0.10')*(price-500000) if price > 500000 else 0)
def loan_for(price, down, years=25):
    base = Dc(price) - Dc(down); ltv = base/Dc(price); p = prem_rate(ltv, years)
    return base*(1+p), p, ltv
def max_pi(income, tax, heat, debt, gds=Dc('0.39'), tds=Dc('0.44')):
    m = Dc(income)/12
    return min(gds*m - Dc(tax) - Dc(heat), tds*m - Dc(tax) - Dc(heat) - Dc(debt)), gds*m - Dc(tax) - Dc(heat), tds*m - Dc(tax) - Dc(heat) - Dc(debt)
def max_price(income, c, down, tax=350, heat=125, debt=0, years=25):
    pi, g, t = max_pi(income, tax, heat, debt); f = pay_factor(qual_rate(c), years); Lmax = pi/f
    for price in range(1499000, 0, -1000):
        ltv = (Dc(price)-Dc(down))/Dc(price)
        if ltv <= 0: continue
        pr = prem_rate(ltv, years)
        if pr is None: continue
        if pr > 0 and price >= 1500000: continue
        if Dc(down) < min_down(price) and pr > 0: continue
        L, _, _ = loan_for(price, down, years)
        if L <= Lmax: return price, Lmax, pi, ('GDS' if g <= t else 'TDS'), f
    return None, Lmax, pi, ('GDS' if g <= t else 'TDS'), f
def income_needed(price, down, c, tax=350, heat=125, debt=0, years=25):
    L, pr, ltv = loan_for(price, down, years); pi = L*pay_factor(qual_rate(c), years)
    h = pi + Dc(tax) + Dc(heat)
    return max(h/Dc('0.39'), (h+Dc(debt))/Dc('0.44'))*12
if __name__ == '__main__':
    print('30y', max_price(100000,'0.045',50000,years=30)[0], 'need500k', income_needed(500000,50000,'0.045'))
    for inc in (80000, 100000, 125000, 150000):
        p, L, pi, b, f = max_price(inc, '0.045', 50000)
        print(inc, p, round(L), round(pi,2), b, round(f*1000,4))
    for c in ('0.03','0.0325','0.045','0.055'):
        print(c, qual_rate(c), max_price(100000, c, 50000)[:2])
    for d in (0,500,1000): print(d, max_price(100000,'0.045',50000,debt=d)[:4])
