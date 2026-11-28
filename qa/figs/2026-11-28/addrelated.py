import re,sys
def add(path, slug, html):
    s=open(path).read()
    # locate slug definition
    m=None
    for pat in (f'slug: "{slug}"', f"slug: '{slug}'", f"'{slug}',", f'"{slug}",'):
        i=s.find(pat)
        if i>=0 and (pat.startswith('slug') or True):
            m=i;break
    assert m is not None,(path,slug)
    j=s.find('<div class="article-footer">',m)
    assert j>0,(slug,'no footer')
    between=s[m+10:j]
    assert 'slug: ' not in between and "slug:'" not in between, (slug,'crosses posts')
    if html in s[m:j]: return 'already'
    # insert before footer line start
    ls=s.rfind('\n',0,j)+1
    indent=s[ls:j]
    s=s[:ls]+f'{indent}{html}\n\n'+s[ls:]
    open(path,'w').write(s); return 'ok'
if __name__=='__main__':
    pass
