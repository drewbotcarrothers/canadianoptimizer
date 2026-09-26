import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import AffiliateDisclosure from '@/components/ui/AffiliateDisclosure';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import RelatedPosts from '@/components/blog/RelatedPosts';
import ClientBlogContent from './ClientBlogContent';
import { posts } from '@/data/posts';
import {
  articleSchema,
  AUTHOR_NAME,
  breadcrumbSchema,
  buildPageMetadata,
  extractFaq,
  faqSchema,
  formatMonthYear,
  toMetaDescription,
} from '@/lib/site';
import '../blog-content.css';

export function generateStaticParams() {
  const seenSlugs = new Set<string>();
  return posts
    .filter((post) => {
      if (!post || seenSlugs.has(post.slug)) return false;
      seenSlugs.add(post.slug);
      return true;
    })
    .map((post) => ({
      slug: post.slug,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) {
    return { title: 'Post not found' };
  }

  const description = toMetaDescription(post.excerpt);
  return {
    ...buildPageMetadata({
      title: post.title,
      description,
      path: `/blog/${post.slug}/`,
      image: post.image,
      imageAlt: post.title,
      article: {
        publishedTime: post.date,
        modifiedTime: post.updated || post.date,
      },
    }),
    authors: [{ name: AUTHOR_NAME, url: '/about/' }],
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = posts.find((item) => item !== undefined && item.slug === resolvedParams.slug);

  if (!post) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link href="/blog/" className="text-canadian-red hover:underline mt-4 inline-block">
          Back to Blog
        </Link>
      </div>
    );
  }

  const words = post.content ? post.content.split(/\s+/).length : 0;
  const readTime = Math.ceil(words / 225);
  const publishedLabel = `Published ${formatMonthYear(post.date)}`;
  const showUpdated = Boolean(post.updated && post.updated !== post.date);

  let contentWithImage = post.content;
  if (post.image && post.content.includes('class="hook"')) {
    contentWithImage = post.content.replace(
      /(<div class="hook">[\s\S]*?<\/div>)/,
      `$1<img src="${post.image}" alt="${post.title.replace(/"/g, '&quot;')}" class="post-featured-image" />`
    );
  }

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: post.category, path: `/category/${post.categorySlug}/` },
    { name: post.title, path: `/blog/${post.slug}/` },
  ];

  const faq = extractFaq(post.content);
  const schemas = [
    articleSchema(post),
    breadcrumbSchema(crumbs),
    ...(faq ? [faqSchema(faq)] : []),
  ];

  const isExactLayout = [
    'taxes',
    'retirement',
    'credit-cards',
    'investing',
    'real-estate',
    'insurance',
    'government-benefits',
    'budgeting-saving',
    'earning-more',
  ].includes(post.categorySlug);

  if (isExactLayout) {
    return (
      <>
        <SchemaMarkup data={schemas} />
        <div className="bg-light-slate border-b border-gray-100">
          <div className="container mx-auto px-4 pt-6 max-w-6xl">
            <Breadcrumbs
              items={[
                { label: post.category, href: `/category/${post.categorySlug}/` },
                { label: post.title },
              ]}
            />
          </div>
        </div>
        <article
          className="pb-4"
          data-post-slug={post.slug}
          data-post-category={post.categorySlug}
        >
          <header className="exact-header" data-testid="blog-header">
            <div className="container mx-auto">
              <h1 id="blog-post-title" className="text-white">
                {post.title}
              </h1>
              <div className="meta">
                <span>
                  By{' '}
                  <Link href="/about/">{post.author}</Link>
                </span>
                <span>{publishedLabel}</span>
                {showUpdated ? <span>Updated {formatMonthYear(post.updated)}</span> : null}
                <span>{readTime} min read</span>
              </div>
            </div>
          </header>

          <div className="mx-auto w-full max-w-[800px] px-5 pt-8">
            <AffiliateDisclosure />
          </div>

          <div className="blog-content-exact">
            <div className="container mx-auto py-8">
              <ClientBlogContent content={contentWithImage} />
            </div>
          </div>
        </article>
        <RelatedPosts slug={post.slug} categorySlug={post.categorySlug} />
      </>
    );
  }

  return (
    <>
      <SchemaMarkup data={schemas} />
      <article className="pb-8">
        <section className="bg-light-slate py-16 mb-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Breadcrumbs
              items={[
                { label: 'Blog', href: '/blog/' },
                { label: post.category, href: `/category/${post.categorySlug}/` },
                { label: post.title },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop"
                    alt={post.author}
                    width={32}
                    height={32}
                  />
                </div>
                <Link href="/about/" className="font-semibold text-charcoal hover:text-canadian-red">
                  {post.author}
                </Link>
              </div>
              <span>{publishedLabel}</span>
              {showUpdated ? <span>Updated {formatMonthYear(post.updated)}</span> : null}
              <span className="bg-red-50 text-canadian-red px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[10px]">
                {post.category}
              </span>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-10 shadow-xl">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>
          <AffiliateDisclosure />
          <div
            className="prose prose-lg prose-red max-w-none prose-headings:text-charcoal prose-blockquote:border-canadian-red prose-blockquote:bg-red-50 prose-blockquote:p-6 prose-blockquote:rounded-r-lg prose-img:rounded-2xl blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
      <RelatedPosts slug={post.slug} categorySlug={post.categorySlug} />
    </>
  );
}
