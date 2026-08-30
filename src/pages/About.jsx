import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCheckCircle, FaBookOpen, FaGlobe, FaFlask, FaLaptopCode, FaMusic, FaRunning, FaStar, FaChevronDown, FaRobot, FaTrophy, FaSwimmer } from "react-icons/fa";
import { TbBulb } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";

import Navbar from "../components/common/navigation/Navbar";
import Footer from "../components/common/Footer";
import { leaders as leadersData } from "../data/leaders";
import LeadershipModal from "../components/leadership/LeadershipModal";
import "../css/about-v2.css";
import "../css/about.css";

// Assets
import imgKids from "../assets/kids.jpg";
import imgAcademic from "../assets/academic.jpg";
import imgUpper from "../assets/upper.jpg";
import imgJunior from "../assets/junior1.jpg";
import imgSenior from "../assets/senior.jpg";
import imgInnovation from "../assets/innovation.jpg";
import imgSwimming from "../assets/swimming.jpg";
import imgLibrary from "../assets/experience2.jpg";

gsap.registerPlugin(ScrollTrigger);

/* ─── 1. Cinematic Hero ─────────────────────────────────── */
const AboutHeroV2 = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.fromTo(".abt-hero-bg", { scale: 1.2 }, { scale: 1.05, duration: 2, ease: "power3.out" })
      .fromTo(".abt-word", { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power3.out" }, "-=1.5")
      .fromTo(".abt-hero-sub", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=1.2")
      .fromTo(".abt-badge", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.6 }, "-=1.0");
  }, []);

  return (
    <section className="abt-hero" ref={heroRef}>
      <img src={imgSenior} alt="MEC Campus" className="abt-hero-bg" />
      <div className="abt-hero-overlay" />
      <div className="abt-hero-content">
        <div className="abt-badge">
          <FaStar style={{ color: '#f59e0b', marginRight: 6 }} /> Celebrating 40 Years of Excellence
        </div>
        <h1 className="abt-hero-title">
          <span className="abt-word-wrap"><span className="abt-word">Shaping</span></span>
          <span className="abt-word-wrap"><span className="abt-word">Futures.</span></span><br/>
          <span className="abt-word-wrap"><span className="abt-word">Inspiring</span></span>
          <span className="abt-word-wrap"><span className="abt-word">Generations.</span></span>
        </h1>
        <p className="abt-hero-sub">
          Since 1986, Moi Educational Centre has been at the forefront of academic excellence, 
          nurturing leaders, innovators, and global citizens in a world-class environment.
        </p>
        <div className="abt-hero-btns">
          <button className="hero-btn-primary" style={{ height: '54px', padding: '0 40px' }} onClick={() => window.open('https://wa.me/254706280170', '_blank')}>
            Book a School Tour
          </button>
          <Link to="/education" className="hero-btn-secondary" style={{ height: '54px', padding: '0 40px' }}>
            Explore Programmes
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ─── 2. Interactive Timeline ───────────────────────────── */
const InteractiveTimeline = () => {
  const tlRef = useRef(null);
  const progRef = useRef(null);

  useEffect(() => {
    // Animate the vertical line drawing down
    gsap.to(progRef.current, {
      height: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: tlRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1
      }
    });

    // Fade up each item as it enters
    const items = gsap.utils.toArray('.abt-tl-item');
    items.forEach(item => {
      gsap.to(item, {
        opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: item, start: 'top 85%' }
      });
    });
  }, []);

  const milestones = [
    { year: "1986", title: "Foundation", desc: "Moi Educational Centre is established with a vision to offer world-class education." },
    { year: "1995", title: "Academic Expansion", desc: "Expanded facilities to accommodate a growing student body and broader curriculum." },
    { year: "2005", title: "Modern Facilities", desc: "Inaugurated the modern library, science laboratories, and state-of-the-art sports complex." },
    { year: "2015", title: "International Standards", desc: "Adopted global best practices and began integration of digital learning methodologies." },
    { year: "2020", title: "Digital Transformation", desc: "Launched full digital classrooms and robotics clubs to prepare students for the future." },
    { year: "2026", title: "40 Years of Excellence", desc: "Celebrating four decades of shaping leaders, innovators, and global citizens." }
  ];

  return (
    <section className="abt-timeline-sec">
      <div className="abt-sec-header">
        <h2 className="abt-sec-title">Our Journey</h2>
        <p className="abt-sec-sub">Four decades of continuous innovation, academic excellence, and community building.</p>
      </div>
      <div className="abt-timeline" ref={tlRef}>
        <div className="abt-tl-progress" ref={progRef} />
        {milestones.map((m, i) => (
          <div className="abt-tl-item" key={i}>
            <div className="abt-tl-node" />
            <div className="abt-tl-content">
              <div className="abt-tl-year">{m.year}</div>
              <div className="abt-tl-title">{m.title}</div>
              <p className="abt-tl-desc">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ─── 3. Our Story ──────────────────────────────────────── */
const OurStory = () => {
  return (
    <section className="abt-story">
      <div className="abt-story-inner">
        <div className="abt-story-text">
          <h2>A Heritage of Brilliance</h2>
          <p>Moi Educational Centre was founded on a simple yet profound belief: every child possesses extraordinary potential waiting to be unlocked. For over 40 years, we have provided an environment where students don't just learn—they thrive.</p>
          <p>Today, we stand as one of the premier educational institutions in the region, seamlessly blending the rigorous CBC curriculum with international standards. We prepare our learners not just to pass exams, but to solve real-world problems with empathy and innovation.</p>
        </div>
        <div className="abt-story-images">
          <div className="abt-story-img-main"><img src={imgAcademic} alt="Story 1" /></div>
          <div className="abt-story-img-sub"><img src={imgJunior} alt="Story 2" /></div>
          <div className="abt-story-img-sub"><img src={imgKids} alt="Story 3" /></div>
        </div>
      </div>
    </section>
  );
};

/* ─── 4. Vision & Values ────────────────────────────────── */
const CoreValues = () => {
  const values = [
    { icon: <FaGlobe />, title: "Vision", desc: "To be a world-class centre of academic excellence, nurturing future-ready leaders." },
    { icon: <FaBookOpen />, title: "Mission", desc: "To provide holistic education that empowers learners with knowledge, skills, and values." },
    { icon: <TbBulb />, title: "Core Values", desc: "Excellence, Integrity, Innovation, Leadership, Respect, and Collaboration." }
  ];
  return (
    <section className="abt-values">
      <div className="abt-values-grid">
        {values.map((v, i) => (
          <div className="abt-val-card" key={i}>
            <div className="abt-val-icon">{v.icon}</div>
            <h3>{v.title}</h3>
            <p>{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ─── 5. Leadership Grid ────────────────────────────────── */
const LeadershipGrid = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);

  // Filter valid leaders and order starting with Chairman Paul K. Chemng'orem
  const validLeaders = leadersData.filter(l => l && l.name && l.position);
  
  // Custom priority order: Board Chair Paul (78) -> Senior School Principal (0) -> Primary Principal (276) -> rest
  const sortedLeaders = [...validLeaders].sort((a, b) => {
    if (a.id === 78) return -1;
    if (b.id === 78) return 1;
    if (a.id === 0) return -1;
    if (b.id === 0) return 1;
    if (a.id === 276) return -1;
    if (b.id === 276) return 1;
    return 0;
  });

  return (
    <section className="abt-leaders" id="leadership">
      <div className="abt-sec-header">
        <h2 className="abt-sec-title">Our Leadership</h2>
        <p className="abt-sec-sub" style={{ color: 'rgba(255,255,255,0.7)', textAlign: 'center', maxWidth: '640px', margin: '12px auto 0', fontSize: '16px' }}>
          Guided by visionary governance and experienced educators dedicated to student growth, integrity, and academic distinction.
        </p>
      </div>

      <div className="abt-leaders-grid">
        {sortedLeaders.map((leader) => (
          <div 
            className="abt-leader-card" 
            key={leader.id}
            onClick={() => setSelectedLeader(leader.name)}
            style={{ cursor: 'pointer' }}
          >
            <div className="abt-leader-img">
              <img src={leader.image} alt={leader.name} loading="lazy" />
            </div>
            <div className="abt-leader-info">
              <h3>{leader.name}</h3>
              <p>{leader.position}</p>
              <span style={{ display: 'inline-block', marginTop: '12px', fontSize: '13px', fontWeight: '700', color: '#A855F7' }}>
                View Bio →
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedLeader && (
        <LeadershipModal 
          name={selectedLeader} 
          modalFunc={() => setSelectedLeader(null)} 
        />
      )}
    </section>
  );
};

/* ─── 6. Why Choose MEC (Bento Grid) ────────────────────── */
const WhyChooseMecBento = () => {
  return (
    <section className="abt-bento-sec">
      <div className="abt-sec-header">
        <div className="abt-bento-eyebrow">
          <span className="abt-bento-dot" />
          THE MEC ADVANTAGE
        </div>
        <h2 className="abt-sec-title">Why Parents Choose <span className="abt-bento-highlight">MEC</span></h2>
        <p className="abt-sec-sub">
          A unique blend of academic rigor, holistic character building, state-of-the-art STEM facilities, and global learning pathways.
        </p>
      </div>

      <div className="abt-bento-grid">
        {/* Card 1: STEM & Robotics (Large Hero Card) */}
        <div className="abt-b-card abt-b-hero">
          <img src={imgInnovation} alt="STEM & Robotics" className="abt-b-img" />
          <div className="abt-b-overlay" />
          <div className="abt-b-badge">
            <FaRobot style={{ color: '#38bdf8', marginRight: 6 }} /> Future-Ready Education
          </div>
          <div className="abt-b-content">
            <div className="abt-b-icon-wrap blue">
              <FaLaptopCode />
            </div>
            <h3>STEM & Robotics Innovation</h3>
            <p>State-of-the-art ICT labs, 3D printing, coding, and robotics clubs preparing learners to excel in a digital global economy.</p>
          </div>
        </div>

        {/* Card 2: 40 Years of Excellence */}
        <div className="abt-b-card abt-b-stat">
          <div className="abt-b-pill purple">
            <FaTrophy style={{ color: '#eab308', marginRight: 6 }} /> Legacy of Success
          </div>
          <div className="abt-b-content">
            <div className="abt-b-stat-num">40+</div>
            <h3>Years of Excellence</h3>
            <p>A proven track record of consistently producing top-performing national candidates and compassionate global leaders.</p>
          </div>
        </div>

        {/* Card 3: Dual Curriculum */}
        <div className="abt-b-card abt-b-card-light cyan-glow">
          <div className="abt-b-icon-wrap cyan">
            <FaGlobe />
          </div>
          <h3>Dual Curriculum Pathways</h3>
          <p>Seamlessly combining Kenya’s Competency-Based Curriculum (CBC) with Cambridge International qualifications for global mobility.</p>
        </div>

        {/* Card 4: Experienced Teachers */}
        <div className="abt-b-card abt-b-card-light emerald-glow">
          <div className="abt-b-icon-wrap emerald">
            <HiOutlineUserGroup />
          </div>
          <h3>100+ Master Educators</h3>
          <p>Highly qualified, passionate teachers dedicated to personalized mentorship, student well-being, and academic success.</p>
        </div>

        {/* Card 5: World-Class Facilities */}
        <div className="abt-b-card abt-b-media">
          <img src={imgSwimming} alt="Campus Facilities" className="abt-b-img" />
          <div className="abt-b-overlay" />
          <div className="abt-b-badge">
            <FaSwimmer style={{ color: '#06b6d4', marginRight: 6 }} /> Modern Amenities
          </div>
          <div className="abt-b-content">
            <h3>Olympic Sports & Aquatic Complex</h3>
            <p>Expansive sports fields, heated swimming pool, music studios, and modern libraries supporting holistic child development.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

/* ─── 7. Campus Gallery ─────────────────────────────────── */
const CampusGallery = () => {
  const images = [
    { img: imgSwimming, title: "Semi-Olympic Swimming Arena", category: "Sports & Aquatics" },
    { img: imgLibrary, title: "Modern Discovery Library", category: "Academic Resources" },
    { img: imgUpper, title: "Smart CBC Learning Suites", category: "Classroom Learning" },
    { img: imgKids, title: "Early Years Play & Discovery Center", category: "Pre-Primary" },
    { img: imgAcademic, title: "Advanced Science & Research Labs", category: "STEM & Science" },
    { img: imgInnovation, title: "VEX Robotics & Innovation Hub", category: "Technology & AI" }
  ];

  return (
    <section className="abt-gallery">
      <div className="abt-gallery-container">
        
        <div className="abt-gallery-header">
          <div className="abt-gallery-eyebrow">
            Campus & Facilities
          </div>
          <h2 className="abt-gallery-title">Campus Experience</h2>
          <p className="abt-gallery-subtitle">
            A state-of-the-art learning environment designed to nurture intellectual curiosity, athletic excellence, and creative discovery.
          </p>
        </div>

        <div className="abt-gallery-grid">
          {images.map((item, i) => (
            <div className="abt-gallery-card" key={i}>
              <img src={item.img} alt={item.title} className="abt-gallery-img" />
              <div className="abt-gallery-overlay" />
              <div className="abt-gallery-info">
                <span className="abt-gallery-cat">{item.category}</span>
                <h4 className="abt-gallery-card-title">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

/* ─── 8. Achievements & Stats ───────────────────────────── */
const AchievementsStats = () => {
  return (
    <section className="abt-stats">
      <div className="abt-stats-container">
        <div className="abt-stats-grid">
          <div className="abt-stat-box">
            <div className="abt-stat-num">40+</div>
            <div className="abt-stat-label">Years of Legacy</div>
          </div>
          <div className="abt-stat-box">
            <div className="abt-stat-num">2500+</div>
            <div className="abt-stat-label">Active Students</div>
          </div>
          <div className="abt-stat-box">
            <div className="abt-stat-num">100+</div>
            <div className="abt-stat-label">Expert Educators</div>
          </div>
          <div className="abt-stat-box">
            <div className="abt-stat-num">98%</div>
            <div className="abt-stat-label">Parent Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── 9. Student Life Showcase ──────────────────────────── */
const StudentLifeShowcase = () => {
  const cards = [
    { title: "Academics", img: imgAcademic, link: "/education" },
    { title: "Sports", img: imgSwimming, link: "/student-life/sports" },
    { title: "Robotics", img: imgInnovation, link: "/student-life/robotics" },
    { title: "Music & Arts", img: imgLibrary, link: "/student-life/music-academy" },
    { title: "Leadership", img: imgSenior, link: "/about-MEC/leadership" },
  ];

  return (
    <section className="abt-life">
      <div className="abt-life-container">
        
        <div className="abt-life-header">
          <div className="abt-life-eyebrow">
            Experience & Community
          </div>
          <h2 className="abt-life-title">Life at MEC</h2>
          <p className="abt-life-subtitle">
            Discover the experiences, activities and opportunities that make life at MEC unique.
          </p>
        </div>

        <div className="abt-life-grid">
          {cards.map((c, i) => (
            <Link to={c.link} className="abt-life-card" key={i} aria-label={`Explore ${c.title}`}>
              <img src={c.img} alt={c.title} className="abt-life-card-img" />
              <div className="abt-life-card-overlay" />
              <div className="abt-life-card-content">
                <h3 className="abt-life-card-title">{c.title}</h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

/* ─── 10. Testimonials ──────────────────────────────────── */
const TestimonialsCarousel = () => {
  return (
    <section className="abt-testimonials">
      <div className="abt-testimonials-container">
        
        <div className="abt-testimonials-header">
          <div className="abt-testimonials-eyebrow">
            Testimonials & Trust
          </div>
          <h2 className="abt-testimonials-title">What Parents & Alumni Say</h2>
          <p className="abt-testimonials-subtitle">
            Hear from families whose children have grown, thrived, and succeeded within our school community.
          </p>
        </div>

        <div className="abt-test-grid">
          <div className="abt-test-card">
            <div className="abt-test-stars">
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
            <p className="abt-test-quote">
              "MEC has transformed my child into a confident, curious, and disciplined learner. The teachers are incredibly dedicated and the facilities are world-class."
            </p>
            <div className="abt-test-author">— Sarah W., Parent</div>
          </div>
          <div className="abt-test-card">
            <div className="abt-test-stars">
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
            <p className="abt-test-quote">
              "The holistic balance between rigorous academics, competitive sports, and the vibrant music academy at MEC is truly unmatched in Nairobi."
            </p>
            <div className="abt-test-author">— James K., Alumni</div>
          </div>
        </div>

      </div>
    </section>
  );
};

/* ─── 11. FAQ Accordion ─────────────────────────────────── */
const AboutFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [
    { 
      q: "Which curriculum is offered at Moi Educational Centre?", 
      a: "We offer the Kenyan CBC (Competency-Based Curriculum) across Pre-School, Primary, Junior School, and Senior School, integrated with British Cambridge International standards, Robotics, STEM, and the MEC Music Academy." 
    },
    { 
      q: "What is the admissions process for new learners?", 
      a: "Admissions require submitting an application form (online or at the Admissions Desk), followed by a brief learner readiness assessment and parent orientation interview." 
    },
    { 
      q: "Are there boarding facilities available?", 
      a: "MEC operates primarily as a premier day school with comprehensive door-to-door transport routes covering Nairobi and its environs, fostering close daily family bonds." 
    },
    {
      q: "How does MEC support co-curricular talent?",
      a: "With over 35+ clubs, swimming, football, basketball, chess, drama, robotics labs, and an internationally acclaimed Music Academy that tours Europe."
    }
  ];

  return (
    <section className="abt-faq">
      <div className="abt-faq-container">
        
        <div className="abt-faq-header">
          <div className="abt-faq-eyebrow">
            Got Questions?
          </div>
          <h2 className="abt-faq-title">Frequently Asked Questions</h2>
          <p className="abt-faq-subtitle">
            Find quick answers to common questions regarding our academic curriculum, admissions, and student life.
          </p>
        </div>

        <div className="abt-faq-list">
          {faqs.map((f, i) => (
            <div 
              className={`abt-faq-card ${openIndex === i ? 'open' : ''}`} 
              key={i} 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="abt-faq-question-row">
                <span className="abt-faq-q-text">{f.q}</span>
                <span className={`abt-faq-chevron ${openIndex === i ? 'rotated' : ''}`}>
                  <FaChevronDown />
                </span>
              </div>
              {openIndex === i && (
                <div className="abt-faq-answer">
                  <p>{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="abt-faq-footer-cta">
          <span>Looking for more detailed admissions information?</span>
          <Link to="/admissions/frequently-asked-questions" className="abt-faq-link-more">
            Browse All FAQs &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
};

/* ─── 12. Admissions CTA ────────────────────────────────── */
const AboutCTA = () => {
  return (
    <section className="abt-cta">
      <div className="abt-cta-inner">
        <h2 className="abt-cta-title">Become Part of the MEC Family</h2>
        <p className="abt-cta-desc">Experience 40 years of academic excellence. Apply today and secure your child's future.</p>
        <div className="abt-hero-btns">
          <Link to="/admissions/admission-process" className="hero-btn-primary" style={{ height: '54px', padding: '0 40px' }}>Apply Now</Link>
          <button className="hero-btn-secondary" style={{ height: '54px', padding: '0 40px' }} onClick={() => window.open('https://wa.me/254706280170', '_blank')}>Book a Tour</button>
        </div>
      </div>
    </section>
  );
};

/* ─── Main Page Wrapper ─────────────────────────────────── */
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <Navbar />
      <AboutHeroV2 />
      <InteractiveTimeline />
      <OurStory />
      <CoreValues />
      <LeadershipGrid />
      <WhyChooseMecBento />
      <CampusGallery />
      <AchievementsStats />
      <StudentLifeShowcase />
      <TestimonialsCarousel />
      <AboutFAQ />
      <AboutCTA />
      <Footer />
    </div>
  );
};

export default About;