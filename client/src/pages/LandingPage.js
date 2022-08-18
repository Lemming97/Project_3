import React from "react";
import DetailsSection from "../components/DetailsSection/DetailsSection";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbar/Navbar";

import image from "../assets/images/hands.png";

const LandingPage = () => {
  return (
    <>
      <div className="px-4 sm:px-14">
        <Navbar />
        <HeroSection />
      </div>
      <DetailsSection />
      <div className="flex justify-center items-center mt-10">
        <img src={image} alt="" className="lg:w-3/6" />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
