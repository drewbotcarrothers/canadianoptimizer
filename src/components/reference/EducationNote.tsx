import Link from 'next/link';

export default function EducationNote() {
  return (
    <aside className="bg-light-slate border-l-4 border-canadian-red px-4 py-3 mb-8 text-charcoal">
      <p className="mb-0">
        This is general education. It is not financial, tax, or legal advice. Check the figures against the official pages before you contribute or file.{' '}
        <Link href="/disclaimer/" className="font-semibold text-canadian-red hover:underline">
          Disclaimer
        </Link>
        .
      </p>
    </aside>
  );
}
