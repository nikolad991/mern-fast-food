import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:4000/api/products/${params.id}`).then((res) =>
      res.json().then((data) => setProduct(data))
    );
  }, []);

  return (
    <div className="flex items-center h-screen w-5/6 mx-auto">
      <div className="w-1/3 p-2">
        <h1 className="text-2xl font-semibold">{product.name}</h1>
        <span>${product.price}</span>
        <p>{product.description}</p>
      </div>
      <div className="w-1/3 p-2">
        <img src={product.imageUrl} alt="" />
      </div>
      <div className="w-1/3 p-2 flex flex-col gap-6">
        {product?.options?.map((option, index) => (
          <div key={index} className="flex items-center justify-between gap-3">
            {option.name} :
            {option.choices.map((choice, index) => {
              return (
                <button
                  key={index}
                  className={`px-3 py-2  border hover:border-red-600 ${
                    option.default === choice ? "border-red-800" : ""
                  }`}
                >
                  {choice}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleProduct;
