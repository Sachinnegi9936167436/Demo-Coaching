import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ArrowRight, History, Target, Eye, ShieldCheck, Award } from 'lucide-react';
import { PageTransition, SplitTextReveal, FadeInOnScroll } from '@/components/animations';

export const metadata: Metadata = buildMetadata({
  title: 'Our History, Genesis & Constitutional Mission',
  description: 'The story behind Sachin\'s Demo Coaching: why we chose strict 35-scholar batch ceilings over mass commercial coaching factories.',
  path: '/about/our-story',
  tags: ['Institute History', 'Our Story', 'Academic Mission', 'Ethical Education'],
});

export default function OurStoryPage() {
  const { ourStory } = siteConfig;

  return (
    <PageTransition className="py-28 bg-[#081321] text-[#F9F7F2]">
      <div className="container-luxury">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Breadcrumbs
            items={[
              { name: 'About Institute', path: '/about' },
              { name: 'Our Story & Mission', path: '/about/our-story' },
            ]}
          />
        </div>

        {/* Header Hero */}
        <div className="max-w-3xl mb-12">
          <div className="eyebrow-luxury">CHRONICLES OF AN ACADEMIC SANCTUARY</div>
          <SplitTextReveal
            tag="h1"
            text="The Genesis of an Uncompromising Academy"
            className="font-heading text-4xl sm:text-6xl text-[#F9F7F2] mb-6 leading-tight"
          />
          <FadeInOnScroll delay={0.15}>
            <p className="text-base sm:text-lg text-[#d2d9e2] leading-relaxed">
              How a team of veteran academicians rejected commercialized mass coaching to engineer a dedicated sanctuary of first-principles thinking, small cohorts, and radical accountability.
            </p>
          </FadeInOnScroll>
        </div>

        {/* Archival Cinematic Photography Banner */}
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-[#D7B879]/30 mb-20 shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=1600&q=80"
            alt="The Historic Inception: Scholars engaging in deep academic study in the classical library sanctuary"
            fill
            sizes="100vw"
            priority
            className="object-cover filter brightness-[0.75] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081321] via-[#081321]/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 text-xs">
            <div>
              <span className="text-[10px] uppercase font-display text-[#D7B879] tracking-widest block font-semibold">
                Archival Chronicle
              </span>
              <span className="text-[#F9F7F2] font-heading text-lg sm:text-xl">
                The Foundation of Scholarly Rigor
              </span>
            </div>
            <span className="text-[#8e9eaf] font-mono text-[11px] bg-[#081321]/80 px-3 py-1 rounded border border-white/10 backdrop-blur-sm">
              Established 2011 • Central Knowledge Campus
            </span>
          </div>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="card-luxury p-8 sm:p-10 bg-[#102338]">
            <div className="w-12 h-12 rounded-xl bg-[#D7B879]/10 border border-[#D7B879]/30 flex items-center justify-center text-[#D7B879] mb-6">
              <Target size={24} />
            </div>
            <span className="text-[10px] uppercase font-display tracking-widest text-[#D7B879] block mb-2">
              Our Core Mission
            </span>
            <h2 className="font-heading text-2xl text-[#F9F7F2] mb-4">
              Cultivating Intellectual Sovereignty
            </h2>
            <p className="text-sm text-[#d2d9e2] leading-relaxed">
              {ourStory.mission}
            </p>
          </div>

          <div className="card-luxury p-8 sm:p-10 bg-[#102338]">
            <div className="w-12 h-12 rounded-xl bg-[#18B6AE]/10 border border-[#18B6AE]/30 flex items-center justify-center text-[#18B6AE] mb-6">
              <Eye size={24} />
            </div>
            <span className="text-[10px] uppercase font-display tracking-widest text-[#18B6AE] block mb-2">
              Our Institutional Vision
            </span>
            <h2 className="font-heading text-2xl text-[#F9F7F2] mb-4">
              Setting the National Benchmark
            </h2>
            <p className="text-sm text-[#d2d9e2] leading-relaxed">
              {ourStory.vision}
            </p>
          </div>
        </div>

        {/* Chronological Timeline */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="eyebrow-luxury justify-center">CHRONOLOGY OF EXCELLENCE</div>
            <h2 className="font-heading text-3xl sm:text-4xl text-[#F9F7F2] mb-3">Our Journey & Roadmap</h2>
            <p className="text-xs sm:text-sm text-[#8e9eaf]">From architectural inception to national standard-bearer.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:bg-[#D7B879]/20">
            {ourStory.milestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={milestone.year}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 sm:gap-12`}
                >
                  {/* Timeline Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#081321] border-2 border-[#D7B879] flex items-center justify-center z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#D7B879]" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0">
                    <div className="card-luxury p-6 sm:p-8 bg-[#102338]/90 border border-[#D7B879]/30">
                      <div className="font-display text-sm font-bold text-[#D7B879] mb-1">
                        {milestone.year}
                      </div>
                      <h3 className="font-heading text-xl text-[#F9F7F2] mb-2">{milestone.title}</h3>
                      <p className="text-xs sm:text-sm text-[#d2d9e2] leading-relaxed">{milestone.detail}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="eyebrow-luxury justify-center">THE UNWAVERING CODE</div>
            <h2 className="font-heading text-3xl sm:text-4xl text-[#F9F7F2] mb-3">Our Four Core Values</h2>
            <p className="text-xs sm:text-sm text-[#8e9eaf]">Principles that guide every lecture, diagnostic clinic, and admissions decision.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ourStory.values.map((val, idx) => (
              <div key={val.title} className="card-luxury p-6 bg-[#102338]">
                <div className="font-display text-xs text-[#18B6AE] font-semibold tracking-wider uppercase mb-3">
                  Principle 0{idx + 1}
                </div>
                <h3 className="font-heading text-lg text-[#F9F7F2] mb-2">{val.title}</h3>
                <p className="text-xs text-[#d2d9e2] leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Navigation Switcher */}
        <div className="border-t border-[#D7B879]/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            href="/about"
            className="text-xs font-display tracking-wider text-[#d2d9e2] hover:text-[#D7B879] transition-colors"
          >
            ← Return to Institute Overview
          </Link>
          <Link
            href="/about/director-message"
            className="btn-luxury btn-luxury-gold py-3 px-6 text-xs font-semibold"
          >
            <span>Read Director's Message</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
