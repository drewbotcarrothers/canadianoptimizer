"""Facts parsed from the pages fetched 2026-11-28 (drafter pass). Every number the derived figures use is read from the page text here,
not typed in, so a changed page changes the result."""
import re
from decimal import Decimal as D, ROUND_HALF_UP
from pathlib import Path
PG = Path(__file__).resolve().parent/'pages'
def norm(s):
    s = s.replace('\xa0',' ').replace('\u202f',' ').replace('\u2019',"'")
    return re.sub(r'\s+',' ',s).strip()
def txt(k):
    p=PG/(k+'.txt')
    return norm(p.read_text(errors='ignore'))
def num(k, rx):
    t=txt(k); m=re.search(rx,t,re.I)
    if not m: raise SystemExit(f'FACT NOT FOUND {k}: {rx}')
    return D(m.group(1).replace(',',''))
def vg(k,label): return num(k, re.escape(label)+r'\s+([\d.]+)%')
def ish(k,tick,name): return num(k, re.escape(tick)+r'\s+'+name+r'.{0,70}?\s([\d.]+)\s+[\d,\.]+\s')
F={}
for k in ('vgro','veqt','vbal','vcns'):
    F[k+'.US']=vg(k,'Morningstar US Total Market Index ETF') if k!='vgro' else vg(k,'Morningstar US Total Market Index ETF')
    F[k+'.CA']=vg(k,'FTSE Canada All Cap Index ETF')
    F[k+'.DEV']=vg(k,'FTSE Developed All Cap ex-North America Index ETF') if k!='veqt' else vg(k,'FTSE Developed All Cap ex-North America Index ETF')
    F[k+'.EM']=vg(k,'FTSE Emerging Markets All Cap Index ETF')
for k in ('vgro','vbal','vcns'):
    F[k+'.CAB']=vg(k,'Canadian Aggregate Bond Index ETF')
    F[k+'.GXB']=vg(k,'Global ex-U.S. Aggregate Bond Index ETF CAD- hedged')
    F[k+'.USB']=vg(k,'US Aggregate Bond Index ETF Cad Hedged')
F['vgro.bond']=num('vgro',r'Bond\s+([\d.]+)%'); F['vgro.stock']=num('vgro',r'Stock\s+([\d.]+)%')
F['vbal.CAN_CTRY']=num('vbal',r'Canada North America ([\d.]+)%')
for k in ('veqt','vgro','vbal','vcns'): F[k+'.CTRY']=num(k,r'Canada North America ([\d.]+)%')
F['vgro.USCTRY']=num('vgro',r'United States of America North America ([\d.]+)%')
# iShares holdings (weight column)
for k in ('xgro','xbal','xcns','xeqt'):
    F[k+'.ITOT']=ish(k,'ITOT','ISHARES CORE S&P TOTAL U\.S\. STOCK')
    F[k+'.XIC']=ish(k,'XIC','ISHARES S&P/TSX CAPPED COMPOSITE')
    F[k+'.XEF']=ish(k,'XEF','ISHARES MSCI EAFE IMI INDEX')
    F[k+'.XEC']=ish(k,'XEC','ISHARES MSCI EMERGING MARKET')
    F[k+'.cashCAD']=num(k,r'CAD CASH\s+Cash and/or Derivatives\s+CAD [\d,\.]+ ([\d.]+) ')
    F[k+'.cashUSD']=num(k,r'USD CASH\s+Cash and/or Derivatives\s+CAD [\d,\.]+ ([\d.]+) ')
F['xeqt.XTOT']=ish('xeqt','XTOT','ISHARES CORE S&P TOTAL U\.S\. COM')
for k in ('xgro','xbal','xcns'):
    F[k+'.XBB']=ish(k,'XBB','ISHS CORE CAD UNIV BND IDX ETF')
    F[k+'.XSH']=ish(k,'XSH','iShares Core CAD ST Cor Bd Index')
    F[k+'.GOVT']=ish(k,'GOVT','ISHARES US TREASURY BOND ETF')
    F[k+'.USIG']=ish(k,'USIG','ISHARES BROAD USD INVESTMENT G')
def r(x,nd):
    q=D(1).scaleb(-nd)
    return D(x).quantize(q,ROUND_HALF_UP)
if __name__=='__main__':
    for k,v in F.items(): print(k,v)
