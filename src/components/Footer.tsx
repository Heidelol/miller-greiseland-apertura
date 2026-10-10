import React from 'react';
import { Instagram } from 'lucide-react';
import { INAUGURATION_CONFIG } from '../config/inauguration';

export const Footer: React.FC = () => {
  const { brand, contact, closing, year } = INAUGURATION_CONFIG;

  return (
    <footer className="mt-12 border-t border-[#99745A]/15 bg-[#F3EEE4]/60 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Brand logo */}
        <div className="w-12 h-12 rounded-full border border-[#C8933E]/40 bg-white p-1 flex items-center justify-center shadow-xs overflow-hidden mb-4">
          <img
            src={brand.logoUrl}
            alt={brand.studioName}
            className="w-full h-full object-contain"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== brand.logoFallbackUrl) {
                target.src = brand.logoFallbackUrl;
              }
            }}
          />
        </div>

        {/* Cierre editorial */}
        <p className="font-serif-luxury italic text-xl sm:text-2xl text-[#231E1B] mb-2 max-w-md">
          "{closing.text}"
        </p>

        <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#68794E] mb-6">
          {closing.signature}
        </p>

        {/* Instagram link */}
        <div className="mb-8">
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#99745A]/20 text-[#231E1B] hover:text-[#C8933E] hover:border-[#C8933E] transition-all text-xs font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-[#C8933E]"
          >
            <Instagram className="w-4 h-4 text-[#C8933E]" aria-hidden="true" />
            <span>Seguir en Instagram {contact.instagramHandle}</span>
          </a>
        </div>

        {/* Pie informativo */}
        <div className="text-[11px] text-[#5C534B]">
          <p>© <span className="tabular-numbers">{year}</span> {brand.studioName}. Todos los derechos reservados.</p>
          <p className="mt-1">Página de invitación independiente para eventos de inauguración.</p>
        </div>
      </div>
    </footer>
  );
};
