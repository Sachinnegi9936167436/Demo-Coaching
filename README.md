# SACHIN 'S DEMO COACHING — THE PINNACLE SANCTUARY
> **Cinematic, High-Performance Educational Web Application**  
> *Prepared for Cohort 2026 Admissions & National Competitive Exam Excellence*

---

## 1. Executive Project Overview

**Sachin's Demo Coaching** is an award-winning creative studio-grade web application engineered for an elite competitive examination coaching institute (specializing in IIT-JEE Advanced, NEET-UG Medical, UPSC Civil Services, and International STEM Olympiads).

Departing radically from conventional, commercialized coaching website templates (crowded cards, generic stock graphics, floating emojis, and garish primary blues), this platform is built as an **immersive, continuous storytelling experience** inspired by high-luxury cinematic digital experiences.

### Key Brand Pillars
- **Intellectual Sovereignty**: Socratic first-principles derivation rather than rote memorization.
- **Micro-Cohort Density**: Strictly capped at 35 scholars per batch; 1:7 mentor-to-student diagnostic ratio.
- **Cognitive Error Taxonomy**: 4-stage forensic error diagnosis (conceptual, computational, temporal, emotional).
- **Aesthetic Prestige**: Deep obsidian sapphire backgrounds (`#081321`), elevated navy (`#102338`), imperial champagne gold accents (`#D7B879`), and innovation teal (`#18B6AE`).

---

## 2. Installation & Quick Start

### Prerequisites
- **Node.js**: Version 18.18.0 or higher (Node 20+ recommended)
- **Package Manager**: npm, yarn, or pnpm

### Step-by-Step Local Setup

1. **Clone or Extract Repository**:
   ```bash
   cd "New folder"
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env.local` or edit existing `.env.local`:
   ```bash
   # Base canonical URL for technical SEO and metadata
   NEXT_PUBLIC_SITE_URL=https://sachinsdemocoaching.edu.sample

   # Lead intake integration (Optional: leave blank for fallback logging)
   LEAD_WEBHOOK_URL=
   LEAD_API_KEY=
   ```

4. **Launch Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Execute Production Build**:
   ```bash
   npm run build
   npm run start
   ```

---

## 3. Project Architecture

The codebase adheres strictly to clean separation of concerns, avoiding monolithic configuration files:

```
src/
├── app/                              # Next.js App Router (35 static & dynamic routes)
│   ├── layout.tsx                    # Root layout with Lenis scroller, metadata & font providers
│   ├── page.tsx                      # Homepage continuous storytelling experience
│   ├── globals.css                   # Tailwind v4 theme tokens, luxury utilities & film grain
│   ├── sitemap.ts                    # Dynamic XML sitemap generator (30 indexed URLs)
│   ├── robots.ts                     # Search engine crawler directives
│   ├── about/                        # Institute overview
│   │   ├── our-story/                # Institute genesis, timeline & core code
│   │   └── director-message/         # Academic Dean Dr. A. R. Sharma's address
│   ├── courses/                      # Academic fellowships catalog
│   │   └── [slug]/                   # Dynamic SEO-optimized course detail pages
│   ├── faculty/                      # Chairs of Academic Instruction directory
│   │   └── [slug]/                   # Dynamic faculty dossiers & syllabi mapping
│   ├── results/                      # Illustrative benchmark records & Hall of Fame
│   ├── success-stories/              # Transformation case studies & cognitive strategies
│   ├── admissions/                   # SDC-DAT testing voucher screening & scholarship slabs
│   ├── book-demo/                    # Saturday live masterclass reservation
│   ├── free-counselling/             # 1-on-1 private diagnostic consultation gateway
│   ├── resources/                    # Digital Research Vault with downloadable dossiers
│   ├── blog/                         # "The Architecture of Cognition" editorial journal
│   │   └── [slug]/                   # Dynamic long-form pedagogical essays
│   ├── contact/                      # Pinnacle Sanctuary campus coordinates & visiting hours
│   ├── faq/                          # Categorized FAQ knowledge base
│   ├── pedagogy/                     # Socratic doctrine & 4-stage error taxonomy deep-dive
│   ├── privacy-policy/               # Institutional data protection compliance
│   ├── terms/                        # Code of conduct & intellectual property rights
│   └── api/
│       └── leads/                    # Production lead intake API route
│
├── components/                       # Modular UI, sections & animations
│   ├── animations/                   # GSAP & Framer Motion reusable animation wrappers
│   ├── courses/                      # CourseListClient & CourseDetailClient
│   ├── faculty/                      # FacultyListClient
│   ├── leads/                        # UniversalLeadForm & floating WhatsApp CTA
│   ├── layout/                       # Breadcrumbs, ScrollProgress & SmoothScroller
│   ├── navigation/                   # NavbarNext & NavigationDrawerNext
│   ├── sections/                     # HeroSection, FeaturedCoursesPinned, HorizontalGallery...
│   └── ui/                           # AdmissionsModalNext & interactive controls
│
├── data/                             # Centralized, type-safe data repositories
│   ├── institute.ts                  # Institute identity, dean address, addresses, social links
│   ├── courses.ts                    # 5 academic fellowships with full curriculum chapters
│   ├── faculty.ts                    # 4 senior discipline chair dossiers
│   ├── testimonials.ts               # 3 transformation case studies & achiever personas
│   ├── blog.ts                       # 3 long-form masterclass essays
│   ├── faqs.ts                       # 12 categorized academic Q&A items
│   └── resources.ts                  # 8 research vault downloadable assets
│
├── hooks/                            # Custom React hooks
│   ├── useReducedMotion.ts           # OS accessibility prefers-reduced-motion listener
│   └── useLenis.ts                   # Virtual smooth scroll instance accessor
│
├── lib/                              # Core engineering libraries
│   ├── animations/                   # GSAP registration & scroll helpers
│   ├── seo/                          # Metadata builders & Schema.org JSON-LD generators
│   ├── validation/                   # Zod schemas for lead intake & bookings
│   └── analytics/                    # DataLayer & CustomEvent telemetry dispatchers
│
└── types/                            # Clean TypeScript interface definitions
    ├── course.ts
    ├── faculty.ts
    ├── testimonial.ts
    ├── blog.ts
    ├── lead.ts
    └── institute.ts
```

---

## 4. Reusable Animation System

All animations respect `prefers-reduced-motion` and are isolated with `gsap.context()` for clean React 19 unmount lifecycle management:

| Utility / Component | Description | Implementation File |
| :--- | :--- | :--- |
| `SmoothScroller` | Virtual momentum scrolling via Lenis on desktop; native touch scroll bypass on mobile | [`src/components/SmoothScroller.tsx`](file:///c:/Users/Admin/Downloads/New%20folder/src/components/SmoothScroller.tsx) |
| `ParallaxSection` | Multi-layer scrub parallax separating foreground typography from background imagery | [`src/components/animations/ParallaxSection.tsx`](file:///c:/Users/Admin/Downloads/New%20folder/src/components/animations/ParallaxSection.tsx) |
| `SplitTextReveal` | Cinematic line-by-line staggered text entrance animation | [`src/components/animations/SplitTextReveal.tsx`](file:///c:/Users/Admin/Downloads/New%20folder/src/components/animations/SplitTextReveal.tsx) |
| `FadeInOnScroll` | Viewport-triggered fade and upward drift with configurable stagger delay | [`src/components/animations/FadeInOnScroll.tsx`](file:///c:/Users/Admin/Downloads/New%20folder/src/components/animations/FadeInOnScroll.tsx) |
| `ScrollProgress` | Top-pinned indicator tracking page reading percentage | [`src/components/ScrollProgress.tsx`](file:///c:/Users/Admin/Downloads/New%20folder/src/components/ScrollProgress.tsx) |
| `HorizontalGallery` | Pinned horizontal translation track on desktop; clean vertical cards on mobile | [`src/components/HorizontalGallerySection.tsx`](file:///c:/Users/Admin/Downloads/New%20folder/src/components/HorizontalGallerySection.tsx) |
| `MagneticButton` | Physics-based magnetic attraction micro-interaction on hover | [`src/components/animations/MagneticButton.tsx`](file:///c:/Users/Admin/Downloads/New%20folder/src/components/animations/MagneticButton.tsx) |
| `PageTransition` | Smooth opacity and slide route entrance wrapper | [`src/components/animations/PageTransition.tsx`](file:///c:/Users/Admin/Downloads/New%20folder/src/components/animations/PageTransition.tsx) |

---

## 5. Technical SEO & Schema.org Structured Data

### Server-Rendered Standards
- Unique, keyword-tailored metadata for every page via `buildMetadata()` in [`src/lib/seo.ts`](file:///c:/Users/Admin/Downloads/New%20folder/src/lib/seo.ts).
- Automatic OpenGraph, Twitter Card, Canonical URL, and viewport meta tags.
- Dynamic XML sitemap generator at [`src/app/sitemap.ts`](file:///c:/Users/Admin/Downloads/New%20folder/src/app/sitemap.ts) indexing all static routes, course detail pages, faculty dossiers, and blog posts.
- Search engine crawler directives in [`src/app/robots.ts`](file:///c:/Users/Admin/Downloads/New%20folder/src/app/robots.ts).

### Schema.org JSON-LD Entities
- `EducationalOrganization`: Registered globally in root layout with address, helpline, and founder details.
- `Course`: Embedded on each individual course detail page (`/courses/[slug]`) and catalog.
- `Person`: Embedded for verified senior faculty profiles (`/faculty/[slug]`).
- `BlogPosting`: Embedded on all long-form articles in `/blog/[slug]`.
- `BreadcrumbList`: Injected into semantic breadcrumb navigation bars.
- `FAQPage`: Injected on the comprehensive FAQ page and course-specific question modules.

---

## 6. Lead Generation & Backend Integration

Full documentation is available in [`LEAD_INTEGRATION.md`](file:///c:/Users/Admin/Downloads/New%20folder/LEAD_INTEGRATION.md).

### Form Capabilities
- **5 Form Modes**: Counselling, Demo Class, Callback, Course Enquiry, and Admission Application.
- **Client & Server Validation**: Formatted telephone verification, RFC email checks, and mandatory informed consent.
- **Honeypot Trap (`hp_field`)**: Rejects automated bot scrapers with HTTP 400.
- **Velocity Gate (`formLoadedAt`)**: Blocks submissions occurring in under 1,000ms.
- **Sliding Cache Duplicate Protection**: Blocks identical submissions from the same candidate within 5 minutes (HTTP 429).
- **Webhooks**: Ready for Salesforce, HubSpot, or custom webhook forwarding via `LEAD_WEBHOOK_URL`.

---

## 7. Quality Assurance & Test Results

A full test suite was executed against the running dev server and production builds:

1. **Route Crawl (32 Web Routes)**:
   - 100% of routes returned **HTTP 200 OK**.
   - Verified `<title>`, `<h1>`, and semantic containers across all views.
2. **Lead API Security**:
   - `GET /api/leads` handled with `405 Method Not Allowed`.
   - Valid `POST /api/leads` created lead with `200 OK` and unique tracking ID.
   - Honeypot `POST` rejected with `400 Bad Request`.
   - Rapid resubmission throttled with `429 Too Many Requests`.
3. **Image Optimization Audit**:
   - Verified 42 distinct, high-definition editorial photographs.
   - 100% of `<Image fill>` components have explicit responsive `sizes` props.
4. **Keyboard Accessibility**:
   - Added `Escape` key listeners to navigation drawer and modal dialogs.
   - Verified minimum 44px touch targets on all interactive elements.
5. **Next.js Production Build**:
   - Turbopack production compilation succeeded in 3.3s.
   - 35 of 35 static & dynamic routes prerendered without errors.

---

## 8. Remaining Implementation Checklist & Client Handover

For deployment into a live institutional environment, the following operational steps should be completed:

- [ ] **Custom Domain DNS**: Point primary domain to Vercel, Cloudflare, or AWS Amplify.
- [ ] **Production Lead Webhook**: Set `LEAD_WEBHOOK_URL` and `LEAD_API_KEY` in production environment settings.
- [ ] **WhatsApp Number Configuration**: Update `siteConfig.institute.whatsappNumber` in [`src/data/institute.ts`](file:///c:/Users/Admin/Downloads/New%20folder/src/data/institute.ts) with the institute's active support line.
- [ ] **Google Analytics 4 / GTM**: Add GA4 Measurement ID in `src/app/layout.tsx` if live telemetry tracking is desired.
- [ ] **Faculty & Achiever Verification**: When transitioning from prototype demonstration benchmarks to real annual results, update records in [`src/data/faculty.ts`](file:///c:/Users/Admin/Downloads/New%20folder/src/data/faculty.ts) and [`src/data/testimonials.ts`](file:///c:/Users/Admin/Downloads/New%20folder/src/data/testimonials.ts).
