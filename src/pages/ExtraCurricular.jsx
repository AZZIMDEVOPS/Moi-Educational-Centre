import { activities } from "../data/activities";
import Navbar from "../components/common/navigation/Navbar";
import Footer from "../components/common/Footer";
import ActivityHero from "../components/extracurricular/ActivityHero";
import { Link } from "react-router-dom";
import "../css/extracurricular.css";
import "../css/club-card.css";
import heroPoster from "../assets/hero-poster2.jpg";
import SEO from "../components/common/SEO";

const ExtraCurricular = () => {
    return (
        <>
            <SEO
                title="Extra-Curricular Activities"
                description="Explore the vibrant extra-curricular life at Moi Educational Centre, including Swimming, Hockey, Taekwondo, and Basketball."
                image={heroPoster}
                url="/extra-curricular"
            />
            <Navbar />
            <ActivityHero
                title="Extra-Curricular Activities"
                image={heroPoster}
            />
            <section className="activities-grid-section">
                <div className="inner-row">
                    <div className="activities-grid">
                        {activities.map((activity) => (
                            <Link to={activity.link} key={activity.id} className="activity-card">
                                <div className="activity-card-image">
                                    <img src={activity.image} alt={activity.title} />
                                </div>
                                <div className="activity-card-content">
                                    <h3>{activity.title}</h3>
                                    <p>{activity.description.substring(0, 100)}...</p>
                                    <span className="read-more">Learn More &rarr;</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ExtraCurricular;
