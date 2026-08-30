import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  FaSearch, FaFutbol, FaRobot, FaMusic, FaCampground, 
  FaArrowRight, FaClock, FaUserTie, FaCheckCircle, FaStar, 
  FaSwimmer, FaDumbbell, FaTheaterMasks, FaTimes, FaPlay, FaVideo, FaImages, FaGraduationCap
} from "react-icons/fa";
import { activities } from "../data/activities";
import Navbar from "../components/common/navigation/Navbar";
import Footer from "../components/common/Footer";
import SEO from "../components/common/SEO";
import imgHero from "../assets/hero-poster2.jpg";
import "../css/extracurricular.css";

const VIDEO_SHOWCASES = [
  {
    id: "soccer-tour",
    title: "MEC Soccer Academy — Edinburgh Tour",
    category: "International Sports Tour",
    videoUrl: "/assets/videos/MEC SOCCER ACADEMY EDINBURGH TOUR.mp4",
    poster: "/assets/gallery/DSC_4232.JPG",
    description: "Witness the elite training, match strategy, and international matches of our MEC Soccer Academy during their landmark European tour in Edinburgh, Scotland.",
    badge: "Edinburgh Tour Championship"
  },
  {
    id: "music-heavens-gate",
    title: "MEC Music Academy — Heavens Gate Sessions",
    category: "Orchestral & Choral Mastery",
    videoUrl: "/assets/videos/MEC MUSIC ACA - HEAVENS GATE SESSIONS.mp4",
    poster: "/assets/gallery/DSC_4254.JPG",
    description: "Experience the orchestral and vocal mastery of the MEC Music Conservatory performing classical and contemporary sacred pieces during the landmark Heavens Gate Sessions.",
    badge: "ABRSM London Certified"
  },
  {
    id: "swimming-gala",
    title: "MEC Swimming Team — Aquatics Gala",
    category: "Competitive Swimming",
    videoUrl: "/assets/videos/MEC SWIMMING TEAM GALA.mp4",
    poster: "/assets/gallery/DSC_4136.JPG",
    description: "Highlights from the national inter-school aquatics gala hosted at our semi-Olympic heated swimming facility, showcasing our junior and senior swim squads.",
    badge: "National Inter-School Gala"
  },
  {
    id: "natalie-juma",
    title: "Learner Spotlight — Meet Natalie Juma",
    category: "Student Ambassador Journey",
    videoUrl: "/assets/videos/Meet Natalie Juma .mp4",
    poster: "/assets/gallery/DSC_4345.JPG",
    description: "Hear from MEC scholar and student ambassador Natalie Juma as she reflects on academic life, leadership, and personal growth at Moi Educational Centre.",
    badge: "Student Ambassador"
  }
];

const CAMPUS_GALLERY = [
  { src: "/assets/gallery/DSC_4136.JPG", title: "Aquatics Centre & Swimming Squad", category: "Sports" },
  { src: "/assets/gallery/DSC_4145.JPG", title: "Modern Learning Classrooms", category: "Academics" },
  { src: "/assets/gallery/DSC_4156.JPG", title: "Early Years & Foundational Play", category: "Early Years" },
  { src: "/assets/gallery/DSC_4232.JPG", title: "FIFA-Standard Soccer Arena", category: "Sports" },
  { src: "/assets/gallery/DSC_4253.JPG", title: "Athletics & Track Practice", category: "Athletics" },
  { src: "/assets/gallery/DSC_4265.JPG", title: "ABRSM Music Conservatory & Choral Studio", category: "Music" },
  { src: "/assets/gallery/DSC_4289.JPG", title: "Science & Innovation Laboratory", category: "STEM" },
  { src: "/assets/gallery/DSC_4335.JPG", title: "Campus Grounds & Courtyard", category: "Campus" },
  { src: "/assets/gallery/DSC_4345.JPG", title: "Student Leadership & Debate Team", category: "Leadership" }
];

const ExtraCurricular = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const categories = [
    { id: "all", label: "All Activities", icon: <FaStar /> },
    { id: "sports", label: "Sports & Academies", icon: <FaFutbol /> },
    { id: "clubs", label: "Clubs & STEM", icon: <FaRobot /> },
    { id: "arts", label: "Arts & Music", icon: <FaMusic /> },
    { id: "movements", label: "Movements & Scouts", icon: <FaCampground /> }
  ];

  const filteredActivities = useMemo(() => {
    return activities.filter((act) => {
      const matchesCategory = selectedCategory === "all" || act.category === selectedCategory;
      const matchesSearch = act.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            act.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const currentVideo = VIDEO_SHOWCASES[activeVideoIndex];

  return (
    <div className="extra-curricular-page">
      <SEO
        title="Extra-Curricular Activities & Sports Academies | Moi Educational Centre"
        description="Explore 15+ sports academies, 50+ clubs & STEM labs, ABRSM music academy, and international leadership at Moi Educational Centre."
        image={imgHero}
        url="/extra-curricular"
      />
      <Navbar />

      <main id="main-content">
        {/* ─── 1. Premium Hero Banner ─────────────────────────── */}
        <section className="ec-hero">
          <img src={imgHero} alt="MEC Extra Curricular Activities" className="ec-hero-bg" />
          <div className="ec-hero-overlay" />

          <div className="ec-hero-content">
            <div className="ec-badge">
              <FaStar style={{ color: '#f59e0b', marginRight: 6 }} /> Student Life & Co-Curricular Excellence
            </div>
            <h1 className="ec-hero-title">Beyond the Classroom</h1>
            <p className="ec-hero-sub">
              Empowering learners to discover passions, build character, and achieve athletic & creative mastery through 15+ sports academies, 50+ clubs, and global delegations.
            </p>

            {/* Quick Filter Bar */}
            <div className="ec-search-box">
              <FaSearch className="ec-search-icon" />
              <input 
                type="text" 
                placeholder="Search swimming, robotics, music academy, soccer, debate..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button className="ec-search-clear" onClick={() => setSearchQuery("")}>
                  <FaTimes />
                </button>
              )}
            </div>

            {/* Hero Category Filter Pills */}
            <div className="ec-filter-pills">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`ec-filter-pill ${selectedCategory === cat.id ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <span className="pill-icon">{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 2. Live Video Action Replays & Spotlights ──────── */}
        <section className="ec-videos-section" id="academy-videos">
          <div className="ec-container">
            <div className="ec-section-head">
              <span className="ec-directory-eyebrow"><FaVideo style={{ marginRight: 6 }} /> LIVE ACTION & TOURS</span>
              <h2 className="ec-directory-title">Watch Our Academies in Action</h2>
              <p className="ec-facilities-desc">
                From international European tours to national championship galas and choral masterclasses — see our students excel on the world stage.
              </p>
            </div>

            {/* Video Player Box & Selector Tabs */}
            <div className="ec-video-showcase-card">
              <div className="ec-video-tabs-bar">
                {VIDEO_SHOWCASES.map((vid, idx) => (
                  <button
                    key={vid.id}
                    className={`ec-video-tab-btn ${activeVideoIndex === idx ? 'active' : ''}`}
                    onClick={() => setActiveVideoIndex(idx)}
                  >
                    <span className="ec-video-tab-badge">{vid.badge}</span>
                    <span className="ec-video-tab-title">{vid.title}</span>
                  </button>
                ))}
              </div>

              <div className="ec-video-player-container">
                <video
                  key={currentVideo.videoUrl}
                  controls
                  playsInline
                  poster={currentVideo.poster}
                  className="ec-main-video"
                >
                  <source src={currentVideo.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="ec-video-info-strip">
                  <div>
                    <span className="ec-video-cat-badge">{currentVideo.category}</span>
                    <h3 className="ec-video-main-title">{currentVideo.title}</h3>
                    <p className="ec-video-main-desc">{currentVideo.description}</p>
                  </div>
                  <Link to="/contact" className="ec-btn-video-cta">
                    Join Programme <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. Activities Directory Grid ───────────────────── */}
        <section className="ec-directory-section" id="activities-grid">
          <div className="ec-container">
            <div className="ec-directory-header">
              <div>
                <span className="ec-directory-eyebrow">EXPLORE PROGRAMMES</span>
                <h2 className="ec-directory-title">
                  {selectedCategory === "all" ? "All Co-Curricular Pathways" : categories.find(c => c.id === selectedCategory)?.label}
                </h2>
              </div>
              <span className="ec-count-badge">
                {filteredActivities.length} {filteredActivities.length === 1 ? "Activity" : "Activities"} Found
              </span>
            </div>

            {filteredActivities.length > 0 ? (
              <div className="ec-cards-grid">
                {filteredActivities.map((act) => (
                  <div key={act.id} className="ec-activity-card">
                    <div className="ec-card-img-wrap">
                      <img src={act.image} alt={act.title} className="ec-card-img" />
                      <span className="ec-card-category-tag">{act.category}</span>
                      {act.video && (
                        <span className="ec-card-video-pill">
                          <FaPlay size={10} style={{ marginRight: 4 }} /> Video Available
                        </span>
                      )}
                    </div>

                    <div className="ec-card-body">
                      <h3 className="ec-card-title">{act.title}</h3>
                      <p className="ec-card-desc">{act.description}</p>

                      <div className="ec-card-meta">
                        {act.schedule && (
                          <div className="ec-meta-item">
                            <FaClock className="ec-meta-icon" />
                            <span>{act.schedule}</span>
                          </div>
                        )}
                        {act.coach && (
                          <div className="ec-meta-item">
                            <FaUserTie className="ec-meta-icon" />
                            <span>{act.coach}</span>
                          </div>
                        )}
                      </div>

                      {act.benefits && (
                        <div className="ec-highlights-list">
                          {act.benefits.slice(0, 3).map((hl, idx) => (
                            <div key={idx} className="ec-highlight-item">
                              <FaCheckCircle className="ec-hl-icon" />
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="ec-empty-state">
                <FaSearch className="ec-empty-icon" />
                <h3>No Activities Found</h3>
                <p>No programmes matched "{searchQuery}". Try a different keyword or reset your filter.</p>
                <button 
                  className="ec-btn-reset"
                  onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ─── 4. High-Resolution Campus Photography Gallery ──── */}
        <section className="ec-photo-gallery-section" id="campus-gallery">
          <div className="ec-container">
            <div className="ec-section-head">
              <span className="ec-directory-eyebrow"><FaImages style={{ marginRight: 6 }} /> PHOTO ESSAY</span>
              <h2 className="ec-directory-title">Life at Moi Educational Centre</h2>
              <p className="ec-facilities-desc">
                A visual journey through our classrooms, Olympic-standard sports grounds, innovation labs, and arts studios.
              </p>
            </div>

            <div className="ec-photo-grid">
              {CAMPUS_GALLERY.map((photo, i) => (
                <div key={i} className="ec-photo-card">
                  <img src={photo.src} alt={photo.title} loading="lazy" className="ec-photo-img" />
                  <div className="ec-photo-overlay">
                    <span className="ec-photo-category">{photo.category}</span>
                    <h4 className="ec-photo-title">{photo.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 5. World-Class Facilities Showcase ─────────────── */}
        <section className="ec-facilities-section" id="world-class-facilities">
          <div className="ec-container">
            <div className="ec-facilities-header">
              <span className="ec-facilities-eyebrow">WORLD-CLASS INFRASTRUCTURE</span>
              <h2 className="ec-facilities-title">Built for Champions & Creators</h2>
              <p className="ec-facilities-desc">
                Our learners train and create in state-of-the-art facilities that match international standards.
              </p>
            </div>

            <div className="ec-facilities-grid">
              {[
                { anchorId: "swimming-facility", title: "Semi-Olympic Heated Pool", desc: "Dedicated coaches, lane markers, and safety lifeguards for competitive swimming.", Icon: FaSwimmer },
                { anchorId: "soccer-facility", title: "FIFA-Standard Soccer Arena", desc: "Full-size manicured pitch with spectator stands and modern training equipment.", Icon: FaFutbol },
                { anchorId: "music-conservatory", title: "ABRSM Music Conservatory", desc: "Acoustic rehearsal suites, pianos, violins, brass, and sound recording stages.", Icon: FaMusic },
                { anchorId: "robotics-lab", title: "VEX Robotics & STEM Lab", desc: "High-spec computers, electronic breadboards, and autonomous robot arenas.", Icon: FaRobot },
                { anchorId: "martial-arts-hall", title: "Martial Arts & Indoor Hall", desc: "Padded dojo, full-court basketball arena, and professional gymnastics apparatus.", Icon: FaDumbbell },
                { anchorId: "drama-amphitheatre", title: "Amphitheatre & Drama Stage", desc: "State-of-the-art stage lighting and audio for annual drama and musical festivals.", Icon: FaTheaterMasks }
              ].map((f, i) => (
                <div key={i} id={f.anchorId} className="ec-facility-card">
                  <span className="facility-icon" style={{ fontSize: 24, color: '#38bdf8' }}>
                    <f.Icon />
                  </span>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 6. Co-Curricular Registration CTA ──────────────── */}
        <section className="ec-cta-section">
          <div className="ec-container">
            <div className="ec-cta-card">
              <div className="ec-cta-content">
                <span className="ec-cta-badge">JOIN AN ACADEMY</span>
                <h2>Ready to Enroll in a Club or Academy?</h2>
                <p>
                  Explore your child's creative and athletic potential. Register for our 2026 sports academies and co-curricular programs today.
                </p>
                <div className="ec-cta-btns">
                  <Link to="/admissions/admission-process" className="ec-cta-btn-primary">
                    Enroll for 2026 <FaArrowRight />
                  </Link>
                  <Link to="/contact" className="ec-cta-btn-secondary">
                    Contact Sports & Clubs Office
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ExtraCurricular;
