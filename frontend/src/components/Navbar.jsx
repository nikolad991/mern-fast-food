import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Bars4Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillPhone,
  AiFillTwitterSquare,
  AiOutlineMail,
} from "react-icons/ai";

import Logo from "../assets/food-logo-transparent.png";
const Navbar = () => {
  const linkHover = "hover:text-red-600 transition-all duration-600";
  return (
    <nav className=" text-neutral-800 flex flex-col h-32 ">
      <div className="w-full px-10 py-1 text-white bg-neutral-800 flex justify-between">
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
          <MagnifyingGlassIcon className={`${linkHover} cursor-pointer`} />
          <div className="flex relative">
            <ShoppingCartIcon className={`${linkHover} cursor-pointer`} />
            <span className="absolute top-0 right-0 text-xs font-bold w-4 h-4 p-2 bg-red-300 rounded-full flex items-center justify-center">
              3
            </span>
          </div>
          <UserIcon className={`${linkHover} cursor-pointer`} />
        </div>
        <div className="border border-white h-12 w-12 md:hidden">
          <Bars4Icon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
