'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Quels Services Offre Le Oui Parfait?',
    answer: 'Le Oui Parfait offre des services complets de planification de mariage incluant la planification complète, la planification partielle, la coordination du jour J, les mariages de destination et la conception d\'événements. Nous adaptons nos services pour répondre à vos besoins spécifiques et à votre vision.',
  },
  {
    question: 'Gérez-vous la Sélection des Fournisseurs?',
    answer: 'Oui, nous avons un réseau étendu de fournisseurs de confiance et nous vous guiderons à travers le processus de sélection, gérerons les négociations et coordonnerons toutes les communications avec les fournisseurs pour assurer une exécution sans faille de votre événement.',
  },
  {
    question: 'Pouvez-vous Planifier des Mariages de Destination?',
    answer: 'Absolument! Nous sommes spécialisés dans les mariages de destination et avons de l\'expérience dans la planification d\'événements dans divers endroits à travers le monde. Nous gérons toute la logistique, la coordination des fournisseurs et la gestion sur place pour créer votre célébration de destination parfaite.',
  },
  {
    question: 'Combien de Temps à l\'Avance Devrions-nous Réserver?',
    answer: 'Nous recommandons de réserver 12 à 18 mois à l\'avance pour une planification complète. Cependant, nous pouvons accommoder des délais plus courts selon la disponibilité et l\'étendue de votre événement.',
  },
  {
    question: 'Offrez-vous des Forfaits de Planification Partielle?',
    answer: 'Oui, nos forfaits de planification partielle sont parfaits pour les couples qui ont commencé à planifier mais ont besoin de conseils professionnels et de soutien pour des aspects spécifiques de leur mariage.',
  },
  {
    question: 'Pouvez-vous Gérer les Mariages Multiculturels?',
    answer: 'Nous avons une vaste expérience dans la planification de mariages multiculturels et interconfessionnels. Nous respectons et honorons toutes les traditions et travaillons étroitement avec vous pour intégrer harmonieusement différents éléments culturels dans votre célébration.',
  },
  {
    question: 'Pouvez-vous Aider avec les Demandes en Mariage?',
    answer: 'Oui! Nous adorons aider à créer des moments de demande magiques. Des cadres intimes aux grands gestes, nous pouvons planifier et exécuter l\'expérience de fiançailles parfaite.',
  },
  {
    question: 'Comment Pouvons-nous Commencer à Planifier avec Le Oui Parfait?',
    answer: 'Contactez-nous simplement via notre formulaire de contact ou planifiez une consultation. Nous discuterons de votre vision, de votre calendrier et de la façon dont nous pouvons donner vie à votre mariage de rêve.',
  },
];

function FAQAccordionItem({ question, answer, isOpen, onClick }: FAQItem & { isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left transition-all duration-200 hover:text-gray-600"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-serif text-gray-700 pr-4">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-[#88b7b5] flex-shrink-0" />
        ) : (
          <Plus className="w-5 h-5 text-[#88b7b5] flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6 pr-8 text-gray-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
          {answer}
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const leftColumnFAQs = faqData.filter((_, index) => index % 2 === 0);
  const rightColumnFAQs = faqData.filter((_, index) => index % 2 !== 0);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] text-gray-500 mb-4 uppercase">
            Questions Courantes
          </p>
          <h2 className="heading-main">
            Questions Fréquemment Posées
            <br />
            Sur Le Oui Parfait
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
          <div>
            {leftColumnFAQs.map((faq, index) => (
              <FAQAccordionItem
                key={index * 2}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index * 2}
                onClick={() => handleToggle(index * 2)}
              />
            ))}
          </div>

          <div>
            {rightColumnFAQs.map((faq, index) => (
              <FAQAccordionItem
                key={index * 2 + 1}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index * 2 + 1}
                onClick={() => handleToggle(index * 2 + 1)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
