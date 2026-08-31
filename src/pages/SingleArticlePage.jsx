import React, { useState, useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  FaArrowLeft, FaCalendarAlt, FaClock, FaShareAlt, FaCheck,
  FaWhatsapp, FaTwitter, FaLinkedin, FaFacebook, FaLink,
  FaStar, FaTrophy, FaRobot, FaBookmark, FaArrowRight
} from "react-icons/fa";
import Navbar from "../components/common/navigation/Navbar";
import Footer from "../components/common/Footer";
import SEO from "../components/common/SEO";
import { useHeroIntro } from "../context/HeroIntroContext";
import { useArticlesFetch } from "../hooks/articleshook";
import { getStoryBySlug, getRelatedStories, getAllStories } from "../data/newsData";
import "../css/newsroom-v3.css";

const SingleArticlePage = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const { posts } = useArticlesFetch();
  const { triggerAssistantAction } = useHeroIntro() || {};

  const [readingProgress, setReadingProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  // Scroll reading progress tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setReadingProgress((totalScroll / windowHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Find story from local dataset or live API
  const story = useMemo(() => {
    // 1. Check local rich dataset first
    const localMatch = getStoryBySlug(title);
    if (localMatch) return localMatch;

    // 2. Check live WordPress API posts
    if (posts && Array.isArray(posts)) {
      const apiPost = posts.find(
        (p) =>
          p.slug === title ||
          String(p.id) === title ||
          p.title?.rendered?.toLowerCase().includes(decodeURIComponent(title).toLowerCase())
      );

      if (apiPost) {
        return {
          id: `api-${apiPost.id}`,
          slug: apiPost.slug || title,
          title: apiPost.title?.rendered ? apiPost.title.rendered.replace(/&#8217;/g, "'").replace(/&amp;/g, "&") : "MEC News Story",
          headline: apiPost.title?.rendered ? apiPost.title.rendered.replace(/&#8217;/g, "'").replace(/&amp;/g, "&") : "MEC News Story",
          subtitle: apiPost.excerpt?.rendered ? apiPost.excerpt.rendered.replace(/<[^>]+>/g, '').substring(0, 120) : "Official Moi Educational Centre Update",
          excerpt: apiPost.excerpt?.rendered ? apiPost.excerpt.rendered.replace(/<[^>]+>/g, '') : "Read the full story from Moi Educational Centre.",
          category: apiPost._embedded?.['wp:term']?.[0]?.[0]?.name?.replace(/&amp;/g, '&') || "Campus News",
          categoryType: "campus",
          date: apiPost.date ? apiPost.date.substring(0, 10) : "2026-08-01",
          formattedDate: apiPost.date ? new Date(apiPost.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : "Recent",
          image: apiPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/assets/gallery/DSC_4265.JPG",
          imageCaption: "Moi Educational Centre community event photography.",
          badge: "OFFICIAL UPDATE",
          badgeType: "standard",
          readTime: "3 min read",
          author: "MEC Editorial Desk",
          authorRole: "Communications Office",
          tags: ["News", "Updates", "Moi Educational Centre"],
          leadParagraph: apiPost.excerpt?.rendered ? apiPost.excerpt.rendered.replace(/<[^>]+>/g, '') : "",
          content: [
            {
              type: "paragraph",
              text: apiPost.content?.rendered ? apiPost.content.rendered.replace(/<[^>]+>/g, '') : "For more details on this story, please contact Moi Educational Centre administration."
            }
          ]
        };
      }
    }

    // Fallback to first story
    return getAllStories()[0];
  }, [title, posts]);

  const relatedStories = useMemo(() => {
    return getRelatedStories(story?.slug || title, 3);
  }, [story, title]);

  // Social Share Handlers
  const currentUrl = typeof window !== "undefined" ? window.location.href : `https://moieducentre.ac.ke/news-and-updates/${title}`;
  const shareTitle = encodeURIComponent(story?.title || "MEC News & Updates");
  const shareUrl = encodeURIComponent(currentUrl);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleAskAI = (prompt) => {
    if (typeof triggerAssistantAction === "function") {
      triggerAssistantAction(prompt || `Tell me more about the story: "${story?.title}"`);
    }
  };

  if (!story) {
    return (
      <div className="nr-article-root">
        <Navbar />
        <div className="newsroom-container" style={{ padding: "140px 24px", textAlign: "center" }}>
          <h2>Story Not Found</h2>
          <p>The requested article could not be located.</p>
          <Link to="/news-and-updates" className="nr-reset-btn" style={{ textDecoration: "none", display: "inline-block" }}>
            Return to Newsroom
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="nr-article-root">
      <SEO
        title={`${story.title} | Moi Educational Centre News`}
        description={story.excerpt || story.subtitle}
        keywords={`${story.category}, MEC news, Moi Educational Centre, ${story.tags?.join(", ")}`}
      />

      {/* Top Reading Progress Bar */}
      <div
        className="nr-reading-progress-bar"
        style={{ width: `${readingProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(readingProgress)}
        aria-valuemin="0"
        aria-valuemax="100"
      />

      <Navbar />

      {/* 1. Article Hero & Header */}
      <header className="nr-article-hero">
        <div className="newsroom-container">
          
          {/* Breadcrumbs Navigation */}
          <nav className="nr-article-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/news-and-updates" className="nr-back-link">
              <FaArrowLeft size={12} />
              <span>Back to Newsroom</span>
            </Link>
            <span className="nr-breadcrumb-sep">/</span>
            <Link to={`/news-and-updates?category=${story.categoryType || "all"}`} className="nr-back-link" style={{ fontWeight: 600 }}>
              {story.category}
            </Link>
            <span className="nr-breadcrumb-sep">/</span>
            <span className="nr-breadcrumb-curr">{story.formattedDate || story.date}</span>
          </nav>

          <div className="nr-article-header-box">
            <div className="nr-meta-bar">
              <span className="nr-cat-badge">{story.category}</span>
              {story.badge && (
                <span className="nr-cat-badge" style={{ background: "#F3E8FF", color: "#7720E9" }}>
                  <FaTrophy style={{ marginRight: 4 }} />
                  {story.badge}
                </span>
              )}
              <span className="nr-meta-item">
                <FaClock size={11} />
                {story.readTime || "4 min read"}
              </span>
            </div>

            <h1 className="nr-article-title">{story.title}</h1>

            {story.subtitle && (
              <p className="nr-article-lead">{story.subtitle}</p>
            )}

            {/* Author Byline & Social Share Bar */}
            <div className="nr-article-byline-bar">
              <div className="nr-byline-author-group">
                <div className="nr-author-avatar-badge">
                  {story.author?.charAt(0) || "M"}
                </div>
                <div>
                  <div className="nr-author-name">{story.author || "MEC Editorial Desk"}</div>
                  <div className="nr-author-role">{story.authorRole || "Verified Official Story"} · {story.formattedDate || story.date}</div>
                </div>
              </div>

              {/* Social Sharing Buttons */}
              <div className="nr-share-buttons">
                <span style={{ fontSize: "12px", fontWeight: "700", color: "#64748B", marginRight: 4 }}>
                  Share:
                </span>
                
                <a
                  href={`https://api.whatsapp.com/send?text=${shareTitle}%20${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nr-share-btn whatsapp"
                  title="Share on WhatsApp"
                  aria-label="Share on WhatsApp"
                >
                  <FaWhatsapp size={15} />
                </a>

                <a
                  href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nr-share-btn twitter"
                  title="Share on X / Twitter"
                  aria-label="Share on X / Twitter"
                >
                  <FaTwitter size={14} />
                </a>

                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nr-share-btn linkedin"
                  title="Share on LinkedIn"
                  aria-label="Share on LinkedIn"
                >
                  <FaLinkedin size={14} />
                </a>

                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nr-share-btn facebook"
                  title="Share on Facebook"
                  aria-label="Share on Facebook"
                >
                  <FaFacebook size={14} />
                </a>

                <button
                  type="button"
                  className="nr-share-btn"
                  onClick={handleCopyLink}
                  title="Copy link to clipboard"
                  aria-label="Copy link to clipboard"
                  style={{ background: copied ? "#0F3D91" : "#FFFFFF", color: copied ? "#FFFFFF" : "#475569" }}
                >
                  {copied ? <FaCheck size={13} /> : <FaLink size={13} />}
                </button>
              </div>
            </div>

          </div>

        </div>
      </header>

      {/* 2. Article Featured Image */}
      {story.image && (
        <div className="newsroom-container">
          <div className="nr-article-image-wrap">
            <img src={story.image} alt={story.title} className="nr-article-hero-img" />
            {story.imageCaption && (
              <div className="nr-article-caption">
                📷 {story.imageCaption}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3. Main Prose Content */}
      <article className="newsroom-container">
        <div className="nr-article-prose">
          
          {story.leadParagraph && (
            <p style={{ fontSize: "19px", lineHeight: "1.75", fontWeight: "500", color: "#1E293B" }}>
              {story.leadParagraph}
            </p>
          )}

          {story.content && Array.isArray(story.content) ? (
            story.content.map((block, idx) => {
              if (block.type === "paragraph") {
                return <p key={idx}>{block.text}</p>;
              }
              if (block.type === "heading") {
                return <h2 key={idx}>{block.text}</h2>;
              }
              if (block.type === "pullquote") {
                return (
                  <blockquote className="nr-pullquote-box" key={idx}>
                    <p className="nr-pullquote-text">“{block.quote}”</p>
                    {block.author && <span className="nr-pullquote-author">— {block.author}</span>}
                  </blockquote>
                );
              }
              if (block.type === "keytakeaways") {
                return (
                  <div className="nr-keytakeaways-box" key={idx}>
                    <div className="nr-keytakeaways-title">
                      <FaStar style={{ color: "#0F3D91" }} />
                      <span>{block.title || "Key Highlights"}</span>
                    </div>
                    <ul className="nr-keytakeaways-list">
                      {block.items.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                );
              }
              return null;
            })
          ) : (
            <p>{story.excerpt}</p>
          )}

          {/* Tags Strip */}
          {story.tags && story.tags.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "40px", paddingTop: "24px", borderTop: "1px solid #E2E8F0" }}>
              <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#64748B", alignSelf: "center", marginRight: "4px" }}>
                Tags:
              </span>
              {story.tags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: "4px 12px",
                    background: "#F1F5F9",
                    borderRadius: "999px",
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#334155"
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Ask AI Contextual Banner */}
          <div
            style={{
              marginTop: "48px",
              padding: "24px 28px",
              background: "#F8FAFC",
              border: "1.5px solid #E2E8F0",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              flexWrap: "wrap"
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "700", color: "#7720E9", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>
                <FaRobot />
                <span>MEC AI ASSISTANT</span>
              </div>
              <div style={{ fontSize: "14.5px", fontWeight: "700", color: "#0F172A" }}>
                Have questions about this story or related admissions?
              </div>
            </div>

            <button
              type="button"
              className="nr-ai-concierge-chip"
              onClick={() => handleAskAI(`Tell me more about: ${story.title}`)}
            >
              <FaRobot size={15} />
              <span>Ask AI About This</span>
            </button>
          </div>

        </div>
      </article>

      {/* 4. Related Stories ("You May Also Like") */}
      {relatedStories && relatedStories.length > 0 && (
        <section className="nr-related-section" aria-label="Related Stories">
          <div className="newsroom-container">
            <div className="nr-related-header">
              <h2 className="nr-related-title">You May Also Like</h2>
              <p style={{ color: "#64748B", fontSize: "14.5px", margin: "6px 0 0" }}>
                Explore more authentic achievements and stories from the Moi Educational Centre community.
              </p>
            </div>

            <div className="nr-editorial-grid">
              {relatedStories.map((relStory) => (
                <article className="nr-card" key={relStory.id}>
                  <Link
                    to={`/news-and-updates/${relStory.slug || relStory.id}`}
                    style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", height: "100%" }}
                  >
                    <div className="nr-card-media">
                      <img src={relStory.image} alt={relStory.title} className="nr-card-img" loading="lazy" />
                      {relStory.badge && (
                        <div className="nr-card-badge-floating">
                          {relStory.badge}
                        </div>
                      )}
                    </div>

                    <div className="nr-card-body">
                      <div className="nr-meta-bar" style={{ marginBottom: "8px" }}>
                        <span className="nr-cat-badge" style={{ fontSize: "10.5px", padding: "3px 8px" }}>
                          {relStory.category}
                        </span>
                        <span className="nr-meta-item" style={{ fontSize: "11.5px" }}>
                          <FaClock size={10} style={{ opacity: 0.6 }} />
                          {relStory.readTime || "4 min read"}
                        </span>
                      </div>

                      <h3 className="nr-card-headline">{relStory.title}</h3>

                      <p className="nr-card-excerpt">{relStory.excerpt}</p>

                      <div className="nr-card-footer">
                        <span className="nr-card-date">{relStory.formattedDate || relStory.date}</span>
                        <span className="nr-card-readmore">
                          <span>Read Story</span>
                          <FaArrowRight size={11} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default SingleArticlePage;