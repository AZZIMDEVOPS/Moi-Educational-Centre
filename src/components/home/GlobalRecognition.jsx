import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CountUp from 'react-countup';

import cambridgeLogo from '../../assets/cambridge.png';
import pearsonLogo from '../../assets/pearson.png';
import kaisLogo from '../../assets/kais.png';
import edexcelLogo from '../../assets/edexcel.png';
import abrsmLogo from '../../assets/abrsm.gif';
import kenyaGovSeal from '../../assets/kenya-government-seal.svg';
import '../../css/global-recognition.css';

gsap.registerPlugin(ScrollTrigger);

const accreditations = [
  {
    logo: cambridgeLogo,
    name: 'Cambridge International',
    desc: 'Accredited to deliver internationally recognized Cambridge qualifications from Primary through A Levels.',
    status: 'ACCREDITED',
    statusColor: '#10B981',
  },
  {
    logo: kenyaGovSeal,
    isFullColor: true,
    name: 'Ministry of Education (CBC)',
    desc: 'Approved and registered by the Republic of Kenya Ministry of Education to deliver the Competency-Based Curriculum.',
    status: 'APPROVED',
    statusColor: '#3B82F6',
  },
  {
    logo: kaisLogo,
    name: 'KAIS Member',
    desc: 'Proud member of the Kenya Association of International Schools, committed to global educational standards.',
    status: 'MEMBER',
    statusColor: '#06B6D4',
  },
  {
    logo: abrsmLogo,
    name: 'ABRSM Music',
    desc: 'Certified examination centre for the Associated Board of the Royal Schools of Music.',
    status: 'CERTIFIED',
    statusColor: '#A855F7',
  }
];

const TRUST_LOGOS = [
  { src: cambridgeLogo, alt: 'Cambridge International Education', label: 'Cambridge Assessment' },
  { src: kenyaGovSeal, alt: 'Republic of Kenya Ministry of Education', isColor: true, label: 'Ministry of Education (CBC)' },
  { src: kaisLogo, alt: 'Kenya Association of International Schools', label: 'KAIS International' },
  { src: abrsmLogo, alt: 'ABRSM Music Examination Board', label: 'ABRSM Music' },
  { src: pearsonLogo, alt: 'Pearson Qualifications', label: 'Pearson Academic' },
  { src: edexcelLogo, alt: 'Edexcel International', label: 'Edexcel International' },
];

const GlobalRecognition = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header reveal
      gsap.fromTo('.gr-header-animate', 
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gr-header',
            start: 'top 88%',
          }
        }
      );

      // 2. Metrics reveal
      gsap.fromTo('.gr-metrics-bar',
        { opacity: 0, y: 25, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gr-metrics-bar',
            start: 'top 88%',
          }
        }
      );

      // 3. Staggered reveal for accreditation cards
      const cards = gsap.utils.toArray('.gr-card');
      gsap.fromTo(cards, 
        { opacity: 0, y: 30, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gr-grid',
            start: 'top 85%'
          }
        }
      );

      // 4. Trusted Showcase reveal
      gsap.fromTo('.gr-trusted-showcase',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gr-trusted-showcase',
            start: 'top 90%'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="global-recognition-section" ref={containerRef} aria-label="Accreditation and Impact">
      {/* Layered Ambient Background Lighting */}
      <div className="gr-bg-ambient gr-bg-purple-glow" aria-hidden="true" />
      <div className="gr-bg-ambient gr-bg-blue-glow" aria-hidden="true" />

      <div className="gr-container">
        {/* Layer 1: Section Introduction */}
        <header className="gr-header">
          <div className="gr-badge gr-header-animate">
            <span className="gr-badge-dot" />
            <span>GLOBAL STANDARDS & RECOGNITION</span>
          </div>

          <h2 className="gr-title gr-header-animate">
            <span className="gr-title-line-1">Globally Recognized.</span>
            <span className="gr-title-line-2">Locally Trusted.</span>
          </h2>

          <p className="gr-subtitle gr-header-animate">
            Decades of educational excellence, trusted by families and recognized by leading global institutions.
          </p>
        </header>

        {/* Layer 2: Statistics / Impact Metrics */}
        <div className="gr-metrics-bar">
          <div className="gr-metric-item">
            <div className="gr-metric-number">
              <CountUp end={40} suffix="+" enableScrollSpy scrollSpyOnce duration={2.5} />
            </div>
            <div className="gr-metric-label">Years of Excellence</div>
          </div>

          <div className="gr-metric-divider" aria-hidden="true" />

          <div className="gr-metric-item">
            <div className="gr-metric-number">
              <CountUp end={2500} suffix="+" separator="," enableScrollSpy scrollSpyOnce duration={2.5} />
            </div>
            <div className="gr-metric-label">Learners Enrolled</div>
          </div>

          <div className="gr-metric-divider" aria-hidden="true" />

          <div className="gr-metric-item">
            <div className="gr-metric-number">
              <CountUp end={100} suffix="+" enableScrollSpy scrollSpyOnce duration={2.5} />
            </div>
            <div className="gr-metric-label">Dedicated Educators</div>
          </div>
        </div>

        {/* Layer 3: Accreditation & Recognition Cards */}
        <div className="gr-grid">
          {accreditations.map((item, i) => (
            <article className="gr-card" key={i} tabIndex={0}>
              <div className="gr-card-logo-wrap">
                <img 
                  src={item.logo} 
                  alt={`${item.name} Official Logo`} 
                  className={`gr-card-logo ${item.isFullColor ? 'gr-card-logo-color' : ''}`} 
                  loading="lazy" 
                />
              </div>

              <h3 className="gr-card-title">{item.name}</h3>
              <p className="gr-card-desc">{item.desc}</p>

              <div className="gr-card-footer">
                <span className="gr-status-pill">
                  <span className="gr-status-dot" style={{ backgroundColor: item.statusColor, boxShadow: `0 0 8px ${item.statusColor}` }} />
                  {item.status}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Layer 4: Trusted & Recognised By Wall */}
        <div className="gr-trusted-showcase">
          <div className="gr-separator" aria-hidden="true" />

          <div className="gr-trusted-header">
            <h3>TRUSTED & RECOGNISED BY</h3>
          </div>

          <div className="gr-trusted-grid">
            {TRUST_LOGOS.map((logo, i) => (
              <div className="gr-trusted-item" key={i} title={logo.label}>
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className={`gr-trusted-logo ${logo.isColor ? 'gr-trusted-logo-color' : ''}`} 
                  loading="lazy" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalRecognition;
