import { useState } from 'react';
import { FaPlay, FaSpotify, FaApple, FaYoutube, FaSearch, FaMicrophone, FaClock, FaFire } from 'react-icons/fa';
import Navbar from '../components/common/navigation/Navbar';
import Footer from '../components/common/Footer';
import '../css/podcast-hub.css';

const PodcastHub = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const episodes = [
    {
      id: 1,
      title: 'Building Confidence in Young Learners',
      description: 'Expert educators discuss strategies for fostering confidence and self-belief in primary school students.',
      duration: '42:15',
      category: 'Education',
      date: '2025-04-20',
      featured: true,
      guests: ['Ms. Grace K.', 'Prof. Samuel M.'],
    },
    {
      id: 2,
      title: 'The Art of Balanced Parenting',
      description: 'A candid conversation about modern parenting challenges and practical solutions.',
      duration: '35:48',
      category: 'Parenting',
      date: '2025-04-15',
      featured: false,
      guests: ['Diana S.', 'Parent Advocates'],
    },
    {
      id: 3,
      title: 'Student Life: Behind the Scenes at MEC',
      description: 'Current students share their experiences, challenges, and highlights of school life.',
      duration: '28:32',
      category: 'Student Life',
      date: '2025-04-10',
      featured: false,
      guests: ['Form 4 Students'],
    },
    {
      id: 4,
      title: 'From MEC to University: Alumni Success Stories',
      description: 'Inspiring tales from alumni who have gone on to achieve great things globally.',
      duration: '51:20',
      category: 'Alumni',
      date: '2025-04-05',
      featured: false,
      guests: ['Alumni Network'],
    },
    {
      id: 5,
      title: 'Digital Learning: Preparing Students for the Future',
      description: 'How technology is transforming education and skills students need in 2025.',
      duration: '39:45',
      category: 'Education',
      date: '2025-03-30',
      featured: false,
      guests: ['Mr. Wekesa', 'Tech Lead'],
    },
    {
      id: 6,
      title: 'Mental Health & Wellness in School',
      description: 'Important conversation with our school counselor about student mental health.',
      duration: '44:12',
      category: 'Parenting',
      date: '2025-03-25',
      featured: false,
      guests: ['School Counselor'],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Episodes' },
    { id: 'Education', label: 'Education' },
    { id: 'Parenting', label: 'Parenting Tips' },
    { id: 'Student Life', label: 'Student Life' },
    { id: 'Alumni', label: 'Alumni' },
  ];

  const filteredEpisodes = episodes.filter((ep) => {
    const matchesCategory = selectedCategory === 'all' || ep.category === selectedCategory;
    const matchesSearch = ep.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <div className="podcast-hub">
        {/* Hero Section */}
        <section className="podcast-hero">
          <div className="podcast-hero-content">
            <h1>MEC Voices Podcast</h1>
            <p>Stories, insights, and conversations from our school community</p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Subscribe Now</button>
              <button className="btn btn-outline">Latest Episode</button>
            </div>
          </div>
        </section>

        {/* Featured Episode */}
        {filteredEpisodes.some((ep) => ep.featured) && (
          <section className="podcast-featured">
            <div className="podcast-container">
              <h2>Featured Episode</h2>
              <div className="featured-card">
                {filteredEpisodes
                  .filter((ep) => ep.featured)
                  .map((ep) => (
                    <div key={ep.id} className="featured-content">
                      <div className="featured-info">
                        <span className="badge badge-featured">
                          <FaFire /> Featured
                        </span>
                        <h3>{ep.title}</h3>
                        <p>{ep.description}</p>
                        <div className="featured-meta">
                          <span className="meta-item">
                            <FaClock /> {ep.duration}
                          </span>
                          <span className="meta-item">{new Date(ep.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="featured-guests">
                          <strong>Guests:</strong> {ep.guests.join(', ')}
                        </div>
                        <button className="btn btn-play">
                          <FaPlay /> Play Episode
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        )}

        {/* Search & Filter */}
        <section className="podcast-controls">
          <div className="podcast-container">
            <div className="search-bar">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Search episodes..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>

            <div className="category-filter">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Episodes List */}
        <section className="podcast-episodes">
          <div className="podcast-container">
            <h2>All Episodes</h2>
            <div className="episodes-grid">
              {filteredEpisodes.length > 0 ? (
                filteredEpisodes.map((ep) => (
                  <div key={ep.id} className="episode-card">
                    <div className="episode-header">
                      <div className="episode-thumbnail">
                        <FaMicrophone className="thumbnail-icon" />
                        <button className="play-overlay">
                          <FaPlay />
                        </button>
                      </div>
                      <span className="episode-category">{ep.category}</span>
                    </div>
                    <div className="episode-content">
                      <h3>{ep.title}</h3>
                      <p>{ep.description}</p>
                      <div className="episode-footer">
                        <span className="duration">
                          <FaClock /> {ep.duration}
                        </span>
                        <span className="date">{new Date(ep.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                      <div className="episode-guests">
                        <strong>Guests:</strong> {ep.guests.join(', ')}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-results">
                  <p>No episodes found. Try adjusting your filters.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="podcast-subscribe">
          <div className="podcast-container">
            <h2>Subscribe to MEC Voices</h2>
            <p>Stay updated with new episodes every week</p>
            <div className="subscribe-platforms">
              <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer" className="platform spotify">
                <FaSpotify />
                <span>Spotify</span>
              </a>
              <a href="https://podcasts.apple.com" target="_blank" rel="noopener noreferrer" className="platform apple">
                <FaApple />
                <span>Apple Podcasts</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="platform youtube">
                <FaYoutube />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="podcast-newsletter">
          <div className="podcast-container">
            <h2>Get Episode Summaries</h2>
            <p>Subscribe to our newsletter for transcripts and exclusive content</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PodcastHub;
