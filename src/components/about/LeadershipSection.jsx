import { Link } from "react-router-dom"
import principal from "../../assets/peter-chair.jpg"
import Explorations from "../home/Explorations"
import Accreditations from "../home/Accreditations"
import { leaders } from "../../data/leaders"

const LeadershipSection = () => {
  return (
    <div className="leadership-section">
             <div className="inner-row">
                        <div className="leadership-content">
                                  <div className="leadership-intro"> 
                                              <h2>Leadership at MEC</h2>
                                  </div>
                                  <div className="principal-intro">
                                           <div className="principal-image">
                                                     <img src={principal} alt="" />
                                           </div>
                                           <div className="principal-texts">
                                                     <h4>Our Board Chair</h4>
                                                     <h3>A warm welcome to Moi Educational Centre.</h3>
                                                     <p>Our purpose is to teach our pupils the knowledge, skills, and values to thrive and confidently contribute to MEC and beyond. We want to provide an education that not only acts as preparation for life, but also recognizes that these years are precious and should be memorable, joyful and transformative.</p>
                                                     <p>It’s with great pleasure that I introduce the dedicated team behind the success of Moi Educational Centre. Together, we lead with purpose, guided by shared values and a passion for excellence in education. As a team, we strive to create a dynamic and inclusive environment where students are inspired to grow, thrive, and make a difference — both within our walls and beyond them.</p>

                                                     <Link to={"/about-MEC/word-from-our-chairman"}>Word from the Chair</Link>
                                           </div>
                                  </div>

                                  <div className="leadership-group">
                                           <h2>Senior Leadership Team</h2>

                                           <div className="leadership-group-row">
                                                     { leaders.map(item => 
                                                             <div className="leader-moja" key={item.id}>
                                                                    <img src={item.image} alt="" />
                                                                    <h4>{item.name}</h4>
                                                                    <p>{item.position}</p>
                                                              </div>
                                                     )}
                                                      
                                                      {/* <div className="leader-moja">
                                                                <img src={portrait1} alt="" />
                                                                <h4>Nancy Githinji</h4>
                                                                <p>Operations</p>
                                                      </div>
                                                      <div className="leader-moja">
                                                                <img src={portrait2} alt="" />
                                                                <h4>Alex Kibosi</h4>
                                                                <p>Academics</p>
                                                      </div>
                                                      <div className="leader-moja">
                                                                <img src={portrait3} alt="" />
                                                                <h4>Dancun Andisi</h4>
                                                                <p>Exams</p>
                                                      </div>
                                                      <div className="leader-moja">
                                                                <img src={portrait4} alt="" />
                                                                <h4>Susan Kwamboka</h4>
                                                                <p>Creative Arts</p>
                                                      </div>
                                                       <div className="leader-moja">
                                                                <img src={portrait5} alt="" />
                                                                <h4>Alice Mwatheka</h4>
                                                                <p>Finance</p>
                                                      </div>
                                                      <div className="leader-moja">
                                                                <img src={portrait6} alt="" />
                                                                <h4>Florence Chepto</h4>
                                                                <p>Sciences</p>
                                                      </div>
                                                      <div className="leader-moja">
                                                                <img src={portrait7} alt="" />
                                                                <h4>Josephat Kiprop</h4>
                                                                <p>Mathematics Dept</p>
                                                      </div>
                                                      <div className="leader-moja">
                                                                <img src={portrait8} alt="" />
                                                                <h4>Vince McMahon</h4>
                                                                <p>English Dept</p>
                                                      </div>
                                                      <div className="leader-moja">
                                                                <img src={portrait9} alt="" />
                                                                <h4>Daniel Ntulale</h4>
                                                                <p>HR</p>
                                                      </div> */}
                                           </div>
                                  </div>
                        </div>

                        <Explorations />
                        <Accreditations />
             </div>
    </div>
  )
}

export default LeadershipSection