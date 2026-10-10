import React, { useState, useEffect } from 'react';
import { Clock, Sparkles } from 'lucide-react';
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
    // Si la hora de inauguración no está configurada, no activamos el intervalo
    if (!inaugurationTime || inaugurationTime.trim() === '') {
      setState(calculateCountdown(startDateIso, null, timeZone));
      return;
    }

    // Actualización cada segundo cuando la hora sí está configurada
    const update = () => {
      const next = calculateCountdown(startDateIso, inaugurationTime, timeZone);
      setState(next);
    };

    update();
    const intervalId = window.setInterval(update, 1000);
    return () => window.clearInterval(intervalId);
  }, [startDateIso, inaugurationTime, timeZone]);

  return (
    <section className="py-6 px-4 sm:px-6 max-w-4xl mx-auto" aria-labelledby="countdown-heading">
      <div className="bg-white border border-[#99745A]/20 rounded-2xl p-6 sm:p-8 shadow-xs text-center">
        {/* Caso A: Hora de inauguración pendiente de confirmación */}
        {!state.isConfigured && (
          <div className="flex flex-col items-center">
            <div className="w-11 h-11 rounded-full bg-[#68794E]/10 border border-[#68794E]/25 flex items-center justify-center text-[#68794E] mb-3.5">
              <Clock className="w-5 h-5 text-[#68794E]" aria-hidden="true" />
            </div>

            <h2
              id="countdown-heading"
              className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#231E1B] mb-2"
            >
              {hero.pendingTimeNotice}
            </h2>

            <p className="text-sm sm:text-base text-[#5C534B] max-w-md mb-4">
              Estamos preparando cada detalle para recibirte. El horario oficial de apertura será
              confirmado próximamente.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F8F5EE] border border-[#99745A]/15 text-xs font-semibold text-[#231E1B]">
              <span className="text-[#C8933E]">●</span>
              <span>
                {datesDisplay} de <span className="tabular-numbers">{year}</span>
              </span>
            </div>
          </div>
        )}

        {/* Caso B: Llegó el gran día (tiempo cumplido) */}
        {state.isConfigured && state.isPassed && (
          <div className="flex flex-col items-center py-2">
            <div className="w-12 h-12 rounded-full bg-[#C8933E]/15 border border-[#C8933E]/40 flex items-center justify-center text-[#C8933E] mb-3">
              <Sparkles className="w-6 h-6 text-[#C8933E]" aria-hidden="true" />
            </div>

            <h2
              id="countdown-heading"
              className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#231E1B] mb-2"
            >
              {hero.eventStartedMessage}
            </h2>

            <p className="text-sm sm:text-base text-[#5C534B] max-w-md">
              Nuestras puertas están abiertas para celebrar contigo. Te esperamos en Miller
              Greiseland Studio.
            </p>
          </div>
        )}

        {/* Caso C: Cuenta regresiva activa con fecha y hora completa */}
        {state.isConfigured && !state.isPassed && (
          <div>
            <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#68794E] uppercase tracking-widest mb-3">
              <Clock className="w-4 h-4" aria-hidden="true" />
              <span>Cuenta regresiva para la apertura</span>
            </div>

            <h2 id="countdown-heading" className="sr-only">
              Tiempo restante para la inauguración: {state.days} días, {state.hours} horas,{' '}
              {state.minutes} minutos y {state.seconds} segundos
            </h2>

            {/* Bloques de cuenta regresiva: tamaño igual, números tabulares sin salto de ancho */}
            <div
              className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto my-3"
              aria-hidden="true"
            >
              <div className="bg-[#F8F5EE] border border-[#99745A]/15 rounded-xl py-3 px-2 flex flex-col items-center">
                <span className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#231E1B] tabular-numbers leading-none">
                  {String(state.days).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs text-[#5C534B] uppercase tracking-wider font-semibold mt-1.5">
                  Días
                </span>
              </div>

              <div className="bg-[#F8F5EE] border border-[#99745A]/15 rounded-xl py-3 px-2 flex flex-col items-center">
                <span className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#231E1B] tabular-numbers leading-none">
                  {String(state.hours).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs text-[#5C534B] uppercase tracking-wider font-semibold mt-1.5">
                  Horas
                </span>
              </div>

              <div className="bg-[#F8F5EE] border border-[#99745A]/15 rounded-xl py-3 px-2 flex flex-col items-center">
                <span className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#231E1B] tabular-numbers leading-none">
                  {String(state.minutes).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs text-[#5C534B] uppercase tracking-wider font-semibold mt-1.5">
                  Minutos
                </span>
              </div>

              <div className="bg-[#F8F5EE] border border-[#99745A]/15 rounded-xl py-3 px-2 flex flex-col items-center">
                <span className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#231E1B] tabular-numbers leading-none">
                  {String(state.seconds).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs text-[#5C534B] uppercase tracking-wider font-semibold mt-1.5">
                  Segundos
                </span>
              </div>
            </div>

            <p className="text-xs text-[#5C534B] mt-3">
              Inauguración el {datesDisplay} ({timeZone})
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
