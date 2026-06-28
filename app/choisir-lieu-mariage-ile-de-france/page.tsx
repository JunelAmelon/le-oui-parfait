import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

const url = 'https://leouiparfait.com/choisir-lieu-mariage-ile-de-france';

export const metadata: Metadata = {
  title: 'Comment choisir un lieu de mariage en Île-de-France (sans se tromper)',
  description:
    'Choisir un lieu en Île-de-France : critères essentiels, pièges, questions à poser, et comment sécuriser la réservation sans stress.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Choisir un lieu de mariage en Île-de-France',
    description: 'Critères, pièges et méthode pour sécuriser le bon lieu.',
    url,
    type: 'article',
  },
};

const phoneNumber = '33687217118';
const message =
  "Bonjour 👋\nJe souhaite organiser mon mariage et vérifier votre disponibilité.\nDate :\nLieu :\nBudget approximatif :\n";
const whatsappHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export default function ChoisirLieuIDFPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-white">
        <section className="pt-28 pb-12 lg:pt-36">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-4">Lieu de réception</p>
            <h1 className="font-baskerville text-3xl sm:text-4xl lg:text-5xl text-[#4B4456] leading-tight">
              Comment choisir un lieu de mariage en Île-de-France (sans se tromper)
            </h1>
            <p className="mt-5 text-[#5A5A5A] leading-relaxed">
              Le lieu décide du budget, du style, du nombre d’invités… et du stress. Si tu choisis mal, tout devient compliqué. Si tu choisis bien, tout devient plus simple.
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
              Pour choisir le bon lieu en Île-de-France : fixe d’abord ton nombre d’invités et ton budget, puis visite avec une checklist (accès, plan B pluie, contraintes horaires, traiteur imposé, logistique).
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-baskerville text-2xl text-[#4B4456] mb-4">Les pièges cachés</h2>
            <ul className="list-disc pl-6 text-[#5A5A5A] space-y-2 leading-relaxed">
              <li>Heures de fin / restrictions musique.</li>
              <li>Traiteur imposé + coûts additionnels.</li>
              <li>Plan B pluie inexistant (extérieur).</li>
              <li>Accès / parking / hébergements insuffisants.</li>
            </ul>
            <p className="mt-4 text-[#5A5A5A] leading-relaxed">
              Une wedding planner te fait gagner du temps : elle sait quoi vérifier et comment négocier les détails qui coûtent cher si tu les découvres trop tard.
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
