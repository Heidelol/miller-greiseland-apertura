import React from 'react';
import { MessageCircle, HelpCircle, Sparkles } from 'lucide-react';
import {
  INAUGURATION_CONFIG,
  buildWhatsAppLink,
  formatCurrencyMXN,
} from '../config/inauguration';

export const PromotionsSection: React.FC = () => {
  const { promotionsIntro, promotions, contact } = INAUGURATION_CONFIG;

  const mainWhatsAppUrl = buildWhatsAppLink(
    contact.whatsappNumber,
    contact.mainWhatsappMessage
  );

  const twoForOneWhatsAppUrl = buildWhatsAppLink(
    contact.whatsappNumber,
    contact.twoForOneWhatsappMessage
  );

  return (
    <section
      id="promociones"
      className="py-10 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto"
      aria-labelledby="promociones-heading"
    >
      {/* Encabezado editorial estilo atelier */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="w-8 h-[1px] bg-[#C8933E]/40"></span>
          <span className="text-[10px] sm:text-[11px] font-bold text-[#68794E] uppercase tracking-[0.25em]">
            Tarifa exclusiva de apertura
          </span>
          <span className="w-8 h-[1px] bg-[#C8933E]/40"></span>
        </div>

        <h2
          id="promociones-heading"
          className="font-serif-luxury text-3xl sm:text-4.5xl font-bold text-[#231E1B] tracking-tight mb-3 text-balance"
        >
          {promotionsIntro.title}
        </h2>
        <p className="text-xs sm:text-base text-[#5C534B] leading-relaxed text-pretty max-w-lg mx-auto">
          {promotionsIntro.description}
        </p>
      </div>

      {/* Carta de promociones con acabado de papelería de lujo */}
      <div className="bg-white border border-[#C8933E]/30 ring-1 ring-[#99745A]/10 rounded-3xl shadow-[0_8px_32px_rgba(153,116,90,0.06)] divide-y divide-[#99745A]/15 overflow-hidden">
        {promotions.map((promo, idx) => (
          <div
            key={promo.id}
            className="p-5 sm:p-7 transition-colors hover:bg-[#FAF7F2]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6"
          >
            {/* Nombre, condiciones y especificaciones */}
            <div className="flex-1 min-w-0 pr-2">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-serif-luxury italic text-xs text-[#C8933E] font-semibold">
                  0{idx + 1}.
                </span>
                <h3 className="font-serif-luxury text-xl sm:text-2.5xl font-bold text-[#231E1B] leading-snug">
                  {promo.name}
                </h3>
                {promo.isTwoForOne && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#68794E]/12 border border-[#68794E]/30 text-[#4B5935] text-[10px] sm:text-[11px] font-bold tracking-wide">
                    <Sparkles className="w-3 h-3 text-[#68794E]" aria-hidden="true" />
                    <span>{promo.condition}</span>
                  </span>
                )}
              </div>

              {/* Condiciones */}
              {promo.condition && !promo.isTwoForOne && (
                <p className="text-xs sm:text-sm text-[#68794E] font-semibold mb-0.5 pl-5">
                  {promo.condition}
                </p>
              )}

              {promo.details && !promo.isTwoForOne && (
                <p className="text-xs sm:text-sm text-[#5C534B] pl-5">
                  {promo.details}
                </p>
              )}

              {/* Acceso discreto para consultar condiciones de 2x1 */}
              {promo.isTwoForOne && (
                <div className="pl-5 mt-1">
                  <a
                    href={twoForOneWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#68794E] hover:text-[#C8933E] transition-colors underline underline-offset-3 focus-visible:outline-2 focus-visible:outline-[#C8933E] rounded-xs"
                    title="Consultar condiciones del 2×1 por WhatsApp"
                  >
                    <HelpCircle className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Consultar condiciones del 2×1 por WhatsApp</span>
                  </a>
                </div>
              )}
            </div>

            {/* Precio destacado con tipografía editorial */}
            <div className="sm:text-right shrink-0 pt-1 sm:pt-0 pl-5 sm:pl-0">
              <span className="font-serif-luxury text-2xl sm:text-3.5xl font-bold text-[#231E1B] tabular-numbers block leading-none">
                {formatCurrencyMXN(promo.priceMXN)}
              </span>
              <span className="text-[10px] text-[#8C6D53] uppercase tracking-[0.18em] font-semibold block mt-1.5">
                Tarifa de inauguración
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Nota aclaratoria */}
      <p className="text-xs text-[#5C534B] text-center mt-3.5">
        Precios especiales válidos exclusivamente durante las fechas de inauguración anunciadas.
      </p>

      {/* Botón principal de WhatsApp con diseño luxury */}
      <div className="mt-8 sm:mt-10 text-center">
        <a
          href={mainWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-4.5 rounded-xl bg-[#C8933E] text-[#1C1613] font-bold text-sm sm:text-base tracking-wider uppercase hover:bg-[#B8822E] active:scale-[0.99] transition-all shadow-[0_4px_20px_rgba(200,147,62,0.28)] border border-[#B8822E] focus-visible:outline-3 focus-visible:outline-[#1C1613] focus-visible:outline-offset-2"
        >
          <MessageCircle className="w-5 h-5 fill-current text-[#1C1613]" aria-hidden="true" />
          <span>Consultar disponibilidad por WhatsApp</span>
        </a>
        <p className="text-xs text-[#5C534B] mt-2.5 text-pretty">
          El mensaje se abrirá en WhatsApp para coordinar tu cita directamente con Miller.
        </p>
      </div>
    </section>
  );
};
