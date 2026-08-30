import React from "react";
import { FaHistory, FaUserGraduate, FaLayerGroup, FaAward } from "react-icons/fa";

const LeadershipAtAGlance = () => {
  const stats = [
    {
      num: "40+",
      label: "Years of Excellence",
      desc: "Founded in 1986, establishing a benchmark for values-based national and international education.",
      icon: <FaHistory />
    },
    {
      num: "100%",
      label: "Transition & Placement",
      desc: "Consistent top-tier national rankings with learners advancing to premier senior schools and global universities.",
      icon: <FaAward />
    },
    {
      num: "2 Pathways",
      label: "Dual Curriculum Choice",
      desc: "Seamless delivery of Kenya's CBC (Pre-School to Grade 10) alongside Cambridge International.",
      icon: <FaLayerGroup />
    },
    {
      num: "2,500+",
      label: "Learner Community",
      desc: "Nurtured daily across modern classrooms, science arenas, swimming complexes, and music studios.",
      icon: <FaUserGraduate />
    }
  ];

  return (
    <section className="ldr-glance-section" id="glance">
      <div className="ldr-container">
        
        <div className="ldr-section-header">
          <span className="ldr-eyebrow">INSTITUTIONAL METRICS</span>
          <h2 className="ldr-section-title">Leadership at a Glance</h2>
          <p className="ldr-section-desc">
            Measurable impact, verified milestones, and four decades of educational stewardship.
          </p>
        </div>

        <div className="ldr-glance-grid">
          {stats.map((s, i) => (
            <div key={i} className="ldr-glance-card">
              <div className="glance-card-top">
                <span className="glance-icon">{s.icon}</span>
                <span className="glance-number">{s.num}</span>
              </div>
              <h3 className="glance-label">{s.label}</h3>
              <p className="glance-desc">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LeadershipAtAGlance;
