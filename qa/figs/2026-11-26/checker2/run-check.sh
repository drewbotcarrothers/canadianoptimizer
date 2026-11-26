#!/bin/bash
# Batch 2026-11-26, FRESH-SOURCE-CHECKER run 2026-11-26. Re-run on merge day if merged after Nov 26:
#   1) refetch: cd checker2 && python3 fetch.py $(cat a2.txt)   (S6 PDF: curl -o pages/cwb_s6.pdf <url>; pdftotext -layout)
#   2) bash run-check.sh [YYYY-MM-DD]
set -e
D=${1:-2026-11-26}
cd "$(dirname "$0")"
python3 sourced.py cra-my-account-guide change-tax-return-refile-t1-adj canada-workers-benefit-guide why-did-my-ccb-change | tail -1
python3 textcheck.py claims-ma.txt | tail -1; python3 textcheck.py claims-chg.txt | tail -1; python3 textcheck.py claims-s6.txt | tail -1
python3 cwb_check.py | tail -1; python3 ccb_check.py | tail -1
cd ../../../..
for s in cra-my-account-guide change-tax-return-refile-t1-adj canada-workers-benefit-guide why-did-my-ccb-change; do node scripts/content/figures.mjs check $s --date $D | tail -1; done
