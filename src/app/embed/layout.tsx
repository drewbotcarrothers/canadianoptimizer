export default function EmbedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <style>{`
        header, footer { display: none !important; }
        main { min-height: 0; }
      `}</style>
      {children}
    </div>
  );
}
