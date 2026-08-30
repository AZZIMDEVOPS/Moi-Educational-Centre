import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaTrophy, 
  FaMusic, 
  FaRobot, 
  FaSwimmer, 
  FaTheaterMasks, 
  FaPalette, 
  FaFlask, 
  FaHandsHelping, 
  FaMedal, 
  FaPlaneDeparture, 
  FaCogs, 
  FaCrown, 
  FaGraduationCap,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaPause,
  FaArrowRight
} from 'react-icons/fa';

import codingImg from '../../assets/innovation.jpg';
import artsImg from '../../assets/about2.jpg';
import communityImg from '../../assets/outreach.jpg';

import '../../css/student-life.css';

gsap.registerPlugin(ScrollTrigger);

/* ─── CountUp Hook ─────────────────────────────────────── */
const useCountUp = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const num = parseInt(target.replace(/\D/g, ''));
    if (isNaN(num)) {
      setCount(target);
      return;
    }
    const step = num / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, num);
      setCount(Math.floor(current));
      if (current >= num) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [start, target, duration]);
  const suffix = target.replace(/[0-9,]/g, '');
  return `${count.toLocaleString()}${suffix}`;
};

const AnimatedStat = ({ value, label }) => {
  const statRef = useRef();
  const [started, setStarted] = useState(false);
  const display = useCountUp(value, 2000, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (statRef.current) observer.observe(statRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={statRef} className="life-stat-box">
      <div className="life-stat-value">{display}</div>
      <div className="life-stat-label">{label}</div>
    </div>
  );
};

/* ─── Data ─────────────────────────────────────────────── */
const BENTO_ACTIVITIES = [
  { id: 'sports', size: 'large', title: 'Champion Athletes', category: 'Sports', Icon: FaTrophy, img: '/assets/gallery/DSC_4232.JPG', desc: 'Nationally competitive teams in football, basketball, and athletics.' },
  { id: 'music', size: 'medium', title: 'Music Academy & Europe Tour', category: 'Music & Arts', Icon: FaMusic, img: '/assets/gallery/DSC_4265.JPG', desc: 'ABRSM-certified orchestra, choir & Vienna Europe Tour 2026.' },
  { id: 'coding', size: 'medium', title: 'Robotics & AI', category: 'Innovation', Icon: FaRobot, img: codingImg, desc: 'Future-tech programming.' },
  { id: 'swim', size: 'tall', title: 'Elite Swimming', category: 'Aquatics', Icon: FaSwimmer, img: '/assets/gallery/DSC_4136.JPG', desc: 'Olympic-size facilities and professional coaching.' },
  { id: 'drama', size: 'medium', title: 'Theatre Arts', category: 'Drama', Icon: FaTheaterMasks, img: '/assets/gallery/DSC_4345.JPG', desc: 'Award-winning performances.' },
  { id: 'arts', size: 'medium', title: 'Visual Arts', category: 'Creativity', Icon: FaPalette, img: artsImg, desc: 'Expressive design studios.' },
  { id: 'stem', size: 'wide', title: 'STEM Excellence', category: 'Academics', Icon: FaFlask, img: '/assets/gallery/DSC_4289.JPG', desc: 'State-of-the-art science laboratories.' },
  { id: 'community', size: 'wide', title: 'Community Service', category: 'Leadership', Icon: FaHandsHelping, img: communityImg, desc: 'Developing leaders who make a real difference in Kenya.' }
];

const FEATURED_EXPERIENCES = [
  {
    id: 'sports-excellence',
    title: 'Sports & Athletics Championship',
    sub: 'Building Champions On & Off the Field',
    tag: 'Championship League',
    img: '/assets/gallery/DSC_4232.JPG',
    link: '/extra-curricular/sports/soccer-academy'
  },
  {
    id: 'music-conservatory',
    title: 'Music & Performing Arts',
    sub: 'Vienna Tour 2026 & ABRSM London Choral Mastery',
    tag: 'Global Stage',
    img: '/assets/gallery/DSC_4265.JPG',
    link: '/extra-curricular/clubs/music-academy'
  },
  {
    id: 'aquatics-gala',
    title: 'Semi-Olympic Heated Swimming',
    sub: 'National Inter-School Aquatics Gala Squads',
    tag: 'Aquatics Masterclass',
    img: '/assets/gallery/DSC_4136.JPG',
    link: '/extra-curricular/swimming'
  },
  {
    id: 'stem-robotics',
    title: 'STEM & Robotics Lab',
    sub: 'VEX Coding, Electronics & AI Prototyping',
    tag: 'Future-Tech',
    img: '/assets/gallery/DSC_4289.JPG',
    link: '/extra-curricular/clubs/robotics'
  },
  {
    id: 'active-learning',
    title: 'Active Learning & Foundation',
    sub: 'Holistic CBC & Cambridge International Curriculum',
    tag: 'Global Standards',
    img: '/assets/gallery/DSC_4145.JPG',
    link: '/education/cbc'
  },
  {
    id: 'student-leadership',
    title: 'Leadership & Public Speaking',
    sub: 'Developing Confident Communicators & Global Citizens',
    tag: 'Legacy Leadership',
    img: '/assets/gallery/DSC_4345.JPG',
    link: '/extra-curricular/clubs/legacy-hq'
  }
];

const TIMELINE_EVENTS = [
  { month: 'Term 1', title: 'Sports Day', Icon: FaMedal },
  { month: 'Term 1', title: 'Music Festival', Icon: FaMusic },
  { month: 'Term 2', title: 'Europe Music Tour (Vienna)', Icon: FaPlaneDeparture },
  { month: 'Term 2', title: 'Robotics & AI Comp.', Icon: FaCogs },
  { month: 'Term 3', title: 'Leadership Summit', Icon: FaCrown },
  { month: 'Term 3', title: 'Graduation', Icon: FaGraduationCap }
];

/* ─── Main Component ───────────────────────────────────── */
const StudentLifeSection = () => {
  const containerRef = useRef();
  const headerRef = useRef();
  const bentoRef = useRef();
  const timelineSvgRef = useRef();
  const trackScrollRef = useRef();
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Stagger
      const words = headerRef.current.querySelectorAll('.life-word');
      gsap.from(words, {
        scrollTrigger: { trigger: headerRef.current, start: 'top 85%' },
        y: 40, opacity: 0, stagger: 0.08, duration: 0.8, ease: 'power3.out'
      });

      // Bento Grid Entrance
      const cards = bentoRef.current.querySelectorAll('.bento-card');
      gsap.from(cards, {
        scrollTrigger: { trigger: bentoRef.current, start: 'top 80%' },
        y: 60, opacity: 0, stagger: 0.1, duration: 1, ease: 'power3.out'
      });

      // Horizontal Timeline SVG Draw
      gsap.to(timelineSvgRef.current, {
        scrollTrigger: {
          trigger: '.life-timeline-section',
          start: 'left center',
          end: 'right center',
          horizontal: true,
          scrub: 1,
        },
        strokeDashoffset: 0,
        ease: 'none'
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleScrollManual = (direction) => {
    setIsAutoPlaying(false);
    if (trackScrollRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      trackScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="student-life-v2" ref={containerRef} aria-label="Life Beyond the Classroom">
      
      {/* Background Ambience */}
      <div className="life-ambient-glow left" />
      <div className="life-ambient-glow right" />
      
      <div className="inner-row">
        
        {/* 1. Header */}
        <div className="life-header" ref={headerRef}>
          <div className="section-eyebrow">
            <span className="section-eyebrow-dot" />
            Vibrant Student Life
          </div>
          <h2 className="life-title">
            <span className="life-word-wrap"><span className="life-word">Life</span></span>
            <span className="life-word-wrap"><span className="life-word">Beyond</span></span>
            <span className="life-word-wrap"><span className="life-word">the</span></span>
            <span className="life-word-wrap"><span className="life-word life-gradient">Classroom</span></span>
          </h2>
          <p className="life-sub reveal">
            At Moi Educational Centre, learning extends far beyond academics. Through sports, performing arts, 
            innovation, and community engagement, every learner discovers their passions and builds confidence 
            for lifelong success.
          </p>
        </div>

        {/* 2. Stats Strip */}
        <div className="life-stats-strip">
          <AnimatedStat value="50+" label="Clubs & Activities" />
          <AnimatedStat value="15+" label="Competitive Sports" />
          <AnimatedStat value="100+" label="Annual Events" />
          <AnimatedStat value="1,000+" label="Student Performances" />
        </div>

        {/* 3. The Bento Grid */}
        <div className="life-bento-grid" ref={bentoRef}>
          {BENTO_ACTIVITIES.map((activity) => (
            <div key={activity.id} className={`bento-card bento-${activity.size}`}>
              <div className="bento-bg-wrap">
                <img src={activity.img} alt={activity.title} loading="lazy" />
                <div className="bento-gradient-overlay" />
              </div>
              <div className="bento-content">
                <div className="bento-header-row">
                  <span className="bento-icon">
                    <activity.Icon style={{ fontSize: '16px' }} />
                  </span>
                  <span className="bento-category">{activity.category}</span>
                </div>
                <h3>{activity.title}</h3>
                <p>{activity.desc}</p>
                <div className="bento-hover-cta">
                  <span>Explore More</span> →
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* 4. Horizontal Animated Experience Carousel (Continuous Right-to-Left Animation) */}
      <div className="life-experience-section">
        <div className="inner-row life-exp-header-row">
          <div>
            <div className="section-eyebrow" style={{ marginBottom: '8px' }}>
              <span className="section-eyebrow-dot" />
              Dynamic Student Journeys
            </div>
            <h3 className="life-section-title reveal" style={{ margin: 0 }}>Featured Experiences</h3>
          </div>
          <div className="life-exp-controls">
            <button
              className="life-ctrl-btn"
              onClick={() => handleScrollManual('left')}
              aria-label="Scroll experiences left"
              title="Previous experience"
            >
              <FaChevronLeft />
            </button>
            <button
              className={`life-ctrl-btn ${isAutoPlaying ? 'active' : ''}`}
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              aria-label={isAutoPlaying ? "Pause auto-scroll" : "Play auto-scroll"}
              title={isAutoPlaying ? "Pause animation" : "Resume animation"}
            >
              {isAutoPlaying ? <FaPause size={11} /> : <FaPlay size={11} />}
            </button>
            <button
              className="life-ctrl-btn"
              onClick={() => handleScrollManual('right')}
              aria-label="Scroll experiences right"
              title="Next experience"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Continuous Right-to-Left Animation Track */}
        <div 
          className={`life-marquee-container ${isAutoPlaying ? 'is-playing' : 'is-paused'}`}
          ref={trackScrollRef}
        >
          <div className="life-marquee-track">
            {/* Duplicated list for seamless right-to-left loop */}
            {[...FEATURED_EXPERIENCES, ...FEATURED_EXPERIENCES].map((exp, idx) => (
              <Link 
                to={exp.link} 
                key={`${exp.id}-${idx}`} 
                className="life-experience-card"
              >
                <div className="exp-img-wrap">
                  <img src={exp.img} alt={exp.title} loading="lazy" />
                  <div className="exp-overlay" />
                  <span className="exp-tag">{exp.tag}</span>
                </div>
                <div className="exp-content">
                  <h4>{exp.title}</h4>
                  <p>{exp.sub}</p>
                  <div className="exp-arrow">
                    <span>Explore Experience</span>
                    <FaArrowRight size={11} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Year in Student Life Timeline */}
      <div className="life-timeline-section inner-row">
        <h3 className="life-section-title text-center reveal">A Year in Student Life</h3>
        <div className="timeline-horizontal-wrap">
          <div className="timeline-path">
            <svg viewBox="0 0 1000 20" preserveAspectRatio="none" className="timeline-svg">
              <line x1="0" y1="10" x2="1000" y2="10" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
              {/* Note: horizontal scrub relies on container width, we use CSS animation for simplicity here as it's more reliable than horizontal ScrollTrigger without a fixed width container */}
              <line x1="0" y1="10" x2="1000" y2="10" stroke="url(#lifeGradient)" strokeWidth="4" className="timeline-svg-fill reveal-path" />
              <defs>
                <linearGradient id="lifeGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="timeline-nodes-grid">
            {TIMELINE_EVENTS.map((ev, i) => (
              <div key={i} className="timeline-node reveal">
                <div className="node-dot">
                  <ev.Icon style={{ fontSize: '14px', color: '#fff' }} />
                </div>
                <div className="node-info">
                  <span className="node-month">{ev.month}</span>
                  <span className="node-title">{ev.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* 7. Stunning CTA */}
      <div className="life-cta-section inner-row">
        <div className="life-cta-card reveal">
          <div className="life-cta-glow" />
          <h2>Discover a School Where Every Talent Thrives</h2>
          <div className="life-cta-buttons">
            <Link to="/admissions/admission-process" className="btn-primary">Apply Now →</Link>
            <button className="btn-outline-white" onClick={() => window.open('https://wa.me/254706280170', '_blank')}>Book a School Tour</button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default StudentLifeSection;
