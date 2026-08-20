//import logo1 from "../../assets/cambridge.png"
import logo2 from "../../assets/abrsm.gif"
import logo3 from "../../assets/pearson.png"
import logo4 from "../../assets/edexcel.png"
import logo5 from "../../assets/kais.png"
import logo6 from "../../assets/ncc.png"

const Accreditations = () => {
  return (
    <div className="accreditations-section">
              <h3>Accreditations</h3>
              <div className="logos">
                       {/* <img src={logo1} alt="" /> */}
                       <img src={logo2} alt="" />
                       <img src={logo3} alt="" />
                       <img src={logo4} alt="" />
                       <img src={logo5} alt="" />
                       <img src={logo6} alt="" />
              </div>
    </div>
  )
}

export default Accreditations