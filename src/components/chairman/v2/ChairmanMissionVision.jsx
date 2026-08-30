import React from "react";
import { FaCompass, FaEye, FaHeart } from "react-icons/fa";

const ChairmanMissionVision = () => {
  return (
    <section className="ch-mission-section" id="mission-vision">
      <div className="ch-container">
        
        <div className="ch-mv-split-grid">
          {/* Mission */}
          <div className="ch-mv-box mission">
            <div className="ch-mv-badge">
              <FaCompass /> OUR MISSION
            </div>
            <blockquote className="ch-mv-text">
              “To provide holistic, quality, and values-based education that empowers learners to excel academically, develop upright character, and thrive in an evolving global society.”
            </blockquote>
            <p className="ch-mv-note">
              Creating an environment where every learner discovers their unique talents and develops a lifelong passion for service and learning.
            </p>
          </div>

          {/* Vision */}
          <div className="ch-mv-box vision">
            <div className="ch-mv-badge vision">
              <FaEye /> OUR VISION
            </div>
            <blockquote className="ch-mv-text">
              “To be a premier Christian centre of academic and character excellence, nurturing future-ready leaders for Kenya and the world.”
            </blockquote>
            <p className="ch-mv-note">
              Setting the benchmark for pedagogical innovation, ethical governance, and student welfare across East Africa and beyond.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ChairmanMissionVision;
