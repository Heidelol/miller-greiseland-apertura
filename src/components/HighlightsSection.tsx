import React from 'react';
import { Coffee, Users } from 'lucide-react';
import { INAUGURATION_CONFIG } from '../config/inauguration';

export const HighlightsSection: React.FC = () => {
  const { hero } = INAUGURATION_CONFIG;

  return (
    <section className="py-2 px-4 sm:px-6 max-w-4xl mx-auto" aria-label="Detalles de la experiencia">
      <div className="bg-[#FAF7F2] border border-[#C8933E]/25 ring-1 ring-[#99745A]/10 rounded-2xl p-5 sm:p-7 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#99745A]/15">
          {/* Beneficio de cortesía */}
          <div className="flex items-start gap-3.5 pt-1 md:pt-0">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#C8933E]/35 flex items-center justify-center text-[#C8933E] shrink-0 shadow-2xs mt-0.5">
              <Coffee className="w-5 h-5 text-[#C8933E]" aria-hidden="true" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#68794E] uppercase tracking-[0.2em] block mb-0.5">
                Cortesía de bienvenida
              </span>
              <p className="font-serif-luxury text-xl font-bold text-[#231E1B] leading-snug">
                {hero.benefit}
              </p>
              <p className="text-xs text-[#5C534B] mt-1">
                Una atención especial pensada para acompañar tu momento de transformación.
              </p>
            </div>
          </div>

          {/* Cupo anunciado */}
          <div className="flex items-start gap-3.5 pt-5 md:pt-0 md:pl-8">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#68794E]/35 flex items-center justify-center text-[#68794E] shrink-0 shadow-2xs mt-0.5">
              <Users className="w-5 h-5 text-[#68794E]" aria-hidden="true" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#68794E] uppercase tracking-[0.2em] block mb-0.5">
                Capacidad confirmada
              </span>
              <p className="font-serif-luxury text-xl font-bold text-[#231E1B] leading-snug">
                {hero.capacity}
              </p>
              <p className="text-xs text-[#5C534B] mt-1">
                Información comunicada directamente por el salón para estas fechas de apertura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
