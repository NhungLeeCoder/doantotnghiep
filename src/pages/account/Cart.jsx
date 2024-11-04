import React, { useState } from "react";
import "./Cart.scss";
import bedroomImg from "../../assets/product-category-img/tranh-phong-ngu.jpeg";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Thảo Nguyên Hồng - Tranh sơn dầu trừu tượng phong cảnh",
      price: 11240000,
      quantity: 20,
      image: bedroomImg,
      size: "100x100",
      frame: "Khung nổi composite đen",
    },
    {
      id: 2,
      name: "Thảo Nguyên Hồng - Tranh sơn dầu trừu tượng phong cảnh",
      price: 11240000,
      quantity: 20,
      image: bedroomImg,
      size: "100x100",
      frame: "Khung nổi composite đen",
    },
  ]);

  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="cart">
      <table className="cart-table">
        <thead>
          <tr>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Tạm tính</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td className="cart-product">
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <RemoveCircleOutlineIcon />
                </button>
                <img
                  src={item.image}
                  alt={item.name}
                  className="product-image"
                />
                <div className="product-details">
                  <h3>{item.name}</h3>
                  <p>Chọn kích thước tranh: {item.size}</p>
                  <p>Chọn khung: {item.frame}</p>
                </div>
              </td>
              <td className="product-price">{item.price.toLocaleString()} đ</td>
              <td className="product-quantity">
                <input type="number" defaultValue={item.quantity} />
              </td>
              <td className="product-total">
                {(item.price * item.quantity).toLocaleString()} đ
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">Tổng cộng:</td>
            <td>{getTotal().toLocaleString()} đ</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Cart;
