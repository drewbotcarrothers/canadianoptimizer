import json,re,sys
from pathlib import Path
WT=Path(__file__).resolve().parents[4]
W=lambda s:set(re.findall(r'[a-z]{4,}',s.lower()))
for slug in sys.argv[1:]:
    d=json.load(open(WT/'content/figures'/f'{slug}.json')); seen=set()
    for f in d['figures']:
        if f['kind']!='sourced': continue
        sh=W(f['context'])&W(f['needle'])
        if len(sh)==0 and (f['value'],f['needle'][:40]) not in seen:
            seen.add((f['value'],f['needle'][:40])); print(slug[:12],'|',f['value'],'|',f['context'][:80],'||',f['needle'][20:110])
