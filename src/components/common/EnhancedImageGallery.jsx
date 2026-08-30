/**
 * EnhancedImageGallery Component
 * Displays images in a responsive grid with animations and lightbox
 */

import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../../css/enhanced-gallery.css';

const EnhancedImageGallery = ({
  images = [],
  columns = 3,
  gap = '20px',
  animationType = 'staggerIn', // 'staggerIn', 'wave', 'zoom'
  onImageClick = null,
  showOverlay = true,
  overlayText = true,
}) => {
  const containerRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.querySelectorAll('.gallery-item');
    if (!items.length) return;

    const animationConfig = {
      staggerIn: () => {
        gsap.fromTo(
          items,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power2.out',
          }
        );
      },
      wave: () => {
        gsap.fromTo(
          items,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: {
              amount: 0.8,
              grid: [Math.ceil(items.length / columns), columns],
              from: 'center',
            },
            ease: 'back.out',
          }
        );
      },
      zoom: () => {
        gsap.fromTo(
          items,
          { opacity: 0, scale: 0.5, rotationZ: 5 },
          {
            opacity: 1,
            scale: 1,
            rotationZ: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'elastic.out(1, 0.5)',
          }
        );
      },
    };

    const animate = animationConfig[animationType] || animationConfig.staggerIn;
    animate();
  }, [animationType, columns, images.length]);

  const handleImageHover = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.3,
      overwrite: 'auto',
    });
  };

  const handleImageHoverEnd = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      overwrite: 'auto',
    });
  };

  const handleImageClick = (image, index) => {
    setSelectedImage({ ...image, index });
    if (onImageClick) {
      onImageClick(image, index);
    }
  };

  const handleImageError = (e) => {
    // Set a placeholder background for failed images
    e.target.style.display = 'none';
    e.target.parentElement.style.backgroundColor = '#f0f0f0';
    e.target.parentElement.style.display = 'flex';
    e.target.parentElement.style.alignItems = 'center';
    e.target.parentElement.style.justifyContent = 'center';
    const errorText = e.target.parentElement.querySelector('.error-text');
    if (errorText) errorText.style.display = 'block';
  };

  const handlePrevImage = () => {
    if (!selectedImage) return;
    const newIndex =
      selectedImage.index === 0 ? images.length - 1 : selectedImage.index - 1;
    setSelectedImage({ ...images[newIndex], index: newIndex });
  };

  const handleNextImage = () => {
    if (!selectedImage) return;
    const newIndex =
      selectedImage.index === images.length - 1 ? 0 : selectedImage.index + 1;
    setSelectedImage({ ...images[newIndex], index: newIndex });
  };

  return (
    <>
      {/* Gallery Grid */}
      <div
        ref={containerRef}
        className="enhanced-gallery"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageHoverEnd}
            onClick={() => handleImageClick(image, index)}
          >
            <img
              src={image.url || image.image || image}
              alt={image.alt || `Gallery image ${index + 1}`}
              className="gallery-image"
              loading="lazy"
              onError={handleImageError}
            />
            <div className="error-text" style={{ display: 'none', color: '#999', fontSize: '12px' }}>
              Image unavailable
            </div>
            {showOverlay && (
              <div className="gallery-overlay">
                {overlayText && image.title && (
                  <h3 className="overlay-text">{image.title}</h3>
                )}
                <div className="zoom-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="gallery-lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <FaTimes />
            </button>

            <button
              className="lightbox-nav prev"
              onClick={handlePrevImage}
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>

            <img
              src={selectedImage.url || selectedImage.image || selectedImage}
              alt={selectedImage.alt || 'Enlarged image'}
              className="lightbox-image"
              onError={handleImageError}
            />

            <button
              className="lightbox-nav next"
              onClick={handleNextImage}
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>

            {selectedImage.title && (
              <p className="lightbox-title">{selectedImage.title}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EnhancedImageGallery;
