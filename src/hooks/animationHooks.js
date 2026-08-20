/**
 * useBackgroundImage Hook
 * Provides enhanced background image loading with animations
 */

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useBackgroundImage = (imageUrl, options = {}) => {
  const containerRef = useRef(null);
  const {
    duration = 1,
    delay = 0,
    overlay = true,
    overlayColor = 'rgba(46, 19, 46, 0.4)',
    parallax = false,
  } = options;

  useEffect(() => {
    if (!containerRef.current || !imageUrl) return;

    const container = containerRef.current;

    // Preload image
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      // Apply background image with fade-in animation
      gsap.fromTo(
        container,
        {
          backgroundImage: 'none',
          backgroundPosition: '50% 100%',
        },
        {
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: parallax ? '50% 50%' : '50% 0%',
          duration,
          delay,
          ease: 'power2.out',
        }
      );
    };

    // Add parallax scroll effect if enabled
    if (parallax) {
      const handleScroll = () => {
        const rect = container.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const yPos = (scrolled - rect.top) * 0.5;
        container.style.backgroundPosition = `50% ${yPos}px`;
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [imageUrl, duration, delay, parallax]);

  return containerRef;
};

/**
 * useImageGalleryAnimation Hook
 * Provides staggered animation for image galleries
 */
export const useImageGalleryAnimation = (
  containerRef,
  options = {}
) => {
  const {
    stagger = 0.1,
    duration = 0.8,
    delay = 0,
    effect = 'slideIn', // 'slideIn', 'fadeIn', 'zoomIn'
  } = options;

  useEffect(() => {
    if (!containerRef.current) return;

    const images = containerRef.current.querySelectorAll('[data-gallery-item]');
    if (!images.length) return;

    const animationConfig = {
      slideIn: {
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0 },
      },
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      zoomIn: {
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 },
      },
    };

    const config = animationConfig[effect] || animationConfig.slideIn;

    gsap.fromTo(
      images,
      config.from,
      {
        ...config.to,
        duration,
        delay,
        stagger,
        ease: 'power2.out',
      }
    );
  }, [containerRef, stagger, duration, delay, effect]);
};

/**
 * useScrollReveal Hook
 * Reveals elements on scroll with customizable animations
 */
export const useScrollReveal = (options = {}) => {
  const containerRef = useRef(null);
  const {
    duration = 0.8,
    threshold = 0.2,
    effect = 'slideUp', // 'slideUp', 'slideDown', 'slideLeft', 'slideRight', 'fadeIn', 'scaleIn'
  } = options;

  useEffect(() => {
    if (!containerRef.current) return;

    const revealConfig = {
      slideUp: { from: { opacity: 0, y: 60 }, to: { opacity: 1, y: 0 } },
      slideDown: { from: { opacity: 0, y: -60 }, to: { opacity: 1, y: 0 } },
      slideLeft: { from: { opacity: 0, x: -60 }, to: { opacity: 1, x: 0 } },
      slideRight: { from: { opacity: 0, x: 60 }, to: { opacity: 1, x: 0 } },
      fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
      scaleIn: { from: { opacity: 0, scale: 0.9 }, to: { opacity: 1, scale: 1 } },
    };

    const config = revealConfig[effect] || revealConfig.slideUp;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('revealed')) {
            entry.target.classList.add('revealed');
            gsap.fromTo(
              entry.target,
              config.from,
              {
                ...config.to,
                duration,
                ease: 'power2.out',
              }
            );
          }
        });
      },
      { threshold }
    );

    const elements = containerRef.current.querySelectorAll('[data-reveal]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [duration, threshold, effect]);

  return containerRef;
};
