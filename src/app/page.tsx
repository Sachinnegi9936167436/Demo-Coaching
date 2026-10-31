import type { Metadata } from 'next';
import { siteConfig } from '@/config/siteConfig';
import { buildMetadata, generateCourseSchema, generateFaqSchema } from '@/lib/seo';
import { HomePageClient } from '@/components/home/HomePageClient';

export const metadata: Metadata = buildMetadata({
  title: 'Elite Academic Sanctuary & Exam Mastery',
  description: `${siteConfig.institute.tagline} — ${siteConfig.institute.subtagline}. Intimate cohorts strictly capped at 35 scholars.`,
  path: '/',
  tags: [
    'Premier Coaching Institute',
    'IIT-JEE Advanced',
    'NEET-UG Medical',
    'UPSC Civil Services',
    'STEM Olympiads',
    'Admissions 2026',
    'Socratic Pedagogy',
  ],
});

export default function HomePage() {
  // Schema.org Course Catalog & FAQ Structured Data for Homepage
  const featuredCourses = siteConfig.availableCourses.filter((c) => c.featured);
  const courseSchemas = featuredCourses.map((c) => generateCourseSchema(c));
  const faqSchema = generateFaqSchema(siteConfig.faqs.slice(0, 6));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchemas) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomePageClient />
    </>
  );
}
