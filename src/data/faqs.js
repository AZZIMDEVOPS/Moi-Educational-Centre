/* =============================================================
   MEC ADMISSIONS FAQ DATA
   Moi Educational Centre (CBC, 8-4-4 & Cambridge Curricula)
   ============================================================= */

export const faqCategories = [
  "All",
  "Admissions",
  "Applications",
  "Fees & Payments",
  "Curriculum",
  "Cambridge",
  "School Life",
  "Transport",
  "Boarding",
  "General"
];

export const faqs = [
  // ─── 1. ADMISSIONS ──────────────────────────────────────────
  {
    id: 101,
    category: "Admissions",
    question: "When is the admissions period at Moi Educational Centre?",
    answer: {
      straight: [
        "Admissions at Moi Educational Centre are open throughout the year on a rolling basis, subject to class capacity and vacancy availability.",
        "We recommend applying early for the main January intake, as spaces in Playgroup, Pre-Primary 1, Grade 1, Grade 7 (Junior Secondary), and Cambridge Year 1/Year 2 fill up quickly."
      ],
      simple_list: [
        "Main Intake: January (Term 1)",
        "Mid-Year Intakes: May (Term 2) and September (Term 3) subject to availability",
        "Cambridge Pathway: Rolling admissions throughout the academic year"
      ]
    },
    tags: ["intake", "deadline", "term", "start", "dates", "timing", "when"]
  },
  {
    id: 102,
    category: "Admissions",
    question: "Is there an entrance assessment or interview?",
    answer: {
      straight: [
        "Yes. Once your online or physical application is received and reviewed, the Admissions Office will invite the applicant and parents for a friendly assessment and family interview on campus.",
        "The assessment helps our academic faculty understand your child's developmental readiness, literacy, and numeracy foundation to ensure optimal class placement."
      ],
      simple_list: [
        "Early Years (Playgroup - PP2): Informal developmental and social readiness interaction",
        "Primary & Junior Secondary (Grades 1-9): Age-appropriate literacy and numeracy diagnostic assessment",
        "Cambridge Pathway: Diagnostic aptitude and English/Mathematics evaluation",
        "Parent Consultation: Opportunity to discuss curriculum choice, student talents, and pastoral care"
      ]
    },
    tags: ["assessment", "exam", "test", "interview", "admission test", "evaluation"]
  },
  {
    id: 103,
    category: "Admissions",
    question: "Can prospective parents book a physical campus tour before applying?",
    answer: {
      straight: [
        "Yes, absolutely. We warmly welcome prospective families to experience our vibrant 15-acre campus in Nairobi West.",
        "Guided tours are conducted on weekdays between 9:00 AM and 3:00 PM, and on select Saturday mornings by appointment. You will visit our modern classrooms, science and robotics labs, Olympic-sized swimming complex, library, and performing arts studios."
      ],
      extra: "To schedule your visit, call our Admissions Team on +254 706 280 170 or send a request via WhatsApp."
    },
    tags: ["visit", "tour", "campus", "open day", "walkthrough", "see school"]
  },
  {
    id: 104,
    category: "Admissions",
    question: "What is the age requirement for Early Years and Grade 1?",
    answer: {
      straight: [
        "In accordance with Ministry of Education CBC guidelines and Cambridge International standards, admission ages are structured as follows:"
      ],
      simple_list: [
        "Crèche / Playgroup: 2 - 3 years old",
        "Pre-Primary 1 (PP1): 4 years old by start of academic year",
        "Pre-Primary 2 (PP2): 5 years old by start of academic year",
        "Grade 1 / Cambridge Year 1: 6 years old by start of academic year"
      ]
    },
    tags: ["age", "cutoff", "birthday", "early years", "playgroup", "grade 1", "pp1", "pp2"]
  },

  // ─── 2. APPLICATIONS ────────────────────────────────────────
  {
    id: 201,
    category: "Applications",
    question: "How do I apply for admission online?",
    answer: {
      straight: [
        "Applying to Moi Educational Centre is simple and can be completed online in three straightforward steps:",
        "1. Complete the digital Admission Application Form on our website with learner and parent details.",
        "2. Upload the required documents (birth certificate, passport photos, previous report cards).",
        "3. Submit the form. Our Admissions Team will confirm receipt within 24–48 hours and guide you through the assessment schedule."
      ],
      simple_list: [
        "Online Application: Available 24/7 via the MEC Admissions Portal",
        "Physical Application: Application packages can also be collected from the Admissions Office at Nairobi West",
        "Application Fee: Payable via M-Pesa or direct bank transfer upon submission"
      ]
    },
    tags: ["online", "apply", "form", "steps", "procedure", "how to apply", "registration"]
  },
  {
    id: 202,
    category: "Applications",
    question: "What documents are required for the application process?",
    answer: {
      straight: [
        "To ensure swift processing of your child's application, please provide clear copies of the following documents:"
      ],
      simple_list: [
        "Copy of child's Birth Certificate (or Passport for international applicants)",
        "2 recent passport-size colour photographs of the child",
        "Copies of Parents' / Guardians' National ID cards or Passports",
        "Previous academic progress reports / report cards (past 2 terms or past academic year)",
        "Transfer letter and NEMIS / UPI number (for students transferring from Kenyan schools)",
        "Child's immunization card / health history summary"
      ],
      extra: "You can upload these documents directly through our online application form or email them to admissions@moieducentre.ac.ke."
    },
    tags: ["documents", "requirements", "birth certificate", "passport", "checklist", "papers"]
  },
  {
    id: 203,
    category: "Applications",
    question: "Can international students or families relocating to Kenya apply?",
    answer: {
      straight: [
        "Yes, Moi Educational Centre welcomes students from across Africa and around the globe. Our dual pathway (Kenyan CBC and Cambridge International) makes MEC an ideal transition environment for expatriate and returning diaspora families.",
        "Our Admissions Team assists relocating families with equivalency assessment, curriculum orientation, and documentation."
      ],
      simple_list: [
        "Valid Student Pass / Dependent Visa documentation is required upon enrollment",
        "Academic transcripts in languages other than English must be accompanied by certified English translations",
        "Cambridge International learners transition smoothly with equivalent UK/global grade levels"
      ]
    },
    tags: ["international", "foreign", "relocation", "expat", "diaspora", "overseas", "visa"]
  },

  // ─── 3. FEES & PAYMENTS ─────────────────────────────────────
  {
    id: 301,
    category: "Fees & Payments",
    question: "How much is the school fee at Moi Educational Centre?",
    answer: {
      straight: [
        "School fees at MEC are competitive and transparent, structured based on the learner's curriculum pathway (CBC or Cambridge) and educational level (Pre-Primary, Primary, Junior Secondary, High School).",
        "Tuition includes core classroom instruction, standard teaching materials, access to science and ICT computer laboratories, library resources, on-site nutritious hot lunches, and primary co-curricular activities.",
        "You can download the comprehensive 2025/2026 fee schedule for your specific grade level directly from our Resources page."
      ]
    },
    tags: ["cost", "tuition", "pricing", "structure", "how much", "school fees", "charges"]
  },
  {
    id: 302,
    category: "Fees & Payments",
    question: "Are there additional charges beyond regular tuition?",
    answer: {
      straight: [
        "MEC maintains high fee transparency. The primary additional optional services include:"
      ],
      simple_list: [
        "Transport Service: Distance-based zone fees for learners using our school bus fleet",
        "Specialist Co-Curricular Academies: Professional academies such as Music Academy (ABRSM), Swimming Squad, Robotics Lab, and Taekwondo may have modest activity fees",
        "International Examination Registration: Cambridge Checkpoint, IGCSE, and ABRSM London exam candidate registration fees",
        "School Uniform: Purchased directly from our designated on-campus uniform store"
      ],
      extra: "Nutritious on-site hot lunch is already included in standard tuition fees for all day scholars."
    },
    tags: ["extra", "hidden costs", "transport fee", "uniform", "lunch", "meals", "optional"]
  },
  {
    id: 303,
    category: "Fees & Payments",
    question: "What payment methods are accepted for school fees?",
    answer: {
      straight: [
        "We provide secure, convenient payment options for local and international families:"
      ],
      simple_list: [
        "M-Pesa Paybill: Direct Paybill integration via the Parent Portal with instant automated receipting",
        "Direct Bank Deposit / EFT: Official MEC school accounts at major tier-one commercial banks",
        "RTGS & International Wire Transfers: Supported for international transfers with designated SWIFT coordinates",
        "Online Parent Portal: Debit / Credit card processing via secure portal checkout"
      ],
      extra: "Cash is not accepted on campus for security reasons. Official receipts are issued automatically upon confirmation of bank deposit or M-Pesa transaction."
    },
    tags: ["mpesa", "paybill", "bank", "card", "payment methods", "receipt", "transfer"]
  },
  {
    id: 304,
    category: "Fees & Payments",
    question: "Are flexible fee payment plans or sibling discounts available?",
    answer: {
      straight: [
        "Termly fees are due prior to the commencement of each academic term. For families requiring structured installments, payment plans can be arranged with the School Bursar and Accounts Office upon approval.",
        "We also offer structured family support considerations for families with three or more children concurrently enrolled at Moi Educational Centre."
      ]
    },
    tags: ["discount", "installments", "payment plan", "siblings", "bursar", "assistance"]
  },

  // ─── 4. CURRICULUM ──────────────────────────────────────────
  {
    id: 401,
    category: "Curriculum",
    question: "What curriculum pathways does Moi Educational Centre offer?",
    answer: {
      straight: [
        "Moi Educational Centre offers two robust, world-class academic pathways tailored to provide holistic, rigorous learning:",
        "1. The Kenyan Competency-Based Curriculum (CBC): Offered from Early Years (Crèche, PP1, PP2) through Lower Primary, Upper Primary, and Junior Secondary (Grades 7, 8, and 9), transitioning to Senior School.",
        "2. The Cambridge International Curriculum: An internationally recognized British curriculum pathway offering Cambridge Primary, Lower Secondary, IGCSE, and Advanced Levels (A-Levels)."
      ],
      list: [
        {
          id: 4011,
          title: "Competency-Based Curriculum (CBC)",
          explanations: [
            "Emphasizes 7 core competencies: Critical Thinking, Communication, Collaboration, Creativity, Digital Literacy, Citizenship, and Self-Efficacy.",
            "Integrates continuous formative assessment and national summative evaluations."
          ]
        },
        {
          id: 4012,
          title: "Cambridge International Pathway",
          explanations: [
            "Global benchmarking administered in partnership with Cambridge Assessment International Education (CAIE).",
            "Fosters deep subject knowledge, analytical rigor, and direct pathways to top global universities."
          ]
        }
      ]
    },
    tags: ["cbc", "curriculum", "pathway", "cambridge", "8-4-4", "programs", "academic"]
  },
  {
    id: 402,
    category: "Curriculum",
    question: "What subjects are offered across the different school sections?",
    answer: {
      straight: [
        "Our curriculum is rich, multidisciplinary, and developmentally aligned:"
      ],
      simple_list: [
        "Early Years: Language & Literacy, Mathematical Concepts, Environmental Activities, Psychomotor & Creative Arts, Religious Education",
        "Primary School (Grades 1-6): English, Kiswahili, Mathematics, Science & Technology, Social Studies, Agriculture & Nutrition, Creative Arts, Computer Science & French/German options",
        "Junior Secondary (Grades 7-9): Integrated Science, Health Education, Pre-Technical Studies, Visual Arts, Performing Arts, Home Science, Computer Science, Business Studies, Foreign Languages",
        "Cambridge Pathway: English Language & Literature, Mathematics, Combined Sciences (Physics, Chemistry, Biology), Global Perspectives, ICT/Coding, Art & Design, French"
      ]
    },
    tags: ["subjects", "classes", "courses", "languages", "science", "math", "ict"]
  },
  {
    id: 403,
    category: "Curriculum",
    question: "How does the school integrate STEM, Coding and Robotics?",
    answer: {
      straight: [
        "MEC is a pioneer in digital learning and applied STEM education in East Africa. Every student from Grade 1 upwards participates in weekly hands-on technology sessions in our purpose-built Innovation Labs.",
        "Our curriculum spans visual block programming (Scratch), Python programming, web fundamentals, 3D printing concepts, and autonomous VEX/Lego robotics kits."
      ],
      extra: "MEC students regularly participate in national robotics challenges, coding hackathons, and international STEM competitions."
    },
    tags: ["stem", "robotics", "coding", "computers", "ict", "technology", "ai"]
  },

  // ─── 5. CAMBRIDGE ───────────────────────────────────────────
  {
    id: 501,
    category: "Cambridge",
    question: "How is the Cambridge International Curriculum structured at MEC?",
    answer: {
      straight: [
        "MEC's Cambridge section is designed to British International School standards, providing world-class teaching with low student-to-teacher ratios, interactive multimedia classrooms, and British curriculum certified educators.",
        "Learners follow Cambridge Primary (Stages 1–6), Cambridge Lower Secondary (Stages 7–9), leading to IGCSE and A-Levels.",
        "The curriculum is benchmarked with annual Cambridge Progression Tests and Cambridge Checkpoint examinations."
      ]
    },
    tags: ["cambridge", "british curriculum", "igcse", "a levels", "stages", "international"]
  },
  {
    id: 502,
    category: "Cambridge",
    question: "Can a student transition between the CBC and Cambridge pathways at MEC?",
    answer: {
      straight: [
        "Yes, transitions between pathways are possible at designated key entry points (such as Early Years to Year 1, or Grade 6 to Cambridge Lower Secondary Year 7), subject to academic readiness evaluation and space availability.",
        "Our Academic Guidance and Pastoral teams work closely with parents to assess the best pathway aligned with the child's strengths and long-term university ambitions."
      ]
    },
    tags: ["switch", "transfer", "transition", "cbc to cambridge", "change curriculum"]
  },
  {
    id: 503,
    category: "Cambridge",
    question: "What are the advantages of studying Cambridge at Moi Educational Centre?",
    answer: {
      straight: [
        "The Cambridge pathway at MEC combines global academic prestige with MEC's renowned values-based culture, expansive sports facilities, and holistic co-curricular offerings:"
      ],
      simple_list: [
        "Direct qualification for top universities in the UK, US, Canada, Australia, and worldwide",
        "Strong emphasis on inquiry-based learning, research skills, and critical thinking",
        "Access to MEC's 15-acre campus, Olympic-size pool, music academy, and sports facilities",
        "International exchange programs, World Scholar's Cup tournaments, and Europe Music Tours"
      ]
    },
    tags: ["cambridge advantages", "benefits", "why cambridge", "university entry"]
  },

  // ─── 6. SCHOOL LIFE ─────────────────────────────────────────
  {
    id: 601,
    category: "School Life",
    question: "What extracurricular activities, sports, and clubs are available?",
    answer: {
      straight: [
        "Moi Educational Centre offers an extraordinary breadth of over 30 co-curricular activities to develop well-rounded, confident learners:"
      ],
      simple_list: [
        "Sports & Athletics: Swimming Academy, Football Academy, Basketball, Lawn Tennis, Hockey, Martial Arts (Taekwondo), Track & Field, Quad Skating, Gymnastics",
        "Performing Arts & Music: MEC Music Academy (ABRSM London Certified, Piano, Violin, Brass, Choral Ensemble, Europe Tour 2026), Drama Club, Cultural Dance",
        "STEM & Leadership: Coding & Robotics Lab, Debate Club & Model UN, World Scholar's Cup, Legacy HQ Student Government",
        "Scouting & Movements: St. John Ambulance Cadets, Scouts Association, Girl Guides, Red Cross Youth",
        "Creative & Practical Arts: Fine Art & Design, Culinary Arts & Home Science, Chess Club"
      ]
    },
    tags: ["clubs", "sports", "extracurricular", "swimming", "music", "football", "activities"]
  },
  {
    id: 602,
    category: "School Life",
    question: "Are nutritious meals and hot lunches provided at school?",
    answer: {
      straight: [
        "Yes. All learners at Moi Educational Centre enjoy freshly prepared, hot, balanced lunches and mid-morning snacks prepared daily in our modern on-site catering facility by professional culinary staff.",
        "Our meal plans are developed in consultation with child nutritionists to support physical energy, focus, and healthy growth. Vegetarian and medically documented dietary considerations are accommodated with prior arrangement."
      ],
      extra: "Hot lunch is fully integrated into the school fees for all day scholars."
    },
    tags: ["lunch", "food", "meals", "nutrition", "diet", "cafeteria", "canteen", "snacks"]
  },
  {
    id: 603,
    category: "School Life",
    question: "What is the school policy on uniforms?",
    answer: {
      straight: [
        "MEC students wear smart, dignified school uniforms that foster school pride, equality, and discipline.",
        "Different uniform combinations are worn on regular academic days, physical education / sports days, and official school ceremonies.",
        "Official uniforms, blazers, sweaters, tracksuits, and swimwear are available exclusively through our on-campus Uniform Store."
      ]
    },
    tags: ["uniform", "dress code", "clothes", "blazer", "pe kit", "tracksuit"]
  },
  {
    id: 604,
    category: "School Life",
    question: "How does the school ensure student safety and security on campus?",
    answer: {
      straight: [
        "Child safety is paramount at Moi Educational Centre. We operate a rigorous, multi-layered security and child safeguarding protocol across our gated campus:"
      ],
      simple_list: [
        "24/7 armed perimeter security personnel and comprehensive HD CCTV surveillance",
        "Biometric and authorized RFID parent/guardian pick-up and drop-off verification",
        "Fully equipped on-site Medical Clinic staffed full-time by certified pediatric nurses",
        "Regular fire, emergency, and evacuation safety drills with trained first aid marshals",
        "Strict Child Protection & Safeguarding policies enforced across all faculty and staff",
        "Enclosed, supervised playgrounds and play areas tailored for early years safety"
      ]
    },
    tags: ["safety", "security", "clinic", "nurse", "safeguarding", "cctv", "protection"]
  },
  {
    id: 605,
    category: "School Life",
    question: "What are the daily school hours?",
    answer: {
      straight: [
        "The standard school operating hours are structured to balance academic instruction, breaks, and co-curricular pursuits:"
      ],
      simple_list: [
        "Crèche & Playgroup: 8:00 AM – 12:30 PM (Optional extended day care till 3:00 PM)",
        "Pre-Primary 1 & 2: 8:00 AM – 2:30 PM",
        "Primary School (Grades 1-6 / Cambridge Years 1-6): 7:30 AM – 3:30 PM",
        "Junior Secondary & High School: 7:30 AM – 4:00 PM",
        "Co-Curricular & Sports Training: 3:30 PM – 5:00 PM (Monday to Thursday)",
        "Saturday Sports & Club Academies: 9:00 AM – 12:30 PM"
      ]
    },
    tags: ["hours", "time", "schedule", "opening", "closing", "day timing", "pickup time"]
  },

  // ─── 7. TRANSPORT ───────────────────────────────────────────
  {
    id: 701,
    category: "Transport",
    question: "Does Moi Educational Centre provide school transport services?",
    answer: {
      straight: [
        "Yes, MEC operates a modern, well-maintained fleet of dedicated school buses and vans providing safe, punctual, door-to-door and central-point transport for learners across Nairobi and surrounding environs."
      ],
      simple_list: [
        "Certified professional drivers and dedicated on-board female bus assistants on every vehicle",
        "Real-time GPS tracking and route monitoring integrated with the Parent Portal",
        "Speed governors, individual safety seatbelts, and comprehensive vehicular safety compliance",
        "Strict morning pickup and afternoon drop-off safety handover protocols"
      ],
      extra: "Transport routes cover Nairobi West, South B/C, Langata, Karen, Kilimani, Kileleshwa, Lavington, Westlands, Ngong Road, Upper Hill, Parklands, Syokimau, and Mombasa Road."
    },
    tags: ["bus", "transport", "van", "routes", "pickup", "dropoff", "commute", "travel"]
  },
  {
    id: 702,
    category: "Transport",
    question: "How are transport routes and bus fees calculated?",
    answer: {
      straight: [
        "Transport charges are tiered into geographical zones based on distance from the school campus. You can choose one-way (morning only or evening only) or two-way daily transport.",
        "A complete list of mapped estate routes and current termly transport charges is available for download on our Resources & Fees page."
      ]
    },
    tags: ["bus fee", "zones", "transport cost", "estate route", "fare"]
  },

  // ─── 8. BOARDING ────────────────────────────────────────────
  {
    id: 801,
    category: "Boarding",
    question: "Does Moi Educational Centre offer boarding facilities?",
    answer: {
      straight: [
        "No. Moi Educational Centre is exclusively a premier Day School. All learners attend classes during the day and return home to their families in the evening.",
        "Our day school philosophy emphasizes close daily parental involvement, strong family bonds, and a healthy balance between school and home life."
      ],
      simple_list: [
        "Full Day School Structure for all levels (Playgroup to High School)",
        "Hot breakfast snacks and comprehensive nutritious lunches provided on campus",
        "Extended after-school clubs, supervised study, and sports academies available until 5:00 PM"
      ]
    },
    tags: ["boarding", "hostel", "dormitory", "day school", "accommodation", "sleep"]
  },
  {
    id: 802,
    category: "Boarding",
    question: "Is there after-school extended care for younger children?",
    answer: {
      straight: [
        "Yes. For working parents with children in Crèche and Pre-Primary, we provide structured after-school extended care with supervised indoor play, rest areas, and healthy afternoon snacks until 4:00 PM."
      ]
    },
    tags: ["daycare", "after school", "extended care", "creche", "late pickup"]
  },

  // ─── 9. GENERAL ─────────────────────────────────────────────
  {
    id: 901,
    category: "General",
    question: "Where is Moi Educational Centre located?",
    answer: {
      straight: [
        "Moi Educational Centre is located in Nairobi West, along Mai Mahiu Road, just off Langata Road in Nairobi, Kenya.",
        "Our secure 15-acre green campus is easily accessible from the CBD, Upper Hill, Southern Bypass, and the greater Nairobi metropolitan area."
      ]
    },
    tags: ["location", "address", "map", "where", "nairobi west", "directions", "contact"]
  },
  {
    id: 902,
    category: "General",
    question: "How do parents stay informed about their child's academic progress?",
    answer: {
      straight: [
        "We believe that a strong partnership between parents and teachers is key to every child's academic success. We maintain continuous, transparent communication through:"
      ],
      simple_list: [
        "MEC Digital Parent Portal: Real-time access to attendance, termly fee statements, report cards, and homework",
        "Termly Parent-Teacher Consultations (PTC) and Academic Open Days",
        "Instant SMS alerts, official WhatsApp announcements, and digital newsletters",
        "Personalized student diaries and pastoral communication channels with Class Teachers"
      ]
    },
    tags: ["portal", "reports", "grades", "communication", "parent teacher", "updates"]
  },
  {
    id: 903,
    category: "General",
    question: "Are parents actively involved in school community activities?",
    answer: {
      straight: [
        "Yes, immensely! We have a vibrant, engaged Parent-Teacher Association (PTA) that actively collaborates with school leadership.",
        "Parents participate in school sports galas, cultural days, career mentorship sessions, music concerts, charity outreach initiatives, and prayer fellowships throughout the academic year."
      ]
    },
    tags: ["pta", "parent involvement", "community", "volunteering", "events"]
  }
];