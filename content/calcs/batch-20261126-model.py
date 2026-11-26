#!/usr/bin/env python3
"""Batch 2026-11-26 derived figures. Inputs are CRA's published numbers (read 2026-11-26):
CWB 2025 tax year (Schedule 6 + CWB how-much page) and CCB July 2026 to June 2027 (CRA how-much page)."""
import json
from decimal import Decimal as D, ROUND_HALF_UP
def r2(x): return float(D(str(x)).quantize(D('0.01'),rounding=ROUND_HALF_UP))
out={}
# ---- CWB (outside Quebec, Alberta, Nunavut), 2025 tax year
def cwb_basic(work, afni, family):
    mx = 2813 if family else 1633
    base = 30639 if family else 26855
    phase_in = max(0, work-3000)*0.27
    credit = min(phase_in, mx)
    reduction = max(0, afni-base)*0.15
    return max(0, credit-reduction), phase_in, reduction
out['cwb_single']={}
for w in (5000,9000,15000,26855,30000,35000,37000,37742):
    c,pi,red=cwb_basic(w,w,False)
    out['cwb_single'][w]=dict(credit=r2(c),phase_in=r2(pi),reduction=r2(red))
out['cwb_family']={}
for w in (10000,20000,30639,40000,45000,49000):
    c,pi,red=cwb_basic(w,w,True)
    out['cwb_family'][w]=dict(credit=r2(c),phase_in=r2(pi),reduction=r2(red))
out['cwb_full_at']=dict(single=r2(3000+1633/0.27), family=r2(3000+2813/0.27))
out['cwb_adv_half_single_max']=r2(1633/2)
out['cwb_adv_half_family_max']=r2(2813/2)
out['cwb_per_1000_loss']=150
# 2 earners example: family w/ one child, you earn 28,000 she earns 14,000 -> family working 42,000, AFNI 42,000
out['cwb_family_example_42000']=dict(zip(('credit','phase_in','reduction'),map(r2,cwb_basic(42000,42000,True))))
out['cwb_single_dtc_35000']=None
# disability supplement, single, DTC, AFNI 35000 (max 843, base 37740, rate 15%, limit 43360)
def cwb_dis(afni, spouse_dtc=False):
    return max(0, 843-max(0,afni-37740)*0.15)
out['cwb_dis_single_40000']=r2(cwb_dis(40000))
out['cwb_dis_check']=r2(843/(43360-37740))
# ---- CCB July 2026 - June 2027
U6,O6=8157,6883
T1,T2=38237,82847
bands={1:(0.07,3123,0.032),2:(0.135,6022,0.057),3:(0.19,8476,0.08),4:(0.23,10260,0.095)}
def ccb(afni,ages):
    n=min(len(ages),4); rate,fixed,rate2=bands[n]
    mx=sum(U6 if a<6 else O6 for a in ages)
    if afni<=T1: red=0
    elif afni<=T2: red=(afni-T1)*rate
    else: red=fixed+(afni-T2)*rate2
    return max(0,mx-red),mx,red
def row(afni,ages):
    p,mx,red=ccb(afni,ages); return dict(afni=afni,max=mx,reduction=r2(red),annual=r2(p),monthly=r2(p/12))
out['ccb_checks']=dict(martha_45000=row(45000,[3]),martha_100000=row(100000,[3]),fatima_60000=row(60000,[3,4]),fatima_125000=row(125000,[3,4]),julie_50000=row(50000,[7,8,9]),julie_150000=row(150000,[7,8,9]),kira_45000=row(45000,[7,8,9,10]),kira_200000=row(200000,[7,8,9,10]))
out['ccb_continuity']=dict(band1_at_T2_1=r2(0.07*(T2-T1)),fixed1=3123,band2_at_T2=r2(0.135*(T2-T1)),fixed2=6022,band3=r2(0.19*(T2-T1)),fixed3=8476,band4=r2(0.23*(T2-T1)),fixed4=10260)
# family with two kids, one under 6, one 8: July reset example
out['ccb_two_kids']={a:row(a,[3,8]) for a in (50000,55000,60000,65000,70000,82847,90000)}
out['ccb_one_under6']={a:row(a,[3]) for a in (38237,45000,60000,82847,100000)}
out['ccb_turn6_drop']=dict(annual=U6-O6,monthly=r2((U6-O6)/12))
out['ccb_per_1000']={n:int(bands[n][0]*1000) for n in bands}
out['ccb_per_1000_over']={n:r2(bands[n][2]*1000) for n in bands}
out['ccb_increase']=dict(under6=U6-7997,over6=O6-6748)
out['ccb_half_custody_under6']=r2(U6/2)
out['ccb_240_lump']=240
json.dump(out,open('batch-20261126-model.out.json','w'),indent=1)
print(json.dumps(out,indent=1))
