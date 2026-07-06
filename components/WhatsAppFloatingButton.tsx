"use client";

import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

const phoneNumber = '33687217118';

const message =
  "Bonjour\nJe souhaite organiser mon mariage et vérifier votre disponibilité.\nDate :\nLieu :\nBudget approximatif :\n";

const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export function WhatsAppFloatingButton() {
  const [isBubbleHidden, setIsBubbleHidden] = useState(false);
  const [isBubbleReadyToShow, setIsBubbleReadyToShow] = useState(false);

  useEffect(() => {
    try {
      setIsBubbleHidden(localStorage.getItem('lop_whatsapp_bubble_hidden') === '1');
    } catch {
      setIsBubbleHidden(false);
    }
  }, []);

  useEffect(() => {
    if (isBubbleHidden) return;

    let timeoutId: number | undefined;
    let hasStarted = false;

    const startDelay = () => {
      if (hasStarted) return;
      hasStarted = true;
      timeoutId = window.setTimeout(() => {
        setIsBubbleReadyToShow(true);
      }, 5000);
    };

    if (typeof window !== 'undefined') {
      if (document.readyState === 'complete') {
        startDelay();
      } else {
        window.addEventListener('load', startDelay, { once: true });
        window.addEventListener('pageshow', startDelay, { once: true });
      }
    }

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      window.removeEventListener('load', startDelay);
      window.removeEventListener('pageshow', startDelay);
    };
  }, [isBubbleHidden]);

  const hideBubble = () => {
    setIsBubbleHidden(true);
    try {
      localStorage.setItem('lop_whatsapp_bubble_hidden', '1');
    } catch {}
  };

  const showBubble = () => {
    setIsBubbleHidden(false);
    setIsBubbleReadyToShow(true);
    try {
      localStorage.removeItem('lop_whatsapp_bubble_hidden');
    } catch {}
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="group relative flex items-end justify-end rounded-2xl">
        <span className="sr-only">Vérifier ma date de mariage — Réponse en moins de 30 min</span>

        {!isBubbleHidden && isBubbleReadyToShow ? (
          <div className="absolute bottom-[72px] right-0 w-[290px] sm:w-[320px]">
            <div className="rounded-2xl bg-white p-5 shadow-xl ring-1 ring-black/10">
              <button
                type="button"
                aria-label="Masquer"
                className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/40"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  hideBubble();
                }}
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-start gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white">
                  <Image
                    src="/equipe/kathy.png"
                    alt="Kathy"
                    fill
                    className="object-cover"
                    style={{ objectPosition: '50% 20%' }}
                  />
                </div>
                <div className="flex-1 pr-8">
                  <p className="text-sm font-semibold text-[#111827]">Planifier mon mariage avec Kathy</p>
                  <p className="mt-1 text-sm text-[#111827]">Vérifier ma date de mariage</p>
                  <p className="mt-2 text-xs text-[#6B7280]">Réponse en moins de 30 min</p>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {isBubbleHidden ? (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              showBubble();
            }}
            aria-label="Afficher l'infobulle"
            className="mr-2 hidden h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-lg shadow-black/10 ring-1 ring-black/10 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/40 sm:inline-flex"
            title="Afficher l'infobulle"
          >
            <span className="text-sm font-semibold text-[#111827]">i</span>
          </button>
        ) : null}

        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366] shadow-lg shadow-black/10 transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/60"
          aria-label="Vérifier ma date de mariage sur WhatsApp"
        >
          <svg
            viewBox="0 0 32 32"
            className="h-10 w-10 text-white"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fill="currentColor"
              d="M19.11 17.86c-.28-.14-1.63-.8-1.88-.89-.25-.1-.43-.14-.61.14-.18.28-.7.89-.86 1.07-.16.18-.32.21-.6.07-.28-.14-1.18-.44-2.24-1.4-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.32.43-.48.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.5-.07-.14-.61-1.47-.83-2.01-.22-.53-.44-.46-.61-.46h-.52c-.18 0-.46.07-.7.35-.25.28-.93.91-.93 2.22 0 1.31.95 2.57 1.08 2.75.14.18 1.87 2.85 4.53 4 .63.27 1.13.44 1.52.56.64.2 1.22.17 1.68.1.51-.08 1.63-.66 1.86-1.3.23-.64.23-1.19.16-1.3-.07-.11-.25-.18-.53-.32z"
            />
            <path
              fill="currentColor"
              d="M16.02 4C9.39 4 4 9.36 4 15.96c0 2.31.66 4.56 1.92 6.5L4 28l5.73-1.87a12 12 0 0 0 6.29 1.77c6.63 0 12.02-5.36 12.02-11.94C28.04 9.36 22.65 4 16.02 4zm0 21.88c-2.06 0-4.08-.55-5.85-1.6l-.42-.25-3.4 1.11 1.11-3.28-.27-.43a9.87 9.87 0 0 1-1.56-5.28c0-5.46 4.48-9.9 9.99-9.9 5.51 0 9.99 4.44 9.99 9.9 0 5.46-4.48 9.9-9.99 9.9z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
