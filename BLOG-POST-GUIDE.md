# Blog Post Guide

Approved standard as of October 2026. This is the reference for writing and refreshing posts on canadianoptimizer.com. Follow it for every new post and every substantive refresh.

Hero images have their own rules in [BLOG-IMAGE-GUIDE.md](BLOG-IMAGE-GUIDE.md). This guide covers the post itself: the record, the HTML, the sourcing, and the checks before it ships.

The patterns below are the ones the site actually renders. Class names, field names, and heading text are not suggestions. `extractFaq`, the date guard, the sitemap, and the JSON-LD all key off them.

## 1. Positioning

Canadian Optimizer publishes advanced, actionable personal finance for people living in Canada. A post should change a decision: which account, which province's rule, which number to type, which sentence to say in a meeting. It is not a definition pasted from a brochure.

Nine categories, matching `CATEGORIES` in `src/lib/site.ts`:

| Category | `category` | `categorySlug` | Hub |
|---|---|---|---|
| Investing | Investing | `investing` | `/category/investing/` |
| Taxes | Taxes | `taxes` | `/category/taxes/` |
| Real Estate | Real Estate | `real-estate` | `/category/real-estate/` |
| Credit Cards | Credit Cards | `credit-cards` | `/category/credit-cards/` |
| Retirement | Retirement | `retirement` | `/category/retirement/` |
| Budgeting & Saving | Budgeting & Saving | `budgeting-saving` | `/category/budgeting-saving/` |
| Earning More | Earning More | `earning-more` | `/category/earning-more/` |
| Insurance | Insurance | `insurance` | `/category/insurance/` |
| Government Benefits | Government Benefits | `government-benefits` | `/category/government-benefits/` |

Two categories have subcategories: Earning More and Investing.

**Earning More is about earning the money.** Its three subcategories:

| Subcategory | `subcategory` | Hub |
|---|---|---|
| Employee | `employee` | `/category/earning-more/employee/` |
| Entrepreneur | `entrepreneur` | `/category/earning-more/entrepreneur/` |
| Side Hustles | `side-hustles` | `/category/earning-more/side-hustles/` |

Employee posts cover raises, offers, severance, overtime, and the pay stub. Entrepreneur posts cover rates, registration, clients, and getting paid. Side Hustles posts cover extra income and whether it still pays. The tax mechanics of that income — brackets, CPP, EI, dividends, deductions — live in **Taxes**. Link the Taxes article. Do not rebuild the bracket table inside an Earning More post. The hub states the order: pick the path first; tax prices the path after the dollar exists.

**Investing is split by investor profile.** Four subcategories:

| Subcategory | `subcategory` | Hub |
|---|---|---|
| Passive ETF Investing | `passive-etf` | `/category/investing/passive-etf/` |
| Dividend Investing | `dividend-investing` | `/category/investing/dividend-investing/` |
| Stock Picking | `stock-picking` | `/category/investing/stock-picking/` |
| Hands-Off Investing | `hands-off` | `/category/investing/hands-off/` |

Passive ETF posts cover all-in-one ETFs, model portfolios, asset location, rebalancing, and staying invested. Dividend posts cover dividend income, the dividend tax credit, sectors, DRIPs, and yield traps. Stock Picking posts cover analyzing and valuing a business, sizing, selling, and record-keeping (ACB, T5008). Hands-Off posts cover robo-advisors, advisors, mutual funds, and planners: what they cost and how to choose. Accounts, brokerages, and tax plumbing every investor needs (TFSA vs RRSP, brokerage comparisons, Norbert's Gambit, withholding tax) stay **untagged** and render under "Start here" on the Investing hub. Tax mechanics still live in **Taxes**; link them.

In the cluster modules, Investing tags are set with the `INVESTING_SUBCATEGORY` map in `src/data/investing-cluster.ts` or directly on the record. Investing posts link their subcategory hub in the first screen, as Earning More posts do.

Set `subcategory` only on Earning More and Investing posts, and only to one of the slugs above. Other categories have no subcategories. A made-up slug is dropped from the breadcrumb.

## 2. The post record

A post is a `BlogPostRecord` (`src/lib/post-video.ts`). Recent posts are built in a cluster module and spread into the `posts` array in `src/data/posts.ts`. That file is marked generated and ends with the date guard. Add the article in the cluster (`src/data/*-cluster.ts`, `src/data/oct2026/*`, or `src/data/earning-more-2026*.ts`). Touch `posts.ts` only to import a new module and spread it, and leave the date guard as the last statement.

`octPost()` in `src/data/oct2026/types.ts` is the shape to copy: it sets `author` to `Andrew`, `image` to `/images/blog/{slug}.png`, and the same `date` and `updated`. `articleFooter()` builds the disclaimer block. Category helpers (`taxPost`, `earningPost`) do the same job.

| Field | Rule |
|---|---|
| `title` | The H1, the hero alt, and the start of the `<title>`. See SEO. |
| `slug` | Lowercase, hyphenated, unique. The URL is `/blog/{slug}/`. The hero file uses the same slug. Do not change it after publish. |
| `category` / `categorySlug` | The pair from the table above. |
| `subcategory` | Earning More: `employee`, `entrepreneur`, or `side-hustles`. Investing: `passive-etf`, `dividend-investing`, `stock-picking`, or `hands-off` (omit for general posts). |
| `author` | The string `Andrew`. Nothing else. |
| `date` | `YYYY-MM-DD`. First publication. The header prints the month and year: `Published October 2026`. |
| `updated` | `YYYY-MM-DD`. On first publish, set it equal to `date`. The header prints `Updated {Month Year}` only when the two differ. |
| `excerpt` | One or two sentences. This becomes the meta description, the card text, the RSS description, and the `llms.txt` blurb. |
| `image` | `/images/blog/{slug}.png`. Follow [BLOG-IMAGE-GUIDE.md](BLOG-IMAGE-GUIDE.md). |
| `content` | The HTML string. One `<div class="container">` wrapping the article. No `<h1>` inside it. |
| `youtubeId` | Optional. The 11-character id, not a URL. |
| `youtubeTitle` | Optional. Defaults to `title`. |
| `youtubeUploadDate` | Optional ISO date. Required before VideoObject JSON-LD is emitted. |
| `youtubeDuration` | Optional ISO 8601 duration, such as `PT8M42S`. |

There is no separate hero-alt field and no separate meta-description field. The title is the hero alt. The excerpt is the meta description, after `toMetaDescription()`.

### Date guard

`src/data/posts.ts` throws while the module loads if `date` or `updated` is after today in `America/Toronto`. The comparison is the `YYYY-MM-DD` string. A future date fails the build. Use the Toronto calendar day you are shipping, or an earlier day. Never a planned date.

### What the template adds, so you do not author it

`src/app/blog/[slug]/page.tsx` does all of the following:

- Renders the H1 from `title`, then `By Andrew` (linked to `/about/`), `Published {Month Year}`, `Updated {Month Year}` when the dates differ, and a read-time badge.
- Read time is `ceil(whitespace tokens in the raw HTML / 225)`. Tags inflate it. Judge length by the prose, not by the badge.
- Inserts the hero `<img class="post-featured-image" alt="{title}">` immediately after the hook `</div>`. Do not put that image in `content`.
- When `youtubeId` is valid, inserts the "Watch the video" player after the hook and that hero. Do not paste an iframe or a `<div id="post-video-embed">`.
- Appends `AffiliateDisclosure` after the article.
- Appends `RelatedPosts`: up to three cards, newest in the same category first, then other categories.
- Emits JSON-LD: `BlogPosting`, `BreadcrumbList`, `FAQPage` when `extractFaq` finds questions, and `VideoObject` when the upload date is valid.
- Every current category uses this layout. Canonical URLs have a trailing slash (`trailingSlash: true` in `next.config.ts`). Write internal links as `/blog/{slug}/` and `/category/{slug}/`.

The visible byline prints `post.author`. The meta author and the `BlogPosting` author are hardcoded to `Andrew`. Those three must agree, which is why the field is `Andrew` and only `Andrew`.

## 3. Required order

The hook stays first. The direct answer and the key takeaways come after it. They never replace it, and the hook is never moved down to make the answer sit under the H1.

Authored order inside `.container`:

1. **Hook** — `<div class="hook">`, the first element. Two or three sentences: the reader's problem, then the payoff. Put the one phrase that should stick in `<span class="highlight">`. This is the same element the template already looks for. If it is missing, the hero is not injected and the video falls back to a worse spot.
2. **Direct answer** — the next element you write. One paragraph, 40 to 60 words, answering the title. Include the concrete Canadian figure, who published it, and the year. No heading of its own.
3. **Key takeaways** — a `<div class="callout">` whose first line is `<strong>Key takeaways:</strong>`, then a short `<ul>`. This is the TL;DR box. Do not add a second "Key takeaways" H2 later that repeats it.
4. **On this page** — only when the post is long. A `<nav aria-label="On this page">` of jump links. See Engagement.
5. **Body** — H2 sections.
6. **Frequently asked questions** — that exact H2, then H3 questions. See SEO.
7. **Sources** — an H2, not an H3. An H3 here would be parsed as another FAQ.
8. **Related reading** — an H2 list of the next articles the argument depends on.
9. **CTA** — `<div class="cta-section">` pointing at a live product. See Monetization.
10. **Footer** — `<div class="article-footer">` with the disclaimer and a `footer-note` of `Published`, `Updated` when it differs, `Category`, and `Author: Andrew`. Those dates must match `date` and `updated`.

On the rendered page the template inserts the hero, and the video when one exists, **between the hook and the direct answer**. That is correct. Do not "fix" it by putting the answer inside the hook, by dropping the hook, or by adding your own hero `<img>`.

```html
<div class="container">

    <div class="hook">
        The problem in one sentence. <span class="highlight">The payoff in one phrase.</span> The third sentence tells the reader what they will be able to do.
    </div>

    <p>Forty to sixty words that answer the H1 on their own. Name the figure, the publisher, and the year in this paragraph. A reader who stops here still has the answer. An overview that quotes only this paragraph still has the source.</p>

    <div class="callout">
        <strong>Key takeaways:</strong>
        <ul>
            <li>One decision, with the figure and the year.</li>
            <li>The constraint that changes the decision.</li>
            <li>What this page will not pretend to know.</li>
        </ul>
    </div>

    <h2 id="the-section">Question the reader would actually type?</h2>
    <p>The first one or two sentences answer that question. The rest of the section shows the work.</p>

    <h2>Frequently asked questions</h2>
    <h3>Full question, ending in a question mark?</h3>
    <p>A short answer that stands alone, with the figure and the year.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.canada.ca/...">CRA: document name</a>, reviewed October 16, 2026</li>
    </ul>

    <h2>Related reading</h2>
    <ul>
        <li><a href="/blog/example-slug/">Anchor text that says what the next post decides</a></li>
    </ul>

    <div class="cta-section">
        <p><strong>One sentence that ties this decision to the return.</strong></p>
        <p>The 2026 tax guide is the filing companion. $49 CAD.</p>
        <a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
    </div>

    <div class="article-footer">
        <p><strong>Disclaimer:</strong> General education, the as-of date, what the examples are, and a line telling the reader to confirm the current page and to consult a tax professional for their file.</p>
        <div class="footer-note">Published: October 16, 2026 | Category: Taxes | Author: Andrew</div>
    </div>

</div>
```

The hook is also the engagement open and the video cold open. It does that job. The 40–60 word paragraph does a different job: it is the answer. Keep both.

## 4. Depth standard

Write a deep, ranking-grade guide that a careful reader would rather keep than the current top three to five Canadian results for the query. About **2,000–3,000 words** of reader-facing prose when the topic supports it. A narrow confirmation (what is announced, what is still blank) can be shorter. Do not add a section to hit a number.

Every post that can carry the weight includes:

- The answer-first open in section 3, then the same habit under each question-style H2: the first lines answer, then the detail.
- A worked Canadian example with the arithmetic visible (`.example-box` and, when it is a column of figures, `.example-calculation`). State the assumptions. Label illustration dollars as an illustration, not as the reader's assessment and not as a forecast.
- A step-by-step process the reader can finish: an `<ol>`, or `.step` blocks when order matters on the page.
- A script or template where the reader has to say or write something: an `.example-box` labelled as a script, with the blanks named.
- A checklist (`.checklist`) for the actions.
- Provincial differences where the rule is not national. Name the province. Quebec is often Revenu Québec and the QPP, not the CRA and the CPP. If you have not opened that province's page, say so. Do not copy another province's dollar into the gap.
- A decision framework: a table ("choose this when") or a `.flowchart`.
- Common mistakes, usually a `.warning-box`, naming the specific mix-up (the US rule, the cancelled proposal, the lookalike account).
- Realistic ranges with a source and a year, or an explicit label that the range is an illustration.
- Tools with pros and cons in a table: what you give up, not a ranking that will rot.
- When to get professional help: a CPA, a CFP, or a tax lawyer for the reader's own file. That sentence is a recommendation to the reader. It is not a claim that one of them reviewed the post.
- Six to eight FAQs. Fewer only when the topic has fewer real questions. Do not invent filler.

Model the voice on the October cluster posts (for example `diy-etf-portfolio-asset-location-canada`, the capital-gains guide in `src/data/taxes-cluster.ts`, and `how-to-earn-more-money-canada`): short paragraphs, a table that carries the comparison, a sourced figure or an openly labelled illustration, and a sentence about what the article will not pretend to know.

## 5. Visuals

Use **two to four or more** charts, graphs, tables, or diagrams in the body, spaced through the sections they belong to, not stacked at the end. They are static HTML styled by `src/app/blog/blog-content.css`. Do not add a chart library, a canvas, or a script.

Every visual is either tied to a primary source you opened, or labelled as an example in the heading and the caption. Dollar figures in visuals are Canadian. If a cell has to mention a US dollar amount, label it USD in that cell. Do not draw a chart whose axis is unmarked foreign currency.

Say the finding in a sentence next to the visual. The graphic is not the only copy of the number.

### Table

The default comparison. Use a `<caption>`, `<th>` cells, and wrap it in `<div class="table-wrapper">` so it scrolls on a phone instead of blowing out the column.

```html
<div class="table-wrapper">
    <table>
        <caption>What the table is, and the month you checked it</caption>
        <thead>
            <tr><th>Choice</th><th>When it fits</th><th>What you give up</th></tr>
        </thead>
        <tbody>
            <tr><td>…</td><td>…</td><td>…</td></tr>
        </tbody>
    </table>
</div>
```

`<tr class="highlight-row">` marks the row the reader should not miss.

### Bar chart

For a comparison of a handful of labelled values. The width is the picture; the `<span>` is the value, so the number exists as text. Keep `.bar-label` short (a province code, not a sentence). The label column is 40 pixels wide.

```html
<div class="chart-container">
    <h3>What the bars compare, and the tax year</h3>
    <div class="bar-chart">
        <div class="bar-item">
            <div class="bar-label">ON</div>
            <div class="bar-wrapper"><div class="bar" style="width: 80%;"><span>the rate</span></div></div>
        </div>
    </div>
    <p>Repeat the comparison in a sentence under the chart, with the source and the year. The span is the value. The width is only the picture.</p>
</div>
```

### Diagram and flowchart

`.diagram` is a vertical sequence: `.diagram-step` (and `.diagram-step.light`) separated by an empty `<div class="diagram-arrow"></div>`. Use it for a pipeline the reader walks once.

`.flowchart` is a decision: `.flow-node.decision`, `.flow-arrow`, `.flow-branch-container` or `.flow-grid-3`, and `.flow-node.result` for the outcome. Branches stack to one column under 768 pixels. Put the same decision in a sentence or a table so the answer is not only in the boxes.

### Worked math

```html
<div class="example-box">
    <strong>Example: label the household and say it is an illustration</strong>
    <div class="example-calculation">
        <div class="line"><span>Label</span><span>$1,000</span></div>
        <div class="line total"><span>Result</span><span>$500</span></div>
    </div>
    <p>Name the assumption that produced the result.</p>
</div>
```

### Other blocks that are already styled

| Classes | Use |
|---|---|
| `.summary-grid` > `.summary-item` > `.summary-label` + `.summary-value` | Three or four sourced figures the reader needs before the prose. Collapses to one column on small screens. |
| `.stat-box` inside `.province-stats` | A province's figures, inside `.province-section`. |
| `.term` > `.term-name` + `.term-def` | A definition, the official name as the term. |
| `.timeline` > `.timeline-item` > `.timeline-year` | A sequence of dated rule changes. |
| `.step` inside `.step-section` | `.step-number`, then `.step-title` and the instruction. |
| `.checklist` on a `<ul>` | Action items. The box is drawn by CSS. Do not paste a checkbox character. |
| `.form-ref` | A form number in running text, such as `<span class="form-ref">T691</span>`. |

### SVG

Use an inline `<svg>` inside `.chart-container` only when a line or an area is the point a bar cannot show. Include `<title>` and a paragraph under the SVG that states the finding with the numbers. Axes that are money are in Canadian dollars. Do not rely on colour alone: keep a text label on each series.

### Accessibility

- The hero alt is the post title. Write a title that names the topic.
- Tables have captions and header cells.
- The sentence beside a chart repeats the finding.
- Do not convey the point only by red versus grey.

### Calculators

Five tools mount when `content` contains the exact empty marker. The prose around the marker has to state the conclusion; the calculator is not in the static HTML.

| Marker | Tool |
|---|---|
| `<div id="income-tax-calculator"></div>` | Income tax |
| `<div id="credit-card-rewards-calculator"></div>` | Card rewards |
| `<div id="canadian-retirement-calculator"></div>` | Retirement |
| `<div id="rent-vs-buy-canada"></div>` | Rent versus buy |
| `<div id="mortgage-prepayment-calculator"></div>` | Mortgage prepayment |

The id string must match, including the closing `</div>`. One marker per tool. These are interactive extras. They do not replace the two-to-four static visuals.

## 6. Sourcing

Do not invent a figure, a limit, a rate, a date, or a survey result. If the publisher has not printed it, the sentence is "not published," not a forecast you computed. The 2027 TFSA treatment in `canada-tax-money-changes` is the model: a blank cell stays blank.

Prefer official or primary pages, linked on the sentence that uses the number:

- Canada Revenue Agency and other canada.ca pages
- Department of Finance and the Budget
- ESDC, OSFI, the Bank of Canada, Statistics Canada
- The provincial finance ministry, the provincial pension regulator, or Revenu Québec

Name the document in the link, not "here" or "source". Then repeat the list under `<h2>Sources</h2>`, each item with the **date you checked** ("reviewed October 16, 2026"). The disclaimer states the same as-of date.

A survey or a firm's salary budget is allowed when the post is about that survey. Name the firm, the sample, and the date in the sentence, and put the release in Sources. Do not launder it into "Canadians get a 3 percent raise."

Illustration dollars are labelled in the example and again in the disclaimer. They are not also listed as sources.

On a refresh, open every source again. Change any figure that moved. Delete any figure you can no longer find. Bump `updated` to the Toronto day you checked. A refresh that only changes the footer date is not a refresh.

## 7. Hard rules

- **Byline.** `author` is `Andrew`. Never a surname, initials, or a second person. Do not paste an author-bio block into `content`. The byline is the template, and it links to `/about/`.
- **No social links.** Do not link X, Instagram, YouTube, LinkedIn, Facebook, or any other profile from the post, the footer note, or the byline. The site footer has no social accounts. Add a profile only after a real Canadian Optimizer account exists.
- **No false review.** Do not write "peer-reviewed," "reviewed by a CPA," "reviewed by a CFP," "fact-checked by an accountant," or any designation the byline does not hold. Recommending that the reader consult a CPA, a CFP, or a tax lawyer is required where the decision is theirs. Claiming one of them signed this post is not.
- **Canadian English.** colour, favour, centre, cheque, defence, grey. The brand verb stays "optimize." Use the official program name, not a translation.
- **Canadian currency in visuals.** See Visuals. The hero image has further currency rules in [BLOG-IMAGE-GUIDE.md](BLOG-IMAGE-GUIDE.md).
- **Disclosure.** The template prints the advertising disclosure after the article, pointing at `/disclosure/`. Do not remove it and do not add a second disclosure that disagrees with that page. Affiliate links belong only where the product is part of the decision.
- **No sister brands.** Do not name, link, or compare any sister site or sister brand. The only property a post mentions is Canadian Optimizer, at canadianoptimizer.com.

## 8. SEO

### Title

`title` is the H1. The layout template turns it into the document title `{title} | Canadian Optimizer`. Do not put the brand, or a pipe, in the field.

Aim for **50–60 characters** in `title`, with the primary query in the first words. The brand suffix is 21 characters and may be what a results page cuts. A longer title is acceptable when the topic cannot be named in 60 characters; the query still has to survive in the first clause.

### Meta description

Write `excerpt` as a complete **140–160 character** answer, not a teaser. `toMetaDescription()` in `src/lib/site.ts` returns it unchanged at 160 characters or under. Above that it cuts near 156 characters on a word boundary and may add a period. If you need the cut, you have already lost the ending. The excerpt is also the RSS item and the `llms.txt` line for a key article, so it has to make sense alone.

### Slug

Lowercase words separated by hyphens. No underscores, no year (freshness lives in `updated`), no stop-word chains. Include `canada` when the query needs it to be unambiguous. The slug, the URL, and the hero filename are the same string. It does not change after the post is published.

### Headings

One H1, from the template. `content` starts at H2. H3s sit under an H2. Do not skip to H4 for structure.

Use a question as the H2 when the section answers a question people type. The first lines under that H2 are the short answer, before the nuance. Sections that are a process or a table can use a descriptive H2 instead.

### Excerpt, updated date, dateModified

- First publish: `date` and `updated` are the same day. The header shows Published only.
- A real revision: set `updated` to the Toronto day you rechecked. The header adds `Updated {Month Year}`. The visible label is month and year; the machine dates stay the full day.
- `dateModified` on the `BlogPosting`, Open Graph `modifiedTime`, and the sitemap `lastModified` all use `updated`, falling back to `date`. You do not edit those by hand.

### Internal links

- Link the category hub in the first screen of body copy: `/category/{categorySlug}/`.
- Earning More and Investing posts also link their subcategory hub.
- Link the Taxes article that owns the mechanic instead of re-teaching it.
- Three to six contextual links in the body, on the phrase that needs them, with a trailing slash.
- `<h2>Related reading</h2>` lists the next posts in the cluster. The automatic "Related posts" block under the article is the newest three in the category, which is not the same list. Write the in-content list anyway.

### FAQ JSON-LD

`extractFaq()` in `src/lib/site.ts` builds `FAQPage` schema:

1. It finds the first H2 whose text matches `faq` as a word, or "frequently asked".
2. It reads H3s until the next H2.
3. The H3 text is the question. Everything until the next H3, tags stripped, is the answer.

So the heading is exactly `Frequently asked questions`. Each question is an H3 ending in a question mark. Each answer is one or two short paragraphs that stand alone, because the whole text becomes `acceptedAnswer`. No table, no nested H3, and no link dump as the answer. The next H2, which should be `Sources`, closes the block. Do not use the word "FAQ" in an earlier H2; the extractor stops at the first match. Six to eight questions.

If the extractor finds nothing, the page has no `FAQPage` block. There is no separate FAQ field on the record.

### Image alt

Hero alt equals `title`. In-content images need an alt that states the subject. A chart that already has a caption can use an alt that repeats the finding in a few words.

### Sitemap and feeds

`src/app/sitemap.ts` emits every post at `https://canadianoptimizer.com/blog/{slug}/` with `lastModified` of `updated` or `date`. Category and subcategory hubs are included. You do not add a post URL by hand. Category-hub dates in that file are fixed strings; the post entry is the freshness signal.

`/rss.xml` and `/feed.xml` list every post. The item description is the excerpt. The language is `en-ca`.

## 9. AI search

Write so a person, a Google AI Overview, ChatGPT, Perplexity, and Gemini can lift a correct Canadian answer without the rest of the page. The same habits are what a careful reader skims.

### Query and intent

Pick one primary query and two to four secondary queries before drafting. Name the intent: a definition, a comparison, a sequence, or a decision. The title, the slug, the 40–60 word paragraph, and one H2 carry the primary query. Secondary queries become H2s or FAQs. Do not stuff a second keyword into the short answer.

### The answer block

The 40–60 word paragraph after the hook is the passage an overview should quote. It stands alone: the figure, the publisher, and the year are in that paragraph, not in the previous one. It does not replace the hook. See section 3.

Under each question-style H2, the first one or two sentences are a short answer in the same way. Then show the work.

### Headings people actually ask

H2s and FAQ H3s use the reader's wording ("What is the lifetime capital gains exemption for 2026?"), not an internal label ("Exemption update").

### Quotable passages

A passage that might be quoted includes the number, what it measures, who published it, and the year, in the same or the next sentence. "The limit is $7,000" with the source three sections earlier is how a quote goes stale and unattributed.

### Definitions

On first mention, use the official name and the abbreviation: Tax-Free Savings Account (TFSA). A glossary uses `.term`. Do not define a program by a nickname.

### Extractable structure

Comparisons are tables with real headers. Steps are an ordered list or `.step` blocks. Pros and cons are a table or a list, not a paragraph of "on the other hand." The key-takeaways callout is the labelled list at the top.

### Entities

Use the official name, spelled as the publisher spells it.

| Write | Do not substitute |
|---|---|
| Canada Revenue Agency (CRA) | "the Canadian IRS," "Revenue Canada" |
| Revenu Québec | "Quebec CRA" |
| Quebec Pension Plan (QPP) | CPP, when the worker is in Quebec |
| Tax-Free Savings Account (TFSA) | "Canadian Roth IRA" |
| First Home Savings Account (FHSA) | "the new TFSA" |
| Registered Retirement Savings Plan (RRSP), RRIF, LIRA, LIF | a generic "retirement account" once the type matters |
| Old Age Security (OAS), Guaranteed Income Supplement (GIS), Canada Child Benefit (CCB) | "the pension," "the child credit" |
| Employment Insurance (EI) | "unemployment" |
| A province's own program name | another province's program |

Name provinces in full on first mention. Do not average a federal rule and a Quebec rule into one national sentence.

### Structured data the page emits

You do not paste JSON-LD into `content`. `page.tsx` emits:

| Type | When | Notes |
|---|---|---|
| `BlogPosting` | Always | `headline`, `description` from the excerpt, `datePublished` = `date`, `dateModified` = `updated`, `author` is a Person named Andrew at `https://canadianoptimizer.com/about/#andrew`, publisher is Canadian Optimizer. This is the Article type the site uses. |
| `BreadcrumbList` | Always | Home, category, the subcategory when `subcategory` matches, then the post. |
| `FAQPage` | `extractFaq` returns questions | Depends on the H2/H3 pattern in section 8. |
| `VideoObject` | Valid `youtubeId` **and** `youtubeUploadDate` | Name, thumbnail, and upload date are required. A missing upload date means no video schema, even if the player renders. `youtubeDuration` is included when it is valid ISO 8601. |

`HowTo` is **not** emitted. Real steps belong in an `<ol>` or in `.step` blocks so a reader and a crawler can both see them. Do not paste a HowTo script into the article. Adding HowTo JSON-LD would be a change to the template, not a line in the post.

### Freshness

The header's `Updated {Month Year}`, the year attached to each figure, the "reviewed {date}" on each source, and `dateModified` are the freshness signals. A sentence that uses a number says which year that number belongs to.

### E-E-A-T without invented credentials

Trust comes from primary sources, from saying what is unknown, from the as-of date, and from the byline matching `/about/`. The about page describes Andrew's own implementation and research against CRA and OSFI material. Posts do not upgrade that into a designation, a review board, or a peer-review process.

### Clusters and internal links

A hub states the decision and links the spokes. Spokes link back to the hub and sideways to the next decision. Earning More hubs link the three subcategory hubs and the Taxes article that prices the income. When a new post is a hub or a pillar, add its slug to `KEY_POSTS` in `src/lib/llms.ts`.

### llms.txt

`/llms.txt` is generated by `buildLlmsTxt()` (`src/lib/llms.ts`). It lists categories, subcategories, key pages, the `KEY_POSTS` blurbs (each blurb is that post's excerpt), and every post title. There is no `llms-full.txt`. You do not maintain a parallel markdown file for crawlers. A weak excerpt is a weak line in that file.

`src/app/robots.ts` allows Google, Bing, and the major AI crawlers (GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, Perplexity-User, ClaudeBot, Claude-SearchBot, Google-Extended, and others). Do not noindex a post.

### Crawlability

Posts are static HTML (`output: 'export'`). The article body is in the response, not loaded by a client fetch.

- Do not put the answer, the figures, or the FAQs inside `.collapsible` / `.content`. That block is `display: none` until `ClientBlogContent` toggles it on click. Optional extras only.
- The calculator mounts on the client in place of the marker. The surrounding paragraphs must carry the conclusion.
- Without JavaScript the video is a link to YouTube. The article still has to stand alone.
- The root `<html lang>` is `en`. Open Graph locale is `en_CA`. Write Canadian English anyway; do not add a language tag inside the post.

### SEO and AI-search checks

- [ ] One primary query, named, and present in the title, slug, direct-answer paragraph, and an H2.
- [ ] Secondary queries are H2s or FAQs, not stuffed into the short answer.
- [ ] Title is about 50–60 characters, query first, brand not included. Excerpt is a complete 140–160 character answer.
- [ ] Slug is lowercase, hyphenated, stable, and matches the hero file.
- [ ] One H1 (the template). Content starts at H2. Question headings match how people ask.
- [ ] The 40–60 word answer follows the hook and can be quoted with its figure, source, and year.
- [ ] Each question-style H2 answers in the first lines.
- [ ] Official names are exact. Programs are defined on first use.
- [ ] Comparisons and steps are tables and lists, not only prose.
- [ ] Key takeaways callout is present, after the direct answer.
- [ ] FAQ H2 is `Frequently asked questions`, six to eight H3s, answers short enough for `acceptedAnswer`, and the next heading is an H2 (`Sources`).
- [ ] `updated` equals `date` on first publish, or the real revision day. No future date.
- [ ] Category hub linked. Taxes linked when tax is the mechanic. Related reading lists the cluster, with trailing slashes.
- [ ] Hero alt will be the title, and the title fairly names the image. In-content images have alts.
- [ ] No JSON-LD pasted into the HTML. Video posts set `youtubeUploadDate` if VideoObject should exist.
- [ ] A pillar is added to `KEY_POSTS`. The excerpt can serve as its `llms.txt` blurb.
- [ ] The answer, the figures, and the FAQs are visible HTML, not inside a collapsible or only inside a calculator.
- [ ] Figures in the answer match the sources list and the year in the sentence.

## 10. Engagement and retention

### Hook

The first two or three lines are the `.hook`: the reader's problem, then what they get by staying. One `<span class="highlight">`. It is required, and it is the first element in `.container`. See section 3. Do not open with a scene-setting paragraph, a definition of "tax," or the key-takeaways list.

### Scannable layout

- Paragraphs of two to four sentences.
- A descriptive or question H2 about every 200–300 words.
- Bullets and numbered steps for anything the reader will do.
- Bold the key fact (the figure, the deadline, the name of the form), not a whole sentence and not every other line.

### Table of contents

The site does not generate one. On a long post, after the key takeaways, add a nav. Give each targeted H2 an `id`. A link without an `id` does nothing; the template does not slugify headings.

```html
<nav aria-label="On this page">
    <strong>On this page</strong>
    <ul>
        <li><a href="#confirmed-for-2027">What is already confirmed for 2027?</a></li>
    </ul>
</nav>
```

```html
<h2 id="confirmed-for-2027">What is already confirmed for 2027?</h2>
```

Skip the nav on a short confirmation.

### Visuals through the post

Place each table or chart in the section it answers, after the sentence that introduces it and before the section moves on. A post that dumps four tables above the footer fails this.

### Callouts

| Class | Label on the first `<strong>` | Job |
|---|---|---|
| `.tip-box` | `Pro tip:` | A move that saves a step, still sourced |
| `.warning-box` | `Watch out:` | The specific mistake |
| `.example-box` | `Example:` | Worked numbers or a script |
| `.callout` | `Key takeaways:` or a one-line constraint | The TL;DR, or a rule that governs the section |
| `.did-you-know` | `Did you know:` | One sourced fact a reader can repeat |

The first `<strong>` is what the CSS treats as the label. Keep it short.

### Open loops

End a section with the next decision, in a sentence that matches the next H2. The reader should know why the next heading exists. Do not write "read on" with the answer withheld; the short answer already happened at the top of the section.

### Interactive pieces

Use a calculator marker when that tool is the decision. Use `.checklist` for the actions. Use `.collapsible` only for optional detail. The video, when the YouTube fields are set, is placed by the template just under the hero. You do not position it.

### Links and the next click

Contextual links belong on the phrase the reader might want next, not in a pile. `<h2>Related reading</h2>` is the in-content "read next" list. Under the article the template renders a section titled **Related posts** (up to three cards). Do not add a second widget with a different name.

### Close

The CTA is the last move before the disclaimer: one next step, pointed at a live product (section 12). The disclaimer tells them what the page is not.

### Mobile

The column is 800 pixels, 16 pixels type, with 16 pixels of side padding under 768 pixels. Paragraphs stay short. Tables sit in `.table-wrapper`. `.summary-grid` and flowchart branches collapse to one column. Bar labels stay tiny on purpose. Do not set a fixed pixel width on an image or a table.

### What to watch in GA4

The site loads GA4 `G-F9J729SEZS` from `src/app/layout.tsx` with the default config and no custom events. In the GA4 property, for the post's URL, watch:

- **Average engagement time.** A long page with a few seconds of engagement means the hook or the answer failed.
- **Scroll.** The template does not send its own scroll event. If enhanced measurement is on, use GA4's built-in scroll (the 90 percent event). A post people do not scroll never reached the example or the checklist.
- **Next-page clicks.** In path exploration, see what opens after the post: a related post, the category hub, or `/ebooks/tax-guide/`. A high exit with no next page means the internal links and the CTA are not doing their job.

Do not add event snippets to a post to manufacture these numbers.

### Engagement checks

- [ ] Hook is the first element, two or three lines, problem plus payoff, one highlight.
- [ ] Direct answer and key takeaways follow the hook. They do not replace it.
- [ ] Paragraphs are two to four sentences. An H2 lands about every 200–300 words.
- [ ] Key facts are bold. Steps and groups are lists.
- [ ] A long post has an "On this page" nav whose hrefs match H2 ids.
- [ ] Visuals sit in the section they explain.
- [ ] Pro tip, Watch out, and Example callouts use the classes above.
- [ ] Each section hands the reader a reason to enter the next one.
- [ ] A matching calculator or checklist is present where the decision needs one.
- [ ] A published video uses the YouTube fields so the player sits under the hero.
- [ ] Related reading and the category hub are real, specific links.
- [ ] The CTA is one next step, then the disclaimer.
- [ ] Nothing requires a wide screen: tables scroll, paragraphs stay short.

## 11. YouTube-ready

Write every post so it can be read aloud as the video.

- **Hook.** The `.hook` is the cold open: problem, then payoff, in two or three lines.
- **Chapters.** The H2s are the chapters, in the order a viewer would need them. Question H2s become the chapter titles.
- **One memorable chart.** Pick one table or chart that carries the post. The sentence under it is the line you say while it is on screen, including the number and the year.
- **One Short.** One sourced fact, already in a `.did-you-know` or the first takeaway, that a viewer can repeat in a sentence. It includes the year.

When the video is published, set the fields on the record. Do not embed an iframe in `content`.

```ts
{
  youtubeId: 'abc123DEF45',
  youtubeTitle: 'Same topic, as uploaded',
  youtubeUploadDate: '2026-10-16',
  youtubeDuration: 'PT8M42S',
}
```

`youtubeId` must match `^[A-Za-z0-9_-]{11}$`. `youtubeUploadDate` must be ISO 8601 or VideoObject is omitted. The player uses the privacy-enhanced embed after a click and is a plain YouTube link without JavaScript.

## 12. Monetization

Point a CTA only at a product that exists and works today.

The live ebook is **How To Reduce Your Taxes & Maximize Your Refund**, $49 CAD, at `/ebooks/tax-guide/`. The button names the price:

```html
<a href="/ebooks/tax-guide/" class="cta-button">Get the 2026 Tax Guide — $49 CAD</a>
```

Do not point the button at `/ebooks/` and call it a free download. Older posts do that. New posts do not.

The homepage block at `#newsletter` ("5-Day Optimization Starter Guide") is a form with no action and no provider. It does not deliver a guide. Do not send a post's email CTA there, and do not write "join thousands," until a signup actually sends the thing you promised. When a real email product exists, link that URL and no other.

Affiliate or advertising links are allowed when the product is part of the decision the post is about (a brokerage in a brokerage comparison, a card in a card comparison). Say what you give up, not only the bonus. The template's disclosure under the article is the disclosure. Match `/disclosure/`: a commission does not raise the price, and a link is not a promise the product fits.

No sister brands, in the CTA or anywhere else.

## 13. Pre-publish QA

Structure and record

- [ ] Record fields match section 2. `author` is `Andrew`. Category pair is from the table. Earning More has a real `subcategory`.
- [ ] `date` and `updated` are `YYYY-MM-DD` and not after today in Toronto. The footer note matches them.
- [ ] Slug, URL, and `public/images/blog/{slug}.png` agree. The hero follows [BLOG-IMAGE-GUIDE.md](BLOG-IMAGE-GUIDE.md).
- [ ] Hook is first. Direct answer (40–60 words) and the key-takeaways callout follow it, in that order.
- [ ] No `<h1>` in the content. No hand-authored hero image, iframe, or video marker.

Depth

- [ ] The post would beat the current top Canadian results, or it is honestly a short confirmation.
- [ ] Prose is about 2,000–3,000 words where the topic supports it, with no section added only to get there.
- [ ] Worked Canadian math, steps, a script or template where someone has to speak, a checklist, provincial differences, a decision framework, common mistakes, ranges, tools with pros and cons, and a line on professional help.
- [ ] Six to eight FAQs.

Visuals and sources

- [ ] Two to four or more static visuals, spaced, using the classes in section 5, with the finding also in text.
- [ ] Currency in visuals is Canadian, or explicitly labelled.
- [ ] Every non-example figure has an inline primary link and a Sources entry with a reviewed date.
- [ ] Examples are labelled as examples. Unpublished numbers are described as unpublished.

Hard rules

- [ ] No surname, no social profile, no "peer-reviewed," no "reviewed by a CPA/CFP."
- [ ] Canadian spelling. Official program names.
- [ ] No sister brand.
- [ ] Disclaimer is education, not advice, and names the as-of date.

SEO, AI search, and engagement

- [ ] Every box in the section 9 checklist.
- [ ] Every box in the section 10 checklist.
- [ ] The post can be read as a video: hook, chapter H2s, one chart to hold on screen, one Short-worthy fact.
- [ ] CTA goes to `/ebooks/tax-guide/` or to another product that is actually live. No email CTA until a signup delivers.

Machine

- [ ] The date guard will not throw.
- [ ] A pillar slug is in `KEY_POSTS` if it belongs in the key-article list.
- [ ] Internal links use a trailing slash and resolve.

## 14. Refresh checklist

- [ ] Open every source in the Sources list. Note the new reviewed date.
- [ ] Update figures that moved. Remove figures you can no longer find. Do not leave last year's limit in this year's sentence.
- [ ] Re-read the hook, the 40–60 word answer, the key takeaways, and the FAQ answers against those figures.
- [ ] Set `updated` to the Toronto day you checked. Leave `date` alone. Match the footer note and the disclaimer.
- [ ] Do not change the slug.
- [ ] If the hero file changed but kept its name, bump `BLOG_HERO_VERSION` in `src/lib/site.ts`.
- [ ] If the excerpt changed, the meta description, the RSS item, and the `llms.txt` blurb change with it on the next build.
- [ ] Sitemap `lastModified` and `dateModified` follow `updated` on their own. You do not edit `sitemap.ts` for a normal refresh.
- [ ] Re-check the YouTube title and description if the video still quotes an old figure.
