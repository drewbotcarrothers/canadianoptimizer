import re,sys
L={ # slug -> (anchor text, href)
 'on':('Ontario land transfer tax, including Toronto\'s municipal tax','/blog/land-transfer-tax-ontario/'),
 'bc':('British Columbia property transfer tax: rates, exemptions and first-time buyers','/blog/property-transfer-tax-bc/'),
 'qc':('Quebec welcome tax: how the transfer duty is calculated','/blog/welcome-tax-quebec/'),
 'am':('25 vs 30-year mortgage amortization: the real cost','/blog/30-year-amortization-canada/'),
 'ci':('Critical illness vs disability insurance: which gap is bigger?','/blog/critical-illness-vs-disability-insurance-canada/'),
}
def line(keys): return '    <p><strong>Related:</strong> '+' &middot; '.join(f'<a href="{L[k][1]}">{L[k][0]}</a>' for k in keys)+'</p>\n\n'
targets=[ # (file, slug marker regex, keys)
 ('src/data/posts.ts', r'slug: "land-transfer-tax-closing-costs-canada"', ['on','bc','qc']),
 ('src/data/real-estate-cluster.ts', r"estatePost\(\s*'first-time-home-buyer-guide-canada'", ['on','bc','qc','am']),
 ('src/data/real-estate-cluster.ts', r"estatePost\(\s*'cmhc-mortgage-insurance-canada'", ['am']),
 ('src/data/real-estate-cluster.ts', r"estatePost\(\s*'mortgage-stress-test-canada'", ['am']),
 ('src/data/real-estate-cluster.ts', r"estatePost\(\s*'fixed-vs-variable-mortgage-canada'", ['am']),
 ('src/data/posts.ts', r'slug: "critical-illness-insurance-canada"', ['ci']),
 ('src/data/posts.ts', r'slug: "disability-insurance-canada-guide"', ['ci']),
 ('src/data/posts.ts', r'slug: "employment-insurance-benefits-canada"', ['ci']),
 ('src/data/posts.ts', r'slug: "insurance-shopping-without-over-insuring-canada"', ['ci']),
]
cache={}
for f,rx,keys in targets:
    s=cache.get(f) or open(f).read()
    m=re.search(rx,s)
    if not m: print('NO MARKER',rx); continue
    tail=s[m.end():]
    cands=[(tail.find(t),t) for t in ('    ${footer(','<div class="article-footer">') if tail.find(t)>=0]
    pos,t=min(cands)
    ins=m.end()+pos
    # go back to start of line for footer marker
    ls=s.rfind('\n',0,ins)+1
    prefix=s[ls:ins]
    if prefix.strip()=='' :
        s=s[:ls]+line(keys)+s[ls:]
    else:
        s=s[:ins]+line(keys).lstrip()+'    '+s[ins:]
    cache[f]=s; print('ok',rx[:60],pos)
for f,s in cache.items(): open(f,'w').write(s)
