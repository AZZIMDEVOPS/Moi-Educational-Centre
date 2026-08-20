import { Link } from "react-router-dom"
import { TbSchool } from "react-icons/tb";
// import junior from "../../assets/pre-primary.jpg"
// import junior2 from "../../assets/junior2.jpg"
// import upper from "../../assets/upper.jpg"
// import middle from "../../assets/middle.jpg"
// import senior from "../../assets/senior.jpg"
import { BsArrowRight } from "react-icons/bs";
import { IoSchool } from "react-icons/io5";
import { cbc } from "../../data/education";

const handleBookTour = () => {
  window.open("https://wa.me/0706280170?text=Hello%20I%20would%20like%20to%20book%20a%20tour", "_blank");
};

const EducationStrip = () => {
  return (
    <div className="education-strip">
              <div className="education-strip-intro">
                       <h2>Learning with Us</h2>
                       <button onClick={handleBookTour} style={{background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', fontSize: 'inherit', fontFamily: 'inherit', padding: 0}}>Book a Tour <span><TbSchool /></span></button>
              </div>
              <h3 className="intro-title"><span>1</span>CBC Curriculumn</h3>
             <div className="education-strip-row">
                       { cbc.map(item => 
                               <div className="education-strip-moja" key={item.id}>
                                           <div className="strip-background-image">
                                                    <img src={item.image} alt="" />
                                            </div>
                                           <div className="overshadow"></div>
                                             <div className="strip-texts">
                                                       <div className="">
                                                                  <h3>{item.grade}</h3>
                                                                  <h2>{item.title}</h2>
                                                       </div>

                                                        <Link to={item.link}>Learn More <span><BsArrowRight /></span></Link>
                                             </div>
                               </div>
                       )}
                        {/* <div className="education-strip-moja">
                                   <div className="strip-background">
                                            <div className="strip-background-image">
                                                       <img src={junior} alt="" />
                                            </div>
                                            <div className="strip-background-video">
                                                    <video autoPlay loop muted>
                                                            <source src="https://res.cloudinary.com/dq6subhaj/video/upload/v1747052603/nursery-pre-prep-and-prep-v8_xwx142.mp4" type="video/mp4" />
                                                     </video>
                                            </div>
                                   </div>
                                   <div className="overshadow"></div>
                                   <div className="strip-texts">
                                             <div className="">
                                                        <h3>Age 4 - 8</h3>
                                                        <h2>Pre-primary</h2>
                                             </div>

                                              <Link to={"/"}>Learn More <span><BsArrowRight /></span></Link>
                                   </div>
                        </div>

                        <div className="education-strip-moja">
                                   <div className="strip-background">
                                            <div className="strip-background-image">
                                                       <img src={junior2} alt="" />
                                            </div>
                                            <div className="strip-background-video">
                                                    <video autoPlay loop muted>
                                                            <source src="https://res.cloudinary.com/dq6subhaj/video/upload/v1747052601/6th-form-v4_larwe3.mp4" type="video/mp4" />
                                                     </video>
                                            </div>
                                   </div>
                                   <div className="overshadow"></div>
                                   <div className="strip-texts">
                                             <div className="">
                                                        <h3>Age 6 - 8</h3>
                                                        <h2>Lower Primary</h2>
                                             </div>

                                              <Link to={"/"}>Learn More <span><BsArrowRight /></span></Link>
                                   </div>
                        </div>
                        <div className="education-strip-moja">
                                   <div className="strip-background">
                                            <div className="strip-background-image">
                                                       <img src={middle} alt="" />
                                            </div>
                                            <div className="strip-background-video">
                                                    <video autoPlay loop muted>
                                                            <source src="https://res.cloudinary.com/dq6subhaj/video/upload/v1747052601/6th-form-v4_larwe3.mp4" type="video/mp4" />
                                                     </video>
                                            </div>
                                   </div>
                                   <div className="overshadow"></div>
                                   <div className="strip-texts">
                                             <div className="">
                                                        <h3>Age 9 - 11</h3>
                                                        <h2>Upper Primary</h2>
                                             </div>

                                              <Link to={"/"}>Learn More <span><BsArrowRight /></span></Link>
                                   </div>
                        </div>

                <div className="education-strip-moja">
                                   <div className="strip-background">
                                            <div className="strip-background-image">
                                                       <img src={upper} alt="" />
                                            </div>
                                            <div className="strip-background-video">
                                                    <video autoPlay loop muted>
                                                            <source src="https://res.cloudinary.com/dq6subhaj/video/upload/v1747052601/6th-form-v4_larwe3.mp4" type="video/mp4" />
                                                     </video>
                                            </div>
                                   </div>
                                   <div className="overshadow"></div>
                                   <div className="strip-texts">
                                             <div className="">
                                                        <h3>Age 12 - 14</h3>
                                                        <h2>Junior School</h2>
                                             </div>

                                              <Link to={"/"}>Learn More <span><BsArrowRight /></span></Link>
                                   </div>
                        </div>
                        <div className="education-strip-moja">
                                   <div className="strip-background">
                                            <div className="strip-background-image">
                                                       <img src={senior} alt="" />
                                            </div>
                                            <div className="strip-background-video">
                                                    <video autoPlay loop muted>
                                                            <source src="https://res.cloudinary.com/dq6subhaj/video/upload/v1747052601/6th-form-v4_larwe3.mp4" type="video/mp4" />
                                                     </video>
                                            </div>
                                   </div>
                                   <div className="overshadow"></div>
                                   <div className="strip-texts">
                                             <div className="">
                                                        <h3>Age 15 - 17</h3>
                                                        <h2>Senior School</h2>
                                             </div>

                                              <Link to={"/"}>Learn More <span><BsArrowRight /></span></Link>
                                   </div>
                        </div> */}
             </div>

             {/* <div className="cambridge-section">
                       <h3 className="intro-title"><span>2</span>Cambridge Curriculum</h3>

                       <div className="cambridge-curriculum-row">
                                 <div className="cambridge-moja">
                                             <span><IoSchool /></span>
                                             <h3>Key Stage 1</h3>
                                             <p>Year 1 to Year 2</p>
                                 </div>
                                 <div className="cambridge-moja">
                                             <span><IoSchool /></span>
                                             <h3>Key Stage 2</h3>
                                             <p>Year 3 to Year 6</p>
                                 </div>
                                 <div className="cambridge-moja">
                                             <span><IoSchool /></span>
                                             <h3>Key Stage 3(Middle School)</h3>
                                             <p>Year 7 to Year 9</p>
                                 </div>
                                 <div className="cambridge-moja">
                                             <span><IoSchool /></span>
                                             <h3>Senior High School</h3>
                                             <p>Year 10 to Year 12</p>
                                 </div>
                       </div>
             </div> */}

             {/* <div className="strip-btn">
                         <Link to={"/education/cambridge-system"}> Explore More <span></span></Link>
             </div> */}
    </div>
  )
}

export default EducationStrip