import React from "react";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/navigation/Navbar";
import SingleEventBody from "../components/events/SingleEventBody";
import "../css/events-v2.css";

const SingleEventPage = () => {
  return (
    <>
      <Navbar />
      <SingleEventBody />
      <Footer />
    </>
  );
};

export default SingleEventPage;