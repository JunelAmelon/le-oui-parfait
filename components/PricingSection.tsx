import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Gift, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { AnimatedSection } from './AnimatedSection';

export function PricingSection() {
  return (
    <section className="pt-14 pb-20 bg-[#f4f1f7]">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

          {/* Offre Harmonie — 1er (le moins cher) */}
          <AnimatedSection delay={0.1} direction="up">
          <Card className="group relative bg-gradient-to-b from-white to-white/70 p-10 shadow-[0_10px_30px_rgba(75,68,86,0.06)] border border-white/60 rounded-3xl flex flex-col h-full overflow-hidden transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(75,68,86,0.12)]">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#88b7b5]/70 to-transparent" />
            <div className="flex items-start justify-between gap-6 mb-8">
              <div>
                <h3 className="font-baskerville text-[28px] text-[#2f2a36] mb-2 font-normal">Offre Harmonie</h3>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#88b7b5] font-medium">
                  Coordination du
                  <br />
                  Jour J
                </p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#6b6573] mb-2">À partir de</p>
              <div className="flex items-end gap-2">
                <span className="font-baskerville text-[64px] text-[#2f2a36] leading-[0.9] tracking-tight tabular-nums">1 190</span>
                <span className="font-baskerville text-[28px] text-[#2f2a36] leading-none">€</span>
              </div>
              <p className="text-[#6b6573] text-[12px] mt-2 uppercase tracking-[0.18em] flex items-center justify-center gap-2">
                <span>Forfait</span>
                <span className="normal-case tracking-normal text-[11px] text-[#6b6573]">2-3 fois sans frais</span>
              </p>
            </div>

            <p className="text-gray-600 text-[16px] mb-6 leading-relaxed text-center">
              Pour les couples ayant organisé leur mariage eux-mêmes, qui souhaitent profiter pleinement de leur journée en déléguant la gestion du jour J à nos équipes.
            </p>

            <div className="flex items-start gap-2 mb-6 p-4 bg-white/60 rounded-2xl border border-[#e7e3ea]/60">
              <Smartphone className="h-4 w-4 text-[#88b7b5] flex-shrink-0 mt-0.5" />
              <p className="text-[13px] text-gray-500 leading-relaxed">Application mobile dédiée & suivi en temps réel</p>
            </div>

            <div className="mb-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#6b6573] mb-4">Inclus</p>
              <ul className="space-y-3">
                {[
                  'Reprise complète de votre organisation existante',
                  'Structuration du planning détaillé du jour J',
                  'Visite technique des lieux 2-3 mois avant',
                  'Coordination logistique & accueil des invités',
                  'Pilotage global & gestion des imprévus',
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-[15px] text-gray-700 leading-relaxed">
                    <Check className="h-4 w-4 text-[#88b7b5] flex-shrink-0 mr-2.5 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-start gap-2 mb-8 p-4 bg-white/60 rounded-2xl border border-[#e7e3ea]/60">
              <p className="text-[12px] text-gray-500 leading-relaxed italic">Résultat : Vous vivez votre mariage pleinement, sans contraintes ni sollicitations.</p>
            </div>

            <div className="mt-auto flex flex-col gap-3">
              <Link href="/tarifs/offre-harmonie">
                <Button variant="outline" className="w-full uppercase tracking-[0.22em] text-[11px] border border-[#2f2a36]/15 text-[#2f2a36] hover:bg-[#2f2a36] hover:text-white px-8 py-6 rounded-full font-normal transition-all">
                  DÉTAIL
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="w-full uppercase tracking-[0.22em] text-[11px] bg-[#88b7b5] text-white hover:bg-[#6aa3a1] px-8 py-6 rounded-full font-normal transition-all">
                  NOUS CONTACTER
                </Button>
              </Link>
            </div>
          </Card>
          </AnimatedSection>

          {/* Offre Signature — 2ème (POPULAIRE, au milieu) */}
          <AnimatedSection delay={0.2} direction="up">
          <Card className="group relative bg-gradient-to-b from-white to-[#fbfafc] p-10 shadow-[0_10px_30px_rgba(75,68,86,0.06)] border border-[#88b7b5]/45 rounded-3xl flex flex-col h-full overflow-hidden transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(75,68,86,0.12)]">
            <div className="absolute -inset-1 rounded-[28px] bg-[#88b7b5]/20 blur-2xl opacity-80 pointer-events-none" />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-[#88b7b5]/35 pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#88b7b5] to-transparent" />
            <Badge className="absolute top-8 right-8 bg-[#88b7b5] hover:bg-[#88b7b5] text-white text-[10px] tracking-wider px-3 py-1 rounded-full font-normal shadow-sm">
              POPULAIRE
            </Badge>
            <div className="relative z-10 flex items-start justify-between gap-6 mb-8">
              <div>
                <h3 className="font-baskerville text-[28px] text-[#2f2a36] mb-2 font-normal">Offre Signature</h3>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#88b7b5] font-medium">Mariage clé en main</p>
              </div>
            </div>

            <div className="relative z-10 mb-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#6b6573] mb-2">À partir de</p>
              <div className="flex items-end gap-2">
                <span className="font-baskerville text-[64px] text-[#2f2a36] leading-[0.9] tracking-tight tabular-nums">3 490</span>
                <span className="font-baskerville text-[28px] text-[#2f2a36] leading-none">€</span>
              </div>
              <p className="text-[#6b6573] text-[12px] mt-2 uppercase tracking-[0.18em] flex items-center justify-center gap-2">
                <span>Forfait</span>
                <span className="normal-case tracking-normal text-[11px] text-[#6b6573]">2-3 fois sans frais</span>
              </p>
            </div>

            <p className="relative z-10 text-gray-600 text-[16px] mb-6 leading-relaxed text-center">
              Pour les couples qui souhaitent déléguer l'organisation de A à Z, avec une direction claire, un suivi rigoureux et une exécution fluide jusqu'au jour J.
            </p>

            <div className="relative z-10 flex items-start gap-2 mb-6 p-4 bg-white/60 rounded-2xl border border-[#e7e3ea]/60">
              <Smartphone className="h-4 w-4 text-[#88b7b5] flex-shrink-0 mt-0.5" />
              <p className="text-[13px] text-gray-500 leading-relaxed">Application mobile dédiée & suivi en temps réel</p>
            </div>

            <div className="relative z-10 mb-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#6b6573] mb-4">Inclus</p>
              <ul className="space-y-3">
                {[
                  'Gestion administrative & planning complet',
                  'Recherche & sélection des prestataires',
                  'Visites des lieux & rendez-vous accompagnés',
                  'Conception décoration & scénographie',
                  'Coordination logistique complète du jour J',
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-[15px] text-gray-700 leading-relaxed">
                    <Check className="h-4 w-4 text-[#88b7b5] flex-shrink-0 mr-2.5 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 flex items-start gap-2 mb-8 p-4 bg-[#f0f7f7] rounded-2xl border border-[#88b7b5]/25">
              <Gift className="h-4 w-4 text-[#88b7b5] flex-shrink-0 mt-0.5" />
              <p className="text-[13px] text-[#4B4456] leading-relaxed font-medium">6 privilèges exclusifs offerts (photobooth, faire-part digital, vidéo STD, site mariage, voyage de noces, personal shopper)</p>
            </div>

            <div className="relative z-10 mt-auto flex flex-col gap-3">
              <Link href="/tarifs/offre-signature">
                <Button variant="outline" className="w-full uppercase tracking-[0.22em] text-[11px] border border-[#2f2a36]/15 text-[#2f2a36] hover:bg-[#2f2a36] hover:text-white px-8 py-6 rounded-full font-normal transition-all">
                  DÉTAIL
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="w-full uppercase tracking-[0.22em] text-[11px] bg-[#88b7b5] text-white hover:bg-[#6aa3a1] px-8 py-6 rounded-full font-normal transition-all">
                  NOUS CONTACTER
                </Button>
              </Link>
            </div>
          </Card>
          </AnimatedSection>

          {/* Offre Élégance — 3ème (1890€) */}
          <AnimatedSection delay={0.3} direction="up">
          <Card className="group relative bg-gradient-to-b from-white to-white/70 p-10 shadow-[0_10px_30px_rgba(75,68,86,0.06)] border border-white/60 rounded-3xl flex flex-col h-full overflow-hidden transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(75,68,86,0.12)]">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#88b7b5]/70 to-transparent" />
            <div className="flex items-start justify-between gap-6 mb-8">
              <div>
                <h3 className="font-baskerville text-[28px] text-[#2f2a36] mb-2 font-normal">Offre Élégance</h3>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#88b7b5] font-medium">Organisation partielle</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#6b6573] mb-2">À partir de</p>
              <div className="flex items-end gap-2">
                <span className="font-baskerville text-[64px] text-[#2f2a36] leading-[0.9] tracking-tight tabular-nums">1 890</span>
                <span className="font-baskerville text-[28px] text-[#2f2a36] leading-none">€</span>
              </div>
              <p className="text-[#6b6573] text-[12px] mt-2 uppercase tracking-[0.18em] flex items-center justify-center gap-2">
                <span>Forfait</span>
                <span className="normal-case tracking-normal text-[11px] text-[#6b6573]">2-3 fois sans frais</span>
              </p>
            </div>

            <p className="text-gray-600 text-[16px] mb-6 leading-relaxed text-center">
              Pour les couples déjà lancés dans l'organisation, qui veulent être accompagnés sur des pôles clés (planning, prestataires, coordination) tout en gardant la main.
            </p>

            <div className="flex items-start gap-2 mb-6 p-4 bg-white/60 rounded-2xl border border-[#e7e3ea]/60">
              <Smartphone className="h-4 w-4 text-[#88b7b5] flex-shrink-0 mt-0.5" />
              <p className="text-[13px] text-gray-500 leading-relaxed">Application mobile dédiée & suivi en temps réel</p>
            </div>

            <div className="mb-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#6b6573] mb-4">Inclus</p>
              <ul className="space-y-3">
                {[
                  'Analyse & cadrage de votre organisation',
                  'Structuration administrative & planning ciblé',
                  'Accompagnement prestataires sur pôles définis',
                  'Conseils et rendez-vous accompagnés',
                  'Coordination sur 3 à 5 pôles de votre choix',
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-[15px] text-gray-700 leading-relaxed">
                    <Check className="h-4 w-4 text-[#88b7b5] flex-shrink-0 mr-2.5 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-start gap-2 mb-8 p-4 bg-[#f0f7f7] rounded-2xl border border-[#88b7b5]/25">
              <Gift className="h-4 w-4 text-[#88b7b5] flex-shrink-0 mt-0.5" />
              <p className="text-[13px] text-[#4B4456] leading-relaxed font-medium">3 privilèges offerts (livre d'or audio, faire-part digital, voyage de noces)</p>
            </div>

            <div className="mt-auto flex flex-col gap-3">
              <Link href="/tarifs/offre-elegance">
                <Button variant="outline" className="w-full uppercase tracking-[0.22em] text-[11px] border border-[#2f2a36]/15 text-[#2f2a36] hover:bg-[#2f2a36] hover:text-white px-8 py-6 rounded-full font-normal transition-all">
                  DÉTAIL
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="w-full uppercase tracking-[0.22em] text-[11px] bg-[#88b7b5] text-white hover:bg-[#6aa3a1] px-8 py-6 rounded-full font-normal transition-all">
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
