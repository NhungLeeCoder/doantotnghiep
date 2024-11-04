import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-list--item">
          <Link>
            Tất cả tranh <KeyboardArrowDownIcon />
          </Link>
          <ul className="nav-list--item__dropdown">
            <li>
              <Link to="/categories/tranh-phong-khach">Tranh phòng khách</Link>
            </li>
            <li>
              <Link to="/categories/tranh-phong-ngu">Tranh phòng ngủ</Link>
            </li>
            <li>
              <Link to="/categories/tranh-phong-tho">Tranh phòng thờ</Link>
            </li>
            <li>
              <Link to="/categories/tranh-go">Tranh gỗ</Link>
            </li>
            <li>
              <Link to="/categories/tranh-ve-3d">Tranh vẽ 3D</Link>
            </li>
          </ul>
        </li>
        <li className="nav-list--item">
          <Link to="/categories/son-dau">
            Sơn dầu <KeyboardArrowDownIcon />
          </Link>
          <ul className="nav-list--item__dropdown">
            <li>
              <Link to="/categories/tranh-son-dau-hoa">Tranh sơn dầu hoa</Link>
            </li>
            <li>
              <Link to="/categories/tranh-son-dau-phong-canh">
                Tranh sơn dầu phong cảnh
              </Link>
            </li>
            <li>
              <Link to="/categories/tranh-son-dau-truu-tuong">
                Tranh sơn dầu trừu tượng
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-list--item">
          <Link to="/categories/son-mai">
            Sơn mài <KeyboardArrowDownIcon />
          </Link>
          <ul className="nav-list--item__dropdown">
            <li>
              <Link to="/categories/son-mai">Tất cả tranh sơn mài</Link>
            </li>
          </ul>
        </li>
        <li className="nav-list--item">
          <Link to="/categories/tranh-in">
            Tranh in <KeyboardArrowDownIcon />
          </Link>
          <ul className="nav-list--item__dropdown">
            <li>
              <Link to="/categories/tranh-canvas">Tranh canvas</Link>
            </li>
            <li>
              <Link to="/categories/tranh-khung-kinh">Tranh khung kính</Link>
            </li>
            <li>
              <Link to="/categories/photography">Photography</Link>
            </li>
            <li>
              <Link to="/categories/tranh-bo">Tranh bộ</Link>
            </li>
          </ul>
        </li>
        <li className="nav-list--item">
          <Link to="/categories/tranh-de-ban">Tranh để bàn</Link>
        </li>
        <li className="nav-list--item">
          <Link to="/">Tranh theo yêu cầu</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
