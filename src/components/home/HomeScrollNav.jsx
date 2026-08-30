import React, { useEffect, useState } from 'react';
import { useHeroIntro } from '../../context/HeroIntroContext';
import '../../css/home-scroll-nav.css';

const SECTIONS = [
  { id: 'hero-section', label: 'Hero' },
  { id: 'global-recognition', label: 'Recognition' },
  { id: 'feature-cards', label: 'Highlights' },
  { id: 'about-section', label: 'About MEC' },
  { id: 'academic-pathways', label: 'Pathways' },
  { id: 'future-ready', label: 'Future Tech' },
  { id: 'student-journey', label: 'Journey' },
  { id: 'campus-tour', label: 'Campus Tour' },
  { id: 'explore-more', label: 'Hubs' },
  { id: 'student-life', label: 'Student Life' },
  { id: 'testimonials-section', label: 'Reviews' },
  { id: 'blog-section', label: 'News & Events' },
  { id: 'admissions-section', label: 'Admissions' },
  { id: 'cta-section', label: 'Apply' }
];

const HomeScrollNav = () => {
  const [activeSection, setActiveSection] = useState('hero-section');
  const [scrollProgress, setScrollProgress] = useState(0);
  const { isImmersionMode } = useHeroIntro();

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall page scroll percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Determine active section
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`home-scroll-nav${isImmersionMode ? ' scroll-nav-hidden' : ''}`}
      aria-label="Page section navigation"
    >
      <div className="home-scroll-track">
        <div 
          className="home-scroll-bar" 
          style={{ height: `${scrollProgress}%` }} 
        />
      </div>
      <div className="home-scroll-dots">
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className={`home-scroll-dot-btn ${isActive ? 'active' : ''}`}
              title={sec.label}
              aria-label={`Scroll to ${sec.label}`}
            >
              <span className="home-scroll-dot" />
              <span className="home-scroll-tooltip">{sec.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default HomeScrollNav;
