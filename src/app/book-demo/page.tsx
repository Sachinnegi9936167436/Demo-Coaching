import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageTransition, SplitTextReveal, FadeInOnScroll } from '@/components/animations';
import { UniversalLeadForm } from '@/components/leads';

export const metadata: Metadata = buildMetadata({
  title: 'Register for Saturday Masterclass Demo Session',
  description: 'Experience our live 3-hour Socratic seminar at the Pinnacle Sanctuary. Meet lead discipline chairs and receive a personalized error audit. Capped at 35 seats.',
  path: '/book-demo',
  tags: ['Demo Class', 'Masterclass Reservation', 'Socratic Seminar', 'Trial Session', 'Free Demo'],
});

export default function BookDemoPage() {
  return (
    <PageTransition className="py-28 bg-[#081321] text-[#F9F7F2]">
      <div className="container-luxury max-w-4xl">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Breadcrumbs items={[{ name: 'Saturday Demo Masterclass', path: '/book-demo' }]} />
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="eyebrow-luxury justify-center">EXPERIENCE THE COGNITIVE DIFFERENCE</div>
          <SplitTextReveal
            tag="h1"
            text="Reserve Your Saturday Masterclass Demo"
            className="font-heading text-4xl sm:text-6xl text-[#F9F7F2] mb-4 leading-tight"
          />
          <FadeInOnScroll delay={0.15}>
            <p className="text-sm sm:text-base text-[#d2d9e2] leading-relaxed max-w-2xl mx-auto">
              Attend a live 3-hour Socratic seminar at the Pinnacle Sanctuary. Meet lead chairs, witness first-principles derivations, and receive an instant cognitive error audit.
            </p>
          </FadeInOnScroll>
        </div>

        {/* What to Expect Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="card-luxury p-5 bg-[#102338]">
            <div className="font-display text-xs text-[#D7B879] uppercase mb-1">Phase 01 • 90 Mins</div>
            <div className="font-heading text-base text-[#F9F7F2] mb-1">Live Socratic Lecture</div>
            <p className="text-xs text-[#8e9eaf]">Derive a challenging physics or math paradox on blank paper without shortcuts.</p>
          </div>

          <div className="card-luxury p-5 bg-[#102338]">
            <div className="font-display text-xs text-[#18B6AE] uppercase mb-1">Phase 02 • 45 Mins</div>
            <div className="font-heading text-base text-[#F9F7F2] mb-1">Micro-Diagnostic Trial</div>
            <p className="text-xs text-[#8e9eaf]">Complete a 10-question problem set evaluating non-routine reasoning speed.</p>
          </div>

          <div className="card-luxury p-5 bg-[#102338]">
            <div className="font-display text-xs text-[#D7B879] uppercase mb-1">Phase 03 • 45 Mins</div>
            <div className="font-heading text-base text-[#F9F7F2] mb-1">Dean Error Audit</div>
            <p className="text-xs text-[#8e9eaf]">1-on-1 feedback identifying whether your mistakes were conceptual or clock-induced.</p>
          </div>
        </div>

        {/* Universal Lead Intake Form for Masterclass Demo */}
        <div className="shadow-2xl">
          <UniversalLeadForm
            formType="demo"
            title="Register for Saturday Masterclass Demo"
            subtitle="Attend a live 3-hour seminar at Pinnacle Sanctuary. Strictly capped at 35 scholars."
          />
        </div>
      </div>
    </PageTransition>
  );
}

