export type OctPost = {
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  author: string;
  date: string;
  updated: string;
  excerpt: string;
  image: string;
  content: string;
};

const date = '2026-10-04';

export function octPost(
  category: string,
  categorySlug: string,
  slug: string,
  title: string,
  excerpt: string,
  content: string
): OctPost {
  return {
    title,
    slug,
    category,
    categorySlug,
    author: 'Andrew',
    date,
    updated: date,
    excerpt,
    image: `/images/blog/${slug}.png`,
    content,
  };
}

export function articleFooter(category: string, disclaimer: string): string {
  return `<div class="article-footer">
        <p><strong>Disclaimer:</strong> ${disclaimer}</p>
        <div class="footer-note">Published: October 4, 2026 | Category: ${category} | Author: Andrew</div>
    </div>`;
}
