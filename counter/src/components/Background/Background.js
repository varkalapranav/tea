import React, { useState } from "react";
import "./back.css";
const Background = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(Math.round(Math.random() * 256));
    setRed(Math.round(Math.random() * 256));
    setBlue(Math.round(Math.random() * 256));
    setGreen(Math.round(Math.random() * 256));
  };

  return (
    <div
      style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
      className="back"
    >
      <div className="btn">
        <button onClick={handleChange}>Change_Color</button>
      </div>
    </div>
  );
};

export default Background;
