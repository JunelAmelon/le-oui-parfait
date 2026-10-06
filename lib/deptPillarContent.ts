import type { IdFDepartment } from '@/app/ile-de-france/_idfData';
import { WEDDING_PLANNER_CITIES } from '@/lib/weddingPlannerCities';
import { IDF_DEPARTMENTS } from '@/app/ile-de-france/_idfData';

export type PillarFaqItem = {
  q: string;
  a: string;
  links?: { label: string; href: string }[];
};

export type MethodBlock = {
  title: string;
  text: string[];
};

export type DeptPillarContent = {
  heroTitle: string;
  heroSubtitle: string;
  eyebrow: string;
  imageAlt: string;
  badge: string;
  introKicker: string;
  introTitle: string;
  intro: string[];
  offersIntro: string;
  territoryTitle: string;
  territorySubtitle: string;
  territoryBefore: string;
  towns: string[];
  territoryAfter: string[];
  sidebarTitle: string;
  sidebarLinks: { label: string; href: string }[];
  methodBlocks: MethodBlock[];
  realisationsTitle: string;
  realisations: { src: string; caption: string }[];
  whyTitle: string;
  whyText: string[];
  ctaText: string;
  faqTitle: string;
  faq: PillarFaqItem[];
  areaServed: string;
};

const IMG = {
  a: '/mariage-r%C3%A9alis%C3%A9s%20(2).jpg',
  b: '/mariage-r%C3%A9alis%C3%A9s%20(3).jpg',
  c: '/mariage-r%C3%A9alis%C3%A9s%20(4).jpg',
  d: '/moment-mariage%20(5).jpg',
  e: '/moment-mariage%20(7).jpg',
  f: '/wedding%20(3).jpg',
};

const Q_DIFF = 'Quelle différence entre organisation complète et coordination Jour J ?';
const Q_STARTED = 'Peut-on faire appel à vous si nous avons déjà commencé notre mariage ?';
const Q_TIMING = 'Combien de temps avant notre mariage devons-nous contacter une Wedding Planner ?';

const CONTENT: Record<string, DeptPillarContent> = {

  /* ============================================================ 91 — ESSONNE */
  '91-essonne': {
    heroTitle: 'Wedding Planner en Essonne (91)',
    heroSubtitle: 'Organisation et coordination de mariage sur mesure en Essonne',
    eyebrow: 'Essonne • Île-de-France',
    imageAlt: 'Mariage en Essonne — Le Oui Parfait',
    badge: 'Showroom à Ris-Orangis — Essonne (91)',
    introKicker: 'Wedding Planner Essonne (91)',
    introTitle: 'Votre Wedding Planner en Essonne, basée à Ris-Orangis',
    intro: [
      'Vous recherchez une Wedding Planner en Essonne pour organiser votre mariage avec sérénité, méthode et élégance ? Basée à Ris-Orangis, l’équipe du Oui Parfait accompagne les futurs mariés dans l’organisation de leur mariage dans l’ensemble de l’Essonne et plus largement en Île-de-France.',
      'De la première réflexion jusqu’au Jour J, nous vous aidons à structurer votre projet, sélectionner les bons prestataires, maîtriser votre budget, construire votre univers et coordonner chaque étape de votre mariage.',
      'Organiser un mariage demande du temps, de l’anticipation et surtout une vision globale. Notre rôle ne consiste pas simplement à vous fournir une liste de prestataires : nous vous accompagnons dans la construction d’un projet cohérent, réalisable et fidèle à vos envies. Chaque mariage étant différent, nous commençons par comprendre votre histoire, vos priorités et le niveau d’accompagnement dont vous avez réellement besoin.',
    ],
    offersIntro: 'De l’organisation complète à la simple coordination du Jour J, chaque formule correspond à un niveau de délégation différent.',
    territoryTitle: 'Organisation de mariage dans toute l’Essonne',
    territorySubtitle: 'Une Wedding Planner pour votre mariage dans le 91',
    territoryBefore:
      'Notre implantation à Ris-Orangis nous permet d’accompagner des mariages dans l’ensemble du département, ainsi que dans les autres communes de l’Essonne.',
    towns: [
      'Ris-Orangis', 'Évry-Courcouronnes', 'Corbeil-Essonnes', 'Viry-Châtillon',
      'Draveil', 'Savigny-sur-Orge', 'Sainte-Geneviève-des-Bois', 'Massy',
      'Palaiseau', 'Arpajon', 'Brétigny-sur-Orge', 'Montlhéry', 'Étampes',
    ],
    territoryAfter: [
      'Nous pouvons également vous accompagner lorsque votre lieu de réception se situe ailleurs en Île-de-France ou lorsque certains prestataires doivent être recherchés en dehors du département.',
      'Cette connaissance du territoire nous permet notamment de faciliter la recherche de lieux, de prestataires et de solutions adaptées à la localisation de votre mariage.',
    ],
    sidebarTitle: 'Wedding planner dans les villes d’Essonne',
    sidebarLinks: WEDDING_PLANNER_CITIES.map((c) => ({ label: c.name, href: `/wedding-planner-${c.slug}` })),
    methodBlocks: [
      {
        title: 'Un accompagnement pensé autour de votre projet',
        text: [
          'Un mariage ne se résume pas à additionner un lieu, un traiteur, un DJ et une décoration. Chaque décision influence les autres : le lieu impacte la logistique, le nombre d’invités influence le budget, le déroulement de la cérémonie conditionne le planning, et la scénographie doit rester cohérente avec l’espace choisi.',
          'C’est pourquoi nous travaillons sur votre mariage dans sa globalité. À partir de vos priorités et de votre budget, nous construisons avec vous une organisation permettant d’avancer dans le bon ordre et d’éviter les décisions prises trop tard ou les dépenses mal anticipées.',
        ],
      },
      {
        title: 'Des prestataires sélectionnés selon votre mariage',
        text: [
          'Trouver un prestataire disponible est relativement simple. Trouver le bon prestataire pour votre projet, votre budget et votre univers demande davantage de travail.',
          'Photographe, vidéaste, DJ, décoration, fleuriste, animations, cérémonie, beauté, transport : les recherches sont réalisées en fonction de votre projet et de la formule choisie. Vous restez décisionnaires — nous sommes là pour vous conseiller, comparer les propositions et faciliter votre choix.',
        ],
      },
      {
        title: 'Une organisation claire jusqu’au Jour J',
        text: [
          'Notre accompagnement est pensé pour vous permettre de savoir où en est votre mariage. Au fil des mois, nous structurons les différentes étapes nécessaires à son organisation et anticipons les échéances importantes.',
          'Plus le Jour J approche, plus le travail de coordination prend de l’importance : confirmation des intervenants, horaires, installation, déroulé, informations pratiques et articulation entre les différents prestataires.',
        ],
      },
      {
        title: 'Votre mariage doit vous ressembler',
        text: [
          'Nous ne souhaitons pas reproduire le même mariage pour tous nos couples. Votre décoration, votre ambiance, votre cérémonie et votre réception doivent raconter quelque chose de vous.',
          'Mariage élégant, romantique, contemporain, chic, coloré, intimiste ou plus spectaculaire : nous construisons notre accompagnement autour de vos envies, puis nous les transformons en décisions concrètes et réalisables.',
        ],
      },
    ],
    realisationsTitle: 'Nos réalisations en Essonne et en Île-de-France',
    realisations: [
      { src: IMG.a, caption: 'Organisation et coordination d’un mariage en Essonne — Le Oui Parfait' },
      { src: IMG.b, caption: 'Scénographie d’un mariage en Île-de-France' },
      { src: IMG.c, caption: 'Coordination Jour J d’un mariage dans le 91' },
      { src: IMG.d, caption: 'Organisation complète d’une réception en Essonne' },
    ],
    whyTitle: 'Pourquoi faire appel à une Wedding Planner en Essonne ?',
    whyText: [
      'Une Wedding Planner peut intervenir bien au-delà du Jour J. Selon la formule choisie, elle peut vous aider à déterminer les priorités de votre organisation, rechercher des prestataires, comparer les propositions, structurer le budget, établir un rétroplanning, préparer les différentes étapes du mariage et coordonner les professionnels impliqués.',
      'Elle apporte également un regard extérieur lorsqu’une décision devient difficile à prendre.',
      'Faire appel à une Wedding Planner ne signifie donc pas perdre le contrôle de son mariage. Au contraire : vous gardez les choix, nous vous aidons à les transformer en organisation.',
    ],
    ctaText:
      'Vous préparez votre mariage en Essonne et souhaitez savoir quelle formule correspond le mieux à votre situation ? Faisons ensemble un premier point sur votre projet, votre date, votre lieu et le nombre d’invités prévu.',
    faqTitle: 'FAQ — Wedding Planner Essonne',
    faq: [
      {
        q: 'Combien coûte une Wedding Planner en Essonne ?',
        a: 'Le prix dépend principalement du niveau d’accompagnement souhaité et de la complexité du mariage. Chez Le Oui Parfait, l’organisation complète avec notre formule Signature est proposée à partir de 3 500 €, tandis que notre accompagnement pour la coordination du Jour J avec Harmonie est proposé à partir de 1 190 €. Une organisation partielle peut également être proposée selon l’avancement de votre mariage.',
        links: [
          { label: 'Voir les tarifs', href: '/tarifs' },
          { label: 'Consultez notre guide complet des tarifs d’une Wedding Planner en Essonne', href: '/wedding-planner-essonne-91-tarifs' },
        ],
      },
      {
        q: 'Dans quelles villes de l’Essonne intervenez-vous ?',
        a: 'Notre showroom est situé à Ris-Orangis et nous accompagnons des mariages dans l’ensemble du département : Évry-Courcouronnes, Massy, Palaiseau, Corbeil-Essonnes, Draveil, Viry-Châtillon, Savigny-sur-Orge, Sainte-Geneviève-des-Bois, Arpajon, Brétigny-sur-Orge, Étampes et plus largement dans tout le 91.',
      },
      {
        q: Q_DIFF,
        a: 'L’organisation complète commence plusieurs mois avant le mariage et couvre la construction et le suivi global du projet. La coordination Jour J intervient lorsque les futurs mariés ont déjà organisé leur mariage mais souhaitent confier la préparation finale et la coordination de la journée à une équipe professionnelle.',
      },
      {
        q: Q_STARTED,
        a: 'Oui. Notre formule Élégance est justement destinée aux couples ayant déjà commencé leurs préparatifs et souhaitant être accompagnés sur les étapes restantes.',
      },
      {
        q: Q_TIMING,
        a: 'Pour une organisation complète, le plus tôt reste généralement le mieux, notamment lorsque le lieu et les principaux prestataires ne sont pas encore réservés. Pour une coordination Jour J, l’accompagnement peut commencer plus tard, selon la disponibilité de l’équipe et la complexité du mariage.',
      },
      {
        q: 'Organisez-vous uniquement des mariages en Essonne ?',
        a: 'Non. Le Oui Parfait intervient également dans les autres départements d’Île-de-France et peut accompagner des projets dans d’autres régions ou des mariages nécessitant des déplacements.',
      },
    ],
    areaServed: 'Essonne',
  },

  /* ============================================================ 75 — PARIS */
  '75-paris': {
    heroTitle: 'Wedding Planner à Paris (75)',
    heroSubtitle: 'Organisation et coordination de mariage sur mesure à Paris',
    eyebrow: 'Paris • Île-de-France',
    imageAlt: 'Mariage à Paris — Le Oui Parfait',
    badge: 'Showroom à Ris-Orangis — mariages organisés à Paris',
    introKicker: 'Wedding Planner Paris (75)',
    introTitle: 'Votre Wedding Planner pour un mariage à Paris',
    intro: [
      'Hôtel particulier, rooftop avec vue sur les toits, péniche, salle atypique ou lieu patrimonial : Paris offre une variété de décors immense pour un mariage — et tout autant de contraintes très spécifiques. L’équipe du Oui Parfait accompagne les futurs mariés dans l’organisation de leur mariage dans la capitale et dans toute l’Île-de-France.',
      'De la première réflexion jusqu’au Jour J, nous vous aidons à structurer votre projet, comparer les lieux, sélectionner les prestataires, maîtriser votre budget et coordonner chaque étape — y compris la logistique propre aux mariages parisiens : accès, livraisons, horaires et installation.',
      'Organiser un mariage à Paris demande de l’anticipation : les beaux lieux se réservent tôt et les créneaux de montage sont souvent serrés. Nous commençons par comprendre votre histoire, vos priorités et vos envies pour construire avec vous un projet cohérent, réalisable et fidèle à votre vision.',
    ],
    offersIntro: 'Mariage intimiste dans une cour cachée ou grande réception parisienne : trois niveaux d’accompagnement selon l’avancement de votre projet.',
    territoryTitle: 'Organisation de mariage dans tout Paris',
    territorySubtitle: 'Une Wedding Planner pour votre mariage dans le 75',
    territoryBefore:
      'Nous organisons des mariages dans toute la capitale : réceptions en hôtel particulier, dîners en rooftop, cérémonies dans des lieux patrimoniaux ou espaces privatisés. Nous intervenons dans tous les arrondissements, notamment :',
    towns: ['Paris 1er', 'Paris 4e', 'Paris 7e', 'Paris 8e', 'Paris 11e', 'Paris 14e', 'Paris 15e', 'Paris 16e', 'Paris 17e', 'Paris 18e', 'Paris 19e', 'Paris 20e'],
    territoryAfter: [
      'Nous accompagnons également les couples parisiens dont la réception se déroule hors de Paris : domaine en Seine-et-Marne, propriété dans les Yvelines ou mariage en province.',
      'Cette double connaissance — lieux parisiens et prestataires franciliens — nous permet de construire une organisation adaptée aux contraintes de la capitale comme aux envies d’ailleurs.',
    ],
    sidebarTitle: 'Wedding planner dans les autres départements',
    sidebarLinks: [],
    methodBlocks: [
      {
        title: 'Une organisation pensée pour les contraintes parisiennes',
        text: [
          'Un mariage à Paris ne s’organise pas comme un mariage à la campagne : fenêtres de montage limitées, accès étroits pour les livraisons, horaires imposés par les lieux, stationnement des prestataires. Chaque détail logistique a un impact direct sur le déroulement de la journée.',
          'Nous anticipons ces contraintes dès la conception : rétroplanning réaliste, coordination des livraisons, plan de circulation pour vos invités. L’objectif : une journée fluide, même dans le lieu le plus exigeant.',
        ],
      },
      {
        title: 'Des prestataires choisis pour votre projet, pas au hasard',
        text: [
          'Paris concentre énormément de professionnels du mariage — c’est une chance, mais le choix devient vite épuisant. Comparer un photographe, un traiteur ou un DJ ne se résume pas à lire un tarif affiché.',
          'Nous vous proposons des prestataires adaptés à votre lieu, votre budget et votre univers : fleuriste, vidéaste, musiciens, décoration, beauté, transport. Vous restez décisionnaires ; nous préparons le comparatif et vous conseillons.',
        ],
      },
      {
        title: 'Un fil conducteur clair jusqu’au Jour J',
        text: [
          'Au fil des mois, nous structurons les étapes de votre organisation : vous savez toujours ce qui est validé, ce qui reste à trancher et quelles sont les prochaines échéances.',
          'À l’approche du jour J, la coordination devient centrale : confirmation des intervenants, horaires précis, installation, déroulé détaillé et articulation entre les différents lieux — cérémonie, vin d’honneur, réception.',
        ],
      },
      {
        title: 'Un mariage parisien qui vous ressemble',
        text: [
          'Chic haussmannien, contemporain, intimiste dans une cour cachée ou réception spectaculaire face aux toits de Paris : nous ne reproduisons jamais le même mariage d’un couple à l’autre.',
          'Votre scénographie, votre ambiance et vos cérémonies racontent votre histoire. Notre rôle est de transformer vos envies en décisions concrètes et réalisables, dans le respect de votre budget.',
        ],
      },
    ],
    realisationsTitle: 'Nos réalisations à Paris et en Île-de-France',
    realisations: [
      { src: IMG.b, caption: 'Scénographie d’un mariage en Île-de-France' },
      { src: IMG.a, caption: 'Organisation et coordination de mariage — Le Oui Parfait' },
      { src: IMG.c, caption: 'Coordination Jour J d’un mariage à Paris' },
      { src: IMG.d, caption: 'Organisation complète d’une réception en Île-de-France' },
    ],
    whyTitle: 'Pourquoi faire appel à une Wedding Planner à Paris ?',
    whyText: [
      'À Paris, l’offre est abondante — presque trop. Une Wedding Planner vous aide à comparer objectivement des lieux, des traiteurs et des devis qui ne se lisent pas tous de la même façon.',
      'Elle vous fait aussi gagner un temps considérable : rendez-vous ciblés au lieu de visites en cascade, budget réparti entre les postes et calendrier d’organisation respecté.',
      'Faire appel à une Wedding Planner ne signifie pas perdre le contrôle de votre mariage : vous gardez les choix, nous les transformons en organisation.',
    ],
    ctaText:
      'Vous préparez votre mariage à Paris et souhaitez savoir quelle formule correspond le mieux à votre situation ? Faisons un premier point ensemble sur votre projet, votre date, votre lieu et le nombre d’invités prévu.',
    faqTitle: 'FAQ — Wedding Planner Paris',
    faq: [
      {
        q: 'Combien coûte une Wedding Planner à Paris ?',
        a: 'Le tarif dépend du niveau d’accompagnement et de la complexité du mariage. Chez Le Oui Parfait, la coordination du Jour J avec notre formule Harmonie débute à 1 190 € et l’organisation complète avec Signature à partir de 3 500 €. Une organisation partielle peut aussi être construite selon l’avancement de votre projet.',
        links: [{ label: 'Voir les tarifs', href: '/tarifs' }],
      },
      {
        q: 'Intervenez-vous dans tous les arrondissements de Paris ?',
        a: 'Oui. Basés à Ris-Orangis en Essonne, nous organisons et coordonnons des mariages dans tous les arrondissements de Paris, ainsi que dans toute l’Île-de-France selon votre lieu de réception.',
      },
      {
        q: Q_DIFF,
        a: 'L’organisation complète débute plusieurs mois en amont et couvre l’ensemble du projet, du lieu au déroulé final. La coordination Jour J s’adresse aux couples qui ont tout organisé eux-mêmes et veulent simplement confier la gestion de la journée à des professionnels.',
      },
      {
        q: Q_STARTED,
        a: 'Bien sûr. Beaucoup de couples nous contactent après avoir déjà réservé leur lieu ou certains prestataires. Notre formule Élégance reprend votre projet là où vous en êtes, sans repartir de zéro.',
      },
      {
        q: Q_TIMING,
        a: 'Pour une organisation complète à Paris, il est conseillé de nous contacter tôt : les lieux recherchés partent parfois plus d’un an à l’avance. Pour une coordination Jour J, quelques mois suffisent généralement, selon nos disponibilités.',
      },
      {
        q: 'Organisez-vous des mariages en dehors de Paris ?',
        a: 'Oui. Le Oui Parfait intervient dans toute l’Île-de-France et peut accompagner des projets ailleurs en France ou nécessitant des déplacements.',
      },
    ],
    areaServed: 'Paris',
  },

  /* ==================================================== 77 — SEINE-ET-MARNE */
  '77-seine-et-marne': {
    heroTitle: 'Wedding Planner en Seine-et-Marne (77)',
    heroSubtitle: 'Organisation et coordination de mariage sur mesure en Seine-et-Marne',
    eyebrow: 'Seine-et-Marne • Île-de-France',
    imageAlt: 'Mariage en Seine-et-Marne — Le Oui Parfait',
    badge: 'Showroom à Ris-Orangis — mariages dans tout le 77',
    introKicker: 'Wedding Planner Seine-et-Marne (77)',
    introTitle: 'Votre Wedding Planner pour un mariage en Seine-et-Marne',
    intro: [
      'Domaines de caractère, châteaux, fermes rénovées et grandes propriétés avec parc : la Seine-et-Marne est l’un des départements les plus prisés d’Île-de-France pour les mariages champêtres et élégants. Depuis son showroom de Ris-Orangis, l’équipe du Oui Parfait y accompagne les futurs mariés dans toute l’organisation de leur journée.',
      'Un mariage en domaine demande une logistique particulière : traiteur externalisé, installations, mobilier, hébergement des invités, déplacements entre cérémonie et réception. Nous pilotons ces éléments avec vous, de la première visite jusqu’au Jour J.',
      'Notre rôle n’est pas de vous remettre une liste de prestataires : nous construisons avec vous un projet cohérent et réalisable, en commençant par comprendre votre histoire, vos priorités et le niveau d’accompagnement dont vous avez réellement besoin.',
    ],
    offersIntro: 'Mariage dans un domaine du 77 ou réception plus intimiste : trois niveaux d’accompagnement selon l’avancement de votre projet.',
    territoryTitle: 'Organisation de mariage dans toute la Seine-et-Marne',
    territorySubtitle: 'Une Wedding Planner pour votre mariage dans le 77',
    territoryBefore:
      'La Seine-et-Marne offre une belle diversité de lieux de réception : domaines autour de Fontainebleau et de Provins, fermes rénovées, châteaux et propriétés avec parc. Nous intervenons dans tout le département, notamment :',
    towns: ['Fontainebleau', 'Melun', 'Meaux', 'Provins', 'Coulommiers', 'Serris', 'Torcy', 'Lagny-sur-Marne', 'Chelles', 'Nemours', 'Montereau-Fault-Yonne', 'Brie-Comte-Robert', 'Pontault-Combault'],
    territoryAfter: [
      'Les mariages dans le 77 impliquent souvent de vraies distances entre la cérémonie, le vin d’honneur et la réception : nous organisons en amont les déplacements de vos invités comme de vos prestataires.',
      'Votre lieu de réception se situe dans un autre département ? Nous vous accompagnons partout en Île-de-France et au-delà.',
    ],
    sidebarTitle: 'Wedding planner dans les autres départements',
    sidebarLinks: [],
    methodBlocks: [
      {
        title: 'Un accompagnement pensé pour les mariages en domaine',
        text: [
          'Contrairement à une salle des fêtes ou un restaurant, un domaine livre souvent des murs magnifiques… et rien d’autre. Traiteur, mobilier, tente de secours, énergie, signalétique : tout doit être pensé et apporté.',
          'Nous construisons avec vous cette organisation de A à Z, pour que la beauté du lieu se transforme en une réception qui fonctionne réellement, sans mauvaise surprise logistique.',
        ],
      },
      {
        title: 'Des prestataires qui savent se déplacer',
        text: [
          'Tous les professionnels ne se déplacent pas en Seine-et-Marne, et certains facturent le trajet. Nous sélectionnons des prestataires fiables, habitués aux mariages en domaine et compatibles avec votre budget.',
          'Photographe, traiteur, DJ, fleuriste, décoration, animations, navettes : les recherches sont menées selon votre projet. Vous restez décisionnaires, nous vous aidons à comparer.',
        ],
      },
      {
        title: 'Une organisation claire, du premier rendez-vous au Jour J',
        text: [
          'Au fil des mois, nous structurons les étapes de votre mariage et anticipons les échéances : vous savez toujours où en est le projet, ce qui est réservé et ce qui reste à arbitrer.',
          'À l’approche du jour J, nous verrouillons la coordination : confirmation des intervenants, horaires d’installation, déroulé de la journée et articulation entre tous les prestataires sur place.',
        ],
      },
      {
        title: 'Un mariage qui raconte votre histoire',
        text: [
          'Champêtre chic, romantique, guinguette élégante ou réception très codifiée : nous ne reproduisons pas le même mariage d’un couple à l’autre, même dans le même lieu.',
          'Votre ambiance, votre décoration et vos cérémonies doivent raconter quelque chose de vous. Nous transformons ces envies en choix concrets et réalisables.',
        ],
      },
    ],
    realisationsTitle: 'Nos réalisations en Seine-et-Marne et en Île-de-France',
    realisations: [
      { src: IMG.a, caption: 'Organisation et coordination de mariage — Le Oui Parfait' },
      { src: IMG.b, caption: 'Scénographie d’un mariage en domaine en Île-de-France' },
      { src: IMG.c, caption: 'Coordination Jour J d’un mariage dans le 77' },
      { src: IMG.d, caption: 'Organisation complète d’une réception champêtre' },
    ],
    whyTitle: 'Pourquoi faire appel à une Wedding Planner en Seine-et-Marne ?',
    whyText: [
      'Un domaine magnifique peut cacher une logistique lourde : aucun traiteur imposé, aucun mobilier fourni, horaires de montage stricts. Une Wedding Planner transforme un beau lieu en une réception qui fonctionne — et vous évite les erreurs coûteuses.',
      'Elle coordonne aussi ce que l’on ne voit pas : les déplacements entre les lieux, les horaires de chaque intervenant, la gestion des imprévus le jour J.',
      'Faire appel à une Wedding Planner ne signifie pas perdre la main sur votre mariage : vous gardez les décisions, nous portons l’organisation.',
    ],
    ctaText:
      'Vous préparez votre mariage en Seine-et-Marne et souhaitez savoir quelle formule correspond le mieux à votre situation ? Faisons un premier point sur votre projet, votre date, votre lieu et le nombre d’invités.',
    faqTitle: 'FAQ — Wedding Planner Seine-et-Marne',
    faq: [
      {
        q: 'Combien coûte une Wedding Planner en Seine-et-Marne ?',
        a: 'Le tarif dépend du niveau d’accompagnement et de la complexité du mariage — un domaine nécessitant tout l’équipement demande plus de préparation. Chez Le Oui Parfait, la coordination Jour J avec Harmonie débute à 1 190 € et l’organisation complète avec Signature à partir de 3 500 €.',
        links: [{ label: 'Voir les tarifs', href: '/tarifs' }],
      },
      {
        q: 'Dans quelles villes de Seine-et-Marne intervenez-vous ?',
        a: 'Nous accompagnons des mariages dans tout le 77 : Fontainebleau, Melun, Meaux, Provins, Coulommiers, Torcy, Nemours, Brie-Comte-Robert et dans les domaines situés entre les communes.',
      },
      {
        q: Q_DIFF,
        a: 'L’organisation complète couvre tout le projet sur plusieurs mois — recherche du domaine, prestataires, budget, logistique. La coordination Jour J reprend une organisation déjà faite pour en assurer le bon déroulement le jour du mariage.',
      },
      {
        q: Q_STARTED,
        a: 'Oui, c’est même très fréquent : lieu trouvé, traiteur réservé, mais le reste à organiser. Notre formule Élégance reprend votre projet là où vous en êtes.',
      },
      {
        q: Q_TIMING,
        a: 'Pour un mariage en domaine dans le 77, anticipez : les beaux lieux se réservent souvent un an à l’avance. Une coordination Jour J peut se prévoir plus tardivement, selon nos disponibilités.',
      },
      {
        q: 'Organisez-vous des mariages hors de Seine-et-Marne ?',
        a: 'Oui. Basés en Essonne, nous intervenons dans tous les départements d’Île-de-France et pouvons suivre des projets dans d’autres régions.',
      },
    ],
    areaServed: 'Seine-et-Marne',
  },

  /* ======================================================== 78 — YVELINES */
  '78-yvelines': {
    heroTitle: 'Wedding Planner dans les Yvelines (78)',
    heroSubtitle: 'Organisation et coordination de mariage sur mesure dans les Yvelines',
    eyebrow: 'Yvelines • Île-de-France',
    imageAlt: 'Mariage dans les Yvelines — Le Oui Parfait',
    badge: 'Showroom à Ris-Orangis — mariages dans tout le 78',
    introKicker: 'Wedding Planner Yvelines (78)',
    introTitle: 'Votre Wedding Planner pour un mariage dans les Yvelines',
    intro: [
      'Orangeries, propriétés avec parc, domaines historiques et belles demeures de l’ouest parisien : les Yvelines sont une terre de mariages élégants. Depuis notre showroom de Ris-Orangis, l’équipe du Oui Parfait accompagne les futurs mariés dans l’organisation de leur journée dans tout le 78.',
      'De la structuration du projet à la coordination du jour J, nous vous aidons à sélectionner les bons prestataires, maîtriser votre budget et construire une réception à la hauteur du lieu choisi — de Versailles à la vallée de Chevreuse.',
      'Chaque projet commence par l’écoute : votre histoire, vos priorités, votre niveau de délégation souhaité. Nous construisons ensuite avec vous une organisation cohérente et réalisable, étape par étape.',
    ],
    offersIntro: 'Réception dans une grande propriété ou mariage intimiste : trois niveaux d’accompagnement selon l’avancement de votre projet.',
    territoryTitle: 'Organisation de mariage dans tous les Yvelines',
    territorySubtitle: 'Une Wedding Planner pour votre mariage dans le 78',
    territoryBefore:
      'Nous accompagnons des mariages dans tout le département, des grandes villes aux propriétés nichées dans la vallée de Chevreuse ou le parc naturel régional :',
    towns: ['Versailles', 'Saint-Germain-en-Laye', 'Rambouillet', 'Poissy', 'Montigny-le-Bretonneux', 'Conflans-Sainte-Honorine', 'Mantes-la-Jolie', 'Sartrouville', 'Les Mureaux', 'Maisons-Laffitte', 'Houilles', 'Le Chesnay-Rocquencourt', 'Plaisir'],
    territoryAfter: [
      'Votre réception se déroule dans un autre département, ou vos invités viennent de toute la région ? Nous coordonnons également les déplacements et les logements quand cela est nécessaire.',
      'Cette connaissance des lieux de l’ouest parisien nous permet de vous orienter vers des prestataires et des solutions adaptés à votre mariage.',
    ],
    sidebarTitle: 'Wedding planner dans les autres départements',
    sidebarLinks: [],
    methodBlocks: [
      {
        title: 'Un accompagnement construit autour de votre lieu',
        text: [
          'Dans les Yvelines, le lieu donne souvent le ton du mariage : orangerie, château, propriété avec parc. Chacun impose ses règles — horaires, prestataires agréés, plan B en cas de pluie.',
          'Nous partons de votre lieu pour construire une organisation cohérente : capacité réelle, logistique, budget réparti entre les postes et déroulé adapté aux espaces.',
        ],
      },
      {
        title: 'Des prestataires à la hauteur de votre réception',
        text: [
          'Une belle propriété mérite des prestataires à la hauteur : traiteur, décorateur, fleuriste, musiciens. Nous sélectionnons des professionnels fiables, alignés avec votre univers et votre budget.',
          'Vous ne recevez pas un annuaire mais une sélection argumentée. Vous restez décisionnaires ; nous vous aidons à comparer les propositions et à trancher.',
        ],
      },
      {
        title: 'Une organisation lisible jusqu’au Jour J',
        text: [
          'Mois après mois, nous structurons les étapes et anticipons les échéances : vous savez à tout moment ce qui est validé et ce qui reste à organiser.',
          'À l’approche du mariage, la coordination prend le relais : confirmation des intervenants, horaires d’installation, déroulé précis et articulation de tous les prestataires le jour J.',
        ],
      },
      {
        title: 'Un mariage à votre image, pas un copier-coller',
        text: [
          'Élégance classique, esprit garden party, réception très contemporaine : votre mariage doit vous ressembler, pas ressembler à celui du couple précédent dans le même lieu.',
          'Nous construisons la scénographie et l’ambiance autour de vos envies, puis nous les traduisons en décisions concrètes et réalisables.',
        ],
      },
    ],
    realisationsTitle: 'Nos réalisations dans les Yvelines et en Île-de-France',
    realisations: [
      { src: IMG.b, caption: 'Scénographie d’un mariage élégant en Île-de-France' },
      { src: IMG.a, caption: 'Organisation et coordination de mariage — Le Oui Parfait' },
      { src: IMG.c, caption: 'Coordination Jour J d’un mariage dans le 78' },
      { src: IMG.d, caption: 'Organisation complète d’une réception en Île-de-France' },
    ],
    whyTitle: 'Pourquoi faire appel à une Wedding Planner dans les Yvelines ?',
    whyText: [
      'Les beaux lieux des Yvelines représentent souvent un budget important : une Wedding Planner vous aide à prioriser les postes de dépense et à éviter les mauvaises surprises contractuelles — horaires supplémentaires, prestataires imposés, cautions.',
      'Elle structure aussi tout ce que le lieu ne gère pas : coordination des prestataires, déroulé de la journée, gestion des imprévus.',
      'Faire appel à une Wedding Planner, ce n’est pas perdre la main : vous gardez les décisions, nous portons l’organisation.',
    ],
    ctaText:
      'Vous préparez votre mariage dans les Yvelines et souhaitez savoir quelle formule correspond le mieux à votre situation ? Faisons un premier point sur votre projet, votre date et votre lieu.',
    faqTitle: 'FAQ — Wedding Planner Yvelines',
    faq: [
      {
        q: 'Combien coûte une Wedding Planner dans les Yvelines ?',
        a: 'Le tarif dépend de la formule et de la complexité du mariage. Chez Le Oui Parfait : coordination Jour J avec Harmonie à partir de 1 190 €, organisation complète avec Signature à partir de 3 500 €, et organisation partielle selon l’avancement de votre projet.',
        links: [{ label: 'Voir les tarifs', href: '/tarifs' }],
      },
      {
        q: 'Dans quelles villes des Yvelines intervenez-vous ?',
        a: 'Dans tout le 78 : Versailles, Saint-Germain-en-Laye, Rambouillet, Poissy, Conflans-Sainte-Honorine, Mantes-la-Jolie et les domaines situés dans les communes plus petites.',
      },
      {
        q: Q_DIFF,
        a: 'L’organisation complète accompagne le projet sur plusieurs mois, du choix du lieu au déroulé final. La coordination Jour J est faite pour les couples qui ont tout préparé eux-mêmes et veulent déléguer la gestion de la journée.',
      },
      {
        q: Q_STARTED,
        a: 'Oui. Si votre domaine est déjà réservé ou si certains prestataires sont choisis, notre formule Élégance reprend votre projet en cours et se concentre sur ce qui reste à organiser.',
      },
      {
        q: Q_TIMING,
        a: 'Les propriétés prisées des Yvelines se réservent tôt : pour une organisation complète, contactez-nous idéalement 10 à 14 mois avant. La coordination Jour J peut se prévoir quelques mois avant, selon disponibilité.',
      },
      {
        q: 'Organisez-vous des mariages hors des Yvelines ?',
        a: 'Oui. Nous intervenons dans toute l’Île-de-France et pouvons accompagner des mariages dans d’autres régions.',
      },
    ],
    areaServed: 'Yvelines',
  },

  /* =================================================== 92 — HAUTS-DE-SEINE */
  '92-hauts-de-seine': {
    heroTitle: 'Wedding Planner dans les Hauts-de-Seine (92)',
    heroSubtitle: 'Organisation et coordination de mariage sur mesure dans les Hauts-de-Seine',
    eyebrow: 'Hauts-de-Seine • Île-de-France',
    imageAlt: 'Mariage dans les Hauts-de-Seine — Le Oui Parfait',
    badge: 'Showroom à Ris-Orangis — mariages dans tout le 92',
    introKicker: 'Wedding Planner Hauts-de-Seine (92)',
    introTitle: 'Votre Wedding Planner pour un mariage dans les Hauts-de-Seine',
    intro: [
      'Rooftops avec vue, lieux contemporains, demeures en bord de Seine et espaces atypiques : les Hauts-de-Seine offrent des décors de mariage variés à quelques minutes de Paris. L’équipe du Oui Parfait accompagne les futurs mariés du 92, depuis son showroom de Ris-Orangis.',
      'De la première réflexion à la coordination du jour J, nous vous aidons à structurer votre projet : choix du lieu, sélection des prestataires, maîtrise du budget et construction d’un déroulé fluide pour vos invités.',
      'Comme pour chaque mariage, nous commençons par comprendre votre histoire et vos priorités — puis nous construisons avec vous une organisation cohérente, réalisable et fidèle à vos envies.',
    ],
    offersIntro: 'Rooftop, espace contemporain ou belle demeure : trois niveaux d’accompagnement selon l’avancement de votre projet.',
    territoryTitle: 'Organisation de mariage dans tous les Hauts-de-Seine',
    territorySubtitle: 'Une Wedding Planner pour votre mariage dans le 92',
    territoryBefore:
      'Nous intervenons dans tout le département, des villes de la première couronne aux communes en bord de Seine :',
    towns: ['Boulogne-Billancourt', 'Nanterre', 'Neuilly-sur-Seine', 'Courbevoie', 'Issy-les-Moulineaux', 'Levallois-Perret', 'Rueil-Malmaison', 'Colombes', 'Asnières-sur-Seine', 'Suresnes', 'Antony', 'Clamart', 'Clichy'],
    territoryAfter: [
      'Vous habitez le 92 mais votre réception se déroule ailleurs — Paris, domaine en Seine-et-Marne, propriété en province ? Nous vous accompagnons où que soit le lieu.',
      'Notre connaissance des prestataires franciliens nous permet de construire des équipes adaptées à chaque lieu et à chaque budget.',
    ],
    sidebarTitle: 'Wedding planner dans les autres départements',
    sidebarLinks: [],
    methodBlocks: [
      {
        title: 'Un accompagnement pensé pour les lieux du 92',
        text: [
          'Rooftops, espaces événementiels, maisons avec jardin : chaque type de lieu des Hauts-de-Seine a ses propres contraintes — capacité, horaires, traiteur imposé ou libre choix des prestataires.',
          'Nous construisons l’organisation autour de ces spécificités : rétroplanning réaliste, budget réparti et déroulé adapté à vos espaces de cérémonie et de réception.',
        ],
      },
      {
        title: 'Des prestataires alignés avec votre univers',
        text: [
          'La densité de professionnels en petite couronne est un atout… et un casse-tête. Nous vous proposons une sélection ciblée de prestataires fiables plutôt qu’une liste interminable à trier.',
          'Traiteur, photographe, DJ, fleuriste, vidéaste, décoration : les recherches suivent votre projet et votre budget. Vous tranchez, nous vous aidons à comparer.',
        ],
      },
      {
        title: 'Une organisation claire jusqu’au Jour J',
        text: [
          'Au fil des mois, nous structurons les étapes : vous savez toujours où en est votre mariage, ce qui est validé et ce qui reste à trancher.',
          'À l’approche du jour J, nous verrouillons la coordination : intervenants confirmés, horaires d’installation, déroulé détaillé et gestion des ajustements en coulisses.',
        ],
      },
      {
        title: 'Un mariage qui vous ressemble vraiment',
        text: [
          'Réception contemporaine, ambiance rooftop au coucher du soleil ou dîner élégant : nous ne reproduisons pas le même mariage deux fois.',
          'Votre décoration, votre ambiance et vos cérémonies racontent votre histoire. Nous transformons vos envies en décisions concrètes et réalisables.',
        ],
      },
    ],
    realisationsTitle: 'Nos réalisations dans les Hauts-de-Seine et en Île-de-France',
    realisations: [
      { src: IMG.a, caption: 'Organisation et coordination de mariage — Le Oui Parfait' },
      { src: IMG.b, caption: 'Scénographie d’un mariage en Île-de-France' },
      { src: IMG.c, caption: 'Coordination Jour J d’un mariage dans le 92' },
      { src: IMG.d, caption: 'Organisation complète d’une réception en Île-de-France' },
    ],
    whyTitle: 'Pourquoi faire appel à une Wedding Planner dans les Hauts-de-Seine ?',
    whyText: [
      'Entre les lieux aux prestations très encadrées et ceux où tout est à organiser, comparer les options du 92 demande du temps. Une Wedding Planner vous aide à trancher avec une vision claire des coûts réels.',
      'Elle coordonne ensuite ce que personne d’autre ne pilote : le déroulé, les horaires de chaque intervenant et les imprévus du jour J.',
      'Vous gardez toutes les décisions — nous transformons vos choix en une organisation qui tient la route.',
    ],
    ctaText:
      'Vous préparez votre mariage dans les Hauts-de-Seine et souhaitez savoir quelle formule correspond le mieux à votre situation ? Faisons un premier point sur votre projet, votre date et votre lieu.',
    faqTitle: 'FAQ — Wedding Planner Hauts-de-Seine',
    faq: [
      {
        q: 'Combien coûte une Wedding Planner dans les Hauts-de-Seine ?',
        a: 'Selon le niveau d’accompagnement : coordination Jour J avec Harmonie à partir de 1 190 €, organisation complète avec Signature à partir de 3 500 €, et organisation partielle étudiée selon l’avancement de votre mariage.',
        links: [{ label: 'Voir les tarifs', href: '/tarifs' }],
      },
      {
        q: 'Dans quelles villes des Hauts-de-Seine intervenez-vous ?',
        a: 'Dans tout le 92 : Boulogne-Billancourt, Nanterre, Neuilly, Courbevoie, Issy-les-Moulineaux, Levallois-Perret, Rueil-Malmaison, Colombes et les communes voisines.',
      },
      {
        q: Q_DIFF,
        a: 'L’organisation complète suit le projet pendant plusieurs mois, du lieu jusqu’au jour J. La coordination Jour J s’adresse aux couples qui ont tout organisé seuls et veulent simplement déléguer la gestion de la journée.',
      },
      {
        q: Q_STARTED,
        a: 'Oui. La formule Élégance est conçue pour reprendre un projet déjà avancé : on fait le point sur ce qui est fait et ce qui reste, sans tout recommencer.',
      },
      {
        q: Q_TIMING,
        a: 'Pour une organisation complète, le plus tôt est le mieux — surtout si le lieu n’est pas encore réservé. Pour une coordination Jour J, quelques mois d’anticipation suffisent selon la complexité.',
      },
      {
        q: 'Organisez-vous des mariages hors des Hauts-de-Seine ?',
        a: 'Oui, dans toute l’Île-de-France et au-delà selon les projets.',
      },
    ],
    areaServed: 'Hauts-de-Seine',
  },

  /* ================================================= 93 — SEINE-SAINT-DENIS */
  '93-seine-saint-denis': {
    heroTitle: 'Wedding Planner en Seine-Saint-Denis (93)',
    heroSubtitle: 'Organisation et coordination de mariage sur mesure en Seine-Saint-Denis',
    eyebrow: 'Seine-Saint-Denis • Île-de-France',
    imageAlt: 'Mariage en Seine-Saint-Denis — Le Oui Parfait',
    badge: 'Showroom à Ris-Orangis — mariages dans tout le 93',
    introKicker: 'Wedding Planner Seine-Saint-Denis (93)',
    introTitle: 'Votre Wedding Planner pour un mariage en Seine-Saint-Denis',
    intro: [
      'La Seine-Saint-Denis réserve de belles surprises aux futurs mariés : grandes salles accessibles, lieux atypiques, espaces verts et lieux patrimoniaux, le tout à deux pas de Paris. L’équipe du Oui Parfait accompagne les couples du 93 dans l’organisation complète ou partielle de leur mariage.',
      'Mariage de grande famille, réception multiculturelle ou célébration intimiste : nous vous aidons à structurer le projet, sélectionner les prestataires adaptés, maîtriser le budget et coordonner chaque étape jusqu’au Jour J.',
      'Notre approche commence toujours par l’écoute de votre histoire et de vos priorités, pour construire une organisation qui ressemble à votre mariage — pas à un autre.',
    ],
    offersIntro: 'Grande réception de famille ou mariage intimiste : trois niveaux d’accompagnement selon l’avancement de votre projet.',
    territoryTitle: 'Organisation de mariage dans toute la Seine-Saint-Denis',
    territorySubtitle: 'Une Wedding Planner pour votre mariage dans le 93',
    territoryBefore:
      'Nous intervenons dans tout le département, des communes proches de Paris aux villes plus résidentielles du nord-est francilien :',
    towns: ['Saint-Denis', 'Montreuil', 'Pantin', 'Aubervilliers', 'Noisy-le-Grand', 'Bobigny', 'Aulnay-sous-Bois', 'Drancy', 'Bondy', 'Sevran', 'Livry-Gargan', 'Le Raincy', 'Villepinte'],
    territoryAfter: [
      'Votre lieu de réception se situe dans un autre département, ou votre mariage rassemble des invités venus de loin ? Nous coordonnons les déplacements et les imprévus logistiques en amont.',
      'Nous vous accompagnons également partout en Île-de-France lorsque le lieu choisi se trouve hors du 93.',
    ],
    sidebarTitle: 'Wedding planner dans les autres départements',
    sidebarLinks: [],
    methodBlocks: [
      {
        title: 'Un accompagnement adapté à votre mariage, quelle que soit sa taille',
        text: [
          'Un mariage de 200 invités ne s’organise pas comme un dîner de 40 personnes : traiteur adapté, plan de tables, coordination familiale, gestion des flux. Nous calibrons l’organisation sur votre projet réel.',
          'Mariages de grande famille ou célébrations qui mélangent plusieurs traditions : nous construisons un déroulé qui respecte vos moments forts et vos priorités.',
        ],
      },
      {
        title: 'Des prestataires fiables, pour tous les budgets',
        text: [
          'Un beau mariage ne dépend pas uniquement du budget : il dépend surtout de bonnes décisions. Nous vous proposons des prestataires fiables et adaptés à votre enveloppe comme à votre univers.',
          'Traiteur, photographe, DJ, décoration, animations, tenues : vous restez décisionnaires, nous préparons des comparaisons claires pour choisir sereinement.',
        ],
      },
      {
        title: 'Une organisation claire jusqu’au Jour J',
        text: [
          'Nous structurons les étapes mois après mois : ce qui est réservé, ce qui reste à trancher, les échéances à venir. Vous savez toujours où en est votre mariage.',
          'À l’approche du jour J, la coordination devient centrale : confirmation des intervenants, horaires, installation et déroulé détaillé de la journée.',
        ],
      },
      {
        title: 'Un mariage qui célèbre votre histoire',
        text: [
          'Traditions familiales, cérémonies symboliques, ambiance festive ou plus solennelle : votre mariage doit raconter qui vous êtes.',
          'Nous construisons la scénographie et le déroulé autour de ce qui compte pour vous, puis nous transformons ces envies en organisation concrète.',
        ],
      },
    ],
    realisationsTitle: 'Nos réalisations en Seine-Saint-Denis et en Île-de-France',
    realisations: [
      { src: IMG.a, caption: 'Organisation et coordination de mariage — Le Oui Parfait' },
      { src: IMG.b, caption: 'Scénographie d’un mariage en Île-de-France' },
      { src: IMG.c, caption: 'Coordination Jour J d’un mariage dans le 93' },
      { src: IMG.d, caption: 'Organisation complète d’une réception en Île-de-France' },
    ],
    whyTitle: 'Pourquoi faire appel à une Wedding Planner en Seine-Saint-Denis ?',
    whyText: [
      'Entre les lieux aux formules très encadrées et ceux où tout est à construire, les options du 93 sont variées. Une Wedding Planner vous aide à comparer les coûts réels et à répartir le budget là où il compte.',
      'Pour les mariages de grande famille ou les célébrations multiculturelles, elle sécurise aussi la coordination des nombreux intervenants et des temps forts de la journée.',
      'Vous gardez toutes les décisions : nous portons l’organisation pour que vous viviez votre journée.',
    ],
    ctaText:
      'Vous préparez votre mariage en Seine-Saint-Denis et souhaitez savoir quelle formule correspond le mieux à votre situation ? Faisons un premier point sur votre projet, votre date et votre lieu.',
    faqTitle: 'FAQ — Wedding Planner Seine-Saint-Denis',
    faq: [
      {
        q: 'Combien coûte une Wedding Planner en Seine-Saint-Denis ?',
        a: 'Le prix dépend de la formule et de l’ampleur du mariage. Chez Le Oui Parfait : coordination Jour J avec Harmonie à partir de 1 190 €, organisation complète avec Signature à partir de 3 500 €, organisation partielle selon l’avancement du projet.',
        links: [{ label: 'Voir les tarifs', href: '/tarifs' }],
      },
      {
        q: 'Dans quelles villes de Seine-Saint-Denis intervenez-vous ?',
        a: 'Dans tout le 93 : Saint-Denis, Montreuil, Pantin, Aubervilliers, Noisy-le-Grand, Bobigny, Aulnay-sous-Bois, Drancy, Bondy, Sevran et les communes alentour.',
      },
      {
        q: Q_DIFF,
        a: 'L’organisation complète couvre la construction du mariage sur plusieurs mois. La coordination Jour J s’adresse aux couples qui ont tout préparé seuls et veulent confier la gestion de la journée à une équipe.',
      },
      {
        q: Q_STARTED,
        a: 'Oui. La formule Élégance reprend un projet déjà commencé : on fait le point sur l’existant et on organise ce qu’il reste, sans repartir de zéro.',
      },
      {
        q: Q_TIMING,
        a: 'Pour une organisation complète, contactez-nous idéalement dès les premières réflexions — surtout pour les grandes réceptions. La coordination Jour J peut se prévoir quelques mois avant, selon disponibilité.',
      },
      {
        q: 'Organisez-vous des mariages en dehors de Seine-Saint-Denis ?',
        a: 'Oui, dans toute l’Île-de-France et ailleurs selon les projets.',
      },
    ],
    areaServed: 'Seine-Saint-Denis',
  },

  /* ===================================================== 94 — VAL-DE-MARNE */
  '94-val-de-marne': {
    heroTitle: 'Wedding Planner dans le Val-de-Marne (94)',
    heroSubtitle: 'Organisation et coordination de mariage sur mesure dans le Val-de-Marne',
    eyebrow: 'Val-de-Marne • Île-de-France',
    imageAlt: 'Mariage dans le Val-de-Marne — Le Oui Parfait',
    badge: 'Showroom à Ris-Orangis — à quelques kilomètres du 94',
    introKicker: 'Wedding Planner Val-de-Marne (94)',
    introTitle: 'Votre Wedding Planner pour un mariage dans le Val-de-Marne',
    intro: [
      'Maisons avec jardin, lieux en bord de Marne, espaces de réception chaleureux : le Val-de-Marne est un département idéal pour les mariages élégants et conviviaux, à quelques minutes de Paris. Basés à Ris-Orangis, tout près de la limite du 94, nous y accompagnons régulièrement les futurs mariés.',
      'De la première réflexion au jour J, nous vous aidons à structurer votre projet : recherche du lieu, sélection des prestataires, maîtrise du budget, construction du déroulé et coordination de la journée.',
      'Notre rôle n’est pas de vous fournir une liste de prestataires : nous commençons par comprendre votre histoire et vos priorités pour construire avec vous une organisation cohérente et réalisable.',
    ],
    offersIntro: 'Réception en bord de Marne, mariage en famille ou grande fête : trois niveaux d’accompagnement selon l’avancement de votre projet.',
    territoryTitle: 'Organisation de mariage dans tout le Val-de-Marne',
    territorySubtitle: 'Une Wedding Planner pour votre mariage dans le 94',
    territoryBefore:
      'Le Val-de-Marne est le département voisin du nôtre : nous intervenons très régulièrement entre Paris et l’Essonne, notamment dans les communes suivantes :',
    towns: ['Vincennes', 'Saint-Maur-des-Fossés', 'Créteil', 'Nogent-sur-Marne', 'Maisons-Alfort', 'Champigny-sur-Marne', 'Vitry-sur-Seine', 'Ivry-sur-Seine', 'Charenton-le-Pont', 'Fontenay-sous-Bois', 'Joinville-le-Pont', 'L’Haÿ-les-Roses', 'Saint-Mandé'],
    territoryAfter: [
      'Nous pouvons également vous accompagner lorsque votre lieu de réception se situe ailleurs en Île-de-France ou lorsque certains prestataires doivent être recherchés en dehors du département.',
      'Notre proximité géographique facilite les rendez-vous de préparation : showroom à Ris-Orangis ou déplacement vers votre lieu.',
    ],
    sidebarTitle: 'Wedding planner dans les autres départements',
    sidebarLinks: [],
    methodBlocks: [
      {
        title: 'Un accompagnement pensé pour les mariages conviviaux',
        text: [
          'Le 94 se prête particulièrement aux mariages chaleureux : réceptions en famille, maisons avec jardin, lieux au bord de l’eau. Ces ambiances demandent une organisation fluide plutôt que protocolaire.',
          'Nous construisons avec vous un déroulé qui laisse respirer la journée — vin d’honneur généreux, transitions naturelles, timing réaliste — tout en gardant chaque prestataire au bon endroit au bon moment.',
        ],
      },
      {
        title: 'Des prestataires sélectionnés avec soin',
        text: [
          'Entre Paris et la banlieue sud, l’offre est vaste : nous vous proposons des prestataires fiables, adaptés à votre lieu, votre budget et votre univers plutôt qu’un tri à faire seul.',
          'Traiteur, photographe, DJ, fleuriste, vidéaste, décoration, beauté : vous restez décisionnaires ; nous préparons les comparatifs et vous conseillons.',
        ],
      },
      {
        title: 'Une organisation claire jusqu’au Jour J',
        text: [
          'Au fil des mois, les étapes sont structurées : vous savez toujours où en est votre mariage, ce qui est validé et ce qu’il reste à trancher.',
          'À l’approche du jour J, nous verrouillons la coordination : intervenants confirmés, horaires, installation, déroulé précis et gestion discrète des ajustements.',
        ],
      },
      {
        title: 'Un mariage qui vous ressemble',
        text: [
          'Réception élégante, esprit guinguette chic, ambiance romantique ou fête familiale : nous ne reproduisons pas le même mariage d’un couple à l’autre.',
          'Votre décoration, votre ambiance et vos cérémonies racontent votre histoire ; nous transformons ces envies en décisions concrètes et réalisables.',
        ],
      },
    ],
    realisationsTitle: 'Nos réalisations dans le Val-de-Marne et en Île-de-France',
    realisations: [
      { src: IMG.b, caption: 'Scénographie d’un mariage en Île-de-France' },
      { src: IMG.a, caption: 'Organisation et coordination de mariage — Le Oui Parfait' },
      { src: IMG.c, caption: 'Coordination Jour J d’un mariage dans le 94' },
      { src: IMG.d, caption: 'Organisation complète d’une réception en Île-de-France' },
    ],
    whyTitle: 'Pourquoi faire appel à une Wedding Planner dans le Val-de-Marne ?',
    whyText: [
      'Une Wedding Planner vous fait gagner du temps et de la sérénité : comparaison des lieux et des devis, répartition du budget entre les postes, rendez-vous ciblés plutôt que visites en cascade.',
      'Le jour J, elle coordonne ce que personne d’autre ne pilote : horaires des intervenants, installation, déroulé et imprévus.',
      'Faire appel à une Wedding Planner ne signifie pas perdre le contrôle : vous gardez les décisions, nous portons l’organisation.',
    ],
    ctaText:
      'Vous préparez votre mariage dans le Val-de-Marne et souhaitez savoir quelle formule correspond le mieux à votre situation ? Notre showroom de Ris-Orangis est à quelques kilomètres — faisons un premier point sur votre projet.',
    faqTitle: 'FAQ — Wedding Planner Val-de-Marne',
    faq: [
      {
        q: 'Combien coûte une Wedding Planner dans le Val-de-Marne ?',
        a: 'Le tarif dépend du niveau d’accompagnement : coordination Jour J avec Harmonie à partir de 1 190 €, organisation complète avec Signature à partir de 3 500 €, organisation partielle selon l’avancement de votre projet.',
        links: [{ label: 'Voir les tarifs', href: '/tarifs' }],
      },
      {
        q: 'Dans quelles villes du Val-de-Marne intervenez-vous ?',
        a: 'Dans tout le 94 : Vincennes, Saint-Maur-des-Fossés, Créteil, Nogent-sur-Marne, Maisons-Alfort, Champigny-sur-Marne, Ivry-sur-Seine, Charenton-le-Pont et les communes voisines.',
      },
      {
        q: Q_DIFF,
        a: 'L’organisation complète accompagne tout le projet sur plusieurs mois. La coordination Jour J s’adresse aux couples qui ont déjà tout organisé et veulent déléguer la gestion de la journée à une équipe professionnelle.',
      },
      {
        q: Q_STARTED,
        a: 'Oui. Notre formule Élégance reprend votre projet là où vous en êtes : on fait le point sur l’existant et on organise les étapes restantes.',
      },
      {
        q: Q_TIMING,
        a: 'Pour une organisation complète, le plus tôt est le mieux — surtout si le lieu n’est pas encore choisi. Pour une coordination Jour J, quelques mois d’anticipation suffisent généralement.',
      },
      {
        q: 'Organisez-vous des mariages hors du Val-de-Marne ?',
        a: 'Oui, dans toute l’Île-de-France — l’Essonne notamment, où se situe notre showroom — et ailleurs selon les projets.',
      },
    ],
    areaServed: 'Val-de-Marne',
  },

  /* ======================================================== 95 — VAL-D'OISE */
  '95-val-d-oise': {
    heroTitle: 'Wedding Planner dans le Val-d’Oise (95)',
    heroSubtitle: 'Organisation et coordination de mariage sur mesure dans le Val-d’Oise',
    eyebrow: 'Val-d’Oise • Île-de-France',
    imageAlt: 'Mariage dans le Val-d’Oise — Le Oui Parfait',
    badge: 'Showroom à Ris-Orangis — mariages dans tout le 95',
    introKicker: 'Wedding Planner Val-d’Oise (95)',
    introTitle: 'Votre Wedding Planner pour un mariage dans le Val-d’Oise',
    intro: [
      'Entre le Vexin français, les bords de l’Oise et les villages chargés d’histoire, le Val-d’Oise offre un cadre authentique pour les mariages champêtres et romantiques. L’équipe du Oui Parfait accompagne les futurs mariés du 95 depuis son showroom de Ris-Orangis.',
      'Manoirs, fermes rénovées, propriétés avec vue : les lieux du département demandent souvent une organisation construite de toutes pièces. Nous vous aidons à structurer le projet, sélectionner les prestataires, maîtriser le budget et coordonner le jour J.',
      'Chaque accompagnement commence par l’écoute : votre histoire, vos priorités, le niveau de délégation souhaité. Nous construisons ensuite avec vous une organisation cohérente et réalisable.',
    ],
    offersIntro: 'Mariage champêtre dans le Vexin ou réception en ville : trois niveaux d’accompagnement selon l’avancement de votre projet.',
    territoryTitle: 'Organisation de mariage dans tout le Val-d’Oise',
    territorySubtitle: 'Une Wedding Planner pour votre mariage dans le 95',
    territoryBefore:
      'Nous accompagnons des mariages dans tout le département, des villes de la vallée de l’Oise aux villages du Vexin :',
    towns: ['Cergy', 'Pontoise', 'Argenteuil', 'Enghien-les-Bains', 'L’Isle-Adam', 'Franconville', 'Sarcelles', 'Goussainville', 'Taverny', 'Herblay-sur-Seine', 'Auvers-sur-Oise', 'Ermont', 'Sannois'],
    territoryAfter: [
      'Les mariages en zone rurale demandent une attention particulière aux déplacements : nous organisons en amont les trajets des invités et des prestataires entre cérémonie et réception.',
      'Votre lieu se situe hors du département ? Nous vous accompagnons partout en Île-de-France et au-delà.',
    ],
    sidebarTitle: 'Wedding planner dans les autres départements',
    sidebarLinks: [],
    methodBlocks: [
      {
        title: 'Un accompagnement pensé pour les mariages au vert',
        text: [
          'Propriétés avec parc, fermes rénovées, manoirs du Vexin : ces lieux pleins de charme demandent une organisation construite de toutes pièces — traiteur, mobilier, plan B météo, éclairage extérieur.',
          'Nous anticipons chaque aspect technique pour que le cadre magnifique devienne une réception qui fonctionne, du vin d’honneur au dernier dance.',
        ],
      },
      {
        title: 'Des prestataires qui acceptent de se déplacer',
        text: [
          'Tous les professionnels ne couvrent pas le nord-ouest francilien. Nous sélectionnons des prestataires fiables, disponibles dans le 95 et alignés avec votre budget et votre univers.',
          'Traiteur, photographe, DJ, fleuriste, animations, navettes : vous restez décisionnaires ; nous vous aidons à comparer les propositions.',
        ],
      },
      {
        title: 'Une organisation claire jusqu’au Jour J',
        text: [
          'Les étapes sont structurées mois après mois : vous savez toujours ce qui est réservé, ce qui reste à trancher et quelles sont les prochaines échéances.',
          'À l’approche du jour J, la coordination prend le relais : intervenants confirmés, horaires d’installation, déroulé détaillé et gestion discrète des imprévus.',
        ],
      },
      {
        title: 'Un mariage authentique, à votre image',
        text: [
          'Champêtre, romantique, bucolique ou résolument festif : votre mariage doit raconter votre histoire, pas celle d’un catalogue.',
          'Nous construisons la scénographie et l’ambiance autour de vos envies, puis nous les transformons en choix concrets et réalisables.',
        ],
      },
    ],
    realisationsTitle: 'Nos réalisations dans le Val-d’Oise et en Île-de-France',
    realisations: [
      { src: IMG.a, caption: 'Organisation et coordination de mariage — Le Oui Parfait' },
      { src: IMG.b, caption: 'Scénographie d’un mariage champêtre en Île-de-France' },
      { src: IMG.c, caption: 'Coordination Jour J d’un mariage dans le 95' },
      { src: IMG.d, caption: 'Organisation complète d’une réception au vert' },
    ],
    whyTitle: 'Pourquoi faire appel à une Wedding Planner dans le Val-d’Oise ?',
    whyText: [
      'Les beaux lieux du 95 sont souvent éloignés et peu équipés : une Wedding Planner transforme le charme du lieu en organisation réelle — prestataires, logistique, plan B, déroulé.',
      'Elle vous fait aussi gagner un temps précieux : devis comparés, rendez-vous ciblés, budget réparti entre les postes plutôt que dépenses au coup par coup.',
      'Vous gardez toutes les décisions ; nous portons l’organisation pour que vous viviez pleinement votre journée.',
    ],
    ctaText:
      'Vous préparez votre mariage dans le Val-d’Oise et souhaitez savoir quelle formule correspond le mieux à votre situation ? Faisons un premier point sur votre projet, votre date et votre lieu.',
    faqTitle: 'FAQ — Wedding Planner Val-d’Oise',
    faq: [
      {
        q: 'Combien coûte une Wedding Planner dans le Val-d’Oise ?',
        a: 'Le tarif dépend de la formule et de la complexité logistique. Chez Le Oui Parfait : coordination Jour J avec Harmonie à partir de 1 190 €, organisation complète avec Signature à partir de 3 500 €, organisation partielle selon votre projet.',
        links: [{ label: 'Voir les tarifs', href: '/tarifs' }],
      },
      {
        q: 'Dans quelles villes du Val-d’Oise intervenez-vous ?',
        a: 'Dans tout le 95 : Cergy, Pontoise, Argenteuil, Enghien-les-Bains, L’Isle-Adam, Auvers-sur-Oise, Franconville, Sarcelles et les villages du Vexin.',
      },
      {
        q: Q_DIFF,
        a: 'L’organisation complète couvre tout le projet sur plusieurs mois, du lieu au jour J. La coordination Jour J s’adresse aux couples qui ont tout préparé seuls et veulent déléguer la gestion de la journée.',
      },
      {
        q: Q_STARTED,
        a: 'Oui. Si votre lieu ou certains prestataires sont déjà réservés, la formule Élégance reprend votre projet en cours et organise ce qu’il reste.',
      },
      {
        q: Q_TIMING,
        a: 'Pour une organisation complète, contactez-nous dès les premières réflexions — les lieux champêtres partent tôt. Pour une coordination Jour J, quelques mois d’anticipation suffisent selon la complexité.',
      },
      {
        q: 'Organisez-vous des mariages hors du Val-d’Oise ?',
        a: 'Oui, dans toute l’Île-de-France et ailleurs en France selon les projets.',
      },
    ],
    areaServed: 'Val-d’Oise',
  },
};

export function getDeptPillarContent(dept: IdFDepartment): DeptPillarContent {
  const content = CONTENT[dept.slug];
  if (!content) {
    throw new Error(`No pillar content defined for department ${dept.slug}`);
  }
  // Sidebar links for non-Essonne departments: internal meshing between pillars.
  if (content.sidebarLinks.length === 0) {
    content.sidebarLinks = IDF_DEPARTMENTS.filter((d) => d.slug !== dept.slug).map((d) => ({
      label: `${d.name} (${d.code})`,
      href: `/ile-de-france/${d.slug}`,
    }));
  }
  return content;
}
