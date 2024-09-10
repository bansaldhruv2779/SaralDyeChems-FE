import React from "react";
import {Container} from "@mui/material";

import ImageRound from "./ImageRound";
import bedsheet from "../assets/bedsheet.png";
import blanket from "../assets/blanket.png";
import homefurn from "../assets/homefurn.png";
import carpet from "../assets/carpet.png";
import sarees from "../assets/sarees.png";
import hosiery from "../assets/hosiery.png";
import weddingCards from "../assets/weddingCards.png";
import shoes from "../assets/shoes.png";
import suits from "../assets/suits.jpg";

const Catered = () => {
  const industries = [
    {
      title: "Bedsheet",
      image: bedsheet,
    },
    {
      title: "Carpet",
      image: carpet,
    },
    {
      title: "Blanket",
      image: blanket,
    },
    {
      title: "Suits",
      image: suits,
    },
    {
      title: "Sarees",
      image: sarees,
    },
    {
      title: "Hosiery",
      image: hosiery,
    },
    {
      title: "Wedding Cards",
      image: weddingCards,
    },
    {
      title: "Shoes",
      image: shoes,
    },
    {
      title: "Home Furnishing",
      image: homefurn,
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
          fontSize: "38px",
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
