import React from "react";
import ProductCard from "./ProductCard";
import CommonBackground from "../../components/CommonBackground";
import ScrollButton from "../../components/ScrollButton";
import {useParams} from "react-router-dom";

const Products = () => {
  const {categoryId} = useParams();

  return (
    <div>
      <CommonBackground
        title={categoryId?.replaceAll("-", " ")}
        mainRoute=""
        childRoute=""
        description="Flat bed screen printing chemicals are specialized dyes and agents used for precise, high-quality textile printing on flat surfaces."
      />
      <ProductCard key={categoryId} categoryId={categoryId} />
      <ScrollButton />
    </div>
  );
};

export default Products;
