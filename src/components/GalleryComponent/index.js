import React from "react";
import Heading from "../Heading";
import Gallery from "./Gallery"; // Assuming you have a Gallery component to handle the images

const images = [
  {
    src: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
    alt: "Team Photo 1",
  },
  {
    src: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
    alt: "Team Photo 1",
  },
  {
    src: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
    alt: "Team Photo 3",
  },
  {
    src: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
    alt: "Team Photo 1",
  },
  {
    src: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
    alt: "Team Photo 1",
  },
  {
    src: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
    alt: "Team Photo 1",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    alt: "Team Photo 6",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    alt: "Team Photo 7",
  },
];
const images2 = [
  {
    src: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
    alt: "Team Photo 1",
  },
  {
    src: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
    alt: "Team Photo 1",
  },
  {
    src: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
    alt: "Team Photo 3",
  },
  {
    src: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
    alt: "Team Photo 1",
  },
  {
    src: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
    alt: "Team Photo 1",
  },
  {
    src: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
    alt: "Team Photo 1",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    alt: "Team Photo 6",
  },
  {
    src: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
    alt: "Team Photo 1",
  },
  {
    src: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
    alt: "Team Photo 1",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    alt: "Team Photo 6",
  },
  {
    src: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
    alt: "Team Photo 1",
  },
];

const GalleryComponent = () => {
  return (
    <div style={{padding: "3% 5%"}}>
      <Heading
        title="Our Team and Gallery"
        titlecolor="#3C5D87"
        desColor="#000029"
        description="A serene and tranquil retreat, this house in the woods offers a peaceful escape from the hustle and bustle of city life."
      />
      <Gallery images={images} images2={images2} />
    </div>
  );
};

export default GalleryComponent;
