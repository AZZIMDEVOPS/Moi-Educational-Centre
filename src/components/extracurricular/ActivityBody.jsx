import ActivitySignupForm from './ActivitySignupForm';
import ClubImageGallery from './ClubImageGallery';

const ActivityBody = ({ activity }) => {
    // Determine gallery columns based on number of images
    const getGridColumns = () => {
        if (!activity.gallery_images || activity.gallery_images.length === 0) return 3;
        if (activity.gallery_images.length <= 2) return 2;
        if (activity.gallery_images.length <= 3) return 3;
        return 4;
    };

    return (
        <section className="activity-body">
            <div className="inner-row">
                <div className="activity-grid">
                    <div className="activity-main">
                        <div className="activity-details">
                            <h2>About {activity.title}</h2>
                            <p>{activity.description}</p>

                            <h3>Key Benefits</h3>
                            <div className="activity-benefits">
                                <ul>
                                    {activity.benefits.map((benefit, index) => (
                                        <li key={index}>{benefit}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Image Gallery Section */}
                            {activity.gallery_images && activity.gallery_images.length > 0 && (
                                <div className="activity-gallery-section">
                                    <ClubImageGallery 
                                        images={activity.gallery_images}
                                        clubName={activity.title}
                                        gridColumns={getGridColumns()}
                                    />
                                </div>
                            )}
                        </div>

                        <ActivitySignupForm activityName={activity.title} />
                    </div>

                    <div className="activity-sidebar">
                        <div className="activity-info-card">
                            <h3>Program Details</h3>

                            <div className="info-item">
                                <h4>Schedule</h4>
                                <p>{activity.schedule}</p>
                            </div>

                            <div className="info-item">
                                <h4>Coaching Team</h4>
                                <p>{activity.coach}</p>
                            </div>

                            <div className="info-item">
                                <h4>Location</h4>
                                <p>Moi Educational Centre Sports Complex</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ActivityBody;
