import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

const url = 'https://leouiparfait.com/budget-mariage-80-invites-ile-de-france';

export const metadata: Metadata = {
  title: 'Quel budget prévoir pour un mariage 80 personnes en Île-de-France ?',
  description:
    "Budget mariage 80 invités en Île-de-France : postes clés, pièges, et comment garder un budget maîtrisé sans perdre l'élégance. Vérifier votre date.",
  alternates: { canonical: url },
  openGraph: {
    title: 'Budget mariage 80 invités en Île-de-France',
    description: "Postes clés, pièges et méthode pour maîtriser le budget.",
    url,
    type: 'article',
  },
};

const phoneNumber = '33687217118';
const message =
  "Bonjour 👋\nJe souhaite organiser mon mariage et vérifier votre disponibilité.\nDate :\nLieu :\nBudget approximatif :\n";
const whatsappHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export default function BudgetMariage80IDFPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-white">
        <section className="pt-28 pb-12 lg:pt-36">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-4">Budget Mariage</p>
            <h1 className="font-baskerville text-3xl sm:text-4xl lg:text-5xl text-[#4B4456] leading-tight">
              Quel budget prévoir pour un mariage 80 personnes en Île-de-France ?
            </h1>
            <p className="mt-5 text-[#5A5A5A] leading-relaxed">
              Si tu fais 80 invités, tu es dans un format “classique”... mais en Île-de-France, les coûts montent vite. Ici tu as une réponse claire, et surtout une méthode pour éviter les mauvaises surprises.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link href={whatsappHref} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1fb85a] text-white rounded-full px-6 py-6 font-medium">
                  Vérifier ma date de mariage
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto rounded-full px-6 py-6">Demander un devis</Button>
              </Link>
            </div>
            <p className="mt-3 text-xs text-gray-500">Réponse en moins de 30 min sur WhatsApp • Sans engagement</p>
          </div>
        </section>

        <section className="py-12 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-baskerville text-2xl text-[#4B4456] mb-4">Réponse directe</h2>
            <p className="text-[#5A5A5A] leading-relaxed">
              Pour 80 personnes, le budget dépend surtout du lieu, du traiteur et du niveau de prestation (photo/vidéo, décoration, animation). Le point clé : éviter de décider “au feeling” et piloter avec une structure.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-baskerville text-2xl text-[#4B4456] mb-4">Les pièges qui font exploser le budget</h2>
            <ul className="list-disc pl-6 text-[#5A5A5A] space-y-2 leading-relaxed">
              <li>Options traiteur ajoutées au fur et à mesure (cocktail, ateliers, boissons, heures sup).</li>
              <li>Déco “petit achat par petit achat” (ça finit énorme).</li>
              <li>Transports, hébergements, logistique non anticipés.</li>
              <li>Réservations tardives (choix réduit, prix plus haut).</li>
            </ul>
          </div>
        </section>

        <section className="py-12 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-baskerville text-2xl text-[#4B4456] mb-4">Solution pro</h2>
            <p className="text-[#5A5A5A] leading-relaxed">
              Avec une wedding planner, tu pilotes ton budget par priorités : on sécurise les postes majeurs, on définit une enveloppe réaliste par catégorie, et on évite les “dépenses invisibles”.
            </p>

            <div className="mt-8 rounded-2xl bg-white border border-gray-200 p-6">
              <h3 className="font-baskerville text-xl text-[#4B4456]">CTA</h3>
              <p className="mt-2 text-[#5A5A5A] leading-relaxed">Contactez-nous pour vérifier la disponibilité de votre date de mariage.</p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <Link href={whatsappHref} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1fb85a] text-white rounded-full px-6 py-6 font-medium">Disponibilité en 30 min</Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto rounded-full px-6 py-6">Vérifier la disponibilité</Button>
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
