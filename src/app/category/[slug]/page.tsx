import ArticleCard from "@/components/ui/ArticleCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";

// Define all valid categories for static generation
const CATEGORY_MAP: Record<string, { name: string; desc: string }> = {
  'investing': { name: 'Investing', desc: 'Portfolio optimization, asset allocation, and wealth building strategies for Canadians.' },
  'taxes': { name: 'Taxes', desc: 'Advanced tax planning, deductions, and minimization strategies to keep more of your hard-earned money.' },
  'real-estate': { name: 'Real Estate', desc: 'Residential and investment property optimization, mortgage strategies, and homeownership tactics.' },
  'credit-cards': { name: 'Credit Cards', desc: 'Maximizing rewards, travel hacking, and strategic credit management for maximum value.' },
  'retirement': { name: 'Retirement', desc: 'Optimizing retirement income, withdrawal strategies (RRSP/TFSA/CPP/OAS), and long-term planning.' },
  'budgeting-saving': { name: 'Budgeting & Saving', desc: 'High-performance cash flow management, cost reduction, and automated saving frameworks.' },
  'earning-more': { name: 'Earning More', desc: 'Income optimization, side hustles, career leverage, and business growth strategies for Canadians.' },
  'insurance': { name: 'Insurance', desc: 'Optimizing risk management through life, health, disability, and property insurance strategies.' },
  'government-benefits': { name: 'Government Benefits', desc: 'Maximizing your entitlement to Canadian federal and provincial grants, credits, and programs.' }
};

export function generateStaticParams() {
  return Object.keys(CATEGORY_MAP).map((slug) => ({
    slug: slug,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const categoryData = CATEGORY_MAP[resolvedParams.slug];

  if (!categoryData) {
    notFound();
  }

  // Filter posts for this category
  const categoryPosts = posts
    .filter((p) => p !== undefined)
    .filter((p) => p.categorySlug === resolvedParams.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="bg-light-slate min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-12 text-center md:text-left bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <SchemaMarkup 
            type="WebSite" 
            data={{
              name: `${categoryData.name} Optimization | Canadian Optimizer`,
              description: categoryData.desc,
            }} 
          />
          <Breadcrumbs items={[{ label: categoryData.name }]} />
          <div className="inline-block bg-light-slate text-charcoal font-semibold px-4 py-2 rounded-full border border-gray-200 mb-6">
            Optimization Category
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">{categoryData.name} Strategies</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            {categoryData.desc} Browse our latest articles focusing on extracting the absolute maximum value from this aspect of your finances.
          </p>
        </header>

        {/* Dynamic grid for category posts */}
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
