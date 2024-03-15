import React from "react";
import HeroSlider from "../components/HeroSlider";
import FeaturedProducts from "../components/FeaturedProducts";
import { Helmet } from "react-helmet-async";
import FeaturedCard from "../components/FeaturedCard";
import WhyChooseUs from "../components/WhyChooseUs";
import Subscribe from "../components/Subscribe";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Food Delivery | Home</title>
      </Helmet>
      <HeroSlider />
      <FeaturedProducts />
      <WhyChooseUs />
      <Subscribe />
    </div>
  );
};

export default Home;
