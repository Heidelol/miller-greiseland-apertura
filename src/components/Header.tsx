import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { INAUGURATION_CONFIG } from '../config/inauguration';

export const Header: React.FC = () => {
  const { brand, contact } = INAUGURATION_CONFIG;

  return (
    <header className="sticky top-0 z-40 bg-[#F8F5EE]/95 backdrop-blur-md border-b border-[#99745A]/15 transition-all">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        {/* Brand logo & typography */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#C8933E]/40 bg-white p-1 flex items-center justify-center shadow-xs overflow-hidden shrink-0">
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
          <div className="flex flex-col">
            <span className="font-serif-luxury text-sm sm:text-xl font-bold tracking-wider text-[#231E1B] uppercase leading-none whitespace-nowrap">
              {brand.name}
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.22em] text-[#68794E] uppercase font-bold mt-0.5 sm:mt-1">
              Studio
            </span>
          </div>
        </div>

        {/* Quick direct contact links */}
        <div className="flex items-center gap-2 sm:gap-4 text-xs font-semibold text-[#5C534B] shrink-0">
          <a
            href={contact.phoneTel}
            className="flex items-center gap-1 sm:gap-1.5 hover:text-[#C8933E] transition-colors focus-visible:outline-2 focus-visible:outline-[#C8933E] rounded-sm py-1 px-1 sm:px-1.5"
            aria-label={`Llamar al ${contact.phoneDisplay}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#68794E]" aria-hidden="true" />
            <span className="hidden sm:inline">{contact.phoneDisplay}</span>
            <span className="sm:hidden">Llamar</span>
          </a>

          <a
            href="#ubicacion"
            className="flex items-center gap-1 sm:gap-1.5 hover:text-[#C8933E] transition-colors focus-visible:outline-2 focus-visible:outline-[#C8933E] rounded-sm py-1 px-1 sm:px-1.5"
          >
            <MapPin className="w-3.5 h-3.5 text-[#C8933E]" aria-hidden="true" />
            <span>Ubicación</span>
          </a>
        </div>
      </div>
    </header>
  );
};
