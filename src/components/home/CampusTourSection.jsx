import React, { useState } from 'react';
import CinematicDroneExperience from './CinematicDroneExperience';

import school3 from '../../assets/school3.jpg';
import school4 from '../../assets/school4.jpg';
import school5 from '../../assets/school5.jpg';
import school6 from '../../assets/school6.jpg';
import schoolImg from '../../assets/school.jpg';
import '../../css/campus-tour.css';

const GALLERY = [
  { img: school3, title: 'Olympic-size Pool' },
  { img: school4, title: 'Modern Classrooms' },
  { img: school5, title: 'Creative Arts Center' },
  { img: school6, title: 'Sports Complex' },
  { img: schoolImg, title: 'Library & Resource Center' },
];

const CampusTourSection = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className="campus-tour-section" id="campus-tour">
      <div className="inner-row">
        {/* Header */}
        <div className="campus-tour-header global-reveal">
          <div className="section-eyebrow">
            <span className="section-eyebrow-dot" aria-hidden="true" />
            Interactive Aerial Campus Experience
          </div>
          <h2 className="section-heading">
            A world-class environment designed for <span>excellence.</span>
          </h2>
          <p className="section-sub">
            Explore our state-of-the-art facilities, modern classrooms, and expansive sports complexes. Experience the MEC difference through our scroll-driven 4K drone flyover.
          </p>
        </div>

        {/* ── Main Cinematic Feature (Scroll-Driven Drone Experience) ── */}
        <div className="campus-tour-feature-wrap global-reveal" style={{ marginBottom: '40px' }}>
          <CinematicDroneExperience />
        </div>

        {/* Interactive Gallery */}
        <div className="campus-gallery global-reveal">
          {GALLERY.map((item, i) => (
            <div 
              key={i}
              className={`campus-gallery-item ${i === activeImage ? 'active' : ''}`}
              onClick={() => setActiveImage(i)}
            >
              <img src={item.img} alt={item.title} loading="lazy" />
              <div className="gallery-item-overlay">
                <h4>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CampusTourSection;
