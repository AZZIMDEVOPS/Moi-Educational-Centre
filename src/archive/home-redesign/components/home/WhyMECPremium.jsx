import React from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiAward, FiUsers, FiTrendingUp, FiMusic, FiCode } from 'react-icons/fi';
import '../../css/premium-why-mec.css';

const WhyMECPremium = () => {
  const features = [
    {
      icon: FiAward,
      title: 'Academic Excellence',
      description: 'CBC curriculum with global standards and proven track record of achievement',
      color: '#8e44ad'
    },
    {
      icon: FiTrendingUp,
      title: 'Leadership Development',
      description: 'Comprehensive programs fostering critical thinking and tomorrow\'s leaders',
      color: '#d946ef'
    },
    {
      icon: FiZap,
      title: 'Innovation & Tech',
      description: 'AI, robotics, aviation, and cutting-edge technology integration',
      color: '#a855f7'
    },
    {
      icon: FiMusic,
      title: 'Arts & Culture',
      description: 'World-class performing arts, music academy, and creative expression',
      color: '#c77dff'
    },
    {
      icon: FiUsers,
      title: 'Holistic Development',
      description: 'Sports, clubs, and extracurriculars building well-rounded individuals',
      color: '#8e44ad'
    },
    {
      icon: FiCode,
      title: 'Future-Ready',
      description: 'Digital literacy and 21st-century skills for global competitiveness',
      color: '#d946ef'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
    hover: {
      y: -15,
      boxShadow: '0 30px 60px rgba(217, 70, 239, 0.3)',
    }
  };

  return (
    <section className="why-mec-section">
      <div className="inner-row">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Why Choose MEC</h2>
          <p className="section-subtitle">
            Premium education redefined for the modern African learner
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={idx}
                className="feature-card glass-premium"
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Gradient Background */}
                <div
                  className="card-glow"
                  style={{
                    background: `radial-gradient(circle, ${feature.color}20 0%, transparent 100%)`
                  }}
                ></div>

                {/* Icon */}
                <motion.div
                  className="feature-icon"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ color: feature.color }}
                >
                  <IconComponent size={40} />
                </motion.div>

                {/* Content */}
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>

                {/* Learn More Button */}
                <button className="feature-link">
                  Learn More →
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="why-mec-cta"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h3>Join 4000+ MEC Alumni Shaping the Future</h3>
            <p>Be part of a legacy of excellence and innovation</p>
          </div>
          <button className="btn-premium btn-primary-glow">
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMECPremium;
