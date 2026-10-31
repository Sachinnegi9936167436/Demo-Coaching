'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles } from 'lucide-react';
import { CinematicImageStack } from '@/components/animations/CinematicImageStack';
import { ParallaxImage } from '@/components/animations/ParallaxImage';
import { PINNED_SCENE_QUERY } from '@/lib/animations/gsapUtils';

interface StoryStage {
  numeral: string;
  stageTitle: string;
  narrative: string;
  highlight: string;
  image: string;
}

const storyStages: StoryStage[] = [
  {
    numeral: 'STAGE 01',
    stageTitle: 'Discover your ambition.',
    narrative: 'Every scholar arrives with latent curiosity and untapped potential. We begin by helping you define your true intellectual north star—whether top 100 in IIT-JEE, clinical medical excellence in AIIMS, or statesmanship in Civil Services.',
    highlight: 'Comprehensive Diagnostic Aptitude Mapping',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1400&q=80',
  },
  {
    numeral: 'STAGE 02',
    stageTitle: 'Find the right guidance.',
    narrative: 'Ambition without direction breeds exhaustion. You are paired with senior academicians who understand the emotional, physical, and cognitive topography of competitive exams.',
    highlight: '1-on-1 Faculty Mentorship Guild',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1400&q=80',
  },
  {
    numeral: 'STAGE 03',
    stageTitle: 'Build knowledge and confidence.',
    narrative: 'Through Socratic derivations, you deconstruct concepts to their mathematical and physical bedrock. Rote memorization is replaced by authentic intellectual authority.',
    highlight: 'First-Principles Pedagogical Architecture',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1400&q=80',
  },
  {
    numeral: 'STAGE 04',
    stageTitle: 'Practice and improve.',
    narrative: 'Exams are won in the trenches of error analysis. Our 4-stage error taxonomy tracks whether missteps were conceptual, computational, or temporal, converting mistakes into permanent mastery.',
    highlight: 'Proprietary Diagnostic Error Matrix',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80',
  },
  {
    numeral: 'STAGE 05',
    stageTitle: 'Move toward your goals.',
    narrative: 'Standing before the national examination hall with absolute psychological equilibrium and automated problem-solving precision, you execute with calm certainty.',
    highlight: 'Simulated Computer-Based Testing Crucible',
    image: 'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?auto=format&fit=crop&w=1400&q=80',
  },
];

export const CinematicStorytelling: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pinFrameRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add(PINNED_SCENE_QUERY, () => {
      const pin = ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${(storyStages.length - 1) * window.innerHeight * 0.8}`,
        pin: pinFrameRef.current,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          setActiveStage(Math.round(self.progress * (storyStages.length - 1)));
        },
      });
      gsap.fromTo('.story-depth-line', { scaleX: 0 }, {
        scaleX: 1, ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current, start: () => pin.start,
          end: () => pin.end, scrub: 0.7,
        },
      });
    }, containerRef);
    return () => media.revert();
  }, []);

  const current = storyStages[activeStage] || storyStages[0];

  return (
    <section 
      ref={containerRef}
      className="relative bg-[#081321] text-[#F9F7F2] border-t border-[#D7B879]/20"
    >
      {/* Desktop Scroll-Driven Pinned Sequence */}
      <div 
        ref={pinFrameRef}
        className="desktop-scroll-scene pinned-editorial-frame min-h-screen w-full flex-col justify-center relative overflow-hidden"
      >
        <div className="story-depth-line absolute top-0 inset-x-0 h-px bg-[#D7B879] origin-left" aria-hidden="true" />
        <div className="container-luxury relative z-10">
          
          {/* Main Heading */}
          <div className="story-scene-heading text-center max-w-4xl mx-auto mb-10">
            <div className="eyebrow-luxury justify-center mb-3">
              CHAPTER V — THE SCHOLAR'S ODYSSEY
            </div>
            <h2 className="section-clamp-heading text-[#F9F7F2] font-normal">
              EVERY GREAT SUCCESS <span className="italic text-[#D7B879] block">BEGINS WITH A DECISION.</span>
            </h2>
          </div>

          {/* Interactive Pinned Stage */}
          <div className="grid grid-cols-12 gap-12 items-center">
            
            {/* Left: Changing Story Details */}
            <div key={current.numeral} className="sequence-copy col-span-6 space-y-6">
              
              {/* Stepper indicators */}
              <div className="flex gap-2 mb-4">
                {storyStages.map((s, idx) => (
                  <div
                    key={idx}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      activeStage === idx ? 'w-10 bg-[#D7B879]' : 'w-3 bg-white/20'
                    }`}
                  />
                ))}
              </div>

              <span className="font-display text-xs text-[#18B6AE] tracking-widest uppercase block">
                {current.numeral}
              </span>

              <h3 className="font-heading text-3xl sm:text-4xl text-[#F9F7F2] font-normal">
                {current.stageTitle}
              </h3>

              <p className="text-[#d2d9e2] text-base leading-relaxed font-light">
                {current.narrative}
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#102338] border border-[#D7B879]/30 rounded-lg text-xs text-[#D7B879] font-medium">
                <Sparkles size={14} className="text-[#D7B879]" />
                <span>SDC Protocol: {current.highlight}</span>
              </div>
            </div>

            {/* Right: Changing Visual with Image Mask Transition */}
            <div className="col-span-6">
              <div className="sequence-visual relative h-[min(49vh,480px)] overflow-hidden border border-[#D7B879]/30 shadow-2xl">
                <CinematicImageStack images={storyStages.map((stage) => ({ image: stage.image, title: stage.stageTitle }))} activeIndex={activeStage} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081321] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 z-10">
                  <span className="font-display text-xs text-[#D7B879] tracking-widest uppercase block mb-1">
                    Odyssey Milestone
                  </span>
                  <div className="font-heading text-lg text-[#F9F7F2]">
                    {current.stageTitle}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Mobile Stacked Storytelling */}
      <div className="static-scroll-scene py-20">
        <div className="container-luxury">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="eyebrow-luxury justify-center mb-2">CHAPTER V — THE SCHOLAR'S ODYSSEY</div>
            <h2 className="section-clamp-heading text-[#F9F7F2]">
              EVERY GREAT SUCCESS <span className="italic text-[#D7B879] block">BEGINS WITH A DECISION.</span>
            </h2>
          </div>

          <div className="space-y-8">
            {storyStages.map((stage) => (
              <div key={stage.numeral} data-mobile-depth className="card-luxury p-6 bg-[#102338]">
                <span className="font-display text-xs text-[#18B6AE] tracking-widest uppercase block mb-2">
                  {stage.numeral}
                </span>
                <h3 className="font-heading text-2xl text-[#F9F7F2] mb-3">{stage.stageTitle}</h3>
                <p className="text-xs sm:text-sm text-[#d2d9e2] leading-relaxed mb-4">{stage.narrative}</p>

                <div className="relative h-48 rounded-lg overflow-hidden border border-[#D7B879]/20 mb-4">
                  <ParallaxImage
                    src={stage.image}
                    alt={stage.stageTitle}
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="absolute inset-0"
                  />
                </div>

                <div className="text-[11px] text-[#D7B879] pt-2 border-t border-white/5">
                  ✦ {stage.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
