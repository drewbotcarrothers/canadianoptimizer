'use client';

import { useSearchParams } from 'next/navigation';

/** Shows the Stripe Checkout session reference so support can match a buyer to a payment. */
export default function SessionReference() {
  const params = useSearchParams();
  const sessionId = params.get('session_id');
  if (!sessionId) return null;
  return (
    <p className="rounded-lg bg-light-slate px-4 py-3 font-mono text-xs text-gray-600 break-all">
      Order reference: {sessionId}
    </p>
  );
}
