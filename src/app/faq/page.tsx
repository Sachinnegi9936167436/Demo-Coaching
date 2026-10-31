import type { Metadata } from 'next';
import { siteConfig } from '@/config/siteConfig';
import { buildMetadata, generateFaqSchema } from '@/lib/seo';
import { FaqClient } from '@/components/faq/FaqClient';

export const metadata: Metadata = buildMetadata({
  title: 'Frequently Enquired Inquiries & Academic Protocols',
  description: 'Comprehensive answers to questions about admissions screening, SDC-DAT testing, fee waivers, 35-seat batch limits, hostel facilities, and student well-being.',
  path: '/faq',
  tags: ['FAQ', 'Admissions FAQ', 'Coaching Fees', 'SDC-DAT Test', 'Batch Size', 'Hostel Facilities'],
});

export default function FaqPage() {
  const faqs = siteConfig.faqs;

  // Schema.org FAQPage JSON-LD
  const faqSchema = generateFaqSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqClient faqs={faqs} />
    </>
  );
}
