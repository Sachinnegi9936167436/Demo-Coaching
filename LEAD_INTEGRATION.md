# SACHIN 'S DEMO COACHING — LEAD GENERATION & CONVERSION SYSTEM

## Executive Architecture Overview

The Lead Generation and Conversion System for **SACHIN 'S DEMO COACHING** is a production-grade, highly secure intake and telemetry pipeline engineered to transform discerning visitors into enrolled scholars.

Strict compliance with the design doctrine:
> **"Never display a success message unless the submission actually succeeds."**
> **"If a working backend endpoint is not provided, implement a clearly documented integration interface rather than pretending leads are being saved."**

---

## 1. Primary Intake Forms & Vectors

| Form Type | Identifier | Route / Trigger | Key Function & Experience |
| :--- | :--- | :--- | :--- |
| **Book Free Counselling** | `counselling` | `/free-counselling` | 1-on-1 private diagnostic error audit and cognitive roadmap consultation with Academic Dean. |
| **Register for Demo Class** | `demo` | `/book-demo` & Navbar CTA | Socratic seminar reservation for Saturday masterclass; 35-seat batch ceiling enforcement. |
| **Request Callback** | `callback` | `RequestCallbackModal` & `/contact` | Urgent 15-minute priority dispatch for immediate admissions queries. |
| **Course Enquiry** | `course_enquiry` | `/courses/[slug]` | Deep-dive syllabus dossier dispatch (24-page PDF curriculum) and evaluation scheduling. |
| **Admission Enquiry** | `admission` | `/admissions` & Admissions Gateway | Cohort 2026 merit-screened screening form, SDC-DAT testing voucher allocation. |

---

## 2. Universal Data Contract & Fields

Every form captures a structured payload validated through **Zod** on both client and server:

### Mandatory Fields
- **Full Candidate Name (`name`)**: Min 2 characters, trimmed.
- **Contact Phone (`phone`)**: Validated Indian/International format (10–16 characters with regex `^[+0-9\s-()]{10,16}$`).
- **Email Address (`email`)**: RFC-compliant email address.
- **Interested Academic Fellowship (`interestedCourse`)**: Selected program from `siteConfig.availableCourses` (e.g. *IIT-JEE Super 30*, *NEET Precision 35*, *Advanced Olympiad Cadre*).
- **Informed Consent (`consent`)**: Boolean `true` required. Legal consent for academic communications via Phone, SMS, and WhatsApp.

### Contextual & Optional Fields
- **Optional Message (`message`)**: Syllabus concerns, past mock scores, target percentiles, or exam hurdles.
- **Form Type (`formType`)**: `'counselling' | 'demo' | 'callback' | 'course_enquiry' | 'admission'`.
- **Honeypot Trap (`hp_field`)**: Invisible trap input (`display: none; tabIndex: -1`). Must remain empty; filled by automated scrapers.
- **Submission Velocity (`formLoadedAt`)**: Timestamp when form rendered. Submissions under 1,000ms are flagged as automated bots and rejected.

---

## 3. Backend Integration Interface (`/api/leads`)

### Endpoint Details
- **Method**: `POST`
- **Path**: `/api/leads`
- **Content-Type**: `application/json`

### Request Payload Example
```json
{
  "name": "Aryan Sharma",
  "phone": "+91 98765 43210",
  "email": "aryan.sharma@domain.com",
  "interestedCourse": "IIT-JEE Super 30 Fellowship",
  "message": "Targeting JEE Advanced 2026. Requesting diagnostic problem-solving audit.",
  "consent": true,
  "formType": "counselling",
  "hp_field": "",
  "formLoadedAt": 1729858000000
}
```

### Verified Success Response (`HTTP 200 OK`)
```json
{
  "success": true,
  "leadId": "SDC-LEAD-785710",
  "timestamp": "2026-10-25T12:06:04.128Z",
  "message": "Inquiry successfully registered in the SDC Admissions Vault.",
  "webhookStatus": "DELIVERED"
}
```

### Client Success State Execution
Only when `res.ok === true` and `data.success === true`:
1. Loading spinner ceases.
2. Verified success card is unveiled.
3. Server-generated `leadId` tracking voucher is presented.
4. Editorial celebratory confetti triggers with Imperial Gold (`#D7B879`) and Sanctuary Emerald (`#18B6AE`).
5. `trackLeadSubmission` conversion telemetry is fired.

---

## 4. Multi-Layer Spam & Abuse Protection

1. **Honeypot Anti-Bot Field**:
   An off-screen field (`hp_field`) that real users cannot see or interact with. Bots that blindly parse input tags populate this field, instantly triggering an immediate HTTP 400 rejection.
2. **Velocity Threshold**:
   Humans require several seconds to read labels and enter valid credentials. If `Date.now() - formLoadedAt < 1000ms`, the request is rejected as a fast-script bot.
3. **Sliding Window Duplicate Protection (5-Minute Window)**:
   The server computes a normalized key `phone + course`. If a candidate re-submits for the same course within 5 minutes, an `HTTP 429 Too Many Requests` is returned with an informative banner informing them that their file is already being reviewed by the Dean.

---

## 5. Third-Party CRM & Webhook Integration

Configure third-party CRM ingestion (HubSpot, Salesforce, Zoho, LeadSquared, Zapier, Make, Slack) by specifying the webhook in `.env.local`:

```bash
# In .env.local
LEAD_WEBHOOK_URL="https://hooks.zapier.com/hooks/catch/XXXXXXX/YYYYYY"
LEAD_NOTIFICATION_EMAIL="admissions@sachinsdemocoaching.edu.sample"
```

When `LEAD_WEBHOOK_URL` is set, the `/api/leads` handler forwards the standardized lead payload:
```json
{
  "leadId": "SDC-LEAD-785710",
  "timestamp": "2026-10-25T12:06:04.128Z",
  "candidate": {
    "name": "Aryan Sharma",
    "phone": "+91 98765 43210",
    "email": "aryan.sharma@domain.com"
  },
  "academicTarget": {
    "program": "IIT-JEE Super 30 Fellowship",
    "inquiryType": "counselling",
    "scholarNote": "Targeting JEE Advanced 2026."
  },
  "intakeMetadata": {
    "status": "PENDING_FACULTY_REVIEW",
    "sanctuaryCampus": "Pinnacle Tower, New Delhi",
    "consentLogged": true
  }
}
```

---

## 6. Event Analytics Telemetry

Event telemetry is implemented in `src/lib/analytics.ts` supporting both modern `gtag` and GTM `dataLayer`:

- `trackLeadSubmission`: Fired upon verified HTTP 200 lead registration with `leadId`, `formType`, and `courseId`.
- `trackWhatsAppClick`: Fired when scholar interacts with the floating WhatsApp widget or desk links.
- `trackCtaClick`: Fired for high-intent conversion CTAs (e.g., Saturday Demo, Dean Consult, Brochure download).

---

## 7. Floating WhatsApp CTA Widget

Located in `src/components/leads/FloatingWhatsAppCta.tsx` and mounted globally:
- **Configurable Number**: Reads `NEXT_PUBLIC_WHATSAPP_NUMBER` from environment variables, falling back to `siteConfig.contact.phoneTel`.
- **Pre-filled Editorial Greeting**: Encodes a cordial inquiry regarding Cohort 2026 admissions and Saturday masterclasses.
- **Proactive Tooltip**: Gentle dismissible bubble offering academic counsel.
- **Responsive Stacking**: Positioned at `bottom-20 sm:bottom-6` so it never collides with the mobile admission dock.

---

## 8. Non-Obstructive Mobile Admission Dock

Located in `src/components/leads/MobileAdmissionDock.tsx`:
- **Directional Scroll Intelligence**: Automatically glides off-screen (`translate-y-full`) when scholars scroll downwards to read course descriptions or syllabi. Glides back into view when scrolling upwards or returning to the top.
- **Touch Target Ergonomics**: Minimum 40px–44px hit areas adhering to iOS HIG and Material design.
- **Safe-Area Inset Support**: Uses `pb-[max(8px,env(safe-area-inset-bottom))]` for bezel-free devices (iPhone dynamic island / home indicator).
- **Direct Conversion Actions**: One-tap access to *Saturday Demo*, *1-on-1 Consult*, and *Admissions Hotline*.
