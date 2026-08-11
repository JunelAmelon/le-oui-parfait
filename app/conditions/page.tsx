import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroPage } from '@/components/HeroPage';
import { FileText, AlertCircle, Download } from 'lucide-react';
import type { Metadata } from 'next';

const url = 'https://leouiparfait.com/conditions';

export const metadata: Metadata = {
  title: 'Conditions générales de vente | Le Oui Parfait',
  description:
    'Conditions générales de vente et de prestations de services Le Oui Parfait — version applicable à compter du 5 août 2026.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Conditions générales de vente | Le Oui Parfait',
    description:
      'Conditions générales de vente et de prestations de services Le Oui Parfait — version applicable à compter du 5 août 2026.',
    url,
    type: 'website',
  },
};

const CGV_PDF_HREF = '/CGV_LE_OUI_PARFAIT_08_2026%20.pdf';
const RETRACTATION_PDF_HREF = '/FORMULAIRE%20TYPE%20DE%20R%C3%89TRACTATION.pdf';

function InfoTable({ rows }: { rows: [string, string][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <tbody>
          {rows.map(([label, value], i) => (
            <tr key={label} className={i % 2 === 0 ? '' : 'bg-[#f4f1f7]'}>
              <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800 align-top w-1/3">{label}</td>
              <td className="border border-gray-200 px-4 py-3">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Conditions() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroPage
          title="Conditions Générales de Vente"
          subtitle="L'art de sublimer chaque instant — Wedding planning • coordination • événements • animations • services numériques • formations. Version applicable à compter du 5 août 2026."
          backgroundImage="cgv.png"
        />

        {/* Important Notice */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#88b7b5]/5 border-l-4 border-[#88b7b5] p-6 rounded-lg flex gap-4">
              <AlertCircle className="w-6 h-6 text-[#88b7b5] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-lg text-gray-800 mb-2">Important</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Les présentes CGV complètent le devis ou contrat signé et les conditions particulières propres à chaque événement. En cas de contradiction, les conditions particulières expressément acceptées prévalent pour le seul point concerné.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* Header identity table */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-2">LE OUI PARFAIT</h2>
              <p className="text-gray-500 italic mb-4">L'art de sublimer chaque instant</p>
              <div className="text-gray-600 leading-relaxed space-y-3 mb-6">
                <p>
                  CONDITIONS GÉNÉRALES DE VENTE ET DE PRESTATIONS DE SERVICES<br />
                  Wedding planning • coordination • événements • animations • services numériques • formations
                </p>
                <p className="font-medium text-gray-800">
                  VERSION APPLICABLE À COMPTER DU 5 AOÛT 2026
                </p>
                <p>
                  Une base contractuelle claire et équilibrée, adaptée à l'organisation de mariages, aux animations, aux outils numériques et aux relations avec les prestataires partenaires.
                </p>
              </div>
              <InfoTable
                rows={[
                  ['Société', 'LE OUI PARFAIT — SASU au capital de 100 €'],
                  ['RCS / SIREN', 'RCS Paris — SIREN 102 662 236'],
                  ['Siège social', '25 rue de Ponthieu, 75008 Paris'],
                  ['Showroom clientèle', '19 rue Albert-Rémy, 91130 Ris-Orangis'],
                  ['Contact', 'contact@leouiparfait.com — +33 (0)6 87 21 71 18'],
                  ['Version', '5 août 2026'],
                ]}
              />
            </div>

            {/* Sommaire */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">Sommaire</h2>
              <ol className="list-decimal pl-6 space-y-1 text-gray-600 leading-relaxed">
                <li>Identité du professionnel</li>
                <li>Objet, champ d'application et définitions</li>
                <li>Documents contractuels et canaux de vente</li>
                <li>Information précontractuelle, devis et formation du contrat</li>
                <li>Nature des prestations et obligation de moyens</li>
                <li>Obligations et coopération du client</li>
                <li>Prestations intégrées, prestataires directs et sous-traitants</li>
                <li>Devis global, prestations intégrées et circuit des paiements</li>
                <li>Prix, taxes et frais complémentaires</li>
                <li>Acomptes, échéanciers et retards de paiement</li>
                <li>Application mobile, espace client et échanges électroniques</li>
                <li>Validations, modifications et prestations supplémentaires</li>
                <li>Droit de rétractation</li>
                <li>Report de l'événement</li>
                <li>Annulation ou résiliation par le client</li>
                <li>Défaillance, remplacement ou annulation côté professionnel</li>
                <li>Force majeure et circonstances exceptionnelles</li>
                <li>Conditions particulières aux animations et expériences</li>
                <li>Transports, navettes et chauffeurs</li>
                <li>Alcool, chicha, sécurité et mineurs</li>
                <li>Voyage de noces et prestations touristiques</li>
                <li>Propriété intellectuelle, livrables et droit à l'image</li>
                <li>Données personnelles et confidentialité</li>
                <li>Responsabilité et assurances</li>
                <li>Réclamations et médiation</li>
                <li>Droit applicable et juridictions compétentes</li>
                <li>Formations et contenus pédagogiques</li>
                <li>Marques, plateformes et futurs canaux</li>
                <li>Dispositions générales</li>
              </ol>
              <p className="text-gray-600 leading-relaxed mt-3">
                Annexe 1. Phasage et calcul en cas d'annulation<br />
                Annexe 2. Formulaire de rétractation<br />
                Annexe 3. Demande de commencement anticipé<br />
                Annexe 4. Fiche de répartition des prestations et paiements
              </p>
            </div>

            {/* Article 1 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ARTICLE 1 — IDENTITÉ DU PROFESSIONNEL</h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>Les présentes conditions générales sont proposées par :</p>
                <InfoTable
                  rows={[
                    ['Dénomination', 'LE OUI PARFAIT'],
                    ['Forme', 'Société par actions simplifiée unipersonnelle (SASU)'],
                    ['Capital social', '100 €'],
                    ['Immatriculation', 'RCS Paris — SIREN 102 662 236'],
                    ['SIRET', '102 662 236 00011'],
                    ['Code APE', '93.29Z — Autres activités récréatives et de loisirs'],
                    ['TVA intracommunautaire', 'FR80 102 662 236'],
                    ['Siège social', '25 rue de Ponthieu, 75008 Paris'],
                    ['Showroom', '19 rue Albert-Rémy, 91130 Ris-Orangis'],
                    ['Courriel', 'contact@leouiparfait.com'],
                    ['Téléphone', '+33 (0)6 87 21 71 18'],
                    ['Site principal', 'https://leouiparfait.com/'],
                  ]}
                />
                <p>
                  Dans les présentes CGV, LE OUI PARFAIT est désignée « Le Oui Parfait » ou « le Prestataire ». La personne physique agissant à des fins non professionnelles est désignée « le Client consommateur » ou « le Client ». Lorsque le contrat est signé par les deux membres du couple, ils sont solidairement tenus des obligations de paiement, sauf stipulation contraire du devis.
                </p>
              </div>
            </div>

            {/* Article 2 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ARTICLE 2 — OBJET, CHAMP D'APPLICATION ET DÉFINITIONS</h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>Les présentes CGV régissent les prestations vendues par Le Oui Parfait aux consommateurs, notamment :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>organisation complète de mariage (« Offre Signature » ou toute formule équivalente) ;</li>
                  <li>organisation partielle et accompagnement ciblé (« Offre Élégance » ou équivalent) ;</li>
                  <li>coordination du jour J (« Offre Harmonie » ou équivalent) ;</li>
                  <li>conseil, direction artistique, wedding design, scénographie et décoration ;</li>
                  <li>recherche, sélection, négociation, contractualisation, intégration et coordination de prestataires partenaires ;</li>
                  <li>demandes en mariage, fiançailles, EVJF/EVG, Shooting Tour et expériences privées ;</li>
                  <li>animations : photobooth, miroir, 360°, stands gourmands, bars thématiques, coin lounge/chicha et prestations similaires ;</li>
                  <li>outils numériques, application mobile, espace client, sites et faire-part digitaux ;</li>
                  <li>formations, ateliers, ressources pédagogiques et contenus numériques lorsqu'ils seront commercialisés ;</li>
                  <li>toute prestation complémentaire expressément décrite dans un devis, bon de commande ou conditions particulières.</li>
                </ul>
                <p>
                  Le devis précise la prestation effectivement commandée, ses limites, les options, la date ou période, le lieu, les livrables, le nombre d'intervenants, les horaires, le nombre estimé d'invités et toute hypothèse déterminante du prix.
                </p>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Définitions essentielles</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>« Événement » : mariage, réception, cérémonie, demande en mariage, EVJF/EVG ou autre événement visé au devis.</li>
                    <li>« Prestation propre » : service directement conçu, vendu et exécuté par Le Oui Parfait sous sa responsabilité.</li>
                    <li>« Prestataire partenaire » : professionnel indépendant sélectionné ou coordonné par Le Oui Parfait, intervenant soit comme sous-traitant ou fournisseur d'une prestation intégrée, soit comme cocontractant direct du Client selon le modèle indiqué au devis.</li>
                    <li>« Prestation intégrée » : prestation extérieure incluse dans le devis global, vendue et facturée au Client par Le Oui Parfait, puis exécutée matériellement par un prestataire partenaire agissant comme sous-traitant ou fournisseur de Le Oui Parfait.</li>
                    <li>« Prestataire direct » : professionnel avec lequel le Client conclut un contrat distinct et qu'il règle directement, Le Oui Parfait intervenant uniquement dans le cadre de sa mission de conseil, mise en relation ou coordination.</li>
                    <li>« Animation ou service propre » : toute animation ou service expressément vendu, facturé et exécuté sous la responsabilité de Le Oui Parfait dans le périmètre décrit au devis.</li>
                    <li>« Acompte » : paiement partiel ferme qui engage les parties, sous réserve du droit légal de rétractation lorsqu'il s'applique.</li>
                    <li>« Support durable » : document ou message permettant au Client de conserver les informations qui lui sont adressées, notamment courriel, PDF, facture ou document accessible et téléchargeable.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Article 3 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ARTICLE 3 — DOCUMENTS CONTRACTUELS ET CANAUX DE VENTE</h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>Le contrat est constitué, par ordre de priorité décroissante, des documents suivants :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>le devis ou contrat signé et ses conditions particulières ;</li>
                  <li>les avenants signés et validations écrites intervenues après la commande ;</li>
                  <li>les annexes expressément visées dans le devis ;</li>
                  <li>les présentes CGV dans leur version acceptée lors de la commande ;</li>
                  <li>le descriptif commercial de l'offre, uniquement pour les éléments non contredits ou précisés par le devis.</li>
                </ul>
                <p>
                  Les communications commerciales, photographies d'inspiration, simulations, moodboards et tarifs « à partir de » ne valent pas engagement sur un résultat ou un prix définitif sans reprise dans le devis.
                </p>
                <p>
                  Les services peuvent être présentés via le site principal, l'application, les réseaux sociaux, des salons, des plateformes partenaires ou de futurs canaux, notamment « Le Oui.net », « Mariage Facile » et « Le Oui Academy ». Ils peuvent être vendus par devis signé, contrat, bon de commande ou conditions particulières lorsque Le Oui Parfait est identifié comme vendeur ou cocontractant.
                </p>
                <p>
                  À la date des présentes, le site leouiparfait.com a une fonction d'information et de prise de contact : il ne permet ni de conclure directement un contrat, ni de commander, ni de payer une prestation en ligne. La relation contractuelle est formalisée au moyen d'un devis ou contrat accepté, le plus souvent à l'issue d'un rendez-vous physique.
                </p>
              </div>
            </div>

            {/* Article 4 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ARTICLE 4 — INFORMATION PRÉCONTRACTUELLE, DEVIS ET FORMATION DU CONTRAT</h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">4.1 Information et étude du projet</h3>
                  <p>
                    Avant la conclusion du contrat, le Client communique de manière exacte les informations nécessaires : date ou période envisagée, lieux, budget cible, nombre d'invités, type de cérémonie, contraintes particulières, prestations déjà réservées, besoins d'accessibilité, horaires, règles du lieu et attentes prioritaires.
                  </p>
                  <p className="mt-2">
                    Le Oui Parfait peut refuser ou différer une proposition lorsque les informations sont insuffisantes, lorsque la date n'est plus disponible, lorsque la demande présente un risque juridique ou de sécurité, ou lorsque le budget annoncé est manifestement incompatible avec le projet souhaité.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">4.2 Devis</h3>
                  <p>
                    Le devis est valable pendant la durée qui y est indiquée. À défaut, il est valable trente jours, sous réserve de disponibilité de la date et des professionnels nécessaires. Le devis précise le modèle contractuel applicable à chaque poste et distingue notamment :
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>les honoraires ou forfaits propres de Le Oui Parfait ;</li>
                    <li>les animations, services propres et prestations intégrées vendus par Le Oui Parfait ;</li>
                    <li>les options, quantités, hypothèses et prestations estimatives ;</li>
                    <li>les prestations directes qui feront l'objet d'un contrat, d'une facture et d'un paiement séparés entre le Client et le prestataire concerné ;</li>
                    <li>les frais de déplacement, hébergement, repas, logistique, location ou personnel supplémentaire ;</li>
                    <li>l'échéancier et les conditions d'annulation particulières.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">4.3 Conclusion du contrat</h3>
                  <p>
                    La commande est conclue après : (i) signature manuscrite ou électronique du devis/contrat, (ii) acceptation des CGV, et (iii) encaissement du premier acompte, sauf stipulation contraire. La signature électronique, les validations horodatées dans l'application et les courriels d'acceptation peuvent constituer des preuves entre les parties.
                  </p>
                  <p className="mt-2">
                    Aucune date n'est définitivement bloquée avant la formation du contrat et l'encaissement du premier acompte prévu. Pour une prestation intégrée, Le Oui Parfait procède à la réservation du sous-traitant ou fournisseur après réception des sommes nécessaires et selon ses conditions de disponibilité. Pour une prestation directe, la réservation n'est acquise qu'après acceptation du contrat du prestataire et paiement de l'acompte demandé par celui-ci.
                  </p>
                  <p className="mt-2">
                    <strong>Contrats à distance</strong> — Lorsqu'un contrat est conclu en ligne, par courriel, téléphone ou hors établissement, les règles relatives à l'information précontractuelle et au droit de rétractation s'appliquent dans les conditions de l'article 13.
                  </p>
                </div>
              </div>
            </div>

            {/* Article 5 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ARTICLE 5 — NATURE DES PRESTATIONS ET OBLIGATION DE MOYENS</h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>
                  Le Oui Parfait est tenu d'une obligation de moyens : il mobilise son savoir-faire, son organisation, son réseau et les diligences raisonnablement attendues pour préparer et coordonner l'Événement conformément au devis. Sauf garantie écrite spécifique, Le Oui Parfait ne garantit ni un résultat artistique identique à une photographie d'inspiration, ni la disponibilité d'un prestataire précis avant réservation ferme, ni l'absence totale d'imprévu.
                </p>
                <p>
                  Les prestations de conseil et de sélection laissent au Client la décision finale sur le budget, les prestataires, le style, le lieu et les options. Le Client reste responsable de vérifier que ses choix correspondent à ses besoins personnels, convictions, régimes alimentaires, exigences religieuses ou culturelles et contraintes de santé, sauf mission expresse confiée à Le Oui Parfait.
                </p>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Périmètre du jour J</h3>
                  <p>
                    Les horaires de présence, le nombre de coordinateurs, les temps de montage/démontage, les repas, déplacements, heures supplémentaires, zones d'intervention et missions de sécurité sont exclusivement ceux indiqués au devis. Toute prolongation demandée ou rendue nécessaire par un changement imputable au Client peut être facturée après information et, lorsque possible, validation du Client.
                  </p>
                </div>
              </div>
            </div>

            {/* Article 6 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ARTICLE 6 — OBLIGATIONS ET COOPÉRATION DU CLIENT</h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>La bonne exécution d'un projet de mariage suppose une coopération active. Le Client s'engage notamment à :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>communiquer des informations exactes, complètes et actualisées ;</li>
                  <li>désigner un interlocuteur principal habilité à valider les décisions ;</li>
                  <li>répondre dans les délais indiqués et ne pas retarder les réservations critiques ;</li>
                  <li>lire et valider les propositions, budgets, plans et contrats transmis ;</li>
                  <li>signaler immédiatement toute réservation parallèle, modification de date, de lieu, de nombre d'invités ou de budget ;</li>
                  <li>obtenir les autorisations du lieu, de la mairie, du propriétaire ou des autorités lorsqu'elles relèvent de lui ;</li>
                  <li>respecter les échéances de paiement et fournir les justificatifs nécessaires ;</li>
                  <li>informer Le Oui Parfait des allergies, handicaps, risques particuliers, mineurs, artistes, animaux, installations électriques, feux, fumées, alcool ou autres contraintes sensibles ;</li>
                  <li>adopter un comportement respectueux envers l'équipe et les prestataires.</li>
                </ul>
                <p>
                  Un retard de validation ou une information tardive peut réduire les choix disponibles, augmenter les prix, empêcher certaines prestations ou nécessiter un avenant. Le Oui Parfait informe le Client des conséquences prévisibles et propose, lorsque cela est raisonnablement possible, une solution alternative.
                </p>
              </div>
            </div>

            {/* Article 7 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ARTICLE 7 — PRESTATIONS INTÉGRÉES, PRESTATAIRES DIRECTS ET SOUS-TRAITANTS</h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  Le Oui Parfait peut recourir à des salariés, indépendants, fournisseurs, artistes, techniciens et sous-traitants. Pour chaque poste extérieur — notamment lieu, traiteur, photographe, vidéaste, DJ, fleuriste, décorateur, transporteur ou animateur — le devis indique s'il relève du modèle intégré ou du modèle direct.
                </p>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">7.1 Modèle intégré : Le Oui Parfait est le cocontractant du Client</h3>
                  <p>
                    Les honoraires de wedding planning, la coordination, les animations et toute prestation extérieure expressément incluse dans le devis global sont vendus et facturés au Client par Le Oui Parfait. Le prestataire partenaire intervient alors comme sous-traitant ou fournisseur de Le Oui Parfait et n'est pas le cocontractant du Client pour le poste concerné.
                  </p>
                  <p className="mt-2">
                    Le Oui Parfait demeure l'interlocuteur contractuel du Client et répond de la bonne exécution de la prestation intégrée, y compris lorsqu'elle est matériellement exécutée par un sous-traitant, sous réserve des causes d'exonération légalement admises. Il sélectionne des professionnels adaptés et leur demande de justifier des autorisations, qualifications et assurances nécessaires.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">7.2 Modèle direct : contrat distinct avec le prestataire</h3>
                  <p>
                    Lorsque le devis identifie une prestation comme « directe », le professionnel concerné établit son propre devis ou contrat, ses conditions générales et sa facture. Le Client accepte ce contrat et règle directement le professionnel. Le Oui Parfait intervient alors au titre de sa mission de recherche, de recommandation, de négociation, de mise en relation ou de coordination.
                  </p>
                  <p className="mt-2">
                    Dans le modèle direct, le prestataire demeure seul responsable de ses obligations contractuelles, tarifs, délais, assurances et de la conformité de sa prestation. Le Oui Parfait reste responsable de ses propres fautes dans sa mission de sélection, d'information et de coordination et assiste raisonnablement le Client en cas de difficulté, sans se substituer au prestataire direct.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">7.3 Choix du modèle et absence d'ambiguïté</h3>
                  <p>
                    Un même projet peut combiner les deux modèles. Le devis, ses annexes ou la fiche de répartition indiquent, pour chaque poste important, l'identité du cocontractant, l'émetteur de la facture et le destinataire du paiement. À défaut d'indication suffisamment claire, aucune somme destinée à un prestataire direct ne peut être considérée comme encaissée pour son compte par Le Oui Parfait.
                  </p>
                </div>
                <div className="bg-[#f4f1f7] p-5 rounded-lg">
                  <p className="text-sm">
                    <strong>Principe contractuel</strong> — Le devis précise le modèle retenu. Intégré : Le Oui Parfait facture et encaisse, puis règle son partenaire et reste le cocontractant du Client. Direct : le Client contracte, reçoit la facture et règle directement le professionnel.
                  </p>
                </div>
              </div>
            </div>

            {/* Article 8 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ARTICLE 8 — DEVIS GLOBAL, PRESTATIONS INTÉGRÉES ET CIRCUIT DES PAIEMENTS</h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">8.1 Devis global et prix contractuel</h3>
                  <p>
                    Le Oui Parfait peut établir un devis global regroupant ses honoraires, ses prestations propres et les prestations intégrées confiées à des partenaires. Une fois accepté, ce devis fixe le prix dû à Le Oui Parfait pour les postes intégrés. Les éventuelles prestations directes restent clairement séparées et font l'objet de contrats et paiements distincts.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">8.2 Encaissement par Le Oui Parfait et règlement de ses partenaires</h3>
                  <p>
                    Les sommes facturées par Le Oui Parfait au titre du devis global constituent le paiement de ses honoraires et du prix des prestations intégrées. Elles sont encaissées pour son propre compte, donnent lieu à facture et ne constituent ni un dépôt, ni une cagnotte, ni des fonds conservés en séquestre pour le Client.
                  </p>
                  <p className="mt-2">
                    Le Oui Parfait règle ensuite ses sous-traitants et fournisseurs selon les contrats et échéanciers conclus avec eux, notamment par acomptes de réservation, appels intermédiaires et solde. Le Client n'est pas partie à ces règlements internes, mais peut recevoir un état d'avancement des réservations et échéances principales prévues pour son Événement.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">8.3 Prestations faisant l'objet d'un paiement direct</h3>
                  <p>
                    Lorsqu'un poste est identifié comme prestation directe, le Client règle directement le prestataire concerné sur la base de son devis, de sa facture et de son échéancier. Le Oui Parfait peut transmettre les échéances, centraliser les justificatifs et alerter le Client, mais ne garantit pas la réservation tant que le professionnel n'a pas confirmé l'encaissement de son acompte.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">8.4 État d'avancement et suivi budgétaire</h3>
                  <p>
                    L'application ou le dossier client peut présenter un tableau de suivi distinguant : les montants facturés et encaissés par Le Oui Parfait, les réservations des prestations intégrées, les principales échéances restant à couvrir et, le cas échéant, les contrats directs du Client. Ce tableau est informatif et ne remplace ni les factures, ni les contrats, ni les justificatifs comptables.
                  </p>
                </div>
              </div>
            </div>

            {/* Article 9 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ARTICLE 9 — PRIX, TAXES ET FRAIS COMPLÉMENTAIRES</h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>
                  Les prix destinés aux consommateurs sont indiqués en euros toutes taxes comprises (TTC). Les tarifs « à partir de » sont indicatifs et dépendent notamment de la date, du lieu, du nombre d'invités, de la durée, de la complexité, du personnel, de la logistique et des options.
                </p>
                <p>
                  Sauf inclusion expresse, ne sont pas compris : transports, stationnement, péages, hébergement, repas de l'équipe, livraisons, location de matériel, sécurité, autorisations, droits musicaux, heures supplémentaires, nettoyage, caution, branchements techniques, personnel imposé par le lieu et prestations demandées après signature.
                </p>
                <p>
                  Les prix du contrat signé ne sont pas modifiés unilatéralement. Une révision peut intervenir uniquement en cas de demande du Client, changement de périmètre, évolution d'une taxe légalement répercutable, erreur matérielle manifeste acceptée par les parties, ou clause de révision clairement prévue au devis.
                </p>
              </div>
            </div>

            {/* Article 10 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ARTICLE 10 — ACOMPTES, ÉCHÉANCIERS ET RETARDS DE PAIEMENT</h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">10.1 Acompte et échéancier</h3>
                  <p>
                    Les versements désignés comme « acomptes » ont un caractère ferme et engagent les parties, sous réserve du droit de rétractation applicable. L'échéancier figure au devis et peut être organisé en deux, trois ou quatre versements sans frais lorsqu'il s'agit d'un simple paiement fractionné directement accordé par Le Oui Parfait.
                  </p>
                  <p className="mt-2">
                    Le premier versement sert notamment à réserver la date, ouvrir le dossier, engager les premières diligences et confirmer les prestations intégrées prévues au devis. Les échéances suivantes sont appelées selon l'avancement du projet et les engagements pris auprès des sous-traitants et fournisseurs. Sauf échéancier particulier, le solde doit être encaissé au plus tard entre soixante et quatre-vingt-dix jours avant l'Événement lorsque les conditions des professionnels mobilisés l'exigent.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">10.2 Moyens de paiement</h3>
                  <p>
                    Les moyens de paiement acceptés sont indiqués au devis, à la facture ou dans l'interface de paiement. Les éventuels frais facturés par un prestataire de paiement ne peuvent être répercutés au Client que dans les limites autorisées par la loi et après information préalable.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">10.3 Retard ou défaut de paiement</h3>
                  <p>
                    En cas de retard, Le Oui Parfait adresse au Client une relance puis, si nécessaire, une mise en demeure précisant un délai raisonnable de régularisation. Après mise en demeure restée sans effet, les sommes dues peuvent produire intérêts au taux légal et Le Oui Parfait peut suspendre les prestations non urgentes, ne pas engager de nouvelles réservations ou résoudre le contrat si le manquement est suffisamment grave.
                  </p>
                  <p className="mt-2">
                    La suspension tient compte de la proximité de l'Événement et de l'obligation de limiter le préjudice. Le Oui Parfait informe le Client des conséquences prévisibles, notamment perte de disponibilité ou frais partenaires. L'indemnité forfaitaire de 40 € pour frais de recouvrement applicable entre professionnels n'est pas appliquée au Client consommateur.
                  </p>
                </div>
              </div>
            </div>

            {/* Article 11 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ARTICLE 11 — APPLICATION MOBILE, ESPACE CLIENT ET ÉCHANGES ÉLECTRONIQUES</h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>
                  Selon l'offre, Le Oui Parfait met à disposition une application ou un espace client permettant notamment de suivre le planning, les tâches, les validations, les documents, les acomptes et les échanges avec l'équipe.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>L'accès est personnel. Le Client protège ses identifiants et signale toute utilisation non autorisée.</li>
                  <li>Les validations importantes effectuées dans l'application peuvent avoir valeur contractuelle lorsqu'elles identifient clairement l'objet, le prix et l'auteur de la validation.</li>
                  <li>Une notification automatique ne remplace pas une validation lorsque le devis exige un accord exprès.</li>
                  <li>Le Oui Parfait peut effectuer des opérations de maintenance, de sécurité ou d'évolution. Il s'efforce d'en limiter l'impact.</li>
                  <li>Le fonctionnement dépend de l'accès internet, du terminal et de services tiers. Une indisponibilité temporaire n'emporte pas automatiquement inexécution du service principal si un canal alternatif raisonnable est proposé.</li>
                  <li>À la fin du contrat, l'accès peut être fermé après un délai de trente jours. Le Client est invité à télécharger ses documents avant cette date, sous réserve des durées légales de conservation.</li>
                  <li>Les échanges doivent rester courtois et en lien avec le projet. Le Oui Parfait peut suspendre un compte compromis, frauduleux ou utilisé de manière abusive, après information lorsque la sécurité le permet.</li>
                </ul>
              </div>
            </div>

            {/* Article 12 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ARTICLE 12 — VALIDATIONS, MODIFICATIONS ET PRESTATIONS SUPPLÉMENTAIRES</h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>
                  Toute modification importante — date, lieu, nombre d'invités, budget, horaires, format de cérémonie, scénographie, traiteur, accès, installation, sécurité ou prestataires — doit être signalée immédiatement. Le Oui Parfait évalue son impact sur le prix, les délais et la faisabilité.
                </p>
                <p>
                  Une modification n'est opposable qu'après validation écrite d'un avenant, devis complémentaire, bon pour accord dans l'application ou courriel suffisamment précis. Le silence ne vaut pas acceptation, sauf mécanisme de validation expressément convenu pour un élément déterminé.
                </p>
                <p>
                  Lorsque le nombre final d'invités détermine le prix, il doit être confirmé à la date indiquée au devis. Une baisse tardive ne donne pas droit à réduction lorsque des quantités minimales ou engagements fermes ont déjà été pris. Une hausse reste soumise à la capacité du lieu et des prestataires et peut entraîner un supplément.
                </p>
              </div>
            </div>

            {/* Article 13 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ARTICLE 13 — DROIT DE RÉTRACTATION</h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">13.1 Champ d'application</h3>
                  <p>
                    Le droit légal de rétractation de quatorze jours s'applique uniquement lorsque le contrat est conclu à distance, à la suite d'un démarchage téléphonique ou hors établissement, et qu'aucune exception légale ne s'applique. Il ne s'applique pas, en principe, à un contrat conclu lors d'un rendez-vous physique dans le showroom ou les locaux professionnels de Le Oui Parfait.
                  </p>
                  <p className="mt-2">
                    Lorsqu'il bénéficie de ce droit, le Client peut utiliser le formulaire figurant en annexe 2 ou adresser toute déclaration non ambiguë à contact@leouiparfait.com ou au siège social avant l'expiration du délai. Le site actuel ne permettant ni commande, ni paiement, ni conclusion de contrat au moyen d'une interface en ligne, aucune fonctionnalité de rétractation en ligne n'est requise à ce jour. Si une telle interface est ultérieurement mise en place, Le Oui Parfait adaptera le parcours de commande et les présentes CGV avant son ouverture au public.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">13.2 Commencement avant la fin du délai</h3>
                  <p>
                    À la demande expresse du Client, Le Oui Parfait peut commencer la prestation avant l'expiration des quatorze jours. Si le Client se rétracte ensuite, il doit régler le montant correspondant aux services effectivement fournis jusqu'à la notification de sa rétractation, calculé proportionnellement au prix convenu. Lorsque le service a été pleinement exécuté avant la fin du délai avec l'accord préalable exprès du Client et sa reconnaissance de la perte de son droit, la rétractation n'est plus possible.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">13.3 Prestations datées et contenus numériques</h3>
                  <p>
                    Certaines prestations de loisirs devant être fournies à une date ou période déterminée peuvent être exclues du droit de rétractation. Cette exclusion peut notamment concerner certaines animations ou expériences datées ; le devis indique clairement lorsqu'elle est invoquée. Elle n'est pas automatiquement étendue aux honoraires de wedding planning lorsque ceux-ci constituent une prestation distincte.
                  </p>
                  <p className="mt-2">
                    Pour un contenu numérique fourni sans support matériel, l'exécution avant la fin du délai suppose, lorsque la loi l'exige, l'accord préalable exprès du Client et sa reconnaissance de la perte du droit de rétractation.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">13.4 Remboursement</h3>
                  <p>
                    En cas de rétractation valable, Le Oui Parfait rembourse les sommes dues dans le délai légal, déduction faite, le cas échéant, du montant proportionnel des prestations commencées à la demande du Client. Le remboursement utilise le même moyen de paiement, sauf accord exprès pour un autre moyen sans frais.
                  </p>
                </div>
              </div>
            </div>

            {/* Article 14 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ARTICLE 14 — REPORT DE L'ÉVÉNEMENT</h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>
                  Toute demande de report doit être écrite et préciser, si possible, plusieurs nouvelles dates. Le report n'est effectif qu'après accord écrit de Le Oui Parfait et confirmation de disponibilité des sous-traitants, fournisseurs ou prestataires directs concernés.
                </p>
                <p>
                  Lorsque la nouvelle date est disponible, les sommes déjà acquises au titre du travail réalisé sont imputées sur la prestation reportée. Les coûts supplémentaires résultant du report — nouvelles réservations, hausse tarifaire, déplacement, stockage, personnel, reprise du planning, frais des sous-traitants ou prestataires directs — font l'objet d'un relevé et, si nécessaire, d'un avenant.
                </p>
                <p>
                  Si Le Oui Parfait ou un professionnel essentiel n'est pas disponible à la nouvelle date, les parties recherchent prioritairement un remplacement équivalent. Pour une prestation intégrée, Le Oui Parfait organise ce remplacement dans les conditions de l'article 16. Pour une prestation directe, le Client reste libre de contracter avec le remplaçant proposé. À défaut d'accord, la situation est traitée comme une annulation à l'initiative du Client, sauf force majeure au sens de l'article 17.
                </p>
                <p>
                  Un report ne peut être imposé indéfiniment. Sauf accord différent, la nouvelle date doit se situer dans les dix-huit mois suivant la date initiale.
                </p>
              </div>
            </div>

            {/* Article 15 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ARTICLE 15 — ANNULATION OU RÉSILIATION PAR LE CLIENT</h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">15.1 Notification</h3>
                  <p>
                    L'annulation doit être notifiée par écrit. Sa date d'effet est celle de la réception du message par Le Oui Parfait. L'annulation du mariage ou de la cérémonie civile n'entraîne pas automatiquement l'annulation du contrat : le Client doit notifier sa décision et les parties peuvent envisager un report, une transformation en autre événement ou une réduction de périmètre.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">15.2 Principe de règlement équilibré</h3>
                  <p>
                    Après expiration du délai de rétractation, les sommes dues en cas d'annulation correspondent cumulativement, dans la limite du prix total convenu :
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 mt-2">
                    <li>à la valeur des prestations de Le Oui Parfait déjà réalisées ou substantiellement engagées, y compris les diligences de préparation et de coordination relatives aux prestations intégrées ;</li>
                    <li>aux dépenses, acomptes, commandes et engagements pris par Le Oui Parfait auprès de ses sous-traitants ou fournisseurs pour le dossier, lorsqu'ils sont justifiés, directement liés à l'Événement et non récupérables ;</li>
                    <li>à une indemnité de résiliation raisonnable liée à l'immobilisation de la date, à la désorganisation et à la difficulté de remplacer le dossier, calculée selon l'annexe 1 sur la seule partie non encore exécutée des honoraires de wedding planning et de coordination, sans double facturation avec les montants visés aux points 1 et 2.</li>
                  </ol>
                  <p className="mt-2">
                    Le Oui Parfait établit un décompte indiquant les phases réalisées, les frais non récupérables et l'indemnité appliquée. Toute somme encaissée au-delà de ce décompte est remboursée. Toute somme restant due est payable dans les quinze jours de l'envoi du décompte.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">15.3 Prestations intégrées et contrats directs</h3>
                  <p>
                    Pour les prestations intégrées, Le Oui Parfait effectue les démarches d'annulation ou de report auprès de ses sous-traitants et fournisseurs. Les coûts non récupérables peuvent être intégrés au décompte dans les conditions de l'article 15.2. Toute somme récupérée ultérieurement auprès d'un partenaire est remboursée au Client dans un délai raisonnable, à hauteur de la part correspondante, déduction faite des frais objectivement justifiés. Pour les prestations directes, les conditions d'annulation et de remboursement du professionnel cocontractant s'appliquent ; Le Oui Parfait assiste le Client dans les démarches relevant de sa mission.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">15.4 Justification et régularisation des frais externes</h3>
                  <p>
                    Les achats, locations, commandes personnalisées, acomptes et frais externes engagés par Le Oui Parfait ne peuvent être conservés qu'à hauteur des montants effectivement payés ou juridiquement dus et non récupérables. Le décompte précise leur nature. Tout remboursement obtenu ultérieurement est reversé au Client dans un délai raisonnable, déduction faite des frais objectivement justifiés.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">15.5 Motifs personnels graves</h3>
                  <p>
                    En cas de décès, hospitalisation lourde, accident grave ou autre situation personnelle exceptionnelle dûment justifiée, les parties examinent de bonne foi un report ou une adaptation. Cette clause ne constitue pas une assurance annulation et ne prive aucune partie de ses droits légaux.
                  </p>
                </div>
              </div>
            </div>

            {/* Article 16 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ARTICLE 16 — DÉFAILLANCE, REMPLACEMENT OU ANNULATION CÔTÉ PROFESSIONNEL</h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">16.1 Empêchement d'un membre de l'équipe</h3>
                  <p>
                    Le Oui Parfait peut remplacer un intervenant par une personne de compétence comparable lorsque l'identité de l'intervenant n'était pas une condition essentielle du contrat. Le Client en est informé dès que possible.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">16.2 Défaillance d'un sous-traitant ou prestataire partenaire</h3>
                  <p>
                    En cas de défaillance d'un professionnel intervenant sur une prestation intégrée, Le Oui Parfait informe le Client et recherche prioritairement un remplacement de niveau comparable, sans augmentation injustifiée du prix. Si aucun remplacement raisonnablement équivalent n'est possible, Le Oui Parfait rembourse la part du prix correspondant à la prestation non exécutée, sans préjudice des autres droits impératifs du Client. Pour une prestation directe, le Client demeure libre d'accepter le remplaçant proposé et exerce ses demandes de remboursement auprès du prestataire défaillant, avec l'assistance raisonnable de Le Oui Parfait.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">16.3 Annulation imputable à Le Oui Parfait</h3>
                  <p>
                    Si Le Oui Parfait résout le contrat pour un motif qui lui est imputable et hors force majeure, il rembourse les prestations non exécutées et les frais récupérables qu'il a encaissés. Pour les prestations intégrées, il demeure responsable de la gestion des conséquences contractuelles vis-à-vis du Client. Les contrats directs conclus par le Client ne sont pas automatiquement résiliés.
                  </p>
                </div>
              </div>
            </div>

            {/* Article 17 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ARTICLE 17 — FORCE MAJEURE ET CIRCONSTANCES EXCEPTIONNELLES</h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>
                  Constitue un cas de force majeure un événement échappant au contrôle de la partie qui l'invoque, qui ne pouvait être raisonnablement prévu lors de la conclusion du contrat et dont les effets ne peuvent être évités par des mesures appropriées, empêchant l'exécution de son obligation.
                </p>
                <p>
                  La partie concernée informe l'autre sans délai, produit les éléments utiles et prend les mesures raisonnables pour limiter les conséquences. Les obligations empêchées sont suspendues pendant la durée de l'empêchement.
                </p>
                <p>
                  Les parties privilégient successivement : adaptation, remplacement, changement de format, report, puis résolution si l'empêchement rend définitivement impossible l'exécution ou si son maintien devient déraisonnable.
                </p>
                <p>
                  En cas de résolution pour force majeure, aucune indemnité de résiliation n'est appliquée. Le décompte comprend uniquement les prestations effectivement réalisées et les frais tiers non récupérables ou légalement dus. Les sommes correspondant à des prestations non exécutées et récupérables sont remboursées.
                </p>
                <p>
                  La pluie, une température habituelle pour la saison, un retard d'invité, une grève annoncée avant la signature, un manque de budget, une rupture du couple ou un changement d'avis ne constituent pas automatiquement une force majeure. Leur qualification dépend des circonstances et du droit applicable.
                </p>
              </div>
            </div>

            {/* Article 18 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ARTICLE 18 — CONDITIONS PARTICULIÈRES AUX ANIMATIONS ET EXPÉRIENCES</h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>
                  Les animations et expériences sont soumises aux caractéristiques du devis : durée, plage horaire, capacité, lieu, accès, installation, besoins électriques, surface, météo, sonorisation, personnel, consommables, caution et démontage.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Le Client obtient l'accord écrit du lieu pour l'installation et l'usage envisagés.</li>
                  <li>Un accès insuffisant, une alimentation électrique non conforme, l'absence d'autorisation ou une zone dangereuse peut entraîner une adaptation ou une suspension pour sécurité.</li>
                  <li>Les temps d'attente causés par le lieu, le Client ou les invités ne prolongent pas automatiquement la prestation.</li>
                  <li>Le matériel reste la propriété de Le Oui Parfait ou du partenaire. Toute dégradation imputable au Client ou à ses invités peut être facturée sur justificatif, après prise en compte de l'usure normale.</li>
                  <li>Les livrables photo/vidéo, impressions, fichiers, toppings, consommables et quantités sont limités à ce qui est indiqué au devis.</li>
                  <li>Une animation extérieure peut nécessiter une solution de repli. Le Client valide le plan B et les éventuels coûts avant l'Événement.</li>
                  <li>Lorsque l'animation constitue une activité de loisirs fournie à une date déterminée, elle peut être exclue du droit de rétractation conformément à l'article 13.3, sous réserve d'une information claire avant la commande.</li>
                </ul>
              </div>
            </div>

            {/* Article 19 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ARTICLE 19 — TRANSPORTS, NAVETTES ET CHAUFFEURS</h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>
                  Lorsqu'un transport, une navette ou un chauffeur est proposé dans le cadre de l'Événement, le devis ou le contrat du transporteur précise son identité, le véhicule, la capacité, les trajets, les horaires, les temps d'attente, les bagages, les sièges enfants, l'accessibilité et les conditions de retour. Sauf mention expresse d'une prestation propre autorisée et assurée, le Client contracte et règle directement le professionnel du transport.
                </p>
                <p>
                  Le transport est réalisé par un professionnel disposant des autorisations et assurances requises. Le Client et les passagers respectent les consignes de sécurité, le nombre de places, le port de la ceinture et les règles du véhicule. Le chauffeur peut refuser le transport d'une personne dangereuse, violente ou dont l'état compromet la sécurité.
                </p>
                <p>
                  Les temps de trajet sont estimatifs. Le Oui Parfait et le transporteur ne garantissent pas l'absence d'aléas de circulation, mais organisent la prestation avec une marge raisonnable au regard des informations disponibles.
                </p>
              </div>
            </div>

            {/* Article 20 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ARTICLE 20 — ALCOOL, CHICHA, SÉCURITÉ ET MINEURS</h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>
                  Les bars à thème, prestations alcoolisées et espaces chicha sont proposés uniquement lorsque la loi, le règlement du lieu, les assurances et les autorisations applicables le permettent.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Aucune boisson alcoolisée ni produit interdit aux mineurs n'est servi à une personne mineure.</li>
                  <li>Le service peut être refusé à une personne manifestement ivre, agressive ou présentant un risque pour elle-même ou autrui.</li>
                  <li>Le Client informe les invités des restrictions et prévoit des solutions de retour sécurisé.</li>
                  <li>Les zones de fumée ou de chicha doivent respecter les règles du lieu, de sécurité incendie, d'aération et de protection des non-fumeurs.</li>
                  <li>Le Oui Parfait peut remplacer ou annuler sans faute une formule devenue illégale ou interdite par le lieu, avec proposition d'une alternative ou remboursement de la partie non exécutée.</li>
                  <li>Le Client demeure responsable du comportement de ses invités. Cette responsabilité ne réduit pas les obligations de prudence et de conformité de Le Oui Parfait ou de ses partenaires.</li>
                </ul>
              </div>
            </div>

            {/* Article 21 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ARTICLE 21 — VOYAGE DE NOCES ET PRESTATIONS TOURISTIQUES</h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>
                  Sauf mention d'une immatriculation tourisme et d'un contrat conforme au Code du tourisme, l'avantage ou prestation intitulé « organisation du voyage de noces » est limité à un service de conseil, d'inspiration, d'aide à la définition du budget et de mise en relation avec une agence de voyages ou des prestataires auprès desquels le Client réserve et paie directement.
                </p>
                <p>
                  Le Oui Parfait ne vend pas, ne facture pas à prix global et n'encaisse pas pour son propre compte un forfait combinant transport, hébergement, location de véhicule ou autres services de voyage, sauf si le cadre réglementaire requis est effectivement en place et indiqué dans des conditions particulières.
                </p>
                <p>
                  Les conditions de modification, annulation, assurance, passeport, visa, santé et responsabilité applicables au voyage sont celles de l'agence ou du prestataire touristique cocontractant du Client.
                </p>
              </div>
            </div>

            {/* Article 22 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ARTICLE 22 — PROPRIÉTÉ INTELLECTUELLE, LIVRABLES ET DROIT À L'IMAGE</h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">22.1 Créations et documents</h3>
                  <p>
                    Les méthodes, modèles, plannings, concepts, textes, moodboards, scénographies, plans, identités visuelles, contenus pédagogiques, logiciels et éléments créatifs préexistants ou développés par Le Oui Parfait restent protégés par les droits de propriété intellectuelle.
                  </p>
                  <p className="mt-2">
                    Après paiement intégral, le Client bénéficie d'un droit personnel d'utilisation des livrables remis pour son Événement et sa vie privée. Toute exploitation commerciale, revente, diffusion publique substantielle, remise à un concurrent ou reproduction pour un autre événement requiert une autorisation écrite.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">22.2 Éléments du Client et des partenaires</h3>
                  <p>
                    Le Client garantit qu'il dispose des droits nécessaires sur les textes, musiques, photographies, logos et éléments qu'il demande d'utiliser. Les droits sur les photographies, vidéos, musiques et créations des partenaires restent soumis à leurs contrats respectifs.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">22.3 Droit à l'image et communication</h3>
                  <p>
                    Le Oui Parfait n'utilise l'image identifiable du Client ou de ses invités à des fins commerciales qu'avec une autorisation appropriée. L'autorisation doit préciser les supports, la durée, le territoire et la possibilité de retrait pour l'avenir. Le refus d'autorisation n'affecte pas l'exécution de la prestation.
                  </p>
                  <p className="mt-2">
                    Le Client informe ses invités de la présence éventuelle de photographes, vidéastes ou dispositifs de captation et facilite le respect des demandes d'opposition ou zones sans image, dans la mesure raisonnablement possible.
                  </p>
                </div>
              </div>
            </div>

            {/* Article 23 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ARTICLE 23 — DONNÉES PERSONNELLES ET CONFIDENTIALITÉ</h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>
                  Le Oui Parfait traite les données nécessaires à la gestion des demandes, devis, contrats, paiements, prestataires, application, communication, sécurité et obligations légales. Les finalités, bases juridiques, destinataires, durées de conservation, transferts éventuels et droits des personnes sont détaillés dans la politique de confidentialité accessible sur le site et dans l'application.
                </p>
                <p>
                  Le Client peut exercer ses droits d'accès, rectification, effacement, limitation, opposition et portabilité, lorsqu'ils sont applicables, à l'adresse contact@leouiparfait.com ou par courrier au siège. Il peut également introduire une réclamation auprès de la CNIL.
                </p>
                <p>
                  Le Client s'engage à ne transmettre des données sensibles concernant ses invités — santé, allergies, religion, handicap ou régime alimentaire — que lorsqu'elles sont nécessaires, exactes et communiquées de manière sécurisée. Il informe les personnes concernées lorsque cela lui incombe.
                </p>
                <p>
                  Chaque partie conserve confidentielles les informations non publiques reçues dans le cadre du projet. Cette obligation ne s'applique pas aux informations déjà publiques, légitimement connues, obtenues d'un tiers autorisé ou dont la communication est imposée par la loi.
                </p>
                <p>
                  Pour plus d'informations, consultez notre <a href="/confidentialite" className="text-[#88b7b5] hover:underline">Politique de Confidentialité</a>.
                </p>
              </div>
            </div>

            {/* Article 24 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ARTICLE 24 — RESPONSABILITÉ ET ASSURANCES</h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">24.1 Responsabilité</h3>
                  <p>
                    Chaque partie répond des conséquences directes de ses fautes, manquements et informations inexactes. Le Oui Parfait ne saurait être responsable d'un dommage résultant exclusivement du Client, d'un invité, d'un prestataire direct, d'un tiers étranger à l'exécution ou d'un cas de force majeure, sous réserve des règles impératives applicables.
                  </p>
                  <p className="mt-2">
                    Le Oui Parfait répond des prestations propres et intégrées qu'il vend, y compris lorsqu'il en confie matériellement tout ou partie à un sous-traitant. Pour les contrats directs, la responsabilité contractuelle du prestataire demeure distincte ; Le Oui Parfait reste néanmoins responsable de ses propres fautes dans la sélection, l'information et la coordination.
                  </p>
                  <p className="mt-2">
                    Aucune clause ne limite la responsabilité en cas de dommage corporel, faute lourde ou dolosive, atteinte aux droits essentiels du consommateur ou dans tout autre cas où la loi interdit une limitation.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">24.2 Biens personnels</h3>
                  <p>
                    Sauf mission de garde expressément acceptée, Le Oui Parfait n'assure pas la surveillance des cadeaux, enveloppes, bijoux, effets personnels, véhicules, matériels ou objets de valeur. Le Client prévoit une personne de confiance, un coffre ou un dispositif adapté.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">24.3 Assurance</h3>
                  <p>
                    Le Oui Parfait déclare souscrire et maintenir une assurance de responsabilité civile professionnelle adaptée aux activités effectivement commercialisées et déclarées, notamment aux prestations propres, intégrées et sous-traitées lorsqu'elles sont proposées au Client.
                  </p>
                  <InfoTable
                    rows={[
                      ['Assureur', 'AXA France IARD SA'],
                      ['Contrat / police n°', '11489848204'],
                      ['Étendue géographique principale', "France, sous réserve des extensions et exclusions prévues au contrat d'assurance"],
                    ]}
                  />
                  <p className="mt-2">
                    Le Client est invité à vérifier ses propres assurances responsabilité civile, habitation, annulation, dommages au lieu et objets de valeur. Le Oui Parfait vérifie que les sous-traitants et prestataires partenaires disposent des assurances et autorisations adaptées à leur intervention. Une assurance annulation peut être recommandée, mais n'est pas incluse sauf mention expresse.
                  </p>
                </div>
              </div>
            </div>

            {/* Article 25 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ARTICLE 25 — RÉCLAMATIONS ET MÉDIATION DE LA CONSOMMATION</h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">25.1 Réclamation préalable</h3>
                  <p>
                    Toute réclamation est adressée par écrit à contact@leouiparfait.com ou au siège social, avec le numéro de dossier, les faits, la demande et les pièces utiles. Le Oui Parfait accuse réception et s'efforce d'apporter une réponse motivée dans un délai raisonnable, en principe sous trente jours.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">25.2 Médiation</h3>
                  <p>
                    Après une réclamation écrite préalable restée sans solution satisfaisante, le Client consommateur peut recourir gratuitement au médiateur de la consommation dont relève Le Oui Parfait, dans les conditions prévues par le Code de la consommation.
                  </p>
                  <p className="mt-2 text-sm bg-[#f4f1f7] p-4 rounded">
                    <strong>Médiateur :</strong> Société Médiation Professionnelle<br />
                    <strong>Adresse postale :</strong> rue Marc Sangnier, 33130 Bègles, France<br />
                    <strong>Site internet et saisine en ligne :</strong>{' '}
                    <a href="https://www.mediateur-consommation-smp.fr" className="text-[#88b7b5] hover:underline">www.mediateur-consommation-smp.fr</a>
                  </p>
                  <p className="mt-2">
                    Le recours à la médiation est facultatif et ne prive pas les parties de leur droit de saisir une juridiction compétente.
                  </p>
                </div>
              </div>
            </div>

            {/* Article 26 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ARTICLE 26 — DROIT APPLICABLE ET JURIDICTIONS COMPÉTENTES</h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>
                  Les présentes CGV et le contrat sont soumis au droit français, sous réserve des règles impératives plus protectrices éventuellement applicables au Client résidant dans un autre État.
                </p>
                <p>
                  À défaut d'accord amiable ou de médiation, le Client consommateur peut saisir la juridiction territorialement compétente conformément aux règles légales. Aucune attribution exclusive aux tribunaux de Paris n'est imposée au consommateur.
                </p>
              </div>
            </div>

            {/* Article 27 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ARTICLE 27 — FORMATIONS ET CONTENUS PÉDAGOGIQUES</h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>
                  Les présentes dispositions s'appliquent lorsque Le Oui Parfait, Le Oui Academy ou un canal identifié commercialise une formation, un atelier, un accompagnement pédagogique ou un contenu numérique et que Le Oui Parfait est le cocontractant.
                </p>
                <p>
                  Le programme, les objectifs, prérequis, dates, durée, format, accès, prix, intervenant et modalités d'évaluation figurent dans l'offre ou le contrat de formation.
                </p>
                <p>
                  Une formation ne garantit pas un emploi, un niveau de revenu, une certification, un financement ou un résultat commercial, sauf engagement écrit spécifique.
                </p>
                <p>
                  Pour un consommateur, le droit de rétractation s'applique aux contrats à distance dans les conditions de l'article 13. Un commencement anticipé nécessite une demande expresse.
                </p>
                <p>
                  En cas d'abandon après le début, les prestations déjà réalisées et les frais personnalisés non récupérables restent dus ; le solde non exécuté est réglé selon les conditions particulières et les règles impératives applicables.
                </p>
                <p>
                  Pour une entreprise ou un financement de formation professionnelle, une convention ou un contrat spécifique précise les règles du Code du travail, du financeur et, le cas échéant, de la certification qualité.
                </p>
                <p>
                  Les supports sont réservés à l'usage personnel du participant et ne peuvent être diffusés, revendus, enregistrés ou reproduits sans autorisation.
                </p>
              </div>
            </div>

            {/* Article 28 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ARTICLE 28 — MARQUES, PLATEFORMES ET FUTURS CANAUX</h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>
                  Le Oui Parfait peut développer des marques, plateformes, applications, espaces professionnels, réseaux de partenaires ou services complémentaires. L'identité du vendeur et la nature de son rôle doivent être clairement indiquées avant chaque commande.
                </p>
                <p>
                  Lorsqu'une plateforme met seulement en relation le Client avec un professionnel tiers, des conditions spécifiques précisent l'identité du cocontractant, le circuit des paiements, la responsabilité, les avis, le classement et les modalités de réclamation. Lorsqu'une prestation est au contraire intégrée et vendue par Le Oui Parfait, celui-ci demeure le cocontractant du Client dans les conditions du devis.
                </p>
                <p>
                  Lorsqu'une nouvelle activité est réglementée — voyage, transport, paiement, formation financée, alcool, billetterie ou autre — sa commercialisation est subordonnée à la mise en place des autorisations, garanties, assurances et conditions particulières requises.
                </p>
              </div>
            </div>

            {/* Article 29 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ARTICLE 29 — DISPOSITIONS GÉNÉRALES</h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">29.1 Modification des CGV</h3>
                  <p>
                    Le Oui Parfait peut modifier les CGV pour l'avenir. La version applicable à un contrat est celle acceptée lors de sa conclusion, sauf modification imposée par la loi ou avenant accepté par les parties.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">29.2 Nullité partielle</h3>
                  <p>
                    Si une clause est déclarée nulle ou inapplicable, les autres dispositions demeurent en vigueur. Les parties la remplacent, lorsque cela est possible, par une disposition licite poursuivant un objectif économique proche sans créer de déséquilibre significatif.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">29.3 Non-renonciation</h3>
                  <p>
                    Le fait de ne pas se prévaloir immédiatement d'un droit ne vaut pas renonciation à ce droit.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">29.4 Titres et langue</h3>
                  <p>
                    Les titres facilitent la lecture et n'affectent pas l'interprétation. La version française prévaut, sauf règle impérative contraire.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">29.5 Acceptation</h3>
                  <p>
                    Le Client reconnaît avoir reçu, lu et accepté les présentes CGV avant de s'engager. Il reçoit une copie sur support durable avec le devis ou la confirmation du contrat.
                  </p>
                </div>
              </div>
            </div>

            {/* Annexe 1 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ANNEXE 1 — PHASAGE ET CALCUL EN CAS D'ANNULATION</h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  Cette annexe constitue le mécanisme par défaut lorsque le devis ne prévoit pas un phasage plus précis. Elle vise à rémunérer le travail réellement réalisé et à compenser raisonnablement la perte de la date, sans permettre une double facturation.
                </p>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">A. Phasage indicatif des honoraires propres de wedding planning</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#f4f1f7]">
                          <th className="border border-gray-200 px-4 py-3 text-left font-serif text-gray-800">Phase</th>
                          <th className="border border-gray-200 px-4 py-3 text-left font-serif text-gray-800">Contenu principal</th>
                          <th className="border border-gray-200 px-4 py-3 text-left font-serif text-gray-800">Part indicative</th>
                          <th className="border border-gray-200 px-4 py-3 text-left font-serif text-gray-800">Moment d'acquisition</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 px-4 py-3">1. Réservation &amp; cadrage</td>
                          <td className="border border-gray-200 px-4 py-3">Blocage de la date, ouverture du dossier et de l'application, audit initial, budget et rétroplanning de départ</td>
                          <td className="border border-gray-200 px-4 py-3">25 %</td>
                          <td className="border border-gray-200 px-4 py-3">À la réalisation substantielle de la phase</td>
                        </tr>
                        <tr className="bg-[#f4f1f7]">
                          <td className="border border-gray-200 px-4 py-3">2. Recherche &amp; propositions</td>
                          <td className="border border-gray-200 px-4 py-3">Sourcing, demandes de disponibilité, comparatifs, rendez-vous, visites et recommandations</td>
                          <td className="border border-gray-200 px-4 py-3">25 %</td>
                          <td className="border border-gray-200 px-4 py-3">À la réalisation substantielle de la phase</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 px-4 py-3">3. Conception &amp; contractualisation</td>
                          <td className="border border-gray-200 px-4 py-3">Sélection, suivi des contrats, scénographie, planning logistique et coordination intermédiaire</td>
                          <td className="border border-gray-200 px-4 py-3">25 %</td>
                          <td className="border border-gray-200 px-4 py-3">À la réalisation substantielle de la phase</td>
                        </tr>
                        <tr className="bg-[#f4f1f7]">
                          <td className="border border-gray-200 px-4 py-3">4. Finalisation &amp; jour J</td>
                          <td className="border border-gray-200 px-4 py-3">Planning final, confirmations, visite technique, brief, installation et coordination de l'Événement</td>
                          <td className="border border-gray-200 px-4 py-3">25 %</td>
                          <td className="border border-gray-200 px-4 py-3">Au fur et à mesure puis à l'exécution</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-3">
                    Si une phase est seulement partiellement réalisée, sa valeur est calculée au prorata des diligences démontrables : documents produits, rendez-vous, recherches, validations, temps consacré et engagements pris. Le devis peut retenir une répartition différente selon l'offre, notamment pour la coordination du jour J ou une demande en mariage.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">B. Indemnité appliquée à la part non exécutée des seuls honoraires propres</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#f4f1f7]">
                          <th className="border border-gray-200 px-4 py-3 text-left font-serif text-gray-800">Date de réception de l'annulation</th>
                          <th className="border border-gray-200 px-4 py-3 text-left font-serif text-gray-800">Pourcentage de la part non exécutée des honoraires propres</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 px-4 py-3">Plus de 180 jours avant l'Événement</td>
                          <td className="border border-gray-200 px-4 py-3">10 %</td>
                        </tr>
                        <tr className="bg-[#f4f1f7]">
                          <td className="border border-gray-200 px-4 py-3">De 91 à 180 jours avant</td>
                          <td className="border border-gray-200 px-4 py-3">25 %</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 px-4 py-3">De 31 à 90 jours avant</td>
                          <td className="border border-gray-200 px-4 py-3">50 %</td>
                        </tr>
                        <tr className="bg-[#f4f1f7]">
                          <td className="border border-gray-200 px-4 py-3">30 jours ou moins avant</td>
                          <td className="border border-gray-200 px-4 py-3">75 %</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-3">
                    Formule : montant dû = prestations réalisées ou substantiellement engagées + dépenses et engagements externes non récupérables justifiés + pourcentage ci-dessus appliqué à la part non exécutée des honoraires de wedding planning et de coordination. Le total ne peut dépasser le prix contractuel restant dû, hors prestations supplémentaires déjà acceptées.
                  </p>
                  <p className="mt-2">
                    <strong>Exemple</strong> — Honoraires de wedding planning : 4 000 €. Phases réalisées : 2 000 €. Annulation à J-120 : 25 % des 2 000 € non exécutés, soit 500 €. S'ajoutent uniquement les engagements externes justifiés et non récupérables liés aux prestations intégrées. Les contrats directs suivent les conditions des prestataires concernés.
                  </p>
                </div>
              </div>
            </div>

            {/* Annexe 2 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ANNEXE 2 — FORMULAIRE TYPE DE RÉTRACTATION</h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>
                  À compléter et à envoyer uniquement si vous souhaitez vous rétracter d'un contrat pour lequel le droit de rétractation est applicable.
                </p>
                <p>
                  À l'attention de LE OUI PARFAIT, 25 rue de Ponthieu, 75008 Paris — contact@leouiparfait.com
                </p>
                <p>
                  Je vous notifie par la présente ma rétractation du contrat portant sur la prestation suivante :
                </p>
                <div className="bg-[#f4f1f7] p-5 rounded-lg space-y-2 text-sm">
                  <p>Référence du devis / dossier : ................................................................................................</p>
                  <p>Prestation commandée : ................................................................................................</p>
                  <p>Date de conclusion du contrat : ................................................................................................</p>
                  <p>Nom du ou des clients : ................................................................................................</p>
                  <p>Adresse : ................................................................................................</p>
                  <p>Courriel : ................................................................................................</p>
                  <p>Date de la demande : ................................................................................................</p>
                  <p>Signature (uniquement en cas d'envoi papier) : ................................................................................................</p>
                </div>
                <p>
                  Le Client peut également adresser toute déclaration non ambiguë exprimant sa volonté de se rétracter. L'usage de ce formulaire n'est pas obligatoire.
                </p>
              </div>
            </div>

            {/* Annexe 3 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ANNEXE 3 — DEMANDE DE COMMENCEMENT ANTICIPÉ</h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>
                  À utiliser lorsque le Client souhaite que Le Oui Parfait commence une prestation soumise au droit de rétractation avant l'expiration du délai de quatorze jours.
                </p>
                <p>
                  ☐  Je demande expressément que l'exécution de la prestation commence avant l'expiration du délai légal de rétractation.
                </p>
                <p>
                  Je reconnais que, si j'exerce ensuite mon droit de rétractation, je devrai payer le montant proportionnel aux services effectivement fournis jusqu'à la date de ma demande.
                </p>
                <p>
                  Lorsque la prestation est pleinement exécutée avant la fin du délai avec mon accord préalable exprès, je reconnais perdre mon droit de rétractation dans les conditions prévues par la loi.
                </p>
                <div className="bg-[#f4f1f7] p-5 rounded-lg space-y-2 text-sm">
                  <p>Référence du devis : ................................................................................................</p>
                  <p>Nom du Client : ................................................................................................</p>
                  <p>Date : ................................................................................................</p>
                  <p>Signature / validation électronique : ................................................................................................</p>
                </div>
              </div>
            </div>

            {/* Annexe 4 */}
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">ANNEXE 4 — FICHE DE RÉPARTITION DES PRESTATIONS ET PAIEMENTS</h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>
                  Cette fiche peut être intégrée au devis ou remplacée par un tableau équivalent. Pour chaque poste, un seul modèle doit être retenu afin d'identifier clairement le cocontractant, l'émetteur de la facture et le destinataire du paiement.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#f4f1f7]">
                        <th className="border border-gray-200 px-4 py-3 text-left font-serif text-gray-800">Prestataire / catégorie</th>
                        <th className="border border-gray-200 px-4 py-3 text-left font-serif text-gray-800">Modèle retenu</th>
                        <th className="border border-gray-200 px-4 py-3 text-left font-serif text-gray-800">Cocontractant du Client</th>
                        <th className="border border-gray-200 px-4 py-3 text-left font-serif text-gray-800">Facture émise par</th>
                        <th className="border border-gray-200 px-4 py-3 text-left font-serif text-gray-800">Paiement reçu par</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3">Honoraires de wedding planning</td>
                        <td className="border border-gray-200 px-4 py-3">Intégré</td>
                        <td className="border border-gray-200 px-4 py-3">Le Oui Parfait</td>
                        <td className="border border-gray-200 px-4 py-3">Le Oui Parfait</td>
                        <td className="border border-gray-200 px-4 py-3">Le Oui Parfait</td>
                      </tr>
                      <tr className="bg-[#f4f1f7]">
                        <td className="border border-gray-200 px-4 py-3">Animation vendue par Le Oui Parfait</td>
                        <td className="border border-gray-200 px-4 py-3">Intégré</td>
                        <td className="border border-gray-200 px-4 py-3">Le Oui Parfait</td>
                        <td className="border border-gray-200 px-4 py-3">Le Oui Parfait</td>
                        <td className="border border-gray-200 px-4 py-3">Le Oui Parfait</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3">Lieu de réception</td>
                        <td className="border border-gray-200 px-4 py-3">☐ Intégré  ☐ Direct</td>
                        <td className="border border-gray-200 px-4 py-3">Selon devis</td>
                        <td className="border border-gray-200 px-4 py-3">Selon devis</td>
                        <td className="border border-gray-200 px-4 py-3">Selon devis</td>
                      </tr>
                      <tr className="bg-[#f4f1f7]">
                        <td className="border border-gray-200 px-4 py-3">Traiteur</td>
                        <td className="border border-gray-200 px-4 py-3">☐ Intégré  ☐ Direct</td>
                        <td className="border border-gray-200 px-4 py-3">Selon devis</td>
                        <td className="border border-gray-200 px-4 py-3">Selon devis</td>
                        <td className="border border-gray-200 px-4 py-3">Selon devis</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3">Photographe / vidéaste</td>
                        <td className="border border-gray-200 px-4 py-3">☐ Intégré  ☐ Direct</td>
                        <td className="border border-gray-200 px-4 py-3">Selon devis</td>
                        <td className="border border-gray-200 px-4 py-3">Selon devis</td>
                        <td className="border border-gray-200 px-4 py-3">Selon devis</td>
                      </tr>
                      <tr className="bg-[#f4f1f7]">
                        <td className="border border-gray-200 px-4 py-3">DJ / musique</td>
                        <td className="border border-gray-200 px-4 py-3">☐ Intégré  ☐ Direct</td>
                        <td className="border border-gray-200 px-4 py-3">Selon devis</td>
                        <td className="border border-gray-200 px-4 py-3">Selon devis</td>
                        <td className="border border-gray-200 px-4 py-3">Selon devis</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3">Décoration / fleuriste</td>
                        <td className="border border-gray-200 px-4 py-3">☐ Intégré  ☐ Direct</td>
                        <td className="border border-gray-200 px-4 py-3">Selon devis</td>
                        <td className="border border-gray-200 px-4 py-3">Selon devis</td>
                        <td className="border border-gray-200 px-4 py-3">Selon devis</td>
                      </tr>
                      <tr className="bg-[#f4f1f7]">
                        <td className="border border-gray-200 px-4 py-3">Transport / navette</td>
                        <td className="border border-gray-200 px-4 py-3">☐ Intégré  ☐ Direct</td>
                        <td className="border border-gray-200 px-4 py-3">Selon devis</td>
                        <td className="border border-gray-200 px-4 py-3">Selon devis</td>
                        <td className="border border-gray-200 px-4 py-3">Selon devis</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3">Autre : __________</td>
                        <td className="border border-gray-200 px-4 py-3">☐ Intégré  ☐ Direct</td>
                        <td className="border border-gray-200 px-4 py-3">Selon devis</td>
                        <td className="border border-gray-200 px-4 py-3">Selon devis</td>
                        <td className="border border-gray-200 px-4 py-3">Selon devis</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  Modèle intégré : Le Oui Parfait vend et facture la prestation au Client puis règle son sous-traitant ou fournisseur. Modèle direct : le professionnel conclut un contrat distinct, facture et reçoit directement le paiement du Client.
                </p>
              </div>
            </div>

            {/* Downloads */}
            <div className="pt-4">
              <h2 className="text-2xl font-serif text-gray-800 mb-4">Télécharger les documents</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href={CGV_PDF_HREF}
                  download
                  className="flex items-center gap-3 bg-[#f4f1f7] hover:bg-[#88b7b5]/10 border border-gray-200 rounded-lg p-5 transition-colors"
                >
                  <FileText className="w-8 h-8 text-[#88b7b5] flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Conditions Générales de Vente (PDF)</p>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                      <Download className="w-4 h-4" /> Télécharger le document complet
                    </p>
                  </div>
                </a>
                <a
                  href={RETRACTATION_PDF_HREF}
                  download
                  className="flex items-center gap-3 bg-[#f4f1f7] hover:bg-[#88b7b5]/10 border border-gray-200 rounded-lg p-5 transition-colors"
                >
                  <FileText className="w-8 h-8 text-[#88b7b5] flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Annexe 2 — Formulaire type de rétractation (PDF)</p>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                      <Download className="w-4 h-4" /> Télécharger le formulaire
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Last Update */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 italic">
                Version applicable à compter du 5 août 2026
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#f4f1f7] py-16 px-6">
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
