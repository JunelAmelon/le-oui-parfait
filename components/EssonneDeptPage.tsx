import Link from 'next/link';
import Image from 'next/image';
import { Check, ChevronDown, MapPin, Star, Sparkles, Users, CalendarCheck, Heart } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroPage } from '@/components/HeroPage';
import { PlanningSection } from '@/components/PlanningSection';
import { WEDDING_PLANNER_CITIES } from '@/lib/weddingPlannerCities';
import type { IdFDepartment } from '@/app/ile-de-france/_idfData';

const faq = [
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
    q: 'Quelle différence entre organisation complète et coordination Jour J ?',
    a: 'L’organisation complète commence plusieurs mois avant le mariage et couvre la construction et le suivi global du projet. La coordination Jour J intervient lorsque les futurs mariés ont déjà organisé leur mariage mais souhaitent confier la préparation finale et la coordination de la journée à une équipe professionnelle.',
  },
  {
    q: 'Peut-on faire appel à vous si nous avons déjà commencé notre mariage ?',
    a: 'Oui. Notre formule Élégance est justement destinée aux couples ayant déjà commencé leurs préparatifs et souhaitant être accompagnés sur les étapes restantes.',
  },
  {
    q: 'Combien de temps avant notre mariage devons-nous contacter une Wedding Planner ?',
    a: 'Pour une organisation complète, le plus tôt reste généralement le mieux, notamment lorsque le lieu et les principaux prestataires ne sont pas encore réservés. Pour une coordination Jour J, l’accompagnement peut commencer plus tard, selon la disponibilité de l’équipe et la complexité du mariage.',
  },
  {
    q: 'Organisez-vous uniquement des mariages en Essonne ?',
    a: 'Non. Le Oui Parfait intervient également dans les autres départements d’Île-de-France et peut accompagner des projets dans d’autres régions ou des mariages nécessitant des déplacements.',
  },
];

const offers = [
  {
    name: 'Organisation complète — Signature',
    price: 'Organisation complète à partir de 3 500 €',
    href: '/tarifs/offre-signature',
    cta: 'Découvrir l’offre Signature',
    image: '/offre-signature.png',
    alt: 'Offre Signature — Mariage clé en main',
    text: [
      'Vous souhaitez nous confier votre mariage de A à Z ? Notre formule Signature a été conçue pour les couples qui souhaitent être accompagnés dès les premières étapes de leur projet.',
      'Nous travaillons avec vous sur la construction du mariage, la recherche et la sélection des prestataires, l’organisation du planning, le suivi du budget, les rendez-vous, les différents éléments liés à votre réception ainsi que la préparation du Jour J.',
      'Vous conservez les décisions qui comptent pour vous. Nous prenons en charge la structure, le suivi et la coordination nécessaires pour transformer vos idées en un véritable projet de mariage.',
    ],
  },
  {
    name: 'Organisation partielle — Élégance',
    href: '/tarifs/offre-elegance',
    cta: 'Découvrir l’offre Élégance',
    image: '/offre-elegance.png',
    alt: 'Offre Élégance — Organisation partielle',
    text: [
      'Votre mariage est déjà commencé mais vous avez besoin d’aide pour la suite ? Il n’est pas toujours nécessaire de recommencer toute l’organisation depuis le début. Avec notre formule Élégance, nous reprenons votre projet là où vous en êtes.',
      'Certains prestataires sont déjà réservés ? Votre lieu est choisi ? Plusieurs décisions sont déjà prises ? Nous faisons le point avec vous sur ce qui a été réalisé, ce qui reste à organiser et les éléments qui nécessitent encore notre intervention.',
      'L’accompagnement est alors construit autour de vos véritables besoins.',
    ],
  },
  {
    name: 'Coordination Jour J — Harmonie',
    price: 'Coordination Jour J à partir de 1 190 €',
    href: '/tarifs/offre-harmonie',
    cta: 'Découvrir l’offre Harmonie',
    image: '/offre-harmonie.png',
    alt: 'Offre Harmonie — Coordination du jour J',
    text: [
      'Vous avez organisé votre mariage et souhaitez maintenant en profiter pleinement ? Notre formule Harmonie est dédiée aux couples ayant réalisé leurs préparatifs eux-mêmes mais souhaitant confier la coordination finale à une équipe professionnelle.',
      'Avant votre mariage, nous reprenons votre organisation, vos prestataires, votre planning et les informations indispensables au bon déroulement de la journée.',
      'Le Jour J, notre équipe assure la coordination entre les différents intervenants, le respect du déroulé prévu et la gestion des ajustements nécessaires. Vous pouvez ainsi vous concentrer sur l’essentiel : vivre votre mariage.',
    ],
  },
];

const realisations = [
  {
    src: '/mariage-r%C3%A9alis%C3%A9s%20(2).jpg',
    caption: 'Organisation et coordination d’un mariage en Essonne — Le Oui Parfait',
  },
  {
    src: '/mariage-r%C3%A9alis%C3%A9s%20(3).jpg',
    caption: 'Scénographie d’un mariage en Île-de-France',
  },
  {
    src: '/mariage-r%C3%A9alis%C3%A9s%20(4).jpg',
    caption: 'Coordination Jour J d’un mariage dans le 91',
  },
  {
    src: '/moment-mariage%20(5).jpg',
    caption: 'Organisation complète d’une réception en Essonne',
  },
];

export function EssonneDeptPage({ dept }: { dept: IdFDepartment }) {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://leouiparfait.com/ile-de-france/91-essonne#localbusiness',
    name: 'Le Oui Parfait',
    url: 'https://leouiparfait.com/ile-de-france/91-essonne',
    image: ['https://leouiparfait.com/logo-horizontal.png'],
    telephone: '+33 6 87 21 71 18',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '19 rue Albert-Remy',
      addressLocality: 'Ris-Orangis',
      postalCode: '91130',
      addressCountry: 'FR',
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Essonne' },
      { '@type': 'AdministrativeArea', name: 'Île-de-France' },
    ],
    sameAs: [
      'https://www.facebook.com/share/1NRMWajbmP/?mibextid=wwXIfr',
      'https://www.instagram.com/leouiparfait_officiel?igsh=Z2dsZHF2cDJmZmIz',
    ],
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroPage
          title="Wedding Planner en Essonne (91)"
          subtitle="Organisation et coordination de mariage sur mesure en Essonne"
          eyebrow="Essonne • Île-de-France"
          backgroundImage="https://media.abcsalles.com/images/1/articles/960x640/840709/comment-trouver-ses-prestataires-de-mariage.jpg"
        >
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
            <Link
              href="/tarifs"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#88b7b5] text-white font-medium hover:bg-[#6fa3a1] transition"
            >
              Découvrir nos formules
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-white/90 text-[#4B4456] font-medium hover:bg-white transition"
            >
              Prendre rendez-vous
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {dept.cities.map((c) => (
              <span
                key={c}
                className="px-3 py-1.5 rounded-full bg-white/90 text-[#4B4456] text-xs font-medium"
              >
                {c}
              </span>
            ))}
          </div>
        </HeroPage>

        {/* Intro éditoriale */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="relative">
                <div className="relative aspect-[4/5] lg:aspect-[4/4.6] overflow-hidden rounded-2xl shadow-[0_18px_45px_rgba(25,20,33,0.12)]">
                  <Image
                    src={dept.image}
                    alt="Mariage en Essonne — Le Oui Parfait"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute left-4 bottom-4 right-4 sm:right-auto inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm border border-[#e8e0dc] rounded-full px-4 py-2.5 text-[11px] sm:text-[12px] text-[#4B4456] shadow-lg">
                    <MapPin className="w-4 h-4 text-[#88b7b5] flex-shrink-0" />
                    Showroom à Ris-Orangis — Essonne (91)
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#88b7b5] mb-3">
                  Wedding Planner Essonne (91)
                </p>
                <h2 className="font-baskerville text-3xl lg:text-4xl text-[#4B4456] leading-tight mb-5">
                  Votre Wedding Planner en Essonne, basée à Ris-Orangis
                </h2>
                <p className="text-[16px] sm:text-[17px] text-[#5A5A5A] leading-relaxed mb-4">
                  Vous recherchez une Wedding Planner en Essonne pour organiser votre mariage avec sérénité, méthode et élégance ?
                  Basée à Ris-Orangis, l’équipe du Oui Parfait accompagne les futurs mariés dans l’organisation de leur mariage
                  dans l’ensemble de l’Essonne et plus largement en Île-de-France.
                </p>
                <p className="text-[16px] sm:text-[17px] text-[#5A5A5A] leading-relaxed mb-4">
                  De la première réflexion jusqu’au Jour J, nous vous aidons à structurer votre projet, sélectionner les bons
                  prestataires, maîtriser votre budget, construire votre univers et coordonner chaque étape de votre mariage.
                </p>
                <p className="text-[16px] sm:text-[17px] text-[#5A5A5A] leading-relaxed mb-7">
                  Organiser un mariage demande du temps, de l’anticipation et surtout une vision globale. Notre rôle ne consiste
                  pas simplement à vous fournir une liste de prestataires : nous vous accompagnons dans la construction d’un projet
                  cohérent, réalisable et fidèle à vos envies. Chaque mariage étant différent, nous commençons par comprendre votre
                  histoire, vos priorités et le niveau d’accompagnement dont vous avez réellement besoin.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    'Planning et budget maîtrisés du premier rendez-vous au jour J',
                    'Sélection de prestataires fiables et alignés à votre style',
                    'Coordination précise et sereine le jour J',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-[15px] text-[#4B4456]">
                      <Check className="w-5 h-5 text-[#88b7b5] flex-shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/tarifs"
                    className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#4B4456] text-white font-medium hover:bg-[#3a3540] transition"
                  >
                    Découvrir nos formules
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-white text-[#4B4456] font-medium border border-[#88b7b5]/40 hover:border-[#88b7b5] transition"
                  >
                    Prendre rendez-vous
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Les 3 offres */}
        <section className="py-16 lg:py-20 bg-[#f4f1f7]">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="max-w-2xl mb-10">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#88b7b5] mb-3">Nos prestations</p>
              <h2 className="font-baskerville text-3xl lg:text-4xl text-[#4B4456] leading-tight">
                Trois niveaux d’accompagnement selon votre mariage
              </h2>
            </div>

            <div className="space-y-6">
              {offers.map((offre, i) => (
                <div
                  key={offre.name}
                  className="bg-white border border-[#e8e0dc] rounded-3xl overflow-hidden hover:border-[#88b7b5] hover:shadow-[0_14px_40px_rgba(25,20,33,0.08)] transition"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
                    <div className={`lg:col-span-4 relative min-h-[220px] lg:min-h-full ${i % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                      <Image
                        src={offre.image}
                        alt={offre.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    </div>
                    <div className={`lg:col-span-8 p-7 lg:p-10 ${i % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="font-baskerville text-3xl text-[#88b7b5]/70">0{i + 1}</span>
                        <h3 className="font-baskerville text-xl lg:text-2xl text-[#4B4456]">{offre.name}</h3>
                      </div>
                      <div className="space-y-3 mb-5">
                        {offre.text.map((p, j) => (
                          <p key={j} className="text-[14px] lg:text-[15px] text-[#5A5A5A] leading-relaxed">{p}</p>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        {offre.price && (
                          <p className="inline-flex items-center rounded-full bg-[#f4f1f7] border border-[#88b7b5]/40 px-4 py-2 text-[13px] font-semibold text-[#4B4456] w-fit">
                            {offre.price}
                          </p>
                        )}
                        <Link
                          href={offre.href}
                          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#4B4456] text-white text-sm font-medium hover:bg-[#3a3540] transition sm:ml-auto"
                        >
                          {offre.cta}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Territoire */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#88b7b5] mb-3">Territoire</p>
                <h2 className="font-baskerville text-3xl lg:text-4xl text-[#4B4456] leading-tight mb-5">
                  Organisation de mariage dans toute l’Essonne
                </h2>
                <h3 className="font-baskerville text-xl text-[#4B4456] mb-4">
                  Une Wedding Planner pour votre mariage dans le 91
                </h3>
                <p className="text-[15px] sm:text-[16px] text-[#5A5A5A] leading-relaxed mb-4">
                  Notre implantation à Ris-Orangis nous permet d’accompagner des mariages dans l’ensemble du département,
                  ainsi que dans les autres communes de l’Essonne.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
                  {[
                    'Ris-Orangis', 'Évry-Courcouronnes', 'Corbeil-Essonnes', 'Viry-Châtillon',
                    'Draveil', 'Savigny-sur-Orge', 'Sainte-Geneviève-des-Bois', 'Massy',
                    'Palaiseau', 'Arpajon', 'Brétigny-sur-Orge', 'Montlhéry', 'Étampes',
                  ].map((ville) => (
                    <li key={ville} className="flex items-center gap-2 text-[14px] text-[#4B4456]">
                      <MapPin className="w-3.5 h-3.5 text-[#88b7b5] flex-shrink-0" />
                      {ville}
                    </li>
                  ))}
                </ul>
                <p className="text-[15px] sm:text-[16px] text-[#5A5A5A] leading-relaxed mb-4">
                  Nous pouvons également vous accompagner lorsque votre lieu de réception se situe ailleurs en Île-de-France
                  ou lorsque certains prestataires doivent être recherchés en dehors du département.
                </p>
                <p className="text-[15px] sm:text-[16px] text-[#5A5A5A] leading-relaxed">
                  Cette connaissance du territoire nous permet notamment de faciliter la recherche de lieux, de prestataires
                  et de solutions adaptées à la localisation de votre mariage.
                </p>
              </div>

              <div className="bg-[#f4f1f7] border border-[#88b7b5]/30 rounded-3xl p-6 md:p-8 lg:sticky lg:top-28">
                <h3 className="text-lg font-baskerville text-[#4B4456] mb-4">
                  Wedding planner dans les villes d’Essonne
                </h3>
                <div className="flex flex-wrap gap-2">
                  {WEDDING_PLANNER_CITIES.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/wedding-planner-${c.slug}`}
                      className="px-3 py-1.5 rounded-full bg-white border border-[#88b7b5]/30 text-[#4B4456] text-xs font-medium hover:border-[#88b7b5] transition"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="ml-2 text-[13px] text-[#5A5A5A]">5,0/5 — 16 avis sur mariages.net</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Méthode / accompagnement */}
        <section className="py-16 lg:py-20 bg-[#f4f1f7]">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Sparkles,
                  title: 'Un accompagnement pensé autour de votre projet',
                  text: [
                    'Un mariage ne se résume pas à additionner un lieu, un traiteur, un DJ et une décoration. Chaque décision influence les autres : le lieu impacte la logistique, le nombre d’invités influence le budget, le déroulement de la cérémonie conditionne le planning, et la scénographie doit rester cohérente avec l’espace choisi.',
                    'C’est pourquoi nous travaillons sur votre mariage dans sa globalité. À partir de vos priorités et de votre budget, nous construisons avec vous une organisation permettant d’avancer dans le bon ordre et d’éviter les décisions prises trop tard ou les dépenses mal anticipées.',
                  ],
                },
                {
                  icon: Users,
                  title: 'Des prestataires sélectionnés selon votre mariage',
                  text: [
                    'Trouver un prestataire disponible est relativement simple. Trouver le bon prestataire pour votre projet, votre budget et votre univers demande davantage de travail.',
                    'Photographe, vidéaste, DJ, décoration, fleuriste, animations, cérémonie, beauté, transport : les recherches sont réalisées en fonction de votre projet et de la formule choisie. Vous restez décisionnaires — nous sommes là pour vous conseiller, comparer les propositions et faciliter votre choix.',
                  ],
                },
                {
                  icon: CalendarCheck,
                  title: 'Une organisation claire jusqu’au Jour J',
                  text: [
                    'Notre accompagnement est pensé pour vous permettre de savoir où en est votre mariage. Au fil des mois, nous structurons les différentes étapes nécessaires à son organisation et anticipons les échéances importantes.',
                    'Plus le Jour J approche, plus le travail de coordination prend de l’importance : confirmation des intervenants, horaires, installation, déroulé, informations pratiques et articulation entre les différents prestataires.',
                  ],
                },
                {
                  icon: Heart,
                  title: 'Votre mariage doit vous ressembler',
                  text: [
                    'Nous ne souhaitons pas reproduire le même mariage pour tous nos couples. Votre décoration, votre ambiance, votre cérémonie et votre réception doivent raconter quelque chose de vous.',
                    'Mariage élégant, romantique, contemporain, chic, coloré, intimiste ou plus spectaculaire : nous construisons notre accompagnement autour de vos envies, puis nous les transformons en décisions concrètes et réalisables.',
                  ],
                },
              ].map((bloc) => (
                <div key={bloc.title} className="bg-white border border-[#e8e0dc] rounded-3xl p-6 md:p-8 hover:border-[#88b7b5] hover:shadow-[0_10px_30px_rgba(25,20,33,0.06)] transition">
                  <div className="w-12 h-12 rounded-full bg-[#f4f1f7] border border-[#88b7b5]/30 flex items-center justify-center mb-5">
                    <bloc.icon className="w-5 h-5 text-[#88b7b5]" />
                  </div>
                  <h2 className="font-baskerville text-xl lg:text-2xl text-[#4B4456] mb-4">
                    {bloc.title}
                  </h2>
                  <div className="space-y-4 text-[15px] text-[#5A5A5A] leading-relaxed">
                    {bloc.text.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Réalisations */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="max-w-2xl mb-10">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#88b7b5] mb-3">Réalisations</p>
              <h2 className="font-baskerville text-3xl lg:text-4xl text-[#4B4456] leading-tight">
                Nos réalisations en Essonne et en Île-de-France
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {realisations.map((photo) => (
                <figure key={photo.src} className="group">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(25,20,33,0.08)]">
                    <Image
                      src={photo.src}
                      alt={photo.caption}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 25vw"
                    />
                  </div>
                  <figcaption className="mt-3 text-[13px] text-[#5A5A5A]">{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/portfolio" className="text-[#4B4456] underline underline-offset-4 hover:text-[#88b7b5] transition">
                Voir tous nos mariages réalisés
              </Link>
            </div>
          </div>
        </section>

        {/* Pourquoi une wedding planner */}
        <section className="py-16 lg:py-20 bg-[#f4f1f7]">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <div className="bg-white border border-[#88b7b5]/30 rounded-3xl p-8 md:p-10">
              <h2 className="font-baskerville text-2xl lg:text-3xl text-[#4B4456] mb-5">
                Pourquoi faire appel à une Wedding Planner en Essonne ?
              </h2>
              <div className="space-y-4 text-[15px] sm:text-[16px] text-[#5A5A5A] leading-relaxed">
                <p>
                  Une Wedding Planner peut intervenir bien au-delà du Jour J. Selon la formule choisie, elle peut vous aider à
                  déterminer les priorités de votre organisation, rechercher des prestataires, comparer les propositions,
                  structurer le budget, établir un rétroplanning, préparer les différentes étapes du mariage et coordonner les
                  professionnels impliqués.
                </p>
                <p>
                  Elle apporte également un regard extérieur lorsqu’une décision devient difficile à prendre.
                </p>
                <p>
                  Faire appel à une Wedding Planner ne signifie donc pas perdre le contrôle de son mariage. Au contraire :
                  vous gardez les choix, nous vous aidons à les transformer en organisation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-14 lg:py-16 bg-[#4B4456]">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
            <h2 className="font-baskerville text-3xl lg:text-4xl text-white leading-tight mb-4">
              Rencontrons-nous pour parler de votre mariage
            </h2>
            <p className="text-white/70 text-[16px] leading-relaxed mb-4 max-w-xl mx-auto">
              Vous préparez votre mariage en Essonne et souhaitez savoir quelle formule correspond le mieux à votre situation ?
              Faisons ensemble un premier point sur votre projet, votre date, votre lieu et le nombre d’invités prévu.
            </p>
            <p className="text-white/50 text-[13px] uppercase tracking-[0.2em] mb-8">
              Le Oui Parfait — Wedding Planner &amp; Designer — Showroom à Ris-Orangis (91)
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#88b7b5] text-white font-medium hover:bg-[#6fa3a1] transition"
              >
                Prendre rendez-vous
              </Link>
              <Link
                href="/tarifs"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-transparent text-white font-medium border border-white/30 hover:bg-white/10 transition"
              >
                Découvrir nos tarifs
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 lg:py-16 bg-[#f4f1f7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-baskerville text-[#4B4456] mb-4">FAQ — Wedding Planner Essonne</h2>
              <div className="space-y-3">
                {faq.map((item, i) => (
                  <details key={item.q} className="group rounded-2xl bg-white border border-[#88b7b5]/30 overflow-hidden" open={i === 0}>
                    <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                      <span className="font-semibold text-[#4B4456]">{item.q}</span>
                      <ChevronDown className="w-5 h-5 text-[#88b7b5] flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-[#4B4456]/80 leading-relaxed">{item.a}</p>
                      {'links' in item && item.links && (
                        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                          {item.links.map((l) => (
                            <Link key={l.href} href={l.href} className="text-sm text-[#88b7b5] hover:underline">
                              {l.label} →
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <PlanningSection />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      </main>
      <Footer />
    </div>
  );
}
