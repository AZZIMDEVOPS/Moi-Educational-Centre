import { Link } from "react-router-dom";
import { FaCalendarCheck, FaWalking, FaFileSignature, FaUserGraduate, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import "../../css/admissions.css";

const STEPS = [
  { icon: FaCalendarCheck, title: "Book Tour", desc: "Schedule a personalized visit to explore our campus." },
  { icon: FaWalking, title: "Visit Campus", desc: "Experience our state-of-the-art facilities firsthand." },
  { icon: FaFileSignature, title: "Apply", desc: "Submit your online application for admission." },
  { icon: FaUserGraduate, title: "Assessment", desc: "Interactive student evaluation and parent meeting." },
  { icon: FaCheckCircle, title: "Admission", desc: "Welcome to the MEC family!" }
];

const AdmissionSection = () => {
  return (
    <div className="admission-timeline-section reveal">
      <div className="inner-row">
        
        {/* Header */}
        <div className="admission-timeline-header">
          <div className="section-eyebrow">
            <span className="section-eyebrow-dot" aria-hidden="true" />
            Admissions Journey
          </div>
          <h2 className="section-heading">
            Join the <span>MEC Family</span>
          </h2>
          <p className="section-sub" style={{ margin: "0 auto", textAlign: "center" }}>
            We’ve made our admissions process as seamless and transparent as possible. 
            From your first tour to your child's first day, we’re with you every step of the way.
          </p>
        </div>

        {/* Connected Timeline */}
        <div className="admission-timeline-wrap">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="admission-step">
                <div className="admission-step-icon">
                  <Icon />
                  {i < STEPS.length - 1 && <div className="admission-connector" />}
                </div>
                <div className="admission-step-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="admission-cta-actions">
          <Link to="/admissions/admission-process" className="btn-glow">
            Start Application <FaArrowRight />
          </Link>
          <button 
            className="btn-outline-purple"
            onClick={() => window.open('https://wa.me/254706280170?text=Hello%20MEC%20Admissions%20Team%2C%20I%20would%20like%20to%20book%20a%20school%20tour.', '_blank')}
          >
            Book a Tour
          </button>
        </div>

      </div>
    </div>
  );
};

export default AdmissionSection;