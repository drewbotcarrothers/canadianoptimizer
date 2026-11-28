"""Rules for classify.py (drafter pass, 2026-11-28). resolve(slug, value, context) -> ('S',pagekey,needle_regex,extra) | ('D',formula) | ('E',note) | None.
Sourced needles are regexes that must match the normalised page text; derived values are recomputed from numbers parsed off the pages (facts28.py) or from bt_model.py."""
import re, sys
from decimal import Decimal as D, ROUND_HALF_UP
from pathlib import Path
HERE=Path(__file__).resolve().parent
sys.path.insert(0,str(HERE)); sys.path.insert(0,str(HERE/'draft'))
from facts28 import F, txt, num, r as rnd
import bt_model as bm
def need(k,rx):
    if not re.search(rx,txt(k),re.I): raise SystemExit(f'NEEDLE MISSING on {k}: {rx}')
    return (k,rx)
V4=['veqt','vgro','vbal','vcns']; X4=['xeqt','xgro','xbal','xcns']
MER=lambda k: num(k,r'Management Expense Ratio \(MER\)\s*([\d.]+)%')
FEE=lambda k: num(k,r'Management Fee\s*([\d.]+)%')
for k in V4+X4: F[k+'.MER']=MER(k); F[k+'.FEE']=FEE(k)
# ---------- sourced needle table: value -> list of (ctx_regex or None, [ (page, regex) ... ]) all must match ----------
def fee_all(pages): return [(k,r'Management Fee\s*0\.17%') for k in pages]
def S_vgro():
    return {
 '80%':[(None,[('vgro',r'equity \(approximately 80%\) and fixed income \(approximately 20%\)'),('xgro',r'80% equity and 20% fixed income')])],
 '20%':[(None,[('vgro',r'equity \(approximately 80%\) and fixed income \(approximately 20%\)'),('xgro',r'80% equity and 20% fixed income')])],
 '80':[(None,[('vgro',r'equity \(approximately 80%\) and fixed income \(approximately 20%\)')])],
 '20':[(None,[('vgro',r'equity \(approximately 80%\) and fixed income \(approximately 20%\)')])],
 '0.17%':[(None,fee_all(['vgro','xgro'])+[('vgro_etffacts_raw',r'from 0\.22% to 0\.17%')])],
 '0.22%':[(None,[('vgro',r'Management Expense Ratio \(MER\)\s*0\.22%'),('vgro_etffacts_raw',r'from 0\.22% to 0\.17%')])],
 '0.19%':[(None,[('xgro',r'Management Expense Ratio \(MER\)\s*0\.19%')])],
 '0.18%':[(None,[('xgro',r'reduced from 0\.18% to 0\.17%')])],
 'June 21, 2007':[(None,[('xgro',r'Inception Date\s*Jun 21, 2007')])],
 'December 11, 2018':[(None,[('xgro',r'Effective December 11, 2018, the fundamental investment objective')])],
 'November 18, 2025':[(None,[('vgro_etffacts_raw',r'Effective November 18, 2025, Vanguard reduced the management fee')])],
 'December 18, 2025':[(None,[('xgro',r'Effective December 18, 2025, the management fee of the ETF was reduced from 0\.18% to 0\.17%')])],
 '$10.88 billion':[(None,[('vgro',r'Total assets\s*\$10\.88 B')])],
 '272,287,718':[(None,[('xgro',r'CAD 5,272,287,718')])],
 'November 27, 2026':[(None,[('xgro',r'Net Assets\s*AS AT NOV 27 2026|as of Nov 27, 2026')])],
 'January 25, 2018':[(None,[('vgro',r'Inception date\s*Jan 25 2018')])],
 'October 31, 2026':[(None,[('vgro',r'AS AT OCT 31 2026')])],
 'November 25, 2026':[(None,[('xgro',r'Aggregate Underlying Holdings\s*as of Nov 25, 2026')])],
 'March 31, 2026':[(None,[('vgro_etffacts_raw',r"As of March 31, 2026, the ETF's expenses were 0\.22% of its value")])],
 '45.30%':[(None,[('vgro',r'United States of America\s*North America\s*45\.30%')])],
 '30.59%':[(None,[('vgro',r'Canada\s*North America\s*30\.59%')])],
 '18.90%':[(None,[('vgro',r'Bond\s*18\.90%')])],
 '36.62%':[(None,[('vgro',r'Morningstar US Total Market Index ETF\s*36\.62%')])],
 '24.76%':[(None,[('vgro',r'FTSE Canada All Cap Index ETF\s*24\.76%')])],
 '14.36%':[(None,[('vgro',r'FTSE Developed All Cap ex-North America Index ETF\s*14\.36%')])],
 '5.35%':[(None,[('vgro',r'FTSE Emerging Markets All Cap Index ETF\s*5\.35%')])],
 '11.54%':[(None,[('vgro',r'Canadian Aggregate Bond Index ETF\s*11\.54%')])],
 '3.77%':[(None,[('vgro',r'Global ex-U\.S\. Aggregate Bond Index ETF CAD- hedged\s*3\.77%')])],
 '3.59%':[(None,[('vgro',r'US Aggregate Bond Index ETF Cad Hedged\s*3\.59%')])],
 '0.02%':[(None,[('vgro',r'Short-term reserves\s*0\.02%')])],
 '36.23%':[(None,[('xgro',r'ITOT ISHARES CORE S&P TOTAL U\.S\. STOCK.{0,70}? 36\.23 ')])],
 '19.92%':[(None,[('xgro',r'XIC ISHARES S&P/TSX CAPPED COMPOSITE.{0,70}? 19\.92 ')])],
 '19.70%':[(None,[('xgro',r'XEF ISHARES MSCI EAFE IMI INDEX.{0,70}? 19\.70 ')])],
 '13.12%':[(None,[('xgro',r'XBB ISHS CORE CAD UNIV BND IDX ETF.{0,70}? 13\.12 ')])],
 '3.85%':[(None,[('xgro',r'XEC ISHARES MSCI EMERGING MARKET.{0,70}? 3\.85 ')])],
 '3.06%':[(None,[('xgro',r'XSH iShares Core CAD ST Cor Bd Index.{0,70}? 3\.06 ')])],
 '1.99%':[(None,[('xgro',r'GOVT ISHARES US TREASURY BOND ETF.{0,70}? 1\.99 ')])],
 '1.97%':[(None,[('xgro',r'USIG ISHARES BROAD USD INVESTMENT G.{0,70}? 1\.97 ')])],
    }
def S_best():
    VF=fee_all(V4+X4)
    return {
 '0.17%':[(None,VF)],
 '0.22%':[(None,[(k,r'Management Expense Ratio \(MER\)\s*0\.22%') for k in V4])],
 '0.19%':[(None,[(k,r'Management Expense Ratio \(MER\)\s*0\.19%') for k in ('xeqt','xgro')])],
 '0.18%':[(None,[(k,r'Management Expense Ratio \(MER\)\s*0\.18%') for k in ('xbal','xcns')]+[('xgro',r'reduced from 0\.18% to 0\.17%')])],
 '80':[(None,[('vgro',r'approximately 80%'),('xgro',r'80% equity and 20% fixed income')])],
 '20':[(None,[('vgro',r'approximately 20%'),('xgro',r'80% equity and 20% fixed income')])],
 '80%':[(None,[('vgro',r'approximately 80%'),('xgro',r'80% equity and 20% fixed income')])],
 '20%':[(None,[('vgro',r'approximately 20%'),('xgro',r'80% equity and 20% fixed income')])],
 '60':[(None,[('vbal',r'equity \(approximately 60%\) and fixed income \(approximately 40%\)'),('xbal',r'60% equity and 40% fixed income'),('vcns',r'equity \(approximately 40%\) and fixed income \(approximately 60%\)'),('xcns',r'40% equity and 60% fixed income')])],
 '40':[(None,[('vbal',r'equity \(approximately 60%\) and fixed income \(approximately 40%\)'),('xbal',r'60% equity and 40% fixed income'),('vcns',r'equity \(approximately 40%\) and fixed income \(approximately 60%\)'),('xcns',r'40% equity and 60% fixed income')])],
 '60%':[(None,[('vbal',r'equity \(approximately 60%\) and fixed income \(approximately 40%\)'),('xbal',r'60% equity and 40% fixed income'),('vcns',r'equity \(approximately 40%\) and fixed income \(approximately 60%\)'),('xcns',r'40% equity and 60% fixed income')])],
 '40%':[(None,[('vbal',r'equity \(approximately 60%\) and fixed income \(approximately 40%\)'),('xbal',r'60% equity and 40% fixed income'),('vcns',r'equity \(approximately 40%\) and fixed income \(approximately 60%\)'),('xcns',r'40% equity and 60% fixed income')])],
 '100':[(None,[('veqt',r'approximately 100%|100% equity'),('xeqt',r'100% equity')])],
 '100%':[(None,[('veqt',r'approximately 100%|100% equity'),('xeqt',r'100% equity')])],
 '$17.64 billion':[(None,[('veqt',r'Total assets\s*\$17\.64 B')])],
 'January 29, 2019':[(None,[('veqt',r'Inception date\s*Jan 29 2019')])],
 '30.79%':[(None,[('veqt',r'Canada\s*North America\s*30\.79%')])],
 '30.59%':[(None,[('vgro',r'Canada\s*North America\s*30\.59%')])],
 '30.64%':[(None,[('vbal',r'Canada\s*North America\s*30\.64%')])],
 '30.82%':[(None,[('vcns',r'Canada\s*North America\s*30\.82%')])],
 '45.40%':[(None,[('veqt',r'United States of America\s*North America\s*45\.40%')])],
 '24,169,949,662':[(None,[('xeqt',r'24,169,949,662')])],
 '271,287,718':[],
 '272,287,718':[(None,[('xgro',r'CAD 5,272,287,718')])],
 '571,121,567':[(None,[('xbal',r'CAD 3,571,121,567')])],
 '451,152,137':[(None,[('xcns',r'451,152,137')])],
 'August 7, 2019':[(None,[('xeqt',r'Inception Date\s*Aug 7, 2019')])],
 '$10.88 billion':[(None,[('vgro',r'Total assets\s*\$10\.88 B')])],
 '$5.98 billion':[(None,[('vbal',r'Total assets\s*\$5\.98 B')])],
 '$977.26 million':[(None,[('vcns',r'Total assets\s*\$977\.26 M')])],
 'January 25, 2018':[(None,[('vgro',r'Inception date\s*Jan 25 2018')])],
 'June 21, 2007':[(None,[('xgro',r'Inception Date\s*Jun 21, 2007')])],
 '9.55%':[(None,[('veqt',r'Standard Deviation\s*9\.55%')])],
 '8.27%':[(None,[('vgro',r'Standard Deviation\s*8\.27%')])],
 'October 31, 2026':[(None,[('vgro',r'AS AT OCT 31 2026')])],
 '60.53%':[(None,[('vbal',r'Stock\s*60\.53%')])],
 '39.45%':[(None,[('vbal',r'Bond\s*39\.45%')])],
 '17,362':[(None,[('vbal',r'Number of bonds\s*17,362')])],
 '4.2%':[(None,[('vbal',r'YTM \(Yield to Maturity\) effective\s*4\.2%')])],
 '59.47%':[(None,[('vcns',r'Bond\s*59\.47%')])],
 '40.51%':[(None,[('vcns',r'Stock\s*40\.51%')])],
 '38.66%':[(None,[('xcns',r'XBB ISHS CORE CAD UNIV BND IDX ETF.{0,70}? 38\.66 ')])],
 'November 18, 2025':[(None,[('vgro_etffacts_raw',r'Effective November 18, 2025, Vanguard reduced the management fee')])],
 'March 31, 2026':[(None,[('vgro_etffacts_raw',r"As of March 31, 2026, the ETF's expenses were 0\.22% of its value")])],
 'December 18, 2025':[(None,[('xgro',r'Effective December 18, 2025, the management fee of the ETF was reduced from 0\.18% to 0\.17%')])],
    }
def S_bt():
    pl=r'Personal loans'
    return {
 '18':[(None,[('fcac_dc',r'6 to 18 months')])],
 '$100':[(None,[('fcac_pl',r'\$100 to \$50,000')])],
 '$50,000':[(None,[('fcac_pl',r'\$100 to \$50,000')])],
 '60':[(r'range|FCAC|Financial Consumer|60 months',[('fcac_pl',r'(?:between|and) 6 (?:and|to) 60 months')])],
 '35%':[(None,[('fcac_pl',r'(?:cannot|not) charge more than 35%|35% (?:interest )?(?:a|per) year|35%')])],
 '2%':[(None,[('obsi_bt',r'2% to 5%')])],
 '5%':[(r'OBSI|2% to 5%',[('obsi_bt',r'2% to 5%')])],
 '$2,000':[(None,[('fcac_pl',r'\$2,000')])],
 '$2,220':[(None,[('fcac_pl',r'\$2,220')])],
 '$3,180':[(None,[('fcac_pl',r'\$3,180')])],
 '$2,700':[(r'FCAC',[('fcac_pl',r'\$2,700')])],
 '$2,304':[(None,[('fcac_pl',r'\$2,304')])],
 '$3,312':[(None,[('fcac_pl',r'\$3,312')])],
 '8.99%':[(None,[('fcac_pl',r'8\.99%')])],
 '34.99%':[(None,[('fcac_pl',r'34\.99%')])],
 '19.99%':[(r"FCAC's own|FCAC's example",[('fcac_pl',r'19\.99%')])],
 '36':[(r"FCAC|at 36 months",[('fcac_pl',r'36')])],
    }
SRCT={'vgro-vs-xgro-canada':S_vgro,'best-all-in-one-etfs-canada':S_best,'balance-transfer-vs-consolidation-loan-canada':S_bt}
_cache={}
def stable(slug):
    if slug not in _cache: _cache[slug]=SRCT[slug]()
    return _cache[slug]
# ---------- examples ----------
EX={
 'vgro-vs-xgro-canada':[(r'^\$100,000$|^\$25,000$|^\$250,000$','declared example portfolio size'),(r'^November 28, 2026$','review date (date of this check)'),(r'^100%$','by construction: shares of stocks sum to 100%')],
 'best-all-in-one-etfs-canada':[(r'^\$100,000$','declared example portfolio size'),(r'^November 28, 2026$','review date (date of this check)'),(r'^35$','declared example age'),(r'^\$30$|^\$40$','derived from declared $100,000 example (see D)')],
 'balance-transfer-vs-consolidation-loan-canada':[
   (r'^\$8,000$','declared example balance'),(r'^\$400,?$','declared example monthly payment'),(r'^\$300$','declared example monthly payment'),
   (r'^0%$','declared example promo rate'),(r'^3%$|^5%$','declared example transfer fee'),(r'^12\.99%$|^20\.99%$|^22\.99%$','declared example interest rate'),
   (r'^November 28, 2026$','review date (date of this check)')],
}
EXCTX={'balance-transfer-vs-consolidation-loan-canada':{ '19.99%':r'loan at 19\.99%|19\.99% loan|Loan at 19\.99%|saves little|near the card',
                                                         '10':r'10-month|10 months|0% for 10|for 10|over 10', '12':r'12 months|in 12|for 12', '24':r'24 months|two-year|over 24', '5%':r'5% fee|3% to 5%'}}
# ---------- derived pools ----------
def pool(slug):
    P=[]
    def add(label,x): P.append((label,D(x)))
    if slug=='vgro-vs-xgro-canada' or slug=='best-all-in-one-etfs-canada':
        for k in V4:
            s=F[k+'.US']+F[k+'.CA']+F[k+'.DEV']+F[k+'.EM']
            for n in ('US','CA','DEV','EM'): add(f'{k}.{n}/stocks*100',F[f'{k}.{n}']/s*100)
            add(f'{k} stocks sum',s)
            if k!='veqt':
                add(f'{k} CAD-bond-sum',F[k+'.CAB']); add(f'{k} foreign bonds',F[k+'.GXB']+F[k+'.USB']); add(f'{k} bonds sum',F[k+'.CAB']+F[k+'.GXB']+F[k+'.USB'])
        for k in X4:
            st=F[k+'.ITOT']+F[k+'.XIC']+F[k+'.XEF']+F[k+'.XEC']+(F[k+'.XTOT'] if k=='xeqt' else 0)
            names=['ITOT','XIC','XEF','XEC']+(['XTOT'] if k=='xeqt' else [])
            for n in names: add(f'{k}.{n}/stocks*100',F[f'{k}.{n}']/st*100)
            add(f'{k} stocks sum',st)
            if k!='xeqt':
                add(f'{k} CAD bonds XBB+XSH',F[k+'.XBB']+F[k+'.XSH']); add(f'{k} foreign bonds GOVT+USIG',F[k+'.GOVT']+F[k+'.USIG'])
                add(f'{k} bonds sum',F[k+'.XBB']+F[k+'.XSH']+F[k+'.GOVT']+F[k+'.USIG']); add(f'{k} cash',F[k+'.cashCAD']+F[k+'.cashUSD'])
            add(f'{k}.XBB rounded',F.get(k+'.XBB',D(0)))
        for n in ('XBB','ITOT','XIC'): pass
        for k in V4+X4: add(f'{k} MER $ per 100k',F[k+'.MER']*1000); add(f'{k} FEE $ per 100k',F[k+'.FEE']*1000)
        for a in V4+X4:
            for b in V4+X4:
                if a<b or a>b: add(f'MER gap {a}-{b}',F[a+'.MER']-F[b+'.MER']); add(f'MER gap $100k {a}-{b}',(F[a+'.MER']-F[b+'.MER'])*1000)
        for k in V4+X4:
            m=F[k+'.MER']
            for amt,lab in ((25000,'25k'),(100000,'100k'),(250000,'250k')): add(f'{k} MER ${lab}',m/100*amt)
            f_=F[k+'.FEE']
            for amt,lab in ((25000,'25k'),(100000,'100k'),(250000,'250k')): add(f'{k} FEE ${lab}',f_/100*amt)
        for a,b in (('vgro','xgro'),):
            for amt,lab in ((25000,'25k'),(100000,'100k'),(250000,'250k')): add(f'MER gap ${lab} vgro-xgro',(F['vgro.MER']-F['xgro.MER'])/100*amt)
        for n in ('US','CA','DEV','EM'): pass
        add('vgro.bond',F.get('vgro.bond',0))
        # dollar of 100k in each vgro / xgro holding
        for n in ('US','CA','DEV','EM'): add(f'vgro.{n} $ in 100k',F[f'vgro.{n}']*1000)
        for n in ('ITOT','XIC','XEF','XEC'): add(f'xgro.{n} $ in 100k',F[f'xgro.{n}']*1000)
        add('100% (sum of shares)',100)
    if slug=='balance-transfer-vs-consolidation-loan-canada':
        B=D(8000)
        def cst(pay,promo,fee,apr=D('22.99')):
            m,i,f,p,_=bm.card(B,apr,D(pay),promo,D(0),D(fee)); return m,i,f,i+f
        m,i,f,t=cst(400,10,3);  add('BT 10m 3% @400: total cost',t); add('BT 10m 3% months',m); add('BT 10m fee',f)
        m,i,f,t=cst(400,12,3);  add('BT 12m 3% @400: total cost',t); add('BT 12m months',m); add('BT 12m fee',f)
        m5,i5,f5,t5=cst(400,10,5); add('BT 10m 5% total',t5); add('BT 10m 5% months',m5); add('BT 10m 5% fee',f5); add('5% vs 3% extra',t5-cst(400,10,3)[3])
        m4,i4,f4,t4=cst(400,4,3); add('promo lost after 4: total',t4); add('promo lost extra vs 10m',t4-cst(400,10,3)[3]); add('promo lost months',m4)
        m3,i3,f3,t3=cst(300,10,3); add('BT 10m @300 total',t3); add('BT 10m @300 months',m3)
        ms,is_,fs,ps,_=bm.card(B,D('20.99'),D(400)); add('stay @400 total',is_); add('stay @400 months',ms)
        ms3,is3,_,_,_=bm.card(B,D('20.99'),D(300)); add('stay @300 total',is3); add('stay @300 months',ms3)
        for apr in ('12.99','19.99'):
            for n in (24,36):
                pay,intr=bm.loan(B,D(apr),n); add(f'loan {apr} {n} payment',pay); add(f'loan {apr} {n} interest',intr); add(f'loan {apr} {n} months',n)
        add('loan 19.99/24 cheaper than stay',is_-bm.loan(B,D('19.99'),24)[1])
        fee=B*D(3)/100; add('3% fee',fee); add('amount to clear incl 3% fee',B+fee)
        for n in (6,10,12,18): add(f'clear in {n} months',(B+fee)/n)
        for n in (10,12): add(f'months for payment {n}',n)
    return P
def fmt_match(shown,x):
    s=shown.rstrip(',').replace('$','').replace('%','').replace(',','')
    try: sv=D(s)
    except Exception: return False
    nd=-sv.as_tuple().exponent
    return rnd(x,nd)==sv
def resolve(slug,vs,ctx):
    v=vs.rstrip(',')
    # sourced
    for cre,needles in stable(slug).get(v,[]):
        if cre and not re.search(cre,ctx,re.I): continue
        chk=[need(k,rx) for k,rx in needles]
        return ('S',chk[0][0],chk[0][1],chk[1:])
    # examples (context-sensitive for bt)
    for vre,note in EX.get(slug,[]):
        if re.search(vre,v): return ('E',note)
    exc=EXCTX.get(slug,{})
    if slug.startswith('balance') and v in exc and re.search(exc[v],ctx,re.I) and v in ('19.99%','10','12','24'):
        return ('E','declared example input (rate / term / months)')
    # derived
    hits=[l for l,x in pool(slug) if fmt_match(v,x)]
    if hits: return ('D','recomputed from page numbers: '+'; '.join(hits[:3]))
    return None
