import React, { useState } from "react";
import "./Login.scss";
import schoolImage from "../assets/truong-dai-hoc-kien-truc-ha-noi.jpg";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-page">
      <div
        className="login-form"
        style={{
          backgroundImage: `url(${schoolImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <div className="form-container">
          <h3 className="form-title">Đăng nhập</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button className="btn-login" type="submit">
                Đăng nhập
              </button>
            </div>
            <div className="form-footer">
              <a href="#!" className="forgot-password">
                Quên mật khẩu?
              </a>
              <p>
                Tạo tài khoản?{" "}
                <Link to="/signup" className="register-link">
                  Đăng kí tại đây
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
