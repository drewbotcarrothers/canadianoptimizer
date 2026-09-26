import Link from 'next/link';

export default function AffiliateDisclosure() {
  return (
    <aside className="bg-light-slate border-l-4 border-gray-300 px-4 py-3 mb-8 text-sm text-gray-600 rounded-r-md">
      <p>
        <strong className="text-charcoal">Advertising disclosure:</strong> Some links on this page may be affiliate or advertising links. If you use them, Canadian Optimizer may earn a commission at no extra cost to you.{' '}
        <Link href="/disclosure/" className="text-canadian-red hover:underline">
          Read our disclosure
        </Link>
        .
      </p>
    </aside>
  );
}
