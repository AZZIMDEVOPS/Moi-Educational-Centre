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
            
            {/* Decorative stars */}
            <g fill="#d946ef" opacity="0.8">
              {/* Top star */}
              <text x="100" y="38" textAnchor="middle" fontSize="14">★</text>
              {/* Left stars */}
              <text x="75" y="50" textAnchor="middle" fontSize="10">★</text>
              <text x="65" y="65" textAnchor="middle" fontSize="8">★</text>
              {/* Right stars */}
              <text x="125" y="50" textAnchor="middle" fontSize="10">★</text>
              <text x="135" y="65" textAnchor="middle" fontSize="8">★</text>
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
