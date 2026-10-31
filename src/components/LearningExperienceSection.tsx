'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ParallaxImage } from '@/components/animations/ParallaxImage';
import { CheckCircle2 } from 'lucide-react';

interface ExperienceFacet {
  id: string;
  badge: string;
  title: string;
  headline: string;
  description: string;
  points: string[];
  image: string;
}

const experienceFacets: ExperienceFacet[] = [
  {
    id: 'mentorship',
    badge: 'Cognitive Tracking',
    title: 'Personalized 1-on-1 Mentorship',
    headline: 'You are never just a seat number in a lecture hall.',
    description: 'Every scholar is assigned a dedicated faculty advisor who audits weekly homework logs, reviews sleep and stress rhythms, and recalibrates study schedules.',
    points: ['Weekly 30-minute private diagnostic consultations', 'Personalized problem selection tailored to weak concepts', 'Direct Dean hotline access for academic emergencies'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'hybrid',
    badge: 'Hybrid Infrastructure',
    title: 'Live & Archival Digital Vault',
    headline: 'Seamless continuity across campus and home sanctuary.',
    description: 'Every live classroom lecture is recorded via multi-camera 4K optical tracking. Review complex derivation moments with indexed timestamp markers anytime.',
    points: ['Zero-latency interactive audio participation', 'Searchable topic-by-topic digital lecture transcripts', 'Accessible across mobile, tablet, and workstation'],
    image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'analytics',
    badge: 'Diagnostic Telemetry',
    title: 'Simulated Testing & Error Analytics',
    headline: 'Transforming test anxiety into automated precision.',
    description: 'Our proprietary Computer-Based Test (CBT) engine replicates national examination UI while generating deep psychological and computational breakdown reports.',
    points: ['Sub-second response time telemetry across all 75 questions', 'Type A/B/C/D error classification taxonomy', 'Adaptive difficulty benchmarking against national toppers'],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
  },
];

export const LearningExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add('(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
      gsap.utils.toArray<HTMLElement>('.experience-row').forEach((row) => {
        gsap.fromTo(row.querySelector('.experience-copy'), { y: 32 }, {
          y: -32, ease: 'none',
          scrollTrigger: { trigger: row, start: 'top bottom', end: 'bottom top', scrub: 1 },
        });
        gsap.fromTo(row.querySelector('.experience-visual'), { y: -25 }, {
          y: 25, ease: 'none',
          scrollTrigger: { trigger: row, start: 'top bottom', end: 'bottom top', scrub: 1 },
        });
      });
    }, sectionRef);
    return () => media.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 bg-[#081321] text-[#F9F7F2] border-t border-[#D7B879]/20">
      <div className="container-luxury">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="eyebrow-luxury justify-center mb-3">
            CHAPTER IX — THE ACADEMIC ECOSYSTEM
          </div>
          <h2 className="section-clamp-heading text-[#F9F7F2] font-normal">
            Beyond the Traditional Classroom
          </h2>
          <p className="text-sm text-[#d2d9e2] max-w-xl mx-auto mt-2">
            An interconnected learning matrix integrating individualized mentorship, cloud lecture vaults, and diagnostic telemetry.
          </p>
        </div>

        {/* Alternating Interactive Composition (Not a generic 6-card grid) */}
        <div className="space-y-24">
          {experienceFacets.map((facet, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div 
                key={facet.id}
                className={`experience-row grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Text Block */}
                <div className={`experience-copy lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="inline-block px-3 py-1 bg-[#D7B879]/10 border border-[#D7B879] rounded text-[10px] font-display text-[#D7B879] uppercase tracking-wider">
                    {facet.badge}
                  </div>

                  <h3 className="font-heading text-3xl sm:text-4xl text-[#F9F7F2] leading-tight">
                    {facet.title}
                  </h3>

                  <div className="text-base sm:text-lg text-[#D7B879] font-serif italic">
                    "{facet.headline}"
                  </div>

                  <p className="text-xs sm:text-sm text-[#d2d9e2] leading-relaxed font-light">
                    {facet.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    {facet.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#F9F7F2]">
                        <CheckCircle2 size={15} className="text-[#18B6AE] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Block */}
                <div className={`experience-visual lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative h-[420px] rounded-2xl overflow-hidden border border-[#D7B879]/30 shadow-2xl group">
                    <ParallaxImage
                      src={facet.image}
                      alt={facet.title}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="absolute inset-0"
                      imageClassName="brightness-[0.8] contrast-[1.1]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081321] via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute bottom-6 left-6 z-10">
                      <span className="font-display text-[10px] text-[#18B6AE] uppercase tracking-widest block mb-1">
                        Sanctuary Pillar
                      </span>
                      <div className="font-heading text-lg text-[#F9F7F2]">
                        {facet.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
