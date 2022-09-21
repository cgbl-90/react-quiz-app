import { useState } from "react";
import data from "./test.json";
import "./App.css";

export default function TestQuestions() {
  let [order, setOrder] = useState(0);
  let [replies, setReplies] = useState(null);

  function updateOrder(event) {
    event.preventDefault();
    setOrder(order + 1);
  }

  if (order === 0) {
    return (
      <div className="card">
        <h1>
          Welcome!
          <br />
          We've got some React prep questions for you to prepare for your
          interview. Are you ready?
        </h1>
        <button onClick={updateOrder}>Yes, let's do it!</button>
      </div>
    );
  } else {
    return (
      <div className="card">
        <h3> {data[order - 1].question} </h3>
        {data[order - 1].options.map((option) => (
          <label type="radio">{option}</label>
        ))}
      </div>
    );
  }
}
