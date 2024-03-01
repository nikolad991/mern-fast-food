import React, { useEffect, useState } from "react";
import Logo from "../assets/food-logo-transparent.png";
import { motion } from "framer-motion";
import { useGetSliderQuery } from "../redux/sliderSlice";

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
      <section className="h-[calc(100vh-8rem)] overflow-hidden px-4 bg-red-50 ">
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
            className="hidden md:block absolute left-4 top-1/2 px-3 py-1 bg-white opacity-40 rounded-lg  text-neutral-800  text-5xl  cursor-pointer select-none hover:bg-neutral-300 transition duration-300"
            onClick={() =>
              setCurrentSlide((prev) =>
                prev === 0 ? sliderData?.length - 1 : prev - 1
              )
            }
          >
            {"<"}
          </div>
          <div
            className="hidden md:block absolute right-4 top-1/2 px-3 py-1 bg-white opacity-40 rounded-lg  text-neutral-800  text-5xl  cursor-pointer select-none hover:bg-neutral-300 transition duration-300"
            onClick={() =>
              setCurrentSlide((prev) =>
                prev === sliderData?.length - 1 ? 0 : prev + 1
              )
            }
          >
            {">"}
          </div>

          <motion.div className="w-1/2 h-1/2 flex items-center justify-center">
            {/* <img src={Logo} alt="" className="mx-auto grayscale" /> */}

            <div className="flex flex-col gap-4  font-lobster">
              {/* <h1 className="text-red-400">{sliderData[currentSlide]?.text}</h1>
               */}
              <h1 className="text-red-600 text-6xl w-72 leading-tight">
                {sliderData[currentSlide]?.text}
              </h1>
              <h2 className="text-sky-600 text-2xl">
                {sliderData[currentSlide]?.subtext}
              </h2>
              <button className="bg-red-600 text-white py-4 px-6 w-fit rounded-md border-2 border-transparent hover:bg-transparent hover:text-red-600 hover:border-2 hover:border-red-600">
                Order Now
              </button>
            </div>
          </motion.div>
          <div className="w-1/2 h-5/6 flex items-center justify-center bg-red-600 curve overflow-hidden">
            <img
              src={sliderData[currentSlide]?.imgUrl}
              className="h-full  w-full object-cover"
            />
          </div>
        </motion.div>
      </section>
    );
};

export default HeroSlider;
