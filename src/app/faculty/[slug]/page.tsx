import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/config/siteConfig';
import { buildMetadata, generatePersonSchema } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ArrowRight, Clock, Award, GraduationCap } from 'lucide-react';
import { PageTransition, SplitTextReveal } from '@/components/animations';

interface FacultyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return siteConfig.facultyPlaceholders.map((faculty) => ({
    slug: faculty.slug,
  }));
}

export async function generateMetadata({ params }: FacultyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const faculty = siteConfig.facultyPlaceholders.find((f) => f.slug === slug);

  if (!faculty) {
    return buildMetadata({
      title: 'Faculty Chair Not Found',
      description: 'The requested faculty dossier is not available.',
      path: `/faculty/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${faculty.name} — ${faculty.designation}`,
    description: `${faculty.bio.substring(0, 155)}... Specialization: ${faculty.specialization}. Credentials: ${faculty.credentials}.`,
    path: `/faculty/${faculty.slug}`,
    image: faculty.image,
    tags: [faculty.specialization, faculty.designation, 'Faculty Chair', 'Academic Dossier'],
  });
}

export default async function FacultyProfilePage({ params }: FacultyPageProps) {
  const { slug } = await params;
  const faculty = siteConfig.facultyPlaceholders.find((f) => f.slug === slug);

  if (!faculty) {
    notFound();
  }

  // Find courses taught by this faculty member
  const relatedCourses = siteConfig.availableCourses.filter((c) =>
    c.facultySlugs.includes(faculty.slug)
  );

  // Schema.org Person JSON-LD
  const personSchema = generatePersonSchema(faculty);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <PageTransition className="py-28 bg-[#081321] text-[#F9F7F2]">
        <div className="container-luxury">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { name: 'Faculty Directory', path: '/faculty' },
                { name: faculty.name, path: `/faculty/${faculty.slug}` },
              ]}
            />
          </div>

          {/* Hero Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-8">
              <div className="eyebrow-luxury">CHAIR DOSSIER • {faculty.specialization}</div>
              <SplitTextReveal
                tag="h1"
                text={faculty.name}
                className="font-heading text-3xl sm:text-5xl lg:text-6xl text-[#F9F7F2] mb-3 leading-tight"
              />
              <div className="font-display text-base sm:text-lg text-[#D7B879] mb-4">
                {faculty.designation}
              </div>
              <div className="text-xs sm:text-sm text-[#18B6AE] font-mono mb-6">
                {faculty.credentials}
              </div>

              {/* Philosophy Pull-Quote */}
              <blockquote className="p-6 rounded-xl bg-[#102338] border-l-4 border-[#D7B879] text-[#d2d9e2] italic font-serif text-base sm:text-lg leading-relaxed mb-6">
                "{faculty.philosophy}"
              </blockquote>

              <p className="text-sm sm:text-base text-[#d2d9e2] leading-relaxed mb-6">
                {faculty.bio}
              </p>

              <div className="p-4 rounded-xl bg-[#102338] border border-white/10 flex items-center gap-3 text-xs text-[#8e9eaf]">
                <Clock size={16} className="text-[#D7B879] shrink-0" />
                <span><strong>Office Hours:</strong> {faculty.officeHours}</span>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="relative h-[440px] rounded-2xl overflow-hidden border border-[#D7B879]/40 shadow-2xl">
                <Image
                  src={faculty.image}
                  alt={`Faculty Chair ${faculty.name} — ${faculty.designation} at ${siteConfig.institute.name}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 440px"
                  className="object-cover filter contrast-[1.1] brightness-[0.95]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081321] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 bg-[#081321]/90 border border-[#D7B879]/30 rounded text-[10px] font-display uppercase tracking-wider text-[#D7B879]">
                    Tenured Chair Dossier
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Academic Pedigree & Experience */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="card-luxury p-8 bg-[#102338]">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap size={22} className="text-[#D7B879]" />
                <h2 className="font-heading text-xl text-[#F9F7F2]">Academic Pedigree & Degrees</h2>
              </div>
              <ul className="space-y-3">
                {faculty.education.map((deg, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#d2d9e2]">
                    <span className="text-[#D7B879] font-bold mt-0.5">•</span>
                    <span>{deg}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-luxury p-8 bg-[#102338]">
              <div className="flex items-center gap-3 mb-6">
                <Award size={22} className="text-[#18B6AE]" />
                <h2 className="font-heading text-xl text-[#F9F7F2]">Teaching & Research Experience</h2>
              </div>
              <p className="text-xs sm:text-sm text-[#d2d9e2] leading-relaxed mb-4">
                {faculty.experience}
              </p>
              <div className="text-[11px] text-[#8e9eaf] border-t border-white/5 pt-3">
                Specialized in high-order competitive examination forensics and cognitive derivation pedagogy.
              </div>
            </div>
          </section>

          {/* Fellowships Mentored by This Faculty */}
          {relatedCourses.length > 0 && (
            <section className="mb-16">
              <div className="eyebrow-luxury">CURRICULUM INSTRUCTION</div>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#F9F7F2] mb-8">
                Fellowships Mentored by {faculty.name.split('[')[0].trim()}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedCourses.map((c) => (
                  <div key={c.slug} className="card-luxury p-6 bg-[#102338] flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] text-[#D7B879] font-display uppercase tracking-widest block mb-1">
                        {c.code} • {c.category}
                      </span>
                      <h3 className="font-heading text-xl text-[#F9F7F2] mb-2">{c.title}</h3>
                      <p className="text-xs text-[#8e9eaf] line-clamp-2 mb-4">{c.overview}</p>
                    </div>
                    <Link
                      href={`/courses/${c.slug}`}
                      className="btn-luxury btn-luxury-gold py-2.5 px-5 text-[11px] self-start"
                    >
                      <span>View Fellowship Syllabus</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Book Office Hours Consultation */}
          <section className="card-luxury p-10 bg-gradient-to-br from-[#102338] to-[#081321] border border-[#D7B879]/40 text-center max-w-3xl mx-auto mb-12">
            <h3 className="font-heading text-2xl sm:text-3xl text-[#F9F7F2] mb-2">
              Schedule a Diagnostic Review with {faculty.name.split('[')[0].trim()}
            </h3>
            <p className="text-xs sm:text-sm text-[#d2d9e2] max-w-md mx-auto mb-6">
              During Saturday consultation hours, candidates can bring their recent test papers for an error-pattern analysis.
            </p>
            <Link
              href="/free-counselling"
              className="btn-luxury btn-luxury-gold py-3.5 px-8 text-xs font-semibold inline-flex"
            >
              <span>Request Diagnostic Review</span>
              <ArrowRight size={14} />
            </Link>
          </section>

          {/* Compliance Footer */}
          <div className="p-4 bg-[#102338]/60 border border-white/5 rounded-lg text-center text-xs text-[#8e9eaf]">
            ✦ All faculty dossiers, degrees, and accreditations displayed above are clearly identified illustrative demonstration profiles for platform modeling.
          </div>
        </div>
      </PageTransition>
    </>
  );
}
