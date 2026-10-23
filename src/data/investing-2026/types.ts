import type { PostVideoFields } from '../../lib/post-video';

export type Investing2026Post = {
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  subcategory?: string;
  author: string;
  date: string;
  updated: string;
  excerpt: string;
  image: string;
  content: string;
} & PostVideoFields;

/** Publication date for the October 23, 2026 investing batch. Must not be after today in America/Toronto. */
export const BATCH_DATE = '2026-10-23';

export function invPost(
  subcategory: string | undefined,
  slug: string,
  title: string,
  excerpt: string,
  content: string,
  date: string = BATCH_DATE
): Investing2026Post {
  const post: Investing2026Post = {
    title,
    slug,
    category: 'Investing',
    categorySlug: 'investing',
    author: 'Andrew',
    date,
    updated: date,
    excerpt,
    image: `/images/blog/${slug}.png`,
    content,
  };
  return subcategory ? { ...post, subcategory } : post;
}

export function invFooter(disclaimer: string, published = 'October 23, 2026'): string {
  return `<div class="article-footer">
        <p><strong>Disclaimer:</strong> ${disclaimer}</p>
        <p><strong>Disclosure:</strong> No company named on this page paid for it, and there are no affiliate links on this page. Fees, rates, and returns are copied from the provider or government page linked beside them on the review date shown in Sources.</p>
        <div class="footer-note">Published: ${published} | Category: Investing | Author: Andrew</div>
    </div>`;
}
