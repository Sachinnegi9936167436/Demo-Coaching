import type { Metadata } from 'next';
import { siteConfig } from '@/config/siteConfig';
import { buildMetadata, generateCourseSchema } from '@/lib/seo';
import { CourseListClient } from '@/components/courses/CourseListClient';

export const metadata: Metadata = buildMetadata({
  title: 'Academic Fellowships & Masterclasses',
  description: 'Explore competitive exam preparation fellowships for JEE Advanced, NEET-UG, UPSC, and Olympiads. Small cohorts strictly capped at 35 scholars.',
  path: '/courses',
  tags: ['Courses', 'JEE Advanced', 'NEET-UG', 'UPSC', 'Olympiads', 'Coaching Fellowships'],
});

export default function CoursesPage() {
  const courses = siteConfig.availableCourses;

  // Schema.org Course Catalog JSON-LD
  const courseSchemas = courses.map((c) => generateCourseSchema(c));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchemas) }}
      />
      <CourseListClient courses={courses} />
    </>
  );
}
