import type { BlogPostRecord } from '../lib/post-video';
import { raiseContent } from './earn-guides/employee';
import { payContent } from './earn-guides/employee-rest';
import { offerContent, overtimeContent, severanceContent } from './earn-guides/employee-more';

const meta = {
  category: 'Earning More',
  categorySlug: 'earning-more',
  author: 'Andrew',
  date: '2026-10-15',
  updated: '2026-10-16',
  subcategory: 'employee',
} as const;

function post(slug: string, title: string, excerpt: string, content: string): BlogPostRecord {
  return { ...meta, title, slug, excerpt, image: `/images/blog/${slug}.png`, content };
}

export const earningMore2026EmployeePosts: BlogPostRecord[] = [
  post(
    'how-to-ask-for-a-raise-canada',
    'How to Ask for a Raise in Canada (2026 Benchmarks)',
    'How to ask for a raise in Canada when the 2026 budget is 3.1%. Ask for a number, price the CPP and EI drag, and see what it compounds to over five years.',
    raiseContent
  ),
  post(
    'ontario-pay-transparency-job-postings',
    'Ontario Pay Transparency: What Job Postings Must Tell You',
    'Ontario pay transparency requires employers with 25 or more staff to post pay, or a range no wider than $50,000, from January 1, 2026, before you apply.',
    payContent
  ),
  post(
    'negotiate-job-offer-canada',
    'Job Offer Negotiation Script for Canadians',
    'Negotiate a job offer in Canada only after it is in writing. Compare the whole package, name one base number, and use the posted range. Then stop talking.',
    offerContent
  ),
  post(
    'how-to-negotiate-severance-canada',
    'How to Negotiate Severance in Canada',
    'How to negotiate severance in Canada: Ontario notice is up to 8 weeks, and severance pay is a separate amount of up to 26 weeks if you qualify. Price it.',
    severanceContent
  ),
  post(
    'overtime-stat-holiday-pay-canada',
    'Overtime and Stat Holiday Pay: Are You Being Paid Right?',
    'Overtime and stat holiday pay in Canada differ by province. Ontario starts after 44 hours a week. British Columbia adds a daily clock. Check the stub.',
    overtimeContent
  ),
];
