import React from "react";

const LeadershipPhilosophyStatement = () => {
  return (
    <section className="ldr-philosophy-statement-sec" id="philosophy">
      <div className="ldr-container">
        <div className="ldr-philosophy-card">
          <span className="ldr-eyebrow" style={{ color: "rgba(255, 255, 255, 0.85)" }}>
            LEADERSHIP AT MOI EDUCATIONAL CENTRE
          </span>
          <blockquote className="ldr-statement-headline">
            “Leadership at MEC is about creating the intentional conditions, moral clarity, and academic environment where every learner is empowered to thrive.”
          </blockquote>
          <div className="ldr-statement-foot">
            <span className="ldr-statement-author">The MEC Leadership Council</span>
            <span className="ldr-statement-divider">•</span>
            <span className="ldr-statement-sub">Striving for Excellence Since 1986</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipPhilosophyStatement;
