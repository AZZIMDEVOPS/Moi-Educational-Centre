import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt, FaClock, FaTrophy } from "react-icons/fa";

const SecondaryStoryGrid = ({ stories }) => {
  if (!stories || stories.length === 0) return null;

  return (
    <div className="nr-secondary-row" aria-label="Spotlight Stories">
      {stories.map((story) => {
        const articleLink = `/news-and-updates/${story.slug || story.id}`;

        return (
          <Link to={articleLink} className="nr-secondary-card" key={story.id}>
            <div className="nr-sec-media">
              <img
                src={story.image}
                alt={story.title}
                className="nr-sec-img"
                loading="lazy"
              />
              {story.badge && (
                <div className="nr-card-badge-floating achievement">
                  <FaTrophy style={{ marginRight: 4 }} />
                  {story.badge}
                </div>
              )}
            </div>

            <div className="nr-sec-content">
              <div className="nr-meta-bar">
                <span className="nr-cat-badge">{story.category}</span>
                <span className="nr-meta-item">
                  <FaCalendarAlt size={11} style={{ opacity: 0.7 }} />
                  {story.formattedDate || story.date}
                </span>
                <span className="nr-meta-item">
                  <FaClock size={11} style={{ opacity: 0.7 }} />
                  {story.readTime || "3 min read"}
                </span>
              </div>

              <h3 className="nr-sec-headline">{story.title}</h3>

              <p className="nr-sec-excerpt">{story.excerpt}</p>

              <div className="nr-card-footer">
                <span className="nr-author-name" style={{ fontSize: "12px", color: "#64748B" }}>
                  {story.author}
                </span>
                <span className="nr-action-cta">
                  <span>Read Story</span>
                  <FaArrowRight size={11} />
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SecondaryStoryGrid;
