/**
 * ImageBackgroundSection Component
 * Reusable component for sections with background images and overlays
 */

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../../css/image-background.css';

const ImageBackgroundSection = ({
  imageUrl,
  alt = 'Section background image',
  overlay = true,
  overlayColor = 'rgba(46, 19, 46, 0.5)',
  overlayIntensity = 0.5,
  parallax = false,
  children,
  className = '',
  minHeight = '400px',
  animationEffect = 'fadeIn', // 'fadeIn', 'zoomIn', 'slideUp'
  animationDuration = 1.2,
  animationDelay = 0,
}) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!imageUrl) return;

    // Preload image
    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          {
            opacity: 0,
            scale: animationEffect === 'zoomIn' ? 1.1 : 1,
            y: animationEffect === 'slideUp' ? 30 : 0,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: animationDuration,
            delay: animationDelay,
            ease: 'power2.out',
          }
        );
      }
    };

    // Parallax effect
    if (parallax && sectionRef.current) {
      const handleScroll = () => {
        const rect = sectionRef.current?.getBoundingClientRect();
        if (rect) {
          const scrollY = window.scrollY;
          const elementTop = scrollY + rect.top;
          const distance = scrollY - (elementTop - window.innerHeight);
          const yPos = distance * 0.5;
          if (imageRef.current) {
            gsap.to(imageRef.current, {
              y: yPos,
              duration: 0.1,
              overwrite: 'auto',
            });
          }
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [imageUrl, parallax, animationEffect, animationDuration, animationDelay]);

  const overlayStyle = {
    background: overlay
      ? `linear-gradient(135deg, ${overlayColor}, rgba(142, 68, 173, ${overlayIntensity}))`
      : 'transparent',
  };

  return (
    <section
      ref={sectionRef}
      className={`image-background-section ${className}`}
      style={{ minHeight }}
    >
      {/* Background Image Layer */}
      {imageUrl && (
        <div
          ref={imageRef}
          className="image-layer"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: parallax ? 'fixed' : 'scroll',
          }}
          aria-label={alt}
        />
      )}

      {/* Overlay Layer */}
      {overlay && <div className="overlay-layer" style={overlayStyle} />}

      {/* Decorative Elements */}
      <div className="decoration-elements">
        <div className="decoration-circle decoration-circle-1" />
        <div className="decoration-circle decoration-circle-2" />
        <div className="decoration-line decoration-line-1" />
        <div className="decoration-line decoration-line-2" />
      </div>

      {/* Content Layer */}
      <div className="content-layer">{children}</div>
    </section>
  );
};

export default ImageBackgroundSection;
