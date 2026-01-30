import './globals.css';
import type { Metadata } from 'next';
import { Inter, Libre_Baskerville } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const baskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-baskerville',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Le Oui Parfait - Organisation de Mariages',
  description: 'Organisateur de mariage élégant et professionnel pour créer votre jour parfait',
  openGraph: {
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${baskerville.variable} font-sans`}>{children}</body>
    </html>
  );
}
