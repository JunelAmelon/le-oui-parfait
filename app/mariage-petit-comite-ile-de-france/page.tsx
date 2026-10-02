import type { Metadata } from 'next';
import { ArticleLandingPage, ArticleSection } from '@/components/ArticleLanding';

const url = 'https://leouiparfait.com/mariage-petit-comite-ile-de-france';

export const metadata: Metadata = {
  title: 'Mariage en petit comité en Île-de-France : organisation + budget',
  description:
    'Mariage en petit comité en Île-de-France : organisation, budget, lieux, timing et erreurs à éviter pour un résultat élégant et fluide.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Mariage en petit comité en Île-de-France',
    description: 'Organisation + budget + erreurs à éviter + CTA disponibilité.',
    url,
    type: 'article',
  },
};

export default function MariagePetitComiteIDFPage() {
  return (
    <ArticleLandingPage
      eyebrow="Petit comité"
      title="Mariage en petit comité en Île-de-France : organisation + budget"
      intro="Un mariage en petit comité peut être encore plus élégant… à condition de bien structurer l’expérience. Le piège : croire que “moins d’invités = facile”."
      image="/mariage%20moment.jpg"
    >
      <ArticleSection title="Réponse directe" highlight>
        <p>
          En petit comité, tu investis moins sur la quantité et plus sur la qualité : lieu, table, expérience, timing, et moments forts. Le budget se pilote par priorités.
        </p>
      </ArticleSection>

      <ArticleSection title="Les problèmes cachés">
        <ul>
          <li>Timing trop “vide” si on ne structure pas.</li>
          <li>Lieu mal adapté (trop grand → ambiance froide).</li>
          <li>Budget qui dérive (on “upgrade” tout, partout).</li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Solution pro">
        <p>
          Une wedding planner t’aide à créer une expérience cohérente : lieu adapté, déroulé élégant, scénographie, prestataires, et coordination. Même en petit comité, la différence se joue dans les détails.
        </p>
      </ArticleSection>
    </ArticleLandingPage>
  );
}
