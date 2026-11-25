"""Drafter model, batch 2026-11-25 (Real Estate > Closing Costs & Land Transfer Tax: Ontario, BC, Quebec).
Brackets are figures printed on the Ontario, Toronto, BC, Quebec and Montreal pages read 2026-11-25 (see each post's Sources).
Prices are illustration inputs, not market data."""
import json
def tiered(x, steps):  # steps: [(upper_or_None, rate)]
    t = 0.0; lo = 0.0
    for up, r in steps:
        hi = x if up is None else min(x, up)
        if hi > lo: t += (hi - lo) * r
        lo = up if up is not None else x
        if up is not None and x <= up: break
    return round(t + 1e-9, 2)
ON = [(55000,.005),(250000,.01),(400000,.015),(2000000,.02),(None,.025)]
TOR = [(55000,.005),(250000,.01),(400000,.015),(2000000,.02),(3000000,.025),(4000000,.044),(5000000,.0545),(10000000,.065),(20000000,.0755),(None,.086)]
BC = [(200000,.01),(2000000,.02),(None,.03)]
def bc(x): return round(tiered(x,BC) + (max(0,x-3000000)*.02),2)
QC = [(62900,.005),(315000,.01),(None,.015)]
MTL = [(62900,.005),(315000,.01),(552300,.015),(1104700,.02),(2136500,.025),(3113000,.035),(None,.04)]
MTL27 = [(64400,.005),(322600,.01),(552300,.015),(1104700,.02),(2136500,.025),(3113000,.035),(None,.04)]
out = {}
out['on'] = {}
for p in (400000,600000,800000,1000000,1500000,2500000,3500000):
    on = tiered(p,ON); tor = tiered(p,TOR)
    out['on'][p] = dict(on=on, on_refund=min(on,4000), on_net=round(on-min(on,4000),2), tor=tor, tor_rebate=min(tor,4475), tor_net=round(tor-min(tor,4475),2),
                        both=round(on+tor,2), both_ftb=round(on-min(on,4000)+tor-min(tor,4475),2))
out['on_368k'] = tiered(368000,ON)
out['on_400k_steps'] = [round(55000*.005,2), round(195000*.01,2), round(150000*.015,2)]
out['tor_old_3_5m'] = tiered(3500000,[(55000,.005),(250000,.01),(400000,.015),(None,.02)])
out['tor_new_3_5m'] = tiered(3500000,TOR)
out['tor_3_5m_diff'] = round(out['tor_new_3_5m']-out['tor_old_3_5m'],2)
out['bc'] = {}
for p in (400000,500000,650000,835000,900000,1100000,1500000,2500000,3500000):
    t = bc(p)
    out['bc'][p] = dict(ptt=t)
def ftb(p, t):
    if p <= 500000: return t
    if p <= 835000: return 8000
    if p < 860000: return round(8000*(860000-p)/25000,2)
    return 0
def newly(p,t):
    if p <= 1100000: return t
    if p < 1150000: return round(t*(1150000-p)/50000,2)
    return 0
for p,d in out['bc'].items():
    d['ftb_exempt']=ftb(p,d['ptt']); d['ftb_payable']=round(d['ptt']-d['ftb_exempt'],2)
    d['new_exempt']=newly(p,d['ptt']); d['new_payable']=round(d['ptt']-d['new_exempt'],2)
out['bc_835k_half'] = dict(ptt=bc(835000), exempt=4000, net=bc(835000)-4000)
out['bc_836k'] = dict(exempt=ftb(836000,bc(836000)), payable=bc(836000)-ftb(836000,bc(836000)))
out['bc_850k'] = dict(exempt=ftb(850000,bc(850000)), payable=bc(850000)-ftb(850000,bc(850000)))
out['bc_cliff_per_1000'] = 8000*1000/25000
out['bc_foreign_20pct_1m'] = 1000000*.2
out['qc'] = {}
for p in (350000,500000,750000,1200000,2500000,4000000):
    out['qc'][p] = dict(std=tiered(p,QC), mtl=tiered(p,MTL), mtl27=tiered(p,MTL27))
    out['qc'][p]['diff']=round(out['qc'][p]['mtl']-out['qc'][p]['std'],2)
out['qc_350k_steps']=[round(62900*.005,2), round(252100*.01,2), round(35000*.015,2)]
out['qc_mtl_552300_cum']=tiered(552300,MTL)
out['qc_base_example'] = dict(price=480000, roll=500000, factor=1.00, base=max(480000, round(500000*1.00)), tax_on_price=tiered(480000,QC), tax_on_base=tiered(500000,QC))
out['qc_base_example']['diff'] = round(out['qc_base_example']['tax_on_base']-out['qc_base_example']['tax_on_price'],2)
print(json.dumps(out,indent=1))
json.dump(out, open('content/calcs/batch-20261125-model.out.json','w'), indent=1)
