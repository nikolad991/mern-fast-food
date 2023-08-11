import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Menu = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/products/all").then((res) => {
      res.json().then((data) => setProducts(data));
    });
  }, []);
  return (
    <section className=" bg-white">
      <div className=" w-5/6  mx-auto gap-2 p-4 flex flex-wrap justify-center">
        {products.map((product, index) => (
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
