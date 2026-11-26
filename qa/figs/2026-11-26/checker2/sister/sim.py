import re,html,json,sys
OUT='/workspace/canadianoptimizer/wt-batch-2026-11-26/out/blog'
def text(h):
    h=re.sub(r'<script.*?</script>|<style.*?</style>|<nav.*?</nav>|<header.*?</header>|<footer.*?</footer>','',h,flags=re.S|re.I)
    return html.unescape(re.sub('<[^>]+>',' ',h))
def words(t): return re.findall(r"[a-z0-9$%.']+",t.lower())
def grams(w,n=5): return {' '.join(w[i:i+n]) for i in range(len(w)-n+1)}
pairs={'cra-my-account-guide':['so_cramyacct','so_marital'],'change-tax-return-refile-t1-adj':['so_cramyacct','so_marital'],'canada-workers-benefit-guide':['so_taxcredmid','so_gstcredit','so_elig'],'why-did-my-ccb-change':['so_ccb','so_shared','so_rrspccb','so_prov','so_cdb','mm_ccb']}
res={}
for slug,ks in pairs.items():
    a=text(open(f'{OUT}/{slug}/index.html').read()); m=re.search(r'<article.*?</article>',open(f'{OUT}/{slug}/index.html').read(),re.S)
    if m: a=text(m.group(0))
    A=grams(words(a))
    for k in ks:
        B=grams(words(text(open(k+'.html').read())))
        inter=A&B; pct=100*len(inter)/max(1,len(A))
        # longest shared run of words
        aw=words(a); Bs=grams(words(text(open(k+'.html').read())),8)
        shared8=[ ' '.join(aw[i:i+8]) for i in range(len(aw)-7) if ' '.join(aw[i:i+8]) in Bs]
        res[f'{slug} vs {k}']=dict(pct5=round(pct,1),shared5=len(inter),shared8=len(shared8),sample8=shared8[:6])
        print(slug,k,round(pct,1),'% 5-grams;',len(shared8),'8-gram runs',shared8[:6])
json.dump(res,open('sim-results.json','w'),indent=1)
