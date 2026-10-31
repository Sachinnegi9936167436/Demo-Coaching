import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ArrowRight } from 'lucide-react';
import { PageTransition, SplitTextReveal, FadeInOnScroll } from '@/components/animations';

export const metadata: Metadata = buildMetadata({
  title: 'The SDC Pedagogical Doctrine & First-Principles Method',
  description: 'Explore the First-Principles learning doctrine, 4-stage error taxonomy, and Socratic seminar methodology at Sachin\'s Demo Coaching.',
  path: '/pedagogy',
  tags: ['Pedagogy', 'First-Principles', 'Error Taxonomy', 'Socratic Method', 'Cognitive Architecture'],
});

export default function PedagogyPage() {
  return (
    <PageTransition className="py-28">
      <div className="container-luxury">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Breadcrumbs items={[{ name: 'Pedagogical Doctrine', path: '/pedagogy' }]} />
        </div>

        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="eyebrow-luxury justify-center">THE ARCHITECTURE OF COGNITION</div>
          <SplitTextReveal 
            tag="h1"
            text="The SDC Pedagogical Doctrine"
            className="font-heading text-4xl sm:text-6xl text-ivory mb-4 leading-tight"
          />
          <FadeInOnScroll delay={0.15}>
            <p className="text-sm sm:text-base text-ivory-dim leading-relaxed">
              Competitive examinations do not measure intelligence in a vacuum; they measure the reliability of your analytical faculties under severe cognitive and temporal stress.
            </p>
          </FadeInOnScroll>
        </div>

        {/* Doctrine Manifesto Card */}
        <div className="card-luxury p-8 sm:p-14 max-w-4xl mx-auto mb-16 bg-gradient-to-br from-[#120e0b] to-[#0a0907]">
          <div className="font-display text-[11px] text-gold tracking-widest uppercase mb-3">
            Core Epistemological Creed
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl text-ivory mb-5 leading-snug">
            "If a scholar cannot derive a theorem on a blank page from first principles, they do not own the theorem."
          </h2>
          <p className="text-ivory-dim text-xs sm:text-sm leading-relaxed mb-6">
            At {siteConfig.institute.name}, our classroom sessions invert the typical passive lecture format. Faculty pose fundamental physical and mathematical paradoxes, guiding scholars through Socratic inquiry to construct proofs organically before standard exam shortcuts are introduced.
          </p>

          <div className="gold-separator-line my-5" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
            <div>
              <div className="text-gold font-display text-lg font-semibold">01. No Blind Formulae</div>
              <p className="text-ivory-dim/60 text-xs mt-1">Every equation is deduced from foundational physical conservation laws.</p>
            </div>
            <div>
              <div className="text-gold font-display text-lg font-semibold">02. Micro-Group Audits</div>
              <p className="text-ivory-dim/60 text-xs mt-1">Batches capped at 35 ensuring mandatory verbal participation every week.</p>
            </div>
            <div>
              <div className="text-gold font-display text-lg font-semibold">03. Diagnostic Taxonomy</div>
              <p className="text-ivory-dim/60 text-xs mt-1">Every error is categorized across 4 psychological and mathematical axes.</p>
            </div>
          </div>
        </div>

        {/* 4-Stage Error Taxonomy Matrix */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="eyebrow-luxury justify-center">SYSTEMIC DIAGNOSTICS</div>
            <h2 className="font-heading text-3xl sm:text-4xl text-ivory mb-2">The 4-Stage Error Taxonomy</h2>
            <p className="text-xs sm:text-sm text-ivory-dim/60">We treat errors as valuable diagnostic telemetry rather than moral failures.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-luxury p-6">
              <div className="text-gold font-display text-2xl mb-2">Type A</div>
              <h3 className="font-heading text-lg text-ivory mb-2">Conceptual Blindspots</h3>
              <p className="text-xs text-ivory-dim leading-relaxed">
                Scholar applied a formula outside its valid physical domain. Remediated via 1-on-1 fundamental re-derivation.
              </p>
            </div>

            <div className="card-luxury p-6">
              <div className="text-gold font-display text-2xl mb-2">Type B</div>
              <h3 className="font-heading text-lg text-ivory mb-2">Computational Slip</h3>
              <p className="text-xs text-ivory-dim leading-relaxed">
                Arithmetic inaccuracy during multi-step manipulation. Remediated through daily 15-minute speed computation drills.
              </p>
            </div>

            <div className="card-luxury p-6">
              <div className="text-gold font-display text-2xl mb-2">Type C</div>
              <h3 className="font-heading text-lg text-ivory mb-2">Temporal Triangulation</h3>
              <p className="text-xs text-ivory-dim leading-relaxed">
                Spending 7 minutes on a 2-minute question due to ego. Remediated with the SDC 90-Second triage algorithm.
              </p>
            </div>

            <div className="card-luxury p-6">
              <div className="text-gold font-display text-2xl mb-2">Type D</div>
              <h3 className="font-heading text-lg text-ivory mb-2">Autonomic Panic</h3>
              <p className="text-xs text-ivory-dim leading-relaxed">
                Elevated heart rate and fatigue in the final 45 minutes of exam. Remediated with HRV breathing protocols.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 bg-noir-card border border-gold/25 rounded-2xl max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-ivory mb-3">Experience a Live Socratic Seminar</h2>
          <p className="text-xs sm:text-sm text-ivory-dim max-w-lg mx-auto mb-6">
            Join our complimentary weekend demonstration class to see the First-Principles Doctrine applied in real-time.
          </p>
          <Link
            href="/book-demo"
            className="btn-luxury btn-luxury-gold py-4 px-8 text-xs font-semibold inline-flex"
          >
            <span>Reserve Saturday Demo Masterclass</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
