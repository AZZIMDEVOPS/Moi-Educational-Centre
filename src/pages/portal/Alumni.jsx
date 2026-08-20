import Navbar from '../../components/common/navigation/Navbar';
import Footer from '../../components/common/Footer';
import SEO from '../../components/common/SEO';
import PortalHero from '../../components/portal/PortalHero';
import PortalSubMenu from '../../components/portal/PortalSubMenu';
import { useLanguage } from '../../context/LanguageContext';
import { FaUserFriends, FaHandHoldingHeart, FaNewspaper, FaMicrophone, FaAward, FaCalendarCheck, FaFileAlt, FaCalendarAlt } from 'react-icons/fa';
import '../../css/portal.css';

// Assets
import alumniImg1 from '../../assets/alumni.jpg';
import alumniImg2 from '../../assets/events2.jpg';
import alumniImg3 from '../../assets/about2.jpg';

const AlumniPortal = () => {
    const { t } = useLanguage();

    const slides = [
        {
            image: alumniImg1,
            title: "Global Alumni Network",
            description: "Stay connected with fellow MEC graduates and keep the spirit of excellence alive worldwide."
        },
        {
            image: alumniImg2,
            title: "Legacy of Excellence",
            description: "Celebrating the achievements and contributions of our alumni in every field of endeavor."
        },
        {
            image: alumniImg3,
            title: "Supporting Future Stars",
            description: "Join our mentorship programs and give back to the institution that shaped your journey."
        }
    ];

    return (
        <>
            <SEO title={t.alumni} description="Alumni Portal for Moi Educational Centre - Stay connected, find mentorship, and give back to your Alma Mater." />
            <Navbar />
            <PortalHero slides={slides} />
            <PortalSubMenu />

            <div className="section-padding" style={{ padding: '80px 0', minHeight: '60vh', background: '#fcfcfc' }}>
                <div className="inner-row">
                    <div className="portal-header" style={{ marginBottom: '60px', textAlign: 'center' }}>
                        <h1 style={{ color: 'var(--main-color)', fontSize: '42px', fontWeight: '800', letterSpacing: '-1px' }}>{t.alumni} Global Network</h1>
                        <p style={{ color: '#666', fontSize: '20px', marginTop: '15px', maxWidth: '800px', margin: '15px auto 0' }}>
                            Once a Pioneer, Always a Pioneer. Stay connected with your heritage, find professional mentorship, and contribute to the MEC legacy.
                        </p>
                    </div>

                    <div className="portal-notice-bar" style={{ borderRadius: '15px', background: 'linear-gradient(135deg, #8e44ad 0%, #9b59b6 100%)', color: 'white' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <FaHandHoldingHeart style={{ fontSize: '24px', marginRight: '15px' }} />
                            <div>
                                <strong style={{ fontSize: '18px' }}>Pioneer Scholarship Drive:</strong>
                                <p style={{ margin: '5px 0 0', opacity: '0.9' }}>Help us reach our goal of 50 full scholarships for the class of 2026. Join the "Giving Back" initiative today.</p>
                            </div>
                        </div>
                    </div>

                    <div className="portal-section-title" style={{ marginTop: '60px', marginBottom: '30px' }}>
                        <h2 style={{ fontSize: '28px', color: '#333' }}>Networking & Career</h2>
                        <div style={{ width: '60px', height: '4px', background: 'var(--accent-color)', marginTop: '8px' }}></div>
                    </div>

                    <div className="portal-grid">
                        <div className="portal-card">
                            <div className="card-icon-wrapper"><FaUserFriends /></div>
                            <h3>AI-Powered Directory</h3>
                            <p>Reconnect with classmates globally. Search by graduation year, industry, or region and build meaningful professional links.</p>
                            <a href="#" className="portal-btn">Search Network</a>
                        </div>

                        <div className="portal-card">
                            <div className="card-icon-wrapper"><FaAward /></div>
                            <h3>Mentorship Program</h3>
                            <p>Become a mentor to current MEC students or find a professional mentor within our global alumni community.</p>
                            <a href="#" className="portal-btn">Join Mentoring</a>
                        </div>

                        <div className="portal-card">
                            <div className="card-icon-wrapper"><FaMicrophone /></div>
                            <h3>Exclusive Job Board</h3>
                            <p>Access high-level career opportunities shared specifically for MEC alumni or post openings within your organization.</p>
                            <a href="#" className="portal-btn">View Careers</a>
                        </div>

                        <div className="portal-card">
                            <div className="card-icon-wrapper"><FaCalendarCheck /></div>
                            <h3>Global Meetups</h3>
                            <p>Stay informed about regional alumni chapters, annual homecoming dinners, and networking mixers worldwide.</p>
                            <a href="#" className="portal-btn">View Meetups</a>
                        </div>
                    </div>

                    <div className="portal-section-title" style={{ marginTop: '60px', marginBottom: '30px' }}>
                        <h2 style={{ fontSize: '28px', color: '#333' }}>Legacy & Heritage</h2>
                        <div style={{ width: '60px', height: '4px', background: 'var(--accent-color)', marginTop: '8px' }}></div>
                    </div>

                    <div className="portal-grid">
                        <div className="portal-card">
                            <div className="card-icon-wrapper"><FaNewspaper /></div>
                            <h3>Alumni Success Stories</h3>
                            <p>Celebrating the "Pioneers in the Wild." Read about alumni making waves in tech, medicine, arts, and leadership.</p>
                            <a href="#" className="portal-btn">Read Stories</a>
                        </div>

                        <div className="portal-card">
                            <div className="card-icon-wrapper"><FaHandHoldingHeart /></div>
                            <h3>The MEC Endowment</h3>
                            <p>Support sustainable school infrastructure projects and creative arts grants. Be part of the school's future growth.</p>
                            <a href="#" className="portal-btn">Support MEC</a>
                        </div>

                        <div className="portal-card" style={{ border: '2px solid var(--accent-color)', background: 'transparent' }}>
                            <div className="card-icon-wrapper" style={{ background: 'var(--accent-color)', color: 'white' }}><FaFileAlt /></div>
                            <h3>Alumni Charter</h3>
                            <p>Review the principles of our alumni association and learn about the formal MEC Alumni Constitution and voting rights.</p>
                            <a href="#" className="portal-btn" style={{ background: 'var(--main-color)', color: 'white' }}>View Charter</a>
                        </div>

                        <div className="portal-card">
                            <div className="card-icon-wrapper"><FaCalendarAlt /></div>
                            <h3>History & Archive</h3>
                            <p>Dive into the digital MEC time capsule. View heritage photos, school magazines (Moi Times), and past event archives.</p>
                            <a href="#" className="portal-btn">Explore Archive</a>
                        </div>
                    </div>

                    <div className="portal-bottom-grid" style={{ marginTop: '80px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                        <div className="portal-quick-links" style={{ background: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                            <h4 style={{ marginBottom: '20px', color: 'var(--main-color)', fontSize: '22px' }}>Alumni Resources</h4>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '15px' }}><a href="#" style={{ display: 'flex', alignItems: 'center', color: '#444', textDecoration: 'none' }}><FaFileAlt style={{ marginRight: '10px', color: 'var(--accent-color)' }} /> Transcript Request Form</a></li>
                                <li style={{ marginBottom: '15px' }}><a href="#" style={{ display: 'flex', alignItems: 'center', color: '#444', textDecoration: 'none' }}><FaAward style={{ marginRight: '10px', color: 'var(--accent-color)' }} /> Distinguished Alumni Awards</a></li>
                                <li style={{ marginBottom: '15px' }}><a href="#" style={{ display: 'flex', alignItems: 'center', color: '#444', textDecoration: 'none' }}><FaCalendarAlt style={{ marginRight: '10px', color: 'var(--accent-color)' }} /> 2026 Reunion Schedule</a></li>
                                <li><a href="#" style={{ display: 'flex', alignItems: 'center', color: '#444', textDecoration: 'none' }}><FaNewspaper style={{ marginRight: '10px', color: 'var(--accent-color)' }} /> Quarterly E-Newsletter</a></li>
                            </ul>
                        </div>

                        <div className="pioneer-hall-fame" style={{ background: 'linear-gradient(135deg, var(--main-color) 0%, #001a33 100%)', padding: '30px', borderRadius: '20px', color: 'white', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
                            <h4 style={{ marginBottom: '20px', color: 'white', fontSize: '22px' }}>Pioneer Hall of Fame</h4>
                            <div className="featured-alumnus" style={{ textAlign: 'center' }}>
                                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px' }}><FaAward /></div>
                                <h5 style={{ margin: '0 0 5px 0', fontSize: '18px' }}>Class of 2012 Spotlight</h5>
                                <p style={{ fontSize: '14px', opacity: '0.8', lineHeight: '1.6' }}>
                                    Meet the alumni leading global sustainability projects and tech innovations. Every year we highlight pioneers making a difference.
                                </p>
                                <a href="#" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: '700', fontSize: '14px', marginTop: '10px', display: 'inline-block' }}>NOMINATE A PEER →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default AlumniPortal;
