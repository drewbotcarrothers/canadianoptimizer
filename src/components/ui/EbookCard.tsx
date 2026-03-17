import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

interface EbookCardProps {
  slug: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

export default function EbookCard({
  slug, title, description, price, imageUrl
}: EbookCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      <Link href={`/ebooks/${slug}`} className="block overflow-hidden relative aspect-[3/4] bg-light-slate">
        <Image 
          src={imageUrl} 
          alt={`Ebook cover for ${title}`} 
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <Link href={`/ebooks/${slug}`} className="block mb-2 flex-grow">
          <h3 className="text-[22px] font-semibold text-charcoal group-hover:text-canadian-red transition-colors mb-2">
            {title}
          </h3>
          <p className="text-gray-600 line-clamp-3 text-sm">
            {description}
          </p>
        </Link>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-charcoal">${price.toFixed(2)}</span>
          <Button variant="primary" href={`/ebooks/${slug}`} className="!py-2 !px-4 text-sm">
            Get Ebook
          </Button>
        </div>
      </div>
    </div>
  );
}
