import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

// Uploaded Hero Section Assets
import imgCam02Parking from '../../assets/hero-uploads/Cam02-Parking.jpg';
import imgDSC00492 from '../../assets/hero-uploads/DSC00492.jpg';
import imgUpload7 from '../../assets/hero-uploads/images (7).jpg';
import imgUpload8 from '../../assets/hero-uploads/images (8).jpg';
import imgGlobalRound2 from '../../assets/hero-uploads/global-round-2026-2.jpg';
import imgSchool7Uploaded from '../../assets/hero-uploads/school7-D3PnsiCT (1).jpg';

// New World Scholar's Cup & International Exchange Assets
import imgGlobalRound1 from '../../assets/hero-uploads/global-round-2026-1.jpg';
import imgBritishSchool1 from '../../assets/hero-uploads/british-school-kl-1.jpg';
import imgBritishSchool2 from '../../assets/hero-uploads/british-school-kl-2.jpg';

import { 
  FaLandmark, 
  FaGraduationCap, 
  FaChalkboardTeacher, 
  FaAward, 
  FaFutbol, 
  FaMicrochip,
  FaImages,
  FaVideo
} from 'react-icons/fa';

// Trust Badge Logos
import cambridgeLogo from '../../assets/cambridge.png';
import kaisLogo from '../../assets/kais.png';
import nccLogo from '../../assets/ncc.png';
import kenyaCoatOfArms from '../../assets/kenya-coat-of-arms.svg';

// Aerial Drone Video Assets
import heroVideo from '../../assets/hero-vid.mp4';
import heroPoster from '../../assets/hero-poster2.jpg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import '../../css/home-v3.css';

/* ─── Stats Data ───────────────────────────────────────── */
const STATS = [
  { id: 'years',     value: '40+',   label: 'Years of Excellence', Icon: FaLandmark, trend: 'Est. 1986' },
  { id: 'students',  value: '2,500+', label: 'Active Learners',     Icon: FaGraduationCap, trend: 'CBC & Cambridge' },
  { id: 'teachers',  value: '100+',  label: 'Educators & Staff',   Icon: FaChalkboardTeacher, trend: 'Global Standards' },
  { id: 'placement', value: '98%',   label: 'University Success',  Icon: FaAward, trend: 'Top Tier Entry' },
  { id: 'sports',    value: '15+',   label: 'Sports Academies',    Icon: FaFutbol, trend: 'National Rank' },
  { id: 'clubs',     value: '50+',   label: 'Clubs & STEM Labs',   Icon: FaMicrochip, trend: 'Robotics & Music' },
];

/* ─── Titles & Subtitles (Cycles at Slower Interval: 10s) ─ */
const HERO_TITLES = [
  {
    badge: "Moi Educational Centre · 40 Years of Excellence",
    headline: "Celebrating 40 Years\nof Academic Excellence.",
    sub: "Empowering confident, compassionate, and innovative global leaders through world-class CBC and Cambridge education in Nairobi, Kenya."
  },
  {
    badge: "Global Standards · Locally Trusted",
    headline: "World-Class\nAcademic Standards.",
    sub: "Preparing learners for premier global universities and future leadership roles through holistic CBC and Cambridge International curricula."
  },
  {
    badge: "Tradition & Innovation · Est. 1986",
    headline: "Rooted in Legacy.\nBuilt for the Future.",
    sub: "Combining four decades of character formation, modern STEM innovation, and global learning to shape Kenya's brightest minds."
  },
  {
    badge: "Global Delegations & Exchanges",
    headline: "Inspiring Tomorrow's\nGlobal Leaders.",
    sub: "From the World Scholar's Cup in Malaysia to European Music Tours in Vienna — unlocking global horizons for every student."
  },
  {
    badge: "Nurturing Potential · Pre-Primary to Senior School",
    headline: "Where Excellence\nBegins Every Day.",
    sub: "A vibrant, secure campus where curiosity, integrity, and creative mastery grow together across 15+ sports and 50+ clubs."
  }
];

/* ─── Photo Slides (Cycles at Faster Interval: 5s) ────── */
const PHOTO_SLIDES = [
  imgUpload8,
  imgSchool7Uploaded,
  imgGlobalRound2,
  imgGlobalRound1,
  imgBritishSchool1,
  imgCam02Parking,
  imgBritishSchool2,
  imgUpload7,
  imgDSC00492,
  '/assets/gallery/DSC_4232.JPG',
  '/assets/gallery/DSC_4265.JPG',
  '/assets/gallery/DSC_4136.JPG'
];

/* ─── Main Component ───────────────────────────────────── */
const HeroV3 = () => {
  const sectionRef   = useRef();
  const headlineRef  = useRef();
  const subRef       = useRef();
  const ctaRef       = useRef();
  const trustRef     = useRef();
  const tickerRef    = useRef();

  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [activeTitleIndex, setActiveTitleIndex] = useState(0);
  const [isVideoBg, setIsVideoBg] = useState(true);
  const heroVideoRef = useRef(null);
  const heroDecayRef = useRef(null);

  /* Scroll velocity listener for Hero Video */
  useEffect(() => {
    if (!isVideoBg || !heroVideoRef.current || !sectionRef.current) return;
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: 'bottom top',
      onUpdate: (self) => {
        const vel = Math.abs(self.getVelocity());
        if (heroVideoRef.current && vel > 60) {
          const rate = Math.min(3.2, Math.max(1.0, 1.0 + (vel / 800) * 1.6));
          heroVideoRef.current.playbackRate = parseFloat(rate.toFixed(1));

          if (heroDecayRef.current) clearTimeout(heroDecayRef.current);
          heroDecayRef.current = setTimeout(() => {
            const easeDown = () => {
              if (!heroVideoRef.current) return;
              const current = heroVideoRef.current.playbackRate;
              if (current > 1.05) {
                heroVideoRef.current.playbackRate = Math.max(1.0, current - 0.2);
                setTimeout(easeDown, 60);
              } else {
                heroVideoRef.current.playbackRate = 1.0;
              }
            };
            easeDown();
          }, 150);
        }
      }
    });
    return () => {
      trigger.kill();
      if (heroDecayRef.current) clearTimeout(heroDecayRef.current);
    };
  }, [isVideoBg]);

  /* 1. Automated Background Photo Slider (Faster: every 5s) */
  useEffect(() => {
    if (isVideoBg) return;
    const photoInterval = setInterval(() => {
      setActivePhotoIndex((prev) => (prev + 1) % PHOTO_SLIDES.length);
    }, 5000);
    return () => clearInterval(photoInterval);
  }, [isVideoBg]);

  /* 2. Automated Title & Subtext Slider (Slower interval: every 10s) */
  useEffect(() => {
    const titleInterval = setInterval(() => {
      setActiveTitleIndex((prev) => (prev + 1) % HERO_TITLES.length);
    }, 10000);
    return () => clearInterval(titleInterval);
  }, []);

  /* Initial Entrance Animation */
  useEffect(() => {
    if (ctaRef.current) gsap.fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.3 });
    if (trustRef.current) gsap.fromTo(trustRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.5 });
    if (tickerRef.current) gsap.fromTo(tickerRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: 'power3.out' });
  }, []);

  /* Animate headline text and subtext whenever activeTitleIndex changes */
  useEffect(() => {
    if (!headlineRef.current || !subRef.current) return;
    const words = headlineRef.current.querySelectorAll('.hero-word');
    if (!words || words.length === 0) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    gsap.set(subRef.current, { opacity: 0, y: 18 });
    gsap.set(headlineRef.current, { opacity: 1, y: 0 });

    tl.fromTo(words, 
      { opacity: 0, y: 20, filter: 'blur(8px)', scale: 0.96 },
      { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1, duration: 0.65, stagger: 0.06 }
    )
    .to(subRef.current, { opacity: 1, y: 0, duration: 0.65 }, '-=0.35');

    return () => tl.kill();
  }, [activeTitleIndex]);

  /* Helper to format headline text with clean line breaks */
  const renderHeadline = (text) => {
    const highlights = ['Excellence', 'Leaders', 'Future', 'Innovation', '40', 'Years', 'Standards', 'Academic', 'World-Class'];
    const lines = text.split('\n');

    return lines.map((line, lIdx) => (
      <div className="hero-headline-line" key={lIdx}>
        {line.split(' ').map((word, wIdx) => {
          const cleanWord = word.replace(/[.,'s]/g, '');
          const isHighlight = highlights.includes(cleanWord);
          return (
            <span className="hero-word-wrap" key={wIdx}>
              <span className={`hero-word ${isHighlight ? 'hero-gradient-text' : ''}`}>
                {word}
              </span>
              {' '}
            </span>
          );
        })}
      </div>
    ));
  };

  const currentTitleData = HERO_TITLES[activeTitleIndex];

  return (
    <section className="hero-v3" ref={sectionRef}>
      
      {/* ── Background Layers: Cinematic Slider OR Live Drone Video ── */}
      {isVideoBg ? (
        <div className="hero-bg-video-layer">
          <video
            ref={heroVideoRef}
            src={heroVideo}
            poster={heroPoster}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="hero-bg-grade" aria-hidden="true" />
        </div>
      ) : (
        <div className="hero-slider-wrap">
          {PHOTO_SLIDES.map((slideImg, i) => (
            <div key={i} className={`hero-slide ${i === activePhotoIndex ? 'active' : ''}`}>
              <img src={slideImg} alt={`MEC Campus slide ${i + 1}`} loading={i === 0 ? "eager" : "lazy"} />
            </div>
          ))}
          {/* Left-to-Right Dark Gradient Shield */}
          <div className="hero-bg-grade" aria-hidden="true" />
        </div>
      )}

      {/* ── Foreground Elements (Spacious Hero Content) ── */}
      <div className="hero-v3-inner">
        
        {/* Content Column */}
        <div className="hero-v3-content">
          
          {/* View Toggle Bar (Photo Showcase vs 4K Drone View) */}
          <div className="hero-view-toggle-bar">
            <button
              className={`hero-toggle-pill ${!isVideoBg ? 'active' : ''}`}
              onClick={() => setIsVideoBg(false)}
              aria-label="Switch to Photo Showcase"
            >
              <FaImages style={{ fontSize: '13px' }} /> Photo Showcase
            </button>
            <button
              className={`hero-toggle-pill ${isVideoBg ? 'active' : ''}`}
              onClick={() => setIsVideoBg(true)}
              aria-label="Switch to 4K Aerial Drone View"
            >
              <FaVideo style={{ fontSize: '13px' }} /> 4K Drone View
            </button>
          </div>

          {/* Dynamic Anniversary & Subsystem Badge */}
          <div className="hero-anniversary-badge">
            <span className="anniversary-dot" />
            <span>{currentTitleData.badge}</span>
          </div>

          <h1 ref={headlineRef} className="hero-headline-v3">
            {renderHeadline(currentTitleData.headline)}
          </h1>

          <p ref={subRef} className="hero-sub" style={{ opacity: 0, transform: 'translateY(18px)' }}>
            {currentTitleData.sub}
          </p>

          <div ref={ctaRef} className="hero-cta-group" style={{ opacity: 0, transform: 'translateY(20px)' }}>
            <Link to="/admissions/admission-process" className="hero-btn-primary">
              <span>Apply Now</span>
              <span className="hero-btn-primary-arrow">→</span>
            </Link>
            <button className="hero-btn-secondary" onClick={() => window.open('https://wa.me/254706280170', '_blank')}>
              Book a School Tour
            </button>
            <Link to="/education/CBC/senior-school" className="hero-btn-outline">
              Explore Programmes
            </Link>
          </div>

          {/* Monochrome Trust Badges Row */}
          <div ref={trustRef} className="hero-trust-badges" style={{ opacity: 0, transform: 'translateY(16px)' }}>
            <div className="trust-badge">
              <img src={cambridgeLogo} alt="Cambridge International" />
              <span>Cambridge</span>
            </div>
            <div className="trust-badge">
              <img src={kenyaCoatOfArms} alt="Kenya CBC Accreditation" style={{ height: '24px' }} />
              <span>CBC</span>
            </div>
            <div className="trust-badge">
              <img src={nccLogo} alt="NCC Education" style={{ height: '16px' }} />
              <span>NCC</span>
            </div>
            <div className="trust-badge">
              <img src={kaisLogo} alt="KAIS Kenya" style={{ height: '28px' }} />
              <span>KAIS</span>
            </div>
          </div>

        </div>

      </div>

      {/* ── Broadcast News Ticker (Lower-Third Metrics Moving Right to Left) ── */}
      <div className="hero-news-ticker" ref={tickerRef} aria-label="MEC Live Academic Metrics Broadcast Ticker">
        <div className="ticker-badge">
          <span className="ticker-beacon" />
          <span className="ticker-badge-text">MEC LIVE METRICS</span>
        </div>

        <div className="ticker-track-container">
          <div className="ticker-track">
            {/* Duplicated list 3x for infinite right-to-left marquee scroll */}
            {[...STATS, ...STATS, ...STATS].map((stat, idx) => {
              const IconComp = stat.Icon;
              return (
                <div key={idx} className="ticker-item">
                  <span className="ticker-icon" aria-hidden="true">
                    <IconComp style={{ fontSize: '13px', color: '#38bdf8' }} />
                  </span>
                  <span className="ticker-value">{stat.value}</span>
                  <span className="ticker-label">{stat.label}</span>
                  <span className="ticker-tag">{stat.trend}</span>
                  <span className="ticker-separator">•</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroV3;
