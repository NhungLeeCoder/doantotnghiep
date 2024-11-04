import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Oops! Trang bạn tìm kiếm không tồn tại.</h2>
      <p>Có vẻ như bạn đã truy cập sai địa chỉ hoặc trang đã bị xóa.</p>
      <Link to="/" className="back-home">
        Quay về trang chủ
      </Link>
    </div>
  );
};

export default NotFound;
