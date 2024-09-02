import React from "react";
import bgImage from "../../assets/bg.png"; // Replace with actual logo image paths
import logo1 from "../../assets/logoImage.jpeg"; // Replace with actual logo image paths
import logo2 from "../../assets/logoImage.jpeg";
import logo3 from "../../assets/logoImage.jpeg";
import auth from "../../assets/auth.png";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        height: "90vh", // 80% of the screen height
      }}>
      <div className="absolute inset-0 bg-[#161E28] bg-opacity-85"></div>
      <div className="relative z-10 container mx-auto flex flex-col items-start justify-center h-full p-4">
        <div className="text-white max-w-xl">
          <h1 className="text-5xl font-bold mb-4">
            Premier Screen Engraving Chemical Solutions
          </h1>
          <p className="text-sm mb-8">
            India&apos;s Trusted Distributor of High-Quality Chemicals for
            Precision Screen Engraving
          </p>
          <button className="bg-[#3C5D87] hover:bg-[#3C5D87] text-sm text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-lg shadow-lg w-[30rem]">
          <div className="absolute -top-4 left-[30%] bg-[#000029] text-lg text-white px-4 py-1 rounded-md">
            Authorized Dealers Of
          </div>
          <img src={auth} style={{width: "100%", height: "240px"}} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
