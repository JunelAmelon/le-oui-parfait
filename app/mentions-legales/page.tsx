import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function MentionsLegales() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#FAF9F7] py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-main mb-6">Mentions Légales</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Informations légales concernant le site web Le Oui Parfait
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-12">
              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-serif text-gray-800 mb-4">
                  1. Éditeur du Site
                </h2>
                <div className="text-gray-600 leading-relaxed space-y-3">
                  <p>
                    Le site web <strong>leouiparfait.fr</strong> est édité par :
                  </p>
                  <p>
                    <strong>Le Oui Parfait</strong><br />
                    SARL au capital de 50 000 €<br />
                    Siège social : 930 Palma Lane Suite 500, 75001 Paris, France<br />
                    RCS Paris : 123 456 789<br />
                    SIRET : 123 456 789 00012<br />
                    TVA Intracommunautaire : FR 12 123456789
                  </p>
                  <p>
                    <strong>Directeur de la publication :</strong> Marie Dubois<br />
                    <strong>Contact :</strong> contact@leouiparfait.fr<br />
                    <strong>Téléphone :</strong> +33 1 23 45 67 89
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-serif text-gray-800 mb-4">
                  2. Hébergement
                </h2>
                <div className="text-gray-600 leading-relaxed space-y-3">
                  <p>
                    Le site est hébergé par :
                  </p>
                  <p>
                    <strong>Vercel Inc.</strong><br />
                    340 S Lemon Ave #4133<br />
                    Walnut, CA 91789, USA<br />
                    Site web : <a href="https://vercel.com" className="text-[#88b7b5] hover:underline">vercel.com</a>
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-serif text-gray-800 mb-4">
                  3. Propriété Intellectuelle
                </h2>
                <div className="text-gray-600 leading-relaxed space-y-3">
                  <p>
                    L'ensemble du contenu présent sur le site leouiparfait.fr, incluant, de manière non limitative, les textes, images, graphismes, logo, icônes, sons, logiciels, est la propriété exclusive de Le Oui Parfait ou de ses partenaires, et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
                  </p>
                  <p>
                    Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Le Oui Parfait.
                  </p>
                  <p>
                    Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-serif text-gray-800 mb-4">
                  4. Responsabilité
                </h2>
                <div className="text-gray-600 leading-relaxed space-y-3">
                  <p>
                    Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement mis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
                  </p>
                  <p>
                    Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement, merci de bien vouloir le signaler par email à contact@leouiparfait.fr en décrivant le problème de la manière la plus précise possible.
                  </p>
                  <p>
                    Le Oui Parfait décline toute responsabilité :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>En cas d'interruption du site</li>
                    <li>En cas de survenance de bugs</li>
                    <li>En cas d'utilisation frauduleuse par un utilisateur du site</li>
                    <li>En cas de dommages directs ou indirects causés à l'utilisateur</li>
                  </ul>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-serif text-gray-800 mb-4">
                  5. Liens Hypertextes
                </h2>
                <div className="text-gray-600 leading-relaxed space-y-3">
                  <p>
                    Le site leouiparfait.fr peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet. Les liens vers ces autres ressources vous font quitter le site leouiparfait.fr.
                  </p>
                  <p>
                    Il est possible de créer un lien vers la page de présentation de ce site sans autorisation expresse de Le Oui Parfait. Aucune autorisation ni demande d'information préalable ne peut être exigée par l'éditeur à l'égard d'un site qui souhaite établir un lien vers le site de l'éditeur.
                  </p>
                  <p>
                    Le Oui Parfait n'est pas responsable du contenu des sites externes liés depuis son site web.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-serif text-gray-800 mb-4">
                  6. Protection des Données Personnelles
                </h2>
                <div className="text-gray-600 leading-relaxed space-y-3">
                  <p>
                    Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                  </p>
                  <p>
                    Pour exercer ce droit, veuillez nous contacter à l'adresse suivante :<br />
                    <strong>Email :</strong> dpo@leouiparfait.fr<br />
                    <strong>Courrier :</strong> Le Oui Parfait - Service DPO, 930 Palma Lane Suite 500, 75001 Paris
                  </p>
                  <p>
                    Pour plus d'informations sur la gestion de vos données personnelles, consultez notre <a href="/confidentialite" className="text-[#88b7b5] hover:underline">Politique de Confidentialité</a>.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl font-serif text-gray-800 mb-4">
                  7. Cookies
                </h2>
                <div className="text-gray-600 leading-relaxed space-y-3">
                  <p>
                    Le site leouiparfait.fr peut être amené à vous demander l'acceptation des cookies pour des besoins de statistiques et d'affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez.
                  </p>
                  <p>
                    Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte auquel un serveur accède pour lire et enregistrer des informations. Certaines parties de ce site ne peuvent être fonctionnelles sans l'acceptation de cookies.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl font-serif text-gray-800 mb-4">
                  8. Droit Applicable et Juridiction Compétente
                </h2>
                <div className="text-gray-600 leading-relaxed space-y-3">
                  <p>
                    Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl font-serif text-gray-800 mb-4">
                  9. Crédits
                </h2>
                <div className="text-gray-600 leading-relaxed space-y-3">
                  <p>
                    <strong>Conception et développement :</strong> Deverust Studio<br />
                    <strong>Crédits photographiques :</strong> Pexels, Unsplash (photographes indépendants sous licence libre)<br />
                    <strong>Icônes :</strong> Lucide Icons
                  </p>
                </div>
              </div>

              {/* Last Update */}
              <div className="pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 italic">
                  Dernière mise à jour : 30 janvier 2026
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#FAF9F7] py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-serif text-gray-800 mb-4">
              Des Questions ?
            </h2>
            <p className="text-gray-600 mb-6">
              Si vous avez des questions concernant ces mentions légales, n'hésitez pas à nous contacter.
            </p>
            <a
              href="/contact"
              className="inline-block border-2 border-[#88b7b5] text-[#88b7b5] px-8 py-3 rounded-full uppercase tracking-wider text-sm font-medium hover:bg-[#88b7b5] hover:text-white transition-all duration-300"
            >
              Nous Contacter
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
