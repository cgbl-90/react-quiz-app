import { useState } from "react";
import data from "./test.json";
import "./App.css";

export default function TestQuestions() {
  let [order, setOrder] = useState(0);
  let [replies, setReplies] = useState(null);

  function updateOrder(event) {
    event.preventDefault();
    setOrder(1);
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
        <h2>{data[order - 1].question}</h2>
        <button>Next</button>
      </div>
    );
  }
}
