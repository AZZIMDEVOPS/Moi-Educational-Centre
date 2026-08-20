import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../../css/testimonials.css';

const testimonials = [
  {
    text: "MEC has been transformational for our daughter. The quality of teaching, the extracurricular opportunities, and the genuine care from staff have exceeded every expectation. She's grown academically and as a young leader.",
    name: "Mrs. Amina Kariuki",
    role: "Parent — Grade 9",
    initials: "AK",
    stars: 5,
  },
  {
    text: "As a Cambridge alumni, I can confidently say MEC prepared me exceptionally well for university. The rigorous academics, debate club and mentorship gave me the tools I needed to excel at the University of Nairobi.",
    name: "Brian Odhiambo",
    role: "Alumni — Class of 2019",
    initials: "BO",
    stars: 5,
  },
  {
    text: "What sets MEC apart is the perfect blend of academic excellence and character development. My son's confidence has grown immensely — he now leads the Student Council and is preparing for his KCSE examinations.",
    name: "Mr. James Mutua",
    role: "Parent — Form 4",
    initials: "JM",
    stars: 5,
  },
  {
    text: "The Music Academy at MEC is simply outstanding. My daughter achieved her Grade 5 ABRSM certification in just two years, thanks to the patient and highly skilled music teachers. She performs at every school concert!",
    name: "Mrs. Grace Wanjiku",
    role: "Parent — Junior School",
    initials: "GW",
    stars: 5,
  },
  {
    text: "MEC's Robotics & Coding programme sparked my passion for technology. I'm now studying Computer Science at Strathmore University and interning at a tech startup in Nairobi. MEC gave me my direction.",
    name: "Kevin Mwangi",
    role: "Alumni — Class of 2021",
    initials: "KM",
    stars: 5,
  },
  {
    text: "The safe, inclusive environment at MEC gave our child the confidence to truly be herself. The teachers genuinely know and care for each student. We are grateful every day for choosing MEC.",
    name: "Dr. Sarah Oloo",
    role: "Parent — Pre-Primary",
    initials: "SO",
    stars: 5,
  },
];

const VISIBLE = 3;

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef();

  const max = testimonials.length - VISIBLE;

  const next = useCallback(() => {
    setCurrent(c => (c >= max ? 0 : c + 1));
  }, [max]);

  const prev = () => setCurrent(c => (c <= 0 ? max : c - 1));

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(next, 4500);
    return () => clearInterval(intervalRef.current);
  }, [isPaused, next]);

  return (
    <section
      className="testimonials"
      aria-label="Testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="testimonials-inner">
        <header className="testimonials-header">
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            <span className="section-eyebrow-dot" />
            What Our Community Says
          </div>
          <h2 className="section-heading">
            Trusted by <span>thousands</span> of families
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Hear from the parents, students and alumni who make MEC the thriving community it is.
          </p>
        </header>

        {/* Carousel */}
        <div className="testimonials-track-wrap" role="region" aria-label="Testimonials carousel">
          <div
            className="testimonials-track"
            style={{ transform: `translateX(calc(-${current * (100 / VISIBLE + (24 / (VISIBLE * 3)))}% - ${current * 8}px))` }}
          >
            {testimonials.map((t, i) => (
              <article key={i} className="testimonial-card">
                <div className="testimonial-quote" aria-hidden="true">"</div>
                <div className="testimonial-stars" aria-label={`${t.stars} stars`}>
                  {'★'.repeat(t.stars)}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" aria-hidden="true">{t.initials}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="testimonials-controls">
          <button className="testimonials-btn" onClick={prev} aria-label="Previous testimonial">‹</button>
          <div className="testimonials-dots" role="tablist">
            {Array.from({ length: max + 1 }).map((_, i) => (
              <button
                key={i}
                className={`testimonials-dot${current === i ? ' active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                role="tab"
                aria-selected={current === i}
              />
            ))}
          </div>
          <button className="testimonials-btn" onClick={next} aria-label="Next testimonial">›</button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
