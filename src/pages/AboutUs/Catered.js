import React from "react";
import {Container, Typography} from "@mui/material";

import ImageRound from "./ImageRound";
import bedsheet from "../../assets/bedsheet.png";

const Catered = () => {
  const industries = [
    {
      title: "Bedsheet",
      image: bedsheet,
    },
    {
      title: "Carpet",
      image: bedsheet,
    },
    {
      title: "Blanket",
      image: bedsheet,
    },
    {
      title: "Suits",
      image: bedsheet,
    },
    {
      title: "Sarees",
      image: bedsheet,
    },
    {
      title: "Hosiery",
      image: bedsheet,
    },
    {
      title: "Wedding Cards",
      image: bedsheet,
    },
    {
      title: "Shoes",
      image: bedsheet,
    },
    {
      title: "Home Furnishing",
      image: bedsheet,
    },
  ];
  return (
    <Container
      sx={{
        py: {xs: 4, sm: 6, md: 8},
        textAlign: "center",
        maxWidth: "100%",
      }}>
      <h2
        style={{
          color: "#3C5D87",
          fontSize: "34px",
          fontWeight: "bold",
          textAlign: "center",
        }}>
        Industries Catered To
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: "20px",
          gap: "30px",
          flexWrap: "wrap",
        }}>
        {industries.map((industry, index) => (
          <div
            key={index}
            style={{flexShrink: 0, width: "100px", height: "100px"}}>
            <ImageRound image={industry.image} title={industry.title} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Catered;
