import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaGraduationCap, 
  FaBookOpen, 
  FaRobot, 
  FaMusic, 
  FaFutbol, 
  FaStar, 
  FaLandmark, 
  FaShieldAlt, 
  FaLightbulb, 
  FaChalkboardTeacher, 
  FaGlobeAmericas, 
  FaHeart 
} from 'react-icons/fa';

import '../../css/why-mec.css';

const features = [
  { Icon: FaGraduationCap, title: 'Cambridge Excellence', desc: 'IGCSE and A-Level certifications from one of the world\'s leading curricula.' },
  { Icon: FaBookOpen, title: 'CBC Curriculum', desc: 'Competency-based learning aligned with Kenya\'s national education goals.' },
  { Icon: FaRobot, title: 'Robotics & AI', desc: 'Hands-on STEM innovation labs and future-tech programmes.' },
  { Icon: FaMusic, title: 'Music & Performing Arts', desc: 'ABRSM-certified music academy and award-winning drama programmes.' },
  { Icon: FaFutbol, title: 'Sports Excellence', desc: 'Nationally competitive teams in swimming, football, athletics and more.' },
  { Icon: FaStar, title: 'Leadership Development', desc: 'Mentorship, Model UN, debate and community service programmes.' },
  { Icon: FaLandmark, title: 'Modern Facilities', desc: 'State-of-the-art labs, libraries, sports fields and digital classrooms.' },
  { Icon: FaShieldAlt, title: 'Safe & Inclusive', desc: 'A warm, diverse and secure environment where every child belongs.' },
  { Icon: FaLightbulb, title: 'Holistic Education', desc: 'Mind, body and spirit development beyond academic achievement.' },
  { Icon: FaChalkboardTeacher, title: 'Expert Educators', desc: '100+ highly qualified, passionate teachers dedicated to every learner.' },
  { Icon: FaGlobeAmericas, title: 'Global Perspective', desc: 'International partnerships and cross-cultural learning opportunities.' },
  { Icon: FaHeart, title: 'Community Values', desc: 'Rooted in compassion, integrity and service to Kenya and the world.' },
];

const WhyMECSection = () => {
  return (
    <section className="why-mec" aria-label="Why Choose MEC">
      {/* Background decorations */}
      <div className="why-mec-bg-glow" aria-hidden="true" />
      <div className="why-mec-bg-glow-2" aria-hidden="true" />

      <div className="why-mec-inner">
        <header className="why-mec-header">
          <div className="section-eyebrow">
            <span className="section-eyebrow-dot" />
            Why Choose MEC
          </div>
          <h2 className="why-mec-title">
            Where excellence meets <span>purpose</span>
          </h2>
          <p className="why-mec-sub">
            Discover why thousands of families across Kenya trust Moi Educational Centre to shape their children's futures.
          </p>
        </header>

        <div className="why-mec-grid">
          {features.map((f) => (
            <div className="why-mec-card reveal" key={f.title}>
              <div className="why-mec-card-bar" aria-hidden="true" />
              <div className="why-mec-card-ripple" aria-hidden="true" />
              <span className="why-mec-card-icon" aria-hidden="true">
                <f.Icon style={{ fontSize: '20px', color: '#38bdf8' }} />
              </span>
              <h3 className="why-mec-card-title">{f.title}</h3>
              <p className="why-mec-card-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMECSection;
