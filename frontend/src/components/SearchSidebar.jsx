import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { useSearchProductsQuery } from "../redux/productsApiSlice";
const SearchSidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, error, isLoading } = useSearchProductsQuery(searchTerm);

  console.log(data);
  return (
    <div className=" absolute right-3 top-36 h-[calc(100vh-8rem)] w-[300px] z-50 bg-red-300 rounded-md p-2 overflow-y-auto ">
      <form className="relative flex justify-between items-center py-3 ">
        <input
          className="rounded-xl p-2 text-neutral-400 placeholder:text-neutral-400 focus:outline-none w-full"
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          value={searchTerm}
        />
        <span className="absolute right-2 text-neutral-400">
          <BiSearch />
        </span>
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
    </div>
  );
};

export default SearchSidebar;
