import React, { useState, useEffect } from "react";
import "./Seller.scss";
import StatCard from "../../../components/statCard/StatCard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ProductTableList from "../../../components/productTableList/ProductTableList";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const Seller = () => {
  const [products, setProducts] = useState([]);
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  useEffect(() => {
    const sampleProducts = Array.from({ length: 50 }, (_, index) => ({
      id: index + 1,
      name: `Tên tranh số ${index + 1}`,
      quantity: Math.floor(Math.random() * 100),
      price: (Math.random() * 100).toFixed(3),
      dateAdded: new Date().toLocaleDateString(),
      status: "Chờ phê duyệt",
    }));
    setProducts(sampleProducts);
  }, []);

  // LOGIC cho việc upload bài viết mới
  const [formData, setFormData] = useState({
    image: null,
    name: "",
    quantity: 0,
    price: 0,
    types: {
      "Tranh sơn dầu": false,
      "Tranh lụa": false,
      "Tranh canvas": false,
      "Tranh gỗ": false,
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({
        ...formData,
        image: imageUrl,
      });
    }
  };

  const handleCheckboxChange = (e) => {
    const { name } = e.target;
    setFormData({
      ...formData,
      types: {
        ...formData.types,
        [name]: !formData.types[name],
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Thực hiện logic upload hoặc xử lý dữ liệu form
    console.log(formData);
    setOpenModal(false);
  };
  return (
    <>
      <div className="seller seller-wrapper">
        <h1>Trung tâm người bán</h1>
        <div className="seller-dashboard">
          <StatCard
            title="Tổng doanh thu"
            value="200.000.000 vnđ"
            changeType="increase"
            icon={<AttachMoneyIcon />}
          />
          <StatCard
            title="Tổng đơn"
            value="10.000"
            changeType="decrease"
            icon={<ReceiptLongIcon />}
          />
        </div>
        <div className="seller-upload">
          <p>Tạo mới</p>
          <button onClick={handleOpen}>+</button>
        </div>
        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style }}>
            <form className="upload-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="image">Hình ảnh:</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleFileChange}
                />
              </div>
              {formData.image && (
                <img
                  className="image-preview"
                  src={formData.image}
                  alt="preview"
                />
              )}
              <div className="form-group">
                <label htmlFor="name">Tên sản phẩm:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="quantity">Số lượng:</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="price">Giá:</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Loại tranh:</label>
                {Object.keys(formData.types).map((type) => (
                  <div key={type}>
                    <input
                      type="checkbox"
                      name={type}
                      checked={formData.types[type]}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor={type}>{type}</label>
                  </div>
                ))}
              </div>

              <button type="submit" className="submit-button">
                Đăng bài
              </button>
            </form>
          </Box>
        </Modal>
        <ProductTableList products={products} />
      </div>
    </>
  );
};

export default Seller;
