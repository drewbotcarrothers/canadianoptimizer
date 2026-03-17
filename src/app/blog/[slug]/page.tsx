import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import AffiliateDisclosure from '@/components/ui/AffiliateDisclosure';
import AuthorBio from '@/components/ui/AuthorBio';
import EndOfPostNewsletter from '@/components/ui/EndOfPostNewsletter';
import Button from '@/components/ui/Button';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

// Placeholder data - in a real app this would come from a CMS or local markdown
const posts = [
  {
    slug: 'optimizing-canadian-taxes-2026',
    title: 'Optimizing Canadian Taxes: The 2026 Advanced Guide',
    excerpt: 'Stop leaving money on the table. Discover the advanced tactics high-net-worth Canadians are using to minimize their tax burden this year.',
    category: 'Taxes',
    categorySlug: 'taxes',
    date: 'March 15, 2026',
    author: 'Andrew Carrothers',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000&auto=format&fit=crop',
    content: `
      <p class="lead">Tax optimization is not about evasion; it's about using the rules the CRA has provided to your maximum advantage. In this guide, we break down the three-pillar strategy for 2026.</p>
      
      <h2>1. The Corporate Integration Trap</h2>
      <p>Many business owners fail to properly integrate their personal and corporate tax strategies. By balancing dividends and salary effectively, you can keep your marginal rate significantly lower.</p>
      
      <h2>2. Advanced RRSP Timing</h2>
      <p>It's not just about contributing; it's about <em>when</em> you claim the deduction. If you expect your income to rise significantly next year, consider deferring the deduction claim while making the contribution today.</p>
      
      <blockquote>
        "The most expensive advice is the tax advice you didn't seek until April."
      </blockquote>
      
      <h2>3. TFSA Multipliers</h2>
      <p>Using your TFSA for high-growth, high-yield investments rather than simple 'safe' interest is one of the fastest ways to build tax-free wealth in Canada.</p>
    `
  }
];

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = posts.find(p => p.slug === resolvedParams.slug) || posts[0];

  return (
    <article className="pb-20">
      <SchemaMarkup 
        type="Article" 
        data={{
          headline: post.title,
          description: post.excerpt,
          image: [post.image],
          datePublished: post.date,
          author: {
            '@type': 'Person',
            name: post.author,
            url: 'https://canadianoptimizer.com/about'
          }
        }} 
      />
      {/* Hero Header */}
      <section className="bg-light-slate py-16 mb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs 
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.category, href: `/category/${post.categorySlug}` },
              { label: post.title }
            ]} 
          />
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" alt={post.author} width={32} height={32} />
              </div>
              <span className="font-semibold text-charcoal">{post.author}</span>
            </div>
            <span>{post.date}</span>
            <span className="bg-red-50 text-canadian-red px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[10px]">
              {post.category}
            </span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-10 shadow-xl">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>
            
            <AffiliateDisclosure />
            
            <div 
              className="prose prose-lg prose-red max-w-none prose-headings:text-charcoal prose-blockquote:border-canadian-red prose-blockquote:bg-red-50 prose-blockquote:p-6 prose-blockquote:rounded-r-lg prose-img:rounded-2xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <hr className="my-12 border-gray-100" />
            
            <AuthorBio 
              name="Andrew Carrothers"
              role="Strategy Lead & Founder"
              bio="Andrew is a financial strategist dedicated to helping Canadians optimize every dollar. With over 15 years of experience in personal finance and portfolio optimization, he focuses on tactical wealth building."
              imageUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
            />
            
            <EndOfPostNewsletter />
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-24">
              <div className="bg-charcoal text-white rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Optimization Toolbox</h3>
                <p className="text-gray-300 text-sm mb-6">Access our most powerful calculators and templates to start optimizing today.</p>
                <div className="space-y-3">
                  <Button variant="primary" className="w-full text-center py-3">Tax Calculator 2026</Button>
                  <Button variant="secondary" className="w-full text-center py-3 text-white border-white/20 hover:bg-white/10">Portfolio Auditor</Button>
                </div>
              </div>

              <div className="border border-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-charcoal mb-4">Related Strategies</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="group block">
                      <span className="text-xs font-bold text-canadian-red uppercase tracking-wide">Banking</span>
                      <h4 className="font-bold text-charcoal group-hover:text-canadian-red transition-colors">The 2026 High-Interest Account Comparison</h4>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group block">
                      <span className="text-xs font-bold text-canadian-red uppercase tracking-wide">Investing</span>
                      <h4 className="font-bold text-charcoal group-hover:text-canadian-red transition-colors">7 Dividend Stocks for the Canadian Core</h4>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
