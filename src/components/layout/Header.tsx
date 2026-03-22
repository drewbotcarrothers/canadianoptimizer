'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const NAV_LINKS = [
  { name: 'Investing', href: '/category/investing' },
  { name: 'Taxes', href: '/category/taxes' },
  { name: 'Real Estate', href: '/category/real-estate' },
  { name: 'Credit Cards', href: '/category/credit-cards' },
  { name: 'Retirement', href: '/category/retirement' },
  { name: 'More', href: '#', isDropdown: true },
  { name: 'Ebooks', href: '/ebooks' },
  { name: 'About', href: '/about' },
];

const SECONDARY_LINKS = [
  { name: 'Budgeting & Saving', href: '/category/budgeting-saving' },
  { name: 'Earning More', href: '/category/earning-more' },
  { name: 'Insurance', href: '/category/insurance' },
  { name: 'Government Benefits', href: '/category/government-benefits' },
  { name: 'Blog', href: '/blog' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image 
            src="/assets/logo.png" 
            alt="Canadian Optimizer Logo" 
            width={180} 
            height={40} 
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <div key={link.name} className="relative group/item">
              {link.isDropdown ? (
                <>
                  <button 
                    className="font-medium text-gray-700 hover:text-canadian-red transition-colors text-sm flex items-center gap-1 py-4"
                    onMouseEnter={() => setIsCategoriesOpen(true)}
                    onMouseLeave={() => setIsCategoriesOpen(false)}
                  >
                    {link.name}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </button>
                  {isCategoriesOpen && (
                    <div 
                      className="absolute top-full left-0 w-64 bg-white shadow-xl border border-gray-100 rounded-b-xl py-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                      onMouseEnter={() => setIsCategoriesOpen(true)}
                      onMouseLeave={() => setIsCategoriesOpen(false)}
                    >
                      {SECONDARY_LINKS.map((sLink) => (
                        <Link 
                          key={sLink.name} 
                          href={sLink.href}
                          className="block px-6 py-2.5 text-sm text-gray-700 hover:bg-light-slate hover:text-canadian-red transition-colors font-medium"
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
                  className="font-medium text-gray-700 hover:text-canadian-red transition-colors text-sm py-4 block"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link 
            href="#newsletter" 
            className="bg-canadian-red text-white px-6 py-2.5 rounded-lg hover:bg-canadian-red-hover transition-all font-bold text-sm tracking-wide uppercase shadow-lg shadow-red-100 active:scale-95"
          >
            JOIN FREE
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-charcoal hover:text-canadian-red p-2"
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
      <div className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out absolute w-full shadow-2xl ${isMenuOpen ? 'max-h-[90vh] opacity-100 py-8' : 'max-h-0 opacity-0 py-0'}`}>
        <div className="px-6 space-y-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2 block">Core Strategies</span>
            {NAV_LINKS.filter(l => !l.isDropdown).map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-charcoal hover:text-canadian-red transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {SECONDARY_LINKS.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-charcoal hover:text-canadian-red transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="pt-4">
            <Link 
              href="#newsletter" 
              className="block w-full text-center bg-canadian-red text-white py-4 rounded-xl font-bold shadow-lg shadow-red-100 hover:bg-canadian-red-hover transition-all uppercase tracking-widest"
              onClick={() => setIsMenuOpen(false)}
            >
              JOIN FREE
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
