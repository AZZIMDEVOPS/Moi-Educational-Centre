import React from 'react';
import { FaShieldAlt, FaLandmark, FaMusic, FaRobot } from 'react-icons/fa';
import cambridgeLogo from '../../assets/cambridge.png';
import pearsonLogo from '../../assets/pearson.png';
import nccLogo from '../../assets/ncc.png';
import kaisLogo from '../../assets/kais.png';
import mec40Logo from '../../assets/mec-40-logo.png.png';
import '../../css/trust-marquee.css';

const TRUST_LOGOS = [
  { src: cambridgeLogo, alt: 'Cambridge Assessment International Education' },
  { src: pearsonLogo, alt: 'Pearson Edexcel' },
  { src: nccLogo, alt: 'NCC Education' },
  { src: kaisLogo, alt: 'Kenya Association of International Schools (KAIS)' },
  { src: mec40Logo, alt: 'MEC 40 Years of Excellence' },
  // Repeated text-based awards/trust marks to fill the marquee
  { text: 'CBC Accredited', Icon: FaShieldAlt },
  { text: 'British Council Partner', Icon: FaLandmark },
  { text: 'ABRSM Music Academy', Icon: FaMusic },
  { text: 'National Robotics Champions', Icon: FaRobot },
];

const TrustMarquee = () => {
  // Duplicate for seamless infinite loop
  const items = [...TRUST_LOGOS, ...TRUST_LOGOS, ...TRUST_LOGOS];

  return (
    <div className="trust-marquee" role="region" aria-label="Accreditations and Partnerships">
      <div className="trust-marquee-track">
        {items.map((item, i) => (
          <div className="trust-marquee-item" key={i}>
            {item.src ? (
              <img src={item.src} alt={item.alt} className="trust-marquee-logo" loading="lazy" />
            ) : (
              <div className="trust-marquee-text-pill">
                <span className="trust-marquee-icon" aria-hidden="true">
                  <item.Icon style={{ fontSize: '13px', color: '#38bdf8' }} />
                </span>
                <span className="trust-marquee-text">{item.text}</span>
              </div>
            )}
            <span className="trust-marquee-sep" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustMarquee;
