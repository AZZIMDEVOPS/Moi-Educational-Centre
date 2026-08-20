import { Link } from "react-router-dom";
import event1 from "../../assets/career-event1.jpg"
import { LuCalendarDays } from "react-icons/lu";
const EventsBody = () => {
  return (
    <div className="events-body">
              <div className="inner-row">
                        <div className="events-body-content">
                                  <div className="events-body-intro">
                                             <h3>All Events</h3>
                                  </div>

                                  <div className="events-body-row">
                                            <div className="event-body-moja">
                                                       <div className="event-body-image">
                                                                <img src={event1} alt="" />
                                                       </div>
                                                       <div className="event-body-texts">
                                                                 <h3>MEC Senior School Career Week 2025: A Week of Discovery, Direction, and Dreams</h3>
                                                                 <p>At Moi Educational Centre Senior School, the journey toward a meaningful future doesn't wait until graduation, it begins now. That spirit has alive during this year's Career Week, a vibrant, speaker-led Career Bootcamp. Each day brings fresh perspectives, career exposure, and real world insight as students engage directly with professionals, institutions, and industries shaping the 21st century workforce.</p>

                                                                 <div className="highlight">
                                                                             <span><LuCalendarDays /></span>
                                                                             <h4>Monday, 7th July to Saturday, 12th July 2025</h4>
                                                                 </div>
                                                       </div>
                                                       <div className="action-btn">
                                                                <Link to={"/about-MEC/school-events/MEC-Senior-School-Career-Week-2025"}>See Details</Link>
                                                       </div>
                                            </div>
                                  </div>
                        </div>
              </div>
    </div>
  )
}

export default EventsBody