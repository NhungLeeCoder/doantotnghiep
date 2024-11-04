import React, { useEffect, useState } from "react";
import "./AccountDetail.scss";
import Avatar from "@mui/material/Avatar";

const AccountDetail = () => {
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    studentCode: "",
  });
  useEffect(() => {
    //TODO: lấy user bằng API
    setFormData({
      ...formData,
      name: "Lee Nhung",
      email: "leenhungxinhdep@gmail.com",
      phone: "(123) 456-7890",
      address: "123 phố X, Chương Mỹ, VN",
      studentCode: "MSV12548",
    });
  }, []);
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type;
      const fileSize = file.size / 1024 / 1024; // Đổi size ảnh sang MB

      // Validate kiểu ảnh
      if (!["image/jpeg", "image/png"].includes(fileType)) {
        setError("Only JPG or PNG images are allowed.");
        setAvatar(null);
        return;
      }

      // Validate size ảnh (giới hạn 2 MB)
      if (fileSize > 2) {
        setError("File size must be less than 2 MB.");
        setAvatar(null);
        return;
      }

      setError("");
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSaveUserInfor = () => {
    if (!isEditing) {
      setIsEditing(true);
    } else {
      //TODO: Save user bằng API
      setIsEditing(false);
    }
  };
  return (
    <div className="account-detail">
      <div>
        <h1>Hồ sơ của tôi</h1>
        <div className="account-detail-items">
          <div className="account-info">
            <div className="info-item">
              <label>Tên tài khoản:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
              ) : (
                <p>{formData.name}</p>
              )}
            </div>
            <div className="info-item">
              <label>Email:</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              ) : (
                <p>{formData.email}</p>
              )}
            </div>
            <div className="info-item">
              <label>Số điện thoại:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                />
              ) : (
                <p>{formData.phone}</p>
              )}
            </div>
            <div className="info-item">
              <label>Địa chỉ:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                />
              ) : (
                <p>{formData.address}</p>
              )}
            </div>
            <div className="info-item">
              <label>Mã sinh viên:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="studentCode"
                  value={formData.studentCode}
                  onChange={handleChange}
                  placeholder="Student Code"
                />
              ) : (
                <p>{formData.studentCode}</p>
              )}
            </div>
            <button className="edit-button" onClick={handleSaveUserInfor}>
              {isEditing ? "Lưu" : "Chỉnh sửa"}
            </button>
          </div>
          <div className="account-avatar">
            <Avatar
              alt={formData.name}
              src={avatar ? avatar : "/static/images/avatar/1.jpg"}
              sx={{ width: 80, height: 80 }}
            />
            <label htmlFor="upload-photo">Chọn ảnh</label>
            <p>Dụng lượng file tối đa 2 MB</p>
            <p>Định dạng:.JPEG, .PNG</p>
            <input
              type="file"
              name="photo"
              id="upload-photo"
              onChange={handleAvatarChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetail;
