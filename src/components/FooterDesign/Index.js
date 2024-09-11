import React from "react";
import {
  IconChevronRight,
  IconMapPin,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import {Link} from "@mui/material";

function Footer() {
  return (
    <footer className="bg-[#163359] text-white py-8 text-[12px]">
      <div className="container mx-auto px-4 flex flex-wrap md:flex-nowrap justify-between">
        <div className="w-full md:w-1/4 mb-6 md:mb-0 md:mr-8 flex justify-center md:justify-start">
          <div className="h-96 bg-transparent w-max">
            <img src="https://ik.imagekit.io/u51majcf2/SaralDyeChems/animateLogo.gif" alt="Logo" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="font-bold mb-2">Domestic Network</h3>
          <ul>
            {[
              "Punjab",
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
          <div className="flex flex-row mb-5">
            <IconMapPin className="mr-2" style={{width: "1.5rem"}} />
            <Link
              href="https://www.google.com/maps?ll=28.692458,77.147412&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=12163970881555141662"
              underline="always"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                cursor: "pointer",
                color: "inherit",
              }}>
              402, P-2, Best Business Park, Netaji Subhash Place, Pitampura,
              (110034)
            </Link>
          </div>
          <h3 className="font-bold mb-2">Panipat Office</h3>
          <div className="flex flex-row mb-5">
            <IconMapPin className="mr-2" style={{width: "1.5rem"}} />
            <Link
              href="https://www.google.com/maps?ll=29.360862,76.981109&z=13&t=m&hl=en-US&gl=US&mapclient=embed&q=9X6J%2B8CX+25+Sector+Part+2,+Sector+25+Phase+2,+Huda+Panipat,+Haryana+132103"
              underline="always"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                cursor: "pointer",
                color: "inherit",
              }}>
              Plot No. 482, Sector-25, Part-II, Huda Ind, Area, Panipat-132103
            </Link>
          </div>

          <h3 className="font-bold mb-2">Ludhiana Office</h3>
          <div className="flex flex-row mb-5">
            <IconMapPin className="mr-2" style={{width: "1.5rem"}} />
            <Link
              href="https://www.google.com/maps?ll=30.910139,75.883944&z=13&t=m&hl=en-US&gl=US&mapclient=embed&q=30%C2%B054%2736.5%22N+75%C2%B053%2702.2%22E+30.910139,+75.883944@30.9101389,75.88394439999999"
              underline="always"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                cursor: "pointer",
                color: "inherit",
              }}>
              221/L, Indra Colony, Chandigarh Road, B/H.S.K. Marbal,
              Ludhiana-141008
            </Link>
          </div>

          <h3 className="font-bold mb-2">Contact Info</h3>
          <div className="flex flex-row mb-2">
            <IconMail className="mr-2" style={{width: "1.25rem"}} />
            saraldyes@gmail.com
          </div>
          <div className="flex flex-row mb-2">
            <IconPhone className="mr-2" style={{width: "1.25rem"}} />
            +91 9810024522, +91 9810166261
          </div>
          <h3 className="font-bold mb-2">Indiamart</h3>
          <div className="flex flex-row mb-2">
            <Link
              href="https://m.indiamart.com/saraldyechems/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://ik.imagekit.io/u51majcf2/SaralDyeChems/indiaMart.png" alt="indiaMart" style={{width: "1.25rem"}} />
            </Link>
            <Link
              href="https://m.indiamart.com/saraldyechems/"
              underline="always"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                cursor: "pointer",
                color: "inherit",
                marginLeft: "0.5rem",
              }}>
              Saral Dye Chems
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 flex flex-wrap items-center justify-between text-[12px]">
        <p>&copy; 2024 Saral Dye Chems. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
