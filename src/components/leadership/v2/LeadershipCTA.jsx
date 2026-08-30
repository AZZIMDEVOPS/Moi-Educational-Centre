import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarCheck, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const LeadershipCTA = () => {
  return (
    <section className="ldr-cta-v2-section" id="contact-admissions">
      <div className="ldr-container">
        <div className="ldr-cta-v2-card">
          <div className="ldr-cta-v2-content">
            <span className="ldr-cta-v2-badge">START YOUR JOURNEY WITH US</span>
            <h2 className="ldr-cta-v2-title">
              Excellence Starts with the Right Environment.
            </h2>
            <p className="ldr-cta-v2-sub">
              Experience the warmth, purpose, and instructional leadership of Moi Educational Centre. We invite you to tour our modern campus or begin your child’s 2026 application today.
            </p>

            <div className="ldr-cta-v2-btns">
              <Link to="/education" className="ldr-cta-btn-primary">
                Explore Academic Pathways <FaArrowRight />
              </Link>
              <Link to="/admissions/admission-process" className="ldr-cta-btn-secondary">
                Apply for 2026 Admissions
              </Link>
              <Link to="/contact" className="ldr-cta-btn-outline">
                Book a Campus Tour
              </Link>
            </div>

            <div className="ldr-cta-contact-strip">
              <div className="cta-contact-item">
                <FaPhoneAlt className="cta-contact-icon" />
                <span>+254-20-6004155 / 0702 090 213</span>
              </div>
              <span className="cta-contact-dot">•</span>
              <div className="cta-contact-item">
                <FaEnvelope className="cta-contact-icon" />
                <span>info@moieducentre.ac.ke</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipCTA;
