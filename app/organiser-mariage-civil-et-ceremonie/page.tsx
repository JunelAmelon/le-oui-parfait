import type { Metadata } from 'next';
import { ArticleLandingPage, ArticleSection } from '@/components/ArticleLanding';

const url = 'https://leouiparfait.com/organiser-mariage-civil-et-ceremonie';

export const metadata: Metadata = {
  title: 'Mariage civil + cérémonie : comment organiser sans stress ? ',
  description:
    'Mariage civil + cérémonie : étapes, timing, pièges et méthode simple pour une journée fluide. Vérifier votre disponibilité en Île-de-France.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Mariage civil + cérémonie : organiser sans stress',
    description: 'Étapes + timing + méthode + CTA disponibilité.',
    url,
    type: 'article',
  },
};

export default function OrganiserMariageCivilEtCeremoniePage() {
  return (
    <ArticleLandingPage
      eyebrow="Organisation"
      title="Mariage civil + cérémonie : comment organiser sans stress ?"
      intro="Deux moments à orchestrer (mairie + cérémonie + réception) = deux fois plus de timing, de déplacements, et de risques de retards. La clé, c’est un déroulé clair et une coordination fluide."
      image="/mairie.jpg"
    >
      <ArticleSection title="Réponse directe" highlight>
        <p>
          Pour organiser sans stress : 1) fixer les horaires non négociables (mairie), 2) calculer les temps de trajets + marges, 3) construire un déroulé minute par minute, et 4) confier le pilotage à quelqu’un le jour J.
        </p>
      </ArticleSection>

      <ArticleSection title="Les problèmes cachés">
        <ul>
          <li>Retards de préparation → photos écourtées.</li>
          <li>Trajets sous-estimés (parking, circulation, invités).</li>
          <li>Invités perdus entre mairie / cérémonie / réception.</li>
          <li>Pas de plan B météo ou logistique.</li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Solution professionnelle">
        <p>
          Une wedding planner (ou une coordination jour J) sécurise le déroulé, brief les prestataires, gère les imprévus et garde le timing. Résultat : tu vis ton mariage au lieu de le gérer.
        </p>
      </ArticleSection>
    </ArticleLandingPage>
  );
}
