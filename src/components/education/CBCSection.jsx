import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { cbc } from "../../data/education";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FaGraduationCap, 
  FaChevronRight, 
  FaAtom, 
  FaUsers, 
  FaLaptopCode, 
  FaCheckCircle, 
  FaBookOpen, 
  FaStar,
  FaCalendarAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaDownload,
  FaHeart,
  FaPalette,
  FaSwimmer,
  FaAppleAlt,
  FaShieldAlt,
  FaSmileBeam,
  FaArrowRight,
  FaClock
} from "react-icons/fa";
import SEO from "../common/SEO";
import imgKids from "../../assets/kids.jpg";
import "../../css/programme-detail.css";

gsap.registerPlugin(ScrollTrigger);

/* ─── Pre-School Specific Interactive Data ─────────────────── */
const PRESCHOOL_LEVELS = [
  {
    id: 'creche',
    title: 'Crèche',
    age: '2 Years Old',
    badge: 'Foundational Sensory Awakening',
    icon: '🧸',
    summary: 'A gentle, loving home-away-from-home where toddlers build emotional security, sensory perception, gross-motor coordination, and basic social interaction through joyful play.',
    milestones: [
      'Sensory-motor coordination and texture exploration',
      'Early receptive vocabulary and speech babbling',
      'Gentle toilet training guidance and hygiene habits',
      'Emotional soothing, self-regulation, and peer bonding',
      'Fine-motor grasp using large soft blocks and sensory bins'
    ],
    ratio: '1 Educator to 5 Toddlers (with full-time caring nannies)',
    scheduleHighlight: 'Sensory water play, singing rhymes, healthy fruit snack & nap pods'
  },
  {
    id: 'reception',
    title: 'Reception',
    age: '3 Years Old',
    badge: 'Social & Verbal Awakening',
    icon: '🎨',
    summary: 'Fostering expressive communication, budding independence, and imagination through structured group games, creative arts, and active outdoor physical discovery.',
    milestones: [
      'Sentence formulation and active listening during story time',
      'Color recognition, pattern sorting, and shape identification',
      'Self-feeding, coat-hanging, and tidying up routines',
      'Creative expression with non-toxic paints and playdough',
      'Gross-motor confidence on mini balance beams and climbing turf'
    ],
    ratio: '1 Educator to 8 Learners',
    scheduleHighlight: 'Storybook library corner, sandpit engineering, music & dance rhythm'
  },
  {
    id: 'pp1',
    title: 'Pre-Primary 1 (PP1)',
    age: '4 Years Old',
    badge: 'Early Literacy & Numeracy',
    icon: '✏️',
    summary: 'Laying robust foundational competencies in Jolly Phonics, pre-writing strokes, number quantities, and natural science inquiry under Kenya’s CBC framework.',
    milestones: [
      'Jolly Phonics letter sound recognition (Phonemes a–z)',
      'Correct pencil tripod grip and pre-writing tracing confidence',
      'Number sense, 1-to-1 counting, and basic grouping',
      'Environmental curiosity, weather awareness, and nature walks',
      'Junior heated splash pool water confidence with certified instructors'
    ],
    ratio: '1 Educator to 10 Learners',
    scheduleHighlight: 'Phonics stations, hands-on math counters, weekly splash pool'
  },
  {
    id: 'pp2',
    title: 'Pre-Primary 2 (PP2)',
    age: '5 Years Old',
    badge: 'Grade 1 Transition & Leadership',
    icon: '🌟',
    summary: 'Cultivating fluent reading readiness, mathematical problem-solving, digital curiosity, and social confidence for an effortless transition into Grade 1 Lower Primary.',
    milestones: [
      'Early sentence reading, sight-word decoding, and comprehension',
      'Single-digit addition, subtraction concepts, and spatial geometry',
      'Expressive bilingual communication in English and Kiswahili',
      'Introduction to touch-screen educational learning modules',
      'Confident transition readiness for the Grade 1 CBC curriculum'
    ],
    ratio: '1 Educator to 12 Learners',
    scheduleHighlight: 'STEAM discovery projects, reader clubs, junior leadership & graduation'
  }
];

const PRESCHOOL_PILLARS = [
  {
    icon: <FaSmileBeam />,
    title: "Play-Based Experiential Pedagogy",
    desc: "Hands-on discovery through tactile manipulatives, imaginative role-play, and inquiry centers that turn natural curiosity into joyful learning."
  },
  {
    icon: <FaBookOpen />,
    title: "Jolly Phonics & Reading Magic",
    desc: "Multi-sensory phonics and rich daily storytelling in our dedicated early years library to build fluent, confident communicators."
  },
  {
    icon: <FaPalette />,
    title: "Creative Arts & Music Rhythm",
    desc: "Daily painting, clay modelling, percussion instruments, and choral rhymes that stimulate cognitive links and emotional expression."
  },
  {
    icon: <FaSwimmer />,
    title: "Heated Splash Pool & Motor Agility",
    desc: "Safe shallow mini-pool sessions led by certified swimming coaches alongside agility obstacle courses and balance turf."
  },
  {
    icon: <FaAppleAlt />,
    title: "Nutritious Dining & Healthy Habits",
    desc: "Chef-prepared morning snacks and balanced hot lunches paired with personal hygiene mastery, handwashing, and table manners."
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe, Secure & Nurturing Campus",
    desc: "CCTV-monitored early years wing, child-sized sanitary fittings, warm teacher-child ratios, and a full-time certified paediatric nurse."
  }
];

const PRESCHOOL_SCHEDULE = [
  { time: "07:30 AM – 08:30 AM", title: "Warm Arrival & Free Play", desc: "Gentle welcome by teachers, soft play tables, and morning social greeting circles.", icon: <FaClock /> },
  { time: "08:30 AM – 09:30 AM", title: "Jolly Phonics & Language Circle", desc: "Letter sound explorations, interactive storytelling, rhyme recitation, and vocabulary games.", icon: <FaBookOpen /> },
  { time: "09:30 AM – 10:15 AM", title: "Numeracy & Discovery Stations", desc: "Counting with tactile beads, sorting blocks, geometric puzzles, and sensory bins.", icon: <FaAtom /> },
  { time: "10:15 AM – 10:45 AM", title: "Healthy Snack & Hygiene Routine", desc: "Chef-prepared fruit/snack time with supervised handwashing and table etiquette.", icon: <FaAppleAlt /> },
  { time: "10:45 AM – 11:45 AM", title: "Outdoor Play & Splash Pool", desc: "Climbing frames, sand play, tricycle tracks, or heated splash pool sessions.", icon: <FaSwimmer /> },
  { time: "11:45 AM – 12:30 PM", title: "Creative Arts & Environmental Science", desc: "Finger painting, nature specimens, clay sculpting, and musical movement.", icon: <FaPalette /> },
  { time: "12:30 PM – 01:15 PM", title: "Nutritious Hot Lunch", desc: "Warm, balanced wholesome meals served in the child-friendly dining hall.", icon: <FaHeart /> },
  { time: "01:15 PM – 02:30 PM", title: "Rest Pods / Gentle Dismissal", desc: "Quiet relaxation in comfortable rest pods or supervised aftercare activities.", icon: <FaSmileBeam /> }
];

/* ─── 1. Programme Hero ─────────────────────────────────── */
const ProgrammeHero = ({ stage }) => {
  const isPreSchool = stage.id === 0 || stage.url_param === 'pre-primary' || stage.url_param === 'pre-school';

  return (
    <section className="prog-hero">
      <img src={stage.image || imgKids} alt={stage.title} className="prog-hero-bg" />
      <div className="prog-hero-overlay" />
      
      <div className="prog-hero-content">
        <div className="prog-hero-badge">
          <FaStar style={{ color: '#f59e0b', marginRight: 6 }} /> 
          {isPreSchool ? "Ages 2 – 5 Years • Early Years Foundation" : stage.grade}
        </div>
        
        <h1 className="prog-hero-title">
          {isPreSchool ? "Pre-School & Early Years" : stage.title}
        </h1>
        
        <p className="prog-hero-sub">
          {stage.intro}
        </p>
        
        <div className="prog-hero-btns">
          <Link to="/admissions/admission-process" className="nav-apply-btn" style={{ height: '52px', fontSize: '15px', padding: '0 32px' }}>
            Apply for 2026/2027
          </Link>
          <button 
            onClick={() => window.open('https://wa.me/254706280170?text=Hello%20MEC%20Admissions,%20I%20would%20like%20to%20book%20a%20tour%20for%20Pre-School', '_blank')}
            className="prog-btn-secondary"
          >
            <FaWhatsapp style={{ color: '#25D366' }} /> Book a School Tour
          </button>
          <Link to="/admissions/fees" className="prog-btn-secondary">
            <FaDownload /> View 2026 Fees
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ─── 2. Pre-School Interactive Level Explorer ────────────── */
const PreSchoolExplorer = () => {
  const [activeTab, setActiveTab] = useState(0);
  const current = PRESCHOOL_LEVELS[activeTab];

  return (
    <section className="preschool-explorer-section">
      <div className="prog-container">
        <div className="section-header-center">
          <div className="prog-eyebrow">
            <span className="prog-eyebrow-dot" />
            Tailored Development by Age
          </div>
          <h2 className="prog-sec-heading">Explore Our 4 Pre-School Levels</h2>
          <p className="prog-sec-sub">
            Every developmental window is precious. Our early years classes are thoughtfully structured to give your child the right balance of care, stimulation, and academic foundation.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="preschool-tab-pills" role="tablist">
          {PRESCHOOL_LEVELS.map((lvl, idx) => (
            <button
              key={lvl.id}
              role="tab"
              aria-selected={activeTab === idx}
              className={`preschool-tab-pill ${activeTab === idx ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              <span className="pill-icon">{lvl.icon}</span>
              <span className="pill-title">{lvl.title}</span>
              <span className="pill-age">{lvl.age}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Card Showcase */}
        <div className="preschool-stage-display">
          <div className="stage-left-info">
            <div className="stage-badge-wrap">
              <span className="stage-main-badge">{current.badge}</span>
              <span className="stage-age-badge">{current.age}</span>
            </div>
            <h3>{current.title} Learning Stage</h3>
            <p className="stage-summary">{current.summary}</p>
            
            <div className="stage-highlights-box">
              <h4>Key Developmental Milestones:</h4>
              <ul className="stage-milestone-list">
                {current.milestones.map((m, i) => (
                  <li key={i}>
                    <FaCheckCircle className="milestone-check" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="stage-right-card">
            <div className="stage-meta-card">
              <div className="meta-icon-box">
                <FaUsers />
              </div>
              <div className="meta-info">
                <strong>Classroom Ratio</strong>
                <p>{current.ratio}</p>
              </div>
            </div>

            <div className="stage-meta-card">
              <div className="meta-icon-box">
                <FaStar />
              </div>
              <div className="meta-info">
                <strong>Daily Highlights</strong>
                <p>{current.scheduleHighlight}</p>
              </div>
            </div>

            <div className="stage-cta-card">
              <h4>Ready to Enrol in {current.title}?</h4>
              <p>Applications for 2026 are currently open. Secure your child's spot in our nurturing early years family.</p>
              <div className="stage-cta-actions">
                <Link to="/admissions/admission-process" className="btn-stage-primary">
                  Enrol for {current.title} <FaArrowRight size={12} />
                </Link>
                <Link to="/admissions/fees" className="btn-stage-ghost">
                  Check {current.title} Fees
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── 3. Core Pillars Grid ───────────────────────────────── */
const PreSchoolPillarsSection = () => {
  return (
    <section className="preschool-pillars-section">
      <div className="prog-container">
        <div className="section-header-center">
          <div className="prog-eyebrow">
            <span className="prog-eyebrow-dot" />
            The MEC Early Childhood Advantage
          </div>
          <h2 className="prog-sec-heading">6 Pillars of Early Childhood Excellence</h2>
          <p className="prog-sec-sub">
            We provide a world-class foundation where intellectual, physical, emotional, and social development thrive harmoniously.
          </p>
        </div>

        <div className="pillars-cards-grid">
          {PRESCHOOL_PILLARS.map((pillar, idx) => (
            <div className="pillar-card" key={idx}>
              <div className="pillar-icon-box">
                {pillar.icon}
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── 4. Daily Schedule Timeline ─────────────────────────── */
const PreSchoolScheduleSection = () => {
  return (
    <section className="preschool-schedule-section">
      <div className="prog-container">
        <div className="section-header-center">
          <div className="prog-eyebrow">
            <span className="prog-eyebrow-dot" />
            Structure & Joy
          </div>
          <h2 className="prog-sec-heading">A Day in the Life of a Pre-Schooler</h2>
          <p className="prog-sec-sub">
            Our daily rhythm blends energetic inquiry, guided learning, restorative nutrition, and creative play in a safe, predictable routine.
          </p>
        </div>

        <div className="schedule-timeline-grid">
          {PRESCHOOL_SCHEDULE.map((item, idx) => (
            <div className="schedule-item-card" key={idx}>
              <div className="schedule-time-badge">
                <FaClock style={{ marginRight: '6px' }} /> {item.time}
              </div>
              <div className="schedule-header">
                <span className="schedule-icon">{item.icon}</span>
                <h4>{item.title}</h4>
              </div>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── 5. General Programme Overview (For other stages) ───── */
const ProgrammeOverview = ({ stage }) => {
  return (
    <section className="prog-overview-white">
      <div className="prog-overview-container">
        
        <div className="prog-overview-main">
          <div className="prog-eyebrow">
            <span className="prog-eyebrow-dot" />
            PEDAGOGICAL EXCELLENCE
          </div>
          <h2 className="prog-sec-heading">Educational Approach</h2>
          
          {stage.middle && <p className="prog-lead-text">{stage.middle}</p>}
          
          {stage.description && stage.description.map((p, i) => (
            p && <p key={i} className="prog-body-text">{p}</p>
          ))}
        </div>

        <div className="prog-overview-sidebar">
          <div className="prog-levels-card">
            <div className="prog-levels-header">
              <FaBookOpen className="prog-levels-icon" />
              <h3>Curriculum Levels</h3>
            </div>
            <ul className="prog-levels-list">
              {stage.list && stage.list.map((item, i) => (
                <li key={i}>
                  <FaCheckCircle className="check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <Link to="/admissions/fees" className="btn-sidebar-fees">
                <FaDownload /> View Fee Structure
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

/* ─── 6. Highlights Component ───────────────────────────── */
const HighlightBlock = ({ dataObj, icon }) => {
  if (!dataObj || !dataObj.data) return null;
  return (
    <div className="prog-highlight-card">
      <div className="prog-hl-icon">{icon}</div>
      <p className="prog-hl-intro">{dataObj.intro}</p>
      <div className="prog-hl-grid">
        {dataObj.data.map((item, i) => (
          <div key={i} className="prog-hl-item">
            <div className="prog-hl-step">{i + 1}</div>
            <span className="prog-hl-text">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProgrammeHighlights = ({ stage }) => {
  if (!stage.extra_list && !stage.extra_list2 && !stage.extra_list3) return null;

  return (
    <section className="prog-highlights-light">
      <div className="prog-container">
        <h2 className="prog-sec-heading text-center">Interactive Learning Highlights</h2>
        <div className="prog-hl-list">
          <HighlightBlock dataObj={stage.extra_list} icon={<FaAtom />} />
          <HighlightBlock dataObj={stage.extra_list2} icon={<FaUsers />} />
          <HighlightBlock dataObj={stage.extra_list3} icon={<FaLaptopCode />} />
        </div>
      </div>
    </section>
  );
};

/* ─── 7. Transition to Next Phase Banner ─────────────────── */
const TransitionBanner = ({ stage }) => {
  const isPreSchool = stage.id === 0 || stage.url_param === 'pre-primary' || stage.url_param === 'pre-school';
  
  if (!isPreSchool) return null;

  return (
    <section className="preschool-transition-banner">
      <div className="prog-container">
        <div className="transition-card-inner">
          <div className="transition-text">
            <div className="transition-pill">Seamless CBC Journey</div>
            <h2>From Pre-School into Lower Primary (Grade 1 – 3)</h2>
            <p>
              Our PP2 graduates transition smoothly into Lower Primary with high bilingual reading confidence, strong mathematical curiosity, and established social independence. There are no stressful external assessments — learning continues naturally within the trusted MEC community.
            </p>
            <div className="transition-badges">
              <span>✓ Phonics Mastery</span>
              <span>✓ Mathematical Logic</span>
              <span>✓ Bilingual Fluency</span>
              <span>✓ Confident Self-Expression</span>
            </div>
          </div>
          <div className="transition-action">
            <Link to="/education/CBC/lower-primary" className="btn-transition-next">
              Explore Lower Primary Phase <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── 8. Learning Journey Navigation ────────────────────── */
const LearningJourney = ({ currentId }) => {
  const navigate = useNavigate();

  return (
    <section className="prog-journey-white">
      <div className="prog-container">
        <h2 className="prog-sec-heading text-center">Explore Our Complete Learning Pathway</h2>
        <p className="prog-sec-sub text-center">Continuous growth from early foundational years through senior academic pathways.</p>
        
        <div className="prog-journey-grid">
          {cbc.map((stage) => {
            const isActive = stage.id === currentId;
            return (
              <div 
                key={stage.id}
                onClick={() => navigate(stage.link)}
                className={`prog-phase-card ${isActive ? 'active' : ''}`}
              >
                <div className="prog-phase-icon">
                  <FaGraduationCap />
                </div>
                <h4>{stage.title}</h4>
                <div className="prog-phase-action">
                  {isActive ? 'Current Phase' : 'Explore Phase'} <FaChevronRight size={10} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─── 9. Admissions CTA Card ────────────────────────────── */
const PreSchoolAdmissionsCTA = () => {
  return (
    <section className="preschool-cta-section">
      <div className="prog-container">
        <div className="preschool-cta-box">
          <div className="cta-left-content">
            <span className="cta-tag">Admissions 2026 / 2027</span>
            <h2>Give Your Child the Best Start in Life at Moi Educational Centre</h2>
            <p>
              Join a caring, high-achieving community where every child is known, celebrated, and guided toward their highest potential. Spaces in Crèche, Reception, PP1, and PP2 are allocated on a rolling basis.
            </p>
            <div className="cta-action-buttons">
              <Link to="/admissions/admission-process" className="btn-cta-apply">
                Apply for Admission <FaArrowRight />
              </Link>
              <button 
                onClick={() => window.open('https://wa.me/254706280170?text=Hello%20MEC%20Admissions,%20I%20would%20like%20to%20enquire%20about%20Pre-School%20Admissions', '_blank')}
                className="btn-cta-whatsapp"
              >
                <FaWhatsapp size={18} /> Chat with Admissions
              </button>
              <Link to="/admissions/fees" className="btn-cta-fees">
                <FaDownload /> Fee Structure
              </Link>
            </div>
          </div>
          <div className="cta-right-contacts">
            <div className="contact-quick-card">
              <FaPhoneAlt className="contact-icon" />
              <div>
                <strong>Admissions Desk</strong>
                <a href="tel:+254706280170">+254 706 280 170</a>
              </div>
            </div>
            <div className="contact-quick-card">
              <FaWhatsapp className="contact-icon" style={{ color: '#25D366' }} />
              <div>
                <strong>WhatsApp Direct</strong>
                <a href="https://wa.me/254706280170" target="_blank" rel="noreferrer">+254 706 280 170</a>
              </div>
            </div>
            <div className="contact-quick-card">
              <FaCalendarAlt className="contact-icon" style={{ color: '#F59E0B' }} />
              <div>
                <strong>Campus Visits</strong>
                <span>Monday – Friday, 8:00 AM – 4:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Main Page Wrapper ──────────────────────────────────── */
const CBCSection = () => {
  const { name } = useParams();
  
  // Normalise param (handle 'pre-school', 'pre-primary', 'Pre-School', etc.)
  const normalizedParam = (name || 'pre-primary').toLowerCase();
  const stage = cbc.find(item => 
    item.url_param === normalizedParam || 
    (normalizedParam === 'pre-school' && item.url_param === 'pre-primary') ||
    (normalizedParam === 'junior-secondary' && item.url_param === 'junior-school')
  ) || cbc[0];

  const isPreSchool = stage.id === 0 || stage.url_param === 'pre-primary';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [name]);

  return (
    <div className="prog-page-white">
      <SEO 
        title={`${stage.title} | Moi Educational Centre`}
        description={stage.intro}
      />

      <main>
        <ProgrammeHero stage={stage} />
        
        {isPreSchool ? (
          <>
            <PreSchoolExplorer />
            <PreSchoolPillarsSection />
            <PreSchoolScheduleSection />
            <TransitionBanner stage={stage} />
          </>
        ) : (
          <>
            <ProgrammeOverview stage={stage} />
            <ProgrammeHighlights stage={stage} />
          </>
        )}

        <LearningJourney currentId={stage.id} />
        <PreSchoolAdmissionsCTA />
      </main>
    </div>
  );
};

export default CBCSection;