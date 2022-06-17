import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allRadioStations: { genre: "classic rock", power: false },
};

const radioSlice = createSlice({
  name: "radioSlice",
  initialState,
  reducers: {
    radioOn: (state, action) => {
      state.loading = true;
      state.allRadioStations.power = true;
    },
    radioOff: (state, action) => {
      state.loading = false;
      state.allRadioStations.power = false;
    },
  },
});
// remember to export the action creators for the new reducer cases
export const { radioOn, radioOff } = radioSlice.actions;
export default radioSlice.reducer;
