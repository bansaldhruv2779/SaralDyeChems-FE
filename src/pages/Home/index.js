import React, {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {fetchCategoryList} from "../../store/actions";
import {Box, Grid, Card, Fab, Typography, styled} from "@mui/material";
import {useNavigate} from "react-router";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";
import Products from "../Products/products.json";
import CountsComponent from "../../components/Counts/Index";
import AboutComponent from "../../components/AboutComponent/Index";
import Founder from "../../components/FounderComponent/Founder";
import GalleryComponent from "../../components/GalleryComponent/GalleryComponent";
import Segment from "../../components/Segments/Segments";
import Partners from "../../components/Partners/Partners";
import CarouselDarkVariant from "../../components/Carousel/Carousel";
import Heading from "../../components/Heading/Heading";
import ScrollButton from "../../components/TopButton/Index";

const StyledCard = styled(Card)(({theme}) => ({
  borderRadius: "12px",
  overflow: "hidden",
  position: "relative",
  height: "250px",
  width: "100%",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: theme.shadows[5],
  },
}));

const CardOverlay = styled(Box)(({theme}) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.4)", // Light black overlay
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Darker overlay on hover
  },
}));

const CategoryText = styled(Typography)(({theme}) => ({
  color: "white",
  position: "absolute",
  bottom: "10px",
  width: "100%",
  textAlign: "center",
  fontSize: "20px",
  boxShadow: theme.shadows[3],
  borderRadius: "5px",
  padding: "5px 10px",
  transition: "all 0.3s ease",
  transform: "translateY(0)",
  opacity: 1,
  "&:hover": {
    transform: "translateY(-50%)",
    opacity: 0,
  },
}));

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [categories, setCategories] = useState(Products.data);
  const ref = useRef(0);

  useEffect(() => {
    console.log(categories);
    if (ref.current === 0) {
      dispatch(fetchCategoryList.REQUEST());
      ref.current = 1;
    }
  }, []);

  return (
    <Box>
      <div id="Home"></div>
      <CarouselDarkVariant />
      <div id="about">
        <Heading
          title="Welcome to Saral Dye Chems"
          description="Engraving Lifelines Sine 1987"
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
