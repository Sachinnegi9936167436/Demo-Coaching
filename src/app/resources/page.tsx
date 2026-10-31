import type { Metadata } from 'next';
import { siteConfig } from '@/config/siteConfig';
import { buildMetadata } from '@/lib/seo';
import { ResourcesClient } from '@/components/resources/ResourcesClient';

export const metadata: Metadata = buildMetadata({
  title: 'Digital Research Vault & Learning Resources',
  description: 'Download proprietary problem archives, mathematical derivation guides, formula sheets, and past examination forensic solutions from Sachin\'s Demo Coaching.',
  path: '/resources',
  tags: ['Learning Resources', 'Study Material', 'Formula Guides', 'Derivation Dossiers', 'SDC-DAT Papers'],
});

export default function ResourcesPage() {
  const resources = siteConfig.resources;

  return <ResourcesClient resources={resources} />;
}
