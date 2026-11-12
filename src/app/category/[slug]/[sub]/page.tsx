import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleCard from '@/components/ui/ArticleCard';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import EbookCTA from '@/components/ebooks/EbookCTA';
import { notFound } from 'next/navigation';
import { posts } from '@/data/posts';
import { ebookForPost } from '@/data/ebooks';
import { HUB_CONTENT, HUB_INTROS_UPDATED } from '@/data/taxonomy';
import {
  breadcrumbSchema,
  buildPageMetadata,
  CATEGORIES,
  collectionSchema,
  formatMonthYear,
  PILLAR_SLUGS,
  toMetaDescription,
} from '@/lib/site';

/** A hub with fewer posts than this is built but kept out of search (noindex, not in the sitemap). */
export const HUB_MIN_POSTS = 3;

// Taxonomy guard: every published post sits in exactly one valid hub, except the category pillars.
for (const post of posts) {
  if (PILLAR_SLUGS[post.categorySlug] === post.slug) continue;
  const category = CATEGORIES.find((item) => item.slug === post.categorySlug);
  if (!category?.subcategories?.some((sub) => sub.slug === post.subcategory)) {
    throw new Error(
      `Post "${post.slug}" has no valid subcategory for "${post.categorySlug}" (got "${post.subcategory ?? ''}"). See src/data/taxonomy.ts.`
    );
  }
}

function hubPosts(categorySlug: string, subSlug: string) {
  return posts
    .filter((post) => post.categorySlug === categorySlug && post.subcategory === subSlug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function generateStaticParams() {
  return CATEGORIES.flatMap((category) =>
    (category.subcategories ?? []).map((sub) => ({
      slug: category.slug,
      sub: sub.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; sub: string }>;
}): Promise<Metadata> {
  const { slug, sub } = await params;
  const category = CATEGORIES.find((item) => item.slug === slug);
  const subcategory = category?.subcategories?.find((item) => item.slug === sub);
  if (!category || !subcategory) return { title: 'Category' };
  const meta = buildPageMetadata({
    title: subcategory.pageTitle,
    description: toMetaDescription(subcategory.metaDescription),
    path: `/category/${category.slug}/${subcategory.slug}/`,
  });
  const indexable = hubPosts(category.slug, subcategory.slug).length >= HUB_MIN_POSTS;
  return indexable ? meta : { ...meta, robots: { index: false, follow: true } };
}

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<{ slug: string; sub: string }>;
}) {
  const { slug, sub } = await params;
  const categoryData = CATEGORIES.find((item) => item.slug === slug);
  const subcategory = categoryData?.subcategories?.find((item) => item.slug === sub);

  if (!categoryData || !subcategory) {
    notFound();
  }

  const categoryPosts = hubPosts(slug, sub);
  const content = HUB_CONTENT[`${slug}/${sub}`];
  const startHere = (content?.startHere ?? [])
    .map((postSlug) => categoryPosts.find((post) => post.slug === postSlug))
    .filter((post): post is (typeof categoryPosts)[number] => Boolean(post));
  const pillar = posts.find((post) => post.slug === PILLAR_SLUGS[slug]);
  const siblings = (categoryData.subcategories ?? []).filter((item) => item.slug !== sub);
  const updated = [HUB_INTROS_UPDATED, ...categoryPosts.map((post) => post.updated || post.date)].sort().pop() ?? HUB_INTROS_UPDATED;
  const ebook = ebookForPost(slug, sub);

  const pagePath = `/category/${categoryData.slug}/${subcategory.slug}/`;
  const schemas = [
    collectionSchema(
      {
        slug: categoryData.slug,
        name: subcategory.name,
        pageTitle: subcategory.pageTitle,
        description: subcategory.description,
      },
      categoryPosts,
      pagePath
    ),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: categoryData.name, path: `/category/${categoryData.slug}/` },
      { name: subcategory.name, path: pagePath },
    ]),
  ];

  return (
    <div className="bg-light-slate min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-12 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <SchemaMarkup data={schemas} />
          <Breadcrumbs
            items={[
              { label: categoryData.name, href: `/category/${categoryData.slug}/` },
              { label: subcategory.name },
            ]}
          />
          <div className="inline-block bg-light-slate text-charcoal font-semibold px-4 py-2 rounded-full border border-gray-200 mb-6">
            {categoryData.name}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">{subcategory.pageTitle}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-6">{subcategory.description}</p>
          {content ? (
            <div className="max-w-3xl space-y-4 text-gray-700 leading-relaxed" data-hub-intro>
              {content.intro.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <div>
                <p className="font-semibold text-charcoal">What this hub helps you decide:</p>
                <ul className="list-disc pl-6 space-y-1">
                  {content.decisions.map((question) => (
                    <li key={question}>{question}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}
          <p className="mt-6 text-sm text-gray-500">
            Updated {formatMonthYear(updated)} · {categoryPosts.length} {categoryPosts.length === 1 ? 'guide' : 'guides'} by Andrew
          </p>
        </header>

        {startHere.length > 0 ? (
          <section aria-labelledby="hub-start-here" className="mb-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 id="hub-start-here" className="text-2xl font-bold text-charcoal mb-4">
              Start here
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              {startHere.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}/`} className="font-semibold text-canadian-red hover:underline">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ol>
            {pillar ? (
              <p className="mt-4 text-gray-600">
                New to {categoryData.name.toLowerCase()}? Read the overview first:{' '}
                <Link href={`/blog/${pillar.slug}/`} className="text-canadian-red hover:underline">
                  {pillar.title}
                </Link>
                .
              </p>
            ) : null}
          </section>
        ) : null}

        <section aria-labelledby="hub-all-guides">
          <h2 id="hub-all-guides" className="text-3xl font-bold text-charcoal mb-8">
            All {subcategory.name} guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryPosts.length > 0 ? (
              categoryPosts.map((post) => (
                <ArticleCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={subcategory.name}
                  author={post.author}
                  date={post.date}
                  imageUrl={post.image}
                />
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-gray-500 italic">
                  Guides for this section are being written.{' '}
                  {pillar ? (
                    <>
                      In the meantime, start with{' '}
                      <Link href={`/blog/${pillar.slug}/`} className="text-canadian-red hover:underline not-italic">
                        {pillar.title}
                      </Link>
                      .
                    </>
                  ) : null}
                </p>
              </div>
            )}
          </div>
        </section>

        {siblings.length > 0 ? (
          <nav aria-label={`More ${categoryData.name} topics`} className="mt-16">
            <h2 className="text-2xl font-bold text-charcoal mb-4">More {categoryData.name} topics</h2>
            <ul className="flex flex-wrap gap-3">
              {siblings.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/category/${categoryData.slug}/${item.slug}/`}
                    className="inline-block bg-white text-charcoal font-semibold px-4 py-2 rounded-full border border-gray-200 hover:border-canadian-red hover:text-canadian-red transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
      {ebook ? <EbookCTA slug={ebook} variant="end" context={`hub-${slug}-${sub}`} /> : null}
    </div>
  );
}
