import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Slider from "./Slider/Slider";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/gallery" element={<Slider />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
