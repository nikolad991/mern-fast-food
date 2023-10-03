import { useState, useEffect } from "react";
import FeaturedBg from "../assets/featuredBg.jpg";
import { StarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useGetFeaturedProductsQuery } from "../redux/productsApiSlice";

const FeaturedProducts = () => {
  const {
    data: featuredProducts,
    error,
    isLoading,
  } = useGetFeaturedProductsQuery();
  return (
    <section
      style={{ backgroundImage: `url(${FeaturedBg})` }}
      className="bg-center bg-cover bg-fixed"
    >
      <div className="py-10 md:py-20 flex flex-col items-center text-center gap-4 text-red-500 ">
        <h1 className="text-7xl font-yeseva">Weekly Specials</h1>
        <div className="flex gap-2 h-30 w-48">
          <StarIcon />
          <StarIcon className="scale-150" />
          <StarIcon />
        </div>
      </div>
      <div className=" py-20 flex flex-wrap items-center justify-center">
        {featuredProducts?.map((product, index) => (
          <div key={index} className="flex flex-col items-center gap-6 p-4">
            <div className="flex rounded-full w-80 h-80  border-[5px] border-red-300 group overflow-hidden ">
              <img
                src={product.imageUrl}
                alt=""
                className="h-100 w-100 transition-all duration-1000 scale-105 group-hover:scale-100 object-cover "
              />
            </div>
            <div className="bg-red-300 w-80 p-4 rounded-md flex flex-col gap-2 text-center">
              <div className="font-semibold text-lg">{product.name}</div>
              <div>${product.price}</div>
              <Link
                to={`/product/${product._id}`}
                className="bg-slate-800 rounded-lg text-white w-fit mx-auto px-3 py-1"
              >
                Order
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
