import React, { useState } from "react";
import { useSubscribeToNewsletterMutation } from "../redux/subscribersSlice";
import { toast } from "react-toastify";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [subscribeToNewsletter, { isLoading }] =
    useSubscribeToNewsletterMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await subscribeToNewsletter({ email }).unwrap();
      toast.success(res.msg);
    } catch (err) {
      console.log(err.data.error);
      toast.warning(err.data.error);
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold">Subscribe To Newsletter</h2>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center gap-3 relative"
      >
        <input
          className="px-2 py-4 rounded border-none focus:outline-none min-w-full placeholder:text-sm text-sm"
          type="email"
          id="email"
          placeholder="Enter you email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button
          type="submit"
          className="bg-red-600 text-white border border-transparent rounded px-4 py-2 absolute right-2 hover:bg-white hover:text-red-600 hover:border-red-600 transitiond duration-500"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
