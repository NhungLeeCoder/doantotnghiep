import React from "react";
import "./AllProduct.scss";
import ProductCard from "./ProductCard";
const AllProduct = () => {
  return (
    <>
      <div className="all-product-wrapper">
        <h3 className="all-product-title">Tranh mới</h3>
        <div className="all-product-items">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default AllProduct;
