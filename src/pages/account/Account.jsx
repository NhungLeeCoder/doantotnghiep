import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Account.scss";
const Account = () => {
  return (
    <>
      <div className="account-wrapper">
        <ul className="account-navbar">
          <li>
            <Link to="/account/profile">Thông tin</Link>
          </li>
          <li>
            <Link to="/account/cart">Giỏ hàng của tôi</Link>
          </li>
          <li>
            <Link to="/account/favourite">Sản phẩm đã lưu</Link>
          </li>
          <li>
            <Link to="/account/order">Đơn hàng của tôi</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default Account;
