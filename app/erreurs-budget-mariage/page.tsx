import type { Metadata } from 'next';
import { ArticleLandingPage, ArticleSection } from '@/components/ArticleLanding';

const url = 'https://leouiparfait.com/erreurs-budget-mariage';

export const metadata: Metadata = {
  title: 'Les 7 erreurs qui font exploser le budget mariage (et comment les éviter)',
  description:
    'Budget mariage : 7 erreurs fréquentes (options, timing, contrats, logistique) et comment les éviter pour un mariage élégant et maîtrisé.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Erreurs budget mariage : les 7 pièges',
    description: 'Éviter stress et dépassements avec une méthode claire.',
    url,
    type: 'article',
  },
};

export default function ErreursBudgetMariagePage() {
  return (
    <ArticleLandingPage
      eyebrow="Budget Mariage"
      title="Les 7 erreurs qui font exploser le budget mariage (et comment les éviter)"
      intro="Tu peux avoir un budget “sur le papier”… et finir au-dessus sans même comprendre pourquoi. Les dépassements viennent presque toujours des mêmes erreurs."
      image="/mariage-moment.jpg"
    >
      <ArticleSection title="Réponse directe" highlight>
        <p>
          La plupart des budgets explosent à cause des options ajoutées, du manque de priorités, et de décisions prises trop tard. Bonne nouvelle : ça se corrige avec une méthode simple.
        </p>
      </ArticleSection>

      <ArticleSection title="Les 7 erreurs">
        <ol>
          <li>Ne pas fixer des priorités (tout devient “indispensable”).</li>
          <li>Ajouter des options traiteur au fil de l’eau.</li>
          <li>Oublier la logistique (transport, installation, heures sup).</li>
          <li>Réserver tard (moins de choix, prix plus haut).</li>
          <li>Multiplier les “petits achats déco”.</li>
          <li>Signer des contrats flous (pénalités, frais cachés).</li>
          <li>Pas de marge imprévus.</li>
        </ol>
      </ArticleSection>

      <ArticleSection title="Solution professionnelle">
        <p>
          Une wedding planner te fait gagner de l’argent surtout en évitant les erreurs : cadrage, rétroplanning, arbitrages, contrats, et cohérence globale.
        </p>
      </ArticleSection>
    </ArticleLandingPage>
  );
}
