import React from "react";
import { Link, useParams } from "react-router-dom";
import "./styles.css";

export default function Navitem({ page }) {
  const title = page.charAt(0).toUpperCase() + page.slice(1);
  return (
    <Link to={`/${page}`} className="header-link">
      {title}
    </Link>
  );
}
