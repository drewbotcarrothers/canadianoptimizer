interface SchemaProps {
  type?: string;
  data: Record<string, unknown> | Record<string, unknown>[];
}

function serialize(block: Record<string, unknown>) {
  return JSON.stringify(block).replace(/</g, '\\u003c');
}

export default function SchemaMarkup({ type, data }: SchemaProps) {
  if (Array.isArray(data)) {
    return (
      <>
        {data.map((block, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: serialize(block) }}
          />
        ))}
      </>
    );
  }

  const schema = {
    '@context': 'https://schema.org',
    ...(type ? { '@type': type } : {}),
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serialize(schema) }}
    />
  );
}
