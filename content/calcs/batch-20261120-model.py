"""Drafter model for batch 2026-11-20 (seniors credits, common-law, emergency fund calculator).
Inputs are 2026 federal amounts from CRA pages (indexation table, current-year rates) and EI figures
from Canada.ca, read 2026-11-19. Example households are illustrations. Writes batch-20261120-model.out.json."""
import json
# --- sourced inputs (2026 tax year / July 2026-June 2027 benefit year) ---
R1 = 0.14; B1 = 58523; R2 = 0.205
BPA = 16452; AGE = 9208; AGE_TH = 46432; AGE_RED = 0.15; PEN = 2000
DIS = 10341; CARE18 = 8773; MED_CAP = 2890; HATC = 20000; OAS_TH = 95323
CCB_U6 = 8157; CCB_T1 = 38237; CCB_T2 = 82847; CCB_R1 = 0.07; CCB_R2 = 0.032; CCB_BASE1 = 3123
CG_ADULT = 445; CG_CHILD = 234; CG_SUPP = 234; CG_TH = 46432; CG_RED = 0.05
EI_RATE = 0.55; EI_MAX = 729; MIE = 68900; EI_MIN_WEEKS = 14; EI_WAIT = 0  # waiting period waived for claims starting Mar 30, 2025 - Oct 9, 2027 (temporary measure)
def r2(x): return round(x + 1e-9, 2)
def fed_tax(ti): return min(ti, B1) * R1 + max(0, ti - B1) * R2
def age_amt(ni): return max(0.0, AGE - AGE_RED * max(0, ni - AGE_TH))
out = {}
# ---------------- seniors ----------------
S = {}
S['age_end'] = round(AGE_TH + AGE / AGE_RED)
S['age_credit_max'] = r2(AGE * R1); S['pen_credit_max'] = r2(PEN * R1); S['bpa_credit'] = r2(BPA * R1)
S['dis_credit'] = r2(DIS * R1); S['care_credit'] = r2(CARE18 * R1); S['hatc_credit'] = r2(HATC * R1)
S['age_at'] = {str(n): {'amount': r2(age_amt(n)), 'credit': r2(age_amt(n) * R1)} for n in (40000, 55000, 70000, 85000, 100000)}
S['med_cap_income'] = round(MED_CAP / 0.03)
# couple example: Helen RRIF 40,000 + CPP/OAS 22,800; Raj CPP/OAS 15,800 (illustration)
H_RRIF, H_GOV, R_GOV = 40000, 22800, 15800
def couple(split):
    a = H_RRIF + H_GOV - split; b = R_GOV + split
    agea, ageb = age_amt(a), age_amt(b)
    pena = min(PEN, H_RRIF - split); penb = min(PEN, split)
    # Raj's unused age + pension amounts transfer to Helen (Schedule 2), first-bracket simplification
    b_need = max(0, b - BPA)
    transfer = max(0.0, (ageb + penb) - b_need)
    taxb = max(0.0, fed_tax(b) - R1 * (BPA + ageb + penb))
    taxa = max(0.0, fed_tax(a) - R1 * (BPA + agea + pena + transfer))
    return dict(split=split, a_net=a, b_net=b, a_age=r2(agea), b_age=r2(ageb), a_pen=pena, b_pen=penb, transfer=r2(transfer),
                a_gross=r2(fed_tax(a)), b_gross=r2(fed_tax(b)), a_tax=r2(taxa), b_tax=r2(taxb), total=r2(taxa + taxb))
S['couple'] = [couple(s) for s in (0, 5000, 10000, 15000, 20000)]
best = min((couple(s) for s in range(0, 20001, 100)), key=lambda c: (c['total'], c['split']))
S['best'] = best
S['save_best'] = r2(S['couple'][0]['total'] - best['total'])
S['save_half'] = r2(S['couple'][0]['total'] - S['couple'][4]['total'])
S['inputs'] = dict(h_rrif=H_RRIF, h_gov=H_GOV, r_gov=R_GOV, h_net=H_RRIF + H_GOV)
out['seniors'] = S
# ---------------- common-law ----------------
C = {}
SAM, JOR = 40000, 50000
def ccb1(afni):  # one child under 6
    if afni <= CCB_T1: red = 0
    elif afni <= CCB_T2: red = CCB_R1 * (afni - CCB_T1)
    else: red = CCB_BASE1 + CCB_R2 * (afni - CCB_T2)
    return max(0.0, CCB_U6 - red)
def cgeb(afni, couple, kids):
    if couple: base = 2 * CG_ADULT + kids * CG_CHILD
    elif kids: base = CG_ADULT + CG_ADULT + (kids - 1) * CG_CHILD + CG_SUPP  # first child in single-parent family + supplement
    else: base = CG_ADULT + min(CG_SUPP, 0.02 * max(0, afni - 11564))
    return max(0.0, base - CG_RED * max(0, afni - CG_TH))
C['sam_ccb'] = r2(ccb1(SAM)); C['sam_cgeb'] = r2(cgeb(SAM, False, 1)); C['jor_cgeb'] = r2(cgeb(JOR, False, 0))
C['before'] = r2(C['sam_ccb'] + C['sam_cgeb'] + C['jor_cgeb'])
C['afni'] = SAM + JOR
C['cl_ccb'] = r2(ccb1(SAM + JOR)); C['cl_cgeb'] = r2(cgeb(SAM + JOR, True, 1))
C['after'] = r2(C['cl_ccb'] + C['cl_cgeb'])
C['drop'] = r2(C['before'] - C['after']); C['drop_month'] = r2(C['drop'] / 12)
C['sam_ccb_m'] = r2(C['sam_ccb'] / 12); C['cl_ccb_m'] = r2(C['cl_ccb'] / 12)
C['ccb_red_before'] = r2(CCB_R1 * (SAM - CCB_T1)); C['ccb_red_after'] = r2(CCB_BASE1 + CCB_R2 * (SAM + JOR - CCB_T2))
C['cgeb_red_after'] = r2(CG_RED * (SAM + JOR - CG_TH))
C['ed_credit'] = r2(BPA * R1); C['sam_gross'] = r2(fed_tax(SAM)); C['sam_bpa_ed'] = r2(2 * BPA * R1)
C['cgeb_zero_couple_1kid'] = r2(CG_TH + (2 * CG_ADULT + CG_CHILD) / CG_RED)
C['cgeb_zero_single'] = r2(CG_TH + (CG_ADULT + CG_SUPP) / CG_RED)
C['cgeb_two_singles_40k'] = r2(2 * cgeb(40000, False, 0)); C['cgeb_couple_80k'] = r2(cgeb(80000, True, 0))
out['commonlaw'] = C
# ---------------- emergency fund ----------------
E_ = {}
E_['ei_max_check'] = r2(MIE / 52 * EI_RATE)
def fund(ess, months, other, ei_eligible, earnings, tax=0.15, weeks_ent=EI_MIN_WEEKS, wait=EI_WAIT):
    weeks = months * 52 / 12
    weekly = min(EI_MAX, earnings / 52 * EI_RATE) if ei_eligible else 0
    paid = max(0, min(weeks - wait, weeks_ent)) if ei_eligible else 0
    ei_net = weekly * paid * (1 - tax)
    spend = ess * months; covered = other * months
    gap = max(0.0, spend - covered - ei_net)
    bridge = max(0.0, (ess - other) * 12 / 52 * 4)
    return dict(weekly=r2(weekly), paid_weeks=round(paid, 2), ei_net=r2(ei_net), spend=r2(spend), other=r2(covered),
                gap=r2(gap), bridge=r2(bridge), target=r2(max(gap, bridge)), no_ei=r2(max(0.0, spend - covered)))
HH = {
 'single': dict(ess=3200, other=0, ei=True, earn=55000),
 'couple': dict(ess=6000, other=3800, ei=True, earn=95000),
 'selfemp': dict(ess=4000, other=0, ei=False, earn=0),
}
E_['hh'] = {k: {str(m): fund(v['ess'], m, v['other'], v['ei'], v['earn']) for m in (3, 6)} for k, v in HH.items()}
E_['inputs'] = HH
for k in ('single', 'couple'):
    six = E_['hh'][k]['6']; E_['hh'][k]['cut6_pct'] = round(100 * (six['no_ei'] - six['target']) / six['no_ei'])
E_['single_wait'] = {str(m): fund(3200, m, 0, True, 55000, wait=1) for m in (3, 6)}
E_['wait_cost_single'] = r2(min(EI_MAX, 55000 / 52 * EI_RATE) * 0.85)
out['ef'] = E_
json.dump(out, open(__file__.replace('.py', '.out.json'), 'w'), indent=1)
print(json.dumps(out, indent=1))
