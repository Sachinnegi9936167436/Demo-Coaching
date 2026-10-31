/**
 * ==============================================================================
 * SACHIN 'S DEMO COACHING — CENTRALIZED EDITABLE CONFIGURATION
 * ==============================================================================
 * All brand parameters, contact vectors, courses, admissions details, 
 * and call-to-actions are managed centrally here.
 *
 * IMPORTANT COMPLIANCE NOTICE:
 * All results, statistics, testimonials, fees, and faculty credentials in this 
 * configuration are clearly identified illustrative demonstration placeholders 
 * for evaluation purposes. No real-world claims or endorsements are made.
 * ==============================================================================
 */

export const siteConfig = {
  // ---------------------------------------------------------------------------
  // 1. INSTITUTE IDENTITY & ESSENCE
  // ---------------------------------------------------------------------------
  institute: {
    name: "SACHIN 'S DEMO COACHING",
    brandShort: "SDC ACADEMY",
    tagline: "The Elite Architectural Sanctuary for Academic & Competitive Mastery",
    subtagline: "High-Caliber Mentorship • Rigorous Analytical Pedagogy • Cohort 2026–2027",
    foundedYear: "2024",
    statusBadge: "Admissions Open for Cohort 2026",
    accreditationNote: "[Illustrative Demonstration Prototype — Academic Blueprint]",
    complianceDisclaimer: 
      "NOTICE: All results, ranks, student profiles, faculty dossiers, and fee figures displayed across this platform are clearly identified illustrative demonstration placeholders for conceptual and technical evaluation.",
  },

  // ---------------------------------------------------------------------------
  // 2. CONTACT & REACHABILITY
  // ---------------------------------------------------------------------------
  contact: {
    phoneDisplay: "+91 (0) 98765 43210 [Sample Line]",
    phoneTel: "+919876543210",
    counsellingHotline: "+91 (0) 98765 43219 [Direct Desk]",
    counsellingTel: "+919876543219",
    admissionsEmail: "admissions@sachinsdemocoaching.edu.sample",
    deanOfficeEmail: "dean.office@sachinsdemocoaching.edu.sample",
    whatsappChatUrl: "https://wa.me/919876543210?text=Hello%20Sachin's%20Demo%20Coaching,%20I%20would%20like%20to%20enquire%20about%20Cohort%202026%20admissions.",
    operatingHours: "Monday – Saturday: 08:30 AM – 08:30 PM IST | Sunday: 10:00 AM – 04:00 PM IST",
    responseTimeGuarantee: "Admissions counsellors review applications within 24 operational hours.",
  },

  // ---------------------------------------------------------------------------
  // 3. PHYSICAL CAMPUS & LOCATION
  // ---------------------------------------------------------------------------
  address: {
    campusName: "The Pinnacle Sanctuary — Central Academic Campus",
    wing: "Pinnacle Tower, 4th & 5th Floor",
    street: "Knowledge Corridor Boulevard, Institutional Area",
    city: "New Delhi",
    state: "Delhi NCR",
    postalCode: "110001",
    country: "India",
    landmark: "Directly opposite National Science & Innovation Pavilion",
    metroConnectivity: "200m from Central Knowledge Metro Station (Exit 3)",
    coordinates: "28.6139° N, 77.2090° E [Exemplar Coordinates]",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Connaught+Place,+New+Delhi&t=&z=14&ie=UTF8&iwloc=&output=embed",
  },

  // ---------------------------------------------------------------------------
  // 4. SOCIAL MEDIA VECTORS
  // ---------------------------------------------------------------------------
  socialLinks: [
    { name: "YouTube Masterclasses", url: "https://youtube.com", handle: "@SachinsDemoCoaching" },
    { name: "LinkedIn Academic Network", url: "https://linkedin.com", handle: "Sachin's Demo Coaching" },
    { name: "Instagram Dispatch", url: "https://instagram.com", handle: "@sachins.demo.coaching" },
    { name: "Telegram Study Vault", url: "https://telegram.org", handle: "t.me/SDC_MasteryVault" },
    { name: "X (Twitter) Dispatches", url: "https://x.com", handle: "@SachinsDemo" },
  ],

  // ---------------------------------------------------------------------------
  // 5. CALLS TO ACTION (CTAs)
  // ---------------------------------------------------------------------------
  ctas: {
    primaryEnroll: "Apply for Cohort 2026",
    bookCounselling: "Schedule 1-on-1 Dean Counselling",
    bookDemoClass: "Reserve Complimentary Masterclass Demo",
    downloadSyllabus: "Request Detailed Curriculum Dossier",
    viewAllCourses: "Explore All Academic Programs",
    contactHotline: "Connect With Admissions Director",
    takeScholarshipTest: "Register for SDC Diagnostic Aptitude Test",
  },

  // ---------------------------------------------------------------------------
  // 6. ADMISSIONS & COHORT METRICS
  // ---------------------------------------------------------------------------
  admissions: {
    activeCycle: "Autumn 2026 – Spring 2027",
    batchCeiling: "Capped strictly at 35 aspirants per masterclass batch",
    acceptanceRateNotice: "[Sample Metric: 14% Acceptance based on Diagnostic Aptitude Screen]",
    scholarshipWindow: "Early Decision Merit Waivers available up to 40% [Illustrative Placeholder]",
    intakeDeadlines: [
      { round: "Early Decision Round", deadline: "November 15, 2026", status: "Open Now" },
      { round: "Regular Decision Round", deadline: "December 30, 2026", status: "Upcoming" },
      { round: "Final Direct Evaluation", deadline: "January 20, 2027", status: "Limited Seats" },
    ],
  },

  // ---------------------------------------------------------------------------
  // 7. FLAGSHIP COURSES & TRACKS
  // ---------------------------------------------------------------------------
  availableCourses: [
    {
      id: "jee-advanced-pinnacle",
      slug: "jee-advanced-pinnacle-fellowship",
      code: "SDC-ENG-01",
      title: "JEE (Advanced) & Physics Olympiad Pinnacle Fellowship",
      category: "Engineering & Pure Sciences",
      targetAudience: "Class 11, 12 & Dedicated Dropper Aspirants aiming for Top 500 AIR",
      badge: "Flagship Fellowship",
      duration: "2-Year Comprehensive / 1-Year Accelerated",
      mode: "Intensive Classroom + Digital Research Vault",
      batchSize: "Strictly 35 Scholars",
      overview: 
        "A rigorous, inquiry-driven program dismantling multi-concept problem structures in Advanced Mechanics, Organic Synthesis, and Higher Calculus with deep mathematical rigor.",
      highlights: [
        "1,200+ hours of live faculty instruction by veteran IITian mentors [Placeholder]",
        "Proprietary SDC Problem Archetype Archive (4,500 curated conceptual challenges)",
        "Bi-weekly Computer-Based Simulated Exam Engine replicating NTA and IIT testing patterns",
        "1-on-1 personalized cognitive performance and error-pattern analytics",
      ],
      curriculumChapters: [
        { title: "Stage I: Mathematical Foundations & Rigorous Calculus", duration: "12 Weeks" },
        { title: "Stage II: Classical Mechanics, Electrodynamics & Wave Optics", duration: "24 Weeks" },
        { title: "Stage III: Physical, Inorganic & Stereochemical Pathways", duration: "20 Weeks" },
        { title: "Stage IV: Multi-Subject Synthesis & Advanced Test Strategy", duration: "16 Weeks" },
      ],
      feePlaceholder: "[Fee Bracket: Contact Admissions Desk for Institutional Scholarship Slabs]",
      featured: true,
      accentColor: "#c9a84c",
    },
    {
      id: "neet-medical-fellowship",
      slug: "neet-medical-fellowship",
      code: "SDC-MED-02",
      title: "NEET-UG Medical Excellence & Clinical Aptitude Fellowship",
      category: "Medical & Life Sciences",
      targetAudience: "Aspiring Medical Scholars targeting Top Tier AIIMS, JIPMER, and Central GMCs",
      badge: "High Demand",
      duration: "2-Year Integrated / 1-Year Super-30 Intensive",
      mode: "Dual-Mode (Campus Lecture Hall & High-Res Biology Lab Simulations)",
      batchSize: "Strictly 35 Scholars",
      overview: 
        "Precision-engineered biology NCERT mastery paired with rapid-computation physics and physical chemistry problem archetypes for 700+ score benchmarks.",
      highlights: [
        "Complete 360° NCERT microscopic text decryption and diagrammatic mastery",
        "Clinical relevance pedagogy linking human physiology directly to competitive questions",
        "Ochlocracy-free doubt clinics with dedicated subject ombudsmen",
        "Full-length OMR speed conditioning with sub-second question triage algorithms",
      ],
      curriculumChapters: [
        { title: "Stage I: Cell Biology, Molecular Genetics & Human Physiology", duration: "16 Weeks" },
        { title: "Stage II: High-Precision Physics for Medical Aspirants", duration: "20 Weeks" },
        { title: "Stage III: Organic Transformations & Stoichiometric Fluency", duration: "18 Weeks" },
        { title: "Stage IV: 60 Full-Syllabus Benchmarked Mock Grand Tests", duration: "14 Weeks" },
      ],
      feePlaceholder: "[Fee Bracket: Contact Admissions Desk for Merit Waiver Criteria]",
      featured: true,
      accentColor: "#d4820a",
    },
    {
      id: "civil-services-governance",
      slug: "civil-services-executive-track",
      code: "SDC-GOV-03",
      title: "Civil Services (UPSC) & Public Policy Strategic Track",
      category: "Administrative & Public Leadership",
      targetAudience: "University Graduates and Working Professionals targeting IAS, IPS, and IFS",
      badge: "Executive Leadership",
      duration: "18-Month Comprehensive Foundation + Mains Answer Architecture",
      mode: "Evening & Weekend Cohort (Hybrid)",
      batchSize: "Strictly 30 Fellows",
      overview: 
        "An interdisciplinary synthesis of Constitutional Law, Geopolitics, Indian Economy, and Ethics, guided by former civil servants and policy academicians.",
      highlights: [
        "Rigorous Mains answer-writing laboratory with line-by-line editorial feedback",
        "Daily Editorial Synthesis & Current Affairs Analytical Dossier",
        "Dedicated Essay Crafting & Ethics (GS-IV) Moral Philosophy Seminars",
        "Personality test simulations with retired ambassadors and civil officers [Placeholder]",
      ],
      curriculumChapters: [
        { title: "Stage I: Polity, Governance, Constitution & Ethics Core", duration: "20 Weeks" },
        { title: "Stage II: Macro-Economics, Geopolitical Matrix & Environment", duration: "22 Weeks" },
        { title: "Stage III: Optional Subject Deep Mastery & Thesis Synthesis", duration: "18 Weeks" },
        { title: "Stage IV: Prelims Rapid Triangulation & Mains Answer Sprint", duration: "12 Weeks" },
      ],
      feePlaceholder: "[Fee Bracket: Contact Admissions Desk for Flexible Corporate Sponsorship]",
      featured: true,
      accentColor: "#b87333",
    },
    {
      id: "foundation-olympiad-stem",
      slug: "foundation-stem-olympiad",
      code: "SDC-FND-04",
      title: "Foundation STEM, Olympiads & High-Order Reasoning (Grades 8–10)",
      category: "Junior Aptitude & Early Excellence",
      targetAudience: "School Students (Grades 8, 9 & 10) aspiring for PRMO, NSEJS, NTSE & Early JEE/NEET Rigor",
      badge: "Early Nurture",
      duration: "1-Year Academic Season (Weekend Intensives)",
      mode: "Interactive Seminar & Socratic Problem Labs",
      batchSize: "Strictly 25 Young Scholars",
      overview: 
        "Cultivating first-principles cognitive thinking, mathematical curiosity, and scientific intuition before high school pressure begins.",
      highlights: [
        "Socratic method: learning how to derive formulas rather than memorize them",
        "Early exposure to International Olympiad mathematics and non-routine problem solving",
        "Mental models in logic, scientific taxonomy, and spatial reasoning",
        "Parent-mentor quarterly progress audits tracking analytical curiosity growth",
      ],
      curriculumChapters: [
        { title: "Stage I: Number Theory, Combinatorics & Geometric Elegance", duration: "12 Weeks" },
        { title: "Stage II: The Physical Universe: Newton to Faraday Made Intuitive", duration: "14 Weeks" },
        { title: "Stage III: Chemical Bonding & Cellular Machinery", duration: "12 Weeks" },
        { title: "Stage IV: Olympiad Simulation Challenges & Capstone Project", duration: "10 Weeks" },
      ],
      feePlaceholder: "[Fee Bracket: Contact Admissions Desk for Family Sibling Grants]",
      featured: false,
      accentColor: "#c9a84c",
    },
    {
      id: "quant-career-advancement",
      slug: "quant-career-advancement-track",
      code: "SDC-PRO-05",
      title: "Quantitative Mastery & Executive Career Advancement (CAT / GMAT / Quant)",
      category: "Professional & Management Prep",
      targetAudience: "Engineers, Analysts, and Corporate Professionals targeting IIMs, Global Top B-Schools & FinTech Roles",
      badge: "Career Elevation",
      duration: "9-Month Accelerated Weekend Masterclass",
      mode: "Live Virtual Sanctuary & Interactive Saturday Boardrooms",
      batchSize: "Strictly 30 Professionals",
      overview: 
        "High-velocity mental mathematics, algorithmic data interpretation, and case-study verbal rhetoric designed for 99+ percentile aspirants.",
      highlights: [
        "Advanced Vedic & Mental Computation techniques eliminating scratchpad dependency",
        "Data Interpretation & Logical Reasoning (DILR) case-puzzle decryption blueprints",
        "Verbal Ability & Critical Reasoning deconstruction inspired by LSAT standards",
        "Interview prep, SOP crafting, and leadership profile polishing [Placeholder]",
      ],
      curriculumChapters: [
        { title: "Stage I: Arithmetic Velocity, Modern Algebra & Higher Geometry", duration: "10 Weeks" },
        { title: "Stage II: High-Order DILR Matrix Decryption & Game Theory Sets", duration: "10 Weeks" },
        { title: "Stage III: Critical Rhetoric, Reading Inference & Philosophical Passages", duration: "8 Weeks" },
        { title: "Stage IV: Sectional Benchmarks & 30 Adaptive Simulated Exams", duration: "8 Weeks" },
      ],
      feePlaceholder: "[Fee Bracket: Contact Admissions Desk for Corporate Reimbursement Invoicing]",
      featured: false,
      accentColor: "#f0d080",
    },
  ],

  // ---------------------------------------------------------------------------
  // 8. PEDAGOGICAL PILLARS ("THE CRAFT")
  // ---------------------------------------------------------------------------
  pedagogyPillars: [
    {
      numeral: "I",
      title: "The Socratic Dialectic",
      summary: "We eliminate rote memorization. Every concept begins with an unsolved real-world contradiction, forcing scholars to deduce fundamental principles from first truths.",
      statPlaceholder: "100% First-Principles Framework [Illustrative Pedagogy Model]",
    },
    {
      numeral: "II",
      title: "Cognitive Error-Pattern Deconstruction",
      summary: "Mistakes are not penalized; they are mapped. Our proprietary diagnostic logs identify whether an error was conceptual, computational, or time-pressured.",
      statPlaceholder: "4-Stage Error Taxonomy Matrix [Methodology Blueprint]",
    },
    {
      numeral: "III",
      title: "Micro-Cohort Density (Max 35)",
      summary: "Mass lecture factories dilute accountability. We strictly cap batch sizes at 35 seats so every student's gaze, voice, and homework is observed.",
      statPlaceholder: "1:7 Mentor-to-Scholar Ratio [Cohort Standard Model]",
    },
    {
      numeral: "IV",
      title: "The Psychological Crucible",
      summary: "Exams are 50% knowledge and 50% autonomic nervous system control. We train psychological resilience, sleep protocols, and focus endurance under clock pressure.",
      statPlaceholder: "Bi-Weekly Stress & Endurance Calibration [Holistic Training Protocol]",
    },
  ],

  // ---------------------------------------------------------------------------
  // 9. FACULTY DOSSIERS [CLEARLY IDENTIFIED PLACEHOLDERS]
  // ---------------------------------------------------------------------------
  facultyPlaceholders: [
    {
      name: "Dr. A. R. Sharma [Placeholder Profile]",
      designation: "Academic Dean & Head of Pure Mathematics",
      credentials: "Ph.D. Applied Mathematics; 22+ Years Veteran Educator [Exemplar Credentials]",
      specialization: "Calculus, Coordinate Geometry & Non-Routine Olympiad Proofs",
      bio: "Renowned for deconstructing convoluted multi-step integrals into intuitive geometric transformations. Over two decades guiding national Olympiad scholars.",
    },
    {
      name: "Prof. Vikramaditya Sen [Placeholder Profile]",
      designation: "Director of Theoretical & Experimental Physics",
      credentials: "M.Tech IIT Kharagpur; Former Senior Research Fellow [Exemplar Credentials]",
      specialization: "Rotational Dynamics, Electrodynamics & Quantum Foundations",
      bio: "Instills deep scientific intuition by translating differential field equations into physical simulations that scholars can visualize instinctively.",
    },
    {
      name: "Dr. Meenakshi Sundaram [Placeholder Profile]",
      designation: "Chair of Life Sciences & Clinical Medicine",
      credentials: "MD, MBBS Central Institute; Gold Medalist in Pathology [Exemplar Credentials]",
      specialization: "Cellular Genetics, Human Physiology & Molecular Botany",
      bio: "Bridges the gap between secondary school biology and modern clinical medical practice, making NCERT syllabi unforgettable.",
    },
    {
      name: "Adv. Rajeshwar Rao [Placeholder Profile]",
      designation: "Head of Governance, Public Policy & Jurisprudence",
      credentials: "Former Public Administrator & Constitutional Scholar [Exemplar Credentials]",
      specialization: "Indian Polity, Administrative Ethics & Geopolitics",
      bio: "Pioneered the analytical framework for UPSC GS-II & GS-IV answers, teaching aspirants how to think like a policy architect.",
    },
  ],

  // ---------------------------------------------------------------------------
  // 10. ACHIEVER BENCHMARKS [CLEARLY IDENTIFIED PLACEHOLDERS]
  // ---------------------------------------------------------------------------
  achieversPlaceholders: [
    {
      name: "Aspirant Aryan K. [Placeholder Persona]",
      outcome: "AIR 24 — JEE Advanced [Illustrative Benchmark]",
      program: "2-Year Pinnacle Engineering Fellowship",
      testimonial: 
        "The shift from panic memorization to SDC's first-principles method changed everything. Physics stopped being a formula sheet and became a language I could speak.",
      year: "2025 [Exemplar]",
    },
    {
      name: "Aspirant Sneha M. [Placeholder Persona]",
      outcome: "Score 710/720 — NEET-UG [Illustrative Benchmark]",
      program: "NEET Super-30 Medical Fellowship",
      testimonial: 
        "The batch cap of 35 meant Dr. Meenakshi noticed the moment my confidence dipped in Organic Mechanisms. No other institute gives this level of mentorship.",
      year: "2025 [Exemplar]",
    },
    {
      name: "Aspirant Kabir V. [Placeholder Persona]",
      outcome: "Rank 38 — UPSC CSE [Illustrative Benchmark]",
      program: "Civil Services Strategic Track",
      testimonial: 
        "Mains answer writing isn't about dumping information; it's about structural clarity. Adv. Rao's line-by-line red pen feedback was the single turning point.",
      year: "2024 [Exemplar]",
    },
  ],

  // ---------------------------------------------------------------------------
  // 11. FAQ ACCORDION DATA
  // ---------------------------------------------------------------------------
  faqs: [
    {
      question: "How are students selected into Sachin's Demo Coaching cohorts?",
      answer: 
        "Admissions operate on an evaluation of intellectual curiosity rather than past marksheets. Candidates complete our Diagnostic Aptitude Screen (SDC-DAT) followed by an interactive interview with the Academic Dean. Only 35 scholars are accepted per batch.",
    },
    {
      question: "Can I attend a demonstration class before completing enrollment?",
      answer: 
        "Yes. We offer complimentary 3-hour Masterclass Demos every Saturday. You will experience our live lecture environment, meet the lead faculty, and receive an instant assessment of your problem-solving approach.",
    },
    {
      question: "Are scholarship fee waivers provided for meritorious candidates?",
      answer: 
        "Merit and need-based fee waivers of up to 40% are granted strictly based on SDC-DAT examination percentile scores. Contact our admissions desk to view current scholarship matrices.",
    },
    {
      question: "What is your policy regarding batch sizes and personal attention?",
      answer: 
        "We uphold a strict constitutional ceiling of 35 students per lecture hall. Every scholar is assigned a dedicated faculty mentor for weekly 1-on-1 progress reviews and doubt deconstruction.",
    },
    {
      question: "Is hybrid / live digital attendance supported for outstation scholars?",
      answer: 
        "Yes. All lecture halls are equipped with cinematic high-definition multi-camera streaming and interactive audio, allowing distant fellows to interact with faculty in real-time.",
    },
  ],
};
