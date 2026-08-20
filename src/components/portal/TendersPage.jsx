import { useState } from "react";
import { FiCalendar, FiDollarSign, FiFileText, FiArrowRight, FiFilter } from "react-icons/fi";
import { tendersData } from "../../data/tenders.js";
import "../../css/tenders.css";

const TendersPage = () => {
  const [tenders] = useState(tendersData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const categories = ["All", "Supplies", "Services", "Technology", "Construction"];
  const statuses = ["All", "Active", "Coming Soon", "Closed"];

  const filteredTenders = tenders.filter(tender => {
    const categoryMatch = selectedCategory === "All" || tender.category === selectedCategory;
    const statusMatch = selectedStatus === "All" || tender.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  const daysUntilDeadline = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? `${diffDays} days` : "Expired";
  };

  const getStatusColor = (status) => {
    switch(status) {
      case "Active": return "status-active";
      case "Coming Soon": return "status-coming";
      case "Closed": return "status-closed";
      default: return "status-default";
    }
  };

  return (
    <section className="tenders-section">
      {/* Hero Section */}
      <div className="tenders-hero">
        <div className="inner-row">
          <div className="tenders-hero-content">
            <div className="hero-text">
              <h1>Tenders & Procurement</h1>
              <p>Transparent, fair, and competitive procurement opportunities. Join us in building excellence at Moi Educational Centre.</p>
            </div>
            <div className="hero-stats">
              <div className="stat-card">
                <h3>{tenders.length}</h3>
                <p>Total Tenders</p>
              </div>
              <div className="stat-card">
                <h3>{tenders.filter(t => t.status === "Active").length}</h3>
                <p>Active Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="tenders-content">
        <div className="inner-row">
          {/* Filter Section */}
          <div className="tenders-filters">
            <div className="filter-group">
              <div className="filter-header">
                <FiFilter size={20} />
                <h3>Filters</h3>
              </div>

              {/* Category Filter */}
              <div className="filter-item">
                <p className="filter-label">Category</p>
                <div className="filter-options">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Filter */}
              <div className="filter-item">
                <p className="filter-label">Status</p>
                <div className="filter-options">
                  {statuses.map(status => (
                    <button
                      key={status}
                      className={`filter-btn ${selectedStatus === status ? "active" : ""}`}
                      onClick={() => setSelectedStatus(status)}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedCategory !== "All" || selectedStatus !== "All") && (
                <button
                  className="clear-filters-btn"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedStatus("All");
                  }}
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>

          {/* Tenders List */}
          <div className="tenders-list">
            <div className="tenders-count">
              <h3>Showing {filteredTenders.length} tender{filteredTenders.length !== 1 ? "s" : ""}</h3>
            </div>

            {filteredTenders.length > 0 ? (
              <div className="tenders-grid">
                {filteredTenders.map(tender => (
                  <div key={tender.id} className="tender-card">
                    {/* Card Header */}
                    <div className="card-header">
                      <div className="card-badges">
                        <span className={`status-badge ${getStatusColor(tender.status)}`}>
                          {tender.status}
                        </span>
                        <span className="category-badge">{tender.category}</span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="card-body">
                      <h3 className="tender-title">{tender.title}</h3>
                      <p className="tender-description">{tender.description}</p>

                      {/* Tender Info Grid */}
                      <div className="tender-info">
                        <div className="info-item">
                          <div className="info-icon">
                            <FiDollarSign />
                          </div>
                          <div className="info-text">
                            <span className="info-label">Budget</span>
                            <span className="info-value">{tender.budget}</span>
                          </div>
                        </div>

                        <div className="info-item">
                          <div className="info-icon">
                            <FiCalendar />
                          </div>
                          <div className="info-text">
                            <span className="info-label">Closes in</span>
                            <span className="info-value">{daysUntilDeadline(tender.deadline)}</span>
                          </div>
                        </div>
                      </div>

                      {/* Deadline */}
                      <div className="deadline-badge">
                        <span className="deadline-label">Deadline: {new Date(tender.deadline).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
                      </div>

                      {/* Documents */}
                      {tender.documents.length > 0 && (
                        <div className="documents-list">
                          <div className="doc-header">
                            <FiFileText size={16} />
                            <span>Documents ({tender.documents.length})</span>
                          </div>
                          <div className="doc-items">
                            {tender.documents.map((doc, idx) => (
                              <a key={idx} href="#" className="doc-item">
                                {doc}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card Footer */}
                    <div className="card-footer">
                      <a href={tender.applyLink} className="apply-btn">
                        <span>Submit Bid</span>
                        <FiArrowRight />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <p>No tenders found matching your filters. Try adjusting your selection.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TendersPage;
