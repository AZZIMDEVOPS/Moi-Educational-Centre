import React from "react";
import FaqsBody from "../components/admissions/FaqsBody";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/navigation/Navbar";
import SEO from "../components/common/SEO";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import "../css/admissions-v2.css";

const FAQs = () => {
  return (
    <>
      <SEO
        title="Frequently Asked Questions (FAQs)"
        description="Find answers to frequently asked questions about admissions, CBC & Cambridge curricula, tuition fees, transport, and campus life at Moi Educational Centre."
        url="/admissions/frequently-asked-questions"
      />
      <Navbar />
      <FaqsBody />

      {/* Floating Quick Contact Actions */}
      <div className="adm-floating-actions">
        <a 
          href="https://wa.me/254706280170" 
          target="_blank" 
          rel="noreferrer" 
          className="adm-float-btn adm-float-whatsapp" 
          aria-label="WhatsApp Admissions"
        >
          <FaWhatsapp />
        </a>
        <a 
          href="tel:+254706280170" 
          className="adm-float-btn adm-float-call" 
          aria-label="Call Admissions"
        >
          <FaPhone />
        </a>
      </div>

      <Footer />
    </>
  );
};

export default FAQs;