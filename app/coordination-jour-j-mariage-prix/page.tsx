import type { Metadata } from 'next';
import { ArticleLandingPage, ArticleSection } from '@/components/ArticleLanding';

const url = 'https://leouiparfait.com/coordination-jour-j-mariage-prix';

export const metadata: Metadata = {
  title: 'Coordination jour J : prix + ce qui est inclus (et ce que tu risques sans)',
  description:
    'Coordination jour J : comprendre le prix, ce qui est inclus, et comment éviter stress, retards et imprévus le jour du mariage en Île-de-France.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Coordination jour J : prix + ce qui est inclus',
    description:
      'Coordination jour J : prix, inclus, risques si tu gères seul(e) et comment vérifier la disponibilité.',
    url,
    type: 'article',
  },
};

export default function CoordinationJourJPrixPage() {
  return (
    <ArticleLandingPage
      eyebrow="Coordination Jour J"
      title="Coordination jour J : prix + ce qui est inclus (et ce que tu risques sans)"
      intro="Tu as déjà réservé ton lieu et tes prestataires, mais tu veux une journée fluide, sans stress, sans retards, et sans que ta famille passe la journée à “gérer” ? La coordination du jour J est exactement faite pour ça."
      image="/moment-mariage%20(4).jpg"
    >
      <ArticleSection title="Réponse directe" highlight>
        <p>
          Le prix d’une coordination du jour J dépend du niveau d’accompagnement avant le mariage (rendez-vous, reprise du planning, contacts prestataires, repérage…)
          et du jour J (présence, équipe, amplitude horaire). L’objectif est simple : que tu profites, pendant que quelqu’un pilote.
        </p>
      </ArticleSection>

      <ArticleSection title="Ce que tu risques sans coordination">
        <ul>
          <li>Retards en chaîne (coiffure, photos, cérémonie, repas).</li>
          <li>Prestataires qui te sollicitent toi (ou tes témoins) toute la journée.</li>
          <li>Imprévus sans plan B (météo, timing, matériel, accès).</li>
          <li>Stress et tensions au moment où tu devrais vivre le moment.</li>
        </ul>
      </ArticleSection>

      <ArticleSection title="La solution pro">
        <p>
          Une coordination du jour J, c’est un pilotage : déroulé clair, échanges prestataires, point logistique, et présence le jour J pour gérer les imprévus.
          Résultat : une journée fluide et des invités qui profitent.
        </p>
      </ArticleSection>
    </ArticleLandingPage>
  );
}
