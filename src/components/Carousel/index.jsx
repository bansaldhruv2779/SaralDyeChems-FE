// import React from "react";
// import bgImage from "../../assets/bg.png"; // Replace with actual logo image paths
// import authorisedDealer from "../../assets/authorisedDealer.png";

// const HeroSection = () => {
//   return (
//     <div
//       className="relative bg-cover bg-center flex items-center h-[80vh] lg:h-[80vh]"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         // height: "80vh",
//       }}>
//       <div className="absolute inset-0 bg-[#161E28] bg-opacity-85"></div>
//       <div className="relative z-10 container mx-auto flex flex-col items-start justify-center h-full p-4 left-5">
//         <div className="text-white max-w-2xl">
//           <h1 className="text-5xl font-bold mb-2" style={{lineHeight: "4rem"}}>
//             Premier Screen Engraving Chemical Solutions
//           </h1>
//           <p className="text-sm mb-8">
//             India&apos;s Trusted Distributor of High-Quality Chemicals for
//             Precision Screen Engraving
//           </p>
//           <a href="/#products">
//             <button className="bg-[#3C5D87] hover:bg-[#ffffff] hover:text-[#3C5D87] text-white py-3 px-5 rounded text-xs font-bold">
//               Get Started
//             </button>
//           </a>
//         </div>
// <div className="absolute top-1/2 right-12 transform -translate-y-1/2 bg-white rounded-lg shadow-lg lg:w-[30rem]">
//   <div className="absolute -top-4 lg:-top-4 left-[23%] lg:left-[30%] bg-[#000029] text-lg text-white px-4 py-1 rounded-md">
//     Authorized Dealers Of
//   </div>
//   <img
//     src={authorisedDealer}
//     style={{width: "100%", height: "240px"}}
//     alt=""
//   />
// </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// import React from "react";
// import bgImage from "../../assets/bg.png"; // Replace with actual logo image paths
// import authorisedDealer from "../../assets/authorisedDealer.png";

// const HeroSection = () => {
//   return (
//     <div
//       className="relative bg-cover bg-center flex items-center h-[80vh] lg:h-[80vh]"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//       }}>
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-[#161E28] bg-opacity-85"></div>

//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col lg:flex-row justify-between lg:items-center container mx-auto p-4 lg:h-full">
//         {/* Left Section - Text Content */}
//         <div className="text-white max-w-2xl lg:w-1/2 lg:h-full h-[50%]  flex flex-col justify-center space-y-4  lg:mt-0">
//           <h1
//             className="text-3xl lg:text-5xl font-bold lg:leading-snug"
//             // style={{lineHeight: "4rem"}}
//           >
//             Premier Screen Engraving Chemical Solutions
//           </h1>
//           <p className="lg:text-sm">
//             India&apos;s Trusted Distributor of High-Quality Chemicals for
//             Precision Screen Engraving
//           </p>
//           <a href="/#products">
//             <button className="bg-[#3C5D87] hover:bg-[#ffffff] hover:text-[#3C5D87] text-white py-3 px-5 rounded text-xs font-bold">
//               Get Started
//             </button>
//           </a>
//         </div>

//         {/* Right Section - Image Content */}
// <div className="relative rounded-lg shadow-lg lg:w-[30rem] w-[90%] lg:mt-0 mt-10 flex flex-col items-center ">
//   <div className="absolute bg-[#000029] text-white px-4 p-1 rounded-md mb-4  top-2 lg:top-[-15px]  z-10">
//     Authorized Dealers Of
//   </div>
//   <img
//     src={authorisedDealer}
//     className="w-full h-[240px] object-contain"
//     alt="Authorized Dealer"
//   />
// </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
import React from "react";
import bgImage from "../../assets/bg.png"; // Replace with actual logo image paths
import authorisedDealer from "../../assets/authorisedDealer.png";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center flex items-center h-[80vh] lg:h-[80vh]"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#161E28] bg-opacity-85"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between lg:h-full p-4">
        {/* Left Section - Text Content */}
        <div className="text-white max-w-2xl mb-8 lg:mb-0">
          <h1
            className="text-3xl lg:text-5xl font-bold mb-2 lg:leading-snug"
            // style={{lineHeight: "4rem"}}
          >
            Premier Screen Engraving Chemical Solutions
          </h1>
          <p className="text-sm mb-4 lg:mb-8">
            India&apos;s Trusted Distributor of High-Quality Chemicals for
            Precision Screen Engraving
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
            src={authorisedDealer}
            style={{width: "100%", height: "240px"}}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
