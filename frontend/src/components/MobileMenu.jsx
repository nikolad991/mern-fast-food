import React from "react";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Logo from "../assets/food-logo-transparent.png";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
const MobileMenu = ({ setShowMobileMenu, cart }) => {
  const handleClose = () => {
    setShowMobileMenu(false);
  };
  return (
    <nav className="absolute top-0 left-0 bg-red-400 min-h-screen w-full overscroll-none z-10">
      <div className="absolute top-11 right-7 text-5xl animate-pulse ">
        <MdClose onClick={() => setShowMobileMenu(false)} />
      </div>

      <div className="h-screen flex flex-col gap-8 items-center justify-center  text-white uppercase text-4xl font-yeseva">
        <div className="bg-red-300 rounded-full w-32 h-32">
          <img src={Logo} alt="" />
        </div>

        <NavLink onClick={handleClose} to="/">
          Home
        </NavLink>
        <NavLink onClick={handleClose} to="/menu">
          Menu
        </NavLink>
        <NavLink onClick={handleClose} to="/orders">
          Orders
        </NavLink>
        <NavLink onClick={handleClose} to="/cart">
          Cart ({cart.length})
        </NavLink>
        <NavLink onClick={handleClose} to="/contact">
          Contact
        </NavLink>
        <div className="flex gap-4 items-center ">
          <a href="https://instagram.com" target="_blank">
            <AiFillInstagram size={40} />
          </a>
          <a href="https://facebook.com" target="_blank">
            <AiFillFacebook size={40} />
          </a>
          <a href="https://twitter.com" target="_blank">
            <AiFillTwitterSquare size={40} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MobileMenu;
