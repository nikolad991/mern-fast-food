import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useConfirmOrderMutation,
  useGetOrderQuery,
} from "../redux/ordersApiSlice";
import { useAuthorizedUserQuery } from "../redux/usersApiSlice";
import { toast } from "react-toastify";
import UpdateForm from "../components/UpdateForm";

const Checkout = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [detailsConfirmed, setDetailsConfirmed] = useState(false);
  const { data, error, isLoading } = useGetOrderQuery(params.orderId);
  const [confirmOrder, { isLoading: confirmOrderIsLoading }] =
    useConfirmOrderMutation();
  const {
    data: userData,
    error: userError,
    isLoading: userIsLoading,
  } = useAuthorizedUserQuery();
  useEffect(() => {
    if (!userData && !isLoading) navigate("/login");
  }, []);
  const handleOrderConfirmation = async () => {
    try {
      const res = await confirmOrder({ orderId: data._id }).unwrap();
      navigate("/");
      toast.success(res.msg);
    } catch (error) {
      toast.warn(error.data.error);
    }
  };
  return (
    <div className="w-5/6 mx-auto min-h-screen  ">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="flex flex-col gap-2 lg:w-1/2 ">
          {data?.items.map((item, index) => (
            <div
              key={item.id}
              className="flex  h-32 border border-neutral-300 transition duration-600 hover:border-red-100 hover:bg-red-50 "
            >
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
        {data?.orderStatus === "Pending" ? (
          <div className="w-1/2 py-10">
            <div>Delivery Details</div>
            <div className="text-2xl py-4 font-semibold">
              Total: ${data?.total}
            </div>
            <div>
              <UpdateForm
                userData={userData}
                setDetailsConfirmed={setDetailsConfirmed}
              />
            </div>
            <div className="flex items-center justify-center py-10">
              {detailsConfirmed && (
                <button
                  className=" text-white text-xl rounded-md px-4 py-2 bg-yellow-600"
                  onClick={handleOrderConfirmation}
                >
                  FINISH ORDER
                </button>
              )}
            </div>
          </div>
        ) : (
          <>Confirmed</>
        )}
      </div>
    </div>
  );
};

export default Checkout;
