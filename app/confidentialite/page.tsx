import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Shield, Lock, Eye, UserCheck, Database, FileText } from 'lucide-react';

export default function Confidentialite() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#FAF9F7] py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-[#88b7b5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-[#88b7b5]" />
            </div>
            <h1 className="heading-main mb-6">Politique de Confidentialité</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nous prenons la protection de vos données personnelles très au sérieux. Découvrez comment nous collectons, utilisons et protégeons vos informations.
            </p>
          </div>
        </section>

        {/* Quick Info Cards */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4 p-6 bg-[#FAF9F7] rounded-lg">
                <Lock className="w-8 h-8 text-[#88b7b5] flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-lg text-gray-800 mb-2">Données Sécurisées</h3>
                  <p className="text-sm text-gray-600">Vos informations sont cryptées et stockées en toute sécurité</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-[#FAF9F7] rounded-lg">
                <Eye className="w-8 h-8 text-[#88b7b5] flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-lg text-gray-800 mb-2">Transparence Totale</h3>
                  <p className="text-sm text-gray-600">Vous savez toujours ce que nous faisons de vos données</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-[#FAF9F7] rounded-lg">
                <UserCheck className="w-8 h-8 text-[#88b7b5] flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-lg text-gray-800 mb-2">Vos Droits Protégés</h3>
                  <p className="text-sm text-gray-600">Accès, modification et suppression à tout moment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Section 1 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-[#88b7b5]" />
                <h2 className="text-2xl font-serif text-gray-800">
                  1. Données Collectées
                </h2>
              </div>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  Dans le cadre de nos services de wedding planning, nous sommes amenés à collecter les données personnelles suivantes :
                </p>

                <div className="bg-[#FAF9F7] p-6 rounded-lg">
                  <h3 className="font-serif text-lg text-gray-800 mb-3">Données d'Identité</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Nom et prénom</li>
                    <li>Date de naissance</li>
                    <li>Adresse postale</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone</li>
                  </ul>
                </div>

                <div className="bg-[#FAF9F7] p-6 rounded-lg">
                  <h3 className="font-serif text-lg text-gray-800 mb-3">Données Relatives à votre Événement</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Date et lieu du mariage</li>
                    <li>Nombre d'invités</li>
                    <li>Budget estimé</li>
                    <li>Préférences et style souhaité</li>
                    <li>Informations sur les prestataires choisis</li>
                  </ul>
                </div>

                <div className="bg-[#FAF9F7] p-6 rounded-lg">
                  <h3 className="font-serif text-lg text-gray-800 mb-3">Données de Navigation</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Adresse IP</li>
                    <li>Type de navigateur</li>
                    <li>Pages consultées</li>
                    <li>Durée de visite</li>
                    <li>Cookies et traceurs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-[#88b7b5]" />
                <h2 className="text-2xl font-serif text-gray-800">
                  2. Utilisation des Données
                </h2>
              </div>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  Vos données personnelles sont collectées et utilisées dans les buts suivants :
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>Gestion de votre projet de mariage :</strong> Organisation, planification, coordination de tous les aspects de votre événement
                  </li>
                  <li>
                    <strong>Communication :</strong> Répondre à vos demandes, vous envoyer des devis, vous tenir informé de l'avancement de votre projet
                  </li>
                  <li>
                    <strong>Gestion contractuelle :</strong> Établissement et suivi des contrats, facturation, gestion des paiements
                  </li>
                  <li>
                    <strong>Amélioration de nos services :</strong> Analyse de satisfaction, amélioration de notre offre, personnalisation de nos prestations
                  </li>
                  <li>
                    <strong>Marketing (avec votre consentement) :</strong> Envoi de newsletters, offres promotionnelles, invitations à des événements
                  </li>
                  <li>
                    <strong>Obligations légales :</strong> Respect des obligations comptables, fiscales et réglementaires
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">
                3. Base Légale du Traitement
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  Conformément au RGPD, le traitement de vos données repose sur les bases légales suivantes :
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#88b7b5] pl-6">
                    <h4 className="font-medium text-gray-800 mb-2">Exécution du Contrat</h4>
                    <p>Le traitement est nécessaire à l'exécution du contrat de prestation de services de wedding planning.</p>
                  </div>
                  <div className="border-l-4 border-[#88b7b5] pl-6">
                    <h4 className="font-medium text-gray-800 mb-2">Consentement</h4>
                    <p>Pour l'envoi de communications marketing, nous recueillons votre consentement explicite que vous pouvez retirer à tout moment.</p>
                  </div>
                  <div className="border-l-4 border-[#88b7b5] pl-6">
                    <h4 className="font-medium text-gray-800 mb-2">Intérêt Légitime</h4>
                    <p>Pour l'amélioration de nos services et la personnalisation de notre offre.</p>
                  </div>
                  <div className="border-l-4 border-[#88b7b5] pl-6">
                    <h4 className="font-medium text-gray-800 mb-2">Obligation Légale</h4>
                    <p>Pour le respect de nos obligations comptables, fiscales et légales.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">
                4. Partage des Données
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  Vos données personnelles peuvent être partagées avec :
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>Nos prestataires partenaires :</strong> Traiteurs, fleuristes, photographes, lieux de réception, uniquement dans le cadre de l'organisation de votre mariage et avec votre accord
                  </li>
                  <li>
                    <strong>Nos sous-traitants techniques :</strong> Hébergeur web, service d'emailing, outils de gestion, tous soumis à des obligations strictes de sécurité et de confidentialité
                  </li>
                  <li>
                    <strong>Autorités compétentes :</strong> En cas d'obligation légale ou de demande judiciaire
                  </li>
                </ul>
                <div className="bg-[#88b7b5]/5 p-6 rounded-lg border-l-4 border-[#88b7b5]">
                  <p className="font-medium text-gray-800">
                    Important : Nous ne vendons jamais vos données personnelles à des tiers à des fins commerciales.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">
                5. Durée de Conservation
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  Nous conservons vos données personnelles pendant les durées suivantes :
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#FAF9F7]">
                        <th className="border border-gray-200 px-4 py-3 text-left font-serif text-gray-800">Type de Données</th>
                        <th className="border border-gray-200 px-4 py-3 text-left font-serif text-gray-800">Durée</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3">Données du projet de mariage</td>
                        <td className="border border-gray-200 px-4 py-3">3 ans après la fin de la prestation</td>
                      </tr>
                      <tr className="bg-[#FAF9F7]">
                        <td className="border border-gray-200 px-4 py-3">Données contractuelles et comptables</td>
                        <td className="border border-gray-200 px-4 py-3">10 ans (obligation légale)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3">Données marketing (newsletter)</td>
                        <td className="border border-gray-200 px-4 py-3">3 ans sans interaction</td>
                      </tr>
                      <tr className="bg-[#FAF9F7]">
                        <td className="border border-gray-200 px-4 py-3">Cookies de navigation</td>
                        <td className="border border-gray-200 px-4 py-3">13 mois maximum</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">
                6. Vos Droits
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white border border-gray-200 p-5 rounded-lg">
                    <h4 className="font-serif text-lg text-gray-800 mb-2">Droit d'Accès</h4>
                    <p className="text-sm">Obtenir une copie de vos données personnelles</p>
                  </div>
                  <div className="bg-white border border-gray-200 p-5 rounded-lg">
                    <h4 className="font-serif text-lg text-gray-800 mb-2">Droit de Rectification</h4>
                    <p className="text-sm">Corriger des données inexactes ou incomplètes</p>
                  </div>
                  <div className="bg-white border border-gray-200 p-5 rounded-lg">
                    <h4 className="font-serif text-lg text-gray-800 mb-2">Droit à l'Effacement</h4>
                    <p className="text-sm">Supprimer vos données dans certaines conditions</p>
                  </div>
                  <div className="bg-white border border-gray-200 p-5 rounded-lg">
                    <h4 className="font-serif text-lg text-gray-800 mb-2">Droit d'Opposition</h4>
                    <p className="text-sm">Vous opposer au traitement de vos données</p>
                  </div>
                  <div className="bg-white border border-gray-200 p-5 rounded-lg">
                    <h4 className="font-serif text-lg text-gray-800 mb-2">Droit à la Limitation</h4>
                    <p className="text-sm">Limiter le traitement de vos données</p>
                  </div>
                  <div className="bg-white border border-gray-200 p-5 rounded-lg">
                    <h4 className="font-serif text-lg text-gray-800 mb-2">Droit à la Portabilité</h4>
                    <p className="text-sm">Récupérer vos données dans un format structuré</p>
                  </div>
                </div>

                <div className="bg-[#88b7b5]/5 p-6 rounded-lg mt-6">
                  <h4 className="font-serif text-lg text-gray-800 mb-3">Comment Exercer vos Droits ?</h4>
                  <p className="mb-3">
                    Pour exercer l'un de ces droits, contactez-nous :
                  </p>
                  <ul className="space-y-2">
                    <li><strong>Par email :</strong> dpo@leouiparfait.fr</li>
                    <li><strong>Par courrier :</strong> Le Oui Parfait - Service DPO, 930 Palma Lane Suite 500, 75001 Paris</li>
                  </ul>
                  <p className="mt-3 text-sm">
                    Nous nous engageons à répondre à votre demande dans un délai d'un mois maximum.
                  </p>
                </div>

                <p className="text-sm">
                  Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) si vous estimez que vos droits ne sont pas respectés : <a href="https://www.cnil.fr" className="text-[#88b7b5] hover:underline">www.cnil.fr</a>
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">
                7. Sécurité des Données
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir la sécurité de vos données personnelles :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cryptage des données sensibles (SSL/TLS)</li>
                  <li>Accès restreint aux données (authentification stricte)</li>
                  <li>Sauvegardes régulières et sécurisées</li>
                  <li>Politique de mots de passe robustes</li>
                  <li>Surveillance et détection des incidents de sécurité</li>
                  <li>Formation régulière de nos équipes à la protection des données</li>
                </ul>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">
                8. Cookies et Traceurs
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  Notre site utilise des cookies pour améliorer votre expérience de navigation. Nous utilisons :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site (pas de consentement requis)</li>
                  <li><strong>Cookies de performance :</strong> Analyse de l'utilisation du site pour l'améliorer</li>
                  <li><strong>Cookies marketing :</strong> Personnalisation de la publicité (avec votre consentement)</li>
                </ul>
                <p>
                  Vous pouvez à tout moment modifier vos préférences en matière de cookies depuis les paramètres de votre navigateur.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">
                9. Modifications de la Politique
              </h2>
              <div className="text-gray-600 leading-relaxed">
                <p>
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour. Nous vous encourageons à consulter régulièrement cette page pour rester informé.
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
        </section>

        {/* CTA Section */}
        <section className="bg-[#88b7b5] py-16 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">
              Questions sur vos Données ?
            </h2>
            <p className="text-white/90 mb-6">
              Notre équipe est à votre disposition pour répondre à toutes vos questions concernant la protection de vos données personnelles.
            </p>
            <a
              href="mailto:dpo@leouiparfait.fr"
              className="inline-block bg-white text-[#88b7b5] px-8 py-3 rounded-full uppercase tracking-wider text-sm font-medium hover:bg-gray-50 transition-all duration-300"
            >
              Contacter le DPO
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
