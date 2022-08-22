import React from "react";
import DetailsSection from "../components/DetailsSection/DetailsSection";
import HeroSection from "../components/HeroSection/HeroSection";

import image from "../assets/images/hands.png";

const LandingPage = () => {
  return (
    <>
      <div className="px-4 sm:px-14">
        <HeroSection />
      </div>
      <EighteenPlus />
      <DetailsSection />
      <div className="flex justify-center items-center mt-10">
        <img src={image} alt="" className="lg:w-3/6" />
      </div>
    </>
  );
};

const EighteenPlus = () => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50  flex justify-center items-center">
      <div className="bg-white p-10 rounded-md space-y-4">
        <div className="text-2xl">Are you 18 or older?</div>
        <div className="space-x-4 flex justify-end">
          <ScottsButton>No</ScottsButton>
          <ScottsButton>Yes</ScottsButton>
        </div>
      </div>
    </div>
  );
};

function ScottsButton({ children }) {
  return (
    <button className="bg-darkGrey text-white py-2 px-6 rounded-md">
      {children}
    </button>
  );
}

export default LandingPage;
