import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <Header />
      <div className="black-line">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
