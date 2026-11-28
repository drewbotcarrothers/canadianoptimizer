#!/usr/bin/env python3
"""Writer-stage classification of the figures logs, batch 2026-11-28 (drafter pass).
A figure is SOURCED when its value is found on a page fetched 2026-11-28 for one of the post's listed Sources.
DERIVED figures are recomputed by derived.py (separate model). EXAMPLE figures are declared inputs.
Usage: classify.py            -> classify all three logs and print unresolved rows"""
import json, re, sys
from pathlib import Path
HERE = Path(__file__).resolve().parent; PG = HERE/'pages'; WT = HERE.parents[2]; TODAY = '2026-11-28'
sys.path.insert(0, str(HERE))
V = 'https://www.vanguard.ca/en/product/etf/asset-allocation/'
B = 'https://www.blackrock.com/ca/investors/en/products/'
SRC = {
 'vgro-vs-xgro-canada': {
  'vgro': (V+'9579/vanguard-growth-etf-portfolio','Vanguard Canada: Growth ETF Portfolio (VGRO)'),
  'vgro_etffacts_raw': ('https://fund-docs.vanguard.com/VGRO_Growth_ETF_Portfolio_ETF_9579_EN_FACTS.pdf','Vanguard Investments Canada: VGRO ETF Facts'),
  'vfeepress': ('https://www.vanguard.ca/content/dam/intl/americas/canada/en/documents/PressRelease_Vanguard_PriceChanges_Final.pdf','Vanguard Canada: fee reductions press release'),
  'xgro': (B+'239447/ishares-balanced-growth-coreportfoliotm-fund','BlackRock Canada: iShares Core Growth ETF Portfolio (XGRO)')},
 'best-all-in-one-etfs-canada': {
  'veqt': (V+'9692/vanguard-all-equity-etf-portfolio','Vanguard Canada: All-Equity ETF Portfolio (VEQT)'),
  'vgro': (V+'9579/vanguard-growth-etf-portfolio','Vanguard Canada: Growth ETF Portfolio (VGRO)'),
  'vbal': (V+'9578/vanguard-balanced-etf-portfolio','Vanguard Canada: Balanced ETF Portfolio (VBAL)'),
  'vcns': (V+'9577/vanguard-conservative-etf-portfolio','Vanguard Canada: Conservative ETF Portfolio (VCNS)'),
  'xeqt': (B+'309480/ishares-core-equity-etf-portfolio','BlackRock Canada: iShares Core Equity ETF Portfolio (XEQT)'),
  'xgro': (B+'239447/ishares-balanced-growth-coreportfoliotm-fund','BlackRock Canada: iShares Core Growth ETF Portfolio (XGRO)'),
  'xbal': (B+'239449/ishares-balanced-income-coreportfoliotm-fund','BlackRock Canada: iShares Core Balanced ETF Portfolio (XBAL)'),
  'xcns': (B+'309484/ishares-core-conservative-balanced-etf-portfolio','BlackRock Canada: iShares Core Conservative Balanced ETF Portfolio (XCNS)'),
  'vfeepress': ('https://www.vanguard.ca/content/dam/intl/americas/canada/en/documents/PressRelease_Vanguard_PriceChanges_Final.pdf','Vanguard Canada: fee reductions press release'),
  'vgro_etffacts_raw': ('https://fund-docs.vanguard.com/VGRO_Growth_ETF_Portfolio_ETF_9579_EN_FACTS.pdf','Vanguard Investments Canada: VGRO ETF Facts'),
  'vbuilt': ('https://www.vanguard.ca/en/latest-updates/built-for-investors','Vanguard Canada: Built for investors')},
 'balance-transfer-vs-consolidation-loan-canada': {
  'fcac_dc': ('https://www.canada.ca/en/financial-consumer-agency/services/debt/debt-consolidation.html','Financial Consumer Agency of Canada: Debt consolidation'),
  'fcac_pl': ('https://www.canada.ca/en/financial-consumer-agency/services/loans/personal-loans.html','Financial Consumer Agency of Canada: Personal loans'),
  'fcac_choose': ('https://www.canada.ca/en/financial-consumer-agency/services/credit-cards/choose-credit-card.html','Financial Consumer Agency of Canada: Choosing a credit card'),
  'fcac_pay': ('https://www.canada.ca/en/financial-consumer-agency/services/credit-cards/pay-off-credit-card.html','Financial Consumer Agency of Canada: Paying off your credit card'),
  'obsi_bt': ('https://www.obsi.ca/en/news/posts/consumer-bulletin-things-to-consider-before-you-accept-a-balance-transfer-offer/','Ombudsman for Banking Services and Investments: Things to consider before you accept a balance transfer offer')},
}
MON = ['January','February','March','April','May','June','July','August','September','October','November','December']
def norm(s):
    s = s.replace('\xa0',' ').replace('\u202f',' ').replace('\u2019',"'").replace('\u2013','-').replace('\u2212','-').replace('\u2014','-')
    return re.sub(r'\s+',' ',s).strip()
_c = {}
def page(k):
    if k not in _c:
        t=''
        for ext in ('.txt','.full.txt'):
            p = PG/(k+ext)
            if p.exists(): t += ' || ' + norm(p.read_text(errors='ignore'))
        _c[k]=t
    return _c[k]
def variants(v):
    """regex alternatives for a displayed value"""
    v=v.rstrip(',')
    out=[re.escape(v)]
    m=re.fullmatch(r'\$([\d,]+(?:\.\d+)?)',v)
    if m:
        n=m.group(1); out.append(re.escape('$'+n)+r'(?:\.00)?(?![\d,])')
    m=re.fullmatch(r'\$([\d.]+)\s?(billion|million)',v)
    if m:
        out.append(re.escape('$'+m.group(1))+r'\s?'+('B' if m.group(2)=='billion' else 'M')+r'\b')
    m=re.fullmatch(r'([\d.]+)\s?%',v)
    if m:
        out.append(re.escape(m.group(1))+r'\s?%')
        if '.' in m.group(1) and len(m.group(1))>=4: out.append(r'(?<![\d.])'+re.escape(m.group(1))+r'(?![\d%])')
    m=re.fullmatch(r'('+'|'.join(MON)+r')\s(\d{1,2})(?:,\s(\d{4}))?',v)
    if m:
        mo,d,y=m.groups(); ab=mo[:3]
        out.append(r'(?:'+mo+'|'+ab+r')\.?\s'+d+r'(?:,)?'+(r'\s'+y if y else '')+r'(?!\d)')
        if y: out.append(d+r'\s(?:'+mo+'|'+ab+r')\.?,?\s'+y)
    m=re.fullmatch(r'[\d,]+',v)
    if m: out.append(r'(?<![\d,.])'+re.escape(v)+r'(?![\d,]|\.\d)')
    return out
WORD=re.compile(r'[a-z]{4,}')
def words(s): return set(WORD.findall(s.lower()))
def find_source(slug, vs, ctx):
    best=None; cw=words(ctx)
    for k,(url,name) in SRC[slug].items():
        t=page(k)
        for rx in variants(vs):
            for m in re.finditer(rx,t):
                a,b=m.start(),m.end()
                if re.fullmatch(r'[\d.]+\s?%|\$[\d,.]+',vs) or True:
                    if a>0 and (t[a-1].isdigit() or (t[a-1] in '.,' and a>1 and t[a-2].isdigit())): continue
                w=t[max(0,a-120):b+120]; sc=len(cw&words(w))
                if best is None or sc>best[0]: best=(sc,k,t[max(0,a-70):b+70])
    return best
FALLBACK=[]
def load_rules():
    import rules28
    return rules28
def apply(slug):
    rules=load_rules()
    fp=WT/'content/figures'/f'{slug}.json'; d=json.loads(fp.read_text()); left=[]
    for f in d['figures']:
        vs=f['value'].rstrip(',')
        r=rules.resolve(slug,vs,f['context'])
        if r is None:
            b=find_source(slug,vs,f['context'])
            specific = bool(re.fullmatch(r'\d+\.\d+%|\$[\d,]{5,}(?:\.\d+)?|\$[\d,]+\.\d+|[\d,]{7,}|(?:'+'|'.join(MON)+r')\s\d{1,2}(?:,\s\d{4})?|\$[\d.]+ (?:billion|million)',vs))
            if False: r=('S',b[1],b[2]); FALLBACK.append((slug,vs,b[0],b[1],f['context'][:80]))
        if r is None:
            left.append((vs,f['context'][:150])); continue
        if r[0]=='S':
            url,name=SRC[slug][r[1]]
            f.update(kind='sourced',sourceUrl=url,sourceName=name,asOf=TODAY,derivedFrom=[],needle=r[2],needleSource=r[1],extraNeedles=[[a,b] for a,b in (r[3] if len(r)>3 else [])])
            f['verify']={'status':'unverified','checkedOn':'','verifier':'','note':''}
        elif r[0]=='D':
            f.update(kind='derived',sourceUrl='',sourceName='',asOf=TODAY,derivedFrom=[],formula=r[1])
            f['verify']={'status':'unverified','checkedOn':'','verifier':'','note':'formula: '+r[1]}
        else:
            f.update(kind='example',sourceUrl='',sourceName='',asOf=TODAY,derivedFrom=[],note=r[1])
            f['verify']={'status':'unverified','checkedOn':'','verifier':'','note':'declared example input: '+r[1]}
    fp.write_text(json.dumps(d,indent=2,ensure_ascii=False)+'\n')
    return left
if __name__=='__main__':
    for slug in SRC:
        left=apply(slug); print(f'== {slug}: unresolved {len(left)}')
        for v,c in left: print('  ',repr(v),'|',c)

    if '--fallback' in sys.argv:
        for x in FALLBACK: print('FB',x)
