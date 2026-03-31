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
    default: 'Le Oui Parfait - Organisatrice de Mariage à Paris & Île-de-France',
    template: '%s | Le Oui Parfait'
  },
  description: 'Organisatrice de mariage à Paris & en Île-de-France. Organisation clé en main, organisation partielle, coordination du jour J, demande en mariage et expériences EVJF/EVG. Transformez vos moments en souvenirs impérissables.',
  keywords: ['organisatrice mariage', 'wedding planner', 'wedding planner paris', 'organisation mariage', 'coordination jour j', 'planification mariage', 'organisation partielle', 'mariage sur mesure', 'décoration mariage', 'Le Oui Parfait'],
  authors: [{ name: 'Le Oui Parfait' }],
  creator: 'Le Oui Parfait',
  publisher: 'Le Oui Parfait',
  metadataBase: new URL('https://leouiparfait.com'),
  alternates: {
    canonical: 'https://leouiparfait.com',
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
    title: 'Le Oui Parfait - Organisatrice de Mariage à Paris & Île-de-France',
    description: 'Organisation de mariage sur mesure : clé en main, organisation partielle, coordination du jour J, demande en mariage et EVJF/EVG à Paris & en Île-de-France.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://leouiparfait.com',
    siteName: 'Le Oui Parfait',
    images: [
      {
        url: 'https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Le Oui Parfait - Organisatrice de Mariage (Paris & Île-de-France)',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Le Oui Parfait - Organisatrice de Mariage (Paris & Île-de-France)',
    description: 'Organisation de mariage sur mesure : clé en main, organisation partielle, coordination du jour J, demande en mariage et EVJF/EVG.',
    creator: '@leouiparfait',
    images: [
      {
        url: 'https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Le Oui Parfait - Organisatrice de Mariage',
      },
    ],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'Wedding Planning',
  icons: {
    icon: [
      { url: '/logo-horizontal.ico', type: 'image/x-icon' },
      { url: '/logo-horizontal.png', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/logo-horizontal.png', type: 'image/png' }],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://leouiparfait.com/#organization',
      name: 'Le Oui Parfait',
      url: 'https://leouiparfait.com',
      logo: 'https://leouiparfait.com/logo-horizontal.png',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+33 6 13 63 44 56',
          contactType: 'customer service',
          areaServed: 'FR',
          availableLanguage: ['fr'],
        },
      ],
      sameAs: [],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://leouiparfait.com/#localbusiness',
      name: 'Le Oui Parfait',
      url: 'https://leouiparfait.com',
      image: ['https://leouiparfait.com/logo-horizontal.png'],
      telephone: '+33 6 13 63 44 56',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '19 rue Albert-Remy',
        addressLocality: 'Ris-Orangis',
        postalCode: '91130',
        addressCountry: 'FR',
      },
      priceRange: '€€€',
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Île-de-France' },
        { '@type': 'City', name: 'Paris' },
      ],
      knowsAbout: [
        'Organisation de mariage',
        'Organisatrice de mariage',
        'Wedding planner Paris',
        'Coordination du jour J',
        'Demande en mariage',
        'EVJF / EVG',
      ],
      parentOrganization: { '@id': 'https://leouiparfait.com/#organization' },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/logo-horizontal.ico" sizes="any" />
        <link rel="icon" href="/logo-horizontal.png" type="image/png" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#88b7b5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} ${baskerville.variable} font-sans`}>{children}</body>
    </html>
  );
}
