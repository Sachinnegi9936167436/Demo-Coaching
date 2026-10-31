/**
 * ==============================================================================
 * SACHIN 'S DEMO COACHING — STRONGLY TYPED CENTRALIZED CONFIGURATION
 * ==============================================================================
 * Clean Maintainable Architecture Aggregation Layer
 * Re-exports domain types from @/types and modular datasets from @/data
 * ==============================================================================
 */

export * from '@/types';

import {
  instituteData,
  availableCourses,
  facultyPlaceholders,
  achieversPlaceholders,
  successStories,
  faqs,
  blogPosts,
  resources,
} from '@/data';

import type {
  Course,
  FacultyMember,
  AchieverPlaceholder,
  SuccessStory,
  FaqItem,
  BlogPost,
  LearningResource,
  PedagogyPillar,
} from '@/types';

export interface SiteConfig {
  institute: {
    name: string;
    brandShort: string;
    tagline: string;
    subtagline: string;
    foundedYear: string;
    statusBadge: string;
    accreditationNote: string;
    complianceDisclaimer: string;
  };
  contact: {
    phoneDisplay: string;
    phoneTel: string;
    counsellingHotline: string;
    counsellingTel: string;
    admissionsEmail: string;
    deanOfficeEmail: string;
    whatsappChatUrl: string;
    operatingHours: string;
    responseTimeGuarantee: string;
  };
  address: {
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
  };
  socialLinks: Array<{ name: string; url: string; handle: string }>;
  ctas: {
    primaryEnroll: string;
    bookCounselling: string;
    bookDemoClass: string;
    downloadSyllabus: string;
    viewAllCourses: string;
    contactHotline: string;
    takeScholarshipTest: string;
  };
  admissions: {
    activeCycle: string;
    batchCeiling: string;
    acceptanceRateNotice: string;
    scholarshipWindow: string;
    intakeDeadlines: Array<{ round: string; deadline: string; status: string }>;
  };
  availableCourses: Course[];
  pedagogyPillars: PedagogyPillar[];
  facultyPlaceholders: FacultyMember[];
  achieversPlaceholders: AchieverPlaceholder[];
  successStories: SuccessStory[];
  faqs: FaqItem[];
  blogPosts: BlogPost[];
  resources: LearningResource[];
  directorMessage: {
    name: string;
    title: string;
    credentials: string;
    portrait: string;
    quote: string;
    paragraphs: string[];
    guidingTenets: Array<{ title: string; desc: string }>;
  };
  ourStory: {
    origin: string;
    mission: string;
    vision: string;
    milestones: Array<{ year: string; title: string; detail: string }>;
    values: Array<{ title: string; desc: string }>;
  };
}

export const siteConfig: SiteConfig = {
  ...instituteData,
  availableCourses,
  facultyPlaceholders,
  achieversPlaceholders,
  successStories,
  faqs,
  blogPosts,
  resources,
};

export default siteConfig;
