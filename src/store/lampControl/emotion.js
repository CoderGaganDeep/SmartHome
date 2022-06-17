import { useSelector } from "react-redux";
import { lampOn } from "./slice";

import { lampStateSelector } from "/Users/gagan/Code/week5/assesment-week5/SmartHome/src/store/lampControl/selectors";

const Emotion = () => {
  const lamps = useSelector(lampStateSelector);
  return <p>{lamps === "" ? "on💡" : "off💡"}</p>;
};

export default Emotion;
