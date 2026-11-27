#!/bin/bash
# Batch 2026-11-27 FRESH-SOURCE-CHECKER pass. Same box session as the drafter, but separate code, a fresh fetch of every Sources URL (checker2/pages), and recomputation from the BUILT html.
#   1) refetch: python3 fetch.py $(cat jobs0.txt) ... (keys c0..c23 = urls.json order)   2) bash run-check.sh [YYYY-MM-DD]
set -e
D=${1:-2026-11-27}
cd "$(dirname "$0")"
S="critical-illness-vs-disability-insurance-canada"
python3 sourced.py $S | tail -1
for c in ci; do python3 textcheck.py claims-$c.txt | tail -1; done
python3 recompute.py | tail -1
cd ../../../..
for s in $S; do node scripts/content/figures.mjs check $s --date $D | tail -1; done
