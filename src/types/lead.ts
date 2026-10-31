/**
 * Lead Intake and Admissions Inquiry Type Definitions
 */

export type FormType =
  | 'counselling'
  | 'demo'
  | 'callback'
  | 'course_inquiry'
  | 'admission_inquiry'
  | 'general';

export interface LeadSubmissionPayload {
  formType: FormType;
  name: string;
  phone: string;
  email: string;
  interestedCourse: string;
  message?: string;
  consent: boolean;
  metadata?: {
    referrer?: string;
    path?: string;
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    clientTimestamp?: string;
    deviceType?: string;
  };
}

export interface LeadSubmissionResult {
  success: boolean;
  leadId?: string;
  timestamp?: string;
  error?: string;
  details?: Record<string, string[]>;
}
