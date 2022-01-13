import React from "react";
import "./styles.css";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to my Carousel Project</h1>
      <p>A built-in carousel gallery without using additional libraries.</p>
      <p>
        Click <a href="/gallery">here</a> to go to the gallery
      </p>
      <p>Also, feel free to comment in the contact form!</p>
    </div>
  );
}
