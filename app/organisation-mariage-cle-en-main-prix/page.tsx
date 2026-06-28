import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

const url = 'https://leouiparfait.com/organisation-mariage-cle-en-main-prix';

export const metadata: Metadata = {
  title: 'Organisation de mariage clé en main : prix, étapes, et pour qui c’est fait',
  description:
    'Organisation clé en main : comprendre le prix, les étapes, et comment déléguer sans perdre le contrôle. Île-de-France.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Organisation mariage clé en main : prix',
    description: 'Prix, étapes, erreurs à éviter et vérification de disponibilité.',
    url,
    type: 'article',
  },
};

const phoneNumber = '33687217118';
const message =
  "Bonjour 👋\nJe souhaite organiser mon mariage et vérifier votre disponibilité.\nDate :\nLieu :\nBudget approximatif :\n";
const whatsappHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export default function OrganisationCleEnMainPrixPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-white">
        <section className="pt-28 pb-12 lg:pt-36">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-4">Organisation Clé en Main</p>
            <h1 className="font-baskerville text-3xl sm:text-4xl lg:text-5xl text-[#4B4456] leading-tight">
              Organisation de mariage clé en main : prix, étapes, et pour qui c’est fait
            </h1>
            <p className="mt-5 text-[#5A5A5A] leading-relaxed">
              Si tu veux un mariage élégant, sans charge mentale, et que tu refuses de passer tes soirées à relancer des prestataires : la clé en main est souvent
              la formule la plus logique.
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
              Le prix d’une organisation clé en main dépend du niveau de complexité (budget, nombre d’invités, lieu, scénographie), du temps restant et du niveau de délégation.
              La clé en main te fait gagner du temps et sécurise chaque étape.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-baskerville text-2xl text-[#4B4456] mb-4">Les problèmes cachés (quand on fait seul)</h2>
            <ul className="list-disc pl-6 text-[#5A5A5A] space-y-2 leading-relaxed">
              <li>Prestataires réservés trop tard (peu de choix, prix plus haut).</li>
              <li>Planning incohérent (retards, photos bâclées, stress).</li>
              <li>Budget non piloté (options cumulées, dépenses invisibles).</li>
              <li>Décisions prises dans l’urgence (mauvais choix).</li>
            </ul>
          </div>
        </section>

        <section className="py-12 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-baskerville text-2xl text-[#4B4456] mb-4">Solution professionnelle</h2>
            <p className="text-[#5A5A5A] leading-relaxed">
              La clé en main, c’est un pilotage complet : sélection prestataires, budget, planning, scénographie, coordination, et plan B.
              Tu gardes la vision, on gère l’exécution.
            </p>

            <div className="mt-8 rounded-2xl bg-white border border-gray-200 p-6">
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
