import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroPage } from '@/components/HeroPage';
import {
  CalendarDays,
  CreditCard,
  Handshake,
  Images,
  LayoutDashboard,
  MessagesSquare,
  Palette,
  PiggyBank,
  Users,
} from 'lucide-react';

const features = [
  {
    icon: LayoutDashboard,
    title: 'Tableau de bord',
    description: 'Une vue claire et instantanée de l’avancement de votre mariage (J-0, progression, prochaines étapes).',
  },
  {
    icon: CalendarDays,
    title: 'Planning',
    description: 'Un planning structuré pour organiser chaque étape, avec une timeline simple et efficace.',
  },
  {
    icon: Users,
    title: 'Invités',
    description: 'Gérez la liste des invités, les confirmations, et gardez une visibilité sur votre capacité.',
  },
  {
    icon: PiggyBank,
    title: 'Budget',
    description: 'Suivez votre budget, vos postes de dépenses et vos objectifs, au même endroit.',
  },
  {
    icon: Palette,
    title: 'Moodboard',
    description: 'Centralisez vos inspirations (couleurs, ambiances, idées déco) et partagez-les facilement.',
  },
  {
    icon: Images,
    title: 'Galerie photo',
    description: 'Retrouvez vos photos, inspirations et éléments visuels dans un seul espace pour valider plus vite.',
  },
  {
    icon: Handshake,
    title: 'Prestataires',
    description: 'Accédez à vos prestataires, contacts et infos clés (rôles, échanges, documents) sans chercher partout.',
  },
  {
    icon: MessagesSquare,
    title: 'Messagerie & documents',
    description: 'Échangez avec notre équipe et retrouvez vos éléments clés sans perdre d’informations.',
  },
  {
    icon: CreditCard,
    title: 'Paiements',
    description: 'Gardez une visibilité sur les acomptes, les échéances et les paiements liés à votre organisation.',
  },
];

export default function EspaceClientPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroPage
          title="Outil d’organisation"
          subtitle="L’outil que nous mettons à votre disposition pour organiser votre mariage avec clarté, méthode et sérénité."
          backgroundImage="/wedding (5).jpg"
        >
          <div className="flex flex-wrap items-center gap-3">
            <a href="#" aria-label="Télécharger sur l’App Store" className="inline-flex">
              <Image
                src="/appstore.png"
                alt="Télécharger sur l’App Store"
                width={170}
                height={56}
                className="h-12 w-auto"
                priority
              />
            </a>

            <a href="#" aria-label="Télécharger sur Google Play" className="inline-flex">
              <Image
                src="/googleplay.png"
                alt="Disponible sur Google Play"
                width={170}
                height={56}
                className="h-12 w-auto"
                priority
              />
            </a>
          </div>
        </HeroPage>

        <section className="py-12 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6">
                <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-4">NOTRE OUTIL D’ACCOMPAGNEMENT</p>
                <h1 className="font-baskerville text-4xl sm:text-5xl text-[#4B4456] leading-tight">
                  Tout Votre Mariage
                  <br />
                  Au Même Endroit
                </h1>
              </div>
              <div className="lg:col-span-6">
                <p className="text-[#5A5A5A] leading-relaxed text-[16px] max-w-xl lg:ml-auto">
                  Pour que votre organisation soit fluide, nous vous donnons accès à une web app dédiée, pensée pour suivre vos
                  avancées, centraliser vos informations et avancer étape par étape avec notre équipe.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5">
                <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-4">FONCTIONS CLÉS</p>
                <h2 className="font-baskerville text-4xl lg:text-5xl text-[#4B4456] leading-tight mb-6">
                  Une Expérience
                  <br />
                  Simple Et Complète
                </h2>
                <p className="text-[#5A5A5A] leading-relaxed mb-8">
                  Les fonctionnalités affichées dans le mockup ci-contre sont disponibles pour vous aider à piloter votre mariage au
                  quotidien.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <span className="inline-flex w-full sm:w-auto items-center justify-center uppercase tracking-[0.15em] text-[11px] bg-[#88b7b5] text-white hover:bg-[#6a9a98] px-8 py-3 rounded-full transition-all whitespace-nowrap">
                      Demander une démo
                    </span>
                  </Link>
                  <Link href="/contact" className="w-full sm:w-auto">
                    <span className="inline-flex w-full sm:w-auto items-center justify-center uppercase tracking-[0.15em] text-[11px] border border-[#4B4456] text-[#4B4456] hover:bg-[#4B4456] hover:text-white px-8 py-3 rounded-full transition-all whitespace-nowrap">
                      Nous contacter
                    </span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image src="/mockup.png" alt="Mockup de la web app Le Oui Parfait" fill className="object-contain" priority />

                  <div className="absolute -top-8 -right-6 w-28 h-40 sm:w-32 sm:h-48 opacity-90 pointer-events-none">
                    <Image src="/decoration-eucalyptus.PNG" alt="Décoration eucalyptus" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div key={i} className="bg-white border border-[#e8e0dc] p-8 min-w-0">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#f4f1f7] border border-[#e8e0dc] flex items-center justify-center text-[#88b7b5] flex-shrink-0">
                      <f.icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-baskerville text-2xl text-[#4B4456] mb-2 min-w-0 break-words whitespace-normal [hyphens:auto]">
                        {f.title}
                      </p>
                      <p className="text-[#5A5A5A] text-sm leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0">
                <Image src="/wedding (6).jpg" alt="Accompagnement Le Oui Parfait" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/35" />
              </div>

              <div className="relative z-10 p-10 sm:p-12 md:p-14">
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/70">Accompagnement</p>
                <h2 className="font-baskerville text-3xl lg:text-4xl text-white mt-3 leading-tight">
                  Vous voulez tout piloter
                  <br />
                  avec notre équipe ?
                </h2>
                <p className="text-white/80 text-[16px] leading-relaxed mt-5 max-w-2xl">
                  Nous configurons votre espace, nous vous guidons étape par étape et nous restons disponibles pour répondre
                  rapidement à vos questions.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <span className="inline-flex w-full sm:w-auto items-center justify-center uppercase tracking-[0.15em] text-[11px] bg-[#88b7b5] text-white hover:bg-[#6a9a98] rounded-full px-10 py-4 font-medium transition-all shadow-lg hover:shadow-xl whitespace-nowrap">
                      Réserver un appel
                    </span>
                  </Link>
                  <Link href="/contact" className="w-full sm:w-auto">
                    <span className="inline-flex w-full sm:w-auto items-center justify-center uppercase tracking-[0.15em] text-[11px] border border-white/70 text-white hover:bg-white hover:text-[#4B4456] rounded-full px-10 py-4 font-medium transition-all whitespace-nowrap">
                      Nous contacter
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
