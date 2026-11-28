# QA, Nov 27 batch (2 posts)
- `classify.py`, `rules27.py`, `recheck.py`: writer-stage figure classification and independent recomputation.
- `checker2/`: fresh-fetch checker pass (`fetch.py`, `sourced.py`, `textcheck.py` + `claims-*.txt`, `recompute.py` from the built HTML, `promote.py`, `run-check.sh`). The checker pass was run by the same executor session as the drafter, with separate code and a fresh fetch of every Sources URL.
- `sister/sim.py`: 5-gram similarity vs sister-site pages. `draft/`: post generators and the drafter's mortgage model.
- `build-preview.log`, `build.log`, `checklist-output.txt` / `checklist-report.md`: run logs.
- The 2026-11-25 QA scripts were not in the repo; the 2026-11-26 scripts were used as the template.
