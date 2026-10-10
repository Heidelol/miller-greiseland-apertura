import React from 'react';
import { Coffee, Users } from 'lucide-react';
import { INAUGURATION_CONFIG } from '../config/inauguration';

export const HighlightsSection: React.FC = () => {
  const { hero } = INAUGURATION_CONFIG;

  return (
    <section className="py-4 px-4 sm:px-6 max-w-4xl mx-auto" aria-label="Detalles de la experiencia">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Beneficio de cortesía */}
        <div className="bg-white border border-[#99745A]/20 rounded-2xl p-5 sm:p-6 flex items-start gap-4 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-[#C8933E]/12 border border-[#C8933E]/30 flex items-center justify-center text-[#C8933E] shrink-0 mt-0.5">
            <Coffee className="w-5 h-5 text-[#C8933E]" aria-hidden="true" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-[#68794E] uppercase tracking-wider block mb-1">
              Cortesía de bienvenida
            </span>
            <p className="font-serif-luxury text-xl font-bold text-[#231E1B] leading-snug">
              {hero.benefit}
            </p>
            <p className="text-xs text-[#5C534B] mt-1">
              Una atención especial para acompañar tu momento en el salón.
            </p>
          </div>
        </div>

        {/* Cupo anunciado */}
        <div className="bg-white border border-[#99745A]/20 rounded-2xl p-5 sm:p-6 flex items-start gap-4 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-[#68794E]/12 border border-[#68794E]/30 flex items-center justify-center text-[#68794E] shrink-0 mt-0.5">
            <Users className="w-5 h-5 text-[#68794E]" aria-hidden="true" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-[#68794E] uppercase tracking-wider block mb-1">
              Capacidad
            </span>
            <p className="font-serif-luxury text-xl font-bold text-[#231E1B] leading-snug">
              {hero.capacity}
            </p>
            <p className="text-xs text-[#5C534B] mt-1">
              Información proporcionada por el salón para estas fechas de apertura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
