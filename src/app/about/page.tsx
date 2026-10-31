import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ArrowRight, BookOpen, Users, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PageTransition, SplitTextReveal, FadeInOnScroll } from '@/components/animations';

export const metadata: Metadata = buildMetadata({
  title: 'About the Institute & Educational Creed',
  description: 'Founded as an academic counterweight to commoditized mass coaching. Discover the ethos, 35-seat batch ceiling, and first-principles pedagogy of Sachin\'s Demo Coaching.',
  path: '/about',
  tags: ['About Us', 'Coaching Creed', 'Pedagogical Ethos', 'Socratic Method', 'Academic Sanctuary'],
});

export default function AboutPage() {
  return (
    <PageTransition className="py-28 bg-[#081321] text-[#F9F7F2]">
      <div className="container-luxury">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Breadcrumbs items={[{ name: 'About Institute', path: '/about' }]} />
        </div>

        {/* Header Hero */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="eyebrow-luxury justify-center">INSTITUTIONAL OVERVIEW & CREED</div>
          <SplitTextReveal
            tag="h1"
            text="The Elite Sanctuary for Intellectual & Competitive Mastery"
            className="font-heading text-4xl sm:text-6xl text-[#F9F7F2] mb-6 leading-tight"
          />
          <FadeInOnScroll delay={0.15}>
            <p className="text-base sm:text-lg text-[#d2d9e2] leading-relaxed max-w-2xl mx-auto">
              Founded in {siteConfig.institute.foundedYear}, {siteConfig.institute.name} is an academic counterweight to commoditized mass coaching—delivering first-principles intellectual mastery in intimate cohorts strictly capped at 35 scholars.
            </p>
          </FadeInOnScroll>

          {/* Quick Sub-Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link 
              href="/about/our-story"
              className="px-5 py-2.5 rounded-full border border-[#D7B879]/30 bg-[#102338] text-xs font-display tracking-wider text-[#D7B879] hover:border-[#D7B879] hover:bg-[#D7B879]/10 transition-all flex items-center gap-2"
            >
              <span>Our History & Mission</span>
              <ArrowRight size={12} />
            </Link>
            <Link 
              href="/about/director-message"
              className="px-5 py-2.5 rounded-full border border-[#D7B879]/30 bg-[#102338] text-xs font-display tracking-wider text-[#D7B879] hover:border-[#D7B879] hover:bg-[#D7B879]/10 transition-all flex items-center gap-2"
            >
              <span>Director's Message</span>
              <ArrowRight size={12} />
            </Link>
            <Link 
              href="/faculty"
              className="px-5 py-2.5 rounded-full border border-white/10 bg-[#102338] text-xs font-display tracking-wider text-[#d2d9e2] hover:border-[#18B6AE] hover:text-[#18B6AE] transition-all flex items-center gap-2"
            >
              <span>Faculty Dossier</span>
              <ArrowRight size={12} />
            </Link>
            <Link 
              href="/pedagogy"
              className="px-5 py-2.5 rounded-full border border-white/10 bg-[#102338] text-xs font-display tracking-wider text-[#d2d9e2] hover:border-[#18B6AE] hover:text-[#18B6AE] transition-all flex items-center gap-2"
            >
              <span>The Socratic Doctrine</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        {/* Hero Visual Banner */}
        <FadeInOnScroll className="relative h-[380px] sm:h-[480px] rounded-2xl overflow-hidden border border-[#D7B879]/20 mb-20 shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1800&q=80"
            alt="The Historic Collegiate Sanctuary Quadrangle"
            fill
            sizes="100vw"
            className="object-cover filter brightness-[0.4] contrast-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081321] via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row justify-between items-end gap-4">
            <div>
              <span className="text-[10px] uppercase font-display tracking-widest text-[#18B6AE] block mb-1">
                Central Campus • Pinnacle Tower
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#F9F7F2]">
                Architected For Deep Concentration & Zero Distraction
              </h2>
            </div>
            <div className="bg-[#081321]/90 backdrop-blur-md px-5 py-3 rounded-lg border border-[#D7B879]/30 shrink-0">
              <span className="font-display text-xs text-[#D7B879] tracking-wider uppercase block">Cohort Ceiling</span>
              <span className="font-heading text-xl font-bold text-[#F9F7F2]">35 Scholars Maximum</span>
            </div>
          </div>
        </FadeInOnScroll>

        {/* The Institutional Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <div className="eyebrow-luxury">THE CRISIS OF MODERN COACHING</div>
            <h2 className="font-heading text-3xl sm:text-4xl text-[#F9F7F2] mb-6 leading-tight">
              Why We Rejected the 500-Student Factory Model
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#d2d9e2] leading-relaxed">
              <p>
                In the modern entrance coaching industry, institutions optimize for sheer volume: hundreds of students pack into amphitheaters, passively transcribing formula shortcuts while professors deliver scripted performances.
              </p>
              <p>
                When a student encounters a non-standard problem in JEE Advanced, NEET, or UPSC, formula tricks collapse. True competitive mastery requires an ability to deconstruct reality from first principles—to derive theorems on a blank sheet of paper without relying on memory flashcards.
              </p>
              <p className="text-[#D7B879] italic font-serif">
                "{siteConfig.institute.name} was established on a radical premise: treat coaching as an intimate academic apprenticeship, not a commoditized manufacturing line."
              </p>
            </div>
          </div>

          <div className="card-luxury p-8 sm:p-10 bg-[#102338]/90 border border-[#D7B879]/30">
            <h3 className="font-heading text-2xl text-[#F9F7F2] mb-6">Our Foundational Standard</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D7B879]/10 border border-[#D7B879]/40 flex items-center justify-center shrink-0 text-[#D7B879] font-display font-semibold">
                  01
                </div>
                <div>
                  <h4 className="font-heading text-lg text-[#F9F7F2] mb-1">Capped Cohort Density</h4>
                  <p className="text-xs text-[#d2d9e2] leading-relaxed">
                    Classroom batches are strictly capped at 35 seats, ensuring daily verbal interaction with senior professors.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#18B6AE]/10 border border-[#18B6AE]/40 flex items-center justify-center shrink-0 text-[#18B6AE] font-display font-semibold">
                  02
                </div>
                <div>
                  <h4 className="font-heading text-lg text-[#F9F7F2] mb-1">No Formula Without Derivation</h4>
                  <p className="text-xs text-[#d2d9e2] leading-relaxed">
                    Scholars derive every equation from foundational conservation laws before any calculation shortcuts are introduced.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D7B879]/10 border border-[#D7B879]/40 flex items-center justify-center shrink-0 text-[#D7B879] font-display font-semibold">
                  03
                </div>
                <div>
                  <h4 className="font-heading text-lg text-[#F9F7F2] mb-1">Weekly Diagnostic Chambers</h4>
                  <p className="text-xs text-[#d2d9e2] leading-relaxed">
                    Every scholar attends 25-minute one-on-one error auditing clinics with Academic Deans every single week.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="eyebrow-luxury justify-center">METHODOLOGICAL BLUEPRINT</div>
            <h2 className="font-heading text-3xl sm:text-4xl text-[#F9F7F2] mb-3">The Four Pillars of SDC</h2>
            <p className="text-xs sm:text-sm text-[#8e9eaf]">Engineered to cultivate enduring intellectual and nervous system resilience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.pedagogyPillars.map((pillar) => (
              <div key={pillar.numeral} className="card-luxury p-7 bg-[#102338]">
                <div className="font-display text-3xl font-bold text-[#D7B879] mb-4">
                  {pillar.numeral}
                </div>
                <h3 className="font-heading text-lg text-[#F9F7F2] mb-2">{pillar.title}</h3>
                <p className="text-xs text-[#d2d9e2] leading-relaxed mb-4">{pillar.summary}</p>
                <div className="text-[10px] uppercase font-display tracking-wider text-[#18B6AE] border-t border-white/5 pt-3">
                  {pillar.statPlaceholder}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fast Action CTA Box */}
        <div className="card-luxury p-10 sm:p-14 text-center bg-gradient-to-br from-[#102338] via-[#081321] to-[#102338] border border-[#D7B879]/40 max-w-4xl mx-auto">
          <span className="font-display text-xs text-[#D7B879] tracking-widest uppercase block mb-3">
            Admissions For Cohort 2026–2027
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl text-[#F9F7F2] mb-4">
            Begin Your Intellectual Transformation
          </h2>
          <p className="text-xs sm:text-sm text-[#d2d9e2] max-w-xl mx-auto mb-8 leading-relaxed">
            Experience our Socratic seminar environment firsthand. Register for a Saturday complimentary demonstration class or book an individual diagnostic consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/book-demo"
              className="btn-luxury btn-luxury-gold py-4 px-8 text-xs font-semibold"
            >
              <span>Reserve Complimentary Demo</span>
              <ArrowRight size={14} />
            </Link>
            <Link 
              href="/free-counselling"
              className="px-6 py-4 rounded-full border border-white/20 bg-white/5 hover:border-[#D7B879] text-[#F9F7F2] hover:text-[#D7B879] transition-all text-xs font-display tracking-wider uppercase font-semibold"
            >
              <span>Schedule 1-on-1 Counselling</span>
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
