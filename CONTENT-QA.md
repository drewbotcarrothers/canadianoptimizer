# Content QA: pre-publish checklist and number verification

This is the gate for every new post and every substantive refresh (content strategy §9.2 and §9.6).
**Quality beats quota:** a post that fails any checklist item or the number verification is held,
even if that leaves fewer posts in the day's batch. Never relax a check to hit the count.

Post format rules stay in [BLOG-POST-GUIDE.md](BLOG-POST-GUIDE.md) and hero rules in
[BLOG-IMAGE-GUIDE.md](BLOG-IMAGE-GUIDE.md). This file covers the tools and the procedure.

## Files

| Path | What it is |
|---|---|
| `content/briefs/<slug>.json` | The brief: family, category, subcategory, target query, information-gain line, money flag, offers, ebook, publish date, and the agent checks. Copy `content/briefs/_template.json`. |
| `content/figures/<slug>.json` | The figures log: every number in the post, its kind, source URL, as-of date, and the re-check result. |
| `content/pilots.json` | Pilot lists for the programmatic families (province, scenario, forms, glossary). |
| `content/sisters.json` | Sister-site URL list for the duplicate check (generated, not committed). |
| `src/data/offers.ts` | Affiliate offer registry. Posts place `<div data-offer="id"></div>`; pending offers render nothing. |
| `scripts/content/checklist.mjs` | The 20-item checklist. |
| `scripts/content/figures.mjs` | Figures extraction, re-check sheet and log check. |
| `scripts/content/sisters.mjs` | Refreshes `content/sisters.json`. |

## Scheduled posts

A batch PR carries its planned publish date in `date` (and `updated`, equal to it). `src/data/posts.ts`
leaves posts dated after today out of every route, the sitemap and the feeds, so the build passes before
the date. They go live on the first deploy on or after their date. **Merge a batch PR on its publish day**
(the deploy runs on merge); if it is merged earlier, the posts wait for the next deploy on or after the date.

To check scheduled posts before their date, build a preview: `npm run build:preview`
(`CO_PREVIEW_SCHEDULED=1`). Never set that variable in the deploy workflow.

## Daily procedure

1. **Brief** (D−3): write `content/briefs/<slug>.json`. No information-gain line, no post.
2. **Draft** (D−1): write the post in its data module. Put the information-gain sentence on the page inside an
   element with `data-info-gain` (usually `<p class="did-you-know" data-info-gain>` or a callout). Link the
   subcategory hub in the first 150 words.
3. **Extract figures:** `npm run content:figures -- extract <slug>`. Then classify every row in
   `content/figures/<slug>.json`:
   - `sourced`: a published fact (rate, limit, threshold, date, fee). Needs `sourceUrl` (must be listed under
     the post's Sources), `sourceName` and `asOf`.
   - `derived`: our own arithmetic from sourced figures. Needs `derivedFrom` (row ids) or a formula in
     `verify.note`.
   - `example`: an illustration amount (a labelled example household, a scenario rate). The post must label it
     as an example or illustration.
4. **Independent re-check** (D morning, a separate agent pass from the one that drafted): print the sheet with
   `npm run content:figures -- sheet <slug>`, open every source **today**, and set for each row
   `verify: { status: "match" | "mismatch", checkedOn: "<today>", verifier: "<agent/run id>", note }`.
   Re-do the arithmetic for every `derived` row. A mismatch, a dead source or an unsourced number fails the post:
   fix the post, re-extract and re-check.
5. **Agent checks:** record the three agent-only checks in the brief's `agentChecks` (2a answers read as answers,
   4a no invented quotes or experience, 6a money-page picks), each with `pass`, `by` and `on`.
6. **Checklist:** build a preview and run the checklist on the day's posts:
   ```
   npm run build:preview
   node scripts/content/sisters.mjs
   npm run content:check -- --date 2026-11-16 --out out --sisters content/sisters.json --report /tmp/checklist.md
   ```
   Then run the normal `npm run build` so the PR's own build is proven.
7. **Batch PR:** only posts with verdict PASS go in. Paste the report table into the PR. Held posts stay out of
   the PR, get fixed, and re-run the full re-check and checklist the next day. A post that fails twice is dropped
   or proposed for merging into a stronger page (Andrew decides anything that touches a live page).

## The 20 items and how each is checked

| # | Check | How |
|---|---|---|
| 1 | Information-gain line visible | Script: `data-info-gain` element ≥ 40 characters and `infoGain` in the brief |
| 2 | Answer first | Script: 35–75 word paragraph right after the hook; every question H2 opens with a paragraph. Agent: 2a |
| 3 | Every number sourced, dated, re-verified today | Script: `figures.mjs check` (every number has a row; sourced rows verified `match` on the check date or publish day; sources listed with reviewed dates) |
| 4 | No invented quotes, experience, tests or "reviewed by" | Script: banned phrases fail; first-person and blockquotes warn. Agent: 4a |
| 5 | Not a clone | Script: 5-word shingle overlap with every other post < 30% |
| 6 | Money pages evidence-first | Script: "How we picked/compared" heading, offer markers ≤ picks, no sticky offer. Agent: 6a |
| 7 | Affiliate disclosure, `rel="sponsored"`, valid offer ids | Script. Offers render through `renderOffers()`, which adds the disclosure line above the first live offer |
| 8 | Not-advice line; tax pages name the tax year and link CRA | Script |
| 9 | Natural title and slug | Script: ≤ 75 characters, no pipe, slug lowercase without a year, half the query words present |
| 10 | Article schema (BlogPosting, Person "Andrew", dates, Organization), BreadcrumbList, no HowTo | Script, on the built HTML (`--out`) |
| 11 | Self-canonical, in the sitemap, not noindex | Script, on the built HTML |
| 12 | Hub link in the first 150 words; ≥ 3 posts linked; ≥ 3 posts linking in; no broken internal links | Script. Add links from related live posts in the same PR to reach 3 inbound |
| 13 | Hero exists, 1024×1024, ≤ 400 KB, IPTC digital-source metadata; in-content images have alt, width, height | Script |
| 14 | Core Web Vitals budget | Manual (Lighthouse). Posts add no scripts |
| 15 | Not a near-duplicate here or on a sister site | Script: same title here, or same/similar slug in `content/sisters.json` |
| 16 | Byline "Andrew" only | Script |
| 17 | `/how-we-use-ai/` exists and is linked from the footer and About | Script (site level) |
| 18 | Above the family's minimum length | Script: words before Sources vs `FAMILY_MIN_WORDS` |
| 19 | en-CA spelling, date guard, ebook CTA only for a live book | Script |
| 20 | Programmatic families: on the pilot list, or family passed review | Script, `content/pilots.json` |

Statuses: **FAIL** holds the post. **WARN** must be read and explained in the PR but doesn't block.
**MANUAL** needs the agent pass recorded in the brief. **SKIP** means the script wasn't given what it needs
(for example `--out`), and a batch PR should never contain a SKIP.

## Number verification rules

- Only official or primary sources: CRA and other Canada.ca pages, Finance Canada, ESDC, the Bank of Canada,
  Statistics Canada (cite the table ID), OSFI, FCAC, CMHC, provincial ministries and regulators, and the issuer's
  or lender's own page for product facts.
- Every sourced figure shows its source on the sentence that uses it, and the Sources list repeats it with the
  date it was reviewed.
- Rates and limits are checked against the source on the publish day. A figure the publisher hasn't printed is
  written as "not published", never estimated.
- Example amounts are labelled as examples in the post and in the disclaimer.
