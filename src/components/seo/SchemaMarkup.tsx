import Head from 'next/head';

interface SchemaProps {
  type: 'Article' | 'Product' | 'WebSite';
  data: any;
}

export default function SchemaMarkup({ type, data }: SchemaProps) {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
    />
  );
}
