import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../redux/authSlice";
import { FaRegUserCircle } from "react-icons/fa";
import moment from "moment";
import UpdateForm from "../components/UpdateForm";
import { useAuthorizedUserQuery } from "../redux/usersApiSlice";
import ChangePasswordForm from "../components/ChangePasswordForm";
const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);
  const { data, error, isLoading } = useAuthorizedUserQuery();
  useEffect(() => {
    if (!userData) navigate("/login");
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    toast.info("Logged out...");
    navigate("/");
  };
  if (userData)
    return (
      <section className="flex w-5/6 mx-auto min-h-screen  ">
        <div className="w-1/4 flex flex-col items-center border-r-2">
          <div className="flex w-36 h-36 p-2 text-neutral-500">
            <FaRegUserCircle size="fit" />
          </div>
          <span className="text-lg">{userData.email}</span>
          <span className="text-sm">
            Joined {moment(userData.createdAt).format("Do MMMM YYYY")}
          </span>
          <div className="py-2">
            <button
              className="bg-red-500 text-white px-2 py-1 rounded-sm"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>

        <div className="w-3/4 p-4 flex flex-col">
          <h2 className="text-lg py-3">Change user details</h2>
          <UpdateForm userData={data} />
          <ChangePasswordForm />
        </div>
      </section>
    );
};

export default Profile;
