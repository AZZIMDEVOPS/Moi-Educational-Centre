import React, { useState, useEffect } from "react";
import Navbar from "../components/common/navigation/Navbar";
import Footer from "../components/common/Footer";
import SEO from "../components/common/SEO";
import "../css/chairman-v2.css";

// Components
import ChairmanHero from "../components/chairman/v2/ChairmanHero";
import ChairmanEditorial from "../components/chairman/v2/ChairmanEditorial";
import ChairmanPullquote from "../components/chairman/v2/ChairmanPullquote";
import ChairmanThemes from "../components/chairman/v2/ChairmanThemes";
import ChairmanMissionVision from "../components/chairman/v2/ChairmanMissionVision";
import ChairmanCTA from "../components/chairman/v2/ChairmanCTA";

import { FaArrowUp } from "react-icons/fa";
import imgChair from "../assets/peter-chair.jpg";

const WordFromChairman = () => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeNav, setActiveNav] = useState("hero-overview");

  // Scroll listener for reading progress & active navigation
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setReadingProgress((currentScroll / totalScroll) * 100);
      }
      setShowBackToTop(currentScroll > 400);

      // Section tracking for sticky sub-nav
      const sections = ["hero-overview", "chairman-message-body", "key-quote", "core-pillars", "mission-vision", "continue-exploring"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveNav(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="ch-page-root">
      {/* 1. Top Reading Progress Bar */}
      <div 
        className="ch-top-progress-bar" 
        style={{ width: `${readingProgress}%` }} 
      />

      <SEO 
        title="Word from Our Chairman | Moi Educational Centre"
        description="Read the official institutional address from Mr. Paul K. Chemng'orem, Board Chairman of Moi Educational Centre, reflecting on 40 years of excellence, CBC pathways, and holistic child development."
        image={imgChair}
        url="/about-MEC/word-from-our-chairman"
      />
      <Navbar />

      {/* 2. Sticky Sub-Nav */}
      <nav className="ch-sticky-subnav" aria-label="Chairman Message Navigation">
        <div className="ch-subnav-container">
          <button 
            className={`ch-subnav-link ${activeNav === "hero-overview" ? "active" : ""}`}
            onClick={() => scrollToSection("hero-overview")}
          >
            Overview
          </button>
          <button 
            className={`ch-subnav-link ${activeNav === "chairman-message-body" ? "active" : ""}`}
            onClick={() => scrollToSection("chairman-message-body")}
          >
            Board Address
          </button>
          <button 
            className={`ch-subnav-link ${activeNav === "key-quote" ? "active" : ""}`}
            onClick={() => scrollToSection("key-quote")}
          >
            Core Quote
          </button>
          <button 
            className={`ch-subnav-link ${activeNav === "core-pillars" ? "active" : ""}`}
            onClick={() => scrollToSection("core-pillars")}
          >
            Strategic Pillars
          </button>
          <button 
            className={`ch-subnav-link ${activeNav === "mission-vision" ? "active" : ""}`}
            onClick={() => scrollToSection("mission-vision")}
          >
            Mission & Vision
          </button>
          <button 
            className={`ch-subnav-link ${activeNav === "continue-exploring" ? "active" : ""}`}
            onClick={() => scrollToSection("continue-exploring")}
          >
            Explore MEC
          </button>
        </div>
      </nav>

      <main id="main-content">
        {/* 1. Editorial Split Hero */}
        <ChairmanHero />

        {/* 2. Full Message Reading Experience with Sticky Sidebar */}
        <ChairmanEditorial readingProgress={readingProgress} />

        {/* 3. Full-Width Editorial Spread Pullquote */}
        <ChairmanPullquote />

        {/* 4. Core Strategic Pillars */}
        <ChairmanThemes />

        {/* 5. Mission & Vision */}
        <ChairmanMissionVision />

        {/* 6. Institutional CTA & Related Navigation */}
        <ChairmanCTA />
      </main>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button 
          className="ch-back-to-top" 
          onClick={scrollToTop} 
          aria-label="Scroll back to top"
        >
          <FaArrowUp />
        </button>
      )}

      <Footer />
    </div>
  );
};

export default WordFromChairman;