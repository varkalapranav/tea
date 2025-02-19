import React, { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount((prev) => prev + 1);
  };

  const Decrement = () => {
    setCount((prev) => {
      if (prev == 0) {
        alert("value cant be less than zero");
        // return prev;
      } else {
        prev = prev - 1;
      }
      return prev;
    });
  };

  const Clear = () => {
    setCount(0);
  };
  return (
    <div className="Counter_body">
      <p>{count}</p>
      <div>
        <button onClick={Increment}>+</button>
        <button onClick={Decrement}>-</button>
        <button onClick={Clear}>Clear</button>
      </div>
    </div>
  );
};

export default Counter;
