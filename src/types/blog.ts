/**
 * Blog and Editorial Journal Type Definitions
 */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  contentSections: Array<{ heading: string; body: string; callout?: string }>;
}
