import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const apiUrl = "https://61dddc30f60e8f0017668aca.mockapi.io/api/contacts";

  const handleSubmit = () => {
    const contact = {
      name,
      email,
      comment,
    };
    axios
      .post(apiUrl, contact)
      .then((res) => {
        alert(`Thanks for your comment ${res.data.name}!`);
      })
      .catch((err) => {
        alert("Error trying to save your comment: " + err);
      });
  };

  return (
    <div className="contact">
      <label>Name: </label>
      <input
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <label>Email: </label>
      <input
        type="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Enter your comment"
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
}
