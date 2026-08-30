import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ChairmanPullquote = () => {
  return (
    <section className="ch-pullquote-spread" id="key-quote">
      <div className="ch-container">
        <div className="ch-pullquote-card">
          <FaQuoteLeft className="ch-spread-quote-icon" />
          <blockquote className="ch-spread-quote-text">
            “We are more than a school. We are a nurturing community committed to excellence, character, and leadership.”
          </blockquote>
          <div className="ch-spread-author">
            <strong>Mr. Paul K. Chemng'orem</strong>
            <span>Chairman, Board of Directors — Moi Educational Centre</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanPullquote;
