/**
 * Institutional Identity, Contacts, and Pedagogical Pillar Type Definitions
 */

export interface PedagogyPillar {
  numeral: string;
  title: string;
  summary: string;
  statPlaceholder: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
}

export interface InstituteInfo {
  name: string;
  brandShort: string;
  tagline: string;
  subtagline: string;
  foundedYear: string;
  statusBadge: string;
  accreditationNote: string;
  complianceDisclaimer: string;
}

export interface ContactInfo {
  phoneDisplay: string;
  phoneTel: string;
  counsellingHotline: string;
  counsellingTel: string;
  admissionsEmail: string;
  deanOfficeEmail: string;
  whatsappChatUrl: string;
  operatingHours: string;
  responseTimeGuarantee: string;
}

export interface AddressInfo {
  campusName: string;
  wing: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  landmark: string;
  metroConnectivity: string;
  coordinates: string;
  googleMapsEmbedUrl: string;
}

export interface CallToActions {
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  counsellingCta: { label: string; href: string };
  demoClassCta: { label: string; href: string };
}
