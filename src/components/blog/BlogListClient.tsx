'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/config/siteConfig';
import { ArrowRight } from 'lucide-react';
import { PageTransition, SplitTextReveal, FadeInOnScroll } from '@/components/animations';
import { Breadcrumbs } from '@/components/Breadcrumbs';

interface BlogListClientProps {
  posts: BlogPost[];
}

export const BlogListClient: React.FC<BlogListClientProps> = ({ posts }) => {
  const [selectedCat, setSelectedCat] = useState('All');

  const categories = ['All', 'Cognitive Pedagogy', 'Exam Strategy', 'Medical Excellence'];

  const filteredPosts = selectedCat === 'All'
    ? posts
    : posts.filter((p) => p.category === selectedCat);

  const featuredPost = posts[0];

  return (
    <PageTransition className="py-28 bg-[#081321] text-[#F9F7F2]">
      <div className="container-luxury">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumbs items={[{ name: 'Academic Journal', path: '/blog' }]} />
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="eyebrow-luxury justify-center">EDITORIAL JOURNAL & ESSAYS</div>
          <SplitTextReveal
            tag="h1"
            text="The Architecture of Cognition"
            className="font-heading text-4xl sm:text-6xl text-[#F9F7F2] mb-4 leading-tight"
          />
          <FadeInOnScroll delay={0.15}>
            <p className="text-sm sm:text-base text-[#d2d9e2] leading-relaxed">
              Dispatches from the Pinnacle Sanctuary on cognitive psychology, first-principles mathematics, error taxonomy forensics, and national exam strategy.
            </p>
          </FadeInOnScroll>
        </div>

        {/* Featured Editorial Banner */}
        {featuredPost && (
          <article className="card-luxury p-8 sm:p-12 bg-[#102338] border border-[#D7B879]/40 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-[#D7B879]/20 text-[#D7B879] rounded text-[10px] font-display uppercase tracking-widest font-semibold">
                    Featured Masterclass Essay
                  </span>
                  <span className="text-xs text-[#8e9eaf]">{featuredPost.readTime}</span>
                </div>

                <Link href={`/blog/${featuredPost.slug}`}>
                  <h2 className="font-heading text-2xl sm:text-4xl text-[#F9F7F2] hover:text-[#D7B879] transition-colors mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                </Link>

                <p className="text-sm text-[#d2d9e2] leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="text-xs">
                    <span className="text-[#F9F7F2] font-semibold block">{featuredPost.author}</span>
                    <span className="text-[#8e9eaf] text-[11px]">{featuredPost.authorRole}</span>
                  </div>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="btn-luxury btn-luxury-gold py-2.5 px-5 text-xs font-semibold"
                  >
                    <span>Read Full Essay</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden border border-[#D7B879]/20">
                  <Image
                    src={featuredPost.image}
                    alt={`Cover illustration: ${featuredPost.title}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover filter contrast-[1.1] hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Categories */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-14" role="tablist" aria-label="Journal Categories">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={selectedCat === c}
              onClick={() => setSelectedCat(c)}
              className={`px-5 py-2.5 rounded-full text-xs font-display tracking-wider uppercase transition-all ${
                selectedCat === c
                  ? 'border border-[#D7B879] bg-[#D7B879]/20 text-[#D7B879]'
                  : 'border border-white/10 bg-[#102338] text-[#8e9eaf] hover:border-[#D7B879]/40 hover:text-[#F9F7F2]'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {filteredPosts.map((post) => (
            <article key={post.slug} className="card-luxury p-6 bg-[#102338] flex flex-col justify-between">
              <div>
                <div className="relative h-52 rounded-xl overflow-hidden mb-5 border border-white/10">
                  <Image
                    src={post.image}
                    alt={`Thumbnail: ${post.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover filter contrast-[1.05]"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#081321]/90 backdrop-blur-md rounded text-[10px] uppercase font-display text-[#18B6AE]">
                    {post.category}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-[11px] text-[#8e9eaf] mb-2 font-mono">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <h3 className="font-heading text-xl text-[#F9F7F2] hover:text-[#D7B879] transition-colors mb-2 leading-snug">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-xs text-[#d2d9e2] leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-[#8e9eaf] truncate max-w-[160px]">
                  {post.author.split('[')[0].trim()}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-display text-[#D7B879] hover:text-[#edd8a8] flex items-center gap-1 font-semibold"
                >
                  <span>Read</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};
