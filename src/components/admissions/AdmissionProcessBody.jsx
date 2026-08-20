import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaChevronDown, FaFileAlt, FaIdCard, FaNotesMedical, FaSchool, FaPenNib, FaCheckCircle, FaRobot, FaMusic, FaFutbol, FaLaptopCode, FaGlobe, FaChevronRight } from "react-icons/fa";
import imgCampus from "../../assets/school2.jpg";
import "../../css/admissions-v2.css";

gsap.registerPlugin(ScrollTrigger);

/* ─── 1. Premium Hero ───────────────────────────────────── */
const AdmissionsHero = () => {
  const heroRef = useRef();

  useEffect(() => {
    gsap.fromTo(".adm-hero-content", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  const scrollToProcess = () => {
    document.getElementById("admissions-timeline").scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToForm = () => {
    document.getElementById("application-form").scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="adm-hero" ref={heroRef}>
      <img src={imgCampus} alt="MEC Campus" className="adm-hero-bg" />
      <div className="adm-hero-overlay" />
      <div className="adm-hero-content">
        <div className="adm-badge">🎓 Admissions Open</div>
        <h1 className="adm-hero-title">Begin Your MEC Journey</h1>
        <p className="adm-hero-sub">
          At Moi Educational Centre, we strive to make the admissions process smooth and straightforward for all prospective learners. Join the MEC family and let your child Strive for Excellence.
        </p>
        <div className="adm-hero-btns">
          <button onClick={scrollToForm} className="nav-apply-btn" style={{ height: '54px', fontSize: '15px' }}>
            Apply Now
          </button>
          <Link to="/contact" className="nav-apply-btn" style={{ height: '54px', fontSize: '15px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', boxShadow: 'none' }}>
            Book a School Tour
          </Link>
        </div>
      </div>
      <div className="edu-scroll-indicator" onClick={scrollToProcess} style={{ cursor: 'pointer' }}>
        Explore Process <FaChevronDown />
      </div>
    </section>
  );
};

/* ─── 2. Interactive Timeline ────────────────────────────── */
const AdmissionsTimeline = () => {
  const containerRef = useRef();
  const fillRef = useRef();
  const stepsRef = useRef([]);

  const steps = [
    {
      title: "Online Application",
      desc: "Start by filling out our Online Admission Form below. Alternatively, you can download the application forms for CBC or Cambridge from our Resources page.",
      icon: "📝"
    },
    {
      title: "Assessment & Interview",
      desc: "Our admissions team will invite the student for a path-specific assessment (CBC Competency check or Cambridge Placement Test). A non-refundable interview fee of KES 2,000 applies at this stage.",
      icon: "🤝"
    },
    {
      title: "Admission Offer",
      desc: "Successful candidates will receive a formal admission letter via email. To secure the slot, parents are required to submit the commitment fee and provide original copies of the student’s required documents.",
      icon: "🎉"
    }
  ];

  useEffect(() => {
    if (fillRef.current && containerRef.current) {
      gsap.to(fillRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1
        }
      });
    }

    stepsRef.current.forEach((step, index) => {
      if (step) {
        gsap.fromTo(step,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          { 
            opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: step, start: "top 75%", toggleClass: "is-active" }
          }
        );
      }
    });
  }, []);

  return (
    <section className="adm-timeline-section" id="admissions-timeline">
      <h2 className="adm-section-title">Your Journey to MEC</h2>
      <div className="adm-timeline-container" ref={containerRef}>
        <div className="adm-timeline-line">
          <div className="adm-timeline-fill" ref={fillRef} />
        </div>
        {steps.map((step, i) => (
          <div className="adm-timeline-step" key={i} ref={el => stepsRef.current[i] = el}>
            <div className="adm-timeline-icon">{step.icon}</div>
            <div className="adm-timeline-content">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ─── 3. Requirements Cards ──────────────────────────────── */
const AdmissionsRequirements = () => {
  const reqs = [
    { icon: <FaIdCard />, title: "Birth Certificate (Copy)" },
    { icon: <FaFileAlt />, title: "Previous School Reports" },
    { icon: <FaNotesMedical />, title: "Immunization Records" },
    { icon: <FaSchool />, title: "Transfer Letter (If applicable)" },
    { icon: <FaPenNib />, title: "Completed Application Form" }
  ];

  return (
    <section className="adm-req-section">
      <h2 className="adm-section-title">Required Documents</h2>
      <div className="adm-req-grid">
        {reqs.map((r, i) => (
          <div className="adm-req-card" key={i}>
            <div className="adm-req-icon">{r.icon}</div>
            <h4>{r.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ─── 4. FAQ Accordion ───────────────────────────────────── */
const AdmissionsFAQ = () => {
  const [open, setOpen] = useState(0);

  const faqs = [
    { q: "How do I apply for admission?", a: "You can apply online by filling out the Admission Form on this page. Our admissions team will review your application and contact you for the next steps." },
    { q: "Are assessments required?", a: "Yes. Once you apply, the student will be invited for a path-specific assessment (CBC Competency check or Cambridge Placement Test)." },
    { q: "What curriculum is offered?", a: "We offer both the Kenyan Competency-Based Curriculum (CBC) and the British Cambridge International Curriculum." },
    { q: "Is transport available?", a: "Yes, we have a reliable fleet of school buses covering various routes across Nairobi." }
  ];

  return (
    <section className="adm-faq-section">
      <h2 className="adm-section-title">Frequently Asked Questions</h2>
      <div className="adm-faq-container">
        {faqs.map((faq, i) => (
          <div className={`adm-faq-item ${open === i ? 'is-open' : ''}`} key={i}>
            <button className="adm-faq-question" onClick={() => setOpen(open === i ? -1 : i)}>
              {faq.q}
              <FaChevronDown style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s' }} />
            </button>
            <div className="adm-faq-answer">{faq.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ─── Main Body Component ────────────────────────────────── */
const AdmissionProcessBody = () => {
  return (
    <div className="admissions-page-v2">
      <AdmissionsHero />
      <AdmissionsTimeline />
      <AdmissionsRequirements />
      <AdmissionsFAQ />
    </div>
  );
};

export default AdmissionProcessBody;