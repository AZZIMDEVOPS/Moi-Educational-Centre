import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaArrowRight, FaShieldAlt, FaAward, FaCalendarAlt } from "react-icons/fa";
import imgChair from "../../../assets/peter-chair.jpg";

const ChairmanHero = () => {
  const scrollToMessage = () => {
    document.getElementById("chairman-message-body")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="ch-hero-editorial" id="hero-overview">
      <div className="ch-container">
        <div className="ch-hero-grid">
          
          {/* Left: Editorial Hierarchy & Title */}
          <div className="ch-hero-content">
            <div className="ch-eyebrow">
              <span className="ch-eyebrow-dot" />
              <span>WORD FROM OUR CHAIRMAN</span>
            </div>

            <h1 className="ch-hero-title">
              A Vision for Excellence,<br />
              <span className="ch-title-gradient">A Commitment to Every Learner.</span>
            </h1>

            <p className="ch-hero-sub">
              For over 40 years, Moi Educational Centre has stood as a beacon of values-based education, moral clarity, and academic distinction. Read the full institutional address from our Board Chairman.
            </p>

            <div className="ch-hero-actions">
              <button onClick={scrollToMessage} className="ch-btn-primary">
                Read Chairman's Address <FaChevronDown />
              </button>
              <Link to="/about-MEC/leadership" className="ch-btn-secondary">
                Explore Leadership Team <FaArrowRight />
              </Link>
            </div>

            {/* Chairman Key Anchors */}
            <div className="ch-hero-trust-strip">
              <div className="ch-trust-item">
                <span className="ch-trust-num">2004–Present</span>
                <span className="ch-trust-desc">Over 2 Decades of Board Leadership</span>
              </div>
              <div className="ch-trust-divider" />
              <div className="ch-trust-item">
                <span className="ch-trust-num">40+ Years</span>
                <span className="ch-trust-desc">MEC Institutional Legacy</span>
              </div>
              <div className="ch-trust-divider" />
              <div className="ch-trust-item">
                <span className="ch-trust-num">CBC & Cambridge</span>
                <span className="ch-trust-desc">Dual Excellence Pathways</span>
              </div>
            </div>
          </div>

          {/* Right: Uncropped Official Chairman Portrait Frame */}
          <div className="ch-hero-portrait-col">
            <div className="ch-portrait-frame">
              <div className="ch-portrait-media">
                <img 
                  src={imgChair} 
                  alt="Mr. Paul K. Chemng'orem, Chairman Board of Directors" 
                  className="ch-portrait-photo"
                />
              </div>

              {/* Identity & Signature Card */}
              <div className="ch-portrait-identity">
                <div className="identity-top">
                  <span className="identity-eyebrow">BOARD OF DIRECTORS</span>
                  <h2 className="identity-name">Mr. Paul K. Chemng'orem</h2>
                  <p className="identity-title">Chairman, Board of Directors</p>
                </div>
                <div className="identity-tenure-badge">
                  <FaShieldAlt className="badge-icon" />
                  <span>Steward of Governance, Integrity & Vision</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChairmanHero;
