import React from "react";
import Navbar from "../components/common/navigation/Navbar";
import EventsHero from "../components/events/EventsHero";
import EventsBody from "../components/events/EventsBody";
import Footer from "../components/common/Footer";
import SEO from "../components/common/SEO";
import "../css/events-v2.css";

const Events = () => {
  return (
    <>
      <SEO
        title="School Events & Activities Calendar"
        description="Explore upcoming school events, career bootcamps, international music galas, sports tournaments, and STEM exhibitions at Moi Educational Centre."
        url="/about-MEC/school-events"
      />
      <Navbar />
      <div className="events-page-v2">
        <EventsHero />
        <EventsBody />
      </div>
      <Footer />
    </>
  );
};

export default Events;