import ArticleCard from "@/components/ui/ArticleCard";

export default function Blog() {
  return (
    <div className="bg-light-slate min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Optimization Strategies</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            The latest tactics and in-depth guides to maximizing your wealth and minimizing your taxes.
          </p>
        </header>

        {/* Sample Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ArticleCard 
            slug="tfsa-contribution-optimization-2026"
            title="TFSA Contribution Optimization Strategy for 2026"
            excerpt="Discover the mathematically optimal way to deploy your new TFSA contribution room on January 1st to maximize tax-free compounding."
            category="Investing"
            author="Andrew Carrothers"
            date="March 15, 2026"
            imageUrl="https://images.unsplash.com/photo-1579621970588-a3f5ce599fac?q=80&w=800&auto=format&fit=crop"
          />
          <ArticleCard 
            slug="card-churning-minimum-spend"
            title="Meeting Minimum Spends: Advanced Credit Card Churning"
            excerpt="How to hit high minimum spend requirements without buying things you don't need or tying up your cash flow."
            category="Credit Cards"
            author="Andrew Carrothers"
            date="March 10, 2026"
            imageUrl="https://images.unsplash.com/photo-1589758438368-0c5348a954dc?q=80&w=800&auto=format&fit=crop"
          />
          <ArticleCard 
            slug="income-splitting-strategies-couples"
            title="Income Splitting Strategies for High/Low Earner Couples"
            excerpt="Spousal RRSPs, prescribed rate loans, and other CRA-approved methods to equalize income and lower your combined tax bill."
            category="Taxes"
            author="Andrew Carrothers"
            date="March 1, 2026"
            imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop"
          />
           <ArticleCard 
            slug="smith-maneuver-tax-strategy"
            title="The Smith Maneuver: Turn Your Mortgage Tax Deductible"
            excerpt="A comprehensive guide to leveraging your home equity to invest and writing off the interest against your income."
            category="Real Estate"
            author="Andrew Carrothers"
            date="February 15, 2026"
            imageUrl="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop"
          />
           <ArticleCard 
            slug="fhsa-vs-rrsp-first-home"
            title="FHSA vs RRSP: Which to Prioritize for Your First Home?"
            excerpt="Breaking down the optimal order of operations for funding your registered accounts when saving for a down payment."
            category="Personal Finance"
            author="Andrew Carrothers"
            date="February 2, 2026"
            imageUrl="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=800&auto=format&fit=crop"
          />
           <ArticleCard 
            slug="zero-based-budgeting-automation"
            title="Automated Zero-Based Budgeting for High Earners"
            excerpt="Stop tracking every coffee. How to set up an automated cash flow system that ensures you save first and spend the rest guilt-free."
            category="Budgeting"
            author="Andrew Carrothers"
            date="January 20, 2026"
            imageUrl="https://images.unsplash.com/photo-1554224154-26032ffc0d04?q=80&w=800&auto=format&fit=crop"
          />
        </div>

        {/* Pagination placeholder */}
        <div className="flex justify-center mt-12">
          <nav className="inline-flex rounded-md shadow-sm" aria-label="Pagination">
            <span className="relative inline-flex items-center rounded-l-md px-4 py-2 text-sm font-semibold text-gray-400 ring-1 ring-inset ring-gray-300">Previous</span>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-canadian-red ring-1 ring-inset ring-canadian-red">1</span>
            <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">2</a>
            <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">3</a>
            <a href="#" className="relative inline-flex items-center rounded-r-md px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Next</a>
          </nav>
        </div>
      </div>
    </div>
  );
}
