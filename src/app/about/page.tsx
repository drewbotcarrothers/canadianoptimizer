import type { Metadata } from 'next';
import Link from 'next/link';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import { authorSchema, buildPageMetadata } from '@/lib/site';

export const metadata: Metadata = buildPageMetadata({
  title: 'About Andrew',
  description:
    'Andrew writes Canadian Optimizer: practical tax, investing, and retirement strategies based on how the Canadian rules actually work.',
  path: '/about/',
});

export default function About() {
  return (
    <div className="bg-white min-h-screen py-16 md:py-24">
      <SchemaMarkup data={[authorSchema()]} />
      <div className="container mx-auto px-4 max-w-4xl">
        
        <header className="text-center mb-16">
          <h1 id="andrew" className="text-4xl md:text-5xl font-bold text-charcoal mb-6">About Andrew</h1>
          <p className="text-xl text-gray-600">The philosophy, experience, and strategy behind Canadian Optimizer.</p>
        </header>

        <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
          <div className="w-full md:w-1/3 aspect-square rounded-2xl bg-canadian-red text-white flex items-center justify-center shadow-lg" aria-hidden="true">
            <span className="text-8xl font-bold">A</span>
          </div>

          <div className="w-full md:w-2/3 prose prose-lg max-w-none text-gray-700">
            <h2 className="text-2xl font-bold text-charcoal mb-4">Meet Andrew</h2>
            <p className="mb-4">
              Andrew is a personal finance expert, DIY investor and life optimizer based in Toronto, Canada. With over 19 years of corporate experience at a leading Canadian company, Andrew combines deep industry knowledge with a passion for technology to help others navigate personal finance and streamline their daily lives.
            </p>
            <p className="mb-4">
              Most personal finance advice stops at &quot;buy index funds&quot; and &quot;max your RRSP.&quot; Andrew started Canadian Optimizer to go further: practical strategies on taxes, registered accounts, investing, real estate, credit cards and government benefits, explained the way the Canadian rules actually work.
            </p>
            <p>
              Every article is researched against primary official sources such as the CRA, ESDC, the Bank of Canada and provincial governments. It is general education, not personalized financial, tax or legal advice.
            </p>
          </div>
        </div>

        <div className="bg-light-slate p-8 md:p-12 rounded-2xl border border-gray-100">
          <h2 className="text-2xl font-bold text-charcoal mb-6 text-center">How Content Is Researched</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg text-canadian-red mb-3">Experience</h3>
              <p className="text-gray-600 text-sm">
                Andrew is a DIY investor with over 19 years of corporate experience at a leading Canadian company.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-canadian-red mb-3">Expertise</h3>
              <p className="text-gray-600 text-sm">
                Articles summarize CRA guidance, Bank of Canada policies, and financial product terms into practical, educational explanations. They are not personalized advice.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-canadian-red mb-3">Authoritativeness</h3>
              <p className="text-gray-600 text-sm">
                Strategies are checked against primary official sources, such as CRA guidance and folios, ESDC benefit pages and provincial government sites, and posts are updated when the rules change.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-canadian-red mb-3">Trustworthiness</h3>
              <p className="text-gray-600 text-sm">
                We maintain strict editorial independence. Advertising relationships do not dictate the strategies, and how the site may earn money is explained on the{' '}
                <Link href="/disclosure/" className="text-canadian-red hover:underline">disclosure page</Link>.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
