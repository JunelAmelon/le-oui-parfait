import Link from 'next/link';
import type { ReactNode } from 'react';
import { Star } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroPage } from '@/components/HeroPage';

const phoneNumber = '33687217118';
const message =
  'Bonjour 👋\nJe souhaite organiser mon mariage et vérifier votre disponibilité.\nDate :\nLieu :\nBudget approximatif :\n';
const whatsappHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export function ArticleLandingPage({
  eyebrow,
  title,
  intro,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroPage title={title} subtitle={intro} eyebrow={eyebrow} backgroundImage={image}>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#1fb85a] transition"
            >
              Vérifier ma date de mariage
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-white/90 text-[#4B4456] font-medium hover:bg-white transition"
            >
              Demander un devis
            </Link>
          </div>
          <p className="mt-4 text-xs text-white/60">
            Réponse en moins de 30 min sur WhatsApp • Sans engagement
          </p>
        </HeroPage>

        <div className="bg-[#f4f1f7] py-14 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl space-y-8">{children}</div>
        </div>

        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-12 items-start">
              <div className="bg-[#f4f1f7] border border-[#88b7b5]/30 rounded-3xl p-8">
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="font-baskerville text-4xl text-[#4B4456] mb-2">
                  5,0<span className="text-2xl text-[#4B4456]/60">/5</span>
                </p>
                <p className="text-[15px] text-[#5A5A5A] leading-relaxed">
                  Note moyenne de nos mariés — 16 avis sur mariages.net, l’annuaire de référence des professionnels du mariage.
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#88b7b5] mb-3">Nos offres</p>
                <h2 className="font-baskerville text-2xl lg:text-3xl text-[#4B4456] mb-6">
                  Choisissez votre niveau d’accompagnement
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { name: 'Offre Signature', detail: 'Organisation clé en main', href: '/tarifs/offre-signature' },
                    { name: 'Offre Élégance', detail: 'Organisation partielle', href: '/tarifs/offre-elegance' },
                    { name: 'Offre Harmonie', detail: 'Coordination du jour J', href: '/tarifs/offre-harmonie' },
                  ].map((offre) => (
                    <Link
                      key={offre.href}
                      href={offre.href}
                      className="group block bg-white border border-[#e8e0dc] rounded-2xl p-5 hover:border-[#88b7b5] hover:shadow-[0_10px_30px_rgba(25,20,33,0.08)] transition"
                    >
                      <h3 className="font-baskerville text-[17px] text-[#4B4456] mb-1 group-hover:text-[#88b7b5] transition">
                        {offre.name}
                      </h3>
                      <p className="text-[13px] text-[#5A5A5A] mb-3">{offre.detail}</p>
                      <span className="text-[11px] uppercase tracking-[0.15em] text-[#88b7b5] font-medium">
                        Découvrir →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-16 bg-[#4B4456]">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
            <h2 className="font-baskerville text-3xl lg:text-4xl text-white leading-tight mb-4">
              Vérifiez la disponibilité de votre date de mariage
            </h2>
            <p className="text-white/70 text-[16px] leading-relaxed mb-8 max-w-xl mx-auto">
              Contactez-nous : réponse rapide aujourd’hui, devis rapide, sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#1fb85a] transition"
              >
                Disponibilité en 30 min
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-transparent text-white font-medium border border-white/30 hover:bg-white/10 transition"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function ArticleSection({
  title,
  highlight = false,
  children,
}: {
  title: string;
  highlight?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      className={`rounded-3xl border p-6 md:p-8 ${
        highlight
          ? 'bg-white border-[#88b7b5]/60 shadow-[0_10px_30px_rgba(136,183,181,0.15)]'
          : 'bg-white border-[#e8e0dc]'
      }`}
    >
      <h2 className="font-baskerville text-xl md:text-2xl text-[#4B4456] mb-4">{title}</h2>
      <div className="text-[#5A5A5A] leading-relaxed space-y-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_h3]:font-baskerville [&_h3]:text-lg [&_h3]:text-[#4B4456] [&_h3]:pt-2">
        {children}
      </div>
    </section>
  );
}
