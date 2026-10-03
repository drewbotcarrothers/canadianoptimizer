'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const NAV_LINKS = [
  { name: 'Topics', href: '#', isDropdown: true },
  { name: 'Ebooks', href: '/ebooks' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
];

const TOPICS_LINKS = [
  { name: 'Investing', href: '/category/investing' },
  { name: 'Taxes', href: '/category/taxes' },
  { name: 'Real Estate', href: '/category/real-estate' },
  { name: 'Credit Cards', href: '/category/credit-cards' },
  { name: 'Retirement', href: '/category/retirement' },
  { name: 'Budgeting & Saving', href: '/category/budgeting-saving' },
  { name: 'Earning More', href: '/category/earning-more' },
  { name: 'Insurance', href: '/category/insurance' },
  { name: 'Government Benefits', href: '/category/government-benefits' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <Image 
            src="/assets/logo.png" 
            alt="Canadian Optimizer Logo" 
            width={180} 
            height={40} 
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 mx-8">
          {NAV_LINKS.map((link) => (
            <div key={link.name} className="relative group/item">
              {link.isDropdown ? (
                <>
                  <button 
                    className="font-semibold text-gray-600 hover:text-canadian-red transition-colors text-sm flex items-center gap-1 py-4"
                    onMouseEnter={() => setIsCategoriesOpen(true)}
                    onMouseLeave={() => setIsCategoriesOpen(false)}
                  >
                    {link.name}
                    <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                  </button>
                  {isCategoriesOpen && (
                    <div 
                      className="absolute top-full left-0 w-64 bg-white shadow-2xl border border-gray-100 rounded-b-xl py-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                      onMouseEnter={() => setIsCategoriesOpen(true)}
                      onMouseLeave={() => setIsCategoriesOpen(false)}
                    >
                      {TOPICS_LINKS.map((sLink) => (
                        <Link 
                          key={sLink.name} 
                          href={sLink.href}
                          className="block px-6 py-2.5 text-sm text-gray-700 hover:bg-light-slate hover:text-canadian-red transition-colors font-medium border-l-2 border-transparent hover:border-canadian-red"
                          onClick={() => setIsCategoriesOpen(false)}
                        >
                          {sLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link 
                  href={link.href} 
                  className="font-semibold text-gray-600 hover:text-canadian-red transition-colors text-sm py-4 block"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center flex-grow justify-end max-w-xl">
          <div className="relative group w-full max-w-[240px]">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-gray-50 border border-gray-200 rounded-full py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-canadian-red/20 focus:border-canadian-red transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-canadian-red transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-charcoal hover:text-canadian-red p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> :
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out absolute w-full shadow-2xl ${isMenuOpen ? 'max-h-[95vh] opacity-100 py-8 text-center' : 'max-h-0 opacity-0 py-0'}`}>
        <div className="px-6 space-y-8">
          {/* Mobile Search */}
          <div className="relative group max-w-sm mx-auto">
            <input 
              type="text" 
              placeholder="Search topics..." 
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-base focus:outline-none focus:ring-2 focus:ring-canadian-red/20 focus:border-canadian-red transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-canadian-red transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>

          <div className="flex flex-col gap-5">
            {NAV_LINKS.filter(l => !l.isDropdown).map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="text-2xl font-black text-charcoal hover:text-canadian-red transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-gray-100">
            <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-6 block">Explore Topics</span>
            <div className="grid grid-cols-2 gap-4">
              {TOPICS_LINKS.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold text-charcoal/80 hover:text-canadian-red transition-colors p-3 bg-gray-50 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
