import React, { useRef, useState } from "react";
import "./styles.css";

export default function Block({ imgUrl, title }) {
  return (
    <div>
      <img src={imgUrl} className="img-block" alt={title} />
    </div>
  );
}
