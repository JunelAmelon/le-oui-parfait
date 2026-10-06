export type IdFDepartment = {
  code: string;
  name: string;
  slug: string;
  cities: string[];
  image: string;
  seoTitle?: string;
  seoDescription?: string;
  h1?: string;
  heroSubtitle?: string;
  introTitle?: string;
  intro?: string[];
  offersTitle?: string;
  zonesTitle?: string;
  zonesText?: string;
  faq?: { q: string; a: string; links?: { label: string; href: string }[] }[];
};

export const IDF_DEPARTMENTS: IdFDepartment[] = [
  {
    code: '75',
    name: 'Paris',
    slug: '75-paris',
    cities: ['Paris 1er', 'Paris 8e', 'Paris 16e', 'Paris 18e', 'Paris 20e'],
    image: '/mariage-moment.jpg',
  },
  {
    code: '77',
    name: 'Seine-et-Marne',
    slug: '77-seine-et-marne',
    cities: ['Fontainebleau', 'Meaux', 'Melun', 'Coulommiers', 'Serris'],
    image: '/moment-mariage%20(2).jpg',
  },
  {
    code: '78',
    name: 'Yvelines',
    slug: '78-yvelines',
    cities: ['Versailles', 'Saint-Germain-en-Laye', 'Rambouillet', 'Poissy', 'Montigny-le-Bretonneux'],
    image: '/mariage-r%C3%A9alis%C3%A9s%20(3).jpg',
  },
  {
    code: '91',
    name: 'Essonne',
    slug: '91-essonne',
    cities: ['Évry-Courcouronnes', 'Massy', 'Palaiseau', 'Arpajon', 'Étampes'],
    image: '/moment-mariage%20(4).jpg',
    seoTitle: 'Wedding Planner Essonne (91) | Organisation de Mariage',
    seoDescription:
      'Wedding planner en Essonne (91) : Le Oui Parfait organise et coordonne votre mariage de A à Z. Showroom à Ris-Orangis, organisation complète, partielle et Jour J.',
    h1: 'Wedding Planner en Essonne (91)',
    heroSubtitle: 'Organisation et coordination de mariage sur mesure en Essonne',
    introTitle: 'Votre wedding planner en Essonne, basée à Ris-Orangis',
    intro: [
      'Vous recherchez une wedding planner en Essonne pour organiser votre mariage avec sérénité ? Basée à Ris-Orangis, l’agence Le Oui Parfait accompagne les futurs mariés dans tout le département de l’Essonne (91), de la conception du mariage jusqu’à la coordination du Jour J.',
      'Organisation complète, accompagnement partiel ou coordination : notre équipe construit avec vous un mariage personnalisé, structuré et fidèle à votre histoire. Nous vous accompagnons dans la recherche des prestataires, la gestion du budget et du planning, la scénographie, les rendez-vous techniques et toute la coordination de votre réception.',
      'Depuis notre showroom de Ris-Orangis, nous intervenons notamment à Évry-Courcouronnes, Massy, Palaiseau, Corbeil-Essonnes, Arpajon, Viry-Châtillon, Sainte-Geneviève-des-Bois, Draveil, Étampes et dans l’ensemble du 91.',
    ],
    offersTitle: 'Nos prestations de Wedding Planner dans le 91',
    zonesTitle: 'Organisation de mariage partout en Essonne',
    zonesText:
      'Le Oui Parfait accompagne les futurs mariés dans l’ensemble du département de l’Essonne. Notre implantation à Ris-Orangis nous permet d’intervenir facilement sur les principaux secteurs du 91 : Évry-Courcouronnes, Corbeil-Essonnes, Massy, Palaiseau, Viry-Châtillon, Sainte-Geneviève-des-Bois, Savigny-sur-Orge, Draveil, Yerres, Arpajon, Étampes et les communes voisines.',
    faq: [
      {
        q: 'Combien coûte une wedding planner en Essonne (91) ?',
        a: 'Le tarif dépend de la formule : coordination du jour J, organisation partielle ou organisation clé en main.',
        links: [
          { label: 'Voir nos tarifs', href: '/tarifs' },
          { label: 'Prix d’une wedding planner en Essonne', href: '/wedding-planner-essonne-91-tarifs' },
        ],
      },
      {
        q: 'Dans quelles villes de l’Essonne intervenez-vous ?',
        a: 'Ris-Orangis, Évry-Courcouronnes, Corbeil-Essonnes, Massy, Palaiseau, Viry-Châtillon, Sainte-Geneviève-des-Bois, Savigny-sur-Orge, Draveil, Yerres, Arpajon, Étampes… et l’ensemble du département.',
      },
      {
        q: 'Quelle est la différence entre organisation complète et coordination du Jour J ?',
        a: 'L’organisation complète (clé en main) couvre toute la préparation de A à Z, tandis que la coordination du jour J reprend votre organisation existante pour piloter la journée : prestataires, timing et imprévus.',
      },
      {
        q: 'Quand faut-il réserver sa wedding planner ?',
        a: 'Idéalement 12 à 18 mois avant le mariage pour une organisation complète. Pour la coordination du jour J, quelques mois suffisent — mais plus tôt est toujours mieux pour sécuriser votre date.',
      },
      {
        q: 'Pouvez-vous reprendre un mariage déjà partiellement organisé ?',
        a: 'Oui, c’est exactement l’objet de notre offre d’organisation partielle : nous reprenons votre dossier, structurons le planning et complétons ce qui manque.',
      },
      {
        q: 'Peut-on vous confier uniquement la coordination du Jour J ?',
        a: 'Absolument. Notre offre Harmonie est dédiée à la coordination du jour J : déroulé, brief prestataires, gestion des imprévus — vous profitez, nous pilotons.',
      },
    ],
  },
  {
    code: '92',
    name: 'Hauts-de-Seine',
    slug: '92-hauts-de-seine',
    cities: ['Boulogne-Billancourt', 'Neuilly-sur-Seine', 'Nanterre', 'Suresnes', 'Issy-les-Moulineaux'],
    image: '/couple.jpg',
  },
  {
    code: '93',
    name: 'Seine-Saint-Denis',
    slug: '93-seine-saint-denis',
    cities: ['Saint-Denis', 'Montreuil', 'Pantin', 'Aubervilliers', 'Noisy-le-Grand'],
    image: '/moment-mariage%20(6).jpg',
  },
  {
    code: '94',
    name: 'Val-de-Marne',
    slug: '94-val-de-marne',
    cities: ['Vincennes', 'Saint-Maur-des-Fossés', 'Créteil', 'Nogent-sur-Marne', 'Maisons-Alfort'],
    image: '/mariage-r%C3%A9alis%C3%A9s%20(4).jpg',
  },
  {
    code: '95',
    name: "Val-d'Oise",
    slug: '95-val-d-oise',
    cities: ['Enghien-les-Bains', 'Cergy', 'Pontoise', 'Argenteuil', 'L’Isle-Adam'],
    image: '/mariage%20moment.jpg',
  },
];

export function getDepartmentBySlug(slug: string): IdFDepartment | undefined {
  return IDF_DEPARTMENTS.find((d) => d.slug === slug);
}
