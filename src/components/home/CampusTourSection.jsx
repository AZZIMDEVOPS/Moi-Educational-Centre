import React, { useState, useRef } from 'react';
import { FaPlay, FaPause, FaMapMarkerAlt, FaExpandArrowsAlt } from 'react-icons/fa';
import heroVideo from '../../assets/hero-vid.mp4';

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
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="campus-tour-section" id="campus-tour">
      <div className="inner-row">
        {/* Header */}
        <div className="campus-tour-header global-reveal">
          <div className="section-eyebrow">
            <span className="section-eyebrow-dot" aria-hidden="true" />
            Discover Our Campus
          </div>
          <h2 className="section-heading">
            A world-class environment designed for <span>excellence.</span>
          </h2>
          <p className="section-sub">
            Explore our state-of-the-art facilities, modern classrooms, and expansive sports complexes. Experience the MEC difference through our aerial campus tour.
          </p>
        </div>

        {/* Main Cinematic Feature (Original Aerial Drone Video) */}
        <div className="campus-tour-main global-reveal">
          <video
            ref={videoRef}
            src={heroVideo}
            className="campus-tour-hero-vid"
            autoPlay
            loop
            muted
            playsInline
          />
          
          <div className="campus-tour-overlay">
            <button className="campus-tour-play" onClick={togglePlayPause} aria-label={isPlaying ? "Pause Drone Footage" : "Play Drone Footage"}>
              <div className="play-pulse-1" />
              <div className="play-pulse-2" />
              {isPlaying ? <FaPause className="play-icon" style={{ marginLeft: 0 }} /> : <FaPlay className="play-icon" />}
            </button>
            <div className="campus-tour-title">
              <h3>MEC Campus Aerial Drone Tour</h3>
              <p>Cinematic 4K Aerial View</p>
            </div>
            
            <button className="campus-tour-360">
              <FaExpandArrowsAlt /> 360° Virtual Tour
            </button>

            {/* Interactive hotspots */}
            <div className="campus-hotspot" style={{ top: '30%', left: '40%' }}>
              <div className="hotspot-dot"><FaMapMarkerAlt /></div>
              <div className="hotspot-label">Main Academic Block</div>
            </div>
            <div className="campus-hotspot" style={{ top: '50%', right: '25%' }}>
              <div className="hotspot-dot"><FaMapMarkerAlt /></div>
              <div className="hotspot-label">Sports Arena</div>
            </div>
          </div>
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
