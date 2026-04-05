import ArticleCard from "@/components/ui/ArticleCard";
import { posts } from "@/data/posts";

export default function Blog() {
  // Sort posts by date, newest first
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="bg-light-slate min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Optimization Strategies</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            The latest tactics and in-depth guides to maximizing your wealth and minimizing your taxes.
          </p>
        </header>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sortedPosts.map((post) => (
            <ArticleCard 
              key={post.slug}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              author={post.author}
              date={post.date}
              imageUrl={post.image}
            />
          ))}
        </div>


        {/* Pagination placeholder */}
        <div className="flex justify-center mt-12">
          <nav className="inline-flex rounded-md shadow-sm" aria-label="Pagination">
            <span className="relative inline-flex items-center rounded-l-md px-4 py-2 text-sm font-semibold text-gray-400 ring-1 ring-inset ring-gray-300">Previous</span>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-canadian-red ring-1 ring-inset ring-canadian-red">1</span>
            <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">2</a>
            <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">3</a>
            <a href="#" className="relative inline-flex items-center rounded-r-md px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Next</a>
          </nav>
        </div>
      </div>
    </div>
  );
}
