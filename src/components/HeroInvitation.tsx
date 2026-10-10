import React from 'react';
import { Calendar } from 'lucide-react';
import { INAUGURATION_CONFIG } from '../config/inauguration';

export const HeroInvitation: React.FC = () => {
  const { brand, hero, datesDisplay, year } = INAUGURATION_CONFIG;

  return (
    <section className="pt-6 sm:pt-10 pb-8 px-4 sm:px-6 max-w-4xl mx-auto overflow-hidden">
      {/* Tarjeta de invitación editorial principal */}
      <div className="relative bg-white border border-[#C8933E]/25 ring-1 ring-[#99745A]/10 rounded-3xl p-6 sm:p-10 shadow-[0_8px_32px_rgba(153,116,90,0.06)]">
        {/* Marca de agua sutil en fondo */}
        <div className="absolute right-4 top-4 text-[#99745A]/5 font-serif text-8xl font-black select-none pointer-events-none">
          MG
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
          {/* Texto de la invitación */}
          <div className="flex-1 text-center md:text-left min-w-0">
            {/* Distintivo de etapa */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#68794E]/10 border border-[#68794E]/25 text-[#4B5935] text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#68794E]"></span>
              <span>{hero.tag}</span>
            </div>

            {/* Título editorial */}
            <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-[3.25rem] text-[#231E1B] font-bold leading-[1.12] tracking-tight mb-4 text-balance">
              Estás invitado a nuestra <span className="italic font-normal text-[#A87428]">inauguración</span>
            </h1>

            {/* Texto descriptivo */}
            <p className="text-[#5C534B] text-sm sm:text-base leading-relaxed mb-6 font-normal max-w-xl text-pretty">
              {hero.description}
            </p>

            {/* Sello de fecha destacada */}
            <div className="inline-flex items-center gap-3.5 bg-[#FAF7F2] border border-[#C8933E]/30 rounded-xl px-4 py-3 shadow-xs max-w-full">
              <div className="w-9 h-9 rounded-lg bg-[#C8933E]/12 border border-[#C8933E]/30 flex items-center justify-center text-[#C8933E] shrink-0">
                <Calendar className="w-4.5 h-4.5 text-[#C8933E]" aria-hidden="true" />
              </div>
              <div className="text-left min-w-0">
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#68794E] font-bold">
                  Fechas de apertura
                </p>
                <p className="font-serif-luxury text-lg sm:text-2xl font-bold text-[#231E1B] leading-none mt-0.5 truncate">
                  {datesDisplay}, <span className="tabular-numbers">{year}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Retrato editorial de Miller */}
          <div className="shrink-0 flex flex-col items-center">
            <div className="p-2 bg-white border border-[#C8933E]/35 rounded-2xl shadow-sm">
              <div className="relative w-44 h-48 sm:w-52 sm:h-56 rounded-xl overflow-hidden bg-[#F3EEE4]">
                <img
                  src={brand.millerPortraitUrl}
                  alt={brand.name}
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#231E1B]/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-2 right-2 text-center">
                  <span className="text-[10px] tracking-[0.2em] text-white/95 uppercase font-semibold drop-shadow-xs">
                    {brand.name}
                  </span>
                </div>
              </div>
            </div>
            <p className="font-serif-luxury italic text-xs text-[#8C6D53] mt-2 font-medium">
              "Una invitación personal para ti"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
