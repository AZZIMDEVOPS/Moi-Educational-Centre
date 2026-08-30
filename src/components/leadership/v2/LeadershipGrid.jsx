import React, { useState, useMemo } from "react";
import { 
  FaSearch, FaArrowRight, FaQuoteLeft, FaUserTie, 
  FaGraduationCap, FaUserShield, FaHandsHelping, FaFilter, FaTimes 
} from "react-icons/fa";
import { leaders } from "../../../data/leaders";

const LeadershipGrid = ({ onSelectLeader }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Leadership" },
    { id: "executive", label: "Executive Leadership" },
    { id: "academic", label: "Academic Leadership" },
    { id: "section", label: "Section Heads" },
    { id: "senior", label: "Administration" },
    { id: "pastoral", label: "Pastoral & Wellbeing" }
  ];

  const filteredLeaders = useMemo(() => {
    return leaders.filter((leader) => {
      if (!leader.name) return false;
      const matchesCategory = selectedCategory === "all" || leader.category === selectedCategory;
      const matchesSearch = 
        leader.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        leader.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (leader.school_category && leader.school_category.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="ldr-directory-section" id="directory">
      <div className="ldr-container">
        
        {/* Section Header */}
        <div className="ldr-section-header">
          <span className="ldr-eyebrow">LEADERSHIP DIRECTORY</span>
          <h2 className="ldr-section-title">The Complete Leadership Team</h2>
          <p className="ldr-section-desc">
            Explore the experienced educators, administrators, and pastoral leaders who guide our vibrant learning community daily.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="ldr-controls-wrapper">
          <div className="ldr-search-bar">
            <FaSearch className="ldr-search-icon" />
            <input 
              type="text" 
              placeholder="Search leader by name, position, or section..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="ldr-clear-btn" onClick={() => setSearchQuery("")}>
                <FaTimes />
              </button>
            )}
          </div>

          <div className="ldr-filter-pills-row">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`ldr-pill-btn ${selectedCategory === cat.id ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="ldr-results-count-bar">
          <span>Showing <strong>{filteredLeaders.length}</strong> {filteredLeaders.length === 1 ? "Leader" : "Leaders"}</span>
        </div>

        {/* Leadership Cards Grid */}
        {filteredLeaders.length === 0 ? (
          <div className="ldr-empty-state">
            <p>No leadership profiles found matching "{searchQuery}".</p>
            <button 
              className="ldr-btn-primary" 
              onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
            >
              Reset Search & Filters
            </button>
          </div>
        ) : (
          <div className="ldr-cards-grid">
            {filteredLeaders.map((leader) => (
              <div 
                key={leader.id} 
                className="ldr-team-card"
                onClick={() => onSelectLeader(leader)}
              >
                <div className="ldr-card-image-box">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    loading="lazy"
                    className="ldr-team-photo"
                  />
                  {leader.school_category && (
                    <span className="ldr-card-category-pill">
                      {leader.school_category}
                    </span>
                  )}
                  <div className="ldr-card-view-overlay">
                    <span>View Profile & Bio <FaArrowRight /></span>
                  </div>
                </div>

                <div className="ldr-card-content">
                  <span className="ldr-card-role-eyebrow">
                    {leader.categoryLabel || "MEC Leadership"}
                  </span>
                  <h3 className="ldr-card-name">{leader.name}</h3>
                  <p className="ldr-card-title">{leader.position}</p>

                  <p className="ldr-card-bio-snippet">
                    {leader.description && leader.description[0]
                      ? leader.description[0].substring(0, 120) + "..."
                      : ""}
                  </p>

                  {leader.quote && (
                    <div className="ldr-card-quote-box">
                      <FaQuoteLeft className="quote-tiny-icon" />
                      <span>"{leader.quote.text}"</span>
                    </div>
                  )}

                  <div className="ldr-card-footer">
                    <button 
                      type="button" 
                      className="ldr-card-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectLeader(leader);
                      }}
                    >
                      View Profile & Bio <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default LeadershipGrid;
