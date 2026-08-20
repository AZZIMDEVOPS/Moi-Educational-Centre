import ClubCard from './ClubCard';
import { getClubImages } from '../../data/clubImageConfig';
import { useNavigate } from 'react-router-dom';

/**
 * ClubsListView Component
 * 
 * EXAMPLE IMPLEMENTATION SHOWING HOW TO USE:
 * - ClubCard component
 * - Image configuration
 * - Responsive grid layout
 * - Navigation integration
 * 
 * This is a reference component for developers.
 * You can adapt this to your specific page structure.
 */

const ClubsListView = ({ activities = [], title = "Our Clubs & Activities" }) => {
    const navigate = useNavigate();

    const handleLearnMore = (activityId) => {
        navigate(`/extra-curricular/${activityId}`);
    };

    // Filter activities if needed
    const clubsToDisplay = activities || [];

    if (clubsToDisplay.length === 0) {
        return (
            <section className="clubs-list-view">
                <div className="no-clubs-message">
                    <p>No clubs available at the moment.</p>
                </div>
            </section>
        );
    }

    return (
        <section className="clubs-list-view">
            <div className="clubs-list-header">
                <h2>{title}</h2>
                <p className="section-subtitle">
                    Discover and join our vibrant community of clubs and activities
                </p>
            </div>

            <div className="clubs-grid-container">
                {clubsToDisplay.map((activity) => {
                    const clubImages = getClubImages(activity.id);
                    
                    return (
                        <ClubCard
                            key={activity.id}
                            image={clubImages.hero || activity.image}
                            title={activity.title}
                            description={activity.description}
                            coach={activity.coach}
                            schedule={activity.schedule}
                            imageAlt={`${activity.title} - Students participating in ${activity.title.toLowerCase()}`}
                            onLearnMore={() => handleLearnMore(activity.id)}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default ClubsListView;

/**
 * USAGE EXAMPLE IN YOUR PAGE:
 * 
 * import { activities } from '../../data/activities';
 * import ClubsListView from './ClubsListView';
 * 
 * export default function YourPage() {
 *     // Filter by type if needed (e.g., only sports)
 *     const clubActivities = activities.filter(a => 
 *         a.link?.includes('clubs') || a.link?.includes('sports')
 *     );
 * 
 *     return (
 *         <>
 *             <Navbar />
 *             <ClubsListView 
 *                 activities={clubActivities}
 *                 title="Clubs & Activities"
 *             />
 *             <Footer />
 *         </>
 *     );
 * }
 * 
 * 
 * STYLING REFERENCE:
 * The component uses these CSS classes (defined in club-card.css):
 * 
 * .clubs-list-view - Main container
 * .clubs-list-header - Header section with title
 * .clubs-grid-container - Grid wrapper
 * .club-card - Individual card (see ClubCard component)
 * 
 * Responsive Behavior:
 * - Desktop (>1024px): 4 columns
 * - Tablet (768px-1024px): 3 columns
 * - Mobile (<768px): 2 columns on larger phones, 1 on small phones
 * 
 * CSS GRID AUTO-FIT:
 * The grid automatically adjusts via:
 * grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
 */
