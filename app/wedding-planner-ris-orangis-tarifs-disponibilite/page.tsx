import type { Metadata } from 'next';
import { ArticleLandingPage, ArticleSection } from '@/components/ArticleLanding';

const url = 'https://leouiparfait.com/wedding-planner-ris-orangis-tarifs-disponibilite';

export const metadata: Metadata = {
  title: 'Wedding planner Ris-Orangis : tarifs et disponibilité',
  description:
    'Wedding planner à Ris-Orangis : tarifs, formules (jour J, partielle, clé en main) et vérification rapide de disponibilité pour votre date.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Wedding planner Ris-Orangis : tarifs et disponibilité',
    description: 'Tarifs + disponibilité en 30 min sur WhatsApp.',
    url,
    type: 'article',
  },
};

export default function WeddingPlannerRisOrangisTarifsPage() {
  return (
    <ArticleLandingPage
      eyebrow="Ris-Orangis"
      title="Wedding planner Ris-Orangis : tarifs et disponibilité"
      intro="Si tu cherches une wedding planner à Ris-Orangis, la vraie question est souvent : “est-ce que tu es dispo pour ma date ?” et “quelle formule me correspond ?”. Ici tu as une réponse claire, et tu peux vérifier ta disponibilité en moins de 30 minutes."
      image="/feu-artifice-lanternes-mariage.jpg"
    >
      <ArticleSection title="Réponse directe" highlight>
        <p>
          Les tarifs dépendent de la formule : coordination jour J (pour profiter sans gérer), organisation partielle (pour structurer), ou clé en main (pour déléguer).
          Le plus important : choisir la formule qui réduit ton stress et sécurise ton planning.
        </p>
      </ArticleSection>

      <ArticleSection title="Pourquoi c’est rentable (même avant le jour J)">
        <ul>
          <li>Tu évites les erreurs de timing (cérémonie, photos, repas).</li>
          <li>Tu gagnes du temps sur les relances et décisions.</li>
          <li>Tu avances avec une méthode claire (et un plan B).</li>
        </ul>
      </ArticleSection>
    </ArticleLandingPage>
  );
}
