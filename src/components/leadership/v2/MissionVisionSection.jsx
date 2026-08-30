import React from "react";
import { FaCompass, FaEye, FaHeart, FaShieldAlt, FaUsers, FaHandsHelping, FaCheck } from "react-icons/fa";

const MissionVisionSection = () => {
  const coreValues = [
    { name: "Godliness", desc: "Rooted in strong Christian faith and moral uprightness." },
    { name: "Integrity", desc: "Unwavering commitment to honesty, accountability, and ethical living." },
    { name: "Teamwork", desc: "Collaborative growth uniting educators, students, parents, and community." },
    { name: "Diligence", desc: "Persistence, discipline, and hard work in all endeavors." },
    { name: "Courtesy", desc: "Respect, empathy, and grace in our everyday interactions." }
  ];

  return (
    <section className="ldr-mission-vision-section" id="mission-vision">
      <div className="ldr-container">
        
        {/* Split Mission & Vision Cards */}
        <div className="ldr-mv-grid">
          
          {/* Mission Card */}
          <div className="ldr-mv-card mission-card">
            <div className="mv-card-top">
              <span className="mv-badge">
                <FaCompass className="mv-icon" /> OUR MISSION
              </span>
            </div>
            <blockquote className="mv-quote">
              “To provide holistic, quality, and values-based education that empowers learners to excel academically, develop upright character, and thrive in an evolving global society.”
            </blockquote>
            <p className="mv-context">
              We create a supportive, stimulating environment where every learner discovers their unique gifts, masters essential competencies, and builds a lifelong passion for learning.
            </p>
          </div>

          {/* Vision Card */}
          <div className="ldr-mv-card vision-card">
            <div className="mv-card-top">
              <span className="mv-badge vision">
                <FaEye className="mv-icon" /> OUR VISION
              </span>
            </div>
            <blockquote className="mv-quote">
              “To be a premier Christian centre of academic and character excellence, nurturing future-ready leaders for Kenya and the world.”
            </blockquote>
            <p className="mv-context">
              Setting the national benchmark for educational innovation, holistic student welfare, and leadership development across Africa and beyond.
            </p>
          </div>

        </div>

        {/* Core Values Strip */}
        <div className="ldr-values-block">
          <div className="ldr-values-header">
            <span className="ldr-eyebrow" style={{ color: '#ffffff' }}>FOUNDATIONAL PILLARS</span>
            <h3 className="ldr-values-title">Our Five Core Values</h3>
          </div>

          <div className="ldr-values-grid">
            {coreValues.map((v, i) => (
              <div key={i} className="ldr-val-pill-card">
                <span className="val-pill-number">0{i + 1}</span>
                <h4 className="val-pill-name">{v.name}</h4>
                <p className="val-pill-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVisionSection;
