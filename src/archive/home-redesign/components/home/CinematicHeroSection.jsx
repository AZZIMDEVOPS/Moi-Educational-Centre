import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import '../css/premium-hero.css';

const CinematicHeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particlePositions, setParticlePositions] = useState([]);

  useEffect(() => {
    // Generate particle positions for animated background
    const particles = Array.from({ length: 40 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 5,
    }));
    setParticlePositions(particles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <section className="cinematic-hero">
      {/* Animated Background Gradient */}
      <div className="hero-gradient-bg"></div>

      {/* Animated Particles */}
      <div className="particles-container">
        {particlePositions.map((particle, idx) => (
          <motion.div
            key={idx}
            className="particle"
            initial={{ opacity: 0, y: '100vh' }}
            animate={{
              opacity: [0, 1, 0],
              y: '-100vh',
              x: particle.x + (Math.random() - 0.5) * 100,
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'linear'
            }}
            style={{
              left: `${particle.x}%`,
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
            }}
          ></motion.div>
        ))}
      </div>

      {/* Hero Grid */}
      <div className="hero-grid"></div>

      {/* Main Content */}
      <motion.div
        className="hero-content-cinematic"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated 40 Badge */}
        <motion.div
          className="forty-badge"
          variants={itemVariants}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg viewBox="0 0 120 120" className="forty-svg">
            <defs>
              <linearGradient id="fortyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8e44ad" />
                <stop offset="100%" stopColor="#d946ef" />
              </linearGradient>
            </defs>
            <circle cx="60" cy="60" r="55" fill="none" stroke="url(#fortyGradient)" strokeWidth="2" opacity="0.6" />
            <text
              x="60"
              y="75"
              textAnchor="middle"
              fontSize="60"
              fontWeight="900"
              fill="url(#fortyGradient)"
            >
              40
            </text>
          </svg>
          <span className="badge-text">YEARS</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 className="hero-headline" variants={itemVariants}>
          Shaping Futures
          <br />
          for <span className="text-gradient">40 Years</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p className="hero-subheadline" variants={itemVariants}>
          Where Excellence Meets Innovation
        </motion.p>

        {/* Achievement Stats */}
        <motion.div className="achievement-counters" variants={itemVariants}>
          {[
            { number: 4000, label: 'Alumni', suffix: '+' },
            { number: 40, label: 'Years', suffix: '' },
            { number: 98, label: 'Excellence', suffix: '%' }
          ].map((stat, idx) => (
            <motion.div key={idx} className="counter-item">
              <div className="counter-value">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + idx * 0.2, duration: 0.6 }}
                >
                  {stat.number}
                </motion.span>
                <span className="counter-suffix">{stat.suffix}</span>
              </div>
              <p className="counter-label">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div className="cta-buttons" variants={itemVariants}>
          <button className="btn-premium btn-primary-glow">
            Explore MEC
          </button>
          <button className="btn-premium btn-outline-premium">
            Admissions Open
          </button>
        </motion.div>
      </motion.div>

      {/* Mouse Glow Effect */}
      <div
        className="mouse-glow"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      ></div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FiArrowDown />
      </motion.div>
    </section>
  );
};

export default CinematicHeroSection;
