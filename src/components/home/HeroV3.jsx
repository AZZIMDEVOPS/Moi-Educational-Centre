import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

// Uploaded Hero Section Assets
import imgCam02Parking from '../../assets/hero-uploads/Cam02-Parking.jpg';
import imgDSC00492 from '../../assets/hero-uploads/DSC00492.jpg';
import imgUpload6 from '../../assets/hero-uploads/images (6).jpg';
import imgUpload8 from '../../assets/hero-uploads/images (8).jpg';
import imgMaxres from '../../assets/hero-uploads/maxresdefault.jpg';
import imgSchool7Uploaded from '../../assets/hero-uploads/school7-D3PnsiCT (1).jpg';

// New World Scholar's Cup & International Exchange Assets
import imgGlobalRound1 from '../../assets/hero-uploads/global-round-2026-1.jpg';
import imgBritishSchool1 from '../../assets/hero-uploads/british-school-kl-1.jpg';
import imgBritishSchool3 from '../../assets/hero-uploads/british-school-kl-3.jpg';

// Trust Badge Logos
import cambridgeLogo from '../../assets/cambridge.png';
import kaisLogo from '../../assets/kais.png';
import nccLogo from '../../assets/ncc.png';
import logoBadge from '../../assets/logo.png';

import '../../css/home-v3.css';

/* ─── Stats Data ───────────────────────────────────────── */
const STATS = [
  { id: 'years',     value: '40+',   label: 'Years of Excellence', icon: '🏛️', trend: 'Est. 1986' },
  { id: 'students',  value: '2,500+', label: 'Active Learners',     icon: '🎓', trend: 'CBC & Cambridge' },
  { id: 'teachers',  value: '100+',  label: 'Educators & Staff',   icon: '👩‍🏫', trend: 'Global Standards' },
  { id: 'placement', value: '98%',   label: 'University Success',  icon: '🌟', trend: 'Top Tier Entry' },
  { id: 'sports',    value: '15+',   label: 'Sports Academies',    icon: '⚽', trend: 'National Rank' },
  { id: 'clubs',     value: '50+',   label: 'Clubs & STEM Labs',   icon: '🤖', trend: 'Robotics & Music' },
];

/* ─── Slides Data ──────────────────────────────────────── */
const SLIDES = [
  { 
    img: imgUpload8, 
    headline: "World-Class\nAcademic\nStandards.", 
    sub: "Preparing students for top global universities and future leadership roles through CBC and Cambridge excellence." 
  },
  { 
    img: imgSchool7Uploaded,      
    headline: "Celebrating 40 Years\nof Academic Excellence.", 
    sub: "Four decades of academic achievement, innovation, and holistic education since 1986." 
  },
  { 
    img: imgMaxres,     
    headline: "Rooted in Legacy.\nBuilt for the Future.", 
    sub: "Combining tradition, innovation, and global learning to prepare tomorrow's leaders." 
  },
  { 
    img: imgGlobalRound1,   
    headline: "World Scholar's Cup\nGlobal Round 2026.", 
    sub: "MEC Scholars representing Kenya on the global stage in Kuala Lumpur, Malaysia." 
  },
  { 
    img: imgBritishSchool1,   
    headline: "Global School Exchanges\n& International Links.", 
    sub: "Connecting our learners to world-class educational networks at British International School KL." 
  },
  { 
    img: imgCam02Parking,   
    headline: "Inspiring Tomorrow's\nGlobal Leaders.", 
    sub: "Empowering every learner to excel, lead, and thrive in an interconnected world." 
  },
  { 
    img: imgBritishSchool3,   
    headline: "Unlocking Global\nAcademic Horizons.", 
    sub: "Building critical thinking, debate, and international leadership skills worldwide." 
  },
  { 
    img: imgUpload6,     
    headline: "Excellence in CBC\n& Cambridge Education.", 
    sub: "Offering world-class learning pathways that inspire achievement and lifelong success." 
  },
  { 
    img: imgDSC00492,       
    headline: "Where Excellence\nBegins Every Day.", 
    sub: "A nurturing environment where curiosity, confidence, and character grow together." 
  }
];

/* ─── Main Component ───────────────────────────────────── */
const HeroV3 = () => {
  const sectionRef   = useRef();
  const headlineRef  = useRef();
  const subRef       = useRef();
  const ctaRef       = useRef();
  const trustRef     = useRef();
  const tickerRef    = useRef();

  const [activeSlide, setActiveSlide] = useState(0);

  /* Automated Background Slider */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  /* Initial Entrance Animation */
  useEffect(() => {
    if (ctaRef.current) gsap.fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.3 });
    if (trustRef.current) gsap.fromTo(trustRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.5 });
    if (tickerRef.current) gsap.fromTo(tickerRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: 'power3.out' });
  }, []);

  /* Animate headline text and subtext whenever activeSlide changes */
  useEffect(() => {
    if (!headlineRef.current || !subRef.current) return;
    const words = headlineRef.current.querySelectorAll('.hero-word');
    if (!words || words.length === 0) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    gsap.set(subRef.current, { opacity: 0, y: 20 });
    gsap.set(headlineRef.current, { opacity: 1, y: 0 });

    tl.fromTo(words, 
      { opacity: 0, y: 20, filter: 'blur(8px)', scale: 0.96 },
      { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1, duration: 0.55, stagger: 0.06 }
    )
    .to(subRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3');

    return () => tl.kill();
  }, [activeSlide]);

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

  const currentSlideData = SLIDES[activeSlide];

  return (
    <section className="hero-v3" ref={sectionRef}>
      
      {/* ── Background Layers: Cinematic Slider ── */}
      <div className="hero-slider-wrap">
        {SLIDES.map((slide, i) => (
          <div key={i} className={`hero-slide ${i === activeSlide ? 'active' : ''}`}>
            <img src={slide.img} alt={`Slide ${i}`} loading={i === 0 ? "eager" : "lazy"} />
          </div>
        ))}
        {/* Left-to-Right Dark Gradient Shield */}
        <div className="hero-bg-grade" aria-hidden="true" />
      </div>

      {/* ── Foreground Elements (Spacious Hero Content) ── */}
      <div className="hero-v3-inner">
        
        {/* Content Column */}
        <div className="hero-v3-content">
          
          {/* 40 Years Anniversary Badge */}
          <div className="hero-anniversary-badge">
            <span className="anniversary-dot" />
            <span>Moi Educational Centre · 40 Years of Excellence</span>
          </div>

          <h1 ref={headlineRef} className="hero-headline-v3">
            {renderHeadline(currentSlideData.headline)}
          </h1>

          <p ref={subRef} className="hero-sub" style={{ opacity: 0, transform: 'translateY(20px)' }}>
            {currentSlideData.sub}
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
              <img src={logoBadge} alt="CBC" style={{ height: '24px' }} />
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
            {[...STATS, ...STATS, ...STATS].map((stat, idx) => (
              <div key={idx} className="ticker-item">
                <span className="ticker-icon" aria-hidden="true">{stat.icon}</span>
                <span className="ticker-value">{stat.value}</span>
                <span className="ticker-label">{stat.label}</span>
                <span className="ticker-tag">{stat.trend}</span>
                <span className="ticker-separator">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroV3;
