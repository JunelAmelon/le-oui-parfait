import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

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

const phoneNumber = '33687217118';
const message =
  "Bonjour 👋\nJe souhaite organiser mon mariage et vérifier votre disponibilité.\nDate :\nLieu :\nBudget approximatif :\n";
const whatsappHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export default function ChecklistMariage12MoisPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-white">
        <section className="pt-28 pb-12 lg:pt-36">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-4">Organisation</p>
            <h1 className="font-baskerville text-3xl sm:text-4xl lg:text-5xl text-[#4B4456] leading-tight">
              Checklist mariage 12 mois : planning simple + éviter la surcharge mentale
            </h1>
            <p className="mt-5 text-[#5A5A5A] leading-relaxed">
              Le problème n’est pas de “tout faire”, c’est de faire dans le bon ordre. Ici tu as une checklist claire et une méthode qui évite le stress.
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
              À 12 mois, l’ordre le plus efficace est : budget + style + invités + lieu, puis prestataires majeurs, puis détails. Quand on inverse, on perd du temps et on stresse.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-baskerville text-2xl text-[#4B4456] mb-4">Les étapes clés (version simple)</h2>
            <ul className="list-disc pl-6 text-[#5A5A5A] space-y-2 leading-relaxed">
              <li>M-12 à M-9 : budget, vision, invités, lieu.</li>
              <li>M-9 à M-6 : traiteur, photo/vidéo, musique, cérémonie.</li>
              <li>M-6 à M-3 : déco, tenues, invitations, plan de table.</li>
              <li>M-3 à J : déroulé, logistique, brief prestataires, plan B.</li>
            </ul>
            <p className="mt-4 text-[#5A5A5A] leading-relaxed">
              Les problèmes cachés viennent souvent des détails : timings photos, installation, retards, coordination. C’est exactement là qu’une wedding planner sécurise tout.
            </p>
          </div>
        </section>

        <section className="py-12 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-baskerville text-2xl text-[#4B4456] mb-4">Solution pro</h2>
            <p className="text-[#5A5A5A] leading-relaxed">
              Un accompagnement te donne une roadmap personnalisée, des points de contrôle, et une coordination qui évite les oublis et la surcharge mentale.
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
