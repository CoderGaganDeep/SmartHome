import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  lampOn,
  lampOff,
} from "/Users/gagan/Code/week5/assesment-week5/SmartHome/src/store/lampControl/slice";
// import { lampStateThunk } from "/Users/gagan/Code/week5/assesment-week5/SmartHome/src/store/lampControl/thunks";
import { lampStateSelector } from "/Users/gagan/Code/week5/assesment-week5/SmartHome/src/store/lampControl/selectors";
import { thermostatSelector } from "/Users/gagan/Code/week5/assesment-week5/SmartHome/src/store/temperatureControl/selectors";
import {
  decrement,
  increment,
  save,
} from "/Users/gagan/Code/week5/assesment-week5/SmartHome/src/store/temperatureControl/slice";
import { radioStateSelector } from "../store/radioControl/selectors";
import { radioOn, radioOff } from "../store/radioControl/slice";
import { addSong } from "../store/radioControl/slice";
import { useState } from "react";

export default function HomePage() {
  const dispatch = useDispatch();

  const lamps = useSelector(lampStateSelector);
  const counter = useSelector(thermostatSelector);
  const radiosel = useSelector(radioStateSelector);

  //   useEffect(() => {
  //     dispatch(lampStateSelector);
  //   }, [dispatch]);
  const [song, setSong] = useState("");
  const submit = (event) => {
    // to make sure that the form does not redirect (which is normal browser behavior)
    event.preventDefault();

    console.log("new song:", song);

    // - dispatch an action that sends the new pizza to the store
    dispatch(addSong(song));

    // - clear the input fields
    setSong("");
  };

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
        <ul>
          {" "}
          <h4>Currently playing: {radiosel.genre}</h4>
          <h4>Radio State: {radiosel.power.toString()}</h4>
          <button onClick={() => dispatch(radioOn())}>Turn Radio On</button>
          <button onClick={() => dispatch(radioOff())}>Turn Radio Off</button>
          <br />
          <br />
        </ul>
        <form onSubmit={submit}>
          <h2>Play a new Genre! Enter below</h2>
          <p>
            <label>
              Name:{" "}
              <input
                type="text"
                value={song}
                onChange={(e) => setSong(e.target.value)}
              />
            </label>
          </p>

          <p>
            <button type="submit">Play this Genre!</button>
          </p>
        </form>
        <br />
      </div>
      <div
        className="home-list"
        style={{ border: "2px solid black", textAlign: "center" }}
      >
        <h2>Temperature control </h2>

        <ul>
          {" "}
          <h4>Current Temperature: {counter}</h4>
          <button onClick={() => dispatch(increment())}>Increase</button>
          <button onClick={() => dispatch(decrement())}>Decrease</button>
          <br />
          <br />
          <h4>New Temperature: {counter}</h4>
          <button onClick={() => dispatch(save())}>
            Save Tempreature Changes{" "}
          </button>
        </ul>
        <br />
      </div>
    </div>
  );
}
