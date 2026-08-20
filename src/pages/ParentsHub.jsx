import { useState } from 'react';
import { FaPhone, FaEnvelope, FaClock, FaDownload, FaBus, FaCalendar, FaWhatsapp, FaChevronDown } from 'react-icons/fa';
import Navbar from '../components/common/navigation/Navbar';
import Footer from '../components/common/Footer';
import '../css/parents-hub.css';

const ParentsHub = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const announcements = [
    {
      id: 1,
      title: 'Holiday Break - School Closes on 14th April',
      date: '2025-04-01',
      category: 'Holiday',
      highlight: true,
    },
    {
      id: 2,
      title: 'Mid-Term Exam Results Now Available',
      date: '2025-03-28',
      category: 'Academics',
    },
    {
      id: 3,
      title: 'School Sports Day - 5th April 2025',
      date: '2025-03-25',
      category: 'Events',
    },
  ];

  const feeStructure = [
    { level: 'Pre-Primary', tuition: '85,000', activity: '15,000', total: '100,000' },
    { level: 'Lower Primary', tuition: '105,000', activity: '18,000', total: '123,000' },
    { level: 'Upper Primary', tuition: '125,000', activity: '20,000', total: '145,000' },
    { level: 'Junior School', tuition: '150,000', activity: '25,000', total: '175,000' },
    { level: 'Senior School', tuition: '180,000', activity: '30,000', total: '210,000' },
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I activate my parent portal account?',
      answer: 'Visit the parent dashboard on our website, click "Forgot Password", and use your email to reset. If you need assistance, contact admissions@mec.ac.ke',
    },
    {
      id: 2,
      question: 'What payment methods are accepted?',
      answer: 'We accept M-Pesa, bank transfers, cheques, and debit cards. Payment details are available in your parent portal.',
    },
    {
      id: 3,
      question: 'How are school fees structured?',
      answer: 'Fees include tuition, activity fees, and miscellaneous charges. Detailed breakdown is available in the fee structure section above.',
    },
    {
      id: 4,
      question: 'Can I schedule a meeting with the principal?',
      answer: 'Yes, contact the school office at least 48 hours in advance. You can call +254 706 280 170 or email.',
    },
    {
      id: 5,
      question: 'How often are academic reports shared?',
      answer: 'Reports are issued termly. Mid-term assessment results are also shared to keep parents informed of progress.',
    },
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <>
      <Navbar />
      <div className="parents-hub">
        {/* Hero Banner */}
        <section className="parents-hub-hero">
          <div className="parents-hero-content">
            <h1>Parents Hub</h1>
            <p>Your gateway to school updates, academic progress, and community connection</p>
          </div>
        </section>

        {/* Portal Access */}
        <section className="parents-section portal-access">
          <div className="parents-container">
            <div className="portal-card">
              <h2>Access Student Portal</h2>
              <p>Check your child's academic progress, attendance, and school activities in real-time.</p>
              <button className="btn btn-primary">Login to Portal</button>
            </div>
          </div>
        </section>

        {/* Announcements */}
        <section className="parents-section announcements-section">
          <div className="parents-container">
            <h2>Latest Announcements</h2>
            <div className="announcements-grid">
              {announcements.map((announcement) => (
                <div key={announcement.id} className={`announcement-card ${announcement.highlight ? 'highlight' : ''}`}>
                  <div className="announcement-category">{announcement.category}</div>
                  <h3>{announcement.title}</h3>
                  <p className="announcement-date">{new Date(announcement.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
              ))}
            </div>
            <div className="circulars-section">
              <h3>Downloadable Circulars</h3>
              <div className="circulars-list">
                {[
                  { name: 'Term 1 Academic Calendar 2025.pdf', size: '2.4 MB' },
                  { name: 'School Dress Code Policy.pdf', size: '1.8 MB' },
                  { name: 'Transport & Routes Information.pdf', size: '3.1 MB' },
                  { name: 'School Holidays & Dates 2025.pdf', size: '956 KB' },
                ].map((file, idx) => (
                  <div key={idx} className="circular-item">
                    <div className="circular-info">
                      <FaDownload className="circular-icon" />
                      <div>
                        <p className="circular-name">{file.name}</p>
                        <p className="circular-size">{file.size}</p>
                      </div>
                    </div>
                    <button className="btn-download">Download</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Fee Structure */}
        <section className="parents-section fee-structure">
          <div className="parents-container">
            <h2>Fee Structure 2025</h2>
            <div className="fee-table-responsive">
              <table className="fee-table">
                <thead>
                  <tr>
                    <th>Level</th>
                    <th>Tuition</th>
                    <th>Activity Fee</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((item, idx) => (
                    <tr key={idx}>
                      <td>{item.level}</td>
                      <td>KES {item.tuition}</td>
                      <td>KES {item.activity}</td>
                      <td className="total">KES {item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="payment-info">
              <h3>Payment Options</h3>
              <div className="payment-methods">
                <div className="payment-method">
                  <h4>🔐 M-Pesa</h4>
                  <p>Dial *384*1# or upload receipt in portal</p>
                </div>
                <div className="payment-method">
                  <h4>🏦 Bank Transfer</h4>
                  <p>Account details available in parent portal</p>
                </div>
                <div className="payment-method">
                  <h4>💳 Card Payment</h4>
                  <p>Pay securely through parent portal</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Communication Center */}
        <section className="parents-section communication-center">
          <div className="parents-container">
            <h2>Communication & Support</h2>
            <div className="communication-grid">
              <div className="comms-card">
                <FaPhone className="comms-icon" />
                <h3>Call School Office</h3>
                <p>Mon-Fri: 8:00 AM - 4:00 PM</p>
                <a href="tel:+254706280170">+254 706 280 170</a>
              </div>
              <div className="comms-card">
                <FaEnvelope className="comms-icon" />
                <h3>Email</h3>
                <p>Send queries anytime</p>
                <a href="mailto:info@mec.ac.ke">info@mec.ac.ke</a>
              </div>
              <div className="comms-card whatsapp-card">
                <FaWhatsapp className="comms-icon" />
                <h3>WhatsApp</h3>
                <p>Quick messages & updates</p>
                <button className="btn btn-whatsapp" onClick={() => window.open('https://wa.me/0706280170', '_blank')}>
                  Chat Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Transport & Routes */}
        <section className="parents-section transport-section">
          <div className="parents-container">
            <h2>
              <FaBus /> Transport & Routes
            </h2>
            <div className="transport-note">
              <p>Our school offers organized transport to students throughout Nairobi and its environs. Download the transport document to see available routes and schedules.</p>
              <button className="btn btn-primary">
                <FaDownload /> Download Transport Info
              </button>
            </div>
          </div>
        </section>

        {/* Academic Calendar */}
        <section className="parents-section calendar-section">
          <div className="parents-container">
            <h2>
              <FaCalendar /> Academic Calendar 2025
            </h2>
            <div className="calendar-grid">
              {[
                { term: 'Term 1', start: 'Jan 6', end: 'Mar 28' },
                { term: 'Term 2', start: 'Apr 14', end: 'Jun 27' },
                { term: 'Term 3', start: 'Jul 21', end: 'Sep 26' },
                { term: 'Term 4', start: 'Oct 13', end: 'Dec 12' },
              ].map((item, idx) => (
                <div key={idx} className="calendar-card">
                  <h3>{item.term}</h3>
                  <p>{item.start} - {item.end}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events & PTA */}
        <section className="parents-section events-pta">
          <div className="parents-container">
            <h2>Events & PTA Meetings</h2>
            <div className="events-list">
              {[
                { title: 'PTA General Meeting', date: 'April 5, 2025' },
                { title: 'School Sports Day', date: 'April 12, 2025' },
                { title: 'Parent-Teacher Conferences', date: 'April 18-20, 2025' },
                { title: 'Arts & Culture Festival', date: 'May 10, 2025' },
              ].map((event, idx) => (
                <div key={idx} className="event-item">
                  <FaCalendar className="event-icon" />
                  <div>
                    <h4>{event.title}</h4>
                    <p>{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="parents-section faq-section">
          <div className="parents-container">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-accordion">
              {faqs.map((faq) => (
                <div key={faq.id} className="faq-item">
                  <button
                    className={`faq-question ${openFAQ === faq.id ? 'active' : ''}`}
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <span>{faq.question}</span>
                    <FaChevronDown className="faq-chevron" />
                  </button>
                  {openFAQ === faq.id && <div className="faq-answer">{faq.answer}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ParentsHub;
