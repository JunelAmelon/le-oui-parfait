import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleLandingPage, ArticleSection } from '@/components/ArticleLanding';

const url = 'https://leouiparfait.com/wedding-planner-essonne-91-tarifs';

export const metadata: Metadata = {
  title: 'Prix d’une wedding planner en Essonne (91) : tarifs et formules',
  description:
    'Tarifs d’une wedding planner en Essonne (91) : coordination du jour J, organisation partielle ou clé en main. Comprendre les prix et choisir la bonne formule.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Prix d’une wedding planner en Essonne (91)',
    description: 'Tarifs, formules et erreurs à éviter — vérification de disponibilité.',
    url,
    type: 'article',
  },
};

export default function WeddingPlannerEssonneTarifsPage() {
  return (
    <ArticleLandingPage
      eyebrow="Tarifs Essonne (91)"
      title="Prix d’une wedding planner en Essonne (91) : tarifs et formules"
      intro="Combien coûte une wedding planner en Essonne ? Le prix dépend surtout de la formule choisie : coordination du jour J, organisation partielle ou organisation clé en main. Ici, on vous aide à comprendre les tarifs et à choisir sans vous tromper."
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

      <ArticleSection title="Vous cherchez une wedding planner en Essonne ?">
        <p>
          Basée à Ris-Orangis, l’agence Le Oui Parfait accompagne les futurs mariés dans tout le département — organisation complète, partielle ou coordination du jour J.
        </p>
        <p>
          <Link href="/ile-de-france/91-essonne" className="text-[#88b7b5] font-medium underline underline-offset-4 hover:text-[#6fa3a1] transition">
            Découvrez notre accompagnement de wedding planner en Essonne (91) →
          </Link>
        </p>
      </ArticleSection>
    </ArticleLandingPage>
  );
}
