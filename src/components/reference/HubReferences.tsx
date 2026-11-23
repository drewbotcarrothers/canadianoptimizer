import Link from 'next/link';
import { referencesForHub } from '@/data/reference-hubs';

export default function HubReferences({ categorySlug }: { categorySlug: string }) {
  const items = referencesForHub(categorySlug);
  if (items.length === 0) return null;

  return (
    <section aria-labelledby="reference-heading" className="mb-16">
      <div className="mb-6">
        <h2 id="reference-heading" className="text-3xl font-bold text-charcoal mb-2">
          Reference
        </h2>
        <p className="text-gray-600 max-w-3xl">
          Standing pages for the limits and the rates. Each figure names the official page it came from and the date that page was checked.
        </p>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <li key={item.href} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-lg font-bold text-charcoal mb-2">
              <Link href={item.href} className="hover:text-canadian-red">
                {item.title}
              </Link>
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
