import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

const ALLOWED_AGENTS = [
  '*',
  'Googlebot',
  'Bingbot',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'Perplexity-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: ALLOWED_AGENTS.map((userAgent) => ({
      userAgent,
      allow: '/',
    })),
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
