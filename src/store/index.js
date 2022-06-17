import { configureStore } from "@reduxjs/toolkit";
import lampSliceReducer from "./lampControl/slice";
import counterSliceReducer from "./temperatureControl/slice";

const store = configureStore({
  reducer: {
    lampsSlice: lampSliceReducer,
    thermostatSlice: counterSliceReducer,
  },
});
export default store;
