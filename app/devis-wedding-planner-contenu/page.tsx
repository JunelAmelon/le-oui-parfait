import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

const url = 'https://leouiparfait.com/devis-wedding-planner-contenu';

export const metadata: Metadata = {
  title: 'Devis wedding planner : que doit contenir une offre sérieuse ?',
  description:
    'Devis wedding planner : ce qui doit être inclus (rendez-vous, rétroplanning, coordination, présence, limites). Éviter les offres floues.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Devis wedding planner : contenu',
    description: 'Les points à vérifier + erreurs à éviter + CTA disponibilité.',
    url,
    type: 'article',
  },
};

const phoneNumber = '33687217118';
const message =
  "Bonjour 👋\nJe souhaite organiser mon mariage et vérifier votre disponibilité.\nDate :\nLieu :\nBudget approximatif :\n";
const whatsappHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export default function DevisWeddingPlannerContenuPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-white">
        <section className="pt-28 pb-12 lg:pt-36">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-4">Devis</p>
            <h1 className="font-baskerville text-3xl sm:text-4xl lg:text-5xl text-[#4B4456] leading-tight">
              Devis wedding planner : que doit contenir une offre sérieuse ?
            </h1>
            <p className="mt-5 text-[#5A5A5A] leading-relaxed">
              Beaucoup de devis semblent “bien”… jusqu’au moment où tu réalises que ce n’était pas inclus. Voici les points indispensables à vérifier pour éviter les mauvaises surprises.
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
              Un devis sérieux précise : le périmètre exact, les rendez-vous, le rétroplanning, les échanges prestataires, la présence le jour J, les horaires, ce qui est hors prestation, et les options.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-baskerville text-2xl text-[#4B4456] mb-4">Les problèmes cachés (dans les offres floues)</h2>
            <ul className="list-disc pl-6 text-[#5A5A5A] space-y-2 leading-relaxed">
              <li>“Coordination” sans reprise du planning → tu restes seule sur la logistique.</li>
              <li>Présence limitée non dite → stress le jour J.</li>
              <li>Pas de plan B / pas de brief prestataires.</li>
            </ul>
          </div>
        </section>

        <section className="py-12 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-baskerville text-2xl text-[#4B4456] mb-4">Solution pro</h2>
            <p className="text-[#5A5A5A] leading-relaxed">
              Notre approche : clarté, méthode, et pilotage. Tu sais exactement ce que tu achètes — et surtout ce que tu gagnes (temps, sérénité, cohérence).
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
