import type { BlogPostRecord } from '../lib/post-video';
import { hubContent } from './earn-guides/hub';

const meta = {
  category: 'Earning More',
  categorySlug: 'earning-more',
  author: 'Andrew',
  date: '2026-10-15',
  updated: '2026-10-16',
} as const;

function earningPost(
  slug: string,
  title: string,
  excerpt: string,
  content: string,
  subcategory?: string
): BlogPostRecord {
  return {
    ...meta,
    subcategory,
    title,
    slug,
    excerpt,
    image: `/images/blog/${slug}.png`,
    content,
  };
}

export const earningMore2026Posts: BlogPostRecord[] = [
  earningPost(
    'how-to-earn-more-money-canada',
    'How to Earn More Money in Canada: Raise, Business or Side Hustle?',
    'How to earn more money in Canada: a raise, a business, or a side hustle. The 3.1% budget, a 6.5% unemployment rate, and which path to open first this quarter.',
    hubContent
  ),
];
