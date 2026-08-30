import React from 'react';
import { 
  FaLandmark, 
  FaUserGraduate, 
  FaChalkboardTeacher, 
  FaGraduationCap, 
  FaFutbol, 
  FaRobot, 
  FaGlobeAmericas, 
  FaTrophy 
} from 'react-icons/fa';
import '../../css/stats-marquee.css';

const stats = [
  { Icon: FaLandmark, value: '40+', label: 'Years of Excellence' },
  { Icon: FaUserGraduate, value: '2,500+', label: 'Students Enrolled' },
  { Icon: FaChalkboardTeacher, value: '100+', label: 'Qualified Educators' },
  { Icon: FaGraduationCap, value: '98%', label: 'University Placement' },
  { Icon: FaFutbol, value: '15+', label: 'Sports Disciplines' },
  { Icon: FaRobot, value: '50+', label: 'Clubs & Societies' },
  { Icon: FaGlobeAmericas, value: '3+', label: 'Curricula Offered' },
  { Icon: FaTrophy, value: '1986', label: 'Year Established' },
];

const StatsMarquee = () => {
  // Duplicate for seamless infinite loop
  const items = [...stats, ...stats];

  return (
    <div className="stats-marquee" role="region" aria-label="MEC Key Statistics">
      <div className="stats-marquee-track">
        {items.map((stat, i) => (
          <div className="stats-marquee-item" key={i}>
            <span className="stats-marquee-icon" aria-hidden="true">
              <stat.Icon style={{ fontSize: '15px', color: '#38bdf8' }} />
            </span>
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
