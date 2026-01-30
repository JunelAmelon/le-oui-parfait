'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';

import { useState } from 'react';

export function PlanningSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    date: '',
    eventType: '',
    message: '',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = 'checked' in e.target ? e.target.checked : false;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <section className="py-20 bg-[#F5F2F0] relative overflow-hidden min-h-screen">
      
      {/* Décoration eucalyptus */}
      <div className="absolute top-1/4 left-0 w-24 h-64 opacity-40 z-5">
        <img
          src="https://demo.deverust.com/bellavue/wp-content/uploads/sites/75/2025/10/IMG02-R89NSWD.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Décoration florale */}
      <div className="absolute bottom-8 right-8 w-40 h-40 opacity-90 z-5">
        <img
          src="https://demo.deverust.com/bellavue/wp-content/uploads/sites/75/2025/10/IMG02-R89NSWD.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative">
        <div className="flex items-center relative">

          {/* FORMULAIRE */}
          <div className="bg-white rounded-lg shadow-lg px-12 py-8 w-full max-w-2xl relative z-20">
            <p className="text-[10px] tracking-[0.3em] text-gray-500 uppercase mb-4 font-light">
              CONTACTEZ-NOUS
            </p>

            <h2 className="font-serif text-[42px] text-[#3B3B3B] leading-[1.15] font-normal mb-10">
              Planifions Ensemble<br />Le Jour de Vos Rêves
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" name="fullName" placeholder="Nom complet" value={formData.fullName} onChange={handleChange} className="input" />
                <input type="email" name="email" placeholder="Adresse email" value={formData.email} onChange={handleChange} className="input" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input type="tel" name="phone" placeholder="Téléphone" value={formData.phone} onChange={handleChange} className="input" />
                <input type="text" name="subject" placeholder="Sujet" value={formData.subject} onChange={handleChange} className="input" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="date"
                  placeholder="Choisir une date"
                  value={formData.date}
                  onChange={handleChange}
                  onFocus={(e) => (e.target.type = 'date')}
                  onBlur={(e) => !e.target.value && (e.target.type = 'text')}
                  className="input"
                />
                <input type="text" name="eventType" placeholder="Type d'événement" value={formData.eventType} onChange={handleChange} className="input" />
              </div>

              <textarea
                name="message"
                rows={4}
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none"
              />

              <div className="flex items-start gap-3 pt-4">
                <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="mt-1" />
                <label className="text-[13px] text-gray-600">
                  J'ai lu et accepté les conditions générales
                </label>
              </div>

              <button
                type="submit"
                className="uppercase tracking-[0.25em] text-[10px] border border-gray-400 px-8 py-3 rounded-full mt-6 hover:bg-gray-100 transition"
              >
                ENVOYER
              </button>
            </form>
          </div>

          {/* IMAGE — DÉBORDE SUR LE FORMULAIRE */}
          <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-[52%] w-[50%] z-30">
            <img
              src="https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg"
              alt=""
              className="w-full h-[720px] object-cover"
            />
          </div>

        </div>
      </div>

      <style jsx>{`
        .input {
          background: transparent;
          border-bottom: 1px solid #d1d5db;
          padding: 0.75rem 0;
          font-size: 0.875rem;
          outline: none;
        }
      `}</style>
    </section>
  );
}
