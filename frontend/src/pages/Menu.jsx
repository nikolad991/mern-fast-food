import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Menu = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  useEffect(() => {
    fetch("http://localhost:4000/api/products/all").then((res) => {
      res.json().then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
    });
  }, []);
  const handleCategoryChange = (e) => {
    const categoryName = e.target.innerText;
    setSelectedCategory(categoryName);
    if (categoryName === "All") setFilteredProducts(products);
    else
      setFilteredProducts(
        products.filter((prev) => prev.category === categoryName)
      );
  };
  return (
    <section className=" bg-white">
      <div className="flex justify-center p-10 gap-6 [&>button]:rounded-3xl [&>button]:border-2 [&>button]:border-yellow-500  [&>button]:text-neutral-800 [&>button]:text-lg [&>button]:py-2 [&>button]:px-5">
        {["All", "Burger", "Pizza", "Pancake"].map((category, index) => (
          <button
            key={index}
            className={`transition duration-500 hover:bg-red-500 hover:border-transparent ${
              selectedCategory === category
                ? "!bg-red-600 !text-white !border-transparent"
                : ""
            }`}
            onClick={handleCategoryChange}
          >
            {category}
          </button>
        ))}
      </div>
      <div className=" w-5/6  mx-auto gap-2 p-4 flex flex-wrap justify-center">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product._id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: index * 0.2,
              duration: 0.5,
            }}
            className="flex w-full lg:w-[45%] h-48 border border-neutral-300 transition duration-600 hover:border-red-100 hover:bg-red-50 "
          >
            <div className="flex w-1/4 h-full">
              <img
                src={product.imageUrl}
                className=" w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="w-3/4 flex justify-between items-center p-4 ">
              <div className="px-7">
                {" "}
                <div className="font-semibold text-2xl">
                  {product.name}
                </div>{" "}
                <div className="text-xs">{product?.description}</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-xs">{product.category}</div>

                <div className="font-semibold">${product.price}</div>
                <Link
                  className="bg-neutral-800 text-white rounded-md px-2 py-1"
                  to={`/product/${product._id}`}
                >
                  ORDER
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
