import React, { useState } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import aboutImg from "../../assets/about2.jpg";
import "../../css/about-v3.css";

const HIGHLIGHTS = [
  {
    icon: "🎓",
    title: "Academic Excellence",
    desc: "A globally acclaimed curriculum delivering outstanding results."
  },
  {
    icon: "🌍",
    title: "Global Learning",
    desc: "Preparing students for success in an ever-changing world."
  },
  {
    icon: "💡",
    title: "Innovation & Technology",
    desc: "Future-ready learning with modern STEM integration."
  },
  {
    icon: "🤝",
    title: "Character & Leadership",
    desc: "Nurturing resilience, integrity, and lifelong leadership skills."
  }
];

const TIMELINE = [
  { year: "1986", label: "Founded" },
  { year: "1990s", label: "Academic Growth" },
  { year: "2010s", label: "Curriculum Expansion" },
  { year: "2020s", label: "Innovation & Tech" },
  { year: "Today", label: "40 Years of Excellence" }
];

const STATS = [
  { value: 40, suffix: "+", label: "Years of Excellence" },
  { value: 2500, suffix: "+", label: "Alumni" },
  { value: 2, suffix: "", label: "World-Class Curriculums" },
  { value: 100, suffix: "%", label: "Holistic Education" }
];

// Helper to keep CountUp out of loops
const StatItem = ({ stat }) => {
  return (
    <div className="about-stat">
      <h3>
        <CountUp end={stat.value} suffix={stat.suffix} enableScrollSpy scrollSpyOnce />
      </h3>
      <p>{stat.label}</p>
    </div>
  );
};

const AboutSection = () => {
  return (
    <>
      <section className="about-v3">
        <div className="about-v3-inner">
          
          {/* Split Screen Layout */}
          <div className="about-split">
            
            {/* Left: Media */}
            <div className="about-media-col global-reveal">
              <div className="about-media-frame">
                <img src={aboutImg} alt="MEC Campus Life" loading="lazy" />
                <div className="about-media-overlay" />
              </div>
              <div className="about-badge-floating">
                <h4>40+</h4>
                <span>Years of Excellence</span>
              </div>

              {/* Balancing Institutional Quote Card */}
              <div className="about-quote-card">
                <div className="about-quote-icon">“</div>
                <p className="about-quote-text">
                  Our mission is to empower every learner to achieve academic distinction, strong moral character, and global leadership.
                </p>
                <div className="about-quote-author">
                  — Board of Governors, Moi Educational Centre
                </div>
              </div>
            </div>

            {/* Right: Editorial */}
            <div className="about-text-col global-reveal">
              <div className="about-eyebrow">
                <span className="about-eyebrow-line" />
                About Moi Educational Centre
              </div>
              <h2 className="about-heading">
                Rooted in <span>Legacy.</span><br />
                Built for the <span>Future.</span>
              </h2>
              <p className="about-intro">
                Established in 1986 by the late President Daniel Toroitich Arap Moi, <strong>Moi Educational Centre</strong> was born from an unwavering belief that every Kenyan child deserves access to affordable, world-class education. 
                <br /><br />
                For over 40 years, we have nurtured generations of learners through academic excellence, innovation, and character development. Today, we combine the globally acclaimed CBC Curriculum with a holistic approach that empowers learners to lead in an ever-changing world.
              </p>

              {/* Highlights */}
              <div className="about-highlights">
                {HIGHLIGHTS.map((hl, idx) => (
                  <div className="about-hl-card" key={idx}>
                    <div className="about-hl-icon">{hl.icon}</div>
                    <h4>{hl.title}</h4>
                    <p>{hl.desc}</p>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="about-actions">
                <Link to="/about-MEC" className="about-btn-primary">
                  Discover Our Story
                </Link>
                <Link to="/education" className="about-btn-secondary">
                  Explore Programmes
                </Link>
              </div>
            </div>

          </div>

          {/* Interactive Statistics */}
          <div className="about-stats global-reveal">
            {STATS.map((stat, idx) => (
              <StatItem key={idx} stat={stat} />
            ))}
          </div>

          {/* Timeline Accent */}
          <div className="about-timeline global-reveal">
            <div className="about-tl-line" />
            {TIMELINE.map((point, idx) => (
              <div className="about-tl-item" key={idx}>
                <div className="about-tl-year">{point.year}</div>
                <div className="about-tl-dot" />
                <div className="about-tl-label">{point.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default AboutSection;