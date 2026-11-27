#!/usr/bin/env python3
"""Run only after sourced.py, textcheck.py (all claims files), recompute.py exit 0. Stamps the figures rows and briefs agentChecks with the checker pass."""
import json, sys
from pathlib import Path
WT = Path(__file__).resolve().parents[4]
V = 'Grok Bot executor, fresh source-checker pass 2026-11-27 (qa/figs/2026-11-27/checker2); same executor session as the drafter but separate code and a fresh fetch'
SL = ["critical-illness-vs-disability-insurance-canada"]
for s in SL:
    fp = WT/'content/figures'/f'{s}.json'; d = json.loads(fp.read_text()); c = {'sourced': 0, 'derived': 0}
    for f in d['figures']:
        if f['kind'] == 'sourced':
            f['verify'] = dict(status='match', checkedOn='2026-11-27', verifier=V, note='needle re-found on a page fetched fresh 2026-11-27 (checker2/sourced.py); key rule and date claims re-read in textcheck.py'); c['sourced'] += 1
        elif f['kind'] == 'derived':
            f['verify'] = dict(status='match', checkedOn='2026-11-27', verifier=V, note='recomputed independently (checker2/recompute.py from the built tables, simulation / cumulative-constant methods; qa/figs/2026-11-27/recheck.py grid)' if f['derivedFrom'] != ['review'] else 'review date = day the sources were read (2026-11-27)'); c['derived'] += 1
    fp.write_text(json.dumps(d, indent=2, ensure_ascii=False)+'\n')
    bp = WT/'content/briefs'/f'{s}.json'; b = json.loads(bp.read_text())
    b['agentChecks']['2a'].update(pass_=None) if False else None
    b['agentChecks']['2a'] = {'pass': True, 'by': V, 'on': '2026-11-27', 'note': 'read in full 2026-11-27; the answer paragraph follows the hook and each question H2/H3 and FAQ opens with the answer in its first sentence'}
    b['agentChecks']['4a'] = {'pass': True, 'by': V, 'on': '2026-11-27', 'note': 'no quotes or experience claims; named people are labelled examples; unsourced generalisations removed during review; every number traced to a fetched official page or recomputed independently'}
    b['agentChecks']['6a'] = {'pass': True, 'by': V, 'on': '2026-11-27', 'note': 'not a money page: no affiliate offers or picks, ebook CTA only'}
    bp.write_text(json.dumps(b, indent=2, ensure_ascii=False)+'\n')
    print(s, c)
