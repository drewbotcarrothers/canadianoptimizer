"""Drafter-stage calculation model, batch 2026-11-27 (rates from the official pages fetched 2026-11-27 in ../check/pages)."""
from decimal import Decimal as Dc, ROUND_HALF_UP

def band_tax(x, bands):
    """bands: list of (upper_limit or None, rate) applied marginally."""
    tax = Dc(0); lo = Dc(0); x = Dc(x)
    for hi, r in bands:
        top = x if hi is None else min(x, Dc(hi))
        if top > lo: tax += (top - lo) * Dc(r)
        lo = Dc(hi) if hi is not None else x
        if hi is not None and x <= Dc(hi): break
    return tax

def r0(v): return int(Dc(v).quantize(Dc(1), rounding=ROUND_HALF_UP))
def r2(v): return Dc(v).quantize(Dc('0.01'), rounding=ROUND_HALF_UP)

# Ontario land transfer tax, 1-2 single family residences (ontario.ca, agreements after Nov 14, 2016)
ON = [(55000, '0.005'), (250000, '0.01'), (400000, '0.015'), (2000000, '0.02'), (None, '0.025')]
ON_OTHER = [(55000, '0.005'), (250000, '0.01'), (400000, '0.015'), (None, '0.02')]
# Toronto MLTT from April 1, 2026 (by-law 132-2026) for 1-2 single family residences
TO = [(55000, '0.005'), (250000, '0.01'), (400000, '0.015'), (2000000, '0.02'), (3000000, '0.025'), (4000000, '0.044'), (5000000, '0.0545'), (10000000, '0.065'), (20000000, '0.0755'), (None, '0.086')]
def on_ltt(p): return band_tax(p, ON)
def to_mltt(p): return band_tax(p, TO)
ON_FTB_MAX = 4000; TO_FTB_MAX = Dc('4475')

# BC property transfer tax
BC = [(200000, '0.01'), (2000000, '0.02'), (None, '0.03')]
def bc_ptt(p, further=True):
    t = band_tax(p, BC)
    if further and p > 3000000: t += (Dc(p) - 3000000) * Dc('0.02')
    return t
def bc_fthb_exempt(p):
    """First time home buyers' exemption, 100% eligible, property <= 0.5 ha, registered on/after April 1, 2024 (BC 'current amount' page)."""
    if p <= 500000: return bc_ptt(p)
    if p <= 835000: return Dc(8000)
    if p < 860000: return Dc(8000) * (Dc(860000) - p) / Dc(25000)
    return Dc(0)

# Quebec transfer duties 2026 (Loi concernant les droits sur les mutations immobilieres, art. 2; Montreal; Quebec City)
QC26 = [(62900, '0.005'), (315000, '0.01'), (None, '0.015')]
MTL26 = [(62900, '0.005'), (315000, '0.01'), (552300, '0.015'), (1104700, '0.02'), (2136500, '0.025'), (3113000, '0.035'), (None, '0.04')]
MTL27 = [(64400, '0.005'), (322600, '0.01'), (552300, '0.015'), (1104700, '0.02'), (2136500, '0.025'), (3113000, '0.035'), (None, '0.04')]
QCV26 = [(62900, '0.005'), (315000, '0.01'), (500000, '0.015'), (750000, '0.025'), (None, '0.03')]
QC27 = [(64400, '0.005'), (322600, '0.01'), (None, '0.015')]

def pmt(principal, annual_rate, years):
    """Monthly payment, monthly compounding (stated simplification)."""
    r = Dc(str(annual_rate)) / 12; n = years * 12; P = Dc(principal)
    return P * r / (1 - (1 + r) ** (-n))
