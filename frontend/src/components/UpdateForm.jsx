import { useFormik } from "formik";
import React from "react";
import { useUpdateMutation } from "../redux/usersApiSlice";
import { toast } from "react-toastify";

const UpdateForm = ({ userData, setDetailsConfirmed }) => {
  const [update, { isLoading }] = useUpdateMutation();
  const formik = useFormik({
    initialValues: {
      firstName: userData?.firstName || "",
      lastName: userData?.lastName || "",
      address: userData?.address || "",
      phoneNumber: userData?.phoneNumber || "",
    },

    onSubmit: async (values) => {
      const user = await update(values).unwrap();
      setDetailsConfirmed(true);
    },
    enableReinitialize: true,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="first_name"
            className="relative block mb-2 text-sm font-medium text-gray-900 "
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Your First Name"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            required
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Last name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Your last name"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            required
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Your Address"
            onChange={formik.handleChange}
            value={formik.values.address}
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Phone number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Your Phone Number"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            required
          />
        </div>
        <button
          onClick={() => {
            toast.success("User details updated");
          }}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-fit px-5 py-2.5 text-center"
        >
          Confirm delivery details
        </button>
      </div>
    </form>
  );
};

export default UpdateForm;
