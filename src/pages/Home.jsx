import { useEffect } from "react";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/navigation/Navbar";
import AboutSection from "../components/home/AboutSection";
import AdmissionSection from "../components/home/AdmissionSection";
import BlogSection from "../components/home/BlogSection";
import HeroV3 from "../components/home/HeroV3";
import FutureReadySection from "../components/home/FutureReadySection";
import CampusTourSection from "../components/home/CampusTourSection";
import ExploreMoreSection from "../components/home/ExploreMoreSection";
import GlobalRecognition from "../components/home/GlobalRecognition";
import FeatureCardsSection from "../components/home/FeatureCardsSection";
import AcademicPathways from "../components/home/AcademicPathways";
import StudentJourney from "../components/home/StudentJourney";
import StudentLifeSection from "../components/home/StudentLifeSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CTASection from "../components/home/CTASection";
import HomeScrollNav from "../components/home/HomeScrollNav";
import SEO from "../components/common/SEO";
import "../css/home.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    // ─── Global Cinematic Reveal System ──────────────────────────────────
    const reveals = gsap.utils.toArray(".global-reveal, .reveal");
    reveals.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 55, scale: 0.97, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <SEO
        title="Moi Educational Centre — Celebrating 40 Years of Excellence"
        description="MEC is one of Kenya's most prestigious schools offering CBC and Cambridge curricula from Pre-Primary to Senior School. Inspiring confident learners since 1986."
      />
      <Navbar />
      
      {/* Interactive Side Scroll Progress Navigation */}
      <HomeScrollNav />

      <main className="home-page" id="main-content">
        {/* 1. Cinematic Hero */}
        <section id="hero-section">
          <HeroV3 />
        </section>

        {/* 2. Global Recognition / Trust Section */}
        <section id="global-recognition" className="global-reveal">
          <GlobalRecognition />
        </section>

        {/* 2.5 Premium Feature Cards */}
        <section id="feature-cards" className="global-reveal">
          <FeatureCardsSection />
        </section>

        {/* 3. About / Legacy Story */}
        <section id="about-section" className="global-reveal">
          <AboutSection />
        </section>

        {/* 4. Academic Pathways */}
        <section id="academic-pathways" className="global-reveal">
          <AcademicPathways />
        </section>

        {/* 6. Future Ready / Technology */}
        <section id="future-ready" className="future-section global-reveal">
          <FutureReadySection />
        </section>

        {/* 7. Student Journey Timeline */}
        <section id="student-journey" className="global-reveal">
          <StudentJourney />
        </section>

        {/* 8. Campus Tour */}
        <section id="campus-tour" className="global-reveal">
          <CampusTourSection />
        </section>

        {/* 9. Parent/Podcast Hubs */}
        <section id="explore-more" className="global-reveal">
          <ExploreMoreSection />
        </section>

        {/* 10. Student Life Showcase */}
        <section id="student-life" className="global-reveal">
          <StudentLifeSection />
        </section>

        {/* 11. Testimonials */}
        <section id="testimonials-section" className="global-reveal">
          <TestimonialsSection />
        </section>

        {/* 12. News & Events */}
        <section id="blog-section" className="global-reveal">
          <BlogSection />
        </section>

        {/* 13. Admissions Journey */}
        <section id="admissions-section" className="global-reveal">
          <AdmissionSection />
        </section>

        {/* 14. CTA */}
        <section id="cta-section" className="global-reveal">
          <CTASection />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;