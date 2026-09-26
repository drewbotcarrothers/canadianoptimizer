import type { Metadata } from 'next';

export const SITE_URL = 'https://canadianoptimizer.com';
export const SITE_NAME = 'Canadian Optimizer';
export const AUTHOR_NAME = 'Andrew Carrothers';
export const AUTHOR_ID = `${SITE_URL}/about/#andrew`;
export const AUTHOR_URL = `${SITE_URL}/about/`;
export const LOGO_PATH = '/assets/logo.png';

export const CATEGORIES: {
  slug: string;
  name: string;
  description: string;
}[] = [
  {
    slug: 'investing',
    name: 'Investing',
    description:
      'Portfolio optimization, asset allocation, and wealth building strategies for Canadians.',
  },
  {
    slug: 'taxes',
    name: 'Taxes',
    description:
      'Advanced tax planning, deductions, and minimization strategies to keep more of your hard-earned money.',
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    description:
      'Residential and investment property optimization, mortgage strategies, and homeownership tactics.',
  },
  {
    slug: 'credit-cards',
    name: 'Credit Cards',
    description:
      'Maximizing rewards, travel hacking, and strategic credit management for maximum value.',
  },
  {
    slug: 'retirement',
    name: 'Retirement',
    description:
      'Optimizing retirement income, withdrawal strategies (RRSP/TFSA/CPP/OAS), and long-term planning.',
  },
  {
    slug: 'budgeting-saving',
    name: 'Budgeting & Saving',
    description:
      'High-performance cash flow management, cost reduction, and automated saving frameworks.',
  },
  {
    slug: 'earning-more',
    name: 'Earning More',
    description:
      'Compensation design, tax-aware income, and career leverage for Canadians.',
  },
  {
    slug: 'insurance',
    name: 'Insurance',
    description:
      'Optimizing risk management through life, health, disability, and property insurance strategies.',
  },
  {
    slug: 'government-benefits',
    name: 'Government Benefits',
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
  const image = absoluteUrl(opts.image ?? LOGO_PATH);
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
    image: absoluteUrl(post.image),
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

export function collectionSchema(
  category: { slug: string; name: string; description: string },
  categoryPosts: { title: string; slug: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category.name} Strategies`,
    description: category.description,
    url: `${SITE_URL}/category/${category.slug}/`,
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
