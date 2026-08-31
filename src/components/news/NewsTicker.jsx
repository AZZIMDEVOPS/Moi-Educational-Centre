import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBolt, FaChevronRight } from "react-icons/fa";

const TICKER_ITEMS = [
  {
    category: "GLOBAL TOURS",
    text: "MEC Music Conservatory Vienna Tour 2026: Choral & Orchestral Mastery in St. Stephen's Cathedral",
    link: "/news-and-updates/mec-music-conservatory-vienna-tour-2026"
  },
  {
    category: "SPORTS",
    text: "MEC Soccer Academy Shines at Edinburgh International Youth Cup in Scotland",
    link: "/news-and-updates/mec-soccer-academy-edinburgh-youth-championship"
  },
  {
    category: "STEM",
    text: "VEX Robotics & AI Engineering Lab Launches 2026 East Africa Competition Challenge",
    link: "/news-and-updates/future-ready-learners-vex-robotics-stem-lab"
  },
  {
    category: "HERITAGE",
    text: "Celebrating 40 Years of Excellence: Class of 1998 Launches Student Mentorship Endowment",
    link: "/news-and-updates/class-of-1998-silver-jubilee-reunion-40-years-excellence"
  }
];

const NewsTicker = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TICKER_ITEMS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const current = TICKER_ITEMS[index];

  return (
    <div className="nr-breaking-ticker" aria-label="Latest Announcements">
      <div className="newsroom-container">
        <div className="nr-ticker-inner">
          <div className="nr-ticker-badge">
            <FaBolt style={{ color: "#F59E0B" }} />
            <span>LATEST</span>
          </div>

          <div className="nr-ticker-content" key={index}>
            <span style={{ fontSize: "11px", fontWeight: "700", color: "#93C5FD", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              [{current.category}]
            </span>
            <Link to={current.link} className="nr-ticker-link">
              {current.text}
            </Link>
          </div>

          <Link to={current.link} style={{ color: "#93C5FD", display: "flex", alignItems: "center", fontSize: "12px", textDecoration: "none", flexShrink: 0 }}>
            <FaChevronRight size={10} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
