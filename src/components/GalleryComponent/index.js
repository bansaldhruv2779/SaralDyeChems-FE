import React from "react";
import Heading from "../Heading";
import Gallery from "./Gallery"; // Assuming you have a Gallery component to handle the images
import image1 from "../../assets/1.jpeg";
import image2 from "../../assets/2.jpg";
import image3 from "../../assets/3.jpeg";
import image4 from "../../assets/4.jpeg";
import image5 from "../../assets/5.jpeg";
import image6 from "../../assets/6.jpg";
import image7 from "../../assets/7.jpeg";
import image8 from "../../assets/8.jpeg";
import image9 from "../../assets/9.jpeg";
import image10 from "../../assets/10.jpeg";
import image11 from "../../assets/11.jpeg";
import image12 from "../../assets/12.jpeg";

const images = [
  {
    src: image1,
    alt: "Team Photo 1",
  },
  {
    src: image2,
    alt: "Team Photo 2",
  },
  {
    src: image3,
    alt: "Team Photo 3",
  },
  {
    src: image4,
    alt: "Team Photo 4",
  },
  {
    src: image5,
    alt: "Team Photo 5",
  },
  {
    src: image6,
    alt: "Team Photo 6",
  },
  {
    src: image7,
    alt: "Team Photo 7",
  },
  {
    src: image8,
    alt: "Team Photo 8",
  },
];
const images2 = [
  {
    src: image1,
    alt: "Team Photo 1",
  },
  {
    src: image2,
    alt: "Team Photo 2",
  },
  {
    src: image3,
    alt: "Team Photo 3",
  },
  {
    src: image4,
    alt: "Team Photo 4",
  },
  {
    src: image5,
    alt: "Team Photo 5",
  },
  {
    src: image6,
    alt: "Team Photo 6",
  },
  {
    src: image7,
    alt: "Team Photo 7",
  },
  {
    src: image8,
    alt: "Team Photo 8",
  },
  {
    src: image9,
    alt: "Team Photo 9",
  },
  {
    src: image10,
    alt: "Team Photo 10",
  },
  {
    src: image11,
    alt: "Team Photo 11",
  },
  {
    src: image12,
    alt: "Team Photo 12",
  },
];

const GalleryComponent = () => {
  return (
    <div className=" py-2 px-6 lg:py-12 lg:px-36">
      <Heading
        title="Our Team and Gallery"
        titlecolor="#3C5D87"
        desColor="#000029"
        description=""
      />
      <Gallery images={images} images2={images2} />
    </div>
  );
};

export default GalleryComponent;
