import type { Metadata } from 'next';
import { ArticleLandingPage, ArticleSection } from '@/components/ArticleLanding';

const url = 'https://leouiparfait.com/checklist-mariage-12-mois';

export const metadata: Metadata = {
  title: 'Checklist mariage 12 mois : planning simple + éviter la surcharge mentale',
  description:
    'Checklist mariage sur 12 mois : étapes clés, erreurs fréquentes et méthode simple pour organiser sans stress. Île-de-France.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Checklist mariage 12 mois',
    description: 'Planning simple + méthode anti-stress + CTA disponibilité.',
    url,
    type: 'article',
  },
};

export default function ChecklistMariage12MoisPage() {
  return (
    <ArticleLandingPage
      eyebrow="Organisation"
      title="Checklist mariage 12 mois : planning simple + éviter la surcharge mentale"
      intro="Le problème n’est pas de “tout faire”, c’est de faire dans le bon ordre. Ici tu as une checklist claire et une méthode qui évite le stress."
      image="/faire-part.png"
    >
      <ArticleSection title="Réponse directe" highlight>
        <p>
          À 12 mois, l’ordre le plus efficace est : budget + style + invités + lieu, puis prestataires majeurs, puis détails. Quand on inverse, on perd du temps et on stresse.
        </p>
      </ArticleSection>

      <ArticleSection title="Les étapes clés (version simple)">
        <ul>
          <li>M-12 à M-9 : budget, vision, invités, lieu.</li>
          <li>M-9 à M-6 : traiteur, photo/vidéo, musique, cérémonie.</li>
          <li>M-6 à M-3 : déco, tenues, invitations, plan de table.</li>
          <li>M-3 à J : déroulé, logistique, brief prestataires, plan B.</li>
        </ul>
        <p>
          Les problèmes cachés viennent souvent des détails : timings photos, installation, retards, coordination. C’est exactement là qu’une wedding planner sécurise tout.
        </p>
      </ArticleSection>

      <ArticleSection title="Solution pro">
        <p>
          Un accompagnement te donne une roadmap personnalisée, des points de contrôle, et une coordination qui évite les oublis et la surcharge mentale.
        </p>
      </ArticleSection>
    </ArticleLandingPage>
  );
}
