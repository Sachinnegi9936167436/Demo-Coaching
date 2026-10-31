import type { Metadata } from 'next';
import { siteConfig } from '@/config/siteConfig';
import { buildMetadata, generatePersonSchema } from '@/lib/seo';
import { FacultyListClient } from '@/components/faculty/FacultyListClient';

export const metadata: Metadata = buildMetadata({
  title: 'Chairs of Academic Instruction & Faculty Directory',
  description: 'Meet the veteran academicians and discipline chairs leading IIT-JEE, NEET-UG, UPSC, and Olympiad instruction at Sachin\'s Demo Coaching. 100% senior faculty led.',
  path: '/faculty',
  tags: ['Faculty', 'Academicians', 'Professors', 'IIT-JEE Mentors', 'NEET Mentors', 'UPSC Mentors'],
});

export default function FacultyPage() {
  const facultyList = siteConfig.facultyPlaceholders;

  // Schema.org Person JSON-LD for all faculty members
  const personSchemas = facultyList.map((f) => generatePersonSchema(f));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchemas) }}
      />
      <FacultyListClient facultyList={facultyList} />
    </>
  );
}
