import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../redux/authSlice";
const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);
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
      <div>
        <div>Profile</div>
        <div>
          Name: {userData.firstName} {userData.lastName}
        </div>
        <div></div>
        <div>Email: {userData.email}</div>
        <button
          className="bg-red-500 text-white px-2 py-1 rounded-sm"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    );
};

export default Profile;
