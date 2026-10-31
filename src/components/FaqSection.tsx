'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
  category: string;
}

const detailedFaqs: FaqItem[] = [
  {
    category: 'Course Eligibility',
    q: 'What are the academic eligibility criteria for SDC fellowships?',
    a: 'We evaluate candidates based on conceptual curiosity and reasoning potential rather than rote marksheet percentages. Applicants sit for our 90-minute SDC Diagnostic Aptitude Test (SDC-DAT) followed by an academic alignment dialogue with the Dean.',
  },
  {
    category: 'Classes & Batches',
    q: 'How strictly is the 35-scholar batch ceiling enforced?',
    a: 'It is a constitutional rule of the institute. Under no circumstance does any lecture hall exceed 35 enrolled scholars. This guarantees every student receives dedicated faculty attention and active verbal participation in every class.',
  },
  {
    category: 'Admissions & Screening',
    q: 'What does the SDC-DAT Diagnostic Screen test?',
    a: 'The SDC-DAT does not test formula memorization. It evaluates your capacity to identify contradictions, apply conservation laws, and decompose novel scientific puzzles from first principles.',
  },
  {
    category: 'Learning Modes',
    q: 'Can outstation scholars enroll through the hybrid digital vault?',
    a: 'Yes. Our lecture atriums are equipped with 4K optical tracking cameras and low-latency audio arrays. Distant fellows participate verbally in real-time and access indexed digital recordings 24/7.',
  },
  {
    category: 'Faculty Access',
    q: 'How accessible are lead mentors outside regular lecture hours?',
    a: 'Daily 1-on-1 doubt clinics are scheduled between 04:30 PM and 07:30 PM. Scholars can book private 20-minute consultation slots directly with lead subject deans.',
  },
  {
    category: 'Demo Masterclasses',
    q: 'Are complimentary demonstration classes available before enrollment?',
    a: 'Yes. We host 3-hour Socratic Masterclass Demos every Saturday. You will experience our live lecture environment, meet the lead faculty, and receive an instant assessment of your problem-solving approach.',
  },
  {
    category: 'Study Material',
    q: 'What course resources and problem archives are provided?',
    a: 'Scholars receive our 4,500-question Curated Challenge Archive, comprehensive theoretical derivation dossiers, and full access to our proprietary Computer-Based Testing (CBT) simulated exam portal.',
  },
  {
    category: 'Fees & Scholarships',
    q: 'What merit fee waivers and financial scholarship slabs are available?',
    a: 'Merit fee waivers of up to 40% are awarded based on SDC-DAT examination percentile rankings. Flexible semester installments and corporate/sibling grants are also supported [Illustrative Model].',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-28 bg-[#081321] text-[#F9F7F2] border-t border-[#D7B879]/20">
      <div className="container-luxury max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="eyebrow-luxury justify-center mb-3">
            CHAPTER XI — CANDIDATE INQUIRIES
          </div>
          <h2 className="section-clamp-heading text-[#F9F7F2] font-normal">
            Frequently Clarified Questions
          </h2>
          <p className="text-sm text-[#d2d9e2] max-w-lg mx-auto mt-2">
            Transparent insights into admissions eligibility, class density, faculty access, and scholarship matrices.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {detailedFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#102338] border border-[#D7B879]/20 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left font-heading text-lg sm:text-xl text-[#F9F7F2] hover:text-[#D7B879] transition-colors gap-4"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] uppercase font-display text-[#18B6AE] tracking-widest px-2 py-0.5 bg-[#18B6AE]/10 border border-[#18B6AE]/30 rounded hidden sm:inline">
                      {faq.category}
                    </span>
                    <span>{faq.q}</span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-[#D7B879] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#edd8a8]' : 'rotate-0'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#d2d9e2] leading-relaxed border-t border-white/5 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
