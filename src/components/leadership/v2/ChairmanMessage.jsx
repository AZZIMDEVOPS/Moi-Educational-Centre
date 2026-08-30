import React, { useState } from "react";
import { FaQuoteLeft, FaCheckCircle, FaAward, FaLandmark } from "react-icons/fa";
import imgChair from "../../../assets/peter-chair.jpg";
import { leaders } from "../../../data/leaders";

const ChairmanMessage = () => {
  const [expanded, setExpanded] = useState(false);
  const chairData = leaders.find((l) => l.id === 78) || {};

  return (
    <section className="ldr-chairman-section" id="chairman">
      <div className="ldr-container">
        
        {/* Section Header */}
        <div className="ldr-section-header">
          <span className="ldr-eyebrow">GOVERNANCE & STEWARDSHIP</span>
          <h2 className="ldr-section-title">Message from the Board Chairman</h2>
          <p className="ldr-section-desc">
            A vision of stewardship, academic rigor, and character development rooted in over two decades of transformative leadership.
          </p>
        </div>

        {/* Editorial Feature Container */}
        <div className="ldr-chair-card">
          
          {/* Left: Complete Uncropped Portrait with Editorial Frame */}
          <div className="ldr-chair-visual">
            <div className="ldr-chair-frame">
              <img 
                src={imgChair} 
                alt="Mr. Paul K. Chemng'orem, Chairman Board of Directors" 
                className="ldr-chair-photo"
              />
              <div className="ldr-chair-tag">
                <FaLandmark className="tag-icon" />
                <span>MEC Board of Directors</span>
              </div>
            </div>

            <div className="ldr-chair-meta-box">
              <h3 className="chair-meta-name">Mr. Paul K. Chemng'orem</h3>
              <p className="chair-meta-role">Chairman, Board of Directors</p>
              <div className="chair-meta-tenure">
                <FaAward className="tenure-icon" />
                <span>Steering MEC's Growth & Governance Since 2004</span>
              </div>
            </div>
          </div>

          {/* Right: Message Content */}
          <div className="ldr-chair-text-block">
            <div className="ldr-quote-icon-wrap">
              <FaQuoteLeft />
            </div>

            <blockquote className="ldr-chair-pullquote">
              "{chairData.quote?.text || 'Believe in yourself, trust yourself, own your actions, be a person of integrity, and believe in God to enable you to achieve all the above.'}"
            </blockquote>

            <div className="ldr-chair-body-text">
              <p>
                For over 40 years, Moi Educational Centre has remained a trusted pillar in delivering quality, values-based education. Rooted in our enduring motto, <em>“Strive for Excellence,”</em> we have cultivated a legacy defined by academic strength, moral clarity, and the holistic development of every learner entrusted to us.
              </p>

              <p>
                As Kenya’s education system transforms, MEC continues to lead with vision and readiness. We have fully embraced the Competency-Based Curriculum (CBC), with well-trained teachers and a learning environment designed to meet its demands. Our Senior School is CBC-aligned and prepared to offer the three Ministry-recommended pathways: STEM, Arts & Sports Science, and Social Sciences, ensuring every student is guided toward their strengths, passions, and future career goals.
              </p>

              {expanded && (
                <div className="ldr-chair-expanded-text">
                  <p>
                    Recognizing the global shift in education, we endeavor to give our students access to a world-class academic experience while maintaining a strong foundation in values and identity. Our goal remains unwavering: to raise confident, responsible, and well-prepared young leaders.
                  </p>
                  <p>
                    In a rapidly digitizing world, we are thoughtfully integrating technology into the learning process, not for its novelty, but for its power to enhance understanding while preserving the heart of human connection in education. We are more than a school. We are a nurturing community committed to excellence, character, and leadership.
                  </p>
                  <p>
                    To every parent exploring the next step for their child, I warmly welcome you to a place where your child's potential is not only seen — it is shaped for a purposeful future.
                  </p>
                </div>
              )}

              <button 
                onClick={() => setExpanded(!expanded)} 
                className="ldr-read-more-btn"
              >
                {expanded ? "Read Less ↑" : "Read Complete Address ↓"}
              </button>
            </div>

            <div className="ldr-chair-signature-block">
              <div className="chair-sig-details">
                <strong>Mr. Paul K. Chemng'orem</strong>
                <span>Chairman, Board of Directors — Moi Educational Centre</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ChairmanMessage;
