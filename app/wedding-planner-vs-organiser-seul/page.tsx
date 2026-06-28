import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

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

const phoneNumber = '33687217118';
const message =
  "Bonjour 👋\nJe souhaite organiser mon mariage et vérifier votre disponibilité.\nDate :\nLieu :\nBudget approximatif :\n";
const whatsappHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export default function WeddingPlannerVsOrganiserSeulPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-white">
        <section className="pt-28 pb-12 lg:pt-36">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-4">Décision</p>
            <h1 className="font-baskerville text-3xl sm:text-4xl lg:text-5xl text-[#4B4456] leading-tight">
              Wedding planner vs organisation seule : comparaison honnête (coût, stress, erreurs)
            </h1>
            <p className="mt-5 text-[#5A5A5A] leading-relaxed">
              Si tu hésites, c’est normal : tu veux faire le bon choix sans exploser ton budget. Mais la vraie comparaison n’est pas “avec / sans”, c’est “coût réel + charge mentale + risques”.
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
              Organiser seul peut fonctionner si tu as du temps, une bonne méthode et une vraie capacité à gérer la logistique. Une wedding planner devient logique quand tu veux sécuriser le budget, le planning, et vivre le jour J sans gérer.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-baskerville text-2xl text-[#4B4456] mb-4">Comparaison honnête</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl bg-white border border-gray-200 p-6">
                <p className="font-medium text-[#4B4456]">Organiser seul</p>
                <ul className="mt-3 list-disc pl-6 text-[#5A5A5A] space-y-2">
                  <li>Moins de frais directs</li>
                  <li>Mais beaucoup de temps + charge mentale</li>
                  <li>Risque d’erreurs et de stress le jour J</li>
                </ul>
              </div>
              <div className="rounded-xl bg-white border border-gray-200 p-6">
                <p className="font-medium text-[#4B4456]">Avec wedding planner</p>
                <ul className="mt-3 list-disc pl-6 text-[#5A5A5A] space-y-2">
                  <li>Méthode + pilotage + décisions plus rapides</li>
                  <li>Moins d’erreurs, budget mieux cadré</li>
                  <li>Journée vécue pleinement</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-[#5A5A5A] leading-relaxed">
              Au final, beaucoup de couples prennent une wedding planner non pas “pour faire joli”, mais pour protéger leur énergie, leur couple, et sécuriser une journée unique.
            </p>
          </div>
        </section>

        <section className="py-12 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-baskerville text-2xl text-[#4B4456] mb-4">CTA</h2>
            <p className="text-[#5A5A5A] leading-relaxed">Contactez-nous pour vérifier la disponibilité de votre date de mariage.</p>
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
        </section>
      </main>
      <Footer />
    </div>
  );
}
