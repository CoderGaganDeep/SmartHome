import { configureStore } from "@reduxjs/toolkit";
import lampSliceReducer from "./lampControl/slice";
import counterSliceReducer from "./temperatureControl/slice";
import radioSliceReducer from "./radioControl/slice";

const store = configureStore({
  reducer: {
    lampsSlice: lampSliceReducer,
    thermostatSlice: counterSliceReducer,
    radioSlice: radioSliceReducer,
  },
});
export default store;
