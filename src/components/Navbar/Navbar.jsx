import React from "react";
import NavItem from "./Navitem/Navitem";
import "./styles.css";

export default function Navbar() {
  return (
    <div className="header">
      <NavItem page="home" />
      <NavItem page="gallery" />
      <NavItem page="contact" />
    </div>
  );
}
