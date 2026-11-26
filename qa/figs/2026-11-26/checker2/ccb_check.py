#!/usr/bin/env python3
"""Checker2 independent CCB recompute (CRA how-much page, July 2026-June 2027) using the page's literal 'fixed amount + % over $82,847' form, then compared to every CCB number in the post and to CRA/ESDC's own worked examples."""
from decimal import Decimal as D
T1,T2=D(38237),D(82847)
R={1:(D('.07'),D(3123),D('.032')),2:(D('.135'),D(6022),D('.057')),3:(D('.19'),D(8476),D('.08')),4:(D('.23'),D(10260),D('.095'))}
def ccb(afni,ages):
    afni=D(afni); n=min(len(ages),4); mx=sum(D(8157) if a<6 else D(6883) for a in ages)
    r1,fx,r2=R[n]
    red=D(0) if afni<=T1 else (r1*(afni-T1) if afni<=T2 else fx+r2*(afni-T2))
    return max(D(0),mx-red)
bad=0
def chk(l,got,want,tol=D('0.5')):
    global bad; ok=abs(got-D(str(want)))<=tol or round(got)==D(str(want))
    if not ok: bad+=1
    print('OK ' if ok else 'BAD',l,round(got,2),'post/CRA:',want)
chk('CRA Martha 45000 1 child<6 exact',ccb(45000,[3]),'7683.59',D('0.005'))
chk('ESDC 5&9 at 65000 (ESDC says approximately $11,430; not quoted in post)',ccb(65000,[5,9]),11430,D(5))
for a,c1,c2,c3 in [(45000,7684,14127,12853),(60000,6634,12102,10828),(82847,5034,9018,7744),(100000,4485,8040,6766)]:
    chk(f'{a} one<6',ccb(a,[3]),c1); chk(f'{a} 3&8',ccb(a,[3,8]),c2); chk(f'{a} 8&10',ccb(a,[8,10]),c3)
chk('Nina 70000 3&8',ccb(70000,[3,8]),10752); chk('diff 60k->70k',ccb(60000,[3,8])-ccb(70000,[3,8]),1350); chk('monthly',(ccb(60000,[3,8])-ccb(70000,[3,8]))/12,112.5,D('0.005'))
chk('age-6 diff',D(8157-6883),1274); chk('monthly diff',D(1274)/12,106,D('0.5'))
chk('per child under6 monthly',D(8157)/12,679.75,D('0.005')); chk('6-17 monthly',D(6883)/12,573.58,D('0.005'))
chk('+10000 one child',ccb(50000,[3])-ccb(60000,[3]),700); chk('+10000 two',ccb(50000,[3,8])-ccb(60000,[3,8]),1350)
chk('prior yr max',D(8157-160),7997); chk('prior 6-17',D(6883-135),6748)
chk('60k both over 6 vs 3&8 diff',ccb(60000,[3,8])-ccb(60000,[8,10]),1274)
# continuity at 82,847 for each n (fixed amount = rate x 44,610)
for n,(r1,fx,r2) in R.items(): chk(f'continuity n={n}',r1*(T2-T1),fx,D(1))
print('slopes per $1000:',{n:float(R[n][0]*1000) for n in R},'post: 70,135,190,230')
print('BAD',bad)
