import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import logo from "../../landscape.png";

const Index = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const location = useLocation(); // Get the current location

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

  const handleLinkClick = link => {
    setActiveLink(link);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-row justify-between pr-[8%] pl-[10%] pb-4 pt-4 items-center bg-white shadow-md">
      <div className="w-[100px]">
        <img src={logo} style={{width: "100%"}} alt="Logo" />
      </div>
      <div className="flex flex-row space-x-7">
        {["Home", "Products", "About Us", "Our Team", "Contact Us"].map(
          link => (
            <a
              key={link}
              href={
                link === "Home"
                  ? "/"
                  : link === "About Us"
                  ? "/about-us"
                  : link === "Contact Us"
                  ? "/contact-us"
                  : ""
              }
              onClick={() => handleLinkClick(link)}
              className={`text-sm pb-2 pl-2 pr-2 ${
                activeLink === link
                  ? "border-b-2 border-[#3C5D87]"
                  : "border-none"
              } text-[#3C5D87]`}>
              {link}
            </a>
          ),
        )}
      </div>
    </div>
  );
};

export default Index;
