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
      toast.warning(err);
    }
  };
  return (
    <div
      className="p-10 bg-neutral-500
    "
    >
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center gap-3"
      >
        <label htmlFor="email">Subscribe to newsletter</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button type="submit" className="bg-white text-black rounded px-4 py-2">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
