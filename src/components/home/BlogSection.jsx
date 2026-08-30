import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  FaArrowRight, FaCalendarAlt, FaTag, FaRegClock, 
  FaAward, FaGraduationCap, FaExternalLinkAlt, FaCompass, FaBookmark, FaShareAlt
} from "react-icons/fa";
import { useArticlesFetch } from "../../hooks/articleshook";
import "../../css/blog-magazine.css";

// Verified authentic MEC Community Stories with high-res photography
const staticStories = [
  {
    id: "featured-music-tour",
    title: "MEC Music Conservatory Vienna Tour: Choral & Orchestral Performances in St. Stephen's Cathedral",
    excerpt: "Witness the exceptional choral and instrumental mastery of our young musicians performing classical and sacred compositions across Austria's historic cathedrals.",
    category: "GLOBAL TOURS & ARTS",
    categoryType: "achievements",
    date: "AUG 2026",
    image: "/assets/gallery/DSC_4265.JPG",
    link: "/extra-curricular/clubs/music-academy",
    badge: "GLOBAL TOUR 2026",
    readTime: "4 min read",
    author: "Music Conservatory Faculty"
  },
  {
    id: "story-soccer-tour",
    title: "MEC Soccer Academy Shines at the Edinburgh International Youth Championship in Scotland",
    excerpt: "Our junior and senior football squads represented Kenya with distinction, showcasing tactical discipline and team spirit in high-stakes European fixtures.",
    category: "SPORTS & ATHLETICS",
    categoryType: "achievements",
    date: "JUL 2026",
    image: "/assets/gallery/DSC_4232.JPG",
    link: "/extra-curricular/sports/soccer-academy",
    badge: "INTERNATIONAL VICTORY",
    readTime: "3 min read",
    author: "MEC Sports Department"
  },
  {
    id: "story-robotics-ai",
    title: "Future-Ready Learners: Inside the VEX Robotics & STEM Innovation Lab at Senior School",
    excerpt: "Exploring how learners design autonomous robotics, program microcontrollers, and develop AI algorithms preparing them for global technology careers.",
    category: "STEM & INNOVATION",
    categoryType: "academics",
    date: "JUN 2026",
    image: "/assets/gallery/DSC_4289.JPG",
    link: "/extra-curricular/clubs/robotics",
    badge: "STEM EXCELLENCE",
    readTime: "5 min read",
    author: "STEM & Computing Faculty"
  },
  {
    id: "story-swimming-gala",
    title: "National Aquatics Gala: MEC Swim Squad Triumphs in Semi-Olympic Heated Pool",
    excerpt: "Highlighting championship times and sportsmanship as our junior and senior swimmers compete against top national international school academies.",
    category: "AQUATICS",
    categoryType: "events",
    date: "MAY 2026",
    image: "/assets/gallery/DSC_4136.JPG",
    link: "/extra-curricular/swimming",
    badge: "CHAMPIONSHIP GALA",
    readTime: "3 min read",
    author: "Aquatics Coaching Staff"
  },
  {
    id: "story-cambridge-cbc",
    title: "Bridging CBC and Cambridge International: Dual Curriculum Pathways at Moi Educational Centre",
    excerpt: "A comprehensive guide on how MEC nurtures student strengths through the Kenyan CBC system and the British Cambridge International curriculum from Year 1 to Senior School.",
    category: "CURRICULUM INSIGHT",
    categoryType: "academics",
    date: "APR 2026",
    image: "/assets/gallery/DSC_4145.JPG",
    link: "/admissions/admission-process#curriculum-choice",
    badge: "ACADEMIC PATHWAYS",
    readTime: "6 min read",
    author: "Academic Directorship"
  },
  {
    id: "story-alumni-reunion",
    title: "Class of 1998 Silver Jubilee Reunion: 40 Years of Excellence, Mentorship & Impact",
    excerpt: "Alumni across medical, tech, legal, and public sectors reunite at MEC to launch the 2026 student mentorship endowment and career development clinics.",
    category: "ALUMNI & HERITAGE",
    categoryType: "news",
    date: "MAR 2026",
    image: "/assets/gallery/Alumni 11 - Class of 98.jpg",
    link: "/alumni",
    badge: "40 YEARS HERITAGE",
    readTime: "4 min read",
    author: "MEC Alumni Association"
  }
];

const BlogSection = () => {
  const { posts } = useArticlesFetch();
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Stories", count: 6 },
    { id: "achievements", label: "Achievements & Tours", count: 2 },
    { id: "academics", label: "Academics & STEM", count: 2 },
    { id: "events", label: "Events & Sports", count: 1 },
    { id: "news", label: "Campus Life & Alumni", count: 1 }
  ];

  // Merge live posts with static verified stories
  const allStories = useMemo(() => {
    if (posts && Array.isArray(posts) && posts.length > 0) {
      const formattedPosts = posts.map((p, idx) => ({
        id: p.id || `wp-${idx}`,
        title: p.title?.rendered ? p.title.rendered.replace(/&#8217;/g, "'").replace(/&amp;/g, "&") : p.title,
        excerpt: p.excerpt?.rendered ? p.excerpt.rendered.replace(/<[^>]+>/g, '').substring(0, 130) + '...' : '',
        category: p._embedded?.['wp:term']?.[0]?.[0]?.name?.replace(/&amp;/g, '&') || "NEWS",
        categoryType: "news",
        date: p.date ? new Date(p.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : "RECENT",
        image: p._embedded?.["wp:featuredmedia"]?.[0]?.source_url || staticStories[idx % staticStories.length].image,
        link: `/news-and-updates/${p.slug || p.id}`,
        badge: "LATEST NEWS",
        readTime: "3 min read",
        author: "MEC Editorial Desk"
      }));
      return [...formattedPosts, ...staticStories.slice(formattedPosts.length)];
    }
    return staticStories;
  }, [posts]);

  // Filter stories based on selected category
  const filteredStories = useMemo(() => {
    if (activeCategory === "all") return allStories;
    return allStories.filter((s) => s.categoryType === activeCategory || s.category.toLowerCase().includes(activeCategory));
  }, [allStories, activeCategory]);

  const featuredStory = filteredStories[0] || allStories[0];
  const secondaryStories = filteredStories.slice(1, 5).length > 0 ? filteredStories.slice(1, 5) : allStories.slice(1, 5);

  return (
    <section className="mec-newsroom-section" id="news-section" aria-label="Latest News & Events">
      <div className="newsroom-container">
        
        {/* ─── 1. Section Header ───────────────────────────────── */}
        <div className="newsroom-header">
          <div className="newsroom-header-left">
            <div className="newsroom-eyebrow">
              <span className="newsroom-eyebrow-dot" />
              <span>INSIGHTS & ACHIEVEMENTS</span>
            </div>
            <h2 className="newsroom-title">
              Stories from the <span className="title-accent">MEC Community</span>
            </h2>
            <p className="newsroom-subtitle">
              Discover authentic student achievements, global educational tours, academic breakthroughs, and four decades of excellence in Kenya.
            </p>
          </div>

          <div className="newsroom-header-right">
            <Link to="/news-and-updates" className="newsroom-view-all-btn">
              <span>View All Stories</span>
              <FaArrowRight className="btn-arrow" />
            </Link>
          </div>
        </div>

        {/* Category Filter Pills with Active Indicators */}
        <div className="newsroom-filter-strip" role="tablist" aria-label="Filter news and stories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`newsroom-pill ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* ─── 2. Asymmetrical Editorial Newsroom Grid (65/35 Split) ─ */}
        <div className="newsroom-grid" key={activeCategory}>
          
          {/* Featured Hero Story (Left 65%) */}
          <div className="newsroom-featured-col">
            <Link to={featuredStory.link} className="featured-story-card">
              <div className="featured-image-wrapper">
                <img 
                  src={featuredStory.image} 
                  alt={featuredStory.title} 
                  loading="lazy"
                  className="featured-photo"
                />
                
                {/* Live Badge */}
                <div className="featured-badge-pill">
                  <span className="badge-pulse-dot" />
                  <span>{featuredStory.badge || featuredStory.category}</span>
                </div>

                <div className="featured-hover-reveal">
                  <span>Read Full Story <FaArrowRight /></span>
                </div>
              </div>

              <div className="featured-story-content">
                <div className="story-meta-row">
                  <span className="story-category-tag">{featuredStory.category}</span>
                  <span className="meta-divider">•</span>
                  <span className="story-date">
                    <FaCalendarAlt className="meta-icon" /> {featuredStory.date}
                  </span>
                  <span className="meta-divider">•</span>
                  <span className="story-read-time">
                    <FaRegClock className="meta-icon" /> {featuredStory.readTime || "4 min read"}
                  </span>
                </div>

                <h3 className="featured-headline">{featuredStory.title}</h3>
                
                {featuredStory.excerpt && (
                  <p className="featured-excerpt">{featuredStory.excerpt}</p>
                )}

                <div className="featured-footer-row">
                  {featuredStory.author && (
                    <span className="featured-author-badge">By {featuredStory.author}</span>
                  )}
                  <div className="featured-action-link">
                    <span>Read Full Story</span>
                    <FaArrowRight className="action-arrow" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Secondary Stories Stack (Right 35%) */}
          <div className="newsroom-secondary-col">
            <div className="secondary-stories-stack">
              {secondaryStories.map((story, idx) => (
                <Link to={story.link} key={story.id || idx} className="secondary-story-card">
                  <div className="secondary-index-badge">0{idx + 1}</div>
                  
                  <div className="secondary-thumb-wrapper">
                    <img 
                      src={story.image} 
                      alt={story.title} 
                      loading="lazy"
                      className="secondary-thumb-img"
                    />
                  </div>

                  <div className="secondary-story-body">
                    <div className="secondary-meta">
                      <span className="secondary-cat">{story.category}</span>
                      <span className="secondary-date">{story.date}</span>
                    </div>

                    <h4 className="secondary-title">{story.title}</h4>

                    <div className="secondary-link-btn">
                      <span>Explore Story</span>
                      <FaArrowRight className="small-arrow" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* ─── 3. Bottom Events Banner ─────────────────────────── */}
        <div className="newsroom-events-banner">
          <div className="banner-icon-box">
            <FaCalendarAlt />
          </div>
          <div className="banner-text-box">
            <h4>Looking for upcoming academic calendars, term dates & school events?</h4>
            <p>Explore our complete institutional diary, sports fixtures, parent-teacher conferences, and cultural gala dates.</p>
          </div>
          <div className="banner-action-box">
            <Link to="/about-MEC/school-events" className="banner-events-btn">
              Explore School Events & Calendar <FaArrowRight />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;