import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <div className="footer-section">
          <h3>Về chúng tôi</h3>
          <p>
            Art house là không gian đặc biệt, nơi các sản phẩm thủ công, sáng
            tạo và đầy tâm huyết được tạo ra bởi chính tay các sinh viên. Mua
            sắm tại đây không chỉ giúp bạn sở hữu những món đồ độc đáo mà còn
            ủng hộ đam mê và ước mơ của thế hệ trẻ.
          </p>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-pinterest"></i>
          </div>
        </div>

        <div className="footer-section">
          <h3>Thông tin</h3>
          <ul>
            <li>
              <a href="#">Về chúng tôi</a>
            </li>
            <li>
              <a href="#">Điều khoản</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Tài khoản</h3>
          <ul>
            <li>
              <a href="#">Giỏ hàng</a>
            </li>
            <li>
              <a href="#">Wishlist</a>
            </li>
            <li>
              <a href="#">Thông tin tài khoản</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Tin tức mới nhất</h3>
          <input type="email" placeholder="Điền mail của bạn" />
          <button className="subscribe-btn">
            <i className="fas fa-paper-plane"></i> Đăng kí ngay
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
