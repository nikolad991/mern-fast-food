import React from "react";
import { Link } from "react-router-dom";
const FeaturedCard = ({ product }) => {
  return (
    <div className="w-[300px] h-[500px] border rounded-md m-10 p-5 flex flex-col justify-around items-center text-center overflow-hidden relative group hover:border-red-500 transition-all bg-white z-0 ">
      <div className="bg-red-600 w-[300px] h-[300px] rounded-full absolute  -z-10 -top-80 group-hover:h-[450px] transition-all duration-700"></div>
      <div className="bg-neutral-200 w-[300px] h-[300px] rounded-full absolute -z-20 -top-40 group-hover:h-[800px] transition-all duration-700"></div>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-36 h-36 object-cover border-white border-[12px] rounded-full group-hover:scale-125 transition-all duration-1000"
      />
      <h2 className="text-3xl font-semibold">{product.name}</h2>
      <p className="text-sm font-light">{product.description}</p>
      <h3 className="text-2xl font-semibold text-yellow-500">
        ${product.price}
      </h3>
      <Link
        className="bg-sky-600 border border-transparent text-white px-5 py-3 rounded-md hover:bg-white hover:border-sky-600 hover:text-sky-600 transition"
        to={`/product/${product._id}`}
      >
        Order
      </Link>
    </div>
  );
};

export default FeaturedCard;
