import React from "react";
import {Box} from "@mui/material";
import GalleryComponent from "./GalleryComponent";
import FlipHeading from "../Flipword/FlipHeading";

const Gallery = () => {
  return (
    <Box style={{padding: "0px 6%", marginTop: "60px"}}>
      <FlipHeading word="OUR   TEAM   AND   GALLERY" />
      <p style={{marginBottom: "30px", color: "#A0A6B0", textAlign: "center"}}>
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
      <GalleryComponent />
    </Box>
  );
};

export default Gallery;
