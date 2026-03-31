export type IdFDepartment = {
  code: string;
  name: string;
  slug: string;
  cities: string[];
};

export const IDF_DEPARTMENTS: IdFDepartment[] = [
  {
    code: '75',
    name: 'Paris',
    slug: '75-paris',
    cities: ['Paris 1er', 'Paris 8e', 'Paris 16e', 'Paris 18e', 'Paris 20e'],
  },
  {
    code: '77',
    name: 'Seine-et-Marne',
    slug: '77-seine-et-marne',
    cities: ['Fontainebleau', 'Meaux', 'Melun', 'Coulommiers', 'Serris'],
  },
  {
    code: '78',
    name: 'Yvelines',
    slug: '78-yvelines',
    cities: ['Versailles', 'Saint-Germain-en-Laye', 'Rambouillet', 'Poissy', 'Montigny-le-Bretonneux'],
  },
  {
    code: '91',
    name: 'Essonne',
    slug: '91-essonne',
    cities: ['Évry-Courcouronnes', 'Massy', 'Palaiseau', 'Arpajon', 'Étampes'],
  },
  {
    code: '92',
    name: 'Hauts-de-Seine',
    slug: '92-hauts-de-seine',
    cities: ['Boulogne-Billancourt', 'Neuilly-sur-Seine', 'Nanterre', 'Suresnes', 'Issy-les-Moulineaux'],
  },
  {
    code: '93',
    name: 'Seine-Saint-Denis',
    slug: '93-seine-saint-denis',
    cities: ['Saint-Denis', 'Montreuil', 'Pantin', 'Aubervilliers', 'Noisy-le-Grand'],
  },
  {
    code: '94',
    name: 'Val-de-Marne',
    slug: '94-val-de-marne',
    cities: ['Vincennes', 'Saint-Maur-des-Fossés', 'Créteil', 'Nogent-sur-Marne', 'Maisons-Alfort'],
  },
  {
    code: '95',
    name: "Val-d'Oise",
    slug: '95-val-d-oise',
    cities: ['Enghien-les-Bains', 'Cergy', 'Pontoise', 'Argenteuil', 'L’Isle-Adam'],
  },
];

export function getDepartmentBySlug(slug: string): IdFDepartment | undefined {
  return IDF_DEPARTMENTS.find((d) => d.slug === slug);
}
