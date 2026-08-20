import Navbar from "../components/common/navigation/Navbar"
import "../css/events.css"
import EventsHero from "../components/events/EventsHero"
import EventsBody from "../components/events/EventsBody"
import Footer from "../components/common/Footer"
const Events = () => {
  return (
    <>
           <Navbar />
           <EventsHero />
           <EventsBody />
           <Footer />
    </>
  )
}

export default Events