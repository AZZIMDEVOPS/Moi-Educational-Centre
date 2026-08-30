import React, { useEffect } from "react";
import { FaTimes, FaQuoteLeft, FaCheckCircle, FaAward, FaBriefcase, FaGraduationCap } from "react-icons/fa";

const LeadershipModal = ({ leader, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!leader) return null;

  return (
    <div className="ldr-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="ldr-modal-sheet" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button 
          className="ldr-modal-close-btn" 
          onClick={onClose} 
          aria-label="Close leader profile"
        >
          <FaTimes />
        </button>

        <div className="ldr-modal-grid">
          
          {/* Left: Complete Uncropped Portrait Frame */}
          <div className="ldr-modal-visual">
            <div className="ldr-modal-photo-frame">
              <img 
                src={leader.image} 
                alt={leader.name} 
                className="ldr-modal-photo"
              />
            </div>

            <div className="ldr-modal-profile-card">
              <span className="ldr-modal-cat-badge">
                {leader.school_category || leader.categoryLabel || "Leadership"}
              </span>
              <h3 className="ldr-modal-name">{leader.name}</h3>
              <p className="ldr-modal-role">{leader.position}</p>

              {leader.experience && (
                <div className="ldr-modal-meta-row">
                  <FaBriefcase className="meta-icon" />
                  <span>{leader.experience}</span>
                </div>
              )}
              {leader.tenure && (
                <div className="ldr-modal-meta-row">
                  <FaAward className="meta-icon" />
                  <span>{leader.tenure}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Full Biography, Description & Philosophy */}
          <div className="ldr-modal-body">
            
            <div className="ldr-modal-header-tag">
              <span>MEC LEADERSHIP PROFILE</span>
            </div>

            <h2 className="ldr-modal-title">{leader.name}</h2>
            <p className="ldr-modal-subtitle">{leader.position}</p>

            {/* Quote Block */}
            {leader.quote && (
              <div className="ldr-modal-quote-box">
                <FaQuoteLeft className="modal-quote-icon" />
                <div>
                  <p className="modal-quote-text">"{leader.quote.text}"</p>
                  {leader.quote.intro && (
                    <span className="modal-quote-author">
                      — {leader.quote.intro.replace(/[:,]/g, "").trim()}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Biography Content */}
            <div className="ldr-modal-bio-content">
              <h4 className="bio-section-heading">Professional Biography & Leadership Scope</h4>
              {leader.description && Array.isArray(leader.description) ? (
                leader.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <p>{leader.description}</p>
              )}
            </div>

            {/* Institutional Quality Guarantee */}
            <div className="ldr-modal-footer-note">
              <FaCheckCircle className="modal-check-icon" />
              <span>
                Dedicated to academic rigor, Christian values, and holistic child development at Moi Educational Centre.
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default LeadershipModal;
