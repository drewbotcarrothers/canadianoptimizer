import ArticleCard from '@/components/ui/ArticleCard';
import { posts } from '@/data/posts';

export default function RelatedPosts({
  slug,
  categorySlug,
  subcategory,
}: {
  slug: string;
  categorySlug: string;
  subcategory?: string;
}) {
  const sameSubcategory = subcategory
    ? posts
        .filter(
          (post) =>
            post.slug !== slug && post.categorySlug === categorySlug && post.subcategory === subcategory
        )
        .sort((a, b) => b.date.localeCompare(a.date))
    : [];

  const sameCategory = posts
    .filter(
      (post) =>
        post.slug !== slug &&
        post.categorySlug === categorySlug &&
        !sameSubcategory.some((item) => item.slug === post.slug)
    )
    .sort((a, b) => b.date.localeCompare(a.date));

  const filler = posts
    .filter((post) => post.slug !== slug && post.categorySlug !== categorySlug)
    .sort((a, b) => b.date.localeCompare(a.date));

  const related = [...sameSubcategory, ...sameCategory, ...filler].slice(0, 3);
  if (related.length === 0) return null;

  return (
    <section className="bg-light-slate py-16" aria-labelledby="related-posts-heading">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 id="related-posts-heading" className="text-2xl md:text-3xl font-bold text-charcoal mb-8">
          Related posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {related.map((post) => (
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
      </div>
    </section>
  );
}
