import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, Calendar, Users, Heart, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ServiceHero } from '@/components/ServiceHero';
import { TestimonialsSection } from '@/components/TestimonialsSection';

export default function PlanificationMariagePage() {
  const specs = [
    { icon: Calendar, title: 'Réseau de Prestataires Sélectionnés' },
    { icon: Users,    title: 'Planificateurs Senior Certifiés' },
    { icon: Heart,    title: 'Logistique Précise de l\u2019Événement' },
    { icon: Sparkles, title: 'Concepts Déco Intemporels' },
  ];
  const keyFeatures = [
    'Coordination élégante de la journée',
    'Gestion complète des prestataires',
    'Planification personnalisée',
    'Suivi budgétaire détaillé',
  ];
  const process = [
    { step: '01', title: 'Consultation Initiale',      description: 'Rencontre pour comprendre votre vision, vos attentes et votre budget' },
    { step: '02', title: 'Conception & Planification', description: 'Création d\u2019un plan détaillé et sélection des prestataires' },
    { step: '03', title: 'Coordination',               description: 'Gestion de tous les aspects logistiques et communication avec les prestataires' },
    { step: '04', title: 'Le Jour J',                  description: 'Supervision complète pour que vous puissiez profiter pleinement de votre mariage' },
  ];
  const otherServices = [
    { title: 'Stylisme de Fiançailles', description: 'Des moments romantiques remplis d\u2019élégance, de créativité et d\u2019une narration visuelle inoubliable.', image: 'https://images.pexels.com/photos/3171736/pexels-photo-3171736.jpeg', features: ['Création de thème romantique', 'Stylisme visuel signature', 'Design d\u2019ambiance réfléchi'], link: '/services/stylisme-fiancailles' },
    { title: 'Gestion d\u2019Événements',  description: 'De la logistique aux touches finales, chaque détail reflète la perfection et les émotions que vous souhaitez chérir.',   image: 'https://images.pexels.com/photos/7012244/pexels-photo-7012244.jpeg', features: ['Coordination sur site', 'Organisation du calendrier', 'Exécution sans stress'],         link: '/services/gestion-evenements'  },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServiceHero
          title="Planification de Mariage"
          eyebrow="Service Premium"
          subtitle="Un service de coordination complet qui garantit que votre journée spéciale se déroule magnifiquement du début à la fin."
          image="https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg"
          breadcrumbLabel="Planification de Mariage"
        />

        {/* Intro — Image 1 style */}
        <section className="py-20 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-[2.479fr_2.5fr] gap-12 lg:gap-6 items-start">
              <div className="lg:col-span-1">
                <div className="relative h-[500px] overflow-hidden mb-4">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src="/presentation.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="bg-white p-5">
                  <p className="text-[15px] font-semibold text-[#4B4456] mb-4">Caractéristiques clés :</p>
                  <div className="grid grid-cols-2 gap-3">
                    {keyFeatures.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-[16px] text-[#5A5A5A]">
                        <Check className="w-4 h-4 text-[#88b7b5] flex-shrink-0 mt-0.5" /><span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1 lg:pt-4">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#88b7b5] mb-3">Plan de Service Complet</p>
                <h2 className="font-baskerville text-[32px] text-[#4B4456] leading-tight mb-5">
                  Planification Complète<br />du Mariage de Vos Rêves
                </h2>
                <p className="text-[17px] text-[#5A5A5A] leading-relaxed mb-4">
                  Nous orchestrons chaque élément de votre célébration, de la conception initiale jusqu'à l'adieu final, pour une expérience fluide et sans stress pour vous et vos invités.
                </p>
                <p className="text-[17px] text-[#5A5A5A] leading-relaxed mb-8">
                  Notre équipe dédiée gère la logistique des prestataires, la création du planning et la coordination du lieu avec précision, vous permettant de vous concentrer sur la joie du moment.
                </p>
                <p className="text-[15px] font-semibold text-[#4B4456] mb-4">Spécifications du Service</p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {specs.map((s, i) => (
                    <div key={i} className="bg-white border border-[#e8e0dc] p-5 flex flex-col items-start gap-3">
                      <s.icon className="w-8 h-8 text-[#88b7b5]" />
                      <span className="font-baskerville text-[20px] text-[#4B4456] leading-snug">{s.title}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact">
                  <button className="uppercase tracking-[0.2em] text-[11px] bg-white border border-[#4B4456] text-[#4B4456] hover:bg-[#4B4456] hover:text-white px-8 py-3 rounded-full transition-all">
                    Réserver maintenant
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#88b7b5] mb-3">Notre Démarche</p>
              <h2 className="heading-main">Notre Processus en 4 Étapes</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="font-baskerville text-5xl text-[#88b7b5] mb-4 opacity-40">{item.step}</div>
                  <h3 className="font-baskerville text-lg text-[#4B4456] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#5A5A5A] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TestimonialsSection />

        {/* Other Services — Image 2 style */}
        <section className="py-20 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#88b7b5] mb-3">Autres Services</p>
              <h2 className="heading-main">Créer des Moments Inoubliables<br />Avec Le Oui Parfait</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherServices.map((s, i) => (
                <div key={i} className="bg-white">
                  <div className="relative h-[260px] overflow-hidden">
                    <Image src={s.image} alt={s.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-baskerville text-2xl text-[#4B4456] mb-2">{s.title}</h3>
                    <p className="text-sm text-[#5A5A5A] leading-relaxed mb-4">{s.description}</p>
                    <ul className="space-y-1 mb-5">
                      {s.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-[#5A5A5A]">
                          <Check className="w-3.5 h-3.5 text-[#88b7b5] flex-shrink-0" />{f}
                        </li>
                      ))}
                    </ul>
                    <Link href={s.link}>
                      <button className="uppercase tracking-[0.15em] text-[11px] border border-[#4B4456] text-[#4B4456] hover:bg-[#4B4456] hover:text-white px-6 py-2.5 rounded-full transition-all">
                        Voir le Détail
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/presentation.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#88b7b5] mb-4 font-medium">
                Prêt à Commencer ?
              </p>
              <h2 className="font-baskerville text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight px-2">
                Votre Mariage de Rêve Commence Ici
              </h2>
              <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
                Planifions ensemble votre journée parfaite. Contactez-nous pour une consultation
                gratuite et créons le mariage dont vous avez toujours rêvé.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto uppercase tracking-[0.1em] text-xs sm:text-sm bg-[#88b7b5] text-white hover:bg-[#6a9a98] rounded-full px-6 sm:px-8 py-4 sm:py-6 font-medium transition-all shadow-lg hover:shadow-xl">
                    Réserver Ma Consultation
                  </Button>
                </Link>
                <Link href="tel:+33123456789" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto uppercase tracking-[0.1em] text-xs sm:text-sm bg-white text-[#4B4456] hover:bg-gray-100 rounded-full px-6 sm:px-8 py-4 sm:py-6 font-medium transition-all shadow-lg">
                    Appeler Maintenant
                  </Button>
                </Link>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-white/70 text-xs sm:text-sm">
                <span>✓ Consultation gratuite</span>
                <span>✓ Réponse sous 24h</span>
                <span>✓ Sans engagement</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
