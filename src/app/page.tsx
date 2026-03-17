import Button from "@/components/ui/Button";
import ArticleCard from "@/components/ui/ArticleCard";
import EbookCard from "@/components/ui/EbookCard";
import Link from 'next/link';
import Image from 'next/image';

const FOCUS_AREAS = [
  { name: 'Personal Finance', icon: '📈', desc: 'Overall financial optimization and planning', slug: '/category/personal-finance' },
  { name: 'Investing', icon: '🏦', desc: 'Portfolio optimization and wealth building', slug: '/category/investing' },
  { name: 'Taxes', icon: '🧾', desc: 'Tax optimization and minimization strategies', slug: '/category/taxes' },
  { name: 'Real Estate', icon: '🏠', desc: 'Property investment and homeownership', slug: '/category/real-estate' },
  { name: 'Credit Cards', icon: '💳', desc: 'Rewards maximization and credit optimization', slug: '/category/credit-cards' },
  { name: 'Retirement Planning', icon: '🏖️', desc: 'Retirement income and withdrawal optimization', slug: '/category/retirement-planning' },
  { name: 'Budgeting', icon: '📊', desc: 'Spending optimization and financial tracking', slug: '/category/budgeting' },
  { name: 'Saving Money', icon: '💰', desc: 'Cost reduction and savings optimization', slug: '/category/saving-money' },
  { name: 'Making Money', icon: '🚀', desc: 'Income optimization and side income strategies', slug: '/category/making-money' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-light-slate py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight">
            Optimize Your Finances.<br/> Maximize Your Wealth.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Actionable strategies and advanced tactics to help Canadians extract the maximum value from their money. Go beyond the basics and start optimizing today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" href="#newsletter" className="w-full sm:w-auto text-lg px-8 py-4">
              Get the Free 5-Day Guide
            </Button>
            <Button variant="secondary" href="/blog" className="w-full sm:w-auto text-lg px-8 py-4 border-2">
              Read the Latest Strategies
            </Button>
          </div>
        </div>
      </section>

      {/* Focus Areas Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Core Optimization Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose a category to dive deep into targeted financial strategies tailored for Canadians.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOCUS_AREAS.map((area) => (
              <Link key={area.name} href={area.slug} className="group p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-canadian-red/30 transition-all bg-white flex flex-col items-center text-center">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{area.icon}</div>
                <h3 className="text-xl font-semibold text-charcoal group-hover:text-canadian-red mb-2 transition-colors">{area.name}</h3>
                <p className="text-gray-500 text-sm">{area.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-20 bg-light-slate">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Latest Strategies</h2>
              <p className="text-gray-600">Our most recent optimization tactics for your wallet.</p>
            </div>
            <Link href="/blog" className="text-canadian-red font-semibold hover:text-canadian-red-hover mt-4 md:mt-0 inline-flex items-center gap-1 group">
              View All Articles 
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div>
        </div>
      </section>

      {/* Featured Ebook Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 bg-charcoal rounded-2xl overflow-hidden p-8 lg:p-12 text-white">
            <div className="lg:w-1/2">
              <span className="text-canadian-red font-bold tracking-wider uppercase text-sm mb-4 block">Featured Ebook</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">The Canadian Tax Optimization Checklist</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Stop leaving money on the table. A comprehensive 50-step checklist to ensure you are utilizing every deduction, credit, and strategy allowed by the CRA.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3"><span className="text-canadian-red">✓</span> Over 50 specific tax strategies</li>
                <li className="flex items-center gap-3"><span className="text-canadian-red">✓</span> Small business owner optimizations</li>
                <li className="flex items-center gap-3"><span className="text-canadian-red">✓</span> End-of-year action plan</li>
              </ul>
              <div className="flex items-center gap-6">
                 <Button variant="primary" href="/ebooks/tax-checklist" className="px-8 font-semibold">Get it Now for $29 CAD</Button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
               <div className="relative w-full max-w-sm aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
                 <Image 
                    src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop" 
                    alt="Ebook Cover" 
                    fill 
                    className="object-cover"
                 />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-24 bg-canadian-red text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get the 5-Day Optimization Starter Guide</h2>
          <p className="text-red-100 text-lg mb-10">
            Join thousands of Canadians optimizing their wealth. Enter your email to receive our free starter guide and weekly actionable tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="px-4 py-4 rounded-md text-charcoal w-full focus:outline-none focus:ring-2 focus:ring-charcoal"
              required
            />
            <button 
              type="submit" 
              className="bg-charcoal text-white px-8 py-4 rounded-md font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap"
            >
              Send My Guide
            </button>
          </form>
          <p className="text-red-200 text-xs mt-4">No spam. Unsubscribe at any time.</p>
        </div>
      </section>
    </>
  );
}
