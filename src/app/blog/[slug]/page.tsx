import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/config/siteConfig';
import { buildMetadata, generateArticleSchema } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ArrowRight } from 'lucide-react';
import { PageTransition, SplitTextReveal } from '@/components/animations';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return siteConfig.blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = siteConfig.blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return buildMetadata({
      title: 'Article Not Found',
      description: 'The requested journal article was not found.',
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: 'article',
    publishedTime: post.date,
    authors: [post.author],
    tags: post.tags,
  });
}

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = siteConfig.blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related posts
  const relatedPosts = siteConfig.blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  // Schema.org BlogPosting / Article JSON-LD
  const articleSchema = generateArticleSchema(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <PageTransition className="py-28 bg-[#081321] text-[#F9F7F2]">
        <article className="container-luxury max-w-4xl" itemScope itemType="https://schema.org/BlogPosting">
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { name: 'Academic Journal', path: '/blog' },
                { name: post.title, path: `/blog/${post.slug}` },
              ]}
            />
          </div>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[#D7B879]/15 text-[#D7B879] rounded text-[10px] uppercase font-display tracking-widest font-semibold">
                {post.category}
              </span>
              <span className="text-xs text-[#8e9eaf]">{post.readTime}</span>
              <span className="text-xs text-[#8e9eaf]">• <time dateTime={post.date}>{post.date}</time></span>
            </div>

            <SplitTextReveal
              tag="h1"
              text={post.title}
              className="font-heading text-3xl sm:text-5xl lg:text-6xl text-[#F9F7F2] mb-6 leading-tight"
            />

            <div className="flex items-center gap-4 py-4 border-y border-white/10" itemProp="author" itemScope itemType="https://schema.org/Person">
              <div>
                <div className="font-heading text-sm text-[#F9F7F2] font-semibold" itemProp="name">{post.author}</div>
                <div className="text-xs text-[#8e9eaf]" itemProp="jobTitle">{post.authorRole}</div>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          <figure className="relative h-[360px] sm:h-[480px] rounded-2xl overflow-hidden border border-[#D7B879]/30 mb-14 shadow-2xl">
            <Image
              src={post.image}
              alt={`Analytical illustration: ${post.title}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover filter contrast-[1.1]"
              itemProp="image"
            />
          </figure>

          {/* Excerpt Pull-Quote */}
          <blockquote className="p-8 rounded-2xl bg-[#102338] border-l-4 border-[#D7B879] text-base sm:text-xl text-[#d2d9e2] font-serif italic leading-relaxed mb-12">
            "{post.excerpt}"
          </blockquote>

          {/* Body Sections */}
          <div className="space-y-12 mb-16 text-sm sm:text-base text-[#d2d9e2] leading-relaxed font-sans" itemProp="articleBody">
            {post.contentSections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="font-heading text-2xl sm:text-3xl text-[#F9F7F2]">
                  {section.heading}
                </h2>
                <p>{section.body}</p>

                {section.callout && (
                  <aside className="p-6 rounded-xl bg-[#081321] border border-[#18B6AE]/30 my-6">
                    <span className="text-[10px] text-[#18B6AE] font-display uppercase tracking-widest block mb-1">
                      SDC Methodological Takeaway
                    </span>
                    <p className="text-xs sm:text-sm text-[#F9F7F2] font-serif italic">
                      "{section.callout}"
                    </p>
                  </aside>
                )}
              </section>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10 mb-16">
            {post.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full bg-[#102338] border border-white/10 text-xs font-mono text-[#D7B879]"
              >
                #{t}
              </span>
            ))}
          </div>

          {/* Author Bio Box */}
          <div className="card-luxury p-8 bg-[#102338] border border-[#D7B879]/30 mb-20">
            <div className="font-display text-[10px] text-[#D7B879] uppercase tracking-widest mb-1">
              About the Author
            </div>
            <h3 className="font-heading text-xl text-[#F9F7F2] mb-1">{post.author}</h3>
            <div className="text-xs text-[#18B6AE] mb-3">{post.authorRole}</div>
            <p className="text-xs sm:text-sm text-[#d2d9e2] leading-relaxed">
              Leading academic mentor at {siteConfig.institute.name}. Conducts weekly first-principles seminars and cognitive error audits for top-tier national competitive examination aspirants.
            </p>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="border-t border-[#D7B879]/20 pt-14 mb-16">
              <h3 className="font-heading text-2xl text-[#F9F7F2] mb-8">Related Journal Essays</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((r) => (
                  <article key={r.slug} className="card-luxury p-6 bg-[#102338]">
                    <span className="text-[10px] text-[#18B6AE] uppercase font-display block mb-1">
                      {r.category}
                    </span>
                    <Link href={`/blog/${r.slug}`}>
                      <h4 className="font-heading text-lg text-[#F9F7F2] hover:text-[#D7B879] transition-colors mb-2">
                        {r.title}
                      </h4>
                    </Link>
                    <p className="text-xs text-[#8e9eaf] line-clamp-2">{r.excerpt}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Bottom CTA */}
          <section className="text-center bg-gradient-to-r from-[#102338] via-[#081321] to-[#102338] border border-[#D7B879]/40 rounded-2xl p-10">
            <h3 className="font-heading text-2xl text-[#F9F7F2] mb-2">
              Experience Our Pedagogy In Person
            </h3>
            <p className="text-xs sm:text-sm text-[#d2d9e2] max-w-md mx-auto mb-6">
              Attend a Saturday Masterclass Demo at the Pinnacle Sanctuary and learn how first-principles thinking eliminates exam anxiety.
            </p>
            <Link
              href="/book-demo"
              className="btn-luxury btn-luxury-gold py-3 px-6 text-xs font-semibold inline-flex"
            >
              <span>Reserve Saturday Demo</span>
              <ArrowRight size={13} />
            </Link>
          </section>
        </article>
      </PageTransition>
    </>
  );
}
