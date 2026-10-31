'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Award, ShieldCheck, Users, BookOpen, Clock } from 'lucide-react';

interface MetricItem {
  id: string;
  targetValue: number;
  suffix: string;
  label: string;
  description: string;
  isTeal?: boolean;
}

const metrics: MetricItem[] = [
  {
    id: 'students',
    targetValue: 12500,
    suffix: '+',
    label: 'Scholars Mentored',
    description: '[Illustrative Sample Model]',
  },
  {
    id: 'experience',
    targetValue: 22,
    suffix: '+',
    label: 'Years Faculty Experience',
    description: 'Senior Dean & IITian Council',
    isTeal: true,
  },
  {
    id: 'selections',
    targetValue: 98,
    suffix: '%',
    label: 'Diagnostic Accuracy',
    description: 'SDC Cognitive Error Matrix',
  },
  {
    id: 'faculty',
    targetValue: 35,
    suffix: ' Max',
    label: 'Scholars Per Batch',
    description: 'Constitutional Ceiling Rule',
    isTeal: true,
  },
  {
    id: 'programs',
    targetValue: 5,
    suffix: ' Tracks',
    label: 'Flagship Fellowships',
    description: 'JEE, NEET, UPSC & Quant',
  },
];

export const AchievementsSection: React.FC = () => {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    students: 0,
    experience: 0,
    selections: 0,
    faculty: 0,
    programs: 0,
  });

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          metrics.forEach((m) => {
            const duration = 1800; // 1.8 seconds
            const steps = 60;
            const stepTime = duration / steps;
            let currentStep = 0;

            const timer = setInterval(() => {
              currentStep++;
              const progress = currentStep / steps;
              // Smooth ease-out curve
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const val = Math.floor(easeOut * m.targetValue);

              setCounts((prev) => ({ ...prev, [m.id]: val }));

              if (currentStep >= steps) {
                setCounts((prev) => ({ ...prev, [m.id]: m.targetValue }));
                clearInterval(timer);
              }
            }, stepTime);
          });
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-[#081321] text-[#F9F7F2] border-t border-[#D7B879]/20 relative overflow-hidden"
    >
      <div className="container-luxury relative z-10">
        
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="eyebrow-luxury justify-center">CHAPTER IV — MEASURES OF EXCELLENCE</div>
          <h2 className="section-clamp-heading text-[#F9F7F2] mb-3">
            Academic Authority in Numbers
          </h2>
          <p className="text-[#d2d9e2] text-sm">
            Configurable institutional telemetry reflecting pedagogical intensity and student dedication.
          </p>
        </div>

        {/* 5-Column Grid with Count-Up Animations */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {metrics.map((m) => {
            const displayedValue = counts[m.id].toLocaleString();
            return (
              <div 
                key={m.id}
                className="bg-[#102338]/90 border border-[#D7B879]/25 rounded-xl p-6 text-center hover:border-[#D7B879]/60 transition-all duration-300 shadow-xl"
              >
                <div 
                  className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 tracking-tight ${
                    m.isTeal ? 'text-[#18B6AE]' : 'text-[#D7B879]'
                  }`}
                >
                  {displayedValue}{m.suffix}
                </div>

                <div className="text-xs sm:text-sm font-heading text-[#F9F7F2] font-medium mb-1">
                  {m.label}
                </div>

                <div className="text-[10px] text-[#8e9eaf] uppercase tracking-wider">
                  {m.description}
                </div>

                {/* Animated bottom hairline */}
                <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-[#D7B879] to-transparent mx-auto mt-4" />
              </div>
            );
          })}
        </div>

        {/* Compliance Notice */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#102338] border border-[#D7B879]/20 rounded-full text-xs text-[#8e9eaf]">
            <ShieldCheck size={14} className="text-[#D7B879]" />
            <span>All statistical metrics are clearly designated demonstration models for prototype evaluation.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
