import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FileText, AlertCircle, CheckCircle } from 'lucide-react';

export default function Conditions() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#FAF9F7] py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-[#88b7b5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-[#88b7b5]" />
            </div>
            <h1 className="heading-main mb-6">Conditions Générales de Vente</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Les présentes conditions générales régissent les relations contractuelles entre Le Oui Parfait et ses clients.
            </p>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#88b7b5]/5 border-l-4 border-[#88b7b5] p-6 rounded-lg flex gap-4">
              <AlertCircle className="w-6 h-6 text-[#88b7b5] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-lg text-gray-800 mb-2">Information Importante</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Toute commande implique l'acceptation sans réserve des présentes conditions générales de vente qui prévalent sur tout autre document. Ces conditions sont disponibles sur notre site et peuvent être modifiées à tout moment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Article 1 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">
                Article 1 - Objet
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>
                  Les présentes Conditions Générales de Vente (CGV) ont pour objet de définir les droits et obligations des parties dans le cadre de la vente de prestations de services de wedding planning proposées par Le Oui Parfait.
                </p>
                <p>
                  Elles s'appliquent à toutes les prestations effectuées par Le Oui Parfait, à l'exclusion de toute autre condition, notamment celles du client, sauf accord exprès et écrit de notre part.
                </p>
              </div>
            </div>

            {/* Article 2 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">
                Article 2 - Champ d'Application
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>
                  Les présentes CGV s'appliquent à toutes les prestations de services proposées par Le Oui Parfait :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Organisation complète de mariages</li>
                  <li>Coordination le jour J</li>
                  <li>Conseil et design d'événements</li>
                  <li>Recherche et sélection de prestataires</li>
                  <li>Toute autre prestation de wedding planning</li>
                </ul>
              </div>
            </div>

            {/* Article 3 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">
                Article 3 - Devis et Commande
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">3.1 Devis</h3>
                  <p>
                    Après une première consultation gratuite, un devis détaillé est établi et envoyé au client. Ce devis est valable pendant 30 jours à compter de sa date d'émission. Il précise la nature des prestations, leur durée, et leur prix.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">3.2 Commande</h3>
                  <p>
                    La commande devient définitive après signature du devis par le client et réception de l'acompte. La signature du devis vaut acceptation des présentes CGV.
                  </p>
                </div>
                <div className="bg-[#FAF9F7] p-5 rounded-lg">
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-[#88b7b5] flex-shrink-0 mt-1" />
                    <p className="text-sm">
                      <strong>Important :</strong> Aucune prestation ne sera commencée avant la signature du devis et le règlement de l'acompte.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Article 4 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">
                Article 4 - Prix
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>
                  Les prix de nos prestations sont indiqués en euros, toutes taxes comprises (TTC), TVA française en vigueur au jour de la commande.
                </p>
                <p>
                  Le Oui Parfait se réserve le droit de modifier ses tarifs à tout moment. Toutefois, les prix applicables sont ceux en vigueur au jour de la signature du devis, sauf modification demandée par le client.
                </p>
                <p>
                  Les frais de déplacement au-delà de 50 km de notre agence peuvent faire l'objet d'une facturation supplémentaire, précisée dans le devis.
                </p>
              </div>
            </div>

            {/* Article 5 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">
                Article 5 - Modalités de Paiement
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">5.1 Échéancier de Paiement</h3>
                  <p>Le paiement s'effectue selon l'échéancier suivant :</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong>30%</strong> à la signature du contrat (acompte non remboursable)</li>
                    <li><strong>40%</strong> à mi-parcours, soit environ 3 mois avant le mariage</li>
                    <li><strong>30%</strong> un mois avant la date du mariage</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">5.2 Moyens de Paiement</h3>
                  <p>Les paiements peuvent s'effectuer par :</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Virement bancaire</li>
                    <li>Chèque à l'ordre de Le Oui Parfait</li>
                    <li>Carte bancaire (pour les acomptes uniquement)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">5.3 Retard de Paiement</h3>
                  <p>
                    En cas de retard de paiement, des pénalités égales à trois fois le taux d'intérêt légal seront exigibles de plein droit, sans mise en demeure préalable. Une indemnité forfaitaire de 40 euros pour frais de recouvrement sera également due.
                  </p>
                  <p className="mt-2">
                    En cas de non-paiement à l'échéance prévue, Le Oui Parfait se réserve le droit de suspendre ou d'annuler la prestation.
                  </p>
                </div>
              </div>
            </div>

            {/* Article 6 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">
                Article 6 - Obligations du Client
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>Le client s'engage à :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fournir toutes les informations nécessaires à la bonne exécution de la prestation</li>
                  <li>Répondre dans les délais impartis aux demandes de Le Oui Parfait</li>
                  <li>Valider les devis des prestataires dans les délais convenus</li>
                  <li>Régler les factures aux échéances prévues</li>
                  <li>Informer Le Oui Parfait de tout changement concernant le projet</li>
                  <li>Respecter les conseils et recommandations de Le Oui Parfait</li>
                </ul>
                <div className="bg-[#FAF9F7] p-5 rounded-lg mt-4">
                  <p className="text-sm">
                    <strong>Note :</strong> Le non-respect de ces obligations par le client peut entraîner des retards dans l'organisation et dégage la responsabilité de Le Oui Parfait.
                  </p>
                </div>
              </div>
            </div>

            {/* Article 7 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">
                Article 7 - Obligations de Le Oui Parfait
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>Le Oui Parfait s'engage à :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mettre en œuvre tous les moyens nécessaires pour la bonne exécution des prestations</li>
                  <li>Sélectionner des prestataires de qualité selon les critères définis avec le client</li>
                  <li>Tenir le client informé régulièrement de l'avancement du projet</li>
                  <li>Respecter le budget défini (hors demandes de modifications du client)</li>
                  <li>Assurer une coordination professionnelle le jour de l'événement</li>
                  <li>Garantir la confidentialité des informations communiquées</li>
                </ul>
              </div>
            </div>

            {/* Article 8 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">
                Article 8 - Modifications et Annulations
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">8.1 Modifications</h3>
                  <p>
                    Toute modification de la prestation demandée par le client fera l'objet d'un avenant au contrat. Les modifications peuvent entraîner une révision du prix et des délais.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">8.2 Annulation par le Client</h3>
                  <p>En cas d'annulation par le client, les conditions suivantes s'appliquent :</p>
                  <div className="overflow-x-auto mt-3">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#FAF9F7]">
                          <th className="border border-gray-200 px-4 py-3 text-left font-serif text-gray-800">Délai d'Annulation</th>
                          <th className="border border-gray-200 px-4 py-3 text-left font-serif text-gray-800">Montant Retenu</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 px-4 py-3">Plus de 6 mois avant l'événement</td>
                          <td className="border border-gray-200 px-4 py-3">30% du montant total (acompte)</td>
                        </tr>
                        <tr className="bg-[#FAF9F7]">
                          <td className="border border-gray-200 px-4 py-3">Entre 3 et 6 mois avant l'événement</td>
                          <td className="border border-gray-200 px-4 py-3">50% du montant total</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 px-4 py-3">Moins de 3 mois avant l'événement</td>
                          <td className="border border-gray-200 px-4 py-3">100% du montant total</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-3 text-sm bg-[#88b7b5]/5 p-4 rounded">
                    <strong>Recommandation :</strong> Nous conseillons vivement de souscrire une assurance annulation pour vous protéger en cas d'imprévu.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">8.3 Annulation par Le Oui Parfait</h3>
                  <p>
                    En cas de force majeure (définie à l'article 10), Le Oui Parfait peut annuler la prestation. Dans ce cas, les sommes déjà versées seront intégralement remboursées, sans autre indemnité.
                  </p>
                </div>
              </div>
            </div>

            {/* Article 9 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">
                Article 9 - Responsabilité
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">9.1 Responsabilité de Le Oui Parfait</h3>
                  <p>
                    Le Oui Parfait ne peut être tenue responsable :
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Des manquements ou défaillances des prestataires tiers sélectionnés</li>
                    <li>Des retards ou défauts d'exécution dus au client</li>
                    <li>Des cas de force majeure</li>
                    <li>Des décisions prises par le client contre l'avis de Le Oui Parfait</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">9.2 Assurance</h3>
                  <p>
                    Le Oui Parfait est titulaire d'une assurance responsabilité civile professionnelle couvrant les conséquences pécuniaires de sa responsabilité civile professionnelle.
                  </p>
                  <p className="mt-2 text-sm">
                    <strong>Assureur :</strong> AXA France<br />
                    <strong>Police n° :</strong> 123456789<br />
                    <strong>Couverture géographique :</strong> France
                  </p>
                </div>
              </div>
            </div>

            {/* Article 10 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">
                Article 10 - Force Majeure
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>
                  Sont considérés comme cas de force majeure tous faits ou circonstances irrésistibles, extérieurs aux parties, imprévisibles, inévitables, indépendants de la volonté des parties et qui ne pourront être empêchés par ces dernières, malgré tous les efforts raisonnablement possibles.
                </p>
                <p>
                  En cas de force majeure, Le Oui Parfait sera libérée de ses obligations dans la mesure où elle en sera empêchée par l'événement, pendant toute la durée de la force majeure.
                </p>
              </div>
            </div>

            {/* Article 11 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">
                Article 11 - Propriété Intellectuelle
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>
                  Tous les documents, concepts créatifs, plannings, designs et autres éléments créés par Le Oui Parfait dans le cadre de sa prestation restent sa propriété intellectuelle.
                </p>
                <p>
                  Le client s'engage à ne pas reproduire, utiliser ou diffuser ces éléments sans l'autorisation écrite préalable de Le Oui Parfait, sauf pour l'usage strictement personnel de son événement.
                </p>
                <p>
                  Le Oui Parfait se réserve le droit d'utiliser les photos et vidéos de l'événement à des fins promotionnelles, sauf opposition écrite du client.
                </p>
              </div>
            </div>

            {/* Article 12 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">
                Article 12 - Confidentialité
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>
                  Le Oui Parfait s'engage à garder strictement confidentielles toutes les informations communiquées par le client dans le cadre de la prestation.
                </p>
                <p>
                  Cette obligation de confidentialité ne s'applique pas aux informations qui seraient déjà publiques ou qui devraient être communiquées en vertu d'une obligation légale.
                </p>
              </div>
            </div>

            {/* Article 13 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">
                Article 13 - Protection des Données Personnelles
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>
                  Les données personnelles collectées font l'objet d'un traitement informatique et sont destinées à Le Oui Parfait pour la gestion de la relation client.
                </p>
                <p>
                  Conformément au RGPD et à la loi Informatique et Libertés, le client dispose d'un droit d'accès, de rectification, de suppression et d'opposition aux données le concernant.
                </p>
                <p>
                  Pour plus d'informations, consultez notre <a href="/confidentialite" className="text-[#88b7b5] hover:underline">Politique de Confidentialité</a>.
                </p>
              </div>
            </div>

            {/* Article 14 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">
                Article 14 - Médiation et Litiges
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">14.1 Médiation</h3>
                  <p>
                    En cas de litige, le client peut recourir gratuitement au service de médiation de la consommation dont Le Oui Parfait dépend :
                  </p>
                  <p className="mt-2 text-sm bg-[#FAF9F7] p-4 rounded">
                    <strong>Médiateur de la Consommation :</strong> Centre de Médiation et d'Arbitrage de Paris (CMAP)<br />
                    <strong>Adresse :</strong> 39 avenue Franklin D. Roosevelt, 75008 Paris<br />
                    <strong>Site web :</strong> <a href="https://www.cmap.fr" className="text-[#88b7b5] hover:underline">www.cmap.fr</a>
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">14.2 Droit Applicable et Juridiction</h3>
                  <p>
                    Les présentes CGV sont soumises au droit français. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux compétents de Paris.
                  </p>
                </div>
              </div>
            </div>

            {/* Article 15 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">
                Article 15 - Acceptation des CGV
              </h2>
              <div className="text-gray-600 leading-relaxed">
                <p>
                  La signature du devis emporte acceptation pleine et entière des présentes conditions générales de vente, qui prévalent sur tout autre document du client, et notamment sur toutes conditions générales d'achat.
                </p>
              </div>
            </div>

            {/* Last Update */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 italic">
                Dernière mise à jour : 30 janvier 2026<br />
                Version 2.0
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#FAF9F7] py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-serif text-gray-800 mb-4">
              Questions sur nos Conditions ?
            </h2>
            <p className="text-gray-600 mb-6">
              Notre équipe est à votre disposition pour clarifier tout point des présentes conditions générales.
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
