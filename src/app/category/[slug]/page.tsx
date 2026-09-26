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
    title: `${category.name} Strategies`,
    description: toMetaDescription(
      `${category.description} Browse the Canadian Optimizer articles in this category.`
    ),
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

  return (
    <div className="bg-light-slate min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-12 text-center md:text-left bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <SchemaMarkup data={schemas} />
          <Breadcrumbs items={[{ label: categoryData.name }]} />
          <div className="inline-block bg-light-slate text-charcoal font-semibold px-4 py-2 rounded-full border border-gray-200 mb-6">
            Optimization Category
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">{categoryData.name} Strategies</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            {categoryData.description} Browse our latest articles focusing on extracting the absolute maximum value from this aspect of your finances.
          </p>
        </header>

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
      </div>
    </div>
  );
}
