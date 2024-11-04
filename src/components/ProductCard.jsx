import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";
import bedroomImg from "../assets/product-category-img/tranh-phong-ngu.jpeg";
const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-image">
        <Link to="/products/1">
          <img src={bedroomImg} alt="Đấu trường La Mã" />
        </Link>
      </div>
      <Link to="/products/1">
        <h3 className="product-title">
          Đấu trường La Mã – Tranh treo tường in kính Châu âu
        </h3>
      </Link>

      <div className="product-rating">
        <span className="stars">★★★★★</span>{" "}
        {/* Adjust the stars based on rating */}
        <span className="review-count">(3)</span>
      </div>
      <div className="product-price">
        <span className="price">880.000₫ - 1.630.000₫</span>
      </div>
    </div>
  );
};

export default ProductCard;
