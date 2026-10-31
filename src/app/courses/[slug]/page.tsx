import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/config/siteConfig';
import { buildMetadata, generateCourseSchema, generateFaqSchema } from '@/lib/seo';
import { CourseDetailClient } from '@/components/courses/CourseDetailClient';

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return siteConfig.availableCourses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = siteConfig.availableCourses.find((c) => c.slug === slug);

  if (!course) {
    return buildMetadata({
      title: 'Course Not Found',
      description: 'The requested academic fellowship is not available.',
      path: `/courses/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${course.title} (${course.code})`,
    description: `${course.overview} Capped at 35 seats. Duration: ${course.duration}.`,
    path: `/courses/${course.slug}`,
    image: course.image,
    tags: [course.category, course.code, 'Coaching', 'Test Preparation', 'Cohort 2026'],
  });
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = siteConfig.availableCourses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  // Assigned faculty chairs
  const assignedFaculty = siteConfig.facultyPlaceholders.filter((f) =>
    course.facultySlugs.includes(f.slug)
  );

  // Related courses
  const relatedCourses = siteConfig.availableCourses.filter((c) =>
    course.relatedSlugs?.includes(c.slug)
  );

  // Schema.org JSON-LD structured data
  const courseSchema = generateCourseSchema(course);
  const faqSchema = course.faqs?.length ? generateFaqSchema(course.faqs) : null;

  return (
    <>
      {/* Schema.org Course Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Crawlable, Server-Rendered Content with Client Interactivity */}
      <CourseDetailClient
        course={course}
        assignedFaculty={assignedFaculty}
        relatedCourses={relatedCourses}
      />
    </>
  );
}
