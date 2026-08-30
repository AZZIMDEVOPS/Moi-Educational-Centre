import React from "react";
import { FaHistory, FaCompass, FaGlobeAfrica, FaMicrochip, FaUsers } from "react-icons/fa";

const ChairmanThemes = () => {
  const themes = [
    {
      num: "01",
      icon: <FaHistory />,
      title: "40-Year Legacy of Excellence",
      desc: "Rooted in our enduring motto, 'Strive for Excellence', MEC has established a benchmark of academic distinction and moral clarity since 1986."
    },
    {
      num: "02",
      icon: <FaCompass />,
      title: "CBC & Senior School Pathways",
      desc: "Comprehensive readiness for the 3 Senior School pathways: STEM, Arts & Sports Science, and Social Sciences, tailored to learner strengths."
    },
    {
      num: "03",
      icon: <FaGlobeAfrica />,
      title: "Global Standards & Identity",
      desc: "Integrating Cambridge international rigor and global benchmarking while maintaining a strong foundation in values, faith, and cultural identity."
    },
    {
      num: "04",
      icon: <FaMicrochip />,
      title: "Thoughtful Innovation",
      desc: "Leveraging coding, AI, and digital learning tools to accelerate critical thinking without ever losing the warmth of human mentorship."
    },
    {
      num: "05",
      icon: <FaUsers />,
      title: "A Nurturing Community",
      desc: "More than an institution — a purposeful ecosystem where parents, teachers, and learners unite in character formation and mutual growth."
    }
  ];

  return (
    <section className="ch-themes-section" id="core-pillars">
      <div className="ch-container">
        
        <div className="ch-section-header">
          <span className="ch-eyebrow">STRATEGIC PILLARS</span>
          <h2 className="ch-section-title">Core Pillars of the Chairman's Vision</h2>
          <p className="ch-section-desc">
            The foundational themes guiding Moi Educational Centre's strategic roadmap and daily educational delivery.
          </p>
        </div>

        <div className="ch-themes-grid">
          {themes.map((t, idx) => (
            <div key={idx} className="ch-theme-card">
              <div className="ch-theme-top">
                <span className="ch-theme-icon">{t.icon}</span>
                <span className="ch-theme-num">{t.num}</span>
              </div>
              <h3 className="ch-theme-title">{t.title}</h3>
              <p className="ch-theme-desc">{t.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ChairmanThemes;
