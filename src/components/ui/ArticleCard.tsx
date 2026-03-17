import Link from 'next/link';
import Image from 'next/image';

interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
}

export default function ArticleCard({ 
  slug, title, excerpt, category, author, date, imageUrl 
}: ArticleCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/blog/${slug}`} className="block overflow-hidden relative aspect-video">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </Link>
      
      <div className="p-6">
        <div className="mb-3">
          <span className="inline-block bg-light-slate text-charcoal text-xs font-semibold px-3 py-1 rounded-full border border-gray-200">
            {category}
          </span>
        </div>
        
        <Link href={`/blog/${slug}`} className="block mb-2">
          <h3 className="text-[22px] font-semibold text-charcoal group-hover:text-canadian-red transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {excerpt}
        </p>
        
        <div className="flex items-center text-sm text-gray-500">
          <span className="font-medium">{author}</span>
          <span className="mx-2">&middot;</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}
