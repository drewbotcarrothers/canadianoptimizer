import type { BlogPostRecord } from '../../lib/post-video';

/**
 * A scheduled batch post. `date` and `updated` are the planned publish day (they must match
 * while the post is scheduled; see CONTENT-QA.md). Author is always Andrew.
 */
export function batchPost(fields: {
  date: string;
  category: string;
  categorySlug: string;
  subcategory: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
}): BlogPostRecord {
  return {
    title: fields.title,
    slug: fields.slug,
    category: fields.category,
    categorySlug: fields.categorySlug,
    subcategory: fields.subcategory,
    author: 'Andrew',
    date: fields.date,
    updated: fields.date,
    excerpt: fields.excerpt,
    image: `/images/blog/${fields.slug}.png`,
    content: fields.content,
  };
}

/** "November 16, 2026" from "2026-11-16". */
export function longDate(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export function batchFooter(iso: string, category: string, disclaimer: string): string {
  return `<div class="article-footer">
        <p><strong>Disclaimer:</strong> ${disclaimer}</p>
        <div class="footer-note">Published: ${longDate(iso)} | Category: ${category} | Author: Andrew</div>
    </div>`;
}
