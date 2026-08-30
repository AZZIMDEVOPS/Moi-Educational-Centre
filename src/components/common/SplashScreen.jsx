import { useState, useEffect } from 'react';
import '../../css/splash.css';

const SplashScreen = ({ onAnimationComplete }) => {
  const [animationPhase, setAnimationPhase] = useState('intro');

  useEffect(() => {
    // Intro phase: 0-4s - animated entrance and pulse
    const introTimer = setTimeout(() => {
      setAnimationPhase('hold');
    }, 4000);

    // Exit phase: 4-5s - scale and fade out, then complete
    const exitTimer = setTimeout(() => {
      setAnimationPhase('exit');
    }, 4100);

    // Complete entire animation after 5 seconds
    const completeTimer = setTimeout(() => {
      onAnimationComplete();
    }, 5000);

    return () => {
      clearTimeout(introTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onAnimationComplete]);

  return (
    <div className="splash-screen">
      {/* Background gradient */}
      <div className={`splash-bg splash-bg-${animationPhase}`}></div>

      {/* Logo container - simplified for logo only */}
      <div className="logo-reveal-container">
        <div className={`logo-wrapper logo-${animationPhase}`}>
          <img 
            src="/assets/mec-40-logo.png" 
            alt="40 Years of Excellence" 
            className="logo-image"
            onError={(e) => {
              e.target.style.display = 'none';
              const fallback = e.target.nextElementSibling;
              if (fallback) {
                fallback.style.display = 'block';
              }
            }}
          />
          {/* Fallback SVG badge */}
          <svg
            viewBox="0 0 200 200"
            className="logo-svg-fallback"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gradientPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
              <linearGradient id="gradientAccent" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d946ef" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Outer circle */}
            <circle cx="100" cy="100" r="95" fill="none" stroke="url(#gradientAccent)" strokeWidth="3" opacity="0.6" />
            
            {/* Main circle background */}
            <circle cx="100" cy="100" r="90" fill="url(#gradientPurple)" opacity="0.1" />
            
            {/* Inner decorative circle */}
            <circle cx="100" cy="100" r="85" fill="none" stroke="url(#gradientPurple)" strokeWidth="2" />
            
            {/* Top accent line */}
            <line x1="100" y1="12" x2="100" y2="25" stroke="url(#gradientAccent)" strokeWidth="2" strokeLinecap="round" />
            
            {/* Main number */}
            <text x="100" y="115" textAnchor="middle" fontSize="80" fontWeight="900" fill="url(#gradientPurple)" filter="url(#glow)">
              40
            </text>
            
            {/* "Years" text */}
            <text x="100" y="145" textAnchor="middle" fontSize="11" fontWeight="600" fill="#a855f7" letterSpacing="2">
              YEARS
            </text>
            
            {/* Decorative vector stars */}
            <g fill="#d946ef" opacity="0.8">
              <polygon points="100,30 102,35 107,35 103,38 105,43 100,40 95,43 97,38 93,35 98,35" />
              <polygon points="75,44 76.5,47.5 80,47.5 77,50 78.5,53.5 75,51.5 71.5,53.5 73,50 70,47.5 73.5,47.5" />
              <polygon points="125,44 126.5,47.5 130,47.5 127,50 128.5,53.5 125,51.5 121.5,53.5 123,50 120,47.5 123.5,47.5" />
            </g>
            
            {/* Bottom accent */}
            <line x1="85" y1="170" x2="115" y2="170" stroke="url(#gradientPurple)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
