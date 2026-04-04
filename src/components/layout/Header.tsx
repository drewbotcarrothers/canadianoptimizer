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

const SOCIAL_LINKS = [
  { name: 'YouTube', href: 'https://youtube.com/@canadianoptimizer', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
  { name: 'X', href: 'https://x.com/canadianoptimizer', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z"/></svg> },
  { name: 'TikTok', href: 'https://tiktok.com/@canadianoptimizer', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.31-.75.42-1.24 1.25-1.33 2.1-.01.3.06.6.21.87.26.49.76.85 1.25 1.05.74.32 1.57.34 2.34.14.7-.18 1.34-.58 1.74-1.18.23-.33.39-.71.49-1.1.22-1.31.25-2.62.24-3.95L12.525.02z"/></svg> },
  { name: 'Instagram', href: 'https://instagram.com/canadianoptimizer', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.337-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
  { name: 'Facebook', href: 'https://facebook.com/canadianoptimizer', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
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

        {/* Desktop Search and Social */}
        <div className="hidden lg:flex items-center gap-6 flex-grow justify-end max-w-xl">
          {/* Search Bar */}
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

          {/* Social Icons */}
          <div className="flex items-center gap-2.5 border-l border-gray-100 pl-6 text-gray-400">
            {SOCIAL_LINKS.map((social) => (
              <a 
                key={social.name} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-canadian-red transition-colors p-1"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
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

          {/* Mobile Social */}
          <div className="pt-8 border-t border-gray-100 flex justify-center gap-6 text-gray-400">
            {SOCIAL_LINKS.map((social) => (
              <a 
                key={social.name} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-canadian-red transition-colors border border-gray-100 p-3 rounded-full hover:bg-light-slate"
                onClick={() => setIsMenuOpen(false)}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
