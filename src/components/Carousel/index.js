import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center flex items-center h-[100vh] lg:h-[80vh]"
      style={{
        backgroundImage:
          "url(https://ik.imagekit.io/u51majcf2/SaralDyeChems/bg.png)",
      }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#161E28] bg-opacity-85"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between lg:h-full p-4">
        {/* Left Section - Text Content */}
        <div className="text-white max-w-2xl mb-8 lg:mb-0 sm:mt-1 lg:ml-4">
          <h1 className="text-3xl lg:text-5xl font-bold mb-2 lg:leading-snug">
            Premier Screen Engraving & Digital Printing Chemical Solutions
          </h1>
          <p className="text-sm mb-4 lg:mb-8">
            India&apos;s Trusted Distributor of High-Quality Chemicals for
            Precision Screen Engraving and Digital Printing
          </p>
          <a href="/#products">
            <button className="bg-[#3C5D87] hover:bg-[#ffffff] hover:text-[#3C5D87] text-white py-3 px-5 rounded text-xs font-bold">
              Get Started
            </button>
          </a>
        </div>

        {/* Right Section - Image Content */}
        <div className="lg:absolute top-1/2 right-12 transform -translate-y-1/6 lg:-translate-y-1/2 bg-white rounded-lg shadow-lg lg:w-[30rem]">
          <div className="absolute -top-4 lg:-top-4 left-[23%] lg:left-[30%] bg-[#000029] text-lg text-white px-4 py-1 rounded-md">
            Authorized Dealers Of
          </div>
          <img
            src="https://ik.imagekit.io/u51majcf2/SaralDyeChems/authorisedDealer.png"
            className="w-full h-[240px] object-contain rounded-lg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
