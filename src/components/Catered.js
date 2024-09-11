import React from "react";
import {Container} from "@mui/material";
import ImageRound from "./ImageRound";

const Catered = () => {
  const industries = [
    {
      title: "Bedsheet",
      image: "https://ik.imagekit.io/u51majcf2/SaralDyeChems/bedsheet.png",
    },
    {
      title: "Carpet",
      image: "https://ik.imagekit.io/u51majcf2/SaralDyeChems/carpet.png",
    },
    {
      title: "Blanket",
      image: "https://ik.imagekit.io/u51majcf2/SaralDyeChems/blanket.png",
    },
    {
      title: "Suits",
      image:
        "https://ik.imagekit.io/u51majcf2/SaralDyeChems/suits.jpg?updatedAt=1726072289920",
    },
    {
      title: "Sarees",
      image: "https://ik.imagekit.io/u51majcf2/SaralDyeChems/sarees.png",
    },
    {
      title: "Hosiery",
      image: "https://ik.imagekit.io/u51majcf2/SaralDyeChems/hosiery.png",
    },
    {
      title: "Wedding Cards",
      image: "https://ik.imagekit.io/u51majcf2/SaralDyeChems/weddingCards.png",
    },
    {
      title: "Shoes",
      image: "https://ik.imagekit.io/u51majcf2/SaralDyeChems/shoes.png",
    },
    {
      title: "Home Furnishing",
      image: "https://ik.imagekit.io/u51majcf2/SaralDyeChems/homefurn.png",
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
