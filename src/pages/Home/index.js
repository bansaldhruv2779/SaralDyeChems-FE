import React from "react";
import {Box} from "@mui/material";
import AboutComponent from "../../components/AboutComponent";
import GalleryComponent from "../../components/GalleryComponent";
import Segment from "../../components/Segments";
import CarouselDarkVariant from "../../components/Carousel";
import Heading from "../../components/Heading";
import ScrollButton from "../../components/ScrollButton";

const Home = () => {
  return (
    <Box>
      <div id="Home"></div>
      <CarouselDarkVariant />
      <div id="about">
        <Heading
          title="Welcome to Saral Dye Chems"
          description="Engraving Lifelines Since 1987"
          titlecolor="#3C5D87"
          desColor="#000029"
        />
        <AboutComponent home={true} />
      </div>
      <div id="products">
        <Segment />
      </div>
      <div id="team">
        <GalleryComponent />
      </div>
      <ScrollButton />
    </Box>
  );
};

export default Home;
