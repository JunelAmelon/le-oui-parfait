'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = articlesData[params.slug] || {
    title: 'Comment Choisir le Lieu Parfait Pour Votre Mariage',
    date: '15 Janvier 2026',
    author: 'Le Oui Parfait',
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
    category: 'CONSEILS MARIAGE',
    content: {
      intro: 'Le choix du lieu de réception est l\'une des décisions les plus importantes dans l\'organisation de votre mariage.',
      sections: [
        {
          title: 'Définir Votre Vision',
          text: 'Avant de commencer vos recherches, prenez le temps de discuter avec votre partenaire de ce que vous imaginez pour votre grand jour.'
        }
      ]
    }
  };

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
        <section className="py-12 bg-[#FAF9F7]">
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
                  <p className="text-[#5A5A5A] leading-relaxed text-base lg:text-lg">
                    {article.content.intro}
                  </p>
                </div>

                {/* Content Sections */}
                {article.content.sections.map((section, index) => (
                  <div key={index} className="mb-10">
                    <h3 className="font-baskerville text-xl lg:text-2xl text-[#4A4A4A] mb-4">
                      {section.title}
                    </h3>
                    <p className="text-[#5A5A5A] leading-relaxed">
                      {section.text}
                    </p>
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
