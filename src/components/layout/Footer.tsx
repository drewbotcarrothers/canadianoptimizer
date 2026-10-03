import Link from 'next/link';
import Image from 'next/image';

const CATEGORIES = [
  { name: 'Investing', slug: '/category/investing' },
  { name: 'Taxes', slug: '/category/taxes' },
  { name: 'Real Estate', slug: '/category/real-estate' },
  { name: 'Credit Cards', slug: '/category/credit-cards' },
  { name: 'Retirement', slug: '/category/retirement' },
  { name: 'Budgeting & Saving', slug: '/category/budgeting-saving' },
  { name: 'Earning More', slug: '/category/earning-more' },
  { name: 'Insurance', slug: '/category/insurance' },
  { name: 'Government Benefits', slug: '/category/government-benefits' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col items-start gap-12 md:flex-row md:justify-between">
        
        {/* Brand Col */}
        <div className="w-full md:w-1/3">
          <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
            <Image 
              src="/assets/logo.png" 
              alt="Canadian Optimizer Logo" 
              width={160} 
              height={36} 
              className="h-9 w-auto brightness-0 invert" 
            />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Actionable strategies and tips to optimize your financial life, minimize taxes, and maximize wealth in Canada.
          </p>
        </div>

        {/* Categories Col */}
        <div className="w-full md:w-1/3">
          <h3 className="text-white font-semibold mb-4 border-b border-gray-700 pb-2">Strategies</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm text-gray-400">
            {CATEGORIES.map(cat => (
               <li key={cat.slug}>
                 <Link href={cat.slug} className="hover:text-canadian-red transition-colors">{cat.name}</Link>
               </li>
            ))}
          </ul>
        </div>

        {/* Quick Links Col */}
        <div className="w-full md:w-1/4">
          <h3 className="text-white font-semibold mb-4 border-b border-gray-700 pb-2">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/about" className="hover:text-white transition-colors">About Andrew</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Read the Blog</Link></li>
            <li><Link href="/ebooks" className="hover:text-white transition-colors">Ebooks</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition-colors mt-4 block">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
            <li><Link href="/disclosure" className="hover:text-white transition-colors">Affiliate Disclosure</Link></li>
          </ul>
        </div>

      </div>
      <div className="container mx-auto px-4 max-w-6xl mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Canadian Optimizer. All rights reserved.</p>
        <p className="mt-2 text-xs max-w-2xl mx-auto">The content provided on this website is for informational and educational purposes only and does not constitute financial, investment, or tax advice. Always consult with a qualified professional before making any financial decisions.</p>
      </div>
    </footer>
  );
}
