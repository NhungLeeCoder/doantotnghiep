import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./ProductTableList.scss";

const ProductTableList = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 10;
  const offset = currentPage * productsPerPage;
  const currentProducts = products.slice(offset, offset + productsPerPage);
  const pageCount = Math.ceil(products.length / productsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="product-table-list">
      <table>
        <thead>
          <tr>
            <th>Số thứ tự</th>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Đã bán</th>
            <th>Giá bán (vnđ)</th>
            <th>Ngày đăng</th>
            <th>Tình trạng</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product, index) => (
            <tr key={product.id}>
              <td>{offset + index + 1}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>{product.dateAdded}</td>
              <td>{product.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"Trước"}
        nextLabel={"Sau"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default ProductTableList;
