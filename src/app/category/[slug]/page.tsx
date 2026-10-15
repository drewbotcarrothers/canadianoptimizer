import type { Metadata } from 'next';
import ArticleCard from '@/components/ui/ArticleCard';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts } from '@/data/posts';
import {
  breadcrumbSchema,
  buildPageMetadata,
  CATEGORIES,
  collectionSchema,
  toMetaDescription,
} from '@/lib/site';

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = CATEGORIES.find((item) => item.slug === slug);
  if (!category) return { title: 'Category' };
  return buildPageMetadata({
    title: category.pageTitle,
    description: toMetaDescription(category.metaDescription),
    path: `/category/${category.slug}/`,
  });
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const categoryData = CATEGORIES.find((item) => item.slug === resolvedParams.slug);

  if (!categoryData) {
    notFound();
  }

  const categoryPosts = posts
    .filter((post) => post !== undefined)
    .filter((post) => post.categorySlug === resolvedParams.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const schemas = [
    collectionSchema(categoryData, categoryPosts),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: categoryData.name, path: `/category/${categoryData.slug}/` },
    ]),
  ];

  const subcategories = categoryData.subcategories ?? [];

  return (
    <div className="bg-light-slate min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-12 text-center md:text-left bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <SchemaMarkup data={schemas} />
          <Breadcrumbs items={[{ label: categoryData.name }]} />
          <div className="inline-block bg-light-slate text-charcoal font-semibold px-4 py-2 rounded-full border border-gray-200 mb-6">
            Optimization Category
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">{categoryData.pageTitle}</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            {categoryData.description} Browse our latest articles focusing on extracting the absolute maximum value from this aspect of your finances.
          </p>
          {subcategories.length > 0 ? (
            <nav className="mt-8 flex flex-wrap gap-3" aria-label="Subcategories">
              {subcategories.map((sub) => (
                <a
                  key={sub.slug}
                  href={`#${sub.slug}`}
                  className="inline-block bg-light-slate text-charcoal font-semibold px-4 py-2 rounded-full border border-gray-200 hover:border-canadian-red hover:text-canadian-red transition-colors"
                >
                  {sub.name}
                </a>
              ))}
            </nav>
          ) : null}
        </header>

        {subcategories.length > 0 ? (
          <div className="space-y-16">
            {categoryPosts.some((post) => !post.subcategory) ? (
              <section aria-labelledby="start-here-heading">
                <div className="mb-8">
                  <h2 id="start-here-heading" className="text-3xl font-bold text-charcoal mb-2">
                    Start here
                  </h2>
                  <p className="text-gray-600 max-w-3xl">
                    The overview, if you have not picked a path yet.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryPosts
                    .filter((post) => !post.subcategory)
                    .map((post) => (
                      <ArticleCard
                        key={post.slug}
                        slug={post.slug}
                        title={post.title}
                        excerpt={post.excerpt}
                        category={post.category}
                        author={post.author}
                        date={post.date}
                        imageUrl={post.image}
                      />
                    ))}
                </div>
              </section>
            ) : null}
            {subcategories.map((sub) => {
              const sectionPosts = categoryPosts.filter((post) => post.subcategory === sub.slug).slice(0, 6);
              return (
                <section key={sub.slug} id={sub.slug} aria-labelledby={`${sub.slug}-heading`}>
                  <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                      <h2 id={`${sub.slug}-heading`} className="text-3xl font-bold text-charcoal mb-2">
                        {sub.name}
                      </h2>
                      <p className="text-gray-600 max-w-3xl">{sub.description}</p>
                    </div>
                    <Link
                      href={`/category/${categoryData.slug}/${sub.slug}/`}
                      className="font-semibold text-canadian-red hover:underline shrink-0"
                    >
                      See all {sub.name}
                    </Link>
                  </div>
                  {sectionPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {sectionPosts.map((post) => (
                        <ArticleCard
                          key={post.slug}
                          slug={post.slug}
                          title={post.title}
                          excerpt={post.excerpt}
                          category={post.category}
                          author={post.author}
                          date={post.date}
                          imageUrl={post.image}
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">No articles in this section yet.</p>
                  )}
                </section>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryPosts.length > 0 ? (
              categoryPosts.map((post) => (
                <ArticleCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  author={post.author}
                  date={post.date}
                  imageUrl={post.image}
                />
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-gray-500 italic">No strategies published in this category yet. Stay tuned.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
