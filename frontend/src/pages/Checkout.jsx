import React from "react";
import { useParams } from "react-router-dom";
import { useGetOrderQuery } from "../redux/ordersApiSlice";

const Checkout = () => {
  const params = useParams();
  const { data, error, isLoading } = useGetOrderQuery(params.orderId);

  return (
    <div className="w-5/6 mx-auto min-h-screen  ">
      <div className="flex flex-col gap-2">
        {data?.items.map((item, index) => (
          <div className="flex lg:w-1/2  h-32 border border-neutral-300 transition duration-600 hover:border-red-100 hover:bg-red-50 ">
            <div className="flex w-1/6 h-full">
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
                <div className="flex items-center select-none gap-1 text-lg ">
                  <span>Quantity:</span>

                  <span>{item.quantity}</span>
                </div>
              </div>
              <div className="flex items-center  text-xl gap-2 ">
                <div className="font-semibold">${item.total}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>Total: {data.total}</div>
    </div>
  );
};

export default Checkout;
