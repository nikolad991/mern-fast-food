import React, { useEffect, useState } from "react";
import HeroBg from "../assets/heroBg.png";
import { motion } from "framer-motion";
import { useGetSliderQuery } from "../redux/sliderSlice";
import { Link } from "react-router-dom";

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
    borderRadius: "61% 39% 48% 52% / 45% 66% 34% 55%",
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

  if (sliderData)
    return (
      <section
        className="h-[calc(100vh-8rem)] overflow-hidden px-4 bg-red-50 bg-blend-overlay"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <motion.div
          className="relative h-full w-full flex items-center justify-center"
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
            className="w-1/2 h-1/2 flex items-center justify-center"
          >
            <div className="flex flex-col gap-10  font-lobster">
              <motion.h1
                variants={textVariants}
                className="text-red-600 text-6xl w-72 leading-tight"
              >
                {sliderData[currentSlide]?.text}
              </motion.h1>
              <motion.h2
                variants={textVariants}
                className="text-sky-600 text-2xl"
              >
                {sliderData[currentSlide]?.subtext}
              </motion.h2>
              <motion.div variants={textVariants}>
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
            className="w-1/2 h-5/6 flex items-center justify-center  overflow-hidden relative"
          >
            <img
              src={sliderData[currentSlide]?.imgUrl}
              className="h-[600px] w-[600px] object-cover"
            />
          </motion.div>
        </motion.div>
      </section>
    );
};

export default HeroSlider;
