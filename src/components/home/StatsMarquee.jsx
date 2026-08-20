import React from 'react';
import '../../css/stats-marquee.css';

const stats = [
  { icon: '🏫', value: '40+', label: 'Years of Excellence' },
  { icon: '👩‍🎓', value: '2,500+', label: 'Students Enrolled' },
  { icon: '👨‍🏫', value: '100+', label: 'Qualified Educators' },
  { icon: '🎓', value: '98%', label: 'University Placement' },
  { icon: '⚽', value: '15+', label: 'Sports Disciplines' },
  { icon: '🤖', value: '50+', label: 'Clubs & Societies' },
  { icon: '🌍', value: '3+', label: 'Curricula Offered' },
  { icon: '🏆', value: '1986', label: 'Year Established' },
];

const StatsMarquee = () => {
  // Duplicate for seamless infinite loop
  const items = [...stats, ...stats];

  return (
    <div className="stats-marquee" role="region" aria-label="MEC Key Statistics">
      <div className="stats-marquee-track">
        {items.map((stat, i) => (
          <div className="stats-marquee-item" key={i}>
            <span className="stats-marquee-icon" aria-hidden="true">{stat.icon}</span>
            <span className="stats-marquee-value">{stat.value}</span>
            <span className="stats-marquee-label">{stat.label}</span>
            <span className="stats-marquee-sep" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsMarquee;
