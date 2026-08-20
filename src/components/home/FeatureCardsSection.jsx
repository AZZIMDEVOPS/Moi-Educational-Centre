import React from 'react';
import { FaGraduationCap, FaLeaf, FaLightbulb, FaHeart } from 'react-icons/fa';
import '../../css/feature-cards.css';

const CARDS = [
  {
    icon: FaGraduationCap,
    title: 'Academic Excellence',
    desc: 'Rigorous CBC and Cambridge curricula designed to foster critical thinking and intellectual growth.',
    delay: 0
  },
  {
    icon: FaLeaf,
    title: 'Holistic Development',
    desc: 'Empowering students through sports, arts, and extracurriculars to build well-rounded character.',
    delay: 0.1
  },
  {
    icon: FaLightbulb,
    title: 'Innovative Learning',
    desc: 'State-of-the-art technology, robotics, and modern teaching methodologies for a future-ready education.',
    delay: 0.2
  },
  {
    icon: FaHeart,
    title: 'Strong Values',
    desc: 'A nurturing environment rooted in integrity, respect, and community service.',
    delay: 0.3
  }
];

const FeatureCardsSection = () => {
  return (
    <section className="feature-cards-section">
      <div className="inner-row">
        <div className="feature-cards-grid">
          {CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx} 
                className="feature-glass-card reveal" 
                style={{ animationDelay: `${card.delay}s` }}
              >
                <div className="feature-card-icon-wrap">
                  <Icon className="feature-card-icon" />
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <div className="feature-card-glow"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardsSection;
