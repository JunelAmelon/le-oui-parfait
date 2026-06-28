import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

const url = 'https://leouiparfait.com/erreurs-budget-mariage';

export const metadata: Metadata = {
  title: 'Les 7 erreurs qui font exploser le budget mariage (et comment les éviter)',
  description:
    'Budget mariage : 7 erreurs fréquentes (options, timing, contrats, logistique) et comment les éviter pour un mariage élégant et maîtrisé.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Erreurs budget mariage : les 7 pièges',
    description: 'Éviter stress et dépassements avec une méthode claire.',
    url,
    type: 'article',
  },
};

const phoneNumber = '33687217118';
const message =
  "Bonjour 👋\nJe souhaite organiser mon mariage et vérifier votre disponibilité.\nDate :\nLieu :\nBudget approximatif :\n";
const whatsappHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export default function ErreursBudgetMariagePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-white">
        <section className="pt-28 pb-12 lg:pt-36">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-4">Budget Mariage</p>
            <h1 className="font-baskerville text-3xl sm:text-4xl lg:text-5xl text-[#4B4456] leading-tight">
              Les 7 erreurs qui font exploser le budget mariage (et comment les éviter)
            </h1>
            <p className="mt-5 text-[#5A5A5A] leading-relaxed">
              Tu peux avoir un budget “sur le papier”… et finir au-dessus sans même comprendre pourquoi. Les dépassements viennent presque toujours des mêmes erreurs.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link href={whatsappHref} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1fb85a] text-white rounded-full px-6 py-6 font-medium">Vérifier ma date de mariage</Button>
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
              La plupart des budgets explosent à cause des options ajoutées, du manque de priorités, et de décisions prises trop tard. Bonne nouvelle : ça se corrige avec une méthode simple.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-baskerville text-2xl text-[#4B4456] mb-4">Les 7 erreurs</h2>
            <ol className="list-decimal pl-6 text-[#5A5A5A] space-y-2 leading-relaxed">
              <li>Ne pas fixer des priorités (tout devient “indispensable”).</li>
              <li>Ajouter des options traiteur au fil de l’eau.</li>
              <li>Oublier la logistique (transport, installation, heures sup).</li>
              <li>Réserver tard (moins de choix, prix plus haut).</li>
              <li>Multiplier les “petits achats déco”.</li>
              <li>Signer des contrats flous (pénalités, frais cachés).</li>
              <li>Pas de marge imprévus.</li>
            </ol>
          </div>
        </section>

        <section className="py-12 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-baskerville text-2xl text-[#4B4456] mb-4">Solution professionnelle</h2>
            <p className="text-[#5A5A5A] leading-relaxed">
              Une wedding planner te fait gagner de l’argent surtout en évitant les erreurs : cadrage, rétroplanning, arbitrages, contrats, et cohérence globale.
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
