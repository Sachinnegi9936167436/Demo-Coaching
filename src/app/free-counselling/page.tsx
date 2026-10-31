import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageTransition, SplitTextReveal, FadeInOnScroll } from '@/components/animations';
import { UniversalLeadForm } from '@/components/leads';

export const metadata: Metadata = buildMetadata({
  title: 'Book 1-on-1 Free Dean Academic Counselling Session',
  description: 'Private diagnostic error analysis & personalized exam preparation blueprint with the Academic Dean. Available in-person or via secure digital chamber.',
  path: '/free-counselling',
  tags: ['Free Counselling', 'Dean Consultation', 'Academic Diagnostic', 'Mentorship Audit', 'Career Guidance'],
});

export default function FreeCounsellingPage() {
  return (
    <PageTransition className="py-28 bg-[#081321] text-[#F9F7F2]">
      <div className="container-luxury max-w-4xl">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Breadcrumbs items={[{ name: 'Dean Academic Counselling', path: '/free-counselling' }]} />
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="eyebrow-luxury justify-center">1-ON-1 DIAGNOSTIC INTERVIEW</div>
          <SplitTextReveal
            tag="h1"
            text="Schedule a Private Dean Counselling Session"
            className="font-heading text-4xl sm:text-6xl text-[#F9F7F2] mb-4 leading-tight"
          />
          <FadeInOnScroll delay={0.15}>
            <p className="text-sm sm:text-base text-[#d2d9e2] leading-relaxed max-w-2xl mx-auto">
              Meet individually with our Academic Dean or Discipline Chairs. We diagnose your cognitive error patterns, working memory limits, and curate a customized preparation roadmap.
            </p>
          </FadeInOnScroll>
        </div>

        {/* 3 Steps in the Diagnostic Session */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          <div className="card-luxury p-5 bg-[#102338]">
            <div className="font-display text-xs text-[#D7B879] uppercase mb-1">Step 01 • 15 Mins</div>
            <div className="font-heading text-base text-[#F9F7F2] mb-1">Academic Audit</div>
            <p className="text-xs text-[#8e9eaf]">Review of recent mock test papers and identifying conceptual versus execution traps.</p>
          </div>

          <div className="card-luxury p-5 bg-[#102338]">
            <div className="font-display text-xs text-[#18B6AE] uppercase mb-1">Step 02 • 15 Mins</div>
            <div className="font-heading text-base text-[#F9F7F2] mb-1">Psychological Profiling</div>
            <p className="text-xs text-[#8e9eaf]">Assessing exam clock stress, speed anxiety, and question triage instincts.</p>
          </div>

          <div className="card-luxury p-5 bg-[#102338]">
            <div className="font-display text-xs text-[#D7B879] uppercase mb-1">Step 03 • 10 Mins</div>
            <div className="font-heading text-base text-[#F9F7F2] mb-1">Strategic Blueprint</div>
            <p className="text-xs text-[#8e9eaf]">A personalized syllabus timeline and recommendation for fellowship intake.</p>
          </div>
        </div>

        {/* Lead Intake Form */}
        <div className="shadow-2xl">
          <UniversalLeadForm
            formType="counselling"
            title="Book 1-on-1 Free Dean Counselling"
            subtitle="Private diagnostic error analysis & personalized exam preparation blueprint. In-person or digital."
          />
        </div>
      </div>
    </PageTransition>
  );
}
