import React, {useState, useEffect} from "react";
import {useLocation, useNavigate, Link} from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"; // Import close icon
import {IconButton} from "@mui/material";

const Index = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const categories = [
    {
      id: "Flat-Bed-Screen-Printing-Chemicals",
      label: "Flat bed Screen Printing Chemicals",
    },
    {
      id: "Rotary-Screen-Printing-Chemicals",
      label: "Rotary Screen Printing Chemicals",
    },
    {
      id: "Screen-Making-Auxillaries",
      label: "Screen Making Auxillaries",
    },
    {
      id: "Digital-Printing-Chemicals-&-Inks",
      label: "Digital Printing Chemicals & Inks",
    },
    {
      id: "Textile-Auxiliaries",
      label: "Textile Auxiliaries",
    },
    {
      id: "Textile-Printing-Machines",
      label: "Textile Printing Machines",
    },
  ];

  const handleLinkClick = link => {
    setActiveLink(link);
    if (link === "Products") {
      setShowProductsDropdown(!showProductsDropdown);
    } else {
      setShowProductsDropdown(false);
      setMobileMenuOpen(false);
    }
  };

  const handleLinkHover = link => {
    if (link === "Products") {
      setShowProductsDropdown(true);
    } else {
      setShowProductsDropdown(false);
      setMobileMenuOpen(false);
    }
  };

  const handleLinkLeave = link => {
    if (link === "Products") {
      setShowProductsDropdown(false);
    } else {
      setShowProductsDropdown(false);
      setMobileMenuOpen(false);
    }
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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
        setActiveLink("Products");
        break;
    }
  }, [location.pathname]);

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-row justify-between pr-[8%] pl-[10%] pb-4 pt-4 items-center bg-white shadow-md">
        <div className="w-[170px] cursor-pointer" onClick={() => navigate("/")}>
          <img
            src="https://ik.imagekit.io/u51majcf2/SaralDyeChems/landscape.png"
            style={{width: "100%"}}
            alt="Logo"
          />
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex flex-row space-x-12">
          {["Home", "Products", "About Us", "Our Team", "Contact Us"].map(
            link => (
              <div key={link} className="relative">
                <div onMouseOver={() => handleLinkHover(link)}>
                  <Link
                    to={
                      link === "Home"
                        ? "/"
                        : link === "About Us"
                        ? "/about-us"
                        : link === "Contact Us"
                        ? "/contact-us"
                        : link === "Our Team"
                        ? "/#team"
                        : "#"
                    }
                    style={{fontSize: "12px"}}
                    className={`text-sm pb-2 pl-2 pr-2 flex items-center hover:text-[#3C5D87] ${
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
                  </Link>
                  {link === "Products" && showProductsDropdown && (
                    <div
                      className="absolute left-0 mt-2 rounded-md bg-white shadow-lg"
                      onMouseLeave={() => handleLinkLeave(link)}>
                      {categories.map(category => (
                        <Link
                          key={category.id}
                          to={`/products/${category.id}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">
                          {category.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ),
          )}
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleMobileMenuToggle}>
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
      </div>

      {/* Mobile Expanded Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white w-full shadow-lg p-4 fixed top-[64px] left-0 right-0 z-40">
          {["Home", "Products", "About Us", "Our Team", "Contact Us"].map(
            link => (
              <div
                key={link}
                className="relative py-2"
                onClick={() => handleLinkClick(link)}>
                <Link
                  to={
                    link === "Home"
                      ? "/"
                      : link === "About Us"
                      ? "/about-us"
                      : link === "Contact Us"
                      ? "/contact-us"
                      : link === "Our Team"
                      ? "/#team"
                      : "#"
                  }
                  className={`block text-sm py-2 ${
                    activeLink === link ? "text-[#3C5D87]" : "text-[#3D3D3D]"
                  }`}>
                  {link}
                  {link === "Products" && (
                    <KeyboardArrowDownIcon
                      className={`ml-1 transition-transform duration-300 ${
                        showProductsDropdown ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  )}
                </Link>
                {link === "Products" && showProductsDropdown && (
                  <div className="pl-4">
                    {categories.map(category => (
                      <Link
                        key={category.id}
                        to={`/products/${category.id}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">
                        {category.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ),
          )}
        </div>
      )}
    </div>
  );
};

export default Index;
