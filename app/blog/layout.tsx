import type { Metadata } from 'next';

const url = 'https://leouiparfait.com/blog';

export const metadata: Metadata = {
  title: 'Blog | Le Oui Parfait',
  description:
    'Conseils, inspirations et tendances pour organiser votre mariage en Île-de-France : lieux, décoration, planning et prestataires.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Blog | Le Oui Parfait',
    description:
      'Conseils et inspirations pour organiser votre mariage en Île-de-France : lieux, décoration, planning et prestataires.',
    url,
    type: 'website',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
