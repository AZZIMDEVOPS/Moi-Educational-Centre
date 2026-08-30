/**
 * MEC Intelligent AI Navigation Registry
 * Centralized, allowlisted catalog of all valid website pages, sections,
 * semantic anchor IDs, keywords, and spotlight metadata.
 */

export const SITE_NAVIGATION_REGISTRY = {
  // ─── 1. ADMISSIONS & ENROLLMENT ─────────────────────────────────────
  admissions: {
    title: "Admissions & Enrollment 2026",
    path: "/admissions/admission-process",
    category: "Admissions",
    keywords: ["admissions", "apply", "enroll", "joining", "application form", "entry requirements", "intake 2026", "how to join"],
    sections: {
      hero: { id: "admissions-hero", title: "Admissions Overview", description: "2026 Admissions Open for Playgroup to Grade 10 & Cambridge" },
      steps: { id: "admissions-timeline", title: "Step-by-Step Process", description: "4-step journey from application to induction" },
      pathways: { id: "curriculum-choice", title: "CBC vs Cambridge Advisor", description: "Compare national CBC and Cambridge International tracks" },
      form: { id: "application-form", title: "Online Application Form", description: "Direct admission application form" },
      requirements: { id: "required-documents", title: "Required Documentation", description: "Birth certificate, passport photos, past academic reports" }
    }
  },

  // ─── 2. SCHOOL FEES & PAYMENTS ──────────────────────────────────────
  fees: {
    title: "School Fees & Fee Structures 2026",
    path: "/admissions/fees",
    category: "Finance",
    keywords: ["fees", "school fees", "tuition", "how much", "cost", "charges", "payment", "mpesa", "bank account", "term fees", "annual fee", "price", "calculator"],
    sections: {
      cbe: { id: "cbe-fees-section", title: "CBC Primary & Junior School Fees", description: "Playgroup, Reception, PP1–PP2, Grade 1–9 tuition schedules" },
      senior: { id: "senior-fees-section", title: "Senior School Grade 10 Fees", description: "Senior Secondary inaugural class tuition and electives" },
      cambridge: { id: "cambridge-fees-section", title: "Cambridge International Fees", description: "British curriculum Year 1 to Year 6 tuition" },
      calculator: { id: "fee-calculator", title: "Interactive Fee Calculator", description: "Custom estimator including term fees, caution deposit, and books" },
      payments: { id: "payment-channels", title: "Payment Channels & Bank Accounts", description: "M-Pesa Paybill, Standard Chartered & ABSA bank details" },
      // Exact grade anchors
      playgroup: { id: "fee-row-playgroup", title: "Playgroup Fees", description: "KES 40,000 / term (KES 116,000 annual)" },
      pp1: { id: "fee-row-pp1", title: "PP1 Fees", description: "KES 42,000 / term (KES 122,000 annual)" },
      pp2: { id: "fee-row-pp2", title: "PP2 Fees", description: "KES 42,000 / term (KES 122,000 annual)" },
      grade1: { id: "fee-row-grade-1", title: "Grade 1 Fees", description: "KES 46,000 / term (KES 134,000 annual)" },
      grade2: { id: "fee-row-grade-2", title: "Grade 2 Fees", description: "KES 46,000 / term (KES 134,000 annual)" },
      grade3: { id: "fee-row-grade-3", title: "Grade 3 Fees", description: "KES 46,000 / term (KES 134,000 annual)" },
      grade4: { id: "fee-row-grade-4", title: "Grade 4 Fees", description: "KES 50,000 / term (KES 146,000 annual)" },
      grade5: { id: "fee-row-grade-5", title: "Grade 5 Fees", description: "KES 50,000 / term (KES 146,000 annual)" },
      grade6: { id: "fee-row-grade-6", title: "Grade 6 Fees", description: "KES 50,000 / term (KES 146,000 annual)" },
      grade7: { id: "fee-row-grade-7", title: "Grade 7 Fees", description: "KES 64,000 / term (KES 187,000 annual)" },
      grade8: { id: "fee-row-grade-8", title: "Grade 8 Fees", description: "KES 64,000 / term (KES 187,000 annual)" },
      grade9: { id: "fee-row-grade-9", title: "Grade 9 Fees", description: "KES 64,000 / term (KES 187,000 annual)" },
      grade10: { id: "fee-row-grade-10", title: "Senior School Grade 10 Fees", description: "KES 100,000 / term 1 & 2, KES 75,000 / term 3 (KES 275,000 annual)" }
    }
  },

  // ─── 3. ACADEMIC CURRICULA & PROGRAMMES ─────────────────────────────
  education: {
    title: "Educational Pathways & Academic Structure",
    path: "/education",
    category: "Academics",
    keywords: ["curriculum", "cbc", "cambridge", "academics", "programmes", "pathways", "learning", "early years", "primary", "junior school", "senior school"],
    sections: {
      pathway: { id: "learning-pathway", title: "Continuous Learning Journey", description: "From Early Years through Senior High School" },
      preprimary: { id: "pathway-pre-primary", title: "Pre-Primary Foundation", description: "Playgroup, Reception, PP1 & PP2 (Ages 2–5)" },
      lowerprimary: { id: "pathway-lower-primary", title: "Lower Primary (Grades 1–3)", description: "Foundational literacy, numeracy, and social skills" },
      upperprimary: { id: "pathway-upper-primary", title: "Upper Primary (Grades 4–6)", description: "Inquiry-based STEM, arts, languages and agriculture" },
      juniorschool: { id: "pathway-junior-school", title: "Junior School (Grades 7–9)", description: "Exploratory career pathways and KJSEA evaluation" },
      seniorschool: { id: "pathway-senior-school", title: "Senior School (Grades 10–12)", description: "STEM, Arts, and Social Sciences specialized pathways" },
      cambridge: { id: "pathway-cambridge", title: "Cambridge International (Years 1–6)", description: "British International Primary Curriculum" }
    }
  },

  cambridgeDetails: {
    title: "British Cambridge International Curriculum",
    path: "/education/cambridge-system",
    category: "Academics",
    keywords: ["british curriculum", "cambridge", "cie", "igcse", "uk curriculum", "international curriculum", "year 1", "year 2", "year 3", "year 4", "year 5", "year 6", "cambridge primary"],
    sections: {
      overview: { id: "cambridge-overview", title: "Cambridge Primary System", description: "Globally standardized British curriculum benchmarked by Cambridge" },
      curriculum: { id: "cambridge-subjects", title: "Subjects & Assessment", description: "English, Mathematics, Science, Global Perspectives and ICT" }
    }
  },

  // ─── 4. CONTACT, LOCATION & CAMPUS MAP ──────────────────────────────
  contact: {
    title: "Contact Us & Campus Location",
    path: "/contact",
    category: "Contact",
    keywords: ["contact", "where is mec", "location", "address", "map", "directions", "phone number", "email", "nairobi west", "mai mahiu road", "visit us", "tour", "book tour"],
    sections: {
      cards: { id: "contact-departments", title: "Department Contacts", description: "Senior School, Primary, Finance and Administration direct numbers" },
      map: { id: "location", title: "Campus Map & GPS Location", description: "Mai Mahiu Road, City Estate, Nairobi West, Nairobi, Kenya" },
      form: { id: "contact-form-section", title: "Send an Inquiry Message", description: "Direct school contact form" },
      seniorContact: { id: "senior-school-contact", title: "Senior School Admissions", description: "0797 339 900 / highschool@moieducentre.ac.ke" },
      primaryContact: { id: "primary-school-contact", title: "Primary & Junior Admissions", description: "0702 090 213 / info@moieducentre.ac.ke" },
      financeContact: { id: "finance-office-contact", title: "Accounts & Finance", description: "0113 693 624 / accounts@moieducentre.ac.ke" }
    }
  },

  // ─── 5. CO-CURRICULAR, SPORTS & CLUBS ───────────────────────────────
  extraCurricular: {
    title: "Extra-Curricular Activities & Sports Academies",
    path: "/extra-curricular",
    category: "Student Life",
    keywords: ["activities", "sports", "swimming", "swimming pool", "soccer", "football", "music academy", "robotics", "stem", "coding", "chess", "drama", "arts", "clubs", "scouts", "karate", "taekwondo", "skating", "basketball"],
    sections: {
      hero: { id: "ec-hero", title: "Beyond the Classroom", description: "15+ sports academies, 50+ clubs and international delegations" },
      directory: { id: "activities-grid", title: "Activity Directory", description: "Searchable catalog of sports, STEM clubs, arts, and movements" },
      facilities: { id: "world-class-facilities", title: "World-Class Infrastructure", description: "Semi-Olympic heated pool, FIFA-standard pitch, ABRSM conservatory, robotics arena" }
    }
  },

  swimming: {
    title: "Swimming Academy & Heated Aquatics Complex",
    path: "/extra-curricular/sports/swimming",
    category: "Sports",
    keywords: ["swimming", "pool", "heated pool", "aquatics", "swimming gala", "lifeguards"],
    sections: {
      pool: { id: "swimming-overview", title: "Semi-Olympic Heated Pool", description: "Professional coaching, safety lifeguards, and national championship training" }
    }
  },

  music: {
    title: "ABRSM Music Conservatory & Academy",
    path: "/extra-curricular/clubs/music-academy",
    category: "Arts",
    keywords: ["music", "music academy", "piano", "violin", "orchestra", "conservatory", "abrsm", "vienna tour", "singing", "choir"],
    sections: {
      conservatory: { id: "music-overview", title: "Music Academy & Conservatory", description: "ABRSM graded certifications, acoustic suites, and international performance tours" }
    }
  },

  robotics: {
    title: "VEX Robotics, Coding & STEM Innovation Lab",
    path: "/extra-curricular/clubs/computer-robotics",
    category: "Technology",
    keywords: ["robotics", "coding", "stem", "vex robotics", "programming", "3d printing", "innovation", "computers", "ict"],
    sections: {
      lab: { id: "robotics-overview", title: "Robotics & STEM Lab", description: "Autonomous robotics arenas, coding workshops, and AI projects" }
    }
  },

  // ─── 6. ABOUT MEC & LEADERSHIP ──────────────────────────────────────
  about: {
    title: "About Moi Educational Centre",
    path: "/about-MEC",
    category: "About",
    keywords: ["about", "history", "founded", "1986", "40 years", "mission", "vision", "values", "motto", "leadership", "board", "rector", "principal"],
    sections: {
      history: { id: "about-hero", title: "Celebrating 40 Years", description: "Shaping futures and inspiring generations since 1986" },
      bento: { id: "about-features", title: "Campus Pillars", description: "STEM robotics, legacy of excellence, dual curriculum, master educators" },
      mission: { id: "mission-values", title: "Mission, Vision & Core Values", description: "Academic rigor, ethical integrity, innovation and holistic development" }
    }
  },

  leadership: {
    title: "Executive & Academic Leadership",
    path: "/about-MEC/leadership",
    category: "About",
    keywords: ["leadership", "board of management", "rector", "principal", "headteacher", "management", "administration"],
    sections: {
      directory: { id: "leadership-directory", title: "Leadership Directory", description: "Experienced educators, administrators, and pastoral leaders" }
    }
  },

  // ─── 7. DOWNLOADS & RESOURCES ───────────────────────────────────────
  resources: {
    title: "Downloads & Admissions Resources",
    path: "/admissions/resources",
    category: "Admissions",
    keywords: ["downloads", "resources", "pdf", "fee structure pdf", "application form pdf", "forms", "calendar", "prospectus", "brochure", "documents"],
    sections: {
      files: { id: "downloadable-resources", title: "Document Directory", description: "Downloadable application forms, fee schedules, and curriculum brochures" }
    }
  },

  faqs: {
    title: "Frequently Asked Questions",
    path: "/admissions/frequently-asked-questions",
    category: "Admissions",
    keywords: ["faq", "questions", "answers", "help", "common questions"],
    sections: {
      faqList: { id: "faq-accordion", title: "All FAQs", description: "Admissions, fees, curriculum, transport, and student life answers" }
    }
  },

  // ─── 8. PARENTS HUB & TRANSPORT ─────────────────────────────────────
  parentsHub: {
    title: "Parents & Guardians Hub",
    path: "/parents-hub",
    category: "Community",
    keywords: ["parents", "parent portal", "bus", "transport", "route", "announcements", "calendar", "meetings", "consultation"],
    sections: {
      announcements: { id: "parent-announcements", title: "School Announcements", description: "Important dates, holiday breaks, and consultation days" },
      paymentMethods: { id: "parent-payment-options", title: "Payment Options", description: "M-Pesa, Bank Transfer, and Card payments" }
    }
  },

  // ─── 9. ALUMNI COMMUNITY ───────────────────────────────────────────
  alumni: {
    title: "MEC Alumni Network",
    path: "/alumni",
    category: "Community",
    keywords: ["alumni", "graduates", "success stories", "networking", "reunions", "mentorship"],
    sections: {
      stories: { id: "alumni-stories", title: "Success Stories", description: "Celebrating 40 years of global alumni achievements" }
    }
  },

  // ─── 10. SCHOOL EVENTS & NEWS ───────────────────────────────────────
  events: {
    title: "School Events & Calendar",
    path: "/about-MEC/school-events",
    category: "News & Events",
    keywords: ["events", "calendar", "upcoming events", "sports day", "music festival", "open day", "term dates"],
    sections: {
      calendar: { id: "events-calendar", title: "Upcoming Events", description: "Term dates, gala dinners, sports days, and student performances" }
    }
  },

  news: {
    title: "News & Media Updates",
    path: "/news-and-updates",
    category: "News & Events",
    keywords: ["news", "updates", "articles", "press", "announcements"],
    sections: {
      articles: { id: "news-articles", title: "Latest News", description: "Recent stories, achievements, and campus updates" }
    }
  },

  // ─── 11. CAREERS & VACANCIES ────────────────────────────────────────
  vacancies: {
    title: "Careers & Job Vacancies at MEC",
    path: "/about-MEC/vacancies",
    category: "About",
    keywords: ["careers", "vacancies", "jobs", "hiring", "employment", "open positions", "recruitment", "teacher jobs", "work at mec", "apply for job", "recruitment@moieducentre.ac.ke"],
    sections: {
      openings: { id: "open-positions", title: "Open Positions", description: "Current career openings in teaching, finance, and campus operations" }
    }
  },

  // ─── 12. PRE-SCHOOL & EARLY YEARS ──────────────────────────────────
  preschool: {
    title: "Pre-School & Early Years CBC Programme",
    path: "/education/pre-school",
    category: "Academics",
    keywords: ["preschool", "pre-school", "pre-primary", "early years", "playgroup", "creche", "crèche", "reception", "pp1", "pp2", "kindergarten", "daycare"],
    sections: {
      explorer: { id: "preschool-explorer", title: "Early Years Explorer", description: "Crèche (2 yrs), Reception (3 yrs), PP1 (4 yrs), PP2 (5 yrs)" },
      pillars: { id: "preschool-pillars", title: "Pre-School Excellence Pillars", description: "Nurturing environment, phonics, play-based discovery, and swimming" }
    }
  },

  // ─── 13. BOARD CHAIRMAN ─────────────────────────────────────────────
  chairman: {
    title: "Word from Our Chairman — Mr. Paul K. Chemng'orem",
    path: "/about-MEC/word-from-our-chairman",
    category: "About",
    keywords: ["chairman", "board chairman", "paul chemng'orem", "chairman message", "governance"],
    sections: {
      message: { id: "chairman-message", title: "Chairman's Address", description: "Strategic leadership vision and 40-year milestone message" }
    }
  }
};

/**
 * Helper to look up an allowlisted target route and section anchor.
 * @param {string} pageKey - Key in SITE_NAVIGATION_REGISTRY
 * @param {string} sectionKey - Section key inside page object
 * @returns {object|null} Navigation target
 */
export function getNavigationTarget(pageKey, sectionKey = null) {
  const page = SITE_NAVIGATION_REGISTRY[pageKey];
  if (!page) return null;

  let sectionId = null;
  let sectionTitle = null;

  if (sectionKey && page.sections && page.sections[sectionKey]) {
    sectionId = page.sections[sectionKey].id;
    sectionTitle = page.sections[sectionKey].title;
  }

  const fullUrl = sectionId ? `${page.path}#${sectionId}` : page.path;

  return {
    pageTitle: page.title,
    path: page.path,
    sectionId,
    sectionTitle,
    fullUrl,
    category: page.category
  };
}
