import React, { useState } from "react";
import "./Toggle.css";

const Toggle = () => {
  const [color, setColor] = useState("light");

  const handleChange = () => {
    setColor((prev) => {
      if (prev == "light") return "dark";
      else return "light";
    });
  };
  return (
    <div className={color == "light" ? "light" : "dark"}>
      <button onClick={handleChange}>Change</button>
    </div>
  );
};

export default Toggle;
