import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "../redux/cartSlice";
import { motion } from "framer-motion";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    console.log(id);
    dispatch(removeCartItem(id));
  };
  return (
    <div className="min-h-screen flex flex-col gap-5 items-center justify-center">
      {cart.map((item, index) => (
        <motion.div
          key={item.id}
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
              src={item.product.imageUrl}
              className=" w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="w-3/4 flex justify-between items-center p-4 ">
            <div className="px-7">
              {" "}
              <div className="font-semibold text-2xl">
                {item.product.name}
              </div>{" "}
              <div>
                {item.product?.options.map((option) => (
                  <div key={option.name}>
                    {option.name}: {option.default}
                  </div>
                ))}
              </div>
              <div>Quantity: {item.quantity}</div>
            </div>
            <div className="flex items-center  text-xl gap-2 ">
              <div className="font-semibold">${item.total}</div>
              <div className="text-red-500 text-3xl cursor-pointer">
                <AiOutlineDelete onClick={() => handleRemove(item.id)} />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Cart;
