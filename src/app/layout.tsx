import type { Metadata } from 'next';
import { Manrope, Cormorant_Garamond, Playfair_Display, Cinzel } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/siteConfig';
import { SmoothScroller } from '@/components/SmoothScroller';
import { ScrollProgress } from '@/components/animations/ScrollProgress';
import { NavbarNext } from '@/components/NavbarNext';
import { FooterNext } from '@/components/FooterNext';
import { FloatingWhatsAppCta, MobileAdmissionDock } from '@/components/leads';
import { generateEducationalOrganizationSchema } from '@/lib/seo';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
  preload: true,
  fallback: ['Georgia', 'Cambria', 'serif'],
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
  preload: true,
  fallback: ['Times New Roman', 'serif'],
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
  display: 'swap',
  preload: true,
  fallback: ['Times New Roman', 'serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sachinsdemocoaching.edu.sample'),
  title: {
    default: `${siteConfig.institute.name} | Elite Academic Sanctuary & Exam Mastery`,
    template: `%s | ${siteConfig.institute.name}`,
  },
  description: siteConfig.institute.tagline + ' — ' + siteConfig.institute.subtagline,
  keywords: [
    "Sachin's Demo Coaching",
    "premier coaching institute",
    "JEE Advanced",
    "NEET-UG medical",
    "UPSC civil services",
    "STEM Olympiad coaching",
    "admissions 2026",
    "academic sanctuary",
  ],
  authors: [{ name: siteConfig.institute.name }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${siteConfig.institute.name} | Elite Academic Sanctuary`,
    description: siteConfig.institute.tagline,
    url: 'https://sachinsdemocoaching.edu.sample',
    siteName: siteConfig.institute.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.institute.name,
    description: siteConfig.institute.tagline,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = generateEducationalOrganizationSchema();

  return (
    <html 
      lang="en" 
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${cormorantGaramond.variable} ${playfairDisplay.variable} ${cinzel.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#081321] text-[#F9F7F2] font-sans antialiased selection:bg-[#D7B879]/30 selection:text-[#F9F7F2] relative">
        <SmoothScroller>
          {/* Top Scroll Reading Progress */}
          <ScrollProgress />

          {/* Subtle Noise Film Grain */}
          <div className="film-grain" aria-hidden="true" />

          {/* Compliance Banner */}
          <aside className="demo-notice" aria-label="Demonstration website notice">
            <div className="demo-notice-inner">
              <span className="demo-notice-badge">Demo prototype</span>
              <p className="demo-notice-copy">{siteConfig.institute.complianceDisclaimer}</p>
            </div>
          </aside>

          {/* Luxury Navbar */}
          <NavbarNext />

          {/* Viewport */}
          <main id="maincontent" className="min-h-screen">
            {children}
          </main>

          {/* Editorial Footer */}
          <FooterNext />

          {/* Floating WhatsApp CTA with Configurable Number */}
          <FloatingWhatsAppCta />

          {/* Non-obstructive Mobile Admission CTA Dock */}
          <MobileAdmissionDock />
        </SmoothScroller>
      </body>
    </html>
  );
}
