import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaSearch, 
  FaTimes, 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaEnvelope, 
  FaCalendarCheck, 
  FaGraduationCap, 
  FaArrowRight, 
  FaCompass,
  FaQuestionCircle,
  FaFileInvoiceDollar,
  FaBookOpen,
  FaGlobe,
  FaBus,
  FaRegLightbulb
} from 'react-icons/fa';
import { faqs, faqCategories } from '../../data/faqs';
import FaqMoja from './FaqMoja';
import '../../css/faqs-v2.css';

// Featured quick jump questions
const FEATURED_QUESTIONS = [
  { id: 201, label: "How do I apply to MEC?", category: "Applications" },
  { id: 301, label: "What are the 2026 school fees?", category: "Fees & Payments" },
  { id: 401, label: "Which curricula does MEC offer?", category: "Curriculum" },
  { id: 501, label: "How is Cambridge structured?", category: "Cambridge" },
  { id: 701, label: "Are transport services available?", category: "Transport" },
  { id: 103, label: "Can I book a campus tour?", category: "Admissions" }
];

const RELATED_LINKS = [
  {
    title: "2026 Fee Structure",
    desc: "Detailed termly and annual tuition breakdown, statutory fees, and M-Pesa channels.",
    link: "/admissions/fees",
    icon: <FaFileInvoiceDollar />
  },
  {
    title: "Admission Process",
    desc: "Step-by-step enrollment guide, online application form, and document checklists.",
    link: "/admissions/admission-process",
    icon: <FaGraduationCap />
  },
  {
    title: "Download Resources",
    desc: "Official 2026 fee schedules, registration forms, and curriculum information guides.",
    link: "/admissions/resources",
    icon: <FaBookOpen />
  },
  {
    title: "Cambridge International",
    desc: "British curriculum pathway from Cambridge Primary (Stages 1-6) through to IGCSE.",
    link: "/education/cambridge-system",
    icon: <FaGlobe />
  }
];

const FaqsBody = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openIds, setOpenIds] = useState(() => new Set([101, 201, 301])); // Initial default open items

  // Handle URL hash or query params
  useEffect(() => {
    if (location.hash) {
      const h = location.hash.replace('#', '').toLowerCase();
      if (h.includes('fee') || h.includes('pay')) {
        setSelectedCategory('Fees & Payments');
      } else if (h.includes('apply') || h.includes('application')) {
        setSelectedCategory('Applications');
      } else if (h.includes('cambridge')) {
        setSelectedCategory('Cambridge');
      } else if (h.includes('transport') || h.includes('bus')) {
        setSelectedCategory('Transport');
      }
    }
  }, [location.hash]);

  // Calculate count per category for badges
  const categoryCounts = useMemo(() => {
    const counts = { All: faqs.length };
    faqCategories.forEach(cat => {
      if (cat !== 'All') {
        counts[cat] = faqs.filter(item => item.category === cat).length;
      }
    });
    return counts;
  }, []);

  // Filter FAQs based on active category and live search query
  const filteredFaqs = useMemo(() => {
    return faqs.filter(item => {
      // Category Match
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      if (!matchesCategory) return false;

      // Search Query Match (across question, straight answers, sub-lists, tags, and category)
      if (!searchTerm.trim()) return true;

      const query = searchTerm.toLowerCase().trim();
      const questionMatch = item.question.toLowerCase().includes(query);
      const categoryMatch = item.category.toLowerCase().includes(query);
      const tagsMatch = item.tags?.some(tag => tag.toLowerCase().includes(query));

      const straightMatch = item.answer?.straight?.some(text => 
        text.toLowerCase().includes(query)
      );

      const simpleListMatch = item.answer?.simple_list?.some(text => 
        text.toLowerCase().includes(query)
      );

      const listMatch = item.answer?.list?.some(sub => 
        sub.title.toLowerCase().includes(query) || 
        sub.explanations?.some(e => e.toLowerCase().includes(query))
      );

      const extraMatch = item.answer?.extra?.toLowerCase().includes(query);

      return questionMatch || categoryMatch || tagsMatch || straightMatch || simpleListMatch || listMatch || extraMatch;
    });
  }, [selectedCategory, searchTerm]);

  // Toggle single FAQ item
  const handleToggle = useCallback((id) => {
    setOpenIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  // Expand all / Collapse all currently filtered items
  const areAllFilteredOpen = useMemo(() => {
    if (filteredFaqs.length === 0) return false;
    return filteredFaqs.every(item => openIds.has(item.id));
  }, [filteredFaqs, openIds]);

  const handleToggleAll = useCallback(() => {
    if (areAllFilteredOpen) {
      setOpenIds(new Set());
    } else {
      setOpenIds(new Set(filteredFaqs.map(item => item.id)));
    }
  }, [areAllFilteredOpen, filteredFaqs]);

  // Jump to specific question and expand it
  const handleJumpToQuestion = (id, category) => {
    setSelectedCategory('All');
    setSearchTerm('');
    setOpenIds(prev => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
    setTimeout(() => {
      const el = document.getElementById(`faq-item-${id}`);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  // Clear search handler
  const handleClearSearch = () => {
    setSearchTerm('');
  };

  // Structured Data Schema for FAQPage
  const faqSchema = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.slice(0, 20).map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": Array.isArray(item.answer?.straight) 
            ? item.answer.straight.join(" ") 
            : item.question
        }
      }))
    };
  }, []);

  return (
    <div className="faq-page-wrapper">
      {/* Schema.org FAQPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ─── 1. HERO SECTION ───────────────────────────────────── */}
      <header className="faq-hero-section">
        <div className="faq-hero-ambient-1" aria-hidden="true" />
        <div className="faq-hero-ambient-2" aria-hidden="true" />
        <div className="faq-hero-pattern" aria-hidden="true" />

        <div className="faq-container">
          {/* Breadcrumbs */}
          <nav className="faq-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="faq-bc-sep">/</span>
            <Link to="/about-MEC">About MEC</Link>
            <span className="faq-bc-sep">/</span>
            <span className="faq-bc-active" aria-current="page">FAQs</span>
          </nav>

          {/* Eyebrow */}
          <div className="faq-hero-eyebrow">
            <span className="faq-eyebrow-dot" />
            <span>ADMISSIONS & ACADEMICS KNOWLEDGE BASE</span>
          </div>

          {/* Headline */}
          <h1 className="faq-hero-heading">
            Frequently Asked Questions
          </h1>

          {/* Supporting Copy */}
          <p className="faq-hero-sub">
            Find quick answers to common questions about admissions, academics, school life and joining Moi Educational Centre.
          </p>

          {/* Highlight Trust Badges */}
          <div className="faq-hero-badges">
            <div className="faq-hero-badge-pill">
              <FaGraduationCap />
              <span>CBC & Cambridge Dual Pathways</span>
            </div>
            <div className="faq-hero-badge-pill">
              <FaCompass />
              <span>Rolling Admissions 2026</span>
            </div>
            <div className="faq-hero-badge-pill">
              <FaCalendarCheck />
              <span>Nairobi Campus, Off Lang'ata Rd</span>
            </div>
          </div>
        </div>
      </header>

      {/* ─── 2. MAIN CONTENT SECTION ───────────────────────────── */}
      <main className="faq-main-section">
        <div className="faq-container">
          
          {/* ─── Search Bar (Primary UX Feature) ──────────────────── */}
          <div className="faq-search-wrap">
            <div className="faq-search-box">
              <FaSearch className="faq-search-icon" aria-hidden="true" />
              <label htmlFor="faq-search-input" className="sr-only">
                Search frequently asked questions
              </label>
              <input
                id="faq-search-input"
                type="text"
                className="faq-search-input"
                placeholder="Search questions (e.g. fees, admission, Cambridge, transport, uniform)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoComplete="off"
              />
              {searchTerm && (
                <button
                  type="button"
                  className="faq-search-clear-btn"
                  onClick={handleClearSearch}
                  aria-label="Clear search input"
                >
                  <FaTimes />
                </button>
              )}
            </div>
          </div>

          {/* ─── Featured Popular Questions Chips ─────────────────── */}
          {!searchTerm && selectedCategory === 'All' && (
            <div className="faq-featured-chips-wrap">
              <div className="featured-chips-header">
                <FaRegLightbulb className="chip-header-icon" />
                <span>Popular Questions:</span>
              </div>
              <div className="featured-chips-list">
                {FEATURED_QUESTIONS.map(q => (
                  <button
                    key={q.id}
                    className="faq-featured-chip"
                    onClick={() => handleJumpToQuestion(q.id, q.category)}
                  >
                    <span>{q.label}</span>
                    <FaArrowRight className="chip-arrow" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ─── Category Navigation Pills ────────────────────────── */}
          <div className="faq-categories-wrapper">
            <div className="faq-categories-scroll" role="tablist" aria-label="FAQ Categories">
              {faqCategories.map(category => {
                const isActive = selectedCategory === category;
                const count = categoryCounts[category] || 0;
                return (
                  <button
                    key={category}
                    role="tab"
                    aria-selected={isActive}
                    className={`faq-cat-pill ${isActive ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    <span>{category}</span>
                    <span className="faq-cat-count">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ─── Controls & Results Counter Bar ──────────────────── */}
          <div className="faq-controls-bar">
            <div className="faq-results-info">
              {searchTerm ? (
                <>
                  Found <span className="faq-results-count">{filteredFaqs.length}</span> {filteredFaqs.length === 1 ? 'question' : 'questions'} matching "<span className="faq-active-filter-tag">{searchTerm}</span>"
                  {selectedCategory !== 'All' && <span> in <strong>{selectedCategory}</strong></span>}
                </>
              ) : (
                <>
                  Showing <span className="faq-results-count">{filteredFaqs.length}</span> {filteredFaqs.length === 1 ? 'question' : 'questions'} in <span className="faq-active-filter-tag">{selectedCategory === 'All' ? 'All Categories' : selectedCategory}</span>
                </>
              )}
            </div>

            {filteredFaqs.length > 0 && (
              <button
                type="button"
                className="faq-toggle-all-btn"
                onClick={handleToggleAll}
                aria-label={areAllFilteredOpen ? "Collapse all questions" : "Expand all questions"}
              >
                {areAllFilteredOpen ? "− Collapse All" : "+ Expand All"}
              </button>
            )}
          </div>

          {/* ─── FAQ Accordion List / Empty State ────────────────── */}
          {filteredFaqs.length > 0 ? (
            <div className="faq-accordion-list" role="region" aria-label="FAQ Accordion">
              {filteredFaqs.map(item => (
                <FaqMoja
                  key={item.id}
                  item={item}
                  isOpen={openIds.has(item.id)}
                  onToggle={() => handleToggle(item.id)}
                />
              ))}
            </div>
          ) : (
            <div className="faq-empty-state">
              <div className="faq-empty-icon-wrap">
                <FaQuestionCircle />
              </div>
              <h2 className="faq-empty-title">We couldn't find an answer matching your search</h2>
              <p className="faq-empty-desc">
                No questions matched "{searchTerm}". Try checking for spelling, browsing other categories, or speaking directly to our Admissions Team.
              </p>
              <div className="faq-empty-actions">
                <button
                  type="button"
                  className="faq-empty-btn-clear"
                  onClick={handleClearSearch}
                >
                  Clear Search
                </button>
                <Link to="/contact" className="faq-empty-btn-contact">
                  <span>Contact Admissions</span>
                  <FaArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          )}

          {/* ─── 3. EXPLORE RELATED ADMISSIONS LINKS (Section 11) ─── */}
          <section className="faq-related-links-section" aria-labelledby="related-links-heading">
            <div className="related-links-header">
              <span className="related-eyebrow">ESSENTIAL ADMISSIONS PORTALS</span>
              <h2 id="related-links-heading" className="related-title">Explore Related Information</h2>
              <p className="related-sub">Quick links to key admissions policies, documents, and academic pathways.</p>
            </div>

            <div className="related-links-grid">
              {RELATED_LINKS.map((rl, idx) => (
                <Link key={idx} to={rl.link} className="related-link-card">
                  <div className="related-card-icon">
                    {rl.icon}
                  </div>
                  <div className="related-card-text">
                    <h3 className="related-card-title">{rl.title}</h3>
                    <p className="related-card-desc">{rl.desc}</p>
                  </div>
                  <FaArrowRight className="related-card-arrow" />
                </Link>
              ))}
            </div>
          </section>

          {/* ─── 4. "CAN'T FIND YOUR ANSWER?" CTA (Section 10) ────── */}
          <section className="faq-cta-section" aria-labelledby="faq-cta-heading">
            <div className="faq-cta-glow" aria-hidden="true" />
            
            <div className="faq-cta-content">
              {/* Left Column: Heading & CTAs */}
              <div className="faq-cta-left">
                <span className="faq-cta-eyebrow">ADMISSIONS SUPPORT</span>
                <h2 id="faq-cta-heading" className="faq-cta-title">
                  Can't find what you're looking for?
                </h2>
                <p className="faq-cta-desc">
                  Our Admissions team is happy to help with any questions about joining Moi Educational Centre, booking campus tours, and guiding your application.
                </p>
                <div className="faq-cta-buttons">
                  <Link to="/contact" className="faq-cta-btn-primary">
                    <span>Contact Admissions</span>
                    <FaArrowRight aria-hidden="true" />
                  </Link>
                  <Link to="/admissions/admission-process" className="faq-cta-btn-secondary">
                    <span>Apply to MEC</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Direct Quick Contact Channels */}
              <div className="faq-cta-right">
                <a href="tel:+254706280170" className="faq-contact-channel-card">
                  <div className="faq-channel-icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="faq-channel-info">
                    <span className="faq-channel-label">Call Admissions Desk</span>
                    <span className="faq-channel-val">+254 706 280 170</span>
                  </div>
                </a>

                <a href="https://wa.me/254706280170?text=Hello%20MEC%20Admissions%2C%20I%20have%20an%20inquiry%20regarding%20enrollment." target="_blank" rel="noreferrer" className="faq-contact-channel-card">
                  <div className="faq-channel-icon whatsapp">
                    <FaWhatsapp />
                  </div>
                  <div className="faq-channel-info">
                    <span className="faq-channel-label">WhatsApp Admissions Team</span>
                    <span className="faq-channel-val">Chat with an Advisor</span>
                  </div>
                </a>

                <a href="mailto:info@moieducentre.ac.ke" className="faq-contact-channel-card">
                  <div className="faq-channel-icon">
                    <FaEnvelope />
                  </div>
                  <div className="faq-channel-info">
                    <span className="faq-channel-label">Email Admissions Office</span>
                    <span className="faq-channel-val">info@moieducentre.ac.ke</span>
                  </div>
                </a>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default FaqsBody;