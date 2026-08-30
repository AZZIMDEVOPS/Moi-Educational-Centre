import React, { useState } from "react";
import { FaCompass, FaTrophy, FaHeart, FaRocket, FaChevronRight } from "react-icons/fa";

const LeadershipPillars = () => {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: "purpose",
      num: "01",
      title: "Purpose",
      subtitle: "Leadership with Intention",
      icon: <FaCompass />,
      headline: "Leading with moral clarity, transparent stewardship, and student-centered vision.",
      body: "Every decision taken across our academic sections, governance committees, and administrative units centers on the well-being and holistic flourishing of our learners. We believe leadership is an act of service, accountability, and ethical role-modeling.",
      points: [
        "Transparent governance under the Board of Directors.",
        "Equitable opportunities across diverse learning pathways.",
        "Faith-grounded stewardship and servant leadership."
      ]
    },
    {
      id: "excellence",
      num: "02",
      title: "Excellence",
      subtitle: "A Culture of Continuous Growth",
      icon: <FaTrophy />,
      headline: "Upholding our 40-year motto: 'Strive for Excellence' across every discipline.",
      body: "Excellence at MEC is not static; it is a relentless commitment to pedagogical innovation, teacher development, cutting-edge facilities, and rigorous academic standards in both CBC and Cambridge frameworks.",
      points: [
        "Continuous teacher mentorship and instructional coaching.",
        "State-of-the-art STEM, music, and athletic infrastructure.",
        "Consistent national top-tier ranking in Kenya's assessments."
      ]
    },
    {
      id: "character",
      num: "03",
      title: "Character",
      subtitle: "Developing Principled Global Citizens",
      icon: <FaHeart />,
      headline: "Cultivating empathy, integrity, and self-discipline alongside intellect.",
      body: "Education is incomplete without upright character. Our pastoral care, school chaplaincy, and counseling programs nurture emotional intelligence, spiritual grounding, and deep social responsibility.",
      points: [
        "MEC Core Values: Godliness, Integrity, Teamwork, Diligence, Courtesy.",
        "Active chaplaincy and licensed student counseling support.",
        "Community service and civic leadership programs."
      ]
    },
    {
      id: "future",
      num: "04",
      title: "Future-Ready",
      subtitle: "Preparing Learners for an Evolving World",
      icon: <FaRocket />,
      headline: "Integrating technology immersion, global perspective, and critical thinking.",
      body: "From Senior School 3-pathway specialization to international exchange visits like the World Scholar's Cup, we equip learners with technological literacy, creative adaptability, and global mindset.",
      points: [
        "Hands-on AI, Python coding, and VEX robotics integration.",
        "International school delegations to Malaysia and Europe.",
        "Senior School preparation for premier global universities."
      ]
    }
  ];

  return (
    <section className="ldr-pillars-section" id="pillars">
      <div className="ldr-container">
        
        <div className="ldr-section-header">
          <span className="ldr-eyebrow">OUR GUIDING PRINCIPLES</span>
          <h2 className="ldr-section-title">The MEC Leadership Philosophy</h2>
          <p className="ldr-section-desc">
            Four foundational pillars that drive our educational ethos, governance, and daily classroom practice.
          </p>
        </div>

        <div className="ldr-pillars-interactive-wrap">
          {/* Navigation Tabs */}
          <div className="ldr-pillars-tabs">
            {pillars.map((p, i) => (
              <button
                key={p.id}
                className={`ldr-pillar-tab-btn ${activeTab === i ? "active" : ""}`}
                onClick={() => setActiveTab(i)}
              >
                <div className="pillar-tab-num">{p.num}</div>
                <div className="pillar-tab-info">
                  <strong>{p.title}</strong>
                  <span>{p.subtitle}</span>
                </div>
                <FaChevronRight className="pillar-tab-arrow" />
              </button>
            ))}
          </div>

          {/* Active Pillar Details Card */}
          <div className="ldr-pillar-display-card">
            <div className="pillar-display-header">
              <span className="pillar-display-badge">
                {pillars[activeTab].icon} Pillar {pillars[activeTab].num}: {pillars[activeTab].title}
              </span>
              <h3 className="pillar-display-headline">{pillars[activeTab].headline}</h3>
            </div>

            <p className="pillar-display-body">{pillars[activeTab].body}</p>

            <div className="pillar-points-list">
              <h4>Key Institutional Commitments:</h4>
              <ul>
                {pillars[activeTab].points.map((pt, idx) => (
                  <li key={idx}>
                    <span className="pillar-point-dot" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LeadershipPillars;
