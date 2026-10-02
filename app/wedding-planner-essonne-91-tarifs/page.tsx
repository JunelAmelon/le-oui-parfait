import type { Metadata } from 'next';
import { ArticleLandingPage, ArticleSection } from '@/components/ArticleLanding';

const url = 'https://leouiparfait.com/wedding-planner-essonne-91-tarifs';

export const metadata: Metadata = {
  title: 'Wedding planner Essonne (91) : tarifs + comment choisir la bonne',
  description:
    'Wedding planner en Essonne (91) : comprendre les tarifs, les formules (jour J, partielle, clé en main) et choisir sans se tromper.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Wedding planner Essonne (91) : tarifs',
    description: 'Tarifs, erreurs à éviter, et vérification de disponibilité.',
    url,
    type: 'article',
  },
};

export default function WeddingPlannerEssonneTarifsPage() {
  return (
    <ArticleLandingPage
      eyebrow="Essonne (91)"
      title="Wedding planner Essonne (91) : tarifs + comment choisir la bonne"
      intro="En Essonne, beaucoup de couples commencent seuls… puis se retrouvent bloqués (planning, budget, prestataires, pression). Si tu veux une organisation claire et un mariage fluide, le bon accompagnement change tout."
      image="/couple.jpg"
    >
      <ArticleSection title="Réponse directe" highlight>
        <p>
          Les tarifs varient selon la formule : coordination jour J (le plus accessible), organisation partielle (reprise et structure), ou clé en main (pilotage complet).
          Le meilleur choix dépend de ton avancement et de ton besoin de délégation.
        </p>
      </ArticleSection>

      <ArticleSection title="Comment choisir sans se tromper">
        <ul>
          <li>Demande un déroulé de méthode (pas seulement “on s’occupe de tout”).</li>
          <li>Vérifie ce qui est inclus (présence, rendez-vous, prestataires, plan B).</li>
          <li>Choisis quelqu’un avec qui tu te sens en confiance (communication claire).</li>
        </ul>
      </ArticleSection>
    </ArticleLandingPage>
  );
}
