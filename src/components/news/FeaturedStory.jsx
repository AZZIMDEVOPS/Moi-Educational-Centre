import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt, FaClock, FaAward, FaStar } from "react-icons/fa";

const FeaturedStory = ({ story }) => {
  if (!story) return null;

  const articleLink = `/news-and-updates/${story.slug || story.id}`;

  return (
    <section className="nr-featured-section" aria-label="Featured Story">
      <div className="newsroom-container">
        <Link to={articleLink} className="nr-featured-card">
          
          {/* Media Column */}
          <div className="nr-featured-media">
            <img
              src={story.image}
              alt={story.title}
              className="nr-featured-img"
              loading="eager"
            />
            <div className="nr-featured-overlay" />
            
            <div className="nr-featured-ribbon">
              <FaStar style={{ color: "#F59E0B" }} />
              <span>{story.badge || "FEATURED STORY"}</span>
            </div>
          </div>

          {/* Content Column */}
          <div className="nr-featured-content">
            <div className="nr-meta-bar">
              <span className="nr-cat-badge">{story.category}</span>
              <span className="nr-meta-item">
                <FaCalendarAlt size={11} style={{ opacity: 0.7 }} />
                {story.formattedDate || story.date}
              </span>
              <span className="nr-meta-item">
                <FaClock size={11} style={{ opacity: 0.7 }} />
                {story.readTime || "4 min read"}
              </span>
            </div>

            <h2 className="nr-featured-headline">
              {story.headline || story.title}
            </h2>

            <p className="nr-featured-excerpt">
              {story.excerpt}
            </p>

            <div className="nr-featured-author-row">
              <div className="nr-author-info">
                <span className="nr-author-name">{story.author || "MEC Editorial Desk"}</span>
                <span className="nr-author-role">{story.authorRole || "Verified Official Story"}</span>
              </div>

              <div className="nr-action-cta">
                <span>Read Full Story</span>
                <FaArrowRight size={12} />
              </div>
            </div>
          </div>

        </Link>
      </div>
    </section>
  );
};

export default FeaturedStory;
