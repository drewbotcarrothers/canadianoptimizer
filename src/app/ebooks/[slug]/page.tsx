import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Button from '@/components/ui/Button';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

const ebooks = [
  {
    slug: 'tax-checklist',
    title: 'The Canadian Tax Optimization Checklist',
    price: '$29 CAD',
    description: 'Stop leaving money on the table. A comprehensive 50-step checklist to ensure you are utilizing every deduction, credit, and strategy allowed by the CRA.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2000&auto=format&fit=crop',
    features: [
      'Over 50 specific tax strategies',
      'Small business owner optimizations',
      'End-of-year action plan',
      'Step-by-step implementation guide',
      'Lifetime updates included'
    ]
  },
  {
    slug: 'smith-maneuver-guide',
    title: 'The Definitive Smith Maneuver Guide',
    price: '$49 CAD',
    description: 'A step-by-step masterclass on how to convert your non-deductible mortgage interest into tax deductions.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000&auto=format&fit=crop',
    features: [
      'Mortgage conversion mechanics',
      'Investment loan structuring',
      'Tax deduction optimization',
      'Risk management strategies',
      'Portfolio building framework'
    ]
  },
  {
    slug: 'credit-card-churning-system',
    title: 'The Automated Churning System',
    price: '$19 CAD',
    description: 'Travel hacking for busy professionals. How to earn hundreds of thousands of points per year with minimal effort.',
    image: 'https://images.unsplash.com/photo-1589758438368-0c5348a954dc?q=80&w=2000&auto=format&fit=crop',
    features: [
      'Top 10 high-value card rotation',
      'Meeting minimum spend hacks',
      'Credit score protection tips',
      'Points valuation matrix',
      'Booking first class for free'
    ]
  }
];

export function generateStaticParams() {
  return ebooks.map((ebook) => ({
    slug: ebook.slug,
  }));
}

export default async function EbookPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const ebook = ebooks.find(e => e.slug === resolvedParams.slug) || ebooks[0];

  return (
    <div className="pb-20">
      <SchemaMarkup 
        type="Product" 
        data={{
          name: ebook.title,
          description: ebook.description,
          image: [ebook.image],
          offers: {
            '@type': 'Offer',
            price: ebook.price.replace('$', '').replace(' CAD', ''),
            priceCurrency: 'CAD',
            availability: 'https://schema.org/InStock'
          }
        }} 
      />
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs 
            items={[
              { label: 'Ebooks', href: '/ebooks' },
              { label: ebook.title }
            ]} 
          />
          
          <div className="flex flex-col md:flex-row gap-12 mt-8">
            {/* Product Image */}
            <div className="md:w-1/2">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <Image 
                  src={ebook.image} 
                  alt={ebook.title} 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <span className="text-canadian-red font-bold uppercase tracking-widest text-sm mb-4">Featured Guide</span>
              <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
                {ebook.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {ebook.description}
              </p>
              
              <div className="bg-light-slate rounded-2xl p-8 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-charcoal font-bold text-lg">One-time Investment</span>
                  <span className="text-3xl font-black text-canadian-red">{ebook.price}</span>
                </div>
                <Button variant="primary" className="w-full text-center py-4 text-xl">
                  Get Instant Access
                </Button>
                <p className="text-center text-xs text-gray-500 mt-4">Safe & Secure Payment via Stripe</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-charcoal uppercase tracking-wide text-sm">What's Inside:</h3>
                <ul className="grid grid-cols-1 gap-3">
                  {ebook.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-canadian-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Satisfaction Guarantee */}
      <section className="bg-charcoal py-16 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-canadian-red" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4">100% Satisfaction Guarantee</h2>
          <p className="text-gray-300 mb-0">If this optimization guide doesn't provide value worth at least 10x your investment, contact us within 30 days for a full, no-questions-asked refund.</p>
        </div>
      </section>
    </div>
  );
}
