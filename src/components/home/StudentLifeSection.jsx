import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import sportsImg from '../../assets/events.jpg';
import musicImg from '../../assets/experience.jpg';
import dramaImg from '../../assets/events2.jpg';
import codingImg from '../../assets/innovation.jpg';
import artsImg from '../../assets/about2.jpg';
import swimImg from '../../assets/swimming.jpg';
import stemImg from '../../assets/school6.jpg';
import communityImg from '../../assets/outreach.jpg';
import portraitImg from '../../assets/peter-chair.jpg';

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
  { id: 'sports', size: 'large', title: 'Champion Athletes', category: 'Sports', icon: '🏆', img: sportsImg, desc: 'Nationally competitive teams in football, basketball, and athletics.' },
  { id: 'music', size: 'medium', title: 'Orchestra & Choir', category: 'Music', icon: '🎵', img: musicImg, desc: 'ABRSM-certified academy.' },
  { id: 'coding', size: 'medium', title: 'Robotics & AI', category: 'Innovation', icon: '🤖', img: codingImg, desc: 'Future-tech programming.' },
  { id: 'swim', size: 'tall', title: 'Elite Swimming', category: 'Aquatics', icon: '🏊', img: swimImg, desc: 'Olympic-size facilities and professional coaching.' },
  { id: 'drama', size: 'medium', title: 'Theatre Arts', category: 'Drama', icon: '🎭', img: dramaImg, desc: 'Award-winning performances.' },
  { id: 'arts', size: 'medium', title: 'Visual Arts', category: 'Creativity', icon: '🎨', img: artsImg, desc: 'Expressive design studios.' },
  { id: 'stem', size: 'wide', title: 'STEM Excellence', category: 'Academics', icon: '🧪', img: stemImg, desc: 'State-of-the-art science laboratories.' },
  { id: 'community', size: 'wide', title: 'Community Service', category: 'Leadership', icon: '🌍', img: communityImg, desc: 'Developing leaders who make a real difference in Kenya.' }
];

const TIMELINE_EVENTS = [
  { month: 'Term 1', title: 'Sports Day', icon: '🏅' },
  { month: 'Term 1', title: 'Music Festival', icon: '🎹' },
  { month: 'Term 2', title: 'Robotics Comp.', icon: '⚙️' },
  { month: 'Term 2', title: 'Cultural Day', icon: '🌍' },
  { month: 'Term 3', title: 'Leadership Summit', icon: '👑' },
  { month: 'Term 3', title: 'Graduation', icon: '🎓' }
];

/* ─── Main Component ───────────────────────────────────── */
const StudentLifeSection = () => {
  const containerRef = useRef();
  const headerRef = useRef();
  const bentoRef = useRef();
  const timelineSvgRef = useRef();
  const timelineNodesRef = useRef([]);

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
                  <span className="bento-icon">{activity.icon}</span>
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

      {/* 4. Horizontal Experience Carousel (Scroll Snapping) */}
      <div className="life-experience-section">
        <div className="inner-row">
          <h3 className="life-section-title reveal">Featured Experiences</h3>
        </div>
        <div className="life-horizontal-scroll">
          <div className="life-carousel-track">
            
            <div className="life-carousel-slide">
              <img src={sportsImg} alt="Sports" />
              <div className="slide-content">
                <h4>Sports Excellence</h4>
                <p>Building Champions On and Off the Field</p>
              </div>
            </div>
            
            <div className="life-carousel-slide">
              <img src={musicImg} alt="Music" />
              <div className="slide-content">
                <h4>Music & Performing Arts</h4>
                <p>Where Creativity Finds Its Voice</p>
              </div>
            </div>
            
            <div className="life-carousel-slide">
              <img src={codingImg} alt="Robotics" />
              <div className="slide-content">
                <h4>Coding & Robotics</h4>
                <p>Innovating the Future Today</p>
              </div>
            </div>
            
            <div className="life-carousel-slide">
              <img src={communityImg} alt="Leadership" />
              <div className="slide-content">
                <h4>Leadership & Community</h4>
                <p>Developing Leaders Who Make a Difference</p>
              </div>
            </div>

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
                <div className="node-dot">{ev.icon}</div>
                <div className="node-info">
                  <span className="node-month">{ev.month}</span>
                  <span className="node-title">{ev.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. Student Spotlight */}
      <div className="life-spotlight-section inner-row">
        <div className="spotlight-card reveal">
          <div className="spotlight-image">
            <img src={portraitImg} alt="Student Spotlight" />
          </div>
          <div className="spotlight-content">
            <div className="section-eyebrow"><span className="section-eyebrow-dot" /> Student Spotlight</div>
            <blockquote className="spotlight-quote">
              "Joining the Robotics Club and the Debate Team gave me the confidence to express my ideas globally. MEC didn't just teach me; it empowered me to lead."
            </blockquote>
            <div className="spotlight-author">
              <strong>David K.</strong>
              <span>Head Boy & Robotics Team Captain</span>
            </div>
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
