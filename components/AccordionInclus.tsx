'use client';

import { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';

interface Section {
  title: string;
  subtitle: string;
  items: string[];
}

export function AccordionInclus({ sections }: { sections: Section[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {sections.map((section, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border border-[#e8e0dc] bg-white overflow-hidden">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#f4f1f7] transition-colors"
            >
              <div>
                <p className="font-baskerville text-[17px] text-[#4B4456]">{section.title}</p>
                {!isOpen && (
                  <p className="text-[12px] text-[#88b7b5] mt-0.5">{section.subtitle}</p>
                )}
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[#88b7b5] flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 border-t border-[#e8e0dc]">
                <p className="text-[13px] text-[#88b7b5] italic mt-4 mb-4">{section.subtitle}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-[#5A5A5A] leading-relaxed">
                      <Check className="w-4 h-4 text-[#88b7b5] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
