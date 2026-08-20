import { useState } from 'react';
import { FaSearch, FaLinkedin, FaCalendar, FaBriefcase, FaHeart, FaUsers, FaTrophy, FaHandshake, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/common/navigation/Navbar';
import Footer from '../components/common/Footer';
import '../css/alumni.css';

const Alumni = () => {
  const [activeTab, setActiveTab] = useState('stories');
  const [searchTerm, setSearchTerm] = useState('');

  const successStories = [
    {
      id: 1,
      name: 'Dr. Amina Omondi',
      gradYear: '2010',
      title: 'Pediatrician & Medical Researcher',
      story: 'From MEC classrooms to Johns Hopkins University, Amina now leads groundbreaking research in child health across East Africa.',
      image: '👩‍⚕️',
    },
    {
      id: 2,
      name: 'James Kipchoge',
      gradYear: '2012',
      title: 'Tech Entrepreneur',
      story: 'Founded a digital payment startup that now serves 500K+ users. Started coding in our computer lab!',
      image: '💻',
    },
    {
      id: 3,
      name: 'Zainab Hassan',
      gradYear: '2011',
      title: 'Documentary Filmmaker',
      story: 'Her award-winning documentary premiered at Cannes. Creative confidence built at MEC arts programs.',
      image: '🎬',
    },
    {
      id: 4,
      name: 'Prof. David Kariuki',
      gradYear: '2008',
      title: 'Environmental Scientist',
      story: 'Published 40+ papers, working on climate resilience. Environmental club at MEC sparked the passion.',
      image: '🌍',
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Alumni Gala Dinner',
      date: 'May 15, 2025',
      location: 'Safari Park Hotel',
      category: 'Reunion',
    },
    {
      id: 2,
      title: 'Networking Breakfast - Tech & Innovation',
      date: 'May 22, 2025',
      location: 'Virtual',
      category: 'Networking',
    },
    {
      id: 3,
      title: 'Alumni Sports Day',
      date: 'June 1, 2025',
      location: 'MEC Campus',
      category: 'Sports',
    },
    {
      id: 4,
      title: 'Mentorship Workshop Series',
      date: 'Ongoing',
      location: 'Virtual & In-Person',
      category: 'Mentorship',
    },
  ];

  const opportunities = [
    {
      id: 1,
      title: 'Marketing Manager - Tech Startup',
      company: 'TechVentures Kenya',
      posted: '2025-04-20',
    },
    {
      id: 2,
      title: 'Finance Consultant',
      company: 'PwC East Africa',
      posted: '2025-04-18',
    },
    {
      id: 3,
      title: 'Teaching Fellow - International School',
      company: 'Global Education Group',
      posted: '2025-04-15',
    },
    {
      id: 4,
      title: 'Product Designer',
      company: 'Digital Innovation Hub',
      posted: '2025-04-12',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="alumni-hub">
        {/* Hero Section */}
        <section className="alumni-hero">
          <div className="alumni-hero-content">
            <h1>Once MEC, Always MEC</h1>
            <p>Welcome to the global community of Moi Educational Centre alumni</p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Register/Login</button>
              <button className="btn btn-outline">Contact Us</button>
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section className="alumni-registration">
          <div className="alumni-container">
            <div className="registration-card">
              <h2>Update Your Alumni Profile</h2>
              <form className="registration-form">
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Graduation Year" required />
                <input type="text" placeholder="Current Position" required />
                <textarea placeholder="Your story or memory at MEC..."></textarea>
                <button type="submit" className="btn btn-primary">
                  Update Profile
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="alumni-tabs">
          <div className="alumni-container">
            <div className="tabs-nav">
              <button className={`tab-btn ${activeTab === 'stories' ? 'active' : ''}`} onClick={() => setActiveTab('stories')}>
                Success Stories
              </button>
              <button className={`tab-btn ${activeTab === 'events' ? 'active' : ''}`} onClick={() => setActiveTab('events')}>
                Events & Reunions
              </button>
              <button className={`tab-btn ${activeTab === 'network' ? 'active' : ''}`} onClick={() => setActiveTab('network')}>
                Networking
              </button>
              <button className={`tab-btn ${activeTab === 'opportunities' ? 'active' : ''}`} onClick={() => setActiveTab('opportunities')}>
                Job Board
              </button>
              <button className={`tab-btn ${activeTab === 'giveback' ? 'active' : ''}`} onClick={() => setActiveTab('giveback')}>
                Give Back
              </button>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        {activeTab === 'stories' && (
          <section className="alumni-content stories-section">
            <div className="alumni-container">
              <h2>Alumni Success Stories</h2>
              <div className="stories-grid">
                {successStories.map((story) => (
                  <div key={story.id} className="story-card">
                    <div className="story-image">{story.image}</div>
                    <div className="story-content">
                      <h3>{story.name}</h3>
                      <p className="story-title">{story.title}</p>
                      <p className="story-year">Class of {story.gradYear}</p>
                      <p className="story-text">{story.story}</p>
                      <button className="btn btn-sm btn-outline">Read Full Story</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Events & Reunions */}
        {activeTab === 'events' && (
          <section className="alumni-content events-section">
            <div className="alumni-container">
              <h2>Events & Reunions</h2>
              <div className="events-list">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="event-item">
                    <div className="event-icon">
                      <FaCalendar />
                    </div>
                    <div className="event-details">
                      <h3>{event.title}</h3>
                      <p className="event-date">{event.date}</p>
                      <p className="event-location">📍 {event.location}</p>
                      <span className="event-badge">{event.category}</span>
                    </div>
                    <button className="btn btn-sm btn-primary">Register</button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Networking */}
        {activeTab === 'network' && (
          <section className="alumni-content network-section">
            <div className="alumni-container">
              <h2>Alumni Network Directory</h2>
              <div className="network-search">
                <FaSearch className="search-icon" />
                <input type="text" placeholder="Search alumni by name, profession, or graduation year..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              </div>
              <div className="network-cards">
                {[
                  { name: 'Dr. Amina O.', profession: 'Medical Researcher', year: 2010, linkedin: '#' },
                  { name: 'James K.', profession: 'Tech Entrepreneur', year: 2012, linkedin: '#' },
                  { name: 'Zainab H.', profession: 'Filmmaker', year: 2011, linkedin: '#' },
                  { name: 'David K.', profession: 'Environmental Scientist', year: 2008, linkedin: '#' },
                ].map((alumni, idx) => (
                  <div key={idx} className="network-card">
                    <h3>{alumni.name}</h3>
                    <p className="profession">{alumni.profession}</p>
                    <p className="year">Class of {alumni.year}</p>
                    <a href={alumni.linkedin} className="linkedin-link">
                      <FaLinkedin /> View Profile
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Job Opportunities */}
        {activeTab === 'opportunities' && (
          <section className="alumni-content opportunities-section">
            <div className="alumni-container">
              <h2>Job & Opportunity Board</h2>
              <div className="opportunities-list">
                {opportunities.map((opp) => (
                  <div key={opp.id} className="opportunity-card">
                    <div className="opp-header">
                      <h3>{opp.title}</h3>
                      <span className="opp-company">{opp.company}</span>
                    </div>
                    <p className="opp-date">Posted: {opp.posted}</p>
                    <button className="btn btn-sm btn-primary">
                      <BriefcaseIcon /> View Details
                    </button>
                  </div>
                ))}
              </div>
              <div className="post-opportunity">
                <p>Have a job to post?</p>
                <button className="btn btn-primary">Post Your Opportunity</button>
              </div>
            </div>
          </section>
        )}

        {/* Give Back */}
        {activeTab === 'giveback' && (
          <section className="alumni-content giveback-section">
            <div className="alumni-container">
              <h2>Make a Difference</h2>
              <div className="giveback-grid">
                <div className="giveback-card">
                  <div className="giveback-icon">
                    <FaHandshake />
                  </div>
                  <h3>Mentorship Program</h3>
                  <p>Guide current students and recent graduates towards their path.</p>
                  <button className="btn btn-outline">Become a Mentor</button>
                </div>
                <div className="giveback-card">
                  <div className="giveback-icon">
                    <FaHeart />
                  </div>
                  <h3>Make a Donation</h3>
                  <p>Support scholarships, infrastructure, and student programs.</p>
                  <button className="btn btn-primary">Donate Now</button>
                </div>
                <div className="giveback-card">
                  <div className="giveback-icon">
                    <FaUsers />
                  </div>
                  <h3>Volunteer</h3>
                  <p>Share your expertise through talks, workshops, and projects.</p>
                  <button className="btn btn-outline">Get Involved</button>
                </div>
                <div className="giveback-card">
                  <div className="giveback-icon">
                    <FaTrophy />
                  </div>
                  <h3>Sponsor an Activity</h3>
                  <p>Support school events, clubs, and co-curricular programs.</p>
                  <button className="btn btn-outline">Explore Sponsorships</button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact CTA */}
        <section className="alumni-contact">
          <div className="alumni-container">
            <h2>Questions or Feedback?</h2>
            <p>Get in touch with our Alumni relations team</p>
            <button className="btn btn-primary" onClick={() => window.open('mailto:alumni@mec.ac.ke')}>
              <FaEnvelope /> Contact Alumni Office
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

const BriefcaseIcon = () => <FaBriefcase />;

export default Alumni;
