// =============================================================
// MEC DIGITAL NEWSROOM — Comprehensive Editorial Articles Data
// Verified authentic Moi Educational Centre stories, achievements,
// global educational tours, STEM breakthroughs, and community updates.
// =============================================================

export const MEC_CATEGORIES = [
  { id: "all", label: "All Stories", icon: "📰" },
  { id: "achievements", label: "Achievements", icon: "🏆" },
  { id: "sports", label: "Sports & Athletics", icon: "⚽" },
  { id: "arts", label: "Arts & Global Tours", icon: "🎭" },
  { id: "academics", label: "Academics & Curriculum", icon: "📚" },
  { id: "stem", label: "STEM & Robotics", icon: "🤖" },
  { id: "campus", label: "Campus Life & Alumni", icon: "🏛️" },
  { id: "events", label: "Events & Announcements", icon: "📅" },
  { id: "admissions", label: "Admissions", icon: "🎓" }
];

export const MEC_NEWS_ARTICLES = [
  {
    id: "vienna-music-tour-2026",
    slug: "mec-music-conservatory-vienna-tour-2026",
    title: "MEC Music Conservatory Vienna Europe Tour: Choral & Orchestral Mastery in St. Stephen's Cathedral",
    headline: "MEC Music Conservatory Takes Center Stage in Austria's Historic Cathedrals",
    subtitle: "Over 45 student choristers and instrumentalists represent Kenya in an international musical exchange across Vienna and Salzburg.",
    excerpt: "Witness the exceptional choral and orchestral mastery of Moi Educational Centre musicians performing sacred and classical repertoire in Vienna's historic St. Stephen's Cathedral and Mozarteum University.",
    category: "Arts & Global Tours",
    categoryType: "arts",
    badge: "GLOBAL TOUR 2026",
    badgeType: "achievement",
    featured: true,
    priority: 10,
    isBreaking: true,
    date: "2026-08-28",
    formattedDate: "28 Aug 2026",
    readTime: "4 min read",
    author: "Music Conservatory Faculty",
    authorRole: "Director of Performing Arts",
    image: "/assets/gallery/DSC_4265.JPG",
    imageCaption: "MEC Senior Choir performing under the grand vaulted nave of St. Stephen's Cathedral in Vienna, Austria.",
    tags: ["Music Conservatory", "Vienna Tour 2026", "ABRSM London", "Global Stage", "Orchestra", "Choir"],
    views: "3.4k",
    shares: 428,
    leadParagraph: "In an unforgettable milestone for Moi Educational Centre's performing arts department, 45 student musicians and choristers have concluded a transformative ten-day classical performance tour of Austria. Performing in iconic venues including St. Stephen's Cathedral in Vienna and the historic Mozarteum in Salzburg, our learners demonstrated world-class musical discipline and proud Kenyan artistic heritage.",
    content: [
      {
        type: "paragraph",
        text: "The 2026 Vienna Europe Tour represents the pinnacle of MEC’s commitment to holistic, international-standard arts education. Under the dedicated direction of our ABRSM-certified faculty, students spent eight months mastering demanding choral arrangements ranging from Handel’s Messiah and Mozart’s Ave Verum Corpus to traditional East African polyphonic hymns arranged specifically for full chamber orchestra and four-part vocal harmony."
      },
      {
        type: "pullquote",
        quote: "Hearing our learners' voices soar through the magnificent arches of Vienna's cathedrals was deeply moving. It proved that African classical musicians belong on the world's most prestigious stages.",
        author: "Director of Performing Arts, Moi Educational Centre"
      },
      {
        type: "heading",
        text: "Masterclasses at the Vienna State Opera Conservatory"
      },
      {
        type: "paragraph",
        text: "Beyond public concerts, our students participated in exclusive masterclasses with distinguished voice and instrumental professors at the Vienna State Opera Conservatory. Learners received specialized coaching in tone production, German diction, and chamber ensemble dynamics, gaining feedback that will enrich MEC’s music academy for years to come."
      },
      {
        type: "keytakeaways",
        title: "Tour Highlights at a Glance",
        items: [
          "Performed two sold-out concerts at St. Stephen's Cathedral and Minoritenkirche in Vienna.",
          "Completed advanced vocal & string masterclasses at Salzburg Mozarteum University.",
          "Received official commendation from the Kenyan Embassy in Austria for cultural diplomacy.",
          "Showcased traditional Kenyan choral repertoire alongside Western classical masterpieces."
        ]
      },
      {
        type: "paragraph",
        text: "As Moi Educational Centre celebrates 40 years of excellence, global expeditions like the Vienna Tour exemplify our vision of developing confident, well-rounded global citizens who excel in academics, leadership, and artistic expression."
      }
    ],
    relatedSlugs: ["mec-soccer-academy-edinburgh-youth-championship", "future-ready-learners-vex-robotics-stem-lab", "national-aquatics-gala-mec-swim-squad-triumph"]
  },
  {
    id: "edinburgh-soccer-tour-2026",
    slug: "mec-soccer-academy-edinburgh-youth-championship",
    title: "MEC Soccer Academy Shines at the Edinburgh International Youth Championship in Scotland",
    headline: "Junior and Senior Squads Showcase Tactical Excellence in European Tournament",
    subtitle: "MEC footballers return with silver and bronze silverware after competing against top UK and European academy academies.",
    excerpt: "Our junior and senior football squads represented Kenya with distinction, showcasing tactical discipline, high-press football, and exemplary sportsmanship in high-stakes European fixtures.",
    category: "Sports & Athletics",
    categoryType: "sports",
    badge: "INTERNATIONAL VICTORY",
    badgeType: "achievement",
    featured: true,
    priority: 9,
    isBreaking: false,
    date: "2026-07-15",
    formattedDate: "15 Jul 2026",
    readTime: "3 min read",
    author: "MEC Sports Department",
    authorRole: "Head Coach, Football Academy",
    image: "/assets/gallery/DSC_4232.JPG",
    imageCaption: "MEC Under-15 squad celebrating victory on the field following their penalty shootout triumph in Edinburgh.",
    tags: ["Soccer Academy", "Sports Tour", "Edinburgh 2026", "Athletics", "Champions"],
    views: "2.8k",
    shares: 312,
    leadParagraph: "Following a grueling four-round tournament in Scotland, the Moi Educational Centre Football Academy squad has returned to Nairobi holding second place in the Under-15 category and third place in the Under-13 division at the prestigious Edinburgh Youth Cup.",
    content: [
      {
        type: "paragraph",
        text: "Facing formidable academy teams from Scotland, England, and Northern Europe, our student-athletes demonstrated resilience, physical fitness, and tactical intelligence. Coached under MEC’s long-term athlete development model, the players adapted seamlessly to cold conditions and synthetic European turf."
      },
      {
        type: "heading",
        text: "Character, Discipline, and Teamwork"
      },
      {
        type: "paragraph",
        text: "While the medals and trophies are impressive, the coaches were most proud of the boys' exemplary conduct on and off the pitch. Tournament officials and host schools praised MEC players for their humility, sportsmanship, and respect for match officials."
      },
      {
        type: "keytakeaways",
        title: "Tournament Statistics",
        items: [
          "18 matches played across 6 intense tournament days.",
          "Under-15 squad conceded only 4 goals throughout the competition.",
          "MEC captain named Best Defensive Midfielder of the Tournament.",
          "Over 300 parents and alumni streamed matches live on the MEC sports portal."
        ]
      }
    ],
    relatedSlugs: ["national-aquatics-gala-mec-swim-squad-triumph", "vienna-music-tour-2026", "future-ready-learners-vex-robotics-stem-lab"]
  },
  {
    id: "vex-robotics-ai-stem-lab",
    slug: "future-ready-learners-vex-robotics-stem-lab",
    title: "Future-Ready Learners: Inside the VEX Robotics & STEM Innovation Lab at Senior School",
    headline: "Coding, Microcontrollers, and AI Algorithms Empowering the Next Generation of Engineers",
    subtitle: "MEC students prepare for the East African VEX Robotics Championship with autonomous robotic builds.",
    excerpt: "Exploring how learners design autonomous robotics, program microcontrollers in C++ and Python, and develop AI algorithms preparing them for global technology and engineering careers.",
    category: "STEM & Robotics",
    categoryType: "stem",
    badge: "STEM INNOVATION",
    badgeType: "featured",
    featured: true,
    priority: 8,
    isBreaking: false,
    date: "2026-06-20",
    formattedDate: "20 Jun 2026",
    readTime: "5 min read",
    author: "STEM & Computing Faculty",
    authorRole: "Lead Robotics Instructor",
    image: "/assets/gallery/DSC_4289.JPG",
    imageCaption: "MEC Senior School robotics engineers fine-tuning sensor calibration on their autonomous competition robot.",
    tags: ["Robotics", "AI", "STEM Education", "Coding", "Innovation", "Senior School"],
    views: "2.1k",
    shares: 245,
    leadParagraph: "Inside the newly expanded STEM Innovation Suite at Moi Educational Centre Senior School, the hum of 3D printers and the click of precision gears signal a quiet revolution. Here, learners as young as Grade 7 are building, coding, and debugging autonomous robotic systems.",
    content: [
      {
        type: "paragraph",
        text: "Under MEC’s integrated STEM curriculum, robotics is not treated as a peripheral club; it is a foundational component of modern computational thinking. Students learn CAD design, electronic circuitry, motor control, and sensor telemetry using industry-standard tools."
      },
      {
        type: "pullquote",
        quote: "Our goal is not just to teach children how to use technology, but to empower them to invent technology that solves real problems in Kenya and across Africa.",
        author: "Head of STEM & Innovation, MEC Senior School"
      },
      {
        type: "paragraph",
        text: "Currently, two MEC teams are preparing to represent Nairobi at the 2026 East African VEX Robotics Invitational. Their custom-built robots feature ultrasonic collision avoidance and AI computer-vision targeting to complete complex sorting maneuvers in under 60 seconds."
      }
    ],
    relatedSlugs: ["bridging-cbc-and-cambridge-curriculum-pathways", "vienna-music-tour-2026", "edinburgh-soccer-tour-2026"]
  },
  {
    id: "national-aquatics-gala-2026",
    slug: "national-aquatics-gala-mec-swim-squad-triumph",
    title: "National Aquatics Gala: MEC Swim Squad Triumphs in Semi-Olympic Heated Pool",
    headline: "Record-Breaking Times and 24 Medals at the Nairobi Junior Aquatics Championship",
    subtitle: "MEC's state-of-the-art heated pool facility enables year-round training excellence for emerging champions.",
    excerpt: "Highlighting championship times and sportsmanship as our junior and senior swimmers compete against top national academies in backstroke, butterfly, and medley relays.",
    category: "Sports & Athletics",
    categoryType: "sports",
    badge: "MEC ACHIEVEMENT",
    badgeType: "achievement",
    featured: false,
    priority: 7,
    isBreaking: false,
    date: "2026-05-18",
    formattedDate: "18 May 2026",
    readTime: "3 min read",
    author: "Aquatics Coaching Staff",
    authorRole: "Head Swimming Coach",
    image: "/assets/gallery/DSC_4136.JPG",
    imageCaption: "MEC junior swimmers during warm-ups at the MEC semi-Olympic heated aquatics center.",
    tags: ["Swimming", "Aquatics", "Sports Gala", "Medals", "Athletics"],
    views: "1.9k",
    shares: 180,
    leadParagraph: "The Moi Educational Centre Swim Squad dominated the medal tally at the Nairobi Junior Aquatics Gala, clinching 12 Gold, 8 Silver, and 4 Bronze medals across freestyle, breaststroke, backstroke, and 4x50m medley relays.",
    content: [
      {
        type: "paragraph",
        text: "With year-round access to MEC's heated semi-Olympic swimming pool, our athletes train under certified swimming coaches who emphasize stroke efficiency, lung capacity, and mental discipline."
      },
      {
        type: "paragraph",
        text: "Three MEC swimmers set new personal bests qualifying them for the upcoming Kenya Swimming Federation National Championships in Mombasa."
      }
    ],
    relatedSlugs: ["edinburgh-soccer-tour-2026", "vienna-music-tour-2026", "future-ready-learners-vex-robotics-stem-lab"]
  },
  {
    id: "cambridge-and-cbc-dual-pathways",
    slug: "bridging-cbc-and-cambridge-curriculum-pathways",
    title: "Bridging CBC and Cambridge International: Dual Curriculum Pathways at Moi Educational Centre",
    headline: "Personalized Academic Excellence: Navigating National and Global Curriculum Choices",
    subtitle: "An educator's guide to how MEC empowers learners through Kenya's CBC and the British Cambridge International curriculum.",
    excerpt: "A comprehensive guide on how MEC nurtures student strengths through the Kenyan CBC system and the British Cambridge International curriculum from Early Years to Senior School.",
    category: "Academics & Curriculum",
    categoryType: "academics",
    badge: "CURRICULUM INSIGHT",
    badgeType: "featured",
    featured: false,
    priority: 7,
    isBreaking: false,
    date: "2026-04-12",
    formattedDate: "12 Apr 2026",
    readTime: "6 min read",
    author: "Academic Directorship",
    authorRole: "Dean of Studies",
    image: "/assets/gallery/DSC_4145.JPG",
    imageCaption: "Collaborative learning inside a modern Cambridge Year 4 classroom at Moi Educational Centre.",
    tags: ["Cambridge", "CBC", "Curriculum", "Academics", "Pre-Primary", "Junior School", "Senior School"],
    views: "4.2k",
    shares: 512,
    leadParagraph: "At Moi Educational Centre, we believe that no two children learn identically. For four decades, our pedagogical philosophy has centered on personalized learning that equips students for global competitiveness while grounding them in Kenyan national values.",
    content: [
      {
        type: "paragraph",
        text: "Today, MEC proudly offers two premier academic pathways: Kenya’s Competency-Based Curriculum (CBC) from Pre-Primary to Senior School, and the Cambridge International curriculum from Year 1 through IGCSE and A-Levels."
      },
      {
        type: "heading",
        text: "Key Distinctions and Synergies"
      },
      {
        type: "paragraph",
        text: "While CBC emphasizes practical competencies, continuous assessment, and community service learning, Cambridge International introduces early subject specialization and standardized global benchmarking."
      },
      {
        type: "keytakeaways",
        title: "Why Parents Choose MEC Pathways",
        items: [
          "Seamless transition support between Kenyan CBC and British Cambridge tracks.",
          "Over 100+ highly trained educators certified in CBC and Cambridge pedagogy.",
          "World-class science laboratories, libraries, and multimedia technology suites.",
          "Consistently outstanding performance in national assessments and international examinations."
        ]
      }
    ],
    relatedSlugs: ["power-of-play-in-early-childhood-education", "future-ready-learners-vex-robotics-stem-lab", "alumni-silver-jubilee-reunion-40-years"]
  },
  {
    id: "power-of-play-early-years",
    slug: "the-power-of-play-in-early-education",
    title: "The Power of Play in Early Education: Fostering Curiosity in Pre-Primary Learners",
    headline: "Why Play-Based Learning Builds Stronger Cognitive Foundations in Early Childhood",
    subtitle: "Inside MEC's joyful Kindergarten and Pre-Primary environment where curiosity transforms into lifelong learning.",
    excerpt: "Discover how structured and imaginative play in the Early Years Foundation Stage accelerates language acquisition, mathematical concepts, emotional resilience, and social collaboration.",
    category: "Academics & Curriculum",
    categoryType: "academics",
    badge: "EARLY YEARS",
    badgeType: "standard",
    featured: false,
    priority: 6,
    isBreaking: false,
    date: "2026-03-24",
    formattedDate: "24 Mar 2026",
    readTime: "4 min read",
    author: "Early Childhood Department",
    authorRole: "Head of Pre-Primary School",
    image: "/assets/gallery/DSC_4140.JPG",
    imageCaption: "Pre-primary learners engaging in interactive sensory play and spatial block building at MEC.",
    tags: ["Pre-Primary", "Early Years", "Kindergarten", "Play-Based Learning", "Child Development"],
    views: "2.3k",
    shares: 198,
    leadParagraph: "At Moi Educational Centre, we believe that play is not a break from learning — it is learning itself. In our Pre-Primary and Kindergarten wings, vibrant learning centers and sensory stations invite young learners to explore, build, question, and discover.",
    content: [
      {
        type: "paragraph",
        text: "Research in developmental cognitive psychology confirms that play stimulates neural connectivity, strengthens executive functioning, and fosters natural problem-solving abilities."
      },
      {
        type: "paragraph",
        text: "From math manipulatives and role-play corners to outdoor motor obstacle courses, our early childhood educators facilitate experiences that build confidence, joy, and emotional intelligence."
      }
    ],
    relatedSlugs: ["bridging-cbc-and-cambridge-curriculum-pathways", "how-we-keep-your-children-safe-health-and-safety", "alumni-silver-jubilee-reunion-40-years"]
  },
  {
    id: "alumni-silver-jubilee-40-years",
    slug: "class-of-1998-silver-jubilee-reunion-40-years-excellence",
    title: "Class of 1998 Silver Jubilee Reunion: 40 Years of Excellence, Mentorship & Impact",
    headline: "Distinguished Alumni Across Medicine, Law, Tech, and Public Leadership Reunite at MEC",
    subtitle: "Alumni launch the 2026 Student Mentorship Endowment and Career Clinics to inspire current learners.",
    excerpt: "Alumni across medical, technological, legal, and public sectors reunited on campus to celebrate four decades of excellence and inaugurate the 2026 career mentorship endowment for senior students.",
    category: "Campus Life & Alumni",
    categoryType: "campus",
    badge: "MEC AT 40",
    badgeType: "heritage",
    featured: false,
    priority: 6,
    isBreaking: false,
    date: "2026-02-14",
    formattedDate: "14 Feb 2026",
    readTime: "4 min read",
    author: "MEC Alumni Association",
    authorRole: "President, Alumni Network",
    image: "/assets/gallery/Alumni 11 - Class of 98.jpg",
    imageCaption: "Members of the Class of 1998 gathering at the main administration square for their 25-year silver jubilee.",
    tags: ["Alumni", "40 Years", "Mentorship", "Endowment", "Heritage", "Celebration"],
    views: "3.1k",
    shares: 410,
    leadParagraph: "Over 150 alumni from the Class of 1998 returned to Moi Educational Centre to commemorate their Silver Jubilee in a vibrant celebration of friendship, heritage, and shared gratitude for the foundation they received at MEC.",
    content: [
      {
        type: "paragraph",
        text: "Alumni including leading neurosurgeons, tech entrepreneurs, judges, and corporate executives toured the renovated campus, marveling at the new science complexes, robotics labs, and heated aquatics center."
      },
      {
        type: "pullquote",
        quote: "MEC did not merely teach us how to pass exams; it taught us integrity, self-discipline, and compassion. Those values have guided every step of our professional lives.",
        author: "Alumni Representative, Class of 1998"
      },
      {
        type: "paragraph",
        text: "The reunion concluded with the official launch of the MEC Alumni Mentorship Network, pairing Grade 10 to 12 students with industry mentors for career guidance and internship opportunities."
      }
    ],
    relatedSlugs: ["career-day-2026-ai-and-future-industries", "how-we-keep-your-children-safe-health-and-safety", "bridging-cbc-and-cambridge-curriculum-pathways"]
  },
  {
    id: "career-day-ai-2026",
    slug: "get-ready-for-career-day-2025-at-Moi-Educational-Center-High-School",
    title: "Career Day 2026 at Senior School: Embracing AI, Innovation and 21st Century Skills",
    headline: "Unlocking Dreams: Leading Universities and Tech Executives Guide MEC Students",
    subtitle: "Over 35 international universities and corporate leaders conduct interactive workshops for future leaders.",
    excerpt: "At Moi Educational Centre High School, the journey to a meaningful career starts now. Industry leaders, university deans, and tech pioneers gather on campus to guide learners into future-ready industries.",
    category: "Events & Announcements",
    categoryType: "events",
    badge: "UPCOMING EVENT",
    badgeType: "event",
    featured: false,
    priority: 5,
    isBreaking: false,
    date: "2026-01-20",
    formattedDate: "20 Jan 2026",
    readTime: "4 min read",
    author: "Senior School Careers Office",
    authorRole: "Head of Careers & University Guidance",
    image: "/assets/gallery/DSC_4253.JPG",
    imageCaption: "High School students participating in a dynamic career discovery workshop at the MEC Multipurpose Hall.",
    tags: ["Career Day", "AI & Innovation", "University Guidance", "Senior School", "Future Careers"],
    views: "2.7k",
    shares: 230,
    leadParagraph: "Have you ever wondered what the job market will look like in ten years? At Moi Educational Centre, we believe career preparation doesn’t begin after graduation — it begins right now.",
    content: [
      {
        type: "paragraph",
        text: "This year’s Career Day theme, 'Embracing AI and Innovation in the 21st Century,' connects our learners directly with leading software architects, medical specialists, financial analysts, and university admissions officers."
      },
      {
        type: "keytakeaways",
        title: "What Students & Parents Can Expect",
        items: [
          "Interactive breakout sessions with leaders from tech, medicine, aviation, and law.",
          "Direct consultations with university representatives from Kenya, UK, US, and Canada.",
          "Practical portfolio reviews, CV clinics, and scholarship advisory booths."
        ]
      }
    ],
    relatedSlugs: ["alumni-silver-jubilee-40-years", "future-ready-learners-vex-robotics-stem-lab", "bridging-cbc-and-cambridge-curriculum-pathways"]
  },
  {
    id: "health-and-safety-protocols-360",
    slug: "how-we-keep-your-children-safe-inside-MECs-health-and-safety-protocols",
    title: "How We Keep Your Children Safe: Inside MEC's 360° Health, Safety & Wellness Protocols",
    headline: "Proactive Security, Onsite Medical Clinic, and Restorative Student Well-being",
    subtitle: "Discover the multi-layered systems that ensure every child learns in a secure, nurturing environment.",
    excerpt: "At Moi Educational Centre, safety is not just a policy — it is a daily commitment. Take a detailed look inside our 24/7 security perimeter, onsite medical clinic, emergency readiness, and student wellness support.",
    category: "Campus Life & Alumni",
    categoryType: "campus",
    badge: "CAMPUS PROTOCOLS",
    badgeType: "standard",
    featured: false,
    priority: 5,
    isBreaking: false,
    date: "2026-01-10",
    formattedDate: "10 Jan 2026",
    readTime: "5 min read",
    author: "Campus Operations & Safety Board",
    authorRole: "Head of Campus Security & Health",
    image: "/assets/gallery/DSC_4249.JPG",
    imageCaption: "Trained security and wellness teams maintaining a safe, welcoming campus environment at MEC.",
    tags: ["Campus Safety", "Health Protocols", "Student Wellness", "Medical Clinic", "School Security"],
    views: "2.4k",
    shares: 165,
    leadParagraph: "At Moi Educational Centre (MEC), safety is not just a policy — it’s a commitment. We believe that a safe child is a thriving child, and we take a 360° approach to safety that is proactive, holistic, and deeply embedded into every part of school life.",
    content: [
      {
        type: "paragraph",
        text: "From biometric access controls and CCTV monitoring to emergency simulation drills, our campus security operates with vigilance so that students and teachers can focus entirely on learning."
      },
      {
        type: "paragraph",
        text: "Furthermore, our full-time registered medical clinicians manage preventative health audits, chronic condition care, and immediate first aid in a fully equipped onsite dispensary."
      }
    ],
    relatedSlugs: ["the-power-of-play-in-early-education", "bridging-cbc-and-cambridge-curriculum-pathways", "class-of-1998-silver-jubilee-reunion-40-years-excellence"]
  }
];

// Helper functions for easy querying
export const getAllStories = () => MEC_NEWS_ARTICLES;

export const getStoryBySlug = (slugOrTitle) => {
  if (!slugOrTitle) return null;
  const cleanParam = decodeURIComponent(slugOrTitle).toLowerCase().trim();
  return MEC_NEWS_ARTICLES.find(
    (s) =>
      s.slug.toLowerCase() === cleanParam ||
      s.id.toLowerCase() === cleanParam ||
      s.title.toLowerCase() === cleanParam ||
      encodeURIComponent(s.title).toLowerCase() === cleanParam
  ) || null;
};

export const getFeaturedStory = () => {
  return (
    MEC_NEWS_ARTICLES.find((s) => s.featured && s.priority >= 9) ||
    MEC_NEWS_ARTICLES[0]
  );
};

export const getRelatedStories = (currentSlug, limit = 3) => {
  const current = getStoryBySlug(currentSlug);
  if (!current) return MEC_NEWS_ARTICLES.slice(0, limit);
  
  const related = MEC_NEWS_ARTICLES.filter(
    (s) => s.slug !== current.slug && (s.categoryType === current.categoryType || current.relatedSlugs?.includes(s.slug) || current.relatedSlugs?.includes(s.id))
  );

  if (related.length < limit) {
    const others = MEC_NEWS_ARTICLES.filter((s) => s.slug !== current.slug && !related.includes(s));
    return [...related, ...others].slice(0, limit);
  }

  return related.slice(0, limit);
};
