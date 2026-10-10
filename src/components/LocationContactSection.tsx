import React from 'react';
import { MapPin, Phone, ExternalLink } from 'lucide-react';
import { INAUGURATION_CONFIG } from '../config/inauguration';

export const LocationContactSection: React.FC = () => {
  const { contact } = INAUGURATION_CONFIG;

  return (
    <section
      id="ubicacion"
      className="py-8 sm:py-12 px-4 sm:px-6 max-w-4xl mx-auto"
      aria-labelledby="ubicacion-heading"
    >
      <div className="bg-[#FAF7F2] border border-[#C8933E]/25 ring-1 ring-[#99745A]/10 rounded-3xl p-6 sm:p-9 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Detalles de dirección y contacto */}
          <div className="flex-1 min-w-0">
            <span className="text-[10px] sm:text-[11px] font-bold text-[#68794E] uppercase tracking-[0.22em] block mb-1.5">
              Ubicación oficial del estudio
            </span>
            <h2
              id="ubicacion-heading"
              className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#231E1B] mb-3"
            >
              Cómo encontrarnos
            </h2>

            <div className="flex items-start gap-3 text-sm sm:text-base text-[#5C534B] mb-3">
              <MapPin className="w-5 h-5 text-[#C8933E] shrink-0 mt-0.5" aria-hidden="true" />
              <p className="font-medium text-[#231E1B]">
                {contact.address}
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm text-[#5C534B]">
              <Phone className="w-4 h-4 text-[#68794E] shrink-0" aria-hidden="true" />
              <span>Teléfono directo: </span>
              <a
                href={contact.phoneTel}
                className="font-semibold text-[#231E1B] hover:text-[#C8933E] transition-colors underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-[#C8933E]"
              >
                {contact.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Botón secundario "Cómo llegar" */}
          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <a
              href={contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl border-1.5 border-[#C8933E] text-[#231E1B] bg-white hover:bg-[#C8933E]/10 active:bg-[#C8933E]/20 font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-2xs focus-visible:outline-2 focus-visible:outline-[#231E1B]"
            >
              <MapPin className="w-4 h-4 text-[#C8933E]" aria-hidden="true" />
              <span>Cómo llegar</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#5C534B]" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
