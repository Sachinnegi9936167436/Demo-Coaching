'use client';

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { Preloader } from '@/components/Preloader';
import { HeroSection } from '@/components/HeroSection';
import { IntroductionSection } from '@/components/IntroductionSection';
import { FeaturedCoursesPinned } from '@/components/FeaturedCoursesPinned';
import { AchievementsSection } from '@/components/AchievementsSection';
import { CinematicStorytelling } from '@/components/CinematicStorytelling';
import { HorizontalGallerySection } from '@/components/HorizontalGallerySection';
import { FacultyShowcaseSection } from '@/components/FacultyShowcaseSection';
import { SuccessStoriesSection } from '@/components/SuccessStoriesSection';
import { LearningExperienceSection } from '@/components/LearningExperienceSection';
import { FaqSection } from '@/components/FaqSection';
import { FinalCtaSection } from '@/components/FinalCtaSection';

// Dynamically import heavy modal and media player to reduce initial JS payload
const AdmissionsModalNext = dynamic(
  () => import('@/components/AdmissionsModalNext').then((mod) => mod.AdmissionsModalNext),
  { ssr: false }
);

const DemoVideoSection = dynamic(
  () => import('@/components/DemoVideoSection').then((mod) => mod.DemoVideoSection),
  {
    loading: () => (
      <div className="py-28 bg-[#102338] min-h-[350px] flex items-center justify-center">
        <div className="w-8 h-8 border border-[#D7B879]/30 border-t-[#D7B879] rounded-full animate-spin" />
      </div>
    ),
  }
);

export const HomePageClient: React.FC = () => {
  const [isCounsellingModalOpen, setIsCounsellingModalOpen] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;
    const media = window.matchMedia('(max-width: 1023px) and (prefers-reduced-motion: no-preference)');
    let observer: IntersectionObserver | null = null;

    const sync = () => {
      observer?.disconnect();
      page.classList.toggle('mobile-motion-enabled', media.matches);
      if (!media.matches) return;

      observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-in-view');
          observer?.unobserve(entry.target);
        }
      }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });
      page.querySelectorAll<HTMLElement>('[data-mobile-depth]').forEach((card) => observer?.observe(card));
    };

    sync();
    media.addEventListener('change', sync);
    return () => {
      media.removeEventListener('change', sync);
      observer?.disconnect();
    };
  }, []);

  return (
    <div ref={pageRef} className="relative">
      {/* Session-Aware Initial Identity Preloader */}
      <Preloader />

      {/* SECTION 1: CINEMATIC HERO */}
      <HeroSection 
        onOpenCounsellingModal={() => setIsCounsellingModalOpen(true)} 
      />

      {/* SECTION 2: INSTITUTE INTRODUCTION */}
      <IntroductionSection />

      {/* SECTION 3: SCROLL-PINNED FEATURED COURSES */}
      <FeaturedCoursesPinned />

      {/* SECTION 4: ACHIEVEMENTS & NUMBERS (COUNT-UP) */}
      <AchievementsSection />

      {/* SECTION 5: CINEMATIC STORYTELLING (5 JOURNEY STAGES) */}
      <CinematicStorytelling />

      {/* SECTION 6: HORIZONTAL SCROLL GALLERY */}
      <HorizontalGallerySection />

      {/* SECTION 7: FACULTY SHOWCASE ("LEARN FROM THOSE WHO INSPIRE EXCELLENCE") */}
      <FacultyShowcaseSection />

      {/* SECTION 8: STUDENT SUCCESS STORIES */}
      <SuccessStoriesSection />

      {/* SECTION 9: LEARNING EXPERIENCE (INTERACTIVE ALTERNATING BLOCKS) */}
      <LearningExperienceSection />

      {/* SECTION 10: CINEMATIC DEMO VIDEO & LIGHTBOX */}
      <DemoVideoSection />

      {/* SECTION 11: ACCESSIBLE FAQ ACCORDION */}
      <FaqSection />

      {/* SECTION 12: FINAL CONVERSION CTA */}
      <FinalCtaSection 
        onOpenCounsellingModal={() => setIsCounsellingModalOpen(true)} 
      />

      {/* Shared Admissions / Counselling Modal */}
      <AdmissionsModalNext
        isOpen={isCounsellingModalOpen}
        onClose={() => setIsCounsellingModalOpen(false)}
        defaultMode="counselling"
      />
    </div>
  );
};
