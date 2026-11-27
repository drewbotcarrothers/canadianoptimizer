import re,html,json,sys,glob
from pathlib import Path
HERE=Path(__file__).resolve().parent; OUT=HERE.parents[3]/'out'/'blog'
def text(h):
    h=re.sub(r'<script.*?</script>|<style.*?</style>|<nav.*?</nav>|<header.*?</header>|<footer.*?</footer>','',h,flags=re.S|re.I)
    return html.unescape(re.sub('<[^>]+>',' ',h))
def words(t): return re.findall(r"[a-z0-9$%.']+",t.lower())
def grams(w,n=5): return {' '.join(w[i:i+n]) for i in range(len(w)-n+1)}
sis=sorted(glob.glob(str(HERE/'s_*.html')))
slugs=["critical-illness-vs-disability-insurance-canada","how-much-house-can-i-afford-canada"]
res={}
for slug in slugs:
    h=open(OUT/slug/'index.html').read(); m=re.search(r'<article.*?</article>',h,re.S); a=text(m.group(0) if m else h)
    A=grams(words(a)); aw=words(a); best=(0,'')
    for k in sis:
        t=text(open(k).read()); B=grams(words(t)); inter=A&B; pct=100*len(inter)/max(1,len(A))
        B8=grams(words(t),8); s8=[' '.join(aw[i:i+8]) for i in range(len(aw)-7) if ' '.join(aw[i:i+8]) in B8]
        res[f'{slug} vs {Path(k).name}']=dict(pct5=round(pct,1),shared8=len(s8),sample8=s8[:3])
        if pct>best[0]: best=(pct,Path(k).name,len(s8))
    print(slug,'max 5-gram overlap %.1f%% vs %s (8-gram runs: %d)'%best)
json.dump(res,open(HERE/'sim-results.json','w'),indent=1)
