import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaChevronDown, FaDownload, FaFilePdf, FaMobileAlt, FaBuilding, FaCreditCard, FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import Navbar from "../components/common/navigation/Navbar";
import Footer from "../components/common/Footer";
import SEO from "../components/common/SEO";
import imgCampus from "../assets/school3.jpg"; // Using a beautiful campus image
import "../css/school-fees.css";

gsap.registerPlugin(ScrollTrigger);

const feeStructure = [
  { level: 'Pre-Primary', tuition: '85,000', activity: '15,000', total: '100,000' },
  { level: 'Lower Primary', tuition: '105,000', activity: '18,000', total: '123,000' },
  { level: 'Upper Primary', tuition: '125,000', activity: '20,000', total: '145,000' },
  { level: 'Junior School', tuition: '150,000', activity: '25,000', total: '175,000' },
  { level: 'Senior School', tuition: '180,000', activity: '30,000', total: '210,000' },
];

/* ─── 1. Premium Hero ───────────────────────────────────── */
const FeesHero = () => {
  const heroRef = useRef();

  useEffect(() => {
    gsap.fromTo(".fees-hero-content", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  const scrollToFees = () => {
    document.getElementById("fee-tables").scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById("finance-contact").scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="fees-hero" ref={heroRef}>
      <img src={imgCampus} alt="MEC Campus" className="fees-hero-bg" />
      <div className="fees-hero-overlay" />
      <div className="fees-hero-content">
        <div className="fees-badge">💳 Admissions & Finance</div>
        <h1 className="fees-hero-title">School Fees & Payment Information</h1>
        <p className="fees-hero-sub">
          At Moi Educational Centre, we are committed to providing a transparent, world-class education. Below you will find our official fee structures, payment methods, and financial policies.
        </p>
        <div className="fees-hero-btns">
          <button onClick={scrollToFees} className="nav-apply-btn" style={{ height: '54px', fontSize: '15px' }}>
            View Fee Structure <FaChevronDown />
          </button>
          <button onClick={scrollToContact} className="nav-apply-btn" style={{ height: '54px', fontSize: '15px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', boxShadow: 'none' }}>
            Contact Finance Office
          </button>
        </div>
      </div>
    </section>
  );
};

/* ─── 2. Responsive Fee Tables ──────────────────────────── */
const FeesTables = () => {
  const tableRef = useRef();

  useEffect(() => {
    gsap.fromTo(tableRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: tableRef.current, start: "top 80%" } }
    );
  }, []);

  return (
    <section className="fees-table-section" id="fee-tables">
      <h2 className="fees-section-title">Fee Structure 2025</h2>
      <div className="fees-table-container" ref={tableRef}>
        <div className="fees-table-wrapper">
          <table className="fees-table">
            <thead>
              <tr>
                <th>School Level</th>
                <th>Tuition Fee (KES)</th>
                <th>Activity Fee (KES)</th>
                <th>Total per Term (KES)</th>
              </tr>
            </thead>
            <tbody>
              {feeStructure.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.level}</td>
                  <td>{item.tuition}</td>
                  <td>{item.activity}</td>
                  <td className="total-col">{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', marginTop: '24px', fontSize: '14px' }}>
        * Fees are subject to review. Please download the official fee structure PDF for detailed breakdown and policies.
      </p>
    </section>
  );
};

/* ─── 3. Payment Methods ────────────────────────────────── */
const PaymentMethods = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.6, delay: index * 0.1, scrollTrigger: { trigger: card, start: "top 85%" } }
        );
      }
    });
  }, []);

  return (
    <section className="fees-payment-section">
      <h2 className="fees-section-title">Payment Options</h2>
      <div className="payment-grid">
        <div className="payment-card" ref={el => cardsRef.current[0] = el}>
          <FaMobileAlt className="payment-icon" />
          <h3>M-Pesa Paybill</h3>
          <p>You can pay securely via M-Pesa. Please ensure you include the student's admission number as the account number.</p>
          <div className="payment-instructions">
            Paybill: 123456<br />
            Account: [Student Adm No]
          </div>
        </div>
        
        <div className="payment-card" ref={el => cardsRef.current[1] = el}>
          <FaBuilding className="payment-icon" />
          <h3>Bank Transfer</h3>
          <p>Direct deposits or EFTs to the official school bank accounts. Retain your bank slip for verification.</p>
          <div className="payment-instructions">
            Bank: Standard Chartered<br />
            Branch: Langata<br />
            Acc: 01020304050600
          </div>
        </div>

        <div className="payment-card" ref={el => cardsRef.current[2] = el}>
          <FaCreditCard className="payment-icon" />
          <h3>Parent Portal</h3>
          <p>Log in to the Parent Portal to pay securely via Debit/Credit card or track your payment history.</p>
          <div className="payment-instructions" style={{ border: 'none', paddingTop: 0 }}>
            <Link to="/parent-dashboard" style={{ color: '#D8B4FE', textDecoration: 'none', fontWeight: 'bold' }}>Login to Portal &rarr;</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── 4. Download Center ────────────────────────────────── */
const DownloadCenter = () => {
  const files = [
    { name: 'Official Fee Structure 2025.pdf', size: '1.2 MB' },
    { name: 'Financial Policies & Refunds.pdf', size: '850 KB' },
    { name: 'Transport & Routes Info.pdf', size: '3.1 MB' }
  ];

  return (
    <section className="fees-downloads-section">
      <h2 className="fees-section-title">Downloadable Resources</h2>
      <div className="downloads-grid">
        {files.map((file, i) => (
          <a href="#" className="download-card" key={i}>
            <div className="download-info">
              <FaFilePdf className="download-icon" />
              <div>
                <h4>{file.name}</h4>
                <p>{file.size}</p>
              </div>
            </div>
            <FaDownload className="download-btn" />
          </a>
        ))}
      </div>
    </section>
  );
};

/* ─── 5. Finance Contact ────────────────────────────────── */
const FinanceContact = () => {
  return (
    <section className="fees-contact-section" id="finance-contact">
      <div className="finance-contact-card">
        <h2>Finance Office Support</h2>
        <p>If you have any questions regarding billing, payment plans, or your account statement, our Finance team is here to help.</p>
        
        <div className="finance-contact-info">
          <div className="fc-item">
            <FaPhone className="fc-icon" />
            <span>+254 706 280 170</span>
            <small>Mon-Fri, 8:00 AM - 4:00 PM</small>
          </div>
          <div className="fc-item">
            <FaEnvelope className="fc-icon" />
            <span>finance@mec.ac.ke</span>
            <small>Average response time: 2 hrs</small>
          </div>
          <div className="fc-item">
            <FaMapMarkerAlt className="fc-icon" />
            <span>Main Campus</span>
            <small>Admin Block, Ground Floor</small>
          </div>
        </div>

        <button className="nav-apply-btn" style={{ height: '54px', padding: '0 40px' }} onClick={() => window.location.href = 'mailto:finance@mec.ac.ke'}>
          Email Finance Office
        </button>
      </div>
    </section>
  );
};

/* ─── Main Page ─────────────────────────────────────────── */
const SchoolFees = () => {
  return (
    <div className="school-fees-page">
      <SEO 
        title="School Fees & Payment | MEC"
        description="View Moi Educational Centre's official fee structures, payment options, and financial policies."
      />
      <Navbar />
      
      <main>
        <FeesHero />
        <FeesTables />
        <PaymentMethods />
        <DownloadCenter />
        <FinanceContact />
      </main>

      {/* Floating Actions */}
      <div className="adm-floating-actions">
        <a href="https://wa.me/254706280170" target="_blank" rel="noreferrer" className="adm-float-btn adm-float-whatsapp" aria-label="WhatsApp Finance">
          <FaWhatsapp />
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default SchoolFees;
