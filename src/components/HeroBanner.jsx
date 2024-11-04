import React from "react";
import "./HeroBanner.scss";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage1 from "../assets/hero-banner-1.jpg";
import CarouselImage2 from "../assets/hero-banner-2.jpg";
import CarouselImage3 from "../assets/hero-banner-3.jpg";

const HeroBanner = () => {
  return (
    <>
      <Carousel fade controls={false}>
        <Carousel.Item interval={2000}>
          <img src={CarouselImage1} alt="" />
          <Carousel.Caption>
            <h3>Tranh mới mỗi ngày</h3>
            <p>
              Các mẫu tranh của các bạn sinh viên luôn được cập nhật liên tục
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={CarouselImage2} alt="" />
          <Carousel.Caption>
            <h3>Mỹ thuật truyền thống</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={CarouselImage3} alt="" />
          <Carousel.Caption>
            <h3>Mỹ thuật hiện đại</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HeroBanner;
