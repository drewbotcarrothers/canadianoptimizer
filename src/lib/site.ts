import type { Metadata } from 'next';

export const SITE_URL = 'https://canadianoptimizer.com';
export const SITE_NAME = 'Canadian Optimizer';
export const AUTHOR_NAME = 'Andrew';
export const AUTHOR_ID = `${SITE_URL}/about/#andrew`;
export const AUTHOR_URL = `${SITE_URL}/about/`;
export const LOGO_PATH = '/assets/logo.png';

/** Bump this when blog hero files change but keep the same filename. */
export const BLOG_HERO_VERSION = '20261024a';

export function blogHeroSrc(src: string): string {
  if (!src.includes('/images/blog/')) return src;
  if (/[?&]v=/.test(src)) return src;
  const joiner = src.includes('?') ? '&' : '?';
  return `${src}${joiner}v=${BLOG_HERO_VERSION}`;
}

export type CategorySubcategory = {
  slug: string;
  name: string;
  pageTitle: string;
  metaDescription: string;
  description: string;
};

export const CATEGORIES: {
  slug: string;
  name: string;
  pageTitle: string;
  metaDescription: string;
  description: string;
  subcategories?: CategorySubcategory[];
}[] = [
  {
    slug: 'investing',
    name: 'Investing',
    pageTitle: 'Advanced Canadian Investing Strategies',
    metaDescription:
      'Investing in Canada by investor type: passive ETF portfolios, dividend income, DIY stock picking, and choosing a robo-advisor or advisor.',
    description:
      'Pick the investor you are: passive ETFs, dividend income, DIY stock picking, or hands-off with a robo-advisor or advisor. Accounts and brokerages first.',
    subcategories: [
      {
        slug: 'passive-etf',
        name: 'Passive ETF Investing',
        pageTitle: 'Passive ETF Investing in Canada',
        metaDescription:
          'Couch Potato-style investing for Canadians: all-in-one ETFs, model portfolios by risk level, asset location, rebalancing, and staying invested in a crash.',
        description: 'All-in-one ETFs, model portfolios, asset location, and holding on in a crash.',
      },
      {
        slug: 'dividend-investing',
        name: 'Dividend Investing',
        pageTitle: 'Dividend Investing in Canada',
        metaDescription:
          'Dividend income for Canadians: the dividend tax credit by province, banks, utilities, pipelines and telcos, DRIPs, yield traps, and covered-call ETFs.',
        description: 'Dividend tax credit, banks, utilities, pipelines, and income that lasts.',
      },
      {
        slug: 'stock-picking',
        name: 'Stock Picking',
        pageTitle: 'DIY Stock Picking in Canada',
        metaDescription:
          'Picking stocks for total return in Canada: reading filings, valuation basics, Canadian vs US stocks, position sizing, when to sell, and ACB records.',
        description: 'Analyzing a business, valuation, sizing, selling, and ACB records.',
      },
      {
        slug: 'hands-off',
        name: 'Hands-Off Investing',
        pageTitle: 'Hands-Off Investing in Canada',
        metaDescription:
          'Robo-advisors, bank advisors, mutual funds, and fee-only planners in Canada: what you really pay, questions to ask, red flags, and how to switch.',
        description: 'Robo-advisors, advisors, and planners: what you pay and how to choose.',
      },
    ],
  },
  {
    slug: 'taxes',
    name: 'Taxes',
    pageTitle: 'Advanced Canadian Tax Strategies',
    metaDescription:
      'Advanced Canadian tax strategies: brackets, credits, RRSPs, TFSAs, and the filing moves that change what you keep.',
    description:
      'Advanced tax planning, deductions, and minimization strategies to keep more of your hard-earned money.',
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    pageTitle: 'Advanced Canadian Real Estate Strategies',
    metaDescription:
      'Mortgage, HELOC, and rental-property strategies for Canadians who want the tax and cash-flow math, not the sales pitch.',
    description:
      'Residential and investment property optimization, mortgage strategies, and homeownership tactics.',
  },
  {
    slug: 'credit-cards',
    name: 'Credit Cards',
    pageTitle: 'Canadian Credit Card Strategies',
    metaDescription:
      'Canadian credit card strategies by spending profile: rewards, annual fees, foreign transactions, groceries, and Aeroplan.',
    description:
      'Maximizing rewards, travel hacking, and strategic credit management for maximum value.',
  },
  {
    slug: 'retirement',
    name: 'Retirement',
    pageTitle: 'Canadian Retirement Strategies',
    metaDescription:
      'CPP, OAS, RRSP, and TFSA withdrawal strategies for Canadians planning retirement income on purpose.',
    description:
      'Optimizing retirement income, withdrawal strategies (RRSP/TFSA/CPP/OAS), and long-term planning.',
  },
  {
    slug: 'budgeting-saving',
    name: 'Budgeting & Saving',
    pageTitle: 'Canadian Budgeting and Saving Strategies',
    metaDescription:
      'Cash-flow systems, emergency funds, and saving-rate frameworks for Canadian households that want the math.',
    description:
      'High-performance cash flow management, cost reduction, and automated saving frameworks.',
  },
  {
    slug: 'earning-more',
    name: 'Earning More',
    pageTitle: 'How to Earn More Money in Canada',
    metaDescription:
      'Raise and job-switch math, building a business, and side hustles that pay.',
    description:
      'Raise and job-switch math, building a business, and side hustles that pay.',
    subcategories: [
      {
        slug: 'employee',
        name: 'Employee',
        pageTitle: 'Earning More as an Employee in Canada',
        metaDescription:
          'Raises, job offers, severance, overtime, and remote pay for Canadians who earn a salary.',
        description: 'Raises, offers, severance, and the pay stub.',
      },
      {
        slug: 'entrepreneur',
        name: 'Entrepreneur',
        pageTitle: 'Earning More as an Entrepreneur in Canada',
        metaDescription:
          'Freelance rates, business registration, first clients, self-employed EI, and raising prices in Canada.',
        description: 'Rates, registration, clients, and getting paid.',
      },
      {
        slug: 'side-hustles',
        name: 'Side Hustles',
        pageTitle: 'Side Hustles in Canada',
        metaDescription:
          'Side hustles with published earnings, Marketplace sales, platform reporting, reselling, and creator income.',
        description: 'Extra income, and whether it still pays.',
      },
    ],
  },
  {
    slug: 'insurance',
    name: 'Insurance',
    pageTitle: 'Canadian Insurance Strategies',
    metaDescription:
      'Life, disability, and property insurance decisions for Canadians who want coverage without paying for coverage they will not use.',
    description:
      'Optimizing risk management through life, health, disability, and property insurance strategies.',
  },
  {
    slug: 'government-benefits',
    name: 'Government Benefits',
    pageTitle: 'Canadian Government Benefits',
    metaDescription:
      'CPP, OAS, GIS, and other Canadian federal and provincial benefits: who qualifies, and how the programs stack.',
    description:
      'Maximizing your entitlement to Canadian federal and provincial grants, credits, and programs.',
  },
];

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function absoluteUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function formatMonthYear(iso: string): string {
  const [year, month] = iso.split('-').map(Number);
  return `${MONTHS[month - 1]} ${year}`;
}

export function toMetaDescription(text: string): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= 160) return clean;
  const slice = clean.slice(0, 156);
  const lastSpace = slice.lastIndexOf(' ');
  const trimmed = (lastSpace > 110 ? slice.slice(0, lastSpace) : slice).replace(
    /[\s,;:–—-]+$/u,
    ''
  );
  const withPeriod = /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
  return withPeriod.length <= 160 ? withPeriod : withPeriod.slice(0, 160).replace(/[\s,;:–—-]+$/u, '');
}

type PageSeo = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  absoluteTitle?: boolean;
  article?: { publishedTime: string; modifiedTime: string };
};

export function buildPageMetadata(opts: PageSeo): Metadata {
  const fullTitle = opts.absoluteTitle ? opts.title : `${opts.title} | ${SITE_NAME}`;
  const image = absoluteUrl(blogHeroSrc(opts.image ?? LOGO_PATH));
  const canonical = absoluteUrl(opts.path);
  const imageAlt = opts.imageAlt ?? opts.title;

  const shared = {
    url: canonical,
    title: fullTitle,
    description: opts.description,
    siteName: SITE_NAME,
    locale: 'en_CA',
    images: [{ url: image, alt: imageAlt }],
  };

  return {
    title: opts.absoluteTitle ? { absolute: opts.title } : opts.title,
    description: opts.description,
    alternates: {
      canonical,
      types: {
        'application/rss+xml': `${SITE_URL}/rss.xml`,
      },
    },
    openGraph: opts.article
      ? {
          ...shared,
          type: 'article',
          publishedTime: opts.article.publishedTime,
          modifiedTime: opts.article.modifiedTime,
          authors: [AUTHOR_NAME],
        }
      : {
          ...shared,
          type: 'website',
        },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: opts.description,
      images: [image],
    },
  };
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

export function extractFaq(content: string): { question: string; answer: string }[] | null {
  const h2re = /<h2[^>]*>([\s\S]*?)<\/h2>/gi;
  let match: RegExpExecArray | null;
  let faqStart = -1;
  while ((match = h2re.exec(content))) {
    const text = stripHtml(match[1]);
    if (/\bfaq\b|frequently asked/i.test(text)) {
      faqStart = h2re.lastIndex;
      break;
    }
  }
  if (faqStart < 0) return null;

  const rest = content.slice(faqStart);
  const nextH2 = rest.search(/<h2[\s>]/i);
  const section = nextH2 >= 0 ? rest.slice(0, nextH2) : rest;
  const qre = /<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*?)(?=<h3[\s>]|$)/gi;
  const items: { question: string; answer: string }[] = [];
  let q: RegExpExecArray | null;
  while ((q = qre.exec(section))) {
    const question = stripHtml(q[1]);
    const answer = stripHtml(q[2]);
    if (question && answer) items.push({ question, answer });
  }
  return items.length > 0 ? items : null;
}

export function extractHowTo(
  content: string
): { name: string; steps: { name: string; text: string }[] } | null {
  const block = content.match(
    /<div class="howto"[^>]*data-howto-name="([^"]+)"[^>]*>([\s\S]*?)<\/div>/i
  );
  if (!block) return null;
  const name = stripHtml(block[1]);
  const steps: { name: string; text: string }[] = [];
  const stepRe = /<li[^>]*>\s*<strong>([\s\S]*?)<\/strong>([\s\S]*?)<\/li>/gi;
  let step: RegExpExecArray | null;
  while ((step = stepRe.exec(block[2]))) {
    const stepName = stripHtml(step[1]).replace(/[.:]\s*$/, '');
    const text = stripHtml(step[2]);
    if (stepName && text) steps.push({ name: stepName, text });
  }
  return name && steps.length > 0 ? { name, steps } : null;
}

export function howToSchema(item: { name: string; steps: { name: string; text: string }[] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: item.name,
    step: item.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function publisherSchema() {
  return {
    '@type': 'Organization',
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl(LOGO_PATH),
    },
  };
}

export function homeSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        logo: {
          '@type': 'ImageObject',
          url: absoluteUrl(LOGO_PATH),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        description:
          'Practical tax, investing, retirement, and credit-card strategies for Canadians.',
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-CA',
      },
    ],
  };
}

export function authorSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': AUTHOR_ID,
    name: AUTHOR_NAME,
    url: AUTHOR_URL,
    worksFor: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: `${SITE_URL}/`,
    },
  };
}

export function articleSchema(post: {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  updated?: string;
  image: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: toMetaDescription(post.excerpt),
    image: absoluteUrl(blogHeroSrc(post.image)),
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: {
      '@type': 'Person',
      '@id': AUTHOR_ID,
      name: AUTHOR_NAME,
      url: AUTHOR_URL,
    },
    publisher: publisherSchema(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}/`,
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function findSubcategory(categorySlug: string, subSlug: string | undefined) {
  if (!subSlug) return undefined;
  return CATEGORIES.find((category) => category.slug === categorySlug)?.subcategories?.find(
    (sub) => sub.slug === subSlug
  );
}

export function collectionSchema(
  category: { slug: string; name: string; pageTitle: string; description: string },
  categoryPosts: { title: string; slug: string }[],
  pagePath?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.pageTitle,
    description: category.description,
    url: `${SITE_URL}${pagePath ?? `/category/${category.slug}/`}`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: categoryPosts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: post.title,
        url: `${SITE_URL}/blog/${post.slug}/`,
      })),
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
