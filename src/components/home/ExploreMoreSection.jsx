import { Link } from 'react-router-dom';
import { FaUsers, FaPodcast, FaGraduationCap } from 'react-icons/fa';
import '../../css/explore-more.css';

const ExploreMoreSection = () => {
  const cards = [
    {
      id: 1,
      icon: FaUsers,
      title: 'Parents Hub',
      description: 'Access announcements, fee structures, academic calendars, and connect with teachers. Everything parents need in one place.',
      link: '/parents-hub',
      color: 'parents',
    },
    {
      id: 2,
      icon: FaPodcast,
      title: 'Podcast Hub',
      description: 'Listen to MEC Voices — insights on education, student life, parenting tips, and inspiring stories from our community.',
      link: '/podcast-hub',
      color: 'podcast',
    },
    {
      id: 3,
      icon: FaGraduationCap,
      title: 'Alumni Network',
      description: 'Once MEC, Always MEC. Connect with alumni, explore opportunities, and give back to the school community.',
      link: '/alumni',
      color: 'alumni',
    },
  ];

  return (
    <section className="explore-more-section">
      <div className="explore-more-container">
        <div className="explore-more-header">
          <h2>Explore More About MEC</h2>
          <p>Discover the different ways to get more involved and stay connected with Moi Educational Centre</p>
        </div>

        <div className="explore-more-grid">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.id}
                to={card.link}
                className={`explore-card explore-card-${card.color}`}
              >
                <div className="explore-card-icon">
                  <Icon />
                </div>
                <div className="explore-card-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <div className="explore-card-cta">
                    <span>Explore</span>
                    <span className="arrow">→</span>
                  </div>
                </div>
                <div className="explore-card-gradient"></div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExploreMoreSection;
