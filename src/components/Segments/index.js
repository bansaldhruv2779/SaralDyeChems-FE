import React from "react";
import bgImage from "../../assets/bgb.png";
import image1 from "../../assets/flatbed.png";
import image2 from "../../assets/rotary-2.png";
import image3 from "../../assets/screen.png";
import image4 from "../../assets/digital-1.png";
import image5 from "../../assets/textile-aux-1.png";
import image6 from "../../assets/textile.JPG";
import Heading from "../Heading";
import {Link} from "react-router-dom";

// Reusable ProductCard Component
const ProductCard = ({link, image, title}) => (
  <Link
    to={link}
    className="relative bg-cover bg-center rounded-lg overflow-hidden h-64"
    style={{backgroundImage: `url(${image})`}}>
    <div
      className="absolute bottom-0 left-0 w-full p-2 text-white text-left font-semibold"
      style={{
        padding: "1rem",
      }}>
      {title}
    </div>
  </Link>
);

function ProductsGrid() {
  // Product data array
  const products = [
    {
      link: "/products?category=Flat Bed Screen Printing Chemicals",
      image: image1,
      title: "Flat Bed Screen Printing Chemicals",
    },
    {
      link: "/products?category=Rotary Screen Printing Chemicals",
      image: image2,
      title: "Rotary Screen Printing Chemicals",
    },
    {
      link: "/products?category=Screen Making Auxillaries",
      image: image3,
      title: "Screen Making Auxillaries",
    },
    {
      link: "/products?category=Digital Printing Chemicals",
      image: image4,
      title: "Digital Printing Chemicals",
    },
    {
      link: "/products?category=Textile Auxiliaries",
      image: image5,
      title: "Textile Auxiliaries",
    },
    {
      link: "/products?category=Printing Machines",
      image: image6,
      title: "Printing Machines",
    },
  ];

  return (
    <div
      className="bg-cover bg-center py-10"
      style={{backgroundImage: `url(${bgImage})`}}>
      <Heading
        title="Business Segments"
        titlecolor="#FFF"
        description="A serene and tranquil retreat, this house in the woods offers a peaceful escape from the hustle and bustle of city life."
        desColor="#FFF"
      />
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {products.map(product => (
          <ProductCard
            key={product.title}
            link={product.link}
            image={product.image}
            title={product.title}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsGrid;
