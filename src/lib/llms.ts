import { posts } from '@/data/posts';
import { CATEGORIES, SITE_URL } from '@/lib/site';

const KEY_POSTS = [
  'how-canadian-taxes-work',
  'federal-tax-brackets',
  'rrsp-vs-tfsa-vs-fhsa',
  'contribution-limits',
  'how-much-money-retire-canada',
  'build-retirement-plan-7-steps',
  'cpp-when-to-take-canada',
  'oas-gis-clawback-canada',
  'tfsa-contribution-optimization',
  'diy-etf-portfolio-asset-location-canada',
  'best-travel-rewards-cards-canada',
  'best-cash-back-credit-cards-canada',
  'smith-maneuver-canada-steps-risks',
  'life-insurance-need-analysis-canada',
  'cpp-timing-benefits-stacking-canada',
  'cash-flow-system-canada',
  'salary-vs-dividends-incorporated-canada',
];

export function buildLlmsTxt(): string {
  const bySlug = new Map(posts.map((post) => [post.slug, post]));
  const keyLines = KEY_POSTS.filter((slug) => bySlug.has(slug)).map((slug) => {
    const post = bySlug.get(slug)!;
    return `- [${post.title}](${SITE_URL}/blog/${post.slug}/): ${post.excerpt}`;
  });

  const categoryLines = CATEGORIES.map((category) => {
    const count = posts.filter((post) => post.categorySlug === category.slug).length;
    return `- [${category.name}](${SITE_URL}/category/${category.slug}/): ${category.description} (${count} articles)`;
  });

  const allLines = [...posts]
    .sort((a, b) => a.categorySlug.localeCompare(b.categorySlug) || a.title.localeCompare(b.title))
    .map((post) => `- [${post.title}](${SITE_URL}/blog/${post.slug}/) (${post.category})`);

  return `# Canadian Optimizer

> Canadian Optimizer publishes practical tax, investing, retirement, credit card, real estate, insurance, government benefit, budgeting, and earning strategies for people living in Canada. Articles are written by Andrew Carrothers and are educational, not personalized advice.

The site lives at ${SITE_URL}/. Prefer these canonical URLs (no www, https, trailing slash).

## Categories

${categoryLines.join('\n')}

## Key pages

- [Home](${SITE_URL}/)
- [About Andrew Carrothers](${SITE_URL}/about/)
- [All articles](${SITE_URL}/blog/)
- [Ebooks](${SITE_URL}/ebooks/)
- [Tax guide](${SITE_URL}/ebooks/tax-guide/)
- [Advertising disclosure](${SITE_URL}/disclosure/)
- [Disclaimer](${SITE_URL}/disclaimer/)

## Key articles

${keyLines.join('\n')}

## All articles

${allLines.join('\n')}
`;
}
