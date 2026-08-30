import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaArrowRight, FaStar } from "react-icons/fa";
import { events } from "../../data/events";

const EventsHero = () => {
  // Find featured spotlight event
  const spotlightEvent = events.find(e => e.featured) || events[0];

  return (
    <header className="events-hero-v2">
      <div className="events-hero-ambient-1" aria-hidden="true" />
      <div className="events-hero-ambient-2" aria-hidden="true" />
      <div className="events-hero-pattern" aria-hidden="true" />

      <div className="events-container">
        {/* Breadcrumbs */}
        <nav className="events-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="events-bc-sep">/</span>
          <Link to="/about-MEC">About MEC</Link>
          <span className="events-bc-sep">/</span>
          <span className="events-bc-active" aria-current="page">School Events</span>
        </nav>

        <div className="events-hero-grid">
          {/* Left Column: Hero Copy */}
          <div className="events-hero-copy">
            <div className="events-hero-eyebrow">
              <span className="events-eyebrow-dot" />
              <span>CAMPUS LIFE & CALENDAR</span>
            </div>

            <h1 className="events-hero-heading">
              School Events & Activities
            </h1>

            <p className="events-hero-sub">
              Experience the vibrant spirit of Moi Educational Centre through our rich calendar of academic bootcamps, international music tours, sports galas, robotics exhibitions, and community celebrations.
            </p>
          </div>

          {/* Right Column: Featured Event Spotlight */}
          {spotlightEvent && (
            <div className="events-spotlight-card">
              <div className="events-spotlight-tag">
                <FaStar aria-hidden="true" />
                <span>Featured Event Spotlight</span>
              </div>

              <div className="events-spotlight-img-wrap">
                <img
                  src={spotlightEvent.image}
                  alt={spotlightEvent.title}
                  className="events-spotlight-img"
                />
              </div>

              <h2 className="events-spotlight-title">{spotlightEvent.title}</h2>

              <div className="events-spotlight-meta">
                <div className="events-spotlight-meta-item">
                  <FaCalendarAlt />
                  <span>{spotlightEvent.date.fullDateString}</span>
                </div>
                <div className="events-spotlight-meta-item">
                  <FaMapMarkerAlt />
                  <span>{spotlightEvent.location}</span>
                </div>
                <div className="events-spotlight-meta-item">
                  <FaUsers />
                  <span>{spotlightEvent.audience}</span>
                </div>
              </div>

              <Link
                to={`/about-MEC/school-events/${spotlightEvent.slug}`}
                className="events-spotlight-btn"
              >
                <span>View Full Schedule & Details</span>
                <FaArrowRight aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default EventsHero;