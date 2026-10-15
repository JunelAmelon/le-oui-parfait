import type { Metadata } from 'next';
import { ArticleLandingPage, ArticleSection } from '@/components/ArticleLanding';

const url = 'https://leouiparfait.com/devis-wedding-planner-contenu';

export const metadata: Metadata = {
  title: 'Devis wedding planner : que doit contenir une offre sérieuse ?',
  description:
    'Devis wedding planner : ce qui doit être inclus (rendez-vous, rétroplanning, coordination, présence, limites). Éviter les offres floues.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Devis wedding planner : contenu',
    description: 'Les points à vérifier + erreurs à éviter + CTA disponibilité.',
    url,
    type: 'article',
  },
};

export default function DevisWeddingPlannerContenuPage() {
  return (
    <ArticleLandingPage
      eyebrow="Devis"
      title="Devis wedding planner : que doit contenir une offre sérieuse ?"
      intro="Beaucoup de devis semblent “bien”… jusqu’au moment où tu réalises que ce n’était pas inclus. Voici les points indispensables à vérifier pour éviter les mauvaises surprises."
      image="/alliance.jpg"
    >
      <ArticleSection title="Réponse directe" highlight>
        <p>
          Un devis sérieux précise : le périmètre exact, les rendez-vous, le rétroplanning, les échanges prestataires, la présence le jour J, les horaires, ce qui est hors prestation, et les options.
        </p>
      </ArticleSection>

      <ArticleSection title="Les problèmes cachés (dans les offres floues)">
        <ul>
          <li>“Coordination” sans reprise du planning → tu restes seule sur la logistique.</li>
          <li>Présence limitée non dite → stress le jour J.</li>
          <li>Pas de plan B / pas de brief prestataires.</li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Solution pro">
        <p>
          Notre approche : clarté, méthode, et pilotage. Tu sais exactement ce que tu achètes — et surtout ce que tu gagnes (temps, sérénité, cohérence).
        </p>
      </ArticleSection>
    </ArticleLandingPage>
  );
}
