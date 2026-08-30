import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaChevronDown, FaArrowRight, FaStar } from "react-icons/fa";
import Navbar from "../components/common/navigation/Navbar";
import Footer from "../components/common/Footer";
import SEO from "../components/common/SEO";
import { cbc } from "../data/education";
import imgHero from "../assets/school4.jpg";
import "../css/education-landing.css";

gsap.registerPlugin(ScrollTrigger);

const EducationLanding = () => {
  const containerRef = useRef();
  const fillRef = useRef();
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Hero Animations - safe reveal
    gsap.fromTo(".edu-hero-content", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    // Pathway Line Animation
    if (fillRef.current && containerRef.current) {
      gsap.to(fillRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1
        }
      });
    }

    // Node & Section Reveal Animations
    sectionsRef.current.forEach((section) => {
      if (section) {
        gsap.fromTo(section,
          { opacity: 0, y: 40 },
          { 
            opacity: 1, y: 0, duration: 0.6, ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleClass: "is-active"
            }
          }
        );
      }
    });
  }, []);

  const scrollToPathway = () => {
    containerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="edu-landing-page">
      <SEO 
        title="Education at MEC | Learning Pathways"
        description="Discover a continuous learning journey that nurtures every learner from their earliest years through Senior School."
      />
      <Navbar />

      <main id="main-content">
        {/* 1. Premium Hero */}
        <section className="edu-hero">
          <img src={imgHero} alt="MEC Campus" className="edu-hero-bg" />
          <div className="edu-hero-overlay" />
          
          <div className="edu-hero-content">
            <div className="edu-badge">
              <FaStar style={{ color: '#f59e0b', marginRight: 6 }} /> 40 Years of Excellence
            </div>
            <h1 className="edu-hero-title">Learning Pathways at<br/>Moi Educational Centre</h1>
            <p className="edu-hero-sub">
              Discover a continuous learning journey that nurtures every learner from their earliest years through Senior School, combining academic excellence, innovation, leadership, creativity, and holistic development.
            </p>
            
            <div className="edu-hero-btns">
              <button onClick={scrollToPathway} className="edu-btn-primary">
                Explore Programmes <FaChevronDown />
              </button>
              <Link to="/contact" className="edu-btn-secondary">
                Book a School Tour
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Interactive Pathway & Showcase */}
        <section className="edu-showcase-container" id="learning-pathway" ref={containerRef}>
          <div className="edu-pathway-line">
            <div className="edu-pathway-fill" ref={fillRef} />
          </div>

          {cbc.map((stage, index) => (
            <div 
              key={stage.id} 
              id={stage.id ? `pathway-${stage.id}` : `pathway-stage-${index}`}
              className="edu-level-section"
              ref={el => sectionsRef.current[index] = el}
            >
              <div className="edu-pathway-node" />
              
              <div className="edu-level-image">
                <img src={stage.image} alt={stage.title} loading="lazy" />
              </div>
              
              <div className="edu-level-content">
                <div className="edu-level-grade">{stage.grade}</div>
                <h2 className="edu-level-title">{stage.title}</h2>
                <p className="edu-level-desc">{stage.intro}</p>
                <Link to={stage.link} className="edu-level-btn">
                  Learn More <FaArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default EducationLanding;
