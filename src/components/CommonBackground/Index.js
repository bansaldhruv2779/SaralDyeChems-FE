import React from "react";
import bgImage from "../../assets/bg.png"; // Replace with actual logo image paths
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CommonBackground = ({
  title,
  arrow,
  mainRoute,
  childRoute,
  description,
}) => {
  return (
    <div style={{height: "300px", position: "relative"}}>
      <div
        className="bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          height: "300px", // Set height to 100px
          width: "100%",
        }}></div>

      <div className="absolute inset-0 bg-[#0C1522] bg-opacity-85">
        <div>
          <h2
            style={{
              color: "white",
              marginTop: "150px",
              fontSize: "32px",
              textAlign: "center",
              fontWeight: "bold",
            }}>
            {title}
          </h2>
          <p
            style={{
              color: "white",
              fontSize: "13px",
              textAlign: "center",
            }}>
            {mainRoute} {arrow && <ArrowForwardIosIcon fontSize="10px" />}
            {description !== " > "} {childRoute}
            {description && description}
          </p>
          {title !== "About Us" && title !== "Contact Us" && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}>
              <a href="/contact-us">
                <button className="bg-[#3C5D87] hover:bg-[#3C5D87] text-sm text-white font-bold py-2 px-4 rounded">
                  GET A QUOTE
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommonBackground;
