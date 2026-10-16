import type { BlogPostRecord } from '../lib/post-video';
import { registerContent } from './earn-guides/entrepreneur';
import { clientsContent, eiContent, fullTimeContent, pricesContent } from './earn-guides/entrepreneur-rest';

const meta = {
  category: 'Earning More',
  categorySlug: 'earning-more',
  author: 'Andrew',
  date: '2026-10-15',
  updated: '2026-10-16',
  subcategory: 'entrepreneur',
} as const;

function post(slug: string, title: string, excerpt: string, content: string): BlogPostRecord {
  return { ...meta, title, slug, excerpt, image: `/images/blog/${slug}.png`, content };
}

export const earningMore2026EntrepreneurPosts: BlogPostRecord[] = [
  post(
    'how-to-register-a-business-canada',
    'How to Register a Business in Canada (Sole Prop vs Incorporate)',
    'How to register a business in Canada: an Ontario sole prop is $60, an Ontario corporation is $300, and federal online incorporation is $200. Confirm it.',
    registerContent
  ),
  post(
    'side-hustle-to-full-time-canada',
    'Going From Side Hustle to Full-Time: The Numbers',
    'A side hustle to full-time leap needs a saved runway. Nearly 1 in 5 say they might leave. Most still earn $500 a month or less. Write the number first.',
    fullTimeContent
  ),
  post(
    'first-10-clients-freelance-canada',
    'Getting Your First 10 Clients',
    'Your first freelance clients are people who already know the work. Scope one result, quote a rate that includes CPP, and follow up once. Ten takes a quarter.',
    clientsContent
  ),
  post(
    'ei-self-employed-canada',
    'EI for the Self-Employed: Worth $1.63 per $100?',
    'EI for the self-employed covers special benefits, not layoffs. In 2026 you pay $1.63 per $100, up to $1,123.07, and you wait 12 months. Read the lock-in.',
    eiContent
  ),
  post(
    'raising-prices-small-business-canada',
    'Raising Prices Without Losing Clients',
    'Raising prices in a small business: on an even book of ten, a 15% increase still wins if nine stay. Send the date before the next invoice. Do not apologize.',
    pricesContent
  ),
];
