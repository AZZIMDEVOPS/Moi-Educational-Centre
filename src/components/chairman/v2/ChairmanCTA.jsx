import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaUsers, FaGraduationCap, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ChairmanCTA = () => {
  return (
    <section className="ch-cta-section" id="continue-exploring">
      <div className="ch-container">
        
        {/* Main CTA Card */}
        <div className="ch-cta-card">
          <span className="ch-cta-badge">CONTINUE EXPLORING MOI EDUCATIONAL CENTRE</span>
          <h2 className="ch-cta-title">
            Join a Community Committed to Purpose & Excellence
          </h2>
          <p className="ch-cta-desc">
            Discover our comprehensive learning pathways, meet our dedicated faculty and leadership, or begin your family’s 2026 admissions journey with us today.
          </p>

          <div className="ch-cta-buttons">
            <Link to="/about-MEC/leadership" className="ch-cta-btn-primary">
              <FaUsers /> Meet Our Full Leadership <FaArrowRight />
            </Link>
            <Link to="/education" className="ch-cta-btn-secondary">
              <FaGraduationCap /> Explore Academic Pathways
            </Link>
            <Link to="/admissions/admission-process" className="ch-cta-btn-outline">
              Enquire About Admissions
            </Link>
          </div>

          <div className="ch-cta-footer-contact">
            <div className="ch-contact-pill">
              <FaPhoneAlt className="ch-contact-icon" />
              <span>+254-20-6004155 / 0702 090 213</span>
            </div>
            <span className="ch-contact-sep">•</span>
            <div className="ch-contact-pill">
              <FaEnvelope className="ch-contact-icon" />
              <span>info@moieducentre.ac.ke</span>
            </div>
          </div>
        </div>

        {/* Quick Related Navigation Grid */}
        <div className="ch-related-links-grid">
          <Link to="/about-MEC" className="ch-related-link-card">
            <div>
              <strong>About MEC</strong>
              <span>Our 40-year history & ethos</span>
            </div>
            <FaArrowRight className="link-arrow" />
          </Link>
          <Link to="/about-MEC/leadership" className="ch-related-link-card active">
            <div>
              <strong>Leadership & Governance</strong>
              <span>Board & Executive Team</span>
            </div>
            <FaArrowRight className="link-arrow" />
          </Link>
          <Link to="/admissions/fees" className="ch-related-link-card">
            <div>
              <strong>School Fees 2026</strong>
              <span>Official 2026 Fee Structures</span>
            </div>
            <FaArrowRight className="link-arrow" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ChairmanCTA;
