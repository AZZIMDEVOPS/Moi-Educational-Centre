import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FaChevronDown, FaChevronUp, FaDownload, FaFilePdf, FaMobileAlt, 
  FaBuilding, FaCheck, FaCopy, FaCalculator, FaPhone, FaEnvelope, 
  FaShieldAlt, FaGraduationCap, FaBook, FaCheckCircle, FaMoneyBillWave,
  FaCreditCard, FaExclamationTriangle, FaFileAlt, FaHeartbeat, 
  FaMusic, FaPalette, FaPlane, FaSearch, FaArrowRight, FaWhatsapp,
  FaInfoCircle, FaRegClock, FaGlobe
} from "react-icons/fa";
import Navbar from "../components/common/navigation/Navbar";
import Footer from "../components/common/Footer";
import SEO from "../components/common/SEO";
import imgCampus from "../assets/school3.jpg";
import { 
  CBE_FEES_2026, 
  SENIOR_SCHOOL_FEES_2026, 
  CAMBRIDGE_FEES_2026, 
  PAYMENT_CHANNELS_2026 
} from "../data/feeStructures2026";
import "../css/school-fees.css";

const getChargeIcon = (type) => {
  switch (type) {
    case 'medical': return <FaHeartbeat style={{ color: '#ef4444' }} />;
    case 'interview': return <FaFileAlt style={{ color: '#7720E9' }} />;
    case 'admission': return <FaGraduationCap style={{ color: '#0F3D91' }} />;
    case 'books': return <FaBook style={{ color: '#10b981' }} />;
    case 'caution': return <FaShieldAlt style={{ color: '#7720E9' }} />;
    case 'music': return <FaMusic style={{ color: '#8E44AD' }} />;
    case 'arts': return <FaPalette style={{ color: '#7720E9' }} />;
    case 'aviation': return <FaPlane style={{ color: '#0F3D91' }} />;
    default: return <FaFileAlt style={{ color: '#0F3D91' }} />;
  }
};

// Group CBE grades into distinct education levels
const CBE_LEVELS = [
  {
    id: "pre-primary",
    name: "Pre-Primary Section",
    badge: "Early Years · Playgroup to PP2",
    description: "Foundational early childhood education nurturing curiosity, motor skills, and creative play.",
    grades: CBE_FEES_2026.grades.filter(g => g.section === "PRE-PRIMARY")
  },
  {
    id: "lower-primary",
    name: "Lower Primary Section",
    badge: "Grades 1 to 4",
    description: "Competency-based core literacy, numeracy, science, and foundational character building.",
    grades: CBE_FEES_2026.grades.filter(g => g.section === "LOWER PRIMARY")
  },
  {
    id: "upper-primary",
    name: "Upper Primary Section",
    badge: "Grades 5 & 6",
    description: "Advanced primary competencies, project-based learning, and leadership development.",
    grades: CBE_FEES_2026.grades.filter(g => g.section === "UPPER PRIMARY")
  },
  {
    id: "junior-school",
    name: "Junior School Section",
    badge: "Grades 7 to 9 · CBC Comprehensive",
    description: "Middle-level competency exploration across STEM, creative arts, social sciences, and career pathways.",
    grades: CBE_FEES_2026.grades.filter(g => g.section === "JUNIOR SCHOOL")
  }
];

const SchoolFees = () => {
  const location = useLocation();
  const [copiedKey, setCopiedKey] = useState(null);
  const [activeNavSection, setActiveNavSection] = useState("fee-structure");

  // Accordion state for learning levels (all expanded by default for instant visibility)
  const [expandedLevels, setExpandedLevels] = useState({
    "pre-primary": true,
    "lower-primary": true,
    "upper-primary": true,
    "junior-school": true,
    "senior-school": true,
    "cambridge": true
  });

  // "Find Your Child's Fees" interactive selector state
  const [selectedCurriculum, setSelectedCurriculum] = useState("cbe"); // "cbe" | "senior" | "cambridge"
  const [selectedGradeKey, setSelectedGradeKey] = useState("PP1");
  const [includeNewStudentCharges, setIncludeNewStudentCharges] = useState(false);

  // Auto-scroll or tab change from URL hash
  useEffect(() => {
    if (location.hash) {
      const h = location.hash.replace("#", "").toLowerCase();
      if (h.includes("cbe") || h.includes("junior") || h.includes("primary")) {
        setSelectedCurriculum("cbe");
        scrollToSection("fee-structure");
      } else if (h.includes("senior") || h.includes("grade-10") || h.includes("highschool")) {
        setSelectedCurriculum("senior");
        scrollToSection("senior-school-fees");
      } else if (h.includes("cambridge") || h.includes("cie")) {
        setSelectedCurriculum("cambridge");
        scrollToSection("cambridge-fees");
      } else if (h.includes("payment") || h.includes("mpesa") || h.includes("paybill")) {
        scrollToSection("payment-options");
      } else if (h.includes("additional") || h.includes("charges")) {
        scrollToSection("additional-charges");
      } else if (h.includes("download")) {
        scrollToSection("download-fees");
      }
    }
  }, [location.hash]);

  // ScrollSpy for Sticky Quick Navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "fee-structure",
        "cambridge-fees",
        "additional-charges",
        "payment-options",
        "important-info",
        "download-fees"
      ];
      const scrollPos = window.scrollY + 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveNavSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLevel = (id) => {
    setExpandedLevels(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleAllLevels = (expand = true) => {
    setExpandedLevels({
      "pre-primary": expand,
      "lower-primary": expand,
      "upper-primary": expand,
      "junior-school": expand,
      "senior-school": expand,
      "cambridge": expand
    });
  };

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Compute selected fee highlight card for "Find Your Child's Fees"
  const getSelectedFeeData = () => {
    if (selectedCurriculum === "cbe") {
      const grade = CBE_FEES_2026.grades.find(g => g.grade === selectedGradeKey) || CBE_FEES_2026.grades[2];
      let addl = 0;
      if (includeNewStudentCharges) {
        addl = CBE_FEES_2026.otherCharges.reduce((acc, curr) => {
          if (curr.item.includes("Grade 7") && !grade.grade.includes("GRADE 7")) return acc;
          if (curr.item.includes("Grade 1") && !grade.grade.includes("GRADE 1")) return acc;
          return acc + curr.amount;
        }, 0);
      }
      return {
        title: grade.grade,
        level: grade.section,
        curriculum: "CBC / National System",
        term1: grade.term1,
        term2: grade.term2,
        term3: grade.term3,
        tuitionAnnual: grade.total,
        additional: addl,
        grandTotal: grade.total + addl,
        sectionId: "cbe-section"
      };
    } else if (selectedCurriculum === "senior") {
      const addl = includeNewStudentCharges ? SENIOR_SCHOOL_FEES_2026.additionalTotal : 0;
      return {
        title: "Grade 10 (Senior High School)",
        level: "Senior Secondary",
        curriculum: "CBC Senior School 3-Pathways",
        term1: SENIOR_SCHOOL_FEES_2026.term1,
        term2: SENIOR_SCHOOL_FEES_2026.term2,
        term3: SENIOR_SCHOOL_FEES_2026.term3,
        tuitionAnnual: SENIOR_SCHOOL_FEES_2026.annualTotal,
        additional: addl,
        grandTotal: SENIOR_SCHOOL_FEES_2026.annualTotal + addl,
        sectionId: "senior-school-fees"
      };
    } else {
      const yr = CAMBRIDGE_FEES_2026.years.find(y => y.year === selectedGradeKey) || CAMBRIDGE_FEES_2026.years[0];
      const addl = includeNewStudentCharges ? CAMBRIDGE_FEES_2026.otherCharges.reduce((acc, c) => acc + c.amount, 0) : 0;
      return {
        title: yr.year,
        level: "Cambridge Primary",
        curriculum: "British International (CAIE)",
        term1: yr.term1,
        term2: yr.term2,
        term3: yr.term3,
        tuitionAnnual: yr.total,
        additional: addl,
        grandTotal: yr.total + addl,
        sectionId: "cambridge-fees"
      };
    }
  };

  const selectedData = getSelectedFeeData();

  return (
    <div className="school-fees-page">
      <SEO
        title="2026 Fee Structure | Moi Educational Centre"
        description="Official 2026 fee breakdown for Pre-Primary, Lower Primary, Upper Primary, Junior School, Senior School Grade 10, and Cambridge International Curriculum at Moi Educational Centre."
        url="/admissions/fees"
      />
      <Navbar />

      <main id="main-content">
        {/* ─── 1. HERO SECTION (Requirement 2) ────────────────── */}
        <section className="fees-hero">
          <img src={imgCampus} alt="Moi Educational Centre Campus" className="fees-hero-bg" />
          <div className="fees-hero-overlay" />
          
          <div className="fees-hero-content">
            {/* Breadcrumb */}
            <nav className="fees-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-sep">/</span>
              <Link to="/education">Admissions</Link>
              <span className="breadcrumb-sep">/</span>
              <span className="breadcrumb-current">Fees</span>
            </nav>

            <div className="fees-hero-badge">
              <span className="badge-pulse-dot" />
              <span>Official 2026 Academic Schedule</span>
            </div>

            <h1 className="fees-hero-title">2026 Fee Structure</h1>
            <p className="fees-hero-sub">
              Plan confidently with a clear breakdown of MEC's 2026 school fees, additional charges and payment options.
            </p>

            <div className="fees-hero-btns">
              <Link to="/admissions/admission-process" className="fees-btn-primary">
                Apply to MEC <FaArrowRight />
              </Link>
              <button onClick={() => scrollToSection("download-fees")} className="fees-btn-secondary">
                <FaDownload /> Download Fee Structure
              </button>
            </div>
          </div>
        </section>

        {/* ─── 2. STICKY QUICK NAVIGATION (Requirement 3) ─────── */}
        <nav className="fees-quick-nav" aria-label="Quick section navigation">
          <div className="fees-container quick-nav-inner">
            <button
              className={`quick-nav-pill ${activeNavSection === "fee-structure" ? "active" : ""}`}
              onClick={() => scrollToSection("fee-structure")}
            >
              Fee Structure
            </button>
            <button
              className={`quick-nav-pill ${activeNavSection === "cambridge-fees" ? "active" : ""}`}
              onClick={() => scrollToSection("cambridge-fees")}
            >
              Cambridge Curriculum
            </button>
            <button
              className={`quick-nav-pill ${activeNavSection === "additional-charges" ? "active" : ""}`}
              onClick={() => scrollToSection("additional-charges")}
            >
              Additional Charges
            </button>
            <button
              className={`quick-nav-pill ${activeNavSection === "payment-options" ? "active" : ""}`}
              onClick={() => scrollToSection("payment-options")}
            >
              Payment Options
            </button>
            <button
              className={`quick-nav-pill ${activeNavSection === "important-info" ? "active" : ""}`}
              onClick={() => scrollToSection("important-info")}
            >
              Important Information
            </button>
            <button
              className={`quick-nav-pill ${activeNavSection === "download-fees" ? "active" : ""}`}
              onClick={() => scrollToSection("download-fees")}
            >
              Downloads
            </button>
          </div>
        </nav>

        {/* ─── 3. "FIND YOUR CHILD'S FEES" EXPERIENCE (Requirement 7) ─ */}
        <section className="fees-finder-section" id="find-fees">
          <div className="fees-container">
            <div className="finder-card">
              <div className="finder-left">
                <div className="finder-badge">
                  <FaSearch />
                  <span>Instant Fee Finder</span>
                </div>
                <h2 className="finder-title">Find Your Child's Fees</h2>
                <p className="finder-subtitle">
                  Select your desired curriculum and grade level to immediately view the termly breakdown and total annual investment.
                </p>

                {/* Curriculum Selector Pills */}
                <div className="finder-curriculum-pills" role="radiogroup" aria-label="Curriculum selection">
                  <button
                    className={`curr-pill ${selectedCurriculum === "cbe" ? "active" : ""}`}
                    onClick={() => {
                      setSelectedCurriculum("cbe");
                      setSelectedGradeKey("PP1");
                    }}
                  >
                    CBE Primary & Junior School
                  </button>
                  <button
                    className={`curr-pill ${selectedCurriculum === "senior" ? "active" : ""}`}
                    onClick={() => {
                      setSelectedCurriculum("senior");
                      setSelectedGradeKey("Grade 10");
                    }}
                  >
                    Senior School (Grade 10)
                  </button>
                  <button
                    className={`curr-pill ${selectedCurriculum === "cambridge" ? "active" : ""}`}
                    onClick={() => {
                      setSelectedCurriculum("cambridge");
                      setSelectedGradeKey("Year 1");
                    }}
                  >
                    Cambridge International
                  </button>
                </div>

                {/* Grade Dropdown Selector */}
                {selectedCurriculum !== "senior" && (
                  <div className="finder-select-row">
                    <label htmlFor="grade-select" className="finder-label">Select Grade / Year Level:</label>
                    <select
                      id="grade-select"
                      className="finder-dropdown"
                      value={selectedGradeKey}
                      onChange={(e) => setSelectedGradeKey(e.target.value)}
                    >
                      {selectedCurriculum === "cbe" ? (
                        CBE_FEES_2026.grades.map((g, idx) => (
                          <option key={idx} value={g.grade}>
                            {g.section} — {g.grade}
                          </option>
                        ))
                      ) : (
                        CAMBRIDGE_FEES_2026.years.map((y, idx) => (
                          <option key={idx} value={y.year}>
                            Cambridge International — {y.year}
                          </option>
                        ))
                      )}
                    </select>
                  </div>
                )}

                {/* Optional Checkbox */}
                <label className="finder-checkbox-label">
                  <input
                    type="checkbox"
                    checked={includeNewStudentCharges}
                    onChange={(e) => setIncludeNewStudentCharges(e.target.checked)}
                  />
                  <span>Include One-Time Admission & Caution Fees</span>
                </label>
              </div>

              {/* Instant Highlight Result Card */}
              <div className="finder-right">
                <div className="finder-result-card">
                  <div className="result-header">
                    <div>
                      <span className="result-level-tag">{selectedData.level}</span>
                      <h3 className="result-grade-name">{selectedData.title}</h3>
                    </div>
                    <span className="result-curr-tag">{selectedData.curriculum}</span>
                  </div>

                  <div className="result-terms-grid">
                    <div className="result-term-item">
                      <span className="term-name">Term 1</span>
                      <span className="term-val">KES {selectedData.term1.toLocaleString()}</span>
                    </div>
                    <div className="result-term-item">
                      <span className="term-name">Term 2</span>
                      <span className="term-val">KES {selectedData.term2.toLocaleString()}</span>
                    </div>
                    <div className="result-term-item">
                      <span className="term-name">Term 3</span>
                      <span className="term-val">KES {selectedData.term3.toLocaleString()}</span>
                    </div>
                  </div>

                  {includeNewStudentCharges && selectedData.additional > 0 && (
                    <div className="result-additional-row">
                      <span>One-Time New Student Fees:</span>
                      <strong>+ KES {selectedData.additional.toLocaleString()}</strong>
                    </div>
                  )}

                  {/* ANNUAL TOTAL — STRONGEST VISUAL HIERARCHY */}
                  <div className="result-annual-banner">
                    <div className="annual-banner-label">TOTAL ANNUAL INVESTMENT</div>
                    <div className="annual-banner-amount">
                      KES {selectedData.grandTotal.toLocaleString()}
                    </div>
                    <div className="annual-banner-note">
                      * Tuition covers lunch, stationery, course books & swimming.
                    </div>
                  </div>

                  <div className="result-actions">
                    <Link to="/admissions/admission-process" className="result-btn-apply">
                      Apply for {selectedData.title} <FaArrowRight />
                    </Link>
                    <button
                      className="result-btn-view"
                      onClick={() => scrollToSection(selectedData.sectionId)}
                    >
                      View Full Level Section ↓
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4. MAIN FEE STRUCTURE (Requirements 4, 5, 6, 8) ─── */}
        <section className="fees-main-structure-section" id="fee-structure">
          <div className="fees-container">
            {/* Section Header */}
            <div className="fees-intro-header">
              <span className="fees-eyebrow">COMPREHENSIVE BREAKDOWN</span>
              <h2 className="fees-intro-title">2026 School Fees</h2>
              <p className="fees-intro-sub">
                Explore the fee structure for each learning level at Moi Educational Centre. All figures are in Kenya Shillings (KES).
              </p>

              {/* Accordion Controls for Quick Toggle */}
              <div className="accordion-toggle-bar">
                <button className="toggle-all-btn" onClick={() => toggleAllLevels(true)}>
                  Expand All Sections
                </button>
                <button className="toggle-all-btn" onClick={() => toggleAllLevels(false)}>
                  Collapse All Sections
                </button>
              </div>
            </div>

            {/* Learning Level Sections */}
            <div className="learning-levels-wrapper">
              {CBE_LEVELS.map((lvl) => {
                const isExpanded = expandedLevels[lvl.id];
                return (
                  <div key={lvl.id} className={`level-accordion-card ${isExpanded ? "open" : ""}`} id={`level-${lvl.id}`}>
                    {/* Level Accordion Header */}
                    <button
                      className="level-header-btn"
                      onClick={() => toggleLevel(lvl.id)}
                      aria-expanded={isExpanded}
                    >
                      <div className="level-header-left">
                        <span className="level-indicator-icon">
                          {lvl.id === "pre-primary" && <FaHeartbeat />}
                          {lvl.id === "lower-primary" && <FaBook />}
                          {lvl.id === "upper-primary" && <FaGraduationCap />}
                          {lvl.id === "junior-school" && <FaShieldAlt />}
                        </span>
                        <div>
                          <div className="level-title-row">
                            <h3 className="level-title">{lvl.name}</h3>
                            <span className="level-badge">{lvl.badge}</span>
                          </div>
                          <p className="level-description">{lvl.description}</p>
                        </div>
                      </div>
                      <div className="level-header-right">
                        <span className="level-count">{lvl.grades.length} Grades</span>
                        <span className="level-chevron">
                          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                        </span>
                      </div>
                    </button>

                    {/* Level Content (Grid of Cards) */}
                    {isExpanded && (
                      <div className="level-content-body">
                        <div className="grade-cards-grid">
                          {lvl.grades.map((grd, gIdx) => (
                            <div key={gIdx} className="grade-fee-card" id={`fee-card-${grd.grade.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                              <div className="grade-card-top">
                                <span className="grade-section-tag">{grd.section}</span>
                                <h4 className="grade-name">{grd.grade}</h4>
                              </div>

                              <div className="grade-terms-breakdown">
                                <div className="term-row">
                                  <span className="t-name">Term 1</span>
                                  <span className="t-val">KES {grd.term1.toLocaleString()}</span>
                                </div>
                                <div className="term-row">
                                  <span className="t-name">Term 2</span>
                                  <span className="t-val">KES {grd.term2.toLocaleString()}</span>
                                </div>
                                <div className="term-row">
                                  <span className="t-name">Term 3</span>
                                  <span className="t-val">KES {grd.term3.toLocaleString()}</span>
                                </div>
                              </div>

                              {/* ANNUAL TOTAL — STRONGEST PROMINENCE */}
                              <div className="grade-annual-total-card">
                                <span className="annual-total-label">ANNUAL TOTAL</span>
                                <span className="annual-total-value">KES {grd.total.toLocaleString()}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* ─── SENIOR HIGH SCHOOL GRADE 10 (NEW 2026 CLASS) ─── */}
              <div className={`level-accordion-card senior-school-card ${expandedLevels["senior-school"] ? "open" : ""}`} id="senior-school-fees">
                <button
                  className="level-header-btn senior-header-btn"
                  onClick={() => toggleLevel("senior-school")}
                  aria-expanded={expandedLevels["senior-school"]}
                >
                  <div className="level-header-left">
                    <span className="level-indicator-icon senior-icon">
                      <FaGraduationCap />
                    </span>
                    <div>
                      <div className="level-title-row">
                        <h3 className="level-title">{SENIOR_SCHOOL_FEES_2026.title}</h3>
                        <span className="level-badge senior-badge">High School · Inaugural 2026 Class</span>
                      </div>
                      <p className="level-description">{SENIOR_SCHOOL_FEES_2026.subtitle} — STEM, Arts & Social Science Pathways</p>
                    </div>
                  </div>
                  <div className="level-header-right">
                    <span className="level-chevron">
                      {expandedLevels["senior-school"] ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </div>
                </button>

                {expandedLevels["senior-school"] && (
                  <div className="level-content-body">
                    <div className="senior-highlight-grid">
                      {/* Senior Grade Card */}
                      <div className="grade-fee-card senior-fee-card">
                        <div className="grade-card-top">
                          <span className="grade-section-tag senior">Senior High School</span>
                          <h4 className="grade-name">Grade 10</h4>
                        </div>

                        <div className="grade-terms-breakdown">
                          <div className="term-row">
                            <span className="t-name">Term 1</span>
                            <span className="t-val">KES {SENIOR_SCHOOL_FEES_2026.term1.toLocaleString()}</span>
                          </div>
                          <div className="term-row">
                            <span className="t-name">Term 2</span>
                            <span className="t-val">KES {SENIOR_SCHOOL_FEES_2026.term2.toLocaleString()}</span>
                          </div>
                          <div className="term-row">
                            <span className="t-name">Term 3</span>
                            <span className="t-val">KES {SENIOR_SCHOOL_FEES_2026.term3.toLocaleString()}</span>
                          </div>
                        </div>

                        <div className="grade-annual-total-card senior-total">
                          <span className="annual-total-label">ANNUAL TOTAL</span>
                          <span className="annual-total-value">KES {SENIOR_SCHOOL_FEES_2026.annualTotal.toLocaleString()}</span>
                        </div>
                      </div>

                      {/* Package Inclusions */}
                      <div className="senior-inclusions-box">
                        <h4 className="inclusions-title">
                          <FaCheckCircle style={{ color: '#10b981' }} />
                          All-Inclusive Standard Package Covers:
                        </h4>
                        <div className="inclusions-list">
                          {SENIOR_SCHOOL_FEES_2026.inclusions.map((item, idx) => (
                            <div key={idx} className="inclusion-chip">
                              <FaCheck className="inc-tick" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                        <p className="inclusions-note">
                          * Payable on or before the first day of each term. Club fees and specialized electives are billed separately.
                        </p>
                      </div>
                    </div>

                    {/* Specialized Electives */}
                    <div className="electives-section">
                      <h4 className="electives-title">Optional Specialized Career Electives</h4>
                      <div className="electives-grid">
                        {SENIOR_SCHOOL_FEES_2026.electives.map((el, idx) => (
                          <div key={idx} className="elective-card">
                            <span className="el-icon">{getChargeIcon(el.type)}</span>
                            <div>
                              <div className="el-name">{el.name}</div>
                              <div className="el-cost">{el.cost}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 5. CAMBRIDGE INTERNATIONAL SECTION (Requirement 9) ── */}
        <section className="fees-cambridge-section" id="cambridge-fees">
          <div className="fees-container">
            <div className={`level-accordion-card cambridge-card ${expandedLevels["cambridge"] ? "open" : ""}`}>
              <button
                className="level-header-btn cambridge-header-btn"
                onClick={() => toggleLevel("cambridge")}
                aria-expanded={expandedLevels["cambridge"]}
              >
                <div className="level-header-left">
                  <span className="level-indicator-icon cambridge-icon">
                    <FaGlobe />
                  </span>
                  <div>
                    <div className="level-title-row">
                      <h3 className="level-title">{CAMBRIDGE_FEES_2026.title}</h3>
                      <span className="level-badge cambridge-badge">British International · CAIE Accredited</span>
                    </div>
                    <p className="level-description">{CAMBRIDGE_FEES_2026.subtitle} — Global benchmarks, checkpoint preparation</p>
                  </div>
                </div>
                <div className="level-header-right">
                  <span className="level-count">Year 1 to Year 6</span>
                  <span className="level-chevron">
                    {expandedLevels["cambridge"] ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
              </button>

              {expandedLevels["cambridge"] && (
                <div className="level-content-body">
                  <div className="grade-cards-grid cambridge-grid">
                    {CAMBRIDGE_FEES_2026.years.map((yr, idx) => (
                      <div key={idx} className="grade-fee-card cambridge-fee-card" id={`fee-card-${yr.year.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                        <div className="grade-card-top">
                          <span className="grade-section-tag cambridge">Cambridge Primary</span>
                          <h4 className="grade-name">{yr.year}</h4>
                        </div>

                        <div className="grade-terms-breakdown">
                          <div className="term-row">
                            <span className="t-name">Term 1</span>
                            <span className="t-val">KES {yr.term1.toLocaleString()}</span>
                          </div>
                          <div className="term-row">
                            <span className="t-name">Term 2</span>
                            <span className="t-val">KES {yr.term2.toLocaleString()}</span>
                          </div>
                          <div className="term-row">
                            <span className="t-name">Term 3</span>
                            <span className="t-val">KES {yr.term3.toLocaleString()}</span>
                          </div>
                        </div>

                        <div className="grade-annual-total-card cambridge-total">
                          <span className="annual-total-label">ANNUAL TOTAL</span>
                          <span className="annual-total-value">KES {yr.total.toLocaleString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ─── 6. ADDITIONAL CHARGES SECTION (Requirement 10) ─── */}
        <section className="fees-additional-section" id="additional-charges">
          <div className="fees-container">
            <div className="fees-section-header">
              <span className="fees-eyebrow">STATUTORY & ONE-TIME EXPENSES</span>
              <h2 className="fees-intro-title">Additional Charges</h2>
              <p className="fees-intro-sub">
                Clear, transparent overview of one-time entry fees, annual statutory costs, and refundable deposits.
              </p>
            </div>

            <div className="additional-charges-grid-wrapper">
              {/* CBE / Primary Additional Charges */}
              <div className="charges-category-card">
                <div className="cat-header">
                  <h3 className="cat-title">CBE Primary & Junior School Charges</h3>
                  <span className="cat-pill">Pre-Primary to Grade 9</span>
                </div>
                <div className="charges-table-rows">
                  {CBE_FEES_2026.otherCharges.map((chg, idx) => (
                    <div key={idx} className="charge-row-item">
                      <div className="chg-left">
                        <span className="chg-icon-circle">{getChargeIcon(chg.type)}</span>
                        <div>
                          <div className="chg-name">{chg.item}</div>
                          <div className="chg-freq">{chg.frequency} payment</div>
                        </div>
                      </div>
                      <div className="chg-amount">KES {chg.amount.toLocaleString()}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Senior School Additional Charges */}
              <div className="charges-category-card highlight-cat">
                <div className="cat-header">
                  <h3 className="cat-title">Senior High School (Grade 10) Charges</h3>
                  <span className="cat-pill senior">Grade 10 Entry</span>
                </div>
                <div className="charges-table-rows">
                  {SENIOR_SCHOOL_FEES_2026.additionalCharges.map((chg, idx) => (
                    <div key={idx} className="charge-row-item">
                      <div className="chg-left">
                        <span className="chg-icon-circle">{getChargeIcon(chg.type)}</span>
                        <div>
                          <div className="chg-name">{chg.item}</div>
                          <div className="chg-freq">{chg.frequency} payment</div>
                        </div>
                      </div>
                      <div className="chg-amount">KES {chg.amount.toLocaleString()}</div>
                    </div>
                  ))}
                  <div className="charge-row-item total-row">
                    <div className="chg-left">
                      <strong>Total One-Time / Annual Entry Charges</strong>
                    </div>
                    <div className="chg-amount bold">
                      KES {SENIOR_SCHOOL_FEES_2026.additionalTotal.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Cambridge Additional Charges */}
              <div className="charges-category-card">
                <div className="cat-header">
                  <h3 className="cat-title">Cambridge International Curriculum</h3>
                  <span className="cat-pill cambridge">Year 1 to Year 6</span>
                </div>
                <div className="charges-table-rows">
                  {CAMBRIDGE_FEES_2026.otherCharges.map((chg, idx) => (
                    <div key={idx} className="charge-row-item">
                      <div className="chg-left">
                        <span className="chg-icon-circle">{getChargeIcon(chg.type)}</span>
                        <div>
                          <div className="chg-name">{chg.item}</div>
                          <div className="chg-freq">{chg.frequency} payment</div>
                        </div>
                      </div>
                      <div className="chg-amount">KES {chg.amount.toLocaleString()}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 7. PAYMENT OPTIONS (Requirements 11 & 12) ───────── */}
        <section className="fees-payment-section" id="payment-options">
          <div className="fees-container">
            <div className="fees-section-header">
              <span className="fees-eyebrow">VERIFIED CHANNELS</span>
              <h2 className="fees-intro-title">How to Pay</h2>
              <p className="fees-intro-sub">
                Official payment options for school fees, clubs, and educational excursions. Please use the exact account numbers for prompt reconciliation.
              </p>
            </div>

            <div className="payment-options-grid">
              {/* M-PESA Card */}
              <div className="payment-card mpesa-card">
                <div className="pay-card-header">
                  <div className="pay-icon-box mpesa">
                    <FaMobileAlt />
                  </div>
                  <div>
                    <h3 className="pay-card-title">M-PESA Paybill</h3>
                    <p className="pay-card-sub">Instant mobile payment via Safaricom</p>
                  </div>
                </div>

                <div className="pay-detail-box">
                  <div className="pay-key-val">
                    <span className="key-lbl">Business / Paybill Number:</span>
                    <div className="key-copy-row">
                      <strong className="key-large">522533</strong>
                      <button
                        className={`copy-btn ${copiedKey === "paybill" ? "copied" : ""}`}
                        onClick={() => copyToClipboard("522533", "paybill")}
                        aria-label="Copy M-Pesa Paybill number"
                      >
                        {copiedKey === "paybill" ? <FaCheck /> : <FaCopy />}
                        <span>{copiedKey === "paybill" ? "Copied ✓" : "Copy"}</span>
                      </button>
                    </div>
                  </div>

                  <div className="account-formats-list">
                    <div className="acc-format-item">
                      <span className="acc-label">1. Primary & Cambridge School Fees Account:</span>
                      <div className="acc-code-row">
                        <code>7661342#&lt;5-Digit-Adm-No&gt;</code>
                        <button
                          className={`copy-btn-sm ${copiedKey === "cbe-acc-format" ? "copied" : ""}`}
                          onClick={() => copyToClipboard("7661342#", "cbe-acc-format")}
                          title="Copy prefix 7661342#"
                        >
                          {copiedKey === "cbe-acc-format" ? "Copied ✓" : "Copy Prefix"}
                        </button>
                      </div>
                      <span className="acc-example">Example: <strong>7661342#00345</strong></span>
                    </div>

                    <div className="acc-format-item">
                      <span className="acc-label">2. Senior School (Grade 10) Fees Account:</span>
                      <div className="acc-code-row">
                        <code>7661613#&lt;5-Digit-Adm-No&gt;</code>
                        <button
                          className={`copy-btn-sm ${copiedKey === "senior-acc-format" ? "copied" : ""}`}
                          onClick={() => copyToClipboard("7661613#", "senior-acc-format")}
                          title="Copy prefix 7661613#"
                        >
                          {copiedKey === "senior-acc-format" ? "Copied ✓" : "Copy Prefix"}
                        </button>
                      </div>
                      <span className="acc-example">Example: <strong>7661613#00345</strong></span>
                    </div>

                    <div className="acc-format-item">
                      <span className="acc-label">3. Clubs, Trips & Excursions Account:</span>
                      <div className="acc-code-row">
                        <code>7785621#&lt;5-Digit-Adm-No&gt;</code>
                        <button
                          className={`copy-btn-sm ${copiedKey === "clubs-acc-format" ? "copied" : ""}`}
                          onClick={() => copyToClipboard("7785621#", "clubs-acc-format")}
                          title="Copy prefix 7785621#"
                        >
                          {copiedKey === "clubs-acc-format" ? "Copied ✓" : "Copy Prefix"}
                        </button>
                      </div>
                      <span className="acc-example">Example: <strong>7785621#00345</strong> or <strong>7581846#00345#Soccer</strong></span>
                    </div>
                  </div>
                </div>

                <div className="mpesa-steps-list">
                  <div className="step-title">Quick M-PESA Steps:</div>
                  <ol>
                    <li>Go to M-PESA on your SIM Toolkit or M-Pesa App</li>
                    <li>Select <strong>Lipa na M-PESA</strong> → <strong>Paybill</strong></li>
                    <li>Enter Business Number <strong>522533</strong></li>
                    <li>Enter Account Number format as shown above with student Adm No</li>
                    <li>Enter the exact amount and confirm with your M-PESA PIN</li>
                  </ol>
                </div>
              </div>

              {/* Bank Transfer Card */}
              <div className="payment-card bank-card">
                <div className="pay-card-header">
                  <div className="pay-icon-box bank">
                    <FaBuilding />
                  </div>
                  <div>
                    <h3 className="pay-card-title">Bank-to-Bank Transfer</h3>
                    <p className="pay-card-sub">KCB Bank direct deposits, RTGS, EFT & Cheques</p>
                  </div>
                </div>

                <div className="bank-accounts-stack">
                  {/* Account 1: CBE & Cambridge */}
                  <div className="bank-acc-item">
                    <div className="acc-type-header">
                      <span className="acc-type-tag">Primary & Cambridge School Fees</span>
                    </div>
                    <div className="acc-field-row">
                      <span className="f-lbl">Account Number:</span>
                      <div className="f-val-copy">
                        <strong>1282818309</strong>
                        <button
                          className={`copy-btn-sm ${copiedKey === "bank-primary" ? "copied" : ""}`}
                          onClick={() => copyToClipboard("1282818309", "bank-primary")}
                        >
                          {copiedKey === "bank-primary" ? "Copied ✓" : "Copy"}
                        </button>
                      </div>
                    </div>
                    <div className="acc-meta-grid">
                      <div><span>Beneficiary:</span> Moi Educational Centre</div>
                      <div><span>Bank:</span> KCB Bank Kenya</div>
                      <div><span>Branch:</span> 01-338</div>
                      <div><span>Swift Code:</span> KCBLKENX</div>
                    </div>
                  </div>

                  {/* Account 2: Senior High School */}
                  <div className="bank-acc-item senior-acc">
                    <div className="acc-type-header">
                      <span className="acc-type-tag senior">Senior High School (Grade 10)</span>
                    </div>
                    <div className="acc-field-row">
                      <span className="f-lbl">Account Number:</span>
                      <div className="f-val-copy">
                        <strong>1268406880</strong>
                        <button
                          className={`copy-btn-sm ${copiedKey === "bank-senior" ? "copied" : ""}`}
                          onClick={() => copyToClipboard("1268406880", "bank-senior")}
                        >
                          {copiedKey === "bank-senior" ? "Copied ✓" : "Copy"}
                        </button>
                      </div>
                    </div>
                    <div className="acc-meta-grid">
                      <div><span>Beneficiary:</span> Moi Educational Centre</div>
                      <div><span>Bank:</span> KCB Bank Kenya</div>
                      <div><span>Branch:</span> 01-289</div>
                      <div><span>Swift Code:</span> KCBLKENX</div>
                    </div>
                  </div>

                  {/* Account 3: Clubs & Trips */}
                  <div className="bank-acc-item">
                    <div className="acc-type-header">
                      <span className="acc-type-tag">Clubs, Trips & Activities Account</span>
                    </div>
                    <div className="acc-field-row">
                      <span className="f-lbl">Account Number:</span>
                      <div className="f-val-copy">
                        <strong>1321340605 / 1314809091</strong>
                        <button
                          className={`copy-btn-sm ${copiedKey === "bank-clubs" ? "copied" : ""}`}
                          onClick={() => copyToClipboard("1321340605", "bank-clubs")}
                        >
                          {copiedKey === "bank-clubs" ? "Copied ✓" : "Copy"}
                        </button>
                      </div>
                    </div>
                    <div className="acc-meta-grid">
                      <div><span>Beneficiary:</span> Moi Educational Centre</div>
                      <div><span>Bank:</span> KCB Bank Kenya</div>
                      <div><span>Branch:</span> 01-338</div>
                      <div><span>Swift Code:</span> KCBLKENX</div>
                    </div>
                  </div>
                </div>

                <div className="bank-agent-note">
                  <strong>Over the Counter / KCB Agent Deposits:</strong> When filling the deposit slip, clearly indicate the <em>Student's Admission Number</em> under the reference field and NOT the student's name.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 8. IMPORTANT INFORMATION & POLICIES (Requirement 13) ── */}
        <section className="fees-policies-section" id="important-info">
          <div className="fees-container">
            <div className="policies-wrapper-card">
              <div className="policies-header">
                <FaInfoCircle className="pol-icon" />
                <div>
                  <h3 className="policies-title">Important Information & Payment Policies</h3>
                  <p className="policies-sub">Essential guidelines to ensure smooth registration and account reconciliation.</p>
                </div>
              </div>

              <div className="policies-cards-grid">
                <div className="policy-block">
                  <div className="policy-block-title">
                    <FaRegClock /> Fee Payment Deadlines
                  </div>
                  <p>
                    All termly fees must be paid in full on or before the first day of each respective academic term. Students are admitted to class with an official school clearance receipt.
                  </p>
                </div>

                <div className="policy-block">
                  <div className="policy-block-title">
                    <FaCreditCard /> Student Admission Reference
                  </div>
                  <p>
                    Always indicate your child's 5-digit student admission number in the payment reference field. This ensures automated and instantaneous reconciliation to the learner's student ledger.
                  </p>
                </div>

                <div className="policy-block">
                  <div className="policy-block-title">
                    <FaBuilding /> Bankers' Cheques & Cheque Policy
                  </div>
                  <p>
                    Cheque payments must strictly be made via <strong>Bankers' Cheques</strong> drawn in favor of <em>"Moi Educational Centre"</em>. Personal or company cheques are not accepted under school financial policy.
                  </p>
                </div>

                <div className="policy-block">
                  <div className="policy-block-title">
                    <FaShieldAlt /> Non-Refundable Policy & Caution Deposit
                  </div>
                  <p>
                    School fees once paid is strictly non-refundable. Caution money is refundable upon written one-term withdrawal notice and clearance of any lost books or equipment damages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 9. DOWNLOAD FEE STRUCTURE (Requirement 14) ──────── */}
        <section className="fees-download-section" id="download-fees">
          <div className="fees-container">
            <div className="download-cta-card">
              <div className="dl-content-left">
                <div className="dl-badge">
                  <FaFilePdf /> Official PDF Documents
                </div>
                <h2 className="dl-title">Need the Complete Fee Structure?</h2>
                <p className="dl-sub">
                  Download the official 2026 fee structure documents for your family budgeting, employer sponsorship, or educational records.
                </p>

                <div className="dl-documents-grid">
                  <a
                    href="/docs/2025/MECHS-primary-school-fee-structure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dl-doc-btn"
                  >
                    <FaFilePdf className="doc-pdf-icon" />
                    <div className="doc-info">
                      <span className="doc-name">2026 Primary & Junior School Fees</span>
                      <span className="doc-meta">Official PDF · 850 KB</span>
                    </div>
                    <FaDownload className="doc-dl-icon" />
                  </a>

                  <a
                    href="/docs/2025/MECHS-high-school-fees-structure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dl-doc-btn"
                  >
                    <FaFilePdf className="doc-pdf-icon" />
                    <div className="doc-info">
                      <span className="doc-name">2026 Senior School Grade 10 Fees</span>
                      <span className="doc-meta">Official PDF · 820 KB</span>
                    </div>
                    <FaDownload className="doc-dl-icon" />
                  </a>

                  <a
                    href="/docs/2025/MECHS-cambridge-fees-structure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dl-doc-btn"
                  >
                    <FaFilePdf className="doc-pdf-icon" />
                    <div className="doc-info">
                      <span className="doc-name">2025/2026 Cambridge Curriculum Fees</span>
                      <span className="doc-meta">Official PDF · 830 KB</span>
                    </div>
                    <FaDownload className="doc-dl-icon" />
                  </a>

                  <a
                    href="/docs/2025/MECHS-2026-F3-and-F4-fees-structure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dl-doc-btn"
                  >
                    <FaFilePdf className="doc-pdf-icon" />
                    <div className="doc-info">
                      <span className="doc-name">2026 Form 3 & Form 4 Fees (8-4-4)</span>
                      <span className="doc-meta">Official PDF · 790 KB</span>
                    </div>
                    <FaDownload className="doc-dl-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10. ADMISSIONS CTA (Requirement 15) ─────────────── */}
        <section className="fees-admissions-cta-section">
          <div className="fees-container">
            <div className="admissions-cta-card">
              <div className="cta-left">
                <span className="cta-eyebrow">DEDICATED ENROLLMENT DESK</span>
                <h2 className="cta-title">Have questions about fees?</h2>
                <p className="cta-description">
                  Our Admissions and Accounts team is ready to help you make the right choice for your child, discuss payment schedules, and schedule your personal campus tour.
                </p>

                <div className="cta-contact-details">
                  <div className="cta-contact-chip">
                    <FaPhone />
                    <span>+254-20-6004155 / 0702 090 213</span>
                  </div>
                  <div className="cta-contact-chip">
                    <FaEnvelope />
                    <span>info@moieducentre.ac.ke</span>
                  </div>
                  <div className="cta-contact-chip">
                    <FaBuilding />
                    <span>Nairobi Campus, Off Lang'ata Road</span>
                  </div>
                </div>
              </div>

              <div className="cta-right">
                <div className="cta-actions-vertical">
                  <Link to="/admissions/admission-process" className="cta-btn-primary">
                    Apply to MEC Now <FaArrowRight />
                  </Link>
                  <Link to="/contact" className="cta-btn-secondary">
                    <FaPhone /> Contact Admissions
                  </Link>
                  <a
                    href="https://wa.me/254706280170?text=Hello%20MEC%20Admissions%2C%20I%20have%20an%20inquiry%20regarding%20the%202026%20Fee%20Structure."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn-whatsapp"
                  >
                    <FaWhatsapp /> Chat with Admissions Desk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 11. MOBILE BOTTOM STICKY ACTION BAR (Requirement 16) ─ */}
        <div className="fees-mobile-bottom-bar" aria-label="Mobile quick actions">
          <button
            className="mobile-bar-btn outline"
            onClick={() => scrollToSection("download-fees")}
          >
            <FaDownload /> Download Fees
          </button>
          <Link to="/admissions/admission-process" className="mobile-bar-btn primary">
            Apply Now <FaArrowRight />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SchoolFees;
