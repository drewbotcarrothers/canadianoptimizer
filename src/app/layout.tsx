import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Script from 'next/script';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Canadian Optimizer',
  description: 'Canadian Optimizer provides Canadians with actionable strategies and tips to optimize their financial life with the goal of maximizing wealth.',
  verification: {
    google: 'uKSOZZKDif-3svSxtPibw_otl90IZ__U4dDMe-L03IM',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F9J729SEZS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-F9J729SEZS');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col font-sans text-charcoal bg-white`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
