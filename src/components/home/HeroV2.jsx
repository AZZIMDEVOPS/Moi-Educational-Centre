import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import schoolImg from '../../assets/school7.jpg';
import '../../css/home-v2.css';

/* ─── CountUp Hook ─────────────────────────────────────── */
const useCountUp = (target, duration = 1800, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const num = parseInt(target.replace(/\D/g, ''));
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

const STATS = [
  { value: '40+',    label: 'Years of Excellence', icon: '🏆' },
  { value: '2500+',  label: 'Students Enrolled',   icon: '👩‍🎓' },
  { value: '100+',   label: 'Expert Educators',    icon: '👨‍🏫' },
  { value: '98%',    label: 'University Placement', icon: '🎓' },
  { value: '15+',    label: 'Sports Disciplines',  icon: '⚽' },
  { value: '50+',    label: 'Clubs & Activities',  icon: '🌟' },
];

const FEATURES = [
  { icon: '🎓', text: 'Academic Excellence' },
  { icon: '🌱', text: 'Holistic Development' },
  { icon: '🤖', text: 'Innovative Learning' },
  { icon: '❤️', text: 'Strong Values' },
];

/* ─── Stat Item with CountUp ─────────────────────────────── */
const StatItem = ({ value, label, started }) => {
  const display = useCountUp(value, 1600, started);
  return (
    <div className="hero-stat-item">
      <span className="hero-stat-value">{display}</span>
      <span className="hero-stat-label">{label}</span>
    </div>
  );
};

/* ─── Main Component ───────────────────────────────────── */
const HeroV2 = () => {
  const sectionRef    = useRef();
  const badgeRef      = useRef();
  const headlineRef   = useRef();
  const subRef        = useRef();
  const ctaRef        = useRef();
  const trustRef      = useRef();
  const featuresRef   = useRef();
  const statsCardRef  = useRef();
  const imageRef      = useRef();
  const mouseGlowRef  = useRef();
  const canvasRef     = useRef();

  const [isMobile, setIsMobile]       = useState(false);
  const [statsStarted, setStatsStarted] = useState(false);

  /* Mobile detection */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1100);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* GSAP staggered entrance */
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.15, defaults: { ease: 'power3.out' } });
    tl.to(badgeRef.current,    { opacity: 1, y: 0, duration: 0.7 })
      .to(headlineRef.current, { opacity: 1, y: 0, duration: 0.85 }, '-=0.45')
      .to(subRef.current,      { opacity: 1, y: 0, duration: 0.7  }, '-=0.55')
      .to(ctaRef.current,      { opacity: 1, y: 0, duration: 0.6  }, '-=0.45')
      .to(featuresRef.current, { opacity: 1, y: 0, duration: 0.55 }, '-=0.40')
      .to(trustRef.current,    { opacity: 1, y: 0, duration: 0.50 }, '-=0.35')
      .to(imageRef.current,    { opacity: 1, duration: 1.0, ease: 'power2.out' }, '-=0.90')
      .to(statsCardRef.current,{ opacity: 1, y: 0, duration: 0.65, ease: 'back.out(1.2)' }, '-=0.60')
      .add(() => setStatsStarted(true), '-=0.40');
    return () => tl.kill();
  }, []);

  /* Mouse-follow glow & 3D Image Tilt (desktop only) */
  useEffect(() => {
    if (isMobile) return;
    const handleMouse = (e) => {
      if (mouseGlowRef.current) {
        mouseGlowRef.current.style.left = `${e.clientX}px`;
        mouseGlowRef.current.style.top  = `${e.clientY}px`;
      }
      
      if (imageRef.current) {
        const xAxis = (window.innerWidth / 2 - e.clientX) / 40; // Max ~20deg
        const yAxis = (window.innerHeight / 2 - e.clientY) / 40;
        imageRef.current.style.transform = `perspective(1200px) rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`;
      }
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [isMobile]);

  /* Image parallax */
  useEffect(() => {
    if (isMobile || !imageRef.current) return;
    const handleScroll = () => {
      const y = window.scrollY;
      if (imageRef.current) {
        imageRef.current.querySelector('img, .hero-poster')
          ?.style.setProperty('transform', `translateY(${y * 0.20}px) scale(1.08)`);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  /* Particle canvas */
  useEffect(() => {
    if (isMobile) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.3,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.45 + 0.08,
      hue: Math.random() > 0.5 ? '168, 85, 247' : '59, 130, 246',
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.hue}, ${p.opacity})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [isMobile]);

  /* Magnetic button effect */
  const magneticRef = useCallback(node => {
    if (!node || isMobile) return;
    const btn = node;
    const onMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top  + rect.height / 2;
      const dx = (e.clientX - cx) * 0.18;
      const dy = (e.clientY - cy) * 0.18;
      btn.style.transform = `translate(${dx}px, ${dy}px) translateY(-3px) scale(1.02)`;
    };
    const onLeave = () => { btn.style.transform = ''; };
    btn.addEventListener('mousemove', onMove);
    btn.addEventListener('mouseleave', onLeave);
  }, [isMobile]);

  const scrollDown = () => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });

  return (
    <section className="hero-v2" ref={sectionRef} aria-label="MEC Hero Section">

      {/* ── Background Layers ── */}
      <div className="hero-bg-base" aria-hidden="true" />

      {/* Mouse glow (desktop) */}
      {!isMobile && (
        <div ref={mouseGlowRef} className="hero-mouse-glow" aria-hidden="true"
          style={{ left: '30%', top: '50%' }} />
      )}

      {/* Morphing blobs */}
      <div className="hero-blob-wrap" aria-hidden="true">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
        <div className="hero-blob hero-blob-4" />
      </div>

      {/* Particle canvas */}
      {!isMobile && (
        <canvas ref={canvasRef} className="hero-particles" aria-hidden="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 2 }} />
      )}

      {/* Floating circles */}
      <div className="hero-circles" aria-hidden="true">
        <div className="hero-circle hero-circle-1" />
        <div className="hero-circle hero-circle-2" />
        <div className="hero-circle hero-circle-3" />
      </div>

      {/* SVG Grid Lines */}
      <svg className="hero-grid-svg" aria-hidden="true" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1,
      }}>
        {[...Array(10)].map((_, i) => (
          <line key={`v${i}`} x1={`${i * 11.1}%`} y1="0" x2={`${i * 11.1}%`} y2="100%"
            stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        ))}
        {[...Array(8)].map((_, i) => (
          <line key={`h${i}`} x1="0" y1={`${i * 14.3}%`} x2="100%" y2={`${i * 14.3}%`}
            stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        ))}
      </svg>

      {/* ── Two-Column Layout ── */}
      <div className="hero-v2-inner">

        {/* LEFT: Content */}
        <div className="hero-left">

          {/* Badge */}
          <div ref={badgeRef} className="hero-badge" role="status">
            <span className="hero-badge-dot" aria-hidden="true" />
            <span className="hero-badge-text">🏆 Celebrating 40 Years of Excellence · Est. 1986</span>
          </div>

          {/* Headline */}
          <h1 ref={headlineRef} className="hero-headline">
            <span className="hero-headline-line">Where Every Child</span>
            <span className="hero-headline-gradient">Discovers Their</span>
            <span className="hero-headline-line">Greatest Potential.</span>
          </h1>

          {/* Subheading */}
          <p ref={subRef} className="hero-sub">
            Moi Educational Centre is one of Kenya's most prestigious institutions — inspiring
            confident, compassionate and innovative leaders through world-class education,
            character development and holistic growth since 1986.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="hero-cta-group">
            <Link
              to="/admissions/admission-process"
              className="hero-btn-primary"
              id="hero-apply-btn"
              ref={magneticRef}
            >
              <span>Apply Now</span>
              <span className="hero-btn-primary-arrow" aria-hidden="true">→</span>
            </Link>
            <button
              className="hero-btn-secondary"
              id="hero-tour-btn"
              onClick={() => window.open(
                'https://wa.me/254706280170?text=Hello%20MEC%20Admissions%20Team%2C%20I%20would%20like%20to%20book%20a%20school%20tour.',
                '_blank'
              )}
            >
              <span>🏫</span> Book a School Tour
            </button>
            <Link
              to="/education/CBC/senior-school"
              className="hero-btn-outline"
              id="hero-explore-btn"
            >
              Explore Programmes
            </Link>
          </div>

          {/* Feature Cards */}
          <div ref={featuresRef} className="hero-feature-cards">
            {FEATURES.map(f => (
              <div key={f.text} className="hero-feature-card">
                <span className="hero-feature-icon" aria-hidden="true">{f.icon}</span>
                <span className="hero-feature-text">{f.text}</span>
              </div>
            ))}
          </div>

          {/* Trust Strip */}
          <div ref={trustRef} className="hero-trust" role="list" aria-label="Accreditations">
            {['CBC Accredited', 'Cambridge Certified', 'ABRSM Music', 'KAIS Member'].map((item, i, arr) => (
              <React.Fragment key={item}>
                <div className="hero-trust-item" role="listitem">
                  <span className="hero-trust-dot" aria-hidden="true" />
                  {item}
                </div>
                {i < arr.length - 1 && <div className="hero-trust-dot" aria-hidden="true" />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* RIGHT: Image + Stats Card */}
        <div className="hero-right">

          {/* Campus Image */}
          <div 
            ref={imageRef} 
            className="hero-image-wrap" 
            style={{ 
              opacity: 0, 
              transition: 'transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1)',
              transformStyle: 'preserve-3d'
            }}
          >
            <img
              src={schoolImg}
              alt="MEC students on campus"
              loading="eager"
              decoding="async"
              style={{ transform: 'scale(1.08)', transformOrigin: 'center top' }}
            />
            <div className="hero-image-grade"  aria-hidden="true" />
            <div className="hero-image-vignette" aria-hidden="true" />
          </div>

          {/* Glassmorphism Stats Card */}
          <div
            ref={statsCardRef}
            className="hero-stats-card"
            role="region"
            aria-label="MEC Key Statistics"
          >
            <div className="hero-stats-card-title">MEC at a Glance</div>
            <div className="hero-stats-grid">
              {STATS.map(stat => (
                <StatItem
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  started={statsStarted}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        className="hero-scroll"
        onClick={scrollDown}
        aria-label="Scroll down to explore"
      >
        <div className="hero-scroll-mouse">
          <div className="hero-scroll-wheel" />
        </div>
        <span className="hero-scroll-label">Scroll</span>
      </button>
    </section>
  );
};

export default HeroV2;
