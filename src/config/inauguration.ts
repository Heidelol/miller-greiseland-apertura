import type { InaugurationConfig } from '../types/inauguration';

/**
 * Configuración centralizada de la invitación y promociones de inauguración.
 * Todos los textos, fechas, promociones y enlaces se gestionan desde este archivo.
 */
export const INAUGURATION_CONFIG: InaugurationConfig = {
  // Año centralizado: evita repeticiones manuales en componentes
  year: 2026,
  startDateIso: '2026-10-15',
  endDateIso: '2026-10-17',
  datesDisplay: 'Del 15 al 17 de octubre',
  timeZone: 'America/Cancun',

  /**
   * PENDIENTE DE CONFIRMACIÓN DEL NEGOCIO:
   * Hora exacta de inauguración en formato 24h ('HH:mm', por ejemplo '11:00' o '16:00').
   * Mantener en `null` mientras no esté confirmada.
   *
   * Mientras sea `null`:
   * - Muestra las fechas de inauguración.
   * - Añade el mensaje: "Muy pronto abriremos las puertas".
   * - Oculta los dígitos de la cuenta regresiva.
   *
   * Al colocar una hora real (por ejemplo '10:00'):
   * - El contador se activa automáticamente calculando la diferencia contra America/Cancun.
   * - Al llegar a cero muestra: "¡Llegó el gran día!".
   */
  inaugurationTime: null,

  brand: {
    name: 'Miller Greiseland',
    studioName: 'Miller Greiseland Studio',
    logoUrl: '/logo-miller.png',
    logoFallbackUrl: '/logo-miller.jpeg',
    millerPortraitUrl: '/miller-greiseland.webp',
    signature: 'Miller Greiseland Studio',
  },

  hero: {
    tag: 'Una nueva etapa',
    title: 'Estás invitado a nuestra inauguración',
    description:
      'Un nuevo espacio, la misma pasión por transformar tu cabello. Celebra con nosotros la apertura de Miller Greiseland Studio.',
    benefit: 'Incluye bebida de cortesía y snack.',
    capacity: 'Solo 5 lugares',
    pendingTimeNotice: 'Muy pronto abriremos las puertas',
    eventStartedMessage: '¡Llegó el gran día!',
  },

  promotionsIntro: {
    title: 'Promociones por inauguración',
    description: 'Del 15 al 17 de octubre, celebra esta nueva etapa con precios especiales.',
  },

  // Las 5 promociones exactas acordadas para la inauguración
  promotions: [
    {
      id: 'diseno-de-cabello',
      name: 'Diseño de cabello',
      priceMXN: 2200,
      condition: 'Para clientas nuevas.',
      details: 'Morena Iluminada y Brunette en cabello virgen.',
      isTwoForOne: false,
    },
    {
      id: 'brazilian-blowout',
      name: 'Brazilian Blowout',
      priceMXN: 1500,
      condition: 'Cualquier largo.',
      isTwoForOne: false,
    },
    {
      id: 'hidratacion-con-corte',
      name: 'Tratamiento de hidratación con corte',
      priceMXN: 1000,
      condition: 'Promoción 2×1.',
      isTwoForOne: true,
    },
    {
      id: 'retoque-tinte-hidratacion',
      name: 'Retoque de tinte con hidratación profunda',
      priceMXN: 500,
      isTwoForOne: false,
    },
    {
      id: 'tinte-completo',
      name: 'Tinte completo',
      priceMXN: 1000,
      isTwoForOne: false,
    },
  ],

  contact: {
    address: 'Av. Venustiano Carranza #163, entre Héroes y 16 de Septiembre.',
    phoneDisplay: '983 137 3038',
    phoneTel: 'tel:+529831373038',
    whatsappNumber: '529831373038',
    instagramHandle: '@millergreiseland.studio',
    instagramUrl: 'https://www.instagram.com/millergreiseland.studio/',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Av.+Venustiano+Carranza+%23163%2C+entre+H%C3%A9roes+y+16+de+Septiembre',
    mainWhatsappMessage:
      'Hola, Miller. Me gustaría consultar disponibilidad para las promociones de inauguración del 15 al 17 de octubre.',
    twoForOneWhatsappMessage:
      'Hola, Miller. Me gustaría consultar las condiciones de la promoción 2×1 del tratamiento de hidratación con corte para la inauguración.',
  },

  closing: {
    text: 'Será un gusto compartir esta nueva etapa contigo.',
    signature: 'Miller Greiseland Studio',
  },
};

/**
 * Genera el enlace directo a WhatsApp con mensaje codificado
 */
export function buildWhatsAppLink(phone: string, text: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

/**
 * Formato uniforme de moneda para los precios de promoción
 */
export function formatCurrencyMXN(amount: number): string {
  return `$${amount.toLocaleString('es-MX')} MXN`;
}
