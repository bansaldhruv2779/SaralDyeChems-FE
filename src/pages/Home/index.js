import React, {useState} from "react";
import {Box} from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";
import Products from "../../constants/products.json";
import {AboutComponent, Gallery, Segments} from "../../components";

const Home = () => {
  const [categories] = useState(Products.data);

  return (
    <Box>
      {Array.isArray(categories) && categories.length > 0 ? (
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          {categories.map((item, index) => {
            return (
              <Box key={index} height={"80vh"}>
                <img src={item.image} alt={item.product} />
                {/* <p className="legend">{item.category}</p> */}
              </Box>
            );
          })}
        </Carousel>
      ) : null}
      <AboutComponent />
      <div id="products">
        <Segments />
      </div>
      <div id="team">
        <Gallery />
      </div>
    </Box>
  );
};

export default Home;
