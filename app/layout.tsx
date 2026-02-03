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
  title: {
    default: 'Le Oui Parfait - Organisation de Mariages Élégants & Fiançailles',
    template: '%s | Le Oui Parfait'
  },
  description: 'Organisateur de mariage professionnel créant des célébrations inoubliables. Planification complète, stylisme de fiançailles et gestion d\'événements sur mesure. Transformez vos moments en souvenirs impérissables.',
  keywords: ['organisateur mariage', 'wedding planner', 'planification mariage', 'stylisme fiançailles', 'organisation événement', 'mariage élégant', 'coordinateur mariage', 'décoration mariage', 'mariage sur mesure', 'Le Oui Parfait'],
  authors: [{ name: 'Le Oui Parfait' }],
  creator: 'Le Oui Parfait',
  publisher: 'Le Oui Parfait',
  metadataBase: new URL('https://leouiparfait.fr'),
  alternates: {
    canonical: 'https://leouiparfait.fr',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Le Oui Parfait - Organisation de Mariages Élégants & Fiançailles',
    description: 'Créez votre mariage de rêve avec notre équipe d\'experts. Planification, stylisme et coordination pour une journée parfaite. Transformez vos moments en souvenirs impérissables.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://leouiparfait.fr',
    siteName: 'Le Oui Parfait',
    images: [
      {
        url: 'https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Le Oui Parfait - Organisation de Mariages Élégants',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Le Oui Parfait - Organisation de Mariages Élégants',
    description: 'Créez votre mariage de rêve avec notre équipe d\'experts. Planification, stylisme et coordination pour une journée parfaite.',
    creator: '@leouiparfait',
    images: [
      {
        url: 'https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Le Oui Parfait - Organisation de Mariages',
      },
    ],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'Wedding Planning',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#88b7b5" />
      </head>
      <body className={`${inter.variable} ${baskerville.variable} font-sans`}>{children}</body>
    </html>
  );
}
