import React from "react";
import { FaSearch, FaTimes, FaSlidersH } from "react-icons/fa";

const NewsFilterBar = ({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onClearSearch,
  sortBy,
  onSortChange,
  categoryCounts
}) => {
  return (
    <section className="nr-controls-section" aria-label="News Filters & Search">
      <div className="newsroom-container">
        <div className="nr-controls-wrap">
          
          {/* Horizontal Scrollable Category Pills */}
          <div className="nr-pills-scroll" role="tablist" aria-label="Filter stories by category">
            {categories.map((cat) => {
              const count = categoryCounts[cat.id] || 0;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`nr-pill-btn ${isActive ? "active" : ""}`}
                  onClick={() => onSelectCategory(cat.id)}
                >
                  <span>{cat.label}</span>
                  <span className="nr-pill-count">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Search Field & Sort Dropdown */}
          <div className="nr-search-sort-group">
            <div className="nr-search-field">
              <input
                type="text"
                className="nr-search-input"
                placeholder="Search MEC news..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                aria-label="Search stories"
              />
              {searchQuery ? (
                <button
                  type="button"
                  className="nr-clear-btn"
                  onClick={onClearSearch}
                  aria-label="Clear search"
                  title="Clear search"
                >
                  <FaTimes size={12} />
                </button>
              ) : (
                <FaSearch size={13} className="nr-search-icon" />
              )}
            </div>

            <select
              className="nr-sort-select"
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              aria-label="Sort stories"
            >
              <option value="latest">Sort: Latest First</option>
              <option value="featured">Sort: Featured</option>
              <option value="popular">Sort: Most Read</option>
            </select>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsFilterBar;
