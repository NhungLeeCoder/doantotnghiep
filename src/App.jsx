import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import AccountDetail from "./pages/account/AccountDetail";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import Cart from "./pages/account/Cart";
import Orders from "./pages/account/orders/Orders";
import OrderDetail from "./pages/account/orders/OrderDetail";
import Favourite from "./pages/account/Favourite";
import Account from "./pages/account/Account";
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/categories/:category" element={<Products />} />
          <Route path="/account" element={<Account />}>
            <Route path="/account/profile" element={<AccountDetail />} />
            <Route path="/account/cart" element={<Cart />} />
            <Route path="/account/order" element={<Orders />}>
              <Route path=":status" element={<OrderDetail />} />
            </Route>
            <Route path="/account/favourite" element={<Favourite />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
