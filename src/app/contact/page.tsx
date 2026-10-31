import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { PageTransition, SplitTextReveal, FadeInOnScroll } from '@/components/animations';
import { UniversalLeadForm } from '@/components/leads';

export const metadata: Metadata = buildMetadata({
  title: 'Campus Coordinates, Contact & Admissions Bureau',
  description: 'Connect with Sachin\'s Demo Coaching. Admissions desk hotline, campus vectors at Pinnacle Sanctuary, visiting hours, and direct communication gateway.',
  path: '/contact',
  tags: ['Contact Us', 'Campus Location', 'Admissions Desk', 'Visiting Hours', 'Hotline'],
});

export default function ContactPage() {
  return (
    <PageTransition className="py-28">
      <div className="container-luxury">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Breadcrumbs items={[{ name: 'Campus & Contact', path: '/contact' }]} />
        </div>

        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="eyebrow-luxury justify-center">CAMPUS & CONSULTATIONS</div>
          <SplitTextReveal 
            tag="h1"
            text="Visit the Pinnacle Sanctuary"
            className="font-heading text-4xl sm:text-6xl text-ivory mb-4 leading-tight"
          />
          <FadeInOnScroll delay={0.15}>
            <p className="text-sm sm:text-base text-ivory-dim leading-relaxed">
              Experience the atmosphere of disciplined intellect firsthand. Attend a Saturday Dean seminar, inspect our research archive, or book a private admission evaluation.
            </p>
          </FadeInOnScroll>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <div className="relative h-60 rounded-xl overflow-hidden border border-[#D7B879]/30 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="Pinnacle Tower Central Academic Campus Pavilion"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover filter brightness-[0.8] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081321] via-transparent to-transparent opacity-85" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase font-display text-[#D7B879] tracking-widest block font-semibold">
                  Campus Architecture
                </span>
                <span className="text-[#F9F7F2] font-heading text-base font-semibold">
                  {siteConfig.address.campusName}
                </span>
              </div>
            </div>

            <div className="card-luxury p-8 sm:p-10">
              <div className="font-display text-[11px] text-gold tracking-widest uppercase mb-4">
                Central Campus Vectors
              </div>

            <div className="space-y-6">
              <div className="flex gap-3.5 items-start">
                <MapPin size={20} className="text-gold shrink-0 mt-1" />
                <div>
                  <strong className="text-ivory text-base block">{siteConfig.address.campusName}</strong>
                  <div className="text-xs sm:text-sm text-ivory-dim/80 mt-1 leading-relaxed">
                    {siteConfig.address.wing}<br />
                    {siteConfig.address.street}<br />
                    {siteConfig.address.city}, {siteConfig.address.state} — {siteConfig.address.postalCode}
                  </div>
                  <div className="text-xs text-ivory-dim/50 mt-1.5">
                    Landmark: {siteConfig.address.landmark}<br />
                    Connectivity: {siteConfig.address.metroConnectivity}
                  </div>
                </div>
              </div>

              <div className="gold-separator-line my-3" />

              <div className="flex gap-3.5 items-center">
                <Phone size={18} className="text-gold shrink-0" />
                <div>
                  <div className="text-xs text-ivory-dim/60">Admissions Desk Direct</div>
                  <a href={`tel:${siteConfig.contact.phoneTel}`} className="text-gold-light text-sm font-medium hover:underline">
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex gap-3.5 items-center">
                <Mail size={18} className="text-gold shrink-0" />
                <div>
                  <div className="text-xs text-ivory-dim/60">Official Admissions Email</div>
                  <a href={`mailto:${siteConfig.contact.admissionsEmail}`} className="text-ivory-dim text-sm hover:text-gold transition-colors">
                    {siteConfig.contact.admissionsEmail}
                  </a>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <Clock size={18} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-ivory-dim/60">Campus Visiting Hours</div>
                  <div className="text-xs sm:text-sm text-ivory-dim mt-0.5">
                    {siteConfig.contact.operatingHours}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <a
                  href={siteConfig.contact.whatsappChatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury btn-luxury-outline w-full text-xs"
                >
                  <MessageSquare size={14} />
                  <span>Connect via WhatsApp Desk</span>
                </a>
              </div>
            </div>
          </div>
          </div>

          {/* Right: Universal Lead Form for Callback & Direct Inquiry */}
          <div className="shadow-2xl">
            <UniversalLeadForm
              formType="callback"
              title="Official Admissions Communication"
              subtitle="Direct messages are routed to the Academic Ombudsperson for priority response within 15 minutes."
            />
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="card-luxury p-6">
          <div className="font-display text-[11px] text-gold tracking-widest uppercase mb-3">
            Satellite & Campus Coordinates: {siteConfig.address.coordinates}
          </div>
          <div className="w-full h-80 rounded-lg overflow-hidden border border-gold/20">
            <iframe
              title="Campus Map Location"
              src={siteConfig.address.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.15)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
