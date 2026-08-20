import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/common/navigation/Navbar"
import { TbArrowNarrowLeft } from "react-icons/tb";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";

import { jobs } from "../data/jobs";
import Footer from "../components/common/Footer";
const SingleVacancy = () => {
    const { title } = useParams();
   const job = jobs.find(item => item.url_param === title);
   const navigate = useNavigate();
  return (
    <>
         <Navbar />
         <div className="single-vacancy-body">
                  <div className="inner-row">
                           <div className="single-vacancy-content">
                                    <button onClick={() => navigate("/about-MEC/vacancies")}><span><TbArrowNarrowLeft /></span> Back to all vacancies</button>

                                    <div className="single-vacancy-texts">
                                              <h2>{job.title}</h2>
                                              <p>{job.summary}</p>

                                              <h3>Key Responsibilities</h3>
                                               { job.id === 485 || job.id ===345 || job.id === 346 ?
                                                        <div className="responsibilities-tweak">
                                                                 { job.responsibilities.map(item => 
                                                                       <div className="responsibility-block" key={item.id}>
                                                                                <h4>{item.title}</h4>
                                                                                <ul>
                                                                                        { item.list.map(kitu => <li key={kitu}><span><TbSquareRoundedCheckFilled /></span>{kitu}</li>)}
                                                                                </ul>
                                                                       </div>
                                                                 )}
                                                        </div>
                                                      :
                                                      <ul>
                                                           { job.responsibilities.map(item => <li key={item}><span><TbSquareRoundedCheckFilled /></span>{item}</li>)}
                                                      </ul>
                                                 }
                                               { job.advantage && 
                                                    <div className="advantage">
                                                          <h3>Added Advantage</h3>
                                                          <p>{job.advantage}</p>
                                                    </div>
                                               }
                                              <h3>Qualifications & Requirements</h3>
                                              <ul>
                                                     { job.qualifications.map(item => <li key={item}><span><TbSquareRoundedCheckFilled /></span> {item}</li>)}
                                              </ul>

                                              { job.competencies.length > 0 && 
                                                    <>
                                                             <h3>Competencies & Attributes</h3>
                                                            <ul>
                                                                    { job.competencies.map(item => <li key={item}><span><TbSquareRoundedCheckFilled /></span>{item}</li>)}
                                                            </ul>
                                                    </>
                                              }

                                              <div className="application-instruction">
                                                        <h4>Application instructions</h4>
                                                        <p>Send your application email with the job title as the subject line to <span>recruitment@moieducentre.ac.ke</span></p>
                                              </div>
                                    </div>
                           </div>
                  </div>
         </div>
         <Footer />
    </>
  )
}

export default SingleVacancy