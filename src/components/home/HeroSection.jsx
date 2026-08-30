import { useEffect, useRef, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import Cam02Parking from "../../assets/hero-uploads/Cam02-Parking.jpg";
import DSC00492 from "../../assets/hero-uploads/DSC00492.jpg";
import alumni11 from "../../assets/hero-uploads/Alumni 11 - Class of 98.jpg";
import images5 from "../../assets/hero-uploads/images (5).jpg";
import images6 from "../../assets/hero-uploads/images (6).jpg";
import images7 from "../../assets/hero-uploads/images (7).jpg";
import images8 from "../../assets/hero-uploads/images (8).jpg";
import maxresdefault from "../../assets/hero-uploads/maxresdefault.jpg";
import school7v2 from "../../assets/hero-uploads/school7-D3PnsiCT (1).jpg";
import viennaCathedral from "../../assets/music-tour-2026/vienna-cathedral-interior.jpg";
import viennaMonument from "../../assets/music-tour-2026/vienna-monument-student.jpg";
import { useLanguage, translations } from "../../context/LanguageContext";
import { Link } from "react-router-dom";
import { HiOutlineArrowDown } from "react-icons/hi2";

const slides = [
  viennaCathedral,
  Cam02Parking,
  DSC00492,
  viennaMonument,
  alumni11,
  images5,
  images6,
  images7,
  images8,
  maxresdefault,
  school7v2,
];

const HeroSection = () => {
       const { language } = useLanguage();
       const t = translations[language].hero;
       const [index, setIndex] = useState(0);
       const [paused, setPaused] = useState(false);
       const [scrolled, setScrolled] = useState(0);
       const heroRef = useRef();

       useEffect(() => {
              const handleScroll = () => setScrolled(window.scrollY);
              window.addEventListener("scroll", handleScroll);
              return () => window.removeEventListener("scroll", handleScroll);
       }, []);

       useEffect(() => {
              if (paused) return;
              const id = setInterval(() => setIndex(i => (i + 1) % slides.length), 5200);
              return () => clearInterval(id);
       }, [paused]);

       useEffect(() => {
              const onKey = (e) => {
                     if (e.key === "ArrowRight") setIndex(i => (i + 1) % slides.length);
                     if (e.key === "ArrowLeft") setIndex(i => (i - 1 + slides.length) % slides.length);
              };
              window.addEventListener("keydown", onKey);
              return () => window.removeEventListener("keydown", onKey);
       }, []);

       const next = () => setIndex(i => (i + 1) % slides.length);
       const prev = () => setIndex(i => (i - 1 + slides.length) % slides.length);

       return (
              <section className="hero-section-v3" ref={heroRef} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
                     <div className="hero-animated-bg-v3">
                            <div className="hero-blob hero-blob-1"></div>
                            <div className="hero-blob hero-blob-2"></div>
                            <div className="hero-blob hero-blob-3"></div>
                     </div>

                     <div className="hero-slider" aria-roledescription="carousel">
                            <AnimatePresence initial={false} mode="wait">
                                   {slides.map((s, i) => i === index && (
                                          <Motion.div
                                                 key={i}
                                                 className="slide"
                                                 initial={{ opacity: 0 }}
                                                 animate={{ opacity: 1 }}
                                                 exit={{ opacity: 0 }}
                                                 transition={{ duration: 0.9 }}
                                                 aria-hidden={i === index ? "false" : "true"}
                                          >
                                                 <div className="slide-image" style={{ backgroundImage: `url(${s})`, transform: `translateY(${scrolled * 0.06}px)` }} />
                                                 <div className="slide-overlay" />
                                          </Motion.div>
                                   ))}
                            </AnimatePresence>

                            <button className="slider-control prev" aria-label="Previous slide" onClick={prev}>
                                   ‹
                            </button>
                            <button className="slider-control next" aria-label="Next slide" onClick={next}>
                                   ›
                            </button>

                            <div className="slider-dots" role="tablist" aria-label="Select slide">
                                   {slides.map((_, i) => (
                                          <button key={i} onClick={() => setIndex(i)} aria-label={`Go to slide ${i + 1}`} className={`dot ${i === index ? "active" : ""}`} />
                                   ))}
                            </div>
                     </div>

                     <div className="hero-content-v3">
                            <div className="hero-badge">
                                   <span className="badge-dot" />
                                   {language === "en" ? "Celebrating 40 Years of Excellence" : "Kusherehekea Miaka 40 ya Ubora"}
                            </div>

                            <h1 className="hero-title-v3">
                                   {t.title} <br />
                                   <span className="hero-rotating-word">{t.highlight}</span>
                            </h1>

                            <p className="hero-sub-v3">{t.sub}</p>

                            <div className="hero-cta-group">
                                   <Link to="/admissions/admission-process" className="btn-primary-hero-v3">{language === "en" ? "Apply Now" : "Omba Nafasi"}</Link>
                                   <a href="https://wa.me/0706280170?text=I'd%20like%20to%20book%20a%20tour" target="_blank" rel="noreferrer" className="btn-ghost-hero-v3">{language === "en" ? "Book a School Tour" : "Weka Ziara ya Shule"}</a>
                            </div>

                            <div className="hero-secondary-link">
                                   <Link to="/education/CBC/pre-primary">{language === "en" ? "Explore Our Programmes" : "Chunguza Programu Zetu"}</Link>
                            </div>
                     </div>

                     <div className="hero-stats-bar-v3">
                            <div className="hero-stat-v3"><span className="stat-value">40+</span><span className="stat-label">{language === "en" ? "Years" : "Miaka"}</span></div>
                            <div className="hero-stat-v3"><span className="stat-value">3,500+</span><span className="stat-label">{language === "en" ? "Learners" : "Wanafunzi"}</span></div>
                            <div className="hero-stat-v3"><span className="stat-value">98%</span><span className="stat-label">{language === "en" ? "Pass Rate" : "Kiwango"}</span></div>
                     </div>

                     <div className="scroll-indicator" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}>
                            <span><HiOutlineArrowDown /></span>
                            <span>{language === "en" ? "Scroll" : "Tembeza"}</span>
                     </div>
              </section>
       );
};

export default HeroSection;