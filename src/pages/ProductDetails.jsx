import React, { useState } from "react";
import { useParams } from "react-router-dom";
import bedroomImg from "../assets/product-category-img/tranh-phong-ngu.jpeg";
import "./ProductDetails.scss";
function ProductDetails() {
  const [size, setSize] = useState("80x80");
  const [frame, setFrame] = useState("composite");
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  return (
    <>
      <h1>ID của sản phẩm: {id}</h1>
      <div className="product-details">
        <div className="product-container">
          <div className="product-image-gallery">
            <img src={bedroomImg} alt="Main product" className="main-image" />
            <div className="thumbnail-gallery">
              <img src={bedroomImg} alt="Thumbnail 1" />
              <img src={bedroomImg} alt="Thumbnail 2" />
              <img src={bedroomImg} alt="Thumbnail 3" />
            </div>
          </div>

          <div className="product-info">
            <h1 className="product-title">
              Bình hoa mạch kiểu - Tranh hoa vintage treo tường phòng khách
              phòng ngủ
            </h1>
            <div className="product-price">
              <span className="current-price">1.480.000₫</span>
              <span className="original-price">1.980.000₫</span>
            </div>

            <div className="options">
              <div className="option">
                <label>Chọn kích thước tranh</label>
                <button
                  onClick={() => setSize("80x80")}
                  className={size === "80x80" ? "selected" : ""}
                >
                  80x80
                </button>
                <button
                  onClick={() => setSize("100x100")}
                  className={size === "100x100" ? "selected" : ""}
                >
                  100x100
                </button>
              </div>
              <div className="option">
                <label>Chọn khung</label>
                <button
                  onClick={() => setFrame("composite")}
                  className={frame === "composite" ? "selected" : ""}
                >
                  Khung nổi composite đen
                </button>
              </div>
            </div>

            <div className="quantity">
              <label>Số lượng</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min="1"
              />
            </div>

            <button className="add-to-cart">Thêm vào giỏ hàng</button>

            <div className="product-meta">
              <p>Mã: 170600</p>
              <p>Danh mục: Tranh treo tường, Tranh in, Tranh canvas</p>
            </div>
          </div>
        </div>

        <div className="product-description">
          <h1>Mô tả sản phẩm</h1>
          <p>
            Tranh hoa mạch kiểu vintage thơ mộng này phù hợp treo phòng khách,
            phòng ngủ. Màu sắc tiết chế của bức tranh càng tăng vẻ hiện đại.
            Tranh được hoàn thiện căng khung nổi cao cấp.
          </p>
        </div>
        <div className="product-description">
          <h1>Đánh giá từ người mua</h1>
          <p>abcbab</p>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
