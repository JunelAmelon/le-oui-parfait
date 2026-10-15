import type { Metadata } from 'next';
import { ArticleLandingPage, ArticleSection } from '@/components/ArticleLanding';

const url = 'https://leouiparfait.com/prix-wedding-planner-ile-de-france';

export const metadata: Metadata = {
  title: 'Prix wedding planner Île-de-France : combien ça coûte vraiment ? ',
  description:
    "Prix wedding planner en Île-de-France : coordination jour J, organisation partielle ou clé en main. Comprendre les coûts, éviter les erreurs, et vérifier votre date.",
  alternates: { canonical: url },
  openGraph: {
    title: 'Prix wedding planner Île-de-France',
    description:
      "Coordination jour J, organisation partielle ou clé en main : comprendre les coûts et vérifier votre disponibilité.",
    url,
    type: 'article',
  },
};

export default function PrixWeddingPlannerIleDeFrancePage() {
  return (
    <ArticleLandingPage
      eyebrow="Guide Tarifs"
      title="Prix wedding planner Île-de-France : combien ça coûte vraiment ?"
      intro="Si tu es ici, c’est que tu veux une réponse simple : combien coûte une wedding planner en Île-de-France, et si ça vaut vraiment le coup. La vraie question derrière le prix, c’est souvent : est-ce que je peux organiser sans stress, sans erreurs, et sans dépasser mon budget ?"
      image="/alliance.jpg"
    >
      <ArticleSection title="Réponse directe (simple)" highlight>
        <p>En Île-de-France, le prix d’une wedding planner dépend surtout de la formule choisie :</p>
        <ul>
          <li>
            <strong>Coordination du jour J</strong> : idéal si tu as déjà réservé tes prestataires, mais que tu veux une journée fluide et zéro stress.
          </li>
          <li>
            <strong>Organisation partielle</strong> : parfait si tu as commencé mais que tu veux reprendre le contrôle (planning, prestataires, budget, détails).
          </li>
          <li>
            <strong>Organisation clé en main</strong> : pour déléguer, gagner du temps, et sécuriser l’ensemble (budget + choix + planning + coordination).
          </li>
        </ul>
        <p>
          Le “bon” prix n’est pas juste un chiffre : c’est la différence entre une organisation qui te porte… et une organisation qui t’épuise.
        </p>
      </ArticleSection>

      <ArticleSection title="Ce que beaucoup de couples sous-estiment (les problèmes cachés)">
        <p>Même avec une bonne organisation, en Île-de-France il y a des pièges classiques :</p>
        <ul>
          <li>
            <strong>Charge mentale</strong> : planning, relances, arbitrages, coordination famille/prestataires.
          </li>
          <li>
            <strong>Erreurs coûteuses</strong> : timing imprécis, contrats incomplets, options oubliées, manque de plan B.
          </li>
          <li>
            <strong>Budget qui fuit</strong> : petites dépenses invisibles (locations, options, transports, “au cas où”, heures supplémentaires…).
          </li>
          <li>
            <strong>Tensions</strong> : quand il faut trancher (invités, déroulé, priorités), ça retombe souvent sur le couple.
          </li>
        </ul>
        <p>
          Le vrai risque : arriver à J-30 avec “tout réservé”, mais sans déroulé solide, sans logistique claire, et sans personne pour gérer les imprévus.
        </p>
      </ArticleSection>

      <ArticleSection title="La solution professionnelle (sans forcing)">
        <p>
          Une wedding planner ne sert pas seulement à “trouver des prestataires”. Elle sert surtout à te donner un cadre, une méthode, un déroulé clair,
          et à sécuriser les détails qui font la différence.
        </p>

        <h3>Si ton objectif c’est d’être sereine le jour J</h3>
        <p>
          La coordination du jour J est souvent la meilleure option : tu gardes tes choix, mais tu n’es plus la cheffe de projet le jour de ton mariage.
        </p>

        <h3>Si tu as commencé mais tu sens que ça part dans tous les sens</h3>
        <p>
          L’organisation partielle est la formule “anti-stress” : on reprend, on structure, on corrige, et tu avances enfin avec une roadmap claire.
        </p>

        <h3>Si tu veux gagner du temps et éviter les erreurs</h3>
        <p>
          La clé en main est idéale : tu délègues, tu fais les bons choix plus vite, et tu évites les décisions prises en urgence.
        </p>
      </ArticleSection>

      <ArticleSection title="Preuves (exemples réalistes)">
        <div className="space-y-4">
          <div className="rounded-xl bg-[#f4f1f7] border border-[#e8e0dc] p-5">
            <p className="font-medium text-[#4B4456]">Cas 1 : “On a tout réservé… mais on panique à 1 mois”</p>
            <p className="mt-2">
              On reprend le rétroplanning, on fixe un déroulé précis, on clarifie les responsabilités, et le jour J tu profites au lieu de gérer.
            </p>
          </div>
          <div className="rounded-xl bg-[#f4f1f7] border border-[#e8e0dc] p-5">
            <p className="font-medium text-[#4B4456]">Cas 2 : “Notre budget part dans tous les sens”</p>
            <p className="mt-2">
              On identifie les postes qui gonflent, on tranche intelligemment, et on garde un résultat élégant sans dépenses inutiles.
            </p>
          </div>
          <div className="rounded-xl bg-[#f4f1f7] border border-[#e8e0dc] p-5">
            <p className="font-medium text-[#4B4456]">Cas 3 : “Famille très présente, beaucoup d’invités”</p>
            <p className="mt-2">
              On pose un cadre clair, on évite les tensions, et on protège ton énergie jusqu’au mariage.
            </p>
          </div>
        </div>
      </ArticleSection>

      <ArticleSection title="Wedding planner vs organiser seul : comparaison honnête">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl bg-[#f4f1f7] border border-[#e8e0dc] p-6">
            <p className="font-medium text-[#4B4456]">Organiser seul</p>
            <ul className="mt-3 space-y-2">
              <li>Tu contrôles tout</li>
              <li>Mais tu portes la charge mentale</li>
              <li>Et le jour J tu risques de gérer au lieu de vivre</li>
            </ul>
          </div>
          <div className="rounded-xl bg-[#f4f1f7] border border-[#88b7b5]/50 p-6">
            <p className="font-medium text-[#4B4456]">Avec wedding planner</p>
            <ul className="mt-3 space-y-2">
              <li>Une méthode claire (planning, timing, priorités)</li>
              <li>Moins d’erreurs et moins de stress</li>
              <li>Une journée fluide, vécue pleinement</li>
            </ul>
          </div>
        </div>
      </ArticleSection>
    </ArticleLandingPage>
  );
}
