#!/usr/bin/env node
// Figures log: extract every number in a post with its cited source, then check the log
// after a separate re-verification pass. See CONTENT-QA.md, "Number verification".
//
//   node scripts/content/figures.mjs extract <slug>   create/update content/figures/<slug>.json
//   node scripts/content/figures.mjs sheet <slug>     print the re-check sheet, grouped by source
//   node scripts/content/figures.mjs check <slug> [--date YYYY-MM-DD]
//
// `check` exits 1 when any number in the post has no log row, a sourced row is not verified
// as a match on the check date, a source is missing from the Sources list, or a row is
// still unclassified.
import path from 'node:path';
import crypto from 'node:crypto';
import {
  FIGURES_DIR,
  blocks,
  bodyHtml,
  hostOf,
  links,
  loadSite,
  normalize,
  parseArgs,
  readJson,
  sentences,
  sourcesHtml,
  todayToronto,
  writeJson,
} from './lib.mjs';

const MONTHS = 'January|February|March|April|May|June|July|August|September|October|November|December';
// Money, percentages, dates ("April 30, 2027" / "April 30"), and bare numbers with 2+ digits or decimals.
const NUMBER_RE = new RegExp(
  [
    String.raw`\$\s?\d[\d,]*(?:\.\d+)?(?:\s?(?:million|billion|thousand|k)\b)?`,
    String.raw`\b\d[\d,]*(?:\.\d+)?\s?(?:%|percent\b)`,
    String.raw`\b(?:${MONTHS})\s\d{1,2}(?!\d)(?:,\s\d{4})?`,
    String.raw`\b\d[\d,]*\.\d+\b`,
    String.raw`\b\d{2,}[\d,]*\b`,
  ].join('|'),
  'g'
);

const YEAR = /^(19[5-9]\d|20[0-4]\d)$/;

function isIdentifier(text, index, match) {
  const before = text.slice(Math.max(0, index - 14), index).toLowerCase();
  // Form lines, form numbers, sections, ages handled as facts elsewhere, page refs.
  if (/(line|lines|form|section|subsection|schedule|page|chapter|step|bill|item|#)\s*$/.test(before)) return true;
  if (/[a-z]-?$/i.test(text.slice(Math.max(0, index - 1), index))) return true; // T2125, RC4111
  if (/^\d+$/.test(match) && /-$/.test(text.slice(index - 1, index))) return true;
  return false;
}

export function extractNumbers(content) {
  const html = bodyHtml(content);
  const found = [];
  for (const block of blocks(html)) {
    const blockLinks = links(block.raw)
      .map((l) => l.href)
      .filter((href) => /^https?:\/\//.test(href));
    const isExample = /example-box|example-calculation|illustrat|example:/i.test(block.raw);
    for (const sentence of sentences(block.text)) {
      let m;
      NUMBER_RE.lastIndex = 0;
      while ((m = NUMBER_RE.exec(sentence))) {
        const value = m[0].trim();
        const bare = value.replace(/[,$\s]/g, '');
        if (YEAR.test(bare) && !value.startsWith('$')) continue;
        if (isIdentifier(sentence, m.index, value)) continue;
        found.push({
          value,
          context: sentence.length > 400 ? `${sentence.slice(0, 400)}…` : sentence,
          blockLinks: [...new Set(blockLinks)],
          inExample: isExample,
        });
      }
    }
  }
  return found;
}

export function figureKey(value, context) {
  return crypto.createHash('sha1').update(`${value}|${normalize(context).slice(0, 160)}`).digest('hex').slice(0, 12);
}

function logPath(slug) {
  return path.join(FIGURES_DIR, `${slug}.json`);
}

async function findPost(slug) {
  const site = await loadSite();
  const post = site.all.find((p) => p.slug === slug);
  if (!post) throw new Error(`No post with slug "${slug}".`);
  return post;
}

async function extract(slug) {
  const post = await findPost(slug);
  const file = logPath(slug);
  const log = readJson(file, { slug, publishDate: post.date, figures: [] });
  const existing = new Map(log.figures.map((f) => [f.id, f]));
  const next = [];
  for (const n of extractNumbers(post.content)) {
    const id = figureKey(n.value, n.context);
    if (next.some((f) => f.id === id)) continue;
    const prior = existing.get(id);
    next.push(
      prior ?? {
        id,
        value: n.value,
        context: n.context,
        kind: n.inExample ? 'example' : 'unclassified',
        sourceUrl: n.blockLinks[0] ?? '',
        sourceName: '',
        asOf: '',
        derivedFrom: [],
        verify: { status: 'unverified', checkedOn: '', verifier: '', note: '' },
      }
    );
  }
  const orphans = log.figures.filter((f) => !next.some((g) => g.id === f.id));
  writeJson(file, { slug, publishDate: post.date, figures: next });
  console.log(`${slug}: ${next.length} figures logged (${next.filter((f) => f.kind === 'unclassified').length} unclassified), ${orphans.length} stale rows dropped → ${path.relative(process.cwd(), file)}`);
}

async function sheet(slug) {
  const log = readJson(logPath(slug));
  if (!log) throw new Error(`No figures log for ${slug}. Run extract first.`);
  const bySource = new Map();
  for (const f of log.figures) {
    const key = f.kind === 'sourced' ? f.sourceUrl || '(no source)' : `(${f.kind})`;
    if (!bySource.has(key)) bySource.set(key, []);
    bySource.get(key).push(f);
  }
  console.log(`# Re-check sheet: ${slug} (publish ${log.publishDate})\n`);
  console.log('Open each source today. Mark verify.status = "match" only when the page prints the same value for the same thing.\n');
  for (const [source, rows] of bySource) {
    console.log(`## ${source}\n`);
    for (const f of rows) console.log(`- [${f.id}] **${f.value}** — ${f.context}`);
    console.log('');
  }
}

export async function checkFigures(post, { date } = {}) {
  const log = readJson(logPath(post.slug));
  const problems = [];
  if (!log) return { ok: false, problems: [`no figures log (content/figures/${post.slug}.json)`], stats: {} };
  const checkDate = date ?? todayToronto();
  const rows = new Map(log.figures.map((f) => [f.id, f]));
  const sourcesBlock = sourcesHtml(post.content);
  const sourceLinks = links(sourcesBlock).map((l) => l.href);
  const sourceHosts = new Set(sourceLinks.map(hostOf));
  const numbers = extractNumbers(post.content);
  let missing = 0;
  for (const n of numbers) {
    if (!rows.has(figureKey(n.value, n.context))) {
      missing += 1;
      if (missing <= 10) problems.push(`no log row for "${n.value}" in: ${n.context.slice(0, 120)}`);
    }
  }
  if (missing > 10) problems.push(`…and ${missing - 10} more numbers without log rows`);
  const counts = { sourced: 0, example: 0, derived: 0, unclassified: 0 };
  for (const f of log.figures) {
    counts[f.kind] = (counts[f.kind] ?? 0) + 1;
    if (f.kind === 'unclassified') problems.push(`[${f.id}] ${f.value}: unclassified`);
    if (f.kind === 'sourced') {
      if (!f.sourceUrl) problems.push(`[${f.id}] ${f.value}: no source URL`);
      else if (!sourceLinks.includes(f.sourceUrl) && !sourceHosts.has(hostOf(f.sourceUrl)))
        problems.push(`[${f.id}] ${f.value}: source ${f.sourceUrl} is not in the post's Sources list`);
      if (!f.asOf) problems.push(`[${f.id}] ${f.value}: no as-of date`);
      if (f.verify?.status !== 'match') problems.push(`[${f.id}] ${f.value}: verification status is "${f.verify?.status ?? 'none'}"`);
      else if (f.verify.checkedOn !== checkDate && f.verify.checkedOn !== log.publishDate)
        problems.push(`[${f.id}] ${f.value}: verified ${f.verify.checkedOn}, not on ${checkDate} or the publish day`);
      if (f.verify?.status === 'match' && !f.verify.verifier) problems.push(`[${f.id}] ${f.value}: no verifier named`);
    }
    if (f.kind === 'derived') {
      if (!f.derivedFrom?.length && !f.verify?.note) problems.push(`[${f.id}] ${f.value}: derived without inputs or a formula note`);
      if (f.verify?.status !== 'match') problems.push(`[${f.id}] ${f.value}: arithmetic not re-checked`);
    }
  }
  return {
    ok: problems.length === 0,
    problems,
    stats: { numbers: numbers.length, rows: log.figures.length, missing, ...counts, sources: sourceLinks.length },
  };
}

async function check(slug, args) {
  const post = await findPost(slug);
  const res = await checkFigures(post, { date: args.date });
  console.log(`${slug}: ${res.ok ? 'PASS' : 'FAIL'} ${JSON.stringify(res.stats)}`);
  for (const p of res.problems) console.log(`  - ${p}`);
  if (!res.ok) process.exitCode = 1;
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname);
if (isMain) {
  const args = parseArgs(process.argv.slice(2));
  const [cmd, ...slugs] = args._;
  const run = { extract, sheet, check: (s) => check(s, args) }[cmd];
  if (!run || slugs.length === 0) {
    console.error('usage: figures.mjs <extract|sheet|check> <slug...> [--date YYYY-MM-DD]');
    process.exit(2);
  }
  for (const slug of slugs) await run(slug);
}
