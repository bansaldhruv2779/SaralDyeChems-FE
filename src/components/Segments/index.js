import React from "react";
import Heading from "../Heading";
import {Link} from "react-router-dom";

// Reusable ProductCard Component
const ProductCard = ({link, image, title}) => (
  <Link
    to={link}
    className="relative bg-cover bg-center rounded-lg overflow-hidden h-72"
    style={{backgroundImage: `url(${image})`}}>
    <div
      className="absolute bottom-0 left-0 w-full p-2 text-white text-left font-semibold"
      style={{
        background:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 100%)",
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
      image: "https://ik.imagekit.io/u51majcf2/SaralDyeChems/flatbed.png",
      title: "Flat Bed Screen Printing Chemicals",
    },
    {
      link: "/products?category=Rotary Screen Printing Chemicals",
      image: "https://ik.imagekit.io/u51majcf2/SaralDyeChems/rotary-2.png",
      title: "Rotary Screen Printing Chemicals",
    },
    {
      link: "/products?category=Screen Making Auxillaries",
      image: "https://ik.imagekit.io/u51majcf2/SaralDyeChems/screen.png",
      title: "Screen Making Auxillaries",
    },
    {
      link: "/products?category=Digital Printing Chemicals",
      image: "https://ik.imagekit.io/u51majcf2/SaralDyeChems/digital-1.png",
      title: "Digital Printing Chemicals",
    },
    {
      link: "/products?category=Textile Auxiliaries",
      image: "https://ik.imagekit.io/u51majcf2/SaralDyeChems/textile-aux-1.png",
      title: "Textile Auxiliaries",
    },
    {
      link: "/products?category=Textile Printing Machines",
      image: "https://ik.imagekit.io/u51majcf2/SaralDyeChems/textile.JPG",
      title: "Textile Printing Machines",
    },
  ];

  return (
    <div
      className="bg-cover bg-center py-10"
      style={{
        backgroundImage:
          "url(https://ik.imagekit.io/u51majcf2/SaralDyeChems/bgb.png)",
      }}>
      <Heading
        title="Business Segments"
        titlecolor="#FFF"
        // description="A serene and tranquil retreat, this house in the woods offers a peaceful escape from the hustle and bustle of city life."
        desColor="#FFF"
      />
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-10 lg:px-36 md:px-30">
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
