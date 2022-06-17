import React, { useEffect } from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  lampOn,
  lampOff,
} from "/Users/gagan/Code/week5/assesment-week5/SmartHome/src/store/lampControl/slice";
import { lampStateThunk } from "/Users/gagan/Code/week5/assesment-week5/SmartHome/src/store/lampControl/thunks";
import { lampStateSelector } from "/Users/gagan/Code/week5/assesment-week5/SmartHome/src/store/lampControl/selectors";
import Emotion from "/Users/gagan/Code/week5/assesment-week5/SmartHome/src/store/lampControl/emotion";
import { selectCounter } from "/Users/gagan/Code/week5/assesment-week5/SmartHome/src/store/temperatureControl/selectors";
import {
  decrement,
  increment,
} from "/Users/gagan/Code/week5/assesment-week5/SmartHome/src/store/temperatureControl/slice";

export default function HomePage() {
  const dispatch = useDispatch();

  const lamps = useSelector(lampStateSelector);
  const counter = useSelector(selectCounter);
  useEffect(() => {
    dispatch(lampStateSelector);
  }, [dispatch]);

  return (
    <div
      className="home-list"
      style={{ border: "2px solid black", textAlign: "center" }}
    >
      <h2>Lamps Feed</h2>
      {
        !lamps
          ? "Loading"
          : lamps.map((lamp) => (
              <p style={{ border: "3px solid black" }}>
                <span>Id:{lamp.id} </span>
                <span>Power:{lamp.power} </span>
              </p>
            )) //you can expand this
      }
      <button onClick={() => dispatch(lampStateThunk)}>Load more</button>
      {/* ************* */}
      <h1 style={{ border: "2px solid black", textAlign: "center" }}>
        Smart House Control Pannel!
      </h1>
      <h2>Lamp control</h2>
      <div>
        <p>
          <h4> Lamp 1</h4>
          <button>On</button>
          <button>Off</button>

          <h4> Lamp 2</h4>
          <button>On</button>
          <button>Off</button>

          <h4> Lamp 3</h4>
          {lamps}
          <Emotion />
          <button onClick={() => dispatch(lampOn(lamps.id))}>On</button>
          <button onClick={() => dispatch(lampOff(lamps.id))}>Off</button>
        </p>
      </div>{" "}
      <br /> <br />
      <div
        className="home-list"
        style={{ border: "2px solid black", textAlign: "center" }}
      >
        <h2>Radio control</h2>
        <button onClick={() => dispatch()}>Turn RadioOn</button>
        <br />
        <p>
          Currently Playing: <input type="text" />
          <button onClick={() => dispatch()}>Change Station</button>
        </p>
        <br />
      </div>
      <div
        className="home-list"
        style={{ border: "2px solid black", textAlign: "center" }}
      >
        <h2>Temperature control</h2>
        <h4>Current Temperature: </h4>
        {counter}
        <button onClick={() => dispatch(increment())}>Increase</button>
        <button onClick={() => dispatch(decrement())}>Decrease</button>
        <br />
        <p>
          <button onClick={() => dispatch()}>Save Tempreature Changes </button>
        </p>
        <br />
      </div>
    </div>
  );
}
