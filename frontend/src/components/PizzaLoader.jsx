import React from "react";
import Pizza from "../assets/pizza-loader.png";
import { motion } from "framer-motion";
const imgVariants = {
  initial: {
    transform: "rotate(0)",
    opacity: 0.5,
  },
  animate: {
    transform: "rotate(360deg)",
    opacity: 1,

    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};
const loadingVariants = {
  initial: {
    opacity: 0.5,
  },
  animate: {
    opacity: 1,

    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "loop",
      
    },
  },
};
const PizzaLoader = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col gap-5 p-10  items-center justify-center ">
        <motion.img
          src={Pizza}
          className="w-64 h-64 object-contain "
          variants={imgVariants}
          initial="initial"
          animate="animate"
          alt="loader"
        />
        <motion.h1
          className="font-lobster text-3xl text-blue-600"
          variants={loadingVariants}
          initial="initial"
          animate="animate"
        >
          Loading...
        </motion.h1>
      </div>
    </>
  );
};

export default PizzaLoader;
