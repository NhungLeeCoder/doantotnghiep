import React from "react";
import "./Home.scss";
import HeroBanner from "../components/HeroBanner";
import ProductCategories from "../components/ProductCategories";
import AllProduct from "../components/AllProduct";
const Home = () => {
  return (
    <>
      <HeroBanner />
      <ProductCategories />
      <AllProduct />
      <AllProduct />
    </>
  );
};

export default Home;
