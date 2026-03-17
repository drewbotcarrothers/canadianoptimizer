'use client';

import Link from 'next/link';
import { useState } from 'react';

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

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          {/* Logo icon representation for now */}
          <div className="text-canadian-red text-2xl group-hover:text-canadian-red-hover transition-colors">
            🍁
          </div>
          <span className="font-bold text-xl text-charcoal tracking-tight group-hover:text-canadian-red transition-colors">
            Canadian Optimizer
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <div className="relative group">
            <button 
              className="font-medium text-gray-700 hover:text-canadian-red transition-colors py-2 flex items-center gap-1"
              onMouseEnter={() => setIsCategoriesOpen(true)}
              onMouseLeave={() => setIsCategoriesOpen(false)}
            >
              Categories
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            
            {/* Dropdown menu */}
            {isCategoriesOpen && (
              <div 
                className="absolute top-full left-0 w-64 bg-white shadow-lg border border-gray-100 rounded-b-md py-2"
                onMouseEnter={() => setIsCategoriesOpen(true)}
                onMouseLeave={() => setIsCategoriesOpen(false)}
              >
                {CATEGORIES.map((cat) => (
                  <Link 
                    key={cat.slug} 
                    href={cat.slug}
                    className="block px-4 py-2 hover:bg-light-slate hover:text-canadian-red transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link href="/blog" className="font-medium text-gray-700 hover:text-canadian-red transition-colors">
            Blog
          </Link>
          <Link href="/ebooks" className="font-medium text-gray-700 hover:text-canadian-red transition-colors">
            Ebooks
          </Link>
          <Link href="/about" className="font-medium text-gray-700 hover:text-canadian-red transition-colors">
            About
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link 
            href="#newsletter" 
            className="bg-canadian-red text-white px-5 py-2.5 rounded hover:bg-canadian-red-hover transition-colors font-medium text-sm"
          >
            Join Free
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
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-4 shadow-lg absolute w-full">
           <Link href="/blog" className="block font-medium text-charcoal hover:text-canadian-red" onClick={() => setIsMenuOpen(false)}>
            Blog
          </Link>
          <Link href="/ebooks" className="block font-medium text-charcoal hover:text-canadian-red" onClick={() => setIsMenuOpen(false)}>
            Ebooks
          </Link>
          <Link href="/about" className="block font-medium text-charcoal hover:text-canadian-red" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <div className="border-t border-gray-100 pt-3">
            <span className="text-sm text-gray-500 font-medium mb-2 block">Categories</span>
            <div className="grid grid-cols-1 gap-2 pl-2">
              {CATEGORIES.map((cat) => (
                <Link 
                  key={cat.slug} 
                  href={cat.slug}
                  className="block text-charcoal hover:text-canadian-red"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
          <Link 
            href="#newsletter" 
            className="block w-full text-center bg-canadian-red text-white py-3 mt-4 rounded hover:bg-canadian-red-hover"
            onClick={() => setIsMenuOpen(false)}
          >
            Join Free
          </Link>
        </div>
      )}
    </header>
  );
}
