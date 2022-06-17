import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  thermostat: 20,
};

export const counterSlice = createSlice({
  name: "thermostatSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.thermostat = state.thermostat + 1;
    },
    decrement: (state) => {
      state.thermostat = state.thermostat - 1;
    },
    save: (state) => {
      state.thermostat = state.thermostat;
    },
  },
});
// BOILERPLATE
export const { increment, decrement, save } = counterSlice.actions;

export default counterSlice.reducer;
