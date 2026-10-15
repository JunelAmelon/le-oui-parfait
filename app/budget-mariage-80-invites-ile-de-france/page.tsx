import type { Metadata } from 'next';
import { ArticleLandingPage, ArticleSection } from '@/components/ArticleLanding';

const url = 'https://leouiparfait.com/budget-mariage-80-invites-ile-de-france';

export const metadata: Metadata = {
  title: 'Quel budget prévoir pour un mariage 80 personnes en Île-de-France ?',
  description:
    "Budget mariage 80 invités en Île-de-France : postes clés, pièges, et comment garder un budget maîtrisé sans perdre l'élégance. Vérifier votre date.",
  alternates: { canonical: url },
  openGraph: {
    title: 'Budget mariage 80 invités en Île-de-France',
    description: "Postes clés, pièges et méthode pour maîtriser le budget.",
    url,
    type: 'article',
  },
};

export default function BudgetMariage80IDFPage() {
  return (
    <ArticleLandingPage
      eyebrow="Budget Mariage"
      title="Quel budget prévoir pour un mariage 80 personnes en Île-de-France ?"
      intro="Si tu fais 80 invités, tu es dans un format “classique”... mais en Île-de-France, les coûts montent vite. Ici tu as une réponse claire, et surtout une méthode pour éviter les mauvaises surprises."
      image="/table mariage.webp"
    >
      <ArticleSection title="Réponse directe" highlight>
        <p>
          Pour 80 personnes, le budget dépend surtout du lieu, du traiteur et du niveau de prestation (photo/vidéo, décoration, animation). Le point clé : éviter de décider “au feeling” et piloter avec une structure.
        </p>
      </ArticleSection>

      <ArticleSection title="Les pièges qui font exploser le budget">
        <ul>
          <li>Options traiteur ajoutées au fur et à mesure (cocktail, ateliers, boissons, heures sup).</li>
          <li>Déco “petit achat par petit achat” (ça finit énorme).</li>
          <li>Transports, hébergements, logistique non anticipés.</li>
          <li>Réservations tardives (choix réduit, prix plus haut).</li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Solution pro">
        <p>
          Avec une wedding planner, tu pilotes ton budget par priorités : on sécurise les postes majeurs, on définit une enveloppe réaliste par catégorie, et on évite les “dépenses invisibles”.
        </p>
      </ArticleSection>
    </ArticleLandingPage>
  );
}
