'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Quote, X, Award, CheckCircle2 } from 'lucide-react';

interface Story {
  id: string;
  name: string;
  rank: string;
  exam: string;
  quote: string;
  story: string;
  image: string;
  videoUrl?: string;
  year: string;
}

import { successStories as dataStories } from '@/data/testimonials';

const successStories: Story[] = dataStories.map((s) => ({
  id: s.id,
  name: s.name.replace(/\[.*?\]/g, '').trim(),
  rank: s.outcome.split('—')[0].trim() + ' [Illustrative Benchmark]',
  exam: s.exam,
  quote: s.quote,
  story: s.backgroundStory,
  image: s.avatar,
  year: s.year,
}));

export const SuccessStoriesSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-28 bg-[#102338] text-[#F9F7F2] border-t border-[#D7B879]/20">
      <div className="container-luxury">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="eyebrow-luxury justify-center mb-3">
            CHAPTER VIII — TRANSFORMATION ARCHIVES
          </div>
          <h2 className="section-clamp-heading text-[#F9F7F2] font-normal">
            Voices of Academic Triumph
          </h2>
          <p className="text-sm text-[#d2d9e2] max-w-xl mx-auto mt-2">
            Detailed case studies chronicling how scholars overcame preparation plateaus through cognitive discipline.
          </p>
        </div>

        {/* Editorial Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {successStories.map((story) => (
            <div 
              key={story.id}
              className="bg-[#081321] border border-[#D7B879]/25 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Photo & Video Play Trigger */}
              <div className="relative w-full h-60 shrink-0 bg-black">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover filter brightness-[0.8] contrast-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081321] via-transparent to-transparent opacity-80" />
                
                {/* Play Button Trigger */}
                <button
                  onClick={() => setActiveVideo(story.name)}
                  className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-[#D7B879]/90 text-[#081321] flex items-center justify-center hover:scale-110 hover:bg-[#D7B879] transition-all shadow-xl"
                  aria-label={`Play testimonial film for ${story.name}`}
                >
                  <Play size={18} className="ml-1 fill-current" />
                </button>
              </div>

              {/* Text & Story Details */}
              <div className="p-7 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-heading text-xl text-[#F9F7F2]">{story.name}</h3>
                      <div className="text-xs text-[#8e9eaf]">{story.exam}</div>
                    </div>
                    <span className="px-2.5 py-0.5 bg-[#D7B879]/15 border border-[#D7B879] rounded text-[10px] text-[#D7B879] uppercase">
                      {story.year}
                    </span>
                  </div>

                  <div className="inline-block px-3 py-1 bg-[#18B6AE]/10 border border-[#18B6AE]/30 rounded text-xs text-[#18B6AE] font-semibold mb-4">
                    {story.rank}
                  </div>

                  <p className="text-xs sm:text-sm text-[#F9F7F2] italic font-serif leading-relaxed mb-4">
                    "{story.quote}"
                  </p>
                  <p className="text-xs text-[#d2d9e2] leading-relaxed line-clamp-3">
                    {story.story}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 text-[10px] text-[#8e9eaf] uppercase tracking-wider">
                  [Representative Portfolio Case Study — Illustrative Persona]
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Lightbox Modal */}
        {activeVideo && (
          <div 
            className="fixed inset-0 z-[100000] bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <div 
              className="bg-[#081321] border border-[#D7B879]/40 rounded-xl p-6 max-w-xl w-full text-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 text-[#8e9eaf] hover:text-[#D7B879]"
              >
                <X size={20} />
              </button>

              <h3 className="font-heading text-xl text-[#F9F7F2] mb-2">
                Scholar Reflection: {activeVideo}
              </h3>
              <p className="text-xs text-[#d2d9e2] mb-6">
                Demonstration Testimonial Video Reel [Sample Preview]
              </p>

              <div className="w-full h-64 bg-black/80 rounded-lg flex flex-col items-center justify-center border border-white/10 p-4">
                <Play size={40} className="text-[#D7B879] mb-3 animate-pulse" />
                <span className="text-xs text-[#8e9eaf]">
                  Video Stream Ready • Audio muted per prompt instructions
                </span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
