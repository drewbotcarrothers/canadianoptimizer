import type { MetadataRoute } from 'next';
import { posts } from '@/data/posts';
import { CATEGORIES, SITE_URL } from '@/lib/site';
import { ALL_PRODUCTS } from '@/data/ebooks';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    '/',
    '/blog/',
    '/about/',
    '/ebooks/',
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

  // Sales pages only; thank-you pages are noindex and stay out of the sitemap.
  const ebookEntries: MetadataRoute.Sitemap = ALL_PRODUCTS.map((product) => ({
    url: `${SITE_URL}/ebooks/${product.slug}/`,
    lastModified: '2026-11-12',
  }));

  const categoryEntries: MetadataRoute.Sitemap = CATEGORIES.map((category) => ({
    url: `${SITE_URL}/category/${category.slug}/`,
    lastModified: '2026-09-26',
  }));

  const subcategoryEntries: MetadataRoute.Sitemap = CATEGORIES.flatMap((category) =>
    (category.subcategories ?? []).map((sub) => {
      const newest = posts
        .filter((post) => post.categorySlug === category.slug && post.subcategory === sub.slug)
        .map((post) => post.updated || post.date)
        .sort()
        .pop();
      return {
        url: `${SITE_URL}/category/${category.slug}/${sub.slug}/`,
        lastModified: newest ?? '2026-10-15',
      };
    })
  );

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}/`,
    lastModified: post.updated || post.date,
  }));

  return [...staticEntries, ...ebookEntries, ...categoryEntries, ...subcategoryEntries, ...postEntries];
}
