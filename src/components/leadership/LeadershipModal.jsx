import { CgClose } from "react-icons/cg"
import { leaders } from "../../data/leaders"

const LeadershipModal = ({ name, modalFunc }) => {
   const data = leaders.find(item => item.name === name)
  return (
        <div className="leadership-modal">
               <div className="leadership-modal-content">
                         <span className="modal-close" onClick={() => modalFunc(false)}><CgClose /></span>
                         <div className="image-column">
                                 <img src={data && data.image} alt="" />
                         </div>
                        <div className="description-column">
                                <div className="description-column-texts">
                                         <h3>{data && data.name}</h3>
                                         <h4>{data && data.position}</h4>
                                         { data && data.description.map(item => <p key={item}>{item}</p>)}
                                         { data && data.quote && <p>{data.quote.intro}<span>{data.quote.text}</span></p>}
                                </div>                
                        </div>
               </div>
    </div>
  )
}

export default LeadershipModal