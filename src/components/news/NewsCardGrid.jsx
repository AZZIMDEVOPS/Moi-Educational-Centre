import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt, FaClock, FaTrophy, FaCalendarCheck } from "react-icons/fa";

const NewsCardGrid = ({ stories }) => {
  if (!stories || stories.length === 0) return null;

  return (
    <div className="nr-editorial-grid" aria-label="News Articles Grid">
      {stories.map((story) => {
        const articleLink = `/news-and-updates/${story.slug || story.id}`;
        const isAchievement = story.badgeType === "achievement";
        const isEvent = story.categoryType === "events";

        return (
          <article className="nr-card" key={story.id}>
            <Link to={articleLink} style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", height: "100%" }}>
              
              {/* Card Image */}
              <div className="nr-card-media">
                <img
                  src={story.image}
                  alt={story.title}
                  className="nr-card-img"
                  loading="lazy"
                />
                
                {story.badge && (
                  <div className={`nr-card-badge-floating ${isAchievement ? "achievement" : ""}`}>
                    {isAchievement && <FaTrophy style={{ marginRight: 4 }} />}
                    {isEvent && <FaCalendarCheck style={{ marginRight: 4 }} />}
                    {story.badge}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="nr-card-body">
                <div className="nr-meta-bar" style={{ marginBottom: "8px" }}>
                  <span className="nr-cat-badge" style={{ fontSize: "10.5px", padding: "3px 8px" }}>
                    {story.category}
                  </span>
                  <span className="nr-meta-item" style={{ fontSize: "11.5px" }}>
                    <FaClock size={10} style={{ opacity: 0.6 }} />
                    {story.readTime || "4 min read"}
                  </span>
                </div>

                <h3 className="nr-card-headline">
                  {story.title}
                </h3>

                <p className="nr-card-excerpt">
                  {story.excerpt}
                </p>

                <div className="nr-card-footer">
                  <span className="nr-card-date">
                    <FaCalendarAlt size={10} style={{ marginRight: 4, opacity: 0.6 }} />
                    {story.formattedDate || story.date}
                  </span>

                  <span className="nr-card-readmore">
                    <span>Read Story</span>
                    <FaArrowRight size={11} />
                  </span>
                </div>
              </div>

            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default NewsCardGrid;
