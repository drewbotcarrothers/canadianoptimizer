import type { MetadataRoute } from 'next';
import { posts } from '@/data/posts';
import { CATEGORIES, SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    '/',
    '/blog/',
    '/about/',
    '/ebooks/',
    '/ebooks/tax-guide/',
    '/contact/',
    '/privacy/',
    '/terms/',
    '/disclaimer/',
    '/disclosure/',
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: '2026-09-26',
  }));

  const categoryEntries: MetadataRoute.Sitemap = CATEGORIES.map((category) => ({
    url: `${SITE_URL}/category/${category.slug}/`,
    lastModified: '2026-09-26',
  }));

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}/`,
    lastModified: post.updated || post.date,
  }));

  return [...staticEntries, ...categoryEntries, ...postEntries];
}
