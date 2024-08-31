// import React from "react";
// import {
//   IconBrandFacebook,
//   IconBrandTwitter,
//   IconBrandInstagram,
//   IconChevronRight,
// } from "@tabler/icons-react";
// import logo from "../../assets/logo.png";

// function Footer() {
//   return (
//     <footer className="bg-[#3C5D87] text-white py-8 text-[12px]">
//       <div className="container mx-auto px-4 flex justify-between">
//         <div className="w-1/4 mr-8">
//           <div className="h-26 w-26 bg-transparent mb-4 ">
//             <img
//               src={logo}
//               alt="Logo"
//               className="h-full w-full object-contain"
//             />
//           </div>
//         </div>
//         <div className="w-1/4">
//           <h3 className="font-bold mb-2">Domestic Network</h3>
//           <ul>
//             {[
//               "Panjab",
//               "Himachal Pradesh",
//               "Haryana",
//               "UP",
//               "West Bengal",
//               "Orissa",
//               "Tamil Nadu",
//               "Gujarat",
//               "Rajasthan",
//               "Madhya Pradesh",
//               "Andhra Pradesh",
//             ].map((state, index) => (
//               <li key={index} className="mb-1">
//                 • {state}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="w-1/4">
//           <h3 className="font-bold mb-2">International Network</h3>
//           <ul>
//             {["Nepal", "South Africa"].map((country, index) => (
//               <li key={index} className="mb-1">
//                 • {country}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="w-1/4">
//           <h3 className="font-bold mb-2">Top Products</h3>
//           <ul>
//             {[
//               "Bolting Cloth",
//               "Ezycoat 216",
//               "Ezycoat 828",
//               "Rotostar HT/MT",
//               "Photoemulsion 747",
//               "Endering Remover",
//               "Nuspray Paint",
//               "Ammonium Dichromate",
//               "Arkabond",
//               "Ezycoat 999C",
//               "Acetone",
//               "Ethyl Acetate",
//               "Stripper",
//             ].map((product, index) => (
//               <li
//                 key={index}
//                 className="mb-1 flex"
//                 style={{display: "flex", alignItems: "center"}}>
//                 <IconChevronRight style={{width: "16px"}} />
//                 {product}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="w-1/4">
//           <h3 className="font-bold mb-2">Head Office</h3>
//           <p className="mb-2">
//             402, P-2, Best Business Park, Netaji Subhash Place, Pitampura,
//             (110034)
//           </p>

//           <h3 className="font-bold mb-2">Branch Panipat</h3>
//           <p className="mb-2">
//             Plot No. 482, Sector-25, Part-II, Huda Ind, Area, Panipat-132103
//           </p>

//           <h3 className="font-bold mb-2">Branch Ludhiana</h3>
//           <p className="mb-2">
//             221/L, Indra Colony, Chandigarh Road, B/H.S.K. Marbal,
//             Ludhiana-141008
//           </p>

//           <h3 className="font-bold mb-2">Contact Info</h3>
//           <p className="mb-2">📧 saraldyes@gmail.com</p>
//           <p>📞 +91 9810024522, +91 9810166261</p>
//         </div>
//       </div>
//       <div className="container mx-auto px-4 mt-8 flex justify-between items-center">
//         <p>&copy; 2024 Saral Dye Chems. All Rights Reserved</p>
//         <div className="flex space-x-4">
//           <IconBrandFacebook size={24} />
//           <IconBrandTwitter size={24} />
//           <IconBrandInstagram size={24} />
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import React from "react";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconChevronRight,
} from "@tabler/icons-react";
import logo from "../../assets/animate.gif";

function Footer() {
  return (
    <footer className="bg-[#3C5D87] text-white py-8 text-[12px]">
      <div className="container mx-auto px-4 flex flex-wrap md:flex-nowrap justify-between">
        <div className="w-full md:w-1/4 mb-6 md:mb-0 md:mr-8 flex justify-center md:justify-start">
          <div className="h-56 w-26 bg-transparent mb-4">
            <img
              src={logo}
              alt="Logo"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="font-bold mb-2">Domestic Network</h3>
          <ul>
            {[
              "Panjab",
              "Himachal Pradesh",
              "Haryana",
              "UP",
              "West Bengal",
              "Orissa",
              "Tamil Nadu",
              "Gujarat",
              "Rajasthan",
              "Madhya Pradesh",
              "Andhra Pradesh",
            ].map((state, index) => (
              <li key={index} className="mb-1">
                • {state}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="font-bold mb-2">International Network</h3>
          <ul>
            {["Nepal", "South Africa"].map((country, index) => (
              <li key={index} className="mb-1">
                • {country}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="font-bold mb-2">Top Products</h3>
          <ul>
            {[
              "Bolting Cloth",
              "Ezycoat 216",
              "Ezycoat 828",
              "Rotostar HT/MT",
              "Photoemulsion 747",
              "Endering Remover",
              "Nuspray Paint",
              "Ammonium Dichromate",
              "Arkabond",
              "Ezycoat 999C",
              "Acetone",
              "Ethyl Acetate",
              "Stripper",
            ].map((product, index) => (
              <li key={index} className="mb-1 flex items-center">
                <IconChevronRight className="mr-2" style={{width: "16px"}} />
                {product}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="font-bold mb-2">Head Office</h3>
          <p className="mb-2">
            402, P-2, Best Business Park, Netaji Subhash Place, Pitampura,
            (110034)
          </p>

          <h3 className="font-bold mb-2">Branch Panipat</h3>
          <p className="mb-2">
            Plot No. 482, Sector-25, Part-II, Huda Ind, Area, Panipat-132103
          </p>

          <h3 className="font-bold mb-2">Branch Ludhiana</h3>
          <p className="mb-2">
            221/L, Indra Colony, Chandigarh Road, B/H.S.K. Marbal,
            Ludhiana-141008
          </p>

          <h3 className="font-bold mb-2">Contact Info</h3>
          <p className="mb-2">📧 saraldyes@gmail.com</p>
          <p>📞 +91 9810024522, +91 9810166261</p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 flex flex-wrap items-center justify-between text-[12px]">
        <p>&copy; 2024 Saral Dye Chems. All Rights Reserved</p>
        <div className="flex space-x-4 mt-2">
          <IconBrandFacebook size={24} />
          <IconBrandTwitter size={24} />
          <IconBrandInstagram size={24} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
