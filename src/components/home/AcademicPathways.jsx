import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Assets
import imgPreSchool from '../../assets/kids.jpg';
import imgLowerPrimary from '../../assets/academic.jpg';
import imgUpperPrimary from '../../assets/upper.jpg';
import imgJuniorSchool from '../../assets/junior1.jpg';
import imgSeniorSchool from '../../assets/senior.jpg';

import '../../css/academic-pathways.css';

gsap.registerPlugin(ScrollTrigger);

const STAGES = [
  'Early Years',
  'Primary',
  'Junior',
  'Senior',
  'University'
];

const PATHWAYS = [
  {
    id: 'junior',
    title: 'Junior School',
    subtitle: 'Grades 7–9',
    curriculum: 'CBC & Cambridge Lower Secondary',
    age: 'Ages 12–14',
    desc: 'Expanding horizons through discovery, critical thinking, and a robust STEM curriculum.',
    highlights: ['Coding', 'Robotics', 'STEM', 'Creativity', 'Cambridge Checkpoint'],
    image: imgJuniorSchool,
    link: '/education/CBC/junior-school',
    buttonText: 'Discover Junior School',
    gridClass: 'grid-large-left',
    activeStage: 2 // Maps to 'Junior'
  },
  {
    id: 'pre-school',
    title: 'Pre-School',
    subtitle: 'Playgroup to PP2',
    curriculum: 'Montessori & CBC',
    age: 'Ages 2–5',
    desc: 'A nurturing environment where foundational literacy and numeracy begin through play.',
    highlights: ['Play-Based Learning', 'Early Literacy', 'Creativity', 'Safe Environment'],
    image: imgPreSchool,
    link: '/education/CBC/pre-primary',
    buttonText: 'Explore Pre-School',
    gridClass: 'grid-medium-top',
    activeStage: 0 // Maps to 'Early Years'
  },
  {
    id: 'lower-primary',
    title: 'Lower Primary',
    subtitle: 'Grades 1–3',
    curriculum: 'CBC & Cambridge Primary',
    age: 'Ages 6–8',
    desc: 'Building confident learners through inquiry, digital literacy, and collaborative learning.',
    highlights: ['Reading', 'Numeracy', 'ICT Integration', 'Confidence Building'],
    image: imgLowerPrimary,
    link: '/education/CBC/lower-primary',
    buttonText: 'Explore Lower Primary',
    gridClass: 'grid-medium-bottom',
    activeStage: 1 // Maps to 'Primary'
  },
  {
    id: 'senior',
    title: 'Senior School',
    subtitle: 'Grades 10–12',
    curriculum: 'IGCSE & A-Levels',
    age: 'Ages 15–18',
    desc: 'Preparing outstanding leaders for top universities globally and beyond.',
    highlights: ['IGCSE', 'Career Pathways', 'Leadership', 'University Preparation', 'Global Citizenship'],
    image: imgSeniorSchool,
    link: '/education/CBC/senior-school',
    buttonText: 'Explore Senior School',
    gridClass: 'grid-large-bottom',
    activeStage: 3 // Maps to 'Senior'
  },
  {
    id: 'upper-primary',
    title: 'Upper Primary',
    subtitle: 'Grades 4–6',
    curriculum: 'CBC & Cambridge Primary',
    age: 'Ages 9–11',
    desc: 'Developing independent problem solvers and critical thinkers.',
    highlights: ['Leadership', 'Problem Solving', 'Sports', 'Innovation'],
    image: imgUpperPrimary,
    link: '/education/CBC/upper-primary',
    buttonText: 'Explore Upper Primary',
    gridClass: 'grid-wide-bottom',
    activeStage: 1 // Maps to 'Primary'
  }
];

const AcademicPathways = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const [hoveredStage, setHoveredStage] = useState(null);

  /* GSAP Entrance Animation */
  useEffect(() => {
    const section = sectionRef.current;
    
    // Header Word Reveal
    const words = headerRef.current.querySelectorAll('.ap-word');
    gsap.fromTo(words, 
      { opacity: 0, y: 30, filter: 'blur(8px)' },
      {
        opacity: 1, y: 0, filter: 'blur(0px)',
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
        }
      }
    );

    // Grid Cards Fade Up
    const cards = section.querySelectorAll('.ap-card');
    gsap.fromTo(cards,
      { opacity: 0, y: 60 },
      {
        opacity: 1, y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.ap-grid',
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section className="ap-section" ref={sectionRef}>
      <div className="ap-container">
        
        {/* ─── Header ─── */}
        <div className="ap-header" ref={headerRef}>
          <div className="ap-badge">
            <span className="ap-badge-icon">📖</span>
            Our Learning Journey
          </div>
          <h2 className="ap-title">
            <span className="ap-word-wrap"><span className="ap-word">Learning</span></span>
            <span className="ap-word-wrap"><span className="ap-word">With</span></span>
            <span className="ap-word-wrap"><span className="ap-word ap-gradient-text">Us</span></span>
          </h2>
          <p className="ap-subtitle">
            Every learner follows a carefully designed pathway that nurtures curiosity, 
            confidence, creativity, leadership, and academic excellence from Early Years through Senior School.
          </p>
        </div>

        {/* ─── Interactive Progress Indicator ─── */}
        <div className="ap-progress-wrap">
          <div className="ap-progress-line-bg" />
          <div 
            className="ap-progress-line-fill" 
            style={{ 
              width: hoveredStage !== null ? `${(hoveredStage / (STAGES.length - 1)) * 100}%` : '0%',
              opacity: hoveredStage !== null ? 1 : 0
            }} 
          />
          <div className="ap-progress-nodes">
            {STAGES.map((stage, idx) => {
              const isActive = hoveredStage !== null && hoveredStage >= idx;
              const isCurrent = hoveredStage === idx;
              return (
                <div key={stage} className={`ap-node ${isActive ? 'active' : ''} ${isCurrent ? 'current' : ''}`}>
                  <div className="ap-node-dot" />
                  <span className="ap-node-label">{stage}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── Bento Grid ─── */}
        <div className="ap-grid">
          {PATHWAYS.map((pathway) => (
            <div 
              key={pathway.id} 
              className={`ap-card ${pathway.gridClass}`}
              onMouseEnter={() => setHoveredStage(pathway.activeStage)}
              onMouseLeave={() => setHoveredStage(null)}
            >
              
              {/* Background Image */}
              <div className="ap-card-img-wrap">
                <img src={pathway.image} alt={pathway.title} className="ap-card-img" />
                <div className="ap-card-overlay" />
              </div>

              {/* Floating Particles (CSS Animation) */}
              <div className="ap-particles" aria-hidden="true">
                <div className="ap-particle p1" />
                <div className="ap-particle p2" />
                <div className="ap-particle p3" />
              </div>

              {/* Top Meta */}
              <div className="ap-card-meta">
                <span className="ap-meta-pill highlight">{pathway.title}</span>
                <span className="ap-meta-pill">{pathway.subtitle}</span>
              </div>

              {/* Content Body */}
              <div className="ap-card-body">
                
                <div className="ap-card-curriculum">
                  <span className="ap-curr-age">{pathway.age}</span>
                  <span className="ap-curr-name">{pathway.curriculum}</span>
                </div>
                
                <p className="ap-card-desc">{pathway.desc}</p>
                
                <div className="ap-card-highlights">
                  {pathway.highlights.map(hl => (
                    <span key={hl} className="ap-highlight-tag">{hl}</span>
                  ))}
                </div>
                
                <Link to={pathway.link} className="ap-card-btn">
                  <span>{pathway.buttonText}</span>
                  <span className="ap-btn-arrow">→</span>
                </Link>
                
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AcademicPathways;
