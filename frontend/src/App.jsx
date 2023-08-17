import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const { cart } = useSelector((state) => state);
  useEffect(() => {
    localStorage.setItem("food-cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
