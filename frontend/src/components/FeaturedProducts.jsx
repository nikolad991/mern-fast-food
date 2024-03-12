import { StarIcon } from "@heroicons/react/24/solid";
import { useGetFeaturedProductsQuery } from "../redux/productsApiSlice";
import FeaturedCard from "./FeaturedCard";
import PizzaLoader from "./PizzaLoader";
import { motion } from "framer-motion";
const FeaturedProducts = () => {
  const {
    data: featuredProducts,
    error,
    isLoading,
  } = useGetFeaturedProductsQuery();
  return (
    <section className="bg-red-50 relative overflow-hidden flex flex-col items-center justify-center z-20">
      <div className="bg-gradient-to-b from-sky-900 to-sky-400 w-[1600px] h-[1600px] rounded-full absolute  -z-10 -top-[1200px] group-hover:h-[450px] transition-all duration-700"></div>
      {isLoading && <PizzaLoader />}
      <div className="py-20 flex flex-col items-center text-center gap-4 text-red-500 ">
        <motion.h1
          initial={{ y: 200 }}
          whileInView={{
            y: 0,
            transition: {
              duration: 0.5,
            },
          }}
          className="text-5xl md:text-7xl font-lobster"
        >
          Weekly Specials
        </motion.h1>
        <div className="flex gap-2 h-30 w-48">
          <StarIcon />
          <StarIcon className="scale-150" />
          <StarIcon />
        </div>
      </div>
      <div className=" py-20 flex flex-wrap items-center justify-center">
        {featuredProducts?.map((product, index) => (
          <FeaturedCard product={product} key={product._id} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
