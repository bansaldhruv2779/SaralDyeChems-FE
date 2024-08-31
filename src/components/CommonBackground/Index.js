import React from "react";
import bgImage from "../../assets/bg.png"; // Replace with actual logo image paths
import logo1 from "../../assets/logoImage.jpeg"; // Replace with actual logo image paths
import logo2 from "../../assets/logoImage.jpeg";
import logo3 from "../../assets/logoImage.jpeg";
import auth from "../../assets/auth.png";
import arrowImage from "../../Files/arrow_right.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Index = ({title, arrow, mainRoute, childRoute, description}) => {
  return (
    <div style={{height: "300px", position: "relative", marginBottom: "30px"}}>
      <div
        className="bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          height: "300px", // Set height to 100px
          width: "100%",
        }}></div>

      <div className="absolute inset-0 bg-[#0C1522] bg-opacity-85">
        <div>
          <p
            style={{
              color: "white",
              marginTop: "150px",
              fontSize: "40px",
              textAlign: "center",
              fontWeight: "bold",
            }}>
            {title}
          </p>
          <p
            style={{
              color: "white",
              fontSize: "16px",
              textAlign: "center",
            }}>
            {mainRoute} {arrow && <ArrowForwardIosIcon fontSize="10px" />}{" "}
            {description !== " > "} {childRoute}
            {description && description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
