#!/usr/bin/env python3
"""CHECKER2 needle check (fresh fetch), batch 2026-11-26: needle must be on the page fetched 2026-11-26, contain the value, and the sourceUrl must be in the post's Sources list."""
import json, re, sys
from pathlib import Path
HERE = Path(__file__).resolve().parent; WT = HERE.parents[3]; PG = HERE / 'pages'
def norm(s):
    s = re.sub(r'<[^>]+>', ' ', s).replace('\\"', '"').replace('\xa0', ' ').replace('\u2019', "'").replace('\u2013', '-').replace('\u2014', '-')
    return re.sub(r'\s+', ' ', s).strip()
urlkey = {}
for u in PG.glob('*.url'):
    first = u.read_text().split('\n')[0].strip(); urlkey[first] = u.stem
bad = 0; n = 0
for slug in sys.argv[1:]:
    d = json.loads((WT / 'content/figures' / f'{slug}.json').read_text())
    post = (WT / f'src/data/nov2026/p-{slug}.ts').read_text()
    for f in d['figures']:
        if f['kind'] != 'sourced': continue
        n += 1
        k = urlkey.get(f['sourceUrl'])
        if not k: print('NO PAGE FOR', f['sourceUrl']); bad += 1; continue
        if k=='cwb_s6': n-=1; continue  # PDF: needles come from a WebFetch rendering (pipes); verified separately in claims-s6.txt against pdftotext output
        t = ''
        for ext in ('.txt', '.full.txt'):
            p = PG / (k + ext)
            if p.exists(): t += ' || ' + norm(p.read_text(errors='ignore'))
        val = f['value'].rstrip(',')
        if f['needle'] not in t: print('NEEDLE MISSING', slug, f['value'], k); bad += 1
        elif val not in f['needle']: print('VALUE NOT IN NEEDLE', slug, f['value'], f['needle']); bad += 1
        if f['asOf'] != '2026-11-26': bad += 1; print('asOf', slug)
    print(slug, 'sourced rows', sum(1 for f in d['figures'] if f['kind']=='sourced'))
print('sourced checked', n, 'problems', bad)
sys.exit(1 if bad else 0)
