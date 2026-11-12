import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BookSalesPage from '@/components/ebooks/BookSalesPage';
import BundleSalesPage from '@/components/ebooks/BundleSalesPage';
import { ALL_PRODUCTS, formatPrice, getProduct } from '@/data/ebooks';
import { buildPageMetadata } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: 'Ebook' };
  const titleSuffix = product.kind === 'book' ? ` (${product.edition}, PDF)` : ' (3 PDFs)';
  return buildPageMetadata({
    title: `${product.title}${titleSuffix} · ${formatPrice(product.slug)}`,
    description: product.metaDescription,
    path: `/ebooks/${product.slug}/`,
    image: product.coverPng,
    imageAlt: `Cover of ${product.title}`,
  });
}

export default async function EbookSalesRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return product.kind === 'book' ? <BookSalesPage book={product} /> : <BundleSalesPage bundle={product} />;
}
