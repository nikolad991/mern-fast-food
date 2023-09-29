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
      <section className="h-[calc(100vh-8rem)]">
        <motion.div
          className="relative h-full w-full"
          key={currentSlide}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
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
          <img
            src={sliderData[currentSlide]?.imgUrl}
            className="h-full w-full object-cover"
          />
          <motion.div className="absolute top-0 py-36 md:py-0 md:top-1/3 left-1/2 -translate-x-1/2 bg-neutral-800 bg-opacity-50 rounded-lg w-full h-full md:w-1/2 md:h-1/2">
            <img src={Logo} alt="" className="mx-auto grayscale" />

            <div className="flex flex-col gap-4 text-center font-yeseva text-2xl md:text-4xl text-white items-center uppercase">
              <h1 className="text-red-400">{sliderData[currentSlide]?.text}</h1>
              <h2 className="text-sky-600">
                {sliderData[currentSlide]?.subtext}
              </h2>
              <button className="bg-neutral-800 py-4 px-6 w-fit rounded-md hover:bg-transparent hover:border">
                ORDER NOW
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>
    );
};

export default HeroSlider;
