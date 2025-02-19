import React, { useState } from "react";
import "./counter1.css";

const Counter1 = () => {
  const [counter, setCounter] = useState(0);
  const Increment = () => {
    setCounter((prev) => {
      if (prev == 10) {
        alert("You can't Increment further >10");
      } else {
        prev = prev + 1;
      }
      return prev;
    });
  };

  const Decrement = () => {
    setCounter((prev) => {
      if (prev == 0) {
        alert("You can't decrement further");
      } else {
        prev = prev - 1;
      }
      return prev;
    });
  };

  const clear = () => {
    setCounter(0);
  };

  return (
    <div className="count">
      <p className="para">{counter}</p>
      <div>
        <button className="inc_btn" onClick={Increment}>
          Increment
        </button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={clear}>Clear</button>
      </div>
    </div>
  );
};

export default Counter1;
