import PropTypes from 'prop-types';
import { useState } from 'react';

const ClubImageGallery = ({ images, clubName, gridColumns = 3 }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="club-image-gallery">
            <div className="gallery-header">
                <h3>Photo Gallery - {clubName}</h3>
            </div>

            <div className={`gallery-grid gallery-grid-${gridColumns}`}>
                {images.map((image, index) => (
                    <div 
                        key={index}
                        className="gallery-item"
                        onClick={() => setSelectedImage(image)}
                    >
                        <img 
                            src={image} 
                            alt={`${clubName} activity ${index + 1}`}
                            loading="lazy"
                            className="gallery-item-image"
                        />
                        <div className="gallery-item-overlay"></div>
                        <div className="gallery-item-hover">
                            <svg className="gallery-zoom-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.35-4.35"></path>
                            </svg>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div 
                    className="gallery-lightbox"
                    onClick={() => setSelectedImage(null)}
                >
                    <button 
                        className="lightbox-close"
                        onClick={() => setSelectedImage(null)}
                    >
                        ✕
                    </button>
                    <img 
                        src={selectedImage} 
                        alt="Full size gallery image"
                        className="lightbox-image"
                    />
                </div>
            )}
        </div>
    );
};

ClubImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    clubName: PropTypes.string.isRequired,
    gridColumns: PropTypes.oneOf([2, 3, 4])
};

export default ClubImageGallery;
