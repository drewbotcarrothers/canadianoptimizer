# Canadian Optimizer: YouTube Video Pipeline Reference (Oct 2026)

This is the source of truth for the daily blog post → YouTube run on canadianoptimizer.com. It's built from Andrew's "CanadianOptimizer YouTube Strategy" doc, and every requirement in that doc is binding. Read the whole file before a run, and read it again before you resume an interrupted run.

| | |
|---|---|
| **Brand / site** | Canadian Optimizer · https://canadianoptimizer.com |
| **Channel** | https://www.youtube.com/@canadianoptimizer (channel ID `UCwMXnaDvnorDyEdu64BOStg`). The channel is public and links back to the site. Upload access from the box is **not set up yet** (see §12). |
| **Public name** | **Andrew** only. Never use his full name or surname in VO, on screen, in titles, descriptions, thumbnails or the site. |
| **Daily run** | **7:00 PM ET** (America/Toronto) |
| **Output per run** | One 16:9 long-form (5–15 min) and one 9:16 Short (20–40 s) from **one** blog post, plus a refreshed post that embeds the long-form |
| **Working folder (box)** | `/workspace/canadianoptimizer-video/`: `state.json`, `tracker.csv`, `candidate-queue.csv`, `legacy-channel-videos.csv`, `runs/YYYY-MM-DD/` |
| **Site repo** | `drewbotcarrothers/canadianoptimizer`. Next.js static export. Posts live in `src/data/posts.ts` and the `src/data/*-cluster.ts` / `src/data/oct2026/*.ts` files. A merge to `main` deploys to Hostinger by FTP (GitHub Action). |
| **Build tool** | OpenMontage (`/workspace/OpenMontage`), projects at `projects/co-<slug>/` |

---

## Contents
1. Goals and monetization
2. Hard rules (always on)
3. Post selection rules and scoring
4. Pre-video blog refresh checklist
5. Long-form spec (16:9)
6. Short spec (9:16)
7. Visual and brand spec (7a. Per-video variation system)
8. Images and Canadian currency rules
9. Voiceover and captions
10. Thumbnail system
11. Metadata: titles, descriptions, tags, disclaimers
12. Upload, scheduling and channel access
13. Post-publish: embed in the blog post
14. Tracker and queue
15. Chunked stage list, state save and resume
16. Definition of done
17. Stop conditions
18. One-time setup backlog

---

## 1. Goals and monetization

- **Primary goal:** drive Canadian readers to canadianoptimizer.com. The site earns from **display ads, affiliate offers and ebooks**. Today the live ebook is the 2026 tax guide at `/ebooks/tax-guide/`.
- **What each video is for:** viewer retention and engagement first. Every video has to be useful, educational and easy to follow on its own.
- **Secondary goal (AEO):** YouTube mentions help AI answer engines see the brand, and a video embedded in a post strengthens that post for SEO and AEO. Say "Canadian Optimizer" on camera, link the guide in the description, and embed the video in the post.
- **Weekly KPIs** (from the tracker, 7 days after publish): views, impressions CTR, average percentage viewed, retention at 0:30, Short viewed-vs-swiped, and site sessions from `source=youtube` in GA4 (property `p425093620`). Use them to tune hooks, title patterns and thumbnails.

## 2. Hard rules (always on)

1. **One post, one video pair, once.** Never remake a post that's in `tracker.csv`, and never remake a post listed as `hard` in `legacy-channel-videos.csv` (the channel already has a video for it).
2. **Never invent anything.** No made-up figures, quotes, testimonials, personal stories or affiliate programs. Every rate, limit, threshold and date must come from an official or primary source: CRA, Canada.ca / Service Canada, Finance Canada, Bank of Canada, OSFI, CMHC, FCAC, the provinces, or the provider's own page. If you can't verify a figure, drop it. Hypothetical math gets an on-screen **Example** label and the word "illustrative" in the description.
3. **Canadian currency only** in every image (§8): loonies, toonies and silver 5¢/10¢/25¢ coins. No pennies, no foreign coins, no banknotes. Cards are blank or Canadian-style, with no real logos and no readable text.
4. **Never name sister brands, tools or templates** in VO, on screen, in captions, descriptions or pinned comments. That covers StockSummarizer, Saving Optimizer, Make Money Optimizer, Canadian Credit Card Finder, OpenMontage and "the template". Use research privately and say it in our own words.
5. **No "Before we start" or "Quick note" section.** The hook goes straight into the content.
6. **YouTube descriptions must NOT include** affiliate disclosure paragraphs ("Disclosure: … may earn a commission…" / "Some links may earn a commission"), "Made with AI assistance…" paragraphs, or image-credits lists (Andrew 2026-10-27). Keep NFA/tax educational lines, chapters, the site link, and the UTM post link. Put image credits in local `credits.md` only. Site posts still keep the bottom-of-post AffiliateDisclosure component (PR #31). Studio's altered/synthetic disclosure checkbox may be set when required; it is not a description paragraph. Affiliate disclosure is never spoken and never on screen.
7. **Site changes go through a Cursor cloud agent and a PR** (code-changes skill). **Ask Andrew before you merge or deploy** unless he has granted standing approval. Record any standing approval in `state.json → approvals.granted` with its date.
8. **Publishing on YouTube is public and under Andrew's channel.** Get Andrew's go-ahead (per run, or a recorded standing approval) before you publish or schedule.
9. **No social links on the site** until Andrew confirms the accounts. Don't add a YouTube link to the header or footer unless he asks. Embedding a video inside a post is part of this pipeline and is fine.
10. **Andrew's rule overrides the guide when they conflict.** One example: the AEO guide says to put the affiliate disclosure before the first link and to show his full name, but Andrew's rules (site bottom-of-post AffiliateDisclosure only, no affiliate disclosure / AI-assistance / image-credits paragraphs in YouTube descriptions, "Andrew" only) win.
11. **Every video must look and sound clearly different from the previous one** (§7a; Andrew 2026-10-29, YouTube inauthentic/repetitive-content policy). Keep the daily volume, keep content tied to the brand and the post, and keep the current voice (AndrewNeural) until Andrew supplies his custom voice. `tools/variation.py check` must pass before any build, and a video in a never-used look waits for Andrew's approval before publishing. Voice only: music is permanently out.

## 3. Post selection rules and scoring

**Topic gate (playbook 2026-10-29):** only pick a post whose topic shows YouTube search autocomplete demand (record the suggestions in `00_pick_post.json`) and has a specific angle or original data point from the site, and that a sister channel hasn't covered this month (check the sister trackers privately; never name them publicly).

**Source of candidates:** `candidate-queue.csv` is a ranked prior, already rotated by category. Re-score on the day; don't just pop row 1 blindly.

**Eligibility filters (all must pass):**
- The slug is not in `tracker.csv` and is not `hard` in `legacy-channel-videos.csv`. A `soft` match means an older similar video exists, so you need a clearly new angle and a title that doesn't repeat the old one.
- The post is a real guide. Skip calculators-only pages, hubs and anything thin.
- The post has enough sourced substance for 5+ minutes: numbers, a comparison, a worked example, steps.
- The facts can be checked today against primary sources.
- **Category rotation:** the category must not appear in the last **5** tracker rows when that's avoidable. The categories are Investing, Taxes, Real Estate, Credit Cards, Retirement, Budgeting & Saving, Earning More, Insurance and Government Benefits (`src/lib/site.ts → CATEGORIES`). If every viable post breaks rotation, take the best one and write the exception in `00_pick_post.json` and in the tracker notes.

**Score (higher wins):**

`score = 2×search_interest + video_worthiness + seasonality + monetization_fit − overlap_penalty`

| Factor | Scale | How to judge |
|---|---|---|
| search_interest | 1–5 | Canadian demand. Use GSC impressions and position for the URL (positions 4–20 with high impressions are the best video candidates), plus GA4 views and Google Trends (Canada). Without data, use editorial judgement and say so in the state file. |
| video_worthiness | 1–5 | Is there a comparison, numbers to chart, a worked example, steps or a clear "X vs Y"? Can it hold 5+ minutes? |
| seasonality | 0–3 | Deadlines and calendar fit: Dec 31 tax moves, the January TFSA room, RRSP season (Jan–Mar 2), tax filing (Feb–Apr 30), July CCB reset, snowbird travel (Oct–Dec), renewal and rate news. |
| monetization_fit | 0–3 | A live ebook, an active affiliate program, or a strong internal-link funnel |
| overlap_penalty | 0–2 | A soft legacy-channel overlap, or the same topic in a sister-brand video that week |

**Daily pick output (`00_pick_post.json`):** slug, title, category, post_url, score breakdown, why_picked, candidates_considered, rotation_ok + notes, ga_gsc used or blocked, source file in the repo + commit.

## 4. Pre-video blog refresh checklist

Do this **before scripting**, across two stages: research (`01`), then ship (`02`). Apply the SEO & AEO guide (https://docs.google.com/document/d/e/2PACX-1vT2ZQ_PPRc6jkxkxRqiBbaUb00iQ1y91MVP_KSYxZl2vNqRGDZVWrDhoiZJz8rjT62FdmXLc1F_zc41/pub, box copy `/workspace/aeo-doc.txt`). It was written for a sister site, so apply the mechanics here.

**01 Research**
- [ ] Pull the latest `main` and read the post in full, wherever it lives (`posts.ts`, a cluster file or `oct2026/*.ts`).
- [ ] **Fact-check** every number, limit, rate, threshold and date against a primary source, using web research. Record each source URL and the date you checked it.
- [ ] **Add useful new information:** 2026–2027 changes, new limits, new programs and the follow-up questions readers ask next (4–8). Sources only.
- [ ] **Analytics:** pull GA4 (account `a421064`, property `p425093620`) for the post path over the last 28 and 90 days: views, engaged sessions, average engagement time and top sources. Pull Search Console for the page: top queries, impressions, CTR and average position. Feed the top query wording into the hook, title and tags. **How (working since 2026-10-07):** `python3 /workspace/canadianoptimizer-video/tools/ga_gsc_post_report.py --slug <slug> --out runs/YYYY-MM-DD/analytics.json` (service account in env `GOOGLE_SERVICE_ACCOUNT_JSON`, read-only; GA4 property `425093620` plus the Search Console URL-prefix property `https://canadianoptimizer.com/`; the `sc-domain:` property is not shared with it). Traffic is low, so small numbers are normal. If the call fails, write `blocked: <reason>` and keep going.
- [ ] Write a refresh plan: the exact edits, sources, links to add, and the `updated` date.

**02 Ship (cloud agent + PR, branch `co-video-YYYY-MM-DD-refresh-<slug>`)**
- [ ] **Answer first:** the title and first two sentences answer the reader's question. Define the key term and name Canada.
- [ ] H2s are written as reader questions, each with a 1–3 sentence answer block underneath. Each section stands on its own: name the account, the year and Canada.
- [ ] Add at least one thing a generic AI answer lacks: a worked CAD example, a comparison table or a decision rule.
- [ ] **Retention and flow:** a logical storyline (problem → answer → how it works → example → steps → mistakes → FAQ). Cut filler and "In today's world" intros. Keep paragraphs short and steps scannable. Read it aloud once.
- [ ] **Readability:** plain words, define acronyms on first use, no walls of text.
- [ ] **Internal links:** the category hub (`/category/<slug>/`) plus 2–3 related live posts. Add **affiliate links only for programs Andrew actually has**. None are configured in the repo as of 2026-10-06, so use official provider pages and never invent a program. Link the tax guide ebook where it's relevant.
- [ ] Check that the meta description is accurate, the slug is unchanged, and the hero image has descriptive alt text.
- [ ] Keep the real FAQs and keep the FAQ text aligned with the schema.
- [ ] **Update the modified date:** set the post's `updated` field to the run date (it feeds `modifiedTime` / dateModified). For `octPost(...)` posts, override it: `{ ...octPost(...), updated: 'YYYY-MM-DD' }`. Only change it when the content really changed, which a refresh always should.
- [ ] Byline stays "Andrew". Don't add new "reviewed by" claims.
- [ ] `npm run build` passes. Open the PR and record the PR URL. **Merge only with Andrew's OK**, then confirm the live page shows the change.
- [ ] Scripting can start once the refresh PR content is final. The merge can run in parallel.

## 5. Long-form spec (16:9)

| Item | Spec |
|---|---|
| Length | **5–15 min**. Aim for 7–10. Never pad. |
| Format | 1920×1080, 30 fps, OpenMontage `youtube_landscape` (Remotion Explainer), `music_policy: voice_only`, playbook `canadianoptimizer` (`styles/canadianoptimizer.yaml`). Pass its `remotion_theme` block as `props.themeConfig`; the auto-theme would give 48 px, 5-word captions. Don't use the `hero_title` cut, which hard-codes Space Grotesk and a grey scrim; build title and end cards as Inter PNG slides. |
| Audio | Voice only. No music bed. |
| Project | `/workspace/OpenMontage/projects/co-<slug>/`. Reuse the scripts in `projects/mmo-snow-removal-pricing-canada/scripts/` (tts, captions, beats, props, thumbs) as starting code. |

**Structure and timing (about 8 min):**

| # | Section | Time | What it does |
|---|---|---|---|
| s1 | Hook | 0:00–0:20 | The payoff or the costly mistake, plus **one proof number**, then open a loop. On-screen hook text from frame 0. **Frame 1 is the proof visual** (number, chart or document) and the first spoken line is the outcome in ≤12 words; first proof by 0:08, one-line roadmap by 0:15 (§7a). No logo-only intro. |
| s2 | Promise | 0:20–0:40 | Who it's for, what they'll walk away with, a 3–4 beat roadmap. Say "Canadian Optimizer" once; "the full guide is linked below." |
| s3 | Quick answer | ~0:40–1:30 | The post's answer-first summary in plain words |
| s4 | How it works | 1:30–3:00 | Rules, limits and mechanics, each with a sourced number on screen |
| s5 | Compare | 3:00–4:30 | Table or chart: options side by side, with the winner per situation |
| s6 | Worked example | 4:30–6:00 | A Canadian household in CAD, labelled **Example**. Pay off the hook's loop here, mid-video, not in the last 10 s. |
| s7 | How to optimize | 6:00–7:00 | 3–6 steps, each covering what to do, why, and the pitfall |
| s8 | Mistakes and quick wins | 7:00–7:40 | 2–3 of each |
| s9 | Recap, site and disclaimer | last ~25 s | A 3-line recap, a CTA to `canadianoptimizer.com/blog/<slug>/`, and the spoken disclaimer (§11). On-screen URL and disclaimer for ≥3 s. Leave a 10–15 s end card for end-screen elements. |

**Scene types (rotate them; a visual change every 3–5 s, no visual held >5 s, never the same component type twice in a row, ≥3 types per video; §7a):** hook text card · photo cut (white text, dark overlay ≥0.65) · big-number stat card with a source line · comparison table (≤5 rows, winner highlighted in red) · bar or line chart (sourced data only, source line underneath) · step list · worked-example card (labelled "Example") · timeline or deadline calendar · province map or table · official-source quote card (attributed) · **web_screenshot** (cropped official/primary UI; see §8) · **screen_demo** (short muted screen recording; see §8) · recap card · end card. Centre tables vertically and leave about 140 px at the bottom for captions.

**Retention best practices:** state the payoff in the first 5 s; one idea per screen; the on-screen numbers match the spoken meaning; pattern interrupts every 8–12 s; chapters; no "thanks for watching" fade. Keep the narration tight (§9).

## 6. Short spec (9:16)

| Item | Spec |
|---|---|
| Length | **20–40 s** (one question, answered; Andrew approved 2026-10-29), hard max 60 s |
| Format | 1080×1920, voice only, under ~75 MB |
| Angle | **Shorts as a funnel (playbook v2):** one surprising, brand-relevant fact from the post (`short_fact`), answered fast, with the Related Video link to the long-form. Track Shorts separately in the tracker. |
| Beats | Scripted natively as its own Q&A (not a trim): the answer visual in frame 1, question + answer by 0:03 (§7a) → Hook (0–3 s, text on screen by 0:01, image by 0:03–0:05) → 3–5 quick beats with one simplified stat card (≤4 rows) → close |
| Close (≤5 s) | Spoken: "Full breakdown on the channel. Guide at canadianoptimizer.com. Not financial advice." On screen: "Full breakdown on the channel" + `canadianoptimizer.com` + "Education only. Not financial advice." |
| Link to the full video | Set **Related video = the long-form**, put the long-form URL in the first line of the description, and show "Full video on the channel" on screen |
| Build | Re-lay the visuals for 9:16; don't letterbox. Remotion Explainer is landscape-only, so build with a Python frame renderer + ffmpeg in `projects/co-<slug>/short/` (pattern: `projects/mmo-snow-removal-pricing-canada/short/`). Reuse the long-form TTS segments, and TTS only short bridge lines in the same voice. |
| Safe zones | Captions centred around y ≈ 1400, above the bottom 20% and clear of the right-edge buttons. Brand badge at y 150–300. |
| Schedule | 24–48 h after the long-form goes live (§12) |

## 7. Visual and brand spec

Colours come from the site (`src/app/globals.css`, `src/app/blog/blog-content.css`, Tailwind v4 greys):

| Token | Hex | Use |
|---|---|---|
| White (background) | `#FFFFFF` | The default canvas for every non-photo scene |
| Canadian red (primary) | `#D80621` | Accent bars, highlighted word or number, winner row, active caption word, pills |
| Red hover / deep | `#B0051B` | Second chart series, pressed or dark accent |
| Charcoal (site text) | `#333333` | Body text on white |
| Ink (gray-900) | `#101828` | Headlines and big numbers, for maximum contrast |
| Muted (gray-600) | `#4B5563` | Source lines and secondary labels. Never paler on white. |
| Light slate | `#F8F9FA` | Card and panel surfaces |
| Border (gray-200) | `#E5E7EB` | Table rules and card borders |

- **Type:** Inter (the site font). Headings 800 weight, body 600, tracking 0.01–0.02em. Large type for phone readability.
- **Charts:** high contrast only, using `#D80621`, `#101828`, `#4B5563` and `#B0051B`. No pale bars. Show "better or worse" with red vs charcoal, or ✓ / ✗ icons. Don't introduce green or teal. No gradients, no dark mode, no neon.
- **Brand mark:** a red maple leaf plus a "Canadian Optimizer" wordmark (Inter ExtraBold, `#101828`). The site logo PNG is only 75×75, so build a clean vector lockup once into `/workspace/canadianoptimizer-video/brand/` (§18) and **don't upscale the PNG**. **Built 2026-10-07:** see `brand/README.md` for the vector flag-leaf redraw, `lockup-light`/`lockup-dark`, `badge-pill.png` (top-right badge), `watermark-150.png` and `icon-1024.png`. Use a small badge top-right on cuts and the lockup on the end card. It doesn't need to be on every frame.
- **Remotion theme props (starting point):**

```json
{
  "backgroundColor": "#FFFFFF",
  "surfaceColor": "#F8F9FA",
  "textColor": "#101828",
  "mutedTextColor": "#4B5563",
  "accentColor": "#D80621",
  "primaryColor": "#101828",
  "chartColors": ["#D80621", "#101828", "#4B5563", "#B0051B"],
  "captionFontSize": 56,
  "captionLetterSpacing": "0.015em",
  "captionWordsPerPage": 4,
  "captionHighlightColor": "#D80621",
  "captionBackgroundColor": "rgba(255, 255, 255, 0.95)",
  "captionTextColor": "#101828"
}
```

## 7a. Per-video variation system (Andrew 2026-10-29, AI YouTube Video Playbook)

**Why:** YouTube's inauthentic-content (YPP) and spam (synthetic mass-production) policies target channels whose videos feel interchangeable: same template, same imagery, same narration skeleton. Using AI is allowed; mass-produced sameness is not. Every new long-form **and** Short must look and sound clearly different from the channel's previous video and carry something original, while staying on-brand (white/light canvas, site red `#D80621`, ink `#101828`, Inter; no dark mode, gradients, green or teal) and tied to the post. Keep the daily volume and the current voice (`en-US-AndrewNeural`) until Andrew supplies his custom voice. **No music, ever** (Andrew 2026-10-29): every video is voice only, and music is not a rotation axis.

**Files**
- Presets: `/workspace/canadianoptimizer-video/templates/variation-presets.json` (axes, one-line spec per option, rules).
- Tool: `tools/variation.py pick | scan | check | approve-first-use | record | show`.
- History: `variation-log.csv` (source of truth; template, palette, hook type, etc. per run), mirrored to `state.json → variation_history` (last 10). Per run: `runs/<run_id>/variant.json` (axes, hook line, originality, titles, scene sequence, asset hashes, first-use approval). Backfilled 2026-10-29 for runs 2026-10-21 → 10-28 (all `classic_white` / `pill_lower` / `caption_center` / `classic_left` / `photo_text` opener / `classic_s1_s9`).

**Axes** (one option each per run; every one must differ from the previous run):
| Axis | Options |
|---|---|
| `visual_preset` (palette + layout) | classic_white, slate_panels, red_band (Andrew 2026-10-29: these 3 only; with the 2-run window they cycle) |
| `caption_layout` | pill_lower, lower_third_bar, boxed_left (all word-level, active word red, 2–4 words, clear of data) |
| `scene_mix` (lead components) | data_heavy (StatCard/charts), photo_story (motion stock), official_sources (screenshots/demos), timeline_map, checklist_steps |
| `opening_scene` (frame 1) | stat_card, chart, web_screenshot, motion_stock, comparison (photo_text = legacy, avoid) |
| `hook_style` | surprising_number, contradiction, question_instant_answer, proof_frame, consequence |
| `structure` (script skeleton) | classic_s1_s9 (§5), claim_proof_blocks, question_ladder, myth_vs_rule, walkthrough |
| `transitions` | hard_cut, slide_push, fade_quick, wipe_red |
| `thumbnail_layout` | classic_left, text_right, photo_full_band (`"layout"` in `thumbs.json`) |
| `short_layout` | caption_center, stacked_cards, full_photo, checklist |

**Rules `check` enforces (exit 1 = fail)**
- *Stage `axes`:* every axis differs from the previous run; `visual_preset` and `hook_style` also not used in the 2 runs before; full combination not used in the last 10; any `music` value other than voice-only fails.
- *Stage `pre_build` (06/07; `render_long_bg.sh` runs it):* `hook_line` (first spoken line = the outcome) ≤12 words and not the previous run's; `originality` filled (an original calc/table from site data, a real screen recording/screenshot, or an explicit recommendation unique to this video); after `scan`: ≥3 scene component types, no long-form visual held >5 s (end card/recap in the last 15 s exempt), no two consecutive cuts of the same component type, opening scene type and scene order differ from the previous run, **no image or clip shared with the previous video** (SHA-256 of `public/` and `short/` media).
- *Stage `pre_build` additions (playbook v2):* `thesis` = one sentence, ≤30 words, stating the argument or tension (no thesis, no build); `short_fact` filled; the signature visual (`sl_sig_*`) appears in the long-form; flagship rules if `flagship: true`.
- *Stage `qa` (09):* + titles (long and Short): ≤8 words and ≤55 characters, a Why/How, claim or search-question structure, at most one number, no year unless the topic is a dated rate or deadline (`"dated_topic": true`), no `#Shorts`; the long title shares a keyword with the thesis.
- *Stage `publish` (10/11):* + **first-use gate**.

**First-use gate (Andrew 2026-10-29):** `first_use` lists any `visual_preset`, `caption_layout`, `short_layout` or `thumbnail_layout` never used in a recorded run. `pick` and `check` print it. A first-use video (long-form and its Short) is **held unpublished** until Andrew approves that video, even with a standing approval; ask for it at 09 with the previews and say which looks are new. **One approval of a held video clears every new look in it** (Andrew 2026-10-29): `approve-first-use` records all of that run's `first_use` items at once. Record his answer with `python3 tools/variation.py approve-first-use --run-id <id> --note "Andrew OK <date time ET, channel>"`; `check --stage publish` fails until then. After the first approved use, the option is no longer first-use.

**Signature visual: the Optimizer chart (playbook v2; ✅ approved by Andrew 2026-10-29; constant across all 3 looks; does not rotate).** Every long-form shows it at least once, ideally at the payoff (and the Short when a number is the fact): white card, ink `#101828` bars or lines, the key/"optimized" value in red `#D80621` with a small red maple-leaf marker and a bold value label, a muted `#4B5563` source line underneath, and a small "Canadian Optimizer" label bottom-right. Built from this video's own sourced or site numbers. Name it `sl_sig_*.png`; `scan` types it `signature`. Spec in `variation-presets.json → signature_visual`.

**Thesis gate (playbook v2):** before 03 is done, write one sentence stating the argument or tension (e.g. "Prepaying 10% a year beats a bigger monthly payment for most Canadian mortgages."). The title, hook line and payoff come from it. No thesis, no build.

**Weekly flagship (playbook v2, within current volume):** one run per ISO week (Mon–Sun) sets `"flagship": true`: extra research (≥5 primary sources), an original chart or dataset from the site (`flagship_chart`), 3 titles + 3 thumbnails for Test & Compare, and for evergreen topics `structure: story_arc` (familiar thing → surprise → stakes → 2–3 escalations → payoff, with a teaser line before each act). `check` fails on a second flagship in the same week and prints this week's flagship status every run. **Flagship day = Sunday (Andrew 2026-10-29): the Sunday 7 PM ET run is the weekly flagship** (`rules.flagship.weekday`). Pick its post at 00 for the best original-data angle. `check` fails on a Sunday run without `"flagship": true` (unless `flagship_skip_reason` with Andrew's OK) and on a flagship on another day (unless `flagship_moved_reason`, e.g. the Sunday run was missed); `pick`/`check` print this week's flagship status and the next Sunday date.

**Slide naming (so `scan` can tell scene types apart):** `sl_stat_*`, `sl_chart_*`, `sl_table_*`, `sl_vs_*`, `sl_ex_*`, `sl_steps_*`, `sl_timeline_*`, `sl_map_*`, `sl_quote_*`, `sl_recap_*`, `sl_end_*`; screenshots `ss_*`, demos `*demo*.mp4`, stock clips `*.mp4`, photos `bg_*`. Generic `sl_*` names count as one type `slide`.

**Workflow**
1. **03 script:** `python3 tools/variation.py pick --run-id <run_id> --slug <slug> --write`; write the `thesis` first, decide `flagship` (see above); hand-edit `variant.json` to suit the topic if needed. Write the script in the chosen `structure` and `hook_style` (playbook hook template: frame 1 = the proof visual, line 1 = the outcome in ≤12 words, first proof by 0:08, one-line roadmap by 0:15, no greeting/logo; claim → proof → implication blocks, a payoff every 20–30 s, a teaser line before each section, sentences under ~15 words). Fill `thesis`, `hook_line`, `originality`, `short_fact`, `long_title`, `short_title` (and `dated_topic`, `flagship_chart` when they apply). Write the Short as its own script (§6), not a trim. Then `check` (stage `axes`).
2. **04–08:** fresh photos/clips for this video (prefer real motion clips over animated stills; never reuse the previous video's assets), cuts every 3–5 s, rotating components; build to the variant (theme/slide templates, caption layout, transitions, Short layout, thumbnail layout). Short captions stay centred above the UI safe zone.
3. **Before 06 and 07:** `python3 tools/variation.py scan --run-id <run_id> --project /workspace/OpenMontage/projects/co-<slug>` then `check --stage pre_build` must print `VARIATION CHECK PASSED`. Log it in the stage files. `VARIATION_SKIP=1` on the render only with Andrew's OK, logged.
4. **09 QA:** re-scan, `check --stage qa`, put long-form/Short contact sheets and the thumbnail next to the previous run's (visibly different), and report `first_use` to Andrew.
5. **10/11:** `check --stage publish` must pass before upload or scheduling.
6. **13 finalize:** `python3 tools/variation.py record --run-id <run_id>`.

## 8. Images and Canadian currency rules

**Sourcing order (per cut, matched to what the VO is saying):**
1. **The post's own hero image**, `public/images/blog/<slug>.png` (1024×1024, site-approved style). Use it once, cropped. It's also the default thumbnail photo.
2. **Free, openly licensed photos:** Openverse, Wikimedia Commons, Pexels, Pixabay, Unsplash. Check the licence and log title, author, licence and URL in `projects/co-<slug>/credits.md`. Use real photos for specific real places and things (Parliament, a CRA building, a named city).
3. **Grok Imagine (AI)** only when no free image fits, and only for general concepts. Follow the `BLOG-IMAGE-GUIDE.md` prompt formula: realistic documentary photo, bright natural light, Canadian setting, fictional people, no text, no logos, no banknotes, Canadian coins only. Never generate a real person, a real company's product or logo, or a fake chart. Budget about 2 stills per run unless Andrew says otherwise. Log AI images in local `credits.md`. Tick Studio's altered/synthetic disclosure if an image looks realistic; do **not** add an AI-assistance or "Some images are AI-generated" paragraph to the YouTube description.
4. **Never use** Google Images scrapes, news-wire photos, or screenshots / brand-site captures that imply endorsement, sponsorship, or "as seen on" framing. **Official or primary-page captures are allowed** when they help the viewer (see **Web screenshots and live demos** below): a CRA / Canada.ca page, an official calculator, a public fee table the VO walks through, or a form field the viewer must find. Endorsement-looking misuse stays banned.

### Web screenshots and live demos

Use these **only when they enhance the video for the end user** — not as filler. Prefer a simple table or stat card when that already shows the same fact clearly.

**When to use (enhances the viewer):**
- A real CRA / Canada.ca page or payment calendar the VO is explaining
- An official calculator or tool the viewer should use
- A broker or provider fee table the VO is walking through line by line
- A form field or settings screen the viewer must find
- A short before/after of public settings when the change is the point

**When NOT to use:**
- Filler B-roll or "look busy" cuts with no spoken purpose
- Login walls, personal account data, OTP/password screens, or any PII
- Doctored, outdated, or invented UI presented as live
- Fake mockups presented as real pages
- Ads, affiliate "as seen on" framing, or sister-brand sites
- Anything that invents figures that aren't on the live page

**Screenshots:**
- Capture **official or primary pages only** (CRA, Canada.ca / Service Canada, Finance Canada, Bank of Canada, OSFI, CMHC, FCAC, provinces, or the provider's own public page)
- Crop to the relevant UI; keep text readable on 1080p (zoom/crop as needed)
- Show the URL or a clear source attribution on screen, or log it in `credits.md` (URL + capture date)
- No fake logos invented; Canadian coin / money-imagery rules still apply to any money shown in frame
- Hold ≤6.5 s like other photo cuts unless the VO needs longer for a walkthrough

**Live demos (short screen recordings):**
- 5–20 s clips of clicking through an official tool or public page when **motion** clarifies the step
- Mute page audio (voice-over only); show the cursor when it helps
- No passwords, OTP, or personal account data
- Capture via box tools from the real page — never invent UI chrome
- Prefer a few purposeful clips over one long screencast

**Script / assets stages:**
- At **03 script**, mark beats that need UI with `screenshot:` or `demo:` plus the target URL
- At **04 assets**, capture those **before** filling remaining cuts with free or AI photos; log URL + capture date in `credits.md`
- Include them in scene rotation as scene types `web_screenshot` and `screen_demo` (§5)

**QA:** the on-screen UI must match the spoken claim and the current live page. Reject the capture if the page changed and numbers disagree. Never invent UI chrome to "fix" a mismatch.

**Canadian currency and money imagery (hard):** coins must read as Canadian: gold 11-sided loonie, two-tone toonie, silver 5¢/10¢/25¢. **No pennies, no US or euro coins, no banknotes or paper money.** Payment cards are blank or Canadian-style with no real logos or text. Run an OCR pass on every AI image and reject any with stray text, fake lettering, warped hands or faces, or the wrong money. On-screen amounts are CAD ("$7,000"). Label US amounts "US$".

**Contrast on photo cuts:** white text, dark overlay ≥0.65, and opaque white cards (`rgba(255,255,255,0.96)`) for body copy. Captions always sit on the white pill.

## 9. Voiceover and captions

These are the same settings and approach as the stock-analysis video reference used on the sister channel (`/workspace/stocksummarizer/brand/STOCK-ANALYSIS-VIDEO-REFERENCE.md` §2, §4, §5, §6.3, §7.5). **Never name that brand or its template in any video or description.**

### Voiceover

**Playbook 2026-10-29:** keep the voice; vary pacing and emphasis to the script; keep a pronunciation dictionary (`templates/pronunciations.json`: CRA, TFSA, RRSP, FHSA, RRIF, LIRA, tickers, bank names) applied to the TTS text; insert pauses after key numbers; re-render flat lines; listen to minute one as a stranger before rendering. **Explicit exception to the playbook's normal-speed rule (Andrew 2026-10-29): AndrewNeural `+12%` stays until Andrew's custom voice.**

| Setting | Value |
|---|---|
| Engine | Microsoft Edge neural TTS via `edge-tts` |
| Voice | **`en-US-AndrewNeural`** |
| Rate | **`+12%`** |
| Pitch | `+0Hz` (default) |
| Timing | `boundary="WordBoundary"` gives word timings for captions |
| Music | **None** (voice only, to avoid copyright claims) |
| Loudness | Keep consistent across the long-form and the Short, about **−18 to −21 LUFS** integrated (the Short value from the reference), true peak ≤ −1.5 dBTP. Don't swing between runs. |
| Output | `projects/co-<slug>/public/narration_full.mp3` (or `.wav`) + `artifacts/words.json` |

```python
c = edge_tts.Communicate(text, "en-US-AndrewNeural", rate="+12%", boundary="WordBoundary")
```

**VO style (concise):** one idea per sentence; insight, not a recital of every table cell; drop filler openers like "Next, let's look at…" when the scene already shows it; the VO syncs to the on-screen beat; never say "percent" after a spoken percent. If Andrew rewrites a line, his version wins and you apply only TTS spoken-form polish.

**Spoken forms (write these into the TTS script):** expand dense acronyms on first use ("adjusted family net income", "interest rate differential", "management expense ratio"). Write money and percents in spoken form so TTS reads them cleanly. Use the `[display|spoken]` markup, e.g. `[$7,000|seven thousand dollars]`, so captions get the display form automatically. Listen to the first TTS pass for acronyms the engine mangles (RRIF → "riff", LIRA → "leer-uh", HELOC → "hee-lock", T2125 → "T twenty-one twenty-five") and fix them in the spoken half only.

### Captions (display track)

| Setting | Value |
|---|---|
| Style | **Dark text (`#101828`) on a solid white pill `rgba(255,255,255,0.95)`**, never bare text on photos. Active word in `#D80621`. |
| Size | Large (about 56 px on 1080p). Tracking **0.01–0.02em**. |
| Numerals | After TTS, rewrite the caption track to **display numerals**: `5.6%`, `$7,000`, `October 6, 2026`, `TFSA`, `RRSP`. Merge multi-word spoken spans into one display token (keep the first word's `startMs` and the last word's `endMs`). **Don't re-TTS just to fix captions.** |
| Chunking | Start a new caption at every **sentence boundary**. Max **4 words** per caption. **Never a 1-word caption** (rebalance 5 → 3+2, not 4+1). Never use fixed windows that carry a sentence tail into the next caption. |
| Placement | Long-form: lower third, clear of tables (about 140 px reserved). Short: centred around y ≈ 1400. |
| Export | `long.srt` (and `short.srt` if you upload it) from the display track, uploaded as English (Canada) |
| QA | Pull frames at caption boundaries. Check for no mid-sentence starts, no spelled-out numbers, and no 1-word pages. |

## 10. Thumbnail system (locked template)

**Playbook 2026-10-29:** make 3 thumbnails (A/B/C), headline ≤3 words, one subject, high contrast, readable at 160 px wide; layout rotates per §7a. Run Test & Compare only once the video has meaningful impressions.

The goal is a consistent, professional, trustworthy look so the channel reads as one brand at a glance, with CTR coming from the hook and not from clutter. There's one locked style (fonts, colours, brand row, proof pill, topic-named headline). Since 2026-10-29 it has three layouts that rotate per §7a: `classic_left` (default), `text_right` and `photo_full_band`, set with `"layout"` in `thumbs.json` (samples: `samples/variation/`).

**Fixed elements (never change per video):**

| Element | Spec |
|---|---|
| Canvas | 1280×720, white `#FFFFFF`, JPG or PNG < 2 MB |
| Photo panel | Right side. The photo is cover-cropped to 640×720 at x = 640, contrast ×1.05–1.1, no dark scrim, no text over the subject. The photo must be **topic-relevant** (it shows the subject or the people it's for, e.g. a family for life insurance, a traveller or airport for travel cards). Use the post's hero image only when it passes that test; otherwise use a relevant free photo from §6. |
| Slanted white panel | Polygon (0,0) to (760,0) to (690,720) to (0,720), drawn over the photo |
| Red edge bar | 14 px `#D80621`, full height, on the left edge |
| Brand row | Top-left at (50, 40): maple leaf mark (≈56 px) plus "CANADIAN OPTIMIZER" in Inter ExtraBold 28 px `#101828` |
| Category chip | Under the brand row: rounded `#F8F9FA` pill with a `#E5E7EB` border, category name in Inter Bold 24 px `#4B5563`, uppercase (e.g. TAXES). This is the series cue. |
| Headline | 2 lines, Inter Black, UPPERCASE, `#101828`, auto-fit to ≤640 px wide. Line 1 up to 200 px tall, line 2 up to 140 px. One word may be red `#D80621`. |
| Proof pill | A rounded `#D80621` box (r 22) at the bottom-left (x 44, y 552–668) with white Inter Black text, about 80 px, shrink-to-fit |
| Context chip (optional) | Top-right on the photo: `#101828` rounded box with white Inter Black 40 px, ≤ 22 characters |
| Timestamp zone | Keep **bottom-right empty** (x ≥ 1090, y ≥ 620) |
| Never | Andrew's name or face as the hero; red arrows; strokes, outlines or drop shadows on text; more than these text blocks; sister-brand colours; fake logos; banknotes or pennies in the photo |

**Variables per video:** the photo, headline lines 1–2 (2–4 words total that **add to** the title, not repeat it, often ending in "?"; the headline **must name the topic** in plain words, e.g. `TERM LIFE`, `TFSA`, `CAPITAL GAINS`, `MORTGAGE RENEWAL`, so a viewer knows what the video is about from the thumbnail alone; a hook with no topic word, like `CHARTS LIE?`, is not allowed), the proof pill (one sourced number plus up to 2 words, e.g. `$7,000 ROOM`, `5.25% vs 4.1%`), the optional chip.

**A/B testing:** build A (number-led) and B (question or mistake-led) with the same photo. Upload both to Studio "Test & Compare" when available, otherwise ship A. Log the winner in the tracker notes.

**QA:** view at 100%, 320×180 and 160×90 (the hook should read in about 1 s); the headline names the topic and the photo is topic-relevant; the photo subject is visible right of the slant; the timestamp zone is empty; the file is < 2 MB; the thumbnail matches the first 15 s of the VO and the title promise.

**Generator:** `/workspace/canadianoptimizer-video/tools/make_co_thumbnail.py` (§18), adapted from `/workspace/stocksummarizer/tools/make_thumbnail.py` with the palette and brand row above. No one-off layouts. Usage: `python3 tools/make_co_thumbnail.py --config runs/YYYY-MM-DD/thumbs.json`. The config is a JSON list with ids A and B and the keys `photo, category, line1, line2, proof, chip, focus_x, focus_y, zoom, out, _why, _sources`; mark the one red word as `*WORD*`. The generator writes `<out>-preview.png` (100%, 320×180 and 160×90 with a timestamp mock) and `thumbs-contact.png`, warns when the headline gets too small, and refuses banned terms. Example: `samples/thumbs-sample.json`.

## 11. Metadata: titles, descriptions, tags, disclaimers

Placeholders: `{TITLE}` `{SLUG}` `{POST_URL}` = `https://canadianoptimizer.com/blog/{SLUG}/` · `{HUB_URL}` = `https://canadianoptimizer.com/category/{CATEGORY_SLUG}/` · `{LONG_URL}` · `{DATE}` (the date the facts were checked)

UTM long: `?utm_source=youtube&utm_medium=video&utm_campaign=co-daily-long&utm_content={SLUG}`
UTM Short: `?utm_source=youtube&utm_medium=shorts&utm_campaign=co-daily-short&utm_content={SLUG}`
UTM pinned comment: `?utm_source=youtube&utm_medium=video&utm_campaign=co-pin&utm_content={SLUG}`

### Titles (CTR, no repetition)
- **Title rule (playbook v2; overrides the length below):** write 3 options, each ≤8 words and ≤55 characters, structured as Why/How, a claim, or the search question ("Can I…", "X vs Y"), at most one number, no year unless the topic is a dated rate or deadline, built from the thesis sentence. `variation.py check --stage qa` enforces it.
- (Old) Aim for 45–65 characters, 100 max. Front-load the Canadian keyword (use the top GSC query wording when you have it). Add the year when the topic is time-sensitive.
- **Rotate patterns** and never use the same pattern two runs in a row: how-to · X vs Y · number/list · question · costly mistake · explained · worked example ("I ran the numbers") · by province · deadline · myth vs math.
- Before you finalize, check the last 10 tracker titles and `legacy-channel-videos.csv`. Avoid the same first 3 words, the same template, and old-channel phrasing like "… | CanadianOptimizer" or "Everything You NEED to Know".
- The title, thumbnail and hook make one promise, and the video pays it off. No claims the sources don't support. At most one all-caps word (an acronym like TFSA is fine).

### Long-form description (≤ 4,800 characters; YouTube's limit is 5,000)

```
{One-sentence value hook that answers the viewer's question for Canadians.}

📖 Full guide (sources, tables, FAQ): {POST_URL}?utm_source=youtube&utm_medium=video&utm_campaign=co-daily-long&utm_content={SLUG}

In this video:
• {beat 1}
• {beat 2}
• {beat 3}
• {beat 4}

Chapters
0:00 {Hook}
{m:ss} {Section}
…
{m:ss} Recap & links

More {Category} guides: {HUB_URL}
{If tax topic:} 2026 Canadian tax guide (ebook): https://canadianoptimizer.com/ebooks/tax-guide/
Canadian Optimizer: https://canadianoptimizer.com

Key sources (checked {DATE}): {CRA / Canada.ca / provider pages, short list}

Educational only, not financial, tax or legal advice. Rules, rates and limits change; confirm with the official source (CRA, Service Canada, your province or the provider) before you act. Examples marked "Example" are illustrative.

#CanadianPersonalFinance #{TopicTag} #Canada
```

Build the chapters from the **rendered** section starts: the first at 0:00, at least 3, each at least 10 s long.

### Long-form tags (≤ 500 characters total)
`{primary query}, {secondary query}, {topic} canada, {topic} 2026, canadian personal finance, {category} canada, {account/program names}, canadian optimizer`

### Short title and description
- Title: ≤8 words and ≤55 characters (title rule above), the Short's surprising fact or search question, a different hook from the long-form. **No `#Shorts` suffix** (playbook 2026-10-29).
- Description:
```
{One-line hook.} Full video: {LONG_URL}
Full guide: {POST_URL}?utm_source=youtube&utm_medium=shorts&utm_campaign=co-daily-short&utm_content={SLUG}
https://canadianoptimizer.com
Educational only, not financial or tax advice. Rules and rates change; check the official source.
```

### Pinned comment (long-form, once it's public)
```
Full Canadian guide with sources, tables and FAQs: {POST_URL}?utm_source=youtube&utm_medium=video&utm_campaign=co-pin&utm_content={SLUG}
What should we break down next? Drop your question below.
```

### Disclaimers
- **Spoken, end of the long-form:** "Canadian Optimizer is for education only. It isn't financial, tax or legal advice. Rules and rates change, so check the official source before you act."
- **Spoken, end of the Short (≤5 s):** "Full breakdown on the channel. Guide at canadianoptimizer.com. Not financial advice."
- **On screen (≥3 s):** `canadianoptimizer.com` · `Education only. Not financial, tax or legal advice.`
- **Description only:** the fuller NFA/tax educational disclaimer. Do **not** put affiliate disclosure, AI-assistance, or image-credits paragraphs in the YouTube description (credits stay in `credits.md`; site posts keep bottom AffiliateDisclosure). Studio synthetic/altered checkbox OK when needed.
- **Never claim:** do not say or write that content is peer-reviewed, or reviewed by CPAs, CFPs, or any other professional designation. That claim is false. Mentions of hiring a CPA/CFP as *advice to the viewer* in topic content are fine; claiming our own posts or videos were reviewed by them is not.

**Paste files:** `runs/YYYY-MM-DD/output/` holds `long_title.txt`, `long_description.txt`, `long_tags.txt`, `short_title.txt`, `short_description.txt`, `short_tags.txt`, `pinned_comment.txt`, `long.srt`, `thumb-A.jpg`, `thumb-B.jpg` and `youtube_metadata.md`.

## 12. Upload, scheduling and channel access

### How the sister pipelines upload (observed 2026-10-06)

| Pipeline | Channel | Method |
|---|---|---|
| Canadian Credit Card Finder | @CanadianCreditCardFinder (`UCasiKYjx8foY1AT8OWpccbQ`) | **YouTube Data API v3** with OAuth. The client config is in the box env var `YOUTUBE_OAUTH_CLIENT_JSON` (Google Cloud OAuth desktop client; app "In production", audit pending). A per-channel refresh token sits in `/workspace/cccf-youtube/api/token.json`. `api/upload.py` uploads as private with `publishAt` (scheduled), then sets the thumbnail and captions. `yt.py` verifies with `channels?mine=true`. The fallback is Studio in the box browser. |
| Make Money Optimizer | @MakeMoneyOptimizer | **YouTube Studio in the box browser**: long-form Public, Short scheduled, pinned comment |
| Stock videos | @stocksummarizer | **YouTube Studio in the box browser**, uploaded directly |

### What Canadian Optimizer needs (blocker until done)
- The channel **@canadianoptimizer** (`UCwMXnaDvnorDyEdu64BOStg`) exists publicly: about 459 subscribers, 344 uploads (169 long-form, 175 Shorts), it links to the site, and it's probably Andrew's. **Ownership and upload access from the box are not verified.** Don't create a new channel or account.
- **Preferred (option A):** Andrew completes one OAuth consent with the existing CCCF OAuth client while signed in as the Google account or brand account that manages @canadianoptimizer, with scopes `youtube.upload` and `youtube` (plus `youtube.force-ssl` for captions). Save the refresh token to `/workspace/canadianoptimizer-video/api/token.json` (chmod 600; never print it) and confirm that `channels?mine=true` returns `UCwMXnaDvnorDyEdu64BOStg`. Copy `upload.py` and `yt.py` from `/workspace/cccf-youtube/api/` into `/workspace/canadianoptimizer-video/api/`.
  - **Caveats:** until Google approves the API audit, verify each upload in Studio and make sure it isn't locked private. If it is, delete it and re-upload in Studio. Quota is 10,000 units a day per Google Cloud project and an upload costs about 1,600 units, so two uploads for CCCF plus two for CO is about 6,400+ units. Watch it, or use a separate project.
- **Fallback (option B):** the box browser is signed into YouTube Studio with access to @canadianoptimizer. Confirm the channel name in the channel switcher before every upload.

### Schedule rules (America/Toronto; EST starts Sun Nov 1, 2026, so always use the zone, never a fixed offset)
- **Long-form:** goes **Public as soon as it passes QA and approval** on the run evening. If that happens after 11:00 PM ET, schedule it for **12:00 PM ET the next day** instead. Record `long_published_at`.
- **Short:** `publishAt` = the long-form's publish time + 24 h, rounded up to the next full hour. If that lands between 11:00 PM and 9:00 AM ET, move it to 12:00 PM ET that day or the next, so it stays within 48 h. It must always be 24–48 h after the long-form. Upload it scheduled, with **Related video = the long-form**.
- **Studio checklist:** title, description, tags, thumbnail (Test & Compare A/B), playlist for the category (create one per category the first time), audience "No, it's not made for kids", captions SRT (English, Canada), end screen (best-for-viewer video + subscribe), cards at 2–3 natural points to related videos, language English (Canada). Leave "Includes paid promotion" unticked unless a partner paid for or provided something for the video. Tick altered/synthetic content when realistic AI images are used.
- After the long-form is live: post and pin the pinned comment. Check that both videos show the right status and time in Studio → Content.

## 13. Post-publish: embed in the blog post

1. **One-time infrastructure PR (setup, §18):** add optional `youtubeId` (plus `youtubeTitle`, `youtubeUploadDate`, `youtubeDuration` in ISO 8601) to the post type; add a lite YouTube facade component (poster thumbnail, click-to-load `youtube-nocookie.com` iframe, 16:9, lazy) rendered under a "Watch the video" H2 after the hook/key takeaways; and emit **VideoObject** JSON-LD (name, description, thumbnailUrl, uploadDate, duration, embedUrl, contentUrl) next to the existing Article/FAQ schema in `src/app/blog/[slug]/page.tsx`. Until this ships, use a plain responsive `youtube-nocookie` iframe inside the post content as the fallback, and note that in state. **Status 2026-10-07:** PR #33 (https://github.com/drewbotcarrothers/canadianoptimizer/pull/33, branch `feat/youtube-embed-videoobject`) was merged and deployed 2026-10-07 (f9d54fc); first used by PR #36. A post sets `youtubeId` / `youtubeTitle` / `youtubeUploadDate` / `youtubeDuration` (e.g. `{ ...octPost(...), youtubeId: '…' }`). VideoObject is emitted only when `youtubeUploadDate` is set.
2. **Per run:** a cloud agent PR, branch `co-video-YYYY-MM-DD-embed-<slug>`, sets the fields for the post (optionally adds a "Quick version: 60-second Short" line after the Short goes live), and `npm run build` passes. **Merge with Andrew's OK**, then confirm the live page shows the player and the JSON-LD (view source).
3. You can combine the embed with the refresh PR only if the refresh hasn't merged yet and the long-form is already live. Otherwise use a separate PR.
4. Not configured yet: IndexNow / Bing ping (see §18).

## 14. Tracker and queue

- `tracker.csv` has one row per run, and it's the record of posts already used. Columns: `run_date, slug, category, post_url, title_pattern, long_title, long_url, long_published_at, short_title, short_url, short_scheduled_for, thumbnail, refresh_pr, embed_pr, ga_gsc_notes, status, views_7d, ctr_7d, avg_view_pct_7d, site_sessions_7d, notes, avd_7d, retention_cliff_s, short_views_7d, short_viewed_pct_7d, flagship`. Status moves through `in_progress → awaiting_approval → published → done`. Write the row at `00` with `in_progress`.
- `candidate-queue.csv` is the ranked candidates with their score breakdown. Mark a row `used` when it's picked. Refill it to about 30 rows when fewer than 10 remain, keeping the category rotation and re-scoring with GA/GSC when you have it.
- `legacy-channel-videos.csv` lists the posts that already have channel videos (`hard` = excluded, `soft` = needs a new angle). Refresh it monthly with a public channel listing (e.g. `yt-dlp --flat-playlist`).
- **Shorts tracked separately:** fill `short_views_7d` and `short_viewed_pct_7d` (viewed vs swiped) 7 days after the Short goes live.
- **Monthly satisfaction review (playbook v2):** on the first weekday of each month, pull Studio for the previous month: like ratio (likes ÷ views), comments asking for more, returning viewers, alongside CTR and average view duration, per video and for Shorts separately. Write `reviews/satisfaction-YYYY-MM.md` with the top and bottom 3 videos, which hook styles, structures, looks and flagships did best, and 3 concrete changes for next month; add a dated line to the changelog if a rule changes. Report it to Andrew. **Routine:** set up 2026-10-29 for the 1st of each month at 9:00 AM ET (Andrew's monthly review routine; it writes the review file and reports, it never changes rules or publishes). Studio API reads need the YouTube Analytics scope; if it is missing, note `blocked` and use Studio exports.
- **7 days after publish:** fill in `ctr_7d`, `avd_7d` (average view duration) and `retention_cliff_s` (time of the biggest retention drop) too; change the hook or packaging before changing the topic mix. Fill in the KPI columns from Studio and GA4 (`source=youtube`, campaign `co-daily-long` / `co-daily-short`).

## 15. Chunked stage list, state save and resume

**Pointer:** `/workspace/canadianoptimizer-video/state.json` (`current_run`, `next_stage`, `artifacts`, `stage_log`). Per-stage records live in `runs/YYYY-MM-DD/NN_<stage>.json`.

| # | Stage | Does | Saves (minimum) |
|---|---|---|---|
| 00 | `pick_post` | Score candidates, apply the filters and rotation; tracker row `in_progress` | slug, category, post_url, score breakdown, why, rotation_ok, ga_gsc used or blocked |
| 01 | `refresh_research` | Fact-check, web research, GA4 + GSC, AEO audit, refresh plan | sources (URL + date), new info, analytics notes, planned edits, top queries |
| 02 | `refresh_ship` | Cloud agent applies the edits, `updated` date, links; build; PR | PR URL, branch, build result, merged true/false (merge needs approval) |
| 03 | `script` | Long-form VO by section + Short VO, beats, the on-screen number list with a source each, title/hook/thumbnail promise; mark UI beats with `screenshot:` / `demo:` + URL when a real page helps; `tools/variation.py pick --write` → `variant.json` (§7a) | `03_script.md` + `03_script.json` (variant, word count, est. duration, numbers → sources, screenshot/demo URLs) |
| 04 | `assets` | Images (hero → free → Grok Imagine), **web screenshots / short screen demos** (official pages first, then free/AI fill), charts and slides, brand badge, credits | asset paths, `credits.md` (incl. screenshot/demo URL + capture date), ai_image_count, OCR/currency QA passed |
| 05 | `voiceover_captions` | TTS AndrewNeural +12%, loudness, caption display rewrite, chunking, SRT | narration path, words.json, caption pages, 1-word pages = 0, LUFS, duration |
| 06 | `build_long` | OpenMontage render 1920×1080 in the background (`tools/render_long_bg.sh`, §15 rule 4), then QA frames | render launch + per-chunk progress; mp4 path, duration, chapter times (rendered), QA frame dir |
| 07 | `build_short` | 9:16 build, ≤60 s, QA frames | mp4 path, duration, QA notes |
| 08 | `thumbnail_metadata` | Thumbnail A/B, all paste files, chapters | thumbnail paths, title, title_pattern, description length, tags length |
| 09 | `qa_approval` | Run `tools/variation.py check` (must pass) and the §16 DoD checklist and send Andrew the preview (mp4s, thumbnail, title) for go-ahead unless a standing approval exists | checklist results, approval (who, when) or `awaiting_approval` |
| 10 | `publish_long` | `variation.py check --stage publish` must pass (first-use gate); Upload the long-form, set thumbnail, captions, playlist, end screen; Public (or scheduled per §12) | long_url, video_id, long_published_at (ET), method (API or Studio) |
| 11 | `schedule_short` | Upload the Short scheduled 24–48 h later, Related = long-form, link in description | short_url, short_scheduled_for (ET), related_long_id |
| 12 | `embed_post` | Embed PR, merge with approval, live check, pinned comment if the long-form is live | embed PR, live confirmed or pending |
| 13 | `finalize` | `tools/variation.py record --run-id <run_id>`, complete the tracker row, mark the queue `used`, set `last_completed_run`, clear `current_run` | `13_finalize.json`, DoD ticks |

**Save and resume rules**
1. **Write order after each stage:** stage file first, then `state.json` (`last_completed_stage`, `next_stage`, append to `stage_log`, merge `artifacts`, `updated_at` with offset). If the box dies between the two writes, the stage file without a state bump means: verify the stage file, then bump.
2. **Resume = run only `next_stage`.** Never redo a completed stage unless `force: true` or Andrew asks. Redo a half-finished stage from the start (stages are idempotent: reuse files that already exist and are valid, e.g. TTS segments and rendered frames).
3. **Long stages checkpoint internally:** TTS per section (`assets/audio/<section>.mp3`), renders per scene or chunk. A resumed stage skips finished pieces.
4. **Never block the session on a long render.** Launch the long-form render in the background: `nohup /workspace/canadianoptimizer-video/tools/render_long_bg.sh <project_dir> [concurrency] > <project_dir>/renders/render.log 2>&1 &`. It renders 2,700-frame chunks, skips chunks with a `.done` marker, saves `current_run.artifacts.long_render_progress` in `state.json` after every chunk, and writes `renders/RENDER_DONE` (or `RENDER_FAILED`) at the end. Record the launch in `state.json` (stage 06 stays `next_stage`), then keep working on stages that don't need the mp4 (07 Short, 08 thumbnails/metadata; chapters come from `remotion_props.json` cut times, which the render uses). Check progress with short, non-blocking reads of `render.log` / `state.json`, never with a long wait. If the session ends first, the render keeps going; the next session (or the next 7 PM run) sees `RENDER_DONE` and finishes stage 06 QA, or re-launches the same command to resume from the last finished chunk. Keep concurrency modest (≤4) on the shared box and never kill another project's render.
5. **Stage files for out-of-order work:** if 07/08 artifacts are finished while 06 is still rendering, write their stage files, but bump `state.json` strictly in order once 06 is recorded.
6. **Blocked stages** (no approval, no channel access, PR not merged) set `status: blocked` or `awaiting_approval` with `blocked_reason`. Then do any later stage that doesn't depend on the blocker (e.g. 07–08 while 02 waits to merge, or 12's PR drafting while 10 waits) and record it. Don't skip ahead past a dependency.
7. **Next 7:00 PM run:** if `current_run` isn't done, resume it first. Start a new post only when nothing is waiting on Andrew, or when the old run is parked at `awaiting_approval` (note both runs in `state.json`; at most 2 open runs).
8. **Never** delete earlier run folders, reuse a slug, or mark a stage complete without its artifacts on disk.

## 16. Definition of done

- [ ] The post was unused (tracker + legacy hard list) and the rotation was respected (or the exception logged)
- [ ] Refresh: facts verified with sources, new info added, AEO checklist applied, links added (no invented affiliates), `updated` set to the run date, PR merged with approval and live
- [ ] GA4/GSC notes recorded (or "blocked" noted)
- [ ] Long-form 5–15 min, 1920×1080, white + site red/ink, frame 1 = proof visual, first line = outcome ≤12 words, proof by 0:08, roadmap by 0:15, a visual change every 3–5 s (none >5 s), ≥3 component types, payoff/teaser every ≤30 s, voice only, AndrewNeural +12%, site CTA + disclaimer at the end
- [ ] Captions: white pill, dark text, display numerals, ≤4 words, sentence boundaries, no 1-word captions; SRT exported
- [ ] Short scripted natively (one question answered, 20–40 s target, ≤60 s), answer visual in frame 1, no `#Shorts` title suffix, 1080×1920, close ≤5 s, Related = long-form, link in the description, scheduled 24–48 h after the long-form
- [ ] **Variation (§7a):** `variant.json` exists; `variation.py check` passed at `pre_build` (before 06/07), `qa` (09) and `publish` (10/11); vs the previous video: different scene mix and opening scene, palette/layout, caption layout, hook type, structure, transitions, thumbnail and Short layout, **no shared image or clip** (side-by-side contact sheets); voice only (no music); history recorded at 13
- [ ] **First-use gate:** if `first_use` is not `none`, the video was held unpublished and Andrew's approval is recorded (`approve-first-use`)
- [ ] **Thesis:** one-sentence thesis written; title and hook built on it
- [ ] **Signature visual:** Optimizer chart (`sl_sig_*`) present in the long-form; voice only (no music)
- [ ] **Flagship (if this week's):** story arc (evergreen), original site chart/dataset, ≥5 primary sources, 3 titles + 3 thumbnails ready for Test & Compare
- [ ] **Short funnel:** one surprising brand-relevant fact, Related Video = long-form
- [ ] **Originality:** at least one element unique to this video (original calc/table, real screen recording/screenshot, or explicit recommendation); at least one real screenshot or original chart
- [ ] Topic gate: autocomplete demand recorded, specific angle, not covered by a sister channel this month
- [ ] Voice: every acronym/ticker pronounced right (pronunciation dictionary), no flat robotic questions; captions word-level, synced, active word highlighted, first caption = the hook line, not covering data
- [ ] Titles ≤8 words and ≤55 chars, Why/How, claim or search question, ≤1 number, no year unless dated rate/deadline, no `#Shorts`; 3 thumbnails ≤3 words readable at 160 px
- [ ] Would a stranger in the niche stay past 0:30? If not, re-cut the open
- [ ] Thumbnail from the locked template (layout per the variant), timestamp zone empty, < 2 MB, readable at 160×90
- [ ] Metadata: CTR title (pattern not repeated), post link first, chapters from the render, tags ≤500, description ≤4,800, NFA/tax educational lines kept; YouTube description must **not** include affiliate disclosure, AI-assistance, or image-credits paragraphs
- [ ] Every image credited in local `credits.md` only; Studio **AI use / altered-or-synthetic = Yes whenever a photorealistic Grok Imagine person or scene appears** (not a description paragraph); prefer charts and real footage; Canadian coins only; no banknotes or pennies; no text in AI images
- [ ] Web screenshots / demos (if used): official or primary page only, cropped and readable, URL + capture date in `credits.md`, spoken claim matches on-screen UI and the live page; no login/PII, no doctored or invented UI
- [ ] No sister-brand, template or tool names; no surname; no invented figures
- [ ] The long-form is embedded on the live post with VideoObject
- [ ] Tracker row complete; `state.json` cleared to `last_completed_run`

## 17. Stop conditions

Stop, save state, and report to Andrew (via the parent agent) when:
- YouTube upload access or the GA/GSC login is missing for a step that can't proceed safely
- A key figure can't be verified from a primary source and the video depends on it
- Publishing or a merge needs approval that hasn't been given
- OpenMontage or TTS keeps failing after 2 retries
- A refresh would require inventing a figure, quote or affiliate program

## 18. One-time setup backlog (before the first run)

1. **Channel access:** Andrew confirms that @canadianoptimizer is his and completes option A (OAuth) or B (Studio login) from §12.
2. **Analytics access:** ✅ 2026-10-07. The box service account (`GOOGLE_SERVICE_ACCOUNT_JSON`) reads GA4 `p425093620` and the Search Console property `https://canadianoptimizer.com/`. Use `tools/ga_gsc_post_report.py` (§4); `tools/check_ga_gsc_access.py` re-checks access.
3. **Brand assets:** ✅ 2026-10-07. Vector leaf + wordmark lockups (light and dark), `watermark-150.png`, `badge-1x1-*`, `badge-pill.png` and `icon-1024.png` are in `/workspace/canadianoptimizer-video/brand/` (see README).
4. **OpenMontage style:** ✅ 2026-10-07. `styles/canadianoptimizer.yaml` (backup in `templates/canadianoptimizer-style.yaml`) validates in OpenMontage's loader. Test render: `samples/om-style-test-5s.mp4`.
5. **Thumbnail generator:** ✅ 2026-10-07. `tools/make_co_thumbnail.py` (§10) with previews and a contact sheet; samples are in `samples/`.
6. **Site embed component and VideoObject** (§13). Done: PR #33 merged and deployed 2026-10-07.
7. **Category playlists** on the channel (nine categories).
8. Optional: IndexNow ping on deploy; a GA4 "AI Search" channel group (from the AEO guide).

---
*Created 2026-10-06 from Andrew's YouTube strategy doc. Sister references: `/workspace/mmo-youtube/VIDEO-REFERENCE.md`, `/workspace/cccf-youtube/video-reference-guide.md`, `/workspace/stocksummarizer/brand/STOCK-ANALYSIS-VIDEO-REFERENCE.md`. Update this file (and the box copy) whenever Andrew changes a rule, and add a dated line below.*

## Changelog
- **2026-10-06:** v1 created. Queue of 30 posts seeded by editorial judgement (no GA/GSC access). Channel @canadianoptimizer found publicly; upload access pending.
- **2026-10-07:** Setup: brand set, thumbnail generator, OpenMontage playbook `canadianoptimizer`, and GA4/GSC access via the box service account. Embed PR #33 merged and deployed the same day; first video (IdjVKZOWDqU) published and embedded via PR #36.
- **2026-10-09:** Renders run in the background with per-chunk state saves (`tools/render_long_bg.sh` + `tools/render_progress.py`); sessions must not block on a long render (§15 rules 4–5). Reason: the Oct 7 and Oct 8 7 PM runs ended mid-render without recording stage 06.
- **2026-10-15:** Thumbnail rule (§10): the headline must name the topic (e.g. TERM LIFE, TFSA) and the photo must be topic-relevant. Reason: Andrew found the term-life run's A/B thumbnails (`CHARTS LIE?`, `NOT AN AGE CURVE`) didn't say the video was about term life insurance; he chose D (`TERM LIFE BY AGE?` + family photo).
- **2026-10-27:** Web screenshots and short live demos allowed only when they enhance the viewer (§8 + scene types `web_screenshot` / `screen_demo`). Official/educational captures OK; endorsement-looking misuse, login/PII, and invented UI stay banned. Stages 03–04 and §16 QA updated.
- **2026-10-27:** YouTube descriptions must not include affiliate disclosure, AI-assistance, or image-credits paragraphs (Andrew via Make Money Optimizer Bot). Keep NFA/tax educational lines, chapters, site link, and UTM post link. Image credits stay in local `credits.md` only; site posts still keep bottom-of-post AffiliateDisclosure. Studio synthetic checkbox OK when needed. §2 rules 6/10, §8, §11 description template + disclaimers, and §16 QA updated.
- **2026-10-29:** Per-video variation system (§7a, §2 rule 11) from Andrew's AI YouTube Video Playbook: presets in `templates/variation-presets.json`, `tools/variation.py` pick/scan/check/approve-first-use/record, history in `variation-log.csv` + `state.json → variation_history` (backfilled 10-21 → 10-28 incl. asset hashes), check stages axes / pre_build (render gate) / qa / publish, first-use approval gate for new looks, thumbnail layouts `text_right` / `photo_full_band`. Playbook rules added: topic gate (§3), hook template and 3–5 s cadence (§5), native 20–40 s Q&A Shorts without `#Shorts` (§6, §11), ≤55-char search-phrased titles (§11), 3 thumbnails ≤3 words (§10), pronunciation dictionary and pauses (§9), AI-use disclosure for photorealistic Grok Imagine (§16), AVD + retention cliff KPIs (§14). Music permanently out: voice only. Volume and AndrewNeural voice unchanged.
- **2026-10-29 (Andrew's answers):** colour/layout presets trimmed to 3 (classic_white, slate_panels, red_band); one approval of a held first-use video clears all its new looks; AndrewNeural +12% kept until the custom voice as an explicit exception to the playbook's normal-speed rule; Shorts 20–40 s with no `#Shorts` title suffix approved; PR #79 merged.
- **2026-10-29 (playbook v2, approved by Andrew):** thesis gate, signature visual (Optimizer chart, `sl_sig_*`), title rule ≤8 words/≤55 chars with year only for dated topics, weekly flagship with story-arc structure (≤1 per ISO week, weekday TBD), Shorts as a one-fact funnel tracked separately, monthly satisfaction review (§14). `variation.py` checks thesis, short fact, signature, title words/year/thesis keyword, flagship. CO per-channel rule (voice only, rotate the rest) already in place. News-as-take does not apply (CO has no news format). Andrew's earlier answers unchanged.
- **2026-10-29 (Andrew):** flagship day = Sunday (Sunday 7 PM ET run; `variation.py` enforces and reminds); Optimizer chart signature visual approved; monthly satisfaction review routine set for the 1st of each month at 9:00 AM ET (§14).
