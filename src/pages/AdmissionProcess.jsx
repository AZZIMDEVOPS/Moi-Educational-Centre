import AdmissionProcessBody from "../components/admissions/AdmissionProcessBody"
import AdmissionForm from "../components/admissions/AdmissionForm"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import { FaWhatsapp, FaPhone } from "react-icons/fa"
import "../css/admissions.css"
import "../css/admissions-v2.css"
import SEO from "../components/common/SEO"

const AdmissionProcess = () => {
  return (
    <>
      <SEO
        title="Admission Process"
        description="Apply for admission at Moi Educational Centre. View requirements and submit your application online."
        url="/admissions/admission-process"
      />
      <Navbar />
      <AdmissionProcessBody />
      <div className="admissions-page-v2" id="application-form">
        <AdmissionForm />
      </div>
      
      {/* Floating Quick Actions */}
      <div className="adm-floating-actions">
        <a href="https://wa.me/254706280170" target="_blank" rel="noreferrer" className="adm-float-btn adm-float-whatsapp" aria-label="WhatsApp Admissions">
          <FaWhatsapp />
        </a>
        <a href="tel:+254706280170" className="adm-float-btn adm-float-call" aria-label="Call Admissions">
          <FaPhone />
        </a>
      </div>

      <Footer />
    </>
  )
}

export default AdmissionProcess