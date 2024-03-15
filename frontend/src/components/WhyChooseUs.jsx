import React from "react";
import WhyChooseUsBg from "../assets/whyChooseUsBg.jpg"
import DeliverySvg from "../assets/delivery.svg";
import Delivery247Svg from "../assets/247.svg";
import LoveFoodSvg from "../assets/lovefood.svg";
import BestPriceSvg from "../assets/bestprice.svg";
const WhyChooseUs = () => {
  return (
    <div className="flex text-center items-center justify-evenly bg-neutral-700 text-white h-[500px] bg-blend-overlay bg-cover bg-fixed bg-center " style={{backgroundImage:`url(${WhyChooseUsBg})`}}>
      <div className="w-5/6 mx-auto flex items-center justify-center gap-16 ">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-xl">Hungry Now?</h2>
          <img className="w-20 h-20" src={DeliverySvg} alt="" />
          <h3 className="text-md"> Delivered in Minutes.</h3>
        </div>
        <div className="flex flex-col  items-center justify-center gap-2">
          <h2 className="text-xl">Always Open</h2>
          <img className="w-20 h-20" src={Delivery247Svg} alt="" />
          <h3 className="text-md"> 24/7 Food Delivery.</h3>
        </div>
        <div className="flex flex-col  items-center justify-center gap-2">
          <h2 className="text-xl">Love Food?</h2>
          <img className="w-20 h-20" src={LoveFoodSvg} alt="" />
          <h3 className="text-md"> Treat Yourself.</h3>
        </div>
        <div className="flex flex-col  items-center justify-center  gap-2">
          <h2 className="text-xl">Hungry & Happy! </h2>
          <img className="w-20 h-20" src={BestPriceSvg} alt="" />
          <h3 className="text-md"> Affordable Delivery.</h3>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
