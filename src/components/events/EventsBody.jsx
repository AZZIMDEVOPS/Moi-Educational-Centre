import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  FaSearch, 
  FaTimes, 
  FaCalendarAlt, 
  FaClock, 
  FaMapMarkerAlt, 
  FaUsers, 
  FaArrowRight, 
  FaThLarge, 
  FaList, 
  FaCalendarCheck, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaQuestionCircle 
} from "react-icons/fa";
import { events, eventCategories } from "../../data/events";

const EventsBody = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Events");
  const [selectedTerm, setSelectedTerm] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); // "grid" | "list"

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts = { "All Events": events.length };
    eventCategories.forEach(cat => {
      if (cat !== "All Events") {
        counts[cat] = events.filter(e => e.category === cat).length;
      }
    });
    return counts;
  }, []);

  // Filtered Events
  const filteredEvents = useMemo(() => {
    return events.filter(item => {
      // Category filter
      const matchesCategory = selectedCategory === "All Events" || item.category === selectedCategory;
      if (!matchesCategory) return false;

      // Term filter
      const matchesTerm = selectedTerm === "All" || item.term === selectedTerm;
      if (!matchesTerm) return false;

      // Search query filter
      if (!searchTerm.trim()) return true;
      const q = searchTerm.toLowerCase().trim();
      const titleMatch = item.title.toLowerCase().includes(q);
      const summaryMatch = item.summary.toLowerCase().includes(q);
      const locationMatch = item.location.toLowerCase().includes(q);
      const audienceMatch = item.audience.toLowerCase().includes(q);
      const categoryMatch = item.category.toLowerCase().includes(q);
      const highlightMatch = item.highlights?.some(h => 
        h.theme.toLowerCase().includes(q) || h.details.toLowerCase().includes(q)
      );

      return titleMatch || summaryMatch || locationMatch || audienceMatch || categoryMatch || highlightMatch;
    });
  }, [selectedCategory, selectedTerm, searchTerm]);

  return (
    <main className="events-main-section">
      <div className="events-container">
        {/* ─── Search & Category Controls ───────────────────────── */}
        <div className="events-controls-container">
          {/* Search Box */}
          <div className="events-search-box">
            <FaSearch className="events-search-icon" aria-hidden="true" />
            <label htmlFor="events-search-input" className="sr-only">
              Search school events
            </label>
            <input
              id="events-search-input"
              type="text"
              className="events-search-input"
              placeholder="Search events by title, keyword, career, sports, music, or date..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoComplete="off"
            />
            {searchTerm && (
              <button
                type="button"
                className="events-search-clear-btn"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search input"
              >
                <FaTimes />
              </button>
            )}
          </div>

          {/* Category Tabs Scroll */}
          <div className="events-categories-scroll" role="tablist" aria-label="Event Categories">
            {eventCategories.map(category => {
              const isActive = selectedCategory === category;
              const count = categoryCounts[category] || 0;
              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={isActive}
                  className={`events-cat-pill ${isActive ? "active" : ""}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <span>{category}</span>
                  <span className="events-cat-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ─── Sub-filters & View Switcher ──────────────────────── */}
        <div className="events-subfilters-bar">
          {/* Term Selector */}
          <div className="events-term-tabs" role="group" aria-label="Filter by Academic Term">
            {["All", "Term 1", "Term 2", "Term 3"].map(term => (
              <button
                key={term}
                type="button"
                className={`events-term-tab ${selectedTerm === term ? "active" : ""}`}
                onClick={() => setSelectedTerm(term)}
              >
                {term === "All" ? "All Terms" : term}
              </button>
            ))}
          </div>

          {/* Results Summary */}
          <div className="events-results-summary" style={{ fontSize: "14px", color: "#64748B", fontWeight: 500 }}>
            Showing <strong>{filteredEvents.length}</strong> {filteredEvents.length === 1 ? "event" : "events"}
          </div>

          {/* Grid / List Switcher */}
          <div className="events-view-switcher" role="group" aria-label="View Layout">
            <button
              type="button"
              className={`events-view-btn ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => setViewMode("grid")}
              aria-label="Grid View"
              title="Grid View"
            >
              <FaThLarge />
            </button>
            <button
              type="button"
              className={`events-view-btn ${viewMode === "list" ? "active" : ""}`}
              onClick={() => setViewMode("list")}
              aria-label="List View"
              title="List View"
            >
              <FaList />
            </button>
          </div>
        </div>

        {/* ─── Events Display ───────────────────────────────────── */}
        {filteredEvents.length > 0 ? (
          viewMode === "grid" ? (
            /* Grid View */
            <div className="events-grid-layout">
              {filteredEvents.map(item => (
                <article key={item.id} className="event-card">
                  <div className="event-card-media">
                    <img src={item.image} alt={item.title} className="event-card-img" />
                    <div className="event-card-date-badge">
                      <span className="event-card-date-day">{item.date.day}</span>
                      <span className="event-card-date-month">{item.date.month}</span>
                    </div>
                    <span className="event-card-cat-badge">{item.category}</span>
                  </div>

                  <div className="event-card-body">
                    <h3 className="event-card-title">
                      <Link to={`/about-MEC/school-events/${item.slug}`}>{item.title}</Link>
                    </h3>
                    <p className="event-card-summary">{item.summary}</p>

                    <div className="event-card-meta-list">
                      <div className="event-card-meta-item">
                        <FaClock />
                        <span>{item.time}</span>
                      </div>
                      <div className="event-card-meta-item">
                        <FaMapMarkerAlt />
                        <span>{item.location}</span>
                      </div>
                      <div className="event-card-meta-item">
                        <FaUsers />
                        <span>{item.audience}</span>
                      </div>
                    </div>

                    <Link
                      to={`/about-MEC/school-events/${item.slug}`}
                      className="event-card-cta-btn"
                    >
                      <span>See Full Schedule & Details</span>
                      <FaArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Timeline List View */
            <div className="events-timeline-layout">
              {filteredEvents.map(item => (
                <article key={item.id} className="event-list-card">
                  <div className="event-list-media">
                    <img src={item.image} alt={item.title} className="event-list-img" />
                  </div>

                  <div className="event-list-body">
                    <div className="event-list-cat-row">
                      <span className="event-list-cat-badge">{item.category}</span>
                      <span className="event-list-term-tag">{item.term}</span>
                    </div>
                    <h3 className="event-list-title">
                      <Link to={`/about-MEC/school-events/${item.slug}`}>{item.title}</Link>
                    </h3>
                    <p style={{ fontSize: "14px", color: "#64748B", margin: "0", lineHeight: "1.5" }}>
                      {item.summary}
                    </p>
                    <div className="event-list-meta-row">
                      <div className="event-list-meta-item">
                        <FaCalendarAlt />
                        <span>{item.date.fullDateString}</span>
                      </div>
                      <div className="event-list-meta-item">
                        <FaClock />
                        <span>{item.time}</span>
                      </div>
                      <div className="event-list-meta-item">
                        <FaMapMarkerAlt />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="event-list-actions">
                    <div className="event-list-date-block">
                      <div className="event-list-date-day">{item.date.day}</div>
                      <div className="event-list-date-month">{item.date.month}</div>
                    </div>
                    <Link
                      to={`/about-MEC/school-events/${item.slug}`}
                      className="event-list-cta-btn"
                    >
                      <span>Details</span>
                      <FaArrowRight />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )
        ) : (
          /* Empty State */
          <div className="faq-empty-state">
            <div className="faq-empty-icon-wrap">
              <FaQuestionCircle />
            </div>
            <h2 className="faq-empty-title">No matching events found</h2>
            <p className="faq-empty-desc">
              We couldn't find any events matching your search "{searchTerm}". Try clearing your keywords or selecting another category.
            </p>
            <button
              type="button"
              className="faq-empty-btn-clear"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All Events");
                setSelectedTerm("All");
              }}
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* ─── 5. Calendar Sync & Notification Section ───────────── */}
        <section className="events-sync-section" aria-labelledby="events-sync-heading">
          <div className="events-sync-content">
            {/* Left Column */}
            <div>
              <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.14em", textTransform: "uppercase", color: "#60A5FA", display: "block", marginBottom: "10px" }}>
                STAY CONNECTED
              </span>
              <h2 id="events-sync-heading" className="events-sync-title">
                Never Miss a Milestone or Celebration
              </h2>
              <p className="events-sync-desc">
                Sync the official MEC academic calendar directly with your personal calendar to receive automatic updates on school open days, sports galas, examinations, and term dates.
              </p>
              <div className="events-sync-btns">
                <Link to="/admissions/resources" className="events-sync-btn-primary">
                  <FaCalendarCheck />
                  <span>Download 2026 Term Dates</span>
                </Link>
                <Link to="/contact" className="events-sync-btn-secondary">
                  <span>Contact Events Desk</span>
                </Link>
              </div>
            </div>

            {/* Right Column */}
            <div className="events-sync-channels">
              <a href="mailto:events@moieducentre.ac.ke" className="events-sync-card">
                <div className="faq-channel-icon">
                  <FaEnvelope />
                </div>
                <div className="faq-channel-info">
                  <span className="faq-channel-label">Events & Partnership Desk</span>
                  <span className="faq-channel-val">events@moieducentre.ac.ke</span>
                </div>
              </a>

              <a href="tel:+254706280170" className="events-sync-card">
                <div className="faq-channel-icon">
                  <FaPhoneAlt />
                </div>
                <div className="faq-channel-info">
                  <span className="faq-channel-label">School Reception Hotline</span>
                  <span className="faq-channel-val">+254 706 280 170</span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default EventsBody;