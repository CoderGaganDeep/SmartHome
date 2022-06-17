import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/index";
// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";

export default function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(bootstrapLoginState());
  // }, []);

  return (
    <div>
      <Routes>
        {/* more pages to be added here later */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
