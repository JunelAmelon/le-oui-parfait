import type { Metadata } from 'next';
import { ArticleLandingPage, ArticleSection } from '@/components/ArticleLanding';

const url = 'https://leouiparfait.com/coordination-jour-j-qui-fait-quoi';

export const metadata: Metadata = {
  title: 'Coordination jour J : qui gère quoi (mariés, témoins, wedding planner)',
  description:
    'Coordination jour J : répartition claire des rôles pour une journée fluide. Éviter stress et retards grâce à un pilotage professionnel.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Coordination jour J : qui fait quoi',
    description: 'Rôles + erreurs fréquentes + CTA disponibilité.',
    url,
    type: 'article',
  },
};

export default function CoordinationJourJQuiFaitQuoiPage() {
  return (
    <ArticleLandingPage
      eyebrow="Jour J"
      title="Coordination jour J : qui gère quoi (mariés, témoins, wedding planner)"
      intro="Le jour J, le stress vient souvent d’un seul problème : personne ne sait exactement qui gère quoi. Résultat : tout remonte sur les mariés… ou sur les témoins."
      image="/photographe-mariage-en-action.jpg"
    >
      <ArticleSection title="Réponse directe" highlight>
        <p>
          Les mariés doivent vivre la journée, pas la gérer. Les témoins doivent soutenir, pas piloter. Le pilotage (timing, prestataires, imprévus) doit être confié à un coordinateur (wedding planner).
        </p>
      </ArticleSection>

      <ArticleSection title="Les erreurs fréquentes">
        <ul>
          <li>Confier la coordination aux proches (ils ne profitent plus).</li>
          <li>Pas de déroulé clair minute par minute.</li>
          <li>Prestataires sans brief commun (timing flou).</li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Solution pro">
        <p>
          Avec une coordination jour J : déroulé, brief prestataires, plan B, présence et gestion des imprévus. Tu profites pleinement.
        </p>
      </ArticleSection>
    </ArticleLandingPage>
  );
}
