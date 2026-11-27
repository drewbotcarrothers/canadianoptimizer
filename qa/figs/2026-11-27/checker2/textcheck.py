#!/usr/bin/env python3
"""Checker pass: each claim line is '<url-fragment><TAB><regex>'; the regex must appear on the freshly fetched page whose URL contains the fragment."""
import re, sys
from pathlib import Path
P = Path(__file__).parent/'pages'
KEYS = {}
for u in P.glob('*.url'): KEYS[u.stem] = u.read_text().split('\n')[0].strip()
def pg(frag):
    ks = [k for k, u in KEYS.items() if u.endswith(frag) or (frag.endswith('*') and frag[:-1] in u)]
    if not ks: return None
    t = ''
    for k in ks:
        for e in ('.txt', '.full.txt'):
            f = P/(k+e)
            if f.exists(): t += ' ' + f.read_text(errors='ignore')
    return re.sub(r'\s+', ' ', t.replace('\xa0', ' ').replace('\u202f', ' ').replace('\u2019', "'").replace('\u2212', '-').replace('\u2013', '-'))
bad = 0; n = 0
for line in open(sys.argv[1]):
    line = line.rstrip('\n')
    if not line.strip() or line.startswith('#'): continue
    frag, rx = line.split('\t', 1); n += 1
    t = pg(frag)
    if t is None: bad += 1; print('NO PAGE', frag); continue
    if not re.search(rx, t, re.I): bad += 1; print('MISSING', frag[-50:], '|', rx)
print(sys.argv[1], 'claims', n, 'missing', bad); sys.exit(1 if bad else 0)
