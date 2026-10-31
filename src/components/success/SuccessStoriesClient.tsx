'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SuccessStory, siteConfig } from '@/config/siteConfig';
import { ArrowRight, ShieldAlert, Award, Play, CheckCircle2, Quote } from 'lucide-react';
import { PageTransition, SplitTextReveal, FadeInOnScroll } from '@/components/animations';
import { AdmissionsModalNext } from '@/components/AdmissionsModalNext';
import { Breadcrumbs } from '@/components/Breadcrumbs';

interface SuccessStoriesClientProps {
  successStories: SuccessStory[];
}

export const SuccessStoriesClient: React.FC<SuccessStoriesClientProps> = ({ successStories }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoStudent, setSelectedVideoStudent] = useState<string | null>(null);

  return (
    <PageTransition className="py-28 bg-[#081321] text-[#F9F7F2]">
      <div className="container-luxury">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumbs items={[{ name: 'Success Stories', path: '/success-stories' }]} />
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="eyebrow-luxury justify-center">TRANSFORMATION CHRONICLES</div>
          <SplitTextReveal
            tag="h1"
            text="How First-Principles Changed Their Trajectory"
            className="font-heading text-4xl sm:text-6xl text-[#F9F7F2] mb-4 leading-tight"
          />
          <FadeInOnScroll delay={0.15}>
            <p className="text-sm sm:text-base text-[#d2d9e2] leading-relaxed">
              Real excellence is not an accident of genetics; it is the deliberate deconstruction of error patterns in an accountable, intimate academic environment.
            </p>
          </FadeInOnScroll>
        </div>

        {/* Mandatory Compliance Notice */}
        <div className="bg-[#102338] border border-[#D7B879]/50 rounded-xl p-6 max-w-4xl mx-auto mb-16 flex gap-4 items-start shadow-xl">
          <ShieldAlert size={24} className="text-[#D7B879] shrink-0 mt-0.5" />
          <div>
            <div className="font-display text-xs sm:text-sm text-[#D7B879] uppercase tracking-wider font-semibold mb-1">
              Illustrative Benchmark Disclosure
            </div>
            <p className="text-xs sm:text-sm text-[#d2d9e2] leading-relaxed">
              All achiever profiles, exam percentiles, ranks, testimonials, and case studies displayed below are clearly identified demonstration placeholders engineered to illustrate the format, depth, and presentation standards of {siteConfig.institute.name}. No real-world claims or endorsements are made or implied.
            </p>
          </div>
        </div>

        {/* Deep Dive Transformation Case Studies */}
        <div className="space-y-16 mb-24">
          {successStories.map((story) => (
            <article 
              key={story.id} 
              className="card-luxury p-8 sm:p-14 bg-[#102338] border border-[#D7B879]/30"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left Profile Avatar & Telemetry */}
                <div className="lg:col-span-4 flex flex-col items-center text-center sm:items-start sm:text-left">
                  <div className="relative w-36 h-36 rounded-2xl overflow-hidden border-2 border-[#D7B879]/40 mb-5 shadow-2xl">
                    <Image
                      src={story.avatar}
                      alt={`Scholar Portrait: ${story.name} — ${story.outcome}`}
                      fill
                      sizes="144px"
                      className="object-cover filter contrast-[1.05]"
                    />
                  </div>

                  <span className="text-[10px] text-[#D7B879] uppercase font-display tracking-widest block mb-1 font-semibold">
                    [Illustrative Persona]
                  </span>
                  <h2 className="font-heading text-2xl text-[#F9F7F2] mb-1">
                    {story.name}
                  </h2>
                  <div className="text-xs text-[#18B6AE] font-display uppercase tracking-wider mb-2 font-semibold">
                    {story.exam} • {story.year}
                  </div>
                  <div className="text-[11px] text-[#8e9eaf] mb-4">
                    {story.program}
                  </div>

                  <div className="w-full p-4 rounded-xl bg-[#081321] border border-white/5 mb-5 text-center sm:text-left">
                    <div className="text-[10px] text-[#8e9eaf] uppercase font-display tracking-wider">Benchmark Rank</div>
                    <div className="font-mono text-xl font-bold text-[#D7B879] mt-0.5">{story.outcome}</div>
                  </div>

                  <button
                    onClick={() => setSelectedVideoStudent(story.name)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-white/20 bg-white/5 hover:border-[#18B6AE] text-xs font-display text-[#d2d9e2] hover:text-[#18B6AE] transition-all uppercase"
                  >
                    <Play size={12} className="fill-current text-[#18B6AE]" />
                    <span>Watch Study Interview</span>
                  </button>
                </div>

                {/* Right Editorial Journey */}
                <div className="lg:col-span-8 space-y-6">
                  <blockquote className="p-6 rounded-xl bg-[#081321] border-l-4 border-[#D7B879] text-base sm:text-lg text-[#F9F7F2] font-serif italic leading-relaxed">
                    <Quote size={20} className="text-[#D7B879] mb-2 opacity-50" />
                    "{story.quote}"
                  </blockquote>

                  <div>
                    <h3 className="font-display text-xs text-[#D7B879] uppercase tracking-wider mb-2 font-semibold">
                      The Starting Bottleneck
                    </h3>
                    <p className="text-xs sm:text-sm text-[#d2d9e2] leading-relaxed">
                      {story.backgroundStory}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-xs text-[#18B6AE] uppercase tracking-wider mb-2 font-semibold">
                      The Cognitive Turning Point
                    </h3>
                    <p className="text-xs sm:text-sm text-[#d2d9e2] leading-relaxed">
                      {story.turningPoint}
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-5">
                    <h3 className="font-display text-xs text-[#D7B879] uppercase tracking-wider mb-3 font-semibold">
                      Key Study Strategies Implemented
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {story.studyStrategy.map((strat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-[#d2d9e2]">
                          <CheckCircle2 size={14} className="text-[#18B6AE] shrink-0 mt-0.5" />
                          <span>{strat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#081321]/60 border border-white/5 text-xs text-[#8e9eaf]">
                    <strong className="text-[#D7B879] block mb-1">Dean's Faculty Log:</strong>
                    "{story.facultyNote}"
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Video Lightbox Modal Simulation */}
        {selectedVideoStudent && (
          <div 
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedVideoStudent(null)}
          >
            <div 
              className="bg-[#102338] border border-[#D7B879]/40 rounded-2xl p-8 max-w-xl w-full text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Award size={36} className="text-[#D7B879] mx-auto mb-3" />
              <h3 className="font-heading text-2xl text-[#F9F7F2] mb-2">
                {selectedVideoStudent} Testimonial Reel
              </h3>
              <p className="text-xs text-[#d2d9e2] mb-6">
                [Demonstration Lightbox: Full student transformation documentary preview stream with diagnostic study habits.]
              </p>
              <div className="aspect-video bg-[#081321] rounded-xl border border-white/10 flex items-center justify-center text-xs text-[#8e9eaf] mb-6">
                ✦ High-Resolution SDC Documentary Stream Simulation ✦
              </div>
              <button
                onClick={() => setSelectedVideoStudent(null)}
                className="btn-luxury btn-luxury-gold py-2.5 px-6 text-xs font-semibold"
              >
                Close Preview
              </button>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="card-luxury p-12 bg-gradient-to-r from-[#102338] via-[#081321] to-[#102338] border border-[#D7B879]/30 text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl text-[#F9F7F2] mb-3">
            Your Transformation Trajectory Starts With One Diagnostic Test
          </h2>
          <p className="text-xs sm:text-sm text-[#d2d9e2] max-w-md mx-auto mb-6">
            Identify your cognitive strengths, error types, and exam timing patterns with our Academic Deans.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn-luxury btn-luxury-gold py-3.5 px-8 text-xs font-semibold"
          >
            <span>Book Saturday Diagnostic Evaluation</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      <AdmissionsModalNext
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </PageTransition>
  );
};
