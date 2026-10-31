import type { Metadata } from 'next';
import { siteConfig, Course, FacultyMember, BlogPost } from '@/config/siteConfig';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sachinsdemocoaching.edu.sample';

export interface MetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
  noIndex?: boolean;
}

/**
 * Builds standard, strictly typed metadata with OpenGraph, Twitter card, and canonical URL.
 */
export function buildMetadata({
  title,
  description,
  path,
  image = '/images/hero-campus.png',
  type = 'website',
  publishedTime,
  modifiedTime,
  authors = [siteConfig.institute.name],
  tags = [],
  noIndex = false,
}: MetadataOptions): Metadata {
  const canonicalUrl = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  const fullImageUrl = image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? image : `/${image}`}`;
  const fullTitle = `${title} | ${siteConfig.institute.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.institute.name,
      locale: 'en_IN',
      type,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: `${title} — ${siteConfig.institute.name}`,
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime: modifiedTime || publishedTime,
        authors,
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImageUrl],
      creator: '@sachinsdemocoach',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// ==============================================================================
// STRUCTURED DATA (JSON-LD) GENERATORS — FACTUAL, VALID & SCHEMA.ORG CONFORMANT
// ==============================================================================

/**
 * Generates Schema.org EducationalOrganization & Organization JSON-LD
 */
export function generateEducationalOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': `${SITE_URL}/#organization`,
    name: siteConfig.institute.name,
    alternateName: siteConfig.institute.brandShort,
    url: SITE_URL,
    logo: `${SITE_URL}/images/crest-seal.png`,
    image: `${SITE_URL}/images/hero-campus.png`,
    description: `${siteConfig.institute.tagline} — ${siteConfig.institute.subtagline}`,
    foundingDate: siteConfig.institute.foundedYear,
    telephone: siteConfig.contact.phoneTel,
    email: siteConfig.contact.admissionsEmail,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${siteConfig.address.wing}, ${siteConfig.address.street}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.6139,
      longitude: 77.2090,
    },
    sameAs: siteConfig.socialLinks.map((s) => s.url),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
  };
}

/**
 * Generates Schema.org Course JSON-LD
 */
export function generateCourseSchema(course: Course) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${SITE_URL}/courses/${course.slug}#course`,
    name: course.title,
    courseCode: course.code,
    description: course.overview,
    provider: {
      '@type': 'EducationalOrganization',
      name: siteConfig.institute.name,
      sameAs: SITE_URL,
    },
    educationalCredentialAwarded: 'Fellowship Certification of Rigorous Cognitive Preparation',
    audience: {
      '@type': 'Audience',
      audienceType: course.targetAudience,
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: course.mode.includes('Hybrid') ? 'blended' : 'onsite',
      courseWorkload: course.duration,
      location: {
        '@type': 'Place',
        name: `${siteConfig.address.campusName}, ${siteConfig.address.city}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.state,
          addressCountry: siteConfig.address.country,
        },
      },
      instructor: course.facultySlugs.map((slug) => {
        const fac = siteConfig.facultyPlaceholders.find((f) => f.slug === slug);
        return {
          '@type': 'Person',
          name: fac?.name || slug,
          jobTitle: fac?.designation || 'Senior Faculty Chair',
        };
      }),
    },
  };
}

/**
 * Generates Schema.org BreadcrumbList JSON-LD
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path.startsWith('http') ? item.path : `${SITE_URL}${item.path.startsWith('/') ? item.path : `/${item.path}`}`,
    })),
  };
}

/**
 * Generates Schema.org BlogPosting / Article JSON-LD
 */
export function generateArticleSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${SITE_URL}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    image: post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: {
      '@type': 'EducationalOrganization',
      name: siteConfig.institute.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/crest-seal.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
  };
}

/**
 * Generates Schema.org Person JSON-LD for verified faculty chairs
 */
export function generatePersonSchema(faculty: FacultyMember) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/faculty/${faculty.slug}#person`,
    name: faculty.name,
    jobTitle: faculty.designation,
    description: faculty.bio,
    image: faculty.image.startsWith('http') ? faculty.image : `${SITE_URL}${faculty.image}`,
    worksFor: {
      '@type': 'EducationalOrganization',
      name: siteConfig.institute.name,
      url: SITE_URL,
    },
    alumniOf: faculty.education.map((edu) => ({
      '@type': 'EducationalOrganization',
      name: edu,
    })),
    knowsAbout: [faculty.specialization, ...faculty.coursesTaught],
  };
}

/**
 * Generates Schema.org FAQPage JSON-LD
 */
export function generateFaqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
