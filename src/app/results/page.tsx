import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ShieldAlert, ArrowRight } from 'lucide-react';
import { PageTransition, SplitTextReveal, FadeInOnScroll } from '@/components/animations';

export const metadata: Metadata = buildMetadata({
  title: 'Student Results, Ranks & Benchmark Records',
  description: 'Inspect illustrative benchmark results, competitive outcomes, and performance milestones for IIT-JEE, NEET-UG, and Olympiads at Sachin\'s Demo Coaching.',
  path: '/results',
  tags: ['Results', 'Hall of Fame', 'JEE Ranks', 'NEET Scores', 'Competitive Benchmarks'],
});

export default function ResultsPage() {
  return (
    <PageTransition className="py-28">
      <div className="container-luxury">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Breadcrumbs items={[{ name: 'Benchmark Results', path: '/results' }]} />
        </div>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="eyebrow-luxury justify-center">BENCHMARK PROOF & ARCHIVES</div>
          <SplitTextReveal 
            tag="h1"
            text="Hall of Fame & Transformations"
            className="font-heading text-4xl sm:text-6xl text-ivory mb-4 leading-tight"
          />
          <FadeInOnScroll delay={0.15}>
            <p className="text-sm sm:text-base text-ivory-dim leading-relaxed">
              The true metric of an academic sanctuary is not merely where scholars start, but the intellectual altitude they reach through rigorous cognitive discipline.
            </p>
          </FadeInOnScroll>
        </div>

        {/* Prominent Mandatory Compliance Disclaimer */}
        <div className="bg-[#19140e]/90 border border-gold rounded-xl p-5 sm:p-6 max-w-4xl mx-auto mb-14 flex gap-4 items-start">
          <ShieldAlert size={22} className="text-gold-light shrink-0 mt-0.5" />
          <div>
            <div className="font-display text-gold-light text-xs sm:text-sm tracking-wider uppercase font-semibold mb-1">
              Illustrative Benchmark Notice
            </div>
            <p className="text-xs sm:text-sm text-ivory-dim leading-relaxed">
              All achiever profiles, exam percentiles, ranks, testimonials, and case studies displayed below are clearly identified demonstration placeholders engineered to illustrate the format, depth, and presentation standards of {siteConfig.institute.name}. No real-world claims or endorsements are made or implied.
            </p>
          </div>
        </div>

        {/* Achiever Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {siteConfig.achieversPlaceholders.map((achiever, idx) => (
            <div key={idx} className="card-luxury p-8">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#D7B879]/50 shrink-0 shadow-md">
                    <Image
                      src={siteConfig.successStories[idx]?.avatar || siteConfig.successStories[0].avatar}
                      alt={achiever.name}
                      fill
                      sizes="56px"
                      className="object-cover filter contrast-[1.05]"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-gold tracking-widest uppercase block mb-0.5 font-semibold">
                      [Illustrative Persona]
                    </span>
                    <h2 className="font-heading text-lg text-ivory">{achiever.name}</h2>
                    <div className="text-[11px] text-ivory-dim/60 leading-tight">{achiever.program}</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 bg-gold/10 border border-gold/40 rounded text-[10px] text-gold-light uppercase shrink-0">
                  {achiever.year}
                </span>
              </div>

              <div className="bg-black/60 border border-gold/20 p-3.5 rounded-lg mb-4">
                <div className="text-[10px] text-gold uppercase tracking-wider">Outcome Benchmark</div>
                <div className="font-display text-lg text-ivory font-semibold mt-0.5">
                  {achiever.outcome}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-ivory-dim leading-relaxed italic mb-5">
                "{achiever.testimonial}"
              </p>

              <div className="border-t border-white/5 pt-3 text-[11px] text-ivory-dim/50">
                Methodology: Socratic First-Principles derivation & Error Taxonomy
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-12 bg-noir-card border border-gold/25 rounded-2xl max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-ivory mb-3">Begin Your Transformation Trajectory</h2>
          <p className="text-xs sm:text-sm text-ivory-dim max-w-lg mx-auto mb-6">
            Book a diagnostic consultation with our Academic Dean to identify your unique problem-solving profile.
          </p>
          <Link
            href="/admissions"
            className="btn-luxury btn-luxury-gold py-4 px-8 text-xs font-semibold"
          >
            <span>Initiate Candidate Evaluation</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
