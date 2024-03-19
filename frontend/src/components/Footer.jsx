import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import Logo from "../assets/logo3.png";
import Subscribe from "./Subscribe";
import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-neutral-300 p-4 w-full flex flex-col items-center">
      <div className="md:w-3/4 mx-auto flex flex-col">
        <div className="flex flex-col md:flex-row gap-3 justify-between items-center w-full border-b border-b-neutral-400 pb-6">
          <div className="flex flex-col">
            <img
              src={Logo}
              className="w-32 h-32 object-contain self-center md:self-start"
              alt="logo"
            />
            <p className="text-sm">
              Fast, fresh, convenient. Your one-stop shop for delicious food
              delivered.
            </p>
          </div>
          <div className="p-1 min-w-[400px] md:w-[600px]">
            <Subscribe />
          </div>
        </div>

        <div className="flex justify-between my-10 gap-4 flex-col md:flex-row ">
          <div className="flex flex-col items-center">
            <span className="font-semibold text-lg md:self-start">LINKS</span>
            <div className="flex gap-8 hover:[&>a]:text-red-500 [&>a]:transition [&>a]:duration-500 ">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/menu">Menu</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/orders">Orders</NavLink>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-semibold text-lg md:self-end">SOCIALS</span>
            <div className="flex gap-3 items-center hover:[&>a]:text-red-500 [&>a]:transition [&>a]:duration-500 ">
              <a href="https://instagram.com" target="_blank">
                <AiFillInstagram size={30} />
              </a>
              <a href="https://facebook.com" target="_blank">
                <AiFillFacebook size={30} />
              </a>
              <a href="https://twitter.com" target="_blank">
                <AiFillTwitterSquare size={30} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-sm flex gap-2 self-center">
          2023 Developed by{" "}
          <a
            href="https://github.com/nikolad991"
            target="_blank"
            className="flex  hover:text-red-400"
          >
            {" "}
            <AiFillGithub size={18} /> nikolad991
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
