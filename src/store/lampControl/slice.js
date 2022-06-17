import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allLamps: [
    { id: 1, power: false },
    { id: 2, power: false },
    { id: 3, power: false },
    { id: 4, power: false },
  ],
  radio: { genre: "classic rock", power: false },
  // thermostat: 20,
};

const lampSlice = createSlice({
  name: "lampsSlice",
  initialState,
  reducers: {
    lampOn: (state, action) => {
      state.loading = true;
      const id = action.payload;

      const foundLamp = state.allLamps.find((o) => o.id === id);
      foundLamp.power = true;
    },
    lampOff: (state, action) => {
      state.loading = false;
      const id = action.payload;

      const foundLamp = state.allLamps.find((o) => o.id === id);
      foundLamp.power = false;
    },
  },
});
// remember to export the action creators for the new reducer cases
export const { lampOn, lampOff } = lampSlice.actions;
export default lampSlice.reducer;
