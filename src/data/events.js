/* =============================================================
   MEC SCHOOL EVENTS DATA
   Moi Educational Centre — Comprehensive Events & Calendar System
   ============================================================= */

import imgCareer from "../assets/career-event1.jpg";
import imgEvents from "../assets/events2.jpg";
import imgMusic from "../assets/music-tour-2026/vienna-cathedral-interior.jpg";
import imgSports from "../assets/swimming.jpg";
import imgStem from "../assets/innovation.jpg";
import imgCambridge from "../assets/cambridge.jpg";
import imgAbout from "../assets/about1.jpg";
import imgParents from "../assets/parents.jpg";

export const eventCategories = [
  "All Events",
  "Academic & Careers",
  "Music & Performing Arts",
  "Sports & Athletics",
  "STEM & Innovation",
  "Cambridge & Global",
  "Community & PTA"
];

export const events = [
  {
    id: 1,
    slug: "MEC-Senior-School-Career-Week-2025",
    title: "MEC Senior School Career Week: Discovery, Direction & Dreams",
    category: "Academic & Careers",
    term: "Term 2",
    status: "Upcoming",
    featured: true,
    date: {
      day: "07",
      month: "JUL",
      year: "2026",
      fullDateString: "Monday, 7th July – Saturday, 12th July 2026",
      startIso: "2026-07-07T08:30:00",
      endIso: "2026-07-12T16:00:00"
    },
    time: "8:30 AM – 4:00 PM Daily",
    location: "MEC Senior School Auditorium & Career Pavilion, Nairobi West",
    audience: "Grade 8, Grade 9, Senior School, Cambridge Lower Secondary & Parents",
    image: imgCareer,
    summary: "A vibrant, week-long speaker-led career bootcamp connecting students directly with global industry pioneers, universities, aviation leaders, and biomedical institutions.",
    description: `At Moi Educational Centre Senior School, the journey toward a meaningful future doesn't wait until graduation—it begins now. Career Week is a transformative, multi-day experience designed to give learners authentic real-world insights into 21st-century careers, university admissions pathways, and emerging industries.

Through interactive keynotes, corporate masterclasses, professional mentorship circles, and hands-on workshops, students explore medicine, engineering, aviation, law, media, creative tech, and finance.`,
    highlights: [
      {
        day: "Monday, 7th July",
        theme: "Opening Keynote & Future of Work in Africa",
        details: "Official kickoff with visionary corporate leaders and career self-discovery profiling for all senior learners."
      },
      {
        day: "Tuesday, 8th July",
        theme: "Engineering, Biomedical & Health Professions",
        details: "Sessions led by biomedical engineers and faculty from AMREF International University exploring cutting-edge healthcare pathways."
      },
      {
        day: "Wednesday, 9th July",
        theme: "Aviation, Law & Financial Technology",
        details: "Immersive aviation simulation and career talks with Kenya Airways (KQ) captains, corporate legal practitioners, and KCB fintech executives."
      },
      {
        day: "Thursday, 10th July",
        theme: "Communication, Media Storytelling & Digital Arts",
        details: "Daystar University faculty masterclass on broadcasting, investigative journalism, digital media, and creative industries."
      },
      {
        day: "Friday, 11th July",
        theme: "University Pathways & Global Scholarship Guidance",
        details: "Interactive advisory sessions with Craydel, IDP, and Uniserv on Ivy League, UK Russell Group, and top regional university entry."
      },
      {
        day: "Saturday, 12th July",
        theme: "Grand Career Day Expo & Higher Education Fair",
        details: "Exhibition pavilions featuring 20+ leading universities, industry booths, one-on-one parent advisory clinics, and alumni networking."
      }
    ],
    participatingInstitutions: [
      { name: "Strathmore University", category: "University" },
      { name: "USIU Africa", category: "University" },
      { name: "AMREF International University", category: "University" },
      { name: "Daystar University", category: "University" },
      { name: "CUEA", category: "University" },
      { name: "Kabarak University", category: "University" },
      { name: "Kenya Airways (KQ)", category: "Corporate Partner" },
      { name: "KCB Bank Group", category: "Corporate Partner" },
      { name: "Craydel Higher Ed", category: "Global Agency" },
      { name: "IDP Education", category: "Global Agency" },
      { name: "Uniserv Education", category: "Global Agency" }
    ],
    contacts: {
      coordinator: "Senior School Career & Guidance Department",
      email: "careers@moieducentre.ac.ke",
      phone: "+254 706 280 170"
    }
  },
  {
    id: 2,
    slug: "MEC-Music-Academy-Europe-Tour-2026-Gala",
    title: "MEC Music Academy: Vienna & Salzburg Tour Farewell Gala",
    category: "Music & Performing Arts",
    term: "Term 1",
    status: "Upcoming",
    featured: true,
    date: {
      day: "28",
      month: "MAR",
      year: "2026",
      fullDateString: "Saturday, 28th March 2026",
      startIso: "2026-03-28T14:00:00",
      endIso: "2026-03-28T18:00:00"
    },
    time: "2:00 PM – 6:00 PM",
    location: "MEC Main Performing Arts Centre, Nairobi West",
    audience: "Entire MEC Community, Parents, Alumni & Classical Music Enthusiasts",
    image: imgMusic,
    summary: "An enchanting pre-departure orchestral and choral showcase by the MEC Music Academy before their landmark performance tour to Austria (Vienna & Salzburg).",
    description: `Celebrate the extraordinary musical prowess of our young instrumentalists and choral ensemble as they prepare for the prestigious MEC Music Academy Europe Tour 2026 in Vienna and Salzburg.

The gala concert features classical masterpieces from Mozart, Beethoven, and Vivaldi alongside rich Kenyan choral arrangements, showcasing our ABRSM-certified soloists, strings ensemble, brass section, and youth symphony.`,
    highlights: [
      {
        day: "Part I: Classical Symphony",
        theme: "European Masterpieces",
        details: "Violin concertos, flute sonatas, and grand piano recitals by Grade 5–8 ABRSM certified student virtuosos."
      },
      {
        day: "Part II: Choral & Cultural Harmony",
        theme: "East African Heritage & Hymns",
        details: "40-voice choir performing authentic African folk melodies arranged in polyphonic symphony."
      },
      {
        day: "Part III: Tour Blessing & Reception",
        theme: "Official Send-Off",
        details: "Special commissioning ceremony by the Board of Directors, followed by high tea with parents and faculty."
      }
    ],
    participatingInstitutions: [
      { name: "ABRSM London", category: "Examining Body" },
      { name: "Vienna International Youth Music Exchange", category: "Tour Partner" },
      { name: "Kenya National Music Festival", category: "Affiliate" }
    ],
    contacts: {
      coordinator: "Director of Music & Performing Arts",
      email: "music@moieducentre.ac.ke",
      phone: "+254 706 280 170"
    }
  },
  {
    id: 3,
    slug: "Annual-Inter-House-Swimming-Athletics-Gala",
    title: "40th Anniversary Inter-House Swimming & Athletics Gala",
    category: "Sports & Athletics",
    term: "Term 1",
    status: "Upcoming",
    featured: false,
    date: {
      day: "14",
      month: "FEB",
      year: "2026",
      fullDateString: "Saturday, 14th February 2026",
      startIso: "2026-02-14T08:00:00",
      endIso: "2026-02-14T16:30:00"
    },
    time: "8:00 AM – 4:30 PM",
    location: "MEC Olympic Swimming Complex & Sports Grounds",
    audience: "All Students, Parents, Alumni & House Champions",
    image: imgSports,
    summary: "The ultimate display of sportsmanship, speed, and house pride as our four historic school houses battle for championship gold in aquatic and track events.",
    description: `The Annual Inter-House Swimming and Athletics Gala is one of the most anticipated fixtures in the MEC school calendar. Bringing together learners across Early Years, Primary, Junior Secondary, and Cambridge streams, students compete for house glory in freestyle, butterfly, relays, sprints, and long-distance events.

Parents, alumni, and teachers join in spirited cheer as House Mara, House Serengeti, House Amboseli, and House Tsavo compete for the coveted 2026 Overall Champions Trophy.`,
    highlights: [
      {
        day: "Morning Session: Aquatic Heats",
        theme: "Swimming Championships",
        details: "Individual medleys, 50m sprint finals, and inter-house relay heats in our heated semi-Olympic pool."
      },
      {
        day: "Afternoon Session: Track & Field",
        theme: "Athletics & Sprints",
        details: "100m, 200m, 400m dashes, high jump, tug-of-war, and the legendary Parents & Teachers 4x100m relay."
      },
      {
        day: "Closing Ceremony",
        theme: "Trophy Presentation",
        details: "Awarding of medals, best swimmer accolades, house spirit cup, and overall house championship trophy."
      }
    ],
    participatingInstitutions: [
      { name: "Kenya Swimming Federation (KSF)", category: "Officiating" },
      { name: "MEC Sports Department", category: "Organizer" }
    ],
    contacts: {
      coordinator: "Head of Physical Education & Sports",
      email: "sports@moieducentre.ac.ke",
      phone: "+254 706 280 170"
    }
  },
  {
    id: 4,
    slug: "MEC-Robotics-AI-STEM-Innovation-Expo",
    title: "Young Innovators: Annual STEM, AI & Robotics Expo 2026",
    category: "STEM & Innovation",
    term: "Term 2",
    status: "Upcoming",
    featured: false,
    date: {
      day: "22",
      month: "MAY",
      year: "2026",
      fullDateString: "Friday, 22nd May 2026",
      startIso: "2026-05-22T09:00:00",
      endIso: "2026-05-22T15:30:00"
    },
    time: "9:00 AM – 3:30 PM",
    location: "MEC Tech Innovation Lab & Central Amphitheatre",
    audience: "Primary, Junior Secondary, Cambridge STEM teams & Tech Industry Judges",
    image: imgStem,
    summary: "Showcasing student-engineered AI models, autonomous Lego/VEX robotics, clean energy inventions, and mobile applications addressing local community challenges.",
    description: `MEC is at the forefront of hands-on digital literacy and STEM education. At the Young Innovators Expo, students present fully functional robotics prototypes, coding projects in Python/Scratch, IoT smart farm sensors, and 3D printed mechanical designs.

A panel of tech industry judges and university professors evaluate projects on creativity, technical execution, sustainable impact, and problem-solving.`,
    highlights: [
      {
        day: "Round 1: Autonomous Robotics Challenge",
        theme: "Obstacle Navigation & Line-Following",
        details: "Student-programmed bots compete in precision maze-solving and warehouse sorting tasks."
      },
      {
        day: "Round 2: App & AI Pitching",
        theme: "Smart Community Solutions",
        details: "5-minute startup pitches by student coders showcasing apps for water conservation and health alerts."
      },
      {
        day: "Round 3: Science Fair & Prototype Expo",
        theme: "Renewable Energy & Bio-Tech",
        details: "Interactive public walk-through featuring working prototypes, solar filtration kits, and hydraulic cranes."
      }
    ],
    participatingInstitutions: [
      { name: "Kenya STEM Innovation Hub", category: "Judge Panel" },
      { name: "VEX Robotics Academy", category: "Technical Partner" }
    ],
    contacts: {
      coordinator: "STEM & Robotics Innovation Lead",
      email: "stem@moieducentre.ac.ke",
      phone: "+254 706 280 170"
    }
  },
  {
    id: 5,
    slug: "Cambridge-International-Checkpoint-Parents-Workshop",
    title: "Cambridge International: Curriculum & Checkpoint Guidance Workshop",
    category: "Cambridge & Global",
    term: "Term 1",
    status: "Upcoming",
    featured: false,
    date: {
      day: "07",
      month: "FEB",
      year: "2026",
      fullDateString: "Saturday, 7th February 2026",
      startIso: "2026-02-07T09:30:00",
      endIso: "2026-02-07T12:30:00"
    },
    time: "9:30 AM – 12:30 PM",
    location: "MEC Cambridge Wing Lecture Theatre",
    audience: "Cambridge Primary & Lower Secondary Parents, Educators & Prospective Families",
    image: imgCambridge,
    summary: "An informative orientation on Cambridge Progression Tests, Checkpoint examinations, IGCSE pathway planning, and global university admissions benchmarks.",
    description: `Designed for current and prospective Cambridge pathway parents, this seminar provides comprehensive clarity on how Cambridge Assessment International Education (CAIE) benchmarks student mastery in English, Mathematics, Sciences, and Global Perspectives.

Our Cambridge Academic Coordinator and guest speakers from the British Council share actionable strategies on supporting learners at home, navigating international examinations, and charting seamless transitions into top world universities.`,
    highlights: [
      {
        day: "Session 1: Understanding Checkpoints",
        theme: "Diagnostics & Scoring",
        details: "How Cambridge diagnostic feedback informs tailored classroom teaching and individual learner growth."
      },
      {
        day: "Session 2: The IGCSE & A-Level Road Map",
        theme: "Subject Combinations",
        details: "Strategic subject selection aligned with STEM, Medicine, Law, Finance, and Humanities university degrees."
      },
      {
        day: "Session 3: Open Q&A & Teacher Consultation",
        theme: "Parent Interaction",
        details: "Direct dialogue with certified Cambridge educators and student portfolio reviews."
      }
    ],
    participatingInstitutions: [
      { name: "Cambridge Assessment International Education", category: "Curriculum Board" },
      { name: "British Council Kenya", category: "Exam Partner" }
    ],
    contacts: {
      coordinator: "Cambridge Pathway Academic Dean",
      email: "cambridge@moieducentre.ac.ke",
      phone: "+254 706 280 170"
    }
  },
  {
    id: 6,
    slug: "Term-1-Academic-Parent-Teacher-Conference",
    title: "Term 1 Parent-Teacher Academic Consultations & Open Day",
    category: "Community & PTA",
    term: "Term 1",
    status: "Upcoming",
    featured: false,
    date: {
      day: "20",
      month: "MAR",
      year: "2026",
      fullDateString: "Friday, 20th March 2026",
      startIso: "2026-03-20T08:30:00",
      endIso: "2026-03-20T16:00:00"
    },
    time: "8:30 AM – 4:00 PM",
    location: "MEC Campus Classrooms & Academic Pavilion",
    audience: "All Parents & Guardians (Early Years to High School)",
    image: imgParents,
    summary: "One-on-one comprehensive consultations with class teachers and subject educators to review termly milestone achievements, competencies, and holistic development.",
    description: `A vital pillar of academic excellence is the active partnership between home and school. The Term 1 Academic Consultations provide parents with dedicated time to review mid-term diagnostic assessments, learner portfolios, and behavioral growth with teachers.

Digital report card access is enabled through the Parent Portal, allowing parents to track competencies and set target milestones for the upcoming term.`,
    highlights: [
      {
        day: "Morning: Early Years & Lower Primary",
        theme: "Foundational Literacy & Numeracy",
        details: "In-depth portfolio review of psychomotor, reading, and numeracy milestones with class teachers."
      },
      {
        day: "Afternoon: Upper Primary, Junior & Senior School",
        theme: "Competency Assessments & Subject Insights",
        details: "Rotational consultations with specialist subject teachers and guidance counselors."
      }
    ],
    participatingInstitutions: [
      { name: "MEC Parent-Teacher Association (PTA)", category: "Community" }
    ],
    contacts: {
      coordinator: "Academic Administration Office",
      email: "academics@moieducentre.ac.ke",
      phone: "+254 706 280 170"
    }
  },
  {
    id: 7,
    slug: "MEC-Founders-Day-40th-Anniversary-Celebration",
    title: "MEC 40th Anniversary Founder's Day & Alumni Homecoming",
    category: "Community & PTA",
    term: "Term 3",
    status: "Upcoming",
    featured: false,
    date: {
      day: "10",
      month: "OCT",
      year: "2026",
      fullDateString: "Saturday, 10th October 2026",
      startIso: "2026-10-10T09:00:00",
      endIso: "2026-10-10T17:00:00"
    },
    time: "9:00 AM – 5:00 PM",
    location: "MEC Main Quadrangle & Sports Pavilion, Nairobi West",
    audience: "Entire MEC Community, Alumni, Founders, Staff & Dignitaries",
    image: imgAbout,
    summary: "A historic celebration commemorating 40 years of pioneering holistic education, academic excellence, leadership, and community impact in Kenya.",
    description: `Forty years ago, Moi Educational Centre was founded with a transformative vision: to provide premier, value-grounded, and inclusive education that empowers learners to excel nationally and globally.

Founder's Day 2026 brings together four decades of alumni, current students, visionary leadership, and long-serving faculty for thanksgiving, campus retrospectives, alumni sports matches, and the unveiling of the 2030 Campus Masterplan.`,
    highlights: [
      {
        day: "Morning: Thanksgiving & Ceremony",
        theme: "40 Years of Blessing & Vision",
        details: "Ceremonial addresses by the Board of Management, Chairman, alumni leaders, and distinguished national guests."
      },
      {
        day: "Midday: Campus Time Capsule & Gallery",
        theme: "Historical Retrospective",
        details: "Walkthrough of photographic archives from 1986 to 2026 and burial of the 2026 Student Time Capsule."
      },
      {
        day: "Afternoon: Alumni Football & Gala Feast",
        theme: "Homecoming Reunion",
        details: "Alumni vs Staff friendly football match, live student choir performances, and community banquet."
      }
    ],
    participatingInstitutions: [
      { name: "MEC Alumni Association", category: "Alumni" },
      { name: "MEC Board of Management", category: "Leadership" }
    ],
    contacts: {
      coordinator: "Founder's Day Secretariat",
      email: "anniversary@moieducentre.ac.ke",
      phone: "+254 706 280 170"
    }
  },
  {
    id: 8,
    slug: "East-Africa-Model-United-Nations-Debate-Summit",
    title: "East Africa Model United Nations & Parliamentary Debate Summit",
    category: "Academic & Careers",
    term: "Term 1",
    status: "Upcoming",
    featured: false,
    date: {
      day: "27",
      month: "FEB",
      year: "2026",
      fullDateString: "Friday, 27th February – Saturday, 28th February 2026",
      startIso: "2026-02-27T08:00:00",
      endIso: "2026-02-28T16:00:00"
    },
    time: "8:00 AM – 4:00 PM Daily",
    location: "MEC Conference Centre & UN Simulation Chambers",
    audience: "Junior Secondary, Cambridge & Senior School Delegates from East Africa",
    image: imgEvents,
    summary: "Student diplomats deliberate on climate action, sustainable urban growth, and regional security in a realistic simulated UN General Assembly.",
    description: `The MEC Model United Nations and Debate Club hosts delegates from top regional international schools to debate, draft resolutions, and develop high-level diplomatic negotiation skills.

Delegates represent designated UN member states, defending geopolitical positions and building consensus on global policy challenges.`,
    highlights: [
      {
        day: "Day 1: Committee Sessions",
        theme: "Policy Drafting & Caucus",
        details: "Debates across General Assembly, Human Rights Council, and UNEP Environmental Committee."
      },
      {
        day: "Day 2: Plenary & Resolution Voting",
        theme: "Passing Global Accords",
        details: "Full delegation assembly, crisis simulation challenge, and best delegate awards ceremony."
      }
    ],
    participatingInstitutions: [
      { name: "UNON Nairobi (United Nations Office at Nairobi)", category: "Advisory" },
      { name: "East Africa Model United Nations (EAMUN)", category: "Network" }
    ],
    contacts: {
      coordinator: "Debate & Model UN Master in Charge",
      email: "mun@moieducentre.ac.ke",
      phone: "+254 706 280 170"
    }
  }
];
