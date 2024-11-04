import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./Account.scss";
const Account = () => {
  return (
    <>
      <div className="account-wrapper">
        <ul className="account-navbar">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/account/profile"
            >
              Thông tin
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/account/cart"
            >
              Giỏ hàng của tôi
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/account/favourite"
            >
              Sản phẩm đã lưu
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/account/order"
            >
              Đơn hàng của tôi
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default Account;
