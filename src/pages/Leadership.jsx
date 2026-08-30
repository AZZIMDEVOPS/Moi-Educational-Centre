import React, { useState, useEffect } from "react";
import Navbar from "../components/common/navigation/Navbar";
import Footer from "../components/common/Footer";
import SEO from "../components/common/SEO";
import "../css/leadership-v2.css";

// Components
import LeadershipHero from "../components/leadership/v2/LeadershipHero";
import LeadershipPhilosophyStatement from "../components/leadership/v2/LeadershipPhilosophyStatement";
import ChairmanMessage from "../components/leadership/v2/ChairmanMessage";
import PrincipalsEditorial from "../components/leadership/v2/PrincipalsEditorial";
import LeadershipGrid from "../components/leadership/v2/LeadershipGrid";
import LeadershipAtAGlance from "../components/leadership/v2/LeadershipAtAGlance";
import LeadershipPillars from "../components/leadership/v2/LeadershipPillars";
import MissionVisionSection from "../components/leadership/v2/MissionVisionSection";
import LeadershipCTA from "../components/leadership/v2/LeadershipCTA";
import LeadershipModal from "../components/leadership/v2/LeadershipModal";

import { FaArrowUp } from "react-icons/fa";
import imgHero from "../assets/experience.jpg";

const Leadership = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeNav, setActiveNav] = useState("overview");

  // Track scroll progress and active section
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
      setShowBackToTop(currentScroll > 400);

      // Section tracking for sticky sub-nav
      const sections = ["overview", "chairman", "principals", "directory", "glance", "pillars", "mission-vision"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
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
    <div className="ldr-page-root">
      {/* Scroll Progress Bar */}
      <div 
        className="ldr-scroll-progress-bar" 
        style={{ width: `${scrollProgress}%` }} 
      />

      <SEO 
        title="Leadership & Governance | Moi Educational Centre"
        description="Meet the dedicated Board Chairman, Executive Principals, and senior academic leadership guiding Moi Educational Centre with vision, integrity, and 40 years of excellence."
        image={imgHero}
        url="/about-MEC/leadership"
      />
      <Navbar />

      {/* Sticky Secondary Navigation Bar */}
      <nav className="ldr-sticky-subnav" aria-label="Leadership Page Navigation">
        <div className="ldr-subnav-container">
          <button 
            className={`ldr-subnav-link ${activeNav === "overview" ? "active" : ""}`}
            onClick={() => scrollToSection("overview")}
          >
            Overview
          </button>
          <button 
            className={`ldr-subnav-link ${activeNav === "chairman" ? "active" : ""}`}
            onClick={() => scrollToSection("chairman")}
          >
            Chairman's Vision
          </button>
          <button 
            className={`ldr-subnav-link ${activeNav === "principals" ? "active" : ""}`}
            onClick={() => scrollToSection("principals")}
          >
            Executive Principals
          </button>
          <button 
            className={`ldr-subnav-link ${activeNav === "directory" ? "active" : ""}`}
            onClick={() => scrollToSection("directory")}
          >
            Leadership Directory
          </button>
          <button 
            className={`ldr-subnav-link ${activeNav === "glance" ? "active" : ""}`}
            onClick={() => scrollToSection("glance")}
          >
            At a Glance
          </button>
          <button 
            className={`ldr-subnav-link ${activeNav === "pillars" ? "active" : ""}`}
            onClick={() => scrollToSection("pillars")}
          >
            Philosophy
          </button>
          <button 
            className={`ldr-subnav-link ${activeNav === "mission-vision" ? "active" : ""}`}
            onClick={() => scrollToSection("mission-vision")}
          >
            Mission & Vision
          </button>
        </div>
      </nav>

      <main id="main-content">
        {/* 1. Hero Section */}
        <LeadershipHero />

        {/* 2. Editorial Philosophy Statement */}
        <LeadershipPhilosophyStatement />

        {/* 3. Chairman's Message */}
        <ChairmanMessage />

        {/* 4. Executive Principals (Senior School & Primary/Junior) */}
        <PrincipalsEditorial />

        {/* 5. Interactive Leadership Directory & Search */}
        <LeadershipGrid onSelectLeader={(leader) => setSelectedLeader(leader)} />

        {/* 6. Leadership at a Glance (Factual Statistics) */}
        <LeadershipAtAGlance />

        {/* 7. Leadership Philosophy (4 Pillars) */}
        <LeadershipPillars />

        {/* 8. Official Mission & Vision */}
        <MissionVisionSection />

        {/* 9. Institutional CTA */}
        <LeadershipCTA />
      </main>

      {/* Interactive Leader Profile Modal */}
      {selectedLeader && (
        <LeadershipModal 
          leader={selectedLeader} 
          onClose={() => setSelectedLeader(null)} 
        />
      )}

      {/* Floating Back to Top Control */}
      {showBackToTop && (
        <button 
          className="ldr-back-to-top" 
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

export default Leadership;