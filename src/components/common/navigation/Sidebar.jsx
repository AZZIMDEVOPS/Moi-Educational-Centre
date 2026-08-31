import { Link, NavLink } from "react-router-dom"
import logo from "../../../assets/logo.png"
import { CgClose } from "react-icons/cg"
import { TbSchool } from "react-icons/tb";
import gsap from "gsap";
import { useContext, useEffect, useRef } from "react";
import { sidebarContext } from "./navcontext";
import { GrFacebookOption } from "react-icons/gr";
import { FaX, FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { RiLinkedinFill } from "react-icons/ri";
import { SiTiktok } from "react-icons/si";

import { useLanguage, translations } from "../../../context/LanguageContext";

const Sidebar = () => {
       const { language } = useLanguage();
       const t = translations[language].nav;
       const [sidebarStatus, setSidebarStatus] = useContext(sidebarContext);
       const sidebarRef = useRef();

       useEffect(() => {
              if (sidebarStatus) {
                     sidebarRef.current.classList.add("active");

                     const tl = gsap.timeline();

                     tl.to(sidebarRef.current.querySelector(".sidebar-overlay"), {
                            opacity: 1,
                            duration: 0.5,
                            scale: 2,
                     })
                     tl.to(sidebarRef.current.querySelector(".sidebar-header"), {
                            y: 0,
                            opacity: 1,
                            duration: 0.5
                     })
                     tl.to(sidebarRef.current.querySelector(".sidebar-grid-nav"), {
                            y: 0,
                            opacity: 1,
                            duration: 0.5
                     })
              }
       }, [sidebarStatus])

       const handleRemoveSidebar = () => {
              const tl = gsap.timeline();

              tl.to(sidebarRef.current.querySelector(".sidebar-grid-nav"), {
                     y: "200px",
                     opacity: 0,
                     duration: 0.5
              })

              tl.to(sidebarRef.current.querySelector(".sidebar-header"), {
                     y: "-200px",
                     opacity: 0,
                     duration: 0.5
              })

              tl.to(sidebarRef.current.querySelector(".sidebar-overlay"), {
                     opacity: 1,
                     duration: 0.5,
                     scale: 0
              })

              setTimeout(() => {
                     sidebarRef.current.classList.remove("active");
                     setSidebarStatus(false)
              }, 1400)
       }
       return (
              <div ref={sidebarRef} className="sidebar-section">
                     <div className="sidebar-overlay"></div>
                     <div className="sidebar-content-group">
                            <div className="sidebar-content">
                                   <div className="sidebar-header">
                                          <Link to={"/"} className="logo">
                                                 <img src={logo} alt="Moi Educational Center logo" />
                                                 {/* <div className="logo-texts">
                                                     <h2>Moi Educational Center</h2>
                                                     <p>Strive for Excellence</p>
                                             </div> */}
                                          </Link>
                                          <div className="sidebar-actions">
                                                 <button onClick={() => window.open("https://wa.me/0706280170?text=Hello%20I%20would%20like%20to%20book%20a%20tour", "_blank")}>Book a Tour <span><TbSchool /></span></button>
                                                 <span className="close-btn" onClick={handleRemoveSidebar}><CgClose /></span>
                                          </div>
                                   </div>
                                   <div className="sidebar-grid-nav">
                                          <div className="sidebar-grid-col">
                                                 <div className="sidebar-grid-wrap">
                                                        <h2>About</h2>
                                                        <ul>
                                                               <li><NavLink to={"/about-MEC"}>Who We Are</NavLink></li>
                                                               <li><NavLink to={"/about-MEC/leadership"}>Our Leadership</NavLink></li>
                                                               <li><NavLink to={"/about-MEC/word-from-our-director"}>Word from Director</NavLink></li>
                                                               <li><NavLink to={"/about-MEC/vacancies"}>Vacancies</NavLink></li>
                                                               <li><NavLink to={"/about-MEC/school-events"}>School Events</NavLink></li>
                                                        </ul>
                                                 </div>
                                          </div>

                                          <div className="sidebar-grid-col">
                                                 <div className="sidebar-grid-wrap">
                                                        <h2>Education</h2>
                                                        <ul>
                                                               <li><NavLink to={"/education/CBC/pre-primary"}>Pre Primary</NavLink></li>
                                                               <li><NavLink to={"/education/CBC/lower-primary"}>Lower Primary</NavLink></li>
                                                               <li><NavLink to={"/education/CBC/upper-primary"}>Upper Primary</NavLink></li>
                                                               <li><NavLink to={"/education/CBC/junior-school"}>Junior School</NavLink></li>
                                                               <li><NavLink to={"/education/CBC/senior-school"}>Senior Primary</NavLink></li>
                                                               {/* <li><NavLink to={"/education/cambridge-system"}>Cambridge System</NavLink></li> */}
                                                        </ul>
                                                 </div>
                                          </div>

                                          <div className="sidebar-grid-col">
                                                 <div className="sidebar-grid-wrap">
                                                        <h2>Admissions</h2>
                                                        <ul>
                                                               <li><NavLink to={"/admissions/admission-process"}>Admission Process</NavLink></li>
                                                               <li><NavLink to={"/admissions/resources"}>Resources</NavLink></li>
                                                               <li><NavLink to={"/admissions/frequently-asked-questions"}>FAQs</NavLink></li>
                                                        </ul>
                                                 </div>
                                          </div>

                                          <div className="sidebar-grid-col">
                                                 <div className="sidebar-grid-wrap">
                                                        <h2>{t.extraCurricular}</h2>
                                                        <div className="sidebar-sub-section">
                                                               <h3>{t.clubs}</h3>
                                                               <ul>
                                                                      <li><NavLink to="/extra-curricular/clubs/world-scholars">World Scholars</NavLink></li>
                                                                      <li><NavLink to="/extra-curricular/clubs/music-academy">MEC Music Academy</NavLink></li>
                                                                      <li><NavLink to="/extra-curricular/clubs/computer-robotics">Computer & Robotics</NavLink></li>
                                                                      <li><NavLink to="/extra-curricular/clubs/debate-club">Debate Club</NavLink></li>
                                                                      <li><NavLink to="/extra-curricular/clubs/homescience">Homescience</NavLink></li>
                                                                      <li><NavLink to="/extra-curricular/clubs/art-club">Art Club</NavLink></li>
                                                                      <li><NavLink to="/extra-curricular/clubs/dancing">Dancing</NavLink></li>
                                                                      <li><NavLink to="/extra-curricular/clubs/drama">Drama</NavLink></li>
                                                               </ul>
                                                        </div>
                                                        <div className="sidebar-sub-section" style={{ marginTop: '20px' }}>
                                                               <h3>{t.sports}</h3>
                                                               <ul>
                                                                      <li><NavLink to="/extra-curricular/sports/athletics">Athletics</NavLink></li>
                                                                      <li><NavLink to="/extra-curricular/sports/soccer-academy">MEC Soccer Academy</NavLink></li>
                                                                      <li><NavLink to="/extra-curricular/sports/swimming">Swimming</NavLink></li>
                                                                      <li><NavLink to="/extra-curricular/sports/basketball">Basketball</NavLink></li>
                                                                      <li><NavLink to="/extra-curricular/sports/skating">Skating</NavLink></li>
                                                                      <li><NavLink to="/extra-curricular/sports/gymnastics">Gymnastics</NavLink></li>
                                                                      <li><NavLink to="/extra-curricular/sports/karate-taekwondo">Karate/Taekwondo</NavLink></li>
                                                               </ul>
                                                        </div>
                                                        <div className="sidebar-sub-section" style={{ marginTop: '20px' }}>
                                                               <h3>{t.movements}</h3>
                                                               <ul>
                                                                      <li><NavLink to="/extra-curricular/movements/girl-guides-brownies">Girl Guides & Brownies</NavLink></li>
                                                                      <li><NavLink to="/extra-curricular/movements/scouts">Scouts</NavLink></li>
                                                                      <li><NavLink to="/extra-curricular/movements/st-john-ambulance">St John Ambulance</NavLink></li>
                                                               </ul>
                                                        </div>
                                                 </div>
                                          </div>

                                          <div className="sidebar-grid-col">
                                                 <div className="sidebar-grid-wrap">
                                                        <h2>{t.portal}</h2>
                                                        <ul>
                                                               <li><NavLink to={"/portal/faculty"}>{t.faculty}</NavLink></li>
                                                               <li><NavLink to={"/portal/students"}>{t.students}</NavLink></li>
                                                               <li><NavLink to={"/portal/alumni"}>{t.alumni}</NavLink></li>
                                                               <li className="parent-portal-link"><NavLink to={"/parents-hub"}>{language === 'en' ? 'Parents Hub' : 'Tovuti ya Wazazi'}</NavLink></li>
                                                        </ul>
                                                 </div>
                                          </div>

                                          <div className="sidebar-grid-col">
                                                 <div className="sidebar-grid-wrap">
                                                        <h2>Useful Links</h2>
                                                        <ul>
                                                               <li><NavLink to={"/"}>Home</NavLink></li>
                                                               <li><NavLink to={"/gallery"}>Gallery</NavLink></li>
                                                               <li><NavLink to={"/news-and-updates"}>News & Updates</NavLink></li>
                                                               <li><NavLink to={"/contact"}>Contact Us</NavLink></li>
                                                        </ul>
                                                 </div>
                                          </div>
                                   </div>

                                   <div className="sidebar-extra">
                                          <div className="sidebar-contacts">
                                                 <h3>Contact Details</h3>
                                                 <p>Mai Mahiu Road - City Estate · Nairobi West, Nairobi, Kenya</p>
                                                 <p>+254 702 090 213</p>
                                          </div>
                                          <div className="social-links">
                                                 <ul>
                                                        {/* <li><Link to={"/"}><span><GrFacebookOption /></span></Link></li>
                                                   <li><Link to={"/"}><span><FaXTwitter /></span></Link></li> */}
                                                        <li><Link to={"https://www.instagram.com/moieducentre/"} target="_blank"><span><LuInstagram /></span></Link></li>
                                                        <li><Link to={"https://www.linkedin.com/in/moi-educational-centre-483a97398/"} target="_blank"><span><RiLinkedinFill /></span></Link></li>
                                                        <li><Link to={"https://www.tiktok.com/@moieducentre?lang=en"} target="_blank"><span><SiTiktok /></span></Link></li>
                                                 </ul>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </div>
       )
}

export default Sidebar