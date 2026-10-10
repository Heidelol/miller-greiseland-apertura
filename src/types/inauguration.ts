export interface PromotionItem {
  id: string;
  name: string;
  priceMXN: number;
  condition?: string;
  details?: string;
  isTwoForOne?: boolean;
}

export interface InaugurationConfig {
  year: number;
  startDateIso: string; // '2026-10-15'
  endDateIso: string;   // '2026-10-17'
  datesDisplay: string; // 'Del 15 al 17 de octubre'
  timeZone: string;     // 'America/Cancun'
  /**
   * Exact inauguration time in HH:mm (24h) format, e.g. '10:00' or '11:00'.
   * Keep null while pending business confirmation.
   * When set, countdown activates automatically.
   */
  inaugurationTime: string | null;

  brand: {
    name: string;
    studioName: string;
    logoUrl: string;
    logoFallbackUrl: string;
    millerPortraitUrl: string;
    signature: string;
  };

  hero: {
    tag: string;
    title: string;
    description: string;
    benefit: string;
    capacity: string;
    pendingTimeNotice: string;
    eventStartedMessage: string;
  };

  promotionsIntro: {
    title: string;
    description: string;
  };

  promotions: PromotionItem[];

  contact: {
    address: string;
    phoneDisplay: string;
    phoneTel: string;
    whatsappNumber: string;
    instagramHandle: string;
    instagramUrl: string;
    googleMapsUrl: string;
    mainWhatsappMessage: string;
    twoForOneWhatsappMessage: string;
  };

  closing: {
    text: string;
    signature: string;
  };
}

export interface CountdownState {
  isConfigured: boolean; // false if inaugurationTime is null
  isPassed: boolean;     // true if current time >= inauguration time
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  targetDateUtcIso: string | null;
}
