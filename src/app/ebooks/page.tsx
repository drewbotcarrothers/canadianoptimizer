import EbookCard from "@/components/ui/EbookCard";

export default function Ebooks() {
  return (
    <div className="bg-light-slate min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Premium Guides & Checklists</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Deep-dive frameworks and comprehensive tools to help you execute specific financial strategies.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <EbookCard 
            slug="tax-checklist"
            title="The Canadian Tax Optimization Checklist"
            description="50+ strategies to minimize your tax burden and retain more of your income. Updated for the current tax year."
            price={29.00}
            imageUrl="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop"
          />
           <EbookCard 
            slug="smith-maneuver-guide"
            title="The Definitive Smith Maneuver Guide"
            description="A step-by-step masterclass on how to convert your non-deductible mortgage interest into tax deductions."
            price={49.00}
            imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop"
          />
           <EbookCard 
            slug="credit-card-churning-system"
            title="The Automated Churning System"
            description="Travel hacking for busy professionals. How to earn hundreds of thousands of points per year with minimal effort."
            price={19.00}
            imageUrl="https://images.unsplash.com/photo-1589758438368-0c5348a954dc?q=80&w=800&auto=format&fit=crop"
          />
        </div>
      </div>
    </div>
  );
}
