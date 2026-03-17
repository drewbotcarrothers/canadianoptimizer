import ArticleCard from "@/components/ui/ArticleCard";
import { notFound } from "next/navigation";

// Define all valid categories for static generation
const CATEGORY_MAP: Record<string, { name: string; desc: string }> = {
  'personal-finance': { name: 'Personal Finance', desc: 'Overall financial optimization and planning strategies.' },
  'investing': { name: 'Investing', desc: 'Portfolio optimization and wealth building strategies.' },
  'taxes': { name: 'Taxes', desc: 'Tax optimization and minimization strategies.' },
  'real-estate': { name: 'Real Estate', desc: 'Property investment and homeownership optimization.' },
  'credit-cards': { name: 'Credit Cards', desc: 'Rewards maximization and credit optimization tactics.' },
  'retirement-planning': { name: 'Retirement Planning', desc: 'Retirement income and withdrawal optimization.' },
  'budgeting': { name: 'Budgeting', desc: 'Spending optimization and financial tracking systems.' },
  'saving-money': { name: 'Saving Money', desc: 'Cost reduction and savings optimization frameworks.' },
  'making-money': { name: 'Making Money', desc: 'Income optimization and side income strategies.' }
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

  return (
    <div className="bg-light-slate min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-12 text-center md:text-left bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <div className="inline-block bg-light-slate text-charcoal font-semibold px-4 py-2 rounded-full border border-gray-200 mb-6">
            Optimization Category
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">{categoryData.name} Strategies</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            {categoryData.desc} Browse our latest articles focusing on extracting the absolute maximum value from this aspect of your finances.
          </p>
        </header>

        {/* Placeholder grid for category posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <ArticleCard 
            slug="example-post"
            title={`Example Optimization Strategy for ${categoryData.name}`}
            excerpt="This is a placeholder for a dynamic article that would fall under this specific strategic category."
            category={categoryData.name}
            author="Andrew Carrothers"
            date="March 16, 2026"
            imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop"
          />
           <ArticleCard 
             slug="example-post-2"
             title={`Advanced ${categoryData.name} Techniques`}
             excerpt="Detailed breakdown of how high net-worth individuals approach this specific component of wealth management."
             category={categoryData.name}
             author="Andrew Carrothers"
             date="March 10, 2026"
             imageUrl="https://images.unsplash.com/photo-1579621970588-a3f5ce599fac?q=80&w=800&auto=format&fit=crop"
           />
        </div>
      </div>
    </div>
  );
}
