#!/usr/bin/env node
// Fetch sister-site sitemaps into content/sisters.json for checklist item 15.
//   node scripts/content/sisters.mjs   (then: checklist.mjs ... --sisters content/sisters.json)
import path from 'node:path';
import { ROOT, writeJson } from './lib.mjs';

const SITES = ['canadiancreditcardfinder.com', 'latestmortgagerates.ca', 'makemoneyoptimizer.com', 'savingoptimizer.com'];

async function urlsFrom(url, depth = 0) {
  const res = await fetch(url, { headers: { 'user-agent': 'canadianoptimizer-content-qa' } });
  if (!res.ok) return [];
  const xml = await res.text();
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  if (/<sitemapindex/.test(xml) && depth < 2) {
    const nested = await Promise.all(locs.map((l) => urlsFrom(l, depth + 1)));
    return nested.flat();
  }
  return locs;
}

const out = [];
for (const site of SITES) {
  try {
    const urls = await urlsFrom(`https://${site}/sitemap.xml`);
    for (const u of urls) {
      const slug = new URL(u).pathname.split('/').filter(Boolean).pop() ?? '';
      if (slug) out.push({ site, slug, title: slug.replace(/-/g, ' '), url: u });
    }
    console.log(`${site}: ${urls.length} URLs`);
  } catch (err) {
    console.log(`${site}: failed (${err.message})`);
  }
}
writeJson(path.join(ROOT, 'content', 'sisters.json'), out);
