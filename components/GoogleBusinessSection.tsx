import { ExternalLink } from 'lucide-react';

export function GoogleBusinessSection() {
  // Carte générée à partir de l'adresse de la fiche Google :
  // 19 Rue Albert Rémy, 91130 Ris-Orangis
  // Recherche textuelle plutôt que coordonnées pour éviter les appels Places API.
  const googleMapsEmbedSrc =
    'https://www.google.com/maps?q=19+Rue+Albert+Rémy,+91130+Ris-Orangis&z=15&output=embed&hl=fr&iwloc=near';

  return (
    <section
      itemScope
      itemType="https://schema.org/LocalBusiness"
      className="bg-[#F5F2F0] pt-6 pb-10"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] text-[#88b7b5] uppercase mb-4 font-light">
            VENIR NOUS VOIR
          </p>
          <h2 className="font-baskerville text-[34px] text-[#3B3B3B] leading-[1.15] font-normal mb-4">
            Notre adresse
          </h2>
          <p className="text-[14px] text-gray-600 mb-10">
            Retrouvez Le Oui Parfait à Ris-Orangis, à quelques minutes d’Évry et
            en plein cœur de l’Essonne (91).
          </p>

          <div className="bg-white rounded-lg shadow-lg p-2 pb-4 w-full min-h-[400px] lg:min-h-[480px] flex flex-col">
            <iframe
              title="Carte Le Oui Parfait - 19 rue Albert-Remy, Ris-Orangis"
              src={googleMapsEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md w-full h-full block"
            />

            <div className="mt-4 flex justify-center">
              <a
                href="https://share.google/mfARjnWx5IbjAwhor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#88b7b5] hover:text-[#6fa5a3] transition"
              >
                Voir la fiche Google My Business
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
