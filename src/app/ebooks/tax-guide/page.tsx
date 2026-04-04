import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function TaxEbookLandingPage() {
  const chapters = [
    { title: "Chapter 1", name: "How Canadian Taxes Actually Work", desc: "Foundational understanding of the three-level tax system." },
    { title: "Chapter 2", name: "The Anatomy of a Tax Return", desc: "Deconstructing the T1 General pipeline." },
    { title: "Chapter 3", name: "The Most Expensive Mistake Canadians Make", desc: "Why $1,200+ goes unclaimed every year." },
    { title: "Chapter 4", name: "Deductions That Lower Your Taxable Income", desc: "The 'above-the-line' strategies." },
    { title: "Chapter 8", name: "Maximizing Your T4 Tax Position", desc: "Negotiating non-taxable benefits like HSAs." },
    { title: "Chapter 9", name: "The RRSP Playbook", desc: "Strategic contributions and the $60k HBP." },
    { title: "Chapter 10", name: "The TFSA — Tax-Free Wealth Builder", desc: "Asset location and contribution mastery." },
    { title: "Chapter 12", name: "Business Expenses", desc: "Home office, vehicle, and equipment rules." },
    { title: "Chapter 13", name: "Incorporation — When It Makes Sense", desc: "The mathematical threshold for incorporating." },
    { title: "Chapter 17", name: "The First Home Savings Account (FHSA)", desc: "Combining FHSA with RRSP for maximum down payment." }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-light-slate to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs 
            items={[
              { label: 'Ebooks', href: '/ebooks' },
              { label: 'Tax Optimization Guide' }
            ]} 
          />
          
          <div className="flex flex-col lg:flex-row items-center gap-12 mt-12">
            <div className="lg:w-3/5 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 bg-canadian-red/10 text-canadian-red font-bold text-sm rounded-full mb-6 uppercase tracking-wider">
                Updated for 2026 Tax Rules
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-charcoal leading-tight mb-6">
                Stop Overpaying the CRA. <br/>
                Keep More of Your <span className="text-canadian-red underline">Hard-Earned Money.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
                The comprehensive framework used by high-net-worth Canadians to legally minimize their tax burden, maximize refunds, and build tax-free wealth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="primary" className="px-10 py-5 text-xl">
                  Download the Guide — $49 CAD
                </Button>
                <Link href="#value" className="px-8 py-5 border-2 border-gray-200 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                  See What's Inside
                </Link>
              </div>
              
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <span>Joined by 1,200+ Canadian Optimizers</span>
              </div>
            </div>
            
            <div className="lg:w-2/5">
              <div className="relative aspect-[3/4] w-full max-w-[400px] mx-auto group">
                <div className="absolute inset-x-0 bottom-0 top-12 bg-charcoal/5 rounded-[40px] blur-3xl group-hover:bg-canadian-red/10 transition-colors"></div>
                <Image 
                  src="/assets/images/tax-ebook-2026.png" 
                  alt="Tax Ebook Cover" 
                  fill 
                  className="object-contain relative z-10 drop-shadow-2xl translate-y-[-10px] group-hover:translate-y-[-20px] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The "2026 Advantage" Section */}
      <section id="value" className="py-20 bg-charcoal text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">The 2026 Advantage</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tax laws changed significantly this year. If you aren't adapting, you're losing money.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-canadian-red rounded-xl flex items-center justify-center mb-6 text-2xl font-bold italic">14%</div>
              <h3 className="text-xl font-bold mb-4">The New 14% Bracket</h3>
              <p className="text-gray-400 leading-relaxed">
                The federal rate drop on the first $58k of income isn't just a simple reduction—it's a massive planning opportunity for income-splitting and RRSP timing.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-canadian-red rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">$60k Home Buyers' Plan</h3>
              <p className="text-gray-400 leading-relaxed">
                With the withdrawal limit increased to $60,000, learn how to pair it with the FHSA for a massive tax-free down payment strategy.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-canadian-red rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">50% Inclusion Locked</h3>
              <p className="text-gray-400 leading-relaxed">
                Unlock the truth about capital gains in 2026. We explain why the 50% rate remained and how to structure your portfolio to take full advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents Section */}
      <section className="py-24 bg-light-slate">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">A Look Premium Inside</h2>
            <p className="text-lg text-gray-600">25 deep-dive chapters covering every corner of the Canadian tax code.</p>
          </div>

          <div className="space-y-4">
            {chapters.map((chapter, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-canadian-red/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-canadian-red font-bold text-sm uppercase tracking-widest">{chapter.title}</span>
                    <h4 className="text-xl font-bold text-charcoal mt-1">{chapter.name}</h4>
                  </div>
                  <p className="text-gray-500 text-sm md:w-1/2">{chapter.desc}</p>
                </div>
              </div>
            ))}
            <div className="text-center pt-8">
              <p className="text-charcoal font-bold mb-4 italic">+ 15 more chapters of actionable strategies</p>
              <div className="h-1 text-gray-200 border-t-2 border-dashed w-32 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Received Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-8 leading-tight">The Payoff: What Your Investment Returns.</h2>
              <ul className="space-y-6">
                {[
                  { val: "$580+", desc: "Estimated annual savings from the 14% bracket optimization alone." },
                  { val: "$1,200+", desc: "In commonly missed deductions identified in the Appendix checklist." },
                  { val: "10x", desc: "Return on investment within the first year of implementation—guaranteed." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 bg-canadian-red/10 rounded-full flex items-center justify-center text-canadian-red font-bold">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="text-2xl font-black text-charcoal">{item.val}</span>
                      <p className="text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-charcoal p-12 rounded-[40px] text-white">
                <p className="text-2xl italic leading-relaxed mb-8">
                  "This guide paid for itself in 10 minutes. I found three credits I hadn't claimed in 5 years. My refund this year is almost $3,000 higher because of Chapter 12 alone."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-600 overflow-hidden">
                    <img src="https://i.pravatar.cc/100?img=12" alt="Reviewer" />
                  </div>
                  <div>
                    <h5 className="font-bold">David S.</h5>
                    <p className="text-gray-400 text-sm">Self-Employed Consultant, Toronto</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-light-slate text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-black text-charcoal mb-8">Ready to keep your money?</h2>
          <p className="text-xl text-gray-600 mb-12">
            Get instant PDF access to the full 25-chapter guide and the 2026 Optimization Checklist.
          </p>
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-gray-400 line-through text-2xl font-bold">$99</span>
              <span className="text-6xl font-black text-canadian-red">$49 CAD</span>
            </div>
            <Button variant="primary" className="w-full text-2xl py-6 mb-6">
              Get Instant Access Now
            </Button>
            <p className="text-gray-500 text-sm">One-time payment. Secure checkout via Stripe.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
