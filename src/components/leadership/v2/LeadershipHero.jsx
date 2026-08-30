import React, { useRef } from "react";
import { FaArrowRight, FaChevronDown, FaShieldAlt } from "react-icons/fa";
import imgChair from "../../../assets/peter-chair.jpg";

const LeadershipHero = () => {
  const heroRef = useRef(null);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="ldr-hero-v3" ref={heroRef} id="overview">
      <div className="ldr-hero-container">
        {/* Left Column: Typography & Intent */}
        <div className="ldr-hero-left">
          <div className="ldr-hero-eyebrow">
            <span className="ldr-eyebrow-dot" />
            <span>LEADERSHIP AT MOI EDUCATIONAL CENTRE</span>
          </div>

          <h1 className="ldr-hero-title">
            Leading with Purpose.<br />
            <span className="ldr-title-accent">Inspiring Excellence.</span>
          </h1>

          <p className="ldr-hero-sub">
            For over four decades, our leadership team has steered Moi Educational Centre with vision, integrity, and an unyielding commitment to nurturing curious, resilient, and values-grounded global citizens.
          </p>

          <div className="ldr-hero-actions">
            <button 
              onClick={() => scrollToSection("directory")} 
              className="ldr-btn-primary"
            >
              Meet Our Leadership <FaChevronDown />
            </button>
            <button 
              onClick={() => scrollToSection("chairman")} 
              className="ldr-btn-secondary"
            >
              Chairman's Address <FaArrowRight />
            </button>
          </div>

          <div className="ldr-hero-trust-bar">
            <div className="ldr-trust-item">
              <span className="ldr-trust-number">40+</span>
              <span className="ldr-trust-label">Years of Educational Leadership</span>
            </div>
            <div className="ldr-trust-divider" />
            <div className="ldr-trust-item">
              <span className="ldr-trust-number">100%</span>
              <span className="ldr-trust-label">Values & Character Focused</span>
            </div>
            <div className="ldr-trust-divider" />
            <div className="ldr-trust-item">
              <span className="ldr-trust-number">Dual</span>
              <span className="ldr-trust-label">CBC & Cambridge Excellence</span>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Portrait Showcase (Preserving natural composition without cropping) */}
        <div className="ldr-hero-right">
          <div className="ldr-hero-frame">
            <div className="ldr-portrait-card main-portrait">
              <div className="ldr-portrait-img-box">
                <img 
                  src={imgChair} 
                  alt="Mr. Paul K. Chemng'orem, Board Chairman" 
                  className="ldr-portrait-img"
                />
              </div>
              <div className="ldr-portrait-caption">
                <span className="ldr-caption-role">BOARD OF DIRECTORS</span>
                <span className="ldr-caption-name">Mr. Paul K. Chemng'orem</span>
                <span className="ldr-caption-sub">Chairman — Guiding MEC since 2004</span>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="ldr-floating-stat-badge">
              <FaShieldAlt className="stat-badge-icon" />
              <div>
                <strong>Governance with Integrity</strong>
                <span>Rooted in Faith, Service & Diligence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipHero;
