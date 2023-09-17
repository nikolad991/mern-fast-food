import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userData: localStorage.getItem("food_userInfo")
    ? JSON.parse(localStorage.getItem("food_userInfo"))
    : null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload);
      state.userData = action.payload;
      localStorage.setItem("food_userInfo", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.userData = null;
      localStorage.removeItem("food_userInfo");
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
