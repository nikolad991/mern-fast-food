import { useState, useEffect } from "react";
import {
  AiOutlineDelete,
  AiOutlinePlusSquare,
  AiOutlineMinusSquare,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeCartItem,
} from "../redux/cartSlice";
import { motion } from "framer-motion";
import { useCreateOrderMutation } from "../redux/ordersApiSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const cart = useSelector((state) => state.cart);
  const { userData } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const handleRemove = (id) => {
    console.log(id);
    dispatch(removeCartItem(id));
  };
  useEffect(() => {
    calculateTotalPrice();
  }, [cart]);

  const calculateTotalPrice = () => {
    const totalPrice = cart.reduce((acc, item) => {
      return (acc += +item.total);
    }, 0);
    setTotalPrice(totalPrice.toFixed(2));
  };
  const handleCheckout = async () => {
    try {
      const orderId = await createOrder({
        cart,
        total: totalPrice,
        paymentMethod,
        additionalNotes,
      }).unwrap();
      navigate(`/checkout/${orderId}`);
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div className="min-h-screen flex flex-col-reverse lg:flex-row justify-end gap-10  p-10 ">
      <div className="flex lg:w-2/3 flex-col gap-5  ">
        {cart.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: index * 0.2,
              duration: 0.5,
            }}
            className="flex lg:w-3/4  h-32 border border-neutral-300 transition duration-600 hover:border-red-100 hover:bg-red-50 "
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
                  <span
                    className="cursor-pointer text-2xl hover:text-red-500 "
                    onClick={() => {
                      dispatch(decrementQuantity(item.id));
                    }}
                  >
                    <AiOutlineMinusSquare />
                  </span>
                  <span>{item.quantity}</span>
                  <span
                    className="cursor-pointer text-2xl hover:text-red-500"
                    onClick={() => {
                      dispatch(incrementQuantity(item.id));
                    }}
                  >
                    <AiOutlinePlusSquare />
                  </span>
                </div>
              </div>
              <div className="flex items-center  text-xl gap-2 ">
                <div className="font-semibold">${item.total}</div>
                <div className="p-2 text-red-500 text-3xl cursor-pointer hover:text-white hover:bg-red-500 rounded-full transition duration-500">
                  <AiOutlineDelete onClick={() => handleRemove(item.id)} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="lg:w-1/3 flex flex-col gap-10 items-center">
        <div className="text-3xl">Total: ${totalPrice}</div>
        <div className="flex flex-col gap-3 items-center w-full">
          <textarea
            onChange={(e) => {
              setAdditionalNotes(e.target.value);
            }}
            id="message"
            rows="4"
            class="p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-red-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Additional instructions(optional)..."
          ></textarea>

          <div className="flex gap-4 pt-4 text-lg items-center">
            <label htmlFor="payment_method">Payment Method</label>
            <select
              name="payment_method"
              className="p-2"
              onChange={(e) => {
                setPaymentMethod(e.target.value);
              }}
            >
              <option selected value="Cash">
                Cash
              </option>
              <option value="Card">Card</option>
            </select>
          </div>
        </div>

        {userData ? (
          <button
            className="bg-black text-white px-4 py-2"
            onClick={handleCheckout}
          >
            CHECKOUT
          </button>
        ) : (
          <div className="flex flex-col gap-2">
            <p>You must be logged in to continue</p>
            <Link
              to="/login"
              className="bg-red-400 px-4 py-2 text-white w-fit self-center"
            >
              LOGIN
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
