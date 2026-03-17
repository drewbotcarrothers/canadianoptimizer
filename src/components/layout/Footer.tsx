import Link from 'next/link';

const CATEGORIES = [
  { name: 'Personal Finance', slug: '/category/personal-finance' },
  { name: 'Investing', slug: '/category/investing' },
  { name: 'Taxes', slug: '/category/taxes' },
  { name: 'Real Estate', slug: '/category/real-estate' },
  { name: 'Credit Cards', slug: '/category/credit-cards' },
  { name: 'Retirement Planning', slug: '/category/retirement-planning' },
  { name: 'Budgeting', slug: '/category/budgeting' },
  { name: 'Saving Money', slug: '/category/saving-money' },
  { name: 'Making Money', slug: '/category/making-money' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col items-start gap-12 md:flex-row md:justify-between">
        
        {/* Brand Col */}
        <div className="w-full md:w-1/3">
          <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
            <div className="text-canadian-red text-2xl group-hover:text-canadian-red-hover transition-colors">
              🍁
            </div>
            <span className="font-bold text-xl text-white tracking-tight">
              Canadian Optimizer
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Actionable strategies and tips to optimize your financial life, minimize taxes, and maximize wealth in Canada.
          </p>
          <div className="flex gap-4">
             {/* Social links placeholder */}
             <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
             </a>
          </div>
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
