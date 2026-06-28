'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroPage } from '@/components/HeroPage';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { useState } from 'react';

const featuredArticles = [
  {
    id: 1,
    category: 'CONSEILS MARIAGE',
    title: 'Comment Choisir le Lieu Parfait Pour Votre Mariage',
    date: '15 Janvier 2026',
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
    slug: 'choisir-lieu-parfait-mariage',
  },
  {
    id: 2,
    category: 'TENDANCES',
    title: 'Les Tendances Décoration Mariage Pour Cette Année',
    date: '12 Janvier 2026',
    image: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg',
    slug: 'tendances-decoration-mariage',
  },
  {
    id: 3,
    category: 'FIANÇAILLES',
    title: 'Organiser Une Demande en Mariage Inoubliable',
    date: '10 Janvier 2026',
    image: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg',
    slug: 'organiser-demande-mariage-inoubliable',
  },
];

const sidebarArticles = [
  {
    id: 1,
    date: '8 Janvier 2026',
    title: 'Budget Mariage : Nos Conseils Pour Bien Gérer',
    image: 'https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg',
    slug: 'budget-mariage-conseils',
  },
  {
    id: 2,
    date: '5 Janvier 2026',
    title: 'Choisir Sa Robe de Mariée Avec Élégance',
    image: 'https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg',
    slug: 'choisir-robe-mariee-elegance',
  },
  {
    id: 3,
    date: '2 Janvier 2026',
    title: 'Les Meilleurs Photographes Pour Votre Jour J',
    image: 'https://images.pexels.com/photos/3171770/pexels-photo-3171770.jpeg',
    slug: 'meilleurs-photographes-mariage',
  },
];

const allArticles = [
  {
    id: 1,
    category: 'CONSEILS',
    title: 'Comment Créer Une Liste d\'Invités Sans Stress',
    excerpt: 'Découvrez nos astuces pour établir votre liste d\'invités sereinement et éviter les conflits familiaux.',
    date: '28 Décembre 2025',
    image: 'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg',
    slug: 'creer-liste-invites-sans-stress',
  },
  {
    id: 2,
    category: 'DÉCORATION',
    title: 'Fleurs de Saison : Le Guide Complet Pour Votre Mariage',
    excerpt: 'Choisissez les fleurs parfaites selon la saison de votre mariage pour un budget maîtrisé.',
    date: '25 Décembre 2025',
    image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg',
    slug: 'fleurs-saison-guide-mariage',
  },
  {
    id: 3,
    category: 'ORGANISATION',
    title: 'Planning Mariage : Les 12 Mois Avant le Jour J',
    excerpt: 'Un calendrier détaillé pour ne rien oublier dans l\'organisation de votre mariage.',
    date: '22 Décembre 2025',
    image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg',
    slug: 'planning-mariage-12-mois',
  },
  {
    id: 4,
    category: 'INSPIRATION',
    title: 'Mariage Champêtre : Idées et Inspirations',
    excerpt: 'Toutes les clés pour organiser un mariage champêtre réussi et authentique.',
    date: '20 Décembre 2025',
    image: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg',
    slug: 'mariage-champetre-idees-inspirations',
  },
  {
    id: 5,
    category: 'TENDANCES',
    title: 'Les Couleurs Tendance Pour Un Mariage Moderne',
    excerpt: 'Découvrez les palettes de couleurs qui feront sensation cette année.',
    date: '18 Décembre 2025',
    image: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg',
    slug: 'couleurs-tendance-mariage-moderne',
  },
  {
    id: 6,
    category: 'CONSEILS',
    title: 'Discours de Mariage : Comment Émouvoir Vos Invités',
    excerpt: 'Nos conseils pour rédiger un discours de mariage mémorable et touchant.',
    date: '15 Décembre 2025',
    image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg',
    slug: 'discours-mariage-emouvoir-invites',
  },
  {
    id: 7,
    category: 'TARIFS',
    title: 'Prix wedding planner Île-de-France : combien ça coûte vraiment ? ',
    excerpt: 'Coordination jour J, organisation partielle ou clé en main : comprendre le prix et choisir la formule la plus rentable.',
    date: '28 Juin 2026',
    image: '/alliance.jpg',
    slug: 'prix-wedding-planner-ile-de-france',
  },
  {
    id: 8,
    category: 'JOUR J',
    title: 'Coordination jour J : prix + ce qui est inclus (et ce que tu risques sans)',
    excerpt: 'Ce qui est inclus dans une coordination sérieuse, et pourquoi tu évites stress, retards et imprévus le jour du mariage.',
    date: '28 Juin 2026',
    image: '/mairie.jpg',
    slug: 'coordination-jour-j-mariage-prix',
  },
  {
    id: 9,
    category: 'ORGANISATION',
    title: 'Organisation de mariage clé en main : prix, étapes, et pour qui c’est fait',
    excerpt: 'La formule la plus simple pour déléguer sans perdre le contrôle : étapes, bénéfices et erreurs évitées.',
    date: '28 Juin 2026',
    image: '/mariage-moment.jpg',
    slug: 'organisation-mariage-cle-en-main-prix',
  },
  {
    id: 10,
    category: 'LOCAL',
    title: 'Wedding planner Essonne (91) : tarifs + comment choisir la bonne',
    excerpt: 'Tarifs, formules, et critères concrets pour choisir une wedding planner qui te sécurise et te rassure.',
    date: '28 Juin 2026',
    image: '/couple.jpg',
    slug: 'wedding-planner-essonne-91-tarifs',
  },
  {
    id: 11,
    category: 'LOCAL',
    title: 'Wedding planner Ris-Orangis : tarifs et disponibilité',
    excerpt: 'La réponse claire sur les formules, et la meilleure façon de vérifier rapidement la disponibilité de ta date.',
    date: '28 Juin 2026',
    image: '/feu-artifice-lanternes-mariage.jpg',
    slug: 'wedding-planner-ris-orangis-tarifs-disponibilite',
  },
  {
    id: 12,
    category: 'BUDGET',
    title: 'Quel budget prévoir pour un mariage 80 personnes en Île-de-France ?',
    excerpt: 'Postes clés, pièges et méthode simple pour garder un budget maîtrisé sans perdre l’élégance.',
    date: '28 Juin 2026',
    image: '/table mariage.webp',
    slug: 'budget-mariage-80-invites-ile-de-france',
  },
  {
    id: 13,
    category: 'BUDGET',
    title: 'Les 7 erreurs qui font exploser le budget mariage (et comment les éviter)',
    excerpt: 'Les 7 pièges les plus fréquents (options, logistique, timing) et comment les éviter avec une méthode claire.',
    date: '28 Juin 2026',
    image: '/location-de-salle-de-mariage.jpg.jpeg',
    slug: 'erreurs-budget-mariage',
  },
  {
    id: 14,
    category: 'ORGANISATION',
    title: 'Checklist mariage 12 mois : planning simple + éviter la surcharge mentale',
    excerpt: 'Le bon ordre des étapes sur 12 mois : une checklist simple pour avancer sans stress ni oublis.',
    date: '28 Juin 2026',
    image: '/faire-part.png',
    slug: 'checklist-mariage-12-mois',
  },
  {
    id: 15,
    category: 'LIEUX',
    title: 'Comment choisir un lieu de mariage en Île-de-France (sans se tromper)',
    excerpt: 'Critères essentiels, questions à poser et pièges cachés (plan B pluie, contraintes, logistique).',
    date: '28 Juin 2026',
    image: '/location-de-salle-de-mariage.jpg.jpeg',
    slug: 'choisir-lieu-mariage-ile-de-france',
  },
  {
    id: 16,
    category: 'ORGANISATION',
    title: 'Mariage civil + cérémonie : comment organiser sans stress ? ',
    excerpt: 'Timing, trajets, marges et déroulé : une méthode simple pour une journée fluide et sans retards.',
    date: '28 Juin 2026',
    image: '/mairie.jpg',
    slug: 'organiser-mariage-civil-et-ceremonie',
  },
  {
    id: 17,
    category: 'ORGANISATION',
    title: 'Combien de temps faut-il pour organiser un mariage ? (réponse réaliste)',
    excerpt: 'Ce qui prend réellement du temps, pourquoi on se retrouve en retard et comment sécuriser les étapes.',
    date: '28 Juin 2026',
    image: '/save-the-date.png',
    slug: 'temps-necessaire-organiser-mariage',
  },
  {
    id: 18,
    category: 'TARIFS',
    title: 'Devis wedding planner : que doit contenir une offre sérieuse ?',
    excerpt: 'Les points indispensables à vérifier pour éviter les offres floues et les mauvaises surprises.',
    date: '28 Juin 2026',
    image: '/alliance.jpg',
    slug: 'devis-wedding-planner-contenu',
  },
  {
    id: 19,
    category: 'JOUR J',
    title: 'Coordination jour J : qui gère quoi (mariés, témoins, wedding planner)',
    excerpt: 'Répartition claire des rôles pour éviter stress et retards : qui gère quoi, et pourquoi ça change tout.',
    date: '28 Juin 2026',
    image: '/photographe-mariage-en-action.jpg',
    slug: 'coordination-jour-j-qui-fait-quoi',
  },
  {
    id: 20,
    category: 'INSPIRATION',
    title: 'Mariage en petit comité en Île-de-France : organisation + budget',
    excerpt: 'Moins d’invités, plus de détails : comment structurer l’expérience et garder une cohérence élégante.',
    date: '28 Juin 2026',
    image: '/mariage moment.jpg',
    slug: 'mariage-petit-comite-ile-de-france',
  },
  {
    id: 21,
    category: 'CONSEILS',
    title: 'Wedding planner vs organisation seule : comparaison honnête (coût, stress, erreurs)',
    excerpt: 'Comparaison honnête : coût réel, charge mentale, risques et comment décider sereinement.',
    date: '28 Juin 2026',
    image: '/photographe-mariage-en-action.jpg',
    slug: 'wedding-planner-vs-organiser-seul',
  },
];

export default function BlogPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const totalPages = Math.max(1, Math.ceil(allArticles.length / itemsPerPage));
  const safePage = Math.min(Math.max(1, currentPage), totalPages);
  const startIndex = (safePage - 1) * itemsPerPage;
  const paginatedArticles = allArticles.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroPage
          title="Blog"
          subtitle="Inspiration, conseils et tendances pour votre mariage parfait"
          backgroundImage="wedding (1).jpg"
        />

        {/* Blog Section - Design similaire à l'image de référence */}
        <section className="py-20 bg-[#f4f1f7]">
          <div className="container mx-auto px-4 sm:px-6">
            
            {/* Section Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#4B4456] mb-3 font-medium">
                  HISTOIRES D'AMOUR
                </p>
                <h2 className="font-baskerville text-4xl lg:text-5xl text-[#4A4A4A] leading-tight">
                  Inspiration Pour Votre<br />Célébration de Rêve
                </h2>
              </div>
              <div className="flex flex-col justify-end">
                <p className="text-[#5A5A5A] mb-4 leading-relaxed">
                  Plongez dans nos conseils d'experts, découvrez de vrais mariages 
                  à couper le souffle et des guides essentiels pour rendre chaque 
                  moment magique.
                </p>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Featured Article Slider - Left Side */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Link href={`/blog/${featuredArticles[currentSlide].slug}`} className="group block">
                    {/* Main Featured Image */}
                    <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                      <Image
                        src={featuredArticles[currentSlide].image}
                        alt={featuredArticles[currentSlide].title}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      />
                      {/* Decorative leaf overlay */}
                      <div className="absolute top-0 left-0 w-32 h-32 opacity-30">
                        <Image
                          src="/decoration-eucalyptus.PNG"
                          alt="Décoration"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    
                    {/* Article Info */}
                    <div className="mt-6">
                      <p className="text-xs uppercase tracking-[0.2em] text-[#88b7b5] mb-2 font-medium">
                        {featuredArticles[currentSlide].category}
                      </p>
                      <h3 className="font-baskerville text-2xl lg:text-3xl text-[#4A4A4A] mb-3 group-hover:text-[#88b7b5] transition-colors">
                        {featuredArticles[currentSlide].title}
                      </h3>
                      <p className="text-sm text-[#5A5A5A] uppercase tracking-wider">
                        {featuredArticles[currentSlide].date}
                      </p>
                    </div>
                  </Link>

                  {/* Slider Dots */}
                  <div className="flex gap-2 mt-6">
                    {featuredArticles.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Voir l’article : ${featuredArticles[index].title}`}
                        title={featuredArticles[index].title}
                        className={`w-3 h-3 rounded-full transition-all ${
                          currentSlide === index 
                            ? 'bg-[#88b7b5]' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Articles - Right Side */}
              <div className="space-y-6">
                {sidebarArticles.map((article) => (
                  <Link 
                    key={article.id} 
                    href={`/blog/${article.slug}`}
                    className="flex gap-4 group"
                  >
                    <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-xs text-[#5A5A5A] uppercase tracking-wider mb-1">
                        {article.date}
                      </p>
                      <h4 className="font-baskerville text-lg text-[#4A4A4A] leading-snug group-hover:text-[#88b7b5] transition-colors">
                        {article.title}
                      </h4>
                    </div>
                  </Link>
                ))}

                {/* Follow Us Section */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <h4 className="font-baskerville text-xl text-[#4A4A4A]">
                      Suivez-Nous
                    </h4>
                    <div className="flex gap-3">
                      <a href="#" className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-[#5A5A5A] hover:bg-[#88b7b5] hover:text-white hover:border-[#88b7b5] transition-all">
                        <Facebook className="w-4 h-4" />
                      </a>
                      <a href="#" className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-[#5A5A5A] hover:bg-[#88b7b5] hover:text-white hover:border-[#88b7b5] transition-all">
                        <Instagram className="w-4 h-4" />
                      </a>
                      <a href="#" className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-[#5A5A5A] hover:bg-[#88b7b5] hover:text-white hover:border-[#88b7b5] transition-all">
                        <Youtube className="w-4 h-4" />
                      </a>
                      <a href="#" className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-[#5A5A5A] hover:bg-[#88b7b5] hover:text-white hover:border-[#88b7b5] transition-all">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Articles Grid */}
        <section id="tous-nos-articles" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.2em] text-[#88b7b5] mb-3 font-medium">
                TOUS NOS ARTICLES
              </p>
              <h2 className="font-baskerville text-3xl lg:text-4xl text-[#4A4A4A]">
                Conseils & Inspirations
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedArticles.map((article) => (
                <Link 
                  key={article.id} 
                  href={`/blog/${article.slug}`}
                  className="group"
                >
                  <div className="relative h-64 overflow-hidden mb-4">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#88b7b5] mb-2 font-medium">
                    {article.category}
                  </p>
                  <h3 className="font-baskerville text-xl text-[#4A4A4A] mb-2 group-hover:text-[#88b7b5] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#5A5A5A] mb-3 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <p className="text-xs text-[#5A5A5A] uppercase tracking-wider">
                    {article.date}
                  </p>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={safePage <= 1}
                  className="rounded-full border border-gray-300 px-4 py-2 text-sm text-[#4A4A4A] disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#88b7b5] hover:text-[#88b7b5] transition-colors"
                >
                  Précédent
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      className={`h-9 w-9 rounded-full border text-sm transition-colors ${
                        page === safePage
                          ? 'border-[#88b7b5] bg-[#88b7b5] text-white'
                          : 'border-gray-300 text-[#4A4A4A] hover:border-[#88b7b5] hover:text-[#88b7b5]'
                      }`}
                      aria-label={`Page ${page}`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={safePage >= totalPages}
                  className="rounded-full border border-gray-300 px-4 py-2 text-sm text-[#4A4A4A] disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#88b7b5] hover:text-[#88b7b5] transition-colors"
                >
                  Suivant
                </button>
              </div>
              <p className="text-xs text-[#5A5A5A] uppercase tracking-wider">
                Page {safePage} / {totalPages}
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
