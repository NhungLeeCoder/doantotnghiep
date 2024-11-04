import React from "react";
import { useParams } from "react-router-dom";
import "./Products.scss";
import AllProduct from "../components/AllProduct";
const Products = () => {
  const { category } = useParams();
  console.log(category);
  return (
    <>
      {category}
      <AllProduct />
    </>
  );
};

export default Products;
