import { useFormik } from "formik";
import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useChangePasswordMutation } from "../redux/usersApiSlice";
import { toast } from "react-toastify";
const ChangePasswordForm = () => {
  const [newPasswordHidden, setNewPasswordHidden] = useState(true);
  const [oldPasswordHidden, setOldPasswordHidden] = useState(true);
  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },
    onSubmit: async (values) => {
      try {
        const res = await changePassword(values).unwrap();
        toast.success(res.msg);
      } catch (error) {
        toast.error(error.data.error);
      }
    },
  });

  return (
    <div>
      <h2 className="text-lg py-3">Change Password</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col w-1/2 gap-3">
          <div className="relative">
            <label
              htmlFor="oldPassword"
              className="relative block mb-2 text-sm font-medium text-gray-900 select-none "
            >
              Current password
            </label>
            <input
              type={oldPasswordHidden ? "password" : "text"}
              id="oldPassword"
              name="oldPassword"
              value={formik.values.oldPassword}
              onChange={formik.handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Your Old Password"
              required
            />
            <span
              className="absolute top-10 right-2 z-50 text-xl"
              onClick={() => {
                setOldPasswordHidden(!oldPasswordHidden);
              }}
            >
              {oldPasswordHidden ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </div>
          <div className="relative">
            <label
              htmlFor="newPassword"
              className="relative block mb-2 text-sm font-medium text-gray-900 select-none "
            >
              New Password
            </label>
            <input
              type={newPasswordHidden ? "password" : "text"}
              id="newPassword"
              name="newPassword"
              value={formik.values.newPassword}
              onChange={formik.handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Your New Password"
              required
            />
            <span
              className="absolute top-10 right-2 z-50 text-xl"
              onClick={() => {
                setNewPasswordHidden(!newPasswordHidden);
              }}
            >
              {newPasswordHidden ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </div>
          <div>
            <button
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
