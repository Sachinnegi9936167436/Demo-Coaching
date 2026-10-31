import type { Metadata } from 'next';
import { siteConfig } from '@/config/siteConfig';
import { buildMetadata, generateArticleSchema } from '@/lib/seo';
import { BlogListClient } from '@/components/blog/BlogListClient';

export const metadata: Metadata = buildMetadata({
  title: 'The Architecture of Cognition | Editorial Journal',
  description: 'Read authoritative essays and pedagogical analyses on competitive exam strategy, first-principles derivation, and cognitive psychology from Sachin\'s Demo Coaching.',
  path: '/blog',
  tags: ['Blog', 'Journal', 'JEE Advanced Preparation', 'NEET Strategy', 'Cognitive Psychology', 'Exam Insights'],
});

export default function BlogListingPage() {
  const posts = siteConfig.blogPosts;

  // Schema.org BlogPosting JSON-LD for listing
  const articleSchemas = posts.map((p) => generateArticleSchema(p));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemas) }}
      />
      <BlogListClient posts={posts} />
    </>
  );
}
