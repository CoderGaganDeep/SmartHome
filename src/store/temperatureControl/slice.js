import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  thermostat: 20,
};

export const counterSlice = createSlice({
  name: "thermostatSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
  },
});
// BOILERPLATE
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
