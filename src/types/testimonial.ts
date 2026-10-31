/**
 * Testimonial and Student Achiever Type Definitions
 */

export interface AchieverPlaceholder {
  name: string;
  outcome: string;
  program: string;
  testimonial: string;
  year: string;
}

export interface SuccessStory {
  id: string;
  slug: string;
  name: string;
  outcome: string;
  exam: string;
  year: string;
  program: string;
  avatar: string;
  quote: string;
  backgroundStory: string;
  turningPoint: string;
  studyStrategy: string[];
  facultyNote: string;
}
