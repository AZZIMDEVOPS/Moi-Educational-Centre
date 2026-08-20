import PropTypes from 'prop-types';
import { useState } from 'react';

const ClubCard = ({ 
    image, 
    title, 
    description, 
    coach, 
    schedule, 
    onLearnMore,
    imageAlt = "Club activity image"
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="club-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="club-card-image-wrapper">
                <img 
                    src={image} 
                    alt={imageAlt}
                    className="club-card-image"
                    loading="lazy"
                />
                <div className="club-card-overlay"></div>
                {isHovered && (
                    <div className="club-card-hover-content">
                        <button 
                            className="club-card-cta"
                            onClick={onLearnMore}
                        >
                            Learn More
                        </button>
                    </div>
                )}
            </div>

            <div className="club-card-content">
                <h3 className="club-card-title">{title}</h3>
                
                <p className="club-card-description">{description}</p>

                <div className="club-card-meta">
                    {coach && (
                        <div className="meta-item">
                            <span className="meta-label">Coach:</span>
                            <span className="meta-value">{coach}</span>
                        </div>
                    )}
                    {schedule && (
                        <div className="meta-item">
                            <span className="meta-label">Schedule:</span>
                            <span className="meta-value">{schedule}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

ClubCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    coach: PropTypes.string,
    schedule: PropTypes.string,
    onLearnMore: PropTypes.func,
    imageAlt: PropTypes.string
};

export default ClubCard;
