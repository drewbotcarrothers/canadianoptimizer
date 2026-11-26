Daily batch for **Thursday November 26, 2026** (ceiling 7/day, not a quota: **4 passed, 0 held**). Two hubs, both reached by new posts: Taxes › Filing & CRA (`/category/taxes/filing-cra/`: `cra-my-account-guide`, `change-tax-return-refile-t1-adj`) and Government Benefits (`/category/government-benefits/credits-low-income/`: `canada-workers-benefit-guide`; `/category/government-benefits/family-child/`: `why-did-my-ccb-change`). Base: `main` (bbc09ce, #129 merged). **Please don't merge without Andrew's explicit go.**

All four posts are dated `2026-11-26`. Because that is today, a production `npm run build` includes them, so they go live on the first deploy after merge.

**Backlog / other open PRs:** #130 (Nov 25 batch: 4 posts) is still open waiting on Andrew's go. Nov 24 was never built and is not backfilled. #131 (video refresh: best-budgeting-apps-canada) and #127 (video refresh: best-etfs-tfsa-canada) are also open.

## Checklist report

| Post | Subcategory | Family | Words | Checks (20-item) | Sources | Figures (sourced / derived / example, all re-verified 2026-11-26) | Similarity (closest 5-gram overlap here / max vs sister pages) | Preview (live after merge) |
|---|---|---|---|---|---|---|---|---|
| CRA My Account: How to Register, Sign In and What to Check | Taxes › filing-cra | how-to | 2,287 | PASS 16/20 (item 14 MANUAL; items 6 and 20 N/A; item 4 WARN = "I" in reader-voice FAQ questions only) + 2a, 4a PASS | 6 | 10 / 2 / 0 | 0.5% `change-tax-return-refile-t1-adj` / 0.5% | [link](https://canadianoptimizer.com/blog/cra-my-account-guide/) |
| How to Change Your Tax Return: Change My Return, ReFILE or T1-ADJ | Taxes › filing-cra | how-to | 2,139 | PASS 16/20 (same) + 2a, 4a PASS | 6 | 16 / 4 / 2 | 0.7% `why-did-my-ccb-change` / 0.2% | [link](https://canadianoptimizer.com/blog/change-tax-return-refile-t1-adj/) |
| Canada Workers Benefit: Who Qualifies and How Much You Can Get | Government Benefits › credits-low-income | core | 2,741 | PASS 16/20 (same) + 2a, 4a PASS | 4 | 101 / 45 / 21 | 1.0% `why-did-my-ccb-change` / 0.2% | [link](https://canadianoptimizer.com/blog/canada-workers-benefit-guide/) |
| Why Did My CCB Change? The July Reset and Other Causes | Government Benefits › family-child | qa | 2,492 | PASS 16/20 (same) + 2a, 4a PASS | 4 (was 5, see fixes) | 58 / 36 / 14 | 1.7% `canada-government-benefits-guide` / 5.0% (see sister section) | [link](https://canadianoptimizer.com/blog/why-did-my-ccb-change/) |

Full report: `qa/figs/2026-11-26/checklist-report.md` (also `checker2/checklist-output.txt`). Commands run, in order: `npm run build:preview` → `node scripts/content/sisters.mjs` → `node scripts/content/checklist.mjs --slugs cra-my-account-guide,change-tax-return-refile-t1-adj,canada-workers-benefit-guide,why-did-my-ccb-change --out out --sisters content/sisters.json --verify-date 2026-11-26` (exit 0, no FAIL) → `node scripts/content/figures.mjs check <slug> --date 2026-11-26` for all four (PASS) → `npm run build` (exit 0). The `--verify-date` and every `--date` is 2026-11-26.

**Held posts: none.**

## Agent checks (recorded in `content/briefs/*.json`, re-recorded by the checker 2026-11-26)
- **2a (answers read as answers): pass for all four.** I read each post in full; every opening and every question heading/FAQ opens with the answer in its first sentence (checklist item 2: 0 unopened for each post).
- **4a (no invented quotes or experience): pass for all four.** No quotes or experience claims; the "I" hits are reader-voice FAQ questions; Dana, Priya, Marcus, Nina and Tom are labelled examples. The $600 refund in the Marcus illustration is declared as an assumed round figure.
- **Item 14:** Lighthouse wasn't run. None of the posts adds scripts or embeds.

## Sister sites (Andrew's rule 2026-11-20: topic overlap is fine, only copied text matters)
Item 15 checked 1,967 sister-site URLs (no duplicate slugs or titles; Saving Optimizer has no Canada Workers Benefit or change-a-return page). I re-fetched the 11 closest sister pages today (Saving Optimizer CCB 2026-27 amounts, shared custody, RRSP raise and CCB, provincial child benefits, child disability benefit, GST/HST credit, eligible dependant, tax credits for middle-aged households, marital status, set up CRA My Account; Make Money Optimizer's CCB side-hustle page) and ran `qa/figs/2026-11-26/checker2/sister/sim.py`.
- **Max 5-gram overlap: 5.0%** (`why-did-my-ccb-change` vs Saving Optimizer `canada-child-benefit-2026-27-amounts`), then 2.9% (RRSP raise and CCB), 1.8% (shared custody), 1.1% (Make Money Optimizer). Every other pair is 0.5% or lower.
- **Shared runs (all pairs, 7+ words, listed in `checker2/sister/runs-output.txt`) are only official figures and CRA/ESDC wording:** the $8,157 / $6,883 maximums and monthly equivalents, "$38,237", "July 2026 to June 2027 based on 2025 adjusted family net income", the CRA's own March 2027 / December 2026 age-6 and age-18 example sentences, the child disability benefit "$3,480 a year ($290 a month)", the CRA's shared-custody sentences, the ESDC release title and our citation lines ("the CRA's how much you can get page", "Canada Revenue Agency: Canada child benefit, how much you can get"). The My Account overlap is a single 9-word phrase naming the CRA's first sign-in option ("CRA user ID and password, a Sign-In Partner"). No copied prose found, so nothing reworded.

## Information gain (visible on each page)
- **CRA My Account:** a yearly CRA account checklist that follows the tax calendar, and a table of what works before and after identity verification.
- **Change a tax return:** three routes in one table with the situations that push you to each, a worked 2-week vs 20-week comparison, and a note on why CRA pages disagree on processing times (2 / 20 / eight-week standard / up to 49 weeks).
- **Canada Workers Benefit:** worked basic-credit tables for a single person and a family at example incomes, where the maximum is reached ($9,048 / $13,419), the Alberta and Nunavut cut-offs, a disability-supplement example, and an RRSP example (a $2,000 deduction adds $300 inside the phase-out).
- **Why did my CCB change:** a diagnostic table matching what you see in the deposit to the CRA's listed causes, plus July 2026 to June 2027 tables for what each $10,000 of family income and each sixth birthday costs.

## Source check (separate fresh-checker pass, 2026-11-26)
Different agent session from the drafter: I did not write these posts. Artifacts in `qa/figs/2026-11-26/checker2/` (`run-check.sh` re-runs it; the date in the saved scripts is 2026-11-26, confirmed).
- **Fetched again today** (real browser; Schedule 6 PDF via curl + pdftotext): 27 pages: CRA CWB (overview, who is eligible, how much, how to claim), Schedule 6 (T1-2025), CRA CCB (how much, get payments, payment dates, who can apply, legacy overview pages), ESDC July 20, 2026 release, CRA change-return, T1-ADJ, notice of assessment, objections decision tree, May 12, 2026 tax tip, processing times, and the CRA account pages (sign-in, About My Account, register, verify identity, multi-factor authentication, October 29, 2026 tax tip). All 20 URLs cited by the four posts return HTTP 200 (`link-status.txt`).
- **Sourced figures:** 155/155 needles found on today's pages with the value inside the needle (`sourced.py`); the 17 Schedule 6 rows whose needles came from a different text rendering of the PDF were re-confirmed against `pdftotext` output with regexes (18 claims, `claims-s6.txt`).
- **Rules, dates, fees, thresholds in prose:** 105 further claims (my account sign-in, MFA, verify-identity services, 10 business days, 18 minutes, 16+, change-return rules, 2 / 20 / 49 weeks, objection deadlines, ReFILE closure Feb 2–23, 2026, CWB advance dates, CCB payment dates and $240 lump sum, etc.) checked by regex on the fetched pages (`claims-*.txt`): 0 missing after wording-match fixes.
- **Derived figures recomputed from scratch (own code, not the drafter's model):** `cwb_check.py` builds CWB straight from Schedule 6 lines 16–28 and 29–40 (Decimal, half-up) and `ccb_check.py` uses the CRA page's literal "fixed amount + %" form. Result: every table row, the maxima thresholds ($9,048 / $13,419), the $300 RRSP effect, Dana's $1,161 → $411 (−$750), the $504 disability supplement, CCB tables at $45,000 / $60,000 / $82,847 / $100,000 for three family types, Nina and Tom ($12,102 → $10,752), the $1,274 age-6 drop, the $7,997 / $6,748 prior-year maxima, slopes of $70 / $135 / $190 / $230 per $1,000, and CRA's own Martha example ($7,683.59 exact) all match; the CRA's $37,742 and $49,393 phase-out ends are the computed values rounded up (37,741.67 and 49,392.33). The drafter's own recheck (87 derived rows) also passes.

| Post | Figures checked | Mismatches found | Fixed |
|---|---|---|---|
| `cra-my-account-guide` | 12 numbers + 58 prose claims (sign-in options, MFA, ID services, limited vs full access, banks list) | 1 wording: "progress tracker" is not on any cited CRA account page | Reworded to "check the status of the return in your account" |
| `change-tax-return-refile-t1-adj` | 22 numbers + 47 prose claims (2 / 20 / 49 weeks, eight-week standard, ReFILE hours and closure, objection and VDP rules) | 1 wording: same "progress tracker" (2 places) | Reworded to "the status shown in your CRA account", matching the CRA text |
| `canada-workers-benefit-guide` | 176 numbers (every CWB table row, limits by province, disability supplement, advance dates) | 0 | none needed |
| `why-did-my-ccb-change` | 110 numbers (formula, tables, slopes, examples, dates) | 1 source: the post cited the legacy CRA "how we calculate your CCB" page for the 50% shared-custody rule; that page still serves July 2025–June 2026 figures ($37,487, $7,997) | Rule re-pointed to the current "how much you can get" page, which has the same sentence; legacy link removed from Sources (5 → 4); figures log updated |

No numeric mismatches. Not changed: the ESDC release's own example ("about $11,430" at $65,000) differs from the formula's $11,427 by $3; the post doesn't quote it. The change-return post doesn't mention the CRA's "up to 36 weeks" list (multiple returns, years beyond the 3-year window, carrybacks, etc.); it isn't wrong, so I left it.

## Money and ebooks
- **No affiliate links or offer markers** in any of the four posts.
- **Ebook CTAs:** `tax-guide` (My Account, change a return) and `government-benefits-guide` (CWB, CCB); both `/ebooks/` pages return 200 on the live site and checklist item 19 passes.
- **Byline:** "Andrew" only, en-CA (item 16 and 19 pass).
- **Hero images** (`public/images/blog/<slug>.png`): I looked at each one. No text, no banknotes, no coins; realistic documentary-style scenes (a woman at a laptop in a snowy-window kitchen, a man filing papers from a cabinet, a smiling grocery worker stocking produce, a father helping a child into winter boots). `BLOG_HERO_VERSION` is now 20261126a.

## Hubs and sibling links
- `taxes/filing-cra` startHere adds `cra-my-account-guide` and `change-tax-return-refile-t1-adj`, plus two decision questions.
- `government-benefits/credits-low-income` startHere adds `canada-workers-benefit-guide`; `government-benefits/family-child` startHere adds `why-did-my-ccb-change`.
- "Related:" lines in three live government-benefits cluster posts link the new CWB and CCB pages (checklist item 12 passes: hub in first 150 words, 3+ out, 3+ in, no broken links).

**Please don't merge without Andrew's explicit go.**
