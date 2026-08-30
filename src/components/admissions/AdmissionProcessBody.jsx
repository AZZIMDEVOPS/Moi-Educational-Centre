import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaChevronDown, FaFileAlt, FaIdCard, FaNotesMedical, FaSchool, 
  FaPenNib, FaCheckCircle, FaUserGraduate, FaCalendarAlt, 
  FaPassport, FaDownload, FaPhone, FaEnvelope, FaWhatsapp, FaArrowRight, FaStar,
  FaEdit, FaUserCheck, FaAward, FaGlobe 
} from "react-icons/fa";
import imgCampus from "../../assets/school2.jpg";
import "../../css/admissions-v2.css";

/* ─── 1. Admissions Hero Banner ──────────────────────────── */
const AdmissionsHero = () => {
  const scrollToForm = () => {
    document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="adm-hero" id="admissions-hero">
      <img src={imgCampus} alt="MEC Campus" className="adm-hero-bg" />
      <div className="adm-hero-overlay" />
      
      <div className="adm-hero-content">
        <div className="adm-badge">
          <FaStar style={{ color: '#f59e0b', marginRight: 6 }} /> 2026 Admissions Open | Playgroup to Grade 10 & Cambridge
        </div>
        <h1 className="adm-hero-title">Begin Your MEC Journey in 2026</h1>
        <p className="adm-hero-sub">
          Join one of Kenya's most prestigious learning institutions. Choose between our dual excellence pathways—Kenyan CBC & British Cambridge International—backed by 40 years of holistic excellence.
        </p>

        <div className="adm-hero-btns">
          <button onClick={scrollToForm} className="adm-btn-primary">
            Apply Online for 2026 <FaArrowRight />
          </button>
          <Link to="/admissions/fees" className="adm-btn-secondary">
            View 2026 Fee Structure
          </Link>
          <Link to="/contact" className="adm-btn-outline">
            Book a School Tour
          </Link>
        </div>

        {/* Quick Trust Highlights */}
        <div className="adm-hero-stats">
          <div className="adm-h-stat">
            <strong>40+</strong>
            <span>Years of Excellence</span>
          </div>
          <div className="adm-h-stat">
            <strong>100%</strong>
            <span>Secondary Transition</span>
          </div>
          <div className="adm-h-stat">
            <strong>CBC & Cambridge</strong>
            <span>Dual Curricula Options</span>
          </div>
          <div className="adm-h-stat">
            <strong>Top 10</strong>
            <span>National Rank</span>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── 2. Interactive Admissions Steps ────────────────────── */
const AdmissionsSteps = () => {
  const steps = [
    {
      num: "01",
      title: "Submit Online Application",
      desc: "Complete the online application form below or download the physical form. Provide basic student and parent details along with desired entry grade.",
      Icon: FaEdit,
      time: "Step 1"
    },
    {
      num: "02",
      title: "Assessment & Learner Evaluation",
      desc: "Prospective learners attend a friendly, age-appropriate assessment (CBC competency check or Cambridge placement evaluation). An assessment fee of KES 2,000 applies.",
      Icon: FaUserCheck,
      time: "Step 2"
    },
    {
      num: "03",
      title: "Formal Offer of Admission",
      desc: "Successful candidates receive an official admission letter and fee invoice via email. Secure your child's slot by paying the commitment fee before the deadline.",
      Icon: FaAward,
      time: "Step 3"
    },
    {
      num: "04",
      title: "Orientation & Induction",
      desc: "Receive the complete welcome pack, uniform fitting schedule, transport route confirmation, and attend our parent-student orientation day.",
      Icon: FaUserGraduate,
      time: "Step 4"
    }
  ];

  return (
    <section className="adm-timeline-section" id="admissions-timeline">
      <div className="adm-container">
        <div className="adm-section-header">
          <span className="adm-eyebrow">STEP-BY-STEP PROCESS</span>
          <h2 className="adm-section-title">How Admissions Work at MEC</h2>
          <p className="adm-section-desc">
            A seamless, transparent 4-step admission journey designed to support your family every step of the way.
          </p>
        </div>

        <div className="adm-steps-grid">
          {steps.map((step, i) => (
            <div className="adm-step-card" key={i}>
              <div className="adm-step-top">
                <span className="adm-step-num">{step.num}</span>
                <span className="adm-step-icon" style={{ fontSize: 22, color: '#7720E9' }}>
                  <step.Icon />
                </span>
              </div>
              <span className="adm-step-time">{step.time}</span>
              <h3 className="adm-step-title">{step.title}</h3>
              <p className="adm-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── 3. Dual Pathway Choice Advisor ─────────────────────── */
const CurriculumChoiceSection = () => {
  return (
    <section className="adm-pathways-section" id="curriculum-choice">
      <div className="adm-container">
        <div className="adm-section-header">
          <span className="adm-eyebrow">CHOOSE YOUR PATHWAY</span>
          <h2 className="adm-section-title">CBC vs Cambridge at Moi Educational Centre</h2>
          <p className="adm-section-desc">
            We provide world-class dual learning tracks tailored to your child's learning style and future aspirations.
          </p>
        </div>

        <div className="adm-pathway-cards">
          {/* CBC Pathway */}
          <div className="adm-path-card cbc-card">
            <div className="path-badge cbc">
              <FaCheckCircle style={{ color: '#16a34a', marginRight: 6 }} /> National Framework
            </div>
            <h3 className="path-title">Competency-Based Curriculum (CBC)</h3>
            <p className="path-desc">
              Holistic, learner-centered education focusing on practical competence, critical thinking, values, and community service.
            </p>
            
            <div className="path-features">
              <div className="path-feature-item">
                <FaCheckCircle className="path-icon" />
                <span><strong>Levels:</strong> Playgroup, Reception, PP1–PP2, Grades 1–9, Senior High School Grade 10</span>
              </div>
              <div className="path-feature-item">
                <FaCheckCircle className="path-icon" />
                <span><strong>Assessment:</strong> Formative CBC KPSEA & KJSEA National Evaluations</span>
              </div>
              <div className="path-feature-item">
                <FaCheckCircle className="path-icon" />
                <span><strong>Focus:</strong> STEM, Creative Arts, Leadership, Sports Academies & Robotics</span>
              </div>
            </div>

            <div className="path-cta">
              <Link to="/education" className="path-link">Explore CBC Pathway Details →</Link>
            </div>
          </div>

          {/* Cambridge Pathway */}
          <div className="adm-path-card cambridge-card">
            <div className="path-badge cambridge">
              <FaGlobe style={{ color: '#2563eb', marginRight: 6 }} /> International Framework
            </div>
            <h3 className="path-title">Cambridge International Curriculum</h3>
            <p className="path-desc">
              Globally recognized British curriculum fostering intellectual curiosity, independent inquiry, and direct global university pathways.
            </p>

            <div className="path-features">
              <div className="path-feature-item">
                <FaCheckCircle className="path-icon cambridge-icon" />
                <span><strong>Levels:</strong> Early Years & Primary (Year 1 to Year 6) with direct secondary progression</span>
              </div>
              <div className="path-feature-item">
                <FaCheckCircle className="path-icon cambridge-icon" />
                <span><strong>Assessment:</strong> Cambridge Primary Checkpoint & International Benchmarking</span>
              </div>
              <div className="path-feature-item">
                <FaCheckCircle className="path-icon cambridge-icon" />
                <span><strong>Focus:</strong> Global Perspective, Rigorous Science, English & Mathematics</span>
              </div>
            </div>

            <div className="path-cta">
              <Link to="/education/cambridge-system" className="path-link">Explore Cambridge Pathway Details →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── 4. Required Documentation Checklist ─────────────────── */
const AdmissionsRequirements = () => {
  const reqs = [
    { icon: <FaIdCard />, title: "Birth Certificate", desc: "Clear copy of the learner's official birth certificate." },
    { icon: <FaFileAlt />, title: "Previous Academic Reports", desc: "Termly progress report cards from the previous two academic terms." },
    { icon: <FaNotesMedical />, title: "Medical / Immunization Card", desc: "Copy of child immunization and certified medical history." },
    { icon: <FaPassport />, title: "2 Passport-Size Photographs", desc: "Recent color passport photos of the learner with name on reverse." },
    { icon: <FaSchool />, title: "Transfer Letter & NEMIS UPI", desc: "Official clearance letter and UPI number for primary transfers." },
    { icon: <FaPenNib />, title: "Duly Filled Application Form", desc: "Completed online application or physical admission booklet." }
  ];

  return (
    <section className="adm-req-section" id="required-documents">
      <div className="adm-container">
        <div className="adm-section-header">
          <span className="adm-eyebrow">DOCUMENTATION</span>
          <h2 className="adm-section-title">Required Application Documents</h2>
          <p className="adm-section-desc">
            Please have digital copies or physical originals ready when submitting your application.
          </p>
        </div>

        <div className="adm-req-grid">
          {reqs.map((r, i) => (
            <div className="adm-req-card" key={i}>
              <div className="adm-req-icon">{r.icon}</div>
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── 5. Admissions FAQ Accordion ─────────────────────────── */
const AdmissionsFAQ = () => {
  const [open, setOpen] = useState(0);

  const faqs = [
    { 
      q: "When do applications for the 2026 academic year open?", 
      a: "Admissions for the 2026 academic year are currently ongoing across Playgroup, Pre-Primary, Lower/Upper Primary, Junior School (Grades 7–9), Senior School (Grade 10), and Cambridge Year 1–6. Early applications are strongly encouraged as spaces fill up quickly." 
    },
    { 
      q: "What is the assessment format for new applicants?", 
      a: "Assessments are designed to gauge the learner's readiness and foundational numeracy, literacy, and social competencies. For Cambridge students, an international placement test is administered. Assessments are warm, supportive, and child-centered." 
    },
    { 
      q: "Can I transfer my child mid-term or mid-year?", 
      a: "Yes, mid-term transfers are considered subject to vacancy in the requested grade level and satisfactory academic records from the previous school." 
    },
    { 
      q: "Are school bus transport services provided across Nairobi?", 
      a: "Yes, Moi Educational Centre operates an extensive fleet of modern school buses covering South C, South B, Lang'ata, Karen, Nairobi West, Kilimani, Kileleshwa, Upper Hill, Parklands, Syokimau, and surrounding areas." 
    },
    { 
      q: "How are school fees paid?", 
      a: "School fees can be paid securely via our official M-Pesa Paybill (522123) using the student's admission number or through direct bank transfer. Full payment options are detailed on our School Fees page." 
    }
  ];

  return (
    <section className="adm-faq-section">
      <div className="adm-container">
        <div className="adm-section-header">
          <span className="adm-eyebrow">HAVE QUESTIONS?</span>
          <h2 className="adm-section-title">Frequently Asked Admissions Questions</h2>
        </div>

        <div className="adm-faq-container">
          {faqs.map((faq, i) => (
            <div className={`adm-faq-item ${open === i ? 'is-open' : ''}`} key={i}>
              <button className="adm-faq-question" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{faq.q}</span>
                <FaChevronDown style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s' }} />
              </button>
              <div className="adm-faq-answer">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Main Body Component ────────────────────────────────── */
const AdmissionProcessBody = () => {
  return (
    <div className="admissions-body-wrap">
      <AdmissionsHero />
      <AdmissionsSteps />
      <CurriculumChoiceSection />
      <AdmissionsRequirements />
      <AdmissionsFAQ />
    </div>
  );
};

export default AdmissionProcessBody;