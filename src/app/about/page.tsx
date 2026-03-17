import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-white min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">About Andrew</h1>
          <p className="text-xl text-gray-600">The philosophy, experience, and strategy behind Canadian Optimizer.</p>
        </header>

        <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
          <div className="w-full md:w-1/3 relative aspect-square rounded-2xl overflow-hidden shadow-lg">
             {/* Placeholder for Andrew's headshot */}
            <Image 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
              alt="Andrew Carrothers" 
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          
          <div className="w-full md:w-2/3 prose prose-lg max-w-none text-gray-700">
            <h2 className="text-2xl font-bold text-charcoal mb-4">My Financial Optimization Journey</h2>
            <p className="mb-4">
              I'm Andrew Carrothers, the creator of Canadian Optimizer. For the past decade, I've obsessed over the mechanics of wealth building strictly within the Canadian financial ecosystem.
            </p>
            <p className="mb-4">
              Most personal finance advice stops at "buy index funds" and "max your RRSP". But true wealth acceleration happens at the margins. It happens when you implement the Smith Maneuver to make your mortgage tax-deductible. It happens when you structure your corporate dividends to minimize personal tax. It happens when you systematically churn credit cards for five-figure travel returns.
            </p>
            <p>
              I built this platform because I couldn't find a centralized resource specifically dedicated to high-level, actionable financial optimization strategies for Canadians. Everything here is based on deep research, consultation with professionals, and personal implementation.
            </p>
          </div>
        </div>

        <div className="bg-light-slate p-8 md:p-12 rounded-2xl border border-gray-100">
          <h2 className="text-2xl font-bold text-charcoal mb-6 text-center">E-E-A-T Credentials & Transparency</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg text-canadian-red mb-3">Experience</h3>
              <p className="text-gray-600 text-sm">
                Over 10 years of personal implementation of advanced wealth strategies including corporate structuring, tax-loss harvesting, and multi-property real estate investment in Ontario.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-canadian-red mb-3">Expertise</h3>
              <p className="text-gray-600 text-sm">
                Extensive technical research background synthesizing CRA tax codes, Bank of Canada policies, and complex financial products into actionable frameworks.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-canadian-red mb-3">Authoritativeness</h3>
              <p className="text-gray-600 text-sm">
                Strategies are referenced directly against primary official sources (CRA folios, OSFI regulations) and peer-reviewed by qualified Canadian CPAs and CFPs where applicable.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-canadian-red mb-3">Trustworthiness</h3>
              <p className="text-gray-600 text-sm">
                We maintain strict editorial independence. Affiliates never dictate our strategy recommendations, and all relationships are transparently disclosed.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
