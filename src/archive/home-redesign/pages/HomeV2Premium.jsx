import React, { useEffect } from 'react';
import Navbar from '../components/common/navigation/Navbar';
import Footer from '../components/common/Footer';
import CinematicHeroSection from '../components/home/CinematicHeroSection';
import CinematicLegacyTimeline from '../components/home/CinematicLegacyTimeline';
import WhyMECPremium from '../components/home/WhyMECPremium';
import '../css/premium-global.css';
import '../css/premium-home.css';

const HomeV2Premium = () => {
  useEffect(() => {
    // Smooth scroll initialization
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Hero Section - Cinematic 40 Years Celebration */}
      <CinematicHeroSection />

      {/* Legacy Timeline - Interactive Journey */}
      <CinematicLegacyTimeline />

      {/* Why MEC - Premium Features */}
      <WhyMECPremium />

      {/* Additional Sections (Coming) */}
      <div className="spacer-section"></div>

      <Footer />
    </>
  );
};

export default HomeV2Premium;
