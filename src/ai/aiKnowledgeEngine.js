/**
 * MEC Intelligent AI Knowledge Engine
 * Comprehensive, authoritative website content layer indexed with 100% of Moi Educational Centre's
 * academic data, history, leadership, FAQs, co-curriculars, fee structures, policies, and facilities.
 */

import { CBE_FEES_2026, SENIOR_SCHOOL_FEES_2026, CAMBRIDGE_FEES_2026, PAYMENT_CHANNELS_2026 } from "../data/feeStructures2026";
import { faqs } from "../data/faqs";
import { leaders } from "../data/leaders";
import { activities } from "../data/activities";
import { values } from "../data/values";
import { SITE_NAVIGATION_REGISTRY } from "./siteNavigationRegistry";

/* ─── 1. OFFICIAL MEC FACTUAL PROFILE ────────────────────────────────── */

export const MEC_CORE_FACTS = {
  name: "Moi Educational Centre (MEC)",
  shortName: "MEC",
  motto: "Excellence and Integrity",
  foundedYear: 1986,
  founder: "H.E. The Late Daniel Toroitich arap Moi, CGH (Second President of the Republic of Kenya)",
  yearsOfExcellence: "40 Years of Academic Excellence (1986–2026)",
  location: "Mai Mahiu Road, City Estate, Nairobi West, Nairobi, Kenya",
  gps: "1.3142° S, 36.8192° E",
  contact: {
    primaryPhone: "0702 090 213",
    seniorSchoolPhone: "0797 339 900 / 0777 339 909",
    financePhone: "0113 693 624",
    generalEmail: "info@moieducentre.ac.ke",
    seniorSchoolEmail: "highschool@moieducentre.ac.ke",
    financeEmail: "accounts@moieducentre.ac.ke",
    whatsappPhone: "+254706280170",
    whatsappUrl: "https://wa.me/254706280170"
  },
  operatingHours: "Monday to Friday: 8:00 AM – 4:00 PM | Saturday (Intake desk): 9:00 AM – 12:00 PM",
  schoolHours: "Early Years (Playgroup - PP2): 8:00 AM – 1:00 PM | Primary & Junior School: 8:00 AM – 3:30 PM | Co-Curricular Activities: 3:30 PM – 5:00 PM",
  leadership: {
    chairman: "Mr. Paul K. Chemng'orem (Chairman, Board of Directors since 2004)",
    primaryPrincipal: "Mr. Peter Kiplagat Rotich (Principal — Primary & Junior School)",
    seniorPrincipal: "Mr. Stephen Mukhebi Wekesa (Principal — Senior High School)"
  },
  mission: "To provide quality, holistic, and value-based education that nurtures intellectual, spiritual, physical, and emotional growth in a safe and supportive learning environment.",
  vision: "To be a centre of academic excellence and integrity, nurturing globally competitive learners and ethical leaders of tomorrow.",
  coreValues: [
    "Godliness: We uphold the Christian foundation on which the school is built.",
    "Diligence: We are careful and persistent in whatever work we undertake.",
    "Teamwork: We are committed to working together and supporting one another.",
    "Integrity: We are honest, uphold high moral standards and undertake duties with professionalism.",
    "Courtesy: We treat colleagues, learners, parents and the public with utmost politeness."
  ],
  curriculumOptions: [
    "Kenya Competency-Based Curriculum (CBC) spanning Playgroup, Pre-Primary (PP1–PP2), Lower Primary (Grades 1–3), Upper Primary (Grades 4–6), Junior School (Grades 7–9), and Senior High School (Grades 10–12 with STEM, Arts & Social Sciences pathways).",
    "British Cambridge International Curriculum (CIE Primary Year 1 to Year 6) benchmarking English, Mathematics, Science, Global Perspectives, and Digital Literacy."
  ],
  boardingStatus: "Day School Only. MEC operates as a premier co-educational day school with comprehensive GPS-monitored school bus transport networks across Nairobi.",
  transportFleet: "Fleet of 40+ modern school buses covering South C, South B, Lang'ata, Karen, Nairobi West, Kilimani, Kileleshwa, Upper Hill, Parklands, Syokimau, and Ngong Road.",
  mealsAndNutrition: "Hot, balanced, chef-prepared 3-course lunches and nutritious 10:00 AM break snacks provided daily in our hygienic modern dining facility. Special dietary needs and vegetarian options are accommodated.",
  uniformPolicy: "Official school uniform sets (blazers, sweaters, shirts, trousers/skirts, sports kits, and swimwear) are purchased directly from the on-campus MEC Uniform Depot.",
  facilities: [
    "Semi-Olympic Heated Swimming Pool with certified lifeguards and coaches",
    "FIFA-Standard Manicured Soccer Arena and synthetic running track",
    "ABRSM Accredited Music Conservatory with acoustic suites and piano labs",
    "VEX Robotics & AI STEM Innovation Laboratories",
    "State-of-the-art Science Laboratories (Physics, Chemistry, Biology)",
    "Indoor Sports Complex & Martial Arts Dojo (Karate, Taekwondo, Gymnastics)",
    "Multi-purpose Amphitheatre and 1,000+ seat Auditorium",
    "Modern Digital Learning Resource Centre & Libraries"
  ],
  admissionsIntake: "Main intake in January (Term 1); rolling admissions in May (Term 2) and September (Term 3) subject to class vacancies.",
  assessmentFeeKES: 2000
};

/* ─── 2. DYNAMICALLY GENERATED KNOWLEDGE BASE ────────────────────────── */

// Helper to build searchable KB records
function buildKnowledgeRepository() {
  const kb = [
    // ── History & Foundation ──
    {
      id: "kb-history-established",
      category: "about",
      subCategory: "history",
      title: "Establishment and History of Moi Educational Centre",
      content: "Moi Educational Centre (MEC) was established in 1986 by the late second President of Kenya, Daniel Toroitich arap Moi. In 2026, MEC proudly celebrates 40 years of academic excellence, holistic education, and continuous leadership in the national and international curriculum space.",
      keywords: ["established", "when was mec established", "founded", "history", "who founded", "year established", "1986", "40 years", "daniel arap moi", "background", "origin", "started", "foundation date"],
      route: "/about-MEC",
      sectionId: "about-hero",
      source: { type: "MEC Official Website", name: "About MEC — 40 Year Legacy", url: "/about-MEC" }
    },

    // ── Motto, Mission, Vision & Values ──
    {
      id: "kb-mission-vision-values",
      category: "about",
      subCategory: "values",
      title: "Motto, Mission, Vision & Core Values",
      content: "MEC's Motto is 'Excellence and Integrity'. Mission: To provide quality, holistic, and value-based education nurturing intellectual, spiritual, physical, and emotional growth. Vision: To be a centre of academic excellence and integrity nurturing globally competitive leaders. Core Values: Godliness, Diligence, Teamwork, Integrity, and Courtesy.",
      keywords: ["motto", "mission", "vision", "values", "core values", "godliness", "diligence", "teamwork", "integrity", "courtesy", "philosophy", "aims", "principles", "pillars"],
      route: "/about-MEC",
      sectionId: "mission-values",
      source: { type: "MEC Official Website", name: "Mission, Vision & Values", url: "/about-MEC#mission-values" }
    },

    // ── Leadership ──
    {
      id: "kb-leadership-board",
      category: "about",
      subCategory: "leadership",
      title: "Board Chairman & Executive Leadership",
      content: "Moi Educational Centre is led by Board Chairman Mr. Paul K. Chemng'orem (serving since 2004), Primary & Junior School Principal Mr. Peter Kiplagat Rotich (20+ years education veteran), and Senior High School Principal Mr. Stephen Mukhebi Wekesa.",
      keywords: ["leadership", "chairman", "principal", "paul chemng'orem", "peter rotich", "stephen wekesa", "headteacher", "headmaster", "rector", "board of directors", "management", "who is the principal", "who is the chairman", "administration"],
      route: "/about-MEC/leadership",
      sectionId: "leadership-directory",
      source: { type: "MEC Official Website", name: "Executive Leadership Directory", url: "/about-MEC/leadership" }
    },

    // ── School Hours & Daily Schedule ──
    {
      id: "kb-school-hours",
      category: "general",
      subCategory: "hours",
      title: "School Hours & Daily Schedule",
      content: "MEC operates Monday to Friday. Early Years (Playgroup to PP2): 8:00 AM – 1:00 PM. Primary & Junior Secondary (Grades 1–9): 8:00 AM – 3:30 PM. Senior School (Grade 10): 8:00 AM – 4:00 PM. Co-curricular activities run from 3:30 PM to 5:00 PM on weekdays. Administrative offices are open Mon–Fri 8:00 AM – 4:00 PM and Saturday 9:00 AM – 12:00 PM.",
      keywords: ["school hours", "what time", "schedule", "daily routine", "opening time", "closing time", "time table", "when does school start", "when does school end", "office hours"],
      route: "/about-MEC",
      sectionId: "mission-values",
      source: { type: "MEC Official Website", name: "School Operations Policy", url: "/about-MEC" }
    },

    // ── School Uniform ──
    {
      id: "kb-school-uniform",
      category: "general",
      subCategory: "uniform",
      title: "School Uniform & Dress Code",
      content: "MEC students wear smart, branded school uniforms reflecting discipline and excellence. Complete uniform sets (academic blazers, sweaters, shirts, trousers/skirts, sports kits, and swimwear) are purchased directly from the on-campus MEC Uniform Store. Guidelines on uniform requirements are issued upon admission.",
      keywords: ["uniform", "dress code", "school clothes", "blazer", "sweater", "uniform shop", "uniform store", "what do students wear", "sports kit"],
      route: "/admissions/resources",
      sectionId: "downloadable-resources",
      source: { type: "MEC Official Website", name: "Admissions Uniform Guidelines", url: "/admissions/resources" }
    },

    // ── Lunch, Meals & Nutrition ──
    {
      id: "kb-meals-lunch",
      category: "school-life",
      subCategory: "meals",
      title: "Meals, Lunch Programme & Dietary Care",
      content: "MEC operates a modern, hygienic cafeteria providing hot, wholesome, 3-course balanced lunches and mid-morning 10:00 AM health snacks daily. Menus are balanced with fresh vegetables, proteins, carbohydrates, and seasonal fruits. Clean drinking water is available campus-wide, and special dietary needs or vegetarian preferences are supported.",
      keywords: ["lunch", "food", "meals", "dining", "cafeteria", "diet", "nutrition", "snack", "catering", "what do students eat", "is lunch provided", "special diet"],
      route: "/parents-hub",
      sectionId: "parent-announcements",
      source: { type: "MEC Official Website", name: "Student Life & Nutrition Policy", url: "/parents-hub" }
    },

    // ── Class Size & Population ──
    {
      id: "kb-class-size-ratio",
      category: "academics",
      subCategory: "class-size",
      title: "Class Size, Population & Student-Teacher Ratio",
      content: "Moi Educational Centre maintains optimal class sizes of approximately 25 to 30 learners per stream with dedicated assistant teachers in Early Years. This guarantees personalized attention, close academic monitoring, and strong pastoral care for every learner.",
      keywords: ["class size", "population", "how many students", "how many learners", "ratio", "teacher ratio", "students per class", "number of streams"],
      route: "/education",
      sectionId: "learning-pathway",
      source: { type: "MEC Official Website", name: "Academic Structure", url: "/education" }
    },

    // ── Boarding Policy (Day School Only) ──
    {
      id: "kb-boarding-status",
      category: "general",
      subCategory: "boarding",
      title: "Boarding Status — Day School Excellence",
      content: "Moi Educational Centre is exclusively a Day School. We believe in strengthening daily parent-child bonds while providing world-class academic and co-curricular programmes from 8:00 AM to 5:00 PM, supported by safe door-to-door/zoned school bus transport across Nairobi.",
      keywords: ["boarding", "is mec boarding", "hostel", "dormitory", "day school", "do you have boarding", "sleep over", "boarders"],
      route: "/about-MEC",
      sectionId: "about-hero",
      source: { type: "MEC Official Website", name: "School Operations Policy", url: "/about-MEC" }
    },

    // ── Transport Fleet & Routes ──
    {
      id: "kb-transport-fleet",
      category: "transport",
      subCategory: "bus",
      title: "School Transport Fleet, Routes & Bus Safety",
      content: "MEC operates a fleet of 40+ modern, speed-governed school buses with trained drivers, caring bus chaperones, and live GPS tracking. Routes cover Nairobi West, South C, South B, Lang'ata, Karen, Kilimani, Kileleshwa, Westlands, Upper Hill, Parklands, Syokimau, and Ngong Road.",
      keywords: ["transport", "bus", "school bus", "bus routes", "transport fee", "transport charges", "routes covered", "bus tracking", "pick up", "drop off", "driver", "transport safety"],
      route: "/parents-hub",
      sectionId: "parent-announcements",
      source: { type: "MEC Official Website", name: "MEC Transport Department", url: "/parents-hub" }
    },

    // ── Fees Matrices 2026 ──
    {
      id: "kb-fees-cbe-summary",
      category: "fees",
      subCategory: "cbe",
      title: "CBC Primary & Junior School Fee Schedule 2026",
      content: "2026 Termly Tuition: Playgroup KES 40,000 (Annual KES 116,000); PP1 & PP2 KES 42,000 (Annual KES 122,000); Grades 1–3 KES 46,000 (Annual KES 134,000); Grades 4–6 KES 50,000 (Annual KES 146,000); Grades 7–9 Junior School KES 64,000 (Annual KES 187,000).",
      keywords: ["fees", "tuition", "cbc fees", "cost", "how much", "charges", "junior school fee", "primary fee", "grade 1 fee", "grade 2 fee", "grade 3 fee", "grade 4 fee", "grade 5 fee", "grade 6 fee", "grade 7 fee", "grade 8 fee", "grade 9 fee", "playgroup fee", "pp1 fee", "pp2 fee"],
      route: "/admissions/fees",
      sectionId: "cbe-fees-section",
      source: { type: "MEC Official Website", name: "2026 Approved Fee Schedule", url: "/admissions/fees" }
    },
    {
      id: "kb-fees-senior-school",
      category: "fees",
      subCategory: "senior",
      title: "Senior School Grade 10 Fees 2026",
      content: "Senior School Grade 10 tuition is KES 100,000 for Term 1, KES 100,000 for Term 2, and KES 75,000 for Term 3 (Total Annual Tuition: KES 275,000). Includes access to STEM laboratories, career guidance, digital LMS, and safety insurance.",
      keywords: ["senior school fees", "high school fees", "grade 10 fees", "form 1 fees", "senior high cost", "high school cost", "grade 10 tuition"],
      route: "/admissions/fees",
      sectionId: "senior-fees-section",
      source: { type: "MEC Official Website", name: "Senior School Fee Structure", url: "/admissions/fees#senior-fees-section" }
    },
    {
      id: "kb-fees-cambridge-summary",
      category: "fees",
      subCategory: "cambridge",
      title: "Cambridge International Curriculum Fees 2026",
      content: "Cambridge Primary tuition: Year 1 & 2 KES 100,000/term (Annual KES 290,000); Year 3 & 4 KES 105,000/term (Annual KES 305,000); Year 5 & 6 KES 110,000/term (Annual KES 320,000).",
      keywords: ["cambridge fees", "british curriculum fees", "year 1 fee", "year 2 fee", "year 3 fee", "year 4 fee", "year 5 fee", "year 6 fee", "cie cost"],
      route: "/admissions/fees",
      sectionId: "cambridge-fees-section",
      source: { type: "MEC Official Website", name: "Cambridge Fee Schedule 2026", url: "/admissions/fees#cambridge-fees-section" }
    },
    {
      id: "kb-fees-payment-methods",
      category: "fees",
      subCategory: "payments",
      title: "Payment Channels & M-Pesa Paybill",
      content: "Pay fees securely via M-Pesa Paybill 522123 (Account format: [AdmissionNumber]), or direct transfer to Standard Chartered Bank (A/C 0102012345600) or ABSA Bank (A/C 0309481923). Cash is not accepted on campus.",
      keywords: ["mpesa", "paybill", "bank account", "how to pay", "payment channels", "standard chartered", "absa", "account number", "finance paybill"],
      route: "/admissions/fees",
      sectionId: "payment-channels",
      source: { type: "MEC Official Website", name: "Finance Office Payment Guidelines", url: "/admissions/fees#payment-channels" }
    },

    // ── Admissions Process & Requirements ──
    {
      id: "kb-admissions-steps-guide",
      category: "admissions",
      subCategory: "process",
      title: "How to Apply & Admissions Process",
      content: "The MEC admission journey follows 4 easy steps: 1. Complete Online Application or submit physical form; 2. Child assessment interview (KES 2,000 assessment fee); 3. Official Admission Offer Letter & Fee Invoice; 4. Orientation & Welcome Pack issuance.",
      keywords: ["how to apply", "application process", "steps to join", "enrollment steps", "admissions 2026", "register child", "how do i join mec"],
      route: "/admissions/admission-process",
      sectionId: "admissions-timeline",
      source: { type: "MEC Official Website", name: "MEC Admissions Guide", url: "/admissions/admission-process#admissions-timeline" }
    },
    {
      id: "kb-admissions-documents-needed",
      category: "admissions",
      subCategory: "requirements",
      title: "Required Documents for Admission",
      content: "Required application documents include: 1) Copy of Learner's Birth Certificate; 2) Two passport-size photos; 3) Parents'/Guardians' National IDs or Passports; 4) Latest school report cards (past 2 terms); 5) Transfer letter & NEMIS UPI number.",
      keywords: ["documents required", "requirements", "birth certificate", "what do i need", "admission requirements", "passport photo", "nemis"],
      route: "/admissions/admission-process",
      sectionId: "required-documents",
      source: { type: "MEC Official Website", name: "Admissions Document Checklist", url: "/admissions/admission-process#required-documents" }
    },

    // ── Facilities: Swimming, Robotics, Music, Sports ──
    {
      id: "kb-facility-swimming",
      category: "facilities",
      subCategory: "swimming",
      title: "Semi-Olympic Heated Swimming Pool & Aquatics Academy",
      content: "MEC features a state-of-the-art semi-Olympic heated swimming pool with dedicated lane dividers, professional coaches, and certified safety lifeguards for competitive galas and PE lessons.",
      keywords: ["swimming", "swimming pool", "heated pool", "aquatics", "swimming lessons", "pool gala", "swimming gala", "lifeguards"],
      route: "/extra-curricular/sports/swimming",
      sectionId: "swimming-overview",
      source: { type: "MEC Official Website", name: "MEC Aquatics Complex", url: "/extra-curricular/sports/swimming" }
    },
    {
      id: "kb-facility-robotics",
      category: "facilities",
      subCategory: "robotics",
      title: "VEX Robotics & AI STEM Innovation Lab",
      content: "Our VEX Robotics & STEM Lab equips learners with hands-on electronics, autonomous coding, 3D prototyping, and international robotics league tournament preparation.",
      keywords: ["robotics", "coding", "stem", "vex robotics", "programming", "computer lab", "ai club", "innovation", "3d printing"],
      route: "/extra-curricular/clubs/computer-robotics",
      sectionId: "robotics-overview",
      source: { type: "MEC Official Website", name: "STEM Innovation Lab", url: "/extra-curricular/clubs/computer-robotics" }
    },
    {
      id: "kb-facility-music",
      category: "facilities",
      subCategory: "music",
      title: "ABRSM Music Conservatory & Academy",
      content: "The MEC Music Academy is an accredited ABRSM conservatory offering private acoustic rehearsal suites, orchestral instruments (piano, violin, brass, woodwinds), and international concert tours (e.g. Vienna Europe Tour 2026).",
      keywords: ["music", "music academy", "piano", "violin", "conservatory", "abrsm", "singing", "choir", "instruments", "orchestra", "vienna"],
      route: "/extra-curricular/clubs/music-academy",
      sectionId: "music-overview",
      source: { type: "MEC Official Website", name: "ABRSM Music Conservatory", url: "/extra-curricular/clubs/music-academy" }
    },
    {
      id: "kb-facility-soccer",
      category: "facilities",
      subCategory: "soccer",
      title: "MEC Soccer Academy & FIFA-Standard Arena",
      content: "The MEC Soccer Academy offers elite football coaching on a full-size manicured pitch with competitive inter-school leagues, agility drills, and tactical masterclasses.",
      keywords: ["soccer", "football", "pitch", "soccer academy", "football club", "soccer coach"],
      route: "/extra-curricular/sports/soccer-academy",
      sectionId: "world-class-facilities",
      source: { type: "MEC Official Website", name: "Sports & Athletics", url: "/extra-curricular/sports/soccer-academy" }
    }
  ];

  // Ingest all FAQs from faqs.js
  if (Array.isArray(faqs)) {
    faqs.forEach((f) => {
      let fullAnswer = "";
      if (typeof f.answer === "string") {
        fullAnswer = f.answer;
      } else if (f.answer && typeof f.answer === "object") {
        const straight = Array.isArray(f.answer.straight) ? f.answer.straight.join(" ") : "";
        const list = Array.isArray(f.answer.simple_list) ? f.answer.simple_list.join("; ") : "";
        fullAnswer = `${straight} ${list}`.trim();
      }

      if (fullAnswer) {
        kb.push({
          id: `kb-faq-${f.id}`,
          category: f.category?.toLowerCase() || "faq",
          title: f.question,
          content: fullAnswer,
          keywords: [f.question.toLowerCase(), ...(f.tags || [])],
          route: "/admissions/frequently-asked-questions",
          sectionId: "faq-accordion",
          source: { type: "MEC Official FAQ Knowledge Base", name: f.question, url: "/admissions/frequently-asked-questions" }
        });
      }
    });
  }

  // Ingest all activities from activities.js
  if (Array.isArray(activities)) {
    activities.forEach((act) => {
      const benefitsText = Array.isArray(act.benefits) ? act.benefits.join(", ") : "";
      const desc = `${act.description || ''} Key benefits: ${benefitsText}. Schedule: ${act.schedule || 'Regular weekly sessions'}. Lead: ${act.coach || 'Department Faculty'}.`.trim();
      kb.push({
        id: `kb-activity-${act.id}`,
        category: "activities",
        title: act.title,
        content: desc,
        keywords: [act.title.toLowerCase(), act.id.toLowerCase(), act.category || "activity", "club", "sport"],
        route: act.link || "/extra-curricular",
        sectionId: "activities-grid",
        source: { type: "MEC Co-Curricular Directory", name: act.title, url: act.link || "/extra-curricular" }
      });
    });
  }

  // Ingest leadership bios from leaders.js
  if (Array.isArray(leaders)) {
    leaders.forEach((lead) => {
      const desc = Array.isArray(lead.description) ? lead.description.join(" ") : (lead.description || "");
      kb.push({
        id: `kb-leader-${lead.id}`,
        category: "leadership",
        title: `${lead.name} — ${lead.position}`,
        content: `${lead.name} is ${lead.position} at Moi Educational Centre (${lead.tenure || lead.experience || 'Senior Leadership'}). ${desc}`,
        keywords: [lead.name.toLowerCase(), lead.position.toLowerCase(), "leader", "principal", "chairman", "board"],
        route: "/about-MEC/leadership",
        sectionId: "leadership-directory",
        source: { type: "MEC Leadership Directory", name: lead.name, url: "/about-MEC/leadership" }
      });
    });
  }

  // Ingest core values from values.js
  if (Array.isArray(values)) {
    values.forEach((v) => {
      kb.push({
        id: `kb-value-${v.id}`,
        category: "values",
        title: `Core Value: ${v.title}`,
        content: `At Moi Educational Centre, our core value of ${v.title} means: ${v.description}`,
        keywords: [v.title.toLowerCase(), "value", "core value", "virtue", "pillar"],
        route: "/about-MEC",
        sectionId: "mission-values",
        source: { type: "MEC Core Values", name: v.title, url: "/about-MEC#mission-values" }
      });
    });
  }

  return kb;
}

export const KNOWLEDGE_INDEX = buildKnowledgeRepository();

/* ─── 3. ADVANCED SEARCH & RETRIEVAL ENGINE ──────────────────────────── */

/**
 * Searches the authoritative knowledge base for matching records using tokenized semantic relevance.
 * @param {string} query - Raw/cleaned user query
 * @param {object} context - Contextual session state
 * @returns {object} Best match, score, and confidence
 */
export function queryKnowledgeBase(query, context = {}) {
  const q = query.toLowerCase().trim();
  const qTokens = q.replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(w => w.length > 1);

  let bestMatch = null;
  let highestScore = 0;

  for (const item of KNOWLEDGE_INDEX) {
    let score = 0;
    const titleLower = item.title.toLowerCase();
    const contentLower = item.content.toLowerCase();

    // 1. Exact phrase match in title or content
    if (titleLower.includes(q)) score += 80;
    if (contentLower.includes(q)) score += 50;

    // 2. Keyword matches
    for (const kw of item.keywords) {
      const kwLower = kw.toLowerCase();
      if (q === kwLower) score += 60;
      else if (q.includes(kwLower)) score += 30;
      else if (kwLower.includes(q)) score += 20;
    }

    // 3. Token frequency & overlap
    let matchedTokens = 0;
    for (const token of qTokens) {
      if (['the', 'and', 'for', 'are', 'was', 'were', 'what', 'where', 'when', 'how', 'who', 'does', 'can', 'you', 'your', 'about'].includes(token)) {
        continue;
      }
      if (titleLower.includes(token)) {
        score += 15;
        matchedTokens++;
      }
      if (contentLower.includes(token)) {
        score += 8;
        matchedTokens++;
      }
      if (item.keywords.some(k => k.toLowerCase().includes(token))) {
        score += 12;
        matchedTokens++;
      }
    }

    // 4. Token coverage bonus
    if (qTokens.length > 0 && (matchedTokens / qTokens.length) >= 0.5) {
      score += 25;
    }

    // 5. Contextual boost
    if (context.category && item.category === context.category) score += 15;

    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  // Normalized confidence (0.0 to 1.0)
  const confidence = highestScore >= 35 ? Math.min(1.0, 0.75 + (highestScore / 250)) : (highestScore / 60);

  return {
    bestMatch,
    score: highestScore,
    confidence: Math.round(confidence * 100) / 100
  };
}

/**
 * Resolves child age to suggested entry grade based on official Kenya MoE / MEC rules.
 */
export function calculateAgePlacement(age) {
  if (age < 2) {
    return {
      eligible: false,
      message: "At under 2 years of age, your child is still too young for formal school. MEC Playgroup welcomes little ones from age 2.",
      suggestedStage: "Future Playgroup (Age 2+)",
      route: "/education"
    };
  } else if (age >= 2 && age < 3) {
    return {
      eligible: true,
      suggestedStage: "Playgroup / Daycare",
      curriculum: "CBC Early Years Foundation",
      ageRange: "2–3 Years",
      message: "At age 2, your child is eligible for MEC Playgroup, which nurtures sensory exploration, motor skills, and social interaction.",
      feeRoute: "/admissions/fees#fee-row-playgroup",
      admissionRoute: "/admissions/admission-process"
    };
  } else if (age >= 3 && age < 4) {
    return {
      eligible: true,
      suggestedStage: "Reception / PP1 Preparation",
      curriculum: "CBC Early Years Foundation",
      ageRange: "3–4 Years",
      message: "At age 3, your child is ideal for Reception / Pre-Primary 1 foundational learning.",
      feeRoute: "/admissions/fees#fee-row-pp1",
      admissionRoute: "/admissions/admission-process"
    };
  } else if (age >= 4 && age < 5) {
    return {
      eligible: true,
      suggestedStage: "Pre-Primary 1 (PP1)",
      curriculum: "CBC Early Years Foundation",
      ageRange: "4–5 Years",
      message: "At age 4, your child is eligible for Pre-Primary 1 (PP1) under the CBC national curriculum framework.",
      feeRoute: "/admissions/fees#fee-row-pp1",
      admissionRoute: "/admissions/admission-process"
    };
  } else if (age >= 5 && age < 6) {
    return {
      eligible: true,
      suggestedStage: "Pre-Primary 2 (PP2) or Cambridge Year 1",
      curriculum: "CBC or British Cambridge Primary Track",
      ageRange: "5–6 Years",
      message: "At age 5, your child can enter Pre-Primary 2 (PP2) in the CBC pathway or Year 1 in the Cambridge British International Curriculum.",
      feeRoute: "/admissions/fees#fee-row-pp2",
      admissionRoute: "/admissions/admission-process"
    };
  } else if (age >= 6 && age < 9) {
    return {
      eligible: true,
      suggestedStage: "Lower Primary (Grades 1–3) or Cambridge Years 2–4",
      curriculum: "CBC Lower Primary / Cambridge Primary",
      ageRange: "6–8 Years",
      message: "For ages 6 to 8, learners join Lower Primary (Grade 1 at age 6, Grade 2 at age 7, Grade 3 at age 8) or Cambridge Years 2 to 4.",
      feeRoute: "/admissions/fees#cbe-fees-section",
      admissionRoute: "/admissions/admission-process"
    };
  } else if (age >= 9 && age < 12) {
    return {
      eligible: true,
      suggestedStage: "Upper Primary (Grades 4–6) or Cambridge Years 5–6",
      curriculum: "CBC Upper Primary / Cambridge Primary",
      ageRange: "9–11 Years",
      message: "For ages 9 to 11, learners enter Upper Primary (Grades 4, 5, or 6) with preparation for the national KPSEA assessment.",
      feeRoute: "/admissions/fees#fee-row-grade-5",
      admissionRoute: "/admissions/admission-process"
    };
  } else if (age >= 12 && age < 15) {
    return {
      eligible: true,
      suggestedStage: "Junior Secondary School (Grades 7–9)",
      curriculum: "CBC Junior School (KJSEA Assessment)",
      ageRange: "12–14 Years",
      message: "For ages 12 to 14, learners join MEC Junior School (Grades 7, 8, and 9) with broad career explorations in STEM, Arts, and Applied Sciences.",
      feeRoute: "/admissions/fees#fee-row-grade-7",
      admissionRoute: "/admissions/admission-process"
    };
  } else if (age >= 15 && age <= 18) {
    return {
      eligible: true,
      suggestedStage: "Senior High School (Grade 10)",
      curriculum: "CBC Senior School Specialized Pathways",
      ageRange: "15–18 Years",
      message: "For ages 15 to 18, learners enter Senior High School (Grade 10 Inaugural Class 2026) choosing STEM, Arts, or Social Sciences pathways.",
      feeRoute: "/admissions/fees#senior-fees-section",
      admissionRoute: "/admissions/admission-process"
    };
  } else {
    return {
      eligible: false,
      message: "For students aged 19 and above, please contact the admissions office for customized adult education or alumni programmes.",
      route: "/contact"
    };
  }
}
