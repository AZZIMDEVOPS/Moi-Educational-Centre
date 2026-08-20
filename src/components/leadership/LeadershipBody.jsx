import { useState } from "react"
import { leaders } from "../../data/leaders"
import LeadershipModal from "./LeadershipModal"

const LeadershipBody = () => {
    const [ activeLeader, setActiveLeader ] = useState("");
    const [ isModalActive, setIsModalActive ] = useState(false);

    const openModal = (val) => {
            setActiveLeader(val);
            setIsModalActive(true)
    }
  return (
    <div className="leadership-body">
             <div className="inner-row">
                       <div className="leadership-body-content">
                                   <div className="leadership-body-intro">
                                           <h3>Leadership Team at MEC</h3>
                                           <h1>Guiding the Vision, Leading with Purpose</h1>
                                           <p>At the heart of Moi Educational Centre is a team of dedicated leaders driven by a shared commitment to excellence, integrity and student growth. Together, they set the tone for a thriving learning environment inspiring both staff and students.</p>
                                   </div>

                                   <div className="leadership-content-row">
                                              { leaders.map(item =>
                                                 <div className="team-member" key={item.id} onClick={() => openModal(item.name)}>
                                                        <img src={item.image} alt="" />
                                                        <div className="team-texts">
                                                                 <h3>{item.name}</h3>
                                                                 <p>{item.position}</p>
                                                        </div>
                                              </div>
                                              )}
                                   </div>

                                  { isModalActive ?  <LeadershipModal name={activeLeader} modalFunc={setIsModalActive} /> : ""}
                       </div>
             </div>
    </div>
  )
}

export default LeadershipBody