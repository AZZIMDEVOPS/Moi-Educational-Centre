import React from "react";
import { FaRobot, FaTrophy, FaCalendarCheck, FaGlobe, FaAward } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { useHeroIntro } from "../../context/HeroIntroContext";

const NewsHero = () => {
  const { triggerAssistantAction } = useHeroIntro() || {};

  const handleOpenAi = () => {
    if (typeof triggerAssistantAction === "function") {
      triggerAssistantAction("What are the most recent news stories and achievements at Moi Educational Centre?");
    }
  };

  return (
    <section className="nr-hero-section" aria-label="Digital Newsroom Header">
      <div className="nr-hero-mesh-1" />
      <div className="nr-hero-mesh-2" />

      <div className="newsroom-container">
        
        <div className="nr-hero-header-row">
          <div className="nr-hero-copy">
            <div className="nr-eyebrow">
              <span className="nr-eyebrow-pulse" />
              <span>DIGITAL NEWSROOM · MOI EDUCATIONAL CENTRE</span>
            </div>

            <h1 className="nr-hero-title">
              What's Happening at <span className="nr-title-accent">MEC</span>
            </h1>

            <p className="nr-hero-subtitle">
              Discover authentic student achievements, global performance tours, sports championships, academic insights, and celebrations across 40 years of excellence.
            </p>
          </div>

          <div>
            <button
              type="button"
              className="nr-ai-concierge-chip"
              onClick={handleOpenAi}
              title="Ask MEC AI Assistant about news and stories"
            >
              <FaRobot className="nr-ai-chip-sparkle" size={16} />
              <span>Ask MEC Assistant</span>
            </button>
          </div>
        </div>

        {/* Quick Stats Pill Strip */}
        <div className="nr-stats-strip">
          <div className="nr-stat-pill">
            <FaAward style={{ color: "#7720E9" }} />
            <span><strong>40 Years</strong> of Heritage</span>
          </div>
          <div className="nr-stat-pill">
            <FaGlobe style={{ color: "#0F3D91" }} />
            <span><strong>Vienna & Edinburgh</strong> Global Tours 2026</span>
          </div>
          <div className="nr-stat-pill">
            <FaTrophy style={{ color: "#F59E0B" }} />
            <span><strong>24+ Medals</strong> Aquatics & Soccer</span>
          </div>
          <div className="nr-stat-pill">
            <FaCalendarCheck style={{ color: "#2563EB" }} />
            <span><strong>100+</strong> Annual School Events</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default NewsHero;