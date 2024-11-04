import React from "react";
import "./Header.scss";
import logo from "../assets/Logo_HAU.png";

import { Link } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";

import Navbar from "./Navbar";
import { Badge } from "@mui/material";
const Header = () => {
  return (
    <div id="header-wrapper">
      <div className="black-line">
        <div className="header-welcome">
          <p className="typewriter">
            Art house, mua gì cũng rẻ, mua gì cũng có !!!
          </p>
        </div>
      </div>
      <header id="header">
        <div className="header-item header-item-1">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="header-item header-item-2">
          <input type="text" placeholder="Bạn đang tìm gì ?" />
          <button className="header-search-btn">
            <SearchIcon />
          </button>
        </div>
        <div className="header-item header-item-3">
          <ul className="header-item header-navigate">
            <li className="header-navigate--badge">
              <Badge badgeContent={4} color="primary">
                <Link to="/account/cart">
                  <ShoppingCartIcon />
                </Link>
              </Badge>
            </li>
            <li className="header-navigate--favourite">
              <Link to="/account/favourite">
                <FavoriteIcon />
              </Link>
            </li>
            <li className="header-navigate--user">
              <AccountCircleIcon />
              <ul className="header-navigate--dropbox">
                <li>
                  <Link to="/account/profile">Thông tin</Link>
                </li>
                <li>Đăng xuất</li>
              </ul>
            </li>
          </ul>
        </div>
      </header>
      <div className="black-line">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
