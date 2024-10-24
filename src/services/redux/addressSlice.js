import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  defaultAdrress: {},
  customAddress: {},
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setDefaultAddress(state, action) {
      state.defaultAdrress = action.payload;
    },
    setCustomAddress(state, action) {
      state.customAddress = action.payload;
    },
  },
});

export const { setDefaultAddress, setCustomAddress } = addressSlice.actions;
export default addressSlice.reducer;
