import React from "react";
import { FaGraduationCap, FaQuoteLeft, FaBookReader, FaLaptopCode, FaCheckCircle } from "react-icons/fa";
import { leaders } from "../../../data/leaders";

const PrincipalsEditorial = () => {
  const principalPrimary = leaders.find((l) => l.id === 276) || {};
  const principalSenior = leaders.find((l) => l.id === 0) || {};

  return (
    <section className="ldr-principals-section" id="principals">
      <div className="ldr-container">
        
        {/* Section Header */}
        <div className="ldr-section-header">
          <span className="ldr-eyebrow">EXECUTIVE ACADEMIC LEADERSHIP</span>
          <h2 className="ldr-section-title">Guiding Academic Excellence</h2>
          <p className="ldr-section-desc">
            Experienced instructional leaders championing holistic development from early foundation through senior high school.
          </p>
        </div>

        {/* ─── 1. Principal: Primary & Junior School ──────────── */}
        <div className="ldr-principal-editorial-card">
          <div className="ldr-pe-visual">
            <div className="ldr-pe-img-box">
              <img 
                src={principalPrimary.image} 
                alt={principalPrimary.name} 
                className="ldr-pe-img"
              />
            </div>
            <div className="ldr-pe-badge">
              <FaBookReader />
              <span>Primary & Junior School</span>
            </div>
          </div>

          <div className="ldr-pe-content">
            <span className="ldr-pe-tag">PRIMARY & JUNIOR SCHOOL LEADERSHIP</span>
            <h3 className="ldr-pe-name">{principalPrimary.name}</h3>
            <p className="ldr-pe-role">{principalPrimary.position}</p>

            <blockquote className="ldr-pe-quote">
              <FaQuoteLeft className="quote-icon-sm" />
              "{principalPrimary.quote?.text}"
            </blockquote>

            <div className="ldr-pe-bio">
              {principalPrimary.description?.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="ldr-pe-highlights">
              <div className="pe-highlight-item">
                <FaCheckCircle className="check-icon" />
                <span>20+ Years Educational Sector Experience</span>
              </div>
              <div className="pe-highlight-item">
                <FaCheckCircle className="check-icon" />
                <span>Trained KNEC Mathematics Examiner</span>
              </div>
              <div className="pe-highlight-item">
                <FaCheckCircle className="check-icon" />
                <span>Holistic & Values-Based Child Development</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 2. Principal: Senior School (Inverted Layout) ──── */}
        <div className="ldr-principal-editorial-card inverted">
          <div className="ldr-pe-content">
            <span className="ldr-pe-tag senior-tag">SENIOR HIGH SCHOOL LEADERSHIP</span>
            <h3 className="ldr-pe-name">{principalSenior.name}</h3>
            <p className="ldr-pe-role">{principalSenior.position}</p>

            <blockquote className="ldr-pe-quote">
              <FaQuoteLeft className="quote-icon-sm" />
              "{principalSenior.quote?.text}"
            </blockquote>

            <div className="ldr-pe-bio">
              {principalSenior.description?.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="ldr-pe-highlights">
              <div className="pe-highlight-item">
                <FaCheckCircle className="check-icon" />
                <span>Senior School CBC 3-Pathway Implementation</span>
              </div>
              <div className="pe-highlight-item">
                <FaCheckCircle className="check-icon" />
                <span>Technology Immersion & Future-Ready Skills</span>
              </div>
              <div className="pe-highlight-item">
                <FaCheckCircle className="check-icon" />
                <span>Student Mentorship & Global Preparedness</span>
              </div>
            </div>
          </div>

          <div className="ldr-pe-visual">
            <div className="ldr-pe-img-box">
              <img 
                src={principalSenior.image} 
                alt={principalSenior.name} 
                className="ldr-pe-img"
              />
            </div>
            <div className="ldr-pe-badge senior-badge">
              <FaLaptopCode />
              <span>Senior High School (Grade 10)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PrincipalsEditorial;
