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
];

export default function BlogPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

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
              {allArticles.map((article) => (
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
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
