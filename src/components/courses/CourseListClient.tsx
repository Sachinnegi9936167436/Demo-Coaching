'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Course, siteConfig } from '@/config/siteConfig';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { AdmissionsModalNext } from '@/components/AdmissionsModalNext';
import { PageTransition, SplitTextReveal, FadeInOnScroll } from '@/components/animations';
import { Breadcrumbs } from '@/components/Breadcrumbs';

interface CourseListClientProps {
  courses: Course[];
}

export const CourseListClient: React.FC<CourseListClientProps> = ({ courses }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<string | undefined>(undefined);

  const categories = [
    'All',
    'Engineering & Pure Sciences',
    'Medical & Life Sciences',
    'Administrative & Public Leadership',
    'Junior Aptitude & Early Excellence',
    'Professional & Management Prep',
  ];

  const filteredCourses = selectedCategory === 'All'
    ? courses
    : courses.filter((c) => c.category === selectedCategory);

  const handleOpenDemo = (courseId?: string) => {
    setSelectedCourseId(courseId);
    setIsDemoModalOpen(true);
  };

  return (
    <PageTransition className="py-28">
      <div className="container-luxury">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Breadcrumbs items={[{ name: 'Academic Fellowships', path: '/courses' }]} />
        </div>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="eyebrow-luxury justify-center">PROGRAM CURRICULUM ARCHITECTURE</div>
          <SplitTextReveal 
            tag="h1"
            text="Academic Fellowships & Masterclasses"
            className="font-heading text-4xl sm:text-6xl text-ivory mb-4 leading-tight"
          />
          <FadeInOnScroll delay={0.2}>
            <p className="text-sm sm:text-base text-ivory-dim leading-relaxed">
              Each fellowship is designed as an immersive intellectual crucible—featuring proprietary problem archives, multi-camera digital vaults, and small cohorts capped at 35 scholars.
            </p>
          </FadeInOnScroll>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-12" role="tablist" aria-label="Course Categories">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-display tracking-wider uppercase transition-all ${
                selectedCategory === cat
                  ? 'border border-gold bg-gold/20 text-gold-light'
                  : 'border border-white/10 bg-[#120f0c] text-ivory-dim hover:border-gold/40'
              }`}
            >
              {cat === 'All' ? 'All Fellowships' : cat.split('&')[0].trim()}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="space-y-10">
          {filteredCourses.map((course) => (
            <article key={course.id} className="card-luxury p-0 overflow-hidden border border-[#D7B879]/30 bg-[#102338] shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Visual Editorial Preview */}
                <div className="lg:col-span-4 relative min-h-[240px] lg:min-h-full bg-[#081321]">
                  <Image
                    src={course.image}
                    alt={`${course.title} Academic Sanctuary & Learning Environment`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover filter brightness-[0.8] contrast-[1.1] transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#102338] via-[#102338]/40 to-transparent" />
                  <div className="absolute top-4 left-4 z-10 flex flex-col gap-2 items-start">
                    <span className="px-2.5 py-1 bg-[#081321]/90 backdrop-blur-md border border-[#D7B879] rounded text-[10px] text-[#D7B879] uppercase tracking-wider font-semibold">
                      {course.code}
                    </span>
                    <span className="px-2.5 py-1 bg-[#18B6AE]/20 backdrop-blur-md border border-[#18B6AE]/40 rounded text-[10px] text-[#18B6AE] uppercase tracking-wider font-semibold">
                      {course.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 z-10 text-xs text-[#d2d9e2]/80 font-mono">
                    Batch Ceiling: {course.batchSize}
                  </div>
                </div>

                {/* Content Details */}
                <div className="lg:col-span-8 p-7 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <span className="text-xs text-[#D7B879] font-display uppercase tracking-wider block mb-1">
                          {course.category}
                        </span>
                        <h2 className="font-heading text-2xl sm:text-3xl text-[#F9F7F2]">
                          <Link href={`/courses/${course.slug}`} className="hover:text-[#D7B879] transition-colors">
                            {course.title}
                          </Link>
                        </h2>
                      </div>
                      <div className="text-right">
                        <div className="font-display text-xs sm:text-sm text-[#D7B879] font-semibold">{course.duration}</div>
                        <div className="text-[11px] text-[#8e9eaf]">{course.mode.split('(')[0]}</div>
                      </div>
                    </div>

                    <p className="text-[#d2d9e2] text-xs sm:text-sm leading-relaxed mb-6">
                      {course.overview}
                    </p>

                    {/* Grid: Stages & Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 rounded-lg bg-[#081321]/80 border border-white/5 mb-6">
                      <div>
                        <h3 className="font-display text-xs text-[#D7B879] tracking-widest uppercase mb-3 font-semibold">
                          Curriculum Stages
                        </h3>
                        <div className="space-y-2">
                          {course.curriculumChapters.map((ch, idx) => (
                            <div key={idx} className="flex justify-between text-xs text-[#d2d9e2] pb-1.5 border-b border-white/5">
                              <span>• {ch.title}</span>
                              <span className="text-[#8e9eaf]">{ch.duration}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-display text-xs text-[#18B6AE] tracking-widest uppercase mb-3 font-semibold">
                          Pedagogical Safeguards
                        </h3>
                        <div className="space-y-2">
                          {course.highlights.slice(0, 3).map((h, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-[#d2d9e2]">
                              <CheckCircle2 size={14} className="text-[#18B6AE] shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#D7B879]/20">
                    <div className="text-xs text-[#8e9eaf]">
                      Target: <strong className="text-[#F9F7F2]">{course.targetAudience}</strong>
                    </div>
                    <div className="flex items-center gap-3">
                      <Link
                        href={`/courses/${course.slug}`}
                        className="px-4 py-2.5 rounded-full border border-white/20 hover:border-[#18B6AE] text-xs font-display text-[#d2d9e2] hover:text-[#18B6AE] transition-all uppercase"
                      >
                        View Full Syllabus
                      </Link>
                      <button
                        onClick={() => handleOpenDemo(course.id)}
                        className="btn-luxury btn-luxury-gold py-2.5 px-6 text-xs font-semibold"
                      >
                        <span>Reserve Demo Seat</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Prototype Disclaimer */}
        <div className="mt-12 p-4 bg-[#120f0b] border border-gold/20 rounded-lg text-center text-xs text-ivory-dim/60">
          ✦ All fellowship tracks, durations, and syllabi listed above represent {siteConfig.institute.name}'s proprietary demonstration course architecture.
        </div>
      </div>

      <AdmissionsModalNext
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        defaultCourseId={selectedCourseId}
      />
    </PageTransition>
  );
};
