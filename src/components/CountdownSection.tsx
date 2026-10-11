import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, Clock } from 'lucide-react';
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

  // Estado interactivo para previsualización local de la Opción 3
  // En localhost se activa por defecto '11:00' para apreciar el reloj en vivo con números gigantes
  const [demoTime, setDemoTime] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('hora') || params.get('time')) {
        return params.get('hora') || params.get('time');
      }
      if (params.get('pendiente') === 'true' || params.get('unconfirmed') === 'true') {
        return null;
      }
    }
    return inaugurationTime ?? '11:00';
  });

  const [state, setState] = useState<CountdownState>(() =>
    calculateCountdown(startDateIso, demoTime, timeZone)
  );

  useEffect(() => {
    if (!demoTime || demoTime.trim() === '') {
      setState(calculateCountdown(startDateIso, null, timeZone));
      return;
    }

    const update = () => {
      const next = calculateCountdown(startDateIso, demoTime, timeZone);
      setState(next);
    };

    update();
    const intervalId = window.setInterval(update, 1000);
    return () => window.clearInterval(intervalId);
  }, [startDateIso, demoTime, timeZone]);

  return (
    <section
      id="cuenta-regresiva"
      className="pt-6 sm:pt-10 pb-4 px-3 sm:px-6 max-w-4xl mx-auto text-center"
      aria-labelledby="countdown-heading"
    >
      {/* Encabezado editorial flotante sobre el lienzo marfil */}
      <div className="flex items-center justify-center gap-2.5 mb-2">
        <span className="w-8 sm:w-12 h-[1px] bg-[#C8933E]/50"></span>
        <span className="text-[10px] sm:text-[11px] font-bold text-[#68794E] uppercase tracking-[0.28em]">
          Cuenta regresiva de inauguración
        </span>
        <span className="w-8 sm:w-12 h-[1px] bg-[#C8933E]/50"></span>
      </div>

      {/* Fechas de apertura */}
      <p className="text-xs sm:text-sm font-medium text-[#8C6D53] tracking-wide mb-3">
        {datesDisplay}, <span className="tabular-numbers">{year}</span>
      </p>

      {/* ========================================================
          ESTADO A: RELOJ ACTIVO — PROPUESTA 3 (VITRINA FLOTANTE)
         ======================================================== */}
      {state.isConfigured && !state.isPassed && (
        <div className="relative">
          <h2 id="countdown-heading" className="sr-only">
            Inauguración en: {state.days} días, {state.hours} horas, {state.minutes} minutos y{' '}
            {state.seconds} segundos
          </h2>

          {/* Repisa / Cinta de cristal translúcida horizontal con remate dorado */}
          <div className="relative my-3 sm:my-5 py-6 sm:py-9 px-3 sm:px-8 bg-white/60 backdrop-blur-md rounded-2xl sm:rounded-3xl border-t border-white/95 border-b border-[#C8933E]/40 shadow-[0_12px_40px_rgba(200,147,62,0.08)] max-w-3xl mx-auto overflow-hidden">
            {/* Destello sutil de luz en el cristal */}
            <div className="absolute top-0 left-1/3 w-80 h-28 bg-white/50 rounded-full blur-2xl pointer-events-none" />

            {/* Contenedor horizontal de cifras monumentales y separadores de dos puntos */}
            <div
              className="relative z-10 flex items-center justify-center gap-1.5 xs:gap-3 sm:gap-6 md:gap-8 max-w-2xl mx-auto"
              aria-hidden="true"
            >
              {/* 1. DÍAS */}
              <div className="flex flex-col items-center flex-1 min-w-0">
                <span className="font-serif-luxury text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-bold text-[#231E1B] tabular-numbers leading-none tracking-tight select-none">
                  {String(state.days).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-xs text-[#C8933E] uppercase tracking-[0.25em] font-bold mt-2 sm:mt-3">
                  Días
                </span>
              </div>

              {/* Separador de dos puntos */}
              <div className="font-serif-luxury text-2xl xs:text-3xl sm:text-5xl md:text-6xl text-[#C8933E]/75 font-light select-none pb-4 sm:pb-7">
                :
              </div>

              {/* 2. HORAS */}
              <div className="flex flex-col items-center flex-1 min-w-0">
                <span className="font-serif-luxury text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-bold text-[#231E1B] tabular-numbers leading-none tracking-tight select-none">
                  {String(state.hours).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-xs text-[#C8933E] uppercase tracking-[0.25em] font-bold mt-2 sm:mt-3">
                  Horas
                </span>
              </div>

              {/* Separador de dos puntos */}
              <div className="font-serif-luxury text-2xl xs:text-3xl sm:text-5xl md:text-6xl text-[#C8933E]/75 font-light select-none pb-4 sm:pb-7">
                :
              </div>

              {/* 3. MINUTOS */}
              <div className="flex flex-col items-center flex-1 min-w-0">
                <span className="font-serif-luxury text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-bold text-[#231E1B] tabular-numbers leading-none tracking-tight select-none">
                  {String(state.minutes).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-xs text-[#C8933E] uppercase tracking-[0.25em] font-bold mt-2 sm:mt-3">
                  Minutos
                </span>
              </div>

              {/* Separador de dos puntos */}
              <div className="font-serif-luxury text-2xl xs:text-3xl sm:text-5xl md:text-6xl text-[#C8933E]/75 font-light select-none pb-4 sm:pb-7">
                :
              </div>

              {/* 4. SEGUNDOS */}
              <div className="flex flex-col items-center flex-1 min-w-0">
                <span className="font-serif-luxury text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-bold text-[#C8933E] tabular-numbers leading-none tracking-tight select-none">
                  {String(state.seconds).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-xs text-[#C8933E] uppercase tracking-[0.25em] font-bold mt-2 sm:mt-3">
                  Segundos
                </span>
              </div>
            </div>

            {/* Línea dorada milimétrica al pie de la repisa de cristal */}
            <div className="mt-5 sm:mt-7 h-[1.5px] bg-gradient-to-r from-transparent via-[#C8933E]/70 to-transparent w-full" />
          </div>

          <p className="text-[11px] sm:text-xs text-[#5C534B] tracking-wide mt-2.5">
            Apertura programada: <span className="font-semibold text-[#231E1B]">{datesDisplay}</span> · Horario {demoTime} hrs ({timeZone})
          </p>
        </div>
      )}

      {/* ========================================================
          ESTADO B: HORA POR CONFIRMAR
         ======================================================== */}
      {!state.isConfigured && (
        <div className="relative py-2 sm:py-3 max-w-xl mx-auto">
          <div className="relative my-2 py-6 sm:py-8 px-4 sm:px-8 bg-white/60 backdrop-blur-md rounded-2xl sm:rounded-3xl border-t border-white/95 border-b border-[#C8933E]/35 shadow-[0_10px_35px_rgba(200,147,62,0.06)] overflow-hidden">
            <div className="flex items-center justify-center gap-2 text-[#C8933E] mb-2">
              <Clock className="w-4 h-4 text-[#C8933E]" aria-hidden="true" />
              <span className="text-[10px] uppercase tracking-[0.24em] font-bold">
                Apertura de puertas
              </span>
            </div>
            <h2
              id="countdown-heading"
              className="font-serif-luxury text-2xl sm:text-3.5xl font-bold text-[#231E1B] mb-2"
            >
              {hero.pendingTimeNotice}
            </h2>
            <p className="text-xs sm:text-sm text-[#5C534B] leading-relaxed max-w-md mx-auto mb-4">
              Estamos preparando cada detalle para recibirte. El horario oficial de apertura será
              confirmado próximamente para activar el reloj en vivo.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#C8933E]/30 text-xs font-semibold text-[#231E1B] shadow-2xs">
              <Calendar className="w-3.5 h-3.5 text-[#C8933E]" aria-hidden="true" />
              <span>
                {datesDisplay} de <span className="tabular-numbers">{year}</span>
              </span>
            </div>
            <div className="mt-5 h-[1.5px] bg-gradient-to-r from-transparent via-[#C8933E]/50 to-transparent w-full" />
          </div>
        </div>
      )}

      {/* ========================================================
          ESTADO C: EVENTO EN CURSO (15-17 OCT)
         ======================================================== */}
      {state.isConfigured && state.isPassed && (
        <div className="relative py-4 flex flex-col items-center max-w-xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-[#C8933E]/15 border border-[#C8933E]/40 flex items-center justify-center text-[#C8933E] mb-2 shadow-xs">
            <Sparkles className="w-6 h-6 text-[#C8933E]" aria-hidden="true" />
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

      {/* Selector sutil para alternar vista en desarrollo/revisión local */}
      {(import.meta.env.DEV || (typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('dev'))) && (
        <div className="mt-4 pt-2 flex flex-wrap items-center justify-center gap-2 text-[10px] text-[#5C534B]">
          <span className="font-semibold text-[#8C6D53]">Vista de prueba:</span>
          <button
            type="button"
            onClick={() => setDemoTime('10:00')}
            className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
              demoTime !== null
                ? 'bg-[#C8933E] text-white font-bold shadow-2xs'
                : 'bg-white/80 text-[#5C534B] hover:bg-white border border-[#99745A]/20'
            }`}
          >
            Reloj activo (Opción 3)
          </button>
          <button
            type="button"
            onClick={() => setDemoTime(null)}
            className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
              demoTime === null
                ? 'bg-[#C8933E] text-white font-bold shadow-2xs'
                : 'bg-white/80 text-[#5C534B] hover:bg-white border border-[#99745A]/20'
            }`}
          >
            Hora pendiente
          </button>
        </div>
      )}
    </section>
  );
};
