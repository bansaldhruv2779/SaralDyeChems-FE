import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {Link} from "react-router-dom";

const CommonBackground = ({
  title,
  arrow,
  mainRoute,
  childRoute,
  description,
}) => {
  return (
    <div style={{height: "380px", position: "relative"}}>
      <div
        className="bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url(https://ik.imagekit.io/u51majcf2/SaralDyeChems/bg.png)",
          height: "380px", // Set height to 100px
          width: "100%",
        }}></div>

      <div className="absolute inset-0 bg-[#0C1522] bg-opacity-85">
        <div className="lg:mt-44">
          <h2
            style={{
              color: "white",
              marginTop: "150px",
              fontSize: "32px",
              textAlign: "center",
              fontWeight: "bold",
              textTransform: "capitalize",
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
              }}
              className="lg:mt-12 mt-3">
              <Link to="/contact-us">
                <button className="bg-[#3C5D87] hover:bg-[#3C5D87] text-sm text-white font-bold py-2 px-4 rounded">
                  GET A QUOTE
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommonBackground;
