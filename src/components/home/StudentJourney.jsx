import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import kidsImg from '../../assets/kids.jpg';
import primaryImg from '../../assets/junior1.jpg';
import juniorImg from '../../assets/upper.jpg';
import seniorImg from '../../assets/senior.jpg';
import alumniImg from '../../assets/alumni.jpg';

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

const AnimatedStat = ({ value, label }) => {
  const statRef = useRef();
  const [started, setStarted] = useState(false);
  const display = useCountUp(value, 2000, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (statRef.current) observer.observe(statRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={statRef} className="journey-stat">
      <span className="journey-stat-value">{display}</span>
      <span className="journey-stat-label">{label}</span>
    </div>
  );
};

const STAGES = [
  {
    id: 'early-years',
    title: 'Early Years',
    subtitle: 'Ages 2-6 | Play-based Foundation',
    desc: 'A warm, nurturing environment where children discover the joy of learning through play, creativity, and social interaction.',
    image: kidsImg,
    icon: '🧸',
    badge: 'Play-Based Curriculum',
    link: '/education/CBC/pre-primary',
    stats: [
      { value: '100%', label: 'Play-Based' },
      { value: '1:10', label: 'Teacher Ratio' }
    ]
  },
  {
    id: 'primary',
    title: 'Primary School',
    subtitle: 'Grades 1-6 | CBC Integration',
    desc: 'Building essential competencies through Kenya\'s CBC curriculum. Students explore science, languages, and character development in an inquiry-based setting.',
    image: primaryImg,
    icon: '📚',
    badge: 'CBC Curriculum',
    link: '/education/CBC/lower-primary',
    stats: [
      { value: '30+', label: 'Clubs' },
      { value: '100%', label: 'ICT Integrated' }
    ]
  },
  {
    id: 'junior',
    title: 'Junior School',
    subtitle: 'Grades 7-9 | Innovation & STEM',
    desc: 'Bridging the gap to specialized learning. Students engage heavily in STEM, Robotics, and critical thinking to prepare for complex academic pathways.',
    image: juniorImg,
    icon: '🤖',
    badge: 'Innovation Hub',
    link: '/education/CBC/junior-school',
    stats: [
      { value: '5+', label: 'Coding Languages' },
      { value: '100%', label: 'Project Based' }
    ]
  },
  {
    id: 'senior',
    title: 'Senior School',
    subtitle: 'IGCSE & A-Level | University Prep',
    desc: 'Rigorous preparation for global success. We offer the prestigious Cambridge curriculum, empowering students with critical analysis and leadership skills.',
    image: seniorImg,
    icon: '🌍',
    badge: 'Cambridge International',
    link: '/education/cambridge',
    stats: [
      { value: 'A*', label: 'Cambridge Excellence' },
      { value: '100%', label: 'Career Counseling' }
    ]
  },
  {
    id: 'university',
    title: 'University & Beyond',
    subtitle: 'Alumni Network | Global Pathways',
    desc: 'MEC graduates join an elite network of global leaders. We provide comprehensive university placement support and scholarship guidance.',
    image: alumniImg,
    icon: '🎓',
    badge: 'Global Alumni',
    link: '/about-MEC',
    stats: [
      { value: '98%', label: 'University Placement' },
      { value: '50+', label: 'Global Universities' }
    ]
  }
];

const StudentJourney = () => {
  const containerRef = useRef();
  const headerRef = useRef();
  const svgLineRef = useRef();
  const stagesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Stagger
      const words = headerRef.current.querySelectorAll('.journey-word');
      gsap.from(words, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out'
      });

      // SVG Line Draw
      gsap.to(svgLineRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 50%',
          end: 'bottom 50%',
          scrub: 1,
        },
        strokeDashoffset: 0,
        ease: 'none'
      });

      // Stage Reveal
      stagesRef.current.forEach((stage, i) => {
        gsap.from(stage, {
          scrollTrigger: {
            trigger: stage,
            start: 'top 85%',
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="student-journey-v2" ref={containerRef} aria-label="Student Journey Timeline">
      
      {/* Background Ambience */}
      <div className="journey-bg-glow top-left" />
      <div className="journey-bg-glow bottom-right" />
      <div className="journey-particles" />

      <div className="inner-row">
        
        {/* Section Header */}
        <div className="journey-header" ref={headerRef}>
          <div className="section-eyebrow">
            <span className="section-eyebrow-dot" />
            The MEC Pathway
          </div>
          <h2 className="journey-title">
            <span className="journey-word-wrap"><span className="journey-word">From</span></span>
            <span className="journey-word-wrap"><span className="journey-word">Early</span></span>
            <span className="journey-word-wrap"><span className="journey-word">Years</span></span>
            <span className="journey-word-wrap"><span className="journey-word">to</span></span>
            <span className="journey-word-wrap"><span className="journey-word journey-gradient">University</span></span>
            <span className="journey-word-wrap"><span className="journey-word journey-gradient">&</span></span>
            <span className="journey-word-wrap"><span className="journey-word journey-gradient">Beyond</span></span>
          </h2>
          <p className="journey-sub">
            Every stage of your child's journey is thoughtfully designed to nurture curiosity, 
            build confidence, develop character, and prepare future-ready leaders for success 
            beyond the classroom.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="journey-timeline-container">
          
          {/* Animated SVG Connecting Line */}
          <div className="journey-svg-wrap">
            <svg viewBox="0 0 100 1000" preserveAspectRatio="none" className="journey-svg-track">
              <line x1="50" y1="0" x2="50" y2="1000" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
              <line 
                ref={svgLineRef}
                x1="50" y1="0" x2="50" y2="1000" 
                stroke="url(#journeyGradient)" 
                strokeWidth="4" 
                strokeDasharray="1000"
                strokeDashoffset="1000"
              />
              <defs>
                <linearGradient id="journeyGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#A855F7" />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#0F3D91" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Zig-Zag Stages */}
          {STAGES.map((stage, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                className={`journey-stage ${isEven ? 'image-left' : 'image-right'}`} 
                key={stage.id}
                ref={el => stagesRef.current[idx] = el}
              >
                {/* Milestone Node on the line */}
                <div className="journey-milestone-node">
                  <div className="node-pulse" />
                  <div className="node-icon">{stage.icon}</div>
                </div>

                {/* Content Block */}
                <div className="journey-stage-content">
                  <div className="journey-card">
                    <div className="journey-card-badge">{stage.badge}</div>
                    <h3>{stage.title}</h3>
                    <h4>{stage.subtitle}</h4>
                    <p>{stage.desc}</p>
                    
                    <div className="journey-stats-row">
                      {stage.stats.map(stat => (
                        <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
                      ))}
                    </div>

                    <Link to={stage.link} className="journey-learn-more">
                      Explore {stage.title} →
                    </Link>
                  </div>
                </div>

                {/* Image Block */}
                <div className="journey-stage-image">
                  <div className="journey-image-wrap">
                    <img src={stage.image} alt={`${stage.title} at MEC`} loading="lazy" />
                    <div className="journey-image-overlay" />
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default StudentJourney;
