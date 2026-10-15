export const STANDALONE_ARTICLE_SLUGS = [
  'budget-mariage-80-invites-ile-de-france',
  'checklist-mariage-12-mois',
  'choisir-lieu-mariage-ile-de-france',
  'coordination-jour-j-mariage-prix',
  'coordination-jour-j-qui-fait-quoi',
  'devis-wedding-planner-contenu',
  'erreurs-budget-mariage',
  'mariage-petit-comite-ile-de-france',
  'organisation-mariage-cle-en-main-prix',
  'organiser-mariage-civil-et-ceremonie',
  'prix-wedding-planner-ile-de-france',
  'temps-necessaire-organiser-mariage',
  'wedding-planner-vs-organiser-seul',
  'wedding-planner-essonne-91-tarifs',
  'wedding-planner-ris-orangis-tarifs-disponibilite',
];

export const BLOG_SLUG_REDIRECTS: Record<string, string> = {
  'planning-mariage-12-mois': '/checklist-mariage-12-mois',
};

export function getArticleHref(slug: string): string {
  if (STANDALONE_ARTICLE_SLUGS.includes(slug)) return `/${slug}`;
  return BLOG_SLUG_REDIRECTS[slug] ?? `/blog/${slug}`;
}
