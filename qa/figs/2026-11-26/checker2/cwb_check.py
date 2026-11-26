#!/usr/bin/env python3
"""Checker2 independent recompute of CWB post numbers straight from Schedule 6 lines 16-28 / 29-40 (read 2026-11-26)."""
from decimal import Decimal as D, ROUND_HALF_UP
def rd(x): return int(D(x).quantize(D(1), ROUND_HALF_UP))
def basic(work, afni, fam):
    l20=max(D(0),D(work)-3000)*D('0.27'); l22=min(l20, D(2813 if fam else 1633))
    l27=max(D(0),D(afni)-(30639 if fam else 26855))*D('0.15'); return l20,l22,l27,max(D(0),l22-l27)
def dis(work, afni, fam, both=False):
    l33=max(D(0),D(work)-1150)*D('0.27'); l34=min(l33,D(843))
    l39=max(D(0),D(afni)-(49389 if fam else 37740))*(D('0.075') if both else D('0.15')); return max(D(0),l34-l39)
bad=0
def chk(label, got, want):
    global bad
    ok = rd(got)==want
    if not ok: bad+=1
    print('OK  ' if ok else 'BAD ', label, rd(got) if not isinstance(got,str) else got, 'post:', want)
# single table: (income, build, reduction, credit)
for w,b,r,c in [(5000,540,0,540),(9000,1620,0,1620),(15000,3240,0,1633),(30000,None,472,1161),(35000,None,1222,411),(37000,None,1522,111)]:
    l20,l22,l27,cr=basic(w,w,False)
    if b is not None: chk(f'single {w} build',l20,b)
    chk(f'single {w} red',l27,r); chk(f'single {w} credit',cr,c)
for w,b,r,c in [(10000,1890,0,1890),(20000,4590,0,2813),(40000,None,1404,1409),(45000,None,2154,659),(49000,None,2754,59)]:
    l20,l22,l27,cr=basic(w,w,True)
    if b is not None: chk(f'fam {w} build',l20,b)
    chk(f'fam {w} red',l27,r); chk(f'fam {w} credit',cr,c)
# zero points
for fam,thr,cap,post in [(False,26855,1633,37742),(True,30639,2813,49393)]:
    zero=thr+D(cap)/D('0.15'); print('zero point',fam,float(zero),'CRA/post',post, 'consistent within $1' if abs(float(zero)-post)<1 else 'DIFF')
    if abs(float(zero)-post)>=1: bad+=1
chk('max reached single (3000+1633/.27)',3000+D(1633)/D('0.27'),9048); chk('max reached fam',3000+D(2813)/D('0.27'),13419)
chk('per 1000',D(1000)*D('0.15'),150)
chk('half single x2',D(1633)/2*2,1633); print('half single',D(1633)/2,'half fam',D(2813)/2)
# Dana
a=basic(30000,30000,False)[3]; b=basic(35000,35000,False)[3]; chk('Dana 2025 30k',a,1161); chk('Dana 35k',b,411); chk('Dana loss',a-b,750); chk('Dana keeps',5000-(a-b)*0,4250) if False else None
print('Dana keeps 5000-750 =',5000-750)
# RRSP
chk('Dana rrsp red',D('0.15')*(33000-26855),922); chk('Dana rrsp credit',basic(35000,33000,False)[3],711); chk('Dana rrsp increase',basic(35000,33000,False)[3]-basic(35000,35000,False)[3],300)
# DTC
chk('dis single 40000 reduction',D('0.15')*(40000-37740),339); chk('dis single 40000 supp',dis(20000,40000,False),504)
chk('dis single 40000 basic zero',basic(40000,40000,False)[3],0)
print('dis zero single',float(37740+D(843)/D('0.15')),'CRA 43360'); print('dis zero fam one',float(49389+D(843)/D('0.15')),'CRA 55009'); print('dis zero fam both',float(49389+D(843)/D('0.075')),'CRA 60629')
print('over $2,260',40000-37740)
print('BAD',bad)
