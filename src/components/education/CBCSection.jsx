import React, { useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { cbc } from "../../data/education";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGraduationCap, FaChevronRight, FaAtom, FaUsers, FaLaptopCode, FaCheckCircle, FaBookOpen } from "react-icons/fa";
import Navbar from "../common/navigation/Navbar";
import Footer from "../common/Footer";
import SEO from "../common/SEO";
import imgKids from "../../assets/kids.jpg";
import "../../css/programme-detail.css";

gsap.registerPlugin(ScrollTrigger);

/* ─── 1. Programme Hero ─────────────────────────────────── */
const ProgrammeHero = ({ stage }) => {
  const heroRef = useRef();

  useEffect(() => {
    gsap.fromTo(".prog-hero-content", 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
    );
  }, [stage]);

  return (
    <section className="prog-hero" ref={heroRef}>
      <img src={stage.image || imgKids} alt={stage.title} className="prog-hero-bg" />
      <div className="prog-hero-overlay" />
      
      <div className="prog-hero-content">
        <div className="prog-hero-badge">
          🌟 {stage.grade}
        </div>
        <h1 className="prog-hero-title">{stage.title}</h1>
        <p className="prog-hero-sub">
          {stage.intro}
        </p>
        
        <div className="prog-hero-btns">
          <Link to="/admissions/admission-process" className="nav-apply-btn" style={{ height: '52px', fontSize: '15px' }}>
            Apply Now
          </Link>
          <Link to="/contact" className="nav-apply-btn" style={{ height: '52px', fontSize: '15px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.3)', boxShadow: 'none' }}>
            Book a School Tour
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ─── 2. Programme Overview (Educational Approach & Sidebar) ── */
const ProgrammeOverview = ({ stage }) => {
  return (
    <section className="prog-overview-white">
      <div className="prog-overview-container">
        
        <div className="prog-overview-main">
          <div className="prog-eyebrow">
            <span className="prog-eyebrow-dot" />
            PEDAGOGICAL EXCELLENCE
          </div>
          <h2 className="prog-sec-heading">Educational Approach</h2>
          
          {stage.middle && <p className="prog-lead-text">{stage.middle}</p>}
          
          {stage.description && stage.description.map((p, i) => (
            p && <p key={i} className="prog-body-text">{p}</p>
          ))}
        </div>

        <div className="prog-overview-sidebar">
          <div className="prog-levels-card">
            <div className="prog-levels-header">
              <FaBookOpen className="prog-levels-icon" />
              <h3>Curriculum Levels</h3>
            </div>
            <ul className="prog-levels-list">
              {stage.list && stage.list.map((item, i) => (
                <li key={i}>
                  <FaCheckCircle className="check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

/* ─── 3. Curriculum Highlights ──────────────────────────── */
const HighlightBlock = ({ dataObj, icon }) => {
  if (!dataObj || !dataObj.data) return null;
  return (
    <div className="prog-highlight-card">
      <div className="prog-hl-icon">{icon}</div>
      <p className="prog-hl-intro">{dataObj.intro}</p>
      <div className="prog-hl-grid">
        {dataObj.data.map((item, i) => (
          <div key={i} className="prog-hl-item">
            <div className="prog-hl-step">{i + 1}</div>
            <span className="prog-hl-text">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProgrammeHighlights = ({ stage }) => {
  if (!stage.extra_list && !stage.extra_list2 && !stage.extra_list3) return null;

  return (
    <section className="prog-highlights-light">
      <div className="prog-container">
        <h2 className="prog-sec-heading text-center">Interactive Learning Highlights</h2>
        <div className="prog-hl-list">
          <HighlightBlock dataObj={stage.extra_list} icon={<FaAtom />} />
          <HighlightBlock dataObj={stage.extra_list2} icon={<FaUsers />} />
          <HighlightBlock dataObj={stage.extra_list3} icon={<FaLaptopCode />} />
        </div>
      </div>
    </section>
  );
};

/* ─── 4. Learning Journey Navigation ────────────────────── */
const LearningJourney = ({ currentId }) => {
  const navigate = useNavigate();

  return (
    <section className="prog-journey-white">
      <div className="prog-container">
        <h2 className="prog-sec-heading text-center">Explore Our Learning Journey</h2>
        <p className="prog-sec-sub text-center">Continuous growth from early foundational years through senior academic pathways.</p>
        
        <div className="prog-journey-grid">
          {cbc.map((stage) => {
            const isActive = stage.id === currentId;
            return (
              <div 
                key={stage.id}
                onClick={() => navigate(stage.link)}
                className={`prog-phase-card ${isActive ? 'active' : ''}`}
              >
                <div className="prog-phase-icon">
                  <FaGraduationCap />
                </div>
                <h4>{stage.title}</h4>
                <div className="prog-phase-action">
                  {isActive ? 'Current Phase' : 'Explore Phase'} <FaChevronRight size={10} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─── Main Page Wrapper ──────────────────────────────────── */
const CBCSection = () => {
  const { name } = useParams();
  const stage = cbc.find(item => item.url_param === name);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [name]);

  if (!stage) {
    return (
      <div style={{ padding: '200px 0', textAlign: 'center', color: '#0F172A', background: '#FFFFFF', minHeight: '100vh' }}>
        <h2>Programme not found.</h2>
        <Link to="/education" style={{ color: '#6C2BD9', fontWeight: 'bold' }}>Return to Education</Link>
      </div>
    );
  }

  return (
    <div className="prog-page-white">
      <SEO 
        title={`${stage.title} | Moi Educational Centre`}
        description={stage.intro}
      />
      <Navbar />

      <main>
        <ProgrammeHero stage={stage} />
        <ProgrammeOverview stage={stage} />
        <ProgrammeHighlights stage={stage} />
        <LearningJourney currentId={stage.id} />
      </main>

      <Footer />
    </div>
  );
};

export default CBCSection;