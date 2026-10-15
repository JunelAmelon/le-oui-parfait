import type { Metadata } from 'next';
import { ArticleLandingPage, ArticleSection } from '@/components/ArticleLanding';

const url = 'https://leouiparfait.com/wedding-planner-vs-organiser-seul';

export const metadata: Metadata = {
  title: 'Wedding planner vs organisation seule : comparaison honnête (coût, stress, erreurs)',
  description:
    'Wedding planner vs organiser seul : comparaison honnête (coût réel, charge mentale, erreurs, journée vécue). Décider sans regret et vérifier votre date.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Wedding planner vs organiser seul',
    description: 'Comparaison honnête + CTA disponibilité en 30 min.',
    url,
    type: 'article',
  },
};

export default function WeddingPlannerVsOrganiserSeulPage() {
  return (
    <ArticleLandingPage
      eyebrow="Décision"
      title="Wedding planner vs organisation seule : comparaison honnête (coût, stress, erreurs)"
      intro="Si tu hésites, c’est normal : tu veux faire le bon choix sans exploser ton budget. Mais la vraie comparaison n’est pas “avec / sans”, c’est “coût réel + charge mentale + risques”."
      image="/photographe-mariage-en-action.jpg"
    >
      <ArticleSection title="Réponse directe" highlight>
        <p>
          Organiser seul peut fonctionner si tu as du temps, une bonne méthode et une vraie capacité à gérer la logistique. Une wedding planner devient logique quand tu veux sécuriser le budget, le planning, et vivre le jour J sans gérer.
        </p>
      </ArticleSection>

      <ArticleSection title="Comparaison honnête">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl bg-[#f4f1f7] border border-[#e8e0dc] p-6">
            <p className="font-medium text-[#4B4456]">Organiser seul</p>
            <ul className="mt-3 space-y-2">
              <li>Moins de frais directs</li>
              <li>Mais beaucoup de temps + charge mentale</li>
              <li>Risque d’erreurs et de stress le jour J</li>
            </ul>
          </div>
          <div className="rounded-xl bg-[#f4f1f7] border border-[#88b7b5]/50 p-6">
            <p className="font-medium text-[#4B4456]">Avec wedding planner</p>
            <ul className="mt-3 space-y-2">
              <li>Méthode + pilotage + décisions plus rapides</li>
              <li>Moins d’erreurs, budget mieux cadré</li>
              <li>Journée vécue pleinement</li>
            </ul>
          </div>
        </div>
        <p>
          Au final, beaucoup de couples prennent une wedding planner non pas “pour faire joli”, mais pour protéger leur énergie, leur couple, et sécuriser une journée unique.
        </p>
      </ArticleSection>
    </ArticleLandingPage>
  );
}
