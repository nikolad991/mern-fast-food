import React from "react";
import HeroSlider from "../components/HeroSlider";
import FeaturedProducts from "../components/FeaturedProducts";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Food Delivery | Home</title>
      </Helmet>
      <HeroSlider />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
