import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import AffiliateDisclosure from '@/components/ui/AffiliateDisclosure';
import AuthorBio from '@/components/ui/AuthorBio';
import EndOfPostNewsletter from '@/components/ui/EndOfPostNewsletter';
import Button from '@/components/ui/Button';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import ClientBlogContent from './ClientBlogContent';
import '../blog-content.css';


import { posts } from "@/data/posts";


export function generateStaticParams() {
  const seenSlugs = new Set<string>();
  return posts
    .filter((post) => {
      if (!post || seenSlugs.has(post.slug)) return false;
      seenSlugs.add(post.slug);
      return true;
    })
    .map((post) => ({
      slug: post.slug,
    }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = posts.find(p => p !== undefined && p.slug === resolvedParams.slug);

  if (!post) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link href="/blog" className="text-canadian-red hover:underline mt-4 inline-block">Back to Blog</Link>
      </div>
    );
  }


  const isExactLayout = post.categorySlug === 'taxes' || post.categorySlug === 'retirement';

  if (isExactLayout) {
    const publishDate = new Date(post.date);
    const formattedDate = `Published ${publishDate.toLocaleString('default', { month: 'long' })} ${publishDate.getFullYear()}`;
    const words = post.content.split(/\s+/).length;
    const readTime = Math.ceil(words / 225);

    return (
      <article className="pb-20 blog-content-exact">
        <SchemaMarkup 
          type="Article" 
          data={{
            headline: post.title,
            description: post.excerpt,
            image: [post.image],
            datePublished: post.date,
            author: {
              '@type': 'Person',
              name: post.author === 'Andrew' ? 'Andrew Carrothers' : post.author,
              url: 'https://canadianoptimizer.com/about'
            }
          }} 
        />
        
        {/* Standardized Header for Taxes/Retirement Posts */}
        <header className="exact-header">
          <div className="container mx-auto">
            <h1 className="text-white">{post.title}</h1>
            <div className="meta">
              <span>By {post.author === 'Andrew' ? 'Andrew Carrothers' : post.author}</span> | 
              <span> {formattedDate}</span> | 
              <span> {readTime} min read</span>
            </div>
          </div>
        </header>

        <div className="container mx-auto py-16">
          <ClientBlogContent content={post.content} />

          <div className="max-w-4xl mx-auto">
            <hr className="my-12 border-gray-100" />
            
            <AuthorBio 
              name="Andrew Carrothers"
              role="Strategy Lead & Founder"
              bio="Andrew is a financial strategist dedicated to helping Canadians optimize every dollar. With over 15 years of experience in personal finance and portfolio optimization, he focuses on tactical wealth building."
              imageUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
            />
            
            <EndOfPostNewsletter />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="pb-20">
      <SchemaMarkup 
        type="Article" 
        data={{
          headline: post.title,
          description: post.excerpt,
          image: [post.image],
          datePublished: post.date,
          author: {
            '@type': 'Person',
            name: post.author,
            url: 'https://canadianoptimizer.com/about'
          }
        }} 
      />
      {/* Hero Header */}
      <section className="bg-light-slate py-16 mb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs 
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.category, href: `/category/${post.categorySlug}` },
              { label: post.title }
            ]} 
          />
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" alt={post.author} width={32} height={32} />
              </div>
              <span className="font-semibold text-charcoal">{post.author}</span>
            </div>
            <span>{post.date}</span>
            <span className="bg-red-50 text-canadian-red px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[10px]">
              {post.category}
            </span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-10 shadow-xl">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>
            
            <AffiliateDisclosure />
            
<div 
              className="prose prose-lg prose-red max-w-none prose-headings:text-charcoal prose-blockquote:border-canadian-red prose-blockquote:bg-red-50 prose-blockquote:p-6 prose-blockquote:rounded-r-lg prose-img:rounded-2xl blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />


            <hr className="my-12 border-gray-100" />
            
            <AuthorBio 
              name="Andrew Carrothers"
              role="Strategy Lead & Founder"
              bio="Andrew is a financial strategist dedicated to helping Canadians optimize every dollar. With over 15 years of experience in personal finance and portfolio optimization, he focuses on tactical wealth building."
              imageUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
            />
            
            <EndOfPostNewsletter />
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-24">
              <div className="bg-charcoal text-white rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Optimization Toolbox</h3>
                <p className="text-gray-300 text-sm mb-6">Access our most powerful calculators and templates to start optimizing today.</p>
                <div className="space-y-3">
                  <Button variant="primary" className="w-full text-center py-3">Tax Calculator 2026</Button>
                  <Button variant="secondary" className="w-full text-center py-3 text-white border-white/20 hover:bg-white/10">Portfolio Auditor</Button>
                </div>
              </div>

              <div className="border border-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-charcoal mb-4">Related Strategies</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="group block">
                      <span className="text-xs font-bold text-canadian-red uppercase tracking-wide">Banking</span>
                      <h4 className="font-bold text-charcoal group-hover:text-canadian-red transition-colors">The 2026 High-Interest Account Comparison</h4>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group block">
                      <span className="text-xs font-bold text-canadian-red uppercase tracking-wide">Investing</span>
                      <h4 className="font-bold text-charcoal group-hover:text-canadian-red transition-colors">7 Dividend Stocks for the Canadian Core</h4>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
