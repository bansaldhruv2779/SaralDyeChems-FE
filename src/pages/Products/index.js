import React, {useEffect, useState} from "react";
import ProductCard from "./ProductCard";
import CommonBackground from "../../components/CommonBackground";
import ScrollButton from "../../components/ScrollButton";
import {useParams} from "react-router-dom";
import {products as productList} from "../../constants/newProduct";

const Products = () => {
  const {categoryId} = useParams();
  const [category] = productList.data.filter(
    category => !categoryId || category.category === categoryId,
  );
  const categoryDescription = category?.description || "";
  const allProducts = (category?.product || []).map(product => ({
    name: product.name,
    description: product.description,
    image: product.image,
    subCategory: product.subCategory || [],
  }));

  return (
    <div>
      {console.log(categoryDescription)}
      <CommonBackground
        title={categoryId?.replaceAll("-", " ")}
        mainRoute=""
        childRoute=""
        description={categoryDescription}
      />
      <ProductCard key={categoryId} allProducts={allProducts} />
      <ScrollButton />
    </div>
  );
};

export default Products;
