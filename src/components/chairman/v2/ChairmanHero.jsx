import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaChevronDown } from 'react-icons/fa';
import imgHero from '../../../assets/school2.jpg';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const ChairmanHero = () => {
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

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight - 100, behavior: 'smooth' });
  };

  return (
    <section className="chair-hero" ref={heroRef}>
      <img src={imgHero} alt="MEC Campus" className="chair-hero-bg" ref={bgRef} />
      <div className="chair-hero-overlay" />
      
      <div className="chair-hero-content" ref={textRef}>
        <div className="chair-badge">🌟 40 Years of Excellence</div>
        <h1 className="chair-hero-title">Word from Our Chairman</h1>
        <p className="chair-hero-sub">
          "For over 40 years, Moi Educational Centre has remained a trusted pillar in delivering quality, values-based education."
        </p>
        
        <div className="chair-hero-btns">
          <Link to="/about-MEC/leadership" className="nav-apply-btn" style={{ height: '54px', fontSize: '15px' }}>
            Meet Our Leadership
          </Link>
          <button onClick={scrollDown} className="nav-apply-btn" style={{ height: '54px', fontSize: '15px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', boxShadow: 'none' }}>
            Read Message <FaChevronDown />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChairmanHero;
