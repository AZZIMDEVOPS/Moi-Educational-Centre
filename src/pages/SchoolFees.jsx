import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FaChevronDown, FaDownload, FaFilePdf, FaMobileAlt, FaBuilding, 
  FaCheck, FaCopy, FaCalculator, FaPhone, FaEnvelope, FaShieldAlt, 
  FaGraduationCap, FaBook, FaCheckCircle, FaMoneyBillWave,
  FaCreditCard, FaExclamationTriangle, FaFileAlt, FaHeartbeat, 
  FaMusic, FaPalette, FaPlane
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
    case 'interview': return <FaFileAlt style={{ color: '#3b82f6' }} />;
    case 'admission': return <FaGraduationCap style={{ color: '#8b5cf6' }} />;
    case 'books': return <FaBook style={{ color: '#10b981' }} />;
    case 'caution': return <FaShieldAlt style={{ color: '#f59e0b' }} />;
    case 'music': return <FaMusic style={{ color: '#ec4899' }} />;
    case 'arts': return <FaPalette style={{ color: '#8b5cf6' }} />;
    case 'aviation': return <FaPlane style={{ color: '#0ea5e9' }} />;
    default: return <FaFileAlt style={{ color: '#3b82f6' }} />;
  }
};

const SchoolFees = () => {
  const [activeTab, setActiveTab] = useState("cbe"); // "cbe" | "senior" | "cambridge"
  const [copiedKey, setCopiedKey] = useState(null);
  const location = useLocation();

  // Automatic Tab Switching from AI Deep-Link Anchor Hash
  useEffect(() => {
    if (location.hash) {
      const h = location.hash.toLowerCase();
      if (h.includes("senior") || h.includes("grade-10")) {
        setActiveTab("senior");
      } else if (h.includes("cambridge") || h.includes("year")) {
        setActiveTab("cambridge");
      } else if (h.includes("cbe") || h.includes("grade-") || h.includes("playgroup") || h.includes("pp")) {
        setActiveTab("cbe");
      }
    }
  }, [location.hash]);

  // Live Calculator State
  const [calcCurriculum, setCalcCurriculum] = useState("cbe");
  const [calcGradeIndex, setCalcGradeIndex] = useState(4); // Default Grade 1
  const [includeNewStudentFees, setIncludeNewStudentFees] = useState(true);
  const [selectedSeniorElectives, setSelectedSeniorElectives] = useState([]);

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Calculator Computations
  const getCalcResults = () => {
    if (calcCurriculum === "cbe") {
      const gradeData = CBE_FEES_2026.grades[calcGradeIndex] || CBE_FEES_2026.grades[0];
      const annualTuition = gradeData.total;
      const term1 = gradeData.term1;
      const term2 = gradeData.term2;
      const term3 = gradeData.term3;
      
      let otherTotal = 0;
      if (includeNewStudentFees) {
        otherTotal = CBE_FEES_2026.otherCharges.reduce((acc, curr) => {
          if (curr.item.includes("Grade 7") && !gradeData.grade.includes("GRADE 7")) return acc;
          if (curr.item.includes("Grade 1") && !gradeData.grade.includes("GRADE 1")) return acc;
          return acc + curr.amount;
        }, 0);
      }
      return { grade: gradeData.grade, section: gradeData.section, term1, term2, term3, annualTuition, otherTotal, grandTotal: annualTuition + otherTotal };
    } else if (calcCurriculum === "senior") {
      const annualTuition = SENIOR_SCHOOL_FEES_2026.annualTotal;
      const term1 = SENIOR_SCHOOL_FEES_2026.term1;
      const term2 = SENIOR_SCHOOL_FEES_2026.term2;
      const term3 = SENIOR_SCHOOL_FEES_2026.term3;
      const electiveAnnual = selectedSeniorElectives.reduce((acc, el) => {
        if (el === "Music") return acc + 9000 * 3;
        if (el === "Arts") return acc + 10000 * 3;
        if (el === "Aviation") return acc + 10000 * 3;
        return acc;
      }, 0);
      const otherTotal = includeNewStudentFees ? SENIOR_SCHOOL_FEES_2026.additionalTotal : 2000;
      return { grade: "Grade 10", section: "Senior High School", term1, term2, term3, annualTuition, electiveAnnual, otherTotal, grandTotal: annualTuition + electiveAnnual + otherTotal };
    } else {
      const yearData = CAMBRIDGE_FEES_2026.years[calcGradeIndex] || CAMBRIDGE_FEES_2026.years[0];
      const annualTuition = yearData.total;
      const term1 = yearData.term1;
      const term2 = yearData.term2;
      const term3 = yearData.term3;
      const otherTotal = includeNewStudentFees ? CAMBRIDGE_FEES_2026.otherCharges.reduce((acc, c) => acc + c.amount, 0) : 22000;
      return { grade: yearData.year, section: "Cambridge International", term1, term2, term3, annualTuition, otherTotal, grandTotal: annualTuition + otherTotal };
    }
  };

  const calcResult = getCalcResults();

  return (
    <div className="school-fees-page">
      <SEO
        title="Fee Structure 2026 | Moi Educational Centre"
        description="Official 2026 fee structures for CBE, Senior High School Grade 10, and Cambridge International Curriculum at Moi Educational Centre."
        url="/admissions/fees-structure"
      />
      <Navbar />

      <main id="main-content">
        {/* ─── 1. Hero Banner ─────────────────────────────────── */}
        <section className="fees-hero">
          <img src={imgCampus} alt="MEC Campus" className="fees-hero-bg" />
          <div className="fees-hero-overlay" />
          
          <div className="fees-hero-content">
            <div className="fees-badge">
              <FaCreditCard style={{ color: '#38bdf8', fontSize: '13px', marginRight: '6px' }} />
              Official 2026 Fee Schedule
            </div>
            <h1 className="fees-hero-title">School Fees & Investment 2026</h1>
            <p className="fees-hero-sub">
              Transparent, competitive, and world-class educational value across our CBE, Senior High School, and Cambridge International curricula.
            </p>
            <div className="fees-hero-btns">
              <button onClick={() => scrollToSection("fee-tables")} className="fees-btn-primary">
                Explore Fee Tables <FaChevronDown />
              </button>
              <button onClick={() => scrollToSection("fee-calculator")} className="fees-btn-secondary">
                <FaCalculator /> Interactive Calculator
              </button>
            </div>
          </div>
        </section>

        {/* ─── 2. Fee Tables Container with Tabs ─────────────── */}
        <section className="fees-tables-section" id="fee-tables">
          <div className="fees-container">
            {/* Header */}
            <div className="fees-section-header">
              <span className="fees-section-tag">COMPREHENSIVE PRICING</span>
              <h2>Annual & Termly Fee Structures (2026)</h2>
              <p>Select your curriculum stream to review detailed fee breakdowns and statutory charges.</p>
              
              {/* Tabs */}
              <div className="fees-tab-nav" role="tablist">
                <button
                  className={`fees-tab-btn ${activeTab === "cbe" ? "active" : ""}`}
                  onClick={() => setActiveTab("cbe")}
                  role="tab"
                  aria-selected={activeTab === "cbe"}
                >
                  <span>CBE Primary & Junior School (2026)</span>
                </button>
                <button
                  className={`fees-tab-btn ${activeTab === "senior" ? "active" : ""}`}
                  onClick={() => setActiveTab("senior")}
                  role="tab"
                  aria-selected={activeTab === "senior"}
                >
                  <span className="pill-new">NEW</span>
                  <span>Senior School — Grade 10 (2026)</span>
                </button>
                <button
                  className={`fees-tab-btn ${activeTab === "cambridge" ? "active" : ""}`}
                  onClick={() => setActiveTab("cambridge")}
                  role="tab"
                  aria-selected={activeTab === "cambridge"}
                >
                  <span>Cambridge International 2025/2026</span>
                </button>
              </div>
            </div>

            {/* ─── TAB 1: CBE Curriculum 2026 ─────────────────── */}
            {activeTab === "cbe" && (
              <div className="fees-tab-content" id="cbe-fees-section">
                <div className="fees-table-card">
                  <div className="fees-table-header">
                    <div>
                      <h3 className="fees-table-title">{CBE_FEES_2026.title}</h3>
                      <p className="fees-table-sub">{CBE_FEES_2026.subtitle}</p>
                    </div>
                    <div className="fees-currency-tag">All Figures in KES</div>
                  </div>

                  <div className="fees-table-wrap">
                    <table className="fees-data-table">
                      <thead>
                        <tr>
                          <th>Section</th>
                          <th>Grade Level</th>
                          <th>Term 1 (KES)</th>
                          <th>Term 2 (KES)</th>
                          <th>Term 3 (KES)</th>
                          <th className="th-total">Annual Total (KES)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {CBE_FEES_2026.grades.map((row, idx) => (
                          <tr 
                            key={idx} 
                            id={`fee-row-${row.grade.toLowerCase().replace(/[^a-z0-9]/g, '-')}`} 
                            className={row.grade.includes("GRADE 7") ? "highlight-row" : ""}
                          >
                            <td className="td-section">
                              <span className="section-pill">{row.section}</span>
                            </td>
                            <td className="td-grade"><strong>{row.grade}</strong></td>
                            <td>{row.term1.toLocaleString()}</td>
                            <td>{row.term2.toLocaleString()}</td>
                            <td>{row.term3.toLocaleString()}</td>
                            <td className="td-total">KES {row.total.toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Other Charges */}
                <div className="other-charges-box">
                  <h4 className="other-charges-title">Other Applicable Charges (CBE)</h4>
                  <div className="charges-grid">
                    {CBE_FEES_2026.otherCharges.map((chg, idx) => (
                      <div key={idx} className="charge-item">
                        <span className="charge-icon">{getChargeIcon(chg.type)}</span>
                        <div className="charge-details">
                          <span className="charge-name">{chg.item}</span>
                          <span className="charge-freq">{chg.frequency}</span>
                        </div>
                        <span className="charge-amount">KES {chg.amount.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ─── TAB 2: Senior School Grade 10 (2026) ──────── */}
            {activeTab === "senior" && (
              <div className="fees-tab-content" id="senior-fees-section">
                <div className="senior-fees-hero-card" id="fee-row-grade-10">
                  <div className="senior-header">
                    <div className="senior-badge">
                      <FaGraduationCap style={{ marginRight: '6px' }} />
                      High School Inaugural Class 2026
                    </div>
                    <h3 className="senior-title">{SENIOR_SCHOOL_FEES_2026.title}</h3>
                    <p className="senior-subtitle">{SENIOR_SCHOOL_FEES_2026.subtitle}</p>
                  </div>

                  <div className="senior-terms-grid">
                    <div className="senior-term-card">
                      <span className="term-label">TERM 1</span>
                      <div className="term-amount">KES 100,000</div>
                      <span className="term-note">Payable before day 1</span>
                    </div>
                    <div className="senior-term-card">
                      <span className="term-label">TERM 2</span>
                      <div className="term-amount">KES 100,000</div>
                      <span className="term-note">Payable before day 1</span>
                    </div>
                    <div className="senior-term-card">
                      <span className="term-label">TERM 3</span>
                      <div className="term-amount">KES 75,000</div>
                      <span className="term-note">Payable before day 1</span>
                    </div>
                    <div className="senior-term-card total-card">
                      <span className="term-label">ANNUAL TOTAL</span>
                      <div className="term-amount total">KES 275,000</div>
                      <span className="term-note">Full Year Academic Tuition</span>
                    </div>
                  </div>

                  <div className="senior-inclusions-wrap">
                    <h4>
                      <FaCheckCircle style={{ color: '#10b981', marginRight: '6px' }} />
                      All-Inclusive Standard Package Covers:
                    </h4>
                    <div className="inclusions-grid">
                      {SENIOR_SCHOOL_FEES_2026.inclusions.map((item, idx) => (
                        <div key={idx} className="inclusion-item">
                          <FaCheckCircle className="inc-icon" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Additional Charges & Electives Grid */}
                <div className="senior-extra-grid">
                  <div className="other-charges-box">
                    <h4 className="other-charges-title">One-Time & Annual Additional Charges</h4>
                    <div className="charges-grid">
                      {SENIOR_SCHOOL_FEES_2026.additionalCharges.map((chg, idx) => (
                        <div key={idx} className="charge-item">
                          <span className="charge-icon">{getChargeIcon(chg.type)}</span>
                          <div className="charge-details">
                            <span className="charge-name">{chg.item}</span>
                            <span className="charge-freq">{chg.frequency}</span>
                          </div>
                          <span className="charge-amount">KES {chg.amount.toLocaleString()}</span>
                        </div>
                      ))}
                      <div className="charge-item total-summary-item">
                        <span className="charge-icon"><FaFileAlt /></span>
                        <div className="charge-details">
                          <span className="charge-name"><strong>Total Additional Charges</strong></span>
                        </div>
                        <span className="charge-amount bold">KES {SENIOR_SCHOOL_FEES_2026.additionalTotal.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="electives-box">
                    <h4 className="other-charges-title">Specialized Elective Programmes</h4>
                    <div className="electives-grid">
                      {SENIOR_SCHOOL_FEES_2026.electives.map((el, idx) => (
                        <div key={idx} className="elective-card">
                          <span className="el-icon">{getChargeIcon(el.type)}</span>
                          <div>
                            <span className="el-name">{el.name}</span>
                            <span className="el-cost">{el.cost}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="electives-note">
                      * Specialized electives are billed per term and tailored to the student's career pathway aspirations.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ─── TAB 3: Cambridge International 2025/2026 ─── */}
            {activeTab === "cambridge" && (
              <div className="fees-tab-content" id="cambridge-fees-section">
                <div className="fees-table-card">
                  <div className="fees-table-header">
                    <div>
                      <h3 className="fees-table-title">{CAMBRIDGE_FEES_2026.title}</h3>
                      <p className="fees-table-sub">{CAMBRIDGE_FEES_2026.subtitle}</p>
                    </div>
                    <div className="fees-currency-tag">All Figures in KES</div>
                  </div>

                  <div className="fees-table-wrap">
                    <table className="fees-data-table">
                      <thead>
                        <tr>
                          <th>Year Level</th>
                          <th>Term 1 (KES)</th>
                          <th>Term 2 (KES)</th>
                          <th>Term 3 (KES)</th>
                          <th className="th-total">Annual Total (KES)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {CAMBRIDGE_FEES_2026.years.map((row, idx) => (
                          <tr key={idx} id={`fee-row-${row.year.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                            <td className="td-grade"><strong>{row.year}</strong></td>
                            <td>{row.term1.toLocaleString()}</td>
                            <td>{row.term2.toLocaleString()}</td>
                            <td>{row.term3.toLocaleString()}</td>
                            <td className="td-total">KES {row.total.toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Other Charges */}
                <div className="other-charges-box">
                  <h4 className="other-charges-title">Other Applicable Charges (Cambridge)</h4>
                  <div className="charges-grid">
                    {CAMBRIDGE_FEES_2026.otherCharges.map((chg, idx) => (
                      <div key={idx} className="charge-item">
                        <span className="charge-icon">{getChargeIcon(chg.type)}</span>
                        <div className="charge-details">
                          <span className="charge-name">{chg.item}</span>
                          <span className="charge-freq">{chg.frequency}</span>
                        </div>
                        <span className="charge-amount">KES {chg.amount.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ─── 3. Interactive Fee Calculator Widget ──────────── */}
        <section className="fees-calculator-section" id="fee-calculator">
          <div className="fees-container">
            <div className="calculator-card">
              <div className="calc-header">
                <div className="calc-badge">
                  <FaCalculator /> Interactive Estimate
                </div>
                <h2>Fee Estimate Calculator 2026</h2>
                <p>Customize your child's curriculum pathway, grade level, and electives to calculate termly and annual totals.</p>
              </div>

              <div className="calc-body">
                <div className="calc-inputs">
                  <div className="calc-input-group">
                    <label>1. Select Curriculum Pathway</label>
                    <div className="calc-pill-selector">
                      <button 
                        className={calcCurriculum === "cbe" ? "active" : ""}
                        onClick={() => { setCalcCurriculum("cbe"); setCalcGradeIndex(0); }}
                      >
                        CBE Curriculum
                      </button>
                      <button 
                        className={calcCurriculum === "senior" ? "active" : ""}
                        onClick={() => { setCalcCurriculum("senior"); setCalcGradeIndex(0); }}
                      >
                        Senior School (Grade 10)
                      </button>
                      <button 
                        className={calcCurriculum === "cambridge" ? "active" : ""}
                        onClick={() => { setCalcCurriculum("cambridge"); setCalcGradeIndex(0); }}
                      >
                        Cambridge International
                      </button>
                    </div>
                  </div>

                  {calcCurriculum !== "senior" && (
                    <div className="calc-input-group">
                      <label>2. Select Grade / Year Level</label>
                      <select 
                        className="calc-select" 
                        value={calcGradeIndex} 
                        onChange={(e) => setCalcGradeIndex(Number(e.target.value))}
                      >
                        {calcCurriculum === "cbe" ? (
                          CBE_FEES_2026.grades.map((g, idx) => (
                            <option key={idx} value={idx}>{g.section} — {g.grade}</option>
                          ))
                        ) : (
                          CAMBRIDGE_FEES_2026.years.map((y, idx) => (
                            <option key={idx} value={idx}>{y.year} (Primary)</option>
                          ))
                        )}
                      </select>
                    </div>
                  )}

                  {calcCurriculum === "senior" && (
                    <div className="calc-input-group">
                      <label>2. Optional Senior School Electives</label>
                      <div className="calc-checkbox-group">
                        {[
                          { id: "Music", label: "Music Lessons (Ksh 9,000/term)" },
                          { id: "Arts", label: "Arts & Design (Ksh 10,000/term)" },
                          { id: "Aviation", label: "Aviation Programme (Ksh 10,000/term)" }
                        ].map((el) => (
                          <label key={el.id} className="calc-checkbox-label">
                            <input 
                              type="checkbox"
                              checked={selectedSeniorElectives.includes(el.id)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedSeniorElectives([...selectedSeniorElectives, el.id]);
                                } else {
                                  setSelectedSeniorElectives(selectedSeniorElectives.filter(x => x !== el.id));
                                }
                              }}
                            />
                            <span>{el.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="calc-input-group">
                    <label className="calc-checkbox-label">
                      <input 
                        type="checkbox" 
                        checked={includeNewStudentFees}
                        onChange={(e) => setIncludeNewStudentFees(e.target.checked)}
                      />
                      <span>Include New Student Admission & Caution Fees</span>
                    </label>
                  </div>
                </div>

                {/* Calculator Summary Result */}
                <div className="calc-summary-card">
                  <div className="calc-summary-header">
                    <span className="calc-summary-tag">{calcResult.section}</span>
                    <h3 className="calc-summary-grade">{calcResult.grade}</h3>
                  </div>

                  <div className="calc-breakdown-list">
                    <div className="calc-breakdown-row">
                      <span>Term 1 Tuition:</span>
                      <strong>KES {calcResult.term1.toLocaleString()}</strong>
                    </div>
                    <div className="calc-breakdown-row">
                      <span>Term 2 Tuition:</span>
                      <strong>KES {calcResult.term2.toLocaleString()}</strong>
                    </div>
                    <div className="calc-breakdown-row">
                      <span>Term 3 Tuition:</span>
                      <strong>KES {calcResult.term3.toLocaleString()}</strong>
                    </div>
                    {calcResult.electiveAnnual > 0 && (
                      <div className="calc-breakdown-row highlight">
                        <span>Electives (Annual):</span>
                        <strong>+ KES {calcResult.electiveAnnual.toLocaleString()}</strong>
                      </div>
                    )}
                    {calcResult.otherTotal > 0 && (
                      <div className="calc-breakdown-row">
                        <span>Applicable Other Charges:</span>
                        <strong>+ KES {calcResult.otherTotal.toLocaleString()}</strong>
                      </div>
                    )}
                  </div>

                  <div className="calc-total-box">
                    <span className="calc-total-lbl">ESTIMATED ANNUAL INVESTMENT</span>
                    <div className="calc-total-val">KES {calcResult.grandTotal.toLocaleString()}</div>
                    <span className="calc-total-sub">* Tuition covers lunch, stationery, course books & sports.</span>
                  </div>

                  <Link to="/admissions/admission-process" className="calc-apply-btn">
                    Apply for {calcResult.grade} Now →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4. Verified Payment Channels ──────────────────── */}
        <section className="fees-payment-section" id="payment-channels">
          <div className="fees-container">
            <span className="fees-section-eyebrow">SECURE TRANSACTIONS</span>
            <h2 className="fees-section-title">Official School Payment Methods</h2>
            <p className="fees-section-desc">
              To ensure prompt reconciliation, please use the designated account numbers and M-Pesa format below.
            </p>

            <div className="payment-cards-grid">
              {/* CBE & Cambridge Channel */}
              <div className="payment-channel-card">
                <div className="pc-badge">CBE & Cambridge Primary</div>
                <h3 className="pc-title">Main School Account</h3>

                <div className="pc-item">
                  <div className="pc-item-header">
                    <span className="pc-lbl">M-Pesa Paybill:</span>
                    <button 
                      className="pc-copy-btn"
                      onClick={() => copyToClipboard(PAYMENT_CHANNELS_2026.cbeAndCambridge.schoolFees.mpesaPaybill, "cbe-paybill")}
                    >
                      {copiedKey === "cbe-paybill" ? <FaCheck /> : <FaCopy />}
                      {copiedKey === "cbe-paybill" ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <div className="pc-val">{PAYMENT_CHANNELS_2026.cbeAndCambridge.schoolFees.mpesaPaybill}</div>
                  <div className="pc-format-note">
                    <strong>Account Format:</strong> 7661342#&lt;AdmNo&gt; (e.g. 7661342#00345)
                  </div>
                </div>

                <div className="pc-item">
                  <div className="pc-item-header">
                    <span className="pc-lbl">KCB Bank Transfer:</span>
                    <button 
                      className="pc-copy-btn"
                      onClick={() => copyToClipboard(PAYMENT_CHANNELS_2026.cbeAndCambridge.schoolFees.accountNumber, "cbe-bank")}
                    >
                      {copiedKey === "cbe-bank" ? <FaCheck /> : <FaCopy />}
                      {copiedKey === "cbe-bank" ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <div className="pc-val">{PAYMENT_CHANNELS_2026.cbeAndCambridge.schoolFees.accountNumber}</div>
                  <div className="pc-sub-detail">
                    Beneficiary: Moi Educational Centre | Swift: KCBLKENX | Branch: 01-338
                  </div>
                </div>
              </div>

              {/* Senior High School Channel */}
              <div className="payment-channel-card highlight-channel">
                <div className="pc-badge senior">Senior School (High School)</div>
                <h3 className="pc-title">Senior School Account</h3>

                <div className="pc-item">
                  <div className="pc-item-header">
                    <span className="pc-lbl">M-Pesa Paybill:</span>
                    <button 
                      className="pc-copy-btn"
                      onClick={() => copyToClipboard(PAYMENT_CHANNELS_2026.seniorSchool.schoolFees.mpesaPaybill, "senior-paybill")}
                    >
                      {copiedKey === "senior-paybill" ? <FaCheck /> : <FaCopy />}
                      {copiedKey === "senior-paybill" ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <div className="pc-val">{PAYMENT_CHANNELS_2026.seniorSchool.schoolFees.mpesaPaybill}</div>
                  <div className="pc-format-note">
                    <strong>Account Format:</strong> 7661613#&lt;AdmNo&gt; (e.g. 7661613#00345)
                  </div>
                </div>

                <div className="pc-item">
                  <div className="pc-item-header">
                    <span className="pc-lbl">KCB Bank Transfer:</span>
                    <button 
                      className="pc-copy-btn"
                      onClick={() => copyToClipboard(PAYMENT_CHANNELS_2026.seniorSchool.schoolFees.accountNumber, "senior-bank")}
                    >
                      {copiedKey === "senior-bank" ? <FaCheck /> : <FaCopy />}
                      {copiedKey === "senior-bank" ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <div className="pc-val">{PAYMENT_CHANNELS_2026.seniorSchool.schoolFees.accountNumber}</div>
                  <div className="pc-sub-detail">
                    Beneficiary: Moi Educational Centre | Swift: KCBLKENX | Branch: 01-289
                  </div>
                </div>
              </div>

              {/* Clubs & Trips Channel */}
              <div className="payment-channel-card">
                <div className="pc-badge">Clubs, Trips & Activities</div>
                <h3 className="pc-title">Activities Account</h3>

                <div className="pc-item">
                  <div className="pc-item-header">
                    <span className="pc-lbl">M-Pesa Paybill:</span>
                    <button 
                      className="pc-copy-btn"
                      onClick={() => copyToClipboard(PAYMENT_CHANNELS_2026.cbeAndCambridge.clubsAndTrips.mpesaPaybill, "clubs-paybill")}
                    >
                      {copiedKey === "clubs-paybill" ? <FaCheck /> : <FaCopy />}
                      {copiedKey === "clubs-paybill" ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <div className="pc-val">522533</div>
                  <div className="pc-format-note">
                    <strong>Account Format:</strong> 7785621#&lt;AdmNo&gt; or 7581846#&lt;AdmNo&gt;#&lt;Club&gt;
                  </div>
                </div>

                <div className="pc-item">
                  <div className="pc-item-header">
                    <span className="pc-lbl">KCB Bank Transfer:</span>
                    <button 
                      className="pc-copy-btn"
                      onClick={() => copyToClipboard(PAYMENT_CHANNELS_2026.cbeAndCambridge.clubsAndTrips.accountNumber, "clubs-bank")}
                    >
                      {copiedKey === "clubs-bank" ? <FaCheck /> : <FaCopy />}
                      {copiedKey === "clubs-bank" ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <div className="pc-val">1321340605 / 1314809091</div>
                  <div className="pc-sub-detail">
                    Beneficiary: Moi Educational Centre | Swift: KCBLKENX | Branch: 01-338
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="payment-policy-box">
              <h4>
                <FaExclamationTriangle style={{ color: '#f59e0b', marginRight: '6px' }} />
                Essential Payment Instructions & Policies:
              </h4>
              <ul>
                {PAYMENT_CHANNELS_2026.importantNotes.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ─── 5. Finance Office Contact CTA ─────────────────── */}
        <section className="finance-contact-section" id="finance-contact">
          <div className="fees-container">
            <div className="finance-contact-card">
              <div className="fc-left">
                <span className="fc-badge">DIRECT INQUIRIES</span>
                <h2>Questions About School Fees?</h2>
                <p>
                  Our finance and admissions teams are readily available to assist you with fee schedules, sibling concessions, payment plans, and transport quotes.
                </p>
                <div className="fc-details">
                  <div className="fc-detail-item">
                    <FaPhone className="fc-icon" />
                    <div>
                      <span>Call Accounts Desk:</span>
                      <strong>+254-20-6004155 / 0702 090 213</strong>
                    </div>
                  </div>
                  <div className="fc-detail-item">
                    <FaEnvelope className="fc-icon" />
                    <div>
                      <span>Email Finance:</span>
                      <strong>info@moieducentre.ac.ke</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fc-right">
                <div className="fc-action-card">
                  <h3>Ready to Enroll?</h3>
                  <p>Submit your child's application online or book a personal campus tour.</p>
                  <Link to="/admissions/admission-process" className="fc-btn-apply">
                    Start Online Application →
                  </Link>
                  <Link to="/contact" className="fc-btn-tour">
                    Book Campus Tour
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SchoolFees;
