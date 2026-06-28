import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

const url = 'https://leouiparfait.com/coordination-jour-j-mariage-prix';

export const metadata: Metadata = {
  title: 'Coordination jour J : prix + ce qui est inclus (et ce que tu risques sans)',
  description:
    'Coordination jour J : comprendre le prix, ce qui est inclus, et comment éviter stress, retards et imprévus le jour du mariage en Île-de-France.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Coordination jour J : prix + ce qui est inclus',
    description:
      'Coordination jour J : prix, inclus, risques si tu gères seul(e) et comment vérifier la disponibilité.',
    url,
    type: 'article',
  },
};

const phoneNumber = '33687217118';
const message =
  "Bonjour 👋\nJe souhaite organiser mon mariage et vérifier votre disponibilité.\nDate :\nLieu :\nBudget approximatif :\n";
const whatsappHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export default function CoordinationJourJPrixPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-white">
        <section className="pt-28 pb-12 lg:pt-36">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-4">Coordination Jour J</p>
            <h1 className="font-baskerville text-3xl sm:text-4xl lg:text-5xl text-[#4B4456] leading-tight">
              Coordination jour J : prix + ce qui est inclus (et ce que tu risques sans)
            </h1>
            <p className="mt-5 text-[#5A5A5A] leading-relaxed">
              Tu as déjà réservé ton lieu et tes prestataires, mais tu veux une journée fluide, sans stress, sans retards, et sans que ta famille passe la journée à “gérer” ?
              La coordination du jour J est exactement faite pour ça.
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
              Le prix d’une coordination du jour J dépend du niveau d’accompagnement avant le mariage (rendez-vous, reprise du planning, contacts prestataires, repérage…)
              et du jour J (présence, équipe, amplitude horaire). L’objectif est simple : que tu profites, pendant que quelqu’un pilote.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-baskerville text-2xl text-[#4B4456] mb-4">Ce que tu risques sans coordination</h2>
            <ul className="list-disc pl-6 text-[#5A5A5A] space-y-2 leading-relaxed">
              <li>Retards en chaîne (coiffure, photos, cérémonie, repas).</li>
              <li>Prestataires qui te sollicitent toi (ou tes témoins) toute la journée.</li>
              <li>Imprévus sans plan B (météo, timing, matériel, accès).</li>
              <li>Stress et tensions au moment où tu devrais vivre le moment.</li>
            </ul>
          </div>
        </section>

        <section className="py-12 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-baskerville text-2xl text-[#4B4456] mb-4">La solution pro</h2>
            <p className="text-[#5A5A5A] leading-relaxed">
              Une coordination du jour J, c’est un pilotage : déroulé clair, échanges prestataires, point logistique, et présence le jour J pour gérer les imprévus.
              Résultat : une journée fluide et des invités qui profitent.
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
