/**
 * Faculty Dossier and Senior Discipline Chair Type Definitions
 */

export interface FacultyMember {
  slug: string;
  name: string;
  designation: string;
  credentials: string;
  specialization: string;
  image: string;
  bio: string;
  philosophy: string;
  education: string[];
  experience: string;
  coursesTaught: string[];
  officeHours: string;
}
