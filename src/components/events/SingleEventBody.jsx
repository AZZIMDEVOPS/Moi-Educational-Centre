import eventImg from "../../assets/career-event1.jpg"
import { LuCalendarDays } from "react-icons/lu";
const SingleEventBody = () => {
  return (
            <div className="single-event-page">
                     <div className="inner-row">
                               <div className="single-event-content">
                                           <div className="single-event-image">
                                                    <img src={eventImg} alt="" />
                                           </div>
                                           <div className="single-event-body">
                                                     <h2>MEC Senior School Career Week 2025: A Week of Discovery, Direction, and Dream</h2>
                                                     <div className="highlight">
                                                            <span><LuCalendarDays /></span>
                                                           <h4>Monday, 7th July to Saturday, 12th July 2025</h4>
                                                    </div>
                                                    
                                                    <div className="event-details-body">
                                                              <h3>Career Week Highlights</h3>

                                                              <div className="event-details-block">
                                                                         <h4>Tuesday, 8th July 2025: Engineering & Health Professions</h4>
                                                                         <p>The week kicks off with impactful sessions on engineering, alongside a visit from <span>Amref University</span>, where learners explore careers in health and biomedical fields.</p>
                                                              </div>
                                                              <div className="event-details-block">
                                                                          <h4>Wednesday, 9th July 2025: Aviation & Law</h4>
                                                                          <p>MEC students get an exciting glimpse into real-world careers during Career Week. They visit <span>Kenya Airways</span>, exploring various roles in aviation. <span>KCB</span> representatives also engage learners, sharing insights into careers in banking and finance. Later, a parent advocate leads a session on law, guiding students through the legal profession with personal stories and advice. These experiences offer valuable inspiration and exposure as students explore future career paths.</p>
                                                              </div>
                                                              <div className="event-details-block">
                                                                         <h4>Thursday, 10th July 2025: Journalism, Communication & Aviation</h4>
                                                                         <p><span>Daystar University</span> takes the stage with an engaging lecture on communication and journalism, giving students a glimpse into storytelling careers. The day also features a session with a professional pilot, unpacking pathways into the aviation industry.</p>
                                                              </div>
                                                              <div className="event-details-block">
                                                                         <h4>Friday, 11th July 2025: University and Career Guidance</h4>
                                                                         <p>The school partners with <span>Craydel</span>, a trusted career and education agency, to help students explore university options and make informed decisions about their next steps.</p>
                                                              </div>
                                                              <div className="event-details-block">
                                                                         <h4>Saturday, 12th July 2025: Career Day Exhibition</h4>
                                                                         <p>Saturday marks the grand finale,  a day of booth engagement where students, parents, and educators interact with representatives from leading institutions and agencies, including:</p>
                                                                         <div className="finale-wrapper">
                                                                                   <h5>Universities</h5>
                                                                                    <ol>
                                                                                                <li>Kabarak University</li>
                                                                                                <li>Daystar University</li>
                                                                                                <li>Catholic University of Eastern Africa(CUEA)</li>
                                                                                                <li>United States International University(USIU)</li>
                                                                                                <li>Boma</li>
                                                                                                <li>Strathmore University</li>
                                                                                                <li>KCA University</li>
                                                                                                <li>AMREF International University</li>
                                                                                                <li>Open University of Kenya</li>
                                                                                                <li>Brookhurst Internation School</li>
                                                                                    </ol>
                                                                                    <h5>Agencies</h5>
                                                                                    <ol>
                                                                                             <li>Kenya Airways (KQ)</li>
                                                                                             <li>Educare</li>
                                                                                             <li>IDP</li>
                                                                                             <li>Craydel</li>
                                                                                             <li>Uniserv</li>
                                                                                    </ol>
                                                                         </div>
                                                                         <p>With booths showcasing academic programs, scholarship opportunities, industry advice, and mentorship possibilities, this closing day gives our students hands-on access to the future they envision.</p>
                                                              </div>

                                                              <div className="final-block">
                                                                        <h3>Unlocking Potential, One Day at a Time</h3>
                                                                         <p>Career Week 2025 isn’t just an event ,  it’s a transformative journey. It’s about unlocking potential, exposing learners to the world of possibilities, and helping them take confident, informed steps toward the future.</p>
                                                                         <p>Stay tuned as our learners continue shaping their stories ,  one conversation, one opportunity, and one career dream at a time.</p>
                                                              </div>
                                                    </div>
                                           </div>
                               </div>
                     </div>
           </div>
  )
}

export default SingleEventBody