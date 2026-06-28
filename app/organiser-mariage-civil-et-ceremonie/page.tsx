import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

const url = 'https://leouiparfait.com/organiser-mariage-civil-et-ceremonie';

export const metadata: Metadata = {
  title: 'Mariage civil + cérémonie : comment organiser sans stress ? ',
  description:
    'Mariage civil + cérémonie : étapes, timing, pièges et méthode simple pour une journée fluide. Vérifier votre disponibilité en Île-de-France.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Mariage civil + cérémonie : organiser sans stress',
    description: 'Étapes + timing + méthode + CTA disponibilité.',
    url,
    type: 'article',
  },
};

const phoneNumber = '33687217118';
const message =
  "Bonjour 👋\nJe souhaite organiser mon mariage et vérifier votre disponibilité.\nDate :\nLieu :\nBudget approximatif :\n";
const whatsappHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export default function OrganiserMariageCivilEtCeremoniePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-white">
        <section className="pt-28 pb-12 lg:pt-36">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-4">Organisation</p>
            <h1 className="font-baskerville text-3xl sm:text-4xl lg:text-5xl text-[#4B4456] leading-tight">
              Mariage civil + cérémonie : comment organiser sans stress ?
            </h1>
            <p className="mt-5 text-[#5A5A5A] leading-relaxed">
              Deux moments à orchestrer (mairie + cérémonie + réception) = deux fois plus de timing, de déplacements, et de risques de retards. La clé, c’est un déroulé clair et une coordination fluide.
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
              Pour organiser sans stress : 1) fixer les horaires non négociables (mairie), 2) calculer les temps de trajets + marges, 3) construire un déroulé minute par minute, et 4) confier le pilotage à quelqu’un le jour J.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-baskerville text-2xl text-[#4B4456] mb-4">Les problèmes cachés</h2>
            <ul className="list-disc pl-6 text-[#5A5A5A] space-y-2 leading-relaxed">
              <li>Retards de préparation → photos écourtées.</li>
              <li>Trajets sous-estimés (parking, circulation, invités).</li>
              <li>Invités perdus entre mairie / cérémonie / réception.</li>
              <li>Pas de plan B météo ou logistique.</li>
            </ul>
          </div>
        </section>

        <section className="py-12 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-baskerville text-2xl text-[#4B4456] mb-4">Solution professionnelle</h2>
            <p className="text-[#5A5A5A] leading-relaxed">
              Une wedding planner (ou une coordination jour J) sécurise le déroulé, brief les prestataires, gère les imprévus et garde le timing. Résultat : tu vis ton mariage au lieu de le gérer.
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
