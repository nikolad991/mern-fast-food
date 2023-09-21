import React from "react";
import { useParams } from "react-router-dom";
import { useGetOrderQuery } from "../redux/ordersApiSlice";

const Checkout = () => {
  const params = useParams();
  const { data, error, isLoading } = useGetOrderQuery(params.orderId);

  return (
    <div className="w-5/6 mx-auto min-h-screen  ">
      <div className="flex flex-col gap-2 lg:w-1/2 ">
        {data?.items.map((item, index) => (
          <div className="flex  h-32 border border-neutral-300 transition duration-600 hover:border-red-100 hover:bg-red-50 ">
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
      <div>
        <div>Delivery Details</div>
        <div>
          <form action="">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label
                  for="last_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Doe"
                  required
                />
              </div>
              <div>
                <label
                  for="company"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="company"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Your Address"
                  required
                />
              </div>
              <div>
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="123-45-678"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>Total: {data?.total}</div>
    </div>
  );
};

export default Checkout;
