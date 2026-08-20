import { useParams, Navigate } from "react-router-dom";
import { activities } from "../data/activities";
import Navbar from "../components/common/navigation/Navbar";
import Footer from "../components/common/Footer";
import ActivityHero from "../components/extracurricular/ActivityHero";
import ActivityBody from "../components/extracurricular/ActivityBody";
import "../css/extracurricular.css";
import "../css/club-card.css";
import SEO from "../components/common/SEO";

const SingleActivityPage = ({ id }) => {
    const { activityId: paramId } = useParams();
    const finalId = id || paramId;
    const activity = activities.find(a => a.id === finalId);

    if (!activity) {
        return <Navigate to="/extra-curricular" replace />;
    }

    return (
        <>
            <SEO
                title={activity.title}
                description={`Join the ${activity.title} program at Moi Educational Centre. ${activity.description}`}
                image={activity.image}
                url={activity.link}
            />
            <Navbar />
            <ActivityHero
                title={activity.title}
                image={activity.image}
            />
            <ActivityBody activity={activity} />
            <Footer />
        </>
    );
};

export default SingleActivityPage;
