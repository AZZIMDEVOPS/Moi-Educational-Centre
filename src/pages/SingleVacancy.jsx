import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Navbar from "../components/common/navigation/Navbar";
import Footer from "../components/common/Footer";
import SEO from "../components/common/SEO";
import { jobs } from "../data/jobs";
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaBriefcase, 
  FaMapMarkerAlt, 
  FaUserTie, 
  FaCalendarAlt, 
  FaGraduationCap, 
  FaPaperPlane, 
  FaCopy, 
  FaCheck, 
  FaShieldAlt,
  FaEnvelope,
  FaAward
} from "react-icons/fa";
import "../css/vacancies-v2.css";

const SingleVacancy = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const job = jobs.find(item => item.url_param === title) || jobs[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("recruitment@moieducentre.ac.ke");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!job) {
    return (
      <>
        <Navbar />
        <div style={{ padding: "180px 24px", textAlign: "center", minHeight: "70vh" }}>
          <h2>Position Not Found</h2>
          <p>The vacancy you are looking for may have closed or moved.</p>
          <Link to="/about-MEC/vacancies" className="btn-vacancy-details" style={{ display: 'inline-flex', marginTop: 16 }}>
            Browse All Vacancies
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const mailtoLink = `mailto:recruitment@moieducentre.ac.ke?subject=Application for ${encodeURIComponent(job.title)} Position - [Your Full Name]`;

  return (
    <>
      <SEO 
        title={`${job.title} | Careers at Moi Educational Centre`}
        description={job.summary || `Explore the ${job.title} career opportunity at Moi Educational Centre, Nairobi.`}
      />
      <Navbar />

      <div className="single-vacancy-v2">
        <div className="single-vacancy-container">
          
          {/* Back Button */}
          <Link to="/about-MEC/vacancies" className="btn-back-vacancies">
            <FaArrowLeft size={12} /> Back to All Vacancies
          </Link>

          <div className="vacancy-detail-layout">
            
            {/* Left Column: Full Job Details */}
            <main className="vacancy-main-content">
              
              <div className="vacancy-detail-header">
                <div className="vacancy-header-badges">
                  <span className="vacancy-dept-tag">
                    <FaBriefcase size={11} /> {job.department || "Academic & Operations"}
                  </span>
                  <span className="vacancy-type-tag">
                    {job.type || "Full-Time • Permanent"}
                  </span>
                </div>
                <h1 className="vacancy-detail-title">{job.title}</h1>
                <p className="vacancy-detail-summary">{job.summary}</p>
              </div>

              {/* Key Responsibilities */}
              <section className="vacancy-section-block">
                <h3>
                  <FaBriefcase /> Key Responsibilities & Duties
                </h3>

                {Array.isArray(job.responsibilities) && typeof job.responsibilities[0] === 'object' ? (
                  job.responsibilities.map((respGroup) => (
                    <div className="responsibility-sub-card" key={respGroup.id || respGroup.title}>
                      <h4>{respGroup.title}</h4>
                      <ul>
                        {respGroup.list && respGroup.list.map((item, idx) => (
                          <li key={idx}>
                            <FaCheckCircle className="checklist-icon" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <ul className="vacancy-checklist">
                    {Array.isArray(job.responsibilities) && job.responsibilities.map((item, idx) => (
                      <li key={idx}>
                        <FaCheckCircle className="checklist-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>

              {/* Qualifications & Requirements */}
              {job.qualifications && job.qualifications.length > 0 && (
                <section className="vacancy-section-block">
                  <h3>
                    <FaGraduationCap /> Qualifications & Experience Requirements
                  </h3>
                  <ul className="vacancy-checklist">
                    {job.qualifications.map((qual, idx) => (
                      <li key={idx}>
                        <FaCheckCircle className="checklist-icon" />
                        <span>{qual}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Competencies & Attributes */}
              {job.competencies && job.competencies.length > 0 && (
                <section className="vacancy-section-block">
                  <h3>
                    <FaAward /> Core Competencies & Desired Attributes
                  </h3>
                  <ul className="vacancy-checklist">
                    {job.competencies.map((comp, idx) => (
                      <li key={idx}>
                        <FaCheckCircle className="checklist-icon" />
                        <span>{comp}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Added Advantage */}
              {job.advantage && (
                <section className="vacancy-section-block">
                  <div className="safeguarding-notice-card" style={{ background: '#F0FDF4', borderColor: '#BBF7D0' }}>
                    <h5 style={{ color: '#16A34A' }}>
                      <FaAward /> Added Advantage
                    </h5>
                    <p style={{ color: '#166534', fontSize: '14px' }}>{job.advantage}</p>
                  </div>
                </section>
              )}

            </main>

            {/* Right Column: Sticky Overview & Application Card */}
            <aside className="vacancy-sidebar-sticky">
              
              <div className="vacancy-overview-card">
                <h4>Job Overview</h4>
                
                <div className="overview-list">
                  <div className="overview-item">
                    <FaBriefcase />
                    <div>
                      <strong>Position</strong>
                      <span>{job.title}</span>
                    </div>
                  </div>

                  <div className="overview-item">
                    <FaAward />
                    <div>
                      <strong>Department</strong>
                      <span>{job.department || "Academic & Operations"}</span>
                    </div>
                  </div>

                  {job.reportsTo && (
                    <div className="overview-item">
                      <FaUserTie />
                      <div>
                        <strong>Reports To</strong>
                        <span>{job.reportsTo}</span>
                      </div>
                    </div>
                  )}

                  <div className="overview-item">
                    <FaMapMarkerAlt />
                    <div>
                      <strong>Location</strong>
                      <span>{job.location || "Nairobi, Kenya (South C)"}</span>
                    </div>
                  </div>

                  <div className="overview-item">
                    <FaCalendarAlt />
                    <div>
                      <strong>Application Deadline</strong>
                      <span>{job.deadline || "Rolling / Open"}</span>
                    </div>
                  </div>
                </div>

                <a href={mailtoLink} className="btn-sidebar-apply-now">
                  <FaPaperPlane /> Apply for this Position
                </a>

                {/* Email Copy Mini Box */}
                <div style={{ marginTop: 20, paddingTop: 18, borderTop: '1px solid #F1F5F9' }}>
                  <div style={{ fontSize: '12px', color: '#64748B', marginBottom: 8, fontWeight: 600 }}>
                    Send application directly to:
                  </div>
                  <div className="email-copy-bar" style={{ padding: '6px 10px', background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                    <span className="email-text-code" style={{ color: '#0F172A', fontSize: '12.5px' }}>
                      recruitment@moieducentre.ac.ke
                    </span>
                    <button 
                      className={`btn-copy-email ${copied ? 'copied' : ''}`}
                      onClick={handleCopyEmail}
                      style={{ padding: '6px 12px', fontSize: '11.5px' }}
                    >
                      {copied ? <FaCheck /> : <FaCopy />}
                    </button>
                  </div>
                </div>

              </div>

              {/* Safeguarding & Child Protection Notice */}
              <div className="safeguarding-notice-card">
                <h5>
                  <FaShieldAlt /> Child Safeguarding Policy
                </h5>
                <p>
                  Moi Educational Centre is committed to safeguarding and promoting the welfare of children. All applicants must be willing to undergo enhanced background screening, police clearance, and rigorous reference checks.
                </p>
              </div>

            </aside>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SingleVacancy;