import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { LuInstagram } from 'react-icons/lu';
import { RiLinkedinFill } from 'react-icons/ri';
import { SiTiktok } from 'react-icons/si';
import { FaFacebook, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import AccreditationsSection from '../home/AccreditationsSection';

const Footer = () => {
  const { language } = useLanguage();
  const en = language === 'en';
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); }
  };

  return (
    <>
    <AccreditationsSection />
    <footer style={{
      background: 'linear-gradient(180deg, #0A0118 0%, #12022A 100%)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Outfit', sans-serif",
    }}>
      {/* Top gradient separator */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(to right, transparent, rgba(123,47,247,0.5), transparent)',
      }} />

      {/* Background decoration */}
      <div style={{
        position: 'absolute', width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(123,47,247,0.08), transparent 70%)',
        top: -200, right: -100, pointerEvents: 'none',
      }} />

      {/* Main footer content */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 24px 32px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
          gap: 40,
          marginBottom: 56,
        }}
          className="footer-grid"
        >
          {/* Brand Column */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', marginBottom: 20 }}>
              <img src={logo} alt="MEC Logo" style={{ width: 52, height: 52, objectFit: 'contain', filter: 'drop-shadow(0 0 12px rgba(123,47,247,0.4))' }} />
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
                  Moi Educational Centre
                </div>
                <div style={{ fontSize: 10, color: 'rgba(199,125,255,0.8)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
                  Est. 1986 · Nairobi, Kenya
                </div>
              </div>
            </Link>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.58)', lineHeight: 1.75, marginBottom: 24, maxWidth: 280 }}>
              {en ? 'Guiding every learner to discover, grow and thrive — for 40 years of world-class education in Kenya.' : 'Kumwongoza kila mwanafunzi kugundua, kukua na kufanikiwa — miaka 40 ya elimu bora Kenya.'}
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { icon: <LuInstagram size={16} />, href: 'https://www.instagram.com/moieducentre/' },
                { icon: <RiLinkedinFill size={16} />, href: 'https://www.linkedin.com/in/moi-educational-centre-483a97398/' },
                { icon: <SiTiktok size={16} />, href: 'https://www.tiktok.com/@moieducentre' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    width: 38, height: 38, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.10)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.75)',
                    textDecoration: 'none', transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(123,47,247,0.25)'; e.currentTarget.style.borderColor = 'rgba(123,47,247,0.5)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div style={{ marginTop: 28 }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>
                {en ? 'Stay Updated' : 'Pata Habari'}
              </p>
              {subscribed ? (
                <p style={{ fontSize: 13, color: '#25D366' }}>✓ {en ? 'Thank you for subscribing!' : 'Asante kwa kujisajili!'}</p>
              ) : (
                <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: 8 }}>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder={en ? 'Your email address' : 'Barua pepe yako'}
                    required
                    style={{
                      flex: 1, padding: '9px 14px', background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8,
                      color: '#fff', fontSize: 13, fontFamily: 'inherit', outline: 'none',
                    }}
                  />
                  <button type="submit" style={{
                    padding: '9px 16px', background: 'linear-gradient(135deg, #7B2FF7, #2D5BE3)',
                    border: 'none', borderRadius: 8, color: '#fff', fontSize: 13, fontWeight: 700,
                    cursor: 'pointer', whiteSpace: 'nowrap',
                  }}>
                    {en ? 'Subscribe' : 'Jisajili'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Academics Column */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
              {en ? 'Academics' : 'Masomo'}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                [en ? 'Pre-Primary' : 'Elimu ya Awali', '/education/CBC/pre-primary'],
                [en ? 'Lower Primary' : 'Msingi wa Chini', '/education/CBC/lower-primary'],
                [en ? 'Upper Primary' : 'Msingi wa Juu', '/education/CBC/upper-primary'],
                [en ? 'Junior School' : 'Shule ya Upili ya Chini', '/education/CBC/junior-school'],
                [en ? 'Senior School' : 'Shule ya Upili ya Juu', '/education/CBC/senior-school'],
                [en ? 'Coding & Robotics' : 'Kompyuta na Roboti', '/extra-curricular/clubs/computer-robotics'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link to={href} style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.58)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#C77DFF'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.58)'}
                  >{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Column */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
              {en ? 'Community' : 'Jamii'}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                [en ? 'About MEC' : 'Kuhusu MEC', '/about-MEC'],
                [en ? 'Our Leadership' : 'Uongozi Wetu', '/about-MEC/leadership'],
                [en ? 'School Events' : 'Matukio', '/about-MEC/school-events'],
                [en ? 'Sports' : 'Michezo', '/extra-curricular/sports'],
                [en ? 'Clubs & Societies' : 'Vilabu', '/extra-curricular/clubs'],
                [en ? 'Alumni' : 'Wahitimu', '/portal/alumni'],
                [en ? 'Gallery' : 'Picha', '/gallery'],
                [en ? 'News & Updates' : 'Habari', '/news-and-updates'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link to={href} style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.58)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#C77DFF'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.58)'}
                  >{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
              {en ? 'Get in Touch' : 'Wasiliana Nasi'}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <FaMapMarkerAlt style={{ color: '#C77DFF', marginTop: 2, flexShrink: 0 }} />
                <span style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.58)', lineHeight: 1.6 }}>
                  Mai Mahiu Road, City Estate,<br />Nairobi West, Kenya
                </span>
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <FaPhone style={{ color: '#C77DFF', flexShrink: 0 }} />
                <a href="tel:+254702090213" style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.58)', textDecoration: 'none' }}>
                  +254 702 090 213
                </a>
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <FaEnvelope style={{ color: '#C77DFF', flexShrink: 0 }} />
                <a href="mailto:info@moieducentre.ac.ke" style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.58)', textDecoration: 'none' }}>
                  info@moieducentre.ac.ke
                </a>
              </div>

              {/* Quick Apply */}
              <Link to="/admissions/admission-process" style={{
                display: 'inline-flex', alignItems: 'center', gap: 6, padding: '11px 20px', marginTop: 8,
                background: 'linear-gradient(135deg, #7B2FF7, #2D5BE3)', borderRadius: 999,
                color: '#fff', fontWeight: 700, fontSize: 13, textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(123,47,247,0.35)',
              }}>
                {en ? '✦ Apply Now' : '✦ Omba Sasa'}
              </Link>
              <button onClick={() => window.open('https://wa.me/254706280170?text=Hello%20MEC%20Admissions%2C%20I%27d%20like%20to%20book%20a%20school%20tour.', '_blank')} style={{
                display: 'inline-flex', alignItems: 'center', gap: 6, padding: '10px 20px',
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 999,
                color: '#fff', fontWeight: 600, fontSize: 13, cursor: 'pointer',
              }}>
                💬 {en ? 'Book a Tour' : 'Weka Ahadi'}
              </button>
            </div>
          </div>
        </div>

        {/* Accreditations strip */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: 28,
          marginBottom: 24,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          flexWrap: 'wrap',
        }}>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
            {en ? 'Accredited by' : 'Imethibitishwa na'}
          </span>
          {['Cambridge', 'KAIS', 'NCC', 'CBC · MoE Kenya', 'ABRSM'].map(acc => (
            <span key={acc} style={{
              padding: '4px 12px', background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)', borderRadius: 999,
              fontSize: 11, color: 'rgba(255,255,255,0.50)', fontWeight: 600,
            }}>{acc}</span>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>
            © {new Date().getFullYear()} Moi Educational Centre. {en ? 'All Rights Reserved.' : 'Haki Zote Zimehifadhiwa.'}
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            <Link to="/admissions/frequently-asked-questions" style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link to="/admissions/frequently-asked-questions" style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>Terms of Use</Link>
            <Link to="/contact" style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>Sitemap</Link>
          </div>
          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            style={{
              width: 40, height: 40, borderRadius: '50%',
              background: 'rgba(123,47,247,0.20)', border: '1px solid rgba(123,47,247,0.30)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#C77DFF', cursor: 'pointer', transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(123,47,247,0.40)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(123,47,247,0.20)'; }}
          >
            <FaArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
    </>
  );
};

export default Footer;