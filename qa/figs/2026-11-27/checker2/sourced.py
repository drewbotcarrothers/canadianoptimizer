#!/usr/bin/env python3
"""Checker pass 2026-11-27 (fresh fetch into checker2/pages): every sourced row's needle must be on the freshly fetched page for its sourceUrl,
contain the value (in the page's own number format), and the sourceUrl must be in the built post's Sources list."""
import json, re, sys
from pathlib import Path
HERE = Path(__file__).resolve().parent; PG = HERE/'pages'; WT = HERE.parents[3]
URLS = json.loads((HERE/'urls.json').read_text())['by_slug']
def norm(s):
    s = re.sub(r'<[^>]+>', ' ', s).replace('\\"', '"').replace('\xa0', ' ').replace('\u202f', ' ').replace('\u2019', "'").replace('\u2013', '-').replace('\u2014', '-').replace('\u2212', '-')
    return re.sub(r'\s+', ' ', s).strip()
urlkey = {}
for u in PG.glob('*.url'): urlkey[u.read_text().split('\n')[0].strip()] = u.stem
def variants(v):
    out = [v]; mm = re.fullmatch(r'\$([\d,]+)', v)
    if mm: out += [v+'.00']
    m = re.fullmatch(r'\$([\d,]+(?:\.\d+)?)', v)
    if m:
        a = m.group(1).replace(',', ' ').replace('.', ','); out += [a+' $', a+'$', a]
    m = re.fullmatch(r'([\d.]+)\s?%', v)
    if m: out += [m.group(1).replace('.', ',')+' %', m.group(1).replace('.', ',')+'%', m.group(1)+' per cent', m.group(1).replace('.', ',')+' pour cent']
    if re.fullmatch(r'\d+\.\d+', v): out.append(v.replace('.', ','))
    out += {'January 1': ['1er janvier'], 'December 31, 2026': ['31 décembre 2026'], 'January 1, 2027': ['1er janvier 2027']}.get(v, [])
    return out
bad = 0; n = 0
for slug in sys.argv[1:]:
    d = json.loads((WT/'content/figures'/f'{slug}.json').read_text()); cnt = 0
    for f in d['figures']:
        if f['kind'] != 'sourced': continue
        n += 1; cnt += 1
        if f['sourceUrl'] not in URLS[slug]: print('SOURCE NOT IN BUILT SOURCES LIST', slug, f['value'], f['sourceUrl']); bad += 1; continue
        k = urlkey.get(f['sourceUrl'])
        if not k: print('NO FRESH PAGE', f['sourceUrl']); bad += 1; continue
        t = ''
        for ext in ('.txt', '.full.txt'):
            p = PG/(k+ext)
            if p.exists(): t += ' || ' + norm(p.read_text(errors='ignore'))
        needle = norm(f['needle'])
        if needle not in t: print('NEEDLE NOT ON FRESH PAGE', slug, f['value'], '|', needle[:90]); bad += 1; continue
        val = f['value'].rstrip(',')
        if not any(v in needle for v in variants(val)): print('VALUE NOT IN NEEDLE', slug, f['value'], '|', needle[:90]); bad += 1
        if f['asOf'] != '2026-11-27': print('asOf', slug, f['value']); bad += 1
    print(slug, 'sourced rows', cnt)
print('sourced checked', n, 'problems', bad); sys.exit(1 if bad else 0)
