import type { Metadata } from 'next';
import { ArticleLandingPage, ArticleSection } from '@/components/ArticleLanding';

const url = 'https://leouiparfait.com/choisir-lieu-mariage-ile-de-france';

export const metadata: Metadata = {
  title: 'Comment choisir un lieu de mariage en Île-de-France (sans se tromper)',
  description:
    'Choisir un lieu en Île-de-France : critères essentiels, pièges, questions à poser, et comment sécuriser la réservation sans stress.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Choisir un lieu de mariage en Île-de-France',
    description: 'Critères, pièges et méthode pour sécuriser le bon lieu.',
    url,
    type: 'article',
  },
};

export default function ChoisirLieuIDFPage() {
  return (
    <ArticleLandingPage
      eyebrow="Lieu de réception"
      title="Comment choisir un lieu de mariage en Île-de-France (sans se tromper)"
      intro="Le lieu décide du budget, du style, du nombre d’invités… et du stress. Si tu choisis mal, tout devient compliqué. Si tu choisis bien, tout devient plus simple."
      image="/location-de-salle-de-mariage.jpg.jpeg"
    >
      <ArticleSection title="Réponse directe" highlight>
        <p>
          Pour choisir le bon lieu en Île-de-France : fixe d’abord ton nombre d’invités et ton budget, puis visite avec une checklist (accès, plan B pluie, contraintes horaires, traiteur imposé, logistique).
        </p>
      </ArticleSection>

      <ArticleSection title="Les pièges cachés">
        <ul>
          <li>Heures de fin / restrictions musique.</li>
          <li>Traiteur imposé + coûts additionnels.</li>
          <li>Plan B pluie inexistant (extérieur).</li>
          <li>Accès / parking / hébergements insuffisants.</li>
        </ul>
        <p>
          Une wedding planner te fait gagner du temps : elle sait quoi vérifier et comment négocier les détails qui coûtent cher si tu les découvres trop tard.
        </p>
      </ArticleSection>
    </ArticleLandingPage>
  );
}
