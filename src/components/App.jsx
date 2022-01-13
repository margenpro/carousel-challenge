import React from "react";
import "./App.css";
import Slider from "./Slider/Slider";

function App() {
  return (
    <div className="container">
      <div className="title-container">
        <h1 className="title">My Animals Collection</h1>
      </div>
      <div>
        <Slider></Slider>
      </div>
    </div>
  );
}

export default App;
