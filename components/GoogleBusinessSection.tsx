import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

export function GoogleBusinessSection() {
  // Carte générée à partir des coordonnées reçues de la fiche Google :
  // 19 Rue Albert Rémy, 91130 Ris-Orangis (48.6536834, 2.4111968)
  const googleMapsEmbedSrc =
    'https://www.google.com/maps?q=48.6536834,2.4111968&z=15&output=embed&hl=fr&ll=48.6536834,2.4111968';

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Coordonnées */}
            <div className="bg-white rounded-lg shadow-lg px-8 py-8 space-y-6">
              <meta itemProp="name" content="Le Oui Parfait" />
              <meta itemProp="telephone" content="+33 6 87 21 71 18" />
              <meta itemProp="url" content="https://leouiparfait.com" />

              <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-[#88b7b5]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                    <p className="text-gray-600 leading-relaxed">
                      <span itemProp="streetAddress">19 rue Albert-Remy</span>
                      <br />
                      <span itemProp="postalCode">91130</span>{' '}
                      <span itemProp="addressLocality">Ris-Orangis</span>,{' '}
                      <span itemProp="addressCountry">France</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-[#88b7b5]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+33687217118" className="hover:text-[#88b7b5] transition">
                      +33 6 87 21 71 18
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-[#88b7b5]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:contact@leouiparfait.fr" className="hover:text-[#88b7b5] transition">
                      contact@leouiparfait.fr
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-[#88b7b5]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Horaires</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Lundi - Vendredi : 9h00 - 18h00
                    <br />
                    Samedi : 10h00 - 16h00
                    <br />
                    Dimanche : sur rendez-vous
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Le+Oui+Parfait+Ris-Orangis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#88b7b5] hover:text-[#6fa5a3] text-sm font-medium transition"
              >
                Voir sur Google Maps
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Carte / iframe Google Maps */}
            <div className="bg-white rounded-lg shadow-lg p-2 h-full min-h-[320px]">
              <iframe
                title="Carte Le Oui Parfait - 19 rue Albert-Remy, Ris-Orangis"
                src={googleMapsEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '320px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-md w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
