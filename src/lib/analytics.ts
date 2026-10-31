/**
 * ==============================================================================
 * SACHIN 'S DEMO COACHING — EVENT ANALYTICS & TELEMETRY MODULE
 * ==============================================================================
 * Dispatches standard lead generation and conversion events to:
 * - Google Analytics / gtag ('generate_lead', 'conversion')
 * - Google Tag Manager (window.dataLayer)
 * - Development console logger for diagnostic verification
 * ==============================================================================
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export interface LeadAnalyticsPayload {
  leadId: string;
  formType: 'counselling' | 'demo' | 'callback' | 'course_enquiry' | 'admission';
  courseId?: string;
  applicantName?: string;
  timestamp?: string;
}

/**
 * Universal Event Tracker
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window === 'undefined') return;

  const eventPayload = {
    event: eventName,
    institute: "SACHIN 'S DEMO COACHING",
    ...params,
    eventTime: new Date().toISOString(),
  };

  // 1. Google Tag Manager dataLayer
  if (window.dataLayer && Array.isArray(window.dataLayer)) {
    window.dataLayer.push(eventPayload);
  }

  // 2. Google Analytics 4 gtag
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  // 3. Development diagnostic log
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[SDC Analytics Event] ✦ ${eventName}:`, eventPayload);
  }
}

/**
 * Lead Generation Conversion Event Hook
 */
export function trackLeadSubmission(payload: LeadAnalyticsPayload) {
  trackEvent('generate_lead', {
    lead_id: payload.leadId,
    form_type: payload.formType,
    course_id: payload.courseId || 'general_admissions',
    conversion_currency: 'INR',
    conversion_value: 1.0,
  });

  // Secondary Custom Event for SDC Admissions CRM
  trackEvent('sdc_lead_captured', {
    lead_id: payload.leadId,
    form_type: payload.formType,
    course_id: payload.courseId,
  });
}

/**
 * CTA Click Tracker
 */
export function trackCtaClick(ctaName: string, location: string) {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: location,
  });
}

/**
 * WhatsApp Chat Trigger Tracker
 */
export function trackWhatsAppClick(source: string) {
  trackEvent('whatsapp_chat_initiated', {
    contact_channel: 'whatsapp',
    trigger_source: source,
  });
}
