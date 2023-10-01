import { useFormik } from "formik";
import * as Yup from "yup";
import { useSendMessageMutation } from "../redux/contactFormSlice";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [sendMessage, { isLoading }] = useSendMessageMutation();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "First name must have minimum 3 character.")
        .max(35)
        .required("First name is required"),
      email: Yup.string()
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Invalid email format")
        .required("Email is required"),
      phone: Yup.string().required("Phone is required"),
      message: Yup.string()
        .min(10, "Message must have minimum 10 character.")
        .required("Message is required"),
    }),
    onSubmit: async (values) => {
      try {
        const res = await sendMessage(values).unwrap();
        toast.success(res.msg);
      } catch (err) {
        toast.warning(err.error);
      }
    },
  });
  const inputStyle =
    "h-10 w-full border-b-2 px-2 text-white border-red-400 bg-red-100 bg-opacity-25 outline-0 placeholder:px-2 placeholder:text-neutral-200 autofill:bg-green-500";
  const showError = (name) => {
    return (
      formik.errors[name] &&
      formik.touched[name] && (
        <div className="absolute  top-3 right-1 md:top-3 md:right-3 text-red-500  text-xs">
          {formik.errors[name]}
        </div>
      )
    );
  };
  return (
    <div
      className=" p-4 rounded-md  w-[450px] lg:w-[600px] "
      style={{
        background: `linear-gradient(rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)),
  url("https://img.freepik.com/premium-photo/flat-lay-arrangement-with-burgers-pizza_23-2148308817.jpg?w=1380")
    center`,
      }}
    >
      <h3 className="text-white font-semibold text-lg py-1">
        Feel free to leave us a message
      </h3>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
        <div className="relative">
          <label htmlFor="name">{showError("name")}</label>
          <input
            className={inputStyle}
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            onChange={formik.handleChange}
          />
        </div>
        <div className="relative">
          <label htmlFor="email">{showError("email")}</label>
          <input
            className={inputStyle}
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
          />
        </div>
        <div className="relative">
          <label htmlFor="phone">{showError("phone")}</label>
          <input
            className={inputStyle}
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone"
            onChange={formik.handleChange}
          />
        </div>
        <div className="relative">
          <label htmlFor="message">{showError("message")}</label>
          <textarea
            className="h-36 w-full border-b-2 border-red-400 bg-red-100 bg-opacity-25 outline-0 text-white px-2 placeholder:px-2 placeholder:text-neutral-200 autofill:bg-green-500"
            id="message"
            name="message"
            placeholder="Your Message"
            onChange={formik.handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-red-400 text-white font-semibold px-3 py-2 w-fit self-center"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
