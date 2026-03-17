import Image from 'next/image';

interface AuthorBioProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export default function AuthorBio({ name, role, bio, imageUrl }: AuthorBioProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-center md:items-start my-12">
      <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 shadow-md">
        <Image 
          src={imageUrl} 
          alt={name} 
          fill 
          className="object-cover"
        />
      </div>
      <div>
        <div className="mb-2">
          <h3 className="text-xl font-bold text-charcoal">{name}</h3>
          <p className="text-canadian-red font-semibold text-sm">{role}</p>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          {bio}
        </p>
        <div className="flex gap-3">
          <a href="/about" className="text-sm font-medium text-gray-500 hover:text-canadian-red transition-colors flex items-center gap-1">
            View Full Bio <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
