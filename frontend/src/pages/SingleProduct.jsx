import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  AiOutlinePlusSquare,
  AiOutlineMinusSquare,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addCartItem } from "../redux/cartSlice";
import { toast } from "react-toastify";
const SingleProduct = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BE_URL}/products/${params.id}`).then((res) =>
      res.json().then((data) => {
        setProduct(data);
      })
    );
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [product, quantity]);

  const calculateTotal = () => {
    let totalPrice = product.price;
    product?.options?.forEach((option) => {
      option?.choices?.forEach((choice, index) => {
        if (choice === option.default) {
          totalPrice += option.additionalPrice * index;
        }
      });
    });
    setTotal((quantity * totalPrice)?.toFixed(2));
  };
  return (
    <div className="flex flex-col lg:flex-row  items-center min-h-screen xl:w-5/6 mx-auto">
      <div className="md:w-1/2 p-2">
        <img src={product.imageUrl} alt="" />
      </div>
      <div className="md:w:1/2 p-2 flex flex-col gap-10">
        <div>
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <span>${product.price}</span>
          <p>{product.description}</p>
        </div>
        <div className=" p-2 flex flex-col gap-6">
          {product?.options?.map((option, index) => {
            const optionIndex = index;
            return (
              <div key={index} className="flex items-center gap-3">
                {option.name} :
                {option.choices.map((choice, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        const newProduct = { ...product };
                        newProduct.options[optionIndex].default = choice;
                        setProduct(newProduct);
                      }}
                      className={`flex flex-col items-center px-3 py-2  border transition duration-500 hover:border-red-600 ${
                        option.default === choice ? "border-red-800" : ""
                      }`}
                    >
                      <span>{choice}</span>

                      <span className="text-sm">
                        (+${option.additionalPrice * index})
                      </span>
                    </button>
                  );
                })}
              </div>
            );
          })}
          <div className="flex gap-10">
            <div className="flex flex-col gap-5 text-xl">
              <div className="flex items-center  gap-5">
                <span>Quantity :</span>
                <div className="flex gap-6 bg-red-100 rounded-md  px-4 py-2 items-center select-none ">
                  <span
                    className="transition duration-500 hover:text-red-500"
                    onClick={() => {
                      if (quantity != 1) setQuantity((prev) => prev - 1);
                    }}
                  >
                    <AiOutlineMinusSquare />
                  </span>
                  <span className="w-5">{quantity}</span>
                  <span
                    className=" transition duration-500 hover:text-red-500"
                    onClick={() => setQuantity((prev) => prev + 1)}
                  >
                    <AiOutlinePlusSquare />
                  </span>
                </div>
              </div>
              <div className="bg-green-400 px-1 py-2 m-1 text-center">
                <span className="font-semibold ">Total price : ${total}</span>
              </div>
            </div>
            <div className="text-xl">
              <button
                className=" flex items-center justify-center border-2 border-yellow-500 rounded px-4 py-10 transition-all duration-500 hover:bg-red-500 hover:text-white hover:border-transparent "
                onClick={() => {
                  const payload = JSON.parse(
                    JSON.stringify({ quantity, product, total })
                  );
                  dispatch(addCartItem(payload));
                  toast.success(`${product.name} added to cart`);
                }}
              >
                <span>Add to cart</span>
                <AiOutlineShoppingCart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
