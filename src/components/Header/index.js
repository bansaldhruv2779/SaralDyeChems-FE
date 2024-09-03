import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import logo from "../../landscape.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Index = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const location = useLocation(); // Get the current location

  const [showProductsDropdown, setShowProductsDropdown] = useState(false);

  const handleLinkClick = link => {
    setActiveLink(link);
    if (link === "Products") {
      setShowProductsDropdown(!showProductsDropdown); // Toggle dropdown
    } else {
      setShowProductsDropdown(false); // Hide dropdown if another link is clicked
    }
  };

  // Set the active link based on the current URL
  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case "/":
        setActiveLink("Home");
        break;
      case "/about-us":
        setActiveLink("About Us");
        break;
      case "/contact-us":
        setActiveLink("Contact Us");
        break;
      default:
        setActiveLink("Products"); // Set to empty string if no match is found
        break;
    }
  }, [location.pathname]); // Dependency on location.pathname

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-row justify-between pr-[8%] pl-[10%] pb-4 pt-4 items-center bg-white shadow-md">
      <div className="w-[170px]">
        <img src={logo} style={{width: "100%"}} alt="Logo" />
      </div>
      <div className="flex flex-row space-x-7">
        {["Home", "Products", "About Us", "Our Team", "Contact Us"].map(
          link => (
            <div key={link} className="relative">
              <a
                href={
                  link === "Home"
                    ? "/"
                    : link === "About Us"
                    ? "/about-us"
                    : link === "Contact Us"
                    ? "/contact-us"
                    : link === "Our Team"
                    ? "/#team"
                    : ""
                }
                onMouseOver={() => handleLinkClick(link)}
                style={{fontSize: "12px"}}
                className={`text-sm pb-2 pl-2 pr-2 flex items-center ${
                  activeLink === link
                    ? "border-b-2 border-[#3C5D87] text-[#3C5D87]"
                    : "border-none text-[#3D3D3D]"
                }`}>
                {link}
                {link === "Products" && (
                  <KeyboardArrowDownIcon
                    className={`ml-1 transition-transform duration-300 ${
                      showProductsDropdown ? "rotate-180" : "rotate-0"
                    }`}
                  />
                )}
              </a>

              {link === "Products" && showProductsDropdown && (
                <div className="absolute left-0 mt-2 rounded-md bg-white shadow-lg">
                  <a
                    href="/products?category=Flat Bed Screen Printing Chemicals"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">
                    Flat bed Screen Printing Chemicals
                  </a>
                  <a
                    href="/products?category=Rotary Screen Printing Chemicals"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">
                    Rotary Screen Printing Chemicals
                  </a>
                  <a
                    href="/products?category=Screen Making Auxillaries"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">
                    Screen Making Auxillaries
                  </a>
                  <a
                    href="/products?category=Digital Printing Chemicals"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">
                    Digital Printing Chemicals
                  </a>
                  <a
                    href="/products?category=Textile Auxiliaries"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">
                    Textile Auxiliaries
                  </a>
                  <a
                    href="/products?category=Machines"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">
                    Machines
                  </a>
                </div>
              )}
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default Index;
