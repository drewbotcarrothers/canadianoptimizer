Daily batch for **Friday November 27, 2026** (ceiling 7/day, not a quota: **2 passed, 0 held after checks**; 5 slots from the first-50 list were not built, see below). Hubs reached by new posts: Insurance › Income Protection (`/category/insurance/income-protection/`: `critical-illness-vs-disability-insurance-canada`) and Real Estate › First-Time Buyers (`/category/real-estate/first-time-buyers/`: `how-much-house-can-i-afford-canada`). Base: `main` (b05356b, #133 merged). **Please don't merge without Andrew's explicit go.**

Both posts are dated `2026-11-27`. Because that is today, a production `npm run build` includes them, so they go live on the first deploy after merge.

**Backlog / other open PRs:** #130 (Nov 25 batch: 4 posts) is still open waiting on Andrew's go. #131 (video refresh: best-budgeting-apps-canada) is also open. Nov 24 was never built and is not backfilled.

## Checklist report

| Post | Subcategory | Family | Words | Checks (20-item) | Sources | Figures (sourced / derived / example, all re-verified 2026-11-27) | Similarity (closest 5-gram overlap here / max vs sister pages) | Preview (live after merge) |
|---|---|---|---|---|---|---|---|---|
| Critical Illness vs Disability Insurance: Which Gap Is Bigger? | Insurance › income-protection | vs | 1,943 | PASS 16/20 (item 14 MANUAL; items 6 and 20 N/A; item 4 WARN = "I" in reader-voice FAQ only) + 2a, 4a PASS | 6 | 42 / 44 / 10 | 0.7% `canadian-insurance-planning-guide` / 0.7% | [link](https://canadianoptimizer.com/blog/critical-illness-vs-disability-insurance-canada/) |
| How Much House Can I Afford in Canada? Income, Down Payment and Rate | Real Estate › first-time-buyers | core | 2,254 | PASS 16/20 (same; item 4 WARN = 2 reader-voice "I") + 2a, 4a PASS | 6 | 62 / 118 / 19 | 1.4% `mortgage-stress-test-canada` / 1.0% | [link](https://canadianoptimizer.com/blog/how-much-house-can-i-afford-canada/) |

Full report: `qa/figs/2026-11-27/checklist-report.md`. Commands run, in order: `npm run build:preview` → `node scripts/content/sisters.mjs` → `node scripts/content/checklist.mjs --slugs critical-illness-vs-disability-insurance-canada,how-much-house-can-i-afford-canada --out out --sisters content/sisters.json --verify-date 2026-11-27` (exit 0, no FAIL) → `node scripts/content/figures.mjs check <slug> --date 2026-11-27` for both (PASS) → similarity run (`qa/figs/2026-11-27/sister/sim.py`) → `npm run build` (exit 0).

## Held / not built
- **No post failed a check, so none were held after drafting.**
- **#46–49 (Ontario, BC and Quebec transfer tax; 30-year amortization) were not rebuilt here:** I drafted them, then found the same four slugs are already in open PR #130, so I dropped my copies to avoid a duplicate-slug conflict. They are archived off-repo on the box at `/workspace/canadianoptimizer/qa/alt-2026-11-27-dup-of-130/` in case Andrew prefers them over #130's.
- **Other first-50 topics (#23–27, 31, 40, 43, 44)** need provider or pricing research and money-page specs; **#37–39** are held until January. None was started, so they are not counted as failures.

## Agent checks (recorded in `content/briefs/*.json`)
- **2a pass, both posts:** read in full; the opening and every question heading/FAQ opens with the answer (item 2: 0 unopened; answers of 66 and 63 words).
- **4a pass, both posts:** no quotes or experience claims; people named are labelled examples; unsourced generalisations were softened during review (CI post: "For most working Canadians…", "more likely risk", "up to its own maximum"); the house post's tables are our own calculations, labelled with their assumptions ($350 property tax, $125 heat, $50,000 down, 25 years, semi-annual compounding).
- **Item 14:** Lighthouse wasn't run. Neither post adds scripts or embeds.

## Sister sites (Andrew's rule 2026-11-20: topic overlap is fine, only copied text matters)
Item 15 checked 1,967 sister-site URLs: no duplicate slugs or titles. I fetched the closest sister pages (Saving Optimizer long-term disability, critical illness and workplace LTD pages; latestmortgagerates.ca stress-test guide, affordability calculator and stress-test qualifier; Saving Optimizer mortgage stress test page) and ran `qa/figs/2026-11-27/sister/sim.py`. **Max 5-gram overlap 1.0%**; shared 8-word runs are statutory/official wording and site boilerplate. Nothing reworded.

## Information gain (visible on each page)
- **CI vs disability:** a calculated comparison of what EI sickness benefits and the CPP disability benefit replace at $40,000 / $70,000 / $100,000 salaries, and the gap a lump sum would have to cover over 6 and 12 months.
- **How much house:** three tables from CMHC's published GDS/TDS formulas giving the maximum price by income, by contract rate and by other debts (premium bands, minimum down payment and the $1.5M cap applied), the income needed for a $500,000 home, and the $501,000 premium cliff.

## Source check (separate fresh-checker pass, 2026-11-27) — please read the independence note
**Not a separate agent.** The checker pass was run by the same executor session that drafted the posts, but with separate code (`qa/figs/2026-11-27/checker2/`), a fresh browser fetch of every Sources URL into `checker2/pages/` (12 pages), and recomputation from the BUILT HTML. If Andrew wants a truly independent agent to re-run it, `checker2/run-check.sh` does so in one command.
- **Sourced figures:** 104/104 needles found on the freshly fetched page for their source URL, with the value inside the needle (`sourced.py`), and each sourceUrl is in the built Sources list.
- **Rules, dates and thresholds in prose:** 52 claims checked by regex on the fresh pages (`claims-ci.txt`, `claims-hs.txt`): 0 missing (26 + 26: includes 39% / 44%, the qualifying rate, 50% of condo fees, heat, 5%/10% down tiers, $1.5M cap, premium bands, 0.20% surcharge, Dec 15, 2024, the FCAC "slightly higher" sentence, OSFI).
- **Derived figures recomputed from the built tables (different method from the drafter):** `recompute.py` (75 checks, 0 mismatches) — CI post uses weekly-benefit arithmetic; the house post simulates the loan month by month (semi-annual compounding, bisection on the payment) and tests every $1,000 price directly against GDS/TDS, premium band, minimum down payment and the $1.5M cap. All table cells, the 30-year price, the $110,235 income need, the $501,000 cliff, and the $14,929 / $29,859 / $481.03 figures match. The writer-stage `recheck.py` is a third, independent Fraction-based model.
- **Fixes the checker pass made:** CI post CPP-disability contribution wording corrected to the source's "6 years before your disability stopped you from working"; three unsourced generalisations softened. House post: a wrong "each extra $25,000 of income adds $100,000 to $113,000" line replaced by the exact $113,000 / $117,000; condo-fee example corrected from $14,930 to $29,859 (a $400 fee counts $200); a link to `30-year-amortization-canada` (only in #130, not live) removed.

## Money and ebooks
- **No affiliate links or offer markers** in either post.
- **Ebook CTAs:** CI post → `insurance-guide`. House post → `tax-guide` (Real Estate has no ebook of its own; the tax guide covers FHSA and the Home Buyers' Plan). Both `/ebooks/` pages are live and item 19 passes (the checklist reports "none (category has no book)" for the Real Estate post).
- **Byline:** "Andrew" only, en-CA (items 16 and 19 pass).
- **Hero images** (`public/images/blog/<slug>.png`): realistic documentary-style, no text, no banknotes or coins; 1024×1024, under 380 KB, with the IPTC AI-generated marker. `BLOG_HERO_VERSION` is now 20261127a.

## Hubs and sibling links
- `insurance/income-protection` startHere adds the CI post plus one decision question; "Related:" lines added to `critical-illness-insurance-canada`, `disability-insurance-canada-guide`, `employment-insurance-benefits-canada` and `insurance-shopping-without-over-insuring-canada`.
- `real-estate/first-time-buyers` startHere adds `how-much-house-can-i-afford-canada` plus one decision question; "Related:" lines added to `cmhc-mortgage-insurance-canada`, `first-home-buyer-grants-beyond-fhsa-canada` and `mortgage-prepayment-vs-investing-canada`. I deliberately did not edit the four real-estate posts #130 touches.

## Merge notes
- **Likely conflicts with #130 if both merge:** `src/data/posts.ts` (import/spread of the batch arrays), `src/lib/site.ts` (`BLOG_HERO_VERSION`), and `src/data/taxonomy.ts` near the real-estate first-time-buyers hub. These are one-line resolutions; merge #130 first, then rebase this one.
- **Process gap:** the 2026-11-25 QA scripts were not in the repo, so I used the 2026-11-26 scripts as the template.
