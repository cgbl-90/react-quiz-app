import { useState } from "react";
import data from "./test.json";
import "./App.css";

export default function TestQuestions() {
  let [grade, setGrade] = useState(0);
  let [order, setOrder] = useState(0);

  function updateOrder(event) {
    event.preventDefault();
    setOrder(order + 1);
  }

  function verifyReply(event) {
    event.preventDefault();
    setOrder(order + 1);
    if (event.target.innerText === data[order - 1].correct) setGrade(grade + 1);
  }

  if (order === data.length) {
    return (
      <div className="card">
        <h1>
          You've got{" "}
          <span className={grade >= data.length / 2 ? "green" : "red"}>
            {grade}
          </span>{" "}
          correct from {data.length}!
        </h1>
        <br />
        <h3>
          I hope you had fun and learned something new! <br />
          Share your feedback about this test, review its code and review all
          questions on GitHub.
        </h3>
      </div>
    );
  } else if (order === 0) {
    return (
      <div className="card">
        <h1>
          Welcome!
          <br />
          We've got some React prep questions for you to prepare before an
          interview. Are you ready?
        </h1>
        <button onClick={updateOrder}>Yes, let's do it!</button>
      </div>
    );
  } else
    return (
      <div className="card">
        <h3> {data[order - 1].question} </h3>
        {data[order - 1].options.map((option) => (
          <button className="btn" onClick={verifyReply}>
            {option}
          </button>
        ))}
      </div>
    );
}
