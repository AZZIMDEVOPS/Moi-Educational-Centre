import events from "../../assets/events2.jpg"

const EventsHero = () => {
  return (
     <div className="events-hero">
            <div className="inner-row">
                     <div className="events-hero-content">
                              <div className="hero-column">
                                      <h1>Events at Moi Educational Centre</h1>
                                      <p>From fun-filled sports days to inspiring talent shows and community celebrations, our school events bring learning to life and create lasting memories. There’s always something exciting happening at MEC.</p>
                            </div>
                            <div className="hero-column">
                                       <img src={events} alt="" />
                            </div>
                        </div>
            </div>
 </div>
  )
}

export default EventsHero