import React from "react";
import {HoverEffect} from "./HoverEffect";
import FlipHeading from "../Flipword/FlipHeading";

const projects = [
  {
    title: "Flat Bed Screen Printing Chemicals",
    backgroundImage:
      "https://img.freepik.com/free-vector/toxic-chemicals-concept-illustration_114360-24229.jpg?t=st=1722665783~exp=1722669383~hmac=2ea0f60e3256b74b74c5de3d02270df9c02f7b0ed558a3ea4deff10c109ef4e7&w=1060",
    link: "/products?category=Flat Bed Screen Printing Chemicals",
  },
  {
    title: "Rotary Screen Printing Chemicals",
    backgroundImage:
      "https://img.freepik.com/free-photo/still-life-cmyk-toners-arrangement_23-2149120707.jpg?t=st=1722666038~exp=1722669638~hmac=47454cd9d51a5a924671417dec6035c9b03fb37c27d560cc1fde3681ceda8c74&w=1480",
    link: "/products?category=Rotary Screen Printing Chemicals",
  },
  {
    title: "Screen Making Auxillaries",
    backgroundImage:
      "https://img.freepik.com/free-vector/flat-printing-industry-illustrated_23-2148911710.jpg?t=st=1722666105~exp=1722669705~hmac=a3905eaf54ab6f369f84c42f0a232369a434649ec09da17d32ebc6fc3ea570f8&w=1060",
    link: "/products?category=Screen Making Auxillaries",
  },
  {
    title: "Digital Printing Chemicals",
    backgroundImage:
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg",
    link: "/products?category=Digital Printing Chemicals",
  },
  {
    title: "Auxillaries",
    backgroundImage:
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg",
    link: "/products?category=Auxillaries",
  },
  {
    title: "Machines",
    backgroundImage:
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg",
    link: "/products?category=Machines",
  },
];

function Segments() {
  return (
    <div className="max-w-7xl mx-auto px-2">
      <FlipHeading word="BUSINESS   SEGMENTS" />
      <p style={{marginBottom: "30px", color: "#A0A6B0", textAlign: "center"}}>
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
      <HoverEffect items={projects} />
    </div>
  );
}

export default Segments;
