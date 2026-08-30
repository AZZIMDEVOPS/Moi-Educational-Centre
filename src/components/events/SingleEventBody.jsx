import React from "react";
import { useParams, Link } from "react-router-dom";
import { 
  FaCalendarAlt, 
  FaClock, 
  FaMapMarkerAlt, 
  FaUsers, 
  FaArrowLeft, 
  FaArrowRight, 
  FaCalendarPlus, 
  FaShareAlt, 
  FaCheckCircle, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaUniversity 
} from "react-icons/fa";
import { events } from "../../data/events";
import SEO from "../common/SEO";

const SingleEventBody = () => {
  const { name } = useParams();

  // Find event by slug or fallback to first
  const event = events.find(
    e => e.slug === name || e.slug.toLowerCase() === name?.toLowerCase()
  ) || events[0];

  // Related events
  const relatedEvents = events.filter(e => e.id !== event.id).slice(0, 3);

  // Generate Google Calendar Link
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.date.startIso.replace(/[-:]/g, '')}/${event.date.endIso.replace(/[-:]/g, '')}&details=${encodeURIComponent(event.summary)}&location=${encodeURIComponent(event.location)}`;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.summary,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Event link copied to clipboard!");
    }
  };

  return (
    <>
      <SEO
        title={`${event.title} | School Events`}
        description={event.summary}
        url={`/about-MEC/school-events/${event.slug}`}
      />

      <div className="events-page-v2">
        {/* ─── Hero Section ───────────────────────────────────── */}
        <header className="single-event-hero">
          <div className="events-hero-ambient-1" aria-hidden="true" />
          <div className="events-hero-ambient-2" aria-hidden="true" />

          <div className="events-container">
            {/* Breadcrumb Navigation */}
            <nav className="events-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="events-bc-sep">/</span>
              <Link to="/about-MEC/school-events">School Events</Link>
              <span className="events-bc-sep">/</span>
              <span className="events-bc-active" aria-current="page">{event.category}</span>
            </nav>

            <Link to="/about-MEC/school-events" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#D8B4FE", fontSize: "14px", fontWeight: "600", textDecoration: "none", marginBottom: "18px" }}>
              <FaArrowLeft /> Back to All Events
            </Link>

            <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "16px", flexWrap: "wrap" }}>
              <span className="events-hero-eyebrow" style={{ marginBottom: 0 }}>
                <span className="events-eyebrow-dot" />
                {event.category}
              </span>
              <span style={{ background: "rgba(255, 255, 255, 0.15)", padding: "6px 14px", borderRadius: "999px", fontSize: "12px", fontWeight: "700", color: "#FFFFFF" }}>
                {event.term}
              </span>
            </div>

            <h1 className="events-hero-heading" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
              {event.title}
            </h1>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", fontSize: "14.5px", color: "rgba(255, 255, 255, 0.9)", marginTop: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <FaCalendarAlt style={{ color: "#60A5FA" }} />
                <span>{event.date.fullDateString}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <FaClock style={{ color: "#60A5FA" }} />
                <span>{event.time}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <FaMapMarkerAlt style={{ color: "#60A5FA" }} />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        </header>

        {/* ─── Main Content & Sidebar Layout ──────────────────── */}
        <main className="events-container">
          <div className="single-event-layout">
            
            {/* Left Column: Event Details & Schedule */}
            <article className="single-event-main-content">
              {/* Featured Image */}
              <div className="single-event-featured-img-wrap">
                <img src={event.image} alt={event.title} className="single-event-featured-img" />
              </div>

              {/* Event Overview */}
              <h2 className="single-event-overview-heading">About This Event</h2>
              <div className="single-event-overview-text">
                {event.description}
              </div>

              {/* Schedule Highlights Timeline */}
              {event.highlights && event.highlights.length > 0 && (
                <div className="single-event-schedule-wrap">
                  <h3 className="single-event-schedule-title">
                    <FaCalendarAlt /> Event Schedule & Highlights
                  </h3>
                  <div className="single-event-schedule-timeline">
                    {event.highlights.map((item, idx) => (
                      <div key={idx} className="single-event-timeline-card">
                        <div className="single-event-timeline-day">{item.day}</div>
                        <h4 className="single-event-timeline-theme">{item.theme}</h4>
                        <p className="single-event-timeline-details">{item.details}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Participating Institutions */}
              {event.participatingInstitutions && event.participatingInstitutions.length > 0 && (
                <div className="single-event-partners-wrap">
                  <h3 className="single-event-partners-title">
                    <FaUniversity style={{ color: "#6D28D9", marginRight: "8px" }} />
                    Featured Partners & Participating Institutions
                  </h3>
                  <div className="single-event-partners-grid">
                    {event.participatingInstitutions.map((inst, idx) => (
                      <div key={idx} className="single-event-partner-pill">
                        <span>{inst.name}</span>
                        <span className="single-event-partner-tag">{inst.category}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Right Column: Sticky Event Snapshot Sidebar */}
            <aside className="single-event-sidebar">
              <div className="single-event-card-box">
                <h3 className="single-event-box-title">Event Snapshot</h3>
                
                <div className="single-event-info-list">
                  <div className="single-event-info-row">
                    <div className="single-event-info-icon">
                      <FaCalendarAlt />
                    </div>
                    <div className="single-event-info-content">
                      <span className="single-event-info-label">Date</span>
                      <span className="single-event-info-val">{event.date.fullDateString}</span>
                    </div>
                  </div>

                  <div className="single-event-info-row">
                    <div className="single-event-info-icon">
                      <FaClock />
                    </div>
                    <div className="single-event-info-content">
                      <span className="single-event-info-label">Time</span>
                      <span className="single-event-info-val">{event.time}</span>
                    </div>
                  </div>

                  <div className="single-event-info-row">
                    <div className="single-event-info-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="single-event-info-content">
                      <span className="single-event-info-label">Venue</span>
                      <span className="single-event-info-val">{event.location}</span>
                    </div>
                  </div>

                  <div className="single-event-info-row">
                    <div className="single-event-info-icon">
                      <FaUsers />
                    </div>
                    <div className="single-event-info-content">
                      <span className="single-event-info-label">Target Audience</span>
                      <span className="single-event-info-val">{event.audience}</span>
                    </div>
                  </div>

                  {event.contacts && (
                    <div className="single-event-info-row">
                      <div className="single-event-info-icon">
                        <FaEnvelope />
                      </div>
                      <div className="single-event-info-content">
                        <span className="single-event-info-label">Coordinator</span>
                        <span className="single-event-info-val">{event.contacts.coordinator}</span>
                        <a href={`mailto:${event.contacts.email}`} style={{ fontSize: "13px", color: "#6D28D9", marginTop: "2px" }}>
                          {event.contacts.email}
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                <div className="single-event-sidebar-actions">
                  <a
                    href={googleCalendarUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="single-event-rsvp-btn"
                  >
                    <FaCalendarPlus />
                    <span>Add to Google Calendar</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleShare}
                    className="single-event-cal-btn"
                  >
                    <FaShareAlt />
                    <span>Share Event</span>
                  </button>

                  <Link
                    to="/contact"
                    className="single-event-cal-btn"
                    style={{ justifyContent: "center" }}
                  >
                    <span>Contact Events Desk</span>
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          {/* ─── Related Upcoming Events Section ────────────────── */}
          {relatedEvents.length > 0 && (
            <section style={{ marginTop: "40px", marginBottom: "80px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
                <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#0F172A", margin: 0 }}>
                  Other Upcoming School Events
                </h2>
                <Link to="/about-MEC/school-events" style={{ fontSize: "14px", fontWeight: "700", color: "#6D28D9", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}>
                  <span>View All Events</span>
                  <FaArrowRight />
                </Link>
              </div>

              <div className="events-grid-layout" style={{ marginBottom: 0 }}>
                {relatedEvents.map(rel => (
                  <article key={rel.id} className="event-card">
                    <div className="event-card-media" style={{ height: "180px" }}>
                      <img src={rel.image} alt={rel.title} className="event-card-img" />
                      <div className="event-card-date-badge">
                        <span className="event-card-date-day">{rel.date.day}</span>
                        <span className="event-card-date-month">{rel.date.month}</span>
                      </div>
                      <span className="event-card-cat-badge">{rel.category}</span>
                    </div>

                    <div className="event-card-body" style={{ padding: "18px" }}>
                      <h3 className="event-card-title" style={{ fontSize: "16px" }}>
                        <Link to={`/about-MEC/school-events/${rel.slug}`}>{rel.title}</Link>
                      </h3>
                      <p className="event-card-summary" style={{ fontSize: "13.5px", WebkitLineClamp: 2 }}>{rel.summary}</p>
                      <Link
                        to={`/about-MEC/school-events/${rel.slug}`}
                        className="event-card-cta-btn"
                        style={{ marginTop: "auto" }}
                      >
                        <span>Details</span>
                        <FaArrowRight aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </>
  );
};

export default SingleEventBody;