import React from 'react';
import Navbar from '../../components/common/navigation/Navbar';
import Footer from '../../components/common/Footer';
import ActivityHero from '../../components/extracurricular/ActivityHero';
import { Link } from 'react-router-dom';
import { activities } from '../../data/activities';
import heroPoster from '../../assets/hero-poster2.jpg';
import SEO from '../../components/common/SEO';
import { useLanguage } from '../../context/LanguageContext';

const Sports = () => {
    const { t } = useLanguage();
    const sportsActivities = activities.filter(a => a.link.includes('/sports/'));

    return (
        <>
            <SEO title={t.sports} description="Explore the various sports programs at Moi Educational Centre, including Soccer Academy, Basketball, Swimming, and Athletics." />
            <Navbar />
            <ActivityHero title={t.sports} image={heroPoster} />

            <section className="activities-intro" style={{ padding: '60px 0 20px', textAlign: 'center' }}>
                <div className="inner-row">
                    <h2 style={{ color: 'var(--main-color)', marginBottom: '15px' }}>Excellence Through Athletics</h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '18px', color: '#555', lineHeight: '1.6' }}>
                        Sport is a cornerstone of life at MEC. Our programs emphasize physical fitness, teamwork, and the development of leadership skills through healthy competition.
                    </p>
                </div>
            </section>

            <section className="activities-grid-section" style={{ padding: '40px 0 100px' }}>
                <div className="inner-row">
                    <div className="activities-grid">
                        {sportsActivities.map((activity) => (
                            <Link to={activity.link} key={activity.id} className="activity-card">
                                <div className="activity-card-image">
                                    <img src={activity.image} alt={activity.title} />
                                </div>
                                <div className="activity-card-content">
                                    <h3>{activity.title}</h3>
                                    <p>{activity.description.substring(0, 120)}...</p>
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

export default Sports;
