import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { useSearchProductsQuery } from "../redux/productsApiSlice";
import { motion } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";
const SearchSidebar = ({ setShowSearchSidebar }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, error, isLoading } = useSearchProductsQuery(searchTerm);

  const variants = {
    initial: {
      height: 0,
      opacity: 0,
    },
    animate: {
      height: "100%",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: "70",
      },
    },
    exit: {
      height: "50%",
      opacity: 0.5,
      transition: {
        type: "spring",
        stiffness: "70",
      },
    },
  };
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      key="search_sidebar"
      className="fixed right-0 top-0 h-[calc(100vh-8rem)] w-[300px] z-50 bg-red-300 rounded-md p-2 overflow-y-auto "
    >
      <form className="relative flex flex-col justify-between items-center py-3 ">
        <button
          className="flex text-white self-end p-1 hover:text-neutral-500 transition duration-300"
          onClick={() => {
            setShowSearchSidebar(false);
          }}
        >
          <AiOutlineCloseCircle fontSize={36} />
        </button>
        <div className="relative flex p-2 w-full">
          <input
            className="rounded-xl p-2 text-neutral-400 placeholder:text-neutral-400 focus:outline-none w-full"
            type="text"
            placeholder="Search..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            value={searchTerm}
          />

          <span className="absolute right-3 top-5 text-neutral-400">
            <BiSearch />
          </span>
        </div>
      </form>
      <div>
        {searchTerm !== "" &&
          data?.map((product) => (
            <Link
              to={`/product/${product._id}`}
              key={product._id}
              className="flex items-center gap-3 p-2 hover:bg-red-200 rounded-md"
            >
              <div className="w-16 h-16 rounded-md overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              {product.name}
            </Link>
          ))}
      </div>
    </motion.div>
  );
};

export default SearchSidebar;
