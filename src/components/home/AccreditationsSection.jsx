import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Logos
import cambridgeLogo from '../../assets/cambridge.png';
import pearsonLogo from '../../assets/pearson.png';
import edexcelLogo from '../../assets/edexcel.png';
import kaisLogo from '../../assets/kais.png';
import nccLogo from '../../assets/ncc.png';
import mecLogo from '../../assets/logo.png';

import GlobalConnections from './GlobalConnections';

import '../../css/accreditations.css';

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

const TrustStat = ({ value, label }) => {
  const statRef = useRef();
  const [started, setStarted] = useState(false);
  const display = useCountUp(value, 2000, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.2 }
    );
    if (statRef.current) observer.observe(statRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={statRef} className="trust-stat">
      <div className="trust-stat-val">{display}</div>
      <div className="trust-stat-lbl">{label}</div>
    </div>
  );
};

/* ─── Data ─────────────────────────────────────────────── */
const ACCREDITATIONS = [
  { id: 'cambridge', name: 'Cambridge International', desc: 'Globally recognized IGCSE and A-Level qualifications.', badge: 'International Curriculum', logo: cambridgeLogo },
  { id: 'cbc', name: 'Competency-Based Curriculum', desc: 'Aligned with the Ministry of Education for holistic learning.', badge: 'National Framework', logo: mecLogo },
  { id: 'pearson', name: 'Pearson Edexcel', desc: 'International assessments and global educational benchmarking.', badge: 'Global Assessments', logo: pearsonLogo },
  { id: 'ncc', name: 'NCC Education', desc: 'Providing internationally recognized computing qualifications.', badge: 'Tech Education', logo: nccLogo },
  { id: 'kais', name: 'KAIS Member', desc: 'Kenya Association of International Schools collaboration.', badge: 'Affiliation', logo: kaisLogo },
  { id: 'edexcel', name: 'Edexcel Partner', desc: 'Delivering excellence in academic and vocational qualifications.', badge: 'Partnership', logo: edexcelLogo }
];

const TIMELINE = [
  { year: '1986', event: 'School Founded' },
  { year: '2005', event: 'International Expansion' },
  { year: '2015', event: 'Cambridge Accreditation' },
  { year: '2020', event: 'CBC Implementation' },
  { year: 'Present', event: '40 Years of Excellence' }
];

/* ─── Main Component ───────────────────────────────────── */
const AccreditationsSection = () => {
  const containerRef = useRef();

  return (
    <section className="accreditations-v2" ref={containerRef} aria-label="Accreditations and Partnerships">
      
      {/* Dark Ambient Glowing Background Mesh */}
      <div className="acc-bg-mesh" />
      <div className="acc-ambient-glow" />

      <div className="inner-row">
        
        {/* 1. Header */}
        <div className="acc-header">
          <div className="acc-eyebrow">
            <span className="acc-eyebrow-dot" />
            Global Recognition & Accreditations
          </div>
          <h2 className="acc-title">
            Accredited. Recognized. <span className="acc-gradient">Trusted.</span>
          </h2>
          <p className="acc-sub">
            Moi Educational Centre is proudly accredited and affiliated with internationally respected education 
            and examination bodies, ensuring every learner receives a world-class education that meets global standards.
          </p>
        </div>

        {/* 2. Glass Cards Grid */}
        <div className="acc-cards-grid">
          {ACCREDITATIONS.map((acc) => (
            <div className="acc-card" key={acc.id}>
              <div className="acc-card-inner">
                <div className="acc-card-badge">{acc.badge}</div>
                <div className="acc-logo-wrap">
                  <img src={acc.logo} alt={acc.name} loading="lazy" />
                </div>
                <h3 className="acc-card-name">{acc.name}</h3>
                <p className="acc-card-desc">{acc.desc}</p>
                <div className="acc-card-cta">
                  <span>Learn More</span>
                  <span className="arrow">→</span>
                </div>
              </div>
              <div className="acc-card-glow" />
            </div>
          ))}
        </div>

        {/* 3. Real Interactive World Map & Connections Component */}
        <GlobalConnections />

        {/* 4. Trust Metrics */}
        <div className="acc-stats-row">
          <TrustStat value="40+" label="Years of Excellence" />
          <TrustStat value="6+" label="Global Partners" />
          <TrustStat value="100%" label="CBC Approved" />
          <TrustStat value="Top 10" label="Cambridge Centres" />
        </div>

        {/* 5. Recognition Timeline */}
        <div className="acc-timeline-section">
          <div className="acc-timeline-track">
            {TIMELINE.map((item, i) => (
              <div className="acc-timeline-item" key={i}>
                <div className="acc-timeline-year">{item.year}</div>
                <div className="acc-timeline-dot" />
                <div className="acc-timeline-event">{item.event}</div>
              </div>
            ))}
            <div className="acc-timeline-line" />
          </div>
        </div>

        {/* 6. Parent Confidence Statement */}
        <div className="acc-confidence-statement">
          <div className="acc-shield-icon">🛡️</div>
          <p>
            Every programme at Moi Educational Centre is designed to meet nationally approved and internationally 
            recognized educational standards, giving every learner the confidence to thrive anywhere in the world.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AccreditationsSection;
