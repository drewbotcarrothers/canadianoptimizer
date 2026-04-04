import EbookCard from "@/components/ui/EbookCard";

export default function Ebooks() {
  return (
    <div className="bg-light-slate min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Digital eBooks - To Help You Optimize Your Life</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            A Canadian’s complete guide to keeping more of your hard-earned money. 2026 Tax Year Edition.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-left">
          <EbookCard 
            slug="tax-guide"
            title="How To Reduce Your Taxes & Maximize Your Refund"
            description="The definitive 2026 guide to Canadian tax optimization. Learn how to leverage the new 14% bracket, maximize the $60k HBP, and retain more of your income."
            price={49.00}
            imageUrl="/assets/images/tax-ebook-2026.png"
          />
        </div>
      </div>
    </div>
  );
}
