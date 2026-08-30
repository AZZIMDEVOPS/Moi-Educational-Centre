import ContactForm from "./ContactForm"
import { MdPhone } from "react-icons/md";
import { BsEnvelopeAt } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { FaBookOpen, FaGraduationCap, FaMoneyCheckAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactHero = () => {

  const contactCards = [
    {
      id: 1,
      anchorId: "senior-school-contact",
      title: "Senior School",
      subtitle: "Reception/Admissions",
      Icon: FaBookOpen,
      details: [
        { type: "phone", value: "0797 339 900" },
        { type: "phone", value: "0777 339 909" },
        { type: "email", value: "highschool@moieducentre.ac.ke" }
      ]
    },
    {
      id: 2,
      anchorId: "primary-school-contact",
      title: "Primary & Junior School",
      subtitle: "Reception/Admissions",
      Icon: FaGraduationCap,
      details: [
        { type: "phone", value: "0702 090 213" },
        { type: "email", value: "info@moieducentre.ac.ke" }
      ]
    },
    {
      id: 3,
      anchorId: "finance-office-contact",
      title: "Finance",
      subtitle: "Accounts Department",
      Icon: FaMoneyCheckAlt,
      details: [
        { type: "phone", value: "0113 693 624" },
        { type: "email", value: "accounts@moieducentre.ac.ke" }
      ]
    },
    {
      id: 4,
      anchorId: "location",
      title: "Location",
      subtitle: "Visit Us",
      Icon: FaMapMarkerAlt,
      details: [
        { type: "address", value: "Mai Mahiu Rd, City Estate, Nairobi West" }
      ]
    }
  ];

  return (
    <div className="contact-hero-modern">
      {/* Animated Background Elements */}
      <div className="animated-bg-elements">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
      </div>

      <div className="inner-row">
        <div className="contact-hero-content-modern">
          {/* Hero Section */}
          <div className="contact-intro-modern">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>Let's Connect</span>
            </div>
            <h1 className="hero-title">
              Get in Touch with <span className="mec-purple">MEC</span>
            </h1>
            <p className="hero-description">
              Whether you're exploring a new school for your child or need support from any of our departments, we're here to help. Feel free to reach out with your questions, and a member of our team will be happy to assist you.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="contact-cards-container" id="contact-departments">
            <div className="cards-grid">
              {contactCards.map((card, index) => (
                <div
                  key={card.id}
                  id={card.anchorId}
                  className="contact-card"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="card-background"></div>
                  <div className="card-icon">
                    <card.Icon />
                  </div>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-subtitle">{card.subtitle}</p>
                  
                  <div className="card-details">
                    {card.details.map((detail, idx) => (
                      <div key={idx} className="detail-item">
                        {detail.type === "phone" && <MdPhone className="detail-icon" />}
                        {detail.type === "email" && <BsEnvelopeAt className="detail-icon" />}
                        {detail.type === "address" && <SlLocationPin className="detail-icon" />}
                        <span>{detail.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="card-hover-effect"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="map-section-modern" id="map-section">
            <h2 className="section-title">Find Us On The Map</h2>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.4078479914624!2d36.819154!3d-1.314211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1056af73d3f9%3A0x3c605faf6420bcac!2sMoi%20Educational%20Centre!5e1!3m2!1sen!2ske!4v1748390022519!5m2!1sen!2ske" 
                width="100%" 
                height="500"  
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Form Section */}
          <div className="form-section-modern" id="contact-form-section">
            <div className="form-header">
              <h2 className="section-title">Send Us A Message</h2>
              <p className="form-subtitle">We'll respond to your inquiry as soon as possible</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactHero