import React from 'react';
import { Calendar } from 'lucide-react';
import { INAUGURATION_CONFIG } from '../config/inauguration';

export const HeroInvitation: React.FC = () => {
  const { brand, hero, datesDisplay, year } = INAUGURATION_CONFIG;

  return (
    <section className="pt-8 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 max-w-4xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-7 md:gap-12">
        {/* Main invitation copy */}
        <div className="flex-1 text-center md:text-left min-w-0">
          {/* Badge: Una nueva etapa */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#68794E]/10 border border-[#68794E]/25 text-[#4B5935] text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#68794E]"></span>
            <span>{hero.tag}</span>
          </div>

          {/* Title */}
          <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-5.5xl text-[#231E1B] font-bold leading-[1.14] tracking-tight mb-4 text-balance">
            {hero.title}
          </h1>

          {/* Subtitle / text */}
          <p className="text-[#5C534B] text-sm sm:text-lg leading-relaxed mb-6 font-normal max-w-xl text-pretty">
            {hero.description}
          </p>

          {/* Featured date badge */}
          <div className="inline-flex items-center gap-3 bg-white border border-[#99745A]/20 rounded-xl px-3.5 sm:px-4 py-2.5 shadow-xs max-w-full">
            <div className="w-9 h-9 rounded-lg bg-[#F3EEE4] flex items-center justify-center text-[#C8933E] shrink-0">
              <Calendar className="w-5 h-5 text-[#C8933E]" aria-hidden="true" />
            </div>
            <div className="text-left min-w-0">
              <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#68794E] font-bold">
                Fechas de inauguración
              </p>
              <p className="font-serif-luxury text-lg sm:text-2xl font-bold text-[#231E1B] leading-tight truncate">
                {datesDisplay}, <span className="tabular-numbers">{year}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Discreet portrait of Miller Greiseland */}
        <div className="shrink-0 flex flex-col items-center">
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-2 border-[#C8933E]/30 bg-[#F3EEE4] shadow-sm">
            <img
              src={brand.millerPortraitUrl}
              alt="Miller Greiseland"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
            {/* Subtle bottom gradient for editorial warmth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#231E1B]/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-2 left-3 right-3 text-center">
              <span className="text-[10px] sm:text-[11px] tracking-wider text-white font-medium drop-shadow-sm uppercase">
                {brand.name}
              </span>
            </div>
          </div>
          <span className="text-[11px] text-[#5C534B] mt-2 font-medium">
            Invitación personal
          </span>
        </div>
      </div>
    </section>
  );
};
