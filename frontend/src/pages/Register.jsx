import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { useRegisterMutation } from "../redux/usersApiSlice";
import { toast } from "react-toastify";
const Register = () => {
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();
  const formik = useFormik({
    initialValues: { firstName: "", lastName: "", password: "", email: "" },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "First name must have minimum 3 character.")
        .max(35)
        .required("First name is required"),
      lastName: Yup.string().min(3).max(35).required("Last name is required"),
      email: Yup.string()
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Invalid email format")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const result = await register(values).unwrap();
        if (result) {
          toast.success(
            "Successfull registration.You can now log in using your username and password."
          );
          navigate("/login");
        }
        toast.success(result);
        console.log(result);
      } catch (error) {
        toast.error(error.data.error);
      }
    },
  });

  const showError = (name) => {
    return (
      formik.errors[name] &&
      formik.touched[name] && (
        <div className="absolute  top-7 right-1 md:top-14 md:right-6 text-red-600 opacity-80 text-xs">
          {formik.errors[name]}
        </div>
      )
    );
  };
  const inputStyle = "border-b-2 border-neutral-400 bg-red-100 outline-0	";
  return (
    <div className="flex min-h-screen items-center py-10 px-2 ">
      <div className="flex flex-col  md:flex-row md:w-5/6 mx-auto  items-center    bg-white rounded-lg overflow-hidden  md:h-[600px]">
        <div
          className="flex  md:w-1/2 h-full flex-col gap-7 justify-around p-12 text-white bg-blue-400 items-center"
          style={{
            background: `linear-gradient(rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)),
          url("https://img.freepik.com/premium-photo/flat-lay-arrangement-with-burgers-pizza_23-2148308817.jpg?w=1380")
            center`,
          }}
        >
          <h1 className="text-5xl font-yeseva text-blue-300">FAST FOOD</h1>
          <h2 className="text-center lg:text-2xl">
            Indulge in the ultimate fast-food experience! Click now to satisfy
            your cravings with our mouthwatering delights delivered right to
            your doorstep. Don't wait, order and enjoy the goodness today!
          </h2>
          <div className="flex flex-col items-center gap-2">
            <span className="text-lg">Do you have an account?</span>
            <Link to="/login">
              <button className="p-2 border-none bg-red-400 text-white font-bold">
                Login
              </button>
            </Link>
          </div>
        </div>
        <div className="flex w-full md:w-1/2 py-10 h-full flex-col justify-center items-center bg-red-100">
          <h1 className="text-2xl">Register</h1>
          <form
            className="flex flex-col justify-around w-2/3 text-lg h-full"
            onSubmit={formik.handleSubmit}
          >
            <label className="relative py-2" htmlFor="firstName">
              {showError("firstName")}
            </label>
            <input
              className={inputStyle}
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            <label className="relative py-2" htmlFor="lastName">
              {showError("lastName")}
            </label>
            <input
              className={inputStyle}
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            <label className="relative py-2" htmlFor="email">
              {showError("email")}
            </label>
            <input
              className={inputStyle}
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <label className="relative py-2" htmlFor="password">
              {showError("password")}
            </label>
            <input
              className={inputStyle}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />

            <button
              type="submit"
              className="w-1/2 p-2 mt-8 self-center border-none bg-red-400 text-white font-bold transition duration-500 hover:bg-red-100 hover:text-red-400  "
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
