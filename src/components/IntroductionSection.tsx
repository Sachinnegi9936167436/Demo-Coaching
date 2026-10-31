'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteConfig } from '@/config/siteConfig';
import { ParallaxImage } from '@/components/animations/ParallaxImage';

export const IntroductionSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const textBlockRef = useRef<HTMLDivElement | null>(null);
  const imageFrameRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      // 1. Heading & Text reveal
      if (headingRef.current && textBlockRef.current) {
        gsap.from([headingRef.current, textBlockRef.current], {
          y: 50,
          opacity: 0,
          duration: 1.1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        });
      }

      // 2. Campus Image Growth Animation:
      // Grows from a contained frame into a wide cinematic composition as user scrolls
      if (imageFrameRef.current) {
        gsap.fromTo(
          imageFrameRef.current,
          { clipPath: 'inset(0 12% 0 12% round 24px)' },
          {
            clipPath: 'inset(0 0% 0 0% round 4px)',
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              end: 'bottom 80%',
              scrub: 1.2,
            },
          }
        );
      }
      gsap.fromTo('.intro-watermark', { xPercent: -8 }, {
        xPercent: 8, ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom', end: 'bottom top', scrub: 1.2,
        },
      });
    }, sectionRef);

    return () => media.revert();
  }, []);

  return (
    <section 
      id="section-introduction"
      ref={sectionRef}
      className="py-32 bg-[#081321] relative overflow-hidden"
    >
      {/* Large Background Watermark Lettering */}
      <div 
        className="intro-watermark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14vw] font-display font-bold text-white/[0.035] tracking-[0.2em] uppercase select-none pointer-events-none whitespace-nowrap z-0"
        aria-hidden="true"
      >
        EXCELLENCE
      </div>

      <div className="container-luxury relative z-10">
        
        {/* Editorial Top Content */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="eyebrow-luxury justify-center mb-6">
            CHAPTER I — INSTITUTE MANIFESTO
          </div>

          {/* Heading: Exactly as requested */}
          <h2 
            ref={headingRef}
            className="font-heading text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] text-[#F9F7F2] mb-8"
          >
            MORE THAN AN INSTITUTE.{' '}
            <span className="italic text-[#D7B879] block mt-1">A PLACE TO BECOME.</span>
          </h2>

          <div 
            ref={textBlockRef}
            className="space-y-6 text-[#d2d9e2] text-base sm:text-lg font-light leading-relaxed max-w-3xl mx-auto"
          >
            <p>
              Education is not the passive accumulation of facts; it is the deliberate sculpting of intellectual discernment. At {siteConfig.institute.name}, we cultivate scholars who examine fundamental paradoxes rather than memorizing formula sheets.
            </p>
            <p className="text-sm sm:text-base text-[#8e9eaf]">
              Within our architecturally curated study halls, scholars are immersed in an atmosphere of rigorous Socratic dialogue, compassionate mentorship, and peer excellence. We do not mass-produce examinees; we form thinkers capable of leading the nation's future.
            </p>
          </div>
        </div>

        {/* Visual Reveal: Image grows from contained frame into wide cinematic composition */}
        <div className="flex justify-center w-full">
          <div 
            ref={imageFrameRef}
            className="relative w-full h-[360px] sm:h-[580px] overflow-hidden border border-[#D7B879]/30 shadow-2xl mx-auto"
          >
            <ParallaxImage
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=2000&q=80"
              alt="The Pinnacle Sanctuary Academic Library & Research Atrium"
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="absolute inset-0"
              imageClassName="object-center brightness-[0.75] contrast-[1.05]"
            />
            {/* Ambient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#081321] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-10 text-left">
              <span className="font-display text-[10px] tracking-widest text-[#D7B879] uppercase block mb-1">
                Central Campus • Knowledge Atrium
              </span>
              <h3 className="font-heading text-xl sm:text-2xl text-[#F9F7F2]">
                Where Focus Meets Pure Academic Tranquility
              </h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
