import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  lampOn,
  lampOff,
} from "/Users/gagan/Code/week5/assesment-week5/SmartHome/src/store/lampControl/slice";
// import { lampStateThunk } from "/Users/gagan/Code/week5/assesment-week5/SmartHome/src/store/lampControl/thunks";
import { lampStateSelector } from "/Users/gagan/Code/week5/assesment-week5/SmartHome/src/store/lampControl/selectors";
// import { selectCounter } from "/Users/gagan/Code/week5/assesment-week5/SmartHome/src/store/temperatureControl/selectors";
import {
  decrement,
  increment,
} from "/Users/gagan/Code/week5/assesment-week5/SmartHome/src/store/temperatureControl/slice";
import { useState } from "react";

export default function HomePage() {
  const dispatch = useDispatch();

  const lamps = useSelector(lampStateSelector);
  // const counter = useSelector(selectCounter);

  //   useEffect(() => {
  //     dispatch(lampStateSelector);
  //   }, [dispatch]);

  return (
    <div
      className="home-list"
      style={{ border: "2px solid black", textAlign: "center" }}
    >
      <h1 style={{ border: "2px solid black", textAlign: "center" }}>
        Smart House Control Pannel!
      </h1>
      <h2>Lamps Feed</h2>
      <ul>
        {lamps.map((p) => (
          <li key={p.id}>
            <h4>
              {p.id} - {p.power.toString()}
            </h4>

            <button onClick={() => dispatch(lampOn(p.id))}>On</button>
            <button onClick={() => dispatch(lampOff(p.id))}>Off</button>
          </li>
        ))}
      </ul>
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
        </p>
        <button onClick={() => dispatch()}>Change Station</button>

        <br />
      </div>
      <div
        className="home-list"
        style={{ border: "2px solid black", textAlign: "center" }}
      >
        <h2>Temperature control</h2>
        <h4>Current Temperature: </h4>
        {/* {counter} */}
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
