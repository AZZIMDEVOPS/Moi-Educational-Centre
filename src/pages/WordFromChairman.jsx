import { useEffect } from "react";
import Navbar from "../components/common/navigation/Navbar";
import Footer from "../components/common/Footer";
import SEO from "../components/common/SEO";
import "../css/chairman-v2.css";

import ChairmanHero from "../components/chairman/v2/ChairmanHero";
import ChairmanEditorial from "../components/chairman/v2/ChairmanEditorial";
import ChairmanPhilosophy from "../components/chairman/v2/ChairmanPhilosophy";
import ChairmanGallery from "../components/chairman/v2/ChairmanGallery";
import ChairmanRelatedNav from "../components/chairman/v2/ChairmanRelatedNav";
import ChairmanCTA from "../components/chairman/v2/ChairmanCTA";

const WordFromChairman = () => {
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
    <div className="chair-page">
      <SEO 
        title="Word from Our Chairman | Moi Educational Centre"
        description="For over 40 years, Moi Educational Centre has remained a trusted pillar in delivering quality, values-based education. Read the message from our Board Chairman."
      />
      <Navbar />

      <main id="main-content">
        <ChairmanHero />

        <section className="reveal">
          <ChairmanEditorial />
        </section>

        <section className="reveal">
          <ChairmanPhilosophy />
        </section>

        <section className="reveal">
          <ChairmanGallery />
        </section>

        <section className="reveal">
          <ChairmanRelatedNav />
        </section>

        <section className="reveal">
          <ChairmanCTA />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WordFromChairman;