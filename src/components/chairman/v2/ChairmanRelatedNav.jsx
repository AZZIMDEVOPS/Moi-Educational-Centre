import { Link } from 'react-router-dom';
import { FaChevronRight, FaInfoCircle, FaUsers, FaUserTie, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const links = [
  { path: "/about-MEC", label: "About MEC", icon: <FaInfoCircle /> },
  { path: "/about-MEC/leadership", label: "Our Leadership", icon: <FaUsers /> },
  { path: "/about-MEC/word-from-our-chairman", label: "Word from Our Chairman", icon: <FaUserTie />, active: true },
  { path: "/about-MEC/vacancies", label: "Vacancies", icon: <FaBriefcase /> },
  { path: "/about-MEC/events", label: "School Events", icon: <FaCalendarAlt /> }
];

const ChairmanRelatedNav = () => {
  return (
    <section className="chair-nav">
      <h2 className="chair-nav-title">Explore MEC</h2>
      <div className="chair-nav-grid">
        {links.map((link, i) => (
          <Link key={i} to={link.path} className={`chair-nav-card ${link.active ? 'active' : ''}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ color: link.active ? '#A855F7' : 'rgba(255,255,255,0.6)', fontSize: '20px' }}>
                {link.icon}
              </div>
              <span>{link.label}</span>
            </div>
            <FaChevronRight style={{ color: 'rgba(255,255,255,0.3)' }} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ChairmanRelatedNav;
