import type { Metadata } from 'next';
import { siteConfig } from '@/config/siteConfig';
import { buildMetadata } from '@/lib/seo';
import { SuccessStoriesClient } from '@/components/success/SuccessStoriesClient';

export const metadata: Metadata = buildMetadata({
  title: 'Student Success Stories & Transformation Case Studies',
  description: 'In-depth case studies and transformation journeys of scholars who conquered cognitive plateaus to achieve elite percentiles at Sachin\'s Demo Coaching.',
  path: '/success-stories',
  tags: ['Success Stories', 'Student Transformations', 'Case Studies', 'Testimonials', 'Exam Ranks'],
});

export default function SuccessStoriesPage() {
  const successStories = siteConfig.successStories;

  return <SuccessStoriesClient successStories={successStories} />;
}
