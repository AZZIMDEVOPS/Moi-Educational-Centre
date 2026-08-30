import React, { useState } from 'react';
import { FaGraduationCap, FaLeaf, FaLightbulb, FaHeart } from 'react-icons/fa';
import '../../css/feature-cards.css';

const CARDS = [
  {
    num: '01',
    icon: FaGraduationCap,
    title: 'Academic Excellence',
    desc: 'Rigorous CBC and Cambridge curricula designed to foster critical thinking and intellectual growth.',
    color: '#0F3D91',
    glowColor: 'rgba(15, 61, 145, 0.35)',
    badge: 'CBC & Cambridge'
  },
  {
    num: '02',
    icon: FaLeaf,
    title: 'Holistic Development',
    desc: 'Empowering students through sports, arts, and extracurriculars to build well-rounded character.',
    color: '#8E44AD',
    glowColor: 'rgba(142, 68, 173, 0.35)',
    badge: 'Sports & Arts'
  },
  {
    num: '03',
    icon: FaLightbulb,
    title: 'Innovative Learning',
    desc: 'State-of-the-art technology, robotics, and modern teaching methodologies for a future-ready education.',
    color: '#1B48B8',
    glowColor: 'rgba(27, 72, 184, 0.35)',
    badge: 'STEM & Tech'
  },
  {
    num: '04',
    icon: FaHeart,
    title: 'Strong Values',
    desc: 'A nurturing environment rooted in integrity, respect, empathy, and community service.',
    color: '#A855F7',
    glowColor: 'rgba(168, 85, 247, 0.35)',
    badge: 'Ethics & Leadership'
  }
];

const FeatureCardsSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, activeIndex: null });

  const handleMouseMove = (e, idx) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y, activeIndex: idx });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0, activeIndex: null });
  };

  return (
    <section className="feature-cards-section">
      <div className="inner-row">
        <div className="feature-cards-grid">
          {CARDS.map((card, idx) => {
            const Icon = card.icon;
            const isHovered = mousePos.activeIndex === idx;

            return (
              <div 
                key={idx} 
                className={`feature-glass-card ${isHovered ? 'hovered' : ''}`}
                onMouseMove={(e) => handleMouseMove(e, idx)}
                onMouseLeave={handleMouseLeave}
                style={{
                  '--card-accent': card.color,
                  '--card-glow': card.glowColor,
                }}
              >
                {/* 3D Cursor Spotlight Effect */}
                {isHovered && (
                  <div 
                    className="feature-card-spotlight"
                    style={{
                      left: `${mousePos.x}px`,
                      top: `${mousePos.y}px`
                    }}
                  />
                )}

                {/* Top Card Header with Index Number & Badge */}
                <div className="feature-card-header">
                  <div className="feature-card-icon-wrap" style={{ borderColor: isHovered ? card.color : 'rgba(255,255,255,0.1)' }}>
                    <Icon className="feature-card-icon" style={{ color: isHovered ? '#fff' : card.color }} />
                    <span className="icon-pulse-ring" style={{ borderColor: card.color }} />
                  </div>
                  <span className="feature-card-number">{card.num}</span>
                </div>

                {/* Content */}
                <div className="feature-card-body">
                  <span className="feature-card-badge" style={{ color: card.color, background: `${card.color}15`, borderColor: `${card.color}40` }}>
                    {card.badge}
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>

                {/* Animated Line Bar Footer */}
                <div className="feature-card-progress-bar">
                  <div className="feature-card-progress-fill" style={{ background: card.color }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardsSection;
