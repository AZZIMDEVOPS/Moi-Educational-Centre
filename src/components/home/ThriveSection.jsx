import { Link } from "react-router-dom"
const ThriveSection = () => {
  return (
    <div className="thrive-section">
              <div className="thrive-image"></div>
              <div className="thrive-section-texts">
                        <div className="section-texts-group">
                                   <h2>A Place to<span>Thrive</span></h2>
                                   <p>At Moi Educational Centre, education extends well beyond the classroom walls. We view co-curricular activities as vital to nurturing well-rounded, confident individuals. Whether through sports, the arts, leadership roles, or service clubs, students are encouraged to explore their passions, develop new skills, and cultivate a strong sense of teamwork and responsibility. </p>
                                   <p>Team spirit is cultivated through informal activities that promote connection, empathy, and mutual respect. These moments of interaction — whether on the field, on stage, or during collaborative projects — help students build lasting relationships and develop a genuine appreciation for one another’s perspectives. Such experiences play a vital role in creating a supportive environment where every learner feels valued, included, and empowered to thrive.</p>

                                   {/* <Link to={"/"}>Find out More</Link> */}
                        </div>
              </div>
    </div>
  )
}

export default ThriveSection