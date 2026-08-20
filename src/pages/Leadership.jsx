import { useEffect } from "react";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/navigation/Navbar";
import SEO from "../components/common/SEO";
import "../css/leadership-v2.css";

import LeadershipHero from "../components/leadership/v2/LeadershipHero";
import ChairmanMessage from "../components/leadership/v2/ChairmanMessage";
import PrincipalsEditorial from "../components/leadership/v2/PrincipalsEditorial";
import LeadershipGrid from "../components/leadership/v2/LeadershipGrid";
import LeadershipCTA from "../components/leadership/v2/LeadershipCTA";

const Leadership = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="ldr-page">
      <SEO 
        title="Leadership | Moi Educational Centre"
        description="Meet the dedicated leaders guiding Moi Educational Centre towards academic excellence, integrity, and holistic student success."
      />
      <Navbar />
      
      <main id="main-content">
        {/* 1. Cinematic Hero */}
        <LeadershipHero />

        {/* 2. Chairman's Message */}
        <section className="reveal">
          <ChairmanMessage />
        </section>

        {/* 3. Principals Editorial Sections */}
        <PrincipalsEditorial />

        {/* 4. Core Leadership Team Grid */}
        <section className="reveal" id="team-grid">
          <LeadershipGrid />
        </section>

        {/* 5. Call to Action */}
        <section className="reveal">
          <LeadershipCTA />
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Leadership;