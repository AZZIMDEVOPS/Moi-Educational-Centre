import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaFilePdf, FaDownload, FaEye, FaFolderOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import gsap from "gsap";
import imgCampus from "../../assets/school5.jpg";
import "../../css/resources-v2.css";

const MEC_RESOURCES = [
  {
    id: 1,
    category: "Application Forms",
    title: "Application form for MECHS Primary and High School",
    path: "/docs/2025/MECHS-application-form-for-primary-and-high-school.pdf",
    size: "1.2 MB",
    isFeatured: true
  },
  {
    id: 2,
    category: "Application Forms",
    title: "Application form for MECHS Cambridge Curriculum",
    path: "/docs/2025/MECHS-application-form-for-cambridge.pdf",
    size: "1.1 MB",
    isFeatured: false
  },
  {
    id: 3,
    category: "Fee Structures",
    title: "2025 Primary School Fees Structure",
    path: "/docs/2025/MECHS-primary-school-fee-structure.pdf",
    size: "850 KB",
    isFeatured: true
  },
  {
    id: 4,
    category: "Fee Structures",
    title: "2025 High School Fees Structure",
    path: "/docs/2025/MECHS-high-school-fees-structure.pdf",
    size: "820 KB",
    isFeatured: false
  },
  {
    id: 5,
    category: "Fee Structures",
    title: "2025 Cambridge Curriculum Fee Structure",
    path: "/docs/2025/MECHS-cambridge-fees-structure.pdf",
    size: "830 KB",
    isFeatured: false
  },
  {
    id: 6,
    category: "Fee Structures",
    title: "2026 Form 3 and Form 4 Fee Structure",
    path: "/docs/2025/MECHS-2026-F3-and-F4-fees-structure.pdf",
    size: "790 KB",
    isFeatured: false
  },
  {
    id: 7,
    category: "Fee Structures",
    title: "2026 Primary and Junior School Fees Structure",
    path: "/docs/2025/MECHS-2026-primary-and-Junior-School-fees-structure.pdf",
    size: "810 KB",
    isFeatured: false
  },
  {
    id: 8,
    category: "Fee Structures",
    title: "Grade 10 Fee structure",
    path: "/docs/2025/MECHS-grade-10-fees-structure.pdf",
    size: "780 KB",
    isFeatured: false
  },
  {
    id: 9,
    category: "Transport",
    title: "MEC Transport Charges",
    path: "/docs/2025/MECHS-Transport-Charges.pdf",
    size: "950 KB",
    isFeatured: false
  }
];

const CATEGORIES = ["All Resources", "Application Forms", "Fee Structures", "Transport"];

const ResourcesBody = () => {
  const [activeCategory, setActiveCategory] = useState("All Resources");
  const [searchQuery, setSearchQuery] = useState("");
  const gridRef = useRef();

  // Filter Logic
  const filteredResources = MEC_RESOURCES.filter(res => {
    const matchesCategory = activeCategory === "All Resources" || res.category === activeCategory;
    const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredResources = MEC_RESOURCES.filter(res => res.isFeatured);

  // Animate grid items on filter change
  useEffect(() => {
    if (gridRef.current && filteredResources.length > 0) {
      gsap.fromTo(gridRef.current.children, 
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.05, ease: "power2.out", overwrite: true }
      );
    }
  }, [activeCategory, searchQuery, filteredResources.length]);

  return (
    <div className="resources-page-v2">
      
      {/* ─── Premium Hero ─── */}
      <section className="res-hero">
        <img src={imgCampus} alt="MEC Campus" className="res-hero-bg" />
        <div className="res-hero-overlay" />
        <div className="res-hero-content">
          <div className="res-badge">
            <FaFolderOpen style={{ marginRight: 6, color: '#38bdf8' }} /> Admissions Resources
          </div>
          <h1 className="res-hero-title">Everything You Need to Join MEC</h1>
          <p className="res-hero-sub">
            Access all the key documents to help guide your journey at MEC, from application forms to fee structures and enrollment materials. Whether you're planning to join our community or already part of it, these resources are here to support you in every step.
          </p>
        </div>
      </section>

      {/* ─── Search & Filter Toolbar ─── */}
      <div className="res-toolbar">
        <div className="res-search-wrap">
          <FaSearch className="res-search-icon" />
          <input 
            type="text" 
            className="res-search-input" 
            placeholder="Search documents, forms, fee structures..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="res-categories">
          {CATEGORIES.map(cat => (
            <button 
              key={cat} 
              className={`res-cat-btn ${activeCategory === cat ? 'is-active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <main className="res-main-section" id="downloadable-resources">
        
        {/* ─── Featured Resources (Only show if no search/filter applied) ─── */}
        {activeCategory === "All Resources" && searchQuery === "" && (
          <div style={{ marginBottom: '60px' }}>
            <h2 className="res-section-title">Featured Documents</h2>
            <div className="res-grid">
              {featuredResources.map(res => (
                <div className="res-card" key={`feat-${res.id}`} style={{ background: 'rgba(108,43,217,0.1)', borderColor: 'rgba(108,43,217,0.3)' }}>
                  <div className="res-card-top">
                    <div className="res-file-icon"><FaFilePdf /></div>
                    <div className="res-card-info">
                      <h4>{res.title}</h4>
                      <div className="res-meta">
                        <span><FaFolderOpen /> {res.category}</span>
                        <span>• {res.size}</span>
                      </div>
                    </div>
                  </div>
                  <div className="res-card-actions">
                    <a href={res.path} target="_blank" rel="noreferrer" className="res-btn res-btn-preview">
                      <FaEye /> Preview
                    </a>
                    <a href={res.path} download className="res-btn res-btn-download">
                      <FaDownload /> Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── Main Resource Grid ─── */}
        <h2 className="res-section-title">
          {searchQuery ? "Search Results" : activeCategory}
        </h2>
        
        {filteredResources.length > 0 ? (
          <div className="res-grid" ref={gridRef}>
            {filteredResources.map(res => (
              <div className="res-card" key={res.id}>
                <div className="res-card-top">
                  <div className="res-file-icon"><FaFilePdf /></div>
                  <div className="res-card-info">
                    <h4>{res.title}</h4>
                    <div className="res-meta">
                      <span><FaFolderOpen /> {res.category}</span>
                      <span>• {res.size}</span>
                    </div>
                  </div>
                </div>
                <div className="res-card-actions">
                  <a href={res.path} target="_blank" rel="noreferrer" className="res-btn res-btn-preview">
                    <FaEye /> Preview
                  </a>
                  <a href={res.path} download className="res-btn res-btn-download">
                    <FaDownload /> Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="res-empty-state">
            <FaFolderOpen className="res-empty-icon" />
            <h3>No resources found</h3>
            <p>We couldn't find any documents matching "{searchQuery}" in {activeCategory}.</p>
            <button className="nav-apply-btn" style={{ marginTop: '24px' }} onClick={() => {setSearchQuery(''); setActiveCategory('All Resources');}}>
              Clear Filters
            </button>
          </div>
        )}
      </main>

    </div>
  );
};

export default ResourcesBody;