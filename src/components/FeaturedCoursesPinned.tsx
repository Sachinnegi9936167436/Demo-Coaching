'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { CinematicImageStack } from '@/components/animations/CinematicImageStack';
import { ParallaxImage } from '@/components/animations/ParallaxImage';
import { PINNED_SCENE_QUERY } from '@/lib/animations/gsapUtils';
import { useLenis } from '@/hooks/useLenis';

interface CourseSlide {
  num: string;
  category: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  link: string;
}

const showcaseCourses: CourseSlide[] = [
  {
    num: '01',
    category: 'Foundation Programs',
    title: 'Junior Olympiad & High-Order Reasoning',
    description: 'Nurturing mathematical intuition, logical proofs, and physics intuition for scholars in Grades 8 to 10 before competitive pressures emerge.',
    features: ['Socratic non-routine problem solving', 'Early PRMO, NSEJS & NTSE rigor', 'Capped strictly at 25 young scholars'],
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80',
    link: '/courses',
  },
  {
    num: '02',
    category: 'Competitive Exam Preparation',
    title: 'JEE (Advanced) & NEET-UG Pinnacle Fellowship',
    description: 'Our flagship 2-year intensive program deconstructing multi-concept problem structures in Classical Mechanics, Organic Synthesis, and Higher Calculus.',
    features: ['1,200+ hours of live faculty instruction', 'Bi-weekly simulated computer-based exams', '1-on-1 cognitive error-taxonomy analytics'],
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
    link: '/courses',
  },
  {
    num: '03',
    category: 'Professional Certification Programs',
    title: 'Executive Governance & Public Policy (UPSC)',
    description: 'Synthesizing Constitutional Law, Macroeconomics, and Ethics for university graduates and working professionals aspiring for public leadership.',
    features: ['Line-by-line editorial feedback on Mains answers', 'Daily current affairs analytical dossiers', 'Mentorship by retired public servants'],
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=80',
    link: '/courses',
  },
  {
    num: '04',
    category: 'Crash Courses',
    title: 'Rapid Rank Acceleration & Revision Sprint',
    description: 'A focused 90-day sprint engineered for final-year aspirants seeking rapid problem triage algorithms, OMR conditioning, and full-length simulated grand tests.',
    features: ['60 full-syllabus simulated testing blocks', 'Sub-second question triage conditioning', 'Targeted remediation of Type B & C errors'],
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80',
    link: '/courses',
  },
  {
    num: '05',
    category: 'Online Learning Programs',
    title: 'Digital Academic Vault & Hybrid Fellowship',
    description: 'Complete high-definition multi-camera live lecture streaming, interactive doubt clinics, and synchronized digital testing for distant scholars across the nation.',
    features: ['Low-latency interactive audio participation', 'Searchable 24/7 digital lecture archive', 'Curated physical course dossiers delivered to doorstep'],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    link: '/courses',
  },
];

export const FeaturedCoursesPinned: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pinTargetRef = useRef<HTMLDivElement | null>(null);

  const pinRef = useRef<ScrollTrigger | null>(null);
  const { scrollTo } = useLenis();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add(PINNED_SCENE_QUERY, () => {
      const pin = ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${(showcaseCourses.length - 1) * window.innerHeight * 0.85}`,
        pin: pinTargetRef.current,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          setActiveIndex(Math.round(self.progress * (showcaseCourses.length - 1)));
        },
      });
      pinRef.current = pin;
      gsap.fromTo('.course-watermark', { yPercent: -18 }, {
        yPercent: 18, ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current, start: () => pin.start,
          end: () => pin.end, scrub: 1,
        },
      });
      return () => { pinRef.current = null; };
    }, containerRef);
    return () => media.revert();
  }, []);

  const selectCourse = (index: number) => {
    const pin = pinRef.current;
    if (pin) {
      scrollTo(pin.start + (index / (showcaseCourses.length - 1)) * (pin.end - pin.start), { duration: 0.8 });
    } else {
      setActiveIndex(index);
    }
  };

  const currentCourse = showcaseCourses[activeIndex] || showcaseCourses[0];

  return (
    <section 
      ref={containerRef}
      className="relative bg-[#102338] text-[#F9F7F2] border-t border-[#D7B879]/20"
    >
      {/* Desktop Pinned Frame */}
      <div 
        ref={pinTargetRef}
        className="desktop-scroll-scene pinned-editorial-frame course-scene min-h-screen w-full flex-col justify-center relative overflow-hidden"
      >
        {/* Oversized Background Number identifying current course */}
        <div 
          className="course-watermark absolute right-12 top-1/2 -translate-y-1/2 text-[26vw] font-display font-bold text-white/[0.025] select-none pointer-events-none z-0"
          aria-hidden="true"
        >
          {currentCourse.num}
        </div>

        <div className="container-luxury relative z-10">
          
          {/* Top Category / Header */}
          <div className="flex justify-between items-center mb-10 pb-4 border-b border-[#D7B879]/20">
            <div>
              <div className="eyebrow-luxury mb-1">CHAPTER III — FEATURED SHOWCASE</div>
              <div className="font-heading text-xl text-[#D7B879]">
                Scroll-Driven Fellowship Index
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex items-center gap-3">
              {showcaseCourses.map((c, i) => (
                <button
                  key={c.num}
                  onClick={() => selectCourse(i)}
                  aria-label={`View program ${c.num}: ${c.category}`}
                  aria-pressed={activeIndex === i}
                  className={`flex items-center justify-center min-h-11 min-w-11 gap-1.5 transition-all duration-300 ${
                    activeIndex === i ? 'text-[#D7B879]' : 'text-white/30 hover:text-white/60'
                  }`}
                >
                  <span className={`block h-1 rounded-full transition-all duration-300 ${
                    activeIndex === i ? 'w-8 bg-[#D7B879]' : 'w-2 bg-white/20'
                  }`} />
                  <span className="font-display text-xs">{c.num}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main 2-Column Pinned Presentation */}
          <div className="grid grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Title, Description, Features, CTA */}
            <div key={currentCourse.num} className="sequence-copy col-span-6 space-y-4">
              <div className="inline-block px-3 py-1 bg-[#D7B879]/15 border border-[#D7B879] rounded text-[11px] font-display text-[#D7B879] uppercase tracking-wider">
                {currentCourse.category}
              </div>

              <h3 className="font-heading text-3xl sm:text-5xl text-[#F9F7F2] font-normal leading-[1.12]">
                {currentCourse.title}
              </h3>

              <p className="text-[#d2d9e2] text-base leading-relaxed font-light max-w-lg">
                {currentCourse.description}
              </p>

              {/* Key Features */}
              <div className="space-y-3 pt-2">
                {currentCourse.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-[#F9F7F2]">
                    <CheckCircle2 size={16} className="text-[#18B6AE] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <Link
                  href={currentCourse.link}
                  className="btn-luxury btn-luxury-gold py-4 px-8 text-xs font-semibold"
                >
                  <span>Explore Fellowship Details</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right Column: Prominent Visual with Depth */}
            <div className="col-span-6">
              <div className="sequence-visual relative h-[min(56vh,520px)] overflow-hidden border border-[#D7B879]/30 shadow-2xl">
                <CinematicImageStack images={showcaseCourses} activeIndex={activeIndex} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102338] via-transparent to-transparent opacity-70" />
                
                <div className="absolute bottom-6 left-6 z-10">
                  <span className="font-display text-xs text-[#D7B879] tracking-widest uppercase block mb-1">
                    SDC Program Code: {currentCourse.num}
                  </span>
                  <div className="font-heading text-xl text-[#F9F7F2]">
                    Strictly Capped Cohort Capacity
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Mobile Stacked Fallback (Never traps the user on touch devices) */}
      <div className="static-scroll-scene py-20">
        <div className="container-luxury">
          <div className="eyebrow-luxury mb-2">CHAPTER III — FEATURED SHOWCASE</div>
          <h2 className="section-clamp-heading text-[#F9F7F2] mb-10">
            Available Academic Programs
          </h2>

          <div className="space-y-8">
            {showcaseCourses.map((course) => (
              <div key={course.num} data-mobile-depth className="card-luxury p-6 sm:p-8 bg-[#081321]">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-2.5 py-1 bg-[#D7B879]/10 border border-[#D7B879] rounded text-[10px] text-[#D7B879] uppercase">
                    {course.category}
                  </span>
                  <span className="font-display text-xl text-[#D7B879] font-bold">{course.num}</span>
                </div>

                <h3 className="font-heading text-2xl text-[#F9F7F2] mb-3">{course.title}</h3>
                <p className="text-xs sm:text-sm text-[#d2d9e2] leading-relaxed mb-4">{course.description}</p>

                <div className="relative h-56 rounded-lg overflow-hidden border border-[#D7B879]/20 mb-5">
                  <ParallaxImage
                    src={course.image}
                    alt={course.title}
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="absolute inset-0"
                  />
                </div>

                <Link
                  href={course.link}
                  className="btn-luxury btn-luxury-gold w-full text-center py-3 text-xs"
                >
                  Explore Program
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
