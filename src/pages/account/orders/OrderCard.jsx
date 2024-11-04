import React from "react";
import "./OrderCard.scss";
import bedroomImg from "../../../assets/product-category-img/tranh-phong-ngu.jpeg";
const OrderCard = () => {
  return (
    <div className="order-card">
      <img
        src={bedroomImg}
        alt="Tranh sơn dầu trừu tượng phong cảnh"
        className="order-card__image"
      />
      <div className="order-card__info">
        <h3 className="order-card__title">
          Thảo Nguyên Hồng - Tranh sơn dầu trừu tượng phong cảnh
        </h3>
        <p className="order-card__option">Chọn kích thước tranh: 100x100</p>
        <p className="order-card__option">
          Chọn khung: Khung nổi composite đen
        </p>
      </div>
    </div>
  );
};

export default OrderCard;
