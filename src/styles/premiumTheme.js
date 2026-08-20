/**
 * MEC PREMIUM DESIGN SYSTEM
 * 40 Years of Excellence - Cinematic Redesign
 * Brand Colors + Futuristic Elevation
 */

export const MECBrandColors = {
  // Primary Purple (Premium)
  primary: '#8e44ad',
  primaryLight: '#c77dff',
  primaryDark: '#6d28d9',
  
  // Deep Purple (Prestige)
  deepPurple: '#4c1d95',
  ultraDeep: '#2e132e',
  
  // Magenta Accent (Energy)
  magenta: '#d946ef',
  magentaDark: '#a855f7',
  
  // Secondary Colors
  silver: '#e8e8e8',
  silverLight: '#f5f5f5',
  
  // Background
  darkBg: '#0d0010',
  darkBgSecondary: '#1a1a2e',
  
  // Accent Gradients
  gradient: {
    primary: 'linear-gradient(135deg, #8e44ad 0%, #d946ef 100%)',
    luxury: 'linear-gradient(135deg, #4c1d95 0%, #8e44ad 50%, #6d28d9 100%)',
    futuristic: 'linear-gradient(180deg, rgba(142, 68, 173, 0.3) 0%, rgba(217, 70, 239, 0.1) 100%)',
    glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
  },
  
  // Glow Effects
  glow: {
    primary: '0 0 40px rgba(142, 68, 173, 0.6)',
    magenta: '0 0 50px rgba(217, 70, 239, 0.5)',
    premium: '0 0 60px rgba(142, 68, 173, 0.4), 0 0 30px rgba(217, 70, 239, 0.3)',
  }
};

export const PremiumTypography = {
  hero: {
    size: 'clamp(2.5rem, 8vw, 6rem)',
    weight: 900,
    letterSpacing: '-0.02em',
    lineHeight: 1.1,
  },
  heading1: {
    size: 'clamp(2rem, 5vw, 4rem)',
    weight: 800,
    letterSpacing: '-0.01em',
  },
  heading2: {
    size: 'clamp(1.5rem, 3vw, 2.5rem)',
    weight: 700,
  },
  body: {
    size: '1.1rem',
    weight: 400,
    lineHeight: 1.6,
    letterSpacing: '0.01em',
  },
  caption: {
    size: '0.9rem',
    weight: 500,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  }
};

export const AnimationPresets = {
  // Smooth stagger
  stagger: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.12,
          delayChildren: 0.1,
        }
      }
    },
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' }
      }
    }
  },
  
  // Scroll reveal
  scrollReveal: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  },
  
  // Float effect
  float: {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  },
  
  // Glow pulse
  glowPulse: {
    animate: {
      boxShadow: [
        `0 0 30px rgba(142, 68, 173, 0.3)`,
        `0 0 60px rgba(217, 70, 239, 0.5)`,
        `0 0 30px rgba(142, 68, 173, 0.3)`
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  }
};

export const GlassmorphismStyles = {
  light: `
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  `,
  
  premium: `
    background: rgba(142, 68, 173, 0.08);
    backdrop-filter: blur(30px);
    border: 1px solid rgba(217, 70, 239, 0.2);
  `,
  
  dark: `
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(25px);
    border: 1px solid rgba(142, 68, 173, 0.15);
  `
};
