import React from "react";
import {Box} from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import AboutComponent from "../../components/AboutComponent/Index";
import GalleryComponent from "../../components/GalleryComponent/GalleryComponent";
import Segment from "../../components/Segments/Segments";
import CarouselDarkVariant from "../../components/Carousel/Carousel";
import Heading from "../../components/Heading/Heading";
import ScrollButton from "../../components/TopButton/Index";

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
        <AboutComponent lastParagraph={false} />
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
