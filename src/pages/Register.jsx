import React, { useState } from "react";
import "./Register.scss";
import schoolImage from "../assets/truong-dai-hoc-kien-truc-ha-noi.jpg";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    // You can add more functionality like form validation, API calls, etc.
  };

  return (
    <div className="register-page">
      <div
        className="register-form"
        style={{
          backgroundImage: `url(${schoolImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <div className="form-container">
          <h3 className="form-title">Đăng kí</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Tên</label>
              <input
                type="text"
                id="username"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
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
              <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button className="btn-register" type="submit">
                Đăng kí
              </button>
            </div>
            <div className="form-footer">
              <p>
                Đã có tài khoản?{" "}
                <Link to="/login" className="login-link">
                  Đăng nhập ngay
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
