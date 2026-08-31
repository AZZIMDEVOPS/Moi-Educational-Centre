import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { LuInstagram } from 'react-icons/lu';
import { RiLinkedinFill } from 'react-icons/ri';
import { SiTiktok } from 'react-icons/si';
import { FaFacebook, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowUp, FaCheckCircle, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
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
      background: '#ffffff',
      color: '#0f172a',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Poppins', sans-serif",
      borderTop: '1px solid #e2e8f0',
    }}>
      {/* Top subtle blue accent separator */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: 'linear-gradient(to right, #0F3D91, #8E44AD, #2563EB)',
      }} />

      {/* Main footer content */}
      <div style={{ maxWidth: 'min(1560px, 94vw)', margin: '0 auto', padding: '64px clamp(24px, 4vw, 64px) 32px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1.1fr',
          gap: 40,
          marginBottom: 48,
        }}
          className="footer-grid"
        >
          {/* Brand Column */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', marginBottom: 18 }}>
              <img src={logo} alt="MEC Logo" style={{ width: 48, height: 48, objectFit: 'contain' }} />
              <div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 17, fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>
                  Moi Educational Centre
                </div>
                <div style={{ fontSize: 11, color: '#0F3D91', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700 }}>
                  Est. 1986 · Nairobi, Kenya
                </div>
              </div>
            </Link>
            <p style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.7, marginBottom: 22, maxWidth: 320 }}>
              {en ? 'Guiding every learner to discover, grow and thrive — for 40 years of values-based educational excellence in Kenya.' : 'Kumwongoza kila mwanafunzi kugundua, kukua na kufanikiwa — miaka 40 ya elimu bora Kenya.'}
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { icon: <LuInstagram size={16} />, href: 'https://www.instagram.com/moieducentre/' },
                { icon: <RiLinkedinFill size={16} />, href: 'https://www.linkedin.com/in/moi-educational-centre-483a97398/' },
                { icon: <SiTiktok size={16} />, href: 'https://www.tiktok.com/@moieducentre' },
                { icon: <FaFacebook size={16} />, href: 'https://www.facebook.com/moieducationalcentre/' },
                { icon: <FaYoutube size={16} />, href: 'https://www.youtube.com/@moieducationalcentre' }
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    width: 38, height: 38, borderRadius: '50%',
                    background: '#f8fafc', border: '1px solid #e2e8f0',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0F3D91',
                    textDecoration: 'none', transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#0F3D91'; e.currentTarget.style.borderColor = '#0F3D91'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#0F3D91'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div style={{ marginTop: 24 }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: '#0f172a', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
                {en ? 'Stay Updated' : 'Pata Habari'}
              </p>
              {subscribed ? (
                <p style={{ fontSize: 13, color: '#10b981', fontWeight: 600 }}>
                  <FaCheckCircle style={{ marginRight: 6 }} />
                  {en ? 'Thank you for subscribing!' : 'Asante kwa kujisajili!'}
                </p>
              ) : (
                <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: 8 }}>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder={en ? 'Your email address' : 'Barua pepe yako'}
                    required
                    style={{
                      flex: 1, padding: '10px 14px', background: '#f8fafc',
                      border: '1px solid #cbd5e1', borderRadius: 10,
                      color: '#0f172a', fontSize: 13, fontFamily: "'Poppins', sans-serif", outline: 'none',
                    }}
                  />
                  <button type="submit" style={{
                    padding: '10px 18px', background: 'linear-gradient(135deg, #0F3D91 0%, #1B48B8 50%, #2563EB 100%)',
                    border: 'none', borderRadius: 10, color: '#fff', fontSize: 13, fontWeight: 700,
                    cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: "'Poppins', sans-serif",
                    boxShadow: '0 4px 14px rgba(15, 61, 145, 0.25)',
                  }}>
                    {en ? 'Subscribe' : 'Jisajili'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Academics Column */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 800, color: '#0f172a', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 18 }}>
              {en ? 'Academics' : 'Masomo'}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                [en ? 'Pre-Primary & Creche' : 'Elimu ya Awali', '/education/CBC/pre-primary'],
                [en ? 'Lower Primary (Grades 1–3)' : 'Msingi wa Chini', '/education/CBC/lower-primary'],
                [en ? 'Upper Primary (Grades 4–6)' : 'Msingi wa Juu', '/education/CBC/upper-primary'],
                [en ? 'Junior School (Grades 7–9)' : 'Shule ya Upili ya Chini', '/education/CBC/junior-school'],
                [en ? 'Senior School (Grade 10)' : 'Shule ya Upili ya Juu', '/education/CBC/senior-school'],
                [en ? 'Cambridge International' : 'Mfumo wa Cambridge', '/education/cambridge-system'],
                [en ? 'Coding, AI & Robotics' : 'Kompyuta na Roboti', '/extra-curricular/clubs/computer-robotics'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link to={href} style={{ fontSize: 13.5, color: '#475569', textDecoration: 'none', transition: 'all 0.2s ease', fontWeight: 500 }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#0F3D91'; e.currentTarget.style.paddingLeft = '4px'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.paddingLeft = '0px'; }}
                  >{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Column */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 800, color: '#0f172a', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 18 }}>
              {en ? 'Community & Life' : 'Jamii & Maisha'}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                [en ? 'About MEC' : 'Kuhusu MEC', '/about-MEC'],
                [en ? 'Our Leadership' : 'Uongozi Wetu', '/about-MEC/leadership'],
                [en ? 'Word from Chairman' : 'Neno la Mwenyekiti', '/about-MEC/word-from-our-chairman'],
                [en ? 'School Fees 2026' : 'Ada za Shule 2026', '/admissions/fees'],
                [en ? 'School Events' : 'Matukio', '/about-MEC/school-events'],
                [en ? 'Sports Academies' : 'Michezo', '/extra-curricular'],
                [en ? 'Clubs & Societies' : 'Vilabu', '/extra-curricular'],
                [en ? 'Gallery' : 'Picha', '/gallery'],
                [en ? 'News & Updates' : 'Habari', '/news-and-updates'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link to={href} style={{ fontSize: 13.5, color: '#475569', textDecoration: 'none', transition: 'all 0.2s ease', fontWeight: 500 }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#0F3D91'; e.currentTarget.style.paddingLeft = '4px'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.paddingLeft = '0px'; }}
                  >{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 800, color: '#0f172a', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 18 }}>
              {en ? 'Get in Touch' : 'Wasiliana Nasi'}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <FaMapMarkerAlt style={{ color: '#0F3D91', marginTop: 2, flexShrink: 0 }} />
                <span style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.6 }}>
                  Mai Mahiu Road, City Estate,<br />Nairobi West, Kenya
                </span>
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <FaPhone style={{ color: '#0F3D91', flexShrink: 0 }} />
                <a href="tel:+254702090213" style={{ fontSize: 13.5, color: '#475569', textDecoration: 'none', fontWeight: 500 }}>
                  +254 702 090 213
                </a>
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <FaEnvelope style={{ color: '#0F3D91', flexShrink: 0 }} />
                <a href="mailto:info@moieducentre.ac.ke" style={{ fontSize: 13.5, color: '#475569', textDecoration: 'none', fontWeight: 500 }}>
                  info@moieducentre.ac.ke
                </a>
              </div>

              {/* Quick Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
                <Link to="/admissions/admission-process" style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '11px 20px',
                  background: 'linear-gradient(135deg, #0F3D91 0%, #1B48B8 50%, #2563EB 100%)', borderRadius: 999,
                  color: '#fff', fontWeight: 700, fontSize: 13, textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(15, 61, 145, 0.3)', transition: 'all 0.2s ease',
                }}>
                  <FaArrowRight style={{ fontSize: 11 }} />
                  <span>{en ? 'Apply Online 2026' : 'Omba Sasa 2026'}</span>
                </Link>
                <button onClick={() => window.open('https://wa.me/254706280170?text=Hello%20MEC%20Admissions%2C%20I%27d%20like%20to%20book%20a%20school%20tour.', '_blank')} style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '10px 20px',
                  background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: 999,
                  color: '#0F3D91', fontWeight: 700, fontSize: 13, cursor: 'pointer', fontFamily: "'Poppins', sans-serif",
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.borderColor = '#0F3D91'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.borderColor = '#cbd5e1'; }}
                >
                  <FaCalendarAlt />
                  <span>{en ? 'Book a School Tour' : 'Weka Ahadi ya Ziara'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Accreditations strip */}
        <div style={{
          borderTop: '1px solid #e2e8f0',
          paddingTop: 24,
          marginBottom: 24,
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          flexWrap: 'wrap',
        }}>
          <span style={{ fontSize: 11, color: '#64748b', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 700 }}>
            {en ? 'Accredited by:' : 'Imethibitishwa na:'}
          </span>
          {['Cambridge International', 'KAIS', 'NCC Education', 'CBC · MoE Kenya', 'ABRSM London'].map(acc => (
            <span key={acc} style={{
              padding: '4px 14px', background: '#f8fafc',
              border: '1px solid #e2e8f0', borderRadius: 999,
              fontSize: 11.5, color: '#334155', fontWeight: 600,
            }}>{acc}</span>
          ))}
        </div>

        {/* Bottom copyright & legal bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, borderTop: '1px solid #f1f5f9', paddingTop: 20 }}>
          <p style={{ fontSize: 12.5, color: '#64748b', margin: 0 }}>
            © {new Date().getFullYear()} Moi Educational Centre. {en ? 'All Rights Reserved.' : 'Haki Zote Zimehifadhiwa.'}
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            <Link to="/admissions/frequently-asked-questions" style={{ fontSize: 12.5, color: '#64748b', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link to="/admissions/frequently-asked-questions" style={{ fontSize: 12.5, color: '#64748b', textDecoration: 'none' }}>Terms of Use</Link>
            <Link to="/contact" style={{ fontSize: 12.5, color: '#64748b', textDecoration: 'none' }}>Sitemap</Link>
          </div>
          {/* Back to top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            style={{
              width: 38, height: 38, borderRadius: '50%',
              background: '#f8fafc', border: '1px solid #cbd5e1',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#0F3D91', cursor: 'pointer', transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#0F3D91'; e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.borderColor = '#0F3D91'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.color = '#0F3D91'; e.currentTarget.style.borderColor = '#cbd5e1'; }}
          >
            <FaArrowUp size={13} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
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