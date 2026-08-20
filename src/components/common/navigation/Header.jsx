import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { 
  FaUserCircle, FaMoon, FaSun, FaSearch, FaTimes, FaChevronDown, 
  FaInfoCircle, FaUsers, FaQuoteLeft, FaBriefcase, FaCalendarAlt,
  FaChild, FaBookOpen, FaBrain, FaLaptopCode, FaGraduationCap,
  FaFileAlt, FaMoneyBillWave, FaFolderOpen, FaQuestionCircle 
} from "react-icons/fa";
import { CgMenu } from "react-icons/cg";
import logo from "../../../assets/logo.png";
import imgKids from "../../../assets/kids.jpg";
import imgSenior from "../../../assets/senior.jpg";
import "../../../css/navbar.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobOpenSection, setMobOpenSection] = useState(null);
  const [hoveredProgram, setHoveredProgram] = useState('pre');
  
  // State-controlled dropdown menu persistence ('about' | 'education' | 'admissions' | null)
  const [openDropdown, setOpenDropdown] = useState(null);

  const { pathname } = useLocation();

  // Navigation Accessibility Refs
  const navRef = useRef(null);
  const aboutTriggerRef = useRef(null);
  const eduTriggerRef = useRef(null);
  const admTriggerRef = useRef(null);

  // Close menus on page navigation
  useEffect(() => {
    setSidebarOpen(false);
    setSearchOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme initialization
  useEffect(() => {
    const saved = localStorage.getItem("mec-dark");
    if (saved === "true") {
      setDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  // Click Outside Listener (Closes active dropdown when clicking anywhere outside navRef)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Keyboard Listener (Escape key closes active dropdown & returns focus to trigger)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && openDropdown) {
        const current = openDropdown;
        setOpenDropdown(null);
        if (current === 'about' && aboutTriggerRef.current) aboutTriggerRef.current.focus();
        if (current === 'education' && eduTriggerRef.current) eduTriggerRef.current.focus();
        if (current === 'admissions' && admTriggerRef.current) admTriggerRef.current.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [openDropdown]);

  const toggleDark = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("mec-dark", next);
  };

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const isHome = pathname === "/";

  return (
    <>
      <header className={`mec-header${scrolled || !isHome ? " scrolled" : ""}`}>
        <div className="header-inner">
          
          {/* 1. Logo Area */}
          <Link to="/" className="mec-logo" onClick={closeDropdown}>
            <img src={logo} alt="Moi Educational Centre" />
            <div className="mec-logo-text">
              <span className="mec-logo-name">MOI EDUCATIONAL CENTRE</span>
            </div>
          </Link>

          {/* 2. Desktop Navigation with State-Controlled Persistent Dropdowns */}
          <nav className="mec-nav" aria-label="Main navigation" ref={navRef}>
            
            {/* ABOUT MEC DROPDOWN */}
            <div className={`mec-nav-item ${openDropdown === 'about' ? 'is-open' : ''}`}>
              <button 
                ref={aboutTriggerRef}
                type="button"
                className={`mec-nav-link ${pathname.includes('/about') ? 'active' : ''}`}
                onClick={() => toggleDropdown('about')}
                aria-expanded={openDropdown === 'about'}
                aria-haspopup="true"
                aria-controls="about-mega-menu"
              >
                About MEC 
                <FaChevronDown 
                  className="mec-nav-arrow" 
                  size={10} 
                  style={{ transform: openDropdown === 'about' ? 'rotate(180deg)' : 'none' }} 
                />
              </button>
              
              <div 
                id="about-mega-menu"
                className="mec-mega-menu"
                data-open={openDropdown === 'about'}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <Link to="/about-MEC" className="mega-icon-link" onClick={closeDropdown}>
                    <div className="mega-icon"><FaInfoCircle /></div>
                    <div className="mega-text">
                      <span className="mega-title">About MEC</span>
                      <span className="mega-desc">Discover our history, mission, vision and values.</span>
                    </div>
                  </Link>
                  <Link to="/about-MEC/leadership" className="mega-icon-link" onClick={closeDropdown}>
                    <div className="mega-icon"><FaUsers /></div>
                    <div className="mega-text">
                      <span className="mega-title">Our Leadership</span>
                      <span className="mega-desc">Meet the leadership team shaping our future.</span>
                    </div>
                  </Link>
                  <Link to="/about-MEC/word-from-our-chairman" className="mega-icon-link" onClick={closeDropdown}>
                    <div className="mega-icon"><FaQuoteLeft /></div>
                    <div className="mega-text">
                      <span className="mega-title">Word from our Chairman</span>
                      <span className="mega-desc">A message from our Board Chairman.</span>
                    </div>
                  </Link>
                  <Link to="/about-MEC/vacancies" className="mega-icon-link" onClick={closeDropdown}>
                    <div className="mega-icon"><FaBriefcase /></div>
                    <div className="mega-text">
                      <span className="mega-title">Vacancies</span>
                      <span className="mega-desc">Explore career opportunities at MEC.</span>
                    </div>
                  </Link>
                  <Link to="/about-MEC/school-events" className="mega-icon-link" onClick={closeDropdown}>
                    <div className="mega-icon"><FaCalendarAlt /></div>
                    <div className="mega-text">
                      <span className="mega-title">School Events</span>
                      <span className="mega-desc">Upcoming events, celebrations and school calendar.</span>
                    </div>
                  </Link>
                </div>

                <Link to="/about-MEC" className="mega-featured" onClick={closeDropdown}>
                  <img src={imgSenior} alt="Celebrating 40 Years" />
                  <div className="mega-featured-overlay" />
                  <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', padding: '6px 12px', borderRadius: '20px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', color: '#D8B4FE', border: '1px solid rgba(255,255,255,0.3)' }}>🌟 Celebrating 40 Years</div>
                  <h5>A Legacy of Excellence</h5>
                  <p style={{ marginBottom: '12px' }}>Inspiring confident learners and shaping futures since 1986.</p>
                  <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#A855F7', display: 'flex', alignItems: 'center', gap: '4px' }}>Learn More &rarr;</span>
                </Link>
              </div>
            </div>

            {/* EDUCATION DROPDOWN */}
            <div className={`mec-nav-item ${openDropdown === 'education' ? 'is-open' : ''}`}>
              <button 
                ref={eduTriggerRef}
                type="button"
                className={`mec-nav-link ${pathname.includes('/education') ? 'active' : ''}`}
                onClick={() => toggleDropdown('education')}
                aria-expanded={openDropdown === 'education'}
                aria-haspopup="true"
                aria-controls="education-mega-menu"
              >
                Education 
                <FaChevronDown 
                  className="mec-nav-arrow" 
                  size={10} 
                  style={{ transform: openDropdown === 'education' ? 'rotate(180deg)' : 'none' }} 
                />
              </button>
              
              <div 
                id="education-mega-menu"
                className="mec-mega-menu edu-mega-menu"
                data-open={openDropdown === 'education'}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '60% 40%', gap: '28px', width: '100%' }}>
                  
                  {/* Left Column - Programmes (Structured Single Edge Alignment) */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                    <Link to="/education/CBC/pre-primary" className="mega-icon-link" onClick={closeDropdown} onMouseEnter={() => setHoveredProgram('pre')}>
                      <div className="mega-icon"><FaChild /></div>
                      <div className="mega-text">
                        <span className="mega-title">Pre-Primary</span>
                        <span className="mega-desc">A nurturing foundation through play-based learning and early childhood development.</span>
                      </div>
                    </Link>
                    <Link to="/education/CBC/lower-primary" className="mega-icon-link" onClick={closeDropdown} onMouseEnter={() => setHoveredProgram('lower')}>
                      <div className="mega-icon"><FaBookOpen /></div>
                      <div className="mega-text">
                        <span className="mega-title">Lower Primary</span>
                        <span className="mega-desc">Building literacy, numeracy, creativity, and confidence through engaging learning experiences.</span>
                      </div>
                    </Link>
                    <Link to="/education/CBC/upper-primary" className="mega-icon-link" onClick={closeDropdown} onMouseEnter={() => setHoveredProgram('upper')}>
                      <div className="mega-icon"><FaBrain /></div>
                      <div className="mega-text">
                        <span className="mega-title">Upper Primary</span>
                        <span className="mega-desc">Developing independent learners with strong academic and leadership foundations.</span>
                      </div>
                    </Link>
                    <Link to="/education/CBC/junior-school" className="mega-icon-link" onClick={closeDropdown} onMouseEnter={() => setHoveredProgram('junior')}>
                      <div className="mega-icon"><FaLaptopCode /></div>
                      <div className="mega-text">
                        <span className="mega-title">Junior School</span>
                        <span className="mega-desc">Preparing students for future success through innovation, STEM, and holistic education.</span>
                      </div>
                    </Link>
                    <Link to="/education/CBC/senior-school" className="mega-icon-link" onClick={closeDropdown} onMouseEnter={() => setHoveredProgram('senior')}>
                      <div className="mega-icon"><FaGraduationCap /></div>
                      <div className="mega-text">
                        <span className="mega-title">Senior School</span>
                        <span className="mega-desc">Empowering learners for university, careers, and global citizenship.</span>
                      </div>
                    </Link>
                  </div>

                  {/* Right Column - Dynamic Feature Card */}
                  <Link 
                    to={`/education/CBC/${
                      hoveredProgram === 'pre' ? 'pre-primary' : 
                      hoveredProgram === 'lower' ? 'lower-primary' : 
                      hoveredProgram === 'upper' ? 'upper-primary' : 
                      hoveredProgram === 'junior' ? 'junior-school' : 'senior-school'
                    }`} 
                    className="mega-featured dynamic-featured"
                    onClick={closeDropdown}
                  >
                    <img 
                      src={
                        hoveredProgram === 'pre' ? imgKids : 
                        hoveredProgram === 'lower' ? '/cbc/lower-primary.jpg' : 
                        hoveredProgram === 'upper' ? '/cbc/upper-primary.jpg' : 
                        hoveredProgram === 'junior' ? '/cbc/junior.jpg' : 
                        '/cbc/senior.jpg'
                      } 
                      alt="Featured Programme" 
                    />
                    <div className="mega-featured-overlay" />
                    <h5>
                      {hoveredProgram === 'pre' ? 'Pre-Primary Education' : 
                       hoveredProgram === 'lower' ? 'Lower Primary Education' : 
                       hoveredProgram === 'upper' ? 'Upper Primary Education' : 
                       hoveredProgram === 'junior' ? 'Junior School Education' : 
                       'Senior School Education'}
                    </h5>
                    <p style={{ marginBottom: '12px' }}>
                      {hoveredProgram === 'pre' ? 'A joyful beginning.' : 
                       hoveredProgram === 'lower' ? 'Building confidence.' : 
                       hoveredProgram === 'upper' ? 'Fostering independence.' : 
                       hoveredProgram === 'junior' ? 'Preparing for the future.' : 
                       'Empowering leaders.'}
                    </p>
                    <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#A855F7', display: 'flex', alignItems: 'center', gap: '4px' }}>Explore Programme &rarr;</span>
                  </Link>

                </div>
              </div>
            </div>

            {/* ADMISSIONS DROPDOWN */}
            <div className={`mec-nav-item ${openDropdown === 'admissions' ? 'is-open' : ''}`}>
              <button 
                ref={admTriggerRef}
                type="button"
                className={`mec-nav-link ${pathname.includes('/admissions') ? 'active' : ''}`}
                onClick={() => toggleDropdown('admissions')}
                aria-expanded={openDropdown === 'admissions'}
                aria-haspopup="true"
                aria-controls="admissions-mega-menu"
              >
                Admissions 
                <FaChevronDown 
                  className="mec-nav-arrow" 
                  size={10} 
                  style={{ transform: openDropdown === 'admissions' ? 'rotate(180deg)' : 'none' }} 
                />
              </button>
              
              <div 
                id="admissions-mega-menu"
                className="mec-mega-menu admissions-mega-menu"
                data-open={openDropdown === 'admissions'}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                  <Link to="/admissions/admission-process" className="mega-icon-link" onClick={closeDropdown}>
                    <div className="mega-icon"><FaFileAlt /></div>
                    <div className="mega-text">
                      <span className="mega-title">Application Process</span>
                      <span className="mega-desc">Step-by-step guide to joining Moi Educational Centre.</span>
                    </div>
                  </Link>
                  <Link to="/admissions/fees" className="mega-icon-link" onClick={closeDropdown}>
                    <div className="mega-icon"><FaMoneyBillWave /></div>
                    <div className="mega-text">
                      <span className="mega-title">Fee Structure</span>
                      <span className="mega-desc">Comprehensive tuition and fee schedules.</span>
                    </div>
                  </Link>
                  <Link to="/admissions/resources" className="mega-icon-link" onClick={closeDropdown}>
                    <div className="mega-icon"><FaFolderOpen /></div>
                    <div className="mega-text">
                      <span className="mega-title">Resources & Forms</span>
                      <span className="mega-desc">Downloadable admission forms and school handbooks.</span>
                    </div>
                  </Link>
                  <Link to="/admissions/frequently-asked-questions" className="mega-icon-link" onClick={closeDropdown}>
                    <div className="mega-icon"><FaQuestionCircle /></div>
                    <div className="mega-text">
                      <span className="mega-title">Frequently Asked Questions</span>
                      <span className="mega-desc">Get quick answers to common admission queries.</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mec-nav-item">
              <NavLink to="/extra-curricular" className={({ isActive }) => `mec-nav-link${isActive ? " active" : ""}`} onClick={closeDropdown}>
                Student Life
              </NavLink>
            </div>
            
            <div className="mec-nav-item">
              <NavLink to="/contact" className={({ isActive }) => `mec-nav-link${isActive || pathname.includes('/contact') ? " active" : ""}`} onClick={closeDropdown}>
                Contact Us
              </NavLink>
            </div>
            
            <div className="mec-nav-item">
              <NavLink to="/portal/students" className={({ isActive }) => `mec-nav-link${isActive ? " active" : ""}`} onClick={closeDropdown}>
                Portal
              </NavLink>
            </div>

          </nav>

          {/* 3. Actions Container */}
          <div className="mec-actions">
            
            <div className="mec-icon-group">
              <div className={`search-container ${searchOpen ? 'active' : ''}`}>
                <input type="text" className="search-input" placeholder="Search programmes..." />
                <button className="mec-icon-btn" onClick={() => setSearchOpen(!searchOpen)} aria-label="Toggle search">
                  <FaSearch size={14} />
                </button>
              </div>

              <div className="lang-dropdown">
                <button className="lang-toggle">EN ▼</button>
              </div>

              <button className="mec-icon-btn" onClick={toggleDark} aria-label="Toggle theme">
                {darkMode ? <FaSun size={15} /> : <FaMoon size={15} />}
              </button>

              <Link to="/parent-dashboard" className="mec-icon-btn" aria-label="Parent Dashboard">
                <FaUserCircle size={17} />
              </Link>
            </div>

            <Link to="/admissions/admission-process" className="nav-apply-btn" onClick={closeDropdown}>
              Apply Now
            </Link>

            <button className="mec-mobile-toggle" onClick={() => setSidebarOpen(true)} aria-label="Open navigation menu">
              <CgMenu />
            </button>

          </div>
        </div>
      </header>

      {/* 4. Mobile Slide-Over Menu (Accordion Behavior) */}
      <div className={`mobile-menu-overlay ${sidebarOpen ? 'open' : ''}`}>
        <div className="mobile-header">
          <Link to="/" className="mec-logo" onClick={() => setSidebarOpen(false)}>
            <img src={logo} alt="MEC" style={{ width: 44, height: 44 }} />
            <div className="mec-logo-text">
              <span className="mec-logo-name">MOI EDUCATIONAL CENTRE</span>
            </div>
          </Link>
          <button className="close-menu-btn" onClick={() => setSidebarOpen(false)} aria-label="Close menu">
            <FaTimes />
          </button>
        </div>

        <div className="mobile-nav">
          <div className={`mob-nav-item ${mobOpenSection === 'about' ? 'open' : ''}`}>
            <button className="mob-nav-btn" onClick={() => setMobOpenSection(mobOpenSection === 'about' ? null : 'about')}>
              About <FaChevronDown size={14} style={{ opacity: 0.5, transform: mobOpenSection === 'about' ? 'rotate(180deg)' : 'none' }} />
            </button>
            <div className="mob-sub-menu">
              <Link to="/about-MEC" className="mob-sub-link" onClick={() => setSidebarOpen(false)}>About MEC</Link>
              <Link to="/about-MEC/leadership" className="mob-sub-link" onClick={() => setSidebarOpen(false)}>Our Leadership</Link>
              <Link to="/about-MEC/word-from-our-chairman" className="mob-sub-link" onClick={() => setSidebarOpen(false)}>Word from our Chairman</Link>
              <Link to="/about-MEC/vacancies" className="mob-sub-link" onClick={() => setSidebarOpen(false)}>Vacancies</Link>
              <Link to="/about-MEC/school-events" className="mob-sub-link" onClick={() => setSidebarOpen(false)}>School Events</Link>
            </div>
          </div>

          <div className={`mob-nav-item ${mobOpenSection === 'edu' ? 'open' : ''}`}>
            <button className="mob-nav-btn" onClick={() => setMobOpenSection(mobOpenSection === 'edu' ? null : 'edu')}>
              Education <FaChevronDown size={14} style={{ opacity: 0.5, transform: mobOpenSection === 'edu' ? 'rotate(180deg)' : 'none' }} />
            </button>
            <div className="mob-sub-menu">
              <Link to="/education/CBC/pre-primary" className="mob-sub-link" onClick={() => setSidebarOpen(false)}>Pre-Primary</Link>
              <Link to="/education/CBC/lower-primary" className="mob-sub-link" onClick={() => setSidebarOpen(false)}>Lower Primary</Link>
              <Link to="/education/CBC/upper-primary" className="mob-sub-link" onClick={() => setSidebarOpen(false)}>Upper Primary</Link>
              <Link to="/education/CBC/junior-school" className="mob-sub-link" onClick={() => setSidebarOpen(false)}>Junior School</Link>
              <Link to="/education/CBC/senior-school" className="mob-sub-link" onClick={() => setSidebarOpen(false)}>Senior School</Link>
            </div>
          </div>

          <div className={`mob-nav-item ${mobOpenSection === 'adm' ? 'open' : ''}`}>
            <button className="mob-nav-btn" onClick={() => setMobOpenSection(mobOpenSection === 'adm' ? null : 'adm')}>
              Admissions <FaChevronDown size={14} style={{ opacity: 0.5, transform: mobOpenSection === 'adm' ? 'rotate(180deg)' : 'none' }} />
            </button>
            <div className="mob-sub-menu">
              <Link to="/admissions/admission-process" className="mob-sub-link" onClick={() => setSidebarOpen(false)}>Apply Online</Link>
              <Link to="/admissions/frequently-asked-questions" className="mob-sub-link" onClick={() => setSidebarOpen(false)}>FAQs</Link>
            </div>
          </div>
          
          <div className="mob-nav-item">
            <Link to="/extra-curricular" className="mob-nav-btn" onClick={() => setSidebarOpen(false)} style={{ textDecoration: 'none' }}>Student Life</Link>
          </div>
        </div>

        <div className="mobile-footer">
          <Link to="/admissions/admission-process" className="mobile-apply" onClick={() => setSidebarOpen(false)}>
            Apply Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;