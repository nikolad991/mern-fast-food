import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import Logo from "../assets/food-logo-transparent.png";
const Footer = () => {
  return (
    <div className="bg-neutral-800 text-white p-4 w-full flex flex-col gap-3 items-center justify-center">
      <div className="rounded-full bg-red-100">
        <img src={Logo} alt="" />
      </div>

      <div className="flex gap-8 hover:[&>a]:text-red-500 [&>a]:transition [&>a]:duration-500 ">
        <a href="">Home</a>
        <a href="">Menu</a>
        <a href="">Contact</a>
        <a href="">Orders</a>
      </div>
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
      <div className="text-sm flex gap-2">
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
  );
};

export default Footer;
