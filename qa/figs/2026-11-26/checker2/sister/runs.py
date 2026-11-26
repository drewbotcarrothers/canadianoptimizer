import re,html,sys
sys.argv=[sys.argv[0]]
exec(open('sim.py').read().split("pairs=")[0])
def runs(slug,k,n=5):
    h=open(f'{OUT}/{slug}/index.html').read(); m=re.search(r'<article.*?</article>',h,re.S); a=text(m.group(0) if m else h)
    aw=words(a); B=grams(words(text(open(k+'.html').read())),n)
    hit=[ ' '.join(aw[i:i+n]) in B for i in range(len(aw)-n+1)]
    out=[];i=0
    while i<len(hit):
        if hit[i]:
            j=i
            while j+1<len(hit) and hit[j+1]: j+=1
            out.append(' '.join(aw[i:j+n])); i=j+1
        else: i+=1
    return out
for slug,k in [('why-did-my-ccb-change','so_ccb'),('why-did-my-ccb-change','so_rrspccb'),('why-did-my-ccb-change','so_shared'),('cra-my-account-guide','so_cramyacct')]:
    print('##',slug,k)
    for r in sorted(runs(slug,k),key=lambda s:-len(s.split())): 
        if len(r.split())>=7: print(len(r.split()),r)
