import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaQuoteLeft, FaArrowLeft, FaArrowRight, FaCheckCircle, 
  FaUserFriends, FaGraduationCap, FaAward, FaHeart, FaStar 
} from 'react-icons/fa';
import imgParents from '../../assets/parents.jpg';
import imgAlumni from '../../assets/alumni.jpg';
import imgKids from '../../assets/kids.jpg';
import imgExperience from '../../assets/experience.jpg';
import '../../css/testimonials.css';

const authenticCommunityData = [
  {
    id: 1,
    category: "parents",
    categoryLabel: "Parent Perspective",
    text: "MEC has been transformational for our daughter. The quality of teaching, the extracurricular opportunities, and the genuine care from staff have exceeded every expectation. She has grown academically, socially, and as a confident young leader.",
    name: "Mrs. Amina Kariuki",
    role: "Parent — Junior School (Grade 9)",
    image: imgParents,
    badge: "Parent of 7 Years",
    tagline: "Academic Growth & Leadership"
  },
  {
    id: 2,
    category: "alumni",
    categoryLabel: "Alumni Reflection",
    text: "As an MEC alumnus, I can confidently say the school prepared me exceptionally well for higher education and professional life. The rigorous academic grounding, debate club, and faculty mentorship gave me the tools and resilience I needed to excel.",
    name: "Brian Odhiambo",
    role: "Alumni — Class of 2019 | University of Nairobi",
    image: imgAlumni,
    badge: "MEC Pioneer Scholar",
    tagline: "Global University Readiness"
  },
  {
    id: 3,
    category: "parents",
    categoryLabel: "Parent Perspective",
    text: "What sets MEC apart is the perfect blend of academic excellence and character development. My son's confidence has grown immensely — he now serves in student leadership and is thriving in his chosen Senior High School pathway.",
    name: "Mr. James Mutua",
    role: "Parent — Senior High School (Grade 10)",
    image: imgExperience,
    badge: "Parent of 5 Years",
    tagline: "Character & Pathway Excellence"
  },
  {
    id: 4,
    category: "parents",
    categoryLabel: "Parent Perspective",
    text: "The Music Academy at MEC is simply outstanding. My daughter achieved her Grade 5 ABRSM certification in just two years, thanks to the patient and highly skilled faculty. She performs with poise and confidence at every school concert.",
    name: "Mrs. Grace Wanjiku",
    role: "Parent — Junior School & Music Conservatory",
    image: imgParents,
    badge: "Creative Arts Family",
    tagline: "ABRSM London Certified"
  },
  {
    id: 5,
    category: "alumni",
    categoryLabel: "Alumni Reflection",
    text: "MEC's Robotics and Coding programme sparked my passion for technology at an early age. I am now pursuing Computer Science and interning in Kenya's tech ecosystem. MEC gave me clarity, direction, and lifelong moral values.",
    name: "Kevin Mwangi",
    role: "Alumni — Class of 2021 | Software Engineer",
    image: imgAlumni,
    badge: "STEM & Robotics Innovator",
    tagline: "Tech Immersion & Purpose"
  },
  {
    id: 6,
    category: "parents",
    categoryLabel: "Parent Perspective",
    text: "The safe, nurturing, and joyful environment at MEC gave our child the confidence to truly bloom. The educators genuinely know and care for each individual learner. We are deeply grateful every single day for choosing the MEC family.",
    name: "Dr. Sarah Oloo",
    role: "Parent — Pre-Primary & Early Childhood",
    image: imgKids,
    badge: "Early Years Family",
    tagline: "Nurturing & Holistic Foundation"
  }
];

const TestimonialsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef(null);

  const categories = [
    { id: "all", label: "All Community Stories" },
    { id: "parents", label: "Parents" },
    { id: "alumni", label: "Students & Alumni" }
  ];

  const filteredTestimonials = useMemo(() => {
    return authenticCommunityData.filter((item) => {
      if (activeCategory === "all") return true;
      return item.category === activeCategory;
    });
  }, [activeCategory]);

  // Reset current index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const total = filteredTestimonials.length;
  const currentTestimonial = filteredTestimonials[currentIndex] || filteredTestimonials[0];

  // Navigation Handlers
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Autoplay Logic (every 6 seconds, paused on hover/interaction)
  useEffect(() => {
    if (isPaused || total <= 1) return;

    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 6500);

    return () => clearInterval(autoplayRef.current);
  }, [isPaused, total]);

  return (
    <section 
      className="community-testimonials-v3" 
      id="community-voice"
      aria-label="What Our Community Says"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="comm-container">
        
        {/* ─── 1. Section Introduction Header ─────────────────── */}
        <div className="comm-header">
          <div className="comm-eyebrow">
            <span className="comm-eyebrow-dot" />
            <span>WHAT OUR COMMUNITY SAYS</span>
          </div>

          <h2 className="comm-title">
            Trusted by Generations of Families
          </h2>

          <p className="comm-subtitle">
            Hear from the parents, students, and alumni who make Moi Educational Centre the vibrant, thriving community it has been for over 40 years.
          </p>

          {/* Category Filter Pills */}
          <div className="comm-category-pills" role="tablist" aria-label="Filter testimonials by role">
            {categories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`comm-cat-pill ${activeCategory === cat.id ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ─── 2. Featured Editorial Testimonial (40/60 Split) ─── */}
        <div className="comm-hero-stage">
          <div className="comm-stage-grid">
            
            {/* Left 40%: Authentic Community Media Frame */}
            <div className="comm-media-col">
              <div className="comm-media-card">
                <div className="comm-media-img-box">
                  <img 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.name} 
                    className="comm-media-img"
                    key={currentTestimonial.id}
                  />
                </div>

                <div className="comm-media-overlay-badge">
                  <FaHeart className="badge-heart-icon" />
                  <span>{currentTestimonial.badge}</span>
                </div>

                <div className="comm-media-caption">
                  <span className="media-tagline">{currentTestimonial.tagline}</span>
                  <h4 className="media-name">{currentTestimonial.name}</h4>
                  <p className="media-role">{currentTestimonial.role}</p>
                </div>
              </div>
            </div>

            {/* Right 60%: Large Editorial Quote Experience */}
            <div className="comm-quote-col">
              <div className="comm-quote-card" key={currentTestimonial.id}>
                
                <div className="comm-quote-top-row">
                  <span className="comm-role-badge">
                    {currentTestimonial.categoryLabel}
                  </span>
                  <div className="comm-stars-verified">
                    <span className="stars-label">Verified Family Experience</span>
                    <div className="stars-row">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="star-icon" />
                      ))}
                    </div>
                  </div>
                </div>

                <FaQuoteLeft className="comm-large-quote-icon" />

                <blockquote className="comm-quote-text">
                  “{currentTestimonial.text}”
                </blockquote>

                <div className="comm-author-signature-block">
                  <div className="comm-author-details">
                    <h3 className="comm-author-name">{currentTestimonial.name}</h3>
                    <p className="comm-author-designation">{currentTestimonial.role}</p>
                  </div>
                </div>

                {/* Carousel Progress Controls */}
                <div className="comm-carousel-footer">
                  <div className="comm-pagination-indicator">
                    <strong>{String(currentIndex + 1).padStart(2, '0')}</strong>
                    <span>/</span>
                    <span>{String(total).padStart(2, '0')}</span>
                  </div>

                  {/* Progress dots */}
                  <div className="comm-dots-track">
                    {filteredTestimonials.map((_, idx) => (
                      <button
                        key={idx}
                        className={`comm-dot-btn ${currentIndex === idx ? "active" : ""}`}
                        onClick={() => setCurrentIndex(idx)}
                        aria-label={`Go to testimonial ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Arrow Buttons */}
                  <div className="comm-nav-arrows">
                    <button 
                      onClick={handlePrev} 
                      className="comm-arrow-btn" 
                      aria-label="Previous testimonial"
                    >
                      <FaArrowLeft />
                    </button>
                    <button 
                      onClick={handleNext} 
                      className="comm-arrow-btn" 
                      aria-label="Next testimonial"
                    >
                      <FaArrowRight />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ─── 3. Institutional Trust Strip ──────────────────── */}
        <div className="comm-trust-strip">
          <div className="comm-trust-stat">
            <span className="comm-stat-num">40+ Years</span>
            <span className="comm-stat-label">Of Educational Excellence</span>
          </div>
          <div className="comm-stat-sep" />
          <div className="comm-trust-stat">
            <span className="comm-stat-num">100%</span>
            <span className="comm-stat-label">Secondary & University Transition</span>
          </div>
          <div className="comm-stat-sep" />
          <div className="comm-trust-stat">
            <span className="comm-stat-num">2,500+</span>
            <span className="comm-stat-label">Learners Thriving at MEC</span>
          </div>
          <div className="comm-stat-sep" />
          <div className="comm-trust-stat">
            <span className="comm-stat-num">Top 10</span>
            <span className="comm-stat-label">National Academic Distinction</span>
          </div>
        </div>

        {/* ─── 4. Community Invitation CTA ───────────────────── */}
        <div className="comm-cta-box">
          <div className="comm-cta-content">
            <span className="comm-cta-badge">BECOME PART OF OUR FAMILY</span>
            <h3>Ready to Join the Moi Educational Centre Community?</h3>
            <p>
              Experience a values-driven learning journey where your child is known, nurtured, and prepared to excel.
            </p>
          </div>
          <div className="comm-cta-actions">
            <Link to="/admissions/admission-process" className="comm-btn-apply">
              Apply for 2026 Admissions <FaArrowRight />
            </Link>
            <Link to="/contact" className="comm-btn-tour">
              Book a Campus Tour
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
