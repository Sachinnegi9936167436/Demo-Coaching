'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaqItem, siteConfig } from '@/config/siteConfig';
import { ChevronDown, Search, Phone, ArrowRight } from 'lucide-react';
import { PageTransition, SplitTextReveal, FadeInOnScroll } from '@/components/animations';
import { Breadcrumbs } from '@/components/Breadcrumbs';

interface FaqClientProps {
  faqs: FaqItem[];
}

export const FaqClient: React.FC<FaqClientProps> = ({ faqs }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndexes, setOpenIndexes] = useState<{ [key: number]: boolean }>({ 0: true });

  const categories = [
    'All',
    'Admissions & Eligibility',
    'Fees & Scholarships',
    'Batch Dynamics & Mentorship',
    'Infrastructure & Technology',
    'Curriculum & Testing',
    'Campus Life & Well-Being',
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleIndex = (idx: number) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <PageTransition className="py-28 bg-[#081321] text-[#F9F7F2]">
      <div className="container-luxury max-w-4xl">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Breadcrumbs items={[{ name: 'FAQ Archive', path: '/faq' }]} />
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="eyebrow-luxury justify-center">ACADEMIC KNOWLEDGE ARCHIVE</div>
          <SplitTextReveal
            tag="h1"
            text="Frequently Enquired Inquiries"
            className="font-heading text-4xl sm:text-6xl text-[#F9F7F2] mb-4 leading-tight"
          />
          <FadeInOnScroll delay={0.15}>
            <p className="text-sm sm:text-base text-[#d2d9e2] leading-relaxed max-w-xl mx-auto">
              Clear, transparent answers regarding admissions protocols, batch size ceilings, scholarship waivers, testing engines, and daily life at the Pinnacle Sanctuary.
            </p>
          </FadeInOnScroll>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8e9eaf]" aria-hidden="true" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions by topic, fees, hostel, faculty, or test dates..."
            aria-label="Search FAQ questions"
            className="w-full bg-[#102338] border border-white/10 rounded-full pl-11 pr-4 py-3.5 text-sm text-[#F9F7F2] placeholder-[#8e9eaf] focus:border-[#D7B879] outline-none"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-12" role="tablist" aria-label="FAQ Categories">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={selectedCategory === c}
              onClick={() => setSelectedCategory(c)}
              className={`px-4 py-2 rounded-full text-xs font-display tracking-wider uppercase transition-all ${
                selectedCategory === c
                  ? 'border border-[#D7B879] bg-[#D7B879]/20 text-[#D7B879]'
                  : 'border border-white/10 bg-[#102338] text-[#8e9eaf] hover:border-[#D7B879]/40 hover:text-[#F9F7F2]'
              }`}
            >
              {c === 'All' ? 'All Inquiries' : c.split('&')[0].trim()}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-16">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-[#8e9eaf]">
              No questions matched your search criteria. Please contact our admissions hotline directly.
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = !!openIndexes[idx];
              return (
                <div 
                  key={idx}
                  className="card-luxury p-6 bg-[#102338] border border-white/5 transition-colors hover:border-[#D7B879]/30"
                >
                  <button
                    onClick={() => toggleIndex(idx)}
                    className="w-full flex justify-between items-center text-left gap-4"
                    aria-expanded={isOpen}
                  >
                    <div>
                      {faq.category && (
                        <span className="text-[10px] text-[#18B6AE] uppercase font-display tracking-widest block mb-1">
                          {faq.category}
                        </span>
                      )}
                      <h3 className="font-heading text-lg sm:text-xl text-[#F9F7F2]">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-[#D7B879] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div className="mt-4 pt-4 border-t border-white/5 text-xs sm:text-sm text-[#d2d9e2] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Unanswered Question Hotline Box */}
        <section className="card-luxury p-8 bg-gradient-to-r from-[#102338] via-[#081321] to-[#102338] border border-[#D7B879]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-display text-[#D7B879] uppercase tracking-wider mb-1">
              Have an Unanswered Question?
            </div>
            <h2 className="font-heading text-xl text-[#F9F7F2]">
              Connect Directly with Admissions Director
            </h2>
            <p className="text-xs text-[#8e9eaf] mt-1">
              Our academic counselors respond within 24 operational hours.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="btn-luxury btn-luxury-gold py-2.5 px-5 text-xs font-semibold"
            >
              <span>Submit Query</span>
              <ArrowRight size={13} />
            </Link>
            <a
              href={`tel:${siteConfig.contact.phoneTel}`}
              className="px-4 py-2.5 rounded-full border border-white/20 hover:border-[#18B6AE] text-xs font-display text-[#F9F7F2] uppercase flex items-center gap-1.5"
            >
              <Phone size={13} className="text-[#18B6AE]" />
              <span>Call Desk</span>
            </a>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
