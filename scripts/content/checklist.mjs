#!/usr/bin/env node
// Pre-publish checklist (content strategy §9.6, 20 items). See CONTENT-QA.md.
//
//   node scripts/content/checklist.mjs --date 2026-11-16          every post dated that day
//   node scripts/content/checklist.mjs --slugs a,b,c [--out out]  named posts
//   options: --out <dir>       a built export to check rendered HTML (schema, canonical, sitemap)
//            --report <file>   write the markdown report there as well
//            --verify-date     date the figures must be re-verified on (default: today, Toronto)
//            --sisters <file>  JSON list of {site, slug, title} from sister sites (item 15)
//
// Exit code 1 when any post FAILS an item. WARN never blocks; MANUAL items need an agent pass
// recorded in content/briefs/<slug>.json under "agentChecks".
import fs from 'node:fs';
import path from 'node:path';
import sizeOf from './image-size.mjs';
import { checkFigures } from './figures.mjs';
import {
  BRIEFS_DIR,
  ROOT,
  bodyHtml,
  hostOf,
  links,
  loadSite,
  overlap,
  parseArgs,
  readJson,
  shingles,
  sourcesHtml,
  stripTags,
  todayToronto,
  wordCount,
} from './lib.mjs';

// Minimum reader-facing words by family (§3b typical ranges; floors, not targets).
export const FAMILY_MIN_WORDS = {
  pillar: 4000,
  core: 2000,
  vs: 1800,
  review: 1800,
  'best-of': 2500,
  province: 1500,
  scenario: 1500,
  forms: 1500,
  'how-to': 1500,
  qa: 1200,
  glossary: 800,
  year: 1200,
  tools: 1200,
  data: 1500,
};
const MONEY_FAMILIES = new Set(['review', 'best-of', 'tools']);
const PROGRAMMATIC = new Set(['province', 'scenario', 'forms', 'glossary']);

// US spellings that have a Canadian form. Whole words only; "program" and "-ize" are fine in en-CA.
const US_SPELLINGS = [
  'color', 'colors', 'colored', 'favor', 'favors', 'favorite', 'favorable', 'honor', 'honors', 'labor', 'neighbor',
  'neighbors', 'neighborhood', 'center', 'centers', 'centered', 'theater', 'defense', 'offense', 'gray', 'traveler',
  'travelers', 'traveling', 'traveled', 'canceled', 'canceling', 'behavior', 'behaviors', 'savior', 'catalog',
  'fulfill', 'enrollment', 'enrolled?', 'counselor', 'jewelry', 'analog', 'humor', 'rumor', 'endeavor', 'harbor',
  'odor', 'vapor', 'meter', 'meters', 'liter', 'liters', 'paycheck', 'paychecks',
];
// Phrases that claim a review, test or experience nobody did (item 4, item 16).
const BANNED = [
  /reviewed by (a|an|our)?\s*(cpa|cfp|accountant|lawyer|expert|professional|advisor)/i,
  /peer[- ]reviewed/i,
  /fact[- ]checked by/i,
  /\b(we|I) (tested|tried|used) (it|this|the card|the account)/i,
  /in my (experience|practice)/i,
  /\bas an? (cpa|cfp|accountant|financial planner)\b/i,
  /\bCarrothers\b/,
];

function loadBrief(slug) {
  return readJson(path.join(BRIEFS_DIR, `${slug}.json`));
}

function result(id, name, status, detail = '') {
  return { id, name, status, detail };
}

function firstParagraphAfterHook(content) {
  const hookEnd = content.search(/<div class="hook">[\s\S]*?<\/div>/i);
  const after = hookEnd >= 0 ? content.slice(content.indexOf('</div>', hookEnd) + 6) : content;
  const m = after.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  return m ? stripTags(m[1]) : '';
}

function questionH2Answered(content) {
  const re = /<h2[^>]*>([\s\S]*?)<\/h2>\s*([\s\S]{0,40})/gi;
  const misses = [];
  let m;
  while ((m = re.exec(content))) {
    const heading = stripTags(m[1]);
    if (heading.endsWith('?') && !/^\s*<p[\s>]/i.test(m[2])) misses.push(heading);
  }
  return misses;
}

function renderedPath(outDir, slug) {
  return path.join(outDir, 'blog', slug, 'index.html');
}

function jsonLd(html) {
  const out = [];
  const re = /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html))) {
    try {
      const data = JSON.parse(m[1]);
      for (const item of Array.isArray(data) ? data : [data]) out.push(item);
    } catch {
      /* ignore */
    }
  }
  return out;
}

export async function runChecklist({ slugs, date, outDir, verifyDate, sisters }) {
  const site = await loadSite();
  const today = todayToronto();
  const targets = site.all.filter((p) => (slugs ? slugs.includes(p.slug) : p.date === date));
  if (targets.length === 0) throw new Error('No posts matched.');
  const allSlugs = new Set(site.all.map((p) => p.slug));
  const validHubs = new Set(
    site.CATEGORIES.flatMap((c) => [`/category/${c.slug}/`, ...(c.subcategories ?? []).map((s) => `/category/${c.slug}/${s.slug}/`)])
  );
  const sitemap = outDir && fs.existsSync(path.join(outDir, 'sitemap.xml')) ? fs.readFileSync(path.join(outDir, 'sitemap.xml'), 'utf8') : '';
  const pilots = readJson(path.join(ROOT, 'content', 'pilots.json'), { families: {} });
  const offerIds = new Map(site.OFFERS.map((o) => [o.id, o]));
  const productSlugs = new Set((site.ebooks.ALL_PRODUCTS ?? []).map((p) => p.slug));
  const reports = [];

  // Inbound links across every post (published + scheduled).
  const inbound = new Map();
  for (const p of site.all) {
    for (const l of links(p.content)) {
      const m = l.href.match(/^\/blog\/([a-z0-9-]+)\/?(?:#.*)?$/);
      if (m && m[1] !== p.slug) inbound.set(m[1], new Set([...(inbound.get(m[1]) ?? []), p.slug]));
    }
  }
  const shingleCache = new Map();
  const bodyShingles = (p) => {
    if (!shingleCache.has(p.slug)) shingleCache.set(p.slug, shingles(stripTags(bodyHtml(p.content))));
    return shingleCache.get(p.slug);
  };

  for (const post of targets) {
    const brief = loadBrief(post.slug);
    const r = [];
    const content = post.content;
    const body = bodyHtml(content);
    const bodyText = stripTags(body);
    const words = wordCount(bodyText);
    const family = brief?.family;
    const agent = brief?.agentChecks ?? {};
    const manual = (id, name) => {
      const a = agent[String(id)];
      return a?.pass === true
        ? result(id, name, 'PASS', `agent: ${a.by ?? 'unnamed'} ${a.on ?? ''} ${a.note ?? ''}`.trim())
        : a?.pass === false
          ? result(id, name, 'FAIL', `agent: ${a.note ?? ''}`)
          : result(id, name, 'MANUAL', 'needs the agent pass recorded in the brief');
    };

    if (!brief) r.push(result(0, 'Brief exists', 'FAIL', `content/briefs/${post.slug}.json missing`));

    // 1 Information gain visible
    {
      const m = content.match(/<[^>]+data-info-gain[^>]*>([\s\S]*?)<\/(p|div|aside)>/i);
      const text = m ? stripTags(m[1]) : '';
      r.push(
        result(1, 'Information gain visible', m && text.length >= 40 && brief?.infoGain ? 'PASS' : 'FAIL', m ? `"${text.slice(0, 90)}…"` : 'no element with data-info-gain')
      );
    }
    // 2 Direct answer + answers under question H2s
    {
      const answer = firstParagraphAfterHook(content);
      const n = wordCount(answer);
      const misses = questionH2Answered(content);
      const ok = n >= 35 && n <= 75 && misses.length === 0;
      r.push(result(2, 'Answer first', ok ? 'PASS' : 'FAIL', `answer ${n} words; ${misses.length} question H2s not opened by a paragraph${misses.length ? `: ${misses.slice(0, 2).join(' | ')}` : ''}`));
    }
    // 3 Figures sourced, dated, re-verified (figures log)
    {
      const res = await checkFigures(post, { date: verifyDate ?? today });
      const srcBlock = sourcesHtml(content);
      const dated = (srcBlock.match(/reviewed|checked|as of/gi) ?? []).length;
      const ok = res.ok && dated >= links(srcBlock).length && links(srcBlock).length > 0;
      r.push(result(3, 'Figures sourced and re-verified', ok ? 'PASS' : 'FAIL', `${JSON.stringify(res.stats)}; ${res.problems.slice(0, 3).join(' | ')}`));
    }
    // 4 No invented quotes/experience/tests/review claims
    {
      const hits = BANNED.filter((re) => re.test(content)).map((re) => re.source);
      const firstPerson = (bodyText.match(/\bI(?:'m|'ve|'d)?\b(?![-.])/g) ?? []).length;
      const quotes = (body.match(/<blockquote/gi) ?? []).length;
      const status = hits.length ? 'FAIL' : firstPerson > 0 || quotes > 0 ? 'WARN' : 'PASS';
      r.push(result(4, 'No invented claims', status, hits.length ? hits.join(', ') : `${firstPerson} first-person "I", ${quotes} blockquotes (check each is Andrew's own words or an official quote)`));
    }
    // 5 Clone/similarity gate vs every other post
    {
      const mine = bodyShingles(post);
      let worst = { slug: '', score: 0 };
      for (const other of site.all) {
        if (other.slug === post.slug) continue;
        const score = overlap(mine, bodyShingles(other));
        if (score > worst.score) worst = { slug: other.slug, score };
      }
      r.push(result(5, 'Not a clone (5-gram overlap < 30%)', worst.score < 0.3 ? 'PASS' : 'FAIL', `closest ${worst.slug} ${(worst.score * 100).toFixed(1)}%`));
    }
    // 6 Money pages: evidence-first format
    {
      const isMoney = brief?.money === true || MONEY_FAMILIES.has(family);
      if (!isMoney) r.push(result(6, 'Evidence-first money page', 'N/A', `family ${family ?? '?'}`));
      else {
        const method = /<h[23][^>]*>[^<]*how we (picked|compared|ranked|chose|calculated)/i.test(content);
        const markers = (content.match(/data-offer="/g) ?? []).length;
        const picks = (content.match(/data-pick=/g) ?? []).length;
        const ok = method && (picks === 0 || markers <= picks) && !/data-offer-sticky/.test(content);
        r.push(result(6, 'Evidence-first money page', ok ? 'PASS' : 'FAIL', `method block ${method ? 'yes' : 'no'}; ${markers} offer markers, ${picks} picks`));
      }
    }
    // 7 Affiliate disclosure + rel=sponsored + offer ids valid
    {
      const problems = [];
      const markers = [...content.matchAll(/data-offer="([a-z0-9-]+)"/g)].map((m) => m[1]);
      for (const id of markers) if (!offerIds.has(id)) problems.push(`unknown offer ${id}`);
      const trackingHosts = new Set(site.OFFERS.filter((o) => o.trackingUrl).map((o) => hostOf(o.trackingUrl)));
      const affLinks = links(content).filter((l) => /sponsored/.test(l.rel) || trackingHosts.has(hostOf(l.href)));
      for (const l of affLinks) if (!/sponsored/.test(l.rel)) problems.push(`affiliate link without rel=sponsored: ${l.href}`);
      if (affLinks.length) {
        const disc = content.search(/data-affiliate-disclosure/);
        if (disc < 0 || disc > affLinks[0].index) problems.push('hand-written affiliate link has no disclosure line above it');
      }
      const live = markers.filter((id) => offerIds.get(id)?.status === 'active').length;
      r.push(result(7, 'Affiliate disclosure and rel=sponsored', problems.length ? 'FAIL' : 'PASS', problems.length ? problems.join('; ') : `${markers.length} offer markers (${live} live; renderer adds the disclosure above the first), ${affLinks.length} hand-written affiliate links`));
    }
    // 8 NFA on investing; tax pages name the tax year and link CRA
    {
      const issues = [];
      if (post.categorySlug === 'investing' && !/not (financial|investment) advice|general education/i.test(content)) issues.push('no not-financial-advice line');
      if (post.categorySlug === 'taxes') {
        if (!/\b20\d\d\b[^.]{0,40}(tax year|return)|(tax year|return)[^.]{0,40}\b20\d\d\b/i.test(stripTags(content))) issues.push('tax year not named');
        if (!links(content).some((l) => /canada\.ca\/.*revenue-agency|canada\.ca\/en\/revenue-agency|cra-arc\.gc\.ca/.test(l.href))) issues.push('no CRA link');
      }
      if (!/general education|not (financial|tax|legal|investment) advice/i.test(content)) issues.push('no education-not-advice disclaimer');
      r.push(result(8, 'Advice and tax-year lines', issues.length ? 'FAIL' : 'PASS', issues.join('; ')));
    }
    // 9 Title and slug
    {
      const t = post.title;
      const slugOk = /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug) && !/\b20\d\d\b/.test(post.slug);
      const q = (brief?.targetQuery ?? '').toLowerCase().split(/\s+/).filter((w) => w.length > 3 && !['canada', 'what', 'when', 'with', 'should'].includes(w));
      const hit = q.filter((w) => t.toLowerCase().includes(w) || post.slug.includes(w)).length;
      const ok = slugOk && t.length <= 75 && !/\|/.test(t) && (q.length === 0 || hit / q.length >= 0.5);
      r.push(result(9, 'Natural title and slug', ok ? 'PASS' : 'FAIL', `${t.length} chars; query words matched ${hit}/${q.length}`));
    }
    // 10, 11 Rendered schema / canonical / sitemap / noindex
    if (outDir) {
      const file = renderedPath(outDir, post.slug);
      if (!fs.existsSync(file)) {
        r.push(result(10, 'Article schema', 'FAIL', `${path.relative(ROOT, file)} not built (scheduled? build with CO_PREVIEW_SCHEDULED=1)`));
        r.push(result(11, 'Canonical, sitemap, indexable', 'FAIL', 'not built'));
      } else {
        const html = fs.readFileSync(file, 'utf8');
        const ld = jsonLd(html);
        const art = ld.find((d) => d['@type'] === 'BlogPosting' || d['@type'] === 'Article');
        const okArt =
          art &&
          art.author?.['@type'] === 'Person' &&
          art.author?.name === 'Andrew' &&
          /\/about\/$/.test(art.author?.url ?? '') &&
          art.datePublished === post.date &&
          art.dateModified === (post.updated || post.date) &&
          art.publisher?.['@type'] === 'Organization' &&
          art.headline === post.title;
        const crumbs = ld.find((d) => d['@type'] === 'BreadcrumbList');
        const howto = ld.some((d) => d['@type'] === 'HowTo');
        r.push(result(10, 'Article schema', okArt && crumbs && !howto ? 'PASS' : 'FAIL', `BlogPosting ${okArt ? 'ok' : 'bad'}; BreadcrumbList ${crumbs ? crumbs.itemListElement.length + ' items' : 'missing'}; HowTo ${howto ? 'present' : 'none'}`));
        const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/) ?? [])[1];
        const noindex = /<meta name="robots" content="[^"]*noindex/.test(html);
        const inMap = sitemap.includes(`/blog/${post.slug}/<`);
        const ok11 = canonical === `https://canadianoptimizer.com/blog/${post.slug}/` && !noindex && inMap;
        r.push(result(11, 'Canonical, sitemap, indexable', ok11 ? 'PASS' : 'FAIL', `canonical ${canonical === undefined ? 'missing' : 'self'}; sitemap ${inMap ? 'yes' : 'no'}; noindex ${noindex}`));
      }
    } else {
      r.push(result(10, 'Article schema', 'SKIP', 'pass --out <built export>'));
      r.push(result(11, 'Canonical, sitemap, indexable', 'SKIP', 'pass --out <built export>'));
    }
    // 12 Hub link in first 150 words; ≥3 internal out; ≥3 inbound; links resolve
    {
      const first150 = (() => {
        let count = 0;
        let cut = content.length;
        const re = /<[^>]+>|[^<]+/g;
        let m;
        while ((m = re.exec(content))) {
          if (!m[0].startsWith('<')) {
            count += wordCount(m[0]);
            if (count >= 150) {
              cut = m.index + m[0].length;
              break;
            }
          }
        }
        return content.slice(0, cut);
      })();
      const hubHref = post.subcategory ? `/category/${post.categorySlug}/${post.subcategory}/` : `/category/${post.categorySlug}/`;
      const hubEarly = links(first150).some((l) => l.href === hubHref);
      const internal = links(body).filter((l) => /^\/blog\/[a-z0-9-]+\/$/.test(l.href.split('#')[0]));
      const outSlugs = new Set(internal.map((l) => l.href.split('/')[2]));
      const broken = links(content)
        .filter((l) => l.href.startsWith('/'))
        .filter((l) => {
          const h = l.href.split('#')[0];
          const m = h.match(/^\/blog\/([a-z0-9-]+)\/$/);
          if (m) return !allSlugs.has(m[1]);
          if (h.startsWith('/category/')) return !validHubs.has(h);
          return !/^\/(ebooks\/[a-z0-9-]+\/|ebooks\/|about\/|contact\/|disclosure\/|disclaimer\/|privacy\/|terms\/|how-we-use-ai\/|blog\/)$/.test(h);
        })
        .map((l) => l.href);
      const ins = inbound.get(post.slug)?.size ?? 0;
      const ok = hubEarly && outSlugs.size >= 3 && broken.length === 0 && ins >= 3;
      r.push(result(12, 'Internal links (hub early, 3 out, 3 in)', ok ? 'PASS' : 'FAIL', `hub ${hubHref} in first 150 words: ${hubEarly ? 'yes' : 'no'}; ${outSlugs.size} posts linked; ${ins} posts link here; broken: ${broken.join(', ') || 'none'}`));
    }
    // 13 Images
    {
      const issues = [];
      const hero = path.join(ROOT, 'public', post.image.replace(/^\//, ''));
      if (!fs.existsSync(hero)) issues.push(`hero ${post.image} missing`);
      else {
        const buf = fs.readFileSync(hero);
        const kb = Math.round(buf.length / 1024);
        const dim = sizeOf(buf);
        if (kb > 400) issues.push(`hero ${kb} KB > 400`);
        if (!dim || dim.width !== 1024 || dim.height !== 1024) issues.push(`hero ${dim ? `${dim.width}x${dim.height}` : 'unreadable'}, want 1024x1024`);
        if (!/DigitalSourceType|digitalsourcetype|trainedAlgorithmicMedia/.test(buf.toString('latin1'))) issues.push('no IPTC digital-source metadata');
      }
      for (const img of body.match(/<img [^>]*>/gi) ?? []) {
        if (!/alt="[^"]{5,}"/.test(img)) issues.push('in-content image without real alt');
        if (!/width=/.test(img) || !/height=/.test(img)) issues.push('in-content image without width/height');
      }
      r.push(result(13, 'Images', issues.length ? 'FAIL' : 'PASS', issues.join('; ')));
    }
    // 14 Core Web Vitals
    r.push(result(14, 'Core Web Vitals budget', 'MANUAL', 'Lighthouse is not run by this script; the post adds no scripts or embeds beyond the template'));
    // 15 Not a near-duplicate of this site or sister sites
    {
      const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
      const dupTitle = site.all.find((p) => p.slug !== post.slug && norm(p.title) === norm(post.title));
      const tokens = (s) => new Set(s.split('-').filter((w) => w.length > 2 && w !== 'canada'));
      const jac = (a, b) => {
        const A = tokens(a);
        const B = tokens(b);
        const inter = [...A].filter((w) => B.has(w)).length;
        return inter / Math.max(1, new Set([...A, ...B]).size);
      };
      const sisterHits = (sisters ?? []).filter((s) => s.slug === post.slug || norm(s.title) === norm(post.title) || jac(s.slug, post.slug) >= 0.75);
      const status = dupTitle || sisterHits.length ? 'FAIL' : sisters ? 'PASS' : 'WARN';
      r.push(result(15, 'No duplicate here or on sister sites', status, dupTitle ? `same title as ${dupTitle.slug}` : sisterHits.length ? sisterHits.map((s) => `${s.site}/${s.slug}`).join(', ') : sisters ? `checked against ${sisters.length} sister-site URLs` : 'sister-site list not supplied (--sisters)'));
    }
    // 16 Byline
    {
      const footer = (content.match(/<div class="footer-note">([\s\S]*?)<\/div>/) ?? [])[1] ?? '';
      const ok = post.author === 'Andrew' && /Author: Andrew\b/.test(footer) && !/Carrothers|\bCPA\b|\bCFP\b|\bCFA\b/.test(footer);
      r.push(result(16, 'Byline "Andrew" only', ok ? 'PASS' : 'FAIL', `author "${post.author}"; footer "${stripTags(footer).slice(0, 80)}"`));
    }
    // 17 /how-we-use-ai/ exists and is linked from the footer and author page
    {
      const page = fs.existsSync(path.join(ROOT, 'src/app/how-we-use-ai/page.tsx'));
      const footer = fs.readFileSync(path.join(ROOT, 'src/components/layout/Footer.tsx'), 'utf8').includes('/how-we-use-ai/');
      const about = fs.readFileSync(path.join(ROOT, 'src/app/about/page.tsx'), 'utf8').includes('/how-we-use-ai/');
      r.push(result(17, '/how-we-use-ai/ live and linked', page && footer && about ? 'PASS' : 'FAIL', `page ${page}, footer ${footer}, about ${about}`));
    }
    // 18 Length
    {
      const min = FAMILY_MIN_WORDS[family] ?? 1500;
      r.push(result(18, `Length ≥ ${min} words (${family ?? 'unknown family'})`, words >= min ? 'PASS' : 'FAIL', `${words} words before Sources`));
    }
    // 19 en-CA spelling, date guard, ebook CTA live
    {
      const issues = [];
      const lower = ` ${bodyText.toLowerCase()} `;
      const us = US_SPELLINGS.filter((w) => new RegExp(`[^a-z]${w}[^a-z]`).test(lower));
      if (us.length) issues.push(`US spelling: ${us.join(', ')}`);
      if (post.date > today && post.updated !== post.date) issues.push('scheduled post with updated ≠ date');
      if (post.date <= today && post.updated > today) issues.push('updated in the future');
      const footer = stripTags((content.match(/<div class="footer-note">([\s\S]*?)<\/div>/) ?? [])[1] ?? '');
      const pub = new Date(`${post.date}T12:00:00`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
      if (!footer.includes(pub)) issues.push(`footer note does not say "Published: ${pub}"`);
      const ebook = site.ebooks.ebookForPost?.(post.categorySlug, post.subcategory);
      if (ebook && !productSlugs.has(ebook)) issues.push(`ebook ${ebook} has no sales page`);
      for (const l of links(content).filter((x) => /^\/ebooks\/[a-z0-9-]+\/$/.test(x.href))) {
        if (!productSlugs.has(l.href.split('/')[2])) issues.push(`links ebook page that does not exist: ${l.href}`);
      }
      r.push(result(19, 'en-CA, date guard, live ebook', issues.length ? 'FAIL' : 'PASS', issues.join('; ') || `end CTA: ${ebook ?? 'none (category has no book)'}`));
    }
    // 20 Programmatic family pilot gate
    {
      if (!PROGRAMMATIC.has(family)) r.push(result(20, 'Pilot gate', 'N/A', `family ${family ?? '?'}`));
      else {
        const fam = pilots.families?.[family] ?? { pilots: [], passed: false };
        const ok = fam.passed || (fam.pilots ?? []).includes(post.slug);
        r.push(result(20, 'Pilot gate', ok ? 'PASS' : 'FAIL', fam.passed ? 'family passed review' : `pilot list: ${(fam.pilots ?? []).length}/5${ok ? '' : ' (not on it)'}`));
      }
    }
    // Agent-only parts of items 2, 6 and 9 are recorded in the brief.
    for (const [id, name] of [
      ['2a', 'Agent: answers read as answers'],
      ['4a', 'Agent: no invented quotes or experience'],
      ['6a', 'Agent: picks by buyer type, one CTA each'],
    ]) {
      if (id === '6a' && !(brief?.money === true || MONEY_FAMILIES.has(family))) continue;
      r.push(manual(id, name));
    }

    const fails = r.filter((x) => x.status === 'FAIL').length;
    const manuals = r.filter((x) => x.status === 'MANUAL').length;
    reports.push({ post, brief, words, results: r, verdict: fails ? 'HOLD' : manuals ? 'PASS (manual items open)' : 'PASS' });
  }
  return reports;
}

export function toMarkdown(reports) {
  const lines = [];
  lines.push('| Post | Family | Words | Verdict | Fails |', '|---|---|---|---|---|');
  for (const rep of reports) {
    const fails = rep.results.filter((x) => x.status === 'FAIL').map((x) => x.id).join(', ') || '—';
    lines.push(`| \`${rep.post.slug}\` | ${rep.brief?.family ?? '?'} | ${rep.words} | ${rep.verdict} | ${fails} |`);
  }
  for (const rep of reports) {
    lines.push('', `### ${rep.post.title} (\`${rep.post.slug}\`, ${rep.post.date})`, '', '| # | Check | Result | Detail |', '|---|---|---|---|');
    for (const x of rep.results) lines.push(`| ${x.id} | ${x.name} | ${x.status} | ${String(x.detail).replace(/\|/g, '\\|').replace(/\n/g, ' ')} |`);
  }
  return lines.join('\n');
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname);
if (isMain) {
  const args = parseArgs(process.argv.slice(2));
  if (!args.date && !args.slugs) {
    console.error('usage: checklist.mjs (--date YYYY-MM-DD | --slugs a,b) [--out out] [--report file] [--verify-date YYYY-MM-DD] [--sisters file]');
    process.exit(2);
  }
  const sisters = args.sisters ? readJson(path.resolve(args.sisters), []) : undefined;
  const reports = await runChecklist({
    slugs: args.slugs ? String(args.slugs).split(',') : undefined,
    date: args.date,
    outDir: args.out ? path.resolve(args.out) : undefined,
    verifyDate: args['verify-date'],
    sisters,
  });
  const md = toMarkdown(reports);
  console.log(md);
  if (args.report) fs.writeFileSync(path.resolve(args.report), `${md}\n`);
  if (reports.some((r) => r.verdict === 'HOLD')) process.exitCode = 1;
}
