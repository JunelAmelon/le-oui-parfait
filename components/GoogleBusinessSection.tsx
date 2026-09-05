export function GoogleBusinessSection() {
  // Carte générée à partir des coordonnées reçues de la fiche Google :
  // 19 Rue Albert Rémy, 91130 Ris-Orangis (48.6536834, 2.4111968)
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const googleMapsEmbedSrc = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=48.6536834,2.4111968&zoom=15&language=fr&maptype=roadmap`
    : 'https://www.google.com/maps?q=48.6536834,2.4111968&z=15&output=embed&hl=fr&ll=48.6536834,2.4111968';

  return (
    <section
      itemScope
      itemType="https://schema.org/LocalBusiness"
      className="bg-[#F5F2F0] py-16"
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

          <div className="bg-white rounded-lg shadow-lg p-2 w-full min-h-[400px] lg:min-h-[480px]">
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
          </div>
        </div>
      </div>
    </section>
  );
}
