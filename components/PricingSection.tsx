import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

export function PricingSection() {
  return (
    <section className="py-20 bg-[#FAF9F7]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.25em] text-gray-500 uppercase mb-4">
            FORFAITS FLEXIBLES
          </p>
          <h2 className="heading-main">
            Forfaits Sur Mesure Pour<br />Chaque Histoire d'Amour
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Essential Package */}
          <Card className="bg-white p-10 shadow-sm border-none">
            <h3 className="font-serif text-[28px] text-[#4A4A4A] mb-1 font-normal">Forfait Essentiel</h3>
            <div className="mb-2">
              <span className="font-serif text-[56px] text-[#4A4A4A] leading-none">3 299€</span>
            </div>
            <p className="text-gray-500 text-[13px] mb-8">
              / forfait
            </p>
            <p className="text-gray-600 text-[15px] mb-10 leading-relaxed">
              Pour les célébrations intimes et personnelles
            </p>

            <div className="mb-10">
              <p className="font-serif text-[17px] text-[#4A4A4A] mb-6">Qu'est-ce qui est Inclus?</p>
              <ul className="space-y-3">
                <li className="flex items-start text-[14px] text-gray-600 leading-relaxed">
                  <Check className="h-5 w-5 text-[#88b7b5] flex-shrink-0 mr-3 mt-0.5" />
                  <span>Liste de contrôle et calendrier d'événement personnalisés</span>
                </li>
                <li className="flex items-start text-[14px] text-gray-600 leading-relaxed">
                  <Check className="h-5 w-5 text-[#88b7b5] flex-shrink-0 mr-3 mt-0.5" />
                  <span>Coordination et communication avec les fournisseurs</span>
                </li>
                <li className="flex items-start text-[14px] text-gray-600 leading-relaxed">
                  <Check className="h-5 w-5 text-[#88b7b5] flex-shrink-0 mr-3 mt-0.5" />
                  <span>Supervision et planification du jour J</span>
                </li>
                <li className="flex items-start text-[14px] text-gray-600 leading-relaxed">
                  <Check className="h-5 w-5 text-[#88b7b5] flex-shrink-0 mr-3 mt-0.5" />
                  <span>Installation du lieu et assistance au stylisme</span>
                </li>
              </ul>
            </div>

            <Button
              variant="outline"
              className="uppercase tracking-[0.2em] text-[11px] border border-[#88b7b5] text-[#5A5A5A] hover:bg-[#88b7b5] hover:text-white px-8 py-6 rounded-full font-normal transition-all"
            >
              CHOISIR CE FORFAIT
            </Button>
          </Card>

          {/* Signature Package - Popular */}
          <Card className="bg-white p-10 shadow-sm border-none relative">
            <Badge className="absolute top-8 right-8 bg-[#88b7b5] hover:bg-[#88b7b5] text-white text-[10px] tracking-wider px-3 py-1 rounded-full font-normal">
              POPULAIRE
            </Badge>

            <h3 className="font-serif text-[28px] text-[#4A4A4A] mb-1 font-normal">Forfait Signature</h3>
            <div className="mb-2">
              <span className="font-serif text-[56px] text-[#4A4A4A] leading-none">5 499€</span>
            </div>
            <p className="text-gray-500 text-[13px] mb-8">
              / forfait
            </p>
            <p className="text-gray-600 text-[15px] mb-10 leading-relaxed">
              Pour une expérience de planification complète
            </p>

            <div className="mb-10">
              <p className="font-serif text-[17px] text-[#4A4A4A] mb-6">Qu'est-ce qui est Inclus?</p>
              <ul className="space-y-3">
                <li className="flex items-start text-[14px] text-gray-600 leading-relaxed">
                  <Check className="h-5 w-5 text-[#88b7b5] flex-shrink-0 mr-3 mt-0.5" />
                  <span>Concept complet et direction de design du mariage</span>
                </li>
                <li className="flex items-start text-[14px] text-gray-600 leading-relaxed">
                  <Check className="h-5 w-5 text-[#88b7b5] flex-shrink-0 mr-3 mt-0.5" />
                  <span>Négociation et gestion des fournisseurs</span>
                </li>
                <li className="flex items-start text-[14px] text-gray-600 leading-relaxed">
                  <Check className="h-5 w-5 text-[#88b7b5] flex-shrink-0 mr-3 mt-0.5" />
                  <span>Planification budgétaire et suivi transparent</span>
                </li>
                <li className="flex items-start text-[14px] text-gray-600 leading-relaxed">
                  <Check className="h-5 w-5 text-[#88b7b5] flex-shrink-0 mr-3 mt-0.5" />
                  <span>Coordination de la répétition et de la cérémonie</span>
                </li>
                <li className="flex items-start text-[14px] text-gray-600 leading-relaxed">
                  <Check className="h-5 w-5 text-[#88b7b5] flex-shrink-0 mr-3 mt-0.5" />
                  <span>Supervision et gestion sur site</span>
                </li>
              </ul>
            </div>

            <Button
              variant="outline"
              className="uppercase tracking-[0.2em] text-[11px] border border-[#88b7b5] text-[#5A5A5A] hover:bg-[#88b7b5] hover:text-white px-8 py-6 rounded-full font-normal transition-all"
            >
              CHOISIR CE FORFAIT
            </Button>
          </Card>

          {/* Luxury Package */}
          <Card className="bg-white p-10 shadow-sm border-none">
            <h3 className="font-serif text-[28px] text-[#4A4A4A] mb-1 font-normal">Forfait Luxe</h3>
            <div className="mb-2">
              <span className="font-serif text-[56px] text-[#4A4A4A] leading-none">8 999€</span>
            </div>
            <p className="text-gray-500 text-[13px] mb-8">
              / forfait
            </p>
            <p className="text-gray-600 text-[15px] mb-10 leading-relaxed">
              Pour des grandes célébrations inoubliables
            </p>

            <div className="mb-10">
              <p className="font-serif text-[17px] text-[#4A4A4A] mb-6">Qu'est-ce qui est Inclus?</p>
              <ul className="space-y-3">
                <li className="flex items-start text-[14px] text-gray-600 leading-relaxed">
                  <Check className="h-5 w-5 text-[#88b7b5] flex-shrink-0 mr-3 mt-0.5" />
                  <span>Thème personnalisé et direction de stylisme</span>
                </li>
                <li className="flex items-start text-[14px] text-gray-600 leading-relaxed">
                  <Check className="h-5 w-5 text-[#88b7b5] flex-shrink-0 mr-3 mt-0.5" />
                  <span>Coordination de planification complète</span>
                </li>
                <li className="flex items-start text-[14px] text-gray-600 leading-relaxed">
                  <Check className="h-5 w-5 text-[#88b7b5] flex-shrink-0 mr-3 mt-0.5" />
                  <span>Décor haut de gamme et arrangements floraux</span>
                </li>
                <li className="flex items-start text-[14px] text-gray-600 leading-relaxed">
                  <Check className="h-5 w-5 text-[#88b7b5] flex-shrink-0 mr-3 mt-0.5" />
                  <span>Gestion du budget et de la logistique</span>
                </li>
                <li className="flex items-start text-[14px] text-gray-600 leading-relaxed">
                  <Check className="h-5 w-5 text-[#88b7b5] flex-shrink-0 mr-3 mt-0.5" />
                  <span>Supervision de la répétition et de la cérémonie</span>
                </li>
                <li className="flex items-start text-[14px] text-gray-600 leading-relaxed">
                  <Check className="h-5 w-5 text-[#88b7b5] flex-shrink-0 mr-3 mt-0.5" />
                  <span>Équipe de planification dédiée sur site</span>
                </li>
              </ul>
            </div>

            <Button
              variant="outline"
              className="uppercase tracking-[0.2em] text-[11px] border border-[#88b7b5] text-[#5A5A5A] hover:bg-[#88b7b5] hover:text-white px-8 py-6 rounded-full font-normal transition-all"
            >
              CHOISIR CE FORFAIT
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
