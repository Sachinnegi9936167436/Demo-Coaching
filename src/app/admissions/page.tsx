import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageTransition, SplitTextReveal, FadeInOnScroll } from '@/components/animations';
import { UniversalLeadForm } from '@/components/leads';

export const metadata: Metadata = buildMetadata({
  title: 'Admissions Protocol & Merit Fellowship Applications',
  description: 'Apply for Cohort 2026 admissions at Sachin\'s Demo Coaching. Capped at 35 seats. SDC-DAT testing voucher screening and merit scholarship slabs.',
  path: '/admissions',
  tags: ['Admissions 2026', 'Fellowship Application', 'Scholarship Slabs', 'SDC-DAT Test', 'Entrance Examination'],
});

export default function AdmissionsPage() {
  return (
    <PageTransition className="py-28">
      <div className="container-luxury">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Breadcrumbs items={[{ name: 'Admissions Gateway', path: '/admissions' }]} />
        </div>

        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="eyebrow-luxury justify-center">ADMISSIONS GATEWAY — COHORT 2026</div>
          <SplitTextReveal 
            tag="h1"
            text="Admissions & Fellowships Protocol"
            className="font-heading text-4xl sm:text-6xl text-ivory mb-4 leading-tight"
          />
          <FadeInOnScroll delay={0.15}>
            <p className="text-sm sm:text-base text-ivory-dim leading-relaxed">
              Our admissions process is designed to assemble curious, disciplined cohorts. Selection is merit-based via the SDC Diagnostic Aptitude Test (SDC-DAT) and Dean Interview.
            </p>
          </FadeInOnScroll>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left: Schedule & Scholarships */}
          <div className="space-y-6">
            {/* Visual Amphitheater Image Banner */}
            <div className="relative h-60 rounded-xl overflow-hidden border border-[#D7B879]/30 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80"
                alt="SDC-DAT Diagnostic Aptitude Testing in our academic amphitheater"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover filter brightness-[0.8] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081321] via-transparent to-transparent opacity-85" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase font-display text-[#18B6AE] tracking-widest block font-semibold">
                  Assessment Environment
                </span>
                <span className="text-[#F9F7F2] font-heading text-base font-semibold">
                  SDC-DAT Merit Screening & Diagnostic Crucible
                </span>
              </div>
            </div>

            <div className="card-luxury p-8">
              <div className="font-display text-[11px] text-gold tracking-widest uppercase mb-3">
                Active Enrollment Calendar
              </div>
              <h2 className="font-heading text-2xl text-ivory mb-5">
                Cohort 2026 Selection Rounds
              </h2>

              <div className="space-y-3.5">
                {siteConfig.admissions.intakeDeadlines.map((round, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-black/60 border border-gold/15 flex justify-between items-center">
                    <div>
                      <strong className="text-gold-light text-sm block">{round.round}</strong>
                      <div className="text-xs text-ivory-dim/60">Deadline: {round.deadline}</div>
                    </div>
                    <span className="text-[10px] text-gold uppercase px-2.5 py-1 bg-gold/10 border border-gold/30 rounded">
                      {round.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-luxury p-8">
              <div className="font-display text-[11px] text-gold tracking-widest uppercase mb-3">
                Merit Waivers & Financial Grants
              </div>
              <h2 className="font-heading text-xl text-ivory mb-3">
                Merit-Based Scholarship Slabs
              </h2>
              <p className="text-xs text-ivory-dim leading-relaxed mb-4">
                Fee waivers up to 40% are granted strictly based on percentile rankings in the SDC-DAT Diagnostic Screen [Illustrative Model].
              </p>
              <ul className="space-y-2 text-xs text-ivory-dim/70">
                <li>✦ <strong>Tier I (Top 2% SDC-DAT):</strong> 40% Academic Merit Waiver</li>
                <li>✦ <strong>Tier II (Top 5% SDC-DAT):</strong> 25% Academic Merit Waiver</li>
                <li>✦ <strong>Tier III (Top 10% SDC-DAT):</strong> 15% Academic Merit Waiver</li>
              </ul>
            </div>
          </div>

          {/* Right: Universal Lead Form for Admissions */}
          <div className="shadow-2xl">
            <UniversalLeadForm
              formType="admission"
              title="Official Admissions Application"
              subtitle="Register candidate credentials to receive your SDC-DAT testing voucher and Dean interview slot."
            />
          </div>
        </div>

        <div className="p-4 bg-[#120f0b] border border-gold/20 rounded-lg text-center text-xs text-ivory-dim/60">
          ✦ All scholarship slabs, timelines, and screening procedures depicted on this page are clearly designated illustrative demonstration models.
        </div>
      </div>
    </PageTransition>
  );
}
