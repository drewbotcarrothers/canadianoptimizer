#!/usr/bin/env python3
"""Model behind the post rrif-minimum-only-mistake (our own arithmetic).

All dollars are constant 2026 dollars: the return is a REAL return, and 2026 federal brackets,
credits and the OAS threshold are held flat. Federal income tax only (provincial tax would add to it).
Single person, no spouse to roll the RRIF to. Every input marked SOURCED comes from a Canada.ca page
listed in the post's Sources; every input marked EXAMPLE is an illustration.
"""
import json, sys

# SOURCED: CRA 2026 federal rates and brackets (Current year tax rates and income brackets, 2026)
BRACKETS = [(58523, .14), (117045, .205), (181440, .26), (258482, .29), (float('inf'), .33)]
# SOURCED: CRA indexation page, 2026
BPA_MAX, BPA_MIN = 16452, 14829
B29_START, B33_START = 181440, 258482
AGE_AMT, AGE_THRESH = 9208, 46432
PENSION_AMT = 2000          # SOURCED: CRA line 31400 page ($2,000 federal maximum)
CREDIT_RATE = .14           # lowest 2026 federal rate (SOURCED, rates page)
OAS_THRESH = 95323          # SOURCED: CRA 2026 OAS repayment threshold
OAS_RATE = .15              # SOURCED: Canada.ca recovery tax page
OAS_65_74 = 762.50 * 12     # DERIVED: Oct-Dec 2026 maximum monthly OAS x 12
OAS_75 = 838.75 * 12
# SOURCED: CRA prescribed factors, "all other RRIFs", by age at 1 January
FACT = {71:.0528,72:.0540,73:.0553,74:.0567,75:.0582,76:.0598,77:.0617,78:.0636,79:.0658,80:.0682,
        81:.0708,82:.0738,83:.0771,84:.0808,85:.0851,86:.0899,87:.0955,88:.1021,89:.1099,90:.1192,
        91:.1306,92:.1449,93:.1634,94:.1879}
def factor(a): return FACT.get(a, .20)

def fed_tax(ni_after_repay, ni_for_credits=None):
    """Federal tax on taxable income = net income after the OAS repayment deduction."""
    ti = ni_after_repay
    tax, lo = 0.0, 0.0
    for hi, r in BRACKETS:
        if ti > lo: tax += (min(ti, hi) - lo) * r
        lo = hi
    ni = ni_after_repay
    if ni <= B29_START: bpa = BPA_MAX
    elif ni >= B33_START: bpa = BPA_MIN
    else: bpa = BPA_MAX - (BPA_MAX - BPA_MIN) * (ni - B29_START) / (B33_START - B29_START)
    age_amt = max(0.0, AGE_AMT - .15 * max(0.0, ni - AGE_THRESH))
    credits = (bpa + age_amt + PENSION_AMT) * CREDIT_RATE
    return max(0.0, tax - credits)

def year(a, rrif_income, other_income, deemed=0.0):
    """Tax for one year. Returns (income_tax, recovery_tax, net_income)."""
    oas = OAS_75 if a >= 75 else OAS_65_74
    gross = other_income + oas + rrif_income + deemed
    rec = min(oas, max(0.0, gross - OAS_THRESH) * OAS_RATE)
    ni = gross - rec
    return fed_tax(ni), rec, ni

def run(strategy, other, r, death_age, start=500000.0, level=None):
    bal, rows = start, []
    tot = dict(withdrawn=0, tax=0, rec=0)
    for a in range(71, death_age + 1):
        mn = bal * factor(a)
        w = mn if strategy == 'min' else min(bal, max(mn, level))
        tax, rec, ni = year(a, w, other)
        rows.append(dict(age=a, start=round(bal), withdrawal=round(w), minimum=round(mn), net_income=round(ni),
                         income_tax=round(tax), oas_recovery=round(rec),
                         aftertax=round(w + other + (OAS_75 if a >= 75 else OAS_65_74) - tax - rec)))
        tot['withdrawn'] += w; tot['tax'] += tax; tot['rec'] += rec
        bal = (bal - w) * (1 + r)
        if a == death_age:
            # Final return: that year's income PLUS deemed receipt of the remaining RRIF balance.
            # Recompute the death year with the deemed amount.
            tax0, rec0 = tax, rec
            taxd, recd, nid = year(a, w, other, deemed=bal)
            tot['tax'] += taxd - tax0; tot['rec'] += recd - rec0
            final_extra_tax = (taxd - tax0) + (recd - rec0)
            estate_after = bal - final_extra_tax
    return rows, tot, bal, final_extra_tax, estate_after

def level_payment(r, n, start=500000.0):
    return start * r / (1 - (1 + r) ** -n)

def compare(other, r, death_age):
    """Equal-spending comparison. The level strategy's after-tax cash above (or below) the minimum-only
    cash in each year goes into (or comes out of) a TFSA that earns the same real return, tax-free.
    TFSA room is NOT enforced (see max_surplus against the $7,000 2026 limit)."""
    L = level_payment(r, 25)
    rm, tm, bm, fxm, em = run('min', other, r, death_age, level=L)
    rl, tl, bl, fxl, el = run('level', other, r, death_age, level=L)
    tfsa = 0.0
    for a, b in zip(rm, rl):
        tfsa = tfsa * (1 + r) + (b['aftertax'] - a['aftertax'])
    def split(rows, deemed_bal, other, a):
        w = rows[-1]['withdrawal']
        t0, r0, _ = year(a, w, other)
        t1, r1, _ = year(a, w, other, deemed=deemed_bal)
        return t1 - t0, r1 - r0
    ftm, frm = split(rm, bm, other, death_age)
    ftl, frl = split(rl, bl, other, death_age)
    out = {}
    for tag, rows, bal, ft, fr, est in (('min', rm, bm, ftm, frm, em), ('level', rl, bl, ftl, frl, el)):
        out[tag] = dict(withdrawn=round(sum(x['withdrawal'] for x in rows)),
                        life_income_tax=sum(x['income_tax'] for x in rows), life_oas_recovery=sum(x['oas_recovery'] for x in rows),
                        deemed_balance=round(bal), final_income_tax=round(ft), final_oas_recovery=round(fr),
                        total_tax=round(sum(x['income_tax'] + x['oas_recovery'] for x in rows) + ft + fr),
                        estate_after_tax=round(est))
    out['tfsa_from_surplus'] = round(tfsa)
    out['level_net_advantage'] = round(el + tfsa - em)
    out['max_annual_surplus'] = round(max(b['aftertax'] - a['aftertax'] for a, b in zip(rm, rl)))
    out['level_payment'] = round(L)
    out['rows_min'] = rm; out['rows_level'] = rl
    return out

if __name__ == '__main__':
    res = {}
    for r in (.03, .01):
        for name, other in (('A', 12000), ('B', 52000), ('C', 70000)):
            for da in (80, 85, 90, 95):
                res[f'r{r}_{name}_{da}'] = compare(other, r, da)
    json.dump(res, open('rrif-minimum-only-model.out.json', 'w'), indent=1)
    for k, v in res.items():
        print(k, {kk: v[kk] for kk in ('min', 'level', 'tfsa_from_surplus', 'level_net_advantage', 'max_annual_surplus')})
