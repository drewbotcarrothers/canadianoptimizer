import Link from 'next/link';
import { SOURCE_REVIEWED_LABEL } from '@/data/source-review';

export default function ReferenceByline() {
  return (
    <p className="text-sm text-gray-600 mb-6">
      By <Link href="/about/" className="font-semibold text-charcoal hover:text-canadian-red">Andrew</Link>
      <span aria-hidden="true"> · </span>
      <span>As of {SOURCE_REVIEWED_LABEL}</span>
    </p>
  );
}
