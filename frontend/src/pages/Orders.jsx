import { useEffect } from "react";
import { useGetOrdersByUserQuery } from "../redux/ordersApiSlice";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
const Orders = () => {
  const { data, error, isLoading } = useGetOrdersByUserQuery();
  const { userData } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userData) navigate("/login");
  }, []);
  return (
    <section className="w-5/6 mx-auto min-h-screen">
        <Helmet >
        <title>Food Delivery | Orders </title>
      </Helmet>
      <div className="flex flex-col gap-2 md:py-28  ">
        {data?.map((order) => (
          <Link
            to={`/checkout/${order._id}`}
            className="flex flex-col md:flex-row justify-between items-center border py-2 px-4 bg-red-50 hover:bg-red-200"
          >
            <span className="w-fit md:w-36">{order._id}</span>

            <span
              className={`p-2 w-24 text-center rounded-md
                ${
                  order.orderStatus === "Pending"
                    ? "bg-yellow-300"
                    : order.orderStatus === "Confirmed"
                    ? "bg-orange-300"
                    : "bg-green-300"
                }
                  `}
            >
              {order.orderStatus}
            </span>
            <span>
              {moment(order.createdAt).format("Do MMMM YYYY  HH:mm ")}
            </span>
            <span>${order.total}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default Orders;
