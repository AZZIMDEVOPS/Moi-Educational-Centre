import school from "../../assets/school6.jpg"
import experience from "../../assets/experience2.jpg"
const AboutHero = () => {
  return (
    <div className='about-hero'>
                <div className="inner-row">
                       <div className="about-hero-content">
                                  <div className="about-hero-texts">
                                             <h3>About MEC</h3>
                                            <h1>Rooted in Legacy, Growing with Purpose</h1>
                                            <p>For over four decades, we've built a foundation of excellence, evolving with intention and vision. Every learner is guided to rise with confidence, purpose, and a drive to make meaningful impact.</p>
                                  </div>
                                 <div className="about-hero-image">
                                          <img src={school} alt="" />
                                 </div> 
                       </div>
                       <div className="focus-point">
                                    <h2>Who We Are</h2>
                                    <p>At Moi Educational Centre, students are at the heart of everything we do. We are deeply committed to unlocking their full potential by nurturing growth, building competence, and developing the skills they need to thrive. Through personalised support and a focus on meaningful progress, we empower learners to pursue their passions and choose their own path with confidence and clarity.</p>
                       </div>

                       <div className="history-section">
                                  <div className="history-image">
                                           <img src={experience} alt="" />
                                  </div>
                                  <div className="history-texts">
                                            <h3>MEC History</h3>
                                            <h2>A Vision That Became a Legacy. A Legacy That Continues to Inspire.</h2>
                                            <p>In 1986, in the heart of Nairobi, a powerful vision was born, one rooted in the belief that every Kenyan child deserves access to quality, affordable education. This bold dream belonged to the late President Daniel Toroitich arap Moi, whose unwavering commitment to education laid the foundation for what would become Moi Educational Centre (MEC).</p>
                                            <p>From its humble beginnings, MEC has grown into a dynamic day school, offering a seamless learning journey from early years through high school. For over four decades, it has stood not just as a school, but as a transformative space — a place where young minds are shaped, character is forged, and futures are launched. At a time when quality education was a privilege for a few, MEC emerged as a beacon of opportunity, opening its doors to learners from all walks of life and empowering them to dream fearlessly and rise with purpose.</p>
                                            <p>Guided by enduring values of accessibility, integrity, and excellence, MEC has continually evolved while staying true to its founding mission. From embracing globally respected curriculum like the Competency-Based Curriculum (CBC), to investing in exceptional educators and modern facilities, every step forward has been intentional. Our journey is one of transformation — fuelled by purpose, grounded in legacy, and driven by a commitment to nurture well-rounded students ready to lead, serve, and make a lasting impact in the world.</p>
                                  </div>
                       </div>
                </div>
    </div>
  )
}

export default AboutHero