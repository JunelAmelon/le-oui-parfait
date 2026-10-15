import type { Metadata } from 'next';
import { ArticleLandingPage, ArticleSection } from '@/components/ArticleLanding';

const url = 'https://leouiparfait.com/organisation-mariage-cle-en-main-prix';

export const metadata: Metadata = {
  title: 'Organisation de mariage clé en main : prix, étapes, et pour qui c’est fait',
  description:
    'Organisation clé en main : comprendre le prix, les étapes, et comment déléguer sans perdre le contrôle. Île-de-France.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Organisation mariage clé en main : prix',
    description: 'Prix, étapes, erreurs à éviter et vérification de disponibilité.',
    url,
    type: 'article',
  },
};

export default function OrganisationCleEnMainPrixPage() {
  return (
    <ArticleLandingPage
      eyebrow="Organisation Clé en Main"
      title="Organisation de mariage clé en main : prix, étapes, et pour qui c’est fait"
      intro="Si tu veux un mariage élégant, sans charge mentale, et que tu refuses de passer tes soirées à relancer des prestataires : la clé en main est souvent la formule la plus logique."
      image="/wedding%20(1).jpg"
    >
      <ArticleSection title="Réponse directe" highlight>
        <p>
          Le prix d’une organisation clé en main dépend du niveau de complexité (budget, nombre d’invités, lieu, scénographie), du temps restant et du niveau de délégation.
          La clé en main te fait gagner du temps et sécurise chaque étape.
        </p>
      </ArticleSection>

      <ArticleSection title="Les problèmes cachés (quand on fait seul)">
        <ul>
          <li>Prestataires réservés trop tard (peu de choix, prix plus haut).</li>
          <li>Planning incohérent (retards, photos bâclées, stress).</li>
          <li>Budget non piloté (options cumulées, dépenses invisibles).</li>
          <li>Décisions prises dans l’urgence (mauvais choix).</li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Solution professionnelle">
        <p>
          La clé en main, c’est un pilotage complet : sélection prestataires, budget, planning, scénographie, coordination, et plan B.
          Tu gardes la vision, on gère l’exécution.
        </p>
      </ArticleSection>
    </ArticleLandingPage>
  );
}
