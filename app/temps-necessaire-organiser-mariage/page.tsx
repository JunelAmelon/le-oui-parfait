import type { Metadata } from 'next';
import { ArticleLandingPage, ArticleSection } from '@/components/ArticleLanding';

const url = 'https://leouiparfait.com/temps-necessaire-organiser-mariage';

export const metadata: Metadata = {
  title: 'Combien de temps faut-il pour organiser un mariage ? (réponse réaliste)',
  description:
    'Temps nécessaire pour organiser un mariage : la réponse réaliste selon votre situation, et comment éviter les retards et la charge mentale.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Temps nécessaire pour organiser un mariage',
    description: 'Réponse réaliste + erreurs à éviter + CTA disponibilité.',
    url,
    type: 'article',
  },
};

export default function TempsNecessaireOrganiserMariagePage() {
  return (
    <ArticleLandingPage
      eyebrow="Organisation"
      title="Combien de temps faut-il pour organiser un mariage ? (réponse réaliste)"
      intro="Si tu te demandes “est-ce que j’ai le temps ?”, c’est souvent que tu sens déjà la charge mentale arriver. La réponse dépend de 3 facteurs : date, budget, niveau de délégation."
      image="/save-the-date.png"
    >
      <ArticleSection title="Réponse directe" highlight>
        <p>
          En pratique, organiser un mariage demande plusieurs mois, mais surtout des décisions régulières. Si ta date est proche, une wedding planner te permet d’aller droit au but : choix prioritaires, planning, prestataires majeurs, et coordination.
        </p>
      </ArticleSection>

      <ArticleSection title="Les problèmes cachés">
        <ul>
          <li>Décaler une décision = perdre un prestataire.</li>
          <li>Faire “au feeling” = refaire deux fois.</li>
          <li>Dernier mois = logistique + détails + stress.</li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Solution pro">
        <p>
          Avec un accompagnement, tu avances par étapes et tu sécurises l’essentiel plus vite. Tu réduis la charge mentale et tu évites les erreurs qui font perdre du temps.
        </p>
      </ArticleSection>
    </ArticleLandingPage>
  );
}
