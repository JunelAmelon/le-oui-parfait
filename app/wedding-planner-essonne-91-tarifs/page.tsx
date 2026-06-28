import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

const url = 'https://leouiparfait.com/wedding-planner-essonne-91-tarifs';

export const metadata: Metadata = {
  title: 'Wedding planner Essonne (91) : tarifs + comment choisir la bonne',
  description:
    'Wedding planner en Essonne (91) : comprendre les tarifs, les formules (jour J, partielle, clé en main) et choisir sans se tromper.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Wedding planner Essonne (91) : tarifs',
    description: 'Tarifs, erreurs à éviter, et vérification de disponibilité.',
    url,
    type: 'article',
  },
};

const phoneNumber = '33687217118';
const message =
  "Bonjour 👋\nJe souhaite organiser mon mariage et vérifier votre disponibilité.\nDate :\nLieu :\nBudget approximatif :\n";
const whatsappHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export default function WeddingPlannerEssonneTarifsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-white">
        <section className="pt-28 pb-12 lg:pt-36">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-4">Essonne (91)</p>
            <h1 className="font-baskerville text-3xl sm:text-4xl lg:text-5xl text-[#4B4456] leading-tight">
              Wedding planner Essonne (91) : tarifs + comment choisir la bonne
            </h1>
            <p className="mt-5 text-[#5A5A5A] leading-relaxed">
              En Essonne, beaucoup de couples commencent seuls… puis se retrouvent bloqués (planning, budget, prestataires, pression). Si tu veux une organisation claire
              et un mariage fluide, le bon accompagnement change tout.
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
            <h2 className="font-baskerville text-2xl text-[#4B4456] mb-4">Réponse directe</h2>
            <p className="text-[#5A5A5A] leading-relaxed">
              Les tarifs varient selon la formule : coordination jour J (le plus accessible), organisation partielle (reprise et structure), ou clé en main (pilotage complet).
              Le meilleur choix dépend de ton avancement et de ton besoin de délégation.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-baskerville text-2xl text-[#4B4456] mb-4">Comment choisir sans se tromper</h2>
            <ul className="list-disc pl-6 text-[#5A5A5A] space-y-2 leading-relaxed">
              <li>Demande un déroulé de méthode (pas seulement “on s’occupe de tout”).</li>
              <li>Vérifie ce qui est inclus (présence, rendez-vous, prestataires, plan B).</li>
              <li>Choisis quelqu’un avec qui tu te sens en confiance (communication claire).</li>
            </ul>

            <div className="mt-8 rounded-2xl bg-[#f4f1f7] border border-gray-200 p-6">
              <h3 className="font-baskerville text-xl text-[#4B4456]">CTA</h3>
              <p className="mt-2 text-[#5A5A5A] leading-relaxed">Contactez-nous pour vérifier la disponibilité de votre date de mariage.</p>
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
