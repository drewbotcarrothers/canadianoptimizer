'use client';

import Link from 'next/link';
import { useState } from 'react';

const NAV_LINKS = [
  { name: 'Money', href: '/category/personal-finance' },
  { name: 'Travel', href: '/category/credit-cards' },
  { name: 'Health', href: '/category/saving-money' },
  { name: 'Life', href: '/category/real-estate' },
  { name: 'Ebooks', href: '/ebooks' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-canadian-red text-2xl" aria-hidden="true">🍁</span>
          <span className="font-bold text-xl text-charcoal tracking-tight group-hover:text-canadian-red transition-colors flex items-center">
            Canadian Optimizer
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="font-medium text-gray-700 hover:text-canadian-red transition-colors text-sm"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link 
            href="#newsletter" 
            className="bg-canadian-red text-white px-6 py-2 rounded-md hover:bg-canadian-red-hover transition-colors font-bold text-sm tracking-wide uppercase"
          >
            JOIN FREE
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-charcoal hover:text-canadian-red"
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
      <div className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out absolute w-full shadow-xl ${isMenuOpen ? 'max-h-[80vh] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'}`}>
        <div className="px-6 space-y-4">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-charcoal hover:text-canadian-red transition-colors py-2 border-b border-gray-50 last:border-0"
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
