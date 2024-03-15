import React, { useEffect, useState } from "react";
import HeroBg from "../assets/heroBg.png";
import { motion } from "framer-motion";
import { useGetSliderQuery } from "../redux/sliderSlice";
import { Link } from "react-router-dom";
import PizzaLoader from "./PizzaLoader";

const textVariants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const picVariants = {
  initial: {
    transform: "scale(1.1)",
  },
  animate: {
    transform: "scale(1)",

    transition: {
      duration: 10,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};
const HeroSlider = () => {
  const { data: sliderData, error, isLoading } = useGetSliderQuery();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === sliderData?.length - 1 ? 0 : prev + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [sliderData]);

  return (
    <section
      className="h-[100vh] overflow-hidden px-4 pt-20 bg-red-50 bg-blend-overlay flex items-center justify-center"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      {sliderData ? (
        <motion.div
          className="relative h-full w-full flex flex-col-reverse lg:flex-row items-center justify-center"
          key={currentSlide}
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100vw" }}
          transition={{
            duration: 0.6,
          }}
        >
          <div
            className="hidden md:block absolute left-4 top-1/2 px-3 py-1 bg-white opacity-40 rounded-lg  text-neutral-800  text-5xl  cursor-pointer select-none hover:bg-neutral-300 transition duration-300 z-50"
            onClick={() =>
              setCurrentSlide((prev) =>
                prev === 0 ? sliderData?.length - 1 : prev - 1
              )
            }
          >
            {"<"}
          </div>
          <div
            className="hidden md:block absolute right-4 top-1/2 px-3 py-1 bg-white opacity-40 rounded-lg  text-neutral-800  text-5xl  cursor-pointer select-none hover:bg-neutral-300 transition duration-300 z-50"
            onClick={() =>
              setCurrentSlide((prev) =>
                prev === sliderData?.length - 1 ? 0 : prev + 1
              )
            }
          >
            {">"}
          </div>

          <motion.div
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="w-1/2 h-1/2 flex items-center justify-center mb-10"
          >
            <div className="flex flex-col gap-3 lg:gap-10  font-lobster text-center lg:text-left">
              <motion.h1
                variants={textVariants}
                className="text-red-600  text-5xl lg:text-6xl w-72 lg:leading-tight"
              >
                {sliderData[currentSlide]?.text}
              </motion.h1>
              <motion.h2
                variants={textVariants}
                className="text-sky-600 text-lg lg:text-2xl"
              >
                {sliderData[currentSlide]?.subtext}
              </motion.h2>
              <motion.div variants={textVariants} className="mt-5">
                <Link
                  to="/menu"
                  className="bg-red-600 text-white py-4 px-6 w-fit rounded-md border-2 border-transparent hover:bg-transparent hover:text-red-600 hover:border-2 hover:border-red-600"
                >
                  Order Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            variants={picVariants}
            initial="initial"
            animate="animate"
            className="w-full h-full lg:w-1/2 lg:h-5/6 flex items-center justify-center  overflow-hidden relative p-5"
          >
            <img
              src={sliderData[currentSlide]?.imgUrl}
              className="sm:h-64 sm:w-64 md:h-96 md:w-96 xl:h-[600px] xl:w-[600px] object-cover"
            />
          </motion.div>
        </motion.div>
      ) : (
        <PizzaLoader />
      )}
    </section>
  );
};

export default HeroSlider;
