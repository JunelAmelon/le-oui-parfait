import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

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

const phoneNumber = '33687217118';
const message =
  "Bonjour 👋\nJe souhaite organiser mon mariage et vérifier votre disponibilité.\nDate :\nLieu :\nBudget approximatif :\n";
const whatsappHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export default function PrixWeddingPlannerIleDeFrancePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-white">
        <section className="pt-28 pb-12 lg:pt-36">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-4">Guide Tarifs</p>
            <h1 className="font-baskerville text-3xl sm:text-4xl lg:text-5xl text-[#4B4456] leading-tight">
              Prix wedding planner Île-de-France : combien ça coûte vraiment ?
            </h1>
            <p className="mt-5 text-[#5A5A5A] leading-relaxed">
              Si tu es ici, c’est que tu veux une réponse simple : combien coûte une wedding planner en Île-de-France, et si ça vaut vraiment le coup.
              La vraie question derrière le prix, c’est souvent : est-ce que je peux organiser sans stress, sans erreurs, et sans dépasser mon budget ?
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link href={whatsappHref} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1fb85a] text-white rounded-full px-6 py-6 font-medium">
                  Vérifier ma date de mariage
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto rounded-full px-6 py-6">
                  Demander un devis
                </Button>
              </Link>
            </div>
            <p className="mt-3 text-xs text-gray-500">Réponse en moins de 30 min sur WhatsApp • Sans engagement</p>
          </div>
        </section>

        <section className="py-12 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-baskerville text-2xl text-[#4B4456] mb-4">Réponse directe (simple)</h2>
            <div className="space-y-4 text-[#5A5A5A] leading-relaxed">
              <p>
                En Île-de-France, le prix d’une wedding planner dépend surtout de la formule choisie :
              </p>
              <ul className="list-disc pl-6 space-y-2">
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
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-baskerville text-2xl text-[#4B4456] mb-4">Ce que beaucoup de couples sous-estiment (les problèmes cachés)</h2>
            <div className="space-y-4 text-[#5A5A5A] leading-relaxed">
              <p>Même avec une bonne organisation, en Île-de-France il y a des pièges classiques :</p>
              <ul className="list-disc pl-6 space-y-2">
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
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-baskerville text-2xl text-[#4B4456] mb-4">La solution professionnelle (sans forcing)</h2>
            <div className="space-y-4 text-[#5A5A5A] leading-relaxed">
              <p>
                Une wedding planner ne sert pas seulement à “trouver des prestataires”. Elle sert surtout à te donner un cadre, une méthode, un déroulé clair,
                et à sécuriser les détails qui font la différence.
              </p>

              <h3 className="font-baskerville text-xl text-[#4B4456] pt-2">Si ton objectif c’est d’être sereine le jour J</h3>
              <p>
                La coordination du jour J est souvent la meilleure option : tu gardes tes choix, mais tu n’es plus la cheffe de projet le jour de ton mariage.
              </p>

              <h3 className="font-baskerville text-xl text-[#4B4456] pt-2">Si tu as commencé mais tu sens que ça part dans tous les sens</h3>
              <p>
                L’organisation partielle est la formule “anti-stress” : on reprend, on structure, on corrige, et tu avances enfin avec une roadmap claire.
              </p>

              <h3 className="font-baskerville text-xl text-[#4B4456] pt-2">Si tu veux gagner du temps et éviter les erreurs</h3>
              <p>
                La clé en main est idéale : tu délègues, tu fais les bons choix plus vite, et tu évites les décisions prises en urgence.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-baskerville text-2xl text-[#4B4456] mb-4">Preuves (exemples réalistes)</h2>
            <div className="space-y-4 text-[#5A5A5A] leading-relaxed">
              <div className="rounded-xl border border-gray-200 p-5">
                <p className="font-medium text-[#4B4456]">Cas 1 : “On a tout réservé… mais on panique à 1 mois”</p>
                <p className="mt-2">
                  On reprend le rétroplanning, on fixe un déroulé précis, on clarifie les responsabilités, et le jour J tu profites au lieu de gérer.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 p-5">
                <p className="font-medium text-[#4B4456]">Cas 2 : “Notre budget part dans tous les sens”</p>
                <p className="mt-2">
                  On identifie les postes qui gonflent, on tranche intelligemment, et on garde un résultat élégant sans dépenses inutiles.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 p-5">
                <p className="font-medium text-[#4B4456]">Cas 3 : “Famille très présente, beaucoup d’invités”</p>
                <p className="mt-2">
                  On pose un cadre clair, on évite les tensions, et on protège ton énergie jusqu’au mariage.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-baskerville text-2xl text-[#4B4456] mb-4">Wedding planner vs organiser seul : comparaison honnête</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl bg-white border border-gray-200 p-6">
                <p className="font-medium text-[#4B4456]">Organiser seul</p>
                <ul className="mt-3 list-disc pl-6 text-[#5A5A5A] space-y-2">
                  <li>Tu contrôles tout</li>
                  <li>Mais tu portes la charge mentale</li>
                  <li>Et le jour J tu risques de gérer au lieu de vivre</li>
                </ul>
              </div>
              <div className="rounded-xl bg-white border border-gray-200 p-6">
                <p className="font-medium text-[#4B4456]">Avec wedding planner</p>
                <ul className="mt-3 list-disc pl-6 text-[#5A5A5A] space-y-2">
                  <li>Une méthode claire (planning, timing, priorités)</li>
                  <li>Moins d’erreurs et moins de stress</li>
                  <li>Une journée fluide, vécue pleinement</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-white border border-gray-200 p-6">
              <h3 className="font-baskerville text-xl text-[#4B4456]">CTA</h3>
              <p className="mt-2 text-[#5A5A5A] leading-relaxed">
                Contactez-nous pour vérifier la disponibilité de votre date de mariage.
              </p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <Link href={whatsappHref} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1fb85a] text-white rounded-full px-6 py-6 font-medium">
                    Disponibilité en 30 min
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto rounded-full px-6 py-6">
                    Vérifier la disponibilité
                  </Button>
                </Link>
              </div>
              <p className="mt-3 text-xs text-gray-500">Réponse rapide aujourd’hui • Devis rapide • Sans engagement</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
