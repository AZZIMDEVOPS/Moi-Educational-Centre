import { Link, useNavigate } from "react-router-dom"
import { jobs } from "../../data/jobs"
import { PiDotOutlineFill } from "react-icons/pi";
import { TbArrowNarrowRight } from "react-icons/tb";

const VacanciesPage = () => {
    const navigate = useNavigate();
  return (
         <>
                <div className="vacancies-page-hero">
                        <div className="inner-row">
                                    <div className="vacancies-page-content">
                                            <div className="vacancies-intro">
                                                        <h3>Vacancies at MEC</h3>
                                                        <h2>Join our Team</h2>
                                                        <p>Moi Educational Centre (MEC) is a premier institution offering the CBC curriculum dedicated to nurturing outstanding learners. We are seeking highly qualified, ethical, and committed professionals to join us in sustaining and advancing our tradition of excellence across all schools.</p>
                                            </div>
                                            <div className="vacancies-wrap">
                                                    <div className="vacancies-wrap-intro">
                                                                <h3>Open positions <span>{jobs.length}</span></h3>
                                                    </div>
                                                    <div className="vacancies-wrap-list">
                                                            { jobs.map(item => 
                                                                    <div className="vacancy-moja" key={item.id} onClick={() => navigate(item.link)}>
                                                                            <div className="vacancy-moja-intro">
                                                                                    <h5>Job</h5>
                                                                                     { item.id === 485 || item.id == 345 || item.id === 346 ? "" : 
                                                                                        item.id === 1233 ? 
                                                                                            <>
                                                                                                  <span><PiDotOutlineFill /></span>
                                                                                                  <h5>Application deadline: 4th February, 2026</h5>
                                                                                            </>
                                                                                            :
                                                                                     <>
                                                                                           <span><PiDotOutlineFill /></span>
                                                                                           <h5>Application deadline: 30 November, 2025</h5>
                                                                                    </>}
                                                                            </div>
                                                                            <div className="vacancy-moja-block">
                                                                                    <div className="vacancy-block-texts">
                                                                                                <h3>{item.title}</h3>
                                                                                                <p>{item.summary}</p>
                                                                                    </div>
                                                                                    <Link to={item.link}>Apply <span><TbArrowNarrowRight /></span></Link>
                                                                            </div>
                                                                    </div>
                                                            )}
                                                    </div>
                                            </div>
                                    </div>
                        </div>
                </div>
         </>
  )
}

export default VacanciesPage