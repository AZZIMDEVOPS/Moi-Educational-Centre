import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import prePrimaryImg from '../../assets/pre-primary.jpg';
import lowerPrimaryImg from '../../assets/junior1.jpg';
import upperPrimaryImg from '../../assets/upper.jpg';
import juniorImg from '../../assets/junior2.jpg';
import seniorImg from '../../assets/senior.jpg';
import cambridgeImg from '../../assets/cambridge.jpg';

import { 
  FaShapes, 
  FaBookReader, 
  FaMicroscope, 
  FaRobot, 
  FaGraduationCap, 
  FaGlobeAmericas,
  FaPaperPlane 
} from 'react-icons/fa';

import '../../css/student-journey.css';

gsap.registerPlugin(ScrollTrigger);

/* ─── CountUp Hook ─────────────────────────────────────── */
const useCountUp = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const num = parseInt(target.replace(/\D/g, ''));
    if (isNaN(num) || num === 0) {
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

const AnimatedStat = ({ value, label, isActive }) => {
  const display = useCountUp(value, 1800, isActive);

  return (
    <div className="journey-stat">
      <span className="journey-stat-value">{display}</span>
      <span className="journey-stat-label">{label}</span>
    </div>
  );
};

const STAGES = [
  {
    id: 'pre-primary',
    stageNum: '01',
    title: 'Pre-Primary',
    subtitle: 'Playgroup to PP2 | Ages 2–5',
    tagline: 'Igniting Wonder, Play & Social Growth',
    desc: 'A warm, nurturing foundation where young minds discover the joy of learning through play, sensory exploration, language, and foundational numeracy.',
    image: prePrimaryImg,
    Icon: FaShapes,
    badge: 'Early Years Foundation',
    curriculumBadge: 'Playgroup – PP2',
    link: '/education/CBC/pre-primary',
    accentColor: '#8B5CF6',
    stats: [
      { value: '100%', label: 'Play-Based Learning' },
      { value: '1:10', label: 'Educator Ratio' }
    ]
  },
  {
    id: 'lower-primary',
    stageNum: '02',
    title: 'Lower Primary',
    subtitle: 'Grades 1–3 CBC | Ages 6–8',
    tagline: 'Core Competencies, Literacy & Curiosity',
    desc: 'Building essential reading, mathematical reasoning, digital literacy, and collaborative problem-solving under Kenya\'s Competency-Based Curriculum.',
    image: lowerPrimaryImg,
    Icon: FaBookReader,
    badge: 'CBC Lower Primary',
    curriculumBadge: 'Grade 1 – Grade 3',
    link: '/education/CBC/lower-primary',
    accentColor: '#3B82F6',
    stats: [
      { value: '100%', label: 'CBC Aligned' },
      { value: '30+', label: 'Active Clubs' }
    ]
  },
  {
    id: 'upper-primary',
    stageNum: '03',
    title: 'Upper Primary',
    subtitle: 'Grades 4–6 CBC | Ages 9–11',
    tagline: 'Scientific Inquiry & Critical Thinking',
    desc: 'Deepening academic competencies across science, agriculture, creative arts, and ICT while fostering leadership, sportsmanship, and personal growth.',
    image: upperPrimaryImg,
    Icon: FaMicroscope,
    badge: 'CBC Upper Primary',
    curriculumBadge: 'Grade 4 – Grade 6',
    link: '/education/CBC/upper-primary',
    accentColor: '#0EA5E9',
    stats: [
      { value: '100%', label: 'ICT & Science Labs' },
      { value: '15+', label: 'Sports Disciplines' }
    ]
  },
  {
    id: 'junior-school',
    stageNum: '04',
    title: 'Junior School',
    subtitle: 'Grades 7–9 CBC | Ages 12–14',
    tagline: 'STEM Laboratories & Robotics Innovation',
    desc: 'Specialized Junior Secondary learning featuring advanced science labs, coding, robotics, pre-technical studies, and guidance for career exploration.',
    image: juniorImg,
    Icon: FaRobot,
    badge: 'Junior Secondary',
    curriculumBadge: 'Grade 7 – Grade 9',
    link: '/education/CBC/junior-school',
    accentColor: '#10B981',
    stats: [
      { value: '5+', label: 'Coding Tracks' },
      { value: '100%', label: 'Project-Based' }
    ]
  },
  {
    id: 'senior-school',
    stageNum: '05',
    title: 'Senior School',
    subtitle: 'Grades 10–12 CBC Pathways | Ages 15–18',
    tagline: 'Specialized Pathways & Global Leadership',
    desc: 'Advanced CBC Senior School pathways spanning STEM, Social Sciences, and Arts & Sports Science, preparing learners for university and impactful careers.',
    image: seniorImg,
    Icon: FaGraduationCap,
    badge: 'Senior Secondary',
    curriculumBadge: 'Grade 10 – Grade 12',
    link: '/education/CBC/senior-school',
    accentColor: '#8E44AD',
    stats: [
      { value: '100%', label: 'Career Mentorship' },
      { value: '98%', label: 'Academic Success' }
    ]
  },
  {
    id: 'cie-primary',
    stageNum: '06',
    title: 'CIE (Cambridge Year 1 to Year 6)',
    subtitle: 'British International Track | Year 1–6',
    tagline: 'Global Academic Rigor & Cambridge Checkpoint',
    desc: 'Our premier Cambridge International Primary programme running from Year 1 to Year 6. Delivering world-class benchmarks in English, Mathematics, Science, Computing, and Global Perspectives with Cambridge Checkpoint assessments.',
    image: cambridgeImg,
    Icon: FaGlobeAmericas,
    badge: 'Cambridge International',
    curriculumBadge: 'CIE Year 1 – Year 6',
    link: '/education/cambridge',
    accentColor: '#EC4899',
    stats: [
      { value: 'Year 1–6', label: 'Primary Checkpoint' },
      { value: 'Global', label: 'UK Benchmark' }
    ]
  }
];

const StudentJourney = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const svgLineRef = useRef(null);
  const cometRef = useRef(null);
  const stagesRef = useRef([]);
  const [activeStage, setActiveStage] = useState(0);

  const scrollToStage = (index) => {
    const stageEl = stagesRef.current[index];
    if (stageEl) {
      const topOffset = stageEl.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Reveal
      const words = headerRef.current?.querySelectorAll('.journey-word');
      if (words && words.length > 0) {
        gsap.from(words, {
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
          },
          y: 40,
          opacity: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: 'power3.out'
        });
      }

      // 2. Timeline SVG Line Drawing Scrub
      if (svgLineRef.current && containerRef.current) {
        gsap.to(svgLineRef.current, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 40%',
            end: 'bottom 85%',
            scrub: 0.5,
            onUpdate: (self) => {
              if (cometRef.current) {
                const yPos = self.progress * 1000;
                gsap.set(cometRef.current, { attr: { cy: yPos } });
              }
            }
          }
        });
      }

      // 3. Creative Stage Reveals and Active Stage Tracking
      stagesRef.current.forEach((stage, idx) => {
        if (!stage) return;

        const card = stage.querySelector('.journey-card');
        const imageWrap = stage.querySelector('.journey-image-wrap');
        const node = stage.querySelector('.journey-milestone-node');

        // Scroll In Animation
        const isEven = idx % 2 === 0;
        const cardX = isEven ? 50 : -50;
        const imgX = isEven ? -50 : 50;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: stage,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });

        if (card) {
          tl.fromTo(
            card,
            { opacity: 0, x: cardX, y: 40, scale: 0.95, rotateY: isEven ? -6 : 6 },
            { opacity: 1, x: 0, y: 0, scale: 1, rotateY: 0, duration: 0.8, ease: 'power3.out' },
            0
          );
        }

        if (imageWrap) {
          tl.fromTo(
            imageWrap,
            { opacity: 0, x: imgX, y: 40, scale: 0.95, rotateY: isEven ? 6 : -6 },
            { opacity: 1, x: 0, y: 0, scale: 1, rotateY: 0, duration: 0.8, ease: 'power3.out' },
            0.1
          );
        }

        if (node) {
          tl.fromTo(
            node,
            { scale: 0, opacity: 0, rotation: -90 },
            { scale: 1, opacity: 1, rotation: 0, duration: 0.6, ease: 'back.out(1.8)' },
            0.15
          );
        }

        // Active State Trigger when in focus
        ScrollTrigger.create({
          trigger: stage,
          start: 'top 55%',
          end: 'bottom 45%',
          onEnter: () => setActiveStage(idx),
          onEnterBack: () => setActiveStage(idx)
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="student-journey-v2" ref={containerRef} aria-label="Student Journey Timeline">
      
      {/* Background Ambient Glows */}
      <div className="journey-bg-glow top-left" />
      <div className="journey-bg-glow bottom-right" />
      <div className="journey-grid-pattern" />

      <div className="inner-row">
        
        {/* Section Header */}
        <div className="journey-header" ref={headerRef}>
          <div className="section-eyebrow">
            <span className="section-eyebrow-dot" />
            The MEC Educational Pathway
          </div>
          <h2 className="journey-title">
            <span className="journey-word-wrap"><span className="journey-word">From</span></span>{' '}
            <span className="journey-word-wrap"><span className="journey-word">Early</span></span>{' '}
            <span className="journey-word-wrap"><span className="journey-word">Years</span></span>{' '}
            <span className="journey-word-wrap"><span className="journey-word">to</span></span>{' '}
            <span className="journey-word-wrap"><span className="journey-word journey-gradient">Senior</span></span>{' '}
            <span className="journey-word-wrap"><span className="journey-word journey-gradient">School</span></span>
          </h2>
          <p className="journey-sub">
            Every step of your child's educational voyage is carefully crafted to spark curiosity,
            foster character, master innovation, and inspire confident lifelong achievers.
          </p>

          {/* Interactive Stage Step Navigator Bar */}
          <div className="journey-stepper-nav" role="tablist" aria-label="Journey stages navigation">
            <div 
              className="journey-stepper-progress-fill" 
              style={{ width: `${((activeStage + 1) / STAGES.length) * 100}%` }} 
            />
            {STAGES.map((stg, i) => {
              const isCurrent = activeStage === i;
              const isPassed = activeStage > i;
              return (
                <button
                  key={stg.id}
                  type="button"
                  role="tab"
                  aria-selected={isCurrent}
                  className={`journey-step-btn ${isCurrent ? 'active' : ''} ${isPassed ? 'passed' : ''}`}
                  onClick={() => scrollToStage(i)}
                >
                  <span className="step-btn-num">{stg.stageNum}</span>
                  <span className="step-btn-title">{stg.title}</span>
                  {isCurrent && <span className="step-active-dot" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Timeline Container */}
        <div className="journey-timeline-container">
          
          {/* Real-time Dynamic SVG Connecting Line */}
          <div className="journey-svg-wrap" aria-hidden="true">
            <svg viewBox="0 0 100 1000" preserveAspectRatio="none" className="journey-svg-track">
              {/* Background Guide Line */}
              <line x1="50" y1="0" x2="50" y2="1000" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 6" />
              
              {/* Active Animated Laser Beam Line */}
              <line 
                ref={svgLineRef}
                x1="50" y1="0" x2="50" y2="1000" 
                stroke="url(#journeyGradientV2)" 
                strokeWidth="4" 
                strokeLinecap="round"
                strokeDasharray="1000"
                strokeDashoffset="1000"
              />

              {/* Glowing Comet Tracker Particle */}
              <circle
                ref={cometRef}
                cx="50"
                cy="0"
                r="6"
                fill="#8B5CF6"
                filter="url(#glowFilter)"
              />

              <defs>
                <linearGradient id="journeyGradientV2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="35%" stopColor="#3B82F6" />
                  <stop offset="70%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
                <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#8B5CF6" floodOpacity="0.8" />
                </filter>
              </defs>
            </svg>
          </div>

          {/* Zig-Zag Interactive Stages */}
          {STAGES.map((stage, idx) => {
            const isEven = idx % 2 === 0;
            const isStageActive = activeStage === idx;
            const isStagePassed = activeStage > idx;

            return (
              <div 
                className={`journey-stage ${isEven ? 'image-left' : 'image-right'} ${isStageActive ? 'is-active' : ''} ${isStagePassed ? 'is-passed' : ''}`} 
                key={stage.id}
                ref={el => stagesRef.current[idx] = el}
                id={`stage-${stage.id}`}
              >
                {/* Milestone Node on the central line */}
                <div 
                  className={`journey-milestone-node ${isStageActive ? 'node-active' : ''}`}
                  onClick={() => scrollToStage(idx)}
                  title={`Stage ${stage.stageNum}: ${stage.title}`}
                >
                  <div className="node-stage-pill">{stage.stageNum}</div>
                  <div className="node-pulse-wave" />
                  <div className="node-pulse" />
                  <div className="node-icon">
                    <stage.Icon style={{ fontSize: '15px', color: '#fff' }} />
                  </div>
                </div>

                {/* Content Block */}
                <div className="journey-stage-content">
                  <div className="journey-card">
                    {/* Stage Number & Badge Bar */}
                    <div className="journey-card-topbar">
                      <div className="journey-card-badge">
                        <span className="badge-pulse-dot" />
                        {stage.badge}
                      </div>
                      <span className="journey-stage-counter">Stage {stage.stageNum} / 06</span>
                    </div>

                    <h3 className="journey-card-title">{stage.title}</h3>
                    <h4 className="journey-card-sub">{stage.subtitle}</h4>
                    <p className="journey-card-tagline">“{stage.tagline}”</p>
                    <p className="journey-card-desc">{stage.desc}</p>
                    
                    {/* Live Animated Stat Counters */}
                    <div className="journey-stats-row">
                      {stage.stats.map(stat => (
                        <AnimatedStat 
                          key={stat.label} 
                          value={stat.value} 
                          label={stat.label} 
                          isActive={isStageActive || isStagePassed}
                        />
                      ))}
                    </div>

                    {/* Progress Bar inside Card */}
                    <div className="journey-card-progress">
                      <div 
                        className="journey-card-progress-bar" 
                        style={{ width: isStageActive || isStagePassed ? '100%' : '0%' }}
                      />
                    </div>

                    <div className="journey-card-footer">
                      <Link to={stage.link} className="journey-learn-more">
                        <span>Explore {stage.title}</span>
                        <span className="learn-more-arrow">→</span>
                      </Link>
                      <span className="journey-curriculum-pill">{stage.curriculumBadge}</span>
                    </div>
                  </div>
                </div>

                {/* Image Block */}
                <div className="journey-stage-image">
                  <div className="journey-image-wrap">
                    <img src={stage.image} alt={`${stage.title} at Moi Educational Centre`} loading="lazy" />
                    <div className="journey-image-overlay" />
                    <div className="journey-img-stage-tag">
                      <span className="tag-dot" />
                      <span>{stage.title}</span>
                    </div>
                    <div className="journey-img-glare" />
                  </div>
                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom Milestone Footer CTA */}
        <div className="journey-footer-cta">
          <div className="journey-cta-box">
            <div className="journey-cta-icon">
              <FaPaperPlane style={{ fontSize: '24px', color: '#fff' }} />
            </div>
            <div className="journey-cta-text">
              <h3>Ready to Begin Your Child's Journey at MEC?</h3>
              <p>Applications are ongoing across all educational levels from Pre-Primary to Cambridge Senior School.</p>
            </div>
            <Link to="/admissions" className="journey-cta-btn">
              <span>Apply for Admission</span>
              <span>→</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StudentJourney;
