import axios from "axios";
import { lampOn, lampOff } from "./slice";

export async function lampStateThunk(dispatch, getState) {
  try {
    dispatch(lampOn());
    const power = getState().lamps;
    const response = await axios.get(power);
    //console.log("response", response)
    const lamps = response.data.rows;
    dispatch(lampOff(lamps));
  } catch (e) {
    console.log(e.message);
  }
}
