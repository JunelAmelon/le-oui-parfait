import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleLandingPage, ArticleSection } from '@/components/ArticleLanding';

const url = 'https://leouiparfait.com/wedding-planner-essonne-91-tarifs';

export const metadata: Metadata = {
  title: 'Prix Wedding Planner Essonne (91) : tarifs 2026',
  description:
    'Combien coûte une Wedding Planner en Essonne ? Découvrez les tarifs selon la formule : coordination Jour J, organisation partielle ou complète.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Prix Wedding Planner Essonne (91) : tarifs 2026',
    description:
      'Combien coûte une Wedding Planner en Essonne ? Tarifs selon la formule : coordination Jour J, organisation partielle ou complète.',
    url,
    type: 'article',
  },
};

const faq = [
  {
    q: 'Quel est le tarif minimum d’une Wedding Planner en Essonne ?',
    a: 'Il dépend de la prestation recherchée. Une simple coordination du Jour J coûte généralement moins cher qu’une organisation complète s’étalant sur plusieurs mois. Chez Le Oui Parfait, la formule Harmonie dédiée à la coordination Jour J débute à 1 190 €.',
  },
  {
    q: 'Combien coûte une organisation complète avec une Wedding Planner ?',
    a: 'Les prix dépendent fortement du mariage et du niveau de prestation. Chez Le Oui Parfait, la formule Signature dédiée à l’organisation complète débute à 3 500 €.',
  },
  {
    q: 'Une Wedding Planner peut-elle intervenir uniquement pour le Jour J ?',
    a: 'Oui. C’est précisément l’objectif d’une prestation de coordination Jour J. Le mariage a déjà été organisé par le couple et l’équipe reprend le dossier avant l’événement afin d’en assurer la coordination.',
  },
  {
    q: 'Existe-t-il une formule si nous avons déjà commencé notre mariage ?',
    a: 'Oui. Une organisation partielle permet à la Wedding Planner de reprendre le projet en cours sans recommencer ce qui a déjà été réalisé.',
  },
  {
    q: 'Le devis dépend-il du nombre d’invités ?',
    a: 'Le nombre d’invités peut avoir une influence, mais ce n’est pas le seul critère. Le nombre de prestataires, la logistique, le lieu, le niveau de délégation et la complexité du mariage comptent également.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function WeddingPlannerEssonneTarifsPage() {
  return (
    <ArticleLandingPage
      eyebrow="Tarifs Essonne (91)"
      title="Combien coûte une Wedding Planner en Essonne (91) ?"
      intro="Coordination Jour J, organisation partielle ou complète : le prix d’une wedding planner dépend du niveau d’accompagnement. Voici les fourchettes et nos tarifs pour y voir clair."
      image="/couple.jpg"
    >
      <ArticleSection title="Combien coûte une Wedding Planner en Essonne (91) ?" highlight>
        <p>
          Lorsque l’on commence à organiser son mariage, une question revient rapidement : quel est le prix d’une Wedding Planner
          en Essonne ? Il n’existe pas un tarif unique.
        </p>
        <p>
          Le coût dépend principalement du niveau d’accompagnement choisi, du nombre de mois de préparation, du nombre d’invités,
          du nombre de prestataires à gérer et de la complexité globale de votre mariage. Une coordination du Jour J, une
          organisation partielle et une organisation complète ne représentent évidemment pas la même charge de travail.
        </p>
        <p>
          Dans ce guide, nous vous expliquons les principales différences de prix afin de vous aider à déterminer le budget à
          prévoir pour l’accompagnement d’une Wedding Planner dans l’Essonne (91).
        </p>
        <p>
          <Link href="/ile-de-france/91-essonne" className="text-[#88b7b5] font-medium underline underline-offset-4 hover:text-[#6fa3a1] transition">
            Vous recherchez directement une Wedding Planner en Essonne ? Découvrez Le Oui Parfait →
          </Link>
        </p>
      </ArticleSection>

      <ArticleSection title="Quel est le prix moyen d’une Wedding Planner en Essonne ?">
        <p>Les tarifs peuvent varier fortement selon la prestation choisie. À titre indicatif, voici les fourchettes actuellement utilisées comme repères :</p>
        <div className="overflow-x-auto">
          <table className="w-full text-[14px] border-collapse">
            <thead>
              <tr className="border-b-2 border-[#88b7b5]/40 text-left">
                <th className="py-3 pr-4 font-semibold text-[#4B4456]">Type d’accompagnement</th>
                <th className="py-3 font-semibold text-[#4B4456]">Fourchette indicative</th>
              </tr>
            </thead>
            <tbody className="text-[#5A5A5A]">
              <tr className="border-b border-[#e8e0dc]">
                <td className="py-3 pr-4">Coordination du Jour J</td>
                <td className="py-3 font-medium text-[#4B4456]">800 € à 2 000 €</td>
              </tr>
              <tr className="border-b border-[#e8e0dc]">
                <td className="py-3 pr-4">Organisation partielle</td>
                <td className="py-3 font-medium text-[#4B4456]">1 500 € à 3 500 €</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">Organisation complète</td>
                <td className="py-3 font-medium text-[#4B4456]">3 000 € à 6 500 € et plus</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Ces montants ne constituent pas des tarifs universels. Chaque agence construit ses prestations différemment et deux
          mariages réunissant le même nombre d’invités peuvent demander des niveaux d’organisation très différents.
        </p>
        <p>
          Chez Le Oui Parfait, nous proposons plusieurs niveaux d’accompagnement permettant d’adapter la prestation à l’état
          d’avancement de votre mariage.
        </p>
      </ArticleSection>

      <ArticleSection title="Quel budget prévoir pour une coordination du Jour J ?">
        <p>
          La coordination du Jour J s’adresse principalement aux futurs mariés qui ont déjà organisé eux-mêmes leur mariage.
          Le lieu est réservé, les prestataires sont sélectionnés, les principales décisions ont été prises.
        </p>
        <p>
          L’objectif est alors de transmettre l’organisation à une équipe professionnelle afin de ne pas avoir à gérer les
          prestataires, les horaires et les différents ajustements pendant votre mariage.
        </p>
        <p>
          Chez Le Oui Parfait, notre formule <strong>Harmonie – Coordination Jour J</strong> est proposée{' '}
          <strong>à partir de 1 190 €</strong>. L’équipe reprend votre dossier avant l’événement, rassemble les informations
          utiles, vérifie le déroulement prévu et assure la coordination le jour du mariage.
        </p>
        <p>
          Le tarif peut notamment évoluer selon la durée de présence nécessaire, l’organisation mise en place, le nombre de
          prestataires et les particularités du lieu de réception.
        </p>
        <p>
          <Link href="/tarifs/offre-harmonie" className="text-[#88b7b5] font-medium underline underline-offset-4 hover:text-[#6fa3a1] transition">
            Découvrir la formule Harmonie →
          </Link>
        </p>
      </ArticleSection>

      <ArticleSection title="Quel est le prix d’une organisation partielle de mariage ?">
        <p>
          L’organisation partielle se situe entre la simple coordination et l’accompagnement complet. Elle correspond généralement
          à une situation très fréquente : vous avez commencé votre mariage mais certaines étapes restent à organiser.
        </p>
        <p>
          Votre lieu peut, par exemple, être déjà réservé tandis que le traiteur, le DJ, la scénographie ou certains autres
          prestataires restent à sélectionner. Dans ce cas, une Wedding Planner reprend votre projet là où vous en êtes. Le prix
          dépend donc particulièrement du travail restant à accomplir.
        </p>
        <p>
          Chez Le Oui Parfait, notre formule <strong>Élégance</strong> permet justement de construire un accompagnement autour des
          éléments qu’il reste réellement à organiser. Plutôt que de vous facturer une organisation complète alors qu’une partie
          du travail a déjà été réalisée, le projet peut être étudié en fonction de votre situation.
        </p>
        <p>
          <Link href="/tarifs/offre-elegance" className="text-[#88b7b5] font-medium underline underline-offset-4 hover:text-[#6fa3a1] transition">
            Découvrir la formule Élégance →
          </Link>
        </p>
      </ArticleSection>

      <ArticleSection title="Quel est le prix d’une organisation complète de mariage ?">
        <p>
          L’organisation complète représente le niveau d’accompagnement le plus important. La Wedding Planner intervient dès le
          début du projet et accompagne les futurs mariés pendant plusieurs mois.
        </p>
        <p>
          La prestation peut notamment englober la structuration du budget, le rétroplanning, la recherche du lieu et des
          prestataires, les différents rendez-vous, le suivi de l’organisation et la préparation du Jour J.
        </p>
        <p>
          Chez Le Oui Parfait, notre formule <strong>Signature – Organisation complète</strong> est proposée{' '}
          <strong>à partir de 3 500 €</strong>. Elle s’adresse principalement aux couples souhaitant bénéficier d’un accompagnement
          global et disposer d’un interlocuteur capable de suivre leur mariage depuis les premières étapes jusqu’à sa réalisation.
        </p>
        <p>
          <Link href="/tarifs/offre-signature" className="text-[#88b7b5] font-medium underline underline-offset-4 hover:text-[#6fa3a1] transition">
            Découvrir la formule Signature →
          </Link>
        </p>
      </ArticleSection>

      <ArticleSection title="Pourquoi le prix d’une Wedding Planner peut-il autant varier ?">
        <p>
          Deux mariages organisés dans la même ville de l’Essonne peuvent présenter des coûts d’accompagnement très différents.
        </p>
        <p>
          Prenons deux mariages de 100 invités. Dans le premier cas, le lieu impose déjà le traiteur et une grande partie du
          mobilier. Les mariés ont choisi leur photographe, leur DJ et leur décoration. Dans le second, il faut encore rechercher
          le lieu, plusieurs prestataires, construire la scénographie, gérer différentes animations et coordonner de nombreux
          intervenants.
        </p>
        <p>
          Le nombre d’invités est identique. La charge d’organisation ne l’est absolument pas. C’est pourquoi un devis de
          Wedding Planner doit être analysé en fonction du périmètre de la mission et pas uniquement de son prix final.
        </p>
      </ArticleSection>

      <ArticleSection title="Quels éléments font augmenter le tarif ?">
        <p>
          <strong>Le niveau de délégation</strong> est l’un des principaux facteurs. Une coordination Jour J demande moins de mois
          de préparation qu’une organisation complète menée depuis le début.
        </p>
        <p>
          <strong>La complexité du lieu</strong> peut également avoir une influence importante : horaires d’accès limités,
          installations particulières, prestataires imposés, démontage, cérémonie sur place ou différents espaces à coordonner
          peuvent demander davantage de préparation.
        </p>
        <p>
          <strong>Le nombre de professionnels impliqués</strong> joue également un rôle : traiteur, DJ, photographe, vidéaste,
          fleuriste, décorateur, animations, officiant, artistes, transport, hébergement — plus les intervenants sont nombreux,
          plus le travail de coordination devient important.
        </p>
        <p>
          Enfin, <strong>le temps restant avant le mariage</strong> peut modifier considérablement l’organisation : préparer un
          projet sur douze mois n’est pas comparable à reprendre une organisation quelques semaines avant l’événement.
        </p>
      </ArticleSection>

      <ArticleSection title="Wedding Planner : dépense supplémentaire ou budget mieux maîtrisé ?">
        <p>
          C’est une question intéressante, car le prix de la Wedding Planner apparaît immédiatement sur un devis alors que les
          économies indirectes sont moins visibles.
        </p>
        <p>
          Le rôle d’une Wedding Planner n’est cependant pas simplement de réserver des prestataires : elle doit également
          permettre aux futurs mariés de disposer d’une vision globale de leur mariage. Un budget doit être réparti entre
          plusieurs postes : lieu, restauration, décoration, photographie, vidéo, musique, tenues, animations et différentes
          dépenses complémentaires.
        </p>
        <p>
          Sans vision globale, il est possible de consacrer trop d’argent à certaines prestations et de découvrir beaucoup trop
          tard qu’une partie importante du budget manque sur d’autres postes. L’objectif d’un accompagnement professionnel est
          donc aussi de prioriser les dépenses et d’anticiper les coûts.
        </p>
      </ArticleSection>

      <ArticleSection title="Combien coûte Le Oui Parfait en Essonne ?" highlight>
        <p>
          Pour faciliter la compréhension de nos prestations, nos principales formules sont organisées selon le niveau
          d’accompagnement souhaité.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-[14px] border-collapse">
            <thead>
              <tr className="border-b-2 border-[#88b7b5]/40 text-left">
                <th className="py-3 pr-4 font-semibold text-[#4B4456]">Formule</th>
                <th className="py-3 pr-4 font-semibold text-[#4B4456]">Accompagnement</th>
                <th className="py-3 font-semibold text-[#4B4456]">Tarif</th>
              </tr>
            </thead>
            <tbody className="text-[#5A5A5A]">
              <tr className="border-b border-[#e8e0dc]">
                <td className="py-3 pr-4 font-medium text-[#4B4456]">Harmonie</td>
                <td className="py-3 pr-4">Coordination Jour J</td>
                <td className="py-3 font-medium text-[#4B4456]">dès 1 190 €</td>
              </tr>
              <tr className="border-b border-[#e8e0dc]">
                <td className="py-3 pr-4 font-medium text-[#4B4456]">Élégance</td>
                <td className="py-3 pr-4">Organisation partielle</td>
                <td className="py-3 font-medium text-[#4B4456]">Selon le projet</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-[#4B4456]">Signature</td>
                <td className="py-3 pr-4">Organisation complète</td>
                <td className="py-3 font-medium text-[#4B4456]">dès 3 500 €</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Le montant définitif dépend du projet présenté et des besoins identifiés lors de l’échange avec les futurs mariés. Ces
          formules permettent surtout de distinguer trois situations très différentes : faire organiser son mariage intégralement,
          obtenir de l’aide sur une organisation déjà commencée ou simplement déléguer la coordination finale.
        </p>
        <p>
          <Link href="/tarifs" className="text-[#88b7b5] font-medium underline underline-offset-4 hover:text-[#6fa3a1] transition">
            Découvrir tous nos tarifs →
          </Link>
        </p>
      </ArticleSection>

      <ArticleSection title="Exemple : quel accompagnement choisir selon votre situation ?">
        <div className="space-y-4">
          <div className="rounded-xl bg-[#f4f1f7] border border-[#e8e0dc] p-5">
            <p className="font-medium text-[#4B4456]">Vous avez déjà votre lieu, votre traiteur, votre DJ et vos prestataires ?</p>
            <p className="mt-2">L’accompagnement <strong>Harmonie</strong> peut probablement correspondre davantage à votre situation.</p>
          </div>
          <div className="rounded-xl bg-[#f4f1f7] border border-[#e8e0dc] p-5">
            <p className="font-medium text-[#4B4456]">Vous avez commencé votre mariage mais plusieurs postes importants restent à organiser ?</p>
            <p className="mt-2">C’est plutôt l’objectif de l’offre <strong>Élégance</strong>.</p>
          </div>
          <div className="rounded-xl bg-[#f4f1f7] border border-[#e8e0dc] p-5">
            <p className="font-medium text-[#4B4456]">Vous débutez votre projet et souhaitez confier son organisation à une Wedding Planner ?</p>
            <p className="mt-2">L’offre <strong>Signature</strong> correspond à une prise en charge beaucoup plus complète.</p>
          </div>
        </div>
        <p>
          Le montant à prévoir dépend donc moins du simple fait de « prendre une Wedding Planner » que du niveau de responsabilité
          que vous souhaitez lui confier.
        </p>
      </ArticleSection>

      <ArticleSection title="Faut-il demander plusieurs devis de Wedding Planner ?">
        <p>
          Comparer plusieurs propositions peut être utile, mais il faut comparer ce qui est réellement comparable. Une prestation
          affichée à 1 500 € peut sembler beaucoup moins chère qu’une prestation proposée à 3 000 €, tout en comprenant beaucoup
          moins de rendez-vous, de recherches ou de temps de présence.
        </p>
        <p>
          Il faut donc regarder le périmètre précis de chaque proposition : ce qui est inclus, les limites de la mission, le suivi
          prévu avant le mariage et la présence de l’équipe le Jour J. Le prix seul ne permet pas de comparer correctement deux
          offres différentes.
        </p>
        <p>
          <Link href="/devis-wedding-planner-contenu" className="text-[#88b7b5] font-medium underline underline-offset-4 hover:text-[#6fa3a1] transition">
            Que doit contenir un devis de Wedding Planner ? →
          </Link>
        </p>
      </ArticleSection>

      <ArticleSection title="Quand réserver sa Wedding Planner en Essonne ?">
        <p>
          Pour une organisation complète, contacter sa Wedding Planner tôt permet généralement de travailler avec davantage de
          choix concernant le lieu et les principaux prestataires.
        </p>
        <p>
          Une coordination Jour J peut être réservée plus tardivement puisqu’une grande partie du mariage est déjà organisée. Il
          reste néanmoins préférable de ne pas attendre les toutes dernières semaines : l’équipe doit pouvoir prendre connaissance
          du projet, récupérer les informations des prestataires et préparer correctement la coordination.
        </p>
      </ArticleSection>

      <ArticleSection title="Wedding Planner Essonne : demander un tarif pour votre mariage" highlight>
        <p>
          Chaque mariage étant différent, le moyen le plus fiable de connaître le coût réel de votre accompagnement reste de
          présenter votre projet. Date du mariage, nombre approximatif d’invités, lieu déjà réservé ou non, prestataires
          sélectionnés et état d’avancement de l’organisation sont autant d’informations qui permettent d’identifier la prestation
          la plus adaptée.
        </p>
        <p>
          Le Oui Parfait dispose de son showroom à Ris-Orangis et accompagne les futurs mariés en Essonne ainsi que dans le reste
          de l’Île-de-France.
        </p>
        <p>
          Vous recherchez une Wedding Planner pour votre mariage dans le 91 ?
        </p>
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link
            href="/ile-de-france/91-essonne"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#4B4456] text-white text-sm font-medium hover:bg-[#3a3540] transition"
          >
            Découvrir notre accompagnement Wedding Planner en Essonne
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-[#4B4456] text-sm font-medium border border-[#88b7b5]/40 hover:border-[#88b7b5] transition"
          >
            Demander un devis
          </Link>
        </div>
      </ArticleSection>

      <ArticleSection title="FAQ – Prix d’une Wedding Planner en Essonne">
        <div className="space-y-3">
          {faq.map((item, i) => (
            <details key={item.q} className="group rounded-xl bg-[#f4f1f7] border border-[#88b7b5]/30 overflow-hidden" open={i === 0}>
              <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="font-semibold text-[#4B4456] text-[15px]">{item.q}</span>
                <span className="text-[#88b7b5] text-lg leading-none flex-shrink-0 transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="px-4 pb-4 text-[14px] text-[#4B4456]/80 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </ArticleSection>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </ArticleLandingPage>
  );
}
