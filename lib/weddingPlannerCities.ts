export type WeddingPlannerCity = {
  slug: string;
  name: string;
  eyebrow: string;
  introTitle: string;
  intro: string;
  zonesAround: string;
  nearbyChips: string[];
  image: string;
  badgeText?: string;
};

export const WEDDING_PLANNER_CITIES: WeddingPlannerCity[] = [
  {
    slug: 'ris-orangis',
    name: 'Ris-Orangis',
    eyebrow: 'RIS-ORANGIS • ESSONNE',
    introTitle: 'Une organisatrice de mariage basée à Ris-Orangis',
    intro:
      'Le Oui Parfait accompagne les couples à Ris-Orangis et dans toute l’Essonne (91) pour une organisation sur mesure : organisation clé en main, organisation partielle, coordination du jour J et prestations complémentaires.',
    zonesAround:
      'Ris-Orangis, Évry-Courcouronnes, Viry-Châtillon, Grigny, Draveil, Juvisy-sur-Orge, Sainte-Geneviève-des-Bois, Brétigny-sur-Orge, Corbeil-Essonnes, Massy… et plus largement toute l’Île-de-France.',
    nearbyChips: ['Ris-Orangis', 'Évry-Courcouronnes', 'Viry-Châtillon', 'Sainte-Geneviève-des-Bois', 'Grigny', 'Corbeil-Essonnes'],
    image: '/wedding%20(3).jpg',
    badgeText: 'Notre showroom est basé ici — à Ris-Orangis',
  },
  {
    slug: 'evry-courcouronnes',
    name: 'Évry-Courcouronnes',
    eyebrow: 'ÉVRY-COURCOURONNES • ESSONNE',
    introTitle: 'Une organisatrice de mariage à Évry-Courcouronnes',
    intro:
      "Préfecture de l'Essonne, Évry-Courcouronnes est le cœur administratif et festif du sud parisien, à quelques minutes de notre showroom de Ris-Orangis. Le Oui Parfait accompagne les couples qui s'y marient, en salle, dans les espaces verts ou dans les domaines alentour, avec une organisation sur mesure : clé en main, organisation partielle ou coordination du jour J.",
    zonesAround:
      'Évry, Courcouronnes, Ris-Orangis, Corbeil-Essonnes, Lisses, Bondoufle, Le Coudray-Montceaux, Sainte-Geneviève-des-Bois… et plus largement toute l’Île-de-France.',
    nearbyChips: ['Évry', 'Courcouronnes', 'Ris-Orangis', 'Corbeil-Essonnes', 'Bondoufle'],
    image: '/mariage-moment.jpg',
  },
  {
    slug: 'corbeil-essonnes',
    name: 'Corbeil-Essonnes',
    eyebrow: 'CORBEIL-ESSONNES • ESSONNE',
    introTitle: 'Une organisatrice de mariage à Corbeil-Essonnes',
    intro:
      "Ville au confluent de la Seine et de l'Essonne, Corbeil-Essonnes offre un cadre singulier pour célébrer un mariage, entre bords de rivière et patrimoine. Basés à Ris-Orangis, juste à côté, nous organisons et coordonnons votre journée avec des prestataires fiables et un planning précis.",
    zonesAround:
      'Corbeil-Essonnes, Saint-Germain-lès-Corbeil, Le Coudray-Montceaux, Évry, Morsang-sur-Seine, Étiolles, Varennes-Jarcy, Ris-Orangis… et plus largement toute l’Île-de-France.',
    nearbyChips: ['Corbeil-Essonnes', 'Évry', 'Ris-Orangis', 'Morsang-sur-Seine', 'Étiolles'],
    image: '/couple.jpg',
  },
  {
    slug: 'massy',
    name: 'Massy',
    eyebrow: 'MASSY • ESSONNE',
    introTitle: 'Une organisatrice de mariage à Massy',
    intro:
      "Pôle dynamique du nord de l'Essonne, Massy s'organise entre la vallée de Chevreuse et le plateau de Saclay, avec de nombreux lieux de réception autour. Le Oui Parfait conçoit et orchestre votre mariage à Massy et ses alentours, pour une journée élégante et parfaitement fluide.",
    zonesAround:
      'Massy, Palaiseau, Champlan, Longjumeau, Chilly-Mazarin, Verrières-le-Buisson, Saclay, Antony… et plus largement toute l’Île-de-France.',
    nearbyChips: ['Massy', 'Palaiseau', 'Champlan', 'Longjumeau', 'Chilly-Mazarin'],
    image: '/moment-mariage%20(1).jpg',
  },
  {
    slug: 'palaiseau',
    name: 'Palaiseau',
    eyebrow: 'PALAISEAU • ESSONNE',
    introTitle: 'Une organisatrice de mariage à Palaiseau',
    intro:
      "Aux portes de la vallée de Chevreuse, Palaiseau charme par son cadre verdoyant et ses beaux espaces pour célébrer. Nous accompagnons les couples palaisiens et ceux des communes voisines dans l'organisation complète ou partielle de leur mariage, jusqu'à la coordination du jour J.",
    zonesAround:
      'Palaiseau, Massy, Orsay, Igny, Villebon-sur-Yvette, Champlan, Longjumeau, Bures-sur-Yvette… et plus largement toute l’Île-de-France.',
    nearbyChips: ['Palaiseau', 'Massy', 'Orsay', 'Igny', 'Villebon-sur-Yvette'],
    image: '/moment-mariage%20(7).jpg',
  },
  {
    slug: 'savigny-sur-orge',
    name: 'Savigny-sur-Orge',
    eyebrow: 'SAVIGNY-SUR-ORGE • ESSONNE',
    introTitle: 'Une organisatrice de mariage à Savigny-sur-Orge',
    intro:
      "Entre l'Orge et la Seine, Savigny-sur-Orge est à quelques minutes de notre showroom de Ris-Orangis. Nous y préparons et coordonnons des mariages dans les salles et domaines du secteur, avec une attention particulière portée au déroulé et à la scénographie.",
    zonesAround:
      'Savigny-sur-Orge, Juvisy-sur-Orge, Épinay-sur-Orge, Morsang-sur-Orge, Viry-Châtillon, Fleury-Mérogis, Longjumeau, Ris-Orangis… et plus largement toute l’Île-de-France.',
    nearbyChips: ['Savigny-sur-Orge', 'Juvisy', 'Épinay-sur-Orge', 'Viry-Châtillon', 'Fleury-Mérogis'],
    image: '/alliance.jpg',
  },
  {
    slug: 'sainte-genevieve-des-bois',
    name: 'Sainte-Geneviève-des-Bois',
    eyebrow: 'SAINTE-GENEVIÈVE-DES-BOIS • ESSONNE',
    introTitle: 'Une organisatrice de mariage à Sainte-Geneviève-des-Bois',
    intro:
      "Commune résidentielle au cœur de l'Essonne, Sainte-Geneviève-des-Bois séduit par son calme et ses espaces de réception proches. Le Oui Parfait accompagne les mariés de la commune et de ses voisines avec un accompagnement sur mesure, du premier rendez-vous au jour J.",
    zonesAround:
      'Sainte-Geneviève-des-Bois, Saint-Michel-sur-Orge, Brétigny-sur-Orge, Fleury-Mérogis, Villemoisson-sur-Orge, Morsang-sur-Orge, Longpont-sur-Orge… et plus largement toute l’Île-de-France.',
    nearbyChips: ['Sainte-Geneviève-des-Bois', 'Saint-Michel-sur-Orge', 'Brétigny-sur-Orge', 'Fleury-Mérogis', 'Villemoisson-sur-Orge'],
    image: '/mariage-r%C3%A9alis%C3%A9s%20(1).PNG',
  },
  {
    slug: 'grigny',
    name: 'Grigny',
    eyebrow: 'GRIGNY • ESSONNE',
    introTitle: 'Une organisatrice de mariage à Grigny',
    intro:
      "Au sud de l'Essonne, Grigny est toute proche de notre showroom de Ris-Orangis. Nous y accompagnons les couples dans l'organisation de leur mariage : recherche du lieu, prestataires, budget, scénographie et coordination le jour J, pour une journée sereine et maîtrisée.",
    zonesAround:
      'Grigny, Fleury-Mérogis, Viry-Châtillon, Ris-Orangis, Draveil, Bondoufle, Sainte-Geneviève-des-Bois… et plus largement toute l’Île-de-France.',
    nearbyChips: ['Grigny', 'Fleury-Mérogis', 'Viry-Châtillon', 'Ris-Orangis', 'Draveil'],
    image: '/moment-mariage%20(2).jpg',
  },
  {
    slug: 'viry-chatillon',
    name: 'Viry-Châtillon',
    eyebrow: 'VIRY-CHÂTILLON • ESSONNE',
    introTitle: 'Une organisatrice de mariage à Viry-Châtillon',
    intro:
      "Ses bords de Seine, sa marina et ses lieux de réception en font un cadre agréable pour se marier : Viry-Châtillon est tout proche de notre base à Ris-Orangis. Nous y orchestrons votre journée, de la conception au dernier détail.",
    zonesAround:
      'Viry-Châtillon, Grigny, Juvisy-sur-Orge, Draveil, Savigny-sur-Orge, Ris-Orangis, Fleury-Mérogis… et plus largement toute l’Île-de-France.',
    nearbyChips: ['Viry-Châtillon', 'Grigny', 'Juvisy', 'Draveil', 'Savigny-sur-Orge'],
    image: '/feu-artifice-lanternes-mariage.jpg',
  },
  {
    slug: 'etampes',
    name: 'Étampes',
    eyebrow: 'ÉTAMPES • ESSONNE',
    introTitle: 'Une organisatrice de mariage à Étampes',
    intro:
      "Cité royale du sud de l'Essonne au cœur de la Beauce, Étampes attire par son charme campagnard et ses domaines. Le Oui Parfait accompagne les couples étampois et de sa région dans une organisation élégante, clé en main ou partielle, jusqu'à la coordination du grand jour.",
    zonesAround:
      'Étampes, Morigny-Champigny, Brières-les-Scellés, Saint-Hilaire, Ormoy-la-Rivière, Guillerval, Etréchy… et plus largement toute l’Île-de-France.',
    nearbyChips: ['Étampes', 'Morigny-Champigny', 'Saint-Hilaire', 'Etréchy', 'Beauce'],
    image: '/mairie.jpg',
  },
];

export function getWeddingPlannerCityBySlug(slug: string): WeddingPlannerCity | undefined {
  return WEDDING_PLANNER_CITIES.find((c) => c.slug === slug);
}
