import React from "react";
import { FaSearch, FaRedoAlt, FaCompass } from "react-icons/fa";

const NewsEmptyState = ({ searchQuery, activeCategory, onReset }) => {
  return (
    <div className="nr-empty-state" role="status">
      <div className="nr-empty-icon">
        <FaSearch />
      </div>

      <h3>No Stories Found</h3>

      <p>
        {searchQuery
          ? `We couldn't find any articles matching "${searchQuery}". Try using broader search keywords or reset your filters.`
          : `There are currently no articles in this category. Explore all latest stories from across the MEC community.`}
      </p>

      <button type="button" className="nr-reset-btn" onClick={onReset}>
        <FaRedoAlt style={{ marginRight: 6 }} />
        Reset All Filters
      </button>
    </div>
  );
};

export default NewsEmptyState;
