import { posts } from '@/data/posts';
import { SITE_NAME, SITE_URL } from '@/lib/site';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function buildRssXml(): string {
  const items = [...posts].sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
  const body = items
    .map((post) => {
      const link = `${SITE_URL}/blog/${post.slug}/`;
      const pubDate = new Date(`${post.date}T12:00:00Z`).toUTCString();
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
    </item>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${SITE_NAME}</title>
    <link>${SITE_URL}/</link>
    <description>Practical tax, investing, retirement, and credit-card strategies for Canadians.</description>
    <language>en-ca</language>
${body}
  </channel>
</rss>
`;
}
