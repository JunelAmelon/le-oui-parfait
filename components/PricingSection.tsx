import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Gift, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { AnimatedSection } from './AnimatedSection';

export function PricingSection() {
  return (
    <section className="py-20 bg-[#f4f1f7]">
      <div className="container mx-auto px-6 max-w-7xl">
        <AnimatedSection direction="up">
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.25em] text-gray-500 uppercase mb-4">
            NOS OFFRES
          </p>
          <h2 className="heading-main">
            Une Offre Pour Chaque<br />Projet de Mariage
          </h2>
        </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Offre Harmonie — 1er (le moins cher) */}
          <AnimatedSection delay={0.1} direction="up">
          <Card className="bg-white p-10 shadow-[0_10px_30px_rgba(75,68,86,0.08)] border border-[#e7e3ea] rounded-2xl flex flex-col h-full">
            <h3 className="font-baskerville text-[26px] text-[#4B4456] mb-1 font-normal">Offre Harmonie</h3>
            <p className="text-[11px] uppercase tracking-[0.15em] text-[#88b7b5] mb-3 font-medium">Coordination du Jour J</p>
            <div className="mb-1">
              <span className="text-[13px] text-gray-400">à partir de</span>
            </div>
            <div className="mb-1">
              <span className="font-baskerville text-[56px] text-[#4B4456] leading-none tracking-tight tabular-nums">1 190<span className="text-[28px] align-top">€</span></span>
            </div>
            <p className="text-gray-500 text-[13px] mb-5">/ forfait</p>
            <p className="text-gray-600 text-[16px] mb-6 leading-relaxed">
              Pour les couples ayant organisé leur mariage eux-mêmes, qui souhaitent profiter pleinement de leur journée en déléguant la gestion du jour J.
            </p>

            <div className="flex items-start gap-2 mb-6 p-3 bg-[#f4f1f7] rounded-lg">
              <Smartphone className="h-4 w-4 text-[#88b7b5] flex-shrink-0 mt-0.5" />
              <p className="text-[13px] text-gray-500 leading-relaxed">Application mobile dédiée & suivi en temps réel</p>
            </div>

            <div className="mb-6">
              <p className="font-baskerville text-[15px] text-[#4A4A4A] mb-4">Ce qui est inclus :</p>
              <ul className="space-y-2.5">
                {[
                  'Reprise complète de votre organisation existante',
                  'Structuration du planning détaillé du jour J',
                  'Visite technique des lieux 2-3 mois avant',
                  'Coordination logistique & accueil des invités',
                  'Pilotage global & gestion des imprévus',
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-[15px] text-gray-600 leading-relaxed">
                    <Check className="h-4 w-4 text-[#88b7b5] flex-shrink-0 mr-2.5 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-start gap-2 mb-8 p-3 bg-[#f4f1f7] rounded-lg border-l-2 border-[#e7e3ea]">
              <p className="text-[12px] text-gray-500 leading-relaxed italic">Résultat : Vous vivez votre mariage pleinement, sans contraintes ni sollicitations.</p>
            </div>

            <div className="mt-auto flex flex-col gap-3">
              <Link href="/tarifs/offre-harmonie">
                <Button variant="outline" className="w-full uppercase tracking-[0.2em] text-[11px] border border-[#88b7b5] text-[#5A5A5A] hover:bg-[#88b7b5] hover:text-white px-8 py-6 rounded-full font-normal transition-all">
                  DÉTAIL
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="w-full uppercase tracking-[0.2em] text-[11px] bg-[#4B4456] text-white hover:bg-[#3a3345] px-8 py-6 rounded-full font-normal transition-all">
                  NOUS CONTACTER
                </Button>
              </Link>
            </div>
          </Card>
          </AnimatedSection>

          {/* Offre Signature — 2ème (POPULAIRE, au milieu) */}
          <AnimatedSection delay={0.2} direction="up">
          <Card className="bg-white p-10 shadow-[0_10px_30px_rgba(75,68,86,0.08)] border border-[#e7e3ea] rounded-2xl relative flex flex-col h-full">
            <Badge className="absolute top-8 right-8 bg-white hover:bg-white text-[#4B4456] text-[10px] tracking-wider px-3 py-1 rounded-full font-normal border border-[#88b7b5]">
              POPULAIRE
            </Badge>
            <h3 className="font-baskerville text-[26px] text-[#4B4456] mb-1 font-normal">Offre Signature</h3>
            <p className="text-[11px] uppercase tracking-[0.15em] text-[#88b7b5] mb-3 font-medium">Mariage clé en main</p>
            <div className="mb-1">
              <span className="text-[13px] text-gray-400">à partir de</span>
            </div>
            <div className="mb-1">
              <span className="font-baskerville text-[56px] text-[#4B4456] leading-none tracking-tight tabular-nums">3 490<span className="text-[28px] align-top">€</span></span>
            </div>
            <p className="text-gray-500 text-[13px] mb-5">/ forfait</p>
            <p className="text-gray-600 text-[16px] mb-6 leading-relaxed">
              Formule clé en main pour ceux qui souhaitent confier l'intégralité de l'organisation à un professionnel.
            </p>

            <div className="flex items-start gap-2 mb-6 p-3 bg-[#f4f1f7] rounded-lg">
              <Smartphone className="h-4 w-4 text-[#88b7b5] flex-shrink-0 mt-0.5" />
              <p className="text-[13px] text-gray-500 leading-relaxed">Application mobile dédiée & suivi en temps réel</p>
            </div>

            <div className="mb-6">
              <p className="font-baskerville text-[15px] text-[#4A4A4A] mb-4">Ce qui est inclus :</p>
              <ul className="space-y-2.5">
                {[
                  'Gestion administrative & planning complet',
                  'Recherche & sélection des prestataires',
                  'Visites des lieux & rendez-vous accompagnés',
                  'Conception décoration & scénographie',
                  'Coordination logistique complète du jour J',
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-[15px] text-gray-600 leading-relaxed">
                    <Check className="h-4 w-4 text-[#88b7b5] flex-shrink-0 mr-2.5 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-start gap-2 mb-8 p-3 bg-[#f0f7f7] rounded-lg border-l-2 border-[#88b7b5]">
              <Gift className="h-4 w-4 text-[#88b7b5] flex-shrink-0 mt-0.5" />
              <p className="text-[13px] text-[#4B4456] leading-relaxed font-medium">6 privilèges exclusifs offerts (photobooth, faire-part digital, vidéo STD, site mariage, voyage de noces, personal shopper)</p>
            </div>

            <div className="mt-auto flex flex-col gap-3">
              <Link href="/tarifs/offre-signature">
                <Button variant="outline" className="w-full uppercase tracking-[0.2em] text-[11px] border border-[#88b7b5] text-[#5A5A5A] hover:bg-[#88b7b5] hover:text-white px-8 py-6 rounded-full font-normal transition-all">
                  DÉTAIL
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="w-full uppercase tracking-[0.2em] text-[11px] bg-[#4B4456] text-white hover:bg-[#3a3345] px-8 py-6 rounded-full font-normal transition-all">
                  NOUS CONTACTER
                </Button>
              </Link>
            </div>
          </Card>
          </AnimatedSection>

          {/* Offre Élégance — 3ème (1890€) */}
          <AnimatedSection delay={0.3} direction="up">
          <Card className="bg-white p-10 shadow-[0_10px_30px_rgba(75,68,86,0.08)] border border-[#e7e3ea] rounded-2xl flex flex-col h-full">
            <h3 className="font-baskerville text-[26px] text-[#4B4456] mb-1 font-normal">Offre Élégance</h3>
            <p className="text-[11px] uppercase tracking-[0.15em] text-[#88b7b5] mb-3 font-medium">Organisation partielle</p>
            <div className="mb-1">
              <span className="text-[13px] text-gray-400">à partir de</span>
            </div>
            <div className="mb-1">
              <span className="font-baskerville text-[56px] text-[#4B4456] leading-none tracking-tight tabular-nums">1 890<span className="text-[28px] align-top">€</span></span>
            </div>
            <p className="text-gray-500 text-[13px] mb-5">/ forfait</p>
            <p className="text-gray-600 text-[16px] mb-6 leading-relaxed">
              Un accompagnement structuré sur des pôles précis, pour vous laisser la maîtrise de votre projet tout en bénéficiant d'un cadre professionnel.
            </p>

            <div className="flex items-start gap-2 mb-6 p-3 bg-[#f4f1f7] rounded-lg">
              <Smartphone className="h-4 w-4 text-[#88b7b5] flex-shrink-0 mt-0.5" />
              <p className="text-[13px] text-gray-500 leading-relaxed">Application mobile dédiée & suivi en temps réel</p>
            </div>

            <div className="mb-6">
              <p className="font-baskerville text-[15px] text-[#4A4A4A] mb-4">Ce qui est inclus :</p>
              <ul className="space-y-2.5">
                {[
                  'Analyse & cadrage de votre organisation',
                  'Structuration administrative & planning ciblé',
                  'Accompagnement prestataires sur pôles définis',
                  'Conseils et rendez-vous accompagnés',
                  'Coordination sur 3 à 5 pôles de votre choix',
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-[15px] text-gray-600 leading-relaxed">
                    <Check className="h-4 w-4 text-[#88b7b5] flex-shrink-0 mr-2.5 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-start gap-2 mb-8 p-3 bg-[#f0f7f7] rounded-lg border-l-2 border-[#88b7b5]">
              <Gift className="h-4 w-4 text-[#88b7b5] flex-shrink-0 mt-0.5" />
              <p className="text-[13px] text-[#4B4456] leading-relaxed font-medium">3 privilèges offerts (livre d'or audio, faire-part digital, voyage de noces)</p>
            </div>

            <div className="mt-auto flex flex-col gap-3">
              <Link href="/tarifs/offre-elegance">
                <Button variant="outline" className="w-full uppercase tracking-[0.2em] text-[11px] border border-[#88b7b5] text-[#5A5A5A] hover:bg-[#88b7b5] hover:text-white px-8 py-6 rounded-full font-normal transition-all">
                  DÉTAIL
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="w-full uppercase tracking-[0.2em] text-[11px] bg-[#4B4456] text-white hover:bg-[#3a3345] px-8 py-6 rounded-full font-normal transition-all">
                  NOUS CONTACTER
                </Button>
              </Link>
            </div>
          </Card>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
