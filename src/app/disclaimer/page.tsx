export default function Disclaimer() {
  return (
    <div className="bg-white min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl prose prose-lg text-gray-700">
        <h1 className="text-4xl font-bold text-charcoal mb-8">Disclaimer</h1>
        <p className="mb-4">Last Updated: March 2026</p>
        
        <div className="bg-light-slate p-6 border-l-4 border-canadian-red mb-8">
          <p className="font-semibold text-charcoal mb-0">
            Canadian Optimizer is an educational platform. The information provided does not constitute financial, investment, legal, or tax advice.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Not Financial Advice</h2>
        <p>
          The strategies, case studies, and numbers presented on Canadian Optimizer are purely for educational purposes and illustration. Past performance of any strategy is not indicative of future results. Every individual's financial situation is entirely unique, and strategies that work for one person may be detrimental or inapplicable to another.
        </p>
        <p>
          Always consult with a licensed professional (such as a CPA, CFP, or tax attorney) before implementing any complex financial strategies, including but not limited to corporate structuring, leveraged investing, or tax deductions.
        </p>

        <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Affiliate Disclosure</h2>
        <p>
          In compliance with Canadian advertising standards and FTC guidelines, please assume that any links on Canadian Optimizer leading to products or services are affiliate links. This means we may earn a commission if you click the link and make a purchase or sign up, at no additional cost to you.
        </p>
        <p>
          We only recommend products, tools, and platforms that we have personally vetted, use in our own setups, or firmly believe will deliver genuine optimization value to our readers.
        </p>

        <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Accuracy of Information</h2>
        <p>
          While we diligently research and verify the information presented (including CRA regulations, bank rates, and tax brackets), legislation and financial products change frequently. We do not guarantee that all information remains perfectly accurate over time. It relies on the reader to verify current figures against primary sources (e.g., the CRA website) before taking action.
        </p>
      </div>
    </div>
  );
}
