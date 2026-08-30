import React from "react";
import { FaQuoteLeft, FaCheckCircle, FaAward, FaCalendarCheck, FaShieldAlt } from "react-icons/fa";
import imgChair from "../../../assets/peter-chair.jpg";

const ChairmanEditorial = ({ readingProgress }) => {
  return (
    <section className="ch-editorial-section" id="chairman-message-body">
      <div className="ch-container">
        
        <div className="ch-editorial-layout">
          
          {/* Sticky Sidebar: Chairman Profile & Reading Anchor */}
          <aside className="ch-editorial-sidebar">
            <div className="ch-sidebar-card">
              <div className="ch-sidebar-img-box">
                <img 
                  src={imgChair} 
                  alt="Mr. Paul K. Chemng'orem" 
                  className="ch-sidebar-photo"
                />
              </div>

              <div className="ch-sidebar-info">
                <span className="ch-sidebar-badge">BOARD LEADERSHIP</span>
                <h3 className="ch-sidebar-name">Mr. Paul K. Chemng'orem</h3>
                <p className="ch-sidebar-role">Chairman, Board of Directors</p>
                <p className="ch-sidebar-tenure">Guiding MEC Since 2004</p>
              </div>

              {/* Live Reading Progress Widget */}
              <div className="ch-reading-progress-widget">
                <div className="reading-progress-header">
                  <span>Reading Progress</span>
                  <strong>{Math.round(readingProgress)}%</strong>
                </div>
                <div className="reading-progress-track">
                  <div 
                    className="reading-progress-fill" 
                    style={{ width: `${Math.min(100, Math.max(0, readingProgress))}%` }} 
                  />
                </div>
              </div>

              {/* Personal Guiding Principle Callout */}
              <div className="ch-sidebar-quote">
                <FaQuoteLeft className="sidebar-quote-icon" />
                <p>
                  "Believe in yourself, trust yourself, own your actions, be a person of integrity, and believe in God to enable you to achieve all the above."
                </p>
                <span>— Personal Guiding Principle</span>
              </div>
            </div>
          </aside>

          {/* Main Editorial Text Experience (Optimized 680–760px Line Width) */}
          <article className="ch-editorial-article">
            
            <div className="ch-article-header">
              <span className="ch-article-tag">OFFICIAL BOARD ADDRESS</span>
              <h2 className="ch-article-title">
                Building an Enduring Legacy of Holistic Excellence
              </h2>
              <div className="ch-article-meta">
                <span>By <strong>Mr. Paul K. Chemng'orem</strong></span>
                <span className="meta-sep">•</span>
                <span>Chairman, Board of Directors</span>
                <span className="meta-sep">•</span>
                <span>Moi Educational Centre</span>
              </div>
            </div>

            {/* Paragraph 1: 40 Years Foundation */}
            <div className="ch-prose-block">
              <p className="ch-lead-paragraph">
                <span className="ch-dropcap">F</span>or over 40 years, Moi Educational Centre has remained a trusted pillar in delivering quality, values-based education. Rooted in our enduring motto, <em>“Strive for Excellence,”</em> we have cultivated a legacy defined by academic strength, moral clarity, and the holistic development of every learner entrusted to us.
              </p>
            </div>

            {/* Paragraph 2: Competency-Based Curriculum Transition & Senior School */}
            <div className="ch-prose-block">
              <h3 className="ch-subheading">1. Leading the CBC Transition & Senior School Pathways</h3>
              <p>
                As Kenya’s education system transforms, MEC continues to lead with vision and readiness. We have fully embraced the Competency-Based Curriculum (CBC), with well-trained teachers and a learning environment designed to meet its demands.
              </p>
              <p>
                Our Senior School is CBC-aligned and prepared to offer the three Ministry-recommended pathways: <strong>STEM (Science, Technology, Engineering & Mathematics)</strong>, <strong>Arts and Sports Science</strong>, and <strong>Social Sciences</strong>, ensuring every student is guided toward their unique strengths, innate passions, and future career aspirations.
              </p>
            </div>

            {/* Paragraph 3: Global Benchmarking & Cambridge Framework */}
            <div className="ch-prose-block">
              <h3 className="ch-subheading">2. Global Standards with Rooted Values</h3>
              <p>
                Recognizing the global shift in education, we endeavor to give our students access to a world-class academic experience while maintaining a strong foundation in values, discipline, and identity.
              </p>
              <p>
                Whether through our national CBC framework or our British Cambridge International curriculum track, our goal remains steadfast: to raise confident, responsible, and well-prepared young leaders who can stand tall on any global platform.
              </p>
            </div>

            {/* Embedded Visual Quote Card */}
            <div className="ch-embedded-quote-card">
              <FaQuoteLeft className="embed-quote-icon" />
              <blockquote className="embed-quote-text">
                “In a rapidly digitizing world, we are thoughtfully integrating technology into the learning process, not for its novelty, but for its power to enhance understanding while preserving the heart of human connection in education.”
              </blockquote>
            </div>

            {/* Paragraph 4: Technology with Human Connection */}
            <div className="ch-prose-block">
              <h3 className="ch-subheading">3. Innovation with Heart</h3>
              <p>
                In a rapidly digitizing world, we are thoughtfully integrating technology into the learning process. From modern coding and robotics laboratories to interactive multimedia learning, technology serves as an accelerator for critical thinking and creative problem-solving.
              </p>
              <p>
                However, we believe that technology can never replace the empathy, mentorship, and moral guidance of dedicated educators. We preserve the heart of human connection in every classroom interaction.
              </p>
            </div>

            {/* Paragraph 5: Community & Welcome to Parents */}
            <div className="ch-prose-block">
              <h3 className="ch-subheading">4. A Nurturing Community for Every Family</h3>
              <p>
                We are more than a school. We are a nurturing community committed to excellence, character, and servant leadership.
              </p>
              <p>
                To every parent exploring the next step for their child, I warmly welcome you to a place where your child's potential is not only seen — it is shaped for a purposeful and impactful future.
              </p>
            </div>

            {/* Refined Institutional Signature Moment */}
            <div className="ch-signature-box">
              <div className="ch-sig-info">
                <h4 className="ch-sig-name">Mr. Paul K. Chemng'orem</h4>
                <p className="ch-sig-role">Chairman, Board of Directors</p>
                <p className="ch-sig-inst">Moi Educational Centre, Nairobi</p>
              </div>
              <div className="ch-sig-seal">
                <FaShieldAlt className="seal-icon" />
                <span>OFFICIAL GOVERNANCE ADDRESS</span>
              </div>
            </div>

          </article>

        </div>

      </div>
    </section>
  );
};

export default ChairmanEditorial;
