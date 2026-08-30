/**
 * MEC Intelligent AI Intent & NLU Engine
 * Classifies visitor queries across all domain intents with robust entity extraction,
 * word-boundary regex matching, comprehensive knowledge fallback, conversational memory, and instant navigation.
 */

import { queryKnowledgeBase, calculateAgePlacement, MEC_CORE_FACTS } from "./aiKnowledgeEngine";
import { getNavigationTarget } from "./siteNavigationRegistry";
import { CBE_FEES_2026, SENIOR_SCHOOL_FEES_2026, CAMBRIDGE_FEES_2026, PAYMENT_CHANNELS_2026 } from "../data/feeStructures2026";

/* ─── 1. NORMALIZATION & PHRASE MAPPING ─────────────────────────────── */

const TYPO_MAP = {
  "moieducation": "moi educational centre",
  "moiedu": "moi educational centre",
  "moieducentre": "moi educational centre",
  "swiming": "swimming",
  "swimmin": "swimming",
  "admision": "admission",
  "admisson": "admission",
  "curiculum": "curriculum",
  "curriculam": "curriculum",
  "tution": "tuition",
  "transpot": "transport",
  "robotiks": "robotics",
  "locaton": "location",
  "cambrige": "cambridge",
  "shcool": "school",
  "feez": "fees",
  "feee": "fees",
  "aply": "apply",
  "enrol": "enroll",
  "enrolment": "enrollment",
  "establised": "established",
  "estabilished": "established",
  "princpal": "principal",
  "princple": "principal"
};

export function normalizeQuery(text) {
  if (!text) return "";
  let q = text.toLowerCase().trim();
  for (const [typo, fix] of Object.entries(TYPO_MAP)) {
    q = q.replace(new RegExp(`\\b${typo}\\b`, "gi"), fix);
  }
  return q;
}

/* ─── 2. ENTITY EXTRACTION ───────────────────────────────────────────── */

export function extractGradeEntity(text) {
  const t = text.toLowerCase();

  if (/\b(playgroup|daycare|creche)\b/i.test(t)) {
    return { raw: "Playgroup", gradeCode: "playgroup", system: "CBC", section: "Pre-Primary" };
  }
  if (/\b(pp1|pre-primary 1|pre primary 1|reception)\b/i.test(t)) {
    return { raw: "PP1", gradeCode: "pp1", system: "CBC", section: "Pre-Primary" };
  }
  if (/\b(pp2|pre-primary 2|pre primary 2|kindergarten)\b/i.test(t)) {
    return { raw: "PP2", gradeCode: "pp2", system: "CBC", section: "Pre-Primary" };
  }

  // Cambridge Years
  const yearMatch = t.match(/\byear\s*([1-6])\b/i);
  if (yearMatch) {
    const yearNum = yearMatch[1];
    return { raw: `Year ${yearNum}`, gradeCode: `year${yearNum}`, system: "Cambridge", section: "Cambridge International" };
  }

  // CBC Grades 1 to 10
  const gradeMatch = t.match(/\b(?:grade|class|standard|std|form|g)\s*([1-9]|10)\b/i);
  if (gradeMatch) {
    const gradeNum = parseInt(gradeMatch[1], 10);
    const section = gradeNum <= 3 ? "Lower Primary" : gradeNum <= 6 ? "Upper Primary" : gradeNum <= 9 ? "Junior School" : "Senior High School";
    return { raw: `Grade ${gradeNum}`, gradeCode: `grade${gradeNum}`, system: "CBC", section, gradeNum };
  }

  // Generic Sections
  if (/\b(junior school|junior secondary|jss)\b/i.test(t)) {
    return { raw: "Junior School (Grades 7–9)", gradeCode: "grade7", system: "CBC", section: "Junior School" };
  }
  if (/\b(senior school|senior high|high school|grade 10|form 1)\b/i.test(t)) {
    return { raw: "Senior School (Grade 10)", gradeCode: "grade10", system: "CBC", section: "Senior High School" };
  }

  return null;
}

export function extractAgeOrBirthDate(text) {
  const t = text.toLowerCase();

  const birthMatch = t.match(/\bborn\s*(?:in\s*)?(?:(january|february|march|april|may|june|july|august|september|october|november|december)\s*)?(\d{4})\b/i);
  if (birthMatch) {
    const birthYear = parseInt(birthMatch[2], 10);
    const age = 2026 - birthYear;
    return { age: Math.max(1, age), birthYear, birthMonth: birthMatch[1] || null };
  }

  const ageMatch = t.match(/\b(?:age\s*(\d{1,2})|(\d{1,2})\s*(?:years|year|yrs|yr)\s*old)\b/i);
  if (ageMatch) {
    const age = parseInt(ageMatch[1] || ageMatch[2], 10);
    return { age, birthYear: 2026 - age, birthMonth: null };
  }

  return null;
}

/* ─── 3. BROAD CONVERSATIONAL INTENT CONTROLLER ──────────────────────── */

export function processUserQuery(userMessage, conversationContext = {}, currentRoute = "/") {
  const rawQ = normalizeQuery(userMessage);

  // 1. "Take me there / Show me / Open it" reference action
  if (/^(take me there|show me|open it|open this|where is that|go there|let's see|show|open|jump there)$/i.test(rawQ)) {
    if (conversationContext.lastNavigation) {
      return {
        answer: `Opening the ${conversationContext.lastNavigation.sectionTitle || conversationContext.lastNavigation.pageTitle} section for you right now.`,
        confidence: 1.0,
        source: { type: "MEC Official Website", name: "Navigation Co-Pilot", url: conversationContext.lastNavigation.fullUrl },
        navigation: {
          enabled: true,
          route: conversationContext.lastNavigation.fullUrl,
          sectionId: conversationContext.lastNavigation.sectionId,
          highlight: true
        },
        actions: [
          { label: "Apply Now", type: "navigate", route: "/admissions/admission-process#application-form" },
          { label: "Contact Admissions", type: "contact", whatsappUrl: MEC_CORE_FACTS.contact.whatsappUrl }
        ]
      };
    }
  }

  // 2. Required Documents Checklist
  if (/\b(documents?|birth certificate|what documents|what do i need|requirements to apply|passport photos?|nemis)\b/i.test(rawQ)) {
    const navTarget = getNavigationTarget("admissions", "requirements");
    return {
      answer: "To complete your child's application for admission, please provide: 1) Copy of Learner's Birth Certificate, 2) Two recent passport-size photos, 3) Copies of Parents'/Guardians' National IDs or Passports, 4) Past 2 terms academic report cards, 5) Transfer letter & NEMIS UPI number.",
      confidence: 1.0,
      source: { type: "MEC Official Website", name: "Admissions Documentation Checklist", url: navTarget.fullUrl },
      navigation: {
        enabled: true,
        route: navTarget.fullUrl,
        sectionId: navTarget.sectionId,
        highlight: true
      },
      actions: [
        { label: "View Checklist on Page", type: "navigate", route: navTarget.fullUrl },
        { label: "Start Online Application", type: "navigate", route: "/admissions/admission-process#application-form" },
        { label: "Download Application Form PDF", type: "navigate", route: "/admissions/resources" }
      ],
      updatedContext: { lastNavigation: navTarget }
    };
  }

  // 3. Admissions Process, Steps & How to Apply
  if (/\b(apply|application|admission|admissions|admit|enrol|enroll|enrollment|intake|register child|join mec|how to apply|how do i apply|how can i apply|steps to join|admission process)\b/i.test(rawQ)) {
    const navTarget = getNavigationTarget("admissions", "steps");
    return {
      answer: "Admissions for the 2026 Academic Year are open from Playgroup to Grade 10 and Cambridge Primary (Years 1–6). The 4-step admission journey is: 1) Complete the Online Application form, 2) Attend a friendly learner assessment, 3) Receive Offer Letter & Invoice, 4) Orientation & Welcome Pack. I have guided you to the admissions steps below.",
      confidence: 1.0,
      source: { type: "MEC Official Website", name: "Admissions Office 2026", url: navTarget.fullUrl },
      navigation: {
        enabled: true,
        route: navTarget.fullUrl,
        sectionId: navTarget.sectionId,
        highlight: true
      },
      actions: [
        { label: "Start Online Application", type: "navigate", route: "/admissions/admission-process#application-form" },
        { label: "View Required Documents", type: "navigate", route: "/admissions/admission-process#required-documents" },
        { label: "WhatsApp Admissions Office", type: "contact", whatsappUrl: `${MEC_CORE_FACTS.contact.whatsappUrl}?text=Hello%20MEC%20Admissions%2C%20I%20would%20like%20to%20apply%20for%20admission.` }
      ],
      updatedContext: { lastNavigation: navTarget }
    };
  }

  // 4. Extract Entities (Grade, Age)
  const gradeEntity = extractGradeEntity(rawQ) || (conversationContext.activeGrade ? { raw: conversationContext.activeGrade, gradeCode: conversationContext.activeGradeCode } : null);
  const ageEntity = extractAgeOrBirthDate(rawQ);

  // 5. Child Age / Year-Group Placement Queries
  if (ageEntity || /\b(which class|which grade|which year|placement|eligibility|how old)\b/i.test(rawQ)) {
    if (ageEntity) {
      const placement = calculateAgePlacement(ageEntity.age);
      return {
        answer: `${placement.message} Final placement is confirmed through our friendly learner assessment with our academic leadership.`,
        confidence: 1.0,
        source: { type: "Ministry of Education Kenya & MEC Admissions", name: "Age Placement Guidelines 2026", url: "/admissions/admission-process" },
        navigation: {
          enabled: true,
          route: placement.admissionRoute || "/admissions/admission-process#admissions-timeline",
          sectionId: "admissions-timeline",
          highlight: true
        },
        visualCard: {
          type: "age_placement",
          age: ageEntity.age,
          suggestedStage: placement.suggestedStage,
          curriculum: placement.curriculum,
          ageRange: placement.ageRange
        },
        actions: [
          { label: "Start 2026 Application", type: "navigate", route: "/admissions/admission-process#application-form" },
          { label: "View Fee Structure", type: "navigate", route: placement.feeRoute || "/admissions/fees" },
          { label: "Talk to Admissions", type: "contact", whatsappUrl: `${MEC_CORE_FACTS.contact.whatsappUrl}?text=Hello%20MEC%20Admissions%2C%20I%27d%20like%20to%20enquire%20about%20admission%20for%20my%20${ageEntity.age}%20year%20old%20child.` }
        ],
        updatedContext: { activeAge: ageEntity.age, activeStage: placement.suggestedStage }
      };
    }
  }

  // 6. Fee Queries & Payment Channels
  if (/\b(fees?|tuition|cost|how much|charges?|price|pay|term fee|annual fee|calculator|mpesa|paybill)\b/i.test(rawQ)) {
    if (gradeEntity) {
      const gCode = gradeEntity.gradeCode;
      let targetSection = "cbe";
      let feeCard = null;
      let tuitionSummary = "";

      if (gCode === "grade10" || gCode === "form1") {
        targetSection = "senior";
        feeCard = {
          grade: "Grade 10 (Senior High School)",
          term1: "KES 100,000",
          term2: "KES 100,000",
          term3: "KES 75,000",
          annualTotal: "KES 275,000",
          inclusions: "Core STEM Labs, Digital LMS, Career Coaching & Insurance"
        };
        tuitionSummary = "Senior School Grade 10 (Inaugural Class 2026) tuition is KES 100,000 per term for Terms 1 & 2, and KES 75,000 for Term 3 (Total Annual Tuition: KES 275,000).";
      } else if (gCode.startsWith("year")) {
        targetSection = "cambridge";
        const yrData = CAMBRIDGE_FEES_2026.years.find(y => y.year.toLowerCase().includes(gradeEntity.raw.toLowerCase())) || CAMBRIDGE_FEES_2026.years[0];
        feeCard = {
          grade: `${yrData.year} (Cambridge Primary)`,
          term1: `KES ${yrData.term1.toLocaleString()}`,
          term2: `KES ${yrData.term2.toLocaleString()}`,
          term3: `KES ${yrData.term3.toLocaleString()}`,
          annualTotal: `KES ${yrData.total.toLocaleString()}`,
          inclusions: "British International Primary Curriculum, Science & Global Perspectives"
        };
        tuitionSummary = `${yrData.year} Cambridge Primary tuition is KES ${yrData.term1.toLocaleString()} for Term 1, KES ${yrData.term2.toLocaleString()} for Term 2, and KES ${yrData.term3.toLocaleString()} for Term 3 (Annual Total: KES ${yrData.total.toLocaleString()}).`;
      } else {
        const cbeRow = CBE_FEES_2026.grades.find(g => g.grade.toLowerCase().includes(gradeEntity.raw.toLowerCase())) || CBE_FEES_2026.grades[4];
        feeCard = {
          grade: `${cbeRow.grade} (${cbeRow.section})`,
          term1: `KES ${cbeRow.term1.toLocaleString()}`,
          term2: `KES ${cbeRow.term2.toLocaleString()}`,
          term3: `KES ${cbeRow.term3.toLocaleString()}`,
          annualTotal: `KES ${cbeRow.total.toLocaleString()}`,
          inclusions: "Tuition, Assessment, Swimming, Library & Digital Resource Centre"
        };
        tuitionSummary = `${cbeRow.grade} tuition at MEC is KES ${cbeRow.term1.toLocaleString()} for Term 1, KES ${cbeRow.term2.toLocaleString()} for Term 2, and KES ${cbeRow.term3.toLocaleString()} for Term 3 (Total Annual Tuition: KES ${cbeRow.total.toLocaleString()}).`;
      }

      const navTarget = getNavigationTarget("fees", gCode) || getNavigationTarget("fees", targetSection);

      return {
        answer: `${tuitionSummary} I have opened the fee structure directly on the page below.`,
        confidence: 1.0,
        source: { type: "MEC Official Website", name: "2026 Approved Fee Matrix", url: navTarget.fullUrl },
        navigation: {
          enabled: true,
          route: navTarget.fullUrl,
          sectionId: navTarget.sectionId,
          highlight: true
        },
        visualCard: {
          type: "fee_breakdown",
          ...feeCard
        },
        actions: [
          { label: `View ${gradeEntity.raw} Fee Breakdown →`, type: "navigate", route: navTarget.fullUrl },
          { label: "Open Live Fee Calculator", type: "navigate", route: "/admissions/fees#fee-calculator" },
          { label: "Apply for 2026", type: "navigate", route: "/admissions/admission-process#application-form" },
          { label: "Talk to Finance", type: "contact", whatsappUrl: `${MEC_CORE_FACTS.contact.whatsappUrl}?text=Hello%20MEC%2C%20I%20have%20a%20question%20regarding%20${gradeEntity.raw}%20fees.` }
        ],
        updatedContext: { activeGrade: gradeEntity.raw, activeGradeCode: gradeEntity.gradeCode, lastNavigation: navTarget }
      };
    }

    if (/\b(mpesa|paybill|bank|account|how to pay)\b/i.test(rawQ)) {
      const navTarget = getNavigationTarget("fees", "payments");
      return {
        answer: "MEC fee payments are processed securely via M-Pesa Paybill (Business No: 522123, Account: Learner Admission Number), or direct transfer to Standard Chartered Bank (A/C 0102012345600) and ABSA Bank (A/C 0309481923). Cash is not accepted on campus.",
        confidence: 1.0,
        source: { type: "MEC Official Website", name: "Finance Office Payment Guidelines", url: navTarget.fullUrl },
        navigation: {
          enabled: true,
          route: navTarget.fullUrl,
          sectionId: navTarget.sectionId,
          highlight: true
        },
        visualCard: {
          type: "payment_channels",
          mpesa: PAYMENT_CHANNELS_2026.mpesa,
          banks: PAYMENT_CHANNELS_2026.banks
        },
        actions: [
          { label: "View Bank & Paybill Details", type: "navigate", route: navTarget.fullUrl },
          { label: "Contact Accounts Office", type: "contact", phone: MEC_CORE_FACTS.contact.financePhone }
        ],
        updatedContext: { lastNavigation: navTarget }
      };
    }

    const navTarget = getNavigationTarget("fees", "cbe");
    return {
      answer: "Moi Educational Centre offers transparent, competitive fee schedules across all levels (Playgroup from KES 40,000/term, Primary from KES 46,000/term, Junior School from KES 64,000/term, and Senior School Grade 10 at KES 100,000/term). Which specific grade level are you enquiring about?",
      confidence: 1.0,
      source: { type: "MEC Official Website", name: "2026 Fee Schedule", url: navTarget.fullUrl },
      navigation: {
        enabled: true,
        route: navTarget.fullUrl,
        sectionId: navTarget.sectionId,
        highlight: true
      },
      actions: [
        { label: "Open Full Fee Schedules", type: "navigate", route: "/admissions/fees" },
        { label: "Calculate Custom Fees", type: "navigate", route: "/admissions/fees#fee-calculator" },
        { label: "Download Fee PDF", type: "navigate", route: "/admissions/resources" }
      ],
      updatedContext: { lastNavigation: navTarget }
    };
  }

  // 7. Location & Directions
  if (/\b(where is|location|address|directions|map|how do i get there|where are you|nairobi west|mai mahiu)\b/i.test(rawQ)) {
    const navTarget = getNavigationTarget("contact", "map");
    return {
      answer: "Moi Educational Centre is located on Mai Mahiu Road, City Estate, Nairobi West, Nairobi, Kenya. We are easily accessible from Lang'ata Road, Aerodrome Road, and Mombasa Road. I've highlighted the interactive campus map below.",
      confidence: 1.0,
      source: { type: "MEC Official Website", name: "Campus Location & Map", url: navTarget.fullUrl },
      navigation: {
        enabled: true,
        route: navTarget.fullUrl,
        sectionId: navTarget.sectionId,
        highlight: true
      },
      visualCard: {
        type: "location_map",
        address: MEC_CORE_FACTS.location,
        gps: MEC_CORE_FACTS.gps,
        hours: MEC_CORE_FACTS.operatingHours
      },
      actions: [
        { label: "Open Campus Map", type: "navigate", route: navTarget.fullUrl },
        { label: "Book a School Tour", type: "contact", whatsappUrl: `${MEC_CORE_FACTS.contact.whatsappUrl}?text=Hello%20MEC%20Admissions%2C%20I%27d%20like%20to%20book%20a%20campus%20tour.` },
        { label: "Call School Office", type: "contact", phone: MEC_CORE_FACTS.contact.primaryPhone }
      ],
      updatedContext: { lastNavigation: navTarget }
    };
  }

  // 8. School Foundation / Established Date / History
  if (/\b(established|founded|started|created|history|how old|founder|daniel moi|1986|40 years)\b/i.test(rawQ)) {
    const navTarget = getNavigationTarget("about", "history");
    return {
      answer: "Moi Educational Centre (MEC) was established in 1986 by H.E. The Late Daniel Toroitich arap Moi, CGH (the second President of the Republic of Kenya). In 2026, MEC proudly celebrates 40 Years of academic excellence, character development, and innovative learning.",
      confidence: 1.0,
      source: { type: "MEC Official Website", name: "About MEC — 40 Year Legacy", url: navTarget.fullUrl },
      navigation: {
        enabled: true,
        route: navTarget.fullUrl,
        sectionId: navTarget.sectionId,
        highlight: true
      },
      actions: [
        { label: "Explore 40-Year History →", type: "navigate", route: navTarget.fullUrl },
        { label: "View Executive Leadership", type: "navigate", route: "/about-MEC/leadership" },
        { label: "Book a Campus Tour", type: "contact", whatsappUrl: `${MEC_CORE_FACTS.contact.whatsappUrl}?text=Hello%20MEC%20Admissions%2C%20I%27d%20like%20to%20book%20a%20school%20tour.` }
      ],
      updatedContext: { lastNavigation: navTarget }
    };
  }

  // 9. Leadership, Board Chairman, Principals
  if (/\b(chairman|principal|headteacher|headmaster|rector|board of directors|management team|paul chemng|peter rotich|stephen wekesa|who runs mec|governance)\b/i.test(rawQ)) {
    const navTarget = getNavigationTarget("leadership", "directory");
    return {
      answer: "Moi Educational Centre is governed by the Board of Directors chaired by Mr. Paul K. Chemng'orem (serving since 2004). Academic operations are led by Mr. Peter Kiplagat Rotich (Principal — Primary & Junior School) and Mr. Stephen Mukhebi Wekesa (Principal — Senior High School).",
      confidence: 1.0,
      source: { type: "MEC Official Website", name: "Leadership Directory", url: navTarget.fullUrl },
      navigation: {
        enabled: true,
        route: navTarget.fullUrl,
        sectionId: navTarget.sectionId,
        highlight: true
      },
      actions: [
        { label: "View Leadership Profiles →", type: "navigate", route: navTarget.fullUrl },
        { label: "Contact School Administration", type: "navigate", route: "/contact" }
      ],
      updatedContext: { lastNavigation: navTarget }
    };
  }

  // 10. Motto, Mission Statement, Vision & Core Values (Strict Word Boundaries to avoid matching 'admission')
  if (/\b(motto|mission statement|our mission|the mission|vision statement|our vision|the vision|core values?|godliness|diligence|teamwork|integrity|courtesy|philosophy)\b/i.test(rawQ)) {
    const navTarget = getNavigationTarget("about", "mission");
    return {
      answer: "MEC's official school motto is 'Excellence and Integrity'. Our 5 Core Values are: Godliness, Diligence, Teamwork, Integrity, and Courtesy. Our mission is to provide quality, holistic, and value-based education that nurtures intellectual, spiritual, physical, and emotional growth in every child.",
      confidence: 1.0,
      source: { type: "MEC Official Website", name: "Mission, Vision & Values", url: navTarget.fullUrl },
      navigation: {
        enabled: true,
        route: navTarget.fullUrl,
        sectionId: navTarget.sectionId,
        highlight: true
      },
      actions: [
        { label: "View Mission & Values on Page →", type: "navigate", route: navTarget.fullUrl },
        { label: "About MEC Heritage", type: "navigate", route: "/about-MEC" }
      ],
      updatedContext: { lastNavigation: navTarget }
    };
  }

  // 11. School Hours, Schedule & Daily Routine
  if (/\b(school hours|what time|daily routine|opening time|closing time|when does school start|when does school end|office hours)\b/i.test(rawQ)) {
    return {
      answer: "School hours at MEC: Early Years (Playgroup to PP2) run 8:00 AM – 1:00 PM; Primary and Junior Secondary (Grades 1–9) run 8:00 AM – 3:30 PM; Senior High School (Grade 10) runs 8:00 AM – 4:00 PM. Co-curricular activities run from 3:30 PM to 5:00 PM. Administrative offices are open Mon–Fri 8:00 AM – 4:00 PM and Saturday 9:00 AM – 12:00 PM.",
      confidence: 1.0,
      source: { type: "MEC Official Website", name: "School Operations Policy", url: "/about-MEC" },
      navigation: {
        enabled: true,
        route: "/about-MEC#mission-values",
        sectionId: "mission-values",
        highlight: true
      },
      actions: [
        { label: "View Student Life", type: "navigate", route: "/extra-curricular" },
        { label: "Contact Admissions Office", type: "contact", phone: MEC_CORE_FACTS.contact.primaryPhone }
      ]
    };
  }

  // 12. Meals, Lunch & Cafeteria
  if (/\b(lunch|food|meals|dining|cafeteria|diet|nutrition|snacks?|catering|what do students eat|is lunch provided)\b/i.test(rawQ)) {
    return {
      answer: "MEC provides delicious, chef-prepared hot 3-course balanced lunches and mid-morning 10:00 AM health snacks daily in our hygienic school cafeteria. Meals include fresh vegetables, proteins, healthy grains, and seasonal fruit. Vegetarian and special dietary requirements are fully accommodated.",
      confidence: 1.0,
      source: { type: "MEC Official Website", name: "Student Life & Dining", url: "/parents-hub" },
      navigation: {
        enabled: true,
        route: "/parents-hub",
        sectionId: "parent-announcements",
        highlight: true
      },
      actions: [
        { label: "Parents & Community Hub", type: "navigate", route: "/parents-hub" },
        { label: "Book a School Tour", type: "contact", whatsappUrl: `${MEC_CORE_FACTS.contact.whatsappUrl}?text=Hello%20MEC%2C%20I%27d%20like%20to%20book%20a%20campus%20tour.` }
      ]
    };
  }

  // 13. Uniform & Dress Code
  if (/\b(uniform|dress code|school clothes|blazer|sweater|uniform shop|uniform store|what do students wear)\b/i.test(rawQ)) {
    return {
      answer: "MEC students wear smart, branded school uniforms reflecting our values of excellence and discipline. Complete uniform sets (academic blazers, sweaters, shirts, trousers/skirts, sports kits, and swimwear) are purchased directly from the on-campus MEC Uniform Store.",
      confidence: 1.0,
      source: { type: "MEC Official Website", name: "Admissions Uniform Guidelines", url: "/admissions/resources" },
      navigation: {
        enabled: true,
        route: "/admissions/resources#downloadable-resources",
        sectionId: "downloadable-resources",
        highlight: true
      },
      actions: [
        { label: "Admissions Resources & Downloads", type: "navigate", route: "/admissions/resources" },
        { label: "Talk to Admissions", type: "contact", whatsappUrl: MEC_CORE_FACTS.contact.whatsappUrl }
      ]
    };
  }

  // 14. Boarding Policy
  if (/\b(boarding|is mec boarding|hostel|dormitory|day school|do you have boarding|sleep over|boarders)\b/i.test(rawQ)) {
    return {
      answer: "Moi Educational Centre operates exclusively as a premier co-educational Day School. We believe in nurturing daily family connections, supported by our fleet of over 40 modern school buses across Nairobi.",
      confidence: 1.0,
      source: { type: "MEC Official Website", name: "School Operations Policy", url: "/about-MEC" },
      navigation: {
        enabled: true,
        route: "/about-MEC#about-hero",
        sectionId: "about-hero",
        highlight: true
      },
      actions: [
        { label: "View Bus Transport Routes", type: "navigate", route: "/parents-hub" },
        { label: "Apply for 2026", type: "navigate", route: "/admissions/admission-process" }
      ]
    };
  }

  // 15. Class Size & Student Population
  if (/\b(class size|population|how many students|how many learners|ratio|teacher ratio|students per class|streams)\b/i.test(rawQ)) {
    return {
      answer: "MEC maintains an optimal class size of approximately 25 to 30 learners per stream with assistant teachers in Early Years. This guarantees personalized attention, close academic monitoring, and strong pastoral support for every learner.",
      confidence: 1.0,
      source: { type: "MEC Official Website", name: "Academic Structure", url: "/education" },
      navigation: {
        enabled: true,
        route: "/education#learning-pathway",
        sectionId: "learning-pathway",
        highlight: true
      },
      actions: [
        { label: "Explore Academic Pathways", type: "navigate", route: "/education" },
        { label: "Talk to Admissions", type: "contact", whatsappUrl: MEC_CORE_FACTS.contact.whatsappUrl }
      ]
    };
  }

  // 16. Comprehensive Knowledge Base Retrieval (Covers ALL FAQs, Activities, Leaders, Events & Facilities)
  const kbResult = queryKnowledgeBase(rawQ, { ...conversationContext, currentRoute });
  if (kbResult.bestMatch) {
    const item = kbResult.bestMatch;
    return {
      answer: item.content,
      confidence: Math.max(0.85, kbResult.confidence),
      source: item.source || { type: "MEC Official Knowledge Base", name: item.title, url: item.route },
      navigation: {
        enabled: true,
        route: item.sectionId ? `${item.route}#${item.sectionId}` : item.route,
        sectionId: item.sectionId,
        highlight: true
      },
      actions: [
        { label: `View ${item.title.length > 28 ? item.title.slice(0, 25) + '...' : item.title} →`, type: "navigate", route: item.sectionId ? `${item.route}#${item.sectionId}` : item.route },
        { label: "Talk to Admissions", type: "contact", whatsappUrl: MEC_CORE_FACTS.contact.whatsappUrl }
      ],
      updatedContext: { lastNavigation: { fullUrl: item.route, sectionId: item.sectionId, pageTitle: item.title } }
    };
  }

  // 17. Safe Helpful Conversational Response (Never giving up)
  return {
    answer: `Moi Educational Centre (MEC) is a premier national and international day school in Nairobi West, established in 1986. We offer Kenyan CBC from Playgroup to Senior School Grade 10 and Cambridge Primary (Years 1–6). I can help you with admissions, fee structures, curriculum details, co-curriculars, campus tours, and transport routes. What would you like to explore?`,
    confidence: 0.85,
    source: { type: "MEC Admissions Concierge", name: "General Inquiries Desk", url: "/" },
    navigation: {
      enabled: false,
      route: "/",
      sectionId: null,
      highlight: false
    },
    actions: [
      { label: "View Fee Structures 2026", type: "navigate", route: "/admissions/fees" },
      { label: "Admission Steps & Application", type: "navigate", route: "/admissions/admission-process" },
      { label: "WhatsApp Admissions", type: "contact", whatsappUrl: `${MEC_CORE_FACTS.contact.whatsappUrl}?text=Hello%20MEC%20Admissions%2C%20I%20have%20an%20enquiry.` },
      { label: "Call Admissions Office", type: "contact", phone: MEC_CORE_FACTS.contact.primaryPhone }
    ]
  };
}
