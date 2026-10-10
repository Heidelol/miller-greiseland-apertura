import React from 'react';
import { MessageCircle, HelpCircle } from 'lucide-react';
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
      className="py-10 sm:py-14 px-4 sm:px-6 max-w-4xl mx-auto"
      aria-labelledby="promociones-heading"
    >
      {/* Encabezado editorial */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold text-[#68794E] uppercase tracking-widest block mb-2">
          Tarifas especiales
        </span>
        <h2
          id="promociones-heading"
          className="font-serif-luxury text-3xl sm:text-4xl lg:text-4.5xl font-bold text-[#231E1B] tracking-tight mb-3"
        >
          {promotionsIntro.title}
        </h2>
        <p className="text-sm sm:text-base text-[#5C534B] leading-relaxed">
          {promotionsIntro.description}
        </p>
      </div>

      {/* Lista editorial limpia de promociones */}
      <div className="bg-white border border-[#99745A]/20 rounded-2xl shadow-xs divide-y divide-[#99745A]/15 overflow-hidden">
        {promotions.map((promo) => (
          <div
            key={promo.id}
            className="p-5 sm:p-6 transition-colors hover:bg-[#FAF8F4]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6"
          >
            {/* Nombre y condiciones */}
            <div className="flex-1 pr-2">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#231E1B] leading-snug">
                  {promo.name}
                </h3>
                {promo.isTwoForOne && (
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#68794E]/12 border border-[#68794E]/30 text-[#4B5935] text-[11px] font-bold tracking-wide">
                    {promo.condition}
                  </span>
                )}
              </div>

              {/* Condiciones / especificaciones cuando existen */}
              {promo.condition && !promo.isTwoForOne && (
                <p className="text-xs sm:text-sm text-[#68794E] font-semibold mb-0.5">
                  {promo.condition}
                </p>
              )}

              {promo.details && !promo.isTwoForOne && (
                <p className="text-xs sm:text-sm text-[#5C534B]">
                  {promo.details}
                </p>
              )}

              {/* Acceso discreto para consultar condiciones del 2x1 */}
              {promo.isTwoForOne && (
                <div className="mt-1">
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

            {/* Precio destacado y alineado */}
            <div className="sm:text-right shrink-0">
              <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#231E1B] tabular-numbers block leading-none">
                {formatCurrencyMXN(promo.priceMXN)}
              </span>
              <span className="text-[10px] text-[#5C534B] uppercase tracking-wider font-semibold block mt-1">
                Precio de inauguración
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Nota aclaratoria sobre exclusividad de precios */}
      <p className="text-xs text-[#5C534B] text-center mt-3">
        Precios especiales válidos exclusivamente durante las fechas de inauguración anunciadas.
      </p>

      {/* Llamada principal a WhatsApp después de la lista */}
      <div className="mt-8 text-center">
        <a
          href={mainWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl bg-[#C8933E] text-[#231E1B] font-bold text-base tracking-wide hover:bg-[#B8822E] active:scale-[0.99] transition-all shadow-sm focus-visible:outline-3 focus-visible:outline-[#231E1B] focus-visible:outline-offset-2"
        >
          <MessageCircle className="w-5 h-5 fill-current text-[#231E1B]" aria-hidden="true" />
          <span>Consultar disponibilidad por WhatsApp</span>
        </a>
        <p className="text-xs text-[#5C534B] mt-2.5">
          El mensaje se abrirá en WhatsApp para coordinar tu cita directamente con Miller.
        </p>
      </div>
    </section>
  );
};
