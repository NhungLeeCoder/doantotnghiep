import React from "react";
import "./ProductCategories.scss";
import { Link } from "react-router-dom";
import bedroomImg from "../assets/product-category-img/tranh-phong-ngu.jpeg";
import livingroomImg from "../assets/product-category-img/tranh-phong-khach.jpg";
import woodenImg from "../assets/product-category-img/tranh-go.jpg";
import sonDauImg from "../assets/product-category-img/son-dau.jpg";
import sonMaiImg from "../assets/product-category-img/son-mai.jpg";
import printingImg from "../assets/product-category-img/tranh-in.jpg";
import glassImg from "../assets/product-category-img/tranh-kinh.jpg";
import tableImg from "../assets/product-category-img/tranh-de-ban.jpg";
const ProductCategories = () => {
  const categories = [
    {
      title: "Tranh phòng ngủ",
      img: bedroomImg,
      link: "/categories/tranh-phong-ngu",
    },
    {
      title: "Tranh phòng khách",
      img: livingroomImg,
      link: "/categories/tranh-phong-khach",
    },
    { title: "Tranh gỗ", img: woodenImg, link: "/categories/tranh-go" },
    { title: "Sơn dầu", img: sonDauImg, link: "/categories/son-dau" },
    { title: "Sơn mài", img: sonMaiImg, link: "/categories/son-mai" },
    { title: "Tranh in", img: printingImg, link: "/categories/tranh-in" },
    { title: "Tranh kính", img: glassImg, link: "/categories/tranh-kinh" },
    { title: "Tranh để bàn", img: tableImg, link: "/categories/tranh-de-ban" },
  ];

  return (
    <>
      <h4 className="category-title">Chọn tranh theo loại</h4>
      <div className="category-container">
        {categories.map((category, index) => (
          <Link to={category.link}>
            <div key={index} className="category-item">
              <img
                src={category.img}
                alt={category.title}
                className="category-image"
              />
              <span className="category-text">{category.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductCategories;
