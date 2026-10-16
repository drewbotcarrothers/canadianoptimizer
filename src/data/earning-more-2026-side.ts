import type { BlogPostRecord } from '../lib/post-video';
import { bestContent } from './earn-guides/side';
import { creatorContent, marketplaceContent, platformContent, resellContent } from './earn-guides/side-rest';

const meta = {
  category: 'Earning More',
  categorySlug: 'earning-more',
  author: 'Andrew',
  date: '2026-10-15',
  updated: '2026-10-16',
  subcategory: 'side-hustles',
} as const;

function post(slug: string, title: string, excerpt: string, content: string): BlogPostRecord {
  return { ...meta, title, slug, excerpt, image: `/images/blog/${slug}.png`, content };
}

export const earningMore2026SidePosts: BlogPostRecord[] = [
  post(
    'best-side-hustles-canada',
    'Best Side Hustles in Canada (2026, With Real Earnings)',
    'The best side hustles in Canada fit under 20 hours a week. Omnisend found 53% of people with one earn $500 a month or less. Price the hourly. Skip the fantasy.',
    bestContent
  ),
  post(
    'facebook-marketplace-tax-canada',
    'Is Selling Stuff on Facebook Marketplace Taxable?',
    'Facebook Marketplace tax in Canada: selling your own used goods is usually not a business. Buying items to resell is taxable. A slip is not the test. Note it.',
    marketplaceContent
  ),
  post(
    'platform-reporting-rules-canada',
    'The Platform Reporting Rules: Will Etsy or eBay Report You to CRA?',
    'CRA platform reporting rules exclude a goods seller only under 30 sales and $2,800 or less. That reporting line is not a tax-free allowance. You still report.',
    platformContent
  ),
  post(
    'reselling-flipping-canada',
    'Reselling and Flipping in Canada: Marketplace, Amazon, eBay, and Etsy',
    'Reselling and flipping in Canada pays only after real fees, your time, and tax. Marketplace leads at 53% of online sellers. Write the profit first, then buy.',
    resellContent
  ),
  post(
    'content-creator-income-canada',
    'Making Money as a Content Creator: Sponsorships and Free Products',
    "Content creator income in Canada includes cash and perks at fair market value. CRA's example treats a gifted trip as income at $5,000. Report it anyway.",
    creatorContent
  ),
];
