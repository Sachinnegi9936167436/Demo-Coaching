'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LearningResource, siteConfig } from '@/config/siteConfig';
import { Download, FileText, CheckCircle2, ArrowRight, Search } from 'lucide-react';
import { PageTransition, SplitTextReveal, FadeInOnScroll } from '@/components/animations';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import confetti from 'canvas-confetti';

interface ResourcesClientProps {
  resources: LearningResource[];
}

export const ResourcesClient: React.FC<ResourcesClientProps> = ({ resources }) => {
  const [selectedCat, setSelectedCat] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadModalResource, setDownloadModalResource] = useState<LearningResource | null>(null);
  const [downloadEmail, setDownloadEmail] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);

  const categories = [
    'All',
    'Engineering & Pure Sciences',
    'Medical & Life Sciences',
    'Administrative & Public Leadership',
    'General Admissions & Aptitude',
  ];

  const filteredResources = resources.filter((res) => {
    const matchesCat = selectedCat === 'All' || res.category === selectedCat;
    const matchesSearch = 
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!downloadEmail) return;
    setIsDownloaded(true);
    try {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.65 } });
    } catch (e) {}
  };

  return (
    <PageTransition className="py-28 bg-[#081321] text-[#F9F7F2]">
      <div className="container-luxury">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumbs items={[{ name: 'Research Vault', path: '/resources' }]} />
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="eyebrow-luxury justify-center">DIGITAL RESEARCH VAULT</div>
          <SplitTextReveal
            tag="h1"
            text="Curated Academic & Diagnostic Resources"
            className="font-heading text-4xl sm:text-6xl text-[#F9F7F2] mb-4 leading-tight"
          />
          <FadeInOnScroll delay={0.15}>
            <p className="text-sm sm:text-base text-[#d2d9e2] leading-relaxed">
              Access official SDC first-principles derivation dossiers, microscopic NCERT diagram plates, and sample SDC-DAT screening papers curated by our Academic Deans.
            </p>
          </FadeInOnScroll>
        </div>

        {/* Search Bar & Filters */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8e9eaf]" aria-hidden="true" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, theorem, exam, or keyword..."
              aria-label="Search resources"
              className="w-full bg-[#102338] border border-white/10 rounded-full pl-11 pr-4 py-3.5 text-sm text-[#F9F7F2] placeholder-[#8e9eaf] focus:border-[#D7B879] outline-none"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5 justify-center mb-16" role="tablist" aria-label="Resource Categories">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={selectedCat === cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-display tracking-wider uppercase transition-all ${
                selectedCat === cat
                  ? 'border border-[#D7B879] bg-[#D7B879]/20 text-[#D7B879]'
                  : 'border border-white/10 bg-[#102338] text-[#8e9eaf] hover:border-[#D7B879]/40 hover:text-[#F9F7F2]'
              }`}
            >
              {cat === 'All' ? 'All Resources' : cat.split('&')[0].trim()}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredResources.map((res) => (
            <article key={res.id} className="card-luxury p-8 bg-[#102338] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] text-[#18B6AE] uppercase font-display tracking-widest font-semibold">
                    {res.category}
                  </span>
                  <span className="text-xs font-mono text-[#8e9eaf]">
                    {res.size} • {res.downloads} Downloads
                  </span>
                </div>

                <h2 className="font-heading text-2xl text-[#F9F7F2] mb-3">
                  {res.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#d2d9e2] leading-relaxed mb-6">
                  {res.description}
                </p>

                {/* Topic tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {res.topics.map((t) => (
                    <span 
                      key={t}
                      className="px-2.5 py-1 rounded bg-[#081321] border border-white/5 text-[10px] font-mono text-[#D7B879]"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#D7B879]/20">
                <span className="text-xs text-[#8e9eaf] flex items-center gap-1.5">
                  <FileText size={14} className="text-[#D7B879]" />
                  <span>{res.type}</span>
                </span>
                <button
                  onClick={() => {
                    setDownloadModalResource(res);
                    setIsDownloaded(false);
                  }}
                  className="btn-luxury btn-luxury-gold py-2.5 px-5 text-xs font-semibold"
                >
                  <Download size={13} />
                  <span>Download Dossier</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Download Request Modal */}
        {downloadModalResource && (
          <div 
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setDownloadModalResource(null)}
          >
            <div 
              className="card-luxury p-8 bg-[#102338] border border-[#D7B879]/40 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {isDownloaded ? (
                <div className="text-center py-4">
                  <CheckCircle2 size={36} className="text-[#18B6AE] mx-auto mb-3" />
                  <h3 className="font-heading text-xl text-[#F9F7F2] mb-2">Dossier Dispatched</h3>
                  <p className="text-xs text-[#d2d9e2] mb-6">
                    We have transmitted <strong>{downloadModalResource.title}</strong> directly to <strong>{downloadEmail}</strong>.
                  </p>
                  <button
                    onClick={() => setDownloadModalResource(null)}
                    className="btn-luxury btn-luxury-gold py-2 px-6 text-xs"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <div>
                  <div className="text-[10px] text-[#D7B879] uppercase font-display tracking-widest mb-1">
                    Free Digital Vault Access
                  </div>
                  <h3 className="font-heading text-xl text-[#F9F7F2] mb-2">
                    {downloadModalResource.title}
                  </h3>
                  <p className="text-xs text-[#8e9eaf] mb-6">
                    Enter your email address to receive immediate high-speed PDF download links and future chapter releases.
                  </p>

                  <form onSubmit={handleDownloadSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs font-display text-[#D7B879] uppercase tracking-wider block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={downloadEmail}
                        onChange={(e) => setDownloadEmail(e.target.value)}
                        placeholder="scholar@example.com"
                        className="w-full bg-[#081321] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#F9F7F2] focus:border-[#D7B879] outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full btn-luxury btn-luxury-gold py-3 text-xs font-semibold justify-center"
                    >
                      <Download size={14} />
                      <span>Transmit PDF to Email</span>
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Aptitude Test Box */}
        <section className="card-luxury p-10 bg-gradient-to-r from-[#102338] via-[#081321] to-[#102338] border border-[#D7B879]/30 text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#F9F7F2] mb-2">
            Register for the SDC Diagnostic Aptitude Test (SDC-DAT)
          </h2>
          <p className="text-xs sm:text-sm text-[#d2d9e2] max-w-md mx-auto mb-6">
            The national benchmark test evaluating non-routine first-principles reasoning and merit scholarship waivers up to 40%.
          </p>
          <Link
            href="/admissions"
            className="btn-luxury btn-luxury-gold py-3.5 px-8 text-xs font-semibold inline-flex"
          >
            <span>Register for Next SDC-DAT Date</span>
            <ArrowRight size={14} />
          </Link>
        </section>
      </div>
    </PageTransition>
  );
};
