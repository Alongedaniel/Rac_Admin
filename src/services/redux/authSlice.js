import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  user: localStorage.getItem("auth") ? localStorage.getItem("auth") : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("auth", JSON.stringify(action.payload));
      toast.success("User Logged In Successfully!");
    },
    logoutUser(state) {
      state.user = null;
      toast.success("User Logged Out!");
      localStorage.removeItem("auth");
    },
    autoLogoutUser(state) {
      state.user = null;
      localStorage.removeItem("auth");
    },
  },
});

export const { setUser, logoutUser, autoLogoutUser } = userSlice.actions;

export default userSlice.reducer;
