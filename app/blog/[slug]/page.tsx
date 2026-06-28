import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';

function BlogCtaCard(): ReactNode {
  const phoneNumber = '33687217118';
  const message =
    'Bonjour Kathy, je souhaite être conseillé(e) sur la formule la plus adaptée (jour J / partielle / complète). Pouvez-vous vérifier la disponibilité de ma date ?';
  const waHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/animation-background.jpg')" }}
      />
      <div className="absolute inset-0 bg-[#4B4456]/70" />

      <div className="relative p-7 sm:p-8">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            Disponibilité et conseil
          </p>
          <h4 className="font-baskerville text-2xl sm:text-3xl text-white">
            Vous ne savez pas quelle formule est la plus adaptée à votre mariage ?
          </h4>
          <p className="text-white leading-relaxed">
            Nous pouvons vous orienter en fonction de votre situation et vérifier la disponibilité de votre date.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50"
            >
              Contacter sur WhatsApp
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur-sm hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Demander un devis
            </Link>
          </div>

          <p className="text-xs text-white/70">Réponse en moins de 30 minutes</p>
        </div>
      </div>
    </div>
  );
}

function renderRichText(text: string, variant: 'intro' | 'section' = 'section'): ReactNode {
  const trimmed = (text ?? '').trim();
  if (!trimmed) return null;

  const baseTextClass = variant === 'intro' ? 'text-base lg:text-lg' : 'text-base';

  const renderInline = (value: string): ReactNode => {
    const parts = value.split(/(\/[a-z0-9-]+(?:\/[a-z0-9-]+)*)/gi);
    return (
      <>
        {parts
          .filter((p) => p.length > 0)
          .map((part, idx) => {
            const isInternalPath = /^\/[a-z0-9-]+(?:\/[a-z0-9-]+)*$/i.test(part);
            if (isInternalPath) {
              return (
                <Link
                  key={idx}
                  href={part}
                  className="text-[#88b7b5] underline underline-offset-4 hover:opacity-80"
                >
                  {part}
                </Link>
              );
            }
            return <span key={idx}>{part}</span>;
          })}
      </>
    );
  };

  const renderBlock = (block: string, key: number): ReactNode => {
    const lines = block
      .split('\n')
      .map((l) => l.replace(/\s+$/g, ''))
      .filter((l) => l.trim().length > 0);

    const isTable = lines.length >= 2 && lines.every((l) => l.includes('\t'));
    if (isTable) {
      const rows = lines.map((l) => l.split('\t').map((c) => c.trim()));
      return <div key={key}>{renderTable(rows) as ReactNode}</div>;
    }

    const isUnordered = lines.length >= 2 && lines.every((l) => /^-\s+/.test(l.trim()));
    if (isUnordered) {
      return <div key={key}>{renderList(lines, false) as ReactNode}</div>;
    }

    const isOrdered = lines.length >= 2 && lines.every((l) => /^\d+\.\s+/.test(l.trim()));
    if (isOrdered) {
      return <div key={key}>{renderList(lines, true) as ReactNode}</div>;
    }

    const isSubheading =
      lines.length === 1 && (lines[0].trim().endsWith('?') || lines[0].trim().endsWith(':'));
    if (isSubheading) {
      return (
        <h4 key={key} className="text-[#4A4A4A] font-semibold tracking-tight text-base lg:text-lg">
          {lines[0].trim()}
        </h4>
      );
    }

    return (
      <p key={key} className={`text-[#5A5A5A] leading-relaxed ${baseTextClass}`}>
        {renderInline(block.trim())}
      </p>
    );
  };

  const blocks = trimmed.split(/\n\s*\n/);

  const renderList = (lines: string[], ordered: boolean) => {
    const items = lines
      .map((l) => l.trim())
      .filter(Boolean)
      .map((l) => {
        if (ordered) return l.replace(/^\d+\.\s+/, '');
        return l.replace(/^-\s+/, '');
      });

    const ListTag = ordered ? 'ol' : 'ul';

    return (
      <ListTag
        className={
          ordered
            ? `list-decimal pl-6 space-y-2 text-[#5A5A5A] leading-relaxed ${baseTextClass}`
            : `list-disc pl-6 space-y-2 text-[#5A5A5A] leading-relaxed ${baseTextClass}`
        }
      >
        {items.map((item, idx) => (
          <li key={idx}>{renderInline(item)}</li>
        ))}
      </ListTag>
    );
  };

  const renderTable = (rows: string[][]) => {
    if (rows.length < 2) return null;
    const [headerRow, ...bodyRows] = rows;

    return (
      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              {headerRow.map((cell, idx) => (
                <th
                  key={idx}
                  className="px-4 py-3 text-left text-sm font-semibold text-[#4A4A4A]"
                >
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bodyRows.map((row, rIdx) => (
              <tr key={rIdx} className="border-t border-gray-200">
                {row.map((cell, cIdx) => (
                  <td key={cIdx} className="px-4 py-3 text-sm text-[#5A5A5A]">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return <div className="space-y-4">{blocks.map((block, idx) => renderBlock(block, idx))}</div>;
}

const articlesData: Record<string, {
  title: string;
  date: string;
  author: string;
  image: string;
  category: string;
  content: {
    intro: string;
    sections: { title: string; text: string }[];
  };
}> = {
  'prix-wedding-planner-ile-de-france': {
    title: 'Prix d’une Wedding Planner en Île-de-France (2026) : tarifs, formules et budget réel',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/alliance.jpg',
    category: 'TARIFS',
    content: {
      intro:
        `Le prix d’une wedding planner en Île-de-France varie généralement entre 800 € et plus de 6 000 €, selon le niveau d’accompagnement, la taille du mariage et les prestations incluses.

Certaines formules couvrent uniquement la coordination du jour J, tandis que d’autres incluent l’organisation complète du mariage de A à Z.

Dans ce guide, vous allez comprendre :

combien coûte réellement une wedding planner,
pourquoi les prix varient autant,
quelle formule est adaptée à votre situation,
et comment éviter de payer trop cher ou de mal choisir.`,
      sections: [
        {
          title: 'Combien coûte une wedding planner en Île-de-France ?',
          text: `Voici les fourchettes moyennes constatées :

Prestation\tPrix moyen
Coordination du jour J\t800 € – 2 000 €
Organisation partielle\t1 500 € – 3 500 €
Organisation complète\t3 000 € – 6 500 €+

Ces prix varient selon :

- le nombre d’invités
- la complexité du mariage
- le nombre de prestataires à gérer
- la localisation
- le niveau d’accompagnement souhaité`,
        },
        {
          title: 'Pourquoi les prix d’une wedding planner varient autant ?',
          text: `Deux mariages ne demandent jamais la même charge de travail.

Les principaux facteurs sont :

1. Le niveau de délégation

Plus vous déléguez, plus le prix augmente.

2. Le nombre de prestataires

DJ, traiteur, lieu, décoration, photo, coordination…

3. La durée d’accompagnement

Certaines wedding planners travaillent 2 semaines, d’autres 12 mois.

4. Le niveau de personnalisation

Un mariage sur mesure demande plus de travail qu’une organisation standardisée.

5. Le jour J

Présence sur place, gestion des imprévus, coordination des équipes.`,
        },
        {
          title: 'Ce que beaucoup de couples sous-estiment',
          text: `Le vrai coût d’un mariage n’est pas seulement financier.

C’est surtout :

- la charge mentale
- le stress d’organisation
- les erreurs de timing
- les oublis logistiques
- les imprévus du jour J

Beaucoup de couples pensent économiser en organisant seuls, mais finissent par payer en stress, en erreurs ou en surcoûts de dernière minute.`,
        },
        {
          title: 'Coordination du jour J : pour qui ?',
          text: `Cette formule est idéale si :


- vous avez déjà organisé votre mariage
- vous voulez profiter du jour J sans stress
- vous voulez quelqu’un pour gérer les prestataires

La wedding planner intervient uniquement sur la coordination finale.

C’est souvent la formule la plus rentable pour les couples organisés mais stressés.`,
        },
        {
          title: 'Organisation partielle : le bon équilibre',
          text: `Cette formule est adaptée si :


- vous avez commencé les préparatifs
- vous êtes bloqués ou dépassés
- vous voulez reprendre le contrôle sans repartir de zéro

La wedding planner reprend une partie de l’organisation et sécurise les étapes restantes.`,
        },
        {
          title: 'Organisation complète : zéro charge mentale',
          text: `Cette option inclut :


- recherche des prestataires
- planning complet
- gestion du budget
- coordination jusqu’au jour J

Elle est idéale si vous manquez de temps ou souhaitez éviter toute complexité.`,
        },
        {
          title: 'Wedding planner : dépense ou investissement ?',
          text: `Beaucoup de couples hésitent à cause du prix.

Mais la vraie question est la suivante :

Préférez-vous gérer le stress, les erreurs et le temps perdu… ou sécuriser votre mariage dès le départ ?

Une wedding planner permet souvent :


- d’éviter des erreurs coûteuses
- de mieux gérer le budget global
- de réduire fortement le stress
- d’optimiser le planning et les prestataires`,
        },
        {
          title: 'Comment choisir la bonne wedding planner ?',
          text: `Voici les critères essentiels :


- Expérience réelle sur des mariages complets
- Avis clients vérifiés
- Transparence sur les prix
- Qualité du contact humain
- Capacité à gérer les imprévus

Les erreurs les plus fréquentes :

- choisir uniquement sur le prix
- sous-estimer la charge mentale
- attendre trop longtemps pour réserver
- ne pas vérifier la disponibilité réelle
- mal définir ses besoins`,
        },
        {
          title: 'Budget mariage global : à quoi s’attendre ?',
          text: `En Île-de-France, un mariage coûte généralement :

Petit mariage : 8 000 € – 15 000 €
Mariage moyen : 15 000 € – 30 000 €
Mariage premium : 30 000 €+

La wedding planner représente souvent 5 à 15 % du budget total, mais sécurise 100 % de l’événement.`,
        },
        {
          title: 'FAQ',
          text: `Quel est le prix moyen d’une wedding planner ?

Entre 800 € et 6 500 € selon les prestations.

Est-ce rentable d’avoir une wedding planner ?

Oui, surtout pour éviter les erreurs et le stress.

Quand faut-il réserver ?

Idéalement 6 à 12 mois avant le mariage.

Peut-on avoir une wedding planner pour un petit budget ?

Oui, notamment via la coordination du jour J.`,
        },
        {
          title: 'Pourquoi Le Oui Parfait ?',
          text: `Le Oui Parfait accompagne les couples en Île-de-France dans l’organisation et la coordination de leur mariage avec une approche centrée sur la sérénité, la clarté et la gestion des imprévus.

Notre objectif : que vous viviez votre mariage sans stress, sans surcharge mentale et sans mauvaise surprise.`,
        },
        {
          title: 'Vérifier la disponibilité de votre date',
          text: `Chaque mariage est unique.

En quelques minutes, nous pouvons :


- vérifier votre date
- comprendre votre besoin
- vous orienter vers la formule la plus adaptée

Planifier mon mariage avec Kathy

Réponse en moins de 30 minutes`,
        },
      ],
    },
  },
  'formules-wedding-planner-jour-j-partiel-complet': {
    title: 'Quelles sont les formules d’une wedding planner ? (Jour J, partielle, complète)',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/couple.jpg',
    category: 'ORGANISATION',
    content: {
      intro:
        `Une wedding planner propose généralement plusieurs niveaux d’accompagnement pour s’adapter aux besoins, au budget et au degré d’implication des couples.

Certaines personnes souhaitent uniquement être accompagnées le jour du mariage pour éviter le stress logistique. D’autres préfèrent déléguer une partie de l’organisation, ou confier l’intégralité du projet pour éviter toute charge mentale.

Dans la majorité des cas, le choix de la formule dépend de trois facteurs :

- le temps disponible
- le budget global du mariage
- le niveau de stress que le couple souhaite éviter

Dans ce guide, vous allez comprendre clairement les différences entre les formules et savoir laquelle est réellement adaptée à votre situation.

Pour comprendre les tarifs détaillés en Île-de-France, consultez le guide complet : /blog/prix-wedding-planner-ile-de-france`,
      sections: [
        {
          title: '1. La coordination du jour J',
          text: `Qu’est-ce que c’est ?

La coordination du jour J est une formule où la wedding planner intervient uniquement le jour du mariage (et quelques jours avant pour la préparation finale).

Elle ne participe pas à toute l’organisation, mais elle s’assure que tout se déroule parfaitement le jour de l’événement.

Ce que cela inclut :

- prise de contact avec les prestataires
- création du planning du jour J
- gestion des imprévus
- coordination des équipes
- supervision du déroulement

Pour qui ?

Cette formule est idéale si :

- vous avez déjà tout organisé
- vous voulez profiter du mariage sans stress
- vous avez peur des imprévus le jour J

Lien stratégique :

Si vous voulez comprendre en détail combien coûte cette formule : /blog/coordination-jour-j-wedding-planner`,
        },
        {
          title: '2. L’organisation partielle',
          text: `Qu’est-ce que c’est ?

L’organisation partielle intervient lorsque les couples ont déjà commencé les préparatifs mais ont besoin d’aide pour structurer, corriger ou finaliser certains aspects.

Ce que cela inclut :

- reprise de l’organisation en cours
- aide au choix des prestataires
- optimisation du budget
- correction du planning
- accompagnement ciblé

Pour qui ?

Cette formule est idéale si :

- vous avez commencé seul mais êtes dépassé
- vous manquez de temps pour finaliser
- vous voulez éviter les erreurs coûteuses

Voir aussi : /blog/prix-wedding-planner-ile-de-france`,
        },
        {
          title: '3. L’organisation complète',
          text: `Qu’est-ce que c’est ?

L’organisation complète consiste à déléguer entièrement la préparation du mariage à une wedding planner, de la planification initiale jusqu’au jour J.

Ce que cela inclut :

- recherche de tous les prestataires
- gestion du budget global
- création du planning complet
- coordination générale du projet
- présence le jour J

Pour qui ?

Cette formule est idéale si :

- vous manquez de temps
- vous voulez zéro stress
- vous souhaitez un accompagnement global

Pour comprendre les budgets associés : /blog/prix-wedding-planner-ile-de-france`,
        },
        {
          title: 'Comment choisir la bonne formule ?',
          text: `Le choix dépend principalement de 3 critères :

1. Votre temps disponible

Plus vous avez de temps, moins vous avez besoin de déléguer.

2. Votre budget

Chaque formule implique un niveau d’investissement différent.

3. Votre niveau de stress

Plus vous souhaitez être serein, plus la délégation est importante.`,
        },
        {
          title: 'Quelle formule est la plus choisie ?',
          text: `Dans la majorité des cas :

- coordination du jour J : très fréquent
- organisation complète : couples très occupés
- organisation partielle : cas intermédiaires`,
        },
        {
          title: 'Erreurs fréquentes à éviter',
          text: `- choisir uniquement en fonction du prix
- sous-estimer la charge mentale
- penser pouvoir tout gérer seul sans expérience
- réserver trop tard
- mal définir ses besoins dès le départ`,
        },
        {
          title: 'Conclusion',
          text: `Chaque formule répond à une situation différente.

Il n’y a pas de “meilleure formule”, seulement une formule adaptée à votre niveau d’implication, votre budget et votre besoin de sérénité.`,
        },
        {
          title: 'CTA',
          text: `Vous ne savez pas quelle formule est la plus adaptée à votre mariage ?

Nous pouvons vous orienter en fonction de votre situation et vérifier la disponibilité de votre date.

Planifier mon mariage avec Kathy

Réponse en moins de 30 minutes`,
        },
      ],
    },
  },
  'coordination-jour-j-mariage-prix': {
    title: 'Coordination du Jour J : rôle, prix et pourquoi c’est indispensable',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/mairie.jpg',
    category: 'JOUR J',
    content: {
      intro:
        `La coordination du jour J est l’une des prestations les plus demandées en wedding planning.

Elle consiste à déléguer la gestion complète de votre mariage le jour de l’événement afin de vivre cette journée sans stress, sans appels à gérer et sans imprévus à résoudre.

Même lorsque tout est bien préparé, le jour du mariage reste un moment complexe : plusieurs prestataires à coordonner, un timing précis à respecter, des imprévus quasi inévitables, et une forte charge émotionnelle.

Dans cet article, vous allez comprendre ce que comprend réellement cette prestation, à qui elle s’adresse et son prix moyen en Île-de-France.`,
      sections: [
        {
          title: 'Qu’est-ce que la coordination du jour J ?',
          text: `La coordination du jour J est une prestation où la wedding planner prend le contrôle opérationnel complet du mariage le jour de l’événement.

Elle n’organise pas le mariage à votre place sur plusieurs mois, mais elle garantit que tout ce qui a été prévu se déroule parfaitement.

Concrètement, elle s’occupe de :

- mise en place du planning du jour J
- coordination de tous les prestataires
- gestion des imprévus
- supervision des cérémonies et transitions
- respect des horaires
- gestion logistique globale`,
        },
        {
          title: 'Pourquoi c’est indispensable (même si tout est déjà organisé)',
          text: `Beaucoup de couples pensent :

On a tout prévu, donc on n’a pas besoin d’aide.

Mais dans la réalité, le jour J est imprévisible.

Les problèmes fréquents :

- retard du traiteur ou du DJ
- problème technique
- invités difficiles à gérer
- décalage du planning
- stress des familles
- oubli de détails logistiques

La coordination du jour J évite que ces problèmes deviennent visibles ou perturbent votre expérience.`,
        },
        {
          title: 'Pour qui est faite la coordination du jour J ?',
          text: `Cette prestation est idéale si :

- votre mariage est déjà organisé
- vous avez réservé tous vos prestataires
- vous voulez profiter pleinement du moment
- vous ne voulez gérer aucun stress logistique

Elle n’est pas faite pour vous si :

- vous n’avez encore rien organisé
- vous avez besoin d’aide sur le long terme
- vous cherchez une organisation complète`,
        },
        {
          title: 'Quel est le prix d’une coordination du jour J ?',
          text: `En Île-de-France, le prix moyen se situe entre :

800 € et 2 000 €

Le tarif dépend de :

- la taille du mariage
- le nombre d’invités
- le nombre de prestataires
- la durée de présence sur place
- la complexité logistique

Pour comprendre les autres formules et budgets : /blog/prix-wedding-planner-ile-de-france`,
        },
        {
          title: 'Ce que les couples sous-estiment',
          text: `La coordination du jour J ne sert pas seulement à gérer.

Elle permet surtout de :

- protéger votre expérience émotionnelle
- éviter que les familles gèrent le stress
- garantir un déroulement fluide
- assurer une transition parfaite entre chaque moment`,
        },
        {
          title: 'Coordination du jour J vs organisation complète',
          text: `Type	Coordination du jour J	Organisation complète
Périmètre	Intervention uniquement le jour J	Accompagnement sur plusieurs mois
Objectif	Gestion logistique et optimisation de l’existant	Recherche prestataires et gestion globale du projet
Temps	Court	Long

Voir les formules : /blog/formules-wedding-planner-jour-j-partiel-complet`,
        },
        {
          title: 'Les erreurs fréquentes des couples',
          text: `- penser que tout est déjà prêt donc inutile
- sous-estimer la logistique du jour J
- demander à des proches de gérer
- ne pas anticiper les imprévus
- ne pas structurer le timing`,
        },
        {
          title: 'Pourquoi c’est un investissement rentable',
          text: `La coordination du jour J permet :

- d’éviter des erreurs coûteuses
- de protéger votre mariage
- de réduire drastiquement le stress
- d’assurer une expérience fluide`,
        },
        {
          title: 'CTA',
          text: `Votre mariage est déjà organisé mais vous voulez vivre votre journée sans stress ?

Nous assurons la coordination complète du jour J pour que tout se déroule parfaitement.

Planifier mon mariage avec Kathy

Réponse en moins de 30 minutes`,
        },
      ],
    },
  },
  'coordination-jour-j-wedding-planner': {
    title: 'Coordination du Jour J : rôle, prix et pourquoi c’est indispensable',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/mairie.jpg',
    category: 'JOUR J',
    content: {
      intro:
        `La coordination du jour J est l’une des prestations les plus demandées en wedding planning.

Elle consiste à déléguer la gestion complète de votre mariage le jour de l’événement afin de vivre cette journée sans stress, sans appels à gérer et sans imprévus à résoudre.

Même lorsque tout est bien préparé, le jour du mariage reste un moment complexe : plusieurs prestataires à coordonner, un timing précis à respecter, des imprévus quasi inévitables, et une forte charge émotionnelle.

Dans cet article, vous allez comprendre ce que comprend réellement cette prestation, à qui elle s’adresse et son prix moyen en Île-de-France.`,
      sections: [
        {
          title: 'Qu’est-ce que la coordination du jour J ?',
          text: `La coordination du jour J est une prestation où la wedding planner prend le contrôle opérationnel complet du mariage le jour de l’événement.

Elle n’organise pas le mariage à votre place sur plusieurs mois, mais elle garantit que tout ce qui a été prévu se déroule parfaitement.

Concrètement, elle s’occupe de :

- mise en place du planning du jour J
- coordination de tous les prestataires
- gestion des imprévus
- supervision des cérémonies et transitions
- respect des horaires
- gestion logistique globale`,
        },
        {
          title: 'Pourquoi c’est indispensable (même si tout est déjà organisé)',
          text: `Beaucoup de couples pensent :

On a tout prévu, donc on n’a pas besoin d’aide.

Mais dans la réalité, le jour J est imprévisible.

Les problèmes fréquents :

- retard du traiteur ou du DJ
- problème technique
- invités difficiles à gérer
- décalage du planning
- stress des familles
- oubli de détails logistiques

La coordination du jour J évite que ces problèmes deviennent visibles ou perturbent votre expérience.`,
        },
        {
          title: 'Pour qui est faite la coordination du jour J ?',
          text: `Cette prestation est idéale si :

- votre mariage est déjà organisé
- vous avez réservé tous vos prestataires
- vous voulez profiter pleinement du moment
- vous ne voulez gérer aucun stress logistique

Elle n’est pas faite pour vous si :

- vous n’avez encore rien organisé
- vous avez besoin d’aide sur le long terme
- vous cherchez une organisation complète`,
        },
        {
          title: 'Quel est le prix d’une coordination du jour J ?',
          text: `En Île-de-France, le prix moyen se situe entre :

800 € et 2 000 €

Le tarif dépend de :

- la taille du mariage
- le nombre d’invités
- le nombre de prestataires
- la durée de présence sur place
- la complexité logistique

Pour comprendre les autres formules et budgets : /blog/prix-wedding-planner-ile-de-france`,
        },
        {
          title: 'Ce que les couples sous-estiment',
          text: `La coordination du jour J ne sert pas seulement à gérer.

Elle permet surtout de :

- protéger votre expérience émotionnelle
- éviter que les familles gèrent le stress
- garantir un déroulement fluide
- assurer une transition parfaite entre chaque moment`,
        },
        {
          title: 'Coordination du jour J vs organisation complète',
          text: `Type	Coordination du jour J	Organisation complète
Périmètre	Intervention uniquement le jour J	Accompagnement sur plusieurs mois
Objectif	Gestion logistique et optimisation de l’existant	Recherche prestataires et gestion globale du projet
Temps	Court	Long

Voir les formules : /blog/formules-wedding-planner-jour-j-partiel-complet`,
        },
        {
          title: 'Les erreurs fréquentes des couples',
          text: `- penser que tout est déjà prêt donc inutile
- sous-estimer la logistique du jour J
- demander à des proches de gérer
- ne pas anticiper les imprévus
- ne pas structurer le timing`,
        },
        {
          title: 'Pourquoi c’est un investissement rentable',
          text: `La coordination du jour J permet :

- d’éviter des erreurs coûteuses
- de protéger votre mariage
- de réduire drastiquement le stress
- d’assurer une expérience fluide`,
        },
        {
          title: 'CTA',
          text: `Votre mariage est déjà organisé mais vous voulez vivre votre journée sans stress ?

Nous assurons la coordination complète du jour J pour que tout se déroule parfaitement.

Planifier mon mariage avec Kathy

Réponse en moins de 30 minutes`,
        },
      ],
    },
  },
  'organisation-mariage-cle-en-main-prix': {
    title: 'Organisation de mariage clé en main : prix, étapes, et pour qui c’est fait',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/mariage-moment.jpg',
    category: 'ORGANISATION',
    content: {
      intro:
        'La clé en main est faite pour les couples qui veulent un mariage élégant sans charge mentale : une méthode, des décisions plus rapides, et une exécution sécurisée.',
      sections: [
        {
          title: 'Réponse directe',
          text: 'Le prix dépend du niveau de complexité (budget, invités, lieu, scénographie), du temps restant et du niveau de délégation. En échange : tu gagnes du temps et tu réduis les erreurs.',
        },
        {
          title: 'Les problèmes cachés quand on fait seul',
          text: 'Prestataires réservés trop tard, budget non piloté, déroulé incohérent, logistique sous-estimée et décisions prises dans l’urgence.',
        },
        {
          title: 'Ce que la clé en main sécurise',
          text: 'Budget, rétroplanning, sélection prestataires, scénographie, coordination et plan B. Tu gardes la vision, on gère l’exécution.',
        },
      ],
    },
  },
  'wedding-planner-essonne-91-tarifs': {
    title: 'Wedding planner Essonne (91) : tarifs + comment choisir la bonne',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/couple.jpg',
    category: 'LOCAL',
    content: {
      intro:
        'En Essonne, les tarifs varient selon la formule (jour J, partielle, clé en main). Le plus important est de choisir une méthode claire et un accompagnement qui te rassure.',
      sections: [
        {
          title: 'Réponse directe',
          text: 'Coordination jour J = le plus accessible. Organisation partielle = structure et reprise. Clé en main = pilotage complet. Le bon choix dépend de ton avancement et de ton besoin de délégation.',
        },
        {
          title: 'Comment choisir sans se tromper',
          text: 'Demande une méthode (rétroplanning, points de contrôle), vérifie ce qui est inclus (présence, limites, plan B), et choisis quelqu’un avec qui tu te sens en confiance.',
        },
        {
          title: 'La vraie différence',
          text: 'Une organisation plus fluide et moins d’erreurs. Et surtout : une journée vécue pleinement.',
        },
      ],
    },
  },
  'wedding-planner-ris-orangis-tarifs-disponibilite': {
    title: 'Wedding planner Ris-Orangis : tarifs et disponibilité',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/feu-artifice-lanternes-mariage.jpg',
    category: 'LOCAL',
    content: {
      intro:
        'La question la plus fréquente : “êtes-vous disponible pour ma date ?”. Ensuite : quelle formule me correspond (jour J, partielle, clé en main) ? Voici une réponse claire.',
      sections: [
        {
          title: 'Réponse directe',
          text: 'Les tarifs varient selon la formule et le niveau d’accompagnement. Le bon choix est celui qui te retire de la charge mentale et sécurise ton déroulé.',
        },
        {
          title: 'Pourquoi c’est rentable',
          text: 'Tu évites les erreurs de timing, tu gagnes du temps sur les relances/décisions, et tu avances avec une méthode et un plan B.',
        },
        {
          title: 'Vérifier la disponibilité',
          text: 'Le plus simple : nous écrire avec ta date + ton lieu + ton budget approximatif, et on te répond rapidement.',
        },
      ],
    },
  },
  'budget-mariage-80-invites-ile-de-france': {
    title: 'Quel budget prévoir pour un mariage 80 personnes en Île-de-France ?',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/table mariage.webp',
    category: 'BUDGET',
    content: {
      intro:
        'À 80 invités, le budget dépend surtout du lieu, du traiteur et du niveau de prestation. Le plus important : piloter par priorités et éviter les options ajoutées “au fil de l’eau”.',
      sections: [
        {
          title: 'Les postes qui pèsent le plus',
          text: 'Lieu + traiteur (souvent les plus gros postes), puis photo/vidéo, musique/animation, décoration et logistique (transports, installations).',
        },
        {
          title: 'Les pièges qui font exploser le budget',
          text: 'Options traiteur, déco par petits achats, logistique sous-estimée, réservation tardive et contrats flous.',
        },
        {
          title: 'Solution pro',
          text: 'Une méthode de pilotage : enveloppes par catégorie, marges imprévus, arbitrages et cohérence globale.',
        },
      ],
    },
  },
  'erreurs-budget-mariage': {
    title: 'Les 7 erreurs qui font exploser le budget mariage (et comment les éviter)',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/location-de-salle-de-mariage.jpg.jpeg',
    category: 'BUDGET',
    content: {
      intro:
        'Les budgets explosent rarement “d’un coup”. Ils explosent par accumulation. Voici les erreurs les plus fréquentes et comment les éviter.',
      sections: [
        {
          title: 'Les 7 erreurs fréquentes',
          text: 'Pas de priorités, options traiteur en cascade, logistique oubliée, réservations tardives, déco accumulée, contrats flous, pas de marge imprévus.',
        },
        {
          title: 'Comment les éviter',
          text: 'Piloter par priorités, valider les devis “tout compris”, cadrer les heures et les livrables, et garder une marge dédiée aux imprévus.',
        },
        {
          title: 'Pourquoi une méthode change tout',
          text: 'Quand tout est structuré, tu fais moins d’achats “réflexe” et tu prends des décisions sereines.',
        },
      ],
    },
  },
  'checklist-mariage-12-mois': {
    title: 'Checklist mariage 12 mois : planning simple + éviter la surcharge mentale',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/faire-part.png',
    category: 'ORGANISATION',
    content: {
      intro:
        'Le secret d’une organisation sereine : faire dans le bon ordre. Voici une checklist simple sur 12 mois pour éviter la surcharge mentale.',
      sections: [
        {
          title: 'M-12 à M-9 : cadrer le projet',
          text: 'Budget, style, invités approximatifs et lieu. Ces choix structurent le reste.',
        },
        {
          title: 'M-9 à M-6 : sécuriser les prestataires majeurs',
          text: 'Traiteur, photo/vidéo, musique, cérémonie : réservez tôt pour avoir le choix.',
        },
        {
          title: 'M-6 à J : détails + coordination',
          text: 'Déroulé, logistique, brief prestataires, plan B. C’est là que la coordination jour J devient clé.',
        },
      ],
    },
  },
  'choisir-lieu-mariage-ile-de-france': {
    title: 'Comment choisir un lieu de mariage en Île-de-France (sans se tromper)',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/location-de-salle-de-mariage.jpg.jpeg',
    category: 'LIEUX',
    content: {
      intro:
        'Le lieu décide du budget, du style et de la logistique. Voici une méthode simple et les pièges à éviter pour choisir sereinement en Île-de-France.',
      sections: [
        {
          title: 'Les critères essentiels',
          text: 'Invités + budget d’abord, puis accessibilité, plan B pluie, contraintes horaires, traiteur imposé, logistique et hébergements.',
        },
        {
          title: 'Les pièges cachés',
          text: 'Heures de fin, restrictions musique, coûts additionnels, plan B inexistant, parking insuffisant et trajets compliqués.',
        },
        {
          title: 'Solution pro',
          text: 'Une wedding planner sait quoi vérifier et comment sécuriser les détails qui coûtent cher si tu les découvres trop tard.',
        },
      ],
    },
  },
  'organiser-mariage-civil-et-ceremonie': {
    title: 'Mariage civil + cérémonie : comment organiser sans stress ? ',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/mairie.jpg',
    category: 'ORGANISATION',
    content: {
      intro:
        'Mairie + cérémonie + réception = plus de timing, plus de trajets, plus de risques de retards. La clé : un déroulé solide et un pilotage clair.',
      sections: [
        {
          title: 'La méthode simple',
          text: 'Fixer les horaires non négociables, calculer trajets + marges, construire un déroulé minute par minute, et confier le pilotage le jour J.',
        },
        {
          title: 'Les problèmes cachés',
          text: 'Trajets sous-estimés, invités perdus, retards de préparation, photos écourtées, pas de plan B météo.',
        },
        {
          title: 'Solution pro',
          text: 'Une coordination sécurise le timing, brief les prestataires et gère les imprévus : tu vis, on pilote.',
        },
      ],
    },
  },
  'temps-necessaire-organiser-mariage': {
    title: 'Combien de temps faut-il pour organiser un mariage ? (réponse réaliste)',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/save-the-date.png',
    category: 'ORGANISATION',
    content: {
      intro:
        'La réponse dépend de ta date, ton budget et ton niveau de délégation. Le temps “réel” vient surtout des décisions régulières et de la coordination.',
      sections: [
        {
          title: 'Ce qui prend du temps',
          text: 'Choix du lieu, traiteur, photo/vidéo, scénographie, logistique, rétroplanning et coordination prestataires.',
        },
        {
          title: 'Pourquoi on se retrouve en retard',
          text: 'Décisions repoussées, réservations tardives, et manque de méthode. En Île-de-France, les bons prestataires partent vite.',
        },
        {
          title: 'Solution pro',
          text: 'Une wedding planner accélère : priorités, décisions, méthode, points de contrôle, et sécurisation des étapes.',
        },
      ],
    },
  },
  'devis-wedding-planner-contenu': {
    title: 'Devis wedding planner : que doit contenir une offre sérieuse ?',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/alliance.jpg',
    category: 'TARIFS',
    content: {
      intro:
        'Un devis clair évite 90% des mauvaises surprises. Voici les éléments indispensables à vérifier avant de signer.',
      sections: [
        {
          title: 'Ce qui doit être écrit noir sur blanc',
          text: 'Périmètre exact, rendez-vous, rétroplanning, échanges prestataires, présence le jour J, horaires, limites de prestation, options et hors prestation.',
        },
        {
          title: 'Les offres floues : les risques',
          text: 'Coordination sans reprise de planning, présence limitée non dite, pas de plan B, pas de brief prestataires : tu te retrouves à gérer quand même.',
        },
        {
          title: 'Solution',
          text: 'Choisir une offre qui détaille la méthode et l’exécution, pas uniquement une promesse.',
        },
      ],
    },
  },
  'coordination-jour-j-qui-fait-quoi': {
    title: 'Coordination jour J : qui gère quoi (mariés, témoins, wedding planner)',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/photographe-mariage-en-action.jpg',
    category: 'JOUR J',
    content: {
      intro:
        'Le stress du jour J vient souvent d’une seule chose : personne ne sait qui gère quoi. Voici une répartition simple et efficace.',
      sections: [
        {
          title: 'Le rôle des mariés',
          text: 'Vivre la journée, pas la gérer. Se concentrer sur les moments, pas sur la logistique.',
        },
        {
          title: 'Le rôle des témoins',
          text: 'Soutenir, accompagner, rassurer. Pas piloter les prestataires et le timing.',
        },
        {
          title: 'Le rôle de la wedding planner',
          text: 'Piloter le timing, briefer les prestataires, gérer les imprévus et protéger l’expérience des mariés et des invités.',
        },
      ],
    },
  },
  'mariage-petit-comite-ile-de-france': {
    title: 'Mariage en petit comité en Île-de-France : organisation + budget',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/mariage moment.jpg',
    category: 'INSPIRATION',
    content: {
      intro:
        'Moins d’invités ne veut pas dire moins de travail : il faut structurer l’expérience. En petit comité, on investit surtout sur la qualité et les détails.',
      sections: [
        {
          title: 'Organisation : les clés',
          text: 'Choisir un lieu adapté (pas trop grand), construire un déroulé vivant, et créer des moments forts (accueil, repas, animations légères).',
        },
        {
          title: 'Budget : les pièges',
          text: 'On “upgrade” tout et le budget dérive. Il faut piloter par priorités pour rester cohérent.',
        },
        {
          title: 'Solution pro',
          text: 'Une wedding planner aide à créer une expérience cohérente : lieu, scénographie, prestataires et coordination.',
        },
      ],
    },
  },
  'wedding-planner-vs-organiser-seul': {
    title: 'Wedding planner vs organisation seule : comparaison honnête (coût, stress, erreurs)',
    date: '28 Juin 2026',
    author: 'Le Oui Parfait',
    image: '/photographe-mariage-en-action.jpg',
    category: 'CONSEILS',
    content: {
      intro:
        'La comparaison utile n’est pas seulement “avec / sans”, mais coût réel + charge mentale + risques. Voici une comparaison honnête pour décider sans regret.',
      sections: [
        {
          title: 'Organiser seul : quand ça marche',
          text: 'Si tu as du temps, une méthode, et que tu aimes gérer la logistique. Sinon, tu risques de porter toute la charge mentale.',
        },
        {
          title: 'Avec wedding planner : ce que tu achètes',
          text: 'Une méthode, des décisions plus rapides, moins d’erreurs, un budget plus cadré, et une journée vécue pleinement.',
        },
        {
          title: 'Décider sereinement',
          text: 'La wedding planner devient évidente quand tu veux sécuriser budget + planning + expérience, sans t’épuiser.',
        },
      ],
    },
  },
  'creer-liste-invites-sans-stress': {
    title: 'Comment Créer Une Liste d\'Invités Sans Stress',
    date: '28 Décembre 2025',
    author: 'Le Oui Parfait',
    image: 'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg',
    category: 'CONSEILS',
    content: {
      intro:
        'Construire une liste d’invités peut vite devenir un sujet sensible. Avec une méthode simple et quelques règles claires, vous pouvez avancer sereinement et éviter les tensions.',
      sections: [
        {
          title: 'Commencer par une vision globale',
          text: 'Définissez votre capacité (lieu + budget) puis listez “sans filtre” toutes les personnes importantes. Ensuite seulement, vous affinerez.',
        },
        {
          title: 'Prioriser par cercles',
          text: 'Créez 3 cercles (incontournables, proches, optionnels). Cela vous aide à trancher si vous devez réduire le nombre final.',
        },
        {
          title: 'Anticiper les équilibres familiaux',
          text: 'Fixez des règles justes (par exemple : mêmes “droits” des deux côtés). Validez ces règles avant d’envoyer les save-the-date.',
        },
      ],
    },
  },
  'fleurs-saison-guide-mariage': {
    title: 'Fleurs de Saison : Le Guide Complet Pour Votre Mariage',
    date: '25 Décembre 2025',
    author: 'Le Oui Parfait',
    image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg',
    category: 'DÉCORATION',
    content: {
      intro:
        'Choisir des fleurs de saison permet d’obtenir des compositions plus fraîches, plus cohérentes et souvent plus avantageuses. Voici un guide simple pour faire les bons choix.',
      sections: [
        {
          title: 'Pourquoi la saison compte',
          text: 'Disponibilité, tenue, budget : la saison influence la qualité et le prix. Votre fleuriste pourra aussi proposer des alternatives très proches si une variété est rare.',
        },
        {
          title: 'Créer une palette cohérente',
          text: 'Définissez 2 à 4 couleurs maximum et déclinez-les (bouquet, centres de table, boutonnières). Une palette claire rend l’ensemble plus élégant.',
        },
        {
          title: 'Optimiser le budget',
          text: 'Investissez sur 1 à 2 points forts (arche, allée, table d’honneur) et allégez sur les autres éléments. Effet “waouh” garanti sans exploser les coûts.',
        },
      ],
    },
  },
  'planning-mariage-12-mois': {
    title: 'Planning Mariage : Les 12 Mois Avant le Jour J',
    date: '22 Décembre 2025',
    author: 'Le Oui Parfait',
    image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg',
    category: 'ORGANISATION',
    content: {
      intro:
        'Un rétroplanning clair est l’un des meilleurs moyens de réduire le stress et d’éviter les oublis. Voici une trame des étapes clés à 12 mois du mariage.',
      sections: [
        {
          title: 'M-12 à M-9 : cadrer le projet',
          text: 'Budget, style, liste d’invités approximative et choix du lieu : ces décisions structurent tout le reste.',
        },
        {
          title: 'M-9 à M-6 : sécuriser les prestataires',
          text: 'Traiteur, photo/vidéo, musique, officiant : les bons prestataires partent vite. Réservez tôt pour avoir le choix.',
        },
        {
          title: 'M-6 à J-0 : finaliser et coordonner',
          text: 'Déroulé de la journée, plan de table, détails déco, timing : c’est la phase où une coordination du jour J devient très utile.',
        },
      ],
    },
  },
  'mariage-champetre-idees-inspirations': {
    title: 'Mariage Champêtre : Idées et Inspirations',
    date: '20 Décembre 2025',
    author: 'Le Oui Parfait',
    image: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg',
    category: 'INSPIRATION',
    content: {
      intro:
        'Le style champêtre est intemporel : naturel, chaleureux et élégant. L’idée : une ambiance authentique, des matières brutes et une scénographie maîtrisée.',
      sections: [
        {
          title: 'Les matières',
          text: 'Bois, lin, céramique, fleurs de saison : privilégiez des textures naturelles et un rendu “simple mais chic”.',
        },
        {
          title: 'La déco',
          text: 'Pensez à une signalétique douce, des bougies, des compositions aériennes et des éléments personnalisés pour raconter votre histoire.',
        },
        {
          title: 'L’expérience invités',
          text: 'Coin photo, bar à thème, animation légère : le champêtre marche très bien avec des expériences conviviales.',
        },
      ],
    },
  },
  'couleurs-tendance-mariage-moderne': {
    title: 'Les Couleurs Tendance Pour Un Mariage Moderne',
    date: '18 Décembre 2025',
    author: 'Le Oui Parfait',
    image: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg',
    category: 'TENDANCES',
    content: {
      intro:
        'Les couleurs donnent immédiatement le ton. Pour un mariage moderne et élégant, l’objectif est de créer une palette harmonieuse et facile à décliner.',
      sections: [
        {
          title: 'Ne pas multiplier',
          text: '2 à 4 couleurs maximum : une couleur principale, une secondaire et 1 à 2 accents. Cela rend le rendu plus haut de gamme.',
        },
        {
          title: 'Adapter à la saison et au lieu',
          text: 'Un lieu très marqué (domaine, château, salle moderne) influence la palette. On ajuste pour garder une cohérence globale.',
        },
        {
          title: 'Décliner sans surcharger',
          text: 'Papeterie, fleurs, rubans, art de la table : on répète la palette par petites touches plutôt que de “tout colorer”.',
        },
      ],
    },
  },
  'discours-mariage-emouvoir-invites': {
    title: 'Discours de Mariage : Comment Émouvoir Vos Invités',
    date: '15 Décembre 2025',
    author: 'Le Oui Parfait',
    image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg',
    category: 'CONSEILS',
    content: {
      intro:
        'Un bon discours est simple, sincère et structuré. Voici une méthode pour toucher vos invités sans stress.',
      sections: [
        {
          title: 'Structure en 3 temps',
          text: '1) Remerciements, 2) Anecdote(s) courte(s), 3) Message final. Gardez un fil conducteur et évitez de trop vous disperser.',
        },
        {
          title: 'Durée idéale',
          text: '3 à 6 minutes : suffisamment long pour émouvoir, assez court pour garder l’attention. Répétez une fois à voix haute.',
        },
        {
          title: 'Sincérité + humour léger',
          text: 'Une touche d’humour fonctionne si elle reste bienveillante. Évitez les blagues gênantes ou trop “privées”.',
        },
      ],
    },
  },
  'choisir-lieu-parfait-mariage': {
    title: 'Comment Choisir le Lieu Parfait Pour Votre Mariage',
    date: '15 Janvier 2026',
    author: 'Le Oui Parfait',
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
    category: 'CONSEILS MARIAGE',
    content: {
      intro: 'Le choix du lieu de réception est l\'une des décisions les plus importantes dans l\'organisation de votre mariage. Il définira l\'ambiance, le style et même le nombre d\'invités que vous pourrez accueillir. Voici nos conseils pour trouver l\'endroit parfait qui correspondra à vos rêves.',
      sections: [
        {
          title: 'Définir Votre Vision',
          text: 'Avant de commencer vos recherches, prenez le temps de discuter avec votre partenaire de ce que vous imaginez pour votre grand jour. Préférez-vous un mariage en intérieur ou en extérieur ? Un cadre champêtre ou urbain ? Une ambiance intime ou une grande célébration ? Ces questions vous aideront à orienter vos recherches et à gagner un temps précieux.'
        },
        {
          title: 'Le Budget à Considérer',
          text: 'Le lieu représente généralement entre 30% et 50% du budget total de votre mariage. N\'oubliez pas d\'inclure dans vos calculs les frais annexes : traiteur imposé ou non, location de matériel, hébergement sur place. Demandez toujours un devis détaillé et vérifiez ce qui est inclus dans le prix de base.'
        },
        {
          title: 'La Capacité et l\'Accessibilité',
          text: 'Assurez-vous que le lieu peut accueillir confortablement tous vos invités, tant pour la cérémonie que pour le repas et la soirée dansante. Pensez également à l\'accessibilité : parking, transports en commun, hébergements à proximité pour vos invités venant de loin.'
        }
      ]
    }
  },
  'tendances-decoration-mariage': {
    title: 'Les Tendances Décoration Mariage Pour Cette Année',
    date: '12 Janvier 2026',
    author: 'Le Oui Parfait',
    image: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg',
    category: 'TENDANCES',
    content: {
      intro: 'Chaque année apporte son lot de nouvelles tendances en matière de décoration de mariage. Cette année, l\'accent est mis sur l\'authenticité, la durabilité et les touches personnalisées qui rendent chaque célébration unique.',
      sections: [
        {
          title: 'Les Couleurs de l\'Année',
          text: 'Les palettes de couleurs douces et naturelles dominent cette saison. Le terracotta, le vert sauge, le blush et le crème créent des ambiances chaleureuses et élégantes. Les touches de doré ou de cuivre apportent une note de sophistication sans en faire trop.'
        },
        {
          title: 'Le Retour du Naturel',
          text: 'Les compositions florales sauvages et les éléments naturels sont plus populaires que jamais. Herbes séchées, branches d\'olivier, eucalyptus et fleurs des champs créent des décors romantiques et intemporels. L\'éco-responsabilité guide de plus en plus les choix des couples.'
        },
        {
          title: 'La Personnalisation',
          text: 'Les couples cherchent à raconter leur histoire à travers leur décoration. Photos de famille, objets significatifs, références à leur rencontre ou leurs passions communes : chaque détail devient une occasion de partager leur parcours avec leurs invités.'
        }
      ]
    }
  },
  'organiser-demande-mariage-inoubliable': {
    title: 'Organiser Une Demande en Mariage Inoubliable',
    date: '10 Janvier 2026',
    author: 'Le Oui Parfait',
    image: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg',
    category: 'FIANÇAILLES',
    content: {
      intro: 'La demande en mariage est un moment unique qui restera gravé dans vos mémoires pour toujours. Qu\'elle soit intime ou spectaculaire, l\'essentiel est qu\'elle vous ressemble et qu\'elle touche le cœur de votre partenaire.',
      sections: [
        {
          title: 'Choisir le Bon Moment',
          text: 'Le timing est crucial pour une demande réussie. Choisissez un moment où vous êtes tous les deux détendus et disponibles émotionnellement. Évitez les périodes de stress professionnel ou familial. Un voyage, un anniversaire ou simplement un moment de complicité peuvent être l\'occasion parfaite.'
        },
        {
          title: 'Le Lieu Idéal',
          text: 'Le lieu de votre demande doit avoir une signification pour vous deux. Cela peut être l\'endroit de votre premier rendez-vous, votre restaurant préféré, ou un lieu de rêve que vous avez toujours voulu visiter ensemble. L\'important est que ce soit un endroit où vous vous sentez bien.'
        },
        {
          title: 'Les Détails Qui Font la Différence',
          text: 'Pensez aux petits détails qui rendront ce moment encore plus spécial : des fleurs, une playlist de vos chansons préférées, des photos de vos moments ensemble. Et bien sûr, n\'oubliez pas la bague ! Si vous n\'êtes pas sûr de ses goûts, vous pouvez toujours la choisir ensemble après la demande.'
        }
      ]
    }
  },
  'budget-mariage-conseils': {
    title: 'Budget Mariage : Nos Conseils Pour Bien Gérer',
    date: '8 Janvier 2026',
    author: 'Le Oui Parfait',
    image: 'https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg',
    category: 'CONSEILS',
    content: {
      intro: 'Gérer le budget de son mariage peut sembler intimidant, mais avec une bonne organisation et quelques astuces, vous pouvez créer la célébration de vos rêves sans vous ruiner.',
      sections: [
        {
          title: 'Établir Vos Priorités',
          text: 'Commencez par définir ce qui compte le plus pour vous. Est-ce la nourriture, la musique, la décoration, ou les photos ? Allouez une plus grande part de votre budget à ces éléments prioritaires et soyez prêts à faire des compromis sur le reste.'
        },
        {
          title: 'Prévoir une Marge de Sécurité',
          text: 'Les imprévus arrivent toujours. Prévoyez une marge de 10 à 15% de votre budget total pour les dépenses inattendues. Cela vous évitera bien des stress de dernière minute.'
        },
        {
          title: 'Négocier et Comparer',
          text: 'N\'hésitez pas à demander plusieurs devis et à négocier. Beaucoup de prestataires sont ouverts à la discussion, surtout si vous réservez en avance ou en basse saison. Comparez toujours les offres en détail pour éviter les mauvaises surprises.'
        }
      ]
    }
  },
  'choisir-robe-mariee-elegance': {
    title: 'Choisir Sa Robe de Mariée Avec Élégance',
    date: '5 Janvier 2026',
    author: 'Le Oui Parfait',
    image: 'https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg',
    category: 'CONSEILS',
    content: {
      intro: 'La robe de mariée est sans doute la pièce la plus importante de votre tenue le jour J. Voici nos conseils pour trouver celle qui vous fera vous sentir la plus belle.',
      sections: [
        {
          title: 'Commencer Tôt',
          text: 'Idéalement, commencez vos recherches 9 à 12 mois avant le mariage. Les robes sur mesure ou les modifications peuvent prendre plusieurs mois. Cela vous laissera aussi le temps de chercher les accessoires parfaits.'
        },
        {
          title: 'Connaître Sa Morphologie',
          text: 'Chaque silhouette a des coupes qui la mettent particulièrement en valeur. N\'hésitez pas à essayer différents styles, même ceux auxquels vous n\'auriez pas pensé. Vous pourriez être agréablement surprise !'
        },
        {
          title: 'Le Confort Avant Tout',
          text: 'Vous porterez cette robe pendant de longues heures. Assurez-vous de pouvoir vous asseoir, danser et vous déplacer confortablement. Une robe magnifique dans laquelle vous ne pouvez pas bouger gâchera votre journée.'
        }
      ]
    }
  },
  'meilleurs-photographes-mariage': {
    title: 'Les Meilleurs Photographes Pour Votre Jour J',
    date: '2 Janvier 2026',
    author: 'Le Oui Parfait',
    image: 'https://images.pexels.com/photos/3171770/pexels-photo-3171770.jpeg',
    category: 'CONSEILS',
    content: {
      intro: 'Les photos de mariage sont les souvenirs tangibles de votre journée spéciale. Choisir le bon photographe est essentiel pour capturer l\'essence de votre célébration.',
      sections: [
        {
          title: 'Définir Votre Style',
          text: 'Il existe de nombreux styles de photographie de mariage : reportage, artistique, traditionnel, lifestyle... Parcourez différents portfolios pour identifier ce qui vous parle. Votre photographe doit comprendre et partager votre vision.'
        },
        {
          title: 'Rencontrer les Candidats',
          text: 'Une rencontre en personne ou en visioconférence est indispensable. Le feeling avec votre photographe est crucial car il sera à vos côtés toute la journée. Vous devez vous sentir à l\'aise et en confiance.'
        },
        {
          title: 'Vérifier les Détails',
          text: 'Clarifiez tous les aspects pratiques : nombre d\'heures de présence, nombre de photos livrées, délai de livraison, droits sur les images. Un contrat clair évitera tout malentendu.'
        }
      ]
    }
  }
};

const recentPosts = [
  {
    title: 'Comment Choisir le Lieu Parfait',
    date: '15 Jan 2026',
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
    slug: 'choisir-lieu-parfait-mariage'
  },
  {
    title: 'Les Tendances Décoration Cette Année',
    date: '12 Jan 2026',
    image: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg',
    slug: 'tendances-decoration-mariage'
  },
  {
    title: 'Organiser Une Demande Inoubliable',
    date: '10 Jan 2026',
    image: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg',
    slug: 'organiser-demande-mariage-inoubliable'
  },
  {
    title: 'Budget Mariage : Bien Gérer',
    date: '8 Jan 2026',
    image: 'https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg',
    slug: 'budget-mariage-conseils'
  }
];

const relatedPosts = [
  {
    title: 'Choisir Sa Robe de Mariée Avec Élégance',
    date: '5 Janvier 2026',
    image: 'https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg',
    slug: 'choisir-robe-mariee-elegance'
  },
  {
    title: 'Les Meilleurs Photographes Pour Votre Jour J',
    date: '2 Janvier 2026',
    image: 'https://images.pexels.com/photos/3171770/pexels-photo-3171770.jpeg',
    slug: 'meilleurs-photographes-mariage'
  },
  {
    title: 'Les Tendances Décoration Mariage',
    date: '12 Janvier 2026',
    image: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg',
    slug: 'tendances-decoration-mariage'
  }
];

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = articlesData[params.slug];
  if (!article) {
    return {
      title: 'Blog | Le Oui Parfait',
      description:
        'Conseils, inspirations et tendances pour organiser votre mariage en Île-de-France : lieux, décoration, planning et prestataires.',
    };
  }

  const canonical = `https://leouiparfait.com/blog/${params.slug}`;
  const title = `${article.title.trim()} | Le Oui Parfait`;
  const description = article.content.intro.replace(/\s+/g, ' ').trim().slice(0, 160);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
      images: article.image ? [{ url: article.image }] : undefined,
    },
  };
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = articlesData[params.slug];
  if (!article) return notFound();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Header - Purple Background */}
        <section className="bg-[#4B4456] pt-32 pb-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Title */}
              <div className="lg:col-span-2">
                <h1 className="font-baskerville text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                  {article.title}
                </h1>
              </div>
              
              {/* Meta Info */}
              <div className="text-white/80 text-sm space-y-1">
                <p className="uppercase tracking-wider text-xs">Par</p>
                <p className="text-white font-medium">{article.author}</p>
                <p className="uppercase tracking-wider text-xs pt-2">Le {article.date}</p>
                <p className="text-[#88b7b5] pt-2">0 Commentaire</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-[#f4f1f7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Article Content - Left Side */}
              <div className="lg:col-span-2">
                {/* Featured Image */}
                <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] mb-10">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Introduction */}
                <div className="mb-10">
                  <h2 className="font-baskerville text-2xl lg:text-3xl text-[#4A4A4A] mb-6">
                    Introduction
                  </h2>
                  {renderRichText(article.content.intro, 'intro')}
                </div>

                {/* Content Sections */}
                {article.content.sections.map((section, index) => (
                  <div key={index} className="mb-10">
                    {section.title.trim().toLowerCase() === 'cta' ||
                    section.title.trim().toLowerCase() ===
                      'vérifier la disponibilité de votre date' ? (
                      <BlogCtaCard />
                    ) : (
                      <>
                        <h3 className="font-baskerville text-xl lg:text-2xl text-[#4A4A4A] mb-4">
                          {section.title}
                        </h3>
                        {renderRichText(section.text, 'section')}
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Sidebar - Right Side */}
              <div className="space-y-8">
                {/* Subscribe Box */}
                <div className="bg-white p-6 border-t-4 border-[#88b7b5]">
                  <h3 className="font-baskerville text-xl text-[#4A4A4A] mb-4">
                    S'abonner
                  </h3>
                  <p className="text-sm text-[#5A5A5A] mb-4 leading-relaxed">
                    Rejoignez notre communauté et recevez chaque semaine nos meilleurs conseils. 
                    <span className="text-[#88b7b5]"> Inscrivez-vous</span> maintenant
                  </p>
                  <input
                    type="email"
                    placeholder="Entrez votre email"
                    className="w-full px-4 py-3 border border-gray-200 text-sm mb-3 focus:outline-none focus:border-[#88b7b5]"
                  />
                  <Button className="w-full uppercase tracking-[0.15em] text-xs bg-white text-[#4A4A4A] border border-gray-300 hover:bg-[#88b7b5] hover:text-white hover:border-[#88b7b5] py-3 font-medium transition-all">
                    S'abonner
                  </Button>
                </div>

                {/* Recent Posts */}
                <div>
                  <h3 className="font-baskerville text-xl text-[#4A4A4A] mb-6 pb-2 border-b border-gray-200">
                    Articles Récents
                  </h3>
                  <div className="space-y-4">
                    {recentPosts.map((post, index) => (
                      <Link 
                        key={index}
                        href={`/blog/${post.slug}`}
                        className="flex gap-4 group"
                      >
                        <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h4 className="text-sm text-[#4A4A4A] leading-snug group-hover:text-[#88b7b5] transition-colors font-medium">
                            {post.title}
                          </h4>
                          <p className="text-xs text-[#88b7b5] mt-1 uppercase tracking-wider">
                            {post.date}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#5A5A5A] mb-8">
              ARTICLES SIMILAIRES
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((post, index) => (
                <Link 
                  key={index}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <div className="relative h-48 overflow-hidden mb-4">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-baskerville text-lg text-[#4A4A4A] mb-2 group-hover:text-[#88b7b5] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#88b7b5]">
                    {post.date}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
