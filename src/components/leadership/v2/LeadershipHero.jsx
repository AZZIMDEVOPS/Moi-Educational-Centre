import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaChevronDown } from 'react-icons/fa';
import imgHero from '../../../assets/experience.jpg';

gsap.registerPlugin(ScrollTrigger);

const LeadershipHero = () => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(bgRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.fromTo(textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  const scrollToGrid = () => {
    document.getElementById('team-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="ldr-hero" ref={heroRef}>
      <img src={imgHero} alt="Leadership at MEC" className="ldr-hero-bg" ref={bgRef} />
      <div className="ldr-hero-overlay" />
      
      <div className="ldr-hero-content" ref={textRef}>
        <div className="ldr-badge">🌟 40 Years of Excellence</div>
        <h1 className="ldr-hero-title">Guiding the Vision,<br/>Leading with Purpose</h1>
        <p className="ldr-hero-sub">
          At the heart of Moi Educational Centre is a team of dedicated leaders driven by a shared commitment to excellence, integrity and student growth. Together, they set the tone for a thriving learning environment inspiring both staff and students.
        </p>
        
        <div className="ldr-hero-btns">
          <button onClick={scrollToGrid} className="nav-apply-btn" style={{ height: '54px', fontSize: '15px' }}>
            Meet Our Leadership <FaChevronDown />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeadershipHero;
