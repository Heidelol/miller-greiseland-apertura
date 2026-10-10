import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar } from 'lucide-react';
import { INAUGURATION_CONFIG } from '../config/inauguration';
import { calculateCountdown } from '../utils/countdown';
import type { CountdownState } from '../types/inauguration';

export const CountdownSection: React.FC = () => {
  const {
    startDateIso,
    inaugurationTime,
    timeZone,
    datesDisplay,
    year,
    hero,
  } = INAUGURATION_CONFIG;

  const [state, setState] = useState<CountdownState>(() =>
    calculateCountdown(startDateIso, inaugurationTime, timeZone)
  );

  useEffect(() => {
    if (!inaugurationTime || inaugurationTime.trim() === '') {
      setState(calculateCountdown(startDateIso, null, timeZone));
      return;
    }

    const update = () => {
      const next = calculateCountdown(startDateIso, inaugurationTime, timeZone);
      setState(next);
    };

    update();
    const intervalId = window.setInterval(update, 1000);
    return () => window.clearInterval(intervalId);
  }, [startDateIso, inaugurationTime, timeZone]);

  return (
    <section
      className="pt-6 pb-2 px-4 sm:px-6 max-w-4xl mx-auto"
      aria-labelledby="countdown-heading"
    >
      {/* Marco de alta papelería editorial */}
      <div className="relative bg-[#FAF7F2] border border-[#C8933E]/30 ring-1 ring-[#99745A]/15 rounded-2xl p-5 sm:p-7 shadow-[0_4px_24px_rgba(153,116,90,0.06)] text-center overflow-hidden">
        {/* Adorno sutil de esquina en orfebrería */}
        <div className="absolute top-2 left-3 text-[#C8933E]/40 text-xs select-none">✦</div>
        <div className="absolute top-2 right-3 text-[#C8933E]/40 text-xs select-none">✦</div>

        {/* Encabezado del contador */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="w-6 h-[1px] bg-[#C8933E]/40"></span>
          <span className="text-[10px] sm:text-[11px] font-bold text-[#68794E] uppercase tracking-[0.22em]">
            Cuenta regresiva de inauguración
          </span>
          <span className="w-6 h-[1px] bg-[#C8933E]/40"></span>
        </div>

        {/* Caso A: Hora aún no configurada */}
        {!state.isConfigured && (
          <div className="py-2">
            <h2
              id="countdown-heading"
              className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#231E1B] mb-2"
            >
              {hero.pendingTimeNotice}
            </h2>
            <p className="text-xs sm:text-sm text-[#5C534B] max-w-md mx-auto mb-3">
              Estamos preparando cada detalle para recibirte. El horario oficial de apertura será
              confirmado próximamente.
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#99745A]/20 text-xs font-semibold text-[#231E1B]">
              <Calendar className="w-3.5 h-3.5 text-[#C8933E]" aria-hidden="true" />
              <span>
                {datesDisplay} de <span className="tabular-numbers">{year}</span>
              </span>
            </div>
          </div>
        )}

        {/* Caso B: Llegó el gran día */}
        {state.isConfigured && state.isPassed && (
          <div className="py-3 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#C8933E]/15 border border-[#C8933E]/40 flex items-center justify-center text-[#C8933E] mb-2">
              <Sparkles className="w-5 h-5 text-[#C8933E]" aria-hidden="true" />
            </div>
            <h2
              id="countdown-heading"
              className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#231E1B] mb-1"
            >
              {hero.eventStartedMessage}
            </h2>
            <p className="text-xs sm:text-sm text-[#5C534B]">
              Nuestras puertas están abiertas para celebrar contigo en Miller Greiseland Studio.
            </p>
          </div>
        )}

        {/* Caso C: Cuenta regresiva activa con cifras tabulares y estilo horología de lujo */}
        {state.isConfigured && !state.isPassed && (
          <div>
            <h2 id="countdown-heading" className="sr-only">
              Inauguración en: {state.days} días, {state.hours} horas, {state.minutes} minutos y{' '}
              {state.seconds} segundos
            </h2>

            {/* Módulos de tiempo de alta precisión */}
            <div
              className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg mx-auto my-3"
              aria-hidden="true"
            >
              {/* Días */}
              <div className="bg-white/90 border border-[#99745A]/20 rounded-xl py-3 px-1 sm:px-2 flex flex-col items-center shadow-xs">
                <span className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#231E1B] tabular-numbers leading-none">
                  {String(state.days).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[10px] text-[#8C6D53] uppercase tracking-[0.18em] font-bold mt-2">
                  Días
                </span>
              </div>

              {/* Horas */}
              <div className="bg-white/90 border border-[#99745A]/20 rounded-xl py-3 px-1 sm:px-2 flex flex-col items-center shadow-xs">
                <span className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#231E1B] tabular-numbers leading-none">
                  {String(state.hours).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[10px] text-[#8C6D53] uppercase tracking-[0.18em] font-bold mt-2">
                  Horas
                </span>
              </div>

              {/* Minutos */}
              <div className="bg-white/90 border border-[#99745A]/20 rounded-xl py-3 px-1 sm:px-2 flex flex-col items-center shadow-xs">
                <span className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#231E1B] tabular-numbers leading-none">
                  {String(state.minutes).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[10px] text-[#8C6D53] uppercase tracking-[0.18em] font-bold mt-2">
                  Minutos
                </span>
              </div>

              {/* Segundos */}
              <div className="bg-white/90 border border-[#99745A]/20 rounded-xl py-3 px-1 sm:px-2 flex flex-col items-center shadow-xs">
                <span className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#C8933E] tabular-numbers leading-none">
                  {String(state.seconds).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[10px] text-[#8C6D53] uppercase tracking-[0.18em] font-bold mt-2">
                  Segundos
                </span>
              </div>
            </div>

            <p className="text-[11px] sm:text-xs text-[#5C534B] tracking-wide mt-2">
              Apertura programada: <span className="font-semibold text-[#231E1B]">{datesDisplay}</span> · Horario {inaugurationTime} hrs ({timeZone})
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
