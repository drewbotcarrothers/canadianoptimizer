import type { Metadata } from 'next';
import ArticleCard from '@/components/ui/ArticleCard';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
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
  return buildPageMetadata({
    title: subcategory.pageTitle,
    description: toMetaDescription(subcategory.metaDescription),
    path: `/category/${category.slug}/${subcategory.slug}/`,
  });
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

  const categoryPosts = posts
    .filter((post) => post.categorySlug === slug && post.subcategory === sub)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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
        <header className="mb-12 text-center md:text-left bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
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
          <p className="text-xl text-gray-600 max-w-3xl">{subcategory.description}</p>
        </header>

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
            <div className="col-span-full py-20 text-center">
              <p className="text-gray-500 italic">No strategies published in this section yet. Stay tuned.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
