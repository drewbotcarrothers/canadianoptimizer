#!/usr/bin/env python3
"""Writer-stage classification of figures logs, batch 2026-11-27 (drafter pass, same agent as the drafter).
Pass 1: a figure is SOURCED when its value is found on a page fetched 2026-11-27 for one of the post's listed Sources, with words in common with the sentence it is used in.
Pass 2 (rules in rules27.py): DERIVED rows are recomputed in recheck.py; EXAMPLE rows are declared inputs."""
import json, re, sys
from pathlib import Path
HERE = Path(__file__).resolve().parent; PG = HERE/'check'/'pages'; WT = HERE.parents[2]; TODAY = '2026-11-27'
def norm(s):
    s = re.sub(r'<[^>]+>', ' ', s).replace('\\"', '"').replace('\xa0', ' ').replace('\u202f',' ').replace('\u2019', "'").replace('\u2013', '-').replace('\u2212', '-').replace('\u2014', '-')
    return re.sub(r'\s+', ' ', s).strip()
SRC = {
 'critical-illness-vs-disability-insurance-canada': {'ei_sick':'Service Canada: EI sickness benefits','ei_sick_amt':'Service Canada: EI sickness benefits, how much you could receive','cppd_amt':'Government of Canada: CPP disability benefit, how much you could receive','cppd_elig2':'Government of Canada: CPP disability benefit, do you qualify','fcac_dis':'Financial Consumer Agency of Canada: Disability insurance','fcac_health':'Financial Consumer Agency of Canada: Health insurance (critical illness)'},
}
_c = {}
def page(k):
    if k not in _c:
        t = ''
        for ext in ('.txt', '.full.txt'):
            p = PG/(k+ext)
            if p.exists(): t += ' || ' + norm(p.read_text(errors='ignore'))
        _c[k] = t
    return _c[k]
def url(k): return (PG/(k+'.url')).read_text().split('\n')[0].strip()
def variants(v):
    out = [v]
    mm = re.fullmatch(r'\$([\d,]+)', v)
    if mm: out += [v + '.00']
    m = re.fullmatch(r'\$([\d,]+(?:\.\d+)?)', v)
    if m:
        n = m.group(1); a = n.replace(',', ' ').replace('.', ','); out += [a + ' $', a + '$']
        if '.' not in n and len(n.replace(',',''))>=4: out += [n.replace(',', ' ')+' $']
    m = re.fullmatch(r'([\d.]+)\s?%', v)
    if m: out += [m.group(1).replace('.', ',') + ' %', m.group(1).replace('.', ',') + '%', m.group(1) + ' per cent', m.group(1).replace('.', ',') + ' pour cent']
    if re.fullmatch(r'\d+\.\d+', v): out.append(v.replace('.', ','))
    return out
WORD = re.compile(r'[a-z]{4,}')
def words(s): return set(WORD.findall(s.lower()))
def find_source(slug, vs, ctx):
    best = None
    cw = words(ctx)
    for k in SRC[slug]:
        t = page(k)
        for var in variants(vs):
            for m in re.finditer(re.escape(var), t):
                a, b = m.start(), m.end()
                # token boundary
                if a > 0 and (t[a-1].isdigit() or (t[a-1] in ',.' and a > 1 and t[a-2].isdigit())): continue
                if b < len(t) and (t[b].isdigit() or (t[b] in ',.' and b+1 < len(t) and t[b+1].isdigit())): continue
                w = t[max(0, a-110):b+110]
                sc = len(cw & words(w))
                if best is None or sc > best[0]: best = (sc, k, t[max(0, a-70):b+70], var)
    return best
def classify(slug, f, rules):
    vs = f['value'].rstrip(','); ctx = f['context']
    r = rules(slug, vs, ctx)
    if r: return r
    try:
        from rules27 import EXPL
        e = EXPL.get((slug, vs))
    except ImportError: e = None
    if e:
        if e[0] == 'S':
            m = re.search(e[2], page(e[1]))
            if not m: raise SystemExit(f'EXPLICIT NEEDLE NOT FOUND {slug} {vs} {e[1]}')
            return ('S', e[1], page(e[1])[max(0, m.start()-60):m.end()+40], vs)
        if e[0] == 'D':
            import recheck
            if not recheck.matches(e[1], vs): raise SystemExit(f'EXPR MISMATCH {slug} {vs} {e[1]} -> {recheck.evalexpr(e[1])}')
        return e
    b = find_source(slug, vs, ctx)
    french = slug == 'welcome-tax-quebec'
    if b and (b[0] >= 1 or (len(vs) >= 5 and not vs.endswith('%') and vs[0] in '$0123456789' and b[0] >= 0 and not slug.startswith(('30','crit'))) or (french and b[0] >= 0 and ('$' in vs or '%' in vs) and len(vs) >= 4)):
        return ('S', b[1], b[2], b[3])
    try:
        from rules27 import late
        return late(slug, vs, ctx)
    except ImportError: return None
def apply(slug, rules):
    fp = WT/'content/figures'/f'{slug}.json'; d = json.loads(fp.read_text()); left = []
    for f in d['figures']:
        r = classify(slug, f, rules)
        if r is None: left.append(f); continue
        f.update(dict(sourceUrl='', sourceName='', asOf='', derivedFrom=[])); f.pop('needle', None); f.pop('expr', None)
        ver = dict(status='match', checkedOn=TODAY, verifier='Grok Bot executor, WRITER-stage check 2026-11-27 (qa/figs/2026-11-27/classify.py, recheck.py); same agent as the drafter, so the separate checker pass (checker2/) must re-verify', note='')
        if r[0] == 'S':
            f.update(kind='sourced', sourceUrl=url(r[1]), sourceName=SRC[slug][r[1]], asOf=TODAY, needle=r[2]); ver['note'] = f'needle found on page fetched 2026-11-27 ({r[1]})'
        elif r[0] == 'D':
            f.update(kind='derived', derivedFrom=['content/calcs/batch-20261127-model.py', 'expr: ' + r[1]], expr=r[1]); ver['note'] = (r[2] + '; ' if r[2] else '') + 'recomputed in qa/figs/2026-11-27/recheck.py'
        elif r[0] == 'R':
            f.update(kind='derived', derivedFrom=['review']); ver['note'] = 'review date = day sources were read (2026-11-27)'
        else:
            f.update(kind='example'); ver['note'] = r[1]
        f['verify'] = ver
    fp.write_text(json.dumps(d, indent=2, ensure_ascii=False)+'\n')
    return d, left
if __name__ == '__main__':
    try: from rules27 import rules
    except ImportError: rules = lambda s, v, c: ('R',) if v == 'November 27, 2026' else None
    for s in SRC:
        d, left = apply(s, rules)
        print(s, len(d['figures']), 'unclassified', len(left))
        if '-v' in sys.argv:
            for f in left: print('   ', f['value'], '|', f['context'][:110])
