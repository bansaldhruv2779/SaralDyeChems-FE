import React from "react";
import Heading from "../Heading";
import Gallery from "./Gallery"; // Assuming you have a Gallery component to handle the images

const images = [
  {
    src: "https://ik.imagekit.io/u51majcf2/SaralDyeChems/1.jpeg",
    alt: "Team Photo 1",
  },
  {
    src: "https://ik.imagekit.io/u51majcf2/SaralDyeChems/2.jpg",
    alt: "Team Photo 2",
  },
  {
    src: "https://ik.imagekit.io/u51majcf2/SaralDyeChems/3.jpeg",
    alt: "Team Photo 3",
  },
  {
    src: "https://ik.imagekit.io/u51majcf2/SaralDyeChems/4.jpeg",
    alt: "Team Photo 4",
  },
  {
    src: "https://ik.imagekit.io/u51majcf2/SaralDyeChems/5.jpeg",
    alt: "Team Photo 5",
  },
  {
    src: "https://ik.imagekit.io/u51majcf2/SaralDyeChems/6.jpg",
    alt: "Team Photo 6",
  },
  {
    src: "https://ik.imagekit.io/u51majcf2/SaralDyeChems/7.jpeg",
    alt: "Team Photo 7",
  },
  {
    src: "https://ik.imagekit.io/u51majcf2/SaralDyeChems/8.jpeg",
    alt: "Team Photo 8",
  },
  {
    src: "https://ik.imagekit.io/u51majcf2/SaralDyeChems/9.jpeg",
    alt: "Team Photo 9",
  },
  {
    src: "https://ik.imagekit.io/u51majcf2/SaralDyeChems/10.jpeg",
    alt: "Team Photo 10",
  },
  {
    src: "https://ik.imagekit.io/u51majcf2/SaralDyeChems/11.jpeg",
    alt: "Team Photo 11",
  },
  {
    src: "https://ik.imagekit.io/u51majcf2/SaralDyeChems/12.jpeg",
    alt: "Team Photo 12",
  },
];

const GalleryComponent = () => {
  return (
    <div className="py-2 px-6 mb-12 lg:py-12 lg:px-36">
      <Heading
        title="Our Team and Gallery"
        titlecolor="#3C5D87"
        desColor="#000029"
        description=""
      />
      <Gallery images={images} />
    </div>
  );
};

export default GalleryComponent;
