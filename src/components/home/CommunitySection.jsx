import { Link } from "react-router-dom"
const CommunitySection = () => {
  return (
    <div className="unique-section">
             <div className="section-texts">
                        <div className="section-texts-group">
                                    <h3>Community & Outreach</h3>
                                   <h2>Sharing <span>Experiences</span></h2>
                                   <p>Moi Educational Centre is deeply committed to outreach and community engagement, working in partnership with local schools, charitable organisations, and social initiatives. We believe in the power of service learning to broaden perspectives and instill a sense of purpose beyond academic success.</p>
                                   <p>Our outreach programme includes a wide range of activities — from environmental clean-up projects and mentorship programmes to visits to children’s homes and community health awareness drives. These experiences serve as a meaningful extension of the classroom, nurturing empathy, leadership, and a strong sense of social responsibility in our learners.</p>

                                   {/* <Link to={"/"}>Find out More</Link> */}
                        </div>
            </div>
            <div className="community-image"></div>
    </div>
  )
}

export default CommunitySection