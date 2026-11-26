#!/usr/bin/env python3
"""Checker2: each claim -> regex must appear on today's fetched page(s). Usage: textcheck.py claims-file"""
import re,sys
from pathlib import Path
P=Path(__file__).parent/'pages'
def pg(keys):
    t=''
    for k in keys.split(','):
        for e in ('.txt','.full.txt'):
            f=P/(k+e)
            if f.exists(): t+=' '+f.read_text(errors='ignore')
    return re.sub(r'\s+',' ',t.replace('\xa0',' ').replace('\u2019',"'").replace('\u2018',"'").replace('\u201c','"').replace('\u201d','"'))
bad=0;n=0
for line in open(sys.argv[1]):
    line=line.strip()
    if not line or line.startswith('#'): continue
    keys,rx=line.split('\t',1) if '\t' in line else line.split(' ',1)
    n+=1
    if not re.search(rx,pg(keys),re.I): bad+=1; print('MISSING',keys,rx)
print('claims',n,'missing',bad); sys.exit(1 if bad else 0)
