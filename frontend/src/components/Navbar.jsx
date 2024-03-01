import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Bars4Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillPhone,
  AiFillTwitterSquare,
  AiOutlineMail,
} from "react-icons/ai";

import Logo from "../assets/food-logo-transparent.png";
import MobileMenu from "./MobileMenu";
import SearchSidebar from "./SearchSidebar";
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearchSidebar, setShowSearchSidebar] = useState(false);
  const cart = useSelector((state) => state.cart);
  const { userData } = useSelector((state) => state.auth);
  const linkHover = "hover:text-red-600 transition-all duration-600";
  return (
    <>
      <nav className=" text-neutral-800 flex flex-col h-36 justify-center">
        <div className="w-full px-10 py-1 text-white bg-neutral-800 justify-between hidden md:flex">
          <div className="flex gap-2 items-center hover:[&>a]:text-red-500 [&>a]:transition [&>a]:duration-500 ">
            <a href="https://instagram.com" target="_blank">
              <AiFillInstagram size={20} />
            </a>
            <a href="https://facebook.com" target="_blank">
              <AiFillFacebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank">
              <AiFillTwitterSquare size={20} />
            </a>
          </div>
          <div className="flex items-center gap-6 hover:[&>a]:text-red-500 [&>a]:transition [&>a]:duration-500 ">
            <a href="tel:012345678" className="flex gap-1 items-center">
              <AiFillPhone />
              (00) 000 111 222
            </a>
            <a href="email:info@food.xyz" className="flex gap-1 items-center">
              <AiOutlineMail /> info@food.xyz
            </a>
          </div>
        </div>
        <div className="px-6 flex items-center justify-between">
          <div className="flex h-full cursor-pointer ">
            <Link to="/">
              <img src={Logo} className="w-28 h-28" alt="logo" />
            </Link>
          </div>
          <div className="hidden md:flex gap-12 text-2xl ">
            <NavLink to="/" className={linkHover} href="">
              Home
            </NavLink>
            <NavLink to="/menu" className={linkHover} href="">
              Menu
            </NavLink>
            <NavLink to="/orders" className={linkHover} href="">
              Orders
            </NavLink>
            <NavLink to="/contact" className={linkHover} href="">
              Contact
            </NavLink>
          </div>
          <div className="flex h-7 gap-5">
            <MagnifyingGlassIcon className={`${linkHover} cursor-pointer`} onClick={()=>{setShowSearchSidebar(!showSearchSidebar)}} />
            <Link to="/cart" className="flex relative">
              <ShoppingCartIcon className={`${linkHover} cursor-pointer`} />
              <span className="absolute top-0 right-0 text-xs font-bold w-4 h-4 p-2 bg-red-300 rounded-full flex items-center justify-center select-none">
                {cart.length}
              </span>
            </Link>
            {userData ? (
              <Link
                to="/profile"
                className={`flex gap-1 ${linkHover} cursor-pointer`}
              >
                <div className="flex">
                  <UserIcon />
                </div>
                <div className="flex items-end">{userData?.firstName}</div>
              </Link>
            ) : (
              <Link to="/login" className="flex">
                <ArrowRightOnRectangleIcon
                  className={`${linkHover} cursor-pointer`}
                />
              </Link>
            )}
          </div>
          <div className="border border-white h-12 w-12 md:hidden">
            <Bars4Icon onClick={() => setShowMobileMenu(true)} />
          </div>
        </div>
      </nav>
      {showMobileMenu && (
        <MobileMenu setShowMobileMenu={setShowMobileMenu} cart={cart} />
      )}
      {showSearchSidebar && <SearchSidebar />}
    </>
  );
};

export default Navbar;
