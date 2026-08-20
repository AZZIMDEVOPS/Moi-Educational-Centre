import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../css/premium-timeline.css';

const CinematicLegacyTimeline = () => {
  const [expandedMilestone, setExpandedMilestone] = useState(null);

  const milestones = [
    {
      id: 1,
      year: 1984,
      title: 'Foundation',
      description: 'MEC established with a vision for educational excellence',
      image: '/assets/legacy-hq.jpg',
      achievements: ['First campus', 'Founding principles']
    },
    {
      id: 2,
      year: 1990,
      title: 'Academic Growth',
      description: 'Expansion into high school programs and competitive academics',
      image: '/assets/school.jpg',
      achievements: ['CBC introduction', 'Science labs']
    },
    {
      id: 3,
      year: 2000,
      title: 'Global Recognition',
      description: 'First international awards and global partnerships',
      image: '/assets/academic.jpg',
      achievements: ['World Scholars Cup', 'International exchanges']
    },
    {
      id: 4,
      year: 2010,
      title: 'Innovation Hub',
      description: 'Launch of robotics, aviation, and technology programs',
      image: '/assets/innovation.jpg',
      achievements: ['Aviation program', 'Tech labs', 'Smart campus']
    },
    {
      id: 5,
      year: 2020,
      title: 'Digital Transformation',
      description: 'Leading edge technology infrastructure and hybrid learning',
      image: '/assets/school2.jpg',
      achievements: ['AI integration', 'Cloud platform', 'Global classroom']
    },
    {
      id: 6,
      year: 2024,
      title: 'Legacy of Leaders',
      description: '40 years of shaping the future generation',
      image: '/assets/legacy-hq2.jpg',
      achievements: ['4000+ alumni', '98% excellence', 'Global impact']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <section className="legacy-timeline-section">
      <div className="inner-row">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">40 Years of Excellence</h2>
          <p className="section-subtitle">
            A journey of innovation, leadership, and transformative education
          </p>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          className="timeline-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Animated Timeline Line */}
          <div className="timeline-line"></div>

          {/* Milestone Cards */}
          <div className="milestones-grid">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={milestone.id}
                className={`milestone-card ${idx % 2 === 0 ? 'left' : 'right'}`}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                onClick={() => setExpandedMilestone(expandedMilestone === milestone.id ? null : milestone.id)}
              >
                {/* Floating Card */}
                <div className="card-wrapper glass-premium">
                  {/* Year Badge */}
                  <div className="year-badge">{milestone.year}</div>

                  {/* Content */}
                  <div className="milestone-content">
                    <h3 className="milestone-title">{milestone.title}</h3>
                    <p className="milestone-description">{milestone.description}</p>

                    {/* Expandable Achievements */}
                    <motion.div
                      className="achievements"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: expandedMilestone === milestone.id ? 'auto' : 0,
                        opacity: expandedMilestone === milestone.id ? 1 : 0
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <ul>
                        {milestone.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Expand Button */}
                    <button className="expand-btn">
                      {expandedMilestone === milestone.id ? '- Less' : '+ More'}
                    </button>
                  </div>

                  {/* Timeline Dot */}
                  <motion.div
                    className="timeline-dot"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="timeline-cta"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>Discover the stories, impact, and vision that define MEC</p>
          <button className="btn-premium btn-primary-glow">Learn Our History</button>
        </motion.div>
      </div>
    </section>
  );
};

export default CinematicLegacyTimeline;
