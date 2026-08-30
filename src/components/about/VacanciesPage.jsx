import React, { useState } from "react";
import { Link } from "react-router-dom";
import { jobs } from "../../data/jobs";
import { 
  FaSearch, 
  FaTimes, 
  FaMapMarkerAlt, 
  FaBriefcase, 
  FaGraduationCap, 
  FaArrowRight, 
  FaCheck, 
  FaCopy, 
  FaAward, 
  FaUsers, 
  FaHeartbeat, 
  FaLaptopCode,
  FaEnvelope,
  FaCalendarAlt,
  FaPaperPlane
} from "react-icons/fa";
import SEO from "../common/SEO";
import "../../css/vacancies-v2.css";

const DEPARTMENTS = ["All", "Finance & Accounts", "Senior School Faculty", "Operations & Facilities"];

const WHY_WORK_POINTS = [
  {
    icon: <FaAward />,
    title: "40-Year Heritage of Excellence",
    desc: "Be part of one of Kenya's most respected educational institutions setting national benchmarks in CBC and holistic student formation."
  },
  {
    icon: <FaGraduationCap />,
    title: "Professional Growth & Training",
    desc: "Continuous pedagogical workshops, CBC curriculum certifications, leadership tracks, and sponsored development opportunities."
  },
  {
    icon: <FaLaptopCode />,
    title: "Modern Campus Infrastructure",
    desc: "Spacious smart classrooms, state-of-the-art science labs, tech discovery centers, and semi-Olympic heated sports facilities."
  },
  {
    icon: <FaHeartbeat />,
    title: "Competitive Compensation & Care",
    desc: "Comprehensive medical cover, staff pension scheme, supportive leadership, and a vibrant, collaborative faculty family."
  }
];

const HIRING_STEPS = [
  {
    num: "01",
    title: "Application Submission",
    desc: "Send your cover letter, updated CV, and academic certificates to our official recruitment email."
  },
  {
    num: "02",
    title: "Review & Shortlisting",
    desc: "Our academic and HR panel evaluates credentials against role criteria and contacts qualified candidates."
  },
  {
    num: "03",
    title: "Interview & Demonstration",
    desc: "Participate in a structured competency interview and practical micro-teaching / skills assessment."
  },
  {
    num: "04",
    title: "Offer & Onboarding",
    desc: "Successful candidates receive a formal offer followed by a thorough orientation into the MEC community."
  }
];

const VacanciesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("recruitment@moieducentre.ac.ke");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesDept = selectedDept === "All" || job.department === selectedDept;
    const query = searchTerm.toLowerCase().trim();
    const matchesSearch = 
      !query || 
      job.title.toLowerCase().includes(query) || 
      (job.department && job.department.toLowerCase().includes(query)) ||
      (job.summary && job.summary.toLowerCase().includes(query));
    return matchesDept && matchesSearch;
  });

  return (
    <div className="vacancies-page-v2">
      <SEO 
        title="Careers & Vacancies | Moi Educational Centre"
        description="Join the dedicated faculty and staff at Moi Educational Centre. Explore open career opportunities in teaching, administration, finance, and campus operations."
      />

      {/* 1. Hero Section */}
      <section className="vacancies-hero-v2">
        <div className="vacancies-hero-container">
          <div className="vacancies-eyebrow">
            Careers at Moi Educational Centre
          </div>
          <h1 className="vacancies-hero-title">
            Shape the Future of Education with <span>MEC</span>
          </h1>
          <p className="vacancies-hero-sub">
            Join a distinguished community of passionate educators, administrators, and professionals dedicated to 40 years of academic excellence, character development, and holistic learner success.
          </p>

          <div className="vacancies-metrics-strip">
            <div className="vacancy-metric-box">
              <span className="metric-number">40+</span>
              <span className="metric-label">Years of Excellence</span>
            </div>
            <div className="vacancy-metric-box">
              <span className="metric-number">200+</span>
              <span className="metric-label">Dedicated Staff</span>
            </div>
            <div className="vacancy-metric-box">
              <span className="metric-number">CBC & Cambridge</span>
              <span className="metric-label">World-Class Curricula</span>
            </div>
            <div className="vacancy-metric-box">
              <span className="metric-number">South C</span>
              <span className="metric-label">Nairobi Campus</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Openings Section */}
      <section className="vacancies-main-section" id="open-positions">
        <div className="vacancies-container">
          
          {/* Controls: Search & Category Filter Pills */}
          <div className="vacancies-controls-wrap">
            <div className="vacancies-search-box">
              <FaSearch className="vacancies-search-icon" />
              <input 
                type="text"
                className="vacancies-search-input"
                placeholder="Search positions by title, department, or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  className="vacancies-search-clear" 
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                >
                  <FaTimes />
                </button>
              )}
            </div>

            <div className="vacancies-dept-pills" role="tablist">
              {DEPARTMENTS.map((dept) => {
                const count = dept === "All" 
                  ? jobs.length 
                  : jobs.filter(j => j.department === dept).length;
                return (
                  <button
                    key={dept}
                    role="tab"
                    aria-selected={selectedDept === dept}
                    className={`dept-pill-btn ${selectedDept === dept ? 'active' : ''}`}
                    onClick={() => setSelectedDept(dept)}
                  >
                    <span>{dept}</span>
                    <span className="dept-count-badge">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Heading Row */}
          <div className="open-positions-heading-row">
            <h2>Current Career Opportunities</h2>
            <span className="open-positions-count">
              Showing {filteredJobs.length} of {jobs.length} open position{jobs.length === 1 ? '' : 's'}
            </span>
          </div>

          {/* Vacancy Cards Grid */}
          {filteredJobs.length > 0 ? (
            <div className="vacancies-cards-grid">
              {filteredJobs.map((job) => (
                <div className="vacancy-card-v2" key={job.id}>
                  <div className="vacancy-card-top">
                    <span className="vacancy-dept-tag">
                      <FaBriefcase size={11} /> {job.department || "Academic & Operations"}
                    </span>
                    <span className="vacancy-type-tag">
                      {job.type || "Full-Time • Permanent"}
                    </span>
                  </div>

                  <h3>{job.title}</h3>

                  <div className="vacancy-meta-list">
                    <span className="vacancy-meta-item">
                      <FaMapMarkerAlt /> {job.location || "Nairobi (South C Campus)"}
                    </span>
                    {job.experience && (
                      <span className="vacancy-meta-item">
                        <FaGraduationCap /> {job.experience}
                      </span>
                    )}
                    {job.deadline && (
                      <span className="vacancy-meta-item">
                        <FaCalendarAlt /> {job.deadline}
                      </span>
                    )}
                  </div>

                  <p className="vacancy-summary-text">
                    {job.summary}
                  </p>

                  <div className="vacancy-card-footer">
                    <Link to={job.link} className="btn-vacancy-details">
                      View Details & Apply <FaArrowRight size={12} />
                    </Link>
                    <a 
                      href={`mailto:recruitment@moieducentre.ac.ke?subject=Application for ${encodeURIComponent(job.title)} Position`}
                      className="btn-vacancy-apply-direct"
                    >
                      <FaPaperPlane size={11} /> Quick Apply via Email
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="vacancies-empty-state">
              <FaSearch size={32} style={{ color: '#94A3B8' }} />
              <h3>No matching vacancies found</h3>
              <p>We couldn't find any openings matching "{searchTerm}". Try another search term or reset filters.</p>
              <button 
                className="dept-pill-btn active"
                onClick={() => { setSearchTerm(""); setSelectedDept("All"); }}
              >
                Reset All Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 3. Why Work at MEC Section */}
      <section className="why-work-mec-section">
        <div className="vacancies-container">
          <div className="section-header-center">
            <div className="vacancies-eyebrow" style={{ background: 'rgba(108, 43, 217, 0.08)', color: '#6C2BD9', borderColor: 'rgba(108, 43, 217, 0.2)' }}>
              Faculty & Staff Culture
            </div>
            <h2 className="prog-sec-heading">Why Build Your Career at MEC?</h2>
            <p className="prog-sec-sub">
              We empower our staff with an inspiring, supportive, and growth-oriented work environment where your dedication makes a lasting impact on future leaders.
            </p>
          </div>

          <div className="why-work-grid">
            {WHY_WORK_POINTS.map((pt, idx) => (
              <div className="why-work-card" key={idx}>
                <div className="why-work-icon">
                  {pt.icon}
                </div>
                <h4>{pt.title}</h4>
                <p>{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Hiring Process Timeline */}
      <section className="hiring-process-section">
        <div className="vacancies-container">
          <div className="section-header-center">
            <div className="vacancies-eyebrow" style={{ background: 'rgba(108, 43, 217, 0.08)', color: '#6C2BD9', borderColor: 'rgba(108, 43, 217, 0.2)' }}>
              Transparent & Merit-Based
            </div>
            <h2 className="prog-sec-heading">Our 4-Step Recruitment Journey</h2>
            <p className="prog-sec-sub">
              A structured, respectful process designed to identify passionate talent aligned with our institutional values.
            </p>
          </div>

          <div className="hiring-steps-grid">
            {HIRING_STEPS.map((st, idx) => (
              <div className="hiring-step-card" key={idx}>
                <span className="step-number-badge">Step {st.num}</span>
                <h4>{st.title}</h4>
                <p>{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Application Instructions CTA */}
      <section className="vacancies-cta-section">
        <div className="vacancies-container">
          <div className="vacancies-cta-box">
            <div className="vacancies-cta-left">
              <h2>Don’t See Your Ideal Role? Send an Open Application</h2>
              <p>
                We are always excited to connect with talented educators, subject specialists, and operational leaders. Send your resume and cover letter to our recruitment desk for future consideration across all MEC campuses.
              </p>
              <a 
                href="mailto:recruitment@moieducentre.ac.ke?subject=General Career Enquiry / Speculative Application - Moi Educational Centre" 
                className="btn-cta-apply"
              >
                <FaEnvelope /> Send General Application
              </a>
            </div>

            <div className="copy-email-interactive-box">
              <h4>Official Recruitment Email</h4>
              <p>Please include the specific job title or area of specialization in your email subject line.</p>
              <div className="email-copy-bar">
                <span className="email-text-code">recruitment@moieducentre.ac.ke</span>
                <button 
                  className={`btn-copy-email ${copied ? 'copied' : ''}`}
                  onClick={handleCopyEmail}
                >
                  {copied ? <><FaCheck /> Copied</> : <><FaCopy /> Copy Email</>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default VacanciesPage;