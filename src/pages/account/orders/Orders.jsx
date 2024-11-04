import React from "react";
import { useParams, Outlet, NavLink, useNavigate } from "react-router-dom";
import "./Orders.scss";
import { useEffect } from "react";
const Orders = () => {
  const { status } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(status);
  }, [status]);
  useEffect(() => {
    if (!status) {
      navigate("pending");
    }
  }, []);
  return (
    <>
      <div className="orders">
        <div className="orders-nav">
          <ul className="orders-nav--option">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="pending"
              >
                Chờ xác nhận
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="pick-up"
              >
                Chờ lấy hàng
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="delivery"
              >
                Chờ giao hàng
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="completed"
              >
                Đã hoàn thành
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="orders-detail">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Orders;
