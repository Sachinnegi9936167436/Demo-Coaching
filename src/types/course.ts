/**
 * Course and Fellowship Type Definitions
 */

export interface CourseChapter {
  title: string;
  duration: string;
}

export interface ProgramStructurePhase {
  phase: string;
  focus: string;
  hours: string;
  deliverable: string;
}

export interface Course {
  id: string;
  slug: string;
  code: string;
  title: string;
  category: string;
  targetAudience: string;
  badge: string;
  duration: string;
  mode: string;
  batchSize: string;
  image: string;
  overview: string;
  eligibility: string;
  highlights: string[];
  curriculumChapters: CourseChapter[];
  programStructure: ProgramStructurePhase[];
  learningOutcomes: string[];
  faqs: Array<{ question: string; answer: string }>;
  facultySlugs: string[];
  relatedSlugs: string[];
  feePlaceholder: string;
  featured: boolean;
  accentColor: string;
}
