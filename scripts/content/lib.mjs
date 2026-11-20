// Shared helpers for the content QA scripts (pre-publish checklist and figures log).
import { createJiti } from 'jiti';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
export const BRIEFS_DIR = path.join(ROOT, 'content', 'briefs');
export const FIGURES_DIR = path.join(ROOT, 'content', 'figures');

const jiti = createJiti(import.meta.url, { alias: { '@': path.join(ROOT, 'src') }, fsCache: false });

export async function loadSite() {
  const postsMod = await jiti.import(path.join(ROOT, 'src/data/posts.ts'));
  const site = await jiti.import(path.join(ROOT, 'src/lib/site.ts'));
  const ebooks = await jiti.import(path.join(ROOT, 'src/data/ebooks.ts'));
  const offers = await jiti.import(path.join(ROOT, 'src/data/offers.ts'));
  const all = postsMod.allPosts ?? postsMod.posts;
  return {
    all,
    published: postsMod.posts,
    scheduled: postsMod.scheduledPosts ?? [],
    CATEGORIES: site.CATEGORIES,
    PILLAR_SLUGS: site.PILLAR_SLUGS ?? [],
    ebooks,
    OFFERS: offers.OFFERS,
  };
}

export function todayToronto() {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Toronto',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date());
}

export function readJson(file, fallback = null) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {
    return fallback;
  }
}

export function writeJson(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`);
}

export function decodeEntities(text) {
  return text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#39;|&apos;|&rsquo;|&lsquo;/g, "'")
    .replace(/&quot;|&ldquo;|&rdquo;/g, '"')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#(\d+);/g, (_m, n) => String.fromCharCode(Number(n)));
}

export function stripTags(html) {
  return decodeEntities(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<!--[\s\S]*?-->/g, ' ')
      .replace(/<[^>]+>/g, ' ')
  )
    .replace(/\s+/g, ' ')
    .trim();
}

export function wordCount(text) {
  return text.split(/\s+/).filter((w) => /[A-Za-z0-9$]/.test(w)).length;
}

/** The body a reader reads: everything before Sources, minus the footer and template markers. */
export function bodyHtml(content) {
  let html = content.replace(/<div class="article-footer">[\s\S]*$/i, '');
  const sources = html.search(/<h2[^>]*>\s*Sources\s*<\/h2>/i);
  if (sources >= 0) html = html.slice(0, sources);
  return html;
}

export function sourcesHtml(content) {
  const m = content.match(/<h2[^>]*>\s*Sources\s*<\/h2>([\s\S]*?)(?=<h2[\s>]|<div class="cta-section"|<div class="article-footer"|$)/i);
  return m ? m[1] : '';
}

export function links(html) {
  const out = [];
  const re = /<a\s[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = re.exec(html))) {
    const tag = m[0].slice(0, m[0].indexOf('>') + 1);
    const rel = (tag.match(/rel="([^"]*)"/i) || [])[1] || '';
    out.push({ href: m[1], text: stripTags(m[2]), rel, index: m.index });
  }
  return out;
}

/** Split HTML into block-level chunks (paragraphs, list items, table rows, headings). */
export function blocks(html) {
  const parts = html.split(/(?=<(?:p|li|tr|h2|h3|h4|caption|div)[\s>])/i);
  return parts
    .map((raw) => ({ raw, text: stripTags(raw) }))
    .filter((b) => b.text.length > 0);
}

export function sentences(text) {
  return text
    .split(/(?<=[.!?])\s+(?=[A-Z"(])/)
    .map((s) => s.trim())
    .filter(Boolean);
}

export function normalize(text) {
  return text.toLowerCase().replace(/[^a-z0-9$%.]+/g, ' ').replace(/\s+/g, ' ').trim();
}

export function shingles(text, n = 5) {
  const words = normalize(text).split(' ').filter(Boolean);
  const set = new Set();
  for (let i = 0; i + n <= words.length; i += 1) set.add(words.slice(i, i + n).join(' '));
  return set;
}

export function overlap(a, b) {
  if (a.size === 0) return 0;
  let shared = 0;
  for (const s of a) if (b.has(s)) shared += 1;
  return shared / a.size;
}

export function hostOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
}

export function parseArgs(argv) {
  const args = { _: [] };
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const key = a.slice(2);
      const next = argv[i + 1];
      if (next === undefined || next.startsWith('--')) args[key] = true;
      else {
        args[key] = next;
        i += 1;
      }
    } else args._.push(a);
  }
  return args;
}
