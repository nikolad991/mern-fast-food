import React from "react";

const ChangePasswordForm = () => {
  return (
    <div>
      <span></span>
      <form action="">
        <div className="flex flex-col w-1/2 gap-3">
          <div>
            <label
              htmlFor="first_name"
              className="relative block mb-2 text-sm font-medium text-gray-900 "
            >
              Current password
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Your First Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="first_name"
              className="relative block mb-2 text-sm font-medium text-gray-900 "
            >
              New Password
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Your First Name"
              required
            />
          </div>
          <div>
            <button
              onClick={() => {
             
              }}
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-fit px-5 py-2.5 text-center"
            >
              Change password
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
