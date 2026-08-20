import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/cta-section.css';

const CTASection = () => (
  <section className="cta-section" aria-label="Call to Action — Apply to MEC">
    {/* Blobs */}
    <div className="cta-blob cta-blob-1" aria-hidden="true" />
    <div className="cta-blob cta-blob-2" aria-hidden="true" />
    <div className="cta-blob cta-blob-3" aria-hidden="true" />

    {/* Grid lines */}
    <div className="cta-grid" aria-hidden="true">
      {[...Array(8)].map((_, i) => <div key={i} className="cta-grid-line" />)}
    </div>

    <div className="cta-inner">
      <div className="cta-eyebrow">
        <span>🏆</span>
        Celebrating 40 Years of Excellence
      </div>

      <h2 className="cta-headline">
        Ready to shape your<br />
        child's <span>future?</span>
      </h2>

      <p className="cta-sub">
        Join the Moi Educational Centre family. Applications for 2026–2027 are now open.
        Take the first step towards a world-class education journey.
      </p>

      <div className="cta-buttons">
        <Link to="/admissions/admission-process" className="cta-btn-primary" id="cta-apply-btn">
          Apply Now
        </Link>
        <button
          className="cta-btn-ghost"
          id="cta-tour-btn"
          onClick={() => window.open('https://wa.me/254706280170?text=Hello%20MEC%20Admissions%20Team%2C%20I%20would%20like%20to%20book%20a%20school%20tour.', '_blank')}
        >
          Book a School Visit
        </button>
        <Link to="/admissions/resources" className="cta-btn-ghost" id="cta-prospectus-btn">
          Download Prospectus
        </Link>
      </div>

      {/* Trust badges */}
      <div className="cta-trust">
        {[
          { icon: '🎓', text: '40+ Years of Excellence' },
          { icon: '✅', text: 'CBC & Cambridge Accredited' },
          { icon: '🏆', text: '98% University Placement' },
          { icon: '🌍', text: 'Global Community' },
        ].map(b => (
          <div className="cta-trust-badge" key={b.text}>
            <span className="cta-trust-icon" aria-hidden="true">{b.icon}</span>
            {b.text}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CTASection;
