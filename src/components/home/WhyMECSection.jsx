import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/why-mec.css';

const features = [
  { icon: '🎓', title: 'Cambridge Excellence', desc: 'IGCSE and A-Level certifications from one of the world\'s leading curricula.' },
  { icon: '📖', title: 'CBC Curriculum', desc: 'Competency-based learning aligned with Kenya\'s national education goals.' },
  { icon: '🤖', title: 'Robotics & AI', desc: 'Hands-on STEM innovation labs and future-tech programmes.' },
  { icon: '🎵', title: 'Music & Performing Arts', desc: 'ABRSM-certified music academy and award-winning drama programmes.' },
  { icon: '⚽', title: 'Sports Excellence', desc: 'Nationally competitive teams in swimming, football, athletics and more.' },
  { icon: '🌟', title: 'Leadership Development', desc: 'Mentorship, Model UN, debate and community service programmes.' },
  { icon: '🏛️', title: 'Modern Facilities', desc: 'State-of-the-art labs, libraries, sports fields and digital classrooms.' },
  { icon: '🛡️', title: 'Safe & Inclusive', desc: 'A warm, diverse and secure environment where every child belongs.' },
  { icon: '💡', title: 'Holistic Education', desc: 'Mind, body and spirit development beyond academic achievement.' },
  { icon: '👨‍🏫', title: 'Expert Educators', desc: '100+ highly qualified, passionate teachers dedicated to every learner.' },
  { icon: '🌍', title: 'Global Perspective', desc: 'International partnerships and cross-cultural learning opportunities.' },
  { icon: '❤️', title: 'Community Values', desc: 'Rooted in compassion, integrity and service to Kenya and the world.' },
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
              <span className="why-mec-card-icon" aria-hidden="true">{f.icon}</span>
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
