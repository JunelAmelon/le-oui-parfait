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
  title: 'Le Oui Parfait - Organisation de Mariages Élégants',
  description: 'Organisateur de mariage professionnel créant des célébrations inoubliables. Planification complète, stylisme de fiançailles et gestion d\'événements sur mesure.',
  metadataBase: new URL('https://leouiparfait.fr'),
  openGraph: {
    title: 'Le Oui Parfait - Organisation de Mariages Élégants',
    description: 'Créez votre mariage de rêve avec notre équipe d\'experts. Planification, stylisme et coordination pour une journée parfaite.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Le Oui Parfait',
    images: [
      {
        url: 'https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Le Oui Parfait - Organisation de Mariages',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Le Oui Parfait - Organisation de Mariages Élégants',
    description: 'Créez votre mariage de rêve avec notre équipe d\'experts',
    images: [
      {
        url: 'https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Le Oui Parfait - Organisation de Mariages',
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
